import { Collector, collector } from "../types/collector";

@collector
export class Devices extends Collector {
  static get = async () => {
    let devices = "";
    for (const device of await navigator.mediaDevices.enumerateDevices()) {
      devices += `${device.constructor.name}-${device.kind}`;
    }

    return devices;
  };
}
