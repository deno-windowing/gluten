import { createWindow, EventLoop, pollEvents } from "../../dwm/mod.ts";
import * as ctx from "../mod.ts";
import {
  Canvas,
  Image,
} from "https://raw.githubusercontent.com/DjDeveloperr/skia_canvas/windowing/mod.ts";

ctx.init();

const window = createWindow({
  title: "Skia Canvas GPU Renderer",
  width: 800,
  height: 600,
});

const context = ctx.createContext(window.nativeHandle, {
  major: 3,
  minor: 3,
  profile: ctx.GlContextProfile.CORE,
});
const canvas = new Canvas(window.size.width, window.size.height, true);
const cx = canvas.getContext("2d");

const times: number[] = [];
let fps: number;

let mx = 0, my = 0;

addEventListener("mousemove", (e) => {
  mx = e.x;
  // TODO: why
  my = e.y + 45;
});

let img: Image;

async function frame() {
  img = img ??
    await Image.load(
      "https://media.discordapp.net/attachments/776861647322480681/1040939462806470677/IMG_2885.jpg ",
    );
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  cx.fillStyle = "white";
  cx.fillRect(0, 0, 800, 600);
  // cx.drawImage(img, 0, 0);
  cx.fillStyle = "black";
  cx.beginPath();
  cx.arc(mx, my, 10, 0, 2 * Math.PI, false);
  cx.fill();
  cx.fillStyle = "red";
  cx.font = "20px Arial";
  cx.textBaseline = "top";
  cx.textAlign = "left";
  cx.fillText(`FPS: ${fps}`, 10, 50);
  canvas.flush();
  ctx.swapBuffers(context);
}

while (EventLoop.running) {
  await frame();
  pollEvents();
}
