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
export const COLOR_INDEX1_EXT = 0x80e2;
export const COLOR_INDEX2_EXT = 0x80e3;
export const COLOR_INDEX4_EXT = 0x80e4;
export const COLOR_INDEX8_EXT = 0x80e5;
export const COLOR_INDEX12_EXT = 0x80e6;
export const COLOR_INDEX16_EXT = 0x80e7;
export const TEXTURE_INDEX_SIZE_EXT = 0x80ed;

/// Commands

export const def_glColorTableEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableEXT!: Deno.UnsafeFnPointer<typeof def_glColorTableEXT>;

export function ColorTableEXT(
  target: GLenum,
  internalFormat: GLenum,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  table: Buffer,
): void {
  fn_glColorTableEXT.call(
    target,
    internalFormat,
    width,
    format,
    type,
    bufferToFFI(table),
  );
}

export const def_glGetColorTableEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableEXT!: Deno.UnsafeFnPointer<typeof def_glGetColorTableEXT>;

export function GetColorTableEXT(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glGetColorTableEXT.call(
    target,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glGetColorTableParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameterivEXT>;

export function GetColorTableParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetColorTableParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameterfvEXT>;

export function GetColorTableParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glColorTableEXT = new Deno.UnsafeFnPointer(proc("glColorTableEXT")!, def_glColorTableEXT);
  fn_glGetColorTableEXT = new Deno.UnsafeFnPointer(proc("glGetColorTableEXT")!, def_glGetColorTableEXT);
  fn_glGetColorTableParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetColorTableParameterivEXT")!, def_glGetColorTableParameterivEXT);
  fn_glGetColorTableParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetColorTableParameterfvEXT")!, def_glGetColorTableParameterfvEXT);
}
