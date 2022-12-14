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
export const SHADER_STORAGE_BUFFER = 0x90d2;
export const SHADER_STORAGE_BUFFER_BINDING = 0x90d3;
export const SHADER_STORAGE_BUFFER_START = 0x90d4;
export const SHADER_STORAGE_BUFFER_SIZE = 0x90d5;
export const MAX_VERTEX_SHADER_STORAGE_BLOCKS = 0x90d6;
export const MAX_GEOMETRY_SHADER_STORAGE_BLOCKS = 0x90d7;
export const MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS = 0x90d8;
export const MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS = 0x90d9;
export const MAX_FRAGMENT_SHADER_STORAGE_BLOCKS = 0x90da;
export const MAX_COMPUTE_SHADER_STORAGE_BLOCKS = 0x90db;
export const MAX_COMBINED_SHADER_STORAGE_BLOCKS = 0x90dc;
export const MAX_SHADER_STORAGE_BUFFER_BINDINGS = 0x90dd;
export const MAX_SHADER_STORAGE_BLOCK_SIZE = 0x90de;
export const SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT = 0x90df;
export const SHADER_STORAGE_BARRIER_BIT = 0x2000;
export const MAX_COMBINED_SHADER_OUTPUT_RESOURCES = 0x8f39;
export const MAX_COMBINED_IMAGE_UNITS_AND_FRAGMENT_OUTPUTS = 0x8f39;

/// Commands

export const def_glShaderStorageBlockBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glShaderStorageBlockBinding!: Deno.UnsafeFnPointer<typeof def_glShaderStorageBlockBinding>;

export function ShaderStorageBlockBinding(
  program: GLuint,
  storageBlockIndex: GLuint,
  storageBlockBinding: GLuint,
): void {
  fn_glShaderStorageBlockBinding.call(
    program,
    storageBlockIndex,
    storageBlockBinding,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glShaderStorageBlockBinding = new Deno.UnsafeFnPointer(proc("glShaderStorageBlockBinding"), def_glShaderStorageBlockBinding);
}
