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
export const MULTISAMPLE_EXT = 0x809d;
export const SAMPLE_ALPHA_TO_MASK_EXT = 0x809e;
export const SAMPLE_ALPHA_TO_ONE_EXT = 0x809f;
export const SAMPLE_MASK_EXT = 0x80a0;
export const GL_1PASS_EXT = 0x80a1;
export const GL_2PASS_0_EXT = 0x80a2;
export const GL_2PASS_1_EXT = 0x80a3;
export const GL_4PASS_0_EXT = 0x80a4;
export const GL_4PASS_1_EXT = 0x80a5;
export const GL_4PASS_2_EXT = 0x80a6;
export const GL_4PASS_3_EXT = 0x80a7;
export const SAMPLE_BUFFERS_EXT = 0x80a8;
export const SAMPLES_EXT = 0x80a9;
export const SAMPLE_MASK_VALUE_EXT = 0x80aa;
export const SAMPLE_MASK_INVERT_EXT = 0x80ab;
export const SAMPLE_PATTERN_EXT = 0x80ac;
export const MULTISAMPLE_BIT_EXT = 0x20000000;

/// Commands

export const def_glSampleMaskEXT = {
  parameters: ["f32", "u8"],
  result: "void",
} as const;

let fn_glSampleMaskEXT!: Deno.UnsafeFnPointer<typeof def_glSampleMaskEXT>;

export function SampleMaskEXT(
  value: GLclampf,
  invert: GLboolean,
): void {
  fn_glSampleMaskEXT.call(
    value,
    invert,
  );
}

export const def_glSamplePatternEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glSamplePatternEXT!: Deno.UnsafeFnPointer<typeof def_glSamplePatternEXT>;

export function SamplePatternEXT(
  pattern: GLenum,
): void {
  fn_glSamplePatternEXT.call(
    pattern,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glSampleMaskEXT = new Deno.UnsafeFnPointer(proc("glSampleMaskEXT")!, def_glSampleMaskEXT);
  fn_glSamplePatternEXT = new Deno.UnsafeFnPointer(proc("glSamplePatternEXT")!, def_glSamplePatternEXT);
}
