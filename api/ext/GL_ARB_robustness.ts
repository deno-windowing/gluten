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
export const NO_ERROR = 0x0;
export const CONTEXT_FLAG_ROBUST_ACCESS_BIT_ARB = 0x4;
export const LOSE_CONTEXT_ON_RESET_ARB = 0x8252;
export const GUILTY_CONTEXT_RESET_ARB = 0x8253;
export const INNOCENT_CONTEXT_RESET_ARB = 0x8254;
export const UNKNOWN_CONTEXT_RESET_ARB = 0x8255;
export const RESET_NOTIFICATION_STRATEGY_ARB = 0x8256;
export const NO_RESET_NOTIFICATION_ARB = 0x8261;

/// Commands

export const def_glGetGraphicsResetStatusARB = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatusARB!: Deno.UnsafeFnPointer<typeof def_glGetGraphicsResetStatusARB>;

export function GetGraphicsResetStatusARB(): GLenum {
  return fn_glGetGraphicsResetStatusARB.call();
}

export const def_glGetnTexImageARB = {
  parameters: ["u32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnTexImageARB!: Deno.UnsafeFnPointer<typeof def_glGetnTexImageARB>;

export function GetnTexImageARB(
  target: GLenum,
  level: GLint,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  img: Buffer,
): void {
  fn_glGetnTexImageARB.call(
    target,
    level,
    format,
    type,
    bufSize,
    bufferToFFI(img),
  );
}

export const def_glReadnPixelsARB = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReadnPixelsARB!: Deno.UnsafeFnPointer<typeof def_glReadnPixelsARB>;

export function ReadnPixelsARB(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  data: Buffer,
): void {
  fn_glReadnPixelsARB.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufSize,
    bufferToFFI(data),
  );
}

export const def_glGetnCompressedTexImageARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnCompressedTexImageARB!: Deno.UnsafeFnPointer<typeof def_glGetnCompressedTexImageARB>;

export function GetnCompressedTexImageARB(
  target: GLenum,
  lod: GLint,
  bufSize: GLsizei,
  img: Buffer,
): void {
  fn_glGetnCompressedTexImageARB.call(
    target,
    lod,
    bufSize,
    bufferToFFI(img),
  );
}

export const def_glGetnUniformfvARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformfvARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformfvARB>;

export function GetnUniformfvARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformfvARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformivARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformivARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformivARB>;

export function GetnUniformivARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformivARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformuivARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformuivARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformuivARB>;

export function GetnUniformuivARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformuivARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformdvARB = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformdvARB!: Deno.UnsafeFnPointer<typeof def_glGetnUniformdvARB>;

export function GetnUniformdvARB(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformdvARB.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnMapdvARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapdvARB!: Deno.UnsafeFnPointer<typeof def_glGetnMapdvARB>;

export function GetnMapdvARB(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapdvARB.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnMapfvARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapfvARB!: Deno.UnsafeFnPointer<typeof def_glGetnMapfvARB>;

export function GetnMapfvARB(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapfvARB.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnMapivARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapivARB!: Deno.UnsafeFnPointer<typeof def_glGetnMapivARB>;

export function GetnMapivARB(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapivARB.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnPixelMapfvARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapfvARB!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapfvARB>;

export function GetnPixelMapfvARB(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapfvARB.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPixelMapuivARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapuivARB!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapuivARB>;

export function GetnPixelMapuivARB(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapuivARB.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPixelMapusvARB = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapusvARB!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapusvARB>;

export function GetnPixelMapusvARB(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapusvARB.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPolygonStippleARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPolygonStippleARB!: Deno.UnsafeFnPointer<typeof def_glGetnPolygonStippleARB>;

export function GetnPolygonStippleARB(
  bufSize: GLsizei,
  pattern: Buffer,
): void {
  fn_glGetnPolygonStippleARB.call(
    bufSize,
    bufferToFFI(pattern),
  );
}

export const def_glGetnColorTableARB = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnColorTableARB!: Deno.UnsafeFnPointer<typeof def_glGetnColorTableARB>;

export function GetnColorTableARB(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  table: Buffer,
): void {
  fn_glGetnColorTableARB.call(
    target,
    format,
    type,
    bufSize,
    bufferToFFI(table),
  );
}

export const def_glGetnConvolutionFilterARB = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnConvolutionFilterARB!: Deno.UnsafeFnPointer<typeof def_glGetnConvolutionFilterARB>;

export function GetnConvolutionFilterARB(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  image: Buffer,
): void {
  fn_glGetnConvolutionFilterARB.call(
    target,
    format,
    type,
    bufSize,
    bufferToFFI(image),
  );
}

export const def_glGetnSeparableFilterARB = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetnSeparableFilterARB!: Deno.UnsafeFnPointer<typeof def_glGetnSeparableFilterARB>;

export function GetnSeparableFilterARB(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  rowBufSize: GLsizei,
  row: Buffer,
  columnBufSize: GLsizei,
  column: Buffer,
  span: Buffer,
): void {
  fn_glGetnSeparableFilterARB.call(
    target,
    format,
    type,
    rowBufSize,
    bufferToFFI(row),
    columnBufSize,
    bufferToFFI(column),
    bufferToFFI(span),
  );
}

export const def_glGetnHistogramARB = {
  parameters: ["u32", "u8", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnHistogramARB!: Deno.UnsafeFnPointer<typeof def_glGetnHistogramARB>;

export function GetnHistogramARB(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnHistogramARB.call(
    target,
    reset,
    format,
    type,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnMinmaxARB = {
  parameters: ["u32", "u8", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMinmaxARB!: Deno.UnsafeFnPointer<typeof def_glGetnMinmaxARB>;

export function GetnMinmaxARB(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnMinmaxARB.call(
    target,
    reset,
    format,
    type,
    bufSize,
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetGraphicsResetStatusARB = new Deno.UnsafeFnPointer(proc("glGetGraphicsResetStatusARB"), def_glGetGraphicsResetStatusARB);
  fn_glGetnTexImageARB = new Deno.UnsafeFnPointer(proc("glGetnTexImageARB"), def_glGetnTexImageARB);
  fn_glReadnPixelsARB = new Deno.UnsafeFnPointer(proc("glReadnPixelsARB"), def_glReadnPixelsARB);
  fn_glGetnCompressedTexImageARB = new Deno.UnsafeFnPointer(proc("glGetnCompressedTexImageARB"), def_glGetnCompressedTexImageARB);
  fn_glGetnUniformfvARB = new Deno.UnsafeFnPointer(proc("glGetnUniformfvARB"), def_glGetnUniformfvARB);
  fn_glGetnUniformivARB = new Deno.UnsafeFnPointer(proc("glGetnUniformivARB"), def_glGetnUniformivARB);
  fn_glGetnUniformuivARB = new Deno.UnsafeFnPointer(proc("glGetnUniformuivARB"), def_glGetnUniformuivARB);
  fn_glGetnUniformdvARB = new Deno.UnsafeFnPointer(proc("glGetnUniformdvARB"), def_glGetnUniformdvARB);
  fn_glGetnMapdvARB = new Deno.UnsafeFnPointer(proc("glGetnMapdvARB"), def_glGetnMapdvARB);
  fn_glGetnMapfvARB = new Deno.UnsafeFnPointer(proc("glGetnMapfvARB"), def_glGetnMapfvARB);
  fn_glGetnMapivARB = new Deno.UnsafeFnPointer(proc("glGetnMapivARB"), def_glGetnMapivARB);
  fn_glGetnPixelMapfvARB = new Deno.UnsafeFnPointer(proc("glGetnPixelMapfvARB"), def_glGetnPixelMapfvARB);
  fn_glGetnPixelMapuivARB = new Deno.UnsafeFnPointer(proc("glGetnPixelMapuivARB"), def_glGetnPixelMapuivARB);
  fn_glGetnPixelMapusvARB = new Deno.UnsafeFnPointer(proc("glGetnPixelMapusvARB"), def_glGetnPixelMapusvARB);
  fn_glGetnPolygonStippleARB = new Deno.UnsafeFnPointer(proc("glGetnPolygonStippleARB"), def_glGetnPolygonStippleARB);
  fn_glGetnColorTableARB = new Deno.UnsafeFnPointer(proc("glGetnColorTableARB"), def_glGetnColorTableARB);
  fn_glGetnConvolutionFilterARB = new Deno.UnsafeFnPointer(proc("glGetnConvolutionFilterARB"), def_glGetnConvolutionFilterARB);
  fn_glGetnSeparableFilterARB = new Deno.UnsafeFnPointer(proc("glGetnSeparableFilterARB"), def_glGetnSeparableFilterARB);
  fn_glGetnHistogramARB = new Deno.UnsafeFnPointer(proc("glGetnHistogramARB"), def_glGetnHistogramARB);
  fn_glGetnMinmaxARB = new Deno.UnsafeFnPointer(proc("glGetnMinmaxARB"), def_glGetnMinmaxARB);
}
