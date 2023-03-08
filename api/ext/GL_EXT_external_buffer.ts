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

/// Commands

export const def_glBufferStorageExternalEXT = {
  parameters: ["u32", "buffer", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glBufferStorageExternalEXT!: Deno.UnsafeFnPointer<typeof def_glBufferStorageExternalEXT>;

export function BufferStorageExternalEXT(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  clientBuffer: GLeglClientBufferEXT,
  flags: GLbitfield,
): void {
  fn_glBufferStorageExternalEXT.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(clientBuffer),
    flags,
  );
}

export const def_glNamedBufferStorageExternalEXT = {
  parameters: ["u32", "buffer", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferStorageExternalEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferStorageExternalEXT>;

export function NamedBufferStorageExternalEXT(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  clientBuffer: GLeglClientBufferEXT,
  flags: GLbitfield,
): void {
  fn_glNamedBufferStorageExternalEXT.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(clientBuffer),
    flags,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBufferStorageExternalEXT = new Deno.UnsafeFnPointer(proc("glBufferStorageExternalEXT")!, def_glBufferStorageExternalEXT);
  fn_glNamedBufferStorageExternalEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferStorageExternalEXT")!, def_glNamedBufferStorageExternalEXT);
}
