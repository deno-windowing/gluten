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
export const VERTEX_SHADER_EXT = 0x8780;
export const VERTEX_SHADER_BINDING_EXT = 0x8781;
export const OP_INDEX_EXT = 0x8782;
export const OP_NEGATE_EXT = 0x8783;
export const OP_DOT3_EXT = 0x8784;
export const OP_DOT4_EXT = 0x8785;
export const OP_MUL_EXT = 0x8786;
export const OP_ADD_EXT = 0x8787;
export const OP_MADD_EXT = 0x8788;
export const OP_FRAC_EXT = 0x8789;
export const OP_MAX_EXT = 0x878a;
export const OP_MIN_EXT = 0x878b;
export const OP_SET_GE_EXT = 0x878c;
export const OP_SET_LT_EXT = 0x878d;
export const OP_CLAMP_EXT = 0x878e;
export const OP_FLOOR_EXT = 0x878f;
export const OP_ROUND_EXT = 0x8790;
export const OP_EXP_BASE_2_EXT = 0x8791;
export const OP_LOG_BASE_2_EXT = 0x8792;
export const OP_POWER_EXT = 0x8793;
export const OP_RECIP_EXT = 0x8794;
export const OP_RECIP_SQRT_EXT = 0x8795;
export const OP_SUB_EXT = 0x8796;
export const OP_CROSS_PRODUCT_EXT = 0x8797;
export const OP_MULTIPLY_MATRIX_EXT = 0x8798;
export const OP_MOV_EXT = 0x8799;
export const OUTPUT_VERTEX_EXT = 0x879a;
export const OUTPUT_COLOR0_EXT = 0x879b;
export const OUTPUT_COLOR1_EXT = 0x879c;
export const OUTPUT_TEXTURE_COORD0_EXT = 0x879d;
export const OUTPUT_TEXTURE_COORD1_EXT = 0x879e;
export const OUTPUT_TEXTURE_COORD2_EXT = 0x879f;
export const OUTPUT_TEXTURE_COORD3_EXT = 0x87a0;
export const OUTPUT_TEXTURE_COORD4_EXT = 0x87a1;
export const OUTPUT_TEXTURE_COORD5_EXT = 0x87a2;
export const OUTPUT_TEXTURE_COORD6_EXT = 0x87a3;
export const OUTPUT_TEXTURE_COORD7_EXT = 0x87a4;
export const OUTPUT_TEXTURE_COORD8_EXT = 0x87a5;
export const OUTPUT_TEXTURE_COORD9_EXT = 0x87a6;
export const OUTPUT_TEXTURE_COORD10_EXT = 0x87a7;
export const OUTPUT_TEXTURE_COORD11_EXT = 0x87a8;
export const OUTPUT_TEXTURE_COORD12_EXT = 0x87a9;
export const OUTPUT_TEXTURE_COORD13_EXT = 0x87aa;
export const OUTPUT_TEXTURE_COORD14_EXT = 0x87ab;
export const OUTPUT_TEXTURE_COORD15_EXT = 0x87ac;
export const OUTPUT_TEXTURE_COORD16_EXT = 0x87ad;
export const OUTPUT_TEXTURE_COORD17_EXT = 0x87ae;
export const OUTPUT_TEXTURE_COORD18_EXT = 0x87af;
export const OUTPUT_TEXTURE_COORD19_EXT = 0x87b0;
export const OUTPUT_TEXTURE_COORD20_EXT = 0x87b1;
export const OUTPUT_TEXTURE_COORD21_EXT = 0x87b2;
export const OUTPUT_TEXTURE_COORD22_EXT = 0x87b3;
export const OUTPUT_TEXTURE_COORD23_EXT = 0x87b4;
export const OUTPUT_TEXTURE_COORD24_EXT = 0x87b5;
export const OUTPUT_TEXTURE_COORD25_EXT = 0x87b6;
export const OUTPUT_TEXTURE_COORD26_EXT = 0x87b7;
export const OUTPUT_TEXTURE_COORD27_EXT = 0x87b8;
export const OUTPUT_TEXTURE_COORD28_EXT = 0x87b9;
export const OUTPUT_TEXTURE_COORD29_EXT = 0x87ba;
export const OUTPUT_TEXTURE_COORD30_EXT = 0x87bb;
export const OUTPUT_TEXTURE_COORD31_EXT = 0x87bc;
export const OUTPUT_FOG_EXT = 0x87bd;
export const SCALAR_EXT = 0x87be;
export const VECTOR_EXT = 0x87bf;
export const MATRIX_EXT = 0x87c0;
export const VARIANT_EXT = 0x87c1;
export const INVARIANT_EXT = 0x87c2;
export const LOCAL_CONSTANT_EXT = 0x87c3;
export const LOCAL_EXT = 0x87c4;
export const MAX_VERTEX_SHADER_INSTRUCTIONS_EXT = 0x87c5;
export const MAX_VERTEX_SHADER_VARIANTS_EXT = 0x87c6;
export const MAX_VERTEX_SHADER_INVARIANTS_EXT = 0x87c7;
export const MAX_VERTEX_SHADER_LOCAL_CONSTANTS_EXT = 0x87c8;
export const MAX_VERTEX_SHADER_LOCALS_EXT = 0x87c9;
export const MAX_OPTIMIZED_VERTEX_SHADER_INSTRUCTIONS_EXT = 0x87ca;
export const MAX_OPTIMIZED_VERTEX_SHADER_VARIANTS_EXT = 0x87cb;
export const MAX_OPTIMIZED_VERTEX_SHADER_LOCAL_CONSTANTS_EXT = 0x87cc;
export const MAX_OPTIMIZED_VERTEX_SHADER_INVARIANTS_EXT = 0x87cd;
export const MAX_OPTIMIZED_VERTEX_SHADER_LOCALS_EXT = 0x87ce;
export const VERTEX_SHADER_INSTRUCTIONS_EXT = 0x87cf;
export const VERTEX_SHADER_VARIANTS_EXT = 0x87d0;
export const VERTEX_SHADER_INVARIANTS_EXT = 0x87d1;
export const VERTEX_SHADER_LOCAL_CONSTANTS_EXT = 0x87d2;
export const VERTEX_SHADER_LOCALS_EXT = 0x87d3;
export const VERTEX_SHADER_OPTIMIZED_EXT = 0x87d4;
export const X_EXT = 0x87d5;
export const Y_EXT = 0x87d6;
export const Z_EXT = 0x87d7;
export const W_EXT = 0x87d8;
export const NEGATIVE_X_EXT = 0x87d9;
export const NEGATIVE_Y_EXT = 0x87da;
export const NEGATIVE_Z_EXT = 0x87db;
export const NEGATIVE_W_EXT = 0x87dc;
export const ZERO_EXT = 0x87dd;
export const ONE_EXT = 0x87de;
export const NEGATIVE_ONE_EXT = 0x87df;
export const NORMALIZED_RANGE_EXT = 0x87e0;
export const FULL_RANGE_EXT = 0x87e1;
export const CURRENT_VERTEX_EXT = 0x87e2;
export const MVP_MATRIX_EXT = 0x87e3;
export const VARIANT_VALUE_EXT = 0x87e4;
export const VARIANT_DATATYPE_EXT = 0x87e5;
export const VARIANT_ARRAY_STRIDE_EXT = 0x87e6;
export const VARIANT_ARRAY_TYPE_EXT = 0x87e7;
export const VARIANT_ARRAY_EXT = 0x87e8;
export const VARIANT_ARRAY_POINTER_EXT = 0x87e9;
export const INVARIANT_VALUE_EXT = 0x87ea;
export const INVARIANT_DATATYPE_EXT = 0x87eb;
export const LOCAL_CONSTANT_VALUE_EXT = 0x87ec;
export const LOCAL_CONSTANT_DATATYPE_EXT = 0x87ed;

/// Commands

export const def_glBeginVertexShaderEXT = {
  parameters: [],
  result: "void",
} as const;

let fn_glBeginVertexShaderEXT!: Deno.UnsafeFnPointer<typeof def_glBeginVertexShaderEXT>;

export function BeginVertexShaderEXT(): void {
  fn_glBeginVertexShaderEXT.call();
}

export const def_glEndVertexShaderEXT = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndVertexShaderEXT!: Deno.UnsafeFnPointer<typeof def_glEndVertexShaderEXT>;

export function EndVertexShaderEXT(): void {
  fn_glEndVertexShaderEXT.call();
}

export const def_glBindVertexShaderEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindVertexShaderEXT!: Deno.UnsafeFnPointer<typeof def_glBindVertexShaderEXT>;

export function BindVertexShaderEXT(
  id: GLuint,
): void {
  fn_glBindVertexShaderEXT.call(
    id,
  );
}

export const def_glGenVertexShadersEXT = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glGenVertexShadersEXT!: Deno.UnsafeFnPointer<typeof def_glGenVertexShadersEXT>;

export function GenVertexShadersEXT(
  range: GLuint,
): GLuint {
  return fn_glGenVertexShadersEXT.call(
    range,
  );
}

export const def_glDeleteVertexShaderEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeleteVertexShaderEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteVertexShaderEXT>;

export function DeleteVertexShaderEXT(
  id: GLuint,
): void {
  fn_glDeleteVertexShaderEXT.call(
    id,
  );
}

export const def_glShaderOp1EXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glShaderOp1EXT!: Deno.UnsafeFnPointer<typeof def_glShaderOp1EXT>;

export function ShaderOp1EXT(
  op: GLenum,
  res: GLuint,
  arg1: GLuint,
): void {
  fn_glShaderOp1EXT.call(
    op,
    res,
    arg1,
  );
}

export const def_glShaderOp2EXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glShaderOp2EXT!: Deno.UnsafeFnPointer<typeof def_glShaderOp2EXT>;

export function ShaderOp2EXT(
  op: GLenum,
  res: GLuint,
  arg1: GLuint,
  arg2: GLuint,
): void {
  fn_glShaderOp2EXT.call(
    op,
    res,
    arg1,
    arg2,
  );
}

export const def_glShaderOp3EXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glShaderOp3EXT!: Deno.UnsafeFnPointer<typeof def_glShaderOp3EXT>;

export function ShaderOp3EXT(
  op: GLenum,
  res: GLuint,
  arg1: GLuint,
  arg2: GLuint,
  arg3: GLuint,
): void {
  fn_glShaderOp3EXT.call(
    op,
    res,
    arg1,
    arg2,
    arg3,
  );
}

export const def_glSwizzleEXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glSwizzleEXT!: Deno.UnsafeFnPointer<typeof def_glSwizzleEXT>;

export function SwizzleEXT(
  res: GLuint,
  in: GLuint,
  outX: GLenum,
  outY: GLenum,
  outZ: GLenum,
  outW: GLenum,
): void {
  fn_glSwizzleEXT.call(
    res,
    in,
    outX,
    outY,
    outZ,
    outW,
  );
}

export const def_glWriteMaskEXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glWriteMaskEXT!: Deno.UnsafeFnPointer<typeof def_glWriteMaskEXT>;

export function WriteMaskEXT(
  res: GLuint,
  in: GLuint,
  outX: GLenum,
  outY: GLenum,
  outZ: GLenum,
  outW: GLenum,
): void {
  fn_glWriteMaskEXT.call(
    res,
    in,
    outX,
    outY,
    outZ,
    outW,
  );
}

export const def_glInsertComponentEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glInsertComponentEXT!: Deno.UnsafeFnPointer<typeof def_glInsertComponentEXT>;

export function InsertComponentEXT(
  res: GLuint,
  src: GLuint,
  num: GLuint,
): void {
  fn_glInsertComponentEXT.call(
    res,
    src,
    num,
  );
}

export const def_glExtractComponentEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glExtractComponentEXT!: Deno.UnsafeFnPointer<typeof def_glExtractComponentEXT>;

export function ExtractComponentEXT(
  res: GLuint,
  src: GLuint,
  num: GLuint,
): void {
  fn_glExtractComponentEXT.call(
    res,
    src,
    num,
  );
}

export const def_glGenSymbolsEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "u32",
} as const;

let fn_glGenSymbolsEXT!: Deno.UnsafeFnPointer<typeof def_glGenSymbolsEXT>;

export function GenSymbolsEXT(
  datatype: GLenum,
  storagetype: GLenum,
  range: GLenum,
  components: GLuint,
): GLuint {
  return fn_glGenSymbolsEXT.call(
    datatype,
    storagetype,
    range,
    components,
  );
}

export const def_glSetInvariantEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSetInvariantEXT!: Deno.UnsafeFnPointer<typeof def_glSetInvariantEXT>;

export function SetInvariantEXT(
  id: GLuint,
  type: GLenum,
  addr: Buffer,
): void {
  fn_glSetInvariantEXT.call(
    id,
    type,
    bufferToFFI(addr),
  );
}

export const def_glSetLocalConstantEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSetLocalConstantEXT!: Deno.UnsafeFnPointer<typeof def_glSetLocalConstantEXT>;

export function SetLocalConstantEXT(
  id: GLuint,
  type: GLenum,
  addr: Buffer,
): void {
  fn_glSetLocalConstantEXT.call(
    id,
    type,
    bufferToFFI(addr),
  );
}

export const def_glVariantbvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantbvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantbvEXT>;

export function VariantbvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantbvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantsvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantsvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantsvEXT>;

export function VariantsvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantsvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantivEXT!: Deno.UnsafeFnPointer<typeof def_glVariantivEXT>;

export function VariantivEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantivEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantfvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantfvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantfvEXT>;

export function VariantfvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantfvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantdvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantdvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantdvEXT>;

export function VariantdvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantdvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantubvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantubvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantubvEXT>;

export function VariantubvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantubvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantusvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantusvEXT!: Deno.UnsafeFnPointer<typeof def_glVariantusvEXT>;

export function VariantusvEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantusvEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantuivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantuivEXT!: Deno.UnsafeFnPointer<typeof def_glVariantuivEXT>;

export function VariantuivEXT(
  id: GLuint,
  addr: Buffer,
): void {
  fn_glVariantuivEXT.call(
    id,
    bufferToFFI(addr),
  );
}

export const def_glVariantPointerEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glVariantPointerEXT!: Deno.UnsafeFnPointer<typeof def_glVariantPointerEXT>;

export function VariantPointerEXT(
  id: GLuint,
  type: GLenum,
  stride: GLuint,
  addr: Buffer,
): void {
  fn_glVariantPointerEXT.call(
    id,
    type,
    stride,
    bufferToFFI(addr),
  );
}

export const def_glEnableVariantClientStateEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableVariantClientStateEXT!: Deno.UnsafeFnPointer<typeof def_glEnableVariantClientStateEXT>;

export function EnableVariantClientStateEXT(
  id: GLuint,
): void {
  fn_glEnableVariantClientStateEXT.call(
    id,
  );
}

export const def_glDisableVariantClientStateEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisableVariantClientStateEXT!: Deno.UnsafeFnPointer<typeof def_glDisableVariantClientStateEXT>;

export function DisableVariantClientStateEXT(
  id: GLuint,
): void {
  fn_glDisableVariantClientStateEXT.call(
    id,
  );
}

export const def_glBindLightParameterEXT = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glBindLightParameterEXT!: Deno.UnsafeFnPointer<typeof def_glBindLightParameterEXT>;

export function BindLightParameterEXT(
  light: GLenum,
  value: GLenum,
): GLuint {
  return fn_glBindLightParameterEXT.call(
    light,
    value,
  );
}

export const def_glBindMaterialParameterEXT = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glBindMaterialParameterEXT!: Deno.UnsafeFnPointer<typeof def_glBindMaterialParameterEXT>;

export function BindMaterialParameterEXT(
  face: GLenum,
  value: GLenum,
): GLuint {
  return fn_glBindMaterialParameterEXT.call(
    face,
    value,
  );
}

export const def_glBindTexGenParameterEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "u32",
} as const;

let fn_glBindTexGenParameterEXT!: Deno.UnsafeFnPointer<typeof def_glBindTexGenParameterEXT>;

export function BindTexGenParameterEXT(
  unit: GLenum,
  coord: GLenum,
  value: GLenum,
): GLuint {
  return fn_glBindTexGenParameterEXT.call(
    unit,
    coord,
    value,
  );
}

export const def_glBindTextureUnitParameterEXT = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glBindTextureUnitParameterEXT!: Deno.UnsafeFnPointer<typeof def_glBindTextureUnitParameterEXT>;

export function BindTextureUnitParameterEXT(
  unit: GLenum,
  value: GLenum,
): GLuint {
  return fn_glBindTextureUnitParameterEXT.call(
    unit,
    value,
  );
}

export const def_glBindParameterEXT = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glBindParameterEXT!: Deno.UnsafeFnPointer<typeof def_glBindParameterEXT>;

export function BindParameterEXT(
  value: GLenum,
): GLuint {
  return fn_glBindParameterEXT.call(
    value,
  );
}

export const def_glIsVariantEnabledEXT = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsVariantEnabledEXT!: Deno.UnsafeFnPointer<typeof def_glIsVariantEnabledEXT>;

export function IsVariantEnabledEXT(
  id: GLuint,
  cap: GLenum,
): GLboolean {
  return fn_glIsVariantEnabledEXT.call(
    id,
    cap,
  );
}

export const def_glGetVariantBooleanvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantBooleanvEXT!: Deno.UnsafeFnPointer<typeof def_glGetVariantBooleanvEXT>;

export function GetVariantBooleanvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetVariantBooleanvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetVariantIntegervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantIntegervEXT!: Deno.UnsafeFnPointer<typeof def_glGetVariantIntegervEXT>;

export function GetVariantIntegervEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetVariantIntegervEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetVariantFloatvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantFloatvEXT!: Deno.UnsafeFnPointer<typeof def_glGetVariantFloatvEXT>;

export function GetVariantFloatvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetVariantFloatvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetVariantPointervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantPointervEXT!: Deno.UnsafeFnPointer<typeof def_glGetVariantPointervEXT>;

export function GetVariantPointervEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetVariantPointervEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetInvariantBooleanvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInvariantBooleanvEXT!: Deno.UnsafeFnPointer<typeof def_glGetInvariantBooleanvEXT>;

export function GetInvariantBooleanvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetInvariantBooleanvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetInvariantIntegervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInvariantIntegervEXT!: Deno.UnsafeFnPointer<typeof def_glGetInvariantIntegervEXT>;

export function GetInvariantIntegervEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetInvariantIntegervEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetInvariantFloatvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInvariantFloatvEXT!: Deno.UnsafeFnPointer<typeof def_glGetInvariantFloatvEXT>;

export function GetInvariantFloatvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetInvariantFloatvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetLocalConstantBooleanvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLocalConstantBooleanvEXT!: Deno.UnsafeFnPointer<typeof def_glGetLocalConstantBooleanvEXT>;

export function GetLocalConstantBooleanvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetLocalConstantBooleanvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetLocalConstantIntegervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLocalConstantIntegervEXT!: Deno.UnsafeFnPointer<typeof def_glGetLocalConstantIntegervEXT>;

export function GetLocalConstantIntegervEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetLocalConstantIntegervEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

export const def_glGetLocalConstantFloatvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLocalConstantFloatvEXT!: Deno.UnsafeFnPointer<typeof def_glGetLocalConstantFloatvEXT>;

export function GetLocalConstantFloatvEXT(
  id: GLuint,
  value: GLenum,
  data: Buffer,
): void {
  fn_glGetLocalConstantFloatvEXT.call(
    id,
    value,
    bufferToFFI(data),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBeginVertexShaderEXT = new Deno.UnsafeFnPointer(proc("glBeginVertexShaderEXT")!, def_glBeginVertexShaderEXT);
  fn_glEndVertexShaderEXT = new Deno.UnsafeFnPointer(proc("glEndVertexShaderEXT")!, def_glEndVertexShaderEXT);
  fn_glBindVertexShaderEXT = new Deno.UnsafeFnPointer(proc("glBindVertexShaderEXT")!, def_glBindVertexShaderEXT);
  fn_glGenVertexShadersEXT = new Deno.UnsafeFnPointer(proc("glGenVertexShadersEXT")!, def_glGenVertexShadersEXT);
  fn_glDeleteVertexShaderEXT = new Deno.UnsafeFnPointer(proc("glDeleteVertexShaderEXT")!, def_glDeleteVertexShaderEXT);
  fn_glShaderOp1EXT = new Deno.UnsafeFnPointer(proc("glShaderOp1EXT")!, def_glShaderOp1EXT);
  fn_glShaderOp2EXT = new Deno.UnsafeFnPointer(proc("glShaderOp2EXT")!, def_glShaderOp2EXT);
  fn_glShaderOp3EXT = new Deno.UnsafeFnPointer(proc("glShaderOp3EXT")!, def_glShaderOp3EXT);
  fn_glSwizzleEXT = new Deno.UnsafeFnPointer(proc("glSwizzleEXT")!, def_glSwizzleEXT);
  fn_glWriteMaskEXT = new Deno.UnsafeFnPointer(proc("glWriteMaskEXT")!, def_glWriteMaskEXT);
  fn_glInsertComponentEXT = new Deno.UnsafeFnPointer(proc("glInsertComponentEXT")!, def_glInsertComponentEXT);
  fn_glExtractComponentEXT = new Deno.UnsafeFnPointer(proc("glExtractComponentEXT")!, def_glExtractComponentEXT);
  fn_glGenSymbolsEXT = new Deno.UnsafeFnPointer(proc("glGenSymbolsEXT")!, def_glGenSymbolsEXT);
  fn_glSetInvariantEXT = new Deno.UnsafeFnPointer(proc("glSetInvariantEXT")!, def_glSetInvariantEXT);
  fn_glSetLocalConstantEXT = new Deno.UnsafeFnPointer(proc("glSetLocalConstantEXT")!, def_glSetLocalConstantEXT);
  fn_glVariantbvEXT = new Deno.UnsafeFnPointer(proc("glVariantbvEXT")!, def_glVariantbvEXT);
  fn_glVariantsvEXT = new Deno.UnsafeFnPointer(proc("glVariantsvEXT")!, def_glVariantsvEXT);
  fn_glVariantivEXT = new Deno.UnsafeFnPointer(proc("glVariantivEXT")!, def_glVariantivEXT);
  fn_glVariantfvEXT = new Deno.UnsafeFnPointer(proc("glVariantfvEXT")!, def_glVariantfvEXT);
  fn_glVariantdvEXT = new Deno.UnsafeFnPointer(proc("glVariantdvEXT")!, def_glVariantdvEXT);
  fn_glVariantubvEXT = new Deno.UnsafeFnPointer(proc("glVariantubvEXT")!, def_glVariantubvEXT);
  fn_glVariantusvEXT = new Deno.UnsafeFnPointer(proc("glVariantusvEXT")!, def_glVariantusvEXT);
  fn_glVariantuivEXT = new Deno.UnsafeFnPointer(proc("glVariantuivEXT")!, def_glVariantuivEXT);
  fn_glVariantPointerEXT = new Deno.UnsafeFnPointer(proc("glVariantPointerEXT")!, def_glVariantPointerEXT);
  fn_glEnableVariantClientStateEXT = new Deno.UnsafeFnPointer(proc("glEnableVariantClientStateEXT")!, def_glEnableVariantClientStateEXT);
  fn_glDisableVariantClientStateEXT = new Deno.UnsafeFnPointer(proc("glDisableVariantClientStateEXT")!, def_glDisableVariantClientStateEXT);
  fn_glBindLightParameterEXT = new Deno.UnsafeFnPointer(proc("glBindLightParameterEXT")!, def_glBindLightParameterEXT);
  fn_glBindMaterialParameterEXT = new Deno.UnsafeFnPointer(proc("glBindMaterialParameterEXT")!, def_glBindMaterialParameterEXT);
  fn_glBindTexGenParameterEXT = new Deno.UnsafeFnPointer(proc("glBindTexGenParameterEXT")!, def_glBindTexGenParameterEXT);
  fn_glBindTextureUnitParameterEXT = new Deno.UnsafeFnPointer(proc("glBindTextureUnitParameterEXT")!, def_glBindTextureUnitParameterEXT);
  fn_glBindParameterEXT = new Deno.UnsafeFnPointer(proc("glBindParameterEXT")!, def_glBindParameterEXT);
  fn_glIsVariantEnabledEXT = new Deno.UnsafeFnPointer(proc("glIsVariantEnabledEXT")!, def_glIsVariantEnabledEXT);
  fn_glGetVariantBooleanvEXT = new Deno.UnsafeFnPointer(proc("glGetVariantBooleanvEXT")!, def_glGetVariantBooleanvEXT);
  fn_glGetVariantIntegervEXT = new Deno.UnsafeFnPointer(proc("glGetVariantIntegervEXT")!, def_glGetVariantIntegervEXT);
  fn_glGetVariantFloatvEXT = new Deno.UnsafeFnPointer(proc("glGetVariantFloatvEXT")!, def_glGetVariantFloatvEXT);
  fn_glGetVariantPointervEXT = new Deno.UnsafeFnPointer(proc("glGetVariantPointervEXT")!, def_glGetVariantPointervEXT);
  fn_glGetInvariantBooleanvEXT = new Deno.UnsafeFnPointer(proc("glGetInvariantBooleanvEXT")!, def_glGetInvariantBooleanvEXT);
  fn_glGetInvariantIntegervEXT = new Deno.UnsafeFnPointer(proc("glGetInvariantIntegervEXT")!, def_glGetInvariantIntegervEXT);
  fn_glGetInvariantFloatvEXT = new Deno.UnsafeFnPointer(proc("glGetInvariantFloatvEXT")!, def_glGetInvariantFloatvEXT);
  fn_glGetLocalConstantBooleanvEXT = new Deno.UnsafeFnPointer(proc("glGetLocalConstantBooleanvEXT")!, def_glGetLocalConstantBooleanvEXT);
  fn_glGetLocalConstantIntegervEXT = new Deno.UnsafeFnPointer(proc("glGetLocalConstantIntegervEXT")!, def_glGetLocalConstantIntegervEXT);
  fn_glGetLocalConstantFloatvEXT = new Deno.UnsafeFnPointer(proc("glGetLocalConstantFloatvEXT")!, def_glGetLocalConstantFloatvEXT);
}
