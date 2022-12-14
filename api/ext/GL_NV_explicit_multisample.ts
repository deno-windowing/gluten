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
export const SAMPLE_POSITION_NV = 0x8e50;
export const SAMPLE_MASK_NV = 0x8e51;
export const SAMPLE_MASK_VALUE_NV = 0x8e52;
export const TEXTURE_BINDING_RENDERBUFFER_NV = 0x8e53;
export const TEXTURE_RENDERBUFFER_DATA_STORE_BINDING_NV = 0x8e54;
export const TEXTURE_RENDERBUFFER_NV = 0x8e55;
export const SAMPLER_RENDERBUFFER_NV = 0x8e56;
export const INT_SAMPLER_RENDERBUFFER_NV = 0x8e57;
export const UNSIGNED_INT_SAMPLER_RENDERBUFFER_NV = 0x8e58;
export const MAX_SAMPLE_MASK_WORDS_NV = 0x8e59;

/// Commands

export const def_glGetMultisamplefvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultisamplefvNV!: Deno.UnsafeFnPointer<typeof def_glGetMultisamplefvNV>;

export function GetMultisamplefvNV(
  pname: GLenum,
  index: GLuint,
  val: Buffer,
): void {
  fn_glGetMultisamplefvNV.call(
    pname,
    index,
    bufferToFFI(val),
  );
}

export const def_glSampleMaskIndexedNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSampleMaskIndexedNV!: Deno.UnsafeFnPointer<typeof def_glSampleMaskIndexedNV>;

export function SampleMaskIndexedNV(
  index: GLuint,
  mask: GLbitfield,
): void {
  fn_glSampleMaskIndexedNV.call(
    index,
    mask,
  );
}

export const def_glTexRenderbufferNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexRenderbufferNV!: Deno.UnsafeFnPointer<typeof def_glTexRenderbufferNV>;

export function TexRenderbufferNV(
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glTexRenderbufferNV.call(
    target,
    renderbuffer,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetMultisamplefvNV = new Deno.UnsafeFnPointer(proc("glGetMultisamplefvNV"), def_glGetMultisamplefvNV);
  fn_glSampleMaskIndexedNV = new Deno.UnsafeFnPointer(proc("glSampleMaskIndexedNV"), def_glSampleMaskIndexedNV);
  fn_glTexRenderbufferNV = new Deno.UnsafeFnPointer(proc("glTexRenderbufferNV"), def_glTexRenderbufferNV);
}
