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
export const TEXTURE_RED_TYPE_ARB = 0x8c10;
export const TEXTURE_GREEN_TYPE_ARB = 0x8c11;
export const TEXTURE_BLUE_TYPE_ARB = 0x8c12;
export const TEXTURE_ALPHA_TYPE_ARB = 0x8c13;
export const TEXTURE_LUMINANCE_TYPE_ARB = 0x8c14;
export const TEXTURE_INTENSITY_TYPE_ARB = 0x8c15;
export const TEXTURE_DEPTH_TYPE_ARB = 0x8c16;
export const UNSIGNED_NORMALIZED_ARB = 0x8c17;
export const RGBA32F_ARB = 0x8814;
export const RGB32F_ARB = 0x8815;
export const ALPHA32F_ARB = 0x8816;
export const INTENSITY32F_ARB = 0x8817;
export const LUMINANCE32F_ARB = 0x8818;
export const LUMINANCE_ALPHA32F_ARB = 0x8819;
export const RGBA16F_ARB = 0x881a;
export const RGB16F_ARB = 0x881b;
export const ALPHA16F_ARB = 0x881c;
export const INTENSITY16F_ARB = 0x881d;
export const LUMINANCE16F_ARB = 0x881e;
export const LUMINANCE_ALPHA16F_ARB = 0x881f;
