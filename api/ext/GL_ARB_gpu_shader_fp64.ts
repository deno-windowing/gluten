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
export const DOUBLE = 0x140a;
export const DOUBLE_VEC2 = 0x8ffc;
export const DOUBLE_VEC3 = 0x8ffd;
export const DOUBLE_VEC4 = 0x8ffe;
export const DOUBLE_MAT2 = 0x8f46;
export const DOUBLE_MAT3 = 0x8f47;
export const DOUBLE_MAT4 = 0x8f48;
export const DOUBLE_MAT2x3 = 0x8f49;
export const DOUBLE_MAT2x4 = 0x8f4a;
export const DOUBLE_MAT3x2 = 0x8f4b;
export const DOUBLE_MAT3x4 = 0x8f4c;
export const DOUBLE_MAT4x2 = 0x8f4d;
export const DOUBLE_MAT4x3 = 0x8f4e;

/// Commands

export const def_glUniform1d = {
  parameters: ["i32", "f64"],
  result: "void",
} as const;

let fn_glUniform1d!: Deno.UnsafeFnPointer<typeof def_glUniform1d>;

export function Uniform1d(
  location: GLint,
  x: GLdouble,
): void {
  fn_glUniform1d.call(
    location,
    x,
  );
}

export const def_glUniform2d = {
  parameters: ["i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform2d!: Deno.UnsafeFnPointer<typeof def_glUniform2d>;

export function Uniform2d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glUniform2d.call(
    location,
    x,
    y,
  );
}

export const def_glUniform3d = {
  parameters: ["i32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform3d!: Deno.UnsafeFnPointer<typeof def_glUniform3d>;

export function Uniform3d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glUniform3d.call(
    location,
    x,
    y,
    z,
  );
}

export const def_glUniform4d = {
  parameters: ["i32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform4d!: Deno.UnsafeFnPointer<typeof def_glUniform4d>;

export function Uniform4d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glUniform4d.call(
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glUniform1dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1dv!: Deno.UnsafeFnPointer<typeof def_glUniform1dv>;

export function Uniform1dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2dv!: Deno.UnsafeFnPointer<typeof def_glUniform2dv>;

export function Uniform2dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3dv!: Deno.UnsafeFnPointer<typeof def_glUniform3dv>;

export function Uniform3dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4dv!: Deno.UnsafeFnPointer<typeof def_glUniform4dv>;

export function Uniform4dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2dv>;

export function UniformMatrix2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3dv>;

export function UniformMatrix3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4dv>;

export function UniformMatrix4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x3dv>;

export function UniformMatrix2x3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x4dv>;

export function UniformMatrix2x4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x2dv>;

export function UniformMatrix3x2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x4dv>;

export function UniformMatrix3x4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x2dv>;

export function UniformMatrix4x2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x3dv>;

export function UniformMatrix4x3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glGetUniformdv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformdv!: Deno.UnsafeFnPointer<typeof def_glGetUniformdv>;

export function GetUniformdv(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformdv.call(
    program,
    location,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUniform1d = new Deno.UnsafeFnPointer(proc("glUniform1d")!, def_glUniform1d);
  fn_glUniform2d = new Deno.UnsafeFnPointer(proc("glUniform2d")!, def_glUniform2d);
  fn_glUniform3d = new Deno.UnsafeFnPointer(proc("glUniform3d")!, def_glUniform3d);
  fn_glUniform4d = new Deno.UnsafeFnPointer(proc("glUniform4d")!, def_glUniform4d);
  fn_glUniform1dv = new Deno.UnsafeFnPointer(proc("glUniform1dv")!, def_glUniform1dv);
  fn_glUniform2dv = new Deno.UnsafeFnPointer(proc("glUniform2dv")!, def_glUniform2dv);
  fn_glUniform3dv = new Deno.UnsafeFnPointer(proc("glUniform3dv")!, def_glUniform3dv);
  fn_glUniform4dv = new Deno.UnsafeFnPointer(proc("glUniform4dv")!, def_glUniform4dv);
  fn_glUniformMatrix2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2dv")!, def_glUniformMatrix2dv);
  fn_glUniformMatrix3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3dv")!, def_glUniformMatrix3dv);
  fn_glUniformMatrix4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4dv")!, def_glUniformMatrix4dv);
  fn_glUniformMatrix2x3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x3dv")!, def_glUniformMatrix2x3dv);
  fn_glUniformMatrix2x4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x4dv")!, def_glUniformMatrix2x4dv);
  fn_glUniformMatrix3x2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x2dv")!, def_glUniformMatrix3x2dv);
  fn_glUniformMatrix3x4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x4dv")!, def_glUniformMatrix3x4dv);
  fn_glUniformMatrix4x2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x2dv")!, def_glUniformMatrix4x2dv);
  fn_glUniformMatrix4x3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x3dv")!, def_glUniformMatrix4x3dv);
  fn_glGetUniformdv = new Deno.UnsafeFnPointer(proc("glGetUniformdv")!, def_glGetUniformdv);
}
