import { Collector, collector } from "../types/collector";

@collector
export class Canvas extends Collector {
  static get = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.setAttribute("width", "220");
    canvas.setAttribute("height", "30");

    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("cm-ss13.com 😊 lorem ipsum dolar est", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("cm-ss13.com 😊 lorem ipsum dolar est", 4, 17);

    return canvas.toDataURL();
  };
}
