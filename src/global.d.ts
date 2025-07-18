interface Navigator {
  deviceMemory: number;
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
