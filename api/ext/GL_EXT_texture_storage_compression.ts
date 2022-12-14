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
export const SURFACE_COMPRESSION_EXT = 0x96c0;
export const NUM_SURFACE_COMPRESSION_FIXED_RATES_EXT = 0x8f6e;
export const SURFACE_COMPRESSION_FIXED_RATE_NONE_EXT = 0x96c1;
export const SURFACE_COMPRESSION_FIXED_RATE_DEFAULT_EXT = 0x96c2;
export const SURFACE_COMPRESSION_FIXED_RATE_1BPC_EXT = 0x96c4;
export const SURFACE_COMPRESSION_FIXED_RATE_2BPC_EXT = 0x96c5;
export const SURFACE_COMPRESSION_FIXED_RATE_3BPC_EXT = 0x96c6;
export const SURFACE_COMPRESSION_FIXED_RATE_4BPC_EXT = 0x96c7;
export const SURFACE_COMPRESSION_FIXED_RATE_5BPC_EXT = 0x96c8;
export const SURFACE_COMPRESSION_FIXED_RATE_6BPC_EXT = 0x96c9;
export const SURFACE_COMPRESSION_FIXED_RATE_7BPC_EXT = 0x96ca;
export const SURFACE_COMPRESSION_FIXED_RATE_8BPC_EXT = 0x96cb;
export const SURFACE_COMPRESSION_FIXED_RATE_9BPC_EXT = 0x96cc;
export const SURFACE_COMPRESSION_FIXED_RATE_10BPC_EXT = 0x96cd;
export const SURFACE_COMPRESSION_FIXED_RATE_11BPC_EXT = 0x96ce;
export const SURFACE_COMPRESSION_FIXED_RATE_12BPC_EXT = 0x96cf;

/// Commands

export const def_glTexStorageAttribs2DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTexStorageAttribs2DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageAttribs2DEXT>;

export function TexStorageAttribs2DEXT(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  attrib_list: Buffer,
): void {
  fn_glTexStorageAttribs2DEXT.call(
    target,
    levels,
    internalformat,
    width,
    height,
    bufferToFFI(attrib_list),
  );
}

export const def_glTexStorageAttribs3DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTexStorageAttribs3DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageAttribs3DEXT>;

export function TexStorageAttribs3DEXT(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  attrib_list: Buffer,
): void {
  fn_glTexStorageAttribs3DEXT.call(
    target,
    levels,
    internalformat,
    width,
    height,
    depth,
    bufferToFFI(attrib_list),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexStorageAttribs2DEXT = new Deno.UnsafeFnPointer(proc("glTexStorageAttribs2DEXT"), def_glTexStorageAttribs2DEXT);
  fn_glTexStorageAttribs3DEXT = new Deno.UnsafeFnPointer(proc("glTexStorageAttribs3DEXT"), def_glTexStorageAttribs3DEXT);
}
