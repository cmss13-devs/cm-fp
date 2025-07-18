import { CollectorMetadata } from "./types/collector";
import "./collector/index";

const HASH_VERSION = 2 as const;

window.getHash = async (): Promise<string> => {
  let acquired = "";
  for (const collector of CollectorMetadata.COLLECTORS) {
    acquired += await collector.get();
  }

  const hash = Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(acquired))
    )
  )
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `v${HASH_VERSION}:${hash}`;
};

window.getComponents = async (): Promise<string> => {
  const obj: { [key: string]: string } = {};
  for (const collector of CollectorMetadata.COLLECTORS) {
    obj[collector.name] = await collector.get();
  }

  obj["version"] = `v${HASH_VERSION}`;

  return JSON.stringify(obj, null, 2);
};
