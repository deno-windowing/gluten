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
export const PROGRAM_OBJECT_ARB = 0x8b40;
export const SHADER_OBJECT_ARB = 0x8b48;
export const OBJECT_TYPE_ARB = 0x8b4e;
export const OBJECT_SUBTYPE_ARB = 0x8b4f;
export const FLOAT_VEC2_ARB = 0x8b50;
export const FLOAT_VEC3_ARB = 0x8b51;
export const FLOAT_VEC4_ARB = 0x8b52;
export const INT_VEC2_ARB = 0x8b53;
export const INT_VEC3_ARB = 0x8b54;
export const INT_VEC4_ARB = 0x8b55;
export const BOOL_ARB = 0x8b56;
export const BOOL_VEC2_ARB = 0x8b57;
export const BOOL_VEC3_ARB = 0x8b58;
export const BOOL_VEC4_ARB = 0x8b59;
export const FLOAT_MAT2_ARB = 0x8b5a;
export const FLOAT_MAT3_ARB = 0x8b5b;
export const FLOAT_MAT4_ARB = 0x8b5c;
export const SAMPLER_1D_ARB = 0x8b5d;
export const SAMPLER_2D_ARB = 0x8b5e;
export const SAMPLER_3D_ARB = 0x8b5f;
export const SAMPLER_CUBE_ARB = 0x8b60;
export const SAMPLER_1D_SHADOW_ARB = 0x8b61;
export const SAMPLER_2D_SHADOW_ARB = 0x8b62;
export const SAMPLER_2D_RECT_ARB = 0x8b63;
export const SAMPLER_2D_RECT_SHADOW_ARB = 0x8b64;
export const OBJECT_DELETE_STATUS_ARB = 0x8b80;
export const OBJECT_COMPILE_STATUS_ARB = 0x8b81;
export const OBJECT_LINK_STATUS_ARB = 0x8b82;
export const OBJECT_VALIDATE_STATUS_ARB = 0x8b83;
export const OBJECT_INFO_LOG_LENGTH_ARB = 0x8b84;
export const OBJECT_ATTACHED_OBJECTS_ARB = 0x8b85;
export const OBJECT_ACTIVE_UNIFORMS_ARB = 0x8b86;
export const OBJECT_ACTIVE_UNIFORM_MAX_LENGTH_ARB = 0x8b87;
export const OBJECT_SHADER_SOURCE_LENGTH_ARB = 0x8b88;

/// Commands

export const def_glDeleteObjectARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDeleteObjectARB!: Deno.UnsafeFnPointer<typeof def_glDeleteObjectARB>;

export function DeleteObjectARB(
  obj: GLhandleARB,
): void {
  fn_glDeleteObjectARB.call(
    bufferToFFI(obj),
  );
}

export const def_glGetHandleARB = {
  parameters: ["u32"],
  result: "buffer",
} as const;

let fn_glGetHandleARB!: Deno.UnsafeFnPointer<typeof def_glGetHandleARB>;

export function GetHandleARB(
  pname: GLenum,
): GLhandleARB {
  return fn_glGetHandleARB.call(
    pname,
  );
}

export const def_glDetachObjectARB = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDetachObjectARB!: Deno.UnsafeFnPointer<typeof def_glDetachObjectARB>;

export function DetachObjectARB(
  containerObj: GLhandleARB,
  attachedObj: GLhandleARB,
): void {
  fn_glDetachObjectARB.call(
    bufferToFFI(containerObj),
    bufferToFFI(attachedObj),
  );
}

export const def_glCreateShaderObjectARB = {
  parameters: ["u32"],
  result: "buffer",
} as const;

let fn_glCreateShaderObjectARB!: Deno.UnsafeFnPointer<typeof def_glCreateShaderObjectARB>;

export function CreateShaderObjectARB(
  shaderType: GLenum,
): GLhandleARB {
  return fn_glCreateShaderObjectARB.call(
    shaderType,
  );
}

export const def_glShaderSourceARB = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glShaderSourceARB!: Deno.UnsafeFnPointer<typeof def_glShaderSourceARB>;

export function ShaderSourceARB(
  shaderObj: GLhandleARB,
  count: GLsizei,
  string: Buffer,
  length: Buffer,
): void {
  fn_glShaderSourceARB.call(
    bufferToFFI(shaderObj),
    count,
    bufferToFFI(string),
    bufferToFFI(length),
  );
}

export const def_glCompileShaderARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glCompileShaderARB!: Deno.UnsafeFnPointer<typeof def_glCompileShaderARB>;

export function CompileShaderARB(
  shaderObj: GLhandleARB,
): void {
  fn_glCompileShaderARB.call(
    bufferToFFI(shaderObj),
  );
}

export const def_glCreateProgramObjectARB = {
  parameters: [],
  result: "buffer",
} as const;

let fn_glCreateProgramObjectARB!: Deno.UnsafeFnPointer<typeof def_glCreateProgramObjectARB>;

export function CreateProgramObjectARB(): GLhandleARB {
  return fn_glCreateProgramObjectARB.call();
}

export const def_glAttachObjectARB = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glAttachObjectARB!: Deno.UnsafeFnPointer<typeof def_glAttachObjectARB>;

export function AttachObjectARB(
  containerObj: GLhandleARB,
  obj: GLhandleARB,
): void {
  fn_glAttachObjectARB.call(
    bufferToFFI(containerObj),
    bufferToFFI(obj),
  );
}

export const def_glLinkProgramARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLinkProgramARB!: Deno.UnsafeFnPointer<typeof def_glLinkProgramARB>;

export function LinkProgramARB(
  programObj: GLhandleARB,
): void {
  fn_glLinkProgramARB.call(
    bufferToFFI(programObj),
  );
}

export const def_glUseProgramObjectARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glUseProgramObjectARB!: Deno.UnsafeFnPointer<typeof def_glUseProgramObjectARB>;

export function UseProgramObjectARB(
  programObj: GLhandleARB,
): void {
  fn_glUseProgramObjectARB.call(
    bufferToFFI(programObj),
  );
}

export const def_glValidateProgramARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glValidateProgramARB!: Deno.UnsafeFnPointer<typeof def_glValidateProgramARB>;

export function ValidateProgramARB(
  programObj: GLhandleARB,
): void {
  fn_glValidateProgramARB.call(
    bufferToFFI(programObj),
  );
}

export const def_glUniform1fARB = {
  parameters: ["i32", "f32"],
  result: "void",
} as const;

let fn_glUniform1fARB!: Deno.UnsafeFnPointer<typeof def_glUniform1fARB>;

export function Uniform1fARB(
  location: GLint,
  v0: GLfloat,
): void {
  fn_glUniform1fARB.call(
    location,
    v0,
  );
}

export const def_glUniform2fARB = {
  parameters: ["i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform2fARB!: Deno.UnsafeFnPointer<typeof def_glUniform2fARB>;

export function Uniform2fARB(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glUniform2fARB.call(
    location,
    v0,
    v1,
  );
}

export const def_glUniform3fARB = {
  parameters: ["i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform3fARB!: Deno.UnsafeFnPointer<typeof def_glUniform3fARB>;

export function Uniform3fARB(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glUniform3fARB.call(
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glUniform4fARB = {
  parameters: ["i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform4fARB!: Deno.UnsafeFnPointer<typeof def_glUniform4fARB>;

export function Uniform4fARB(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glUniform4fARB.call(
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glUniform1iARB = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glUniform1iARB!: Deno.UnsafeFnPointer<typeof def_glUniform1iARB>;

export function Uniform1iARB(
  location: GLint,
  v0: GLint,
): void {
  fn_glUniform1iARB.call(
    location,
    v0,
  );
}

export const def_glUniform2iARB = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform2iARB!: Deno.UnsafeFnPointer<typeof def_glUniform2iARB>;

export function Uniform2iARB(
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glUniform2iARB.call(
    location,
    v0,
    v1,
  );
}

export const def_glUniform3iARB = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform3iARB!: Deno.UnsafeFnPointer<typeof def_glUniform3iARB>;

export function Uniform3iARB(
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glUniform3iARB.call(
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glUniform4iARB = {
  parameters: ["i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform4iARB!: Deno.UnsafeFnPointer<typeof def_glUniform4iARB>;

export function Uniform4iARB(
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glUniform4iARB.call(
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glUniform1fvARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1fvARB!: Deno.UnsafeFnPointer<typeof def_glUniform1fvARB>;

export function Uniform1fvARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1fvARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2fvARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2fvARB!: Deno.UnsafeFnPointer<typeof def_glUniform2fvARB>;

export function Uniform2fvARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2fvARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3fvARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3fvARB!: Deno.UnsafeFnPointer<typeof def_glUniform3fvARB>;

export function Uniform3fvARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3fvARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4fvARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4fvARB!: Deno.UnsafeFnPointer<typeof def_glUniform4fvARB>;

export function Uniform4fvARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4fvARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform1ivARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1ivARB!: Deno.UnsafeFnPointer<typeof def_glUniform1ivARB>;

export function Uniform1ivARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1ivARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2ivARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2ivARB!: Deno.UnsafeFnPointer<typeof def_glUniform2ivARB>;

export function Uniform2ivARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2ivARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3ivARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3ivARB!: Deno.UnsafeFnPointer<typeof def_glUniform3ivARB>;

export function Uniform3ivARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3ivARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4ivARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4ivARB!: Deno.UnsafeFnPointer<typeof def_glUniform4ivARB>;

export function Uniform4ivARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4ivARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2fvARB = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2fvARB!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2fvARB>;

export function UniformMatrix2fvARB(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2fvARB.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3fvARB = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3fvARB!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3fvARB>;

export function UniformMatrix3fvARB(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3fvARB.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4fvARB = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4fvARB!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4fvARB>;

export function UniformMatrix4fvARB(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4fvARB.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glGetObjectParameterfvARB = {
  parameters: ["buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectParameterfvARB!: Deno.UnsafeFnPointer<typeof def_glGetObjectParameterfvARB>;

export function GetObjectParameterfvARB(
  obj: GLhandleARB,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetObjectParameterfvARB.call(
    bufferToFFI(obj),
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetObjectParameterivARB = {
  parameters: ["buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectParameterivARB!: Deno.UnsafeFnPointer<typeof def_glGetObjectParameterivARB>;

export function GetObjectParameterivARB(
  obj: GLhandleARB,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetObjectParameterivARB.call(
    bufferToFFI(obj),
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetInfoLogARB = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetInfoLogARB!: Deno.UnsafeFnPointer<typeof def_glGetInfoLogARB>;

export function GetInfoLogARB(
  obj: GLhandleARB,
  maxLength: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetInfoLogARB.call(
    bufferToFFI(obj),
    maxLength,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

export const def_glGetAttachedObjectsARB = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetAttachedObjectsARB!: Deno.UnsafeFnPointer<typeof def_glGetAttachedObjectsARB>;

export function GetAttachedObjectsARB(
  containerObj: GLhandleARB,
  maxCount: GLsizei,
  count: Buffer,
  obj: Buffer,
): void {
  fn_glGetAttachedObjectsARB.call(
    bufferToFFI(containerObj),
    maxCount,
    bufferToFFI(count),
    bufferToFFI(obj),
  );
}

export const def_glGetUniformLocationARB = {
  parameters: ["buffer", "buffer"],
  result: "i32",
} as const;

let fn_glGetUniformLocationARB!: Deno.UnsafeFnPointer<typeof def_glGetUniformLocationARB>;

export function GetUniformLocationARB(
  programObj: GLhandleARB,
  name: Buffer,
): GLint {
  return fn_glGetUniformLocationARB.call(
    bufferToFFI(programObj),
    bufferToFFI(name),
  );
}

export const def_glGetActiveUniformARB = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformARB!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniformARB>;

export function GetActiveUniformARB(
  programObj: GLhandleARB,
  index: GLuint,
  maxLength: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveUniformARB.call(
    bufferToFFI(programObj),
    index,
    maxLength,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glGetUniformfvARB = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformfvARB!: Deno.UnsafeFnPointer<typeof def_glGetUniformfvARB>;

export function GetUniformfvARB(
  programObj: GLhandleARB,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformfvARB.call(
    bufferToFFI(programObj),
    location,
    bufferToFFI(params),
  );
}

export const def_glGetUniformivARB = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformivARB!: Deno.UnsafeFnPointer<typeof def_glGetUniformivARB>;

export function GetUniformivARB(
  programObj: GLhandleARB,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformivARB.call(
    bufferToFFI(programObj),
    location,
    bufferToFFI(params),
  );
}

export const def_glGetShaderSourceARB = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderSourceARB!: Deno.UnsafeFnPointer<typeof def_glGetShaderSourceARB>;

export function GetShaderSourceARB(
  obj: GLhandleARB,
  maxLength: GLsizei,
  length: Buffer,
  source: Buffer,
): void {
  fn_glGetShaderSourceARB.call(
    bufferToFFI(obj),
    maxLength,
    bufferToFFI(length),
    bufferToFFI(source),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDeleteObjectARB = new Deno.UnsafeFnPointer(proc("glDeleteObjectARB")!, def_glDeleteObjectARB);
  fn_glGetHandleARB = new Deno.UnsafeFnPointer(proc("glGetHandleARB")!, def_glGetHandleARB);
  fn_glDetachObjectARB = new Deno.UnsafeFnPointer(proc("glDetachObjectARB")!, def_glDetachObjectARB);
  fn_glCreateShaderObjectARB = new Deno.UnsafeFnPointer(proc("glCreateShaderObjectARB")!, def_glCreateShaderObjectARB);
  fn_glShaderSourceARB = new Deno.UnsafeFnPointer(proc("glShaderSourceARB")!, def_glShaderSourceARB);
  fn_glCompileShaderARB = new Deno.UnsafeFnPointer(proc("glCompileShaderARB")!, def_glCompileShaderARB);
  fn_glCreateProgramObjectARB = new Deno.UnsafeFnPointer(proc("glCreateProgramObjectARB")!, def_glCreateProgramObjectARB);
  fn_glAttachObjectARB = new Deno.UnsafeFnPointer(proc("glAttachObjectARB")!, def_glAttachObjectARB);
  fn_glLinkProgramARB = new Deno.UnsafeFnPointer(proc("glLinkProgramARB")!, def_glLinkProgramARB);
  fn_glUseProgramObjectARB = new Deno.UnsafeFnPointer(proc("glUseProgramObjectARB")!, def_glUseProgramObjectARB);
  fn_glValidateProgramARB = new Deno.UnsafeFnPointer(proc("glValidateProgramARB")!, def_glValidateProgramARB);
  fn_glUniform1fARB = new Deno.UnsafeFnPointer(proc("glUniform1fARB")!, def_glUniform1fARB);
  fn_glUniform2fARB = new Deno.UnsafeFnPointer(proc("glUniform2fARB")!, def_glUniform2fARB);
  fn_glUniform3fARB = new Deno.UnsafeFnPointer(proc("glUniform3fARB")!, def_glUniform3fARB);
  fn_glUniform4fARB = new Deno.UnsafeFnPointer(proc("glUniform4fARB")!, def_glUniform4fARB);
  fn_glUniform1iARB = new Deno.UnsafeFnPointer(proc("glUniform1iARB")!, def_glUniform1iARB);
  fn_glUniform2iARB = new Deno.UnsafeFnPointer(proc("glUniform2iARB")!, def_glUniform2iARB);
  fn_glUniform3iARB = new Deno.UnsafeFnPointer(proc("glUniform3iARB")!, def_glUniform3iARB);
  fn_glUniform4iARB = new Deno.UnsafeFnPointer(proc("glUniform4iARB")!, def_glUniform4iARB);
  fn_glUniform1fvARB = new Deno.UnsafeFnPointer(proc("glUniform1fvARB")!, def_glUniform1fvARB);
  fn_glUniform2fvARB = new Deno.UnsafeFnPointer(proc("glUniform2fvARB")!, def_glUniform2fvARB);
  fn_glUniform3fvARB = new Deno.UnsafeFnPointer(proc("glUniform3fvARB")!, def_glUniform3fvARB);
  fn_glUniform4fvARB = new Deno.UnsafeFnPointer(proc("glUniform4fvARB")!, def_glUniform4fvARB);
  fn_glUniform1ivARB = new Deno.UnsafeFnPointer(proc("glUniform1ivARB")!, def_glUniform1ivARB);
  fn_glUniform2ivARB = new Deno.UnsafeFnPointer(proc("glUniform2ivARB")!, def_glUniform2ivARB);
  fn_glUniform3ivARB = new Deno.UnsafeFnPointer(proc("glUniform3ivARB")!, def_glUniform3ivARB);
  fn_glUniform4ivARB = new Deno.UnsafeFnPointer(proc("glUniform4ivARB")!, def_glUniform4ivARB);
  fn_glUniformMatrix2fvARB = new Deno.UnsafeFnPointer(proc("glUniformMatrix2fvARB")!, def_glUniformMatrix2fvARB);
  fn_glUniformMatrix3fvARB = new Deno.UnsafeFnPointer(proc("glUniformMatrix3fvARB")!, def_glUniformMatrix3fvARB);
  fn_glUniformMatrix4fvARB = new Deno.UnsafeFnPointer(proc("glUniformMatrix4fvARB")!, def_glUniformMatrix4fvARB);
  fn_glGetObjectParameterfvARB = new Deno.UnsafeFnPointer(proc("glGetObjectParameterfvARB")!, def_glGetObjectParameterfvARB);
  fn_glGetObjectParameterivARB = new Deno.UnsafeFnPointer(proc("glGetObjectParameterivARB")!, def_glGetObjectParameterivARB);
  fn_glGetInfoLogARB = new Deno.UnsafeFnPointer(proc("glGetInfoLogARB")!, def_glGetInfoLogARB);
  fn_glGetAttachedObjectsARB = new Deno.UnsafeFnPointer(proc("glGetAttachedObjectsARB")!, def_glGetAttachedObjectsARB);
  fn_glGetUniformLocationARB = new Deno.UnsafeFnPointer(proc("glGetUniformLocationARB")!, def_glGetUniformLocationARB);
  fn_glGetActiveUniformARB = new Deno.UnsafeFnPointer(proc("glGetActiveUniformARB")!, def_glGetActiveUniformARB);
  fn_glGetUniformfvARB = new Deno.UnsafeFnPointer(proc("glGetUniformfvARB")!, def_glGetUniformfvARB);
  fn_glGetUniformivARB = new Deno.UnsafeFnPointer(proc("glGetUniformivARB")!, def_glGetUniformivARB);
  fn_glGetShaderSourceARB = new Deno.UnsafeFnPointer(proc("glGetShaderSourceARB")!, def_glGetShaderSourceARB);
}
