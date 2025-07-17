export abstract class Collector {
  static get: () => Promise<string>;
}

export const collector = (collector: typeof Collector): void => {
  CollectorMetadata.COLLECTORS.push(collector);
};

export class CollectorMetadata {
  static COLLECTORS: (typeof Collector)[] = [];
}
