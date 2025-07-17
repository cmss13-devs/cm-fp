import { Collector, collector } from "../types/collector";

@collector
export class Concurrency extends Collector {
  static get = async () => {
    return `${navigator.hardwareConcurrency}`;
  };
}
