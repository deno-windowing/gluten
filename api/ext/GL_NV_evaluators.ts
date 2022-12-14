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

/// Enums
export const EVAL_2D_NV = 0x86c0;
export const EVAL_TRIANGULAR_2D_NV = 0x86c1;
export const MAP_TESSELLATION_NV = 0x86c2;
export const MAP_ATTRIB_U_ORDER_NV = 0x86c3;
export const MAP_ATTRIB_V_ORDER_NV = 0x86c4;
export const EVAL_FRACTIONAL_TESSELLATION_NV = 0x86c5;
export const EVAL_VERTEX_ATTRIB0_NV = 0x86c6;
export const EVAL_VERTEX_ATTRIB1_NV = 0x86c7;
export const EVAL_VERTEX_ATTRIB2_NV = 0x86c8;
export const EVAL_VERTEX_ATTRIB3_NV = 0x86c9;
export const EVAL_VERTEX_ATTRIB4_NV = 0x86ca;
export const EVAL_VERTEX_ATTRIB5_NV = 0x86cb;
export const EVAL_VERTEX_ATTRIB6_NV = 0x86cc;
export const EVAL_VERTEX_ATTRIB7_NV = 0x86cd;
export const EVAL_VERTEX_ATTRIB8_NV = 0x86ce;
export const EVAL_VERTEX_ATTRIB9_NV = 0x86cf;
export const EVAL_VERTEX_ATTRIB10_NV = 0x86d0;
export const EVAL_VERTEX_ATTRIB11_NV = 0x86d1;
export const EVAL_VERTEX_ATTRIB12_NV = 0x86d2;
export const EVAL_VERTEX_ATTRIB13_NV = 0x86d3;
export const EVAL_VERTEX_ATTRIB14_NV = 0x86d4;
export const EVAL_VERTEX_ATTRIB15_NV = 0x86d5;
export const MAX_MAP_TESSELLATION_NV = 0x86d6;
export const MAX_RATIONAL_EVAL_ORDER_NV = 0x86d7;

/// Commands

export const def_glMapControlPointsNV = {
  parameters: ["u32", "u32", "u32", "i32", "i32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glMapControlPointsNV!: Deno.UnsafeFnPointer<typeof def_glMapControlPointsNV>;

export function MapControlPointsNV(
  target: GLenum,
  index: GLuint,
  type: GLenum,
  ustride: GLsizei,
  vstride: GLsizei,
  uorder: GLint,
  vorder: GLint,
  packed: GLboolean,
  points: Buffer,
): void {
  fn_glMapControlPointsNV.call(
    target,
    index,
    type,
    ustride,
    vstride,
    uorder,
    vorder,
    packed,
    bufferToFFI(points),
  );
}

export const def_glMapParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMapParameterivNV!: Deno.UnsafeFnPointer<typeof def_glMapParameterivNV>;

export function MapParameterivNV(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMapParameterivNV.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMapParameterfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMapParameterfvNV!: Deno.UnsafeFnPointer<typeof def_glMapParameterfvNV>;

export function MapParameterfvNV(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMapParameterfvNV.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapControlPointsNV = {
  parameters: ["u32", "u32", "u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glGetMapControlPointsNV!: Deno.UnsafeFnPointer<typeof def_glGetMapControlPointsNV>;

export function GetMapControlPointsNV(
  target: GLenum,
  index: GLuint,
  type: GLenum,
  ustride: GLsizei,
  vstride: GLsizei,
  packed: GLboolean,
  points: Buffer,
): void {
  fn_glGetMapControlPointsNV.call(
    target,
    index,
    type,
    ustride,
    vstride,
    packed,
    bufferToFFI(points),
  );
}

export const def_glGetMapParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapParameterivNV!: Deno.UnsafeFnPointer<typeof def_glGetMapParameterivNV>;

export function GetMapParameterivNV(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMapParameterivNV.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapParameterfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapParameterfvNV!: Deno.UnsafeFnPointer<typeof def_glGetMapParameterfvNV>;

export function GetMapParameterfvNV(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMapParameterfvNV.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapAttribParameterivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapAttribParameterivNV!: Deno.UnsafeFnPointer<typeof def_glGetMapAttribParameterivNV>;

export function GetMapAttribParameterivNV(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMapAttribParameterivNV.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapAttribParameterfvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapAttribParameterfvNV!: Deno.UnsafeFnPointer<typeof def_glGetMapAttribParameterfvNV>;

export function GetMapAttribParameterfvNV(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMapAttribParameterfvNV.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glEvalMapsNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEvalMapsNV!: Deno.UnsafeFnPointer<typeof def_glEvalMapsNV>;

export function EvalMapsNV(
  target: GLenum,
  mode: GLenum,
): void {
  fn_glEvalMapsNV.call(
    target,
    mode,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMapControlPointsNV = new Deno.UnsafeFnPointer(proc("glMapControlPointsNV"), def_glMapControlPointsNV);
  fn_glMapParameterivNV = new Deno.UnsafeFnPointer(proc("glMapParameterivNV"), def_glMapParameterivNV);
  fn_glMapParameterfvNV = new Deno.UnsafeFnPointer(proc("glMapParameterfvNV"), def_glMapParameterfvNV);
  fn_glGetMapControlPointsNV = new Deno.UnsafeFnPointer(proc("glGetMapControlPointsNV"), def_glGetMapControlPointsNV);
  fn_glGetMapParameterivNV = new Deno.UnsafeFnPointer(proc("glGetMapParameterivNV"), def_glGetMapParameterivNV);
  fn_glGetMapParameterfvNV = new Deno.UnsafeFnPointer(proc("glGetMapParameterfvNV"), def_glGetMapParameterfvNV);
  fn_glGetMapAttribParameterivNV = new Deno.UnsafeFnPointer(proc("glGetMapAttribParameterivNV"), def_glGetMapAttribParameterivNV);
  fn_glGetMapAttribParameterfvNV = new Deno.UnsafeFnPointer(proc("glGetMapAttribParameterfvNV"), def_glGetMapAttribParameterfvNV);
  fn_glEvalMapsNV = new Deno.UnsafeFnPointer(proc("glEvalMapsNV"), def_glEvalMapsNV);
}
