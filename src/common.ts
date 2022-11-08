export type WindowHandle = Deno.PointerValue;

export interface GlContext {
  hwnd?: Deno.PointerValue;
  hdc?: Deno.PointerValue;
  hglrc?: Deno.PointerValue;
}

export interface Platform {
  init: () => void;
  createContext: (window: WindowHandle) => GlContext;
  destroyContext: (context: GlContext) => void;
  makeCurrent: (context: GlContext) => void;
  swapBuffers: (context: GlContext) => void;
  getProcAddress: (name: string) => Deno.PointerValue;
}
