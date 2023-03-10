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
export const MULTIPLY_KHR = 0x9294;
export const SCREEN_KHR = 0x9295;
export const OVERLAY_KHR = 0x9296;
export const DARKEN_KHR = 0x9297;
export const LIGHTEN_KHR = 0x9298;
export const COLORDODGE_KHR = 0x9299;
export const COLORBURN_KHR = 0x929a;
export const HARDLIGHT_KHR = 0x929b;
export const SOFTLIGHT_KHR = 0x929c;
export const DIFFERENCE_KHR = 0x929e;
export const EXCLUSION_KHR = 0x92a0;
export const HSL_HUE_KHR = 0x92ad;
export const HSL_SATURATION_KHR = 0x92ae;
export const HSL_COLOR_KHR = 0x92af;
export const HSL_LUMINOSITY_KHR = 0x92b0;

/// Commands

export const def_glBlendBarrierKHR = {
  parameters: [],
  result: "void",
} as const;

let fn_glBlendBarrierKHR!: Deno.UnsafeFnPointer<typeof def_glBlendBarrierKHR>;

export function BlendBarrierKHR(): void {
  fn_glBlendBarrierKHR.call();
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBlendBarrierKHR = new Deno.UnsafeFnPointer(proc("glBlendBarrierKHR")!, def_glBlendBarrierKHR);
}
