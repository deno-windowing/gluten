/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  else if (typeof buf === "number" || typeof buf === "bigint") {
    if (buf === 0 || buf === 0n) return null;
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(buf, 1));
  } else if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else {
    return new Uint8Array(buf.buffer);
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

/// Commands

export const def_glBlendFuncIndexedAMD = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncIndexedAMD!: Deno.UnsafeFnPointer<typeof def_glBlendFuncIndexedAMD>;

export function BlendFuncIndexedAMD(
  buf: GLuint,
  src: GLenum,
  dst: GLenum,
): void {
  fn_glBlendFuncIndexedAMD.call(
    buf,
    src,
    dst,
  );
}

export const def_glBlendFuncSeparateIndexedAMD = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncSeparateIndexedAMD!: Deno.UnsafeFnPointer<typeof def_glBlendFuncSeparateIndexedAMD>;

export function BlendFuncSeparateIndexedAMD(
  buf: GLuint,
  srcRGB: GLenum,
  dstRGB: GLenum,
  srcAlpha: GLenum,
  dstAlpha: GLenum,
): void {
  fn_glBlendFuncSeparateIndexedAMD.call(
    buf,
    srcRGB,
    dstRGB,
    srcAlpha,
    dstAlpha,
  );
}

export const def_glBlendEquationIndexedAMD = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationIndexedAMD!: Deno.UnsafeFnPointer<typeof def_glBlendEquationIndexedAMD>;

export function BlendEquationIndexedAMD(
  buf: GLuint,
  mode: GLenum,
): void {
  fn_glBlendEquationIndexedAMD.call(
    buf,
    mode,
  );
}

export const def_glBlendEquationSeparateIndexedAMD = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationSeparateIndexedAMD!: Deno.UnsafeFnPointer<typeof def_glBlendEquationSeparateIndexedAMD>;

export function BlendEquationSeparateIndexedAMD(
  buf: GLuint,
  modeRGB: GLenum,
  modeAlpha: GLenum,
): void {
  fn_glBlendEquationSeparateIndexedAMD.call(
    buf,
    modeRGB,
    modeAlpha,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBlendFuncIndexedAMD = new Deno.UnsafeFnPointer(proc("glBlendFuncIndexedAMD"), def_glBlendFuncIndexedAMD);
  fn_glBlendFuncSeparateIndexedAMD = new Deno.UnsafeFnPointer(proc("glBlendFuncSeparateIndexedAMD"), def_glBlendFuncSeparateIndexedAMD);
  fn_glBlendEquationIndexedAMD = new Deno.UnsafeFnPointer(proc("glBlendEquationIndexedAMD"), def_glBlendEquationIndexedAMD);
  fn_glBlendEquationSeparateIndexedAMD = new Deno.UnsafeFnPointer(proc("glBlendEquationSeparateIndexedAMD"), def_glBlendEquationSeparateIndexedAMD);
}
