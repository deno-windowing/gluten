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

export const def_glInvalidateTexSubImage = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateTexSubImage!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateTexSubImage
>;

export function InvalidateTexSubImage(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glInvalidateTexSubImage.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
  );
}

export const def_glInvalidateTexImage = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateTexImage!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateTexImage
>;

export function InvalidateTexImage(
  texture: GLuint,
  level: GLint,
): void {
  fn_glInvalidateTexImage.call(
    texture,
    level,
  );
}

export const def_glInvalidateBufferSubData = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glInvalidateBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateBufferSubData
>;

export function InvalidateBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glInvalidateBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
  );
}

export const def_glInvalidateBufferData = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glInvalidateBufferData!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateBufferData
>;

export function InvalidateBufferData(
  buffer: GLuint,
): void {
  fn_glInvalidateBufferData.call(
    buffer,
  );
}

export const def_glInvalidateFramebuffer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInvalidateFramebuffer!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateFramebuffer
>;

export function InvalidateFramebuffer(
  target: GLenum,
  numAttachments: GLsizei,
  attachments: Buffer,
): void {
  fn_glInvalidateFramebuffer.call(
    target,
    numAttachments,
    bufferToFFI(attachments),
  );
}

export const def_glInvalidateSubFramebuffer = {
  parameters: ["u32", "i32", "buffer", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateSubFramebuffer!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateSubFramebuffer
>;

export function InvalidateSubFramebuffer(
  target: GLenum,
  numAttachments: GLsizei,
  attachments: Buffer,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glInvalidateSubFramebuffer.call(
    target,
    numAttachments,
    bufferToFFI(attachments),
    x,
    y,
    width,
    height,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glInvalidateTexSubImage = new Deno.UnsafeFnPointer(
    proc("glInvalidateTexSubImage")!,
    def_glInvalidateTexSubImage,
  );
  fn_glInvalidateTexImage = new Deno.UnsafeFnPointer(
    proc("glInvalidateTexImage")!,
    def_glInvalidateTexImage,
  );
  fn_glInvalidateBufferSubData = new Deno.UnsafeFnPointer(
    proc("glInvalidateBufferSubData")!,
    def_glInvalidateBufferSubData,
  );
  fn_glInvalidateBufferData = new Deno.UnsafeFnPointer(
    proc("glInvalidateBufferData")!,
    def_glInvalidateBufferData,
  );
  fn_glInvalidateFramebuffer = new Deno.UnsafeFnPointer(
    proc("glInvalidateFramebuffer")!,
    def_glInvalidateFramebuffer,
  );
  fn_glInvalidateSubFramebuffer = new Deno.UnsafeFnPointer(
    proc("glInvalidateSubFramebuffer")!,
    def_glInvalidateSubFramebuffer,
  );
}
