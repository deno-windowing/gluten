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
export const CONVOLUTION_1D_EXT = 0x8010;
export const CONVOLUTION_2D_EXT = 0x8011;
export const SEPARABLE_2D_EXT = 0x8012;
export const CONVOLUTION_BORDER_MODE_EXT = 0x8013;
export const CONVOLUTION_FILTER_SCALE_EXT = 0x8014;
export const CONVOLUTION_FILTER_BIAS_EXT = 0x8015;
export const REDUCE_EXT = 0x8016;
export const CONVOLUTION_FORMAT_EXT = 0x8017;
export const CONVOLUTION_WIDTH_EXT = 0x8018;
export const CONVOLUTION_HEIGHT_EXT = 0x8019;
export const MAX_CONVOLUTION_WIDTH_EXT = 0x801a;
export const MAX_CONVOLUTION_HEIGHT_EXT = 0x801b;
export const POST_CONVOLUTION_RED_SCALE_EXT = 0x801c;
export const POST_CONVOLUTION_GREEN_SCALE_EXT = 0x801d;
export const POST_CONVOLUTION_BLUE_SCALE_EXT = 0x801e;
export const POST_CONVOLUTION_ALPHA_SCALE_EXT = 0x801f;
export const POST_CONVOLUTION_RED_BIAS_EXT = 0x8020;
export const POST_CONVOLUTION_GREEN_BIAS_EXT = 0x8021;
export const POST_CONVOLUTION_BLUE_BIAS_EXT = 0x8022;
export const POST_CONVOLUTION_ALPHA_BIAS_EXT = 0x8023;

/// Commands

export const def_glConvolutionFilter1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionFilter1DEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionFilter1DEXT
>;

export function ConvolutionFilter1DEXT(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glConvolutionFilter1DEXT.call(
    target,
    internalformat,
    width,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glConvolutionFilter2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionFilter2DEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionFilter2DEXT
>;

export function ConvolutionFilter2DEXT(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glConvolutionFilter2DEXT.call(
    target,
    internalformat,
    width,
    height,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glConvolutionParameterfEXT = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glConvolutionParameterfEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionParameterfEXT
>;

export function ConvolutionParameterfEXT(
  target: GLenum,
  pname: GLenum,
  params: GLfloat,
): void {
  fn_glConvolutionParameterfEXT.call(
    target,
    pname,
    params,
  );
}

export const def_glConvolutionParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionParameterfvEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionParameterfvEXT
>;

export function ConvolutionParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glConvolutionParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glConvolutionParameteriEXT = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glConvolutionParameteriEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionParameteriEXT
>;

export function ConvolutionParameteriEXT(
  target: GLenum,
  pname: GLenum,
  params: GLint,
): void {
  fn_glConvolutionParameteriEXT.call(
    target,
    pname,
    params,
  );
}

export const def_glConvolutionParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionParameterivEXT!: Deno.UnsafeFnPointer<
  typeof def_glConvolutionParameterivEXT
>;

export function ConvolutionParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glConvolutionParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCopyConvolutionFilter1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyConvolutionFilter1DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyConvolutionFilter1DEXT
>;

export function CopyConvolutionFilter1DEXT(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyConvolutionFilter1DEXT.call(
    target,
    internalformat,
    x,
    y,
    width,
  );
}

export const def_glCopyConvolutionFilter2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyConvolutionFilter2DEXT!: Deno.UnsafeFnPointer<
  typeof def_glCopyConvolutionFilter2DEXT
>;

export function CopyConvolutionFilter2DEXT(
  target: GLenum,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyConvolutionFilter2DEXT.call(
    target,
    internalformat,
    x,
    y,
    width,
    height,
  );
}

export const def_glGetConvolutionFilterEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionFilterEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetConvolutionFilterEXT
>;

export function GetConvolutionFilterEXT(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  image: Buffer,
): void {
  fn_glGetConvolutionFilterEXT.call(
    target,
    format,
    type,
    bufferToFFI(image),
  );
}

export const def_glGetConvolutionParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionParameterfvEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetConvolutionParameterfvEXT
>;

export function GetConvolutionParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetConvolutionParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetConvolutionParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionParameterivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetConvolutionParameterivEXT
>;

export function GetConvolutionParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetConvolutionParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSeparableFilterEXT = {
  parameters: ["u32", "u32", "u32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetSeparableFilterEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetSeparableFilterEXT
>;

export function GetSeparableFilterEXT(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  row: Buffer,
  column: Buffer,
  span: Buffer,
): void {
  fn_glGetSeparableFilterEXT.call(
    target,
    format,
    type,
    bufferToFFI(row),
    bufferToFFI(column),
    bufferToFFI(span),
  );
}

export const def_glSeparableFilter2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "u32", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glSeparableFilter2DEXT!: Deno.UnsafeFnPointer<
  typeof def_glSeparableFilter2DEXT
>;

export function SeparableFilter2DEXT(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  row: Buffer,
  column: Buffer,
): void {
  fn_glSeparableFilter2DEXT.call(
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

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glConvolutionFilter1DEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionFilter1DEXT")!,
    def_glConvolutionFilter1DEXT,
  );
  fn_glConvolutionFilter2DEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionFilter2DEXT")!,
    def_glConvolutionFilter2DEXT,
  );
  fn_glConvolutionParameterfEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionParameterfEXT")!,
    def_glConvolutionParameterfEXT,
  );
  fn_glConvolutionParameterfvEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionParameterfvEXT")!,
    def_glConvolutionParameterfvEXT,
  );
  fn_glConvolutionParameteriEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionParameteriEXT")!,
    def_glConvolutionParameteriEXT,
  );
  fn_glConvolutionParameterivEXT = new Deno.UnsafeFnPointer(
    proc("glConvolutionParameterivEXT")!,
    def_glConvolutionParameterivEXT,
  );
  fn_glCopyConvolutionFilter1DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyConvolutionFilter1DEXT")!,
    def_glCopyConvolutionFilter1DEXT,
  );
  fn_glCopyConvolutionFilter2DEXT = new Deno.UnsafeFnPointer(
    proc("glCopyConvolutionFilter2DEXT")!,
    def_glCopyConvolutionFilter2DEXT,
  );
  fn_glGetConvolutionFilterEXT = new Deno.UnsafeFnPointer(
    proc("glGetConvolutionFilterEXT")!,
    def_glGetConvolutionFilterEXT,
  );
  fn_glGetConvolutionParameterfvEXT = new Deno.UnsafeFnPointer(
    proc("glGetConvolutionParameterfvEXT")!,
    def_glGetConvolutionParameterfvEXT,
  );
  fn_glGetConvolutionParameterivEXT = new Deno.UnsafeFnPointer(
    proc("glGetConvolutionParameterivEXT")!,
    def_glGetConvolutionParameterivEXT,
  );
  fn_glGetSeparableFilterEXT = new Deno.UnsafeFnPointer(
    proc("glGetSeparableFilterEXT")!,
    def_glGetSeparableFilterEXT,
  );
  fn_glSeparableFilter2DEXT = new Deno.UnsafeFnPointer(
    proc("glSeparableFilter2DEXT")!,
    def_glSeparableFilter2DEXT,
  );
}
