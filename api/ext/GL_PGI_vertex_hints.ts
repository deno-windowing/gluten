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
export const VERTEX_DATA_HINT_PGI = 0x1a22a;
export const VERTEX_CONSISTENT_HINT_PGI = 0x1a22b;
export const MATERIAL_SIDE_HINT_PGI = 0x1a22c;
export const MAX_VERTEX_HINT_PGI = 0x1a22d;
export const COLOR3_BIT_PGI = 0x10000;
export const COLOR4_BIT_PGI = 0x20000;
export const EDGEFLAG_BIT_PGI = 0x40000;
export const INDEX_BIT_PGI = 0x80000;
export const MAT_AMBIENT_BIT_PGI = 0x100000;
export const MAT_AMBIENT_AND_DIFFUSE_BIT_PGI = 0x200000;
export const MAT_DIFFUSE_BIT_PGI = 0x400000;
export const MAT_EMISSION_BIT_PGI = 0x800000;
export const MAT_COLOR_INDEXES_BIT_PGI = 0x1000000;
export const MAT_SHININESS_BIT_PGI = 0x2000000;
export const MAT_SPECULAR_BIT_PGI = 0x4000000;
export const NORMAL_BIT_PGI = 0x8000000;
export const TEXCOORD1_BIT_PGI = 0x10000000;
export const TEXCOORD2_BIT_PGI = 0x20000000;
export const TEXCOORD3_BIT_PGI = 0x40000000;
export const TEXCOORD4_BIT_PGI = 0x80000000;
export const VERTEX23_BIT_PGI = 0x4;
export const VERTEX4_BIT_PGI = 0x8;
