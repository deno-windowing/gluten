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
export const ATTACHED_MEMORY_OBJECT_NV = 0x95a4;
export const ATTACHED_MEMORY_OFFSET_NV = 0x95a5;
export const MEMORY_ATTACHABLE_ALIGNMENT_NV = 0x95a6;
export const MEMORY_ATTACHABLE_SIZE_NV = 0x95a7;
export const MEMORY_ATTACHABLE_NV = 0x95a8;
export const DETACHED_MEMORY_INCARNATION_NV = 0x95a9;
export const DETACHED_TEXTURES_NV = 0x95aa;
export const DETACHED_BUFFERS_NV = 0x95ab;
export const MAX_DETACHED_TEXTURES_NV = 0x95ac;
export const MAX_DETACHED_BUFFERS_NV = 0x95ad;

/// Commands

export const def_glGetMemoryObjectDetachedResourcesuivNV = {
  parameters: ["u32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetMemoryObjectDetachedResourcesuivNV!: Deno.UnsafeFnPointer<typeof def_glGetMemoryObjectDetachedResourcesuivNV>;

export function GetMemoryObjectDetachedResourcesuivNV(
  memory: GLuint,
  pname: GLenum,
  first: GLint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glGetMemoryObjectDetachedResourcesuivNV.call(
    memory,
    pname,
    first,
    count,
    bufferToFFI(params),
  );
}

export const def_glResetMemoryObjectParameterNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glResetMemoryObjectParameterNV!: Deno.UnsafeFnPointer<typeof def_glResetMemoryObjectParameterNV>;

export function ResetMemoryObjectParameterNV(
  memory: GLuint,
  pname: GLenum,
): void {
  fn_glResetMemoryObjectParameterNV.call(
    memory,
    pname,
  );
}

export const def_glTexAttachMemoryNV = {
  parameters: ["u32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexAttachMemoryNV!: Deno.UnsafeFnPointer<typeof def_glTexAttachMemoryNV>;

export function TexAttachMemoryNV(
  target: GLenum,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexAttachMemoryNV.call(
    target,
    memory,
    offset,
  );
}

export const def_glBufferAttachMemoryNV = {
  parameters: ["u32", "u32", "u64"],
  result: "void",
} as const;

let fn_glBufferAttachMemoryNV!: Deno.UnsafeFnPointer<typeof def_glBufferAttachMemoryNV>;

export function BufferAttachMemoryNV(
  target: GLenum,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glBufferAttachMemoryNV.call(
    target,
    memory,
    offset,
  );
}

export const def_glTextureAttachMemoryNV = {
  parameters: ["u32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureAttachMemoryNV!: Deno.UnsafeFnPointer<typeof def_glTextureAttachMemoryNV>;

export function TextureAttachMemoryNV(
  texture: GLuint,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureAttachMemoryNV.call(
    texture,
    memory,
    offset,
  );
}

export const def_glNamedBufferAttachMemoryNV = {
  parameters: ["u32", "u32", "u64"],
  result: "void",
} as const;

let fn_glNamedBufferAttachMemoryNV!: Deno.UnsafeFnPointer<typeof def_glNamedBufferAttachMemoryNV>;

export function NamedBufferAttachMemoryNV(
  buffer: GLuint,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glNamedBufferAttachMemoryNV.call(
    buffer,
    memory,
    offset,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetMemoryObjectDetachedResourcesuivNV = new Deno.UnsafeFnPointer(proc("glGetMemoryObjectDetachedResourcesuivNV"), def_glGetMemoryObjectDetachedResourcesuivNV);
  fn_glResetMemoryObjectParameterNV = new Deno.UnsafeFnPointer(proc("glResetMemoryObjectParameterNV"), def_glResetMemoryObjectParameterNV);
  fn_glTexAttachMemoryNV = new Deno.UnsafeFnPointer(proc("glTexAttachMemoryNV"), def_glTexAttachMemoryNV);
  fn_glBufferAttachMemoryNV = new Deno.UnsafeFnPointer(proc("glBufferAttachMemoryNV"), def_glBufferAttachMemoryNV);
  fn_glTextureAttachMemoryNV = new Deno.UnsafeFnPointer(proc("glTextureAttachMemoryNV"), def_glTextureAttachMemoryNV);
  fn_glNamedBufferAttachMemoryNV = new Deno.UnsafeFnPointer(proc("glNamedBufferAttachMemoryNV"), def_glNamedBufferAttachMemoryNV);
}
