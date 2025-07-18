interface Navigator {
  deviceMemory: number;
  getBattery: () => Promise<{
    charging: number;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  }>;
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
