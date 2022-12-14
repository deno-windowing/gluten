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
export const DUAL_ALPHA4_SGIS = 0x8110;
export const DUAL_ALPHA8_SGIS = 0x8111;
export const DUAL_ALPHA12_SGIS = 0x8112;
export const DUAL_ALPHA16_SGIS = 0x8113;
export const DUAL_LUMINANCE4_SGIS = 0x8114;
export const DUAL_LUMINANCE8_SGIS = 0x8115;
export const DUAL_LUMINANCE12_SGIS = 0x8116;
export const DUAL_LUMINANCE16_SGIS = 0x8117;
export const DUAL_INTENSITY4_SGIS = 0x8118;
export const DUAL_INTENSITY8_SGIS = 0x8119;
export const DUAL_INTENSITY12_SGIS = 0x811a;
export const DUAL_INTENSITY16_SGIS = 0x811b;
export const DUAL_LUMINANCE_ALPHA4_SGIS = 0x811c;
export const DUAL_LUMINANCE_ALPHA8_SGIS = 0x811d;
export const QUAD_ALPHA4_SGIS = 0x811e;
export const QUAD_ALPHA8_SGIS = 0x811f;
export const QUAD_LUMINANCE4_SGIS = 0x8120;
export const QUAD_LUMINANCE8_SGIS = 0x8121;
export const QUAD_INTENSITY4_SGIS = 0x8122;
export const QUAD_INTENSITY8_SGIS = 0x8123;
export const DUAL_TEXTURE_SELECT_SGIS = 0x8124;
export const QUAD_TEXTURE_SELECT_SGIS = 0x8125;
