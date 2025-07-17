import { collector, Collector } from "../types/collector";

@collector
export class Memory extends Collector {
  static async get() {
    return `${navigator.deviceMemory}`;
  }
}
