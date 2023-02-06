// deno-lint-ignore-file no-explicit-any

import { HTMLElement } from "../dom/element.ts";
import {
  createWindow,
  CreateWindowOptions,
  DwmWindow,
  mainloop,
} from "./deps.ts";
import "./renderingContext.ts";

export class WebGL2Canvas extends HTMLElement {
  window: DwmWindow;
  #context: WebGL2RenderingContext;

  constructor(options: CreateWindowOptions) {
    super();
    this.window = createWindow(Object.assign({
      glVersion: [3, 0],
      gles: true,
    }, options));
    this.#context = new WebGL2RenderingContext(this.window);
  }

  get width() {
    const size = this.window.size;
    return size.width;
  }

  set width(width: number) {
    const size = this.window.size;
    size.width = width;
    this.window.size = size;
  }

  get height() {
    const size = this.window.size;
    return size.height;
  }

  set height(height: number) {
    const size = this.window.size;
    size.height = height;
    this.window.size = size;
  }

  getContext(contextId: "webgl"): WebGL2RenderingContext;
  getContext(contextId: string): WebGL2RenderingContext | null {
    switch (contextId) {
      case "webgl2":
        return this.#context;
      default:
        return null;
    }
  }

  getBoundingClientRect() {
    return {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      top: 0,
      left: 0,
      bottom: this.height,
      right: this.width,
    };
  }

  addEventListener(...args: any[]): void {
    (addEventListener as any)(...args);
  }

  removeEventListener(...args: any[]): void {
    (removeEventListener as any)(...args);
  }

  async run() {
    await mainloop(() => {
      this.window.swapBuffers();
    }, false);
  }
}
