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
export const INT64_ARB = 0x140e;
export const UNSIGNED_INT64_ARB = 0x140f;
export const INT64_VEC2_ARB = 0x8fe9;
export const INT64_VEC3_ARB = 0x8fea;
export const INT64_VEC4_ARB = 0x8feb;
export const UNSIGNED_INT64_VEC2_ARB = 0x8ff5;
export const UNSIGNED_INT64_VEC3_ARB = 0x8ff6;
export const UNSIGNED_INT64_VEC4_ARB = 0x8ff7;

/// Commands

export const def_glUniform1i64ARB = {
  parameters: ["i32", "i64"],
  result: "void",
} as const;

let fn_glUniform1i64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform1i64ARB>;

export function Uniform1i64ARB(
  location: GLint,
  x: GLint64,
): void {
  fn_glUniform1i64ARB.call(
    location,
    x,
  );
}

export const def_glUniform2i64ARB = {
  parameters: ["i32", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform2i64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform2i64ARB>;

export function Uniform2i64ARB(
  location: GLint,
  x: GLint64,
  y: GLint64,
): void {
  fn_glUniform2i64ARB.call(
    location,
    x,
    y,
  );
}

export const def_glUniform3i64ARB = {
  parameters: ["i32", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform3i64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform3i64ARB>;

export function Uniform3i64ARB(
  location: GLint,
  x: GLint64,
  y: GLint64,
  z: GLint64,
): void {
  fn_glUniform3i64ARB.call(
    location,
    x,
    y,
    z,
  );
}

export const def_glUniform4i64ARB = {
  parameters: ["i32", "i64", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform4i64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform4i64ARB>;

export function Uniform4i64ARB(
  location: GLint,
  x: GLint64,
  y: GLint64,
  z: GLint64,
  w: GLint64,
): void {
  fn_glUniform4i64ARB.call(
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glUniform1i64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1i64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform1i64vARB>;

export function Uniform1i64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1i64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2i64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2i64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform2i64vARB>;

export function Uniform2i64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2i64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3i64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3i64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform3i64vARB>;

export function Uniform3i64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3i64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4i64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4i64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform4i64vARB>;

export function Uniform4i64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4i64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform1ui64ARB = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniform1ui64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform1ui64ARB>;

export function Uniform1ui64ARB(
  location: GLint,
  x: GLuint64,
): void {
  fn_glUniform1ui64ARB.call(
    location,
    Deno.UnsafePointer.value(x),
  );
}

export const def_glUniform2ui64ARB = {
  parameters: ["i32", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform2ui64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform2ui64ARB>;

export function Uniform2ui64ARB(
  location: GLint,
  x: GLuint64,
  y: GLuint64,
): void {
  fn_glUniform2ui64ARB.call(
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
  );
}

export const def_glUniform3ui64ARB = {
  parameters: ["i32", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform3ui64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform3ui64ARB>;

export function Uniform3ui64ARB(
  location: GLint,
  x: GLuint64,
  y: GLuint64,
  z: GLuint64,
): void {
  fn_glUniform3ui64ARB.call(
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
    Deno.UnsafePointer.value(z),
  );
}

export const def_glUniform4ui64ARB = {
  parameters: ["i32", "u64", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform4ui64ARB!: Deno.UnsafeFnPointer<typeof def_glUniform4ui64ARB>;

export function Uniform4ui64ARB(
  location: GLint,
  x: GLuint64,
  y: GLuint64,
  z: GLuint64,
  w: GLuint64,
): void {
  fn_glUniform4ui64ARB.call(
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
    Deno.UnsafePointer.value(z),
    Deno.UnsafePointer.value(w),
  );
}

export const def_glUniform1ui64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1ui64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform1ui64vARB>;

export function Uniform1ui64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1ui64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2ui64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2ui64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform2ui64vARB>;

export function Uniform2ui64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2ui64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3ui64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3ui64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform3ui64vARB>;

export function Uniform3ui64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3ui64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4ui64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4ui64vARB!: Deno.UnsafeFnPointer<typeof def_glUniform4ui64vARB>;

export function Uniform4ui64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4ui64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glGetUniformi64vARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformi64vARB!: Deno.UnsafeFnPointer<typeof def_glGetUniformi64vARB>;

export function GetUniformi64vARB(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformi64vARB.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetUniformui64vARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformui64vARB!: Deno.UnsafeFnPointer<typeof def_glGetUniformui64vARB>;

export function GetUniformui64vARB(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformui64vARB.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformi64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformi64vARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformi64vARB>;

export function GetnUniformi64vARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformi64vARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformui64vARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformui64vARB>;

export function GetnUniformui64vARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformui64vARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glProgramUniform1i64ARB = {
  parameters: ["u32", "i32", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform1i64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1i64ARB>;

export function ProgramUniform1i64ARB(
  program: GLuint,
  location: GLint,
  x: GLint64,
): void {
  fn_glProgramUniform1i64ARB.call(
    program,
    location,
    x,
  );
}

export const def_glProgramUniform2i64ARB = {
  parameters: ["u32", "i32", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform2i64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2i64ARB>;

export function ProgramUniform2i64ARB(
  program: GLuint,
  location: GLint,
  x: GLint64,
  y: GLint64,
): void {
  fn_glProgramUniform2i64ARB.call(
    program,
    location,
    x,
    y,
  );
}

export const def_glProgramUniform3i64ARB = {
  parameters: ["u32", "i32", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform3i64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3i64ARB>;

export function ProgramUniform3i64ARB(
  program: GLuint,
  location: GLint,
  x: GLint64,
  y: GLint64,
  z: GLint64,
): void {
  fn_glProgramUniform3i64ARB.call(
    program,
    location,
    x,
    y,
    z,
  );
}

export const def_glProgramUniform4i64ARB = {
  parameters: ["u32", "i32", "i64", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform4i64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4i64ARB>;

export function ProgramUniform4i64ARB(
  program: GLuint,
  location: GLint,
  x: GLint64,
  y: GLint64,
  z: GLint64,
  w: GLint64,
): void {
  fn_glProgramUniform4i64ARB.call(
    program,
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramUniform1i64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1i64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1i64vARB>;

export function ProgramUniform1i64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1i64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2i64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2i64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2i64vARB>;

export function ProgramUniform2i64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2i64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3i64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3i64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3i64vARB>;

export function ProgramUniform3i64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3i64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4i64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4i64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4i64vARB>;

export function ProgramUniform4i64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4i64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1ui64ARB = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform1ui64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1ui64ARB>;

export function ProgramUniform1ui64ARB(
  program: GLuint,
  location: GLint,
  x: GLuint64,
): void {
  fn_glProgramUniform1ui64ARB.call(
    program,
    location,
    Deno.UnsafePointer.value(x),
  );
}

export const def_glProgramUniform2ui64ARB = {
  parameters: ["u32", "i32", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform2ui64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2ui64ARB>;

export function ProgramUniform2ui64ARB(
  program: GLuint,
  location: GLint,
  x: GLuint64,
  y: GLuint64,
): void {
  fn_glProgramUniform2ui64ARB.call(
    program,
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
  );
}

export const def_glProgramUniform3ui64ARB = {
  parameters: ["u32", "i32", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform3ui64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3ui64ARB>;

export function ProgramUniform3ui64ARB(
  program: GLuint,
  location: GLint,
  x: GLuint64,
  y: GLuint64,
  z: GLuint64,
): void {
  fn_glProgramUniform3ui64ARB.call(
    program,
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
    Deno.UnsafePointer.value(z),
  );
}

export const def_glProgramUniform4ui64ARB = {
  parameters: ["u32", "i32", "u64", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform4ui64ARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4ui64ARB>;

export function ProgramUniform4ui64ARB(
  program: GLuint,
  location: GLint,
  x: GLuint64,
  y: GLuint64,
  z: GLuint64,
  w: GLuint64,
): void {
  fn_glProgramUniform4ui64ARB.call(
    program,
    location,
    Deno.UnsafePointer.value(x),
    Deno.UnsafePointer.value(y),
    Deno.UnsafePointer.value(z),
    Deno.UnsafePointer.value(w),
  );
}

export const def_glProgramUniform1ui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1ui64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1ui64vARB>;

export function ProgramUniform1ui64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1ui64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2ui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2ui64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2ui64vARB>;

export function ProgramUniform2ui64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2ui64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3ui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3ui64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3ui64vARB>;

export function ProgramUniform3ui64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3ui64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4ui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4ui64vARB!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4ui64vARB>;

export function ProgramUniform4ui64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4ui64vARB.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUniform1i64ARB = new Deno.UnsafeFnPointer(proc("glUniform1i64ARB")!, def_glUniform1i64ARB);
  fn_glUniform2i64ARB = new Deno.UnsafeFnPointer(proc("glUniform2i64ARB")!, def_glUniform2i64ARB);
  fn_glUniform3i64ARB = new Deno.UnsafeFnPointer(proc("glUniform3i64ARB")!, def_glUniform3i64ARB);
  fn_glUniform4i64ARB = new Deno.UnsafeFnPointer(proc("glUniform4i64ARB")!, def_glUniform4i64ARB);
  fn_glUniform1i64vARB = new Deno.UnsafeFnPointer(proc("glUniform1i64vARB")!, def_glUniform1i64vARB);
  fn_glUniform2i64vARB = new Deno.UnsafeFnPointer(proc("glUniform2i64vARB")!, def_glUniform2i64vARB);
  fn_glUniform3i64vARB = new Deno.UnsafeFnPointer(proc("glUniform3i64vARB")!, def_glUniform3i64vARB);
  fn_glUniform4i64vARB = new Deno.UnsafeFnPointer(proc("glUniform4i64vARB")!, def_glUniform4i64vARB);
  fn_glUniform1ui64ARB = new Deno.UnsafeFnPointer(proc("glUniform1ui64ARB")!, def_glUniform1ui64ARB);
  fn_glUniform2ui64ARB = new Deno.UnsafeFnPointer(proc("glUniform2ui64ARB")!, def_glUniform2ui64ARB);
  fn_glUniform3ui64ARB = new Deno.UnsafeFnPointer(proc("glUniform3ui64ARB")!, def_glUniform3ui64ARB);
  fn_glUniform4ui64ARB = new Deno.UnsafeFnPointer(proc("glUniform4ui64ARB")!, def_glUniform4ui64ARB);
  fn_glUniform1ui64vARB = new Deno.UnsafeFnPointer(proc("glUniform1ui64vARB")!, def_glUniform1ui64vARB);
  fn_glUniform2ui64vARB = new Deno.UnsafeFnPointer(proc("glUniform2ui64vARB")!, def_glUniform2ui64vARB);
  fn_glUniform3ui64vARB = new Deno.UnsafeFnPointer(proc("glUniform3ui64vARB")!, def_glUniform3ui64vARB);
  fn_glUniform4ui64vARB = new Deno.UnsafeFnPointer(proc("glUniform4ui64vARB")!, def_glUniform4ui64vARB);
  fn_glGetUniformi64vARB = new Deno.UnsafeFnPointer(proc("glGetUniformi64vARB")!, def_glGetUniformi64vARB);
  fn_glGetUniformui64vARB = new Deno.UnsafeFnPointer(proc("glGetUniformui64vARB")!, def_glGetUniformui64vARB);
  fn_glGetnUniformi64vARB = new Deno.UnsafeFnPointer(proc("glGetnUniformi64vARB")!, def_glGetnUniformi64vARB);
  fn_glGetnUniformui64vARB = new Deno.UnsafeFnPointer(proc("glGetnUniformui64vARB")!, def_glGetnUniformui64vARB);
  fn_glProgramUniform1i64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform1i64ARB")!, def_glProgramUniform1i64ARB);
  fn_glProgramUniform2i64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform2i64ARB")!, def_glProgramUniform2i64ARB);
  fn_glProgramUniform3i64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform3i64ARB")!, def_glProgramUniform3i64ARB);
  fn_glProgramUniform4i64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform4i64ARB")!, def_glProgramUniform4i64ARB);
  fn_glProgramUniform1i64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform1i64vARB")!, def_glProgramUniform1i64vARB);
  fn_glProgramUniform2i64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform2i64vARB")!, def_glProgramUniform2i64vARB);
  fn_glProgramUniform3i64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform3i64vARB")!, def_glProgramUniform3i64vARB);
  fn_glProgramUniform4i64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform4i64vARB")!, def_glProgramUniform4i64vARB);
  fn_glProgramUniform1ui64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform1ui64ARB")!, def_glProgramUniform1ui64ARB);
  fn_glProgramUniform2ui64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform2ui64ARB")!, def_glProgramUniform2ui64ARB);
  fn_glProgramUniform3ui64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform3ui64ARB")!, def_glProgramUniform3ui64ARB);
  fn_glProgramUniform4ui64ARB = new Deno.UnsafeFnPointer(proc("glProgramUniform4ui64ARB")!, def_glProgramUniform4ui64ARB);
  fn_glProgramUniform1ui64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform1ui64vARB")!, def_glProgramUniform1ui64vARB);
  fn_glProgramUniform2ui64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform2ui64vARB")!, def_glProgramUniform2ui64vARB);
  fn_glProgramUniform3ui64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform3ui64vARB")!, def_glProgramUniform3ui64vARB);
  fn_glProgramUniform4ui64vARB = new Deno.UnsafeFnPointer(proc("glProgramUniform4ui64vARB")!, def_glProgramUniform4ui64vARB);
}
