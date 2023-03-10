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
export const PACK_SKIP_VOLUMES_SGIS = 0x8130;
export const PACK_IMAGE_DEPTH_SGIS = 0x8131;
export const UNPACK_SKIP_VOLUMES_SGIS = 0x8132;
export const UNPACK_IMAGE_DEPTH_SGIS = 0x8133;
export const TEXTURE_4D_SGIS = 0x8134;
export const PROXY_TEXTURE_4D_SGIS = 0x8135;
export const TEXTURE_4DSIZE_SGIS = 0x8136;
export const TEXTURE_WRAP_Q_SGIS = 0x8137;
export const MAX_4D_TEXTURE_SIZE_SGIS = 0x8138;
export const TEXTURE_4D_BINDING_SGIS = 0x814f;

/// Commands

export const def_glTexImage4DSGIS = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexImage4DSGIS!: Deno.UnsafeFnPointer<typeof def_glTexImage4DSGIS>;

export function TexImage4DSGIS(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  size4d: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage4DSGIS.call(
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    size4d,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexSubImage4DSGIS = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexSubImage4DSGIS!: Deno.UnsafeFnPointer<typeof def_glTexSubImage4DSGIS>;

export function TexSubImage4DSGIS(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  woffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  size4d: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage4DSGIS.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    woffset,
    width,
    height,
    depth,
    size4d,
    format,
    type,
    bufferToFFI(pixels),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexImage4DSGIS = new Deno.UnsafeFnPointer(proc("glTexImage4DSGIS")!, def_glTexImage4DSGIS);
  fn_glTexSubImage4DSGIS = new Deno.UnsafeFnPointer(proc("glTexSubImage4DSGIS")!, def_glTexSubImage4DSGIS);
}
