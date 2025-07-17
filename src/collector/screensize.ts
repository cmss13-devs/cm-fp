import { Collector, collector } from "../types/collector";

@collector
export class ScreenSize extends Collector {
  static get = async () => {
    const { height, width } = window.screen;

    return `${height}:${width}`;
  };
}
