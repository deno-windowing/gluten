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
export const ASYNC_MARKER_SGIX = 0x8329;

/// Commands

export const def_glAsyncMarkerSGIX = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glAsyncMarkerSGIX!: Deno.UnsafeFnPointer<typeof def_glAsyncMarkerSGIX>;

export function AsyncMarkerSGIX(
  marker: GLuint,
): void {
  fn_glAsyncMarkerSGIX.call(
    marker,
  );
}

export const def_glFinishAsyncSGIX = {
  parameters: ["buffer"],
  result: "i32",
} as const;

let fn_glFinishAsyncSGIX!: Deno.UnsafeFnPointer<typeof def_glFinishAsyncSGIX>;

export function FinishAsyncSGIX(
  markerp: Buffer,
): GLint {
  return fn_glFinishAsyncSGIX.call(
    bufferToFFI(markerp),
  );
}

export const def_glPollAsyncSGIX = {
  parameters: ["buffer"],
  result: "i32",
} as const;

let fn_glPollAsyncSGIX!: Deno.UnsafeFnPointer<typeof def_glPollAsyncSGIX>;

export function PollAsyncSGIX(
  markerp: Buffer,
): GLint {
  return fn_glPollAsyncSGIX.call(
    bufferToFFI(markerp),
  );
}

export const def_glGenAsyncMarkersSGIX = {
  parameters: ["i32"],
  result: "u32",
} as const;

let fn_glGenAsyncMarkersSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGenAsyncMarkersSGIX
>;

export function GenAsyncMarkersSGIX(
  range: GLsizei,
): GLuint {
  return fn_glGenAsyncMarkersSGIX.call(
    range,
  );
}

export const def_glDeleteAsyncMarkersSGIX = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glDeleteAsyncMarkersSGIX!: Deno.UnsafeFnPointer<
  typeof def_glDeleteAsyncMarkersSGIX
>;

export function DeleteAsyncMarkersSGIX(
  marker: GLuint,
  range: GLsizei,
): void {
  fn_glDeleteAsyncMarkersSGIX.call(
    marker,
    range,
  );
}

export const def_glIsAsyncMarkerSGIX = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsAsyncMarkerSGIX!: Deno.UnsafeFnPointer<
  typeof def_glIsAsyncMarkerSGIX
>;

export function IsAsyncMarkerSGIX(
  marker: GLuint,
): GLboolean {
  return fn_glIsAsyncMarkerSGIX.call(
    marker,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glAsyncMarkerSGIX = new Deno.UnsafeFnPointer(
    proc("glAsyncMarkerSGIX"),
    def_glAsyncMarkerSGIX,
  );
  fn_glFinishAsyncSGIX = new Deno.UnsafeFnPointer(
    proc("glFinishAsyncSGIX"),
    def_glFinishAsyncSGIX,
  );
  fn_glPollAsyncSGIX = new Deno.UnsafeFnPointer(
    proc("glPollAsyncSGIX"),
    def_glPollAsyncSGIX,
  );
  fn_glGenAsyncMarkersSGIX = new Deno.UnsafeFnPointer(
    proc("glGenAsyncMarkersSGIX"),
    def_glGenAsyncMarkersSGIX,
  );
  fn_glDeleteAsyncMarkersSGIX = new Deno.UnsafeFnPointer(
    proc("glDeleteAsyncMarkersSGIX"),
    def_glDeleteAsyncMarkersSGIX,
  );
  fn_glIsAsyncMarkerSGIX = new Deno.UnsafeFnPointer(
    proc("glIsAsyncMarkerSGIX"),
    def_glIsAsyncMarkerSGIX,
  );
}
