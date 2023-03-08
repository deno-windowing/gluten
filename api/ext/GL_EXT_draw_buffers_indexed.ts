/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
const isTypedArray = (arr: unknown) => arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1));
  }
}

/// Typedefs
export type GLenum = number;
export type GLboolean = number;
export type GLbitfield = number;
/** Not an actual GL type, though used in headers in the past */
export type GLvoid = void;
export type GLbyte = number;
export type GLubyte = number;
export type GLshort = number;
export type GLushort = number;
export type GLint = number;
export type GLuint = number;
export type GLclampx = number;
export type GLsizei = number;
export type GLfloat = number;
export type GLclampf = number;
export type GLdouble = number;
export type GLclampd = number;
export type GLeglClientBufferEXT = Buffer;
export type GLeglImageOES = Buffer;
export type GLchar = number;
export type GLcharARB = number;
export type GLhandleARB = Buffer;
export type GLhalf = number;
export type GLhalfARB = number;
export type GLfixed = number;
export type GLintptr = Buffer;
export type GLintptrARB = Buffer;
export type GLsizeiptr = Deno.PointerValue;
export type GLsizeiptrARB = Deno.PointerValue;
export type GLint64 = Deno.PointerValue;
export type GLint64EXT = Deno.PointerValue;
export type GLuint64 = Deno.PointerValue;
export type GLuint64EXT = Deno.PointerValue;
export type GLsync = Buffer;
export type GLDEBUGPROC = Buffer;
export type GLDEBUGPROCARB = Buffer;
export type GLDEBUGPROCKHR = Buffer;
export type GLDEBUGPROCAMD = Buffer;
export type GLhalfNV = number;
export type GLvdpauSurfaceNV = Buffer;
export type GLVULKANPROCNV = Buffer;

/// Enums
export const BLEND_EQUATION_RGB = 0x8009;
export const BLEND_EQUATION_ALPHA = 0x883d;
export const BLEND_SRC_RGB = 0x80c9;
export const BLEND_SRC_ALPHA = 0x80cb;
export const BLEND_DST_RGB = 0x80c8;
export const BLEND_DST_ALPHA = 0x80ca;
export const COLOR_WRITEMASK = 0xc23;
export const BLEND = 0xbe2;
export const FUNC_ADD = 0x8006;
export const FUNC_SUBTRACT = 0x800a;
export const FUNC_REVERSE_SUBTRACT = 0x800b;
export const MIN = 0x8007;
export const MAX = 0x8008;
export const ZERO = 0x0;
export const ONE = 0x1;
export const SRC_COLOR = 0x300;
export const ONE_MINUS_SRC_COLOR = 0x301;
export const DST_COLOR = 0x306;
export const ONE_MINUS_DST_COLOR = 0x307;
export const SRC_ALPHA = 0x302;
export const ONE_MINUS_SRC_ALPHA = 0x303;
export const DST_ALPHA = 0x304;
export const ONE_MINUS_DST_ALPHA = 0x305;
export const CONSTANT_COLOR = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR = 0x8002;
export const CONSTANT_ALPHA = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA = 0x8004;
export const SRC_ALPHA_SATURATE = 0x308;

/// Commands

export const def_glEnableiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableiEXT!: Deno.UnsafeFnPointer<typeof def_glEnableiEXT>;

export function EnableiEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableiEXT.call(
    target,
    index,
  );
}

export const def_glDisableiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableiEXT!: Deno.UnsafeFnPointer<typeof def_glDisableiEXT>;

export function DisableiEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableiEXT.call(
    target,
    index,
  );
}

export const def_glBlendEquationiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationiEXT!: Deno.UnsafeFnPointer<typeof def_glBlendEquationiEXT>;

export function BlendEquationiEXT(
  buf: GLuint,
  mode: GLenum,
): void {
  fn_glBlendEquationiEXT.call(
    buf,
    mode,
  );
}

export const def_glBlendEquationSeparateiEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationSeparateiEXT!: Deno.UnsafeFnPointer<typeof def_glBlendEquationSeparateiEXT>;

export function BlendEquationSeparateiEXT(
  buf: GLuint,
  modeRGB: GLenum,
  modeAlpha: GLenum,
): void {
  fn_glBlendEquationSeparateiEXT.call(
    buf,
    modeRGB,
    modeAlpha,
  );
}

export const def_glBlendFunciEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFunciEXT!: Deno.UnsafeFnPointer<typeof def_glBlendFunciEXT>;

export function BlendFunciEXT(
  buf: GLuint,
  src: GLenum,
  dst: GLenum,
): void {
  fn_glBlendFunciEXT.call(
    buf,
    src,
    dst,
  );
}

export const def_glBlendFuncSeparateiEXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncSeparateiEXT!: Deno.UnsafeFnPointer<typeof def_glBlendFuncSeparateiEXT>;

export function BlendFuncSeparateiEXT(
  buf: GLuint,
  srcRGB: GLenum,
  dstRGB: GLenum,
  srcAlpha: GLenum,
  dstAlpha: GLenum,
): void {
  fn_glBlendFuncSeparateiEXT.call(
    buf,
    srcRGB,
    dstRGB,
    srcAlpha,
    dstAlpha,
  );
}

export const def_glColorMaskiEXT = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColorMaskiEXT!: Deno.UnsafeFnPointer<typeof def_glColorMaskiEXT>;

export function ColorMaskiEXT(
  index: GLuint,
  r: GLboolean,
  g: GLboolean,
  b: GLboolean,
  a: GLboolean,
): void {
  fn_glColorMaskiEXT.call(
    index,
    r,
    g,
    b,
    a,
  );
}

export const def_glIsEnablediEXT = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnablediEXT!: Deno.UnsafeFnPointer<typeof def_glIsEnablediEXT>;

export function IsEnablediEXT(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnablediEXT.call(
    target,
    index,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glEnableiEXT = new Deno.UnsafeFnPointer(proc("glEnableiEXT")!, def_glEnableiEXT);
  fn_glDisableiEXT = new Deno.UnsafeFnPointer(proc("glDisableiEXT")!, def_glDisableiEXT);
  fn_glBlendEquationiEXT = new Deno.UnsafeFnPointer(proc("glBlendEquationiEXT")!, def_glBlendEquationiEXT);
  fn_glBlendEquationSeparateiEXT = new Deno.UnsafeFnPointer(proc("glBlendEquationSeparateiEXT")!, def_glBlendEquationSeparateiEXT);
  fn_glBlendFunciEXT = new Deno.UnsafeFnPointer(proc("glBlendFunciEXT")!, def_glBlendFunciEXT);
  fn_glBlendFuncSeparateiEXT = new Deno.UnsafeFnPointer(proc("glBlendFuncSeparateiEXT")!, def_glBlendFuncSeparateiEXT);
  fn_glColorMaskiEXT = new Deno.UnsafeFnPointer(proc("glColorMaskiEXT")!, def_glColorMaskiEXT);
  fn_glIsEnablediEXT = new Deno.UnsafeFnPointer(proc("glIsEnablediEXT")!, def_glIsEnablediEXT);
}
