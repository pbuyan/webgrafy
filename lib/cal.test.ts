import { describe, expect, it } from "vitest";
import { parseCalLink } from "./cal";

describe("parseCalLink", () => {
  it("splits a full cal.com URL into slug and origin", () => {
    expect(parseCalLink("https://cal.com/webgrafy/discovery")).toEqual({
      calLink: "webgrafy/discovery",
      calOrigin: "https://cal.com",
    });
  });

  it("keeps a self-hosted origin from a full URL", () => {
    expect(parseCalLink("https://booking.webgrafy.com/team/intro")).toEqual({
      calLink: "team/intro",
      calOrigin: "https://booking.webgrafy.com",
    });
  });

  it("passes through a bare handle/slug with no origin", () => {
    expect(parseCalLink("webgrafy/discovery")).toEqual({
      calLink: "webgrafy/discovery",
    });
  });

  it("strips leading slashes and surrounding whitespace", () => {
    expect(parseCalLink("  /webgrafy/discovery  ")).toEqual({
      calLink: "webgrafy/discovery",
    });
  });
});
