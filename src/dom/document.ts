// deno-lint-ignore-file no-explicit-any
import { WebGLCanvas } from "../webgl/canvas.ts";
import { HTMLElement } from "./element.ts";
import { Image } from "./image.ts";

export class DocumentBody extends HTMLElement {}

export class DocumentElement extends HTMLElement {}

export class FakeDocument extends EventTarget {
  documentElement: DocumentElement = new DocumentElement();
  body: DocumentBody = new DocumentBody();

  createElement(tagName: string): WebGLCanvas | HTMLElement {
    switch (tagName) {
      case "img":
        return new Image();
      case "canvas":
        return new WebGLCanvas({
          title: "Deno WebGLCanvas",
          width: (globalThis as any)._width ?? 800,
          height: (globalThis as any)._height ?? 600,
          visible: !(globalThis as any).HEADLESS,
        });
      default:
        return new HTMLElement();
    }
  }

  createElementNS(
    _namespace: string,
    tagName: string,
  ): WebGLCanvas | HTMLElement {
    return this.createElement(tagName);
  }

  getElementById(_id: string): HTMLElement | null {
    return new HTMLElement();
  }

  getElementsByTagName(_tagName: string): HTMLElement[] {
    return [];
  }

  createTextNode(_text: string): HTMLElement {
    return new HTMLElement();
  }
}

export const document: FakeDocument = new FakeDocument();

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
