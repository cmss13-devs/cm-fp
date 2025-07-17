import { Collector, collector } from "../types/collector";

@collector
export class Latency extends Collector {
  static get = async () => {
    return `${new AudioContext().baseLatency}`;
  };
}
