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
export const PIXEL_TRANSFORM_2D_EXT = 0x8330;
export const PIXEL_MAG_FILTER_EXT = 0x8331;
export const PIXEL_MIN_FILTER_EXT = 0x8332;
export const PIXEL_CUBIC_WEIGHT_EXT = 0x8333;
export const CUBIC_EXT = 0x8334;
export const AVERAGE_EXT = 0x8335;
export const PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT = 0x8336;
export const MAX_PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT = 0x8337;
export const PIXEL_TRANSFORM_2D_MATRIX_EXT = 0x8338;

/// Commands

export const def_glPixelTransformParameteriEXT = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glPixelTransformParameteriEXT!: Deno.UnsafeFnPointer<typeof def_glPixelTransformParameteriEXT>;

export function PixelTransformParameteriEXT(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glPixelTransformParameteriEXT.call(
    target,
    pname,
    param,
  );
}

export const def_glPixelTransformParameterfEXT = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glPixelTransformParameterfEXT!: Deno.UnsafeFnPointer<typeof def_glPixelTransformParameterfEXT>;

export function PixelTransformParameterfEXT(
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPixelTransformParameterfEXT.call(
    target,
    pname,
    param,
  );
}

export const def_glPixelTransformParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPixelTransformParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glPixelTransformParameterivEXT>;

export function PixelTransformParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPixelTransformParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glPixelTransformParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPixelTransformParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glPixelTransformParameterfvEXT>;

export function PixelTransformParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPixelTransformParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPixelTransformParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelTransformParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetPixelTransformParameterivEXT>;

export function GetPixelTransformParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPixelTransformParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPixelTransformParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelTransformParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetPixelTransformParameterfvEXT>;

export function GetPixelTransformParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPixelTransformParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPixelTransformParameteriEXT = new Deno.UnsafeFnPointer(proc("glPixelTransformParameteriEXT")!, def_glPixelTransformParameteriEXT);
  fn_glPixelTransformParameterfEXT = new Deno.UnsafeFnPointer(proc("glPixelTransformParameterfEXT")!, def_glPixelTransformParameterfEXT);
  fn_glPixelTransformParameterivEXT = new Deno.UnsafeFnPointer(proc("glPixelTransformParameterivEXT")!, def_glPixelTransformParameterivEXT);
  fn_glPixelTransformParameterfvEXT = new Deno.UnsafeFnPointer(proc("glPixelTransformParameterfvEXT")!, def_glPixelTransformParameterfvEXT);
  fn_glGetPixelTransformParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetPixelTransformParameterivEXT")!, def_glGetPixelTransformParameterivEXT);
  fn_glGetPixelTransformParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetPixelTransformParameterfvEXT")!, def_glGetPixelTransformParameterfvEXT);
}
