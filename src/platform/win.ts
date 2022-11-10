import * as Wm from "https://win32.deno.dev/main/UI.WindowsAndMessaging";
import * as Gdi from "https://win32.deno.dev/main/Graphics.Gdi";
import * as Gl from "https://win32.deno.dev/main/Graphics.OpenGL";
import * as Lib from "https://win32.deno.dev/main/System.LibraryLoader";
import {
  GlContext,
  GlContextOptions,
  Platform,
  WindowHandle,
} from "../common.ts";

let wglInstace: Deno.PointerValue;
let wglChoosePixelFormatARB: Deno.PointerValue;
let wglCreateContextAttribsARB: Deno.PointerValue;
let wglSwapIntervalEXT: Deno.PointerValue;

let initalized = false;

export function init() {
  if (initalized) {
    return;
  }

  const wndproca = new Deno.UnsafeCallback(
    {
      parameters: ["pointer", "u32", "pointer", "pointer"],
      result: "pointer",
    } as const,
    (a, b, c, d) => {
      return Wm.DefWindowProcA(a, b, c, d);
    },
  );
  const hInstance = Lib.GetModuleHandleA(null);
  const windowClass = Wm.allocWNDCLASSA({
    style: Wm.CS_HREDRAW | Wm.CS_VREDRAW | Wm.CS_OWNDC,
    lpfnWndProc: wndproca.pointer,
    hInstance,
    lpszClassName: "Dummy_WGL",
  });

  if (!Wm.RegisterClassA(windowClass)) {
    throw new Error("RegisterClassA() failed");
  }

  const dummyWindow = Wm.CreateWindowExA(
    0,
    "Dummy_WGL",
    "Dummy_WGL",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    hInstance,
    0,
  );

  if (!dummyWindow) {
    throw new Error("CreateWindowExA() failed");
  }

  const dummyDC = Gdi.GetDC(dummyWindow)!;

  const pfd = Gl.allocPIXELFORMATDESCRIPTOR({
    nSize: Gl.sizeofPIXELFORMATDESCRIPTOR,
    nVersion: 1,
    iPixelType: Gl.PFD_TYPE_RGBA,
    dwFlags: Gl.PFD_DRAW_TO_WINDOW | Gl.PFD_SUPPORT_OPENGL |
      Gl.PFD_DOUBLEBUFFER,
    cColorBits: 32,
    cAlphaBits: 8,
    iLayerType: Gl.PFD_MAIN_PLANE,
    cDepthBits: 24,
    cStencilBits: 8,
  });

  const pf = Gl.ChoosePixelFormat(dummyDC, pfd);
  if (!pf) {
    throw new Error("ChoosePixelFormat() failed");
  }

  if (!Gl.SetPixelFormat(dummyDC, pf, pfd)) {
    throw new Error("SetPixelFormat() failed");
  }

  const dummyContext = Gl.wglCreateContext(dummyDC);
  if (!dummyContext) {
    throw new Error("wglCreateContext() failed");
  }

  if (!Gl.wglMakeCurrent(dummyDC, dummyContext)) {
    throw new Error("wglMakeCurrent() failed");
  }

  wglChoosePixelFormatARB = Gl.wglGetProcAddress("wglChoosePixelFormatARB")!;
  wglCreateContextAttribsARB = Gl.wglGetProcAddress(
    "wglCreateContextAttribsARB",
  )!;
  wglSwapIntervalEXT = Gl.wglGetProcAddress("wglSwapIntervalEXT")!;

  if (!wglChoosePixelFormatARB) {
    throw new Error("wglGetProcAddress() failed");
  }

  if (!wglCreateContextAttribsARB) {
    throw new Error("wglGetProcAddress() failed");
  }

  if (!wglSwapIntervalEXT) {
    throw new Error("wglGetProcAddress() failed");
  }

  Gl.wglMakeCurrent(dummyDC, null);
  Gl.wglDeleteContext(dummyContext);
  Gdi.ReleaseDC(dummyWindow, dummyDC);
  Wm.DestroyWindow(dummyWindow);

  wndproca.close();

  wglInstace = Lib.LoadLibraryA("opengl32.dll")!;

  initalized = true;
}

export function createContext(
  hwnd: WindowHandle,
  options: GlContextOptions = {},
): GlContext {
  const hdc = Gdi.GetDC(hwnd);
  const pfd = Gl.allocPIXELFORMATDESCRIPTOR({
    nSize: Gl.sizeofPIXELFORMATDESCRIPTOR,
    dwFlags: Gl.PFD_DRAW_TO_WINDOW | Gl.PFD_SUPPORT_OPENGL |
      Gl.GL_DOUBLEBUFFER,
    iPixelType: Gl.PFD_TYPE_RGBA,
    cColorBits: 32,
    cDepthBits: 24,
    iLayerType: Gl.PFD_MAIN_PLANE,
  });

  const pixformat2 = new Int32Array(1);
  const nformats = new Uint32Array(1);

  const pf1 = new Deno.UnsafeFnPointer(
    wglChoosePixelFormatARB!,
    {
      parameters: ["pointer", "buffer", "buffer", "u32", "buffer", "buffer"],
      result: "i32",
    } as const,
  ).call(
    hdc,
    // deno-fmt-ignore
    new Int32Array([
      0x2001, 1,
      0x2010, 1,
      0x2011, 1,
      0x2003, 0x2027,
      0x2013, 0x202B,
      0x2014, 32,
      0x2022, 24,
      0x2023, 8,
      0x2042, options.samples ?? 4, // WGL_SAMPLES_ARB
      0, 0,
    ]),
    null,
    1,
    pixformat2,
    nformats,
  );
  if (pf1 == 0) {
    throw new Error("wglChoosePixelFormatARB() failed");
  }

  Gl.DescribePixelFormat(hdc, pixformat2[0], pfd.byteLength, pfd);

  if (!Gl.SetPixelFormat(hdc, pixformat2[0], pfd)) {
    throw new Error("SetPixelFormat() failed: Cannot set format specified.");
  }

  const hRC = new Deno.UnsafeFnPointer(
    wglCreateContextAttribsARB!,
    {
      parameters: ["pointer", "pointer", "buffer"],
      result: "pointer",
    } as const,
  ).call(
    hdc,
    0,
    // deno-fmt-ignore
    new Int32Array([
      0x2091, options.major ?? 2, // WGL_CONTEXT_MAJOR_VERSION_ARB
      0x2092, options.minor ?? 0, // WGL_CONTEXT_MINOR_VERSION_ARB
      0x9126, options.profile ?? 1, // WGL_CONTEXT_PROFILE_MASK_ARB
      0, 0,
    ]),
  );

  if (!hRC) {
    throw new Error("wglCreateContextAttribsARB() failed");
  }

  if (!Gl.wglMakeCurrent(hdc, hRC)) {
    throw new Error("wglMakeCurrent() failed");
  }

  // Enable VSync
  if (options.vsync !== false) {
    new Deno.UnsafeFnPointer(
      wglSwapIntervalEXT!,
      {
        parameters: ["i32"],
        result: "i32",
      } as const,
    ).call(1);
  }
  return {
    hwnd,
    hdc: hdc!,
    hglrc: hRC,
  };
}

export function makeCurrent(context: GlContext) {
  if (!Gl.wglMakeCurrent(context.hdc!, context.hglrc!)) {
    throw new Error("wglMakeCurrent() failed");
  }
}

export function destroyContext(context: GlContext) {
  Gl.wglMakeCurrent(context.hdc!, null);
  Gl.wglDeleteContext(context.hglrc!);
  Gdi.ReleaseDC(context.hwnd!, context.hdc!);
}

export function swapBuffers(context: GlContext) {
  Gl.SwapBuffers(context.hdc!);
}

export function getProcAddress(name: string): Deno.PointerValue {
  return Gl.wglGetProcAddress(name) ?? Lib.GetProcAddress(wglInstace, name) ??
    0;
}

export const platform: Platform = {
  createContext,
  makeCurrent,
  destroyContext,
  swapBuffers,
  getProcAddress,
  init,
};
