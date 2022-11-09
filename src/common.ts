export type WindowHandle = Deno.PointerValue;

export interface GlContext {
  hwnd?: Deno.PointerValue;
  hdc?: Deno.PointerValue;
  hglrc?: Deno.PointerValue;
}

export enum GlContextProfile {
  CORE = 0x0001,
  COMPAT = 0x0002,
  ES = 0x0004,
}

export interface GlContextOptions {
  major?: number;
  minor?: number;
  profile?: GlContextProfile;
  samples?: number;
}

export interface Platform {
  init: () => void;
  createContext: (
    window: WindowHandle,
    options?: GlContextOptions,
  ) => GlContext;
  destroyContext: (context: GlContext) => void;
  makeCurrent: (context: GlContext) => void;
  swapBuffers: (context: GlContext) => void;
  getProcAddress: (name: string) => Deno.PointerValue;
}
