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
export const MAX_SERVER_WAIT_TIMEOUT = 0x9111;
export const OBJECT_TYPE = 0x9112;
export const SYNC_CONDITION = 0x9113;
export const SYNC_STATUS = 0x9114;
export const SYNC_FLAGS = 0x9115;
export const SYNC_FENCE = 0x9116;
export const SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
export const UNSIGNALED = 0x9118;
export const SIGNALED = 0x9119;
export const ALREADY_SIGNALED = 0x911a;
export const TIMEOUT_EXPIRED = 0x911b;
export const CONDITION_SATISFIED = 0x911c;
export const WAIT_FAILED = 0x911d;
export const SYNC_FLUSH_COMMANDS_BIT = 0x1;
export const TIMEOUT_IGNORED = 0x10000000000000000;

/// Commands

export const def_glFenceSync = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glFenceSync!: Deno.UnsafeFnPointer<typeof def_glFenceSync>;

export function FenceSync(
  condition: GLenum,
  flags: GLbitfield,
): GLsync {
  return fn_glFenceSync.call(
    condition,
    flags,
  );
}

export const def_glIsSync = {
  parameters: ["buffer"],
  result: "u8",
} as const;

let fn_glIsSync!: Deno.UnsafeFnPointer<typeof def_glIsSync>;

export function IsSync(
  sync: GLsync,
): GLboolean {
  return fn_glIsSync.call(
    bufferToFFI(sync),
  );
}

export const def_glDeleteSync = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDeleteSync!: Deno.UnsafeFnPointer<typeof def_glDeleteSync>;

export function DeleteSync(
  sync: GLsync,
): void {
  fn_glDeleteSync.call(
    bufferToFFI(sync),
  );
}

export const def_glClientWaitSync = {
  parameters: ["buffer", "u32", "u64"],
  result: "u32",
} as const;

let fn_glClientWaitSync!: Deno.UnsafeFnPointer<typeof def_glClientWaitSync>;

export function ClientWaitSync(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): GLenum {
  return fn_glClientWaitSync.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glWaitSync = {
  parameters: ["buffer", "u32", "u64"],
  result: "void",
} as const;

let fn_glWaitSync!: Deno.UnsafeFnPointer<typeof def_glWaitSync>;

export function WaitSync(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): void {
  fn_glWaitSync.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glGetInteger64v = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInteger64v!: Deno.UnsafeFnPointer<typeof def_glGetInteger64v>;

export function GetInteger64v(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetInteger64v.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetSynciv = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetSynciv!: Deno.UnsafeFnPointer<typeof def_glGetSynciv>;

export function GetSynciv(
  sync: GLsync,
  pname: GLenum,
  count: GLsizei,
  length: Buffer,
  values: Buffer,
): void {
  fn_glGetSynciv.call(
    bufferToFFI(sync),
    pname,
    count,
    bufferToFFI(length),
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFenceSync = new Deno.UnsafeFnPointer(
    proc("glFenceSync"),
    def_glFenceSync,
  );
  fn_glIsSync = new Deno.UnsafeFnPointer(proc("glIsSync"), def_glIsSync);
  fn_glDeleteSync = new Deno.UnsafeFnPointer(
    proc("glDeleteSync"),
    def_glDeleteSync,
  );
  fn_glClientWaitSync = new Deno.UnsafeFnPointer(
    proc("glClientWaitSync"),
    def_glClientWaitSync,
  );
  fn_glWaitSync = new Deno.UnsafeFnPointer(proc("glWaitSync"), def_glWaitSync);
  fn_glGetInteger64v = new Deno.UnsafeFnPointer(
    proc("glGetInteger64v"),
    def_glGetInteger64v,
  );
  fn_glGetSynciv = new Deno.UnsafeFnPointer(
    proc("glGetSynciv"),
    def_glGetSynciv,
  );
}
