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
export const SAMPLE_LOCATION_SUBPIXEL_BITS_ARB = 0x933d;
export const SAMPLE_LOCATION_PIXEL_GRID_WIDTH_ARB = 0x933e;
export const SAMPLE_LOCATION_PIXEL_GRID_HEIGHT_ARB = 0x933f;
export const PROGRAMMABLE_SAMPLE_LOCATION_TABLE_SIZE_ARB = 0x9340;
export const SAMPLE_LOCATION_ARB = 0x8e50;
export const PROGRAMMABLE_SAMPLE_LOCATION_ARB = 0x9341;
export const FRAMEBUFFER_PROGRAMMABLE_SAMPLE_LOCATIONS_ARB = 0x9342;
export const FRAMEBUFFER_SAMPLE_LOCATION_PIXEL_GRID_ARB = 0x9343;

/// Commands

export const def_glFramebufferSampleLocationsfvARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glFramebufferSampleLocationsfvARB!: Deno.UnsafeFnPointer<typeof def_glFramebufferSampleLocationsfvARB>;

export function FramebufferSampleLocationsfvARB(
  target: GLenum,
  start: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glFramebufferSampleLocationsfvARB.call(
    target,
    start,
    count,
    bufferToFFI(v),
  );
}

export const def_glNamedFramebufferSampleLocationsfvARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedFramebufferSampleLocationsfvARB!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferSampleLocationsfvARB>;

export function NamedFramebufferSampleLocationsfvARB(
  framebuffer: GLuint,
  start: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glNamedFramebufferSampleLocationsfvARB.call(
    framebuffer,
    start,
    count,
    bufferToFFI(v),
  );
}

export const def_glEvaluateDepthValuesARB = {
  parameters: [],
  result: "void",
} as const;

let fn_glEvaluateDepthValuesARB!: Deno.UnsafeFnPointer<typeof def_glEvaluateDepthValuesARB>;

export function EvaluateDepthValuesARB(): void {
  fn_glEvaluateDepthValuesARB.call();
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFramebufferSampleLocationsfvARB = new Deno.UnsafeFnPointer(proc("glFramebufferSampleLocationsfvARB"), def_glFramebufferSampleLocationsfvARB);
  fn_glNamedFramebufferSampleLocationsfvARB = new Deno.UnsafeFnPointer(proc("glNamedFramebufferSampleLocationsfvARB"), def_glNamedFramebufferSampleLocationsfvARB);
  fn_glEvaluateDepthValuesARB = new Deno.UnsafeFnPointer(proc("glEvaluateDepthValuesARB"), def_glEvaluateDepthValuesARB);
}
