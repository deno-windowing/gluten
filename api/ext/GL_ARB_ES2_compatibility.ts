/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
const isTypedArray = (arr: unknown) => arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1));
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
export const FIXED = 0x140c;
export const IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;
export const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;
export const LOW_FLOAT = 0x8df0;
export const MEDIUM_FLOAT = 0x8df1;
export const HIGH_FLOAT = 0x8df2;
export const LOW_INT = 0x8df3;
export const MEDIUM_INT = 0x8df4;
export const HIGH_INT = 0x8df5;
export const SHADER_COMPILER = 0x8dfa;
export const SHADER_BINARY_FORMATS = 0x8df8;
export const NUM_SHADER_BINARY_FORMATS = 0x8df9;
export const MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;
export const MAX_VARYING_VECTORS = 0x8dfc;
export const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;
export const RGB565 = 0x8d62;

/// Commands

export const def_glReleaseShaderCompiler = {
  parameters: [],
  result: "void",
} as const;

let fn_glReleaseShaderCompiler!: Deno.UnsafeFnPointer<typeof def_glReleaseShaderCompiler>;

export function ReleaseShaderCompiler(): void {
  fn_glReleaseShaderCompiler.call();
}

export const def_glShaderBinary = {
  parameters: ["i32", "buffer", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glShaderBinary!: Deno.UnsafeFnPointer<typeof def_glShaderBinary>;

export function ShaderBinary(
  count: GLsizei,
  shaders: Buffer,
  binaryFormat: GLenum,
  binary: Buffer,
  length: GLsizei,
): void {
  fn_glShaderBinary.call(
    count,
    bufferToFFI(shaders),
    binaryFormat,
    bufferToFFI(binary),
    length,
  );
}

export const def_glGetShaderPrecisionFormat = {
  parameters: ["u32", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderPrecisionFormat!: Deno.UnsafeFnPointer<typeof def_glGetShaderPrecisionFormat>;

export function GetShaderPrecisionFormat(
  shadertype: GLenum,
  precisiontype: GLenum,
  range: Buffer,
  precision: Buffer,
): void {
  fn_glGetShaderPrecisionFormat.call(
    shadertype,
    precisiontype,
    bufferToFFI(range),
    bufferToFFI(precision),
  );
}

export const def_glDepthRangef = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glDepthRangef!: Deno.UnsafeFnPointer<typeof def_glDepthRangef>;

export function DepthRangef(
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glDepthRangef.call(
    n,
    f,
  );
}

export const def_glClearDepthf = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glClearDepthf!: Deno.UnsafeFnPointer<typeof def_glClearDepthf>;

export function ClearDepthf(
  d: GLfloat,
): void {
  fn_glClearDepthf.call(
    d,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glReleaseShaderCompiler = new Deno.UnsafeFnPointer(proc("glReleaseShaderCompiler")!, def_glReleaseShaderCompiler);
  fn_glShaderBinary = new Deno.UnsafeFnPointer(proc("glShaderBinary")!, def_glShaderBinary);
  fn_glGetShaderPrecisionFormat = new Deno.UnsafeFnPointer(proc("glGetShaderPrecisionFormat")!, def_glGetShaderPrecisionFormat);
  fn_glDepthRangef = new Deno.UnsafeFnPointer(proc("glDepthRangef")!, def_glDepthRangef);
  fn_glClearDepthf = new Deno.UnsafeFnPointer(proc("glClearDepthf")!, def_glClearDepthf);
}
