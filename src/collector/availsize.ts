import { Collector, collector } from "../types/collector";

@collector
export class AvailSize extends Collector {
  static get = async () => {
    const { availHeight, availWidth, availLeft, availTop } = window.screen;

    return `${availHeight}:${availWidth}:${availLeft}:${availTop}`;
  };
}
