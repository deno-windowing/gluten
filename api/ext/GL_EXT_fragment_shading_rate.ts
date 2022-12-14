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
export const SHADING_RATE_1X1_PIXELS_EXT = 0x96a6;
export const SHADING_RATE_1X2_PIXELS_EXT = 0x96a7;
export const SHADING_RATE_2X1_PIXELS_EXT = 0x96a8;
export const SHADING_RATE_2X2_PIXELS_EXT = 0x96a9;
export const SHADING_RATE_1X4_PIXELS_EXT = 0x96aa;
export const SHADING_RATE_4X1_PIXELS_EXT = 0x96ab;
export const SHADING_RATE_4X2_PIXELS_EXT = 0x96ac;
export const SHADING_RATE_2X4_PIXELS_EXT = 0x96ad;
export const SHADING_RATE_4X4_PIXELS_EXT = 0x96ae;
export const SHADING_RATE_EXT = 0x96d0;
export const SHADING_RATE_ATTACHMENT_EXT = 0x96d1;
export const FRAGMENT_SHADING_RATE_COMBINER_OP_KEEP_EXT = 0x96d2;
export const FRAGMENT_SHADING_RATE_COMBINER_OP_REPLACE_EXT = 0x96d3;
export const FRAGMENT_SHADING_RATE_COMBINER_OP_MIN_EXT = 0x96d4;
export const FRAGMENT_SHADING_RATE_COMBINER_OP_MAX_EXT = 0x96d5;
export const FRAGMENT_SHADING_RATE_COMBINER_OP_MUL_EXT = 0x96d6;
export const MIN_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_WIDTH_EXT = 0x96d7;
export const MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_WIDTH_EXT = 0x96d8;
export const MIN_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_HEIGHT_EXT = 0x96d9;
export const MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_HEIGHT_EXT = 0x96da;
export const MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_ASPECT_RATIO_EXT = 0x96db;
export const MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_LAYERS_EXT = 0x96dc;
export const FRAGMENT_SHADING_RATE_WITH_SHADER_DEPTH_STENCIL_WRITES_SUPPORTED_EXT = 0x96dd;
export const FRAGMENT_SHADING_RATE_WITH_SAMPLE_MASK_SUPPORTED_EXT = 0x96de;
export const FRAGMENT_SHADING_RATE_ATTACHMENT_WITH_DEFAULT_FRAMEBUFFER_SUPPORTED_EXT = 0x96df;
export const FRAGMENT_SHADING_RATE_NON_TRIVIAL_COMBINERS_SUPPORTED_EXT = 0x8f6f;

/// Commands

export const def_glGetFragmentShadingRatesEXT = {
  parameters: ["i32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetFragmentShadingRatesEXT!: Deno.UnsafeFnPointer<typeof def_glGetFragmentShadingRatesEXT>;

export function GetFragmentShadingRatesEXT(
  samples: GLsizei,
  maxCount: GLsizei,
  count: Buffer,
  shadingRates: Buffer,
): void {
  fn_glGetFragmentShadingRatesEXT.call(
    samples,
    maxCount,
    bufferToFFI(count),
    bufferToFFI(shadingRates),
  );
}

export const def_glShadingRateEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glShadingRateEXT!: Deno.UnsafeFnPointer<typeof def_glShadingRateEXT>;

export function ShadingRateEXT(
  rate: GLenum,
): void {
  fn_glShadingRateEXT.call(
    rate,
  );
}

export const def_glShadingRateCombinerOpsEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glShadingRateCombinerOpsEXT!: Deno.UnsafeFnPointer<typeof def_glShadingRateCombinerOpsEXT>;

export function ShadingRateCombinerOpsEXT(
  combinerOp0: GLenum,
  combinerOp1: GLenum,
): void {
  fn_glShadingRateCombinerOpsEXT.call(
    combinerOp0,
    combinerOp1,
  );
}

export const def_glFramebufferShadingRateEXT = {
  parameters: ["u32", "u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferShadingRateEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferShadingRateEXT>;

export function FramebufferShadingRateEXT(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  baseLayer: GLint,
  numLayers: GLsizei,
  texelWidth: GLsizei,
  texelHeight: GLsizei,
): void {
  fn_glFramebufferShadingRateEXT.call(
    target,
    attachment,
    texture,
    baseLayer,
    numLayers,
    texelWidth,
    texelHeight,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetFragmentShadingRatesEXT = new Deno.UnsafeFnPointer(proc("glGetFragmentShadingRatesEXT"), def_glGetFragmentShadingRatesEXT);
  fn_glShadingRateEXT = new Deno.UnsafeFnPointer(proc("glShadingRateEXT"), def_glShadingRateEXT);
  fn_glShadingRateCombinerOpsEXT = new Deno.UnsafeFnPointer(proc("glShadingRateCombinerOpsEXT"), def_glShadingRateCombinerOpsEXT);
  fn_glFramebufferShadingRateEXT = new Deno.UnsafeFnPointer(proc("glFramebufferShadingRateEXT"), def_glFramebufferShadingRateEXT);
}
