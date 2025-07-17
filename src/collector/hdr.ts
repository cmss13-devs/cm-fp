import { Collector, collector } from "../types/collector";
import { Return } from "../types/strings";

@collector
export class Hdr extends Collector {
  static get = async () => {
    if (matchMedia("dynamic-range: high").matches) {
      return Return.True;
    }
    return Return.False;
  };
}
