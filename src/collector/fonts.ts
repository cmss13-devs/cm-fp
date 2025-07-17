import { collector, Collector } from "../types/collector";

@collector
export class Font extends Collector {
  static async get() {
    return (await window.queryLocalFonts())
      .map((font) => font.postscriptName)
      .join("");
  }
}
