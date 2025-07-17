import { Collector, collector } from "../types/collector";

@collector
export class ColorDepth extends Collector {
  static get = async () => {
    return `${window.screen.colorDepth}`;
  };
}
