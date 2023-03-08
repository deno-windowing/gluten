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
export const LGPU_SEPARATE_STORAGE_BIT_NVX = 0x800;
export const MAX_LGPU_GPUS_NVX = 0x92ba;

/// Commands

export const def_glLGPUNamedBufferSubDataNVX = {
  parameters: ["u32", "u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glLGPUNamedBufferSubDataNVX!: Deno.UnsafeFnPointer<
  typeof def_glLGPUNamedBufferSubDataNVX
>;

export function LGPUNamedBufferSubDataNVX(
  gpuMask: GLbitfield,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glLGPUNamedBufferSubDataNVX.call(
    gpuMask,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glLGPUCopyImageSubDataNVX = {
  parameters: [
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
  ],
  result: "void",
} as const;

let fn_glLGPUCopyImageSubDataNVX!: Deno.UnsafeFnPointer<
  typeof def_glLGPUCopyImageSubDataNVX
>;

export function LGPUCopyImageSubDataNVX(
  sourceGpu: GLuint,
  destinationGpuMask: GLbitfield,
  srcName: GLuint,
  srcTarget: GLenum,
  srcLevel: GLint,
  srcX: GLint,
  srxY: GLint,
  srcZ: GLint,
  dstName: GLuint,
  dstTarget: GLenum,
  dstLevel: GLint,
  dstX: GLint,
  dstY: GLint,
  dstZ: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glLGPUCopyImageSubDataNVX.call(
    sourceGpu,
    destinationGpuMask,
    srcName,
    srcTarget,
    srcLevel,
    srcX,
    srxY,
    srcZ,
    dstName,
    dstTarget,
    dstLevel,
    dstX,
    dstY,
    dstZ,
    width,
    height,
    depth,
  );
}

export const def_glLGPUInterlockNVX = {
  parameters: [],
  result: "void",
} as const;

let fn_glLGPUInterlockNVX!: Deno.UnsafeFnPointer<typeof def_glLGPUInterlockNVX>;

export function LGPUInterlockNVX(): void {
  fn_glLGPUInterlockNVX.call();
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glLGPUNamedBufferSubDataNVX = new Deno.UnsafeFnPointer(
    proc("glLGPUNamedBufferSubDataNVX")!,
    def_glLGPUNamedBufferSubDataNVX,
  );
  fn_glLGPUCopyImageSubDataNVX = new Deno.UnsafeFnPointer(
    proc("glLGPUCopyImageSubDataNVX")!,
    def_glLGPUCopyImageSubDataNVX,
  );
  fn_glLGPUInterlockNVX = new Deno.UnsafeFnPointer(
    proc("glLGPUInterlockNVX")!,
    def_glLGPUInterlockNVX,
  );
}
