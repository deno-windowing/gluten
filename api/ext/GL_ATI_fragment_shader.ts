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
export const FRAGMENT_SHADER_ATI = 0x8920;
export const REG_0_ATI = 0x8921;
export const REG_1_ATI = 0x8922;
export const REG_2_ATI = 0x8923;
export const REG_3_ATI = 0x8924;
export const REG_4_ATI = 0x8925;
export const REG_5_ATI = 0x8926;
export const REG_6_ATI = 0x8927;
export const REG_7_ATI = 0x8928;
export const REG_8_ATI = 0x8929;
export const REG_9_ATI = 0x892a;
export const REG_10_ATI = 0x892b;
export const REG_11_ATI = 0x892c;
export const REG_12_ATI = 0x892d;
export const REG_13_ATI = 0x892e;
export const REG_14_ATI = 0x892f;
export const REG_15_ATI = 0x8930;
export const REG_16_ATI = 0x8931;
export const REG_17_ATI = 0x8932;
export const REG_18_ATI = 0x8933;
export const REG_19_ATI = 0x8934;
export const REG_20_ATI = 0x8935;
export const REG_21_ATI = 0x8936;
export const REG_22_ATI = 0x8937;
export const REG_23_ATI = 0x8938;
export const REG_24_ATI = 0x8939;
export const REG_25_ATI = 0x893a;
export const REG_26_ATI = 0x893b;
export const REG_27_ATI = 0x893c;
export const REG_28_ATI = 0x893d;
export const REG_29_ATI = 0x893e;
export const REG_30_ATI = 0x893f;
export const REG_31_ATI = 0x8940;
export const CON_0_ATI = 0x8941;
export const CON_1_ATI = 0x8942;
export const CON_2_ATI = 0x8943;
export const CON_3_ATI = 0x8944;
export const CON_4_ATI = 0x8945;
export const CON_5_ATI = 0x8946;
export const CON_6_ATI = 0x8947;
export const CON_7_ATI = 0x8948;
export const CON_8_ATI = 0x8949;
export const CON_9_ATI = 0x894a;
export const CON_10_ATI = 0x894b;
export const CON_11_ATI = 0x894c;
export const CON_12_ATI = 0x894d;
export const CON_13_ATI = 0x894e;
export const CON_14_ATI = 0x894f;
export const CON_15_ATI = 0x8950;
export const CON_16_ATI = 0x8951;
export const CON_17_ATI = 0x8952;
export const CON_18_ATI = 0x8953;
export const CON_19_ATI = 0x8954;
export const CON_20_ATI = 0x8955;
export const CON_21_ATI = 0x8956;
export const CON_22_ATI = 0x8957;
export const CON_23_ATI = 0x8958;
export const CON_24_ATI = 0x8959;
export const CON_25_ATI = 0x895a;
export const CON_26_ATI = 0x895b;
export const CON_27_ATI = 0x895c;
export const CON_28_ATI = 0x895d;
export const CON_29_ATI = 0x895e;
export const CON_30_ATI = 0x895f;
export const CON_31_ATI = 0x8960;
export const MOV_ATI = 0x8961;
export const ADD_ATI = 0x8963;
export const MUL_ATI = 0x8964;
export const SUB_ATI = 0x8965;
export const DOT3_ATI = 0x8966;
export const DOT4_ATI = 0x8967;
export const MAD_ATI = 0x8968;
export const LERP_ATI = 0x8969;
export const CND_ATI = 0x896a;
export const CND0_ATI = 0x896b;
export const DOT2_ADD_ATI = 0x896c;
export const SECONDARY_INTERPOLATOR_ATI = 0x896d;
export const NUM_FRAGMENT_REGISTERS_ATI = 0x896e;
export const NUM_FRAGMENT_CONSTANTS_ATI = 0x896f;
export const NUM_PASSES_ATI = 0x8970;
export const NUM_INSTRUCTIONS_PER_PASS_ATI = 0x8971;
export const NUM_INSTRUCTIONS_TOTAL_ATI = 0x8972;
export const NUM_INPUT_INTERPOLATOR_COMPONENTS_ATI = 0x8973;
export const NUM_LOOPBACK_COMPONENTS_ATI = 0x8974;
export const COLOR_ALPHA_PAIRING_ATI = 0x8975;
export const SWIZZLE_STR_ATI = 0x8976;
export const SWIZZLE_STQ_ATI = 0x8977;
export const SWIZZLE_STR_DR_ATI = 0x8978;
export const SWIZZLE_STQ_DQ_ATI = 0x8979;
export const SWIZZLE_STRQ_ATI = 0x897a;
export const SWIZZLE_STRQ_DQ_ATI = 0x897b;
export const RED_BIT_ATI = 0x1;
export const GREEN_BIT_ATI = 0x2;
export const BLUE_BIT_ATI = 0x4;
export const GL_2X_BIT_ATI = 0x1;
export const GL_4X_BIT_ATI = 0x2;
export const GL_8X_BIT_ATI = 0x4;
export const HALF_BIT_ATI = 0x8;
export const QUARTER_BIT_ATI = 0x10;
export const EIGHTH_BIT_ATI = 0x20;
export const SATURATE_BIT_ATI = 0x40;
export const COMP_BIT_ATI = 0x2;
export const NEGATE_BIT_ATI = 0x4;
export const BIAS_BIT_ATI = 0x8;

/// Commands

export const def_glGenFragmentShadersATI = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glGenFragmentShadersATI!: Deno.UnsafeFnPointer<typeof def_glGenFragmentShadersATI>;

export function GenFragmentShadersATI(
  range: GLuint,
): GLuint {
  return fn_glGenFragmentShadersATI.call(
    range,
  );
}

export const def_glBindFragmentShaderATI = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindFragmentShaderATI!: Deno.UnsafeFnPointer<typeof def_glBindFragmentShaderATI>;

export function BindFragmentShaderATI(
  id: GLuint,
): void {
  fn_glBindFragmentShaderATI.call(
    id,
  );
}

export const def_glDeleteFragmentShaderATI = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeleteFragmentShaderATI!: Deno.UnsafeFnPointer<typeof def_glDeleteFragmentShaderATI>;

export function DeleteFragmentShaderATI(
  id: GLuint,
): void {
  fn_glDeleteFragmentShaderATI.call(
    id,
  );
}

export const def_glBeginFragmentShaderATI = {
  parameters: [],
  result: "void",
} as const;

let fn_glBeginFragmentShaderATI!: Deno.UnsafeFnPointer<typeof def_glBeginFragmentShaderATI>;

export function BeginFragmentShaderATI(): void {
  fn_glBeginFragmentShaderATI.call();
}

export const def_glEndFragmentShaderATI = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndFragmentShaderATI!: Deno.UnsafeFnPointer<typeof def_glEndFragmentShaderATI>;

export function EndFragmentShaderATI(): void {
  fn_glEndFragmentShaderATI.call();
}

export const def_glPassTexCoordATI = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glPassTexCoordATI!: Deno.UnsafeFnPointer<typeof def_glPassTexCoordATI>;

export function PassTexCoordATI(
  dst: GLuint,
  coord: GLuint,
  swizzle: GLenum,
): void {
  fn_glPassTexCoordATI.call(
    dst,
    coord,
    swizzle,
  );
}

export const def_glSampleMapATI = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glSampleMapATI!: Deno.UnsafeFnPointer<typeof def_glSampleMapATI>;

export function SampleMapATI(
  dst: GLuint,
  interp: GLuint,
  swizzle: GLenum,
): void {
  fn_glSampleMapATI.call(
    dst,
    interp,
    swizzle,
  );
}

export const def_glColorFragmentOp1ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glColorFragmentOp1ATI!: Deno.UnsafeFnPointer<typeof def_glColorFragmentOp1ATI>;

export function ColorFragmentOp1ATI(
  op: GLenum,
  dst: GLuint,
  dstMask: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
): void {
  fn_glColorFragmentOp1ATI.call(
    op,
    dst,
    dstMask,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
  );
}

export const def_glColorFragmentOp2ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glColorFragmentOp2ATI!: Deno.UnsafeFnPointer<typeof def_glColorFragmentOp2ATI>;

export function ColorFragmentOp2ATI(
  op: GLenum,
  dst: GLuint,
  dstMask: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
  arg2: GLuint,
  arg2Rep: GLuint,
  arg2Mod: GLuint,
): void {
  fn_glColorFragmentOp2ATI.call(
    op,
    dst,
    dstMask,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
    arg2,
    arg2Rep,
    arg2Mod,
  );
}

export const def_glColorFragmentOp3ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glColorFragmentOp3ATI!: Deno.UnsafeFnPointer<typeof def_glColorFragmentOp3ATI>;

export function ColorFragmentOp3ATI(
  op: GLenum,
  dst: GLuint,
  dstMask: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
  arg2: GLuint,
  arg2Rep: GLuint,
  arg2Mod: GLuint,
  arg3: GLuint,
  arg3Rep: GLuint,
  arg3Mod: GLuint,
): void {
  fn_glColorFragmentOp3ATI.call(
    op,
    dst,
    dstMask,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
    arg2,
    arg2Rep,
    arg2Mod,
    arg3,
    arg3Rep,
    arg3Mod,
  );
}

export const def_glAlphaFragmentOp1ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glAlphaFragmentOp1ATI!: Deno.UnsafeFnPointer<typeof def_glAlphaFragmentOp1ATI>;

export function AlphaFragmentOp1ATI(
  op: GLenum,
  dst: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
): void {
  fn_glAlphaFragmentOp1ATI.call(
    op,
    dst,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
  );
}

export const def_glAlphaFragmentOp2ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glAlphaFragmentOp2ATI!: Deno.UnsafeFnPointer<typeof def_glAlphaFragmentOp2ATI>;

export function AlphaFragmentOp2ATI(
  op: GLenum,
  dst: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
  arg2: GLuint,
  arg2Rep: GLuint,
  arg2Mod: GLuint,
): void {
  fn_glAlphaFragmentOp2ATI.call(
    op,
    dst,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
    arg2,
    arg2Rep,
    arg2Mod,
  );
}

export const def_glAlphaFragmentOp3ATI = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glAlphaFragmentOp3ATI!: Deno.UnsafeFnPointer<typeof def_glAlphaFragmentOp3ATI>;

export function AlphaFragmentOp3ATI(
  op: GLenum,
  dst: GLuint,
  dstMod: GLuint,
  arg1: GLuint,
  arg1Rep: GLuint,
  arg1Mod: GLuint,
  arg2: GLuint,
  arg2Rep: GLuint,
  arg2Mod: GLuint,
  arg3: GLuint,
  arg3Rep: GLuint,
  arg3Mod: GLuint,
): void {
  fn_glAlphaFragmentOp3ATI.call(
    op,
    dst,
    dstMod,
    arg1,
    arg1Rep,
    arg1Mod,
    arg2,
    arg2Rep,
    arg2Mod,
    arg3,
    arg3Rep,
    arg3Mod,
  );
}

export const def_glSetFragmentShaderConstantATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glSetFragmentShaderConstantATI!: Deno.UnsafeFnPointer<typeof def_glSetFragmentShaderConstantATI>;

export function SetFragmentShaderConstantATI(
  dst: GLuint,
  value: Buffer,
): void {
  fn_glSetFragmentShaderConstantATI.call(
    dst,
    bufferToFFI(value),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenFragmentShadersATI = new Deno.UnsafeFnPointer(proc("glGenFragmentShadersATI"), def_glGenFragmentShadersATI);
  fn_glBindFragmentShaderATI = new Deno.UnsafeFnPointer(proc("glBindFragmentShaderATI"), def_glBindFragmentShaderATI);
  fn_glDeleteFragmentShaderATI = new Deno.UnsafeFnPointer(proc("glDeleteFragmentShaderATI"), def_glDeleteFragmentShaderATI);
  fn_glBeginFragmentShaderATI = new Deno.UnsafeFnPointer(proc("glBeginFragmentShaderATI"), def_glBeginFragmentShaderATI);
  fn_glEndFragmentShaderATI = new Deno.UnsafeFnPointer(proc("glEndFragmentShaderATI"), def_glEndFragmentShaderATI);
  fn_glPassTexCoordATI = new Deno.UnsafeFnPointer(proc("glPassTexCoordATI"), def_glPassTexCoordATI);
  fn_glSampleMapATI = new Deno.UnsafeFnPointer(proc("glSampleMapATI"), def_glSampleMapATI);
  fn_glColorFragmentOp1ATI = new Deno.UnsafeFnPointer(proc("glColorFragmentOp1ATI"), def_glColorFragmentOp1ATI);
  fn_glColorFragmentOp2ATI = new Deno.UnsafeFnPointer(proc("glColorFragmentOp2ATI"), def_glColorFragmentOp2ATI);
  fn_glColorFragmentOp3ATI = new Deno.UnsafeFnPointer(proc("glColorFragmentOp3ATI"), def_glColorFragmentOp3ATI);
  fn_glAlphaFragmentOp1ATI = new Deno.UnsafeFnPointer(proc("glAlphaFragmentOp1ATI"), def_glAlphaFragmentOp1ATI);
  fn_glAlphaFragmentOp2ATI = new Deno.UnsafeFnPointer(proc("glAlphaFragmentOp2ATI"), def_glAlphaFragmentOp2ATI);
  fn_glAlphaFragmentOp3ATI = new Deno.UnsafeFnPointer(proc("glAlphaFragmentOp3ATI"), def_glAlphaFragmentOp3ATI);
  fn_glSetFragmentShaderConstantATI = new Deno.UnsafeFnPointer(proc("glSetFragmentShaderConstantATI"), def_glSetFragmentShaderConstantATI);
}
