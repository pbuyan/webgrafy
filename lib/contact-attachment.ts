/**
 * Shared rules for the optional contact-form attachment.
 *
 * Both the client component and the API route need the size cap and the type
 * allowlist — keeping them here is what stops the two validation passes from
 * drifting apart. Every export is pure, so `contact-block.tsx` can import this
 * from the browser bundle; the server-only sniffing helpers tree-shake out.
 */

/**
 * 4 MB. Vercel rejects request bodies over ~4.5 MB before the function is even
 * invoked, so this leaves headroom for the text fields and multipart framing.
 */
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;

/** `accept` attribute for the file input — extensions and MIME types. */
export const ATTACHMENT_ACCEPT =
  ".pdf,.png,.jpg,.jpeg,.webp,application/pdf,image/png,image/jpeg,image/webp";

export type AttachmentKind = "pdf" | "png" | "jpeg" | "webp";

export const ALLOWED_ATTACHMENT_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
] as const;

/** Strip any `;charset=…` parameter and fold the non-standard `image/jpg`. */
function normalizeType(type: string): string {
  const normalized = type.toLowerCase().split(";")[0].trim();
  return normalized === "image/jpg" ? "image/jpeg" : normalized;
}

export function hasAllowedDeclaredType(type: string): boolean {
  return (ALLOWED_ATTACHMENT_TYPES as readonly string[]).includes(normalizeType(type));
}

const EXTENSION_KIND: Record<string, AttachmentKind> = {
  pdf: "pdf",
  png: "png",
  jpg: "jpeg",
  jpeg: "jpeg",
  webp: "webp",
};

export function extensionKind(filename: string): AttachmentKind | null {
  const parts = filename.toLowerCase().split(".");
  if (parts.length < 2) return null;
  return EXTENSION_KIND[parts[parts.length - 1]] ?? null;
}

/** Client-side gate: the declared type and the extension must both check out. */
export function isAllowedAttachment(file: { name: string; type: string }): boolean {
  return hasAllowedDeclaredType(file.type) && extensionKind(file.name) !== null;
}

export type AttachmentSignature = {
  kind: AttachmentKind;
  mime: string;
  ext: string;
};

const SIGNATURES: (AttachmentSignature & { test: (bytes: Uint8Array) => boolean })[] = [
  {
    // "%PDF-"
    kind: "pdf",
    mime: "application/pdf",
    ext: ".pdf",
    test: (b) =>
      b.length >= 5 &&
      b[0] === 0x25 &&
      b[1] === 0x50 &&
      b[2] === 0x44 &&
      b[3] === 0x46 &&
      b[4] === 0x2d,
  },
  {
    kind: "png",
    mime: "image/png",
    ext: ".png",
    test: (b) =>
      b.length >= 8 &&
      b[0] === 0x89 &&
      b[1] === 0x50 &&
      b[2] === 0x4e &&
      b[3] === 0x47 &&
      b[4] === 0x0d &&
      b[5] === 0x0a &&
      b[6] === 0x1a &&
      b[7] === 0x0a,
  },
  {
    // SOI + marker — shared by JFIF, Exif and raw JPEG streams.
    kind: "jpeg",
    mime: "image/jpeg",
    ext: ".jpg",
    test: (b) => b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    // "RIFF" + 4-byte size + "WEBP"
    kind: "webp",
    mime: "image/webp",
    ext: ".webp",
    test: (b) =>
      b.length >= 12 &&
      b[0] === 0x52 &&
      b[1] === 0x49 &&
      b[2] === 0x46 &&
      b[3] === 0x46 &&
      b[8] === 0x57 &&
      b[9] === 0x45 &&
      b[10] === 0x42 &&
      b[11] === 0x50,
  },
];

/**
 * Identify a file by its leading bytes. This is the authoritative check — the
 * MIME type the browser reports is client-supplied and trivially spoofed, so
 * only the file signature decides what a file actually is. 12 bytes suffice.
 */
export function sniffAttachment(bytes: Uint8Array): AttachmentSignature | null {
  for (const { test, ...signature } of SIGNATURES) {
    if (test(bytes)) return signature;
  }
  return null;
}

/**
 * Rebuild a safe filename from a sanitized stem plus the *sniffed* extension,
 * so a PNG can never reach the inbox named `invoice.pdf`.
 *
 * The accent-folding pass keeps French filenames readable (`présentation` →
 * `presentation` rather than `pr_sentation`); a `\p{L}` regex would preserve
 * them outright but needs an ES2018 target, and tsconfig pins ES2017.
 */
export function buildSafeFilename(rawName: string, signature: AttachmentSignature): string {
  const base = rawName.split(/[\\/]/).pop() ?? "";
  const stem = base
    .replace(/\.[^.]*$/, "") // drop the client-supplied extension
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // fold combining accents
    .replace(/[\u0000-\u001f\u007f]/g, "") // control characters
    .replace(/[^A-Za-z0-9._-]+/g, "_")
    .replace(/^[._]+/, "") // no leading dot — avoid hidden files
    .slice(0, 80);

  return `${stem || "attachment"}${signature.ext}`;
}

/** Human-readable size for the notification email (English-only, like the rest of it). */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
