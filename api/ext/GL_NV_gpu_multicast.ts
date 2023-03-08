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
export const PER_GPU_STORAGE_BIT_NV = 0x800;
export const MULTICAST_GPUS_NV = 0x92ba;
export const RENDER_GPU_MASK_NV = 0x9558;
export const PER_GPU_STORAGE_NV = 0x9548;
export const MULTICAST_PROGRAMMABLE_SAMPLE_LOCATION_NV = 0x9549;

/// Commands

export const def_glRenderGpuMaskNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glRenderGpuMaskNV!: Deno.UnsafeFnPointer<typeof def_glRenderGpuMaskNV>;

export function RenderGpuMaskNV(
  mask: GLbitfield,
): void {
  fn_glRenderGpuMaskNV.call(
    mask,
  );
}

export const def_glMulticastBufferSubDataNV = {
  parameters: ["u32", "u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glMulticastBufferSubDataNV!: Deno.UnsafeFnPointer<typeof def_glMulticastBufferSubDataNV>;

export function MulticastBufferSubDataNV(
  gpuMask: GLbitfield,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glMulticastBufferSubDataNV.call(
    gpuMask,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glMulticastCopyBufferSubDataNV = {
  parameters: ["u32", "u32", "u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glMulticastCopyBufferSubDataNV!: Deno.UnsafeFnPointer<typeof def_glMulticastCopyBufferSubDataNV>;

export function MulticastCopyBufferSubDataNV(
  readGpu: GLuint,
  writeGpuMask: GLbitfield,
  readBuffer: GLuint,
  writeBuffer: GLuint,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glMulticastCopyBufferSubDataNV.call(
    readGpu,
    writeGpuMask,
    readBuffer,
    writeBuffer,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glMulticastCopyImageSubDataNV = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32", "i32", "i32", "u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMulticastCopyImageSubDataNV!: Deno.UnsafeFnPointer<typeof def_glMulticastCopyImageSubDataNV>;

export function MulticastCopyImageSubDataNV(
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
): void {
  fn_glMulticastCopyImageSubDataNV.call(
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
  );
}

export const def_glMulticastBlitFramebufferNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMulticastBlitFramebufferNV!: Deno.UnsafeFnPointer<typeof def_glMulticastBlitFramebufferNV>;

export function MulticastBlitFramebufferNV(
  srcGpu: GLuint,
  dstGpu: GLuint,
  srcX0: GLint,
  srcY0: GLint,
  srcX1: GLint,
  srcY1: GLint,
  dstX0: GLint,
  dstY0: GLint,
  dstX1: GLint,
  dstY1: GLint,
  mask: GLbitfield,
  filter: GLenum,
): void {
  fn_glMulticastBlitFramebufferNV.call(
    srcGpu,
    dstGpu,
    srcX0,
    srcY0,
    srcX1,
    srcY1,
    dstX0,
    dstY0,
    dstX1,
    dstY1,
    mask,
    filter,
  );
}

export const def_glMulticastFramebufferSampleLocationsfvNV = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastFramebufferSampleLocationsfvNV!: Deno.UnsafeFnPointer<typeof def_glMulticastFramebufferSampleLocationsfvNV>;

export function MulticastFramebufferSampleLocationsfvNV(
  gpu: GLuint,
  framebuffer: GLuint,
  start: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glMulticastFramebufferSampleLocationsfvNV.call(
    gpu,
    framebuffer,
    start,
    count,
    bufferToFFI(v),
  );
}

export const def_glMulticastBarrierNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glMulticastBarrierNV!: Deno.UnsafeFnPointer<typeof def_glMulticastBarrierNV>;

export function MulticastBarrierNV(): void {
  fn_glMulticastBarrierNV.call();
}

export const def_glMulticastWaitSyncNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glMulticastWaitSyncNV!: Deno.UnsafeFnPointer<typeof def_glMulticastWaitSyncNV>;

export function MulticastWaitSyncNV(
  signalGpu: GLuint,
  waitGpuMask: GLbitfield,
): void {
  fn_glMulticastWaitSyncNV.call(
    signalGpu,
    waitGpuMask,
  );
}

export const def_glMulticastGetQueryObjectivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastGetQueryObjectivNV!: Deno.UnsafeFnPointer<typeof def_glMulticastGetQueryObjectivNV>;

export function MulticastGetQueryObjectivNV(
  gpu: GLuint,
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMulticastGetQueryObjectivNV.call(
    gpu,
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMulticastGetQueryObjectuivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastGetQueryObjectuivNV!: Deno.UnsafeFnPointer<typeof def_glMulticastGetQueryObjectuivNV>;

export function MulticastGetQueryObjectuivNV(
  gpu: GLuint,
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMulticastGetQueryObjectuivNV.call(
    gpu,
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMulticastGetQueryObjecti64vNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastGetQueryObjecti64vNV!: Deno.UnsafeFnPointer<typeof def_glMulticastGetQueryObjecti64vNV>;

export function MulticastGetQueryObjecti64vNV(
  gpu: GLuint,
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMulticastGetQueryObjecti64vNV.call(
    gpu,
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMulticastGetQueryObjectui64vNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMulticastGetQueryObjectui64vNV!: Deno.UnsafeFnPointer<typeof def_glMulticastGetQueryObjectui64vNV>;

export function MulticastGetQueryObjectui64vNV(
  gpu: GLuint,
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMulticastGetQueryObjectui64vNV.call(
    gpu,
    id,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glRenderGpuMaskNV = new Deno.UnsafeFnPointer(proc("glRenderGpuMaskNV")!, def_glRenderGpuMaskNV);
  fn_glMulticastBufferSubDataNV = new Deno.UnsafeFnPointer(proc("glMulticastBufferSubDataNV")!, def_glMulticastBufferSubDataNV);
  fn_glMulticastCopyBufferSubDataNV = new Deno.UnsafeFnPointer(proc("glMulticastCopyBufferSubDataNV")!, def_glMulticastCopyBufferSubDataNV);
  fn_glMulticastCopyImageSubDataNV = new Deno.UnsafeFnPointer(proc("glMulticastCopyImageSubDataNV")!, def_glMulticastCopyImageSubDataNV);
  fn_glMulticastBlitFramebufferNV = new Deno.UnsafeFnPointer(proc("glMulticastBlitFramebufferNV")!, def_glMulticastBlitFramebufferNV);
  fn_glMulticastFramebufferSampleLocationsfvNV = new Deno.UnsafeFnPointer(proc("glMulticastFramebufferSampleLocationsfvNV")!, def_glMulticastFramebufferSampleLocationsfvNV);
  fn_glMulticastBarrierNV = new Deno.UnsafeFnPointer(proc("glMulticastBarrierNV")!, def_glMulticastBarrierNV);
  fn_glMulticastWaitSyncNV = new Deno.UnsafeFnPointer(proc("glMulticastWaitSyncNV")!, def_glMulticastWaitSyncNV);
  fn_glMulticastGetQueryObjectivNV = new Deno.UnsafeFnPointer(proc("glMulticastGetQueryObjectivNV")!, def_glMulticastGetQueryObjectivNV);
  fn_glMulticastGetQueryObjectuivNV = new Deno.UnsafeFnPointer(proc("glMulticastGetQueryObjectuivNV")!, def_glMulticastGetQueryObjectuivNV);
  fn_glMulticastGetQueryObjecti64vNV = new Deno.UnsafeFnPointer(proc("glMulticastGetQueryObjecti64vNV")!, def_glMulticastGetQueryObjecti64vNV);
  fn_glMulticastGetQueryObjectui64vNV = new Deno.UnsafeFnPointer(proc("glMulticastGetQueryObjectui64vNV")!, def_glMulticastGetQueryObjectui64vNV);
}
