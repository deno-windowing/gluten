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
export const MATRIX_PALETTE_ARB = 0x8840;
export const MAX_MATRIX_PALETTE_STACK_DEPTH_ARB = 0x8841;
export const MAX_PALETTE_MATRICES_ARB = 0x8842;
export const CURRENT_PALETTE_MATRIX_ARB = 0x8843;
export const MATRIX_INDEX_ARRAY_ARB = 0x8844;
export const CURRENT_MATRIX_INDEX_ARB = 0x8845;
export const MATRIX_INDEX_ARRAY_SIZE_ARB = 0x8846;
export const MATRIX_INDEX_ARRAY_TYPE_ARB = 0x8847;
export const MATRIX_INDEX_ARRAY_STRIDE_ARB = 0x8848;
export const MATRIX_INDEX_ARRAY_POINTER_ARB = 0x8849;

/// Commands

export const def_glCurrentPaletteMatrixARB = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glCurrentPaletteMatrixARB!: Deno.UnsafeFnPointer<typeof def_glCurrentPaletteMatrixARB>;

export function CurrentPaletteMatrixARB(
  index: GLint,
): void {
  fn_glCurrentPaletteMatrixARB.call(
    index,
  );
}

export const def_glMatrixIndexubvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixIndexubvARB!: Deno.UnsafeFnPointer<typeof def_glMatrixIndexubvARB>;

export function MatrixIndexubvARB(
  size: GLint,
  indices: Buffer,
): void {
  fn_glMatrixIndexubvARB.call(
    size,
    bufferToFFI(indices),
  );
}

export const def_glMatrixIndexusvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixIndexusvARB!: Deno.UnsafeFnPointer<typeof def_glMatrixIndexusvARB>;

export function MatrixIndexusvARB(
  size: GLint,
  indices: Buffer,
): void {
  fn_glMatrixIndexusvARB.call(
    size,
    bufferToFFI(indices),
  );
}

export const def_glMatrixIndexuivARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixIndexuivARB!: Deno.UnsafeFnPointer<typeof def_glMatrixIndexuivARB>;

export function MatrixIndexuivARB(
  size: GLint,
  indices: Buffer,
): void {
  fn_glMatrixIndexuivARB.call(
    size,
    bufferToFFI(indices),
  );
}

export const def_glMatrixIndexPointerARB = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixIndexPointerARB!: Deno.UnsafeFnPointer<typeof def_glMatrixIndexPointerARB>;

export function MatrixIndexPointerARB(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glMatrixIndexPointerARB.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCurrentPaletteMatrixARB = new Deno.UnsafeFnPointer(proc("glCurrentPaletteMatrixARB"), def_glCurrentPaletteMatrixARB);
  fn_glMatrixIndexubvARB = new Deno.UnsafeFnPointer(proc("glMatrixIndexubvARB"), def_glMatrixIndexubvARB);
  fn_glMatrixIndexusvARB = new Deno.UnsafeFnPointer(proc("glMatrixIndexusvARB"), def_glMatrixIndexusvARB);
  fn_glMatrixIndexuivARB = new Deno.UnsafeFnPointer(proc("glMatrixIndexuivARB"), def_glMatrixIndexuivARB);
  fn_glMatrixIndexPointerARB = new Deno.UnsafeFnPointer(proc("glMatrixIndexPointerARB"), def_glMatrixIndexPointerARB);
}
