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
export const HISTOGRAM_EXT = 0x8024;
export const PROXY_HISTOGRAM_EXT = 0x8025;
export const HISTOGRAM_WIDTH_EXT = 0x8026;
export const HISTOGRAM_FORMAT_EXT = 0x8027;
export const HISTOGRAM_RED_SIZE_EXT = 0x8028;
export const HISTOGRAM_GREEN_SIZE_EXT = 0x8029;
export const HISTOGRAM_BLUE_SIZE_EXT = 0x802a;
export const HISTOGRAM_ALPHA_SIZE_EXT = 0x802b;
export const HISTOGRAM_LUMINANCE_SIZE_EXT = 0x802c;
export const HISTOGRAM_SINK_EXT = 0x802d;
export const MINMAX_EXT = 0x802e;
export const MINMAX_FORMAT_EXT = 0x802f;
export const MINMAX_SINK_EXT = 0x8030;
export const TABLE_TOO_LARGE_EXT = 0x8031;

/// Commands

export const def_glGetHistogramEXT = {
  parameters: ["u32", "u8", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramEXT!: Deno.UnsafeFnPointer<typeof def_glGetHistogramEXT>;

export function GetHistogramEXT(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  values: Buffer,
): void {
  fn_glGetHistogramEXT.call(
    target,
    reset,
    format,
    type,
    bufferToFFI(values),
  );
}

export const def_glGetHistogramParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramParameterfvEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetHistogramParameterfvEXT
>;

export function GetHistogramParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetHistogramParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetHistogramParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramParameterivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetHistogramParameterivEXT
>;

export function GetHistogramParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetHistogramParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMinmaxEXT = {
  parameters: ["u32", "u8", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmaxEXT!: Deno.UnsafeFnPointer<typeof def_glGetMinmaxEXT>;

export function GetMinmaxEXT(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  values: Buffer,
): void {
  fn_glGetMinmaxEXT.call(
    target,
    reset,
    format,
    type,
    bufferToFFI(values),
  );
}

export const def_glGetMinmaxParameterfvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmaxParameterfvEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetMinmaxParameterfvEXT
>;

export function GetMinmaxParameterfvEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMinmaxParameterfvEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMinmaxParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMinmaxParameterivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetMinmaxParameterivEXT
>;

export function GetMinmaxParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMinmaxParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glHistogramEXT = {
  parameters: ["u32", "i32", "u32", "u8"],
  result: "void",
} as const;

let fn_glHistogramEXT!: Deno.UnsafeFnPointer<typeof def_glHistogramEXT>;

export function HistogramEXT(
  target: GLenum,
  width: GLsizei,
  internalformat: GLenum,
  sink: GLboolean,
): void {
  fn_glHistogramEXT.call(
    target,
    width,
    internalformat,
    sink,
  );
}

export const def_glMinmaxEXT = {
  parameters: ["u32", "u32", "u8"],
  result: "void",
} as const;

let fn_glMinmaxEXT!: Deno.UnsafeFnPointer<typeof def_glMinmaxEXT>;

export function MinmaxEXT(
  target: GLenum,
  internalformat: GLenum,
  sink: GLboolean,
): void {
  fn_glMinmaxEXT.call(
    target,
    internalformat,
    sink,
  );
}

export const def_glResetHistogramEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glResetHistogramEXT!: Deno.UnsafeFnPointer<
  typeof def_glResetHistogramEXT
>;

export function ResetHistogramEXT(
  target: GLenum,
): void {
  fn_glResetHistogramEXT.call(
    target,
  );
}

export const def_glResetMinmaxEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glResetMinmaxEXT!: Deno.UnsafeFnPointer<typeof def_glResetMinmaxEXT>;

export function ResetMinmaxEXT(
  target: GLenum,
): void {
  fn_glResetMinmaxEXT.call(
    target,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetHistogramEXT = new Deno.UnsafeFnPointer(
    proc("glGetHistogramEXT"),
    def_glGetHistogramEXT,
  );
  fn_glGetHistogramParameterfvEXT = new Deno.UnsafeFnPointer(
    proc("glGetHistogramParameterfvEXT"),
    def_glGetHistogramParameterfvEXT,
  );
  fn_glGetHistogramParameterivEXT = new Deno.UnsafeFnPointer(
    proc("glGetHistogramParameterivEXT"),
    def_glGetHistogramParameterivEXT,
  );
  fn_glGetMinmaxEXT = new Deno.UnsafeFnPointer(
    proc("glGetMinmaxEXT"),
    def_glGetMinmaxEXT,
  );
  fn_glGetMinmaxParameterfvEXT = new Deno.UnsafeFnPointer(
    proc("glGetMinmaxParameterfvEXT"),
    def_glGetMinmaxParameterfvEXT,
  );
  fn_glGetMinmaxParameterivEXT = new Deno.UnsafeFnPointer(
    proc("glGetMinmaxParameterivEXT"),
    def_glGetMinmaxParameterivEXT,
  );
  fn_glHistogramEXT = new Deno.UnsafeFnPointer(
    proc("glHistogramEXT"),
    def_glHistogramEXT,
  );
  fn_glMinmaxEXT = new Deno.UnsafeFnPointer(
    proc("glMinmaxEXT"),
    def_glMinmaxEXT,
  );
  fn_glResetHistogramEXT = new Deno.UnsafeFnPointer(
    proc("glResetHistogramEXT"),
    def_glResetHistogramEXT,
  );
  fn_glResetMinmaxEXT = new Deno.UnsafeFnPointer(
    proc("glResetMinmaxEXT"),
    def_glResetMinmaxEXT,
  );
}
