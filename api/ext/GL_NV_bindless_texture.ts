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

/// Commands

export const def_glGetTextureHandleNV = {
  parameters: ["u32"],
  result: "u64",
} as const;

let fn_glGetTextureHandleNV!: Deno.UnsafeFnPointer<typeof def_glGetTextureHandleNV>;

export function GetTextureHandleNV(
  texture: GLuint,
): GLuint64 {
  return fn_glGetTextureHandleNV.call(
    texture,
  );
}

export const def_glGetTextureSamplerHandleNV = {
  parameters: ["u32", "u32"],
  result: "u64",
} as const;

let fn_glGetTextureSamplerHandleNV!: Deno.UnsafeFnPointer<typeof def_glGetTextureSamplerHandleNV>;

export function GetTextureSamplerHandleNV(
  texture: GLuint,
  sampler: GLuint,
): GLuint64 {
  return fn_glGetTextureSamplerHandleNV.call(
    texture,
    sampler,
  );
}

export const def_glMakeTextureHandleResidentNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeTextureHandleResidentNV!: Deno.UnsafeFnPointer<typeof def_glMakeTextureHandleResidentNV>;

export function MakeTextureHandleResidentNV(
  handle: GLuint64,
): void {
  fn_glMakeTextureHandleResidentNV.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glMakeTextureHandleNonResidentNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeTextureHandleNonResidentNV!: Deno.UnsafeFnPointer<typeof def_glMakeTextureHandleNonResidentNV>;

export function MakeTextureHandleNonResidentNV(
  handle: GLuint64,
): void {
  fn_glMakeTextureHandleNonResidentNV.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glGetImageHandleNV = {
  parameters: ["u32", "i32", "u8", "i32", "u32"],
  result: "u64",
} as const;

let fn_glGetImageHandleNV!: Deno.UnsafeFnPointer<typeof def_glGetImageHandleNV>;

export function GetImageHandleNV(
  texture: GLuint,
  level: GLint,
  layered: GLboolean,
  layer: GLint,
  format: GLenum,
): GLuint64 {
  return fn_glGetImageHandleNV.call(
    texture,
    level,
    layered,
    layer,
    format,
  );
}

export const def_glMakeImageHandleResidentNV = {
  parameters: ["u64", "u32"],
  result: "void",
} as const;

let fn_glMakeImageHandleResidentNV!: Deno.UnsafeFnPointer<typeof def_glMakeImageHandleResidentNV>;

export function MakeImageHandleResidentNV(
  handle: GLuint64,
  access: GLenum,
): void {
  fn_glMakeImageHandleResidentNV.call(
    Deno.UnsafePointer.value(handle),
    access,
  );
}

export const def_glMakeImageHandleNonResidentNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glMakeImageHandleNonResidentNV!: Deno.UnsafeFnPointer<typeof def_glMakeImageHandleNonResidentNV>;

export function MakeImageHandleNonResidentNV(
  handle: GLuint64,
): void {
  fn_glMakeImageHandleNonResidentNV.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glUniformHandleui64NV = {
  parameters: ["i32", "u64"],
  result: "void",
} as const;

let fn_glUniformHandleui64NV!: Deno.UnsafeFnPointer<typeof def_glUniformHandleui64NV>;

export function UniformHandleui64NV(
  location: GLint,
  value: GLuint64,
): void {
  fn_glUniformHandleui64NV.call(
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glUniformHandleui64vNV = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformHandleui64vNV!: Deno.UnsafeFnPointer<typeof def_glUniformHandleui64vNV>;

export function UniformHandleui64vNV(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniformHandleui64vNV.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformHandleui64NV = {
  parameters: ["u32", "i32", "u64"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64NV!: Deno.UnsafeFnPointer<typeof def_glProgramUniformHandleui64NV>;

export function ProgramUniformHandleui64NV(
  program: GLuint,
  location: GLint,
  value: GLuint64,
): void {
  fn_glProgramUniformHandleui64NV.call(
    program,
    location,
    Deno.UnsafePointer.value(value),
  );
}

export const def_glProgramUniformHandleui64vNV = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformHandleui64vNV!: Deno.UnsafeFnPointer<typeof def_glProgramUniformHandleui64vNV>;

export function ProgramUniformHandleui64vNV(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  values: Buffer,
): void {
  fn_glProgramUniformHandleui64vNV.call(
    program,
    location,
    count,
    bufferToFFI(values),
  );
}

export const def_glIsTextureHandleResidentNV = {
  parameters: ["u64"],
  result: "u8",
} as const;

let fn_glIsTextureHandleResidentNV!: Deno.UnsafeFnPointer<typeof def_glIsTextureHandleResidentNV>;

export function IsTextureHandleResidentNV(
  handle: GLuint64,
): GLboolean {
  return fn_glIsTextureHandleResidentNV.call(
    Deno.UnsafePointer.value(handle),
  );
}

export const def_glIsImageHandleResidentNV = {
  parameters: ["u64"],
  result: "u8",
} as const;

let fn_glIsImageHandleResidentNV!: Deno.UnsafeFnPointer<typeof def_glIsImageHandleResidentNV>;

export function IsImageHandleResidentNV(
  handle: GLuint64,
): GLboolean {
  return fn_glIsImageHandleResidentNV.call(
    Deno.UnsafePointer.value(handle),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetTextureHandleNV = new Deno.UnsafeFnPointer(proc("glGetTextureHandleNV")!, def_glGetTextureHandleNV);
  fn_glGetTextureSamplerHandleNV = new Deno.UnsafeFnPointer(proc("glGetTextureSamplerHandleNV")!, def_glGetTextureSamplerHandleNV);
  fn_glMakeTextureHandleResidentNV = new Deno.UnsafeFnPointer(proc("glMakeTextureHandleResidentNV")!, def_glMakeTextureHandleResidentNV);
  fn_glMakeTextureHandleNonResidentNV = new Deno.UnsafeFnPointer(proc("glMakeTextureHandleNonResidentNV")!, def_glMakeTextureHandleNonResidentNV);
  fn_glGetImageHandleNV = new Deno.UnsafeFnPointer(proc("glGetImageHandleNV")!, def_glGetImageHandleNV);
  fn_glMakeImageHandleResidentNV = new Deno.UnsafeFnPointer(proc("glMakeImageHandleResidentNV")!, def_glMakeImageHandleResidentNV);
  fn_glMakeImageHandleNonResidentNV = new Deno.UnsafeFnPointer(proc("glMakeImageHandleNonResidentNV")!, def_glMakeImageHandleNonResidentNV);
  fn_glUniformHandleui64NV = new Deno.UnsafeFnPointer(proc("glUniformHandleui64NV")!, def_glUniformHandleui64NV);
  fn_glUniformHandleui64vNV = new Deno.UnsafeFnPointer(proc("glUniformHandleui64vNV")!, def_glUniformHandleui64vNV);
  fn_glProgramUniformHandleui64NV = new Deno.UnsafeFnPointer(proc("glProgramUniformHandleui64NV")!, def_glProgramUniformHandleui64NV);
  fn_glProgramUniformHandleui64vNV = new Deno.UnsafeFnPointer(proc("glProgramUniformHandleui64vNV")!, def_glProgramUniformHandleui64vNV);
  fn_glIsTextureHandleResidentNV = new Deno.UnsafeFnPointer(proc("glIsTextureHandleResidentNV")!, def_glIsTextureHandleResidentNV);
  fn_glIsImageHandleResidentNV = new Deno.UnsafeFnPointer(proc("glIsImageHandleResidentNV")!, def_glIsImageHandleResidentNV);
}
