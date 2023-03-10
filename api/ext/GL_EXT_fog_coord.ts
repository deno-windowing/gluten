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
export const FOG_COORDINATE_SOURCE_EXT = 0x8450;
export const FOG_COORDINATE_EXT = 0x8451;
export const FRAGMENT_DEPTH_EXT = 0x8452;
export const CURRENT_FOG_COORDINATE_EXT = 0x8453;
export const FOG_COORDINATE_ARRAY_TYPE_EXT = 0x8454;
export const FOG_COORDINATE_ARRAY_STRIDE_EXT = 0x8455;
export const FOG_COORDINATE_ARRAY_POINTER_EXT = 0x8456;
export const FOG_COORDINATE_ARRAY_EXT = 0x8457;

/// Commands

export const def_glFogCoordfEXT = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glFogCoordfEXT!: Deno.UnsafeFnPointer<typeof def_glFogCoordfEXT>;

export function FogCoordfEXT(
  coord: GLfloat,
): void {
  fn_glFogCoordfEXT.call(
    coord,
  );
}

export const def_glFogCoordfvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glFogCoordfvEXT!: Deno.UnsafeFnPointer<typeof def_glFogCoordfvEXT>;

export function FogCoordfvEXT(
  coord: Buffer,
): void {
  fn_glFogCoordfvEXT.call(
    bufferToFFI(coord),
  );
}

export const def_glFogCoorddEXT = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glFogCoorddEXT!: Deno.UnsafeFnPointer<typeof def_glFogCoorddEXT>;

export function FogCoorddEXT(
  coord: GLdouble,
): void {
  fn_glFogCoorddEXT.call(
    coord,
  );
}

export const def_glFogCoorddvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glFogCoorddvEXT!: Deno.UnsafeFnPointer<typeof def_glFogCoorddvEXT>;

export function FogCoorddvEXT(
  coord: Buffer,
): void {
  fn_glFogCoorddvEXT.call(
    bufferToFFI(coord),
  );
}

export const def_glFogCoordPointerEXT = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glFogCoordPointerEXT!: Deno.UnsafeFnPointer<typeof def_glFogCoordPointerEXT>;

export function FogCoordPointerEXT(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glFogCoordPointerEXT.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFogCoordfEXT = new Deno.UnsafeFnPointer(proc("glFogCoordfEXT")!, def_glFogCoordfEXT);
  fn_glFogCoordfvEXT = new Deno.UnsafeFnPointer(proc("glFogCoordfvEXT")!, def_glFogCoordfvEXT);
  fn_glFogCoorddEXT = new Deno.UnsafeFnPointer(proc("glFogCoorddEXT")!, def_glFogCoorddEXT);
  fn_glFogCoorddvEXT = new Deno.UnsafeFnPointer(proc("glFogCoorddvEXT")!, def_glFogCoorddvEXT);
  fn_glFogCoordPointerEXT = new Deno.UnsafeFnPointer(proc("glFogCoordPointerEXT")!, def_glFogCoordPointerEXT);
}
