import { Collector, collector } from "../types/collector";

@collector
export class Timezone extends Collector {
  static get = async () => {
    return new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
  };
}
