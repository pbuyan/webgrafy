import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type VisualLabel = { name: string; caption: string };

export function ServiceVisuals({
  eyebrow,
  title,
  text,
  labels,
}: {
  eyebrow: string;
  title: string;
  text: string;
  labels: VisualLabel[];
}) {
  const visuals = [
    LogoVisual,
    StationeryVisual,
    WebsiteVisual,
    PackagingVisual,
    EditorialVisual,
    SocialVisual,
  ];
  const tints = ["bg-tint-1", "bg-tint-2", "bg-tint-3", "bg-tint-2", "bg-tint-1", "bg-tint-3"];

  return (
    <section className="border-b border-stroke bg-white py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-base">{text}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labels.map((label, index) => {
            const Visual = visuals[index % visuals.length];
            const bg = tints[index % tints.length];
            return (
              <article
                key={label.name}
                className="overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
              >
                <div className={`p-4 ${bg}`}>
                  <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-[1.2rem] border border-stroke bg-white/70">
                    <Visual />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                    {label.name}
                  </div>
                  <p className="text-sm leading-7 text-ink-base">{label.caption}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function LogoVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[88px] font-semibold leading-none tracking-[-0.05em] text-ink-strong [font-family:var(--font-display)]">
        W
      </div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-subtle">
        <span>Mark</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-stroke-mid" />
        <span>Wordmark</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-stroke-mid" />
        <span>Monogram</span>
      </div>
    </div>
  );
}

function StationeryVisual() {
  return (
    <svg
      viewBox="0 0 240 170"
      className="h-[170px] w-auto max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Atelier Dorée business card mockup"
    >
      <defs>
        <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5efe5" />
          <stop offset="100%" stopColor="#e3dac9" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.6" />
          <feOffset dx="0" dy="3" result="b" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.22" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(20 22) rotate(-9)" filter="url(#cardShadow)">
        <rect width="140" height="86" rx="3" fill="url(#cardBg)" stroke="#d9d0c5" strokeWidth="0.6" />
        <text
          x="70"
          y="50"
          textAnchor="middle"
          fontSize="18"
          letterSpacing="6"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
        >
          A · D
        </text>
      </g>

      <g transform="translate(72 70) rotate(5)" filter="url(#cardShadow)">
        <rect width="148" height="90" rx="3" fill="#ffffff" stroke="#d9d0c5" strokeWidth="0.6" />
        <text
          x="14"
          y="22"
          fontSize="9"
          letterSpacing="2.4"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
        >
          ATELIER DORÉE
        </text>
        <line x1="14" y1="28" x2="36" y2="28" stroke="#BBA388" strokeWidth="0.9" />
        <text
          x="14"
          y="58"
          fontSize="7.5"
          fill="#2d2925"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
        >
          Camille Lemay
        </text>
        <text x="14" y="68" fontSize="6" fill="#5b534a" style={{ fontFamily: "system-ui, sans-serif" }}>
          Creative Director
        </text>
        <text x="14" y="80" fontSize="6" fill="#5b534a" style={{ fontFamily: "system-ui, sans-serif" }}>
          +1 514 555 0182
        </text>
        <text x="86" y="80" fontSize="6" fill="#5b534a" style={{ fontFamily: "system-ui, sans-serif" }}>
          atelier-doree.ca
        </text>
      </g>
    </svg>
  );
}

function WebsiteVisual() {
  return (
    <svg
      viewBox="0 0 260 168"
      className="h-[168px] w-auto max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sablon Hôtel website on a laptop"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f2a23" />
          <stop offset="55%" stopColor="#5e5346" />
          <stop offset="100%" stopColor="#a4978480" />
        </linearGradient>
      </defs>

      <rect x="22" y="14" width="216" height="128" rx="6" fill="#1f1b18" />
      <rect x="26" y="18" width="208" height="120" rx="2" fill="#ffffff" />

      <rect x="0" y="142" width="260" height="10" rx="2" fill="#d9d0c5" />
      <rect x="100" y="142" width="60" height="3.5" rx="1" fill="#bdb4a8" />
      <rect x="0" y="152" width="260" height="3" fill="#bdb4a8" opacity="0.5" />

      <g transform="translate(26 18)">
        <rect width="208" height="20" fill="#ffffff" />
        <text
          x="12"
          y="14"
          fontSize="9"
          letterSpacing="2"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
        >
          SABLON
        </text>
        <g style={{ fontFamily: "system-ui, sans-serif" }} fill="#5b534a">
          <text x="124" y="13" fontSize="5" letterSpacing="1.2">
            Stay
          </text>
          <text x="146" y="13" fontSize="5" letterSpacing="1.2">
            Dine
          </text>
          <text x="168" y="13" fontSize="5" letterSpacing="1.2">
            Spa
          </text>
          <text x="186" y="13" fontSize="5" letterSpacing="1.2">
            Book
          </text>
        </g>
        <line x1="0" y1="20" x2="208" y2="20" stroke="#efe8df" strokeWidth="0.5" />

        <rect x="0" y="20" width="208" height="64" fill="url(#heroGrad)" />
        <text
          x="14"
          y="62"
          fontSize="11"
          fill="#ffffff"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
        >
          A quiet retreat
        </text>
        <text
          x="14"
          y="76"
          fontSize="11"
          fill="#ffffff"
          style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 500 }}
        >
          in the Laurentians.
        </text>
        <rect x="14" y="80" width="38" height="0.6" fill="#BBA388" />

        <g transform="translate(12 92)">
          <rect width="58" height="36" fill="#efe8df" />
          <rect x="62" width="58" height="36" fill="#ebe3d8" />
          <rect x="124" width="58" height="36" fill="#ded5ca" />
          <rect width="3" height="36" fill="#BBA388" />
          <text
            x="6"
            y="48"
            fontSize="4"
            letterSpacing="1.2"
            fill="#5b534a"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            STAY
          </text>
          <text
            x="68"
            y="48"
            fontSize="4"
            letterSpacing="1.2"
            fill="#5b534a"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            DINE
          </text>
          <text
            x="130"
            y="48"
            fontSize="4"
            letterSpacing="1.2"
            fill="#5b534a"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            SPA
          </text>
        </g>
      </g>
    </svg>
  );
}

function PackagingVisual() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="h-[180px] w-auto max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Verdant Co. fragrance bottle and box"
    >
      <defs>
        <linearGradient id="bottleGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9a8e7d" />
          <stop offset="22%" stopColor="#cfc4b3" />
          <stop offset="50%" stopColor="#e6dccc" />
          <stop offset="78%" stopColor="#cfc4b3" />
          <stop offset="100%" stopColor="#8c8170" />
        </linearGradient>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f1b18" />
          <stop offset="100%" stopColor="#2d2925" />
        </linearGradient>
        <radialGradient id="floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(0,0,0,0.28)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="110" cy="170" rx="78" ry="6" fill="url(#floor)" />

      <g transform="translate(20 48)">
        <rect width="78" height="120" fill="url(#boxGrad)" />
        <rect width="78" height="120" fill="none" stroke="#000" strokeOpacity="0.4" strokeWidth="0.5" />
        <text
          x="39"
          y="54"
          textAnchor="middle"
          fontSize="11"
          letterSpacing="3"
          fill="#ffffff"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
        >
          VERDANT
        </text>
        <line x1="22" y1="60" x2="56" y2="60" stroke="#BBA388" strokeWidth="0.8" />
        <text
          x="39"
          y="70"
          textAnchor="middle"
          fontSize="5"
          letterSpacing="2.5"
          fill="#bba388"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          CO.
        </text>
        <text
          x="39"
          y="100"
          textAnchor="middle"
          fontSize="4.5"
          letterSpacing="1.6"
          fill="#a89c8c"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          EAU FRAÎCHE · 100 ML
        </text>
      </g>

      <g transform="translate(108 28)">
        <rect x="22" y="0" width="28" height="14" fill="#1f1b18" />
        <rect x="20" y="14" width="32" height="4" fill="#0c0c0c" />
        <path
          d="M 18 18 L 54 18 L 60 32 L 60 140 L 12 140 L 12 32 Z"
          fill="url(#bottleGrad)"
          stroke="#a89c8c"
          strokeWidth="0.5"
        />
        <rect x="18" y="58" width="36" height="62" fill="#f7f2ec" stroke="#d9d0c5" strokeWidth="0.4" />
        <text
          x="36"
          y="78"
          textAnchor="middle"
          fontSize="7"
          letterSpacing="1.6"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
        >
          VERDANT
        </text>
        <line x1="28" y1="84" x2="44" y2="84" stroke="#BBA388" strokeWidth="0.5" />
        <text
          x="36"
          y="96"
          textAnchor="middle"
          fontSize="3.6"
          letterSpacing="1.2"
          fill="#5b534a"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          EAU FRAÎCHE
        </text>
        <text
          x="36"
          y="110"
          textAnchor="middle"
          fontSize="4.5"
          fill="#5b534a"
          style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
        >
          no. 04
        </text>
      </g>
    </svg>
  );
}

function EditorialVisual() {
  return (
    <svg
      viewBox="0 0 260 170"
      className="h-[170px] w-auto max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Côté Nord magazine spread"
    >
      <defs>
        <linearGradient id="magPhoto" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d4439" />
          <stop offset="55%" stopColor="#8a7c6c" />
          <stop offset="100%" stopColor="#d4c8b5" />
        </linearGradient>
        <filter id="spreadShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.4" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.18" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#spreadShadow)">
        <rect x="14" y="16" width="115" height="138" fill="#fbf8f3" stroke="#d9d0c5" strokeWidth="0.5" />
        <rect x="131" y="16" width="115" height="138" fill="#fbf8f3" stroke="#d9d0c5" strokeWidth="0.5" />
      </g>
      <rect x="129" y="16" width="2" height="138" fill="#bdb4a8" opacity="0.6" />

      <text
        x="22"
        y="30"
        fontSize="4.2"
        letterSpacing="2.2"
        fill="#7d7468"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        CÔTÉ NORD · ISSUE N°08
      </text>
      <text
        x="22"
        y="58"
        fontSize="14"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
      >
        The slow north
      </text>
      <text
        x="22"
        y="74"
        fontSize="14"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 500 }}
      >
        in winter.
      </text>
      <line x1="22" y1="82" x2="44" y2="82" stroke="#BBA388" strokeWidth="0.8" />

      <g fill="#7d7468">
        <rect x="22" y="92" width="98" height="0.9" />
        <rect x="22" y="97" width="95" height="0.9" />
        <rect x="22" y="102" width="98" height="0.9" />
        <rect x="22" y="107" width="90" height="0.9" />
        <rect x="22" y="112" width="96" height="0.9" />
        <rect x="22" y="117" width="84" height="0.9" />
        <rect x="22" y="126" width="72" height="0.9" />
        <rect x="22" y="131" width="98" height="0.9" />
        <rect x="22" y="136" width="92" height="0.9" />
        <rect x="22" y="141" width="86" height="0.9" />
      </g>
      <text
        x="22"
        y="151"
        fontSize="3.6"
        letterSpacing="1.2"
        fill="#7d7468"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        — 08
      </text>

      <rect x="139" y="26" width="99" height="86" fill="url(#magPhoto)" />
      <text
        x="139"
        y="120"
        fontSize="3.8"
        fill="#7d7468"
        style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
      >
        A frozen lake at first light, Charlevoix.
      </text>
      <text
        x="139"
        y="138"
        fontSize="6.5"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 500 }}
      >
        “Quietness is its
      </text>
      <text
        x="139"
        y="148"
        fontSize="6.5"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 500 }}
      >
        own kind of luxury.”
      </text>
    </svg>
  );
}

function SocialVisual() {
  return (
    <svg
      viewBox="0 0 140 200"
      className="h-[190px] w-auto max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Maisonette Instagram feed on a phone"
    >
      <defs>
        <linearGradient id="t1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dfd4bf" />
          <stop offset="100%" stopColor="#a89c8a" />
        </linearGradient>
        <linearGradient id="t2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a342d" />
          <stop offset="100%" stopColor="#5b5045" />
        </linearGradient>
        <linearGradient id="t3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efe8df" />
          <stop offset="100%" stopColor="#cfc4b3" />
        </linearGradient>
        <linearGradient id="t4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a7c6c" />
          <stop offset="100%" stopColor="#3f3933" />
        </linearGradient>
        <linearGradient id="t5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ded5ca" />
          <stop offset="100%" stopColor="#b8ada0" />
        </linearGradient>
      </defs>

      <rect x="8" y="6" width="124" height="188" rx="16" fill="#1f1b18" />
      <rect x="11" y="9" width="118" height="182" rx="13" fill="#ffffff" />
      <rect x="56" y="9" width="28" height="6" rx="3" fill="#1f1b18" />

      <text x="20" y="26" fontSize="4" fill="#1f1b18" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
        9:41
      </text>
      <text
        x="120"
        y="26"
        textAnchor="end"
        fontSize="4"
        fill="#1f1b18"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        ●●● ▢
      </text>

      <circle cx="26" cy="44" r="9" fill="#ded5ca" stroke="#bba388" strokeWidth="0.8" />
      <text
        x="26"
        y="47"
        textAnchor="middle"
        fontSize="7"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
      >
        M
      </text>
      <text
        x="40"
        y="42"
        fontSize="6"
        fill="#1f1b18"
        style={{ fontFamily: "var(--font-display), serif", fontWeight: 600 }}
      >
        @maisonette
      </text>
      <text
        x="40"
        y="50"
        fontSize="3.6"
        fill="#7d7468"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        2,481 followers · home goods
      </text>

      <line x1="14" y1="60" x2="126" y2="60" stroke="#efe8df" strokeWidth="0.6" />

      <g transform="translate(13 64)">
        <rect width="38" height="38" fill="url(#t1)" />
        <rect x="40" width="38" height="38" fill="url(#t2)" />
        <text
          x="59"
          y="22"
          textAnchor="middle"
          fontSize="11"
          letterSpacing="2"
          fill="#ffffff"
          style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
        >
          M
        </text>
        <rect x="80" width="38" height="38" fill="url(#t3)" />

        <rect y="40" width="38" height="38" fill="url(#t4)" />
        <rect x="40" y="40" width="38" height="38" fill="#efe8df" />
        <text
          x="59"
          y="58"
          textAnchor="middle"
          fontSize="5.5"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          new
        </text>
        <text
          x="59"
          y="66"
          textAnchor="middle"
          fontSize="5.5"
          fill="#1f1b18"
          style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
        >
          arrivals
        </text>
        <line x1="50" y1="70" x2="68" y2="70" stroke="#BBA388" strokeWidth="0.6" />
        <rect x="80" y="40" width="38" height="38" fill="url(#t5)" />

        <rect y="80" width="38" height="38" fill="url(#t3)" />
        <rect x="40" y="80" width="38" height="38" fill="url(#t4)" />
        <rect x="80" y="80" width="38" height="38" fill="url(#t2)" />
      </g>
    </svg>
  );
}
