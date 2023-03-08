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
export const POINT_SIZE_MIN_EXT = 0x8126;
export const POINT_SIZE_MAX_EXT = 0x8127;
export const POINT_FADE_THRESHOLD_SIZE_EXT = 0x8128;
export const DISTANCE_ATTENUATION_EXT = 0x8129;

/// Commands

export const def_glPointParameterfEXT = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPointParameterfEXT!: Deno.UnsafeFnPointer<typeof def_glPointParameterfEXT>;

export function PointParameterfEXT(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPointParameterfEXT.call(
    pname,
    param,
  );
}

export const def_glPointParameterfvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glPointParameterfvEXT>;

export function PointParameterfvEXT(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameterfvEXT.call(
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPointParameterfEXT = new Deno.UnsafeFnPointer(proc("glPointParameterfEXT")!, def_glPointParameterfEXT);
  fn_glPointParameterfvEXT = new Deno.UnsafeFnPointer(proc("glPointParameterfvEXT")!, def_glPointParameterfvEXT);
}
