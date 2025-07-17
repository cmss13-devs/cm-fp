import { collector, Collector } from "../types/collector";

@collector
export class WebGlProperties extends Collector {
  static get = async () => {
    const context = document.createElement("canvas").getContext("webgl");
    const debug = context.getExtension("WEBGL_debug_renderer_info");

    return `${context.getParameter(
      debug.UNMASKED_RENDERER_WEBGL
    )}:${context.getParameter(debug.UNMASKED_VENDOR_WEBGL)}`;
  };
}
