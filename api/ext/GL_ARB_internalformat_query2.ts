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
export const IMAGE_FORMAT_COMPATIBILITY_TYPE = 0x90c7;
export const NUM_SAMPLE_COUNTS = 0x9380;
export const RENDERBUFFER = 0x8d41;
export const SAMPLES = 0x80a9;
export const TEXTURE_1D = 0xde0;
export const TEXTURE_1D_ARRAY = 0x8c18;
export const TEXTURE_2D = 0xde1;
export const TEXTURE_2D_ARRAY = 0x8c1a;
export const TEXTURE_3D = 0x806f;
export const TEXTURE_CUBE_MAP = 0x8513;
export const TEXTURE_CUBE_MAP_ARRAY = 0x9009;
export const TEXTURE_RECTANGLE = 0x84f5;
export const TEXTURE_BUFFER = 0x8c2a;
export const TEXTURE_2D_MULTISAMPLE = 0x9100;
export const TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9102;
export const TEXTURE_COMPRESSED = 0x86a1;
export const INTERNALFORMAT_SUPPORTED = 0x826f;
export const INTERNALFORMAT_PREFERRED = 0x8270;
export const INTERNALFORMAT_RED_SIZE = 0x8271;
export const INTERNALFORMAT_GREEN_SIZE = 0x8272;
export const INTERNALFORMAT_BLUE_SIZE = 0x8273;
export const INTERNALFORMAT_ALPHA_SIZE = 0x8274;
export const INTERNALFORMAT_DEPTH_SIZE = 0x8275;
export const INTERNALFORMAT_STENCIL_SIZE = 0x8276;
export const INTERNALFORMAT_SHARED_SIZE = 0x8277;
export const INTERNALFORMAT_RED_TYPE = 0x8278;
export const INTERNALFORMAT_GREEN_TYPE = 0x8279;
export const INTERNALFORMAT_BLUE_TYPE = 0x827a;
export const INTERNALFORMAT_ALPHA_TYPE = 0x827b;
export const INTERNALFORMAT_DEPTH_TYPE = 0x827c;
export const INTERNALFORMAT_STENCIL_TYPE = 0x827d;
export const MAX_WIDTH = 0x827e;
export const MAX_HEIGHT = 0x827f;
export const MAX_DEPTH = 0x8280;
export const MAX_LAYERS = 0x8281;
export const MAX_COMBINED_DIMENSIONS = 0x8282;
export const COLOR_COMPONENTS = 0x8283;
export const DEPTH_COMPONENTS = 0x8284;
export const STENCIL_COMPONENTS = 0x8285;
export const COLOR_RENDERABLE = 0x8286;
export const DEPTH_RENDERABLE = 0x8287;
export const STENCIL_RENDERABLE = 0x8288;
export const FRAMEBUFFER_RENDERABLE = 0x8289;
export const FRAMEBUFFER_RENDERABLE_LAYERED = 0x828a;
export const FRAMEBUFFER_BLEND = 0x828b;
export const READ_PIXELS = 0x828c;
export const READ_PIXELS_FORMAT = 0x828d;
export const READ_PIXELS_TYPE = 0x828e;
export const TEXTURE_IMAGE_FORMAT = 0x828f;
export const TEXTURE_IMAGE_TYPE = 0x8290;
export const GET_TEXTURE_IMAGE_FORMAT = 0x8291;
export const GET_TEXTURE_IMAGE_TYPE = 0x8292;
export const MIPMAP = 0x8293;
export const MANUAL_GENERATE_MIPMAP = 0x8294;
export const AUTO_GENERATE_MIPMAP = 0x8295;
export const COLOR_ENCODING = 0x8296;
export const SRGB_READ = 0x8297;
export const SRGB_WRITE = 0x8298;
export const SRGB_DECODE_ARB = 0x8299;
export const FILTER = 0x829a;
export const VERTEX_TEXTURE = 0x829b;
export const TESS_CONTROL_TEXTURE = 0x829c;
export const TESS_EVALUATION_TEXTURE = 0x829d;
export const GEOMETRY_TEXTURE = 0x829e;
export const FRAGMENT_TEXTURE = 0x829f;
export const COMPUTE_TEXTURE = 0x82a0;
export const TEXTURE_SHADOW = 0x82a1;
export const TEXTURE_GATHER = 0x82a2;
export const TEXTURE_GATHER_SHADOW = 0x82a3;
export const SHADER_IMAGE_LOAD = 0x82a4;
export const SHADER_IMAGE_STORE = 0x82a5;
export const SHADER_IMAGE_ATOMIC = 0x82a6;
export const IMAGE_TEXEL_SIZE = 0x82a7;
export const IMAGE_COMPATIBILITY_CLASS = 0x82a8;
export const IMAGE_PIXEL_FORMAT = 0x82a9;
export const IMAGE_PIXEL_TYPE = 0x82aa;
export const SIMULTANEOUS_TEXTURE_AND_DEPTH_TEST = 0x82ac;
export const SIMULTANEOUS_TEXTURE_AND_STENCIL_TEST = 0x82ad;
export const SIMULTANEOUS_TEXTURE_AND_DEPTH_WRITE = 0x82ae;
export const SIMULTANEOUS_TEXTURE_AND_STENCIL_WRITE = 0x82af;
export const TEXTURE_COMPRESSED_BLOCK_WIDTH = 0x82b1;
export const TEXTURE_COMPRESSED_BLOCK_HEIGHT = 0x82b2;
export const TEXTURE_COMPRESSED_BLOCK_SIZE = 0x82b3;
export const CLEAR_BUFFER = 0x82b4;
export const TEXTURE_VIEW = 0x82b5;
export const VIEW_COMPATIBILITY_CLASS = 0x82b6;
export const FULL_SUPPORT = 0x82b7;
export const CAVEAT_SUPPORT = 0x82b8;
export const IMAGE_CLASS_4_X_32 = 0x82b9;
export const IMAGE_CLASS_2_X_32 = 0x82ba;
export const IMAGE_CLASS_1_X_32 = 0x82bb;
export const IMAGE_CLASS_4_X_16 = 0x82bc;
export const IMAGE_CLASS_2_X_16 = 0x82bd;
export const IMAGE_CLASS_1_X_16 = 0x82be;
export const IMAGE_CLASS_4_X_8 = 0x82bf;
export const IMAGE_CLASS_2_X_8 = 0x82c0;
export const IMAGE_CLASS_1_X_8 = 0x82c1;
export const IMAGE_CLASS_11_11_10 = 0x82c2;
export const IMAGE_CLASS_10_10_10_2 = 0x82c3;
export const VIEW_CLASS_128_BITS = 0x82c4;
export const VIEW_CLASS_96_BITS = 0x82c5;
export const VIEW_CLASS_64_BITS = 0x82c6;
export const VIEW_CLASS_48_BITS = 0x82c7;
export const VIEW_CLASS_32_BITS = 0x82c8;
export const VIEW_CLASS_24_BITS = 0x82c9;
export const VIEW_CLASS_16_BITS = 0x82ca;
export const VIEW_CLASS_8_BITS = 0x82cb;
export const VIEW_CLASS_S3TC_DXT1_RGB = 0x82cc;
export const VIEW_CLASS_S3TC_DXT1_RGBA = 0x82cd;
export const VIEW_CLASS_S3TC_DXT3_RGBA = 0x82ce;
export const VIEW_CLASS_S3TC_DXT5_RGBA = 0x82cf;
export const VIEW_CLASS_RGTC1_RED = 0x82d0;
export const VIEW_CLASS_RGTC2_RG = 0x82d1;
export const VIEW_CLASS_BPTC_UNORM = 0x82d2;
export const VIEW_CLASS_BPTC_FLOAT = 0x82d3;
export const VIEW_CLASS_EAC_R11 = 0x9383;
export const VIEW_CLASS_EAC_RG11 = 0x9384;
export const VIEW_CLASS_ETC2_RGB = 0x9385;
export const VIEW_CLASS_ETC2_RGBA = 0x9386;
export const VIEW_CLASS_ETC2_EAC_RGBA = 0x9387;
export const VIEW_CLASS_ASTC_4x4_RGBA = 0x9388;
export const VIEW_CLASS_ASTC_5x4_RGBA = 0x9389;
export const VIEW_CLASS_ASTC_5x5_RGBA = 0x938a;
export const VIEW_CLASS_ASTC_6x5_RGBA = 0x938b;
export const VIEW_CLASS_ASTC_6x6_RGBA = 0x938c;
export const VIEW_CLASS_ASTC_8x5_RGBA = 0x938d;
export const VIEW_CLASS_ASTC_8x6_RGBA = 0x938e;
export const VIEW_CLASS_ASTC_8x8_RGBA = 0x938f;
export const VIEW_CLASS_ASTC_10x5_RGBA = 0x9390;
export const VIEW_CLASS_ASTC_10x6_RGBA = 0x9391;
export const VIEW_CLASS_ASTC_10x8_RGBA = 0x9392;
export const VIEW_CLASS_ASTC_10x10_RGBA = 0x9393;
export const VIEW_CLASS_ASTC_12x10_RGBA = 0x9394;
export const VIEW_CLASS_ASTC_12x12_RGBA = 0x9395;

/// Commands

export const def_glGetInternalformati64v = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetInternalformati64v!: Deno.UnsafeFnPointer<
  typeof def_glGetInternalformati64v
>;

export function GetInternalformati64v(
  target: GLenum,
  internalformat: GLenum,
  pname: GLenum,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glGetInternalformati64v.call(
    target,
    internalformat,
    pname,
    count,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetInternalformati64v = new Deno.UnsafeFnPointer(
    proc("glGetInternalformati64v")!,
    def_glGetInternalformati64v,
  );
}
