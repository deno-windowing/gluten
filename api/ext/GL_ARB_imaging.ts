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
export const BLEND_COLOR = 0x8005;
export const BLEND_EQUATION = 0x8009;
export const CONSTANT_COLOR = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR = 0x8002;
export const CONSTANT_ALPHA = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA = 0x8004;
export const FUNC_ADD = 0x8006;
export const FUNC_REVERSE_SUBTRACT = 0x800b;
export const FUNC_SUBTRACT = 0x800a;
export const MIN = 0x8007;
export const MAX = 0x8008;
export const CONVOLUTION_1D = 0x8010;
export const CONVOLUTION_2D = 0x8011;
export const SEPARABLE_2D = 0x8012;
export const CONVOLUTION_BORDER_MODE = 0x8013;
export const CONVOLUTION_FILTER_SCALE = 0x8014;
export const CONVOLUTION_FILTER_BIAS = 0x8015;
export const REDUCE = 0x8016;
export const CONVOLUTION_FORMAT = 0x8017;
export const CONVOLUTION_WIDTH = 0x8018;
export const CONVOLUTION_HEIGHT = 0x8019;
export const MAX_CONVOLUTION_WIDTH = 0x801a;
export const MAX_CONVOLUTION_HEIGHT = 0x801b;
export const POST_CONVOLUTION_RED_SCALE = 0x801c;
export const POST_CONVOLUTION_GREEN_SCALE = 0x801d;
export const POST_CONVOLUTION_BLUE_SCALE = 0x801e;
export const POST_CONVOLUTION_ALPHA_SCALE = 0x801f;
export const POST_CONVOLUTION_RED_BIAS = 0x8020;
export const POST_CONVOLUTION_GREEN_BIAS = 0x8021;
export const POST_CONVOLUTION_BLUE_BIAS = 0x8022;
export const POST_CONVOLUTION_ALPHA_BIAS = 0x8023;
export const HISTOGRAM = 0x8024;
export const PROXY_HISTOGRAM = 0x8025;
export const HISTOGRAM_WIDTH = 0x8026;
export const HISTOGRAM_FORMAT = 0x8027;
export const HISTOGRAM_RED_SIZE = 0x8028;
export const HISTOGRAM_GREEN_SIZE = 0x8029;
export const HISTOGRAM_BLUE_SIZE = 0x802a;
export const HISTOGRAM_ALPHA_SIZE = 0x802b;
export const HISTOGRAM_LUMINANCE_SIZE = 0x802c;
export const HISTOGRAM_SINK = 0x802d;
export const MINMAX = 0x802e;
export const MINMAX_FORMAT = 0x802f;
export const MINMAX_SINK = 0x8030;
export const TABLE_TOO_LARGE = 0x8031;
export const COLOR_MATRIX = 0x80b1;
export const COLOR_MATRIX_STACK_DEPTH = 0x80b2;
export const MAX_COLOR_MATRIX_STACK_DEPTH = 0x80b3;
export const POST_COLOR_MATRIX_RED_SCALE = 0x80b4;
export const POST_COLOR_MATRIX_GREEN_SCALE = 0x80b5;
export const POST_COLOR_MATRIX_BLUE_SCALE = 0x80b6;
export const POST_COLOR_MATRIX_ALPHA_SCALE = 0x80b7;
export const POST_COLOR_MATRIX_RED_BIAS = 0x80b8;
export const POST_COLOR_MATRIX_GREEN_BIAS = 0x80b9;
export const POST_COLOR_MATRIX_BLUE_BIAS = 0x80ba;
export const POST_COLOR_MATRIX_ALPHA_BIAS = 0x80bb;
export const COLOR_TABLE = 0x80d0;
export const POST_CONVOLUTION_COLOR_TABLE = 0x80d1;
export const POST_COLOR_MATRIX_COLOR_TABLE = 0x80d2;
export const PROXY_COLOR_TABLE = 0x80d3;
export const PROXY_POST_CONVOLUTION_COLOR_TABLE = 0x80d4;
export const PROXY_POST_COLOR_MATRIX_COLOR_TABLE = 0x80d5;
export const COLOR_TABLE_SCALE = 0x80d6;
export const COLOR_TABLE_BIAS = 0x80d7;
export const COLOR_TABLE_FORMAT = 0x80d8;
export const COLOR_TABLE_WIDTH = 0x80d9;
export const COLOR_TABLE_RED_SIZE = 0x80da;
export const COLOR_TABLE_GREEN_SIZE = 0x80db;
export const COLOR_TABLE_BLUE_SIZE = 0x80dc;
export const COLOR_TABLE_ALPHA_SIZE = 0x80dd;
export const COLOR_TABLE_LUMINANCE_SIZE = 0x80de;
export const COLOR_TABLE_INTENSITY_SIZE = 0x80df;
export const CONSTANT_BORDER = 0x8151;
export const REPLICATE_BORDER = 0x8153;
export const CONVOLUTION_BORDER_COLOR = 0x8154;

/// Commands

export const def_glBlendColor = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glBlendColor!: Deno.UnsafeFnPointer<typeof def_glBlendColor>;

export function BlendColor(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
  alpha: GLfloat,
): void {
  fn_glBlendColor.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glBlendEquation = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBlendEquation!: Deno.UnsafeFnPointer<typeof def_glBlendEquation>;

export function BlendEquation(
  mode: GLenum,
): void {
  fn_glBlendEquation.call(
    mode,
  );
}

export const def_glColorTable = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTable!: Deno.UnsafeFnPointer<typeof def_glColorTable>;

export function ColorTable(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  table: Buffer,
): void {
  fn_glColorTable.call(
    target,
    internalformat,
    width,
    format,
    type,
    bufferToFFI(table),
  );
}

export const def_glColorTableParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableParameterfv!: Deno.UnsafeFnPointer<typeof def_glColorTableParameterfv>;

export function ColorTableParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glColorTableParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glColorTableParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorTableParameteriv!: Deno.UnsafeFnPointer<typeof def_glColorTableParameteriv>;

export function ColorTableParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glColorTableParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCopyColorTable = {
  parameters: ["u32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyColorTable!: Deno.UnsafeFnPointer<typeof def_glCopyColorTable>;

export function CopyColorTable(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyColorTable.call(
    target,
    internalformat,
    x,
    y,
    width,
  );
}

export const def_glGetColorTable = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTable!: Deno.UnsafeFnPointer<typeof def_glGetColorTable>;

export function GetColorTable(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  table: Buffer,
): void {
  fn_glGetColorTable.call(
    target,
    format,
    type,
    bufferToFFI(table),
  );
}

export const def_glGetColorTableParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameterfv>;

export function GetColorTableParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetColorTableParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetColorTableParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetColorTableParameteriv>;

export function GetColorTableParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetColorTableParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glColorSubTable = {
  parameters: ["u32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorSubTable!: Deno.UnsafeFnPointer<typeof def_glColorSubTable>;

export function ColorSubTable(
  target: GLenum,
  start: GLsizei,
  count: GLsizei,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glColorSubTable.call(
    target,
    start,
    count,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glCopyColorSubTable = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyColorSubTable!: Deno.UnsafeFnPointer<typeof def_glCopyColorSubTable>;

export function CopyColorSubTable(
  target: GLenum,
  start: GLsizei,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyColorSubTable.call(
    target,
    start,
    x,
    y,
    width,
  );
}

export const def_glConvolutionFilter1D = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionFilter1D!: Deno.UnsafeFnPointer<typeof def_glConvolutionFilter1D>;

export function ConvolutionFilter1D(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glConvolutionFilter1D.call(
    target,
    internalformat,
    width,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glConvolutionFilter2D = {
  parameters: ["u32", "u32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionFilter2D!: Deno.UnsafeFnPointer<typeof def_glConvolutionFilter2D>;

export function ConvolutionFilter2D(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glConvolutionFilter2D.call(
    target,
    internalformat,
    width,
    height,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glConvolutionParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glConvolutionParameterf!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameterf>;

export function ConvolutionParameterf(
  target: GLenum,
  pname: GLenum,
  params: GLfloat,
): void {
  fn_glConvolutionParameterf.call(
    target,
    pname,
    params,
  );
}

export const def_glConvolutionParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionParameterfv!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameterfv>;

export function ConvolutionParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glConvolutionParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glConvolutionParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glConvolutionParameteri!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameteri>;

export function ConvolutionParameteri(
  target: GLenum,
  pname: GLenum,
  params: GLint,
): void {
  fn_glConvolutionParameteri.call(
    target,
    pname,
    params,
  );
}

export const def_glConvolutionParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionParameteriv!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameteriv>;

export function ConvolutionParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glConvolutionParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCopyConvolutionFilter1D = {
  parameters: ["u32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyConvolutionFilter1D!: Deno.UnsafeFnPointer<typeof def_glCopyConvolutionFilter1D>;

export function CopyConvolutionFilter1D(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyConvolutionFilter1D.call(
    target,
    internalformat,
    x,
    y,
    width,
  );
}

export const def_glCopyConvolutionFilter2D = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyConvolutionFilter2D!: Deno.UnsafeFnPointer<typeof def_glCopyConvolutionFilter2D>;

export function CopyConvolutionFilter2D(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyConvolutionFilter2D.call(
    target,
    internalformat,
    x,
    y,
    width,
    height,
  );
}

export const def_glGetConvolutionFilter = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionFilter!: Deno.UnsafeFnPointer<typeof def_glGetConvolutionFilter>;

export function GetConvolutionFilter(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glGetConvolutionFilter.call(
    target,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glGetConvolutionParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetConvolutionParameterfv>;

export function GetConvolutionParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetConvolutionParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetConvolutionParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetConvolutionParameteriv>;

export function GetConvolutionParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetConvolutionParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSeparableFilter = {
  parameters: ["u32", "u32", "u32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetSeparableFilter!: Deno.UnsafeFnPointer<typeof def_glGetSeparableFilter>;

export function GetSeparableFilter(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  row: Buffer,
  column: Buffer,
  span: Buffer,
): void {
  fn_glGetSeparableFilter.call(
    target,
    format,
    type,
    bufferToFFI(row),
    bufferToFFI(column),
    bufferToFFI(span),
  );
}

export const def_glSeparableFilter2D = {
  parameters: ["u32", "u32", "i32", "i32", "u32", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glSeparableFilter2D!: Deno.UnsafeFnPointer<typeof def_glSeparableFilter2D>;

export function SeparableFilter2D(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  row: Buffer,
  column: Buffer,
): void {
  fn_glSeparableFilter2D.call(
    target,
    internalformat,
    width,
    height,
    format,
    type,
    bufferToFFI(row),
    bufferToFFI(column),
  );
}

export const def_glGetHistogram = {
  parameters: ["u32", "u8", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogram!: Deno.UnsafeFnPointer<typeof def_glGetHistogram>;

export function GetHistogram(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  values: Buffer,
): void {
  fn_glGetHistogram.call(
    target,
    reset,
    format,
    type,
    bufferToFFI(values),
  );
}

export const def_glGetHistogramParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetHistogramParameterfv>;

export function GetHistogramParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetHistogramParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetHistogramParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetHistogramParameteriv>;

export function GetHistogramParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetHistogramParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMinmax = {
  parameters: ["u32", "u8", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmax!: Deno.UnsafeFnPointer<typeof def_glGetMinmax>;

export function GetMinmax(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  values: Buffer,
): void {
  fn_glGetMinmax.call(
    target,
    reset,
    format,
    type,
    bufferToFFI(values),
  );
}

export const def_glGetMinmaxParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmaxParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetMinmaxParameterfv>;

export function GetMinmaxParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMinmaxParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMinmaxParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmaxParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetMinmaxParameteriv>;

export function GetMinmaxParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMinmaxParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glHistogram = {
  parameters: ["u32", "i32", "u32", "u8"],
  result: "void",
} as const;

let fn_glHistogram!: Deno.UnsafeFnPointer<typeof def_glHistogram>;

export function Histogram(
  target: GLenum,
  width: GLsizei,
  internalformat: GLenum,
  sink: GLboolean,
): void {
  fn_glHistogram.call(
    target,
    width,
    internalformat,
    sink,
  );
}

export const def_glMinmax = {
  parameters: ["u32", "u32", "u8"],
  result: "void",
} as const;

let fn_glMinmax!: Deno.UnsafeFnPointer<typeof def_glMinmax>;

export function Minmax(
  target: GLenum,
  internalformat: GLenum,
  sink: GLboolean,
): void {
  fn_glMinmax.call(
    target,
    internalformat,
    sink,
  );
}

export const def_glResetHistogram = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glResetHistogram!: Deno.UnsafeFnPointer<typeof def_glResetHistogram>;

export function ResetHistogram(
  target: GLenum,
): void {
  fn_glResetHistogram.call(
    target,
  );
}

export const def_glResetMinmax = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glResetMinmax!: Deno.UnsafeFnPointer<typeof def_glResetMinmax>;

export function ResetMinmax(
  target: GLenum,
): void {
  fn_glResetMinmax.call(
    target,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBlendColor = new Deno.UnsafeFnPointer(proc("glBlendColor"), def_glBlendColor);
  fn_glBlendEquation = new Deno.UnsafeFnPointer(proc("glBlendEquation"), def_glBlendEquation);
  fn_glColorTable = new Deno.UnsafeFnPointer(proc("glColorTable"), def_glColorTable);
  fn_glColorTableParameterfv = new Deno.UnsafeFnPointer(proc("glColorTableParameterfv"), def_glColorTableParameterfv);
  fn_glColorTableParameteriv = new Deno.UnsafeFnPointer(proc("glColorTableParameteriv"), def_glColorTableParameteriv);
  fn_glCopyColorTable = new Deno.UnsafeFnPointer(proc("glCopyColorTable"), def_glCopyColorTable);
  fn_glGetColorTable = new Deno.UnsafeFnPointer(proc("glGetColorTable"), def_glGetColorTable);
  fn_glGetColorTableParameterfv = new Deno.UnsafeFnPointer(proc("glGetColorTableParameterfv"), def_glGetColorTableParameterfv);
  fn_glGetColorTableParameteriv = new Deno.UnsafeFnPointer(proc("glGetColorTableParameteriv"), def_glGetColorTableParameteriv);
  fn_glColorSubTable = new Deno.UnsafeFnPointer(proc("glColorSubTable"), def_glColorSubTable);
  fn_glCopyColorSubTable = new Deno.UnsafeFnPointer(proc("glCopyColorSubTable"), def_glCopyColorSubTable);
  fn_glConvolutionFilter1D = new Deno.UnsafeFnPointer(proc("glConvolutionFilter1D"), def_glConvolutionFilter1D);
  fn_glConvolutionFilter2D = new Deno.UnsafeFnPointer(proc("glConvolutionFilter2D"), def_glConvolutionFilter2D);
  fn_glConvolutionParameterf = new Deno.UnsafeFnPointer(proc("glConvolutionParameterf"), def_glConvolutionParameterf);
  fn_glConvolutionParameterfv = new Deno.UnsafeFnPointer(proc("glConvolutionParameterfv"), def_glConvolutionParameterfv);
  fn_glConvolutionParameteri = new Deno.UnsafeFnPointer(proc("glConvolutionParameteri"), def_glConvolutionParameteri);
  fn_glConvolutionParameteriv = new Deno.UnsafeFnPointer(proc("glConvolutionParameteriv"), def_glConvolutionParameteriv);
  fn_glCopyConvolutionFilter1D = new Deno.UnsafeFnPointer(proc("glCopyConvolutionFilter1D"), def_glCopyConvolutionFilter1D);
  fn_glCopyConvolutionFilter2D = new Deno.UnsafeFnPointer(proc("glCopyConvolutionFilter2D"), def_glCopyConvolutionFilter2D);
  fn_glGetConvolutionFilter = new Deno.UnsafeFnPointer(proc("glGetConvolutionFilter"), def_glGetConvolutionFilter);
  fn_glGetConvolutionParameterfv = new Deno.UnsafeFnPointer(proc("glGetConvolutionParameterfv"), def_glGetConvolutionParameterfv);
  fn_glGetConvolutionParameteriv = new Deno.UnsafeFnPointer(proc("glGetConvolutionParameteriv"), def_glGetConvolutionParameteriv);
  fn_glGetSeparableFilter = new Deno.UnsafeFnPointer(proc("glGetSeparableFilter"), def_glGetSeparableFilter);
  fn_glSeparableFilter2D = new Deno.UnsafeFnPointer(proc("glSeparableFilter2D"), def_glSeparableFilter2D);
  fn_glGetHistogram = new Deno.UnsafeFnPointer(proc("glGetHistogram"), def_glGetHistogram);
  fn_glGetHistogramParameterfv = new Deno.UnsafeFnPointer(proc("glGetHistogramParameterfv"), def_glGetHistogramParameterfv);
  fn_glGetHistogramParameteriv = new Deno.UnsafeFnPointer(proc("glGetHistogramParameteriv"), def_glGetHistogramParameteriv);
  fn_glGetMinmax = new Deno.UnsafeFnPointer(proc("glGetMinmax"), def_glGetMinmax);
  fn_glGetMinmaxParameterfv = new Deno.UnsafeFnPointer(proc("glGetMinmaxParameterfv"), def_glGetMinmaxParameterfv);
  fn_glGetMinmaxParameteriv = new Deno.UnsafeFnPointer(proc("glGetMinmaxParameteriv"), def_glGetMinmaxParameteriv);
  fn_glHistogram = new Deno.UnsafeFnPointer(proc("glHistogram"), def_glHistogram);
  fn_glMinmax = new Deno.UnsafeFnPointer(proc("glMinmax"), def_glMinmax);
  fn_glResetHistogram = new Deno.UnsafeFnPointer(proc("glResetHistogram"), def_glResetHistogram);
  fn_glResetMinmax = new Deno.UnsafeFnPointer(proc("glResetMinmax"), def_glResetMinmax);
}
