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

/// Commands

export const def_glTexSubImage1DEXT = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTexSubImage1DEXT>;

export function TexSubImage1DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage1DEXT.call(
    target,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexSubImage2DEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTexSubImage2DEXT>;

export function TexSubImage2DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage2DEXT.call(
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    type,
    bufferToFFI(pixels),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glTexSubImage1DEXT")!, def_glTexSubImage1DEXT);
  fn_glTexSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glTexSubImage2DEXT")!, def_glTexSubImage2DEXT);
}
