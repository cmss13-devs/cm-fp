import { Collector, collector } from "../types/collector";

@collector
export class Language extends Collector {
  static get = async () => {
    return navigator.language;
  };
}
