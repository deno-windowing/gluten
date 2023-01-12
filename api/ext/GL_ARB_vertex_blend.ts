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
export const MAX_VERTEX_UNITS_ARB = 0x86a4;
export const ACTIVE_VERTEX_UNITS_ARB = 0x86a5;
export const WEIGHT_SUM_UNITY_ARB = 0x86a6;
export const VERTEX_BLEND_ARB = 0x86a7;
export const CURRENT_WEIGHT_ARB = 0x86a8;
export const WEIGHT_ARRAY_TYPE_ARB = 0x86a9;
export const WEIGHT_ARRAY_STRIDE_ARB = 0x86aa;
export const WEIGHT_ARRAY_SIZE_ARB = 0x86ab;
export const WEIGHT_ARRAY_POINTER_ARB = 0x86ac;
export const WEIGHT_ARRAY_ARB = 0x86ad;
export const MODELVIEW0_ARB = 0x1700;
export const MODELVIEW1_ARB = 0x850a;
export const MODELVIEW2_ARB = 0x8722;
export const MODELVIEW3_ARB = 0x8723;
export const MODELVIEW4_ARB = 0x8724;
export const MODELVIEW5_ARB = 0x8725;
export const MODELVIEW6_ARB = 0x8726;
export const MODELVIEW7_ARB = 0x8727;
export const MODELVIEW8_ARB = 0x8728;
export const MODELVIEW9_ARB = 0x8729;
export const MODELVIEW10_ARB = 0x872a;
export const MODELVIEW11_ARB = 0x872b;
export const MODELVIEW12_ARB = 0x872c;
export const MODELVIEW13_ARB = 0x872d;
export const MODELVIEW14_ARB = 0x872e;
export const MODELVIEW15_ARB = 0x872f;
export const MODELVIEW16_ARB = 0x8730;
export const MODELVIEW17_ARB = 0x8731;
export const MODELVIEW18_ARB = 0x8732;
export const MODELVIEW19_ARB = 0x8733;
export const MODELVIEW20_ARB = 0x8734;
export const MODELVIEW21_ARB = 0x8735;
export const MODELVIEW22_ARB = 0x8736;
export const MODELVIEW23_ARB = 0x8737;
export const MODELVIEW24_ARB = 0x8738;
export const MODELVIEW25_ARB = 0x8739;
export const MODELVIEW26_ARB = 0x873a;
export const MODELVIEW27_ARB = 0x873b;
export const MODELVIEW28_ARB = 0x873c;
export const MODELVIEW29_ARB = 0x873d;
export const MODELVIEW30_ARB = 0x873e;
export const MODELVIEW31_ARB = 0x873f;

/// Commands

export const def_glWeightbvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightbvARB!: Deno.UnsafeFnPointer<typeof def_glWeightbvARB>;

export function WeightbvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightbvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightsvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightsvARB!: Deno.UnsafeFnPointer<typeof def_glWeightsvARB>;

export function WeightsvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightsvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightivARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightivARB!: Deno.UnsafeFnPointer<typeof def_glWeightivARB>;

export function WeightivARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightivARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightfvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightfvARB!: Deno.UnsafeFnPointer<typeof def_glWeightfvARB>;

export function WeightfvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightfvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightdvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightdvARB!: Deno.UnsafeFnPointer<typeof def_glWeightdvARB>;

export function WeightdvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightdvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightubvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightubvARB!: Deno.UnsafeFnPointer<typeof def_glWeightubvARB>;

export function WeightubvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightubvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightusvARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightusvARB!: Deno.UnsafeFnPointer<typeof def_glWeightusvARB>;

export function WeightusvARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightusvARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightuivARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightuivARB!: Deno.UnsafeFnPointer<typeof def_glWeightuivARB>;

export function WeightuivARB(
  size: GLint,
  weights: Buffer,
): void {
  fn_glWeightuivARB.call(
    size,
    bufferToFFI(weights),
  );
}

export const def_glWeightPointerARB = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glWeightPointerARB!: Deno.UnsafeFnPointer<typeof def_glWeightPointerARB>;

export function WeightPointerARB(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glWeightPointerARB.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glVertexBlendARB = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glVertexBlendARB!: Deno.UnsafeFnPointer<typeof def_glVertexBlendARB>;

export function VertexBlendARB(
  count: GLint,
): void {
  fn_glVertexBlendARB.call(
    count,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glWeightbvARB = new Deno.UnsafeFnPointer(
    proc("glWeightbvARB"),
    def_glWeightbvARB,
  );
  fn_glWeightsvARB = new Deno.UnsafeFnPointer(
    proc("glWeightsvARB"),
    def_glWeightsvARB,
  );
  fn_glWeightivARB = new Deno.UnsafeFnPointer(
    proc("glWeightivARB"),
    def_glWeightivARB,
  );
  fn_glWeightfvARB = new Deno.UnsafeFnPointer(
    proc("glWeightfvARB"),
    def_glWeightfvARB,
  );
  fn_glWeightdvARB = new Deno.UnsafeFnPointer(
    proc("glWeightdvARB"),
    def_glWeightdvARB,
  );
  fn_glWeightubvARB = new Deno.UnsafeFnPointer(
    proc("glWeightubvARB"),
    def_glWeightubvARB,
  );
  fn_glWeightusvARB = new Deno.UnsafeFnPointer(
    proc("glWeightusvARB"),
    def_glWeightusvARB,
  );
  fn_glWeightuivARB = new Deno.UnsafeFnPointer(
    proc("glWeightuivARB"),
    def_glWeightuivARB,
  );
  fn_glWeightPointerARB = new Deno.UnsafeFnPointer(
    proc("glWeightPointerARB"),
    def_glWeightPointerARB,
  );
  fn_glVertexBlendARB = new Deno.UnsafeFnPointer(
    proc("glVertexBlendARB"),
    def_glVertexBlendARB,
  );
}
