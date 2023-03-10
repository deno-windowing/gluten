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
export const BUFFER_SERIALIZED_MODIFY_APPLE = 0x8a12;
export const BUFFER_FLUSHING_UNMAP_APPLE = 0x8a13;

/// Commands

export const def_glBufferParameteriAPPLE = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glBufferParameteriAPPLE!: Deno.UnsafeFnPointer<typeof def_glBufferParameteriAPPLE>;

export function BufferParameteriAPPLE(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glBufferParameteriAPPLE.call(
    target,
    pname,
    param,
  );
}

export const def_glFlushMappedBufferRangeAPPLE = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedBufferRangeAPPLE!: Deno.UnsafeFnPointer<typeof def_glFlushMappedBufferRangeAPPLE>;

export function FlushMappedBufferRangeAPPLE(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glFlushMappedBufferRangeAPPLE.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBufferParameteriAPPLE = new Deno.UnsafeFnPointer(proc("glBufferParameteriAPPLE")!, def_glBufferParameteriAPPLE);
  fn_glFlushMappedBufferRangeAPPLE = new Deno.UnsafeFnPointer(proc("glFlushMappedBufferRangeAPPLE")!, def_glFlushMappedBufferRangeAPPLE);
}
