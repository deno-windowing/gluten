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
export const ALL_COMPLETED_NV = 0x84f2;
export const FENCE_STATUS_NV = 0x84f3;
export const FENCE_CONDITION_NV = 0x84f4;

/// Commands

export const def_glDeleteFencesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFencesNV!: Deno.UnsafeFnPointer<typeof def_glDeleteFencesNV>;

export function DeleteFencesNV(
  n: GLsizei,
  fences: Buffer,
): void {
  fn_glDeleteFencesNV.call(
    n,
    bufferToFFI(fences),
  );
}

export const def_glGenFencesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenFencesNV!: Deno.UnsafeFnPointer<typeof def_glGenFencesNV>;

export function GenFencesNV(
  n: GLsizei,
  fences: Buffer,
): void {
  fn_glGenFencesNV.call(
    n,
    bufferToFFI(fences),
  );
}

export const def_glIsFenceNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsFenceNV!: Deno.UnsafeFnPointer<typeof def_glIsFenceNV>;

export function IsFenceNV(
  fence: GLuint,
): GLboolean {
  return fn_glIsFenceNV.call(
    fence,
  );
}

export const def_glTestFenceNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glTestFenceNV!: Deno.UnsafeFnPointer<typeof def_glTestFenceNV>;

export function TestFenceNV(
  fence: GLuint,
): GLboolean {
  return fn_glTestFenceNV.call(
    fence,
  );
}

export const def_glGetFenceivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFenceivNV!: Deno.UnsafeFnPointer<typeof def_glGetFenceivNV>;

export function GetFenceivNV(
  fence: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFenceivNV.call(
    fence,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFinishFenceNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glFinishFenceNV!: Deno.UnsafeFnPointer<typeof def_glFinishFenceNV>;

export function FinishFenceNV(
  fence: GLuint,
): void {
  fn_glFinishFenceNV.call(
    fence,
  );
}

export const def_glSetFenceNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSetFenceNV!: Deno.UnsafeFnPointer<typeof def_glSetFenceNV>;

export function SetFenceNV(
  fence: GLuint,
  condition: GLenum,
): void {
  fn_glSetFenceNV.call(
    fence,
    condition,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDeleteFencesNV = new Deno.UnsafeFnPointer(proc("glDeleteFencesNV")!, def_glDeleteFencesNV);
  fn_glGenFencesNV = new Deno.UnsafeFnPointer(proc("glGenFencesNV")!, def_glGenFencesNV);
  fn_glIsFenceNV = new Deno.UnsafeFnPointer(proc("glIsFenceNV")!, def_glIsFenceNV);
  fn_glTestFenceNV = new Deno.UnsafeFnPointer(proc("glTestFenceNV")!, def_glTestFenceNV);
  fn_glGetFenceivNV = new Deno.UnsafeFnPointer(proc("glGetFenceivNV")!, def_glGetFenceivNV);
  fn_glFinishFenceNV = new Deno.UnsafeFnPointer(proc("glFinishFenceNV")!, def_glFinishFenceNV);
  fn_glSetFenceNV = new Deno.UnsafeFnPointer(proc("glSetFenceNV")!, def_glSetFenceNV);
}
