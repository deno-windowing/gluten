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

/// Commands

export const def_glGetTextureHandleIMG = {
  parameters: ["u32"],
  result: "u64",
} as const;

let fn_glGetTextureHandleIMG!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureHandleIMG
>;

export function GetTextureHandleIMG(
  texture: GLuint,
): GLuint64 {
  return fn_glGetTextureHandleIMG.call(
    texture,
  );
}

export const def_glGetTextureSamplerHandleIMG = {
  parameters: ["u32", "u32"],
  result: "u64",
} as const;

let fn_glGetTextureSamplerHandleIMG!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureSamplerHandleIMG
>;

export function GetTextureSamplerHandleIMG(
  texture: GLuint,
  sampler: GLuint,
): GLuint64 {
  return fn_glGetTextureSamplerHandleIMG.call(
    texture,
    sampler,
  );
}

export const def_glUniformHandleui64IMG = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniformHandleui64IMG!: Deno.UnsafeFnPointer<
  typeof def_glUniformHandleui64IMG
>;

export function UniformHandleui64IMG(
  location: GLint,
  value: GLuint64,
): void {
  fn_glUniformHandleui64IMG.call(
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glUniformHandleui64vIMG = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformHandleui64vIMG!: Deno.UnsafeFnPointer<
  typeof def_glUniformHandleui64vIMG
>;

export function UniformHandleui64vIMG(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniformHandleui64vIMG.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformHandleui64IMG = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64IMG!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformHandleui64IMG
>;

export function ProgramUniformHandleui64IMG(
  program: GLuint,
  location: GLint,
  value: GLuint64,
): void {
  fn_glProgramUniformHandleui64IMG.call(
    program,
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glProgramUniformHandleui64vIMG = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64vIMG!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformHandleui64vIMG
>;

export function ProgramUniformHandleui64vIMG(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  values: Buffer,
): void {
  fn_glProgramUniformHandleui64vIMG.call(
    program,
    location,
    count,
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetTextureHandleIMG = new Deno.UnsafeFnPointer(
    proc("glGetTextureHandleIMG")!,
    def_glGetTextureHandleIMG,
  );
  fn_glGetTextureSamplerHandleIMG = new Deno.UnsafeFnPointer(
    proc("glGetTextureSamplerHandleIMG")!,
    def_glGetTextureSamplerHandleIMG,
  );
  fn_glUniformHandleui64IMG = new Deno.UnsafeFnPointer(
    proc("glUniformHandleui64IMG")!,
    def_glUniformHandleui64IMG,
  );
  fn_glUniformHandleui64vIMG = new Deno.UnsafeFnPointer(
    proc("glUniformHandleui64vIMG")!,
    def_glUniformHandleui64vIMG,
  );
  fn_glProgramUniformHandleui64IMG = new Deno.UnsafeFnPointer(
    proc("glProgramUniformHandleui64IMG")!,
    def_glProgramUniformHandleui64IMG,
  );
  fn_glProgramUniformHandleui64vIMG = new Deno.UnsafeFnPointer(
    proc("glProgramUniformHandleui64vIMG")!,
    def_glProgramUniformHandleui64vIMG,
  );
}
