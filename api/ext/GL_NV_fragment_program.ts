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
export const MAX_FRAGMENT_PROGRAM_LOCAL_PARAMETERS_NV = 0x8868;
export const FRAGMENT_PROGRAM_NV = 0x8870;
export const MAX_TEXTURE_COORDS_NV = 0x8871;
export const MAX_TEXTURE_IMAGE_UNITS_NV = 0x8872;
export const FRAGMENT_PROGRAM_BINDING_NV = 0x8873;
export const PROGRAM_ERROR_STRING_NV = 0x8874;

/// Commands

export const def_glProgramNamedParameter4fNV = {
  parameters: ["u32", "i32", "buffer", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramNamedParameter4fNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramNamedParameter4fNV
>;

export function ProgramNamedParameter4fNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramNamedParameter4fNV.call(
    id,
    len,
    bufferToFFI(name),
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramNamedParameter4fvNV = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glProgramNamedParameter4fvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramNamedParameter4fvNV
>;

export function ProgramNamedParameter4fvNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  v: Buffer,
): void {
  fn_glProgramNamedParameter4fvNV.call(
    id,
    len,
    bufferToFFI(name),
    bufferToFFI(v),
  );
}

export const def_glProgramNamedParameter4dNV = {
  parameters: ["u32", "i32", "buffer", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramNamedParameter4dNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramNamedParameter4dNV
>;

export function ProgramNamedParameter4dNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramNamedParameter4dNV.call(
    id,
    len,
    bufferToFFI(name),
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramNamedParameter4dvNV = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glProgramNamedParameter4dvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramNamedParameter4dvNV
>;

export function ProgramNamedParameter4dvNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  v: Buffer,
): void {
  fn_glProgramNamedParameter4dvNV.call(
    id,
    len,
    bufferToFFI(name),
    bufferToFFI(v),
  );
}

export const def_glGetProgramNamedParameterfvNV = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramNamedParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramNamedParameterfvNV
>;

export function GetProgramNamedParameterfvNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  params: Buffer,
): void {
  fn_glGetProgramNamedParameterfvNV.call(
    id,
    len,
    bufferToFFI(name),
    bufferToFFI(params),
  );
}

export const def_glGetProgramNamedParameterdvNV = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramNamedParameterdvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramNamedParameterdvNV
>;

export function GetProgramNamedParameterdvNV(
  id: GLuint,
  len: GLsizei,
  name: Buffer,
  params: Buffer,
): void {
  fn_glGetProgramNamedParameterdvNV.call(
    id,
    len,
    bufferToFFI(name),
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramNamedParameter4fNV = new Deno.UnsafeFnPointer(
    proc("glProgramNamedParameter4fNV")!,
    def_glProgramNamedParameter4fNV,
  );
  fn_glProgramNamedParameter4fvNV = new Deno.UnsafeFnPointer(
    proc("glProgramNamedParameter4fvNV")!,
    def_glProgramNamedParameter4fvNV,
  );
  fn_glProgramNamedParameter4dNV = new Deno.UnsafeFnPointer(
    proc("glProgramNamedParameter4dNV")!,
    def_glProgramNamedParameter4dNV,
  );
  fn_glProgramNamedParameter4dvNV = new Deno.UnsafeFnPointer(
    proc("glProgramNamedParameter4dvNV")!,
    def_glProgramNamedParameter4dvNV,
  );
  fn_glGetProgramNamedParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramNamedParameterfvNV")!,
    def_glGetProgramNamedParameterfvNV,
  );
  fn_glGetProgramNamedParameterdvNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramNamedParameterdvNV")!,
    def_glGetProgramNamedParameterdvNV,
  );
}
