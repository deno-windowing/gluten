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
export const UPLOAD_GPU_MASK_NVX = 0x954a;

/// Commands

export const def_glUploadGpuMaskNVX = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glUploadGpuMaskNVX!: Deno.UnsafeFnPointer<typeof def_glUploadGpuMaskNVX>;

export function UploadGpuMaskNVX(
  mask: GLbitfield,
): void {
  fn_glUploadGpuMaskNVX.call(
    mask,
  );
}

export const def_glMulticastViewportArrayvNVX = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastViewportArrayvNVX!: Deno.UnsafeFnPointer<
  typeof def_glMulticastViewportArrayvNVX
>;

export function MulticastViewportArrayvNVX(
  gpu: GLuint,
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glMulticastViewportArrayvNVX.call(
    gpu,
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glMulticastViewportPositionWScaleNVX = {
  parameters: ["u32", "u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMulticastViewportPositionWScaleNVX!: Deno.UnsafeFnPointer<
  typeof def_glMulticastViewportPositionWScaleNVX
>;

export function MulticastViewportPositionWScaleNVX(
  gpu: GLuint,
  index: GLuint,
  xcoeff: GLfloat,
  ycoeff: GLfloat,
): void {
  fn_glMulticastViewportPositionWScaleNVX.call(
    gpu,
    index,
    xcoeff,
    ycoeff,
  );
}

export const def_glMulticastScissorArrayvNVX = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastScissorArrayvNVX!: Deno.UnsafeFnPointer<
  typeof def_glMulticastScissorArrayvNVX
>;

export function MulticastScissorArrayvNVX(
  gpu: GLuint,
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glMulticastScissorArrayvNVX.call(
    gpu,
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glAsyncCopyBufferSubDataNVX = {
  parameters: [
    "i32",
    "buffer",
    "buffer",
    "u32",
    "u32",
    "u32",
    "u32",
    "buffer",
    "buffer",
    "isize",
    "i32",
    "buffer",
    "buffer",
  ],
  result: "u32",
} as const;

let fn_glAsyncCopyBufferSubDataNVX!: Deno.UnsafeFnPointer<
  typeof def_glAsyncCopyBufferSubDataNVX
>;

export function AsyncCopyBufferSubDataNVX(
  waitSemaphoreCount: GLsizei,
  waitSemaphoreArray: Buffer,
  fenceValueArray: Buffer,
  readGpu: GLuint,
  writeGpuMask: GLbitfield,
  readBuffer: GLuint,
  writeBuffer: GLuint,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
  signalSemaphoreCount: GLsizei,
  signalSemaphoreArray: Buffer,
  signalValueArray: Buffer,
): GLuint {
  return fn_glAsyncCopyBufferSubDataNVX.call(
    waitSemaphoreCount,
    bufferToFFI(waitSemaphoreArray),
    bufferToFFI(fenceValueArray),
    readGpu,
    writeGpuMask,
    readBuffer,
    writeBuffer,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    Deno.UnsafePointer.value(size),
    signalSemaphoreCount,
    bufferToFFI(signalSemaphoreArray),
    bufferToFFI(signalValueArray),
  );
}

export const def_glAsyncCopyImageSubDataNVX = {
  parameters: [
    "i32",
    "buffer",
    "buffer",
    "u32",
    "u32",
    "u32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "buffer",
    "buffer",
  ],
  result: "u32",
} as const;

let fn_glAsyncCopyImageSubDataNVX!: Deno.UnsafeFnPointer<
  typeof def_glAsyncCopyImageSubDataNVX
>;

export function AsyncCopyImageSubDataNVX(
  waitSemaphoreCount: GLsizei,
  waitSemaphoreArray: Buffer,
  waitValueArray: Buffer,
  srcGpu: GLuint,
  dstGpuMask: GLbitfield,
  srcName: GLuint,
  srcTarget: GLenum,
  srcLevel: GLint,
  srcX: GLint,
  srcY: GLint,
  srcZ: GLint,
  dstName: GLuint,
  dstTarget: GLenum,
  dstLevel: GLint,
  dstX: GLint,
  dstY: GLint,
  dstZ: GLint,
  srcWidth: GLsizei,
  srcHeight: GLsizei,
  srcDepth: GLsizei,
  signalSemaphoreCount: GLsizei,
  signalSemaphoreArray: Buffer,
  signalValueArray: Buffer,
): GLuint {
  return fn_glAsyncCopyImageSubDataNVX.call(
    waitSemaphoreCount,
    bufferToFFI(waitSemaphoreArray),
    bufferToFFI(waitValueArray),
    srcGpu,
    dstGpuMask,
    srcName,
    srcTarget,
    srcLevel,
    srcX,
    srcY,
    srcZ,
    dstName,
    dstTarget,
    dstLevel,
    dstX,
    dstY,
    dstZ,
    srcWidth,
    srcHeight,
    srcDepth,
    signalSemaphoreCount,
    bufferToFFI(signalSemaphoreArray),
    bufferToFFI(signalValueArray),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUploadGpuMaskNVX = new Deno.UnsafeFnPointer(
    proc("glUploadGpuMaskNVX")!,
    def_glUploadGpuMaskNVX,
  );
  fn_glMulticastViewportArrayvNVX = new Deno.UnsafeFnPointer(
    proc("glMulticastViewportArrayvNVX")!,
    def_glMulticastViewportArrayvNVX,
  );
  fn_glMulticastViewportPositionWScaleNVX = new Deno.UnsafeFnPointer(
    proc("glMulticastViewportPositionWScaleNVX")!,
    def_glMulticastViewportPositionWScaleNVX,
  );
  fn_glMulticastScissorArrayvNVX = new Deno.UnsafeFnPointer(
    proc("glMulticastScissorArrayvNVX")!,
    def_glMulticastScissorArrayvNVX,
  );
  fn_glAsyncCopyBufferSubDataNVX = new Deno.UnsafeFnPointer(
    proc("glAsyncCopyBufferSubDataNVX")!,
    def_glAsyncCopyBufferSubDataNVX,
  );
  fn_glAsyncCopyImageSubDataNVX = new Deno.UnsafeFnPointer(
    proc("glAsyncCopyImageSubDataNVX")!,
    def_glAsyncCopyImageSubDataNVX,
  );
}
