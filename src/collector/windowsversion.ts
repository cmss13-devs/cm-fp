import { Collector, collector } from "../types/collector";

const WIN_RELEASES: Record<string, string> = {
  "0.1.0": "7",
  "0.2.0": "8",
  "0.3.0": "8.1",
  "1.0.0": "10 (1507)",
  "2.0.0": "10 (1511)",
  "3.0.0": "10 (1607)",
  "4.0.0": "10 (1703)",
  "5.0.0": "10 (1709)",
  "6.0.0": "10 (1803)",
  "7.0.0": "10 (1809)",
  "8.0.0": "10 (1903|1909)",
  "10.0.0": "10 (2004|20H2|21H1)",
  "11.0.0": "10",
  "12.0.0": "10",
} as const;

// https://github.com/abrahamjuliot/creepjs/blob/master/src/utils/helpers.ts#L361
@collector
export class WindowsVersion extends Collector {
  static get = async () => {
    const { architecture, platform, platformVersion } =
      await navigator.userAgentData.getHighEntropyValues([
        "platform",
        "platformVersion",
        "architecture",
        "bitness",
        "model",
        "uaFullVersion",
      ]);

    const platformVersionNumber = +(/(\d+)\./.exec(platformVersion) || [])[1];

    let version = platformVersion;
    if (platform === "Windows") {
      version = "Unknown";
      if (platformVersionNumber > 13) {
        version = "11";
      } else if (WIN_RELEASES[platformVersion]) {
        version = WIN_RELEASES[platformVersion];
      }
    }

    return `${platform} ${version} - ${architecture}`;
  };
}
