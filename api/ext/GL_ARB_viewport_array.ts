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
export const SCISSOR_BOX = 0xc10;
export const VIEWPORT = 0xba2;
export const DEPTH_RANGE = 0xb70;
export const SCISSOR_TEST = 0xc11;
export const MAX_VIEWPORTS = 0x825b;
export const VIEWPORT_SUBPIXEL_BITS = 0x825c;
export const VIEWPORT_BOUNDS_RANGE = 0x825d;
export const LAYER_PROVOKING_VERTEX = 0x825e;
export const VIEWPORT_INDEX_PROVOKING_VERTEX = 0x825f;
export const UNDEFINED_VERTEX = 0x8260;
export const FIRST_VERTEX_CONVENTION = 0x8e4d;
export const LAST_VERTEX_CONVENTION = 0x8e4e;
export const PROVOKING_VERTEX = 0x8e4f;

/// Commands

export const def_glViewportArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glViewportArrayv!: Deno.UnsafeFnPointer<typeof def_glViewportArrayv>;

export function ViewportArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glViewportArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glViewportIndexedf = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glViewportIndexedf!: Deno.UnsafeFnPointer<typeof def_glViewportIndexedf>;

export function ViewportIndexedf(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  w: GLfloat,
  h: GLfloat,
): void {
  fn_glViewportIndexedf.call(
    index,
    x,
    y,
    w,
    h,
  );
}

export const def_glViewportIndexedfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glViewportIndexedfv!: Deno.UnsafeFnPointer<
  typeof def_glViewportIndexedfv
>;

export function ViewportIndexedfv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glViewportIndexedfv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glScissorArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glScissorArrayv!: Deno.UnsafeFnPointer<typeof def_glScissorArrayv>;

export function ScissorArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glScissorArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glScissorIndexed = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScissorIndexed!: Deno.UnsafeFnPointer<typeof def_glScissorIndexed>;

export function ScissorIndexed(
  index: GLuint,
  left: GLint,
  bottom: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glScissorIndexed.call(
    index,
    left,
    bottom,
    width,
    height,
  );
}

export const def_glScissorIndexedv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glScissorIndexedv!: Deno.UnsafeFnPointer<typeof def_glScissorIndexedv>;

export function ScissorIndexedv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glScissorIndexedv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDepthRangeArrayv!: Deno.UnsafeFnPointer<typeof def_glDepthRangeArrayv>;

export function DepthRangeArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glDepthRangeArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeIndexed = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glDepthRangeIndexed!: Deno.UnsafeFnPointer<
  typeof def_glDepthRangeIndexed
>;

export function DepthRangeIndexed(
  index: GLuint,
  n: GLdouble,
  f: GLdouble,
): void {
  fn_glDepthRangeIndexed.call(
    index,
    n,
    f,
  );
}

export const def_glGetFloati_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloati_v!: Deno.UnsafeFnPointer<typeof def_glGetFloati_v>;

export function GetFloati_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetFloati_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetDoublei_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDoublei_v!: Deno.UnsafeFnPointer<typeof def_glGetDoublei_v>;

export function GetDoublei_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetDoublei_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glDepthRangeArraydvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDepthRangeArraydvNV!: Deno.UnsafeFnPointer<
  typeof def_glDepthRangeArraydvNV
>;

export function DepthRangeArraydvNV(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glDepthRangeArraydvNV.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeIndexeddNV = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glDepthRangeIndexeddNV!: Deno.UnsafeFnPointer<
  typeof def_glDepthRangeIndexeddNV
>;

export function DepthRangeIndexeddNV(
  index: GLuint,
  n: GLdouble,
  f: GLdouble,
): void {
  fn_glDepthRangeIndexeddNV.call(
    index,
    n,
    f,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glViewportArrayv = new Deno.UnsafeFnPointer(
    proc("glViewportArrayv"),
    def_glViewportArrayv,
  );
  fn_glViewportIndexedf = new Deno.UnsafeFnPointer(
    proc("glViewportIndexedf"),
    def_glViewportIndexedf,
  );
  fn_glViewportIndexedfv = new Deno.UnsafeFnPointer(
    proc("glViewportIndexedfv"),
    def_glViewportIndexedfv,
  );
  fn_glScissorArrayv = new Deno.UnsafeFnPointer(
    proc("glScissorArrayv"),
    def_glScissorArrayv,
  );
  fn_glScissorIndexed = new Deno.UnsafeFnPointer(
    proc("glScissorIndexed"),
    def_glScissorIndexed,
  );
  fn_glScissorIndexedv = new Deno.UnsafeFnPointer(
    proc("glScissorIndexedv"),
    def_glScissorIndexedv,
  );
  fn_glDepthRangeArrayv = new Deno.UnsafeFnPointer(
    proc("glDepthRangeArrayv"),
    def_glDepthRangeArrayv,
  );
  fn_glDepthRangeIndexed = new Deno.UnsafeFnPointer(
    proc("glDepthRangeIndexed"),
    def_glDepthRangeIndexed,
  );
  fn_glGetFloati_v = new Deno.UnsafeFnPointer(
    proc("glGetFloati_v"),
    def_glGetFloati_v,
  );
  fn_glGetDoublei_v = new Deno.UnsafeFnPointer(
    proc("glGetDoublei_v"),
    def_glGetDoublei_v,
  );
  fn_glDepthRangeArraydvNV = new Deno.UnsafeFnPointer(
    proc("glDepthRangeArraydvNV"),
    def_glDepthRangeArraydvNV,
  );
  fn_glDepthRangeIndexeddNV = new Deno.UnsafeFnPointer(
    proc("glDepthRangeIndexeddNV"),
    def_glDepthRangeIndexeddNV,
  );
}
