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
const isTypedArray = (arr: unknown) =>
  arr instanceof Int8Array || arr instanceof Uint8Array ||
  arr instanceof Int16Array || arr instanceof Uint16Array ||
  arr instanceof Int32Array || arr instanceof Uint32Array ||
  arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(
      Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1),
    );
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
export const COMPRESSED_RGBA_ASTC_4x4_KHR = 0x93b0;
export const COMPRESSED_RGBA_ASTC_5x4_KHR = 0x93b1;
export const COMPRESSED_RGBA_ASTC_5x5_KHR = 0x93b2;
export const COMPRESSED_RGBA_ASTC_6x5_KHR = 0x93b3;
export const COMPRESSED_RGBA_ASTC_6x6_KHR = 0x93b4;
export const COMPRESSED_RGBA_ASTC_8x5_KHR = 0x93b5;
export const COMPRESSED_RGBA_ASTC_8x6_KHR = 0x93b6;
export const COMPRESSED_RGBA_ASTC_8x8_KHR = 0x93b7;
export const COMPRESSED_RGBA_ASTC_10x5_KHR = 0x93b8;
export const COMPRESSED_RGBA_ASTC_10x6_KHR = 0x93b9;
export const COMPRESSED_RGBA_ASTC_10x8_KHR = 0x93ba;
export const COMPRESSED_RGBA_ASTC_10x10_KHR = 0x93bb;
export const COMPRESSED_RGBA_ASTC_12x10_KHR = 0x93bc;
export const COMPRESSED_RGBA_ASTC_12x12_KHR = 0x93bd;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 0x93d0;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 0x93d1;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 0x93d2;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 0x93d3;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 0x93d4;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 0x93d5;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 0x93d6;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 0x93d7;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 0x93d8;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 0x93d9;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 0x93da;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 0x93db;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 0x93dc;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 0x93dd;
