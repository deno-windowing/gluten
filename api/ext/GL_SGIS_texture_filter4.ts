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
export const FILTER4_SGIS = 0x8146;
export const TEXTURE_FILTER4_SIZE_SGIS = 0x8147;

/// Commands

export const def_glGetTexFilterFuncSGIS = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexFilterFuncSGIS!: Deno.UnsafeFnPointer<typeof def_glGetTexFilterFuncSGIS>;

export function GetTexFilterFuncSGIS(
  target: GLenum,
  filter: GLenum,
  weights: Buffer,
): void {
  fn_glGetTexFilterFuncSGIS.call(
    target,
    filter,
    bufferToFFI(weights),
  );
}

export const def_glTexFilterFuncSGIS = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTexFilterFuncSGIS!: Deno.UnsafeFnPointer<typeof def_glTexFilterFuncSGIS>;

export function TexFilterFuncSGIS(
  target: GLenum,
  filter: GLenum,
  n: GLsizei,
  weights: Buffer,
): void {
  fn_glTexFilterFuncSGIS.call(
    target,
    filter,
    n,
    bufferToFFI(weights),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetTexFilterFuncSGIS = new Deno.UnsafeFnPointer(proc("glGetTexFilterFuncSGIS")!, def_glGetTexFilterFuncSGIS);
  fn_glTexFilterFuncSGIS = new Deno.UnsafeFnPointer(proc("glTexFilterFuncSGIS")!, def_glTexFilterFuncSGIS);
}
