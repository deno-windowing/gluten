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
export const SPARSE_STORAGE_BIT_ARB = 0x400;
export const SPARSE_BUFFER_PAGE_SIZE_ARB = 0x82f8;

/// Commands

export const def_glBufferPageCommitmentARB = {
  parameters: ["u32", "buffer", "isize", "u8"],
  result: "void",
} as const;

let fn_glBufferPageCommitmentARB!: Deno.UnsafeFnPointer<typeof def_glBufferPageCommitmentARB>;

export function BufferPageCommitmentARB(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  commit: GLboolean,
): void {
  fn_glBufferPageCommitmentARB.call(
    target,
    bufferToFFI(offset),
    size,
    commit,
  );
}

export const def_glNamedBufferPageCommitmentEXT = {
  parameters: ["u32", "buffer", "isize", "u8"],
  result: "void",
} as const;

let fn_glNamedBufferPageCommitmentEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferPageCommitmentEXT>;

export function NamedBufferPageCommitmentEXT(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  commit: GLboolean,
): void {
  fn_glNamedBufferPageCommitmentEXT.call(
    buffer,
    bufferToFFI(offset),
    size,
    commit,
  );
}

export const def_glNamedBufferPageCommitmentARB = {
  parameters: ["u32", "buffer", "isize", "u8"],
  result: "void",
} as const;

let fn_glNamedBufferPageCommitmentARB!: Deno.UnsafeFnPointer<typeof def_glNamedBufferPageCommitmentARB>;

export function NamedBufferPageCommitmentARB(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  commit: GLboolean,
): void {
  fn_glNamedBufferPageCommitmentARB.call(
    buffer,
    bufferToFFI(offset),
    size,
    commit,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBufferPageCommitmentARB = new Deno.UnsafeFnPointer(proc("glBufferPageCommitmentARB"), def_glBufferPageCommitmentARB);
  fn_glNamedBufferPageCommitmentEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferPageCommitmentEXT"), def_glNamedBufferPageCommitmentEXT);
  fn_glNamedBufferPageCommitmentARB = new Deno.UnsafeFnPointer(proc("glNamedBufferPageCommitmentARB"), def_glNamedBufferPageCommitmentARB);
}
