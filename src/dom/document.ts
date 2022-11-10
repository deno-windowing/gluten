// deno-lint-ignore-file no-explicit-any
import { WebGLCanvas } from "../webgl/canvas.ts";
import { HTMLElement } from "./element.ts";
import { Image } from "./image.ts";

export class DocumentBody extends HTMLElement {}

export class DocumentElement extends HTMLElement {}

export class FakeDocument extends EventTarget {
  documentElement = new DocumentElement();
  body = new DocumentBody();

  createElement(tagName: string) {
    if (tagName === "img") {
      return new Image();
    } else if (tagName === "canvas") {
      return new WebGLCanvas({
        title: "Deno WebGLCanvas",
        width: (globalThis as any)._width ?? 800,
        height: (globalThis as any)._height ?? 600,
        visible: !(globalThis as any).HEADLESS,
      });
    } else {
      return new HTMLElement();
    }
  }

  createElementNS(_namespace: string, tagName: string) {
    return this.createElement(tagName);
  }

  getElementById(_id: string) {
    return new HTMLElement();
  }

  getElementsByTagName(_tagName: string) {
    return [];
  }

  createTextNode(_text: string) {
    return new HTMLElement();
  }
}

export const document = new FakeDocument();

Object.defineProperty(globalThis, "document", {
  value: document,
  writable: false,
});

Object.defineProperties(globalThis, {
  pageXOffset: {
    value: 0,
  },
  pageYOffset: {
    value: 0,
  },
});

declare global {
  const document: FakeDocument;
  class Document extends FakeDocument {}
}
