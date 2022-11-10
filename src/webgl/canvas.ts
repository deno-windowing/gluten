import { HTMLElement } from "../dom/element.ts";
import { CreateWindowOptions, DwmWindow, createWindow } from "./deps.ts";
import "./renderingContext.ts";

export class WebGLCanvas extends HTMLElement {
  window: DwmWindow;
  #context: WebGLRenderingContext;

  constructor(options: CreateWindowOptions) {
    super();
    this.window = createWindow(options);
    this.#context = new WebGLRenderingContext(this.window);
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

  getContext(contextId: "webgl"): WebGLRenderingContext;
  getContext(contextId: string): WebGLRenderingContext | null {
    switch (contextId) {
      case "webgl":
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
}
