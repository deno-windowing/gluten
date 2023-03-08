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
export const SAMPLE_POSITION = 0x8e50;
export const SAMPLE_MASK = 0x8e51;
export const SAMPLE_MASK_VALUE = 0x8e52;
export const MAX_SAMPLE_MASK_WORDS = 0x8e59;
export const TEXTURE_2D_MULTISAMPLE = 0x9100;
export const PROXY_TEXTURE_2D_MULTISAMPLE = 0x9101;
export const TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9102;
export const PROXY_TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9103;
export const TEXTURE_BINDING_2D_MULTISAMPLE = 0x9104;
export const TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY = 0x9105;
export const TEXTURE_SAMPLES = 0x9106;
export const TEXTURE_FIXED_SAMPLE_LOCATIONS = 0x9107;
export const SAMPLER_2D_MULTISAMPLE = 0x9108;
export const INT_SAMPLER_2D_MULTISAMPLE = 0x9109;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE = 0x910a;
export const SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910b;
export const INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910c;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910d;
export const MAX_COLOR_TEXTURE_SAMPLES = 0x910e;
export const MAX_DEPTH_TEXTURE_SAMPLES = 0x910f;
export const MAX_INTEGER_SAMPLES = 0x9110;

/// Commands

export const def_glTexImage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage2DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTexImage2DMultisample
>;

export function TexImage2DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexImage2DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glTexImage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage3DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTexImage3DMultisample
>;

export function TexImage3DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexImage3DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    depth,
    fixedsamplelocations,
  );
}

export const def_glGetMultisamplefv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultisamplefv!: Deno.UnsafeFnPointer<typeof def_glGetMultisamplefv>;

export function GetMultisamplefv(
  pname: GLenum,
  index: GLuint,
  val: Buffer,
): void {
  fn_glGetMultisamplefv.call(
    pname,
    index,
    bufferToFFI(val),
  );
}

export const def_glSampleMaski = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSampleMaski!: Deno.UnsafeFnPointer<typeof def_glSampleMaski>;

export function SampleMaski(
  maskNumber: GLuint,
  mask: GLbitfield,
): void {
  fn_glSampleMaski.call(
    maskNumber,
    mask,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexImage2DMultisample = new Deno.UnsafeFnPointer(
    proc("glTexImage2DMultisample")!,
    def_glTexImage2DMultisample,
  );
  fn_glTexImage3DMultisample = new Deno.UnsafeFnPointer(
    proc("glTexImage3DMultisample")!,
    def_glTexImage3DMultisample,
  );
  fn_glGetMultisamplefv = new Deno.UnsafeFnPointer(
    proc("glGetMultisamplefv")!,
    def_glGetMultisamplefv,
  );
  fn_glSampleMaski = new Deno.UnsafeFnPointer(
    proc("glSampleMaski")!,
    def_glSampleMaski,
  );
}
