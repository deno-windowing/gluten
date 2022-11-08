import { HTMLElement } from "./element.ts";

// deno-lint-ignore prefer-const no-unused-vars
let init = false;

export interface CanvasOptions {
  title: string;
  width: number;
  height: number;
  visible?: boolean;
  resizable?: boolean;
}

export class Canvas extends HTMLElement {
  constructor(_options: CanvasOptions) {
    super();
  }
  [Symbol.for("Deno.customInspect")]() {
    return `Canvas {}`;
  }
}
