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
export const BUFFER_GPU_ADDRESS_NV = 0x8f1d;
export const GPU_ADDRESS_NV = 0x8f34;
export const MAX_SHADER_BUFFER_ADDRESS_NV = 0x8f35;

/// Commands

export const def_glMakeBufferResidentNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glMakeBufferResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glMakeBufferResidentNV
>;

export function MakeBufferResidentNV(
  target: GLenum,
  access: GLenum,
): void {
  fn_glMakeBufferResidentNV.call(
    target,
    access,
  );
}

export const def_glMakeBufferNonResidentNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMakeBufferNonResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glMakeBufferNonResidentNV
>;

export function MakeBufferNonResidentNV(
  target: GLenum,
): void {
  fn_glMakeBufferNonResidentNV.call(
    target,
  );
}

export const def_glIsBufferResidentNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsBufferResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glIsBufferResidentNV
>;

export function IsBufferResidentNV(
  target: GLenum,
): GLboolean {
  return fn_glIsBufferResidentNV.call(
    target,
  );
}

export const def_glMakeNamedBufferResidentNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glMakeNamedBufferResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glMakeNamedBufferResidentNV
>;

export function MakeNamedBufferResidentNV(
  buffer: GLuint,
  access: GLenum,
): void {
  fn_glMakeNamedBufferResidentNV.call(
    buffer,
    access,
  );
}

export const def_glMakeNamedBufferNonResidentNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMakeNamedBufferNonResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glMakeNamedBufferNonResidentNV
>;

export function MakeNamedBufferNonResidentNV(
  buffer: GLuint,
): void {
  fn_glMakeNamedBufferNonResidentNV.call(
    buffer,
  );
}

export const def_glIsNamedBufferResidentNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsNamedBufferResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glIsNamedBufferResidentNV
>;

export function IsNamedBufferResidentNV(
  buffer: GLuint,
): GLboolean {
  return fn_glIsNamedBufferResidentNV.call(
    buffer,
  );
}

export const def_glGetBufferParameterui64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferParameterui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glGetBufferParameterui64vNV
>;

export function GetBufferParameterui64vNV(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferParameterui64vNV.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferParameterui64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameterui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedBufferParameterui64vNV
>;

export function GetNamedBufferParameterui64vNV(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameterui64vNV.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetIntegerui64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegerui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glGetIntegerui64vNV
>;

export function GetIntegerui64vNV(
  value: GLenum,
  result: Buffer,
): void {
  fn_glGetIntegerui64vNV.call(
    value,
    bufferToFFI(result),
  );
}

export const def_glUniformui64NV = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniformui64NV!: Deno.UnsafeFnPointer<typeof def_glUniformui64NV>;

export function Uniformui64NV(
  location: GLint,
  value: GLuint64EXT,
): void {
  fn_glUniformui64NV.call(
    location,
    value,
  );
}

export const def_glUniformui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniformui64vNV>;

export function Uniformui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniformui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glGetUniformui64vNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformui64vNV
>;

export function GetUniformui64vNV(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformui64vNV.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glProgramUniformui64NV = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniformui64NV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformui64NV
>;

export function ProgramUniformui64NV(
  program: GLuint,
  location: GLint,
  value: GLuint64EXT,
): void {
  fn_glProgramUniformui64NV.call(
    program,
    location,
    value,
  );
}

export const def_glProgramUniformui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformui64vNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformui64vNV
>;

export function ProgramUniformui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniformui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMakeBufferResidentNV = new Deno.UnsafeFnPointer(
    proc("glMakeBufferResidentNV")!,
    def_glMakeBufferResidentNV,
  );
  fn_glMakeBufferNonResidentNV = new Deno.UnsafeFnPointer(
    proc("glMakeBufferNonResidentNV")!,
    def_glMakeBufferNonResidentNV,
  );
  fn_glIsBufferResidentNV = new Deno.UnsafeFnPointer(
    proc("glIsBufferResidentNV")!,
    def_glIsBufferResidentNV,
  );
  fn_glMakeNamedBufferResidentNV = new Deno.UnsafeFnPointer(
    proc("glMakeNamedBufferResidentNV")!,
    def_glMakeNamedBufferResidentNV,
  );
  fn_glMakeNamedBufferNonResidentNV = new Deno.UnsafeFnPointer(
    proc("glMakeNamedBufferNonResidentNV")!,
    def_glMakeNamedBufferNonResidentNV,
  );
  fn_glIsNamedBufferResidentNV = new Deno.UnsafeFnPointer(
    proc("glIsNamedBufferResidentNV")!,
    def_glIsNamedBufferResidentNV,
  );
  fn_glGetBufferParameterui64vNV = new Deno.UnsafeFnPointer(
    proc("glGetBufferParameterui64vNV")!,
    def_glGetBufferParameterui64vNV,
  );
  fn_glGetNamedBufferParameterui64vNV = new Deno.UnsafeFnPointer(
    proc("glGetNamedBufferParameterui64vNV")!,
    def_glGetNamedBufferParameterui64vNV,
  );
  fn_glGetIntegerui64vNV = new Deno.UnsafeFnPointer(
    proc("glGetIntegerui64vNV")!,
    def_glGetIntegerui64vNV,
  );
  fn_glUniformui64NV = new Deno.UnsafeFnPointer(
    proc("glUniformui64NV")!,
    def_glUniformui64NV,
  );
  fn_glUniformui64vNV = new Deno.UnsafeFnPointer(
    proc("glUniformui64vNV")!,
    def_glUniformui64vNV,
  );
  fn_glGetUniformui64vNV = new Deno.UnsafeFnPointer(
    proc("glGetUniformui64vNV")!,
    def_glGetUniformui64vNV,
  );
  fn_glProgramUniformui64NV = new Deno.UnsafeFnPointer(
    proc("glProgramUniformui64NV")!,
    def_glProgramUniformui64NV,
  );
  fn_glProgramUniformui64vNV = new Deno.UnsafeFnPointer(
    proc("glProgramUniformui64vNV")!,
    def_glProgramUniformui64vNV,
  );
}
