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
export const BLEND_OVERLAP_NV = 0x9281;
export const BLEND_PREMULTIPLIED_SRC_NV = 0x9280;
export const BLUE_NV = 0x1905;
export const COLORBURN_NV = 0x929a;
export const COLORDODGE_NV = 0x9299;
export const CONJOINT_NV = 0x9284;
export const CONTRAST_NV = 0x92a1;
export const DARKEN_NV = 0x9297;
export const DIFFERENCE_NV = 0x929e;
export const DISJOINT_NV = 0x9283;
export const DST_ATOP_NV = 0x928f;
export const DST_IN_NV = 0x928b;
export const DST_NV = 0x9287;
export const DST_OUT_NV = 0x928d;
export const DST_OVER_NV = 0x9289;
export const EXCLUSION_NV = 0x92a0;
export const GREEN_NV = 0x1904;
export const HARDLIGHT_NV = 0x929b;
export const HARDMIX_NV = 0x92a9;
export const HSL_COLOR_NV = 0x92af;
export const HSL_HUE_NV = 0x92ad;
export const HSL_LUMINOSITY_NV = 0x92b0;
export const HSL_SATURATION_NV = 0x92ae;
export const INVERT = 0x150a;
export const INVERT_OVG_NV = 0x92b4;
export const INVERT_RGB_NV = 0x92a3;
export const LIGHTEN_NV = 0x9298;
export const LINEARBURN_NV = 0x92a5;
export const LINEARDODGE_NV = 0x92a4;
export const LINEARLIGHT_NV = 0x92a7;
export const MINUS_CLAMPED_NV = 0x92b3;
export const MINUS_NV = 0x929f;
export const MULTIPLY_NV = 0x9294;
export const OVERLAY_NV = 0x9296;
export const PINLIGHT_NV = 0x92a8;
export const PLUS_CLAMPED_ALPHA_NV = 0x92b2;
export const PLUS_CLAMPED_NV = 0x92b1;
export const PLUS_DARKER_NV = 0x9292;
export const PLUS_NV = 0x9291;
export const RED_NV = 0x1903;
export const SCREEN_NV = 0x9295;
export const SOFTLIGHT_NV = 0x929c;
export const SRC_ATOP_NV = 0x928e;
export const SRC_IN_NV = 0x928a;
export const SRC_NV = 0x9286;
export const SRC_OUT_NV = 0x928c;
export const SRC_OVER_NV = 0x9288;
export const UNCORRELATED_NV = 0x9282;
export const VIVIDLIGHT_NV = 0x92a6;
export const XOR_NV = 0x1506;
export const ZERO = 0x0;

/// Commands

export const def_glBlendParameteriNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glBlendParameteriNV!: Deno.UnsafeFnPointer<typeof def_glBlendParameteriNV>;

export function BlendParameteriNV(
  pname: GLenum,
  value: GLint,
): void {
  fn_glBlendParameteriNV.call(
    pname,
    value,
  );
}

export const def_glBlendBarrierNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glBlendBarrierNV!: Deno.UnsafeFnPointer<typeof def_glBlendBarrierNV>;

export function BlendBarrierNV(): void {
  fn_glBlendBarrierNV.call();
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBlendParameteriNV = new Deno.UnsafeFnPointer(proc("glBlendParameteriNV")!, def_glBlendParameteriNV);
  fn_glBlendBarrierNV = new Deno.UnsafeFnPointer(proc("glBlendBarrierNV")!, def_glBlendBarrierNV);
}
