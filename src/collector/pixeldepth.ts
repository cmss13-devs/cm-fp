import { Collector, collector } from "../types/collector";

@collector
export class PixelDepth extends Collector {
  static get = async () => {
    return `${window.screen.pixelDepth}`;
  };
}
