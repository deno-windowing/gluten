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
export const VERTEX_ARRAY_BINDING_OES = 0x85b5;

/// Commands

export const def_glBindVertexArrayOES = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindVertexArrayOES!: Deno.UnsafeFnPointer<typeof def_glBindVertexArrayOES>;

export function BindVertexArrayOES(
  array: GLuint,
): void {
  fn_glBindVertexArrayOES.call(
    array,
  );
}

export const def_glDeleteVertexArraysOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteVertexArraysOES!: Deno.UnsafeFnPointer<typeof def_glDeleteVertexArraysOES>;

export function DeleteVertexArraysOES(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glDeleteVertexArraysOES.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glGenVertexArraysOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenVertexArraysOES!: Deno.UnsafeFnPointer<typeof def_glGenVertexArraysOES>;

export function GenVertexArraysOES(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glGenVertexArraysOES.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glIsVertexArrayOES = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsVertexArrayOES!: Deno.UnsafeFnPointer<typeof def_glIsVertexArrayOES>;

export function IsVertexArrayOES(
  array: GLuint,
): GLboolean {
  return fn_glIsVertexArrayOES.call(
    array,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindVertexArrayOES = new Deno.UnsafeFnPointer(proc("glBindVertexArrayOES")!, def_glBindVertexArrayOES);
  fn_glDeleteVertexArraysOES = new Deno.UnsafeFnPointer(proc("glDeleteVertexArraysOES")!, def_glDeleteVertexArraysOES);
  fn_glGenVertexArraysOES = new Deno.UnsafeFnPointer(proc("glGenVertexArraysOES")!, def_glGenVertexArraysOES);
  fn_glIsVertexArrayOES = new Deno.UnsafeFnPointer(proc("glIsVertexArrayOES")!, def_glIsVertexArrayOES);
}
