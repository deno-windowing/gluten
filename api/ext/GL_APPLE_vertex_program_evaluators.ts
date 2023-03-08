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
export const VERTEX_ATTRIB_MAP1_APPLE = 0x8a00;
export const VERTEX_ATTRIB_MAP2_APPLE = 0x8a01;
export const VERTEX_ATTRIB_MAP1_SIZE_APPLE = 0x8a02;
export const VERTEX_ATTRIB_MAP1_COEFF_APPLE = 0x8a03;
export const VERTEX_ATTRIB_MAP1_ORDER_APPLE = 0x8a04;
export const VERTEX_ATTRIB_MAP1_DOMAIN_APPLE = 0x8a05;
export const VERTEX_ATTRIB_MAP2_SIZE_APPLE = 0x8a06;
export const VERTEX_ATTRIB_MAP2_COEFF_APPLE = 0x8a07;
export const VERTEX_ATTRIB_MAP2_ORDER_APPLE = 0x8a08;
export const VERTEX_ATTRIB_MAP2_DOMAIN_APPLE = 0x8a09;

/// Commands

export const def_glEnableVertexAttribAPPLE = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableVertexAttribAPPLE!: Deno.UnsafeFnPointer<typeof def_glEnableVertexAttribAPPLE>;

export function EnableVertexAttribAPPLE(
  index: GLuint,
  pname: GLenum,
): void {
  fn_glEnableVertexAttribAPPLE.call(
    index,
    pname,
  );
}

export const def_glDisableVertexAttribAPPLE = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableVertexAttribAPPLE!: Deno.UnsafeFnPointer<typeof def_glDisableVertexAttribAPPLE>;

export function DisableVertexAttribAPPLE(
  index: GLuint,
  pname: GLenum,
): void {
  fn_glDisableVertexAttribAPPLE.call(
    index,
    pname,
  );
}

export const def_glIsVertexAttribEnabledAPPLE = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsVertexAttribEnabledAPPLE!: Deno.UnsafeFnPointer<typeof def_glIsVertexAttribEnabledAPPLE>;

export function IsVertexAttribEnabledAPPLE(
  index: GLuint,
  pname: GLenum,
): GLboolean {
  return fn_glIsVertexAttribEnabledAPPLE.call(
    index,
    pname,
  );
}

export const def_glMapVertexAttrib1dAPPLE = {
  parameters: ["u32", "u32", "f64", "f64", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMapVertexAttrib1dAPPLE!: Deno.UnsafeFnPointer<typeof def_glMapVertexAttrib1dAPPLE>;

export function MapVertexAttrib1dAPPLE(
  index: GLuint,
  size: GLuint,
  u1: GLdouble,
  u2: GLdouble,
  stride: GLint,
  order: GLint,
  points: Buffer,
): void {
  fn_glMapVertexAttrib1dAPPLE.call(
    index,
    size,
    u1,
    u2,
    stride,
    order,
    bufferToFFI(points),
  );
}

export const def_glMapVertexAttrib1fAPPLE = {
  parameters: ["u32", "u32", "f32", "f32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMapVertexAttrib1fAPPLE!: Deno.UnsafeFnPointer<typeof def_glMapVertexAttrib1fAPPLE>;

export function MapVertexAttrib1fAPPLE(
  index: GLuint,
  size: GLuint,
  u1: GLfloat,
  u2: GLfloat,
  stride: GLint,
  order: GLint,
  points: Buffer,
): void {
  fn_glMapVertexAttrib1fAPPLE.call(
    index,
    size,
    u1,
    u2,
    stride,
    order,
    bufferToFFI(points),
  );
}

export const def_glMapVertexAttrib2dAPPLE = {
  parameters: ["u32", "u32", "f64", "f64", "i32", "i32", "f64", "f64", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMapVertexAttrib2dAPPLE!: Deno.UnsafeFnPointer<typeof def_glMapVertexAttrib2dAPPLE>;

export function MapVertexAttrib2dAPPLE(
  index: GLuint,
  size: GLuint,
  u1: GLdouble,
  u2: GLdouble,
  ustride: GLint,
  uorder: GLint,
  v1: GLdouble,
  v2: GLdouble,
  vstride: GLint,
  vorder: GLint,
  points: Buffer,
): void {
  fn_glMapVertexAttrib2dAPPLE.call(
    index,
    size,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    bufferToFFI(points),
  );
}

export const def_glMapVertexAttrib2fAPPLE = {
  parameters: ["u32", "u32", "f32", "f32", "i32", "i32", "f32", "f32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMapVertexAttrib2fAPPLE!: Deno.UnsafeFnPointer<typeof def_glMapVertexAttrib2fAPPLE>;

export function MapVertexAttrib2fAPPLE(
  index: GLuint,
  size: GLuint,
  u1: GLfloat,
  u2: GLfloat,
  ustride: GLint,
  uorder: GLint,
  v1: GLfloat,
  v2: GLfloat,
  vstride: GLint,
  vorder: GLint,
  points: Buffer,
): void {
  fn_glMapVertexAttrib2fAPPLE.call(
    index,
    size,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    bufferToFFI(points),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glEnableVertexAttribAPPLE = new Deno.UnsafeFnPointer(proc("glEnableVertexAttribAPPLE")!, def_glEnableVertexAttribAPPLE);
  fn_glDisableVertexAttribAPPLE = new Deno.UnsafeFnPointer(proc("glDisableVertexAttribAPPLE")!, def_glDisableVertexAttribAPPLE);
  fn_glIsVertexAttribEnabledAPPLE = new Deno.UnsafeFnPointer(proc("glIsVertexAttribEnabledAPPLE")!, def_glIsVertexAttribEnabledAPPLE);
  fn_glMapVertexAttrib1dAPPLE = new Deno.UnsafeFnPointer(proc("glMapVertexAttrib1dAPPLE")!, def_glMapVertexAttrib1dAPPLE);
  fn_glMapVertexAttrib1fAPPLE = new Deno.UnsafeFnPointer(proc("glMapVertexAttrib1fAPPLE")!, def_glMapVertexAttrib1fAPPLE);
  fn_glMapVertexAttrib2dAPPLE = new Deno.UnsafeFnPointer(proc("glMapVertexAttrib2dAPPLE")!, def_glMapVertexAttrib2dAPPLE);
  fn_glMapVertexAttrib2fAPPLE = new Deno.UnsafeFnPointer(proc("glMapVertexAttrib2fAPPLE")!, def_glMapVertexAttrib2fAPPLE);
}
