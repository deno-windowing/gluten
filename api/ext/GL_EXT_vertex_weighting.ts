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
export const MODELVIEW0_STACK_DEPTH_EXT = 0xba3;
export const MODELVIEW1_STACK_DEPTH_EXT = 0x8502;
export const MODELVIEW0_MATRIX_EXT = 0xba6;
export const MODELVIEW1_MATRIX_EXT = 0x8506;
export const VERTEX_WEIGHTING_EXT = 0x8509;
export const MODELVIEW0_EXT = 0x1700;
export const MODELVIEW1_EXT = 0x850a;
export const CURRENT_VERTEX_WEIGHT_EXT = 0x850b;
export const VERTEX_WEIGHT_ARRAY_EXT = 0x850c;
export const VERTEX_WEIGHT_ARRAY_SIZE_EXT = 0x850d;
export const VERTEX_WEIGHT_ARRAY_TYPE_EXT = 0x850e;
export const VERTEX_WEIGHT_ARRAY_STRIDE_EXT = 0x850f;
export const VERTEX_WEIGHT_ARRAY_POINTER_EXT = 0x8510;

/// Commands

export const def_glVertexWeightfEXT = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glVertexWeightfEXT!: Deno.UnsafeFnPointer<typeof def_glVertexWeightfEXT>;

export function VertexWeightfEXT(
  weight: GLfloat,
): void {
  fn_glVertexWeightfEXT.call(
    weight,
  );
}

export const def_glVertexWeightfvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertexWeightfvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexWeightfvEXT>;

export function VertexWeightfvEXT(
  weight: Buffer,
): void {
  fn_glVertexWeightfvEXT.call(
    bufferToFFI(weight),
  );
}

export const def_glVertexWeightPointerEXT = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexWeightPointerEXT!: Deno.UnsafeFnPointer<typeof def_glVertexWeightPointerEXT>;

export function VertexWeightPointerEXT(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexWeightPointerEXT.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexWeightfEXT = new Deno.UnsafeFnPointer(proc("glVertexWeightfEXT"), def_glVertexWeightfEXT);
  fn_glVertexWeightfvEXT = new Deno.UnsafeFnPointer(proc("glVertexWeightfvEXT"), def_glVertexWeightfvEXT);
  fn_glVertexWeightPointerEXT = new Deno.UnsafeFnPointer(proc("glVertexWeightPointerEXT"), def_glVertexWeightPointerEXT);
}
