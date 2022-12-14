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
export const VERTEX_SHADER_BIT = 0x1;
export const FRAGMENT_SHADER_BIT = 0x2;
export const GEOMETRY_SHADER_BIT = 0x4;
export const TESS_CONTROL_SHADER_BIT = 0x8;
export const TESS_EVALUATION_SHADER_BIT = 0x10;
export const ALL_SHADER_BITS = 0xffffffff;
export const PROGRAM_SEPARABLE = 0x8258;
export const ACTIVE_PROGRAM = 0x8259;
export const PROGRAM_PIPELINE_BINDING = 0x825a;

/// Commands

export const def_glUseProgramStages = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUseProgramStages!: Deno.UnsafeFnPointer<typeof def_glUseProgramStages>;

export function UseProgramStages(
  pipeline: GLuint,
  stages: GLbitfield,
  program: GLuint,
): void {
  fn_glUseProgramStages.call(
    pipeline,
    stages,
    program,
  );
}

export const def_glActiveShaderProgram = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glActiveShaderProgram!: Deno.UnsafeFnPointer<typeof def_glActiveShaderProgram>;

export function ActiveShaderProgram(
  pipeline: GLuint,
  program: GLuint,
): void {
  fn_glActiveShaderProgram.call(
    pipeline,
    program,
  );
}

export const def_glCreateShaderProgramv = {
  parameters: ["u32", "i32", "buffer"],
  result: "u32",
} as const;

let fn_glCreateShaderProgramv!: Deno.UnsafeFnPointer<typeof def_glCreateShaderProgramv>;

export function CreateShaderProgramv(
  type: GLenum,
  count: GLsizei,
  strings: Buffer,
): GLuint {
  return fn_glCreateShaderProgramv.call(
    type,
    count,
    bufferToFFI(strings),
  );
}

export const def_glBindProgramPipeline = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glBindProgramPipeline>;

export function BindProgramPipeline(
  pipeline: GLuint,
): void {
  fn_glBindProgramPipeline.call(
    pipeline,
  );
}

export const def_glDeleteProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramPipelines!: Deno.UnsafeFnPointer<typeof def_glDeleteProgramPipelines>;

export function DeleteProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glDeleteProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glGenProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramPipelines!: Deno.UnsafeFnPointer<typeof def_glGenProgramPipelines>;

export function GenProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glGenProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glIsProgramPipeline = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glIsProgramPipeline>;

export function IsProgramPipeline(
  pipeline: GLuint,
): GLboolean {
  return fn_glIsProgramPipeline.call(
    pipeline,
  );
}

export const def_glGetProgramPipelineiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramPipelineiv>;

export function GetProgramPipelineiv(
  pipeline: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramPipelineiv.call(
    pipeline,
    pname,
    bufferToFFI(params),
  );
}

export const def_glProgramParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glProgramParameteri!: Deno.UnsafeFnPointer<typeof def_glProgramParameteri>;

export function ProgramParameteri(
  program: GLuint,
  pname: GLenum,
  value: GLint,
): void {
  fn_glProgramParameteri.call(
    program,
    pname,
    value,
  );
}

export const def_glProgramUniform1i = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform1i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1i>;

export function ProgramUniform1i(
  program: GLuint,
  location: GLint,
  v0: GLint,
): void {
  fn_glProgramUniform1i.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1iv>;

export function ProgramUniform1iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1f = {
  parameters: ["u32", "i32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform1f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1f>;

export function ProgramUniform1f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
): void {
  fn_glProgramUniform1f.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1fv>;

export function ProgramUniform1fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1d = {
  parameters: ["u32", "i32", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform1d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1d>;

export function ProgramUniform1d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
): void {
  fn_glProgramUniform1d.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1dv>;

export function ProgramUniform1dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1ui = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform1ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1ui>;

export function ProgramUniform1ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
): void {
  fn_glProgramUniform1ui.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1uiv>;

export function ProgramUniform1uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2i = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform2i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2i>;

export function ProgramUniform2i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glProgramUniform2i.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2iv>;

export function ProgramUniform2iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2f = {
  parameters: ["u32", "i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform2f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2f>;

export function ProgramUniform2f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glProgramUniform2f.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2fv>;

export function ProgramUniform2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2d = {
  parameters: ["u32", "i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform2d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2d>;

export function ProgramUniform2d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
): void {
  fn_glProgramUniform2d.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2dv>;

export function ProgramUniform2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2ui = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform2ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2ui>;

export function ProgramUniform2ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
): void {
  fn_glProgramUniform2ui.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2uiv>;

export function ProgramUniform2uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3i = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform3i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3i>;

export function ProgramUniform3i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glProgramUniform3i.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3iv>;

export function ProgramUniform3iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3f = {
  parameters: ["u32", "i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform3f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3f>;

export function ProgramUniform3f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glProgramUniform3f.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3fv>;

export function ProgramUniform3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3d = {
  parameters: ["u32", "i32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform3d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3d>;

export function ProgramUniform3d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
  v2: GLdouble,
): void {
  fn_glProgramUniform3d.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3dv>;

export function ProgramUniform3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform3ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3ui>;

export function ProgramUniform3ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
): void {
  fn_glProgramUniform3ui.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3uiv>;

export function ProgramUniform3uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4i = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform4i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4i>;

export function ProgramUniform4i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glProgramUniform4i.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4iv>;

export function ProgramUniform4iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4f = {
  parameters: ["u32", "i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform4f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4f>;

export function ProgramUniform4f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glProgramUniform4f.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4fv>;

export function ProgramUniform4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4d = {
  parameters: ["u32", "i32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform4d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4d>;

export function ProgramUniform4d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
  v2: GLdouble,
  v3: GLdouble,
): void {
  fn_glProgramUniform4d.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4dv>;

export function ProgramUniform4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform4ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4ui>;

export function ProgramUniform4ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
  v3: GLuint,
): void {
  fn_glProgramUniform4ui.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4uiv>;

export function ProgramUniform4uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2fv>;

export function ProgramUniformMatrix2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3fv>;

export function ProgramUniformMatrix3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4fv>;

export function ProgramUniformMatrix4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2dv>;

export function ProgramUniformMatrix2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3dv>;

export function ProgramUniformMatrix3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4dv>;

export function ProgramUniformMatrix4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3fv>;

export function ProgramUniformMatrix2x3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2fv>;

export function ProgramUniformMatrix3x2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4fv>;

export function ProgramUniformMatrix2x4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2fv>;

export function ProgramUniformMatrix4x2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4fv>;

export function ProgramUniformMatrix3x4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3fv>;

export function ProgramUniformMatrix4x3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3dv>;

export function ProgramUniformMatrix2x3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2dv>;

export function ProgramUniformMatrix3x2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4dv>;

export function ProgramUniformMatrix2x4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2dv>;

export function ProgramUniformMatrix4x2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4dv>;

export function ProgramUniformMatrix3x4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3dv>;

export function ProgramUniformMatrix4x3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glValidateProgramPipeline = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glValidateProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glValidateProgramPipeline>;

export function ValidateProgramPipeline(
  pipeline: GLuint,
): void {
  fn_glValidateProgramPipeline.call(
    pipeline,
  );
}

export const def_glGetProgramPipelineInfoLog = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineInfoLog!: Deno.UnsafeFnPointer<typeof def_glGetProgramPipelineInfoLog>;

export function GetProgramPipelineInfoLog(
  pipeline: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetProgramPipelineInfoLog.call(
    pipeline,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUseProgramStages = new Deno.UnsafeFnPointer(proc("glUseProgramStages"), def_glUseProgramStages);
  fn_glActiveShaderProgram = new Deno.UnsafeFnPointer(proc("glActiveShaderProgram"), def_glActiveShaderProgram);
  fn_glCreateShaderProgramv = new Deno.UnsafeFnPointer(proc("glCreateShaderProgramv"), def_glCreateShaderProgramv);
  fn_glBindProgramPipeline = new Deno.UnsafeFnPointer(proc("glBindProgramPipeline"), def_glBindProgramPipeline);
  fn_glDeleteProgramPipelines = new Deno.UnsafeFnPointer(proc("glDeleteProgramPipelines"), def_glDeleteProgramPipelines);
  fn_glGenProgramPipelines = new Deno.UnsafeFnPointer(proc("glGenProgramPipelines"), def_glGenProgramPipelines);
  fn_glIsProgramPipeline = new Deno.UnsafeFnPointer(proc("glIsProgramPipeline"), def_glIsProgramPipeline);
  fn_glGetProgramPipelineiv = new Deno.UnsafeFnPointer(proc("glGetProgramPipelineiv"), def_glGetProgramPipelineiv);
  fn_glProgramParameteri = new Deno.UnsafeFnPointer(proc("glProgramParameteri"), def_glProgramParameteri);
  fn_glProgramUniform1i = new Deno.UnsafeFnPointer(proc("glProgramUniform1i"), def_glProgramUniform1i);
  fn_glProgramUniform1iv = new Deno.UnsafeFnPointer(proc("glProgramUniform1iv"), def_glProgramUniform1iv);
  fn_glProgramUniform1f = new Deno.UnsafeFnPointer(proc("glProgramUniform1f"), def_glProgramUniform1f);
  fn_glProgramUniform1fv = new Deno.UnsafeFnPointer(proc("glProgramUniform1fv"), def_glProgramUniform1fv);
  fn_glProgramUniform1d = new Deno.UnsafeFnPointer(proc("glProgramUniform1d"), def_glProgramUniform1d);
  fn_glProgramUniform1dv = new Deno.UnsafeFnPointer(proc("glProgramUniform1dv"), def_glProgramUniform1dv);
  fn_glProgramUniform1ui = new Deno.UnsafeFnPointer(proc("glProgramUniform1ui"), def_glProgramUniform1ui);
  fn_glProgramUniform1uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform1uiv"), def_glProgramUniform1uiv);
  fn_glProgramUniform2i = new Deno.UnsafeFnPointer(proc("glProgramUniform2i"), def_glProgramUniform2i);
  fn_glProgramUniform2iv = new Deno.UnsafeFnPointer(proc("glProgramUniform2iv"), def_glProgramUniform2iv);
  fn_glProgramUniform2f = new Deno.UnsafeFnPointer(proc("glProgramUniform2f"), def_glProgramUniform2f);
  fn_glProgramUniform2fv = new Deno.UnsafeFnPointer(proc("glProgramUniform2fv"), def_glProgramUniform2fv);
  fn_glProgramUniform2d = new Deno.UnsafeFnPointer(proc("glProgramUniform2d"), def_glProgramUniform2d);
  fn_glProgramUniform2dv = new Deno.UnsafeFnPointer(proc("glProgramUniform2dv"), def_glProgramUniform2dv);
  fn_glProgramUniform2ui = new Deno.UnsafeFnPointer(proc("glProgramUniform2ui"), def_glProgramUniform2ui);
  fn_glProgramUniform2uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform2uiv"), def_glProgramUniform2uiv);
  fn_glProgramUniform3i = new Deno.UnsafeFnPointer(proc("glProgramUniform3i"), def_glProgramUniform3i);
  fn_glProgramUniform3iv = new Deno.UnsafeFnPointer(proc("glProgramUniform3iv"), def_glProgramUniform3iv);
  fn_glProgramUniform3f = new Deno.UnsafeFnPointer(proc("glProgramUniform3f"), def_glProgramUniform3f);
  fn_glProgramUniform3fv = new Deno.UnsafeFnPointer(proc("glProgramUniform3fv"), def_glProgramUniform3fv);
  fn_glProgramUniform3d = new Deno.UnsafeFnPointer(proc("glProgramUniform3d"), def_glProgramUniform3d);
  fn_glProgramUniform3dv = new Deno.UnsafeFnPointer(proc("glProgramUniform3dv"), def_glProgramUniform3dv);
  fn_glProgramUniform3ui = new Deno.UnsafeFnPointer(proc("glProgramUniform3ui"), def_glProgramUniform3ui);
  fn_glProgramUniform3uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform3uiv"), def_glProgramUniform3uiv);
  fn_glProgramUniform4i = new Deno.UnsafeFnPointer(proc("glProgramUniform4i"), def_glProgramUniform4i);
  fn_glProgramUniform4iv = new Deno.UnsafeFnPointer(proc("glProgramUniform4iv"), def_glProgramUniform4iv);
  fn_glProgramUniform4f = new Deno.UnsafeFnPointer(proc("glProgramUniform4f"), def_glProgramUniform4f);
  fn_glProgramUniform4fv = new Deno.UnsafeFnPointer(proc("glProgramUniform4fv"), def_glProgramUniform4fv);
  fn_glProgramUniform4d = new Deno.UnsafeFnPointer(proc("glProgramUniform4d"), def_glProgramUniform4d);
  fn_glProgramUniform4dv = new Deno.UnsafeFnPointer(proc("glProgramUniform4dv"), def_glProgramUniform4dv);
  fn_glProgramUniform4ui = new Deno.UnsafeFnPointer(proc("glProgramUniform4ui"), def_glProgramUniform4ui);
  fn_glProgramUniform4uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform4uiv"), def_glProgramUniform4uiv);
  fn_glProgramUniformMatrix2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2fv"), def_glProgramUniformMatrix2fv);
  fn_glProgramUniformMatrix3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3fv"), def_glProgramUniformMatrix3fv);
  fn_glProgramUniformMatrix4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4fv"), def_glProgramUniformMatrix4fv);
  fn_glProgramUniformMatrix2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2dv"), def_glProgramUniformMatrix2dv);
  fn_glProgramUniformMatrix3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3dv"), def_glProgramUniformMatrix3dv);
  fn_glProgramUniformMatrix4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4dv"), def_glProgramUniformMatrix4dv);
  fn_glProgramUniformMatrix2x3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3fv"), def_glProgramUniformMatrix2x3fv);
  fn_glProgramUniformMatrix3x2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2fv"), def_glProgramUniformMatrix3x2fv);
  fn_glProgramUniformMatrix2x4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4fv"), def_glProgramUniformMatrix2x4fv);
  fn_glProgramUniformMatrix4x2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2fv"), def_glProgramUniformMatrix4x2fv);
  fn_glProgramUniformMatrix3x4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4fv"), def_glProgramUniformMatrix3x4fv);
  fn_glProgramUniformMatrix4x3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3fv"), def_glProgramUniformMatrix4x3fv);
  fn_glProgramUniformMatrix2x3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3dv"), def_glProgramUniformMatrix2x3dv);
  fn_glProgramUniformMatrix3x2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2dv"), def_glProgramUniformMatrix3x2dv);
  fn_glProgramUniformMatrix2x4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4dv"), def_glProgramUniformMatrix2x4dv);
  fn_glProgramUniformMatrix4x2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2dv"), def_glProgramUniformMatrix4x2dv);
  fn_glProgramUniformMatrix3x4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4dv"), def_glProgramUniformMatrix3x4dv);
  fn_glProgramUniformMatrix4x3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3dv"), def_glProgramUniformMatrix4x3dv);
  fn_glValidateProgramPipeline = new Deno.UnsafeFnPointer(proc("glValidateProgramPipeline"), def_glValidateProgramPipeline);
  fn_glGetProgramPipelineInfoLog = new Deno.UnsafeFnPointer(proc("glGetProgramPipelineInfoLog"), def_glGetProgramPipelineInfoLog);
}
