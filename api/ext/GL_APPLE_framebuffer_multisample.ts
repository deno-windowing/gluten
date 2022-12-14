/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
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
export const RENDERBUFFER_SAMPLES_APPLE = 0x8cab;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE_APPLE = 0x8d56;
export const MAX_SAMPLES_APPLE = 0x8d57;
export const READ_FRAMEBUFFER_APPLE = 0x8ca8;
export const DRAW_FRAMEBUFFER_APPLE = 0x8ca9;
export const DRAW_FRAMEBUFFER_BINDING_APPLE = 0x8ca6;
export const READ_FRAMEBUFFER_BINDING_APPLE = 0x8caa;

/// Commands

export const def_glRenderbufferStorageMultisampleAPPLE = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageMultisampleAPPLE!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorageMultisampleAPPLE>;

export function RenderbufferStorageMultisampleAPPLE(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageMultisampleAPPLE.call(
    target,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glResolveMultisampleFramebufferAPPLE = {
  parameters: [],
  result: "void",
} as const;

let fn_glResolveMultisampleFramebufferAPPLE!: Deno.UnsafeFnPointer<typeof def_glResolveMultisampleFramebufferAPPLE>;

export function ResolveMultisampleFramebufferAPPLE(): void {
  fn_glResolveMultisampleFramebufferAPPLE.call();
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glRenderbufferStorageMultisampleAPPLE = new Deno.UnsafeFnPointer(proc("glRenderbufferStorageMultisampleAPPLE"), def_glRenderbufferStorageMultisampleAPPLE);
  fn_glResolveMultisampleFramebufferAPPLE = new Deno.UnsafeFnPointer(proc("glResolveMultisampleFramebufferAPPLE"), def_glResolveMultisampleFramebufferAPPLE);
}
