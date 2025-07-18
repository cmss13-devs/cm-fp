import { Collector, collector } from "../types/collector";
import { Return } from "../types/strings";

@collector
export class Bluetooth extends Collector {
  static get = async () => {
    if (await navigator.bluetooth.getAvailability()) {
      return Return.True;
    } else {
      return Return.False;
    }
  };
}
