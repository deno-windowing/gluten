import type { FakeDocument } from "./document.ts";

export class Element extends EventTarget {
  clientTop = 0;
  clientLeft = 0;
  children = [];
  offsetLeft = 0;
  offsetTop = 0;

  focus() {}

  get ownerDocument(): FakeDocument {
    return (globalThis as unknown as { document: FakeDocument }).document;
  }

  appendChild(_element: Element) {
    // if (element.constructor.name === "Canvas") {
    //   (element as Canvas).show();
    // }
  }
}

export class HTMLElement extends Element {
  style: Record<string, string> = {};

  get title(): string {
    return "";
  }
  set title(_value: string) {}

  setPointerCapture() {}
  releasePointerCapture() {}
}

Object.defineProperty(globalThis, "HTMLElement", {
  value: HTMLElement,
  writable: false,
});

Object.defineProperty(globalThis, "Element", {
  value: Element,
  writable: false,
});

const HTMLElementAlias = HTMLElement;
const ElementAlias = Element;

declare global {
  class HTMLElement extends HTMLElementAlias {}
  class Element extends ElementAlias {}
}
