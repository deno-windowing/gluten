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
export const ALPHA_SNORM = 0x9010;
export const LUMINANCE_SNORM = 0x9011;
export const LUMINANCE_ALPHA_SNORM = 0x9012;
export const INTENSITY_SNORM = 0x9013;
export const ALPHA8_SNORM = 0x9014;
export const LUMINANCE8_SNORM = 0x9015;
export const LUMINANCE8_ALPHA8_SNORM = 0x9016;
export const INTENSITY8_SNORM = 0x9017;
export const ALPHA16_SNORM = 0x9018;
export const LUMINANCE16_SNORM = 0x9019;
export const LUMINANCE16_ALPHA16_SNORM = 0x901a;
export const INTENSITY16_SNORM = 0x901b;
export const RED_SNORM = 0x8f90;
export const RG_SNORM = 0x8f91;
export const RGB_SNORM = 0x8f92;
export const RGBA_SNORM = 0x8f93;
export const R8_SNORM = 0x8f94;
export const RG8_SNORM = 0x8f95;
export const RGB8_SNORM = 0x8f96;
export const RGBA8_SNORM = 0x8f97;
export const R16_SNORM = 0x8f98;
export const RG16_SNORM = 0x8f99;
export const RGB16_SNORM = 0x8f9a;
export const RGBA16_SNORM = 0x8f9b;
export const SIGNED_NORMALIZED = 0x8f9c;
