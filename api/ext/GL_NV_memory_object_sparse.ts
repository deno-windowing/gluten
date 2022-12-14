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

export const def_glBufferPageCommitmentMemNV = {
  parameters: ["u32", "buffer", "isize", "u32", "u64", "u8"],
  result: "void",
} as const;

let fn_glBufferPageCommitmentMemNV!: Deno.UnsafeFnPointer<typeof def_glBufferPageCommitmentMemNV>;

export function BufferPageCommitmentMemNV(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  memory: GLuint,
  memOffset: GLuint64,
  commit: GLboolean,
): void {
  fn_glBufferPageCommitmentMemNV.call(
    target,
    bufferToFFI(offset),
    size,
    memory,
    memOffset,
    commit,
  );
}

export const def_glTexPageCommitmentMemNV = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u64", "u8"],
  result: "void",
} as const;

let fn_glTexPageCommitmentMemNV!: Deno.UnsafeFnPointer<typeof def_glTexPageCommitmentMemNV>;

export function TexPageCommitmentMemNV(
  target: GLenum,
  layer: GLint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  memory: GLuint,
  offset: GLuint64,
  commit: GLboolean,
): void {
  fn_glTexPageCommitmentMemNV.call(
    target,
    layer,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    memory,
    offset,
    commit,
  );
}

export const def_glNamedBufferPageCommitmentMemNV = {
  parameters: ["u32", "buffer", "isize", "u32", "u64", "u8"],
  result: "void",
} as const;

let fn_glNamedBufferPageCommitmentMemNV!: Deno.UnsafeFnPointer<typeof def_glNamedBufferPageCommitmentMemNV>;

export function NamedBufferPageCommitmentMemNV(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  memory: GLuint,
  memOffset: GLuint64,
  commit: GLboolean,
): void {
  fn_glNamedBufferPageCommitmentMemNV.call(
    buffer,
    bufferToFFI(offset),
    size,
    memory,
    memOffset,
    commit,
  );
}

export const def_glTexturePageCommitmentMemNV = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u64", "u8"],
  result: "void",
} as const;

let fn_glTexturePageCommitmentMemNV!: Deno.UnsafeFnPointer<typeof def_glTexturePageCommitmentMemNV>;

export function TexturePageCommitmentMemNV(
  texture: GLuint,
  layer: GLint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  memory: GLuint,
  offset: GLuint64,
  commit: GLboolean,
): void {
  fn_glTexturePageCommitmentMemNV.call(
    texture,
    layer,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    memory,
    offset,
    commit,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBufferPageCommitmentMemNV = new Deno.UnsafeFnPointer(proc("glBufferPageCommitmentMemNV"), def_glBufferPageCommitmentMemNV);
  fn_glTexPageCommitmentMemNV = new Deno.UnsafeFnPointer(proc("glTexPageCommitmentMemNV"), def_glTexPageCommitmentMemNV);
  fn_glNamedBufferPageCommitmentMemNV = new Deno.UnsafeFnPointer(proc("glNamedBufferPageCommitmentMemNV"), def_glNamedBufferPageCommitmentMemNV);
  fn_glTexturePageCommitmentMemNV = new Deno.UnsafeFnPointer(proc("glTexturePageCommitmentMemNV"), def_glTexturePageCommitmentMemNV);
}
