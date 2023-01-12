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
export const VIEWPORT_SWIZZLE_POSITIVE_X_NV = 0x9350;
export const VIEWPORT_SWIZZLE_NEGATIVE_X_NV = 0x9351;
export const VIEWPORT_SWIZZLE_POSITIVE_Y_NV = 0x9352;
export const VIEWPORT_SWIZZLE_NEGATIVE_Y_NV = 0x9353;
export const VIEWPORT_SWIZZLE_POSITIVE_Z_NV = 0x9354;
export const VIEWPORT_SWIZZLE_NEGATIVE_Z_NV = 0x9355;
export const VIEWPORT_SWIZZLE_POSITIVE_W_NV = 0x9356;
export const VIEWPORT_SWIZZLE_NEGATIVE_W_NV = 0x9357;
export const VIEWPORT_SWIZZLE_X_NV = 0x9358;
export const VIEWPORT_SWIZZLE_Y_NV = 0x9359;
export const VIEWPORT_SWIZZLE_Z_NV = 0x935a;
export const VIEWPORT_SWIZZLE_W_NV = 0x935b;

/// Commands

export const def_glViewportSwizzleNV = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glViewportSwizzleNV!: Deno.UnsafeFnPointer<
  typeof def_glViewportSwizzleNV
>;

export function ViewportSwizzleNV(
  index: GLuint,
  swizzlex: GLenum,
  swizzley: GLenum,
  swizzlez: GLenum,
  swizzlew: GLenum,
): void {
  fn_glViewportSwizzleNV.call(
    index,
    swizzlex,
    swizzley,
    swizzlez,
    swizzlew,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glViewportSwizzleNV = new Deno.UnsafeFnPointer(
    proc("glViewportSwizzleNV"),
    def_glViewportSwizzleNV,
  );
}
