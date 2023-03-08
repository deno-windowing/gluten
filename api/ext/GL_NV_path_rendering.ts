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
export const PATH_FORMAT_SVG_NV = 0x9070;
export const PATH_FORMAT_PS_NV = 0x9071;
export const STANDARD_FONT_NAME_NV = 0x9072;
export const SYSTEM_FONT_NAME_NV = 0x9073;
export const FILE_NAME_NV = 0x9074;
export const PATH_STROKE_WIDTH_NV = 0x9075;
export const PATH_END_CAPS_NV = 0x9076;
export const PATH_INITIAL_END_CAP_NV = 0x9077;
export const PATH_TERMINAL_END_CAP_NV = 0x9078;
export const PATH_JOIN_STYLE_NV = 0x9079;
export const PATH_MITER_LIMIT_NV = 0x907a;
export const PATH_DASH_CAPS_NV = 0x907b;
export const PATH_INITIAL_DASH_CAP_NV = 0x907c;
export const PATH_TERMINAL_DASH_CAP_NV = 0x907d;
export const PATH_DASH_OFFSET_NV = 0x907e;
export const PATH_CLIENT_LENGTH_NV = 0x907f;
export const PATH_FILL_MODE_NV = 0x9080;
export const PATH_FILL_MASK_NV = 0x9081;
export const PATH_FILL_COVER_MODE_NV = 0x9082;
export const PATH_STROKE_COVER_MODE_NV = 0x9083;
export const PATH_STROKE_MASK_NV = 0x9084;
export const COUNT_UP_NV = 0x9088;
export const COUNT_DOWN_NV = 0x9089;
export const PATH_OBJECT_BOUNDING_BOX_NV = 0x908a;
export const CONVEX_HULL_NV = 0x908b;
export const BOUNDING_BOX_NV = 0x908d;
export const TRANSLATE_X_NV = 0x908e;
export const TRANSLATE_Y_NV = 0x908f;
export const TRANSLATE_2D_NV = 0x9090;
export const TRANSLATE_3D_NV = 0x9091;
export const AFFINE_2D_NV = 0x9092;
export const AFFINE_3D_NV = 0x9094;
export const TRANSPOSE_AFFINE_2D_NV = 0x9096;
export const TRANSPOSE_AFFINE_3D_NV = 0x9098;
export const UTF8_NV = 0x909a;
export const UTF16_NV = 0x909b;
export const BOUNDING_BOX_OF_BOUNDING_BOXES_NV = 0x909c;
export const PATH_COMMAND_COUNT_NV = 0x909d;
export const PATH_COORD_COUNT_NV = 0x909e;
export const PATH_DASH_ARRAY_COUNT_NV = 0x909f;
export const PATH_COMPUTED_LENGTH_NV = 0x90a0;
export const PATH_FILL_BOUNDING_BOX_NV = 0x90a1;
export const PATH_STROKE_BOUNDING_BOX_NV = 0x90a2;
export const SQUARE_NV = 0x90a3;
export const ROUND_NV = 0x90a4;
export const TRIANGULAR_NV = 0x90a5;
export const BEVEL_NV = 0x90a6;
export const MITER_REVERT_NV = 0x90a7;
export const MITER_TRUNCATE_NV = 0x90a8;
export const SKIP_MISSING_GLYPH_NV = 0x90a9;
export const USE_MISSING_GLYPH_NV = 0x90aa;
export const PATH_ERROR_POSITION_NV = 0x90ab;
export const ACCUM_ADJACENT_PAIRS_NV = 0x90ad;
export const ADJACENT_PAIRS_NV = 0x90ae;
export const FIRST_TO_REST_NV = 0x90af;
export const PATH_GEN_MODE_NV = 0x90b0;
export const PATH_GEN_COEFF_NV = 0x90b1;
export const PATH_GEN_COMPONENTS_NV = 0x90b3;
export const PATH_STENCIL_FUNC_NV = 0x90b7;
export const PATH_STENCIL_REF_NV = 0x90b8;
export const PATH_STENCIL_VALUE_MASK_NV = 0x90b9;
export const PATH_STENCIL_DEPTH_OFFSET_FACTOR_NV = 0x90bd;
export const PATH_STENCIL_DEPTH_OFFSET_UNITS_NV = 0x90be;
export const PATH_COVER_DEPTH_FUNC_NV = 0x90bf;
export const PATH_DASH_OFFSET_RESET_NV = 0x90b4;
export const MOVE_TO_RESETS_NV = 0x90b5;
export const MOVE_TO_CONTINUES_NV = 0x90b6;
export const CLOSE_PATH_NV = 0x0;
export const MOVE_TO_NV = 0x2;
export const RELATIVE_MOVE_TO_NV = 0x3;
export const LINE_TO_NV = 0x4;
export const RELATIVE_LINE_TO_NV = 0x5;
export const HORIZONTAL_LINE_TO_NV = 0x6;
export const RELATIVE_HORIZONTAL_LINE_TO_NV = 0x7;
export const VERTICAL_LINE_TO_NV = 0x8;
export const RELATIVE_VERTICAL_LINE_TO_NV = 0x9;
export const QUADRATIC_CURVE_TO_NV = 0xa;
export const RELATIVE_QUADRATIC_CURVE_TO_NV = 0xb;
export const CUBIC_CURVE_TO_NV = 0xc;
export const RELATIVE_CUBIC_CURVE_TO_NV = 0xd;
export const SMOOTH_QUADRATIC_CURVE_TO_NV = 0xe;
export const RELATIVE_SMOOTH_QUADRATIC_CURVE_TO_NV = 0xf;
export const SMOOTH_CUBIC_CURVE_TO_NV = 0x10;
export const RELATIVE_SMOOTH_CUBIC_CURVE_TO_NV = 0x11;
export const SMALL_CCW_ARC_TO_NV = 0x12;
export const RELATIVE_SMALL_CCW_ARC_TO_NV = 0x13;
export const SMALL_CW_ARC_TO_NV = 0x14;
export const RELATIVE_SMALL_CW_ARC_TO_NV = 0x15;
export const LARGE_CCW_ARC_TO_NV = 0x16;
export const RELATIVE_LARGE_CCW_ARC_TO_NV = 0x17;
export const LARGE_CW_ARC_TO_NV = 0x18;
export const RELATIVE_LARGE_CW_ARC_TO_NV = 0x19;
export const RESTART_PATH_NV = 0xf0;
export const DUP_FIRST_CUBIC_CURVE_TO_NV = 0xf2;
export const DUP_LAST_CUBIC_CURVE_TO_NV = 0xf4;
export const RECT_NV = 0xf6;
export const CIRCULAR_CCW_ARC_TO_NV = 0xf8;
export const CIRCULAR_CW_ARC_TO_NV = 0xfa;
export const CIRCULAR_TANGENT_ARC_TO_NV = 0xfc;
export const ARC_TO_NV = 0xfe;
export const RELATIVE_ARC_TO_NV = 0xff;
export const BOLD_BIT_NV = 0x1;
export const ITALIC_BIT_NV = 0x2;
export const GLYPH_WIDTH_BIT_NV = 0x1;
export const GLYPH_HEIGHT_BIT_NV = 0x2;
export const GLYPH_HORIZONTAL_BEARING_X_BIT_NV = 0x4;
export const GLYPH_HORIZONTAL_BEARING_Y_BIT_NV = 0x8;
export const GLYPH_HORIZONTAL_BEARING_ADVANCE_BIT_NV = 0x10;
export const GLYPH_VERTICAL_BEARING_X_BIT_NV = 0x20;
export const GLYPH_VERTICAL_BEARING_Y_BIT_NV = 0x40;
export const GLYPH_VERTICAL_BEARING_ADVANCE_BIT_NV = 0x80;
export const GLYPH_HAS_KERNING_BIT_NV = 0x100;
export const FONT_X_MIN_BOUNDS_BIT_NV = 0x10000;
export const FONT_Y_MIN_BOUNDS_BIT_NV = 0x20000;
export const FONT_X_MAX_BOUNDS_BIT_NV = 0x40000;
export const FONT_Y_MAX_BOUNDS_BIT_NV = 0x80000;
export const FONT_UNITS_PER_EM_BIT_NV = 0x100000;
export const FONT_ASCENDER_BIT_NV = 0x200000;
export const FONT_DESCENDER_BIT_NV = 0x400000;
export const FONT_HEIGHT_BIT_NV = 0x800000;
export const FONT_MAX_ADVANCE_WIDTH_BIT_NV = 0x1000000;
export const FONT_MAX_ADVANCE_HEIGHT_BIT_NV = 0x2000000;
export const FONT_UNDERLINE_POSITION_BIT_NV = 0x4000000;
export const FONT_UNDERLINE_THICKNESS_BIT_NV = 0x8000000;
export const FONT_HAS_KERNING_BIT_NV = 0x10000000;
export const ROUNDED_RECT_NV = 0xe8;
export const RELATIVE_ROUNDED_RECT_NV = 0xe9;
export const ROUNDED_RECT2_NV = 0xea;
export const RELATIVE_ROUNDED_RECT2_NV = 0xeb;
export const ROUNDED_RECT4_NV = 0xec;
export const RELATIVE_ROUNDED_RECT4_NV = 0xed;
export const ROUNDED_RECT8_NV = 0xee;
export const RELATIVE_ROUNDED_RECT8_NV = 0xef;
export const RELATIVE_RECT_NV = 0xf7;
export const FONT_GLYPHS_AVAILABLE_NV = 0x9368;
export const FONT_TARGET_UNAVAILABLE_NV = 0x9369;
export const FONT_UNAVAILABLE_NV = 0x936a;
export const FONT_UNINTELLIGIBLE_NV = 0x936b;
export const CONIC_CURVE_TO_NV = 0x1a;
export const RELATIVE_CONIC_CURVE_TO_NV = 0x1b;
export const FONT_NUM_GLYPH_INDICES_BIT_NV = 0x20000000;
export const STANDARD_FONT_FORMAT_NV = 0x936c;
export const GL_2_BYTES_NV = 0x1407;
export const GL_3_BYTES_NV = 0x1408;
export const GL_4_BYTES_NV = 0x1409;
export const EYE_LINEAR_NV = 0x2400;
export const OBJECT_LINEAR_NV = 0x2401;
export const CONSTANT_NV = 0x8576;
export const PATH_FOG_GEN_MODE_NV = 0x90ac;
export const PRIMARY_COLOR = 0x8577;
export const PRIMARY_COLOR_NV = 0x852c;
export const SECONDARY_COLOR_NV = 0x852d;
export const PATH_GEN_COLOR_FORMAT_NV = 0x90b2;
export const PATH_PROJECTION_NV = 0x1701;
export const PATH_MODELVIEW_NV = 0x1700;
export const PATH_MODELVIEW_STACK_DEPTH_NV = 0xba3;
export const PATH_MODELVIEW_MATRIX_NV = 0xba6;
export const PATH_MAX_MODELVIEW_STACK_DEPTH_NV = 0xd36;
export const PATH_TRANSPOSE_MODELVIEW_MATRIX_NV = 0x84e3;
export const PATH_PROJECTION_STACK_DEPTH_NV = 0xba4;
export const PATH_PROJECTION_MATRIX_NV = 0xba7;
export const PATH_MAX_PROJECTION_STACK_DEPTH_NV = 0xd38;
export const PATH_TRANSPOSE_PROJECTION_MATRIX_NV = 0x84e4;
export const FRAGMENT_INPUT_NV = 0x936d;

/// Commands

export const def_glGenPathsNV = {
  parameters: ["i32"],
  result: "u32",
} as const;

let fn_glGenPathsNV!: Deno.UnsafeFnPointer<typeof def_glGenPathsNV>;

export function GenPathsNV(
  range: GLsizei,
): GLuint {
  return fn_glGenPathsNV.call(
    range,
  );
}

export const def_glDeletePathsNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glDeletePathsNV!: Deno.UnsafeFnPointer<typeof def_glDeletePathsNV>;

export function DeletePathsNV(
  path: GLuint,
  range: GLsizei,
): void {
  fn_glDeletePathsNV.call(
    path,
    range,
  );
}

export const def_glIsPathNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsPathNV!: Deno.UnsafeFnPointer<typeof def_glIsPathNV>;

export function IsPathNV(
  path: GLuint,
): GLboolean {
  return fn_glIsPathNV.call(
    path,
  );
}

export const def_glPathCommandsNV = {
  parameters: ["u32", "i32", "buffer", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathCommandsNV!: Deno.UnsafeFnPointer<typeof def_glPathCommandsNV>;

export function PathCommandsNV(
  path: GLuint,
  numCommands: GLsizei,
  commands: Buffer,
  numCoords: GLsizei,
  coordType: GLenum,
  coords: Buffer,
): void {
  fn_glPathCommandsNV.call(
    path,
    numCommands,
    bufferToFFI(commands),
    numCoords,
    coordType,
    bufferToFFI(coords),
  );
}

export const def_glPathCoordsNV = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathCoordsNV!: Deno.UnsafeFnPointer<typeof def_glPathCoordsNV>;

export function PathCoordsNV(
  path: GLuint,
  numCoords: GLsizei,
  coordType: GLenum,
  coords: Buffer,
): void {
  fn_glPathCoordsNV.call(
    path,
    numCoords,
    coordType,
    bufferToFFI(coords),
  );
}

export const def_glPathSubCommandsNV = {
  parameters: ["u32", "i32", "i32", "i32", "buffer", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathSubCommandsNV!: Deno.UnsafeFnPointer<
  typeof def_glPathSubCommandsNV
>;

export function PathSubCommandsNV(
  path: GLuint,
  commandStart: GLsizei,
  commandsToDelete: GLsizei,
  numCommands: GLsizei,
  commands: Buffer,
  numCoords: GLsizei,
  coordType: GLenum,
  coords: Buffer,
): void {
  fn_glPathSubCommandsNV.call(
    path,
    commandStart,
    commandsToDelete,
    numCommands,
    bufferToFFI(commands),
    numCoords,
    coordType,
    bufferToFFI(coords),
  );
}

export const def_glPathSubCoordsNV = {
  parameters: ["u32", "i32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathSubCoordsNV!: Deno.UnsafeFnPointer<typeof def_glPathSubCoordsNV>;

export function PathSubCoordsNV(
  path: GLuint,
  coordStart: GLsizei,
  numCoords: GLsizei,
  coordType: GLenum,
  coords: Buffer,
): void {
  fn_glPathSubCoordsNV.call(
    path,
    coordStart,
    numCoords,
    coordType,
    bufferToFFI(coords),
  );
}

export const def_glPathStringNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPathStringNV!: Deno.UnsafeFnPointer<typeof def_glPathStringNV>;

export function PathStringNV(
  path: GLuint,
  format: GLenum,
  length: GLsizei,
  pathString: Buffer,
): void {
  fn_glPathStringNV.call(
    path,
    format,
    length,
    bufferToFFI(pathString),
  );
}

export const def_glPathGlyphsNV = {
  parameters: [
    "u32",
    "u32",
    "buffer",
    "u32",
    "i32",
    "u32",
    "buffer",
    "u32",
    "u32",
    "f32",
  ],
  result: "void",
} as const;

let fn_glPathGlyphsNV!: Deno.UnsafeFnPointer<typeof def_glPathGlyphsNV>;

export function PathGlyphsNV(
  firstPathName: GLuint,
  fontTarget: GLenum,
  fontName: Buffer,
  fontStyle: GLbitfield,
  numGlyphs: GLsizei,
  type: GLenum,
  charcodes: Buffer,
  handleMissingGlyphs: GLenum,
  pathParameterTemplate: GLuint,
  emScale: GLfloat,
): void {
  fn_glPathGlyphsNV.call(
    firstPathName,
    fontTarget,
    bufferToFFI(fontName),
    fontStyle,
    numGlyphs,
    type,
    bufferToFFI(charcodes),
    handleMissingGlyphs,
    pathParameterTemplate,
    emScale,
  );
}

export const def_glPathGlyphRangeNV = {
  parameters: [
    "u32",
    "u32",
    "buffer",
    "u32",
    "u32",
    "i32",
    "u32",
    "u32",
    "f32",
  ],
  result: "void",
} as const;

let fn_glPathGlyphRangeNV!: Deno.UnsafeFnPointer<typeof def_glPathGlyphRangeNV>;

export function PathGlyphRangeNV(
  firstPathName: GLuint,
  fontTarget: GLenum,
  fontName: Buffer,
  fontStyle: GLbitfield,
  firstGlyph: GLuint,
  numGlyphs: GLsizei,
  handleMissingGlyphs: GLenum,
  pathParameterTemplate: GLuint,
  emScale: GLfloat,
): void {
  fn_glPathGlyphRangeNV.call(
    firstPathName,
    fontTarget,
    bufferToFFI(fontName),
    fontStyle,
    firstGlyph,
    numGlyphs,
    handleMissingGlyphs,
    pathParameterTemplate,
    emScale,
  );
}

export const def_glWeightPathsNV = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glWeightPathsNV!: Deno.UnsafeFnPointer<typeof def_glWeightPathsNV>;

export function WeightPathsNV(
  resultPath: GLuint,
  numPaths: GLsizei,
  paths: Buffer,
  weights: Buffer,
): void {
  fn_glWeightPathsNV.call(
    resultPath,
    numPaths,
    bufferToFFI(paths),
    bufferToFFI(weights),
  );
}

export const def_glCopyPathNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glCopyPathNV!: Deno.UnsafeFnPointer<typeof def_glCopyPathNV>;

export function CopyPathNV(
  resultPath: GLuint,
  srcPath: GLuint,
): void {
  fn_glCopyPathNV.call(
    resultPath,
    srcPath,
  );
}

export const def_glInterpolatePathsNV = {
  parameters: ["u32", "u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glInterpolatePathsNV!: Deno.UnsafeFnPointer<
  typeof def_glInterpolatePathsNV
>;

export function InterpolatePathsNV(
  resultPath: GLuint,
  pathA: GLuint,
  pathB: GLuint,
  weight: GLfloat,
): void {
  fn_glInterpolatePathsNV.call(
    resultPath,
    pathA,
    pathB,
    weight,
  );
}

export const def_glTransformPathNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTransformPathNV!: Deno.UnsafeFnPointer<typeof def_glTransformPathNV>;

export function TransformPathNV(
  resultPath: GLuint,
  srcPath: GLuint,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glTransformPathNV.call(
    resultPath,
    srcPath,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glPathParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glPathParameterivNV
>;

export function PathParameterivNV(
  path: GLuint,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glPathParameterivNV.call(
    path,
    pname,
    bufferToFFI(value),
  );
}

export const def_glPathParameteriNV = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glPathParameteriNV!: Deno.UnsafeFnPointer<typeof def_glPathParameteriNV>;

export function PathParameteriNV(
  path: GLuint,
  pname: GLenum,
  value: GLint,
): void {
  fn_glPathParameteriNV.call(
    path,
    pname,
    value,
  );
}

export const def_glPathParameterfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glPathParameterfvNV
>;

export function PathParameterfvNV(
  path: GLuint,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glPathParameterfvNV.call(
    path,
    pname,
    bufferToFFI(value),
  );
}

export const def_glPathParameterfNV = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glPathParameterfNV!: Deno.UnsafeFnPointer<typeof def_glPathParameterfNV>;

export function PathParameterfNV(
  path: GLuint,
  pname: GLenum,
  value: GLfloat,
): void {
  fn_glPathParameterfNV.call(
    path,
    pname,
    value,
  );
}

export const def_glPathDashArrayNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPathDashArrayNV!: Deno.UnsafeFnPointer<typeof def_glPathDashArrayNV>;

export function PathDashArrayNV(
  path: GLuint,
  dashCount: GLsizei,
  dashArray: Buffer,
): void {
  fn_glPathDashArrayNV.call(
    path,
    dashCount,
    bufferToFFI(dashArray),
  );
}

export const def_glPathStencilFuncNV = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glPathStencilFuncNV!: Deno.UnsafeFnPointer<
  typeof def_glPathStencilFuncNV
>;

export function PathStencilFuncNV(
  func: GLenum,
  ref: GLint,
  mask: GLuint,
): void {
  fn_glPathStencilFuncNV.call(
    func,
    ref,
    mask,
  );
}

export const def_glPathStencilDepthOffsetNV = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glPathStencilDepthOffsetNV!: Deno.UnsafeFnPointer<
  typeof def_glPathStencilDepthOffsetNV
>;

export function PathStencilDepthOffsetNV(
  factor: GLfloat,
  units: GLfloat,
): void {
  fn_glPathStencilDepthOffsetNV.call(
    factor,
    units,
  );
}

export const def_glStencilFillPathNV = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStencilFillPathNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilFillPathNV
>;

export function StencilFillPathNV(
  path: GLuint,
  fillMode: GLenum,
  mask: GLuint,
): void {
  fn_glStencilFillPathNV.call(
    path,
    fillMode,
    mask,
  );
}

export const def_glStencilStrokePathNV = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glStencilStrokePathNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilStrokePathNV
>;

export function StencilStrokePathNV(
  path: GLuint,
  reference: GLint,
  mask: GLuint,
): void {
  fn_glStencilStrokePathNV.call(
    path,
    reference,
    mask,
  );
}

export const def_glStencilFillPathInstancedNV = {
  parameters: ["i32", "u32", "buffer", "u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glStencilFillPathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilFillPathInstancedNV
>;

export function StencilFillPathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  fillMode: GLenum,
  mask: GLuint,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glStencilFillPathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    fillMode,
    mask,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glStencilStrokePathInstancedNV = {
  parameters: ["i32", "u32", "buffer", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glStencilStrokePathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilStrokePathInstancedNV
>;

export function StencilStrokePathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  reference: GLint,
  mask: GLuint,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glStencilStrokePathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    reference,
    mask,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glPathCoverDepthFuncNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPathCoverDepthFuncNV!: Deno.UnsafeFnPointer<
  typeof def_glPathCoverDepthFuncNV
>;

export function PathCoverDepthFuncNV(
  func: GLenum,
): void {
  fn_glPathCoverDepthFuncNV.call(
    func,
  );
}

export const def_glCoverFillPathNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glCoverFillPathNV!: Deno.UnsafeFnPointer<typeof def_glCoverFillPathNV>;

export function CoverFillPathNV(
  path: GLuint,
  coverMode: GLenum,
): void {
  fn_glCoverFillPathNV.call(
    path,
    coverMode,
  );
}

export const def_glCoverStrokePathNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glCoverStrokePathNV!: Deno.UnsafeFnPointer<
  typeof def_glCoverStrokePathNV
>;

export function CoverStrokePathNV(
  path: GLuint,
  coverMode: GLenum,
): void {
  fn_glCoverStrokePathNV.call(
    path,
    coverMode,
  );
}

export const def_glCoverFillPathInstancedNV = {
  parameters: ["i32", "u32", "buffer", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glCoverFillPathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glCoverFillPathInstancedNV
>;

export function CoverFillPathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  coverMode: GLenum,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glCoverFillPathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    coverMode,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glCoverStrokePathInstancedNV = {
  parameters: ["i32", "u32", "buffer", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glCoverStrokePathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glCoverStrokePathInstancedNV
>;

export function CoverStrokePathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  coverMode: GLenum,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glCoverStrokePathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    coverMode,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glGetPathParameterivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathParameterivNV
>;

export function GetPathParameterivNV(
  path: GLuint,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathParameterivNV.call(
    path,
    pname,
    bufferToFFI(value),
  );
}

export const def_glGetPathParameterfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathParameterfvNV
>;

export function GetPathParameterfvNV(
  path: GLuint,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathParameterfvNV.call(
    path,
    pname,
    bufferToFFI(value),
  );
}

export const def_glGetPathCommandsNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathCommandsNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathCommandsNV
>;

export function GetPathCommandsNV(
  path: GLuint,
  commands: Buffer,
): void {
  fn_glGetPathCommandsNV.call(
    path,
    bufferToFFI(commands),
  );
}

export const def_glGetPathCoordsNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathCoordsNV!: Deno.UnsafeFnPointer<typeof def_glGetPathCoordsNV>;

export function GetPathCoordsNV(
  path: GLuint,
  coords: Buffer,
): void {
  fn_glGetPathCoordsNV.call(
    path,
    bufferToFFI(coords),
  );
}

export const def_glGetPathDashArrayNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathDashArrayNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathDashArrayNV
>;

export function GetPathDashArrayNV(
  path: GLuint,
  dashArray: Buffer,
): void {
  fn_glGetPathDashArrayNV.call(
    path,
    bufferToFFI(dashArray),
  );
}

export const def_glGetPathMetricsNV = {
  parameters: ["u32", "i32", "u32", "buffer", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathMetricsNV!: Deno.UnsafeFnPointer<typeof def_glGetPathMetricsNV>;

export function GetPathMetricsNV(
  metricQueryMask: GLbitfield,
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  stride: GLsizei,
  metrics: Buffer,
): void {
  fn_glGetPathMetricsNV.call(
    metricQueryMask,
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    stride,
    bufferToFFI(metrics),
  );
}

export const def_glGetPathMetricRangeNV = {
  parameters: ["u32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathMetricRangeNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathMetricRangeNV
>;

export function GetPathMetricRangeNV(
  metricQueryMask: GLbitfield,
  firstPathName: GLuint,
  numPaths: GLsizei,
  stride: GLsizei,
  metrics: Buffer,
): void {
  fn_glGetPathMetricRangeNV.call(
    metricQueryMask,
    firstPathName,
    numPaths,
    stride,
    bufferToFFI(metrics),
  );
}

export const def_glGetPathSpacingNV = {
  parameters: [
    "u32",
    "i32",
    "u32",
    "buffer",
    "u32",
    "f32",
    "f32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glGetPathSpacingNV!: Deno.UnsafeFnPointer<typeof def_glGetPathSpacingNV>;

export function GetPathSpacingNV(
  pathListMode: GLenum,
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  advanceScale: GLfloat,
  kerningScale: GLfloat,
  transformType: GLenum,
  returnedSpacing: Buffer,
): void {
  fn_glGetPathSpacingNV.call(
    pathListMode,
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    advanceScale,
    kerningScale,
    transformType,
    bufferToFFI(returnedSpacing),
  );
}

export const def_glIsPointInFillPathNV = {
  parameters: ["u32", "u32", "f32", "f32"],
  result: "u8",
} as const;

let fn_glIsPointInFillPathNV!: Deno.UnsafeFnPointer<
  typeof def_glIsPointInFillPathNV
>;

export function IsPointInFillPathNV(
  path: GLuint,
  mask: GLuint,
  x: GLfloat,
  y: GLfloat,
): GLboolean {
  return fn_glIsPointInFillPathNV.call(
    path,
    mask,
    x,
    y,
  );
}

export const def_glIsPointInStrokePathNV = {
  parameters: ["u32", "f32", "f32"],
  result: "u8",
} as const;

let fn_glIsPointInStrokePathNV!: Deno.UnsafeFnPointer<
  typeof def_glIsPointInStrokePathNV
>;

export function IsPointInStrokePathNV(
  path: GLuint,
  x: GLfloat,
  y: GLfloat,
): GLboolean {
  return fn_glIsPointInStrokePathNV.call(
    path,
    x,
    y,
  );
}

export const def_glGetPathLengthNV = {
  parameters: ["u32", "i32", "i32"],
  result: "f32",
} as const;

let fn_glGetPathLengthNV!: Deno.UnsafeFnPointer<typeof def_glGetPathLengthNV>;

export function GetPathLengthNV(
  path: GLuint,
  startSegment: GLsizei,
  numSegments: GLsizei,
): GLfloat {
  return fn_glGetPathLengthNV.call(
    path,
    startSegment,
    numSegments,
  );
}

export const def_glPointAlongPathNV = {
  parameters: [
    "u32",
    "i32",
    "i32",
    "f32",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
  ],
  result: "u8",
} as const;

let fn_glPointAlongPathNV!: Deno.UnsafeFnPointer<typeof def_glPointAlongPathNV>;

export function PointAlongPathNV(
  path: GLuint,
  startSegment: GLsizei,
  numSegments: GLsizei,
  distance: GLfloat,
  x: Buffer,
  y: Buffer,
  tangentX: Buffer,
  tangentY: Buffer,
): GLboolean {
  return fn_glPointAlongPathNV.call(
    path,
    startSegment,
    numSegments,
    distance,
    bufferToFFI(x),
    bufferToFFI(y),
    bufferToFFI(tangentX),
    bufferToFFI(tangentY),
  );
}

export const def_glMatrixLoad3x2fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoad3x2fNV!: Deno.UnsafeFnPointer<typeof def_glMatrixLoad3x2fNV>;

export function MatrixLoad3x2fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoad3x2fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoad3x3fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoad3x3fNV!: Deno.UnsafeFnPointer<typeof def_glMatrixLoad3x3fNV>;

export function MatrixLoad3x3fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoad3x3fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoadTranspose3x3fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadTranspose3x3fNV!: Deno.UnsafeFnPointer<
  typeof def_glMatrixLoadTranspose3x3fNV
>;

export function MatrixLoadTranspose3x3fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadTranspose3x3fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMult3x2fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMult3x2fNV!: Deno.UnsafeFnPointer<typeof def_glMatrixMult3x2fNV>;

export function MatrixMult3x2fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMult3x2fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMult3x3fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMult3x3fNV!: Deno.UnsafeFnPointer<typeof def_glMatrixMult3x3fNV>;

export function MatrixMult3x3fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMult3x3fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultTranspose3x3fNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultTranspose3x3fNV!: Deno.UnsafeFnPointer<
  typeof def_glMatrixMultTranspose3x3fNV
>;

export function MatrixMultTranspose3x3fNV(
  matrixMode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultTranspose3x3fNV.call(
    matrixMode,
    bufferToFFI(m),
  );
}

export const def_glStencilThenCoverFillPathNV = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStencilThenCoverFillPathNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilThenCoverFillPathNV
>;

export function StencilThenCoverFillPathNV(
  path: GLuint,
  fillMode: GLenum,
  mask: GLuint,
  coverMode: GLenum,
): void {
  fn_glStencilThenCoverFillPathNV.call(
    path,
    fillMode,
    mask,
    coverMode,
  );
}

export const def_glStencilThenCoverStrokePathNV = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStencilThenCoverStrokePathNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilThenCoverStrokePathNV
>;

export function StencilThenCoverStrokePathNV(
  path: GLuint,
  reference: GLint,
  mask: GLuint,
  coverMode: GLenum,
): void {
  fn_glStencilThenCoverStrokePathNV.call(
    path,
    reference,
    mask,
    coverMode,
  );
}

export const def_glStencilThenCoverFillPathInstancedNV = {
  parameters: [
    "i32",
    "u32",
    "buffer",
    "u32",
    "u32",
    "u32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glStencilThenCoverFillPathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilThenCoverFillPathInstancedNV
>;

export function StencilThenCoverFillPathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  fillMode: GLenum,
  mask: GLuint,
  coverMode: GLenum,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glStencilThenCoverFillPathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    fillMode,
    mask,
    coverMode,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glStencilThenCoverStrokePathInstancedNV = {
  parameters: [
    "i32",
    "u32",
    "buffer",
    "u32",
    "i32",
    "u32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glStencilThenCoverStrokePathInstancedNV!: Deno.UnsafeFnPointer<
  typeof def_glStencilThenCoverStrokePathInstancedNV
>;

export function StencilThenCoverStrokePathInstancedNV(
  numPaths: GLsizei,
  pathNameType: GLenum,
  paths: Buffer,
  pathBase: GLuint,
  reference: GLint,
  mask: GLuint,
  coverMode: GLenum,
  transformType: GLenum,
  transformValues: Buffer,
): void {
  fn_glStencilThenCoverStrokePathInstancedNV.call(
    numPaths,
    pathNameType,
    bufferToFFI(paths),
    pathBase,
    reference,
    mask,
    coverMode,
    transformType,
    bufferToFFI(transformValues),
  );
}

export const def_glPathGlyphIndexRangeNV = {
  parameters: ["u32", "buffer", "u32", "u32", "f32", "buffer"],
  result: "u32",
} as const;

let fn_glPathGlyphIndexRangeNV!: Deno.UnsafeFnPointer<
  typeof def_glPathGlyphIndexRangeNV
>;

export function PathGlyphIndexRangeNV(
  fontTarget: GLenum,
  fontName: Buffer,
  fontStyle: GLbitfield,
  pathParameterTemplate: GLuint,
  emScale: GLfloat,
  baseAndCount: Buffer,
): GLenum {
  return fn_glPathGlyphIndexRangeNV.call(
    fontTarget,
    bufferToFFI(fontName),
    fontStyle,
    pathParameterTemplate,
    emScale,
    bufferToFFI(baseAndCount),
  );
}

export const def_glPathGlyphIndexArrayNV = {
  parameters: ["u32", "u32", "buffer", "u32", "u32", "i32", "u32", "f32"],
  result: "u32",
} as const;

let fn_glPathGlyphIndexArrayNV!: Deno.UnsafeFnPointer<
  typeof def_glPathGlyphIndexArrayNV
>;

export function PathGlyphIndexArrayNV(
  firstPathName: GLuint,
  fontTarget: GLenum,
  fontName: Buffer,
  fontStyle: GLbitfield,
  firstGlyphIndex: GLuint,
  numGlyphs: GLsizei,
  pathParameterTemplate: GLuint,
  emScale: GLfloat,
): GLenum {
  return fn_glPathGlyphIndexArrayNV.call(
    firstPathName,
    fontTarget,
    bufferToFFI(fontName),
    fontStyle,
    firstGlyphIndex,
    numGlyphs,
    pathParameterTemplate,
    emScale,
  );
}

export const def_glPathMemoryGlyphIndexArrayNV = {
  parameters: [
    "u32",
    "u32",
    "isize",
    "buffer",
    "i32",
    "u32",
    "i32",
    "u32",
    "f32",
  ],
  result: "u32",
} as const;

let fn_glPathMemoryGlyphIndexArrayNV!: Deno.UnsafeFnPointer<
  typeof def_glPathMemoryGlyphIndexArrayNV
>;

export function PathMemoryGlyphIndexArrayNV(
  firstPathName: GLuint,
  fontTarget: GLenum,
  fontSize: GLsizeiptr,
  fontData: Buffer,
  faceIndex: GLsizei,
  firstGlyphIndex: GLuint,
  numGlyphs: GLsizei,
  pathParameterTemplate: GLuint,
  emScale: GLfloat,
): GLenum {
  return fn_glPathMemoryGlyphIndexArrayNV.call(
    firstPathName,
    fontTarget,
    Deno.UnsafePointer.value(fontSize),
    bufferToFFI(fontData),
    faceIndex,
    firstGlyphIndex,
    numGlyphs,
    pathParameterTemplate,
    emScale,
  );
}

export const def_glProgramPathFragmentInputGenNV = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramPathFragmentInputGenNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramPathFragmentInputGenNV
>;

export function ProgramPathFragmentInputGenNV(
  program: GLuint,
  location: GLint,
  genMode: GLenum,
  components: GLint,
  coeffs: Buffer,
): void {
  fn_glProgramPathFragmentInputGenNV.call(
    program,
    location,
    genMode,
    components,
    bufferToFFI(coeffs),
  );
}

export const def_glGetProgramResourcefvNV = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramResourcefvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramResourcefvNV
>;

export function GetProgramResourcefvNV(
  program: GLuint,
  programInterface: GLenum,
  index: GLuint,
  propCount: GLsizei,
  props: Buffer,
  count: GLsizei,
  length: Buffer,
  params: Buffer,
): void {
  fn_glGetProgramResourcefvNV.call(
    program,
    programInterface,
    index,
    propCount,
    bufferToFFI(props),
    count,
    bufferToFFI(length),
    bufferToFFI(params),
  );
}

export const def_glPathColorGenNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glPathColorGenNV!: Deno.UnsafeFnPointer<typeof def_glPathColorGenNV>;

export function PathColorGenNV(
  color: GLenum,
  genMode: GLenum,
  colorFormat: GLenum,
  coeffs: Buffer,
): void {
  fn_glPathColorGenNV.call(
    color,
    genMode,
    colorFormat,
    bufferToFFI(coeffs),
  );
}

export const def_glPathTexGenNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPathTexGenNV!: Deno.UnsafeFnPointer<typeof def_glPathTexGenNV>;

export function PathTexGenNV(
  texCoordSet: GLenum,
  genMode: GLenum,
  components: GLint,
  coeffs: Buffer,
): void {
  fn_glPathTexGenNV.call(
    texCoordSet,
    genMode,
    components,
    bufferToFFI(coeffs),
  );
}

export const def_glPathFogGenNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPathFogGenNV!: Deno.UnsafeFnPointer<typeof def_glPathFogGenNV>;

export function PathFogGenNV(
  genMode: GLenum,
): void {
  fn_glPathFogGenNV.call(
    genMode,
  );
}

export const def_glGetPathColorGenivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathColorGenivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathColorGenivNV
>;

export function GetPathColorGenivNV(
  color: GLenum,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathColorGenivNV.call(
    color,
    pname,
    bufferToFFI(value),
  );
}

export const def_glGetPathColorGenfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathColorGenfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathColorGenfvNV
>;

export function GetPathColorGenfvNV(
  color: GLenum,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathColorGenfvNV.call(
    color,
    pname,
    bufferToFFI(value),
  );
}

export const def_glGetPathTexGenivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathTexGenivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathTexGenivNV
>;

export function GetPathTexGenivNV(
  texCoordSet: GLenum,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathTexGenivNV.call(
    texCoordSet,
    pname,
    bufferToFFI(value),
  );
}

export const def_glGetPathTexGenfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPathTexGenfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetPathTexGenfvNV
>;

export function GetPathTexGenfvNV(
  texCoordSet: GLenum,
  pname: GLenum,
  value: Buffer,
): void {
  fn_glGetPathTexGenfvNV.call(
    texCoordSet,
    pname,
    bufferToFFI(value),
  );
}

export const def_glMatrixFrustumEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixFrustumEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixFrustumEXT>;

export function MatrixFrustumEXT(
  mode: GLenum,
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glMatrixFrustumEXT.call(
    mode,
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
  );
}

export const def_glMatrixLoadIdentityEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixLoadIdentityEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixLoadIdentityEXT
>;

export function MatrixLoadIdentityEXT(
  mode: GLenum,
): void {
  fn_glMatrixLoadIdentityEXT.call(
    mode,
  );
}

export const def_glMatrixLoadTransposefEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadTransposefEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixLoadTransposefEXT
>;

export function MatrixLoadTransposefEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadTransposefEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoadTransposedEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadTransposedEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixLoadTransposedEXT
>;

export function MatrixLoadTransposedEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadTransposedEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoadfEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadfEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoadfEXT>;

export function MatrixLoadfEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadfEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoaddEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoaddEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoaddEXT>;

export function MatrixLoaddEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoaddEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultTransposefEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultTransposefEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixMultTransposefEXT
>;

export function MatrixMultTransposefEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultTransposefEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultTransposedEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultTransposedEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixMultTransposedEXT
>;

export function MatrixMultTransposedEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultTransposedEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultfEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultfEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultfEXT>;

export function MatrixMultfEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultfEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultdEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultdEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultdEXT>;

export function MatrixMultdEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultdEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixOrthoEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixOrthoEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixOrthoEXT>;

export function MatrixOrthoEXT(
  mode: GLenum,
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glMatrixOrthoEXT.call(
    mode,
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
  );
}

export const def_glMatrixPopEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixPopEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixPopEXT>;

export function MatrixPopEXT(
  mode: GLenum,
): void {
  fn_glMatrixPopEXT.call(
    mode,
  );
}

export const def_glMatrixPushEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixPushEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixPushEXT>;

export function MatrixPushEXT(
  mode: GLenum,
): void {
  fn_glMatrixPushEXT.call(
    mode,
  );
}

export const def_glMatrixRotatefEXT = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixRotatefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixRotatefEXT>;

export function MatrixRotatefEXT(
  mode: GLenum,
  angle: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixRotatefEXT.call(
    mode,
    angle,
    x,
    y,
    z,
  );
}

export const def_glMatrixRotatedEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixRotatedEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixRotatedEXT>;

export function MatrixRotatedEXT(
  mode: GLenum,
  angle: GLdouble,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixRotatedEXT.call(
    mode,
    angle,
    x,
    y,
    z,
  );
}

export const def_glMatrixScalefEXT = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixScalefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixScalefEXT>;

export function MatrixScalefEXT(
  mode: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixScalefEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixScaledEXT = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixScaledEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixScaledEXT>;

export function MatrixScaledEXT(
  mode: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixScaledEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixTranslatefEXT = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixTranslatefEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixTranslatefEXT
>;

export function MatrixTranslatefEXT(
  mode: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixTranslatefEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixTranslatedEXT = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixTranslatedEXT!: Deno.UnsafeFnPointer<
  typeof def_glMatrixTranslatedEXT
>;

export function MatrixTranslatedEXT(
  mode: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixTranslatedEXT.call(
    mode,
    x,
    y,
    z,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenPathsNV = new Deno.UnsafeFnPointer(
    proc("glGenPathsNV")!,
    def_glGenPathsNV,
  );
  fn_glDeletePathsNV = new Deno.UnsafeFnPointer(
    proc("glDeletePathsNV")!,
    def_glDeletePathsNV,
  );
  fn_glIsPathNV = new Deno.UnsafeFnPointer(proc("glIsPathNV")!, def_glIsPathNV);
  fn_glPathCommandsNV = new Deno.UnsafeFnPointer(
    proc("glPathCommandsNV")!,
    def_glPathCommandsNV,
  );
  fn_glPathCoordsNV = new Deno.UnsafeFnPointer(
    proc("glPathCoordsNV")!,
    def_glPathCoordsNV,
  );
  fn_glPathSubCommandsNV = new Deno.UnsafeFnPointer(
    proc("glPathSubCommandsNV")!,
    def_glPathSubCommandsNV,
  );
  fn_glPathSubCoordsNV = new Deno.UnsafeFnPointer(
    proc("glPathSubCoordsNV")!,
    def_glPathSubCoordsNV,
  );
  fn_glPathStringNV = new Deno.UnsafeFnPointer(
    proc("glPathStringNV")!,
    def_glPathStringNV,
  );
  fn_glPathGlyphsNV = new Deno.UnsafeFnPointer(
    proc("glPathGlyphsNV")!,
    def_glPathGlyphsNV,
  );
  fn_glPathGlyphRangeNV = new Deno.UnsafeFnPointer(
    proc("glPathGlyphRangeNV")!,
    def_glPathGlyphRangeNV,
  );
  fn_glWeightPathsNV = new Deno.UnsafeFnPointer(
    proc("glWeightPathsNV")!,
    def_glWeightPathsNV,
  );
  fn_glCopyPathNV = new Deno.UnsafeFnPointer(
    proc("glCopyPathNV")!,
    def_glCopyPathNV,
  );
  fn_glInterpolatePathsNV = new Deno.UnsafeFnPointer(
    proc("glInterpolatePathsNV")!,
    def_glInterpolatePathsNV,
  );
  fn_glTransformPathNV = new Deno.UnsafeFnPointer(
    proc("glTransformPathNV")!,
    def_glTransformPathNV,
  );
  fn_glPathParameterivNV = new Deno.UnsafeFnPointer(
    proc("glPathParameterivNV")!,
    def_glPathParameterivNV,
  );
  fn_glPathParameteriNV = new Deno.UnsafeFnPointer(
    proc("glPathParameteriNV")!,
    def_glPathParameteriNV,
  );
  fn_glPathParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glPathParameterfvNV")!,
    def_glPathParameterfvNV,
  );
  fn_glPathParameterfNV = new Deno.UnsafeFnPointer(
    proc("glPathParameterfNV")!,
    def_glPathParameterfNV,
  );
  fn_glPathDashArrayNV = new Deno.UnsafeFnPointer(
    proc("glPathDashArrayNV")!,
    def_glPathDashArrayNV,
  );
  fn_glPathStencilFuncNV = new Deno.UnsafeFnPointer(
    proc("glPathStencilFuncNV")!,
    def_glPathStencilFuncNV,
  );
  fn_glPathStencilDepthOffsetNV = new Deno.UnsafeFnPointer(
    proc("glPathStencilDepthOffsetNV")!,
    def_glPathStencilDepthOffsetNV,
  );
  fn_glStencilFillPathNV = new Deno.UnsafeFnPointer(
    proc("glStencilFillPathNV")!,
    def_glStencilFillPathNV,
  );
  fn_glStencilStrokePathNV = new Deno.UnsafeFnPointer(
    proc("glStencilStrokePathNV")!,
    def_glStencilStrokePathNV,
  );
  fn_glStencilFillPathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glStencilFillPathInstancedNV")!,
    def_glStencilFillPathInstancedNV,
  );
  fn_glStencilStrokePathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glStencilStrokePathInstancedNV")!,
    def_glStencilStrokePathInstancedNV,
  );
  fn_glPathCoverDepthFuncNV = new Deno.UnsafeFnPointer(
    proc("glPathCoverDepthFuncNV")!,
    def_glPathCoverDepthFuncNV,
  );
  fn_glCoverFillPathNV = new Deno.UnsafeFnPointer(
    proc("glCoverFillPathNV")!,
    def_glCoverFillPathNV,
  );
  fn_glCoverStrokePathNV = new Deno.UnsafeFnPointer(
    proc("glCoverStrokePathNV")!,
    def_glCoverStrokePathNV,
  );
  fn_glCoverFillPathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glCoverFillPathInstancedNV")!,
    def_glCoverFillPathInstancedNV,
  );
  fn_glCoverStrokePathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glCoverStrokePathInstancedNV")!,
    def_glCoverStrokePathInstancedNV,
  );
  fn_glGetPathParameterivNV = new Deno.UnsafeFnPointer(
    proc("glGetPathParameterivNV")!,
    def_glGetPathParameterivNV,
  );
  fn_glGetPathParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetPathParameterfvNV")!,
    def_glGetPathParameterfvNV,
  );
  fn_glGetPathCommandsNV = new Deno.UnsafeFnPointer(
    proc("glGetPathCommandsNV")!,
    def_glGetPathCommandsNV,
  );
  fn_glGetPathCoordsNV = new Deno.UnsafeFnPointer(
    proc("glGetPathCoordsNV")!,
    def_glGetPathCoordsNV,
  );
  fn_glGetPathDashArrayNV = new Deno.UnsafeFnPointer(
    proc("glGetPathDashArrayNV")!,
    def_glGetPathDashArrayNV,
  );
  fn_glGetPathMetricsNV = new Deno.UnsafeFnPointer(
    proc("glGetPathMetricsNV")!,
    def_glGetPathMetricsNV,
  );
  fn_glGetPathMetricRangeNV = new Deno.UnsafeFnPointer(
    proc("glGetPathMetricRangeNV")!,
    def_glGetPathMetricRangeNV,
  );
  fn_glGetPathSpacingNV = new Deno.UnsafeFnPointer(
    proc("glGetPathSpacingNV")!,
    def_glGetPathSpacingNV,
  );
  fn_glIsPointInFillPathNV = new Deno.UnsafeFnPointer(
    proc("glIsPointInFillPathNV")!,
    def_glIsPointInFillPathNV,
  );
  fn_glIsPointInStrokePathNV = new Deno.UnsafeFnPointer(
    proc("glIsPointInStrokePathNV")!,
    def_glIsPointInStrokePathNV,
  );
  fn_glGetPathLengthNV = new Deno.UnsafeFnPointer(
    proc("glGetPathLengthNV")!,
    def_glGetPathLengthNV,
  );
  fn_glPointAlongPathNV = new Deno.UnsafeFnPointer(
    proc("glPointAlongPathNV")!,
    def_glPointAlongPathNV,
  );
  fn_glMatrixLoad3x2fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixLoad3x2fNV")!,
    def_glMatrixLoad3x2fNV,
  );
  fn_glMatrixLoad3x3fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixLoad3x3fNV")!,
    def_glMatrixLoad3x3fNV,
  );
  fn_glMatrixLoadTranspose3x3fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixLoadTranspose3x3fNV")!,
    def_glMatrixLoadTranspose3x3fNV,
  );
  fn_glMatrixMult3x2fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixMult3x2fNV")!,
    def_glMatrixMult3x2fNV,
  );
  fn_glMatrixMult3x3fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixMult3x3fNV")!,
    def_glMatrixMult3x3fNV,
  );
  fn_glMatrixMultTranspose3x3fNV = new Deno.UnsafeFnPointer(
    proc("glMatrixMultTranspose3x3fNV")!,
    def_glMatrixMultTranspose3x3fNV,
  );
  fn_glStencilThenCoverFillPathNV = new Deno.UnsafeFnPointer(
    proc("glStencilThenCoverFillPathNV")!,
    def_glStencilThenCoverFillPathNV,
  );
  fn_glStencilThenCoverStrokePathNV = new Deno.UnsafeFnPointer(
    proc("glStencilThenCoverStrokePathNV")!,
    def_glStencilThenCoverStrokePathNV,
  );
  fn_glStencilThenCoverFillPathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glStencilThenCoverFillPathInstancedNV")!,
    def_glStencilThenCoverFillPathInstancedNV,
  );
  fn_glStencilThenCoverStrokePathInstancedNV = new Deno.UnsafeFnPointer(
    proc("glStencilThenCoverStrokePathInstancedNV")!,
    def_glStencilThenCoverStrokePathInstancedNV,
  );
  fn_glPathGlyphIndexRangeNV = new Deno.UnsafeFnPointer(
    proc("glPathGlyphIndexRangeNV")!,
    def_glPathGlyphIndexRangeNV,
  );
  fn_glPathGlyphIndexArrayNV = new Deno.UnsafeFnPointer(
    proc("glPathGlyphIndexArrayNV")!,
    def_glPathGlyphIndexArrayNV,
  );
  fn_glPathMemoryGlyphIndexArrayNV = new Deno.UnsafeFnPointer(
    proc("glPathMemoryGlyphIndexArrayNV")!,
    def_glPathMemoryGlyphIndexArrayNV,
  );
  fn_glProgramPathFragmentInputGenNV = new Deno.UnsafeFnPointer(
    proc("glProgramPathFragmentInputGenNV")!,
    def_glProgramPathFragmentInputGenNV,
  );
  fn_glGetProgramResourcefvNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramResourcefvNV")!,
    def_glGetProgramResourcefvNV,
  );
  fn_glPathColorGenNV = new Deno.UnsafeFnPointer(
    proc("glPathColorGenNV")!,
    def_glPathColorGenNV,
  );
  fn_glPathTexGenNV = new Deno.UnsafeFnPointer(
    proc("glPathTexGenNV")!,
    def_glPathTexGenNV,
  );
  fn_glPathFogGenNV = new Deno.UnsafeFnPointer(
    proc("glPathFogGenNV")!,
    def_glPathFogGenNV,
  );
  fn_glGetPathColorGenivNV = new Deno.UnsafeFnPointer(
    proc("glGetPathColorGenivNV")!,
    def_glGetPathColorGenivNV,
  );
  fn_glGetPathColorGenfvNV = new Deno.UnsafeFnPointer(
    proc("glGetPathColorGenfvNV")!,
    def_glGetPathColorGenfvNV,
  );
  fn_glGetPathTexGenivNV = new Deno.UnsafeFnPointer(
    proc("glGetPathTexGenivNV")!,
    def_glGetPathTexGenivNV,
  );
  fn_glGetPathTexGenfvNV = new Deno.UnsafeFnPointer(
    proc("glGetPathTexGenfvNV")!,
    def_glGetPathTexGenfvNV,
  );
  fn_glMatrixFrustumEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixFrustumEXT")!,
    def_glMatrixFrustumEXT,
  );
  fn_glMatrixLoadIdentityEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixLoadIdentityEXT")!,
    def_glMatrixLoadIdentityEXT,
  );
  fn_glMatrixLoadTransposefEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixLoadTransposefEXT")!,
    def_glMatrixLoadTransposefEXT,
  );
  fn_glMatrixLoadTransposedEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixLoadTransposedEXT")!,
    def_glMatrixLoadTransposedEXT,
  );
  fn_glMatrixLoadfEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixLoadfEXT")!,
    def_glMatrixLoadfEXT,
  );
  fn_glMatrixLoaddEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixLoaddEXT")!,
    def_glMatrixLoaddEXT,
  );
  fn_glMatrixMultTransposefEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixMultTransposefEXT")!,
    def_glMatrixMultTransposefEXT,
  );
  fn_glMatrixMultTransposedEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixMultTransposedEXT")!,
    def_glMatrixMultTransposedEXT,
  );
  fn_glMatrixMultfEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixMultfEXT")!,
    def_glMatrixMultfEXT,
  );
  fn_glMatrixMultdEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixMultdEXT")!,
    def_glMatrixMultdEXT,
  );
  fn_glMatrixOrthoEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixOrthoEXT")!,
    def_glMatrixOrthoEXT,
  );
  fn_glMatrixPopEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixPopEXT")!,
    def_glMatrixPopEXT,
  );
  fn_glMatrixPushEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixPushEXT")!,
    def_glMatrixPushEXT,
  );
  fn_glMatrixRotatefEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixRotatefEXT")!,
    def_glMatrixRotatefEXT,
  );
  fn_glMatrixRotatedEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixRotatedEXT")!,
    def_glMatrixRotatedEXT,
  );
  fn_glMatrixScalefEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixScalefEXT")!,
    def_glMatrixScalefEXT,
  );
  fn_glMatrixScaledEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixScaledEXT")!,
    def_glMatrixScaledEXT,
  );
  fn_glMatrixTranslatefEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixTranslatefEXT")!,
    def_glMatrixTranslatefEXT,
  );
  fn_glMatrixTranslatedEXT = new Deno.UnsafeFnPointer(
    proc("glMatrixTranslatedEXT")!,
    def_glMatrixTranslatedEXT,
  );
}
