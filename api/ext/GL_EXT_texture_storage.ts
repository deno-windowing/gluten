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
export const TEXTURE_IMMUTABLE_FORMAT_EXT = 0x912f;
export const ALPHA8_EXT = 0x803c;
export const LUMINANCE8_EXT = 0x8040;
export const LUMINANCE8_ALPHA8_EXT = 0x8045;
export const RGBA32F_EXT = 0x8814;
export const RGB32F_EXT = 0x8815;
export const ALPHA32F_EXT = 0x8816;
export const LUMINANCE32F_EXT = 0x8818;
export const LUMINANCE_ALPHA32F_EXT = 0x8819;
export const RGBA16F_EXT = 0x881a;
export const RGB16F_EXT = 0x881b;
export const ALPHA16F_EXT = 0x881c;
export const LUMINANCE16F_EXT = 0x881e;
export const LUMINANCE_ALPHA16F_EXT = 0x881f;
export const RGB10_A2_EXT = 0x8059;
export const RGB10_EXT = 0x8052;
export const BGRA8_EXT = 0x93a1;
export const R8_EXT = 0x8229;
export const RG8_EXT = 0x822b;
export const R32F_EXT = 0x822e;
export const RG32F_EXT = 0x8230;
export const R16F_EXT = 0x822d;
export const RG16F_EXT = 0x822f;

/// Commands

export const def_glTexStorage1DEXT = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorage1DEXT>;

export function TexStorage1DEXT(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTexStorage1DEXT.call(
    target,
    levels,
    internalformat,
    width,
  );
}

export const def_glTexStorage2DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorage2DEXT>;

export function TexStorage2DEXT(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTexStorage2DEXT.call(
    target,
    levels,
    internalformat,
    width,
    height,
  );
}

export const def_glTexStorage3DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorage3DEXT>;

export function TexStorage3DEXT(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTexStorage3DEXT.call(
    target,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

export const def_glTextureStorage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage1DEXT>;

export function TextureStorage1DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTextureStorage1DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
  );
}

export const def_glTextureStorage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2DEXT>;

export function TextureStorage2DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTextureStorage2DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
    height,
  );
}

export const def_glTextureStorage3DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3DEXT>;

export function TextureStorage3DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTextureStorage3DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexStorage1DEXT = new Deno.UnsafeFnPointer(proc("glTexStorage1DEXT"), def_glTexStorage1DEXT);
  fn_glTexStorage2DEXT = new Deno.UnsafeFnPointer(proc("glTexStorage2DEXT"), def_glTexStorage2DEXT);
  fn_glTexStorage3DEXT = new Deno.UnsafeFnPointer(proc("glTexStorage3DEXT"), def_glTexStorage3DEXT);
  fn_glTextureStorage1DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage1DEXT"), def_glTextureStorage1DEXT);
  fn_glTextureStorage2DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage2DEXT"), def_glTextureStorage2DEXT);
  fn_glTextureStorage3DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage3DEXT"), def_glTextureStorage3DEXT);
}
