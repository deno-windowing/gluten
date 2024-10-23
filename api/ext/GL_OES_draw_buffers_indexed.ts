/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;
const isTypedArray = (arr: unknown) =>
  arr instanceof Int8Array || arr instanceof Uint8Array ||
  arr instanceof Int16Array || arr instanceof Uint16Array ||
  arr instanceof Int32Array || arr instanceof Uint32Array ||
  arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(
      Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1),
    );
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

export const def_glEnableiOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableiOES!: Deno.UnsafeFnPointer<typeof def_glEnableiOES>;

export function EnableiOES(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableiOES.call(
    target,
    index,
  );
}

export const def_glDisableiOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableiOES!: Deno.UnsafeFnPointer<typeof def_glDisableiOES>;

export function DisableiOES(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableiOES.call(
    target,
    index,
  );
}

export const def_glBlendEquationiOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationiOES!: Deno.UnsafeFnPointer<
  typeof def_glBlendEquationiOES
>;

export function BlendEquationiOES(
  buf: GLuint,
  mode: GLenum,
): void {
  fn_glBlendEquationiOES.call(
    buf,
    mode,
  );
}

export const def_glBlendEquationSeparateiOES = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationSeparateiOES!: Deno.UnsafeFnPointer<
  typeof def_glBlendEquationSeparateiOES
>;

export function BlendEquationSeparateiOES(
  buf: GLuint,
  modeRGB: GLenum,
  modeAlpha: GLenum,
): void {
  fn_glBlendEquationSeparateiOES.call(
    buf,
    modeRGB,
    modeAlpha,
  );
}

export const def_glBlendFunciOES = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFunciOES!: Deno.UnsafeFnPointer<typeof def_glBlendFunciOES>;

export function BlendFunciOES(
  buf: GLuint,
  src: GLenum,
  dst: GLenum,
): void {
  fn_glBlendFunciOES.call(
    buf,
    src,
    dst,
  );
}

export const def_glBlendFuncSeparateiOES = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncSeparateiOES!: Deno.UnsafeFnPointer<
  typeof def_glBlendFuncSeparateiOES
>;

export function BlendFuncSeparateiOES(
  buf: GLuint,
  srcRGB: GLenum,
  dstRGB: GLenum,
  srcAlpha: GLenum,
  dstAlpha: GLenum,
): void {
  fn_glBlendFuncSeparateiOES.call(
    buf,
    srcRGB,
    dstRGB,
    srcAlpha,
    dstAlpha,
  );
}

export const def_glColorMaskiOES = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColorMaskiOES!: Deno.UnsafeFnPointer<typeof def_glColorMaskiOES>;

export function ColorMaskiOES(
  index: GLuint,
  r: GLboolean,
  g: GLboolean,
  b: GLboolean,
  a: GLboolean,
): void {
  fn_glColorMaskiOES.call(
    index,
    r,
    g,
    b,
    a,
  );
}

export const def_glIsEnablediOES = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnablediOES!: Deno.UnsafeFnPointer<typeof def_glIsEnablediOES>;

export function IsEnablediOES(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnablediOES.call(
    target,
    index,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glEnableiOES = new Deno.UnsafeFnPointer(
    proc("glEnableiOES")!,
    def_glEnableiOES,
  );
  fn_glDisableiOES = new Deno.UnsafeFnPointer(
    proc("glDisableiOES")!,
    def_glDisableiOES,
  );
  fn_glBlendEquationiOES = new Deno.UnsafeFnPointer(
    proc("glBlendEquationiOES")!,
    def_glBlendEquationiOES,
  );
  fn_glBlendEquationSeparateiOES = new Deno.UnsafeFnPointer(
    proc("glBlendEquationSeparateiOES")!,
    def_glBlendEquationSeparateiOES,
  );
  fn_glBlendFunciOES = new Deno.UnsafeFnPointer(
    proc("glBlendFunciOES")!,
    def_glBlendFunciOES,
  );
  fn_glBlendFuncSeparateiOES = new Deno.UnsafeFnPointer(
    proc("glBlendFuncSeparateiOES")!,
    def_glBlendFuncSeparateiOES,
  );
  fn_glColorMaskiOES = new Deno.UnsafeFnPointer(
    proc("glColorMaskiOES")!,
    def_glColorMaskiOES,
  );
  fn_glIsEnablediOES = new Deno.UnsafeFnPointer(
    proc("glIsEnablediOES")!,
    def_glIsEnablediOES,
  );
}
