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
export const MAX_PROGRAM_PARAMETER_BUFFER_BINDINGS_NV = 0x8da0;
export const MAX_PROGRAM_PARAMETER_BUFFER_SIZE_NV = 0x8da1;
export const VERTEX_PROGRAM_PARAMETER_BUFFER_NV = 0x8da2;
export const GEOMETRY_PROGRAM_PARAMETER_BUFFER_NV = 0x8da3;
export const FRAGMENT_PROGRAM_PARAMETER_BUFFER_NV = 0x8da4;

/// Commands

export const def_glProgramBufferParametersfvNV = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramBufferParametersfvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramBufferParametersfvNV
>;

export function ProgramBufferParametersfvNV(
  target: GLenum,
  bindingIndex: GLuint,
  wordIndex: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramBufferParametersfvNV.call(
    target,
    bindingIndex,
    wordIndex,
    count,
    bufferToFFI(params),
  );
}

export const def_glProgramBufferParametersIivNV = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramBufferParametersIivNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramBufferParametersIivNV
>;

export function ProgramBufferParametersIivNV(
  target: GLenum,
  bindingIndex: GLuint,
  wordIndex: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramBufferParametersIivNV.call(
    target,
    bindingIndex,
    wordIndex,
    count,
    bufferToFFI(params),
  );
}

export const def_glProgramBufferParametersIuivNV = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramBufferParametersIuivNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramBufferParametersIuivNV
>;

export function ProgramBufferParametersIuivNV(
  target: GLenum,
  bindingIndex: GLuint,
  wordIndex: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramBufferParametersIuivNV.call(
    target,
    bindingIndex,
    wordIndex,
    count,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramBufferParametersfvNV = new Deno.UnsafeFnPointer(
    proc("glProgramBufferParametersfvNV"),
    def_glProgramBufferParametersfvNV,
  );
  fn_glProgramBufferParametersIivNV = new Deno.UnsafeFnPointer(
    proc("glProgramBufferParametersIivNV"),
    def_glProgramBufferParametersIivNV,
  );
  fn_glProgramBufferParametersIuivNV = new Deno.UnsafeFnPointer(
    proc("glProgramBufferParametersIuivNV"),
    def_glProgramBufferParametersIuivNV,
  );
}
