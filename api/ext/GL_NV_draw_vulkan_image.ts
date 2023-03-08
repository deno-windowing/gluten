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

export const def_glDrawVkImageNV = {
  parameters: [
    "u64",
    "u32",
    "f32",
    "f32",
    "f32",
    "f32",
    "f32",
    "f32",
    "f32",
    "f32",
    "f32",
  ],
  result: "void",
} as const;

let fn_glDrawVkImageNV!: Deno.UnsafeFnPointer<typeof def_glDrawVkImageNV>;

export function DrawVkImageNV(
  vkImage: GLuint64,
  sampler: GLuint,
  x0: GLfloat,
  y0: GLfloat,
  x1: GLfloat,
  y1: GLfloat,
  z: GLfloat,
  s0: GLfloat,
  t0: GLfloat,
  s1: GLfloat,
  t1: GLfloat,
): void {
  fn_glDrawVkImageNV.call(
    Deno.UnsafePointer.value(vkImage),
    sampler,
    x0,
    y0,
    x1,
    y1,
    z,
    s0,
    t0,
    s1,
    t1,
  );
}

export const def_glGetVkProcAddrNV = {
  parameters: ["buffer"],
  result: "buffer",
} as const;

let fn_glGetVkProcAddrNV!: Deno.UnsafeFnPointer<typeof def_glGetVkProcAddrNV>;

export function GetVkProcAddrNV(
  name: Buffer,
): GLVULKANPROCNV {
  return fn_glGetVkProcAddrNV.call(
    bufferToFFI(name),
  );
}

export const def_glWaitVkSemaphoreNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glWaitVkSemaphoreNV!: Deno.UnsafeFnPointer<
  typeof def_glWaitVkSemaphoreNV
>;

export function WaitVkSemaphoreNV(
  vkSemaphore: GLuint64,
): void {
  fn_glWaitVkSemaphoreNV.call(
    Deno.UnsafePointer.value(vkSemaphore),
  );
}

export const def_glSignalVkSemaphoreNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glSignalVkSemaphoreNV!: Deno.UnsafeFnPointer<
  typeof def_glSignalVkSemaphoreNV
>;

export function SignalVkSemaphoreNV(
  vkSemaphore: GLuint64,
): void {
  fn_glSignalVkSemaphoreNV.call(
    Deno.UnsafePointer.value(vkSemaphore),
  );
}

export const def_glSignalVkFenceNV = {
  parameters: ["u64"],
  result: "void",
} as const;

let fn_glSignalVkFenceNV!: Deno.UnsafeFnPointer<typeof def_glSignalVkFenceNV>;

export function SignalVkFenceNV(
  vkFence: GLuint64,
): void {
  fn_glSignalVkFenceNV.call(
    Deno.UnsafePointer.value(vkFence),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawVkImageNV = new Deno.UnsafeFnPointer(
    proc("glDrawVkImageNV")!,
    def_glDrawVkImageNV,
  );
  fn_glGetVkProcAddrNV = new Deno.UnsafeFnPointer(
    proc("glGetVkProcAddrNV")!,
    def_glGetVkProcAddrNV,
  );
  fn_glWaitVkSemaphoreNV = new Deno.UnsafeFnPointer(
    proc("glWaitVkSemaphoreNV")!,
    def_glWaitVkSemaphoreNV,
  );
  fn_glSignalVkSemaphoreNV = new Deno.UnsafeFnPointer(
    proc("glSignalVkSemaphoreNV")!,
    def_glSignalVkSemaphoreNV,
  );
  fn_glSignalVkFenceNV = new Deno.UnsafeFnPointer(
    proc("glSignalVkFenceNV")!,
    def_glSignalVkFenceNV,
  );
}
