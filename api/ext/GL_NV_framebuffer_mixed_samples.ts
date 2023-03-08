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
export const RASTER_MULTISAMPLE_EXT = 0x9327;
export const COVERAGE_MODULATION_TABLE_NV = 0x9331;
export const RASTER_SAMPLES_EXT = 0x9328;
export const MAX_RASTER_SAMPLES_EXT = 0x9329;
export const RASTER_FIXED_SAMPLE_LOCATIONS_EXT = 0x932a;
export const MULTISAMPLE_RASTERIZATION_ALLOWED_EXT = 0x932b;
export const EFFECTIVE_RASTER_SAMPLES_EXT = 0x932c;
export const COLOR_SAMPLES_NV = 0x8e20;
export const DEPTH_SAMPLES_NV = 0x932d;
export const STENCIL_SAMPLES_NV = 0x932e;
export const MIXED_DEPTH_SAMPLES_SUPPORTED_NV = 0x932f;
export const MIXED_STENCIL_SAMPLES_SUPPORTED_NV = 0x9330;
export const COVERAGE_MODULATION_NV = 0x9332;
export const COVERAGE_MODULATION_TABLE_SIZE_NV = 0x9333;

/// Commands

export const def_glRasterSamplesEXT = {
  parameters: ["u32", "u8"],
  result: "void",
} as const;

let fn_glRasterSamplesEXT!: Deno.UnsafeFnPointer<typeof def_glRasterSamplesEXT>;

export function RasterSamplesEXT(
  samples: GLuint,
  fixedsamplelocations: GLboolean,
): void {
  fn_glRasterSamplesEXT.call(
    samples,
    fixedsamplelocations,
  );
}

export const def_glCoverageModulationTableNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCoverageModulationTableNV!: Deno.UnsafeFnPointer<
  typeof def_glCoverageModulationTableNV
>;

export function CoverageModulationTableNV(
  n: GLsizei,
  v: Buffer,
): void {
  fn_glCoverageModulationTableNV.call(
    n,
    bufferToFFI(v),
  );
}

export const def_glGetCoverageModulationTableNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCoverageModulationTableNV!: Deno.UnsafeFnPointer<
  typeof def_glGetCoverageModulationTableNV
>;

export function GetCoverageModulationTableNV(
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetCoverageModulationTableNV.call(
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glCoverageModulationNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCoverageModulationNV!: Deno.UnsafeFnPointer<
  typeof def_glCoverageModulationNV
>;

export function CoverageModulationNV(
  components: GLenum,
): void {
  fn_glCoverageModulationNV.call(
    components,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glRasterSamplesEXT = new Deno.UnsafeFnPointer(
    proc("glRasterSamplesEXT")!,
    def_glRasterSamplesEXT,
  );
  fn_glCoverageModulationTableNV = new Deno.UnsafeFnPointer(
    proc("glCoverageModulationTableNV")!,
    def_glCoverageModulationTableNV,
  );
  fn_glGetCoverageModulationTableNV = new Deno.UnsafeFnPointer(
    proc("glGetCoverageModulationTableNV")!,
    def_glGetCoverageModulationTableNV,
  );
  fn_glCoverageModulationNV = new Deno.UnsafeFnPointer(
    proc("glCoverageModulationNV")!,
    def_glCoverageModulationNV,
  );
}
