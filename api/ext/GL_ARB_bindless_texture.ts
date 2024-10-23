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
export const UNSIGNED_INT64_ARB = 0x140f;

/// Commands

export const def_glGetTextureHandleARB = {
  parameters: ["u32"],
  result: "u64",
} as const;

let fn_glGetTextureHandleARB!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureHandleARB
>;

export function GetTextureHandleARB(
  texture: GLuint,
): GLuint64 {
  return fn_glGetTextureHandleARB.call(
    texture,
  );
}

export const def_glGetTextureSamplerHandleARB = {
  parameters: ["u32", "u32"],
  result: "u64",
} as const;

let fn_glGetTextureSamplerHandleARB!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureSamplerHandleARB
>;

export function GetTextureSamplerHandleARB(
  texture: GLuint,
  sampler: GLuint,
): GLuint64 {
  return fn_glGetTextureSamplerHandleARB.call(
    texture,
    sampler,
  );
}

export const def_glMakeTextureHandleResidentARB = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeTextureHandleResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glMakeTextureHandleResidentARB
>;

export function MakeTextureHandleResidentARB(
  handle: GLuint64,
): void {
  fn_glMakeTextureHandleResidentARB.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glMakeTextureHandleNonResidentARB = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeTextureHandleNonResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glMakeTextureHandleNonResidentARB
>;

export function MakeTextureHandleNonResidentARB(
  handle: GLuint64,
): void {
  fn_glMakeTextureHandleNonResidentARB.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glGetImageHandleARB = {
  parameters: ["u32", "i32", "u8", "i32", "u32"],
  result: "u64",
} as const;

let fn_glGetImageHandleARB!: Deno.UnsafeFnPointer<
  typeof def_glGetImageHandleARB
>;

export function GetImageHandleARB(
  texture: GLuint,
  level: GLint,
  layered: GLboolean,
  layer: GLint,
  format: GLenum,
): GLuint64 {
  return fn_glGetImageHandleARB.call(
    texture,
    level,
    layered,
    layer,
    format,
  );
}

export const def_glMakeImageHandleResidentARB = {
  parameters: ["u64", "u32"],
  result: "void",
} as const;

let fn_glMakeImageHandleResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glMakeImageHandleResidentARB
>;

export function MakeImageHandleResidentARB(
  handle: GLuint64,
  access: GLenum,
): void {
  fn_glMakeImageHandleResidentARB.call(
    Deno.UnsafePointer.value(handle),
    access,
  );
}

export const def_glMakeImageHandleNonResidentARB = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeImageHandleNonResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glMakeImageHandleNonResidentARB
>;

export function MakeImageHandleNonResidentARB(
  handle: GLuint64,
): void {
  fn_glMakeImageHandleNonResidentARB.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glUniformHandleui64ARB = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniformHandleui64ARB!: Deno.UnsafeFnPointer<
  typeof def_glUniformHandleui64ARB
>;

export function UniformHandleui64ARB(
  location: GLint,
  value: GLuint64,
): void {
  fn_glUniformHandleui64ARB.call(
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glUniformHandleui64vARB = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformHandleui64vARB!: Deno.UnsafeFnPointer<
  typeof def_glUniformHandleui64vARB
>;

export function UniformHandleui64vARB(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniformHandleui64vARB.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformHandleui64ARB = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64ARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformHandleui64ARB
>;

export function ProgramUniformHandleui64ARB(
  program: GLuint,
  location: GLint,
  value: GLuint64,
): void {
  fn_glProgramUniformHandleui64ARB.call(
    program,
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glProgramUniformHandleui64vARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64vARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformHandleui64vARB
>;

export function ProgramUniformHandleui64vARB(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  values: Buffer,
): void {
  fn_glProgramUniformHandleui64vARB.call(
    program,
    location,
    count,
    bufferToFFI(values),
  );
}

export const def_glIsTextureHandleResidentARB = {
  parameters: ["u64"],
  result: "u8",
} as const;

let fn_glIsTextureHandleResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glIsTextureHandleResidentARB
>;

export function IsTextureHandleResidentARB(
  handle: GLuint64,
): GLboolean {
  return fn_glIsTextureHandleResidentARB.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glIsImageHandleResidentARB = {
  parameters: ["u64"],
  result: "u8",
} as const;

let fn_glIsImageHandleResidentARB!: Deno.UnsafeFnPointer<
  typeof def_glIsImageHandleResidentARB
>;

export function IsImageHandleResidentARB(
  handle: GLuint64,
): GLboolean {
  return fn_glIsImageHandleResidentARB.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glVertexAttribL1ui64ARB = {
  parameters: ["u32", "u64"],
  result: "void",
} as const;

let fn_glVertexAttribL1ui64ARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribL1ui64ARB
>;

export function VertexAttribL1ui64ARB(
  index: GLuint,
  x: GLuint64EXT,
): void {
  fn_glVertexAttribL1ui64ARB.call(
    index,
    x,
  );
}

export const def_glVertexAttribL1ui64vARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1ui64vARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribL1ui64vARB
>;

export function VertexAttribL1ui64vARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1ui64vARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glGetVertexAttribLui64vARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLui64vARB!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribLui64vARB
>;

export function GetVertexAttribLui64vARB(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLui64vARB.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetTextureHandleARB = new Deno.UnsafeFnPointer(
    proc("glGetTextureHandleARB")!,
    def_glGetTextureHandleARB,
  );
  fn_glGetTextureSamplerHandleARB = new Deno.UnsafeFnPointer(
    proc("glGetTextureSamplerHandleARB")!,
    def_glGetTextureSamplerHandleARB,
  );
  fn_glMakeTextureHandleResidentARB = new Deno.UnsafeFnPointer(
    proc("glMakeTextureHandleResidentARB")!,
    def_glMakeTextureHandleResidentARB,
  );
  fn_glMakeTextureHandleNonResidentARB = new Deno.UnsafeFnPointer(
    proc("glMakeTextureHandleNonResidentARB")!,
    def_glMakeTextureHandleNonResidentARB,
  );
  fn_glGetImageHandleARB = new Deno.UnsafeFnPointer(
    proc("glGetImageHandleARB")!,
    def_glGetImageHandleARB,
  );
  fn_glMakeImageHandleResidentARB = new Deno.UnsafeFnPointer(
    proc("glMakeImageHandleResidentARB")!,
    def_glMakeImageHandleResidentARB,
  );
  fn_glMakeImageHandleNonResidentARB = new Deno.UnsafeFnPointer(
    proc("glMakeImageHandleNonResidentARB")!,
    def_glMakeImageHandleNonResidentARB,
  );
  fn_glUniformHandleui64ARB = new Deno.UnsafeFnPointer(
    proc("glUniformHandleui64ARB")!,
    def_glUniformHandleui64ARB,
  );
  fn_glUniformHandleui64vARB = new Deno.UnsafeFnPointer(
    proc("glUniformHandleui64vARB")!,
    def_glUniformHandleui64vARB,
  );
  fn_glProgramUniformHandleui64ARB = new Deno.UnsafeFnPointer(
    proc("glProgramUniformHandleui64ARB")!,
    def_glProgramUniformHandleui64ARB,
  );
  fn_glProgramUniformHandleui64vARB = new Deno.UnsafeFnPointer(
    proc("glProgramUniformHandleui64vARB")!,
    def_glProgramUniformHandleui64vARB,
  );
  fn_glIsTextureHandleResidentARB = new Deno.UnsafeFnPointer(
    proc("glIsTextureHandleResidentARB")!,
    def_glIsTextureHandleResidentARB,
  );
  fn_glIsImageHandleResidentARB = new Deno.UnsafeFnPointer(
    proc("glIsImageHandleResidentARB")!,
    def_glIsImageHandleResidentARB,
  );
  fn_glVertexAttribL1ui64ARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttribL1ui64ARB")!,
    def_glVertexAttribL1ui64ARB,
  );
  fn_glVertexAttribL1ui64vARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttribL1ui64vARB")!,
    def_glVertexAttribL1ui64vARB,
  );
  fn_glGetVertexAttribLui64vARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribLui64vARB")!,
    def_glGetVertexAttribLui64vARB,
  );
}
