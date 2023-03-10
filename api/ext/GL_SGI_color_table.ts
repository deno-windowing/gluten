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
export const COLOR_TABLE_SGI = 0x80d0;
export const POST_CONVOLUTION_COLOR_TABLE_SGI = 0x80d1;
export const POST_COLOR_MATRIX_COLOR_TABLE_SGI = 0x80d2;
export const PROXY_COLOR_TABLE_SGI = 0x80d3;
export const PROXY_POST_CONVOLUTION_COLOR_TABLE_SGI = 0x80d4;
export const PROXY_POST_COLOR_MATRIX_COLOR_TABLE_SGI = 0x80d5;
export const COLOR_TABLE_SCALE_SGI = 0x80d6;
export const COLOR_TABLE_BIAS_SGI = 0x80d7;
export const COLOR_TABLE_FORMAT_SGI = 0x80d8;
export const COLOR_TABLE_WIDTH_SGI = 0x80d9;
export const COLOR_TABLE_RED_SIZE_SGI = 0x80da;
export const COLOR_TABLE_GREEN_SIZE_SGI = 0x80db;
export const COLOR_TABLE_BLUE_SIZE_SGI = 0x80dc;
export const COLOR_TABLE_ALPHA_SIZE_SGI = 0x80dd;
export const COLOR_TABLE_LUMINANCE_SIZE_SGI = 0x80de;
export const COLOR_TABLE_INTENSITY_SIZE_SGI = 0x80df;

/// Commands

export const def_glColorTableSGI = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableSGI!: Deno.UnsafeFnPointer<typeof def_glColorTableSGI>;

export function ColorTableSGI(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  table: Buffer,
): void {
  fn_glColorTableSGI.call(
    target,
    internalformat,
    width,
    format,
    type,
    bufferToFFI(table),
  );
}

export const def_glColorTableParameterfvSGI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableParameterfvSGI!: Deno.UnsafeFnPointer<typeof def_glColorTableParameterfvSGI>;

export function ColorTableParameterfvSGI(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glColorTableParameterfvSGI.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glColorTableParameterivSGI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableParameterivSGI!: Deno.UnsafeFnPointer<typeof def_glColorTableParameterivSGI>;

export function ColorTableParameterivSGI(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glColorTableParameterivSGI.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCopyColorTableSGI = {
  parameters: ["u32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyColorTableSGI!: Deno.UnsafeFnPointer<typeof def_glCopyColorTableSGI>;

export function CopyColorTableSGI(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyColorTableSGI.call(
    target,
    internalformat,
    x,
    y,
    width,
  );
}

export const def_glGetColorTableSGI = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableSGI!: Deno.UnsafeFnPointer<typeof def_glGetColorTableSGI>;

export function GetColorTableSGI(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  table: Buffer,
): void {
  fn_glGetColorTableSGI.call(
    target,
    format,
    type,
    bufferToFFI(table),
  );
}

export const def_glGetColorTableParameterfvSGI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameterfvSGI!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameterfvSGI>;

export function GetColorTableParameterfvSGI(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameterfvSGI.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetColorTableParameterivSGI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameterivSGI!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameterivSGI>;

export function GetColorTableParameterivSGI(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameterivSGI.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glColorTableSGI = new Deno.UnsafeFnPointer(proc("glColorTableSGI")!, def_glColorTableSGI);
  fn_glColorTableParameterfvSGI = new Deno.UnsafeFnPointer(proc("glColorTableParameterfvSGI")!, def_glColorTableParameterfvSGI);
  fn_glColorTableParameterivSGI = new Deno.UnsafeFnPointer(proc("glColorTableParameterivSGI")!, def_glColorTableParameterivSGI);
  fn_glCopyColorTableSGI = new Deno.UnsafeFnPointer(proc("glCopyColorTableSGI")!, def_glCopyColorTableSGI);
  fn_glGetColorTableSGI = new Deno.UnsafeFnPointer(proc("glGetColorTableSGI")!, def_glGetColorTableSGI);
  fn_glGetColorTableParameterfvSGI = new Deno.UnsafeFnPointer(proc("glGetColorTableParameterfvSGI")!, def_glGetColorTableParameterfvSGI);
  fn_glGetColorTableParameterivSGI = new Deno.UnsafeFnPointer(proc("glGetColorTableParameterivSGI")!, def_glGetColorTableParameterivSGI);
}
