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
export const ACTIVE_SUBROUTINES = 0x8de5;
export const ACTIVE_SUBROUTINE_UNIFORMS = 0x8de6;
export const ACTIVE_SUBROUTINE_UNIFORM_LOCATIONS = 0x8e47;
export const ACTIVE_SUBROUTINE_MAX_LENGTH = 0x8e48;
export const ACTIVE_SUBROUTINE_UNIFORM_MAX_LENGTH = 0x8e49;
export const MAX_SUBROUTINES = 0x8de7;
export const MAX_SUBROUTINE_UNIFORM_LOCATIONS = 0x8de8;
export const NUM_COMPATIBLE_SUBROUTINES = 0x8e4a;
export const COMPATIBLE_SUBROUTINES = 0x8e4b;
export const UNIFORM_SIZE = 0x8a38;
export const UNIFORM_NAME_LENGTH = 0x8a39;

/// Commands

export const def_glGetSubroutineUniformLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetSubroutineUniformLocation!: Deno.UnsafeFnPointer<typeof def_glGetSubroutineUniformLocation>;

export function GetSubroutineUniformLocation(
  program: GLuint,
  shadertype: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetSubroutineUniformLocation.call(
    program,
    shadertype,
    bufferToFFI(name),
  );
}

export const def_glGetSubroutineIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetSubroutineIndex!: Deno.UnsafeFnPointer<typeof def_glGetSubroutineIndex>;

export function GetSubroutineIndex(
  program: GLuint,
  shadertype: GLenum,
  name: Buffer,
): GLuint {
  return fn_glGetSubroutineIndex.call(
    program,
    shadertype,
    bufferToFFI(name),
  );
}

export const def_glGetActiveSubroutineUniformiv = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineUniformiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineUniformiv>;

export function GetActiveSubroutineUniformiv(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  pname: GLenum,
  values: Buffer,
): void {
  fn_glGetActiveSubroutineUniformiv.call(
    program,
    shadertype,
    index,
    pname,
    bufferToFFI(values),
  );
}

export const def_glGetActiveSubroutineUniformName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineUniformName!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineUniformName>;

export function GetActiveSubroutineUniformName(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveSubroutineUniformName.call(
    program,
    shadertype,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glGetActiveSubroutineName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineName!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineName>;

export function GetActiveSubroutineName(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveSubroutineName.call(
    program,
    shadertype,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glUniformSubroutinesuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformSubroutinesuiv!: Deno.UnsafeFnPointer<typeof def_glUniformSubroutinesuiv>;

export function UniformSubroutinesuiv(
  shadertype: GLenum,
  count: GLsizei,
  indices: Buffer,
): void {
  fn_glUniformSubroutinesuiv.call(
    shadertype,
    count,
    bufferToFFI(indices),
  );
}

export const def_glGetUniformSubroutineuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformSubroutineuiv!: Deno.UnsafeFnPointer<typeof def_glGetUniformSubroutineuiv>;

export function GetUniformSubroutineuiv(
  shadertype: GLenum,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformSubroutineuiv.call(
    shadertype,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetProgramStageiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramStageiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramStageiv>;

export function GetProgramStageiv(
  program: GLuint,
  shadertype: GLenum,
  pname: GLenum,
  values: Buffer,
): void {
  fn_glGetProgramStageiv.call(
    program,
    shadertype,
    pname,
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetSubroutineUniformLocation = new Deno.UnsafeFnPointer(proc("glGetSubroutineUniformLocation"), def_glGetSubroutineUniformLocation);
  fn_glGetSubroutineIndex = new Deno.UnsafeFnPointer(proc("glGetSubroutineIndex"), def_glGetSubroutineIndex);
  fn_glGetActiveSubroutineUniformiv = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineUniformiv"), def_glGetActiveSubroutineUniformiv);
  fn_glGetActiveSubroutineUniformName = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineUniformName"), def_glGetActiveSubroutineUniformName);
  fn_glGetActiveSubroutineName = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineName"), def_glGetActiveSubroutineName);
  fn_glUniformSubroutinesuiv = new Deno.UnsafeFnPointer(proc("glUniformSubroutinesuiv"), def_glUniformSubroutinesuiv);
  fn_glGetUniformSubroutineuiv = new Deno.UnsafeFnPointer(proc("glGetUniformSubroutineuiv"), def_glGetUniformSubroutineuiv);
  fn_glGetProgramStageiv = new Deno.UnsafeFnPointer(proc("glGetProgramStageiv"), def_glGetProgramStageiv);
}
