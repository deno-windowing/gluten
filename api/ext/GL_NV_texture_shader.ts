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
export const OFFSET_TEXTURE_RECTANGLE_NV = 0x864c;
export const OFFSET_TEXTURE_RECTANGLE_SCALE_NV = 0x864d;
export const DOT_PRODUCT_TEXTURE_RECTANGLE_NV = 0x864e;
export const RGBA_UNSIGNED_DOT_PRODUCT_MAPPING_NV = 0x86d9;
export const UNSIGNED_INT_S8_S8_8_8_NV = 0x86da;
export const UNSIGNED_INT_8_8_S8_S8_REV_NV = 0x86db;
export const DSDT_MAG_INTENSITY_NV = 0x86dc;
export const SHADER_CONSISTENT_NV = 0x86dd;
export const TEXTURE_SHADER_NV = 0x86de;
export const SHADER_OPERATION_NV = 0x86df;
export const CULL_MODES_NV = 0x86e0;
export const OFFSET_TEXTURE_MATRIX_NV = 0x86e1;
export const OFFSET_TEXTURE_SCALE_NV = 0x86e2;
export const OFFSET_TEXTURE_BIAS_NV = 0x86e3;
export const OFFSET_TEXTURE_2D_MATRIX_NV = 0x86e1;
export const OFFSET_TEXTURE_2D_SCALE_NV = 0x86e2;
export const OFFSET_TEXTURE_2D_BIAS_NV = 0x86e3;
export const PREVIOUS_TEXTURE_INPUT_NV = 0x86e4;
export const CONST_EYE_NV = 0x86e5;
export const PASS_THROUGH_NV = 0x86e6;
export const CULL_FRAGMENT_NV = 0x86e7;
export const OFFSET_TEXTURE_2D_NV = 0x86e8;
export const DEPENDENT_AR_TEXTURE_2D_NV = 0x86e9;
export const DEPENDENT_GB_TEXTURE_2D_NV = 0x86ea;
export const DOT_PRODUCT_NV = 0x86ec;
export const DOT_PRODUCT_DEPTH_REPLACE_NV = 0x86ed;
export const DOT_PRODUCT_TEXTURE_2D_NV = 0x86ee;
export const DOT_PRODUCT_TEXTURE_CUBE_MAP_NV = 0x86f0;
export const DOT_PRODUCT_DIFFUSE_CUBE_MAP_NV = 0x86f1;
export const DOT_PRODUCT_REFLECT_CUBE_MAP_NV = 0x86f2;
export const DOT_PRODUCT_CONST_EYE_REFLECT_CUBE_MAP_NV = 0x86f3;
export const HILO_NV = 0x86f4;
export const DSDT_NV = 0x86f5;
export const DSDT_MAG_NV = 0x86f6;
export const DSDT_MAG_VIB_NV = 0x86f7;
export const HILO16_NV = 0x86f8;
export const SIGNED_HILO_NV = 0x86f9;
export const SIGNED_HILO16_NV = 0x86fa;
export const SIGNED_RGBA_NV = 0x86fb;
export const SIGNED_RGBA8_NV = 0x86fc;
export const SIGNED_RGB_NV = 0x86fe;
export const SIGNED_RGB8_NV = 0x86ff;
export const SIGNED_LUMINANCE_NV = 0x8701;
export const SIGNED_LUMINANCE8_NV = 0x8702;
export const SIGNED_LUMINANCE_ALPHA_NV = 0x8703;
export const SIGNED_LUMINANCE8_ALPHA8_NV = 0x8704;
export const SIGNED_ALPHA_NV = 0x8705;
export const SIGNED_ALPHA8_NV = 0x8706;
export const SIGNED_INTENSITY_NV = 0x8707;
export const SIGNED_INTENSITY8_NV = 0x8708;
export const DSDT8_NV = 0x8709;
export const DSDT8_MAG8_NV = 0x870a;
export const DSDT8_MAG8_INTENSITY8_NV = 0x870b;
export const SIGNED_RGB_UNSIGNED_ALPHA_NV = 0x870c;
export const SIGNED_RGB8_UNSIGNED_ALPHA8_NV = 0x870d;
export const HI_SCALE_NV = 0x870e;
export const LO_SCALE_NV = 0x870f;
export const DS_SCALE_NV = 0x8710;
export const DT_SCALE_NV = 0x8711;
export const MAGNITUDE_SCALE_NV = 0x8712;
export const VIBRANCE_SCALE_NV = 0x8713;
export const HI_BIAS_NV = 0x8714;
export const LO_BIAS_NV = 0x8715;
export const DS_BIAS_NV = 0x8716;
export const DT_BIAS_NV = 0x8717;
export const MAGNITUDE_BIAS_NV = 0x8718;
export const VIBRANCE_BIAS_NV = 0x8719;
export const TEXTURE_BORDER_VALUES_NV = 0x871a;
export const TEXTURE_HI_SIZE_NV = 0x871b;
export const TEXTURE_LO_SIZE_NV = 0x871c;
export const TEXTURE_DS_SIZE_NV = 0x871d;
export const TEXTURE_DT_SIZE_NV = 0x871e;
export const TEXTURE_MAG_SIZE_NV = 0x871f;
