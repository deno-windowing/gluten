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
export const UNIFORM_BUFFER = 0x8a11;
export const UNIFORM_BUFFER_BINDING = 0x8a28;
export const UNIFORM_BUFFER_START = 0x8a29;
export const UNIFORM_BUFFER_SIZE = 0x8a2a;
export const MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b;
export const MAX_GEOMETRY_UNIFORM_BLOCKS = 0x8a2c;
export const MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d;
export const MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e;
export const MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f;
export const MAX_UNIFORM_BLOCK_SIZE = 0x8a30;
export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31;
export const MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS = 0x8a32;
export const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33;
export const UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34;
export const ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH = 0x8a35;
export const ACTIVE_UNIFORM_BLOCKS = 0x8a36;
export const UNIFORM_TYPE = 0x8a37;
export const UNIFORM_SIZE = 0x8a38;
export const UNIFORM_NAME_LENGTH = 0x8a39;
export const UNIFORM_BLOCK_INDEX = 0x8a3a;
export const UNIFORM_OFFSET = 0x8a3b;
export const UNIFORM_ARRAY_STRIDE = 0x8a3c;
export const UNIFORM_MATRIX_STRIDE = 0x8a3d;
export const UNIFORM_IS_ROW_MAJOR = 0x8a3e;
export const UNIFORM_BLOCK_BINDING = 0x8a3f;
export const UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
export const UNIFORM_BLOCK_NAME_LENGTH = 0x8a41;
export const UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42;
export const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
export const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
export const UNIFORM_BLOCK_REFERENCED_BY_GEOMETRY_SHADER = 0x8a45;
export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
export const INVALID_INDEX = 0xffffffff;

/// Commands

export const def_glGetUniformIndices = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformIndices!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformIndices
>;

export function GetUniformIndices(
  program: GLuint,
  uniformCount: GLsizei,
  uniformNames: Buffer,
  uniformIndices: Buffer,
): void {
  fn_glGetUniformIndices.call(
    program,
    uniformCount,
    bufferToFFI(uniformNames),
    bufferToFFI(uniformIndices),
  );
}

export const def_glGetActiveUniformsiv = {
  parameters: ["u32", "i32", "buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformsiv!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformsiv
>;

export function GetActiveUniformsiv(
  program: GLuint,
  uniformCount: GLsizei,
  uniformIndices: Buffer,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveUniformsiv.call(
    program,
    uniformCount,
    bufferToFFI(uniformIndices),
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetActiveUniformName = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformName!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformName
>;

export function GetActiveUniformName(
  program: GLuint,
  uniformIndex: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  uniformName: Buffer,
): void {
  fn_glGetActiveUniformName.call(
    program,
    uniformIndex,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(uniformName),
  );
}

export const def_glGetUniformBlockIndex = {
  parameters: ["u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetUniformBlockIndex!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformBlockIndex
>;

export function GetUniformBlockIndex(
  program: GLuint,
  uniformBlockName: Buffer,
): GLuint {
  return fn_glGetUniformBlockIndex.call(
    program,
    bufferToFFI(uniformBlockName),
  );
}

export const def_glGetActiveUniformBlockiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformBlockiv!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformBlockiv
>;

export function GetActiveUniformBlockiv(
  program: GLuint,
  uniformBlockIndex: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveUniformBlockiv.call(
    program,
    uniformBlockIndex,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetActiveUniformBlockName = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformBlockName!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformBlockName
>;

export function GetActiveUniformBlockName(
  program: GLuint,
  uniformBlockIndex: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  uniformBlockName: Buffer,
): void {
  fn_glGetActiveUniformBlockName.call(
    program,
    uniformBlockIndex,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(uniformBlockName),
  );
}

export const def_glUniformBlockBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUniformBlockBinding!: Deno.UnsafeFnPointer<
  typeof def_glUniformBlockBinding
>;

export function UniformBlockBinding(
  program: GLuint,
  uniformBlockIndex: GLuint,
  uniformBlockBinding: GLuint,
): void {
  fn_glUniformBlockBinding.call(
    program,
    uniformBlockIndex,
    uniformBlockBinding,
  );
}

export const def_glBindBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glBindBufferRange!: Deno.UnsafeFnPointer<typeof def_glBindBufferRange>;

export function BindBufferRange(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glBindBufferRange.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glBindBufferBase = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindBufferBase!: Deno.UnsafeFnPointer<typeof def_glBindBufferBase>;

export function BindBufferBase(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glBindBufferBase.call(
    target,
    index,
    buffer,
  );
}

export const def_glGetIntegeri_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegeri_v!: Deno.UnsafeFnPointer<typeof def_glGetIntegeri_v>;

export function GetIntegeri_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetIntegeri_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetUniformIndices = new Deno.UnsafeFnPointer(
    proc("glGetUniformIndices"),
    def_glGetUniformIndices,
  );
  fn_glGetActiveUniformsiv = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformsiv"),
    def_glGetActiveUniformsiv,
  );
  fn_glGetActiveUniformName = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformName"),
    def_glGetActiveUniformName,
  );
  fn_glGetUniformBlockIndex = new Deno.UnsafeFnPointer(
    proc("glGetUniformBlockIndex"),
    def_glGetUniformBlockIndex,
  );
  fn_glGetActiveUniformBlockiv = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformBlockiv"),
    def_glGetActiveUniformBlockiv,
  );
  fn_glGetActiveUniformBlockName = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformBlockName"),
    def_glGetActiveUniformBlockName,
  );
  fn_glUniformBlockBinding = new Deno.UnsafeFnPointer(
    proc("glUniformBlockBinding"),
    def_glUniformBlockBinding,
  );
  fn_glBindBufferRange = new Deno.UnsafeFnPointer(
    proc("glBindBufferRange"),
    def_glBindBufferRange,
  );
  fn_glBindBufferBase = new Deno.UnsafeFnPointer(
    proc("glBindBufferBase"),
    def_glBindBufferBase,
  );
  fn_glGetIntegeri_v = new Deno.UnsafeFnPointer(
    proc("glGetIntegeri_v"),
    def_glGetIntegeri_v,
  );
}
