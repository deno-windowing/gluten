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
export const IMAGE_SCALE_X_HP = 0x8155;
export const IMAGE_SCALE_Y_HP = 0x8156;
export const IMAGE_TRANSLATE_X_HP = 0x8157;
export const IMAGE_TRANSLATE_Y_HP = 0x8158;
export const IMAGE_ROTATE_ANGLE_HP = 0x8159;
export const IMAGE_ROTATE_ORIGIN_X_HP = 0x815a;
export const IMAGE_ROTATE_ORIGIN_Y_HP = 0x815b;
export const IMAGE_MAG_FILTER_HP = 0x815c;
export const IMAGE_MIN_FILTER_HP = 0x815d;
export const IMAGE_CUBIC_WEIGHT_HP = 0x815e;
export const CUBIC_HP = 0x815f;
export const AVERAGE_HP = 0x8160;
export const IMAGE_TRANSFORM_2D_HP = 0x8161;
export const POST_IMAGE_TRANSFORM_COLOR_TABLE_HP = 0x8162;
export const PROXY_POST_IMAGE_TRANSFORM_COLOR_TABLE_HP = 0x8163;

/// Commands

export const def_glImageTransformParameteriHP = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glImageTransformParameteriHP!: Deno.UnsafeFnPointer<typeof def_glImageTransformParameteriHP>;

export function ImageTransformParameteriHP(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glImageTransformParameteriHP.call(
    target,
    pname,
    param,
  );
}

export const def_glImageTransformParameterfHP = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glImageTransformParameterfHP!: Deno.UnsafeFnPointer<typeof def_glImageTransformParameterfHP>;

export function ImageTransformParameterfHP(
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glImageTransformParameterfHP.call(
    target,
    pname,
    param,
  );
}

export const def_glImageTransformParameterivHP = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glImageTransformParameterivHP!: Deno.UnsafeFnPointer<typeof def_glImageTransformParameterivHP>;

export function ImageTransformParameterivHP(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glImageTransformParameterivHP.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glImageTransformParameterfvHP = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glImageTransformParameterfvHP!: Deno.UnsafeFnPointer<typeof def_glImageTransformParameterfvHP>;

export function ImageTransformParameterfvHP(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glImageTransformParameterfvHP.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetImageTransformParameterivHP = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetImageTransformParameterivHP!: Deno.UnsafeFnPointer<typeof def_glGetImageTransformParameterivHP>;

export function GetImageTransformParameterivHP(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetImageTransformParameterivHP.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetImageTransformParameterfvHP = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetImageTransformParameterfvHP!: Deno.UnsafeFnPointer<typeof def_glGetImageTransformParameterfvHP>;

export function GetImageTransformParameterfvHP(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetImageTransformParameterfvHP.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glImageTransformParameteriHP = new Deno.UnsafeFnPointer(proc("glImageTransformParameteriHP"), def_glImageTransformParameteriHP);
  fn_glImageTransformParameterfHP = new Deno.UnsafeFnPointer(proc("glImageTransformParameterfHP"), def_glImageTransformParameterfHP);
  fn_glImageTransformParameterivHP = new Deno.UnsafeFnPointer(proc("glImageTransformParameterivHP"), def_glImageTransformParameterivHP);
  fn_glImageTransformParameterfvHP = new Deno.UnsafeFnPointer(proc("glImageTransformParameterfvHP"), def_glImageTransformParameterfvHP);
  fn_glGetImageTransformParameterivHP = new Deno.UnsafeFnPointer(proc("glGetImageTransformParameterivHP"), def_glGetImageTransformParameterivHP);
  fn_glGetImageTransformParameterfvHP = new Deno.UnsafeFnPointer(proc("glGetImageTransformParameterfvHP"), def_glGetImageTransformParameterfvHP);
}
