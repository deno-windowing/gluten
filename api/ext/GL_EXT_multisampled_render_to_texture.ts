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
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_SAMPLES_EXT = 0x8d6c;
export const RENDERBUFFER_SAMPLES_EXT = 0x8cab;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE_EXT = 0x8d56;
export const MAX_SAMPLES_EXT = 0x8d57;

/// Commands

export const def_glRenderbufferStorageMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorageMultisampleEXT>;

export function RenderbufferStorageMultisampleEXT(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageMultisampleEXT.call(
    target,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glFramebufferTexture2DMultisampleEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture2DMultisampleEXT>;

export function FramebufferTexture2DMultisampleEXT(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  samples: GLsizei,
): void {
  fn_glFramebufferTexture2DMultisampleEXT.call(
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
  fn_glRenderbufferStorageMultisampleEXT = new Deno.UnsafeFnPointer(proc("glRenderbufferStorageMultisampleEXT")!, def_glRenderbufferStorageMultisampleEXT);
  fn_glFramebufferTexture2DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glFramebufferTexture2DMultisampleEXT")!, def_glFramebufferTexture2DMultisampleEXT);
}
