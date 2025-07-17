interface Navigator {
  deviceMemory: number;
}

interface Window {
  queryLocalFonts: () => Promise<{ postscriptName: string }[]>;
  getHash: () => void;
}

interface Screen {
  availTop: number;
  availLeft: number;
}
