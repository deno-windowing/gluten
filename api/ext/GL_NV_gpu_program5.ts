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
export const MAX_GEOMETRY_PROGRAM_INVOCATIONS_NV = 0x8e5a;
export const MIN_FRAGMENT_INTERPOLATION_OFFSET_NV = 0x8e5b;
export const MAX_FRAGMENT_INTERPOLATION_OFFSET_NV = 0x8e5c;
export const FRAGMENT_PROGRAM_INTERPOLATION_OFFSET_BITS_NV = 0x8e5d;
export const MIN_PROGRAM_TEXTURE_GATHER_OFFSET_NV = 0x8e5e;
export const MAX_PROGRAM_TEXTURE_GATHER_OFFSET_NV = 0x8e5f;
export const MAX_PROGRAM_SUBROUTINE_PARAMETERS_NV = 0x8f44;
export const MAX_PROGRAM_SUBROUTINE_NUM_NV = 0x8f45;

/// Commands

export const def_glProgramSubroutineParametersuivNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramSubroutineParametersuivNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramSubroutineParametersuivNV
>;

export function ProgramSubroutineParametersuivNV(
  target: GLenum,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramSubroutineParametersuivNV.call(
    target,
    count,
    bufferToFFI(params),
  );
}

export const def_glGetProgramSubroutineParameteruivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramSubroutineParameteruivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramSubroutineParameteruivNV
>;

export function GetProgramSubroutineParameteruivNV(
  target: GLenum,
  index: GLuint,
  param: Buffer,
): void {
  fn_glGetProgramSubroutineParameteruivNV.call(
    target,
    index,
    bufferToFFI(param),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramSubroutineParametersuivNV = new Deno.UnsafeFnPointer(
    proc("glProgramSubroutineParametersuivNV"),
    def_glProgramSubroutineParametersuivNV,
  );
  fn_glGetProgramSubroutineParameteruivNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramSubroutineParameteruivNV"),
    def_glGetProgramSubroutineParameteruivNV,
  );
}
