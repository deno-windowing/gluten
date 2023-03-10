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
export const MAP_READ_BIT_EXT = 0x1;
export const MAP_WRITE_BIT_EXT = 0x2;
export const MAP_INVALIDATE_RANGE_BIT_EXT = 0x4;
export const MAP_INVALIDATE_BUFFER_BIT_EXT = 0x8;
export const MAP_FLUSH_EXPLICIT_BIT_EXT = 0x10;
export const MAP_UNSYNCHRONIZED_BIT_EXT = 0x20;

/// Commands

export const def_glMapBufferRangeEXT = {
  parameters: ["u32", "buffer", "isize", "u32"],
  result: "buffer",
} as const;

let fn_glMapBufferRangeEXT!: Deno.UnsafeFnPointer<typeof def_glMapBufferRangeEXT>;

export function MapBufferRangeEXT(
  target: GLenum,
  offset: GLintptr,
  length: GLsizeiptr,
  access: GLbitfield,
): Buffer {
  return fn_glMapBufferRangeEXT.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
    access,
  );
}

export const def_glFlushMappedBufferRangeEXT = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedBufferRangeEXT!: Deno.UnsafeFnPointer<typeof def_glFlushMappedBufferRangeEXT>;

export function FlushMappedBufferRangeEXT(
  target: GLenum,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedBufferRangeEXT.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMapBufferRangeEXT = new Deno.UnsafeFnPointer(proc("glMapBufferRangeEXT")!, def_glMapBufferRangeEXT);
  fn_glFlushMappedBufferRangeEXT = new Deno.UnsafeFnPointer(proc("glFlushMappedBufferRangeEXT")!, def_glFlushMappedBufferRangeEXT);
}
