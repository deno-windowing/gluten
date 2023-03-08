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
export const VERTEX_ARRAY_BINDING_APPLE = 0x85b5;

/// Commands

export const def_glBindVertexArrayAPPLE = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindVertexArrayAPPLE!: Deno.UnsafeFnPointer<typeof def_glBindVertexArrayAPPLE>;

export function BindVertexArrayAPPLE(
  array: GLuint,
): void {
  fn_glBindVertexArrayAPPLE.call(
    array,
  );
}

export const def_glDeleteVertexArraysAPPLE = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteVertexArraysAPPLE!: Deno.UnsafeFnPointer<typeof def_glDeleteVertexArraysAPPLE>;

export function DeleteVertexArraysAPPLE(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glDeleteVertexArraysAPPLE.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glGenVertexArraysAPPLE = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenVertexArraysAPPLE!: Deno.UnsafeFnPointer<typeof def_glGenVertexArraysAPPLE>;

export function GenVertexArraysAPPLE(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glGenVertexArraysAPPLE.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glIsVertexArrayAPPLE = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsVertexArrayAPPLE!: Deno.UnsafeFnPointer<typeof def_glIsVertexArrayAPPLE>;

export function IsVertexArrayAPPLE(
  array: GLuint,
): GLboolean {
  return fn_glIsVertexArrayAPPLE.call(
    array,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindVertexArrayAPPLE = new Deno.UnsafeFnPointer(proc("glBindVertexArrayAPPLE")!, def_glBindVertexArrayAPPLE);
  fn_glDeleteVertexArraysAPPLE = new Deno.UnsafeFnPointer(proc("glDeleteVertexArraysAPPLE")!, def_glDeleteVertexArraysAPPLE);
  fn_glGenVertexArraysAPPLE = new Deno.UnsafeFnPointer(proc("glGenVertexArraysAPPLE")!, def_glGenVertexArraysAPPLE);
  fn_glIsVertexArrayAPPLE = new Deno.UnsafeFnPointer(proc("glIsVertexArrayAPPLE")!, def_glIsVertexArrayAPPLE);
}
