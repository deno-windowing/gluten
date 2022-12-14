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
export const FLOAT_MAT2x3_NV = 0x8b65;
export const FLOAT_MAT2x4_NV = 0x8b66;
export const FLOAT_MAT3x2_NV = 0x8b67;
export const FLOAT_MAT3x4_NV = 0x8b68;
export const FLOAT_MAT4x2_NV = 0x8b69;
export const FLOAT_MAT4x3_NV = 0x8b6a;

/// Commands

export const def_glUniformMatrix2x3fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x3fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x3fvNV>;

export function UniformMatrix2x3fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x3fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x2fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x2fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x2fvNV>;

export function UniformMatrix3x2fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x2fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x4fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x4fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x4fvNV>;

export function UniformMatrix2x4fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x4fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x2fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x2fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x2fvNV>;

export function UniformMatrix4x2fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x2fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x4fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x4fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x4fvNV>;

export function UniformMatrix3x4fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x4fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x3fvNV = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x3fvNV!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x3fvNV>;

export function UniformMatrix4x3fvNV(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x3fvNV.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUniformMatrix2x3fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x3fvNV"), def_glUniformMatrix2x3fvNV);
  fn_glUniformMatrix3x2fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x2fvNV"), def_glUniformMatrix3x2fvNV);
  fn_glUniformMatrix2x4fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x4fvNV"), def_glUniformMatrix2x4fvNV);
  fn_glUniformMatrix4x2fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x2fvNV"), def_glUniformMatrix4x2fvNV);
  fn_glUniformMatrix3x4fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x4fvNV"), def_glUniformMatrix3x4fvNV);
  fn_glUniformMatrix4x3fvNV = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x3fvNV"), def_glUniformMatrix4x3fvNV);
}
