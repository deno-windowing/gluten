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
export const PACK_SKIP_IMAGES_EXT = 0x806b;
export const PACK_IMAGE_HEIGHT_EXT = 0x806c;
export const UNPACK_SKIP_IMAGES_EXT = 0x806d;
export const UNPACK_IMAGE_HEIGHT_EXT = 0x806e;
export const TEXTURE_3D_EXT = 0x806f;
export const PROXY_TEXTURE_3D_EXT = 0x8070;
export const TEXTURE_DEPTH_EXT = 0x8071;
export const TEXTURE_WRAP_R_EXT = 0x8072;
export const MAX_3D_TEXTURE_SIZE_EXT = 0x8073;

/// Commands

export const def_glTexImage3DEXT = {
  parameters: [
    "u32",
    "i32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glTexImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTexImage3DEXT>;

export function TexImage3DEXT(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage3DEXT.call(
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexSubImage3DEXT = {
  parameters: [
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glTexSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTexSubImage3DEXT>;

export function TexSubImage3DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage3DEXT.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    type,
    bufferToFFI(pixels),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexImage3DEXT = new Deno.UnsafeFnPointer(
    proc("glTexImage3DEXT"),
    def_glTexImage3DEXT,
  );
  fn_glTexSubImage3DEXT = new Deno.UnsafeFnPointer(
    proc("glTexSubImage3DEXT"),
    def_glTexSubImage3DEXT,
  );
}
