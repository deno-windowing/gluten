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
export const ACTIVE_PROGRAM_EXT = 0x8259;
export const VERTEX_SHADER_BIT_EXT = 0x1;
export const FRAGMENT_SHADER_BIT_EXT = 0x2;
export const ALL_SHADER_BITS_EXT = 0xffffffff;
export const PROGRAM_SEPARABLE_EXT = 0x8258;
export const ACTIVE_PROGRAM_EXT = 0x8259;
export const PROGRAM_PIPELINE_BINDING_EXT = 0x825a;

/// Commands

export const def_glUseShaderProgramEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glUseShaderProgramEXT!: Deno.UnsafeFnPointer<
  typeof def_glUseShaderProgramEXT
>;

export function UseShaderProgramEXT(
  type: GLenum,
  program: GLuint,
): void {
  fn_glUseShaderProgramEXT.call(
    type,
    program,
  );
}

export const def_glActiveProgramEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glActiveProgramEXT!: Deno.UnsafeFnPointer<typeof def_glActiveProgramEXT>;

export function ActiveProgramEXT(
  program: GLuint,
): void {
  fn_glActiveProgramEXT.call(
    program,
  );
}

export const def_glCreateShaderProgramEXT = {
  parameters: ["u32", "buffer"],
  result: "u32",
} as const;

let fn_glCreateShaderProgramEXT!: Deno.UnsafeFnPointer<
  typeof def_glCreateShaderProgramEXT
>;

export function CreateShaderProgramEXT(
  type: GLenum,
  string: Buffer,
): GLuint {
  return fn_glCreateShaderProgramEXT.call(
    type,
    bufferToFFI(string),
  );
}

export const def_glActiveShaderProgramEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glActiveShaderProgramEXT!: Deno.UnsafeFnPointer<
  typeof def_glActiveShaderProgramEXT
>;

export function ActiveShaderProgramEXT(
  pipeline: GLuint,
  program: GLuint,
): void {
  fn_glActiveShaderProgramEXT.call(
    pipeline,
    program,
  );
}

export const def_glBindProgramPipelineEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindProgramPipelineEXT!: Deno.UnsafeFnPointer<
  typeof def_glBindProgramPipelineEXT
>;

export function BindProgramPipelineEXT(
  pipeline: GLuint,
): void {
  fn_glBindProgramPipelineEXT.call(
    pipeline,
  );
}

export const def_glCreateShaderProgramvEXT = {
  parameters: ["u32", "i32", "buffer"],
  result: "u32",
} as const;

let fn_glCreateShaderProgramvEXT!: Deno.UnsafeFnPointer<
  typeof def_glCreateShaderProgramvEXT
>;

export function CreateShaderProgramvEXT(
  type: GLenum,
  count: GLsizei,
  strings: Buffer,
): GLuint {
  return fn_glCreateShaderProgramvEXT.call(
    type,
    count,
    bufferToFFI(strings),
  );
}

export const def_glDeleteProgramPipelinesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramPipelinesEXT!: Deno.UnsafeFnPointer<
  typeof def_glDeleteProgramPipelinesEXT
>;

export function DeleteProgramPipelinesEXT(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glDeleteProgramPipelinesEXT.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glGenProgramPipelinesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramPipelinesEXT!: Deno.UnsafeFnPointer<
  typeof def_glGenProgramPipelinesEXT
>;

export function GenProgramPipelinesEXT(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glGenProgramPipelinesEXT.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glGetProgramPipelineInfoLogEXT = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineInfoLogEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramPipelineInfoLogEXT
>;

export function GetProgramPipelineInfoLogEXT(
  pipeline: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetProgramPipelineInfoLogEXT.call(
    pipeline,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

export const def_glGetProgramPipelineivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramPipelineivEXT
>;

export function GetProgramPipelineivEXT(
  pipeline: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramPipelineivEXT.call(
    pipeline,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIsProgramPipelineEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramPipelineEXT!: Deno.UnsafeFnPointer<
  typeof def_glIsProgramPipelineEXT
>;

export function IsProgramPipelineEXT(
  pipeline: GLuint,
): GLboolean {
  return fn_glIsProgramPipelineEXT.call(
    pipeline,
  );
}

export const def_glProgramParameteriEXT = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glProgramParameteriEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameteriEXT
>;

export function ProgramParameteriEXT(
  program: GLuint,
  pname: GLenum,
  value: GLint,
): void {
  fn_glProgramParameteriEXT.call(
    program,
    pname,
    value,
  );
}

export const def_glProgramUniform1fEXT = {
  parameters: ["u32", "i32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform1fEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1fEXT
>;

export function ProgramUniform1fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
): void {
  fn_glProgramUniform1fEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1fvEXT
>;

export function ProgramUniform1fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1iEXT = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform1iEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1iEXT
>;

export function ProgramUniform1iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
): void {
  fn_glProgramUniform1iEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1ivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1ivEXT
>;

export function ProgramUniform1ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2fEXT = {
  parameters: ["u32", "i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform2fEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2fEXT
>;

export function ProgramUniform2fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glProgramUniform2fEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2fvEXT
>;

export function ProgramUniform2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2iEXT = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform2iEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2iEXT
>;

export function ProgramUniform2iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glProgramUniform2iEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2ivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2ivEXT
>;

export function ProgramUniform2ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3fEXT = {
  parameters: ["u32", "i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform3fEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3fEXT
>;

export function ProgramUniform3fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glProgramUniform3fEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3fvEXT
>;

export function ProgramUniform3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3iEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform3iEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3iEXT
>;

export function ProgramUniform3iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glProgramUniform3iEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3ivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3ivEXT
>;

export function ProgramUniform3ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4fEXT = {
  parameters: ["u32", "i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform4fEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4fEXT
>;

export function ProgramUniform4fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glProgramUniform4fEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4fvEXT
>;

export function ProgramUniform4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4iEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform4iEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4iEXT
>;

export function ProgramUniform4iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glProgramUniform4iEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4ivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4ivEXT
>;

export function ProgramUniform4ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2fvEXT
>;

export function ProgramUniformMatrix2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3fvEXT
>;

export function ProgramUniformMatrix3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4fvEXT
>;

export function ProgramUniformMatrix4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUseProgramStagesEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUseProgramStagesEXT!: Deno.UnsafeFnPointer<
  typeof def_glUseProgramStagesEXT
>;

export function UseProgramStagesEXT(
  pipeline: GLuint,
  stages: GLbitfield,
  program: GLuint,
): void {
  fn_glUseProgramStagesEXT.call(
    pipeline,
    stages,
    program,
  );
}

export const def_glValidateProgramPipelineEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glValidateProgramPipelineEXT!: Deno.UnsafeFnPointer<
  typeof def_glValidateProgramPipelineEXT
>;

export function ValidateProgramPipelineEXT(
  pipeline: GLuint,
): void {
  fn_glValidateProgramPipelineEXT.call(
    pipeline,
  );
}

export const def_glProgramUniform1uiEXT = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform1uiEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1uiEXT
>;

export function ProgramUniform1uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
): void {
  fn_glProgramUniform1uiEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2uiEXT = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform2uiEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2uiEXT
>;

export function ProgramUniform2uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
): void {
  fn_glProgramUniform2uiEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3uiEXT = {
  parameters: ["u32", "i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform3uiEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3uiEXT
>;

export function ProgramUniform3uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
): void {
  fn_glProgramUniform3uiEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4uiEXT = {
  parameters: ["u32", "i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform4uiEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4uiEXT
>;

export function ProgramUniform4uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
  v3: GLuint,
): void {
  fn_glProgramUniform4uiEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1uivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1uivEXT
>;

export function ProgramUniform1uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2uivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2uivEXT
>;

export function ProgramUniform2uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3uivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3uivEXT
>;

export function ProgramUniform3uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4uivEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4uivEXT
>;

export function ProgramUniform4uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2x3fvEXT
>;

export function ProgramUniformMatrix2x3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3x2fvEXT
>;

export function ProgramUniformMatrix3x2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2x4fvEXT
>;

export function ProgramUniformMatrix2x4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4x2fvEXT
>;

export function ProgramUniformMatrix4x2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3x4fvEXT
>;

export function ProgramUniformMatrix3x4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3fvEXT!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4x3fvEXT
>;

export function ProgramUniformMatrix4x3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUseShaderProgramEXT = new Deno.UnsafeFnPointer(
    proc("glUseShaderProgramEXT")!,
    def_glUseShaderProgramEXT,
  );
  fn_glActiveProgramEXT = new Deno.UnsafeFnPointer(
    proc("glActiveProgramEXT")!,
    def_glActiveProgramEXT,
  );
  fn_glCreateShaderProgramEXT = new Deno.UnsafeFnPointer(
    proc("glCreateShaderProgramEXT")!,
    def_glCreateShaderProgramEXT,
  );
  fn_glActiveShaderProgramEXT = new Deno.UnsafeFnPointer(
    proc("glActiveShaderProgramEXT")!,
    def_glActiveShaderProgramEXT,
  );
  fn_glBindProgramPipelineEXT = new Deno.UnsafeFnPointer(
    proc("glBindProgramPipelineEXT")!,
    def_glBindProgramPipelineEXT,
  );
  fn_glCreateShaderProgramvEXT = new Deno.UnsafeFnPointer(
    proc("glCreateShaderProgramvEXT")!,
    def_glCreateShaderProgramvEXT,
  );
  fn_glDeleteProgramPipelinesEXT = new Deno.UnsafeFnPointer(
    proc("glDeleteProgramPipelinesEXT")!,
    def_glDeleteProgramPipelinesEXT,
  );
  fn_glGenProgramPipelinesEXT = new Deno.UnsafeFnPointer(
    proc("glGenProgramPipelinesEXT")!,
    def_glGenProgramPipelinesEXT,
  );
  fn_glGetProgramPipelineInfoLogEXT = new Deno.UnsafeFnPointer(
    proc("glGetProgramPipelineInfoLogEXT")!,
    def_glGetProgramPipelineInfoLogEXT,
  );
  fn_glGetProgramPipelineivEXT = new Deno.UnsafeFnPointer(
    proc("glGetProgramPipelineivEXT")!,
    def_glGetProgramPipelineivEXT,
  );
  fn_glIsProgramPipelineEXT = new Deno.UnsafeFnPointer(
    proc("glIsProgramPipelineEXT")!,
    def_glIsProgramPipelineEXT,
  );
  fn_glProgramParameteriEXT = new Deno.UnsafeFnPointer(
    proc("glProgramParameteriEXT")!,
    def_glProgramParameteriEXT,
  );
  fn_glProgramUniform1fEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1fEXT")!,
    def_glProgramUniform1fEXT,
  );
  fn_glProgramUniform1fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1fvEXT")!,
    def_glProgramUniform1fvEXT,
  );
  fn_glProgramUniform1iEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1iEXT")!,
    def_glProgramUniform1iEXT,
  );
  fn_glProgramUniform1ivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1ivEXT")!,
    def_glProgramUniform1ivEXT,
  );
  fn_glProgramUniform2fEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2fEXT")!,
    def_glProgramUniform2fEXT,
  );
  fn_glProgramUniform2fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2fvEXT")!,
    def_glProgramUniform2fvEXT,
  );
  fn_glProgramUniform2iEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2iEXT")!,
    def_glProgramUniform2iEXT,
  );
  fn_glProgramUniform2ivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2ivEXT")!,
    def_glProgramUniform2ivEXT,
  );
  fn_glProgramUniform3fEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3fEXT")!,
    def_glProgramUniform3fEXT,
  );
  fn_glProgramUniform3fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3fvEXT")!,
    def_glProgramUniform3fvEXT,
  );
  fn_glProgramUniform3iEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3iEXT")!,
    def_glProgramUniform3iEXT,
  );
  fn_glProgramUniform3ivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3ivEXT")!,
    def_glProgramUniform3ivEXT,
  );
  fn_glProgramUniform4fEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4fEXT")!,
    def_glProgramUniform4fEXT,
  );
  fn_glProgramUniform4fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4fvEXT")!,
    def_glProgramUniform4fvEXT,
  );
  fn_glProgramUniform4iEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4iEXT")!,
    def_glProgramUniform4iEXT,
  );
  fn_glProgramUniform4ivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4ivEXT")!,
    def_glProgramUniform4ivEXT,
  );
  fn_glProgramUniformMatrix2fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2fvEXT")!,
    def_glProgramUniformMatrix2fvEXT,
  );
  fn_glProgramUniformMatrix3fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3fvEXT")!,
    def_glProgramUniformMatrix3fvEXT,
  );
  fn_glProgramUniformMatrix4fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4fvEXT")!,
    def_glProgramUniformMatrix4fvEXT,
  );
  fn_glUseProgramStagesEXT = new Deno.UnsafeFnPointer(
    proc("glUseProgramStagesEXT")!,
    def_glUseProgramStagesEXT,
  );
  fn_glValidateProgramPipelineEXT = new Deno.UnsafeFnPointer(
    proc("glValidateProgramPipelineEXT")!,
    def_glValidateProgramPipelineEXT,
  );
  fn_glProgramUniform1uiEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1uiEXT")!,
    def_glProgramUniform1uiEXT,
  );
  fn_glProgramUniform2uiEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2uiEXT")!,
    def_glProgramUniform2uiEXT,
  );
  fn_glProgramUniform3uiEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3uiEXT")!,
    def_glProgramUniform3uiEXT,
  );
  fn_glProgramUniform4uiEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4uiEXT")!,
    def_glProgramUniform4uiEXT,
  );
  fn_glProgramUniform1uivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1uivEXT")!,
    def_glProgramUniform1uivEXT,
  );
  fn_glProgramUniform2uivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2uivEXT")!,
    def_glProgramUniform2uivEXT,
  );
  fn_glProgramUniform3uivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3uivEXT")!,
    def_glProgramUniform3uivEXT,
  );
  fn_glProgramUniform4uivEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4uivEXT")!,
    def_glProgramUniform4uivEXT,
  );
  fn_glProgramUniformMatrix2x3fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2x3fvEXT")!,
    def_glProgramUniformMatrix2x3fvEXT,
  );
  fn_glProgramUniformMatrix3x2fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3x2fvEXT")!,
    def_glProgramUniformMatrix3x2fvEXT,
  );
  fn_glProgramUniformMatrix2x4fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2x4fvEXT")!,
    def_glProgramUniformMatrix2x4fvEXT,
  );
  fn_glProgramUniformMatrix4x2fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4x2fvEXT")!,
    def_glProgramUniformMatrix4x2fvEXT,
  );
  fn_glProgramUniformMatrix3x4fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3x4fvEXT")!,
    def_glProgramUniformMatrix3x4fvEXT,
  );
  fn_glProgramUniformMatrix4x3fvEXT = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4x3fvEXT")!,
    def_glProgramUniformMatrix4x3fvEXT,
  );
}
