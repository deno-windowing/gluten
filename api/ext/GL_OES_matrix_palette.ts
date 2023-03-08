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
export const MAX_VERTEX_UNITS_OES = 0x86a4;
export const MAX_PALETTE_MATRICES_OES = 0x8842;
export const MATRIX_PALETTE_OES = 0x8840;
export const MATRIX_INDEX_ARRAY_OES = 0x8844;
export const WEIGHT_ARRAY_OES = 0x86ad;
export const CURRENT_PALETTE_MATRIX_OES = 0x8843;
export const MATRIX_INDEX_ARRAY_SIZE_OES = 0x8846;
export const MATRIX_INDEX_ARRAY_TYPE_OES = 0x8847;
export const MATRIX_INDEX_ARRAY_STRIDE_OES = 0x8848;
export const MATRIX_INDEX_ARRAY_POINTER_OES = 0x8849;
export const MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES = 0x8b9e;
export const WEIGHT_ARRAY_SIZE_OES = 0x86ab;
export const WEIGHT_ARRAY_TYPE_OES = 0x86a9;
export const WEIGHT_ARRAY_STRIDE_OES = 0x86aa;
export const WEIGHT_ARRAY_POINTER_OES = 0x86ac;
export const WEIGHT_ARRAY_BUFFER_BINDING_OES = 0x889e;

/// Commands

export const def_glCurrentPaletteMatrixOES = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCurrentPaletteMatrixOES!: Deno.UnsafeFnPointer<
  typeof def_glCurrentPaletteMatrixOES
>;

export function CurrentPaletteMatrixOES(
  matrixpaletteindex: GLuint,
): void {
  fn_glCurrentPaletteMatrixOES.call(
    matrixpaletteindex,
  );
}

export const def_glLoadPaletteFromModelViewMatrixOES = {
  parameters: [],
  result: "void",
} as const;

let fn_glLoadPaletteFromModelViewMatrixOES!: Deno.UnsafeFnPointer<
  typeof def_glLoadPaletteFromModelViewMatrixOES
>;

export function LoadPaletteFromModelViewMatrixOES(): void {
  fn_glLoadPaletteFromModelViewMatrixOES.call();
}

export const def_glMatrixIndexPointerOES = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixIndexPointerOES!: Deno.UnsafeFnPointer<
  typeof def_glMatrixIndexPointerOES
>;

export function MatrixIndexPointerOES(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glMatrixIndexPointerOES.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glWeightPointerOES = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightPointerOES!: Deno.UnsafeFnPointer<typeof def_glWeightPointerOES>;

export function WeightPointerOES(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glWeightPointerOES.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCurrentPaletteMatrixOES = new Deno.UnsafeFnPointer(
    proc("glCurrentPaletteMatrixOES")!,
    def_glCurrentPaletteMatrixOES,
  );
  fn_glLoadPaletteFromModelViewMatrixOES = new Deno.UnsafeFnPointer(
    proc("glLoadPaletteFromModelViewMatrixOES")!,
    def_glLoadPaletteFromModelViewMatrixOES,
  );
  fn_glMatrixIndexPointerOES = new Deno.UnsafeFnPointer(
    proc("glMatrixIndexPointerOES")!,
    def_glMatrixIndexPointerOES,
  );
  fn_glWeightPointerOES = new Deno.UnsafeFnPointer(
    proc("glWeightPointerOES")!,
    def_glWeightPointerOES,
  );
}
