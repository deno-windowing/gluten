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
export const TRANSPOSE_MODELVIEW_MATRIX_ARB = 0x84e3;
export const TRANSPOSE_PROJECTION_MATRIX_ARB = 0x84e4;
export const TRANSPOSE_TEXTURE_MATRIX_ARB = 0x84e5;
export const TRANSPOSE_COLOR_MATRIX_ARB = 0x84e6;

/// Commands

export const def_glLoadTransposeMatrixfARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadTransposeMatrixfARB!: Deno.UnsafeFnPointer<typeof def_glLoadTransposeMatrixfARB>;

export function LoadTransposeMatrixfARB(
  m: Buffer,
): void {
  fn_glLoadTransposeMatrixfARB.call(
    bufferToFFI(m),
  );
}

export const def_glLoadTransposeMatrixdARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadTransposeMatrixdARB!: Deno.UnsafeFnPointer<typeof def_glLoadTransposeMatrixdARB>;

export function LoadTransposeMatrixdARB(
  m: Buffer,
): void {
  fn_glLoadTransposeMatrixdARB.call(
    bufferToFFI(m),
  );
}

export const def_glMultTransposeMatrixfARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultTransposeMatrixfARB!: Deno.UnsafeFnPointer<typeof def_glMultTransposeMatrixfARB>;

export function MultTransposeMatrixfARB(
  m: Buffer,
): void {
  fn_glMultTransposeMatrixfARB.call(
    bufferToFFI(m),
  );
}

export const def_glMultTransposeMatrixdARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultTransposeMatrixdARB!: Deno.UnsafeFnPointer<typeof def_glMultTransposeMatrixdARB>;

export function MultTransposeMatrixdARB(
  m: Buffer,
): void {
  fn_glMultTransposeMatrixdARB.call(
    bufferToFFI(m),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glLoadTransposeMatrixfARB = new Deno.UnsafeFnPointer(proc("glLoadTransposeMatrixfARB")!, def_glLoadTransposeMatrixfARB);
  fn_glLoadTransposeMatrixdARB = new Deno.UnsafeFnPointer(proc("glLoadTransposeMatrixdARB")!, def_glLoadTransposeMatrixdARB);
  fn_glMultTransposeMatrixfARB = new Deno.UnsafeFnPointer(proc("glMultTransposeMatrixfARB")!, def_glMultTransposeMatrixfARB);
  fn_glMultTransposeMatrixdARB = new Deno.UnsafeFnPointer(proc("glMultTransposeMatrixdARB")!, def_glMultTransposeMatrixdARB);
}
