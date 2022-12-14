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
export const SHADING_RATE_IMAGE_NV = 0x9563;
export const SHADING_RATE_NO_INVOCATIONS_NV = 0x9564;
export const SHADING_RATE_1_INVOCATION_PER_PIXEL_NV = 0x9565;
export const SHADING_RATE_1_INVOCATION_PER_1X2_PIXELS_NV = 0x9566;
export const SHADING_RATE_1_INVOCATION_PER_2X1_PIXELS_NV = 0x9567;
export const SHADING_RATE_1_INVOCATION_PER_2X2_PIXELS_NV = 0x9568;
export const SHADING_RATE_1_INVOCATION_PER_2X4_PIXELS_NV = 0x9569;
export const SHADING_RATE_1_INVOCATION_PER_4X2_PIXELS_NV = 0x956a;
export const SHADING_RATE_1_INVOCATION_PER_4X4_PIXELS_NV = 0x956b;
export const SHADING_RATE_2_INVOCATIONS_PER_PIXEL_NV = 0x956c;
export const SHADING_RATE_4_INVOCATIONS_PER_PIXEL_NV = 0x956d;
export const SHADING_RATE_8_INVOCATIONS_PER_PIXEL_NV = 0x956e;
export const SHADING_RATE_16_INVOCATIONS_PER_PIXEL_NV = 0x956f;
export const SHADING_RATE_IMAGE_BINDING_NV = 0x955b;
export const SHADING_RATE_IMAGE_TEXEL_WIDTH_NV = 0x955c;
export const SHADING_RATE_IMAGE_TEXEL_HEIGHT_NV = 0x955d;
export const SHADING_RATE_IMAGE_PALETTE_SIZE_NV = 0x955e;
export const MAX_COARSE_FRAGMENT_SAMPLES_NV = 0x955f;
export const SHADING_RATE_SAMPLE_ORDER_DEFAULT_NV = 0x95ae;
export const SHADING_RATE_SAMPLE_ORDER_PIXEL_MAJOR_NV = 0x95af;
export const SHADING_RATE_SAMPLE_ORDER_SAMPLE_MAJOR_NV = 0x95b0;

/// Commands

export const def_glBindShadingRateImageNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindShadingRateImageNV!: Deno.UnsafeFnPointer<typeof def_glBindShadingRateImageNV>;

export function BindShadingRateImageNV(
  texture: GLuint,
): void {
  fn_glBindShadingRateImageNV.call(
    texture,
  );
}

export const def_glGetShadingRateImagePaletteNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetShadingRateImagePaletteNV!: Deno.UnsafeFnPointer<typeof def_glGetShadingRateImagePaletteNV>;

export function GetShadingRateImagePaletteNV(
  viewport: GLuint,
  entry: GLuint,
  rate: Buffer,
): void {
  fn_glGetShadingRateImagePaletteNV.call(
    viewport,
    entry,
    bufferToFFI(rate),
  );
}

export const def_glGetShadingRateSampleLocationivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetShadingRateSampleLocationivNV!: Deno.UnsafeFnPointer<typeof def_glGetShadingRateSampleLocationivNV>;

export function GetShadingRateSampleLocationivNV(
  rate: GLenum,
  samples: GLuint,
  index: GLuint,
  location: Buffer,
): void {
  fn_glGetShadingRateSampleLocationivNV.call(
    rate,
    samples,
    index,
    bufferToFFI(location),
  );
}

export const def_glShadingRateImageBarrierNV = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glShadingRateImageBarrierNV!: Deno.UnsafeFnPointer<typeof def_glShadingRateImageBarrierNV>;

export function ShadingRateImageBarrierNV(
  synchronize: GLboolean,
): void {
  fn_glShadingRateImageBarrierNV.call(
    synchronize,
  );
}

export const def_glShadingRateImagePaletteNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glShadingRateImagePaletteNV!: Deno.UnsafeFnPointer<typeof def_glShadingRateImagePaletteNV>;

export function ShadingRateImagePaletteNV(
  viewport: GLuint,
  first: GLuint,
  count: GLsizei,
  rates: Buffer,
): void {
  fn_glShadingRateImagePaletteNV.call(
    viewport,
    first,
    count,
    bufferToFFI(rates),
  );
}

export const def_glShadingRateSampleOrderNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glShadingRateSampleOrderNV!: Deno.UnsafeFnPointer<typeof def_glShadingRateSampleOrderNV>;

export function ShadingRateSampleOrderNV(
  order: GLenum,
): void {
  fn_glShadingRateSampleOrderNV.call(
    order,
  );
}

export const def_glShadingRateSampleOrderCustomNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glShadingRateSampleOrderCustomNV!: Deno.UnsafeFnPointer<typeof def_glShadingRateSampleOrderCustomNV>;

export function ShadingRateSampleOrderCustomNV(
  rate: GLenum,
  samples: GLuint,
  locations: Buffer,
): void {
  fn_glShadingRateSampleOrderCustomNV.call(
    rate,
    samples,
    bufferToFFI(locations),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindShadingRateImageNV = new Deno.UnsafeFnPointer(proc("glBindShadingRateImageNV"), def_glBindShadingRateImageNV);
  fn_glGetShadingRateImagePaletteNV = new Deno.UnsafeFnPointer(proc("glGetShadingRateImagePaletteNV"), def_glGetShadingRateImagePaletteNV);
  fn_glGetShadingRateSampleLocationivNV = new Deno.UnsafeFnPointer(proc("glGetShadingRateSampleLocationivNV"), def_glGetShadingRateSampleLocationivNV);
  fn_glShadingRateImageBarrierNV = new Deno.UnsafeFnPointer(proc("glShadingRateImageBarrierNV"), def_glShadingRateImageBarrierNV);
  fn_glShadingRateImagePaletteNV = new Deno.UnsafeFnPointer(proc("glShadingRateImagePaletteNV"), def_glShadingRateImagePaletteNV);
  fn_glShadingRateSampleOrderNV = new Deno.UnsafeFnPointer(proc("glShadingRateSampleOrderNV"), def_glShadingRateSampleOrderNV);
  fn_glShadingRateSampleOrderCustomNV = new Deno.UnsafeFnPointer(proc("glShadingRateSampleOrderCustomNV"), def_glShadingRateSampleOrderCustomNV);
}
