import { Platform } from "../common.ts";

let platform!: Platform;

switch (Deno.build.os) {
  case "windows":
    platform = await import("./win.ts").then((m) => m.platform);
    break;
  case "linux":
    platform = await import("./linux.ts").then((m) => m.platform);
    break;
  case "darwin":
    platform = await import("./mac.ts").then((m) => m.platform);
    break;
  default:
    throw new Error(`Unsupported platform: ${Deno.build.os}`);
}

const {
  init,
  createContext,
  destroyContext,
  makeCurrent,
  swapBuffers,
  getProcAddress,
} = platform;

export {
  createContext,
  destroyContext,
  getProcAddress,
  init,
  makeCurrent,
  swapBuffers,
};
