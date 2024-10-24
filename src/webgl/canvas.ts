// deno-lint-ignore-file no-explicit-any

import { HTMLElement } from "../dom/element.ts";
import {
  createWindow,
  type CreateWindowOptions,
  type DwmWindow,
  mainloop,
} from "./deps.ts";
import "./renderingContext.ts";

export class WebGLCanvas extends HTMLElement {
  win: DwmWindow;
  #context: WebGLRenderingContext;

  constructor(options: CreateWindowOptions) {
    super();
    this.win = createWindow(Object.assign({
      glVersion: [2, 0],
      gles: true,
    }, options));
    this.#context = new WebGLRenderingContext(this.win);
  }

  get width(): number {
    const size = this.win.size;
    return size.width;
  }

  set width(width: number) {
    const size = this.win.size;
    size.width = width;
    this.win.size = size;
  }

  get height(): number {
    const size = this.win.size;
    return size.height;
  }

  set height(height: number) {
    const size = this.win.size;
    size.height = height;
    this.win.size = size;
  }

  getContext(contextId: "webgl"): WebGLRenderingContext;
  getContext(contextId: string): WebGLRenderingContext | null {
    switch (contextId) {
      case "webgl":
        return this.#context;
      default:
        return null;
    }
  }

  getBoundingClientRect(): {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
  } {
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

  override addEventListener(...args: any[]): void {
    (addEventListener as any)(...args);
  }

  override removeEventListener(...args: any[]): void {
    (removeEventListener as any)(...args);
  }

  async run() {
    await mainloop(() => {
      this.win.swapBuffers();
    }, false);
  }
}
