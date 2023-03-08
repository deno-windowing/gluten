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
export const TIMELINE_SEMAPHORE_VALUE_NV = 0x9595;
export const SEMAPHORE_TYPE_NV = 0x95b3;
export const SEMAPHORE_TYPE_BINARY_NV = 0x95b4;
export const SEMAPHORE_TYPE_TIMELINE_NV = 0x95b5;
export const MAX_TIMELINE_SEMAPHORE_VALUE_DIFFERENCE_NV = 0x95b6;

/// Commands

export const def_glCreateSemaphoresNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateSemaphoresNV!: Deno.UnsafeFnPointer<typeof def_glCreateSemaphoresNV>;

export function CreateSemaphoresNV(
  n: GLsizei,
  semaphores: Buffer,
): void {
  fn_glCreateSemaphoresNV.call(
    n,
    bufferToFFI(semaphores),
  );
}

export const def_glSemaphoreParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSemaphoreParameterivNV!: Deno.UnsafeFnPointer<typeof def_glSemaphoreParameterivNV>;

export function SemaphoreParameterivNV(
  semaphore: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glSemaphoreParameterivNV.call(
    semaphore,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSemaphoreParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSemaphoreParameterivNV!: Deno.UnsafeFnPointer<typeof def_glGetSemaphoreParameterivNV>;

export function GetSemaphoreParameterivNV(
  semaphore: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSemaphoreParameterivNV.call(
    semaphore,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCreateSemaphoresNV = new Deno.UnsafeFnPointer(proc("glCreateSemaphoresNV")!, def_glCreateSemaphoresNV);
  fn_glSemaphoreParameterivNV = new Deno.UnsafeFnPointer(proc("glSemaphoreParameterivNV")!, def_glSemaphoreParameterivNV);
  fn_glGetSemaphoreParameterivNV = new Deno.UnsafeFnPointer(proc("glGetSemaphoreParameterivNV")!, def_glGetSemaphoreParameterivNV);
}
