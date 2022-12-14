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
export const SYNC_OBJECT_APPLE = 0x8a53;
export const MAX_SERVER_WAIT_TIMEOUT_APPLE = 0x9111;
export const OBJECT_TYPE_APPLE = 0x9112;
export const SYNC_CONDITION_APPLE = 0x9113;
export const SYNC_STATUS_APPLE = 0x9114;
export const SYNC_FLAGS_APPLE = 0x9115;
export const SYNC_FENCE_APPLE = 0x9116;
export const SYNC_GPU_COMMANDS_COMPLETE_APPLE = 0x9117;
export const UNSIGNALED_APPLE = 0x9118;
export const SIGNALED_APPLE = 0x9119;
export const ALREADY_SIGNALED_APPLE = 0x911a;
export const TIMEOUT_EXPIRED_APPLE = 0x911b;
export const CONDITION_SATISFIED_APPLE = 0x911c;
export const WAIT_FAILED_APPLE = 0x911d;
export const SYNC_FLUSH_COMMANDS_BIT_APPLE = 0x1;
export const TIMEOUT_IGNORED_APPLE = 0x10000000000000000;

/// Commands

export const def_glFenceSyncAPPLE = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glFenceSyncAPPLE!: Deno.UnsafeFnPointer<typeof def_glFenceSyncAPPLE>;

export function FenceSyncAPPLE(
  condition: GLenum,
  flags: GLbitfield,
): GLsync {
  return fn_glFenceSyncAPPLE.call(
    condition,
    flags,
  );
}

export const def_glIsSyncAPPLE = {
  parameters: ["buffer"],
  result: "u8",
} as const;

let fn_glIsSyncAPPLE!: Deno.UnsafeFnPointer<typeof def_glIsSyncAPPLE>;

export function IsSyncAPPLE(
  sync: GLsync,
): GLboolean {
  return fn_glIsSyncAPPLE.call(
    bufferToFFI(sync),
  );
}

export const def_glDeleteSyncAPPLE = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDeleteSyncAPPLE!: Deno.UnsafeFnPointer<typeof def_glDeleteSyncAPPLE>;

export function DeleteSyncAPPLE(
  sync: GLsync,
): void {
  fn_glDeleteSyncAPPLE.call(
    bufferToFFI(sync),
  );
}

export const def_glClientWaitSyncAPPLE = {
  parameters: ["buffer", "u32", "u64"],
  result: "u32",
} as const;

let fn_glClientWaitSyncAPPLE!: Deno.UnsafeFnPointer<typeof def_glClientWaitSyncAPPLE>;

export function ClientWaitSyncAPPLE(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): GLenum {
  return fn_glClientWaitSyncAPPLE.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glWaitSyncAPPLE = {
  parameters: ["buffer", "u32", "u64"],
  result: "void",
} as const;

let fn_glWaitSyncAPPLE!: Deno.UnsafeFnPointer<typeof def_glWaitSyncAPPLE>;

export function WaitSyncAPPLE(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): void {
  fn_glWaitSyncAPPLE.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glGetInteger64vAPPLE = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInteger64vAPPLE!: Deno.UnsafeFnPointer<typeof def_glGetInteger64vAPPLE>;

export function GetInteger64vAPPLE(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetInteger64vAPPLE.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSyncivAPPLE = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetSyncivAPPLE!: Deno.UnsafeFnPointer<typeof def_glGetSyncivAPPLE>;

export function GetSyncivAPPLE(
  sync: GLsync,
  pname: GLenum,
  count: GLsizei,
  length: Buffer,
  values: Buffer,
): void {
  fn_glGetSyncivAPPLE.call(
    bufferToFFI(sync),
    pname,
    count,
    bufferToFFI(length),
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFenceSyncAPPLE = new Deno.UnsafeFnPointer(proc("glFenceSyncAPPLE"), def_glFenceSyncAPPLE);
  fn_glIsSyncAPPLE = new Deno.UnsafeFnPointer(proc("glIsSyncAPPLE"), def_glIsSyncAPPLE);
  fn_glDeleteSyncAPPLE = new Deno.UnsafeFnPointer(proc("glDeleteSyncAPPLE"), def_glDeleteSyncAPPLE);
  fn_glClientWaitSyncAPPLE = new Deno.UnsafeFnPointer(proc("glClientWaitSyncAPPLE"), def_glClientWaitSyncAPPLE);
  fn_glWaitSyncAPPLE = new Deno.UnsafeFnPointer(proc("glWaitSyncAPPLE"), def_glWaitSyncAPPLE);
  fn_glGetInteger64vAPPLE = new Deno.UnsafeFnPointer(proc("glGetInteger64vAPPLE"), def_glGetInteger64vAPPLE);
  fn_glGetSyncivAPPLE = new Deno.UnsafeFnPointer(proc("glGetSyncivAPPLE"), def_glGetSyncivAPPLE);
}
