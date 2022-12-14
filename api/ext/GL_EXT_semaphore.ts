/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  else if (typeof buf === "number" || typeof buf === "bigint") {
    if (buf === 0 || buf === 0n) return null;
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(buf, 1));
  } else if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else {
    return new Uint8Array(buf.buffer);
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
export const NUM_DEVICE_UUIDS_EXT = 0x9596;
export const DEVICE_UUID_EXT = 0x9597;
export const DRIVER_UUID_EXT = 0x9598;
export const UUID_SIZE_EXT = 0x10;
export const LAYOUT_GENERAL_EXT = 0x958d;
export const LAYOUT_COLOR_ATTACHMENT_EXT = 0x958e;
export const LAYOUT_DEPTH_STENCIL_ATTACHMENT_EXT = 0x958f;
export const LAYOUT_DEPTH_STENCIL_READ_ONLY_EXT = 0x9590;
export const LAYOUT_SHADER_READ_ONLY_EXT = 0x9591;
export const LAYOUT_TRANSFER_SRC_EXT = 0x9592;
export const LAYOUT_TRANSFER_DST_EXT = 0x9593;
export const LAYOUT_DEPTH_READ_ONLY_STENCIL_ATTACHMENT_EXT = 0x9530;
export const LAYOUT_DEPTH_ATTACHMENT_STENCIL_READ_ONLY_EXT = 0x9531;

/// Commands

export const def_glGetUnsignedBytevEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetUnsignedBytevEXT!: Deno.UnsafeFnPointer<typeof def_glGetUnsignedBytevEXT>;

export function GetUnsignedBytevEXT(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetUnsignedBytevEXT.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetUnsignedBytei_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetUnsignedBytei_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetUnsignedBytei_vEXT>;

export function GetUnsignedBytei_vEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetUnsignedBytei_vEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGenSemaphoresEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenSemaphoresEXT!: Deno.UnsafeFnPointer<typeof def_glGenSemaphoresEXT>;

export function GenSemaphoresEXT(
  n: GLsizei,
  semaphores: Buffer,
): void {
  fn_glGenSemaphoresEXT.call(
    n,
    bufferToFFI(semaphores),
  );
}

export const def_glDeleteSemaphoresEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteSemaphoresEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteSemaphoresEXT>;

export function DeleteSemaphoresEXT(
  n: GLsizei,
  semaphores: Buffer,
): void {
  fn_glDeleteSemaphoresEXT.call(
    n,
    bufferToFFI(semaphores),
  );
}

export const def_glIsSemaphoreEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsSemaphoreEXT!: Deno.UnsafeFnPointer<typeof def_glIsSemaphoreEXT>;

export function IsSemaphoreEXT(
  semaphore: GLuint,
): GLboolean {
  return fn_glIsSemaphoreEXT.call(
    semaphore,
  );
}

export const def_glSemaphoreParameterui64vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSemaphoreParameterui64vEXT!: Deno.UnsafeFnPointer<typeof def_glSemaphoreParameterui64vEXT>;

export function SemaphoreParameterui64vEXT(
  semaphore: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glSemaphoreParameterui64vEXT.call(
    semaphore,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSemaphoreParameterui64vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSemaphoreParameterui64vEXT!: Deno.UnsafeFnPointer<typeof def_glGetSemaphoreParameterui64vEXT>;

export function GetSemaphoreParameterui64vEXT(
  semaphore: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSemaphoreParameterui64vEXT.call(
    semaphore,
    pname,
    bufferToFFI(params),
  );
}

export const def_glWaitSemaphoreEXT = {
  parameters: ["u32", "u32", "buffer", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glWaitSemaphoreEXT!: Deno.UnsafeFnPointer<typeof def_glWaitSemaphoreEXT>;

export function WaitSemaphoreEXT(
  semaphore: GLuint,
  numBufferBarriers: GLuint,
  buffers: Buffer,
  numTextureBarriers: GLuint,
  textures: Buffer,
  srcLayouts: Buffer,
): void {
  fn_glWaitSemaphoreEXT.call(
    semaphore,
    numBufferBarriers,
    bufferToFFI(buffers),
    numTextureBarriers,
    bufferToFFI(textures),
    bufferToFFI(srcLayouts),
  );
}

export const def_glSignalSemaphoreEXT = {
  parameters: ["u32", "u32", "buffer", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glSignalSemaphoreEXT!: Deno.UnsafeFnPointer<typeof def_glSignalSemaphoreEXT>;

export function SignalSemaphoreEXT(
  semaphore: GLuint,
  numBufferBarriers: GLuint,
  buffers: Buffer,
  numTextureBarriers: GLuint,
  textures: Buffer,
  dstLayouts: Buffer,
): void {
  fn_glSignalSemaphoreEXT.call(
    semaphore,
    numBufferBarriers,
    bufferToFFI(buffers),
    numTextureBarriers,
    bufferToFFI(textures),
    bufferToFFI(dstLayouts),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetUnsignedBytevEXT = new Deno.UnsafeFnPointer(proc("glGetUnsignedBytevEXT"), def_glGetUnsignedBytevEXT);
  fn_glGetUnsignedBytei_vEXT = new Deno.UnsafeFnPointer(proc("glGetUnsignedBytei_vEXT"), def_glGetUnsignedBytei_vEXT);
  fn_glGenSemaphoresEXT = new Deno.UnsafeFnPointer(proc("glGenSemaphoresEXT"), def_glGenSemaphoresEXT);
  fn_glDeleteSemaphoresEXT = new Deno.UnsafeFnPointer(proc("glDeleteSemaphoresEXT"), def_glDeleteSemaphoresEXT);
  fn_glIsSemaphoreEXT = new Deno.UnsafeFnPointer(proc("glIsSemaphoreEXT"), def_glIsSemaphoreEXT);
  fn_glSemaphoreParameterui64vEXT = new Deno.UnsafeFnPointer(proc("glSemaphoreParameterui64vEXT"), def_glSemaphoreParameterui64vEXT);
  fn_glGetSemaphoreParameterui64vEXT = new Deno.UnsafeFnPointer(proc("glGetSemaphoreParameterui64vEXT"), def_glGetSemaphoreParameterui64vEXT);
  fn_glWaitSemaphoreEXT = new Deno.UnsafeFnPointer(proc("glWaitSemaphoreEXT"), def_glWaitSemaphoreEXT);
  fn_glSignalSemaphoreEXT = new Deno.UnsafeFnPointer(proc("glSignalSemaphoreEXT"), def_glSignalSemaphoreEXT);
}
