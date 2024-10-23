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
export const TEXTURE_COVERAGE_SAMPLES_NV = 0x9045;
export const TEXTURE_COLOR_SAMPLES_NV = 0x9046;

/// Commands

export const def_glTexImage2DMultisampleCoverageNV = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage2DMultisampleCoverageNV!: Deno.UnsafeFnPointer<
  typeof def_glTexImage2DMultisampleCoverageNV
>;

export function TexImage2DMultisampleCoverageNV(
  target: GLenum,
  coverageSamples: GLsizei,
  colorSamples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTexImage2DMultisampleCoverageNV.call(
    target,
    coverageSamples,
    colorSamples,
    internalFormat,
    width,
    height,
    fixedSampleLocations,
  );
}

export const def_glTexImage3DMultisampleCoverageNV = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage3DMultisampleCoverageNV!: Deno.UnsafeFnPointer<
  typeof def_glTexImage3DMultisampleCoverageNV
>;

export function TexImage3DMultisampleCoverageNV(
  target: GLenum,
  coverageSamples: GLsizei,
  colorSamples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTexImage3DMultisampleCoverageNV.call(
    target,
    coverageSamples,
    colorSamples,
    internalFormat,
    width,
    height,
    depth,
    fixedSampleLocations,
  );
}

export const def_glTextureImage2DMultisampleNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureImage2DMultisampleNV!: Deno.UnsafeFnPointer<
  typeof def_glTextureImage2DMultisampleNV
>;

export function TextureImage2DMultisampleNV(
  texture: GLuint,
  target: GLenum,
  samples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTextureImage2DMultisampleNV.call(
    texture,
    target,
    samples,
    internalFormat,
    width,
    height,
    fixedSampleLocations,
  );
}

export const def_glTextureImage3DMultisampleNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureImage3DMultisampleNV!: Deno.UnsafeFnPointer<
  typeof def_glTextureImage3DMultisampleNV
>;

export function TextureImage3DMultisampleNV(
  texture: GLuint,
  target: GLenum,
  samples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTextureImage3DMultisampleNV.call(
    texture,
    target,
    samples,
    internalFormat,
    width,
    height,
    depth,
    fixedSampleLocations,
  );
}

export const def_glTextureImage2DMultisampleCoverageNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureImage2DMultisampleCoverageNV!: Deno.UnsafeFnPointer<
  typeof def_glTextureImage2DMultisampleCoverageNV
>;

export function TextureImage2DMultisampleCoverageNV(
  texture: GLuint,
  target: GLenum,
  coverageSamples: GLsizei,
  colorSamples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTextureImage2DMultisampleCoverageNV.call(
    texture,
    target,
    coverageSamples,
    colorSamples,
    internalFormat,
    width,
    height,
    fixedSampleLocations,
  );
}

export const def_glTextureImage3DMultisampleCoverageNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureImage3DMultisampleCoverageNV!: Deno.UnsafeFnPointer<
  typeof def_glTextureImage3DMultisampleCoverageNV
>;

export function TextureImage3DMultisampleCoverageNV(
  texture: GLuint,
  target: GLenum,
  coverageSamples: GLsizei,
  colorSamples: GLsizei,
  internalFormat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedSampleLocations: GLboolean,
): void {
  fn_glTextureImage3DMultisampleCoverageNV.call(
    texture,
    target,
    coverageSamples,
    colorSamples,
    internalFormat,
    width,
    height,
    depth,
    fixedSampleLocations,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexImage2DMultisampleCoverageNV = new Deno.UnsafeFnPointer(
    proc("glTexImage2DMultisampleCoverageNV")!,
    def_glTexImage2DMultisampleCoverageNV,
  );
  fn_glTexImage3DMultisampleCoverageNV = new Deno.UnsafeFnPointer(
    proc("glTexImage3DMultisampleCoverageNV")!,
    def_glTexImage3DMultisampleCoverageNV,
  );
  fn_glTextureImage2DMultisampleNV = new Deno.UnsafeFnPointer(
    proc("glTextureImage2DMultisampleNV")!,
    def_glTextureImage2DMultisampleNV,
  );
  fn_glTextureImage3DMultisampleNV = new Deno.UnsafeFnPointer(
    proc("glTextureImage3DMultisampleNV")!,
    def_glTextureImage3DMultisampleNV,
  );
  fn_glTextureImage2DMultisampleCoverageNV = new Deno.UnsafeFnPointer(
    proc("glTextureImage2DMultisampleCoverageNV")!,
    def_glTextureImage2DMultisampleCoverageNV,
  );
  fn_glTextureImage3DMultisampleCoverageNV = new Deno.UnsafeFnPointer(
    proc("glTextureImage3DMultisampleCoverageNV")!,
    def_glTextureImage3DMultisampleCoverageNV,
  );
}
