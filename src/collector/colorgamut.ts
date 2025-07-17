import { collector, Collector } from "../types/collector";

@collector
export class Gamut extends Collector {
  static get = async () => {
    // In priority order, as rec2020 supersedes p3 which supersedes sRGB
    for (const gamut of ["rec2020", "p3", "srgb"] as const) {
      if (matchMedia(`(color-gamut: ${gamut})`).matches) {
        return gamut;
      }
    }
  };
}
