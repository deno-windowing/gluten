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
export const POINT_SIZE_MIN_ARB = 0x8126;
export const POINT_SIZE_MAX_ARB = 0x8127;
export const POINT_FADE_THRESHOLD_SIZE_ARB = 0x8128;
export const POINT_DISTANCE_ATTENUATION_ARB = 0x8129;

/// Commands

export const def_glPointParameterfARB = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPointParameterfARB!: Deno.UnsafeFnPointer<
  typeof def_glPointParameterfARB
>;

export function PointParameterfARB(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPointParameterfARB.call(
    pname,
    param,
  );
}

export const def_glPointParameterfvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameterfvARB!: Deno.UnsafeFnPointer<
  typeof def_glPointParameterfvARB
>;

export function PointParameterfvARB(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameterfvARB.call(
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPointParameterfARB = new Deno.UnsafeFnPointer(
    proc("glPointParameterfARB"),
    def_glPointParameterfARB,
  );
  fn_glPointParameterfvARB = new Deno.UnsafeFnPointer(
    proc("glPointParameterfvARB"),
    def_glPointParameterfvARB,
  );
}