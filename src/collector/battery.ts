import { Collector, collector } from "../types/collector";
import { Return } from "../types/strings";

@collector
export class Battery extends Collector {
  static get = async () => {
    const battery = await navigator.getBattery();

    if (battery.level !== 1) {
      return Return.True;
    }

    if (!Number.isFinite(battery.chargingTime)) {
      return Return.True;
    }

    if (battery.charging && battery.level === 1 && battery.chargingTime === 0) {
      return Return.False;
    }

    return "";
  };
}
