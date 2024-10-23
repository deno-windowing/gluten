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

/// Enums
export const RENDERBUFFER_SAMPLES_IMG = 0x9133;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE_IMG = 0x9134;
export const MAX_SAMPLES_IMG = 0x9135;
export const TEXTURE_SAMPLES_IMG = 0x9136;

/// Commands

export const def_glRenderbufferStorageMultisampleIMG = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageMultisampleIMG!: Deno.UnsafeFnPointer<
  typeof def_glRenderbufferStorageMultisampleIMG
>;

export function RenderbufferStorageMultisampleIMG(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageMultisampleIMG.call(
    target,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glFramebufferTexture2DMultisampleIMG = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2DMultisampleIMG!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture2DMultisampleIMG
>;

export function FramebufferTexture2DMultisampleIMG(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  samples: GLsizei,
): void {
  fn_glFramebufferTexture2DMultisampleIMG.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    samples,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glRenderbufferStorageMultisampleIMG = new Deno.UnsafeFnPointer(
    proc("glRenderbufferStorageMultisampleIMG")!,
    def_glRenderbufferStorageMultisampleIMG,
  );
  fn_glFramebufferTexture2DMultisampleIMG = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture2DMultisampleIMG")!,
    def_glFramebufferTexture2DMultisampleIMG,
  );
}
