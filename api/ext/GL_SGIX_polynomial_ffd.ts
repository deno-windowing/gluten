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
export const TEXTURE_DEFORMATION_BIT_SGIX = 0x1;
export const GEOMETRY_DEFORMATION_BIT_SGIX = 0x2;
export const GEOMETRY_DEFORMATION_SGIX = 0x8194;
export const TEXTURE_DEFORMATION_SGIX = 0x8195;
export const DEFORMATIONS_MASK_SGIX = 0x8196;
export const MAX_DEFORMATION_ORDER_SGIX = 0x8197;

/// Commands

export const def_glDeformationMap3dSGIX = {
  parameters: [
    "u32",
    "f64",
    "f64",
    "i32",
    "i32",
    "f64",
    "f64",
    "i32",
    "i32",
    "f64",
    "f64",
    "i32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glDeformationMap3dSGIX!: Deno.UnsafeFnPointer<
  typeof def_glDeformationMap3dSGIX
>;

export function DeformationMap3dSGIX(
  target: GLenum,
  u1: GLdouble,
  u2: GLdouble,
  ustride: GLint,
  uorder: GLint,
  v1: GLdouble,
  v2: GLdouble,
  vstride: GLint,
  vorder: GLint,
  w1: GLdouble,
  w2: GLdouble,
  wstride: GLint,
  worder: GLint,
  points: Buffer,
): void {
  fn_glDeformationMap3dSGIX.call(
    target,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    w1,
    w2,
    wstride,
    worder,
    bufferToFFI(points),
  );
}

export const def_glDeformationMap3fSGIX = {
  parameters: [
    "u32",
    "f32",
    "f32",
    "i32",
    "i32",
    "f32",
    "f32",
    "i32",
    "i32",
    "f32",
    "f32",
    "i32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glDeformationMap3fSGIX!: Deno.UnsafeFnPointer<
  typeof def_glDeformationMap3fSGIX
>;

export function DeformationMap3fSGIX(
  target: GLenum,
  u1: GLfloat,
  u2: GLfloat,
  ustride: GLint,
  uorder: GLint,
  v1: GLfloat,
  v2: GLfloat,
  vstride: GLint,
  vorder: GLint,
  w1: GLfloat,
  w2: GLfloat,
  wstride: GLint,
  worder: GLint,
  points: Buffer,
): void {
  fn_glDeformationMap3fSGIX.call(
    target,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    w1,
    w2,
    wstride,
    worder,
    bufferToFFI(points),
  );
}

export const def_glDeformSGIX = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeformSGIX!: Deno.UnsafeFnPointer<typeof def_glDeformSGIX>;

export function DeformSGIX(
  mask: GLbitfield,
): void {
  fn_glDeformSGIX.call(
    mask,
  );
}

export const def_glLoadIdentityDeformationMapSGIX = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glLoadIdentityDeformationMapSGIX!: Deno.UnsafeFnPointer<
  typeof def_glLoadIdentityDeformationMapSGIX
>;

export function LoadIdentityDeformationMapSGIX(
  mask: GLbitfield,
): void {
  fn_glLoadIdentityDeformationMapSGIX.call(
    mask,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDeformationMap3dSGIX = new Deno.UnsafeFnPointer(
    proc("glDeformationMap3dSGIX")!,
    def_glDeformationMap3dSGIX,
  );
  fn_glDeformationMap3fSGIX = new Deno.UnsafeFnPointer(
    proc("glDeformationMap3fSGIX")!,
    def_glDeformationMap3fSGIX,
  );
  fn_glDeformSGIX = new Deno.UnsafeFnPointer(
    proc("glDeformSGIX")!,
    def_glDeformSGIX,
  );
  fn_glLoadIdentityDeformationMapSGIX = new Deno.UnsafeFnPointer(
    proc("glLoadIdentityDeformationMapSGIX")!,
    def_glLoadIdentityDeformationMapSGIX,
  );
}
