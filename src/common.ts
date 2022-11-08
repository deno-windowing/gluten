export type WindowHandle = Deno.PointerValue;

export interface GlContext {
  hwnd?: Deno.PointerValue;
  hdc?: Deno.PointerValue;
  hglrc?: Deno.PointerValue;
}

export interface Platform {
  init: () => void;
  createContext: (
    window: WindowHandle,
    major?: number,
    minor?: number,
    vsync?: boolean
  ) => GlContext;
  destroyContext: (context: GlContext) => void;
  makeCurrent: (context: GlContext) => void;
  swapBuffers: (context: GlContext) => void;
  getProcAddress: (name: string) => Deno.PointerValue;
}
