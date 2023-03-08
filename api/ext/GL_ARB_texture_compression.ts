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
export const COMPRESSED_ALPHA_ARB = 0x84e9;
export const COMPRESSED_LUMINANCE_ARB = 0x84ea;
export const COMPRESSED_LUMINANCE_ALPHA_ARB = 0x84eb;
export const COMPRESSED_INTENSITY_ARB = 0x84ec;
export const COMPRESSED_RGB_ARB = 0x84ed;
export const COMPRESSED_RGBA_ARB = 0x84ee;
export const TEXTURE_COMPRESSION_HINT_ARB = 0x84ef;
export const TEXTURE_COMPRESSED_IMAGE_SIZE_ARB = 0x86a0;
export const TEXTURE_COMPRESSED_ARB = 0x86a1;
export const NUM_COMPRESSED_TEXTURE_FORMATS_ARB = 0x86a2;
export const COMPRESSED_TEXTURE_FORMATS_ARB = 0x86a3;

/// Commands

export const def_glCompressedTexImage3DARB = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage3DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage3DARB>;

export function CompressedTexImage3DARB(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage3DARB.call(
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexImage2DARB = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage2DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage2DARB>;

export function CompressedTexImage2DARB(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage2DARB.call(
    target,
    level,
    internalformat,
    width,
    height,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexImage1DARB = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage1DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage1DARB>;

export function CompressedTexImage1DARB(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage1DARB.call(
    target,
    level,
    internalformat,
    width,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage3DARB = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage3DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage3DARB>;

export function CompressedTexSubImage3DARB(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage3DARB.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage2DARB = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage2DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage2DARB>;

export function CompressedTexSubImage2DARB(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage2DARB.call(
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage1DARB = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage1DARB!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage1DARB>;

export function CompressedTexSubImage1DARB(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage1DARB.call(
    target,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glGetCompressedTexImageARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTexImageARB!: Deno.UnsafeFnPointer<typeof def_glGetCompressedTexImageARB>;

export function GetCompressedTexImageARB(
  target: GLenum,
  level: GLint,
  img: Buffer,
): void {
  fn_glGetCompressedTexImageARB.call(
    target,
    level,
    bufferToFFI(img),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCompressedTexImage3DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexImage3DARB")!, def_glCompressedTexImage3DARB);
  fn_glCompressedTexImage2DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexImage2DARB")!, def_glCompressedTexImage2DARB);
  fn_glCompressedTexImage1DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexImage1DARB")!, def_glCompressedTexImage1DARB);
  fn_glCompressedTexSubImage3DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage3DARB")!, def_glCompressedTexSubImage3DARB);
  fn_glCompressedTexSubImage2DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage2DARB")!, def_glCompressedTexSubImage2DARB);
  fn_glCompressedTexSubImage1DARB = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage1DARB")!, def_glCompressedTexSubImage1DARB);
  fn_glGetCompressedTexImageARB = new Deno.UnsafeFnPointer(proc("glGetCompressedTexImageARB")!, def_glGetCompressedTexImageARB);
}
