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
export const VERTEX_ARRAY_LIST_IBM = 0x1929e;
export const NORMAL_ARRAY_LIST_IBM = 0x1929f;
export const COLOR_ARRAY_LIST_IBM = 0x192a0;
export const INDEX_ARRAY_LIST_IBM = 0x192a1;
export const TEXTURE_COORD_ARRAY_LIST_IBM = 0x192a2;
export const EDGE_FLAG_ARRAY_LIST_IBM = 0x192a3;
export const FOG_COORDINATE_ARRAY_LIST_IBM = 0x192a4;
export const SECONDARY_COLOR_ARRAY_LIST_IBM = 0x192a5;
export const VERTEX_ARRAY_LIST_STRIDE_IBM = 0x192a8;
export const NORMAL_ARRAY_LIST_STRIDE_IBM = 0x192a9;
export const COLOR_ARRAY_LIST_STRIDE_IBM = 0x192aa;
export const INDEX_ARRAY_LIST_STRIDE_IBM = 0x192ab;
export const TEXTURE_COORD_ARRAY_LIST_STRIDE_IBM = 0x192ac;
export const EDGE_FLAG_ARRAY_LIST_STRIDE_IBM = 0x192ad;
export const FOG_COORDINATE_ARRAY_LIST_STRIDE_IBM = 0x192ae;
export const SECONDARY_COLOR_ARRAY_LIST_STRIDE_IBM = 0x192af;

/// Commands

export const def_glColorPointerListIBM = {
  parameters: ["i32", "u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glColorPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glColorPointerListIBM>;

export function ColorPointerListIBM(
  size: GLint,
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glColorPointerListIBM.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glSecondaryColorPointerListIBM = {
  parameters: ["i32", "u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glSecondaryColorPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glSecondaryColorPointerListIBM>;

export function SecondaryColorPointerListIBM(
  size: GLint,
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glSecondaryColorPointerListIBM.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glEdgeFlagPointerListIBM = {
  parameters: ["i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glEdgeFlagPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glEdgeFlagPointerListIBM>;

export function EdgeFlagPointerListIBM(
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glEdgeFlagPointerListIBM.call(
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glFogCoordPointerListIBM = {
  parameters: ["u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glFogCoordPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glFogCoordPointerListIBM>;

export function FogCoordPointerListIBM(
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glFogCoordPointerListIBM.call(
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glIndexPointerListIBM = {
  parameters: ["u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glIndexPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glIndexPointerListIBM>;

export function IndexPointerListIBM(
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glIndexPointerListIBM.call(
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glNormalPointerListIBM = {
  parameters: ["u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glNormalPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glNormalPointerListIBM>;

export function NormalPointerListIBM(
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glNormalPointerListIBM.call(
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glTexCoordPointerListIBM = {
  parameters: ["i32", "u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glTexCoordPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glTexCoordPointerListIBM>;

export function TexCoordPointerListIBM(
  size: GLint,
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glTexCoordPointerListIBM.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

export const def_glVertexPointerListIBM = {
  parameters: ["i32", "u32", "i32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glVertexPointerListIBM!: Deno.UnsafeFnPointer<typeof def_glVertexPointerListIBM>;

export function VertexPointerListIBM(
  size: GLint,
  type: GLenum,
  stride: GLint,
  pointer: Buffer,
  ptrstride: GLint,
): void {
  fn_glVertexPointerListIBM.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
    ptrstride,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glColorPointerListIBM = new Deno.UnsafeFnPointer(proc("glColorPointerListIBM")!, def_glColorPointerListIBM);
  fn_glSecondaryColorPointerListIBM = new Deno.UnsafeFnPointer(proc("glSecondaryColorPointerListIBM")!, def_glSecondaryColorPointerListIBM);
  fn_glEdgeFlagPointerListIBM = new Deno.UnsafeFnPointer(proc("glEdgeFlagPointerListIBM")!, def_glEdgeFlagPointerListIBM);
  fn_glFogCoordPointerListIBM = new Deno.UnsafeFnPointer(proc("glFogCoordPointerListIBM")!, def_glFogCoordPointerListIBM);
  fn_glIndexPointerListIBM = new Deno.UnsafeFnPointer(proc("glIndexPointerListIBM")!, def_glIndexPointerListIBM);
  fn_glNormalPointerListIBM = new Deno.UnsafeFnPointer(proc("glNormalPointerListIBM")!, def_glNormalPointerListIBM);
  fn_glTexCoordPointerListIBM = new Deno.UnsafeFnPointer(proc("glTexCoordPointerListIBM")!, def_glTexCoordPointerListIBM);
  fn_glVertexPointerListIBM = new Deno.UnsafeFnPointer(proc("glVertexPointerListIBM")!, def_glVertexPointerListIBM);
}
