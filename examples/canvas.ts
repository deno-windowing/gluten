import {
  createWindow,
  pollEvents,
} from "https://raw.githubusercontent.com/DjDeveloperr/dwm/main/mod.ts";
import * as ctx from "../mod.ts";
import { Canvas } from "../../../skia_canvas/mod.ts";

ctx.init();

const window = createWindow({
  title: "Skia Canvas GPU Renderer",
  width: 800,
  height: 600,
});

const context = ctx.createContext(window.nativeHandle, 3, 2);
const canvas = new Canvas(800, 600, true);
const cx = canvas.getContext("2d");

const times: number[] = [];
let fps: number;

addEventListener("redrawRequested", () => {
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  cx.fillStyle = "white";
  cx.fillRect(0, 0, 800, 600);
  cx.fillStyle = "black";
  cx.fillRect(100, 100, 400, 300);
  cx.fillStyle = "red";
  cx.font = "20px Arial";
  cx.textBaseline = "top";
  cx.textAlign = "left";
  cx.fillText(`FPS: ${fps}`, 10, 50);
  canvas.flush();
  ctx.swapBuffers(context);
});

while (!window.closed) {
  pollEvents();
}
