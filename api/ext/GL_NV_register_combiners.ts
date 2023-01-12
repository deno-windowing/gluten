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
export const REGISTER_COMBINERS_NV = 0x8522;
export const VARIABLE_A_NV = 0x8523;
export const VARIABLE_B_NV = 0x8524;
export const VARIABLE_C_NV = 0x8525;
export const VARIABLE_D_NV = 0x8526;
export const VARIABLE_E_NV = 0x8527;
export const VARIABLE_F_NV = 0x8528;
export const VARIABLE_G_NV = 0x8529;
export const CONSTANT_COLOR0_NV = 0x852a;
export const CONSTANT_COLOR1_NV = 0x852b;
export const PRIMARY_COLOR_NV = 0x852c;
export const SECONDARY_COLOR_NV = 0x852d;
export const SPARE0_NV = 0x852e;
export const SPARE1_NV = 0x852f;
export const DISCARD_NV = 0x8530;
export const E_TIMES_F_NV = 0x8531;
export const SPARE0_PLUS_SECONDARY_COLOR_NV = 0x8532;
export const UNSIGNED_IDENTITY_NV = 0x8536;
export const UNSIGNED_INVERT_NV = 0x8537;
export const EXPAND_NORMAL_NV = 0x8538;
export const EXPAND_NEGATE_NV = 0x8539;
export const HALF_BIAS_NORMAL_NV = 0x853a;
export const HALF_BIAS_NEGATE_NV = 0x853b;
export const SIGNED_IDENTITY_NV = 0x853c;
export const SIGNED_NEGATE_NV = 0x853d;
export const SCALE_BY_TWO_NV = 0x853e;
export const SCALE_BY_FOUR_NV = 0x853f;
export const SCALE_BY_ONE_HALF_NV = 0x8540;
export const BIAS_BY_NEGATIVE_ONE_HALF_NV = 0x8541;
export const COMBINER_INPUT_NV = 0x8542;
export const COMBINER_MAPPING_NV = 0x8543;
export const COMBINER_COMPONENT_USAGE_NV = 0x8544;
export const COMBINER_AB_DOT_PRODUCT_NV = 0x8545;
export const COMBINER_CD_DOT_PRODUCT_NV = 0x8546;
export const COMBINER_MUX_SUM_NV = 0x8547;
export const COMBINER_SCALE_NV = 0x8548;
export const COMBINER_BIAS_NV = 0x8549;
export const COMBINER_AB_OUTPUT_NV = 0x854a;
export const COMBINER_CD_OUTPUT_NV = 0x854b;
export const COMBINER_SUM_OUTPUT_NV = 0x854c;
export const MAX_GENERAL_COMBINERS_NV = 0x854d;
export const NUM_GENERAL_COMBINERS_NV = 0x854e;
export const COLOR_SUM_CLAMP_NV = 0x854f;
export const COMBINER0_NV = 0x8550;
export const COMBINER1_NV = 0x8551;
export const COMBINER2_NV = 0x8552;
export const COMBINER3_NV = 0x8553;
export const COMBINER4_NV = 0x8554;
export const COMBINER5_NV = 0x8555;
export const COMBINER6_NV = 0x8556;
export const COMBINER7_NV = 0x8557;
export const TEXTURE0_ARB = 0x84c0;
export const TEXTURE1_ARB = 0x84c1;
export const ZERO = 0x0;
export const NONE = 0x0;
export const FOG = 0xb60;

/// Commands

export const def_glCombinerParameterfvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glCombinerParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glCombinerParameterfvNV
>;

export function CombinerParameterfvNV(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glCombinerParameterfvNV.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glCombinerParameterfNV = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glCombinerParameterfNV!: Deno.UnsafeFnPointer<
  typeof def_glCombinerParameterfNV
>;

export function CombinerParameterfNV(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glCombinerParameterfNV.call(
    pname,
    param,
  );
}

export const def_glCombinerParameterivNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glCombinerParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glCombinerParameterivNV
>;

export function CombinerParameterivNV(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glCombinerParameterivNV.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glCombinerParameteriNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glCombinerParameteriNV!: Deno.UnsafeFnPointer<
  typeof def_glCombinerParameteriNV
>;

export function CombinerParameteriNV(
  pname: GLenum,
  param: GLint,
): void {
  fn_glCombinerParameteriNV.call(
    pname,
    param,
  );
}

export const def_glCombinerInputNV = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glCombinerInputNV!: Deno.UnsafeFnPointer<typeof def_glCombinerInputNV>;

export function CombinerInputNV(
  stage: GLenum,
  portion: GLenum,
  variable: GLenum,
  input: GLenum,
  mapping: GLenum,
  componentUsage: GLenum,
): void {
  fn_glCombinerInputNV.call(
    stage,
    portion,
    variable,
    input,
    mapping,
    componentUsage,
  );
}

export const def_glCombinerOutputNV = {
  parameters: [
    "u32",
    "u32",
    "u32",
    "u32",
    "u32",
    "u32",
    "u32",
    "u8",
    "u8",
    "u8",
  ],
  result: "void",
} as const;

let fn_glCombinerOutputNV!: Deno.UnsafeFnPointer<typeof def_glCombinerOutputNV>;

export function CombinerOutputNV(
  stage: GLenum,
  portion: GLenum,
  abOutput: GLenum,
  cdOutput: GLenum,
  sumOutput: GLenum,
  scale: GLenum,
  bias: GLenum,
  abDotProduct: GLboolean,
  cdDotProduct: GLboolean,
  muxSum: GLboolean,
): void {
  fn_glCombinerOutputNV.call(
    stage,
    portion,
    abOutput,
    cdOutput,
    sumOutput,
    scale,
    bias,
    abDotProduct,
    cdDotProduct,
    muxSum,
  );
}

export const def_glFinalCombinerInputNV = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glFinalCombinerInputNV!: Deno.UnsafeFnPointer<
  typeof def_glFinalCombinerInputNV
>;

export function FinalCombinerInputNV(
  variable: GLenum,
  input: GLenum,
  mapping: GLenum,
  componentUsage: GLenum,
): void {
  fn_glFinalCombinerInputNV.call(
    variable,
    input,
    mapping,
    componentUsage,
  );
}

export const def_glGetCombinerInputParameterfvNV = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetCombinerInputParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetCombinerInputParameterfvNV
>;

export function GetCombinerInputParameterfvNV(
  stage: GLenum,
  portion: GLenum,
  variable: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetCombinerInputParameterfvNV.call(
    stage,
    portion,
    variable,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetCombinerInputParameterivNV = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetCombinerInputParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetCombinerInputParameterivNV
>;

export function GetCombinerInputParameterivNV(
  stage: GLenum,
  portion: GLenum,
  variable: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetCombinerInputParameterivNV.call(
    stage,
    portion,
    variable,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetCombinerOutputParameterfvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetCombinerOutputParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetCombinerOutputParameterfvNV
>;

export function GetCombinerOutputParameterfvNV(
  stage: GLenum,
  portion: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetCombinerOutputParameterfvNV.call(
    stage,
    portion,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetCombinerOutputParameterivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetCombinerOutputParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetCombinerOutputParameterivNV
>;

export function GetCombinerOutputParameterivNV(
  stage: GLenum,
  portion: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetCombinerOutputParameterivNV.call(
    stage,
    portion,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFinalCombinerInputParameterfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFinalCombinerInputParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetFinalCombinerInputParameterfvNV
>;

export function GetFinalCombinerInputParameterfvNV(
  variable: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFinalCombinerInputParameterfvNV.call(
    variable,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFinalCombinerInputParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFinalCombinerInputParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetFinalCombinerInputParameterivNV
>;

export function GetFinalCombinerInputParameterivNV(
  variable: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFinalCombinerInputParameterivNV.call(
    variable,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCombinerParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glCombinerParameterfvNV"),
    def_glCombinerParameterfvNV,
  );
  fn_glCombinerParameterfNV = new Deno.UnsafeFnPointer(
    proc("glCombinerParameterfNV"),
    def_glCombinerParameterfNV,
  );
  fn_glCombinerParameterivNV = new Deno.UnsafeFnPointer(
    proc("glCombinerParameterivNV"),
    def_glCombinerParameterivNV,
  );
  fn_glCombinerParameteriNV = new Deno.UnsafeFnPointer(
    proc("glCombinerParameteriNV"),
    def_glCombinerParameteriNV,
  );
  fn_glCombinerInputNV = new Deno.UnsafeFnPointer(
    proc("glCombinerInputNV"),
    def_glCombinerInputNV,
  );
  fn_glCombinerOutputNV = new Deno.UnsafeFnPointer(
    proc("glCombinerOutputNV"),
    def_glCombinerOutputNV,
  );
  fn_glFinalCombinerInputNV = new Deno.UnsafeFnPointer(
    proc("glFinalCombinerInputNV"),
    def_glFinalCombinerInputNV,
  );
  fn_glGetCombinerInputParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetCombinerInputParameterfvNV"),
    def_glGetCombinerInputParameterfvNV,
  );
  fn_glGetCombinerInputParameterivNV = new Deno.UnsafeFnPointer(
    proc("glGetCombinerInputParameterivNV"),
    def_glGetCombinerInputParameterivNV,
  );
  fn_glGetCombinerOutputParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetCombinerOutputParameterfvNV"),
    def_glGetCombinerOutputParameterfvNV,
  );
  fn_glGetCombinerOutputParameterivNV = new Deno.UnsafeFnPointer(
    proc("glGetCombinerOutputParameterivNV"),
    def_glGetCombinerOutputParameterivNV,
  );
  fn_glGetFinalCombinerInputParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetFinalCombinerInputParameterfvNV"),
    def_glGetFinalCombinerInputParameterfvNV,
  );
  fn_glGetFinalCombinerInputParameterivNV = new Deno.UnsafeFnPointer(
    proc("glGetFinalCombinerInputParameterivNV"),
    def_glGetFinalCombinerInputParameterivNV,
  );
}
