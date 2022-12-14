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
export const ALPHA4_EXT = 0x803b;
export const ALPHA8_EXT = 0x803c;
export const ALPHA12_EXT = 0x803d;
export const ALPHA16_EXT = 0x803e;
export const LUMINANCE4_EXT = 0x803f;
export const LUMINANCE8_EXT = 0x8040;
export const LUMINANCE12_EXT = 0x8041;
export const LUMINANCE16_EXT = 0x8042;
export const LUMINANCE4_ALPHA4_EXT = 0x8043;
export const LUMINANCE6_ALPHA2_EXT = 0x8044;
export const LUMINANCE8_ALPHA8_EXT = 0x8045;
export const LUMINANCE12_ALPHA4_EXT = 0x8046;
export const LUMINANCE12_ALPHA12_EXT = 0x8047;
export const LUMINANCE16_ALPHA16_EXT = 0x8048;
export const INTENSITY_EXT = 0x8049;
export const INTENSITY4_EXT = 0x804a;
export const INTENSITY8_EXT = 0x804b;
export const INTENSITY12_EXT = 0x804c;
export const INTENSITY16_EXT = 0x804d;
export const RGB2_EXT = 0x804e;
export const RGB4_EXT = 0x804f;
export const RGB5_EXT = 0x8050;
export const RGB8_EXT = 0x8051;
export const RGB10_EXT = 0x8052;
export const RGB12_EXT = 0x8053;
export const RGB16_EXT = 0x8054;
export const RGBA2_EXT = 0x8055;
export const RGBA4_EXT = 0x8056;
export const RGB5_A1_EXT = 0x8057;
export const RGBA8_EXT = 0x8058;
export const RGB10_A2_EXT = 0x8059;
export const RGBA12_EXT = 0x805a;
export const RGBA16_EXT = 0x805b;
export const TEXTURE_RED_SIZE_EXT = 0x805c;
export const TEXTURE_GREEN_SIZE_EXT = 0x805d;
export const TEXTURE_BLUE_SIZE_EXT = 0x805e;
export const TEXTURE_ALPHA_SIZE_EXT = 0x805f;
export const TEXTURE_LUMINANCE_SIZE_EXT = 0x8060;
export const TEXTURE_INTENSITY_SIZE_EXT = 0x8061;
export const REPLACE_EXT = 0x8062;
export const PROXY_TEXTURE_1D_EXT = 0x8063;
export const PROXY_TEXTURE_2D_EXT = 0x8064;
export const TEXTURE_TOO_LARGE_EXT = 0x8065;
