interface Navigator {
  deviceMemory: number;
  getBattery: () => Promise<{
    charging: number;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  }>;
  userAgentData: {
    getHighEntropyValues: (hints: string[]) => Promise<{
      architecture: string;
      brands: { brand: string; version: string }[];
      mobile: boolean;
      model: string;
      platform: string;
      platformVersion: string;
    }>;
  };
  bluetooth: {
    getAvailability: () => Promise<boolean>;
  };
}

interface Window {
  queryLocalFonts: () => Promise<{ postscriptName: string }[]>;
  getComponents: () => Promise<string>;
  getHash: () => Promise<string>;
}

interface Screen {
  availTop: number;
  availLeft: number;
}
