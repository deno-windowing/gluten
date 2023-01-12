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
export const INT64_NV = 0x140e;
export const UNSIGNED_INT64_NV = 0x140f;
export const INT8_NV = 0x8fe0;
export const INT8_VEC2_NV = 0x8fe1;
export const INT8_VEC3_NV = 0x8fe2;
export const INT8_VEC4_NV = 0x8fe3;
export const INT16_NV = 0x8fe4;
export const INT16_VEC2_NV = 0x8fe5;
export const INT16_VEC3_NV = 0x8fe6;
export const INT16_VEC4_NV = 0x8fe7;
export const INT64_VEC2_NV = 0x8fe9;
export const INT64_VEC3_NV = 0x8fea;
export const INT64_VEC4_NV = 0x8feb;
export const UNSIGNED_INT8_NV = 0x8fec;
export const UNSIGNED_INT8_VEC2_NV = 0x8fed;
export const UNSIGNED_INT8_VEC3_NV = 0x8fee;
export const UNSIGNED_INT8_VEC4_NV = 0x8fef;
export const UNSIGNED_INT16_NV = 0x8ff0;
export const UNSIGNED_INT16_VEC2_NV = 0x8ff1;
export const UNSIGNED_INT16_VEC3_NV = 0x8ff2;
export const UNSIGNED_INT16_VEC4_NV = 0x8ff3;
export const UNSIGNED_INT64_VEC2_NV = 0x8ff5;
export const UNSIGNED_INT64_VEC3_NV = 0x8ff6;
export const UNSIGNED_INT64_VEC4_NV = 0x8ff7;
export const FLOAT16_NV = 0x8ff8;
export const FLOAT16_VEC2_NV = 0x8ff9;
export const FLOAT16_VEC3_NV = 0x8ffa;
export const FLOAT16_VEC4_NV = 0x8ffb;
export const PATCHES = 0xe;

/// Commands

export const def_glUniform1i64NV = {
  parameters: ["i32", "i64"],
  result: "void",
} as const;

let fn_glUniform1i64NV!: Deno.UnsafeFnPointer<typeof def_glUniform1i64NV>;

export function Uniform1i64NV(
  location: GLint,
  x: GLint64EXT,
): void {
  fn_glUniform1i64NV.call(
    location,
    x,
  );
}

export const def_glUniform2i64NV = {
  parameters: ["i32", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform2i64NV!: Deno.UnsafeFnPointer<typeof def_glUniform2i64NV>;

export function Uniform2i64NV(
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
): void {
  fn_glUniform2i64NV.call(
    location,
    x,
    y,
  );
}

export const def_glUniform3i64NV = {
  parameters: ["i32", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform3i64NV!: Deno.UnsafeFnPointer<typeof def_glUniform3i64NV>;

export function Uniform3i64NV(
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
): void {
  fn_glUniform3i64NV.call(
    location,
    x,
    y,
    z,
  );
}

export const def_glUniform4i64NV = {
  parameters: ["i32", "i64", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glUniform4i64NV!: Deno.UnsafeFnPointer<typeof def_glUniform4i64NV>;

export function Uniform4i64NV(
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
  w: GLint64EXT,
): void {
  fn_glUniform4i64NV.call(
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glUniform1i64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1i64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform1i64vNV>;

export function Uniform1i64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1i64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2i64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2i64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform2i64vNV>;

export function Uniform2i64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2i64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3i64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3i64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform3i64vNV>;

export function Uniform3i64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3i64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4i64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4i64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform4i64vNV>;

export function Uniform4i64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4i64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform1ui64NV = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniform1ui64NV!: Deno.UnsafeFnPointer<typeof def_glUniform1ui64NV>;

export function Uniform1ui64NV(
  location: GLint,
  x: GLuint64EXT,
): void {
  fn_glUniform1ui64NV.call(
    location,
    x,
  );
}

export const def_glUniform2ui64NV = {
  parameters: ["i32", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform2ui64NV!: Deno.UnsafeFnPointer<typeof def_glUniform2ui64NV>;

export function Uniform2ui64NV(
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
): void {
  fn_glUniform2ui64NV.call(
    location,
    x,
    y,
  );
}

export const def_glUniform3ui64NV = {
  parameters: ["i32", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform3ui64NV!: Deno.UnsafeFnPointer<typeof def_glUniform3ui64NV>;

export function Uniform3ui64NV(
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
): void {
  fn_glUniform3ui64NV.call(
    location,
    x,
    y,
    z,
  );
}

export const def_glUniform4ui64NV = {
  parameters: ["i32", "u64", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glUniform4ui64NV!: Deno.UnsafeFnPointer<typeof def_glUniform4ui64NV>;

export function Uniform4ui64NV(
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
  w: GLuint64EXT,
): void {
  fn_glUniform4ui64NV.call(
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glUniform1ui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1ui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform1ui64vNV>;

export function Uniform1ui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1ui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2ui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2ui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform2ui64vNV>;

export function Uniform2ui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2ui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3ui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3ui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform3ui64vNV>;

export function Uniform3ui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3ui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4ui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4ui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniform4ui64vNV>;

export function Uniform4ui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4ui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glGetUniformi64vNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformi64vNV!: Deno.UnsafeFnPointer<typeof def_glGetUniformi64vNV>;

export function GetUniformi64vNV(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformi64vNV.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glProgramUniform1i64NV = {
  parameters: ["u32", "i32", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform1i64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1i64NV
>;

export function ProgramUniform1i64NV(
  program: GLuint,
  location: GLint,
  x: GLint64EXT,
): void {
  fn_glProgramUniform1i64NV.call(
    program,
    location,
    x,
  );
}

export const def_glProgramUniform2i64NV = {
  parameters: ["u32", "i32", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform2i64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2i64NV
>;

export function ProgramUniform2i64NV(
  program: GLuint,
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
): void {
  fn_glProgramUniform2i64NV.call(
    program,
    location,
    x,
    y,
  );
}

export const def_glProgramUniform3i64NV = {
  parameters: ["u32", "i32", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform3i64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3i64NV
>;

export function ProgramUniform3i64NV(
  program: GLuint,
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
): void {
  fn_glProgramUniform3i64NV.call(
    program,
    location,
    x,
    y,
    z,
  );
}

export const def_glProgramUniform4i64NV = {
  parameters: ["u32", "i32", "i64", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glProgramUniform4i64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4i64NV
>;

export function ProgramUniform4i64NV(
  program: GLuint,
  location: GLint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
  w: GLint64EXT,
): void {
  fn_glProgramUniform4i64NV.call(
    program,
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramUniform1i64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1i64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1i64vNV
>;

export function ProgramUniform1i64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1i64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2i64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2i64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2i64vNV
>;

export function ProgramUniform2i64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2i64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3i64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3i64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3i64vNV
>;

export function ProgramUniform3i64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3i64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4i64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4i64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4i64vNV
>;

export function ProgramUniform4i64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4i64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1ui64NV = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform1ui64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1ui64NV
>;

export function ProgramUniform1ui64NV(
  program: GLuint,
  location: GLint,
  x: GLuint64EXT,
): void {
  fn_glProgramUniform1ui64NV.call(
    program,
    location,
    x,
  );
}

export const def_glProgramUniform2ui64NV = {
  parameters: ["u32", "i32", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform2ui64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2ui64NV
>;

export function ProgramUniform2ui64NV(
  program: GLuint,
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
): void {
  fn_glProgramUniform2ui64NV.call(
    program,
    location,
    x,
    y,
  );
}

export const def_glProgramUniform3ui64NV = {
  parameters: ["u32", "i32", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform3ui64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3ui64NV
>;

export function ProgramUniform3ui64NV(
  program: GLuint,
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
): void {
  fn_glProgramUniform3ui64NV.call(
    program,
    location,
    x,
    y,
    z,
  );
}

export const def_glProgramUniform4ui64NV = {
  parameters: ["u32", "i32", "u64", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glProgramUniform4ui64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4ui64NV
>;

export function ProgramUniform4ui64NV(
  program: GLuint,
  location: GLint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
  w: GLuint64EXT,
): void {
  fn_glProgramUniform4ui64NV.call(
    program,
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramUniform1ui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1ui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1ui64vNV
>;

export function ProgramUniform1ui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1ui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2ui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2ui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2ui64vNV
>;

export function ProgramUniform2ui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2ui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3ui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3ui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3ui64vNV
>;

export function ProgramUniform3ui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3ui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4ui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4ui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4ui64vNV
>;

export function ProgramUniform4ui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4ui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUniform1i64NV = new Deno.UnsafeFnPointer(
    proc("glUniform1i64NV"),
    def_glUniform1i64NV,
  );
  fn_glUniform2i64NV = new Deno.UnsafeFnPointer(
    proc("glUniform2i64NV"),
    def_glUniform2i64NV,
  );
  fn_glUniform3i64NV = new Deno.UnsafeFnPointer(
    proc("glUniform3i64NV"),
    def_glUniform3i64NV,
  );
  fn_glUniform4i64NV = new Deno.UnsafeFnPointer(
    proc("glUniform4i64NV"),
    def_glUniform4i64NV,
  );
  fn_glUniform1i64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform1i64vNV"),
    def_glUniform1i64vNV,
  );
  fn_glUniform2i64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform2i64vNV"),
    def_glUniform2i64vNV,
  );
  fn_glUniform3i64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform3i64vNV"),
    def_glUniform3i64vNV,
  );
  fn_glUniform4i64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform4i64vNV"),
    def_glUniform4i64vNV,
  );
  fn_glUniform1ui64NV = new Deno.UnsafeFnPointer(
    proc("glUniform1ui64NV"),
    def_glUniform1ui64NV,
  );
  fn_glUniform2ui64NV = new Deno.UnsafeFnPointer(
    proc("glUniform2ui64NV"),
    def_glUniform2ui64NV,
  );
  fn_glUniform3ui64NV = new Deno.UnsafeFnPointer(
    proc("glUniform3ui64NV"),
    def_glUniform3ui64NV,
  );
  fn_glUniform4ui64NV = new Deno.UnsafeFnPointer(
    proc("glUniform4ui64NV"),
    def_glUniform4ui64NV,
  );
  fn_glUniform1ui64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform1ui64vNV"),
    def_glUniform1ui64vNV,
  );
  fn_glUniform2ui64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform2ui64vNV"),
    def_glUniform2ui64vNV,
  );
  fn_glUniform3ui64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform3ui64vNV"),
    def_glUniform3ui64vNV,
  );
  fn_glUniform4ui64vNV = new Deno.UnsafeFnPointer(
    proc("glUniform4ui64vNV"),
    def_glUniform4ui64vNV,
  );
  fn_glGetUniformi64vNV = new Deno.UnsafeFnPointer(
    proc("glGetUniformi64vNV"),
    def_glGetUniformi64vNV,
  );
  fn_glProgramUniform1i64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1i64NV"),
    def_glProgramUniform1i64NV,
  );
  fn_glProgramUniform2i64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2i64NV"),
    def_glProgramUniform2i64NV,
  );
  fn_glProgramUniform3i64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3i64NV"),
    def_glProgramUniform3i64NV,
  );
  fn_glProgramUniform4i64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4i64NV"),
    def_glProgramUniform4i64NV,
  );
  fn_glProgramUniform1i64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1i64vNV"),
    def_glProgramUniform1i64vNV,
  );
  fn_glProgramUniform2i64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2i64vNV"),
    def_glProgramUniform2i64vNV,
  );
  fn_glProgramUniform3i64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3i64vNV"),
    def_glProgramUniform3i64vNV,
  );
  fn_glProgramUniform4i64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4i64vNV"),
    def_glProgramUniform4i64vNV,
  );
  fn_glProgramUniform1ui64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1ui64NV"),
    def_glProgramUniform1ui64NV,
  );
  fn_glProgramUniform2ui64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2ui64NV"),
    def_glProgramUniform2ui64NV,
  );
  fn_glProgramUniform3ui64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3ui64NV"),
    def_glProgramUniform3ui64NV,
  );
  fn_glProgramUniform4ui64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4ui64NV"),
    def_glProgramUniform4ui64NV,
  );
  fn_glProgramUniform1ui64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1ui64vNV"),
    def_glProgramUniform1ui64vNV,
  );
  fn_glProgramUniform2ui64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2ui64vNV"),
    def_glProgramUniform2ui64vNV,
  );
  fn_glProgramUniform3ui64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3ui64vNV"),
    def_glProgramUniform3ui64vNV,
  );
  fn_glProgramUniform4ui64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4ui64vNV"),
    def_glProgramUniform4ui64vNV,
  );
}
