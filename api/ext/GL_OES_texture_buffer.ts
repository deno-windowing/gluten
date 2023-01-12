/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;
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
export const TEXTURE_BUFFER_OES = 0x8c2a;
export const TEXTURE_BUFFER_BINDING_OES = 0x8c2a;
export const MAX_TEXTURE_BUFFER_SIZE_OES = 0x8c2b;
export const TEXTURE_BINDING_BUFFER_OES = 0x8c2c;
export const TEXTURE_BUFFER_DATA_STORE_BINDING_OES = 0x8c2d;
export const TEXTURE_BUFFER_OFFSET_ALIGNMENT_OES = 0x919f;
export const SAMPLER_BUFFER_OES = 0x8dc2;
export const INT_SAMPLER_BUFFER_OES = 0x8dd0;
export const UNSIGNED_INT_SAMPLER_BUFFER_OES = 0x8dd8;
export const IMAGE_BUFFER_OES = 0x9051;
export const INT_IMAGE_BUFFER_OES = 0x905c;
export const UNSIGNED_INT_IMAGE_BUFFER_OES = 0x9067;
export const TEXTURE_BUFFER_OFFSET_OES = 0x919d;
export const TEXTURE_BUFFER_SIZE_OES = 0x919e;

/// Commands

export const def_glTexBufferOES = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTexBufferOES!: Deno.UnsafeFnPointer<typeof def_glTexBufferOES>;

export function TexBufferOES(
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glTexBufferOES.call(
    target,
    internalformat,
    buffer,
  );
}

export const def_glTexBufferRangeOES = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTexBufferRangeOES!: Deno.UnsafeFnPointer<
  typeof def_glTexBufferRangeOES
>;

export function TexBufferRangeOES(
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTexBufferRangeOES.call(
    target,
    internalformat,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexBufferOES = new Deno.UnsafeFnPointer(
    proc("glTexBufferOES"),
    def_glTexBufferOES,
  );
  fn_glTexBufferRangeOES = new Deno.UnsafeFnPointer(
    proc("glTexBufferRangeOES"),
    def_glTexBufferRangeOES,
  );
}
