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

/// Commands

export const def_glCopyTexImage1DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexImage1DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexImage1DEXT
>;

export function CopyTexImage1DEXT(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  border: GLint,
): void {
  fn_glCopyTexImage1DEXT.call(
    target,
    level,
    internalformat,
    x,
    y,
    width,
    border,
  );
}

export const def_glCopyTexImage2DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexImage2DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexImage2DEXT
>;

export function CopyTexImage2DEXT(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
): void {
  fn_glCopyTexImage2DEXT.call(
    target,
    level,
    internalformat,
    x,
    y,
    width,
    height,
    border,
  );
}

export const def_glCopyTexSubImage1DEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage1DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage1DEXT
>;

export function CopyTexSubImage1DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyTexSubImage1DEXT.call(
    target,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyTexSubImage2DEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage2DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage2DEXT
>;

export function CopyTexSubImage2DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTexSubImage2DEXT.call(
    target,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glCopyTexSubImage3DEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage3DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage3DEXT
>;

export function CopyTexSubImage3DEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTexSubImage3DEXT.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    x,
    y,
    width,
    height,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCopyTexImage1DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyTexImage1DEXT")!,
    def_glCopyTexImage1DEXT,
  );
  fn_glCopyTexImage2DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyTexImage2DEXT")!,
    def_glCopyTexImage2DEXT,
  );
  fn_glCopyTexSubImage1DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage1DEXT")!,
    def_glCopyTexSubImage1DEXT,
  );
  fn_glCopyTexSubImage2DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage2DEXT")!,
    def_glCopyTexSubImage2DEXT,
  );
  fn_glCopyTexSubImage3DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage3DEXT")!,
    def_glCopyTexSubImage3DEXT,
  );
}
