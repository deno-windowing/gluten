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
export const VERSION_ES_CL_1_0 = 0x1;
export const VERSION_ES_CM_1_1 = 0x1;
export const VERSION_ES_CL_1_1 = 0x1;
export const DEPTH_BUFFER_BIT = 0x100;
export const STENCIL_BUFFER_BIT = 0x400;
export const COLOR_BUFFER_BIT = 0x4000;
export const FALSE = 0x0;
export const TRUE = 0x1;
export const POINTS = 0x0;
export const LINES = 0x1;
export const LINE_LOOP = 0x2;
export const LINE_STRIP = 0x3;
export const TRIANGLES = 0x4;
export const TRIANGLE_STRIP = 0x5;
export const TRIANGLE_FAN = 0x6;
export const NEVER = 0x200;
export const LESS = 0x201;
export const EQUAL = 0x202;
export const LEQUAL = 0x203;
export const GREATER = 0x204;
export const NOTEQUAL = 0x205;
export const GEQUAL = 0x206;
export const ALWAYS = 0x207;
export const ZERO = 0x0;
export const ONE = 0x1;
export const SRC_COLOR = 0x300;
export const ONE_MINUS_SRC_COLOR = 0x301;
export const SRC_ALPHA = 0x302;
export const ONE_MINUS_SRC_ALPHA = 0x303;
export const DST_ALPHA = 0x304;
export const ONE_MINUS_DST_ALPHA = 0x305;
export const DST_COLOR = 0x306;
export const ONE_MINUS_DST_COLOR = 0x307;
export const SRC_ALPHA_SATURATE = 0x308;
export const CLIP_PLANE0 = 0x3000;
export const CLIP_PLANE1 = 0x3001;
export const CLIP_PLANE2 = 0x3002;
export const CLIP_PLANE3 = 0x3003;
export const CLIP_PLANE4 = 0x3004;
export const CLIP_PLANE5 = 0x3005;
export const FRONT = 0x404;
export const BACK = 0x405;
export const FRONT_AND_BACK = 0x408;
export const FOG = 0xb60;
export const LIGHTING = 0xb50;
export const TEXTURE_2D = 0xde1;
export const CULL_FACE = 0xb44;
export const ALPHA_TEST = 0xbc0;
export const BLEND = 0xbe2;
export const COLOR_LOGIC_OP = 0xbf2;
export const DITHER = 0xbd0;
export const STENCIL_TEST = 0xb90;
export const DEPTH_TEST = 0xb71;
export const POINT_SMOOTH = 0xb10;
export const LINE_SMOOTH = 0xb20;
export const SCISSOR_TEST = 0xc11;
export const COLOR_MATERIAL = 0xb57;
export const NORMALIZE = 0xba1;
export const RESCALE_NORMAL = 0x803a;
export const VERTEX_ARRAY = 0x8074;
export const NORMAL_ARRAY = 0x8075;
export const COLOR_ARRAY = 0x8076;
export const TEXTURE_COORD_ARRAY = 0x8078;
export const MULTISAMPLE = 0x809d;
export const SAMPLE_ALPHA_TO_COVERAGE = 0x809e;
export const SAMPLE_ALPHA_TO_ONE = 0x809f;
export const SAMPLE_COVERAGE = 0x80a0;
export const NO_ERROR = 0x0;
export const INVALID_ENUM = 0x500;
export const INVALID_VALUE = 0x501;
export const INVALID_OPERATION = 0x502;
export const STACK_OVERFLOW = 0x503;
export const STACK_UNDERFLOW = 0x504;
export const OUT_OF_MEMORY = 0x505;
export const EXP = 0x800;
export const EXP2 = 0x801;
export const FOG_DENSITY = 0xb62;
export const FOG_START = 0xb63;
export const FOG_END = 0xb64;
export const FOG_MODE = 0xb65;
export const FOG_COLOR = 0xb66;
export const CW = 0x900;
export const CCW = 0x901;
export const CURRENT_COLOR = 0xb00;
export const CURRENT_NORMAL = 0xb02;
export const CURRENT_TEXTURE_COORDS = 0xb03;
export const POINT_SIZE = 0xb11;
export const POINT_SIZE_MIN = 0x8126;
export const POINT_SIZE_MAX = 0x8127;
export const POINT_FADE_THRESHOLD_SIZE = 0x8128;
export const POINT_DISTANCE_ATTENUATION = 0x8129;
export const SMOOTH_POINT_SIZE_RANGE = 0xb12;
export const LINE_WIDTH = 0xb21;
export const SMOOTH_LINE_WIDTH_RANGE = 0xb22;
export const ALIASED_POINT_SIZE_RANGE = 0x846d;
export const ALIASED_LINE_WIDTH_RANGE = 0x846e;
export const CULL_FACE_MODE = 0xb45;
export const FRONT_FACE = 0xb46;
export const SHADE_MODEL = 0xb54;
export const DEPTH_RANGE = 0xb70;
export const DEPTH_WRITEMASK = 0xb72;
export const DEPTH_CLEAR_VALUE = 0xb73;
export const DEPTH_FUNC = 0xb74;
export const STENCIL_CLEAR_VALUE = 0xb91;
export const STENCIL_FUNC = 0xb92;
export const STENCIL_VALUE_MASK = 0xb93;
export const STENCIL_FAIL = 0xb94;
export const STENCIL_PASS_DEPTH_FAIL = 0xb95;
export const STENCIL_PASS_DEPTH_PASS = 0xb96;
export const STENCIL_REF = 0xb97;
export const STENCIL_WRITEMASK = 0xb98;
export const MATRIX_MODE = 0xba0;
export const VIEWPORT = 0xba2;
export const MODELVIEW_STACK_DEPTH = 0xba3;
export const PROJECTION_STACK_DEPTH = 0xba4;
export const TEXTURE_STACK_DEPTH = 0xba5;
export const MODELVIEW_MATRIX = 0xba6;
export const PROJECTION_MATRIX = 0xba7;
export const TEXTURE_MATRIX = 0xba8;
export const ALPHA_TEST_FUNC = 0xbc1;
export const ALPHA_TEST_REF = 0xbc2;
export const BLEND_DST = 0xbe0;
export const BLEND_SRC = 0xbe1;
export const LOGIC_OP_MODE = 0xbf0;
export const SCISSOR_BOX = 0xc10;
export const COLOR_CLEAR_VALUE = 0xc22;
export const COLOR_WRITEMASK = 0xc23;
export const MAX_LIGHTS = 0xd31;
export const MAX_CLIP_PLANES = 0xd32;
export const MAX_TEXTURE_SIZE = 0xd33;
export const MAX_MODELVIEW_STACK_DEPTH = 0xd36;
export const MAX_PROJECTION_STACK_DEPTH = 0xd38;
export const MAX_TEXTURE_STACK_DEPTH = 0xd39;
export const MAX_VIEWPORT_DIMS = 0xd3a;
export const MAX_TEXTURE_UNITS = 0x84e2;
export const SUBPIXEL_BITS = 0xd50;
export const RED_BITS = 0xd52;
export const GREEN_BITS = 0xd53;
export const BLUE_BITS = 0xd54;
export const ALPHA_BITS = 0xd55;
export const DEPTH_BITS = 0xd56;
export const STENCIL_BITS = 0xd57;
export const POLYGON_OFFSET_UNITS = 0x2a00;
export const POLYGON_OFFSET_FILL = 0x8037;
export const POLYGON_OFFSET_FACTOR = 0x8038;
export const TEXTURE_BINDING_2D = 0x8069;
export const VERTEX_ARRAY_SIZE = 0x807a;
export const VERTEX_ARRAY_TYPE = 0x807b;
export const VERTEX_ARRAY_STRIDE = 0x807c;
export const NORMAL_ARRAY_TYPE = 0x807e;
export const NORMAL_ARRAY_STRIDE = 0x807f;
export const COLOR_ARRAY_SIZE = 0x8081;
export const COLOR_ARRAY_TYPE = 0x8082;
export const COLOR_ARRAY_STRIDE = 0x8083;
export const TEXTURE_COORD_ARRAY_SIZE = 0x8088;
export const TEXTURE_COORD_ARRAY_TYPE = 0x8089;
export const TEXTURE_COORD_ARRAY_STRIDE = 0x808a;
export const VERTEX_ARRAY_POINTER = 0x808e;
export const NORMAL_ARRAY_POINTER = 0x808f;
export const COLOR_ARRAY_POINTER = 0x8090;
export const TEXTURE_COORD_ARRAY_POINTER = 0x8092;
export const SAMPLE_BUFFERS = 0x80a8;
export const SAMPLES = 0x80a9;
export const SAMPLE_COVERAGE_VALUE = 0x80aa;
export const SAMPLE_COVERAGE_INVERT = 0x80ab;
export const NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;
export const COMPRESSED_TEXTURE_FORMATS = 0x86a3;
export const DONT_CARE = 0x1100;
export const FASTEST = 0x1101;
export const NICEST = 0x1102;
export const PERSPECTIVE_CORRECTION_HINT = 0xc50;
export const POINT_SMOOTH_HINT = 0xc51;
export const LINE_SMOOTH_HINT = 0xc52;
export const FOG_HINT = 0xc54;
export const GENERATE_MIPMAP_HINT = 0x8192;
export const LIGHT_MODEL_AMBIENT = 0xb53;
export const LIGHT_MODEL_TWO_SIDE = 0xb52;
export const AMBIENT = 0x1200;
export const DIFFUSE = 0x1201;
export const SPECULAR = 0x1202;
export const POSITION = 0x1203;
export const SPOT_DIRECTION = 0x1204;
export const SPOT_EXPONENT = 0x1205;
export const SPOT_CUTOFF = 0x1206;
export const CONSTANT_ATTENUATION = 0x1207;
export const LINEAR_ATTENUATION = 0x1208;
export const QUADRATIC_ATTENUATION = 0x1209;
export const BYTE = 0x1400;
export const UNSIGNED_BYTE = 0x1401;
export const SHORT = 0x1402;
export const UNSIGNED_SHORT = 0x1403;
export const FLOAT = 0x1406;
export const FIXED = 0x140c;
export const CLEAR = 0x1500;
export const AND = 0x1501;
export const AND_REVERSE = 0x1502;
export const COPY = 0x1503;
export const AND_INVERTED = 0x1504;
export const NOOP = 0x1505;
export const XOR = 0x1506;
export const OR = 0x1507;
export const NOR = 0x1508;
export const EQUIV = 0x1509;
export const INVERT = 0x150a;
export const OR_REVERSE = 0x150b;
export const COPY_INVERTED = 0x150c;
export const OR_INVERTED = 0x150d;
export const NAND = 0x150e;
export const SET = 0x150f;
export const EMISSION = 0x1600;
export const SHININESS = 0x1601;
export const AMBIENT_AND_DIFFUSE = 0x1602;
export const MODELVIEW = 0x1700;
export const PROJECTION = 0x1701;
export const TEXTURE = 0x1702;
export const ALPHA = 0x1906;
export const RGB = 0x1907;
export const RGBA = 0x1908;
export const LUMINANCE = 0x1909;
export const LUMINANCE_ALPHA = 0x190a;
export const UNPACK_ALIGNMENT = 0xcf5;
export const PACK_ALIGNMENT = 0xd05;
export const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
export const UNSIGNED_SHORT_5_6_5 = 0x8363;
export const FLAT = 0x1d00;
export const SMOOTH = 0x1d01;
export const KEEP = 0x1e00;
export const REPLACE = 0x1e01;
export const INCR = 0x1e02;
export const DECR = 0x1e03;
export const VENDOR = 0x1f00;
export const RENDERER = 0x1f01;
export const VERSION = 0x1f02;
export const EXTENSIONS = 0x1f03;
export const MODULATE = 0x2100;
export const DECAL = 0x2101;
export const ADD = 0x104;
export const TEXTURE_ENV_MODE = 0x2200;
export const TEXTURE_ENV_COLOR = 0x2201;
export const TEXTURE_ENV = 0x2300;
export const NEAREST = 0x2600;
export const LINEAR = 0x2601;
export const NEAREST_MIPMAP_NEAREST = 0x2700;
export const LINEAR_MIPMAP_NEAREST = 0x2701;
export const NEAREST_MIPMAP_LINEAR = 0x2702;
export const LINEAR_MIPMAP_LINEAR = 0x2703;
export const TEXTURE_MAG_FILTER = 0x2800;
export const TEXTURE_MIN_FILTER = 0x2801;
export const TEXTURE_WRAP_S = 0x2802;
export const TEXTURE_WRAP_T = 0x2803;
export const GENERATE_MIPMAP = 0x8191;
export const TEXTURE0 = 0x84c0;
export const TEXTURE1 = 0x84c1;
export const TEXTURE2 = 0x84c2;
export const TEXTURE3 = 0x84c3;
export const TEXTURE4 = 0x84c4;
export const TEXTURE5 = 0x84c5;
export const TEXTURE6 = 0x84c6;
export const TEXTURE7 = 0x84c7;
export const TEXTURE8 = 0x84c8;
export const TEXTURE9 = 0x84c9;
export const TEXTURE10 = 0x84ca;
export const TEXTURE11 = 0x84cb;
export const TEXTURE12 = 0x84cc;
export const TEXTURE13 = 0x84cd;
export const TEXTURE14 = 0x84ce;
export const TEXTURE15 = 0x84cf;
export const TEXTURE16 = 0x84d0;
export const TEXTURE17 = 0x84d1;
export const TEXTURE18 = 0x84d2;
export const TEXTURE19 = 0x84d3;
export const TEXTURE20 = 0x84d4;
export const TEXTURE21 = 0x84d5;
export const TEXTURE22 = 0x84d6;
export const TEXTURE23 = 0x84d7;
export const TEXTURE24 = 0x84d8;
export const TEXTURE25 = 0x84d9;
export const TEXTURE26 = 0x84da;
export const TEXTURE27 = 0x84db;
export const TEXTURE28 = 0x84dc;
export const TEXTURE29 = 0x84dd;
export const TEXTURE30 = 0x84de;
export const TEXTURE31 = 0x84df;
export const ACTIVE_TEXTURE = 0x84e0;
export const CLIENT_ACTIVE_TEXTURE = 0x84e1;
export const REPEAT = 0x2901;
export const CLAMP_TO_EDGE = 0x812f;
export const LIGHT0 = 0x4000;
export const LIGHT1 = 0x4001;
export const LIGHT2 = 0x4002;
export const LIGHT3 = 0x4003;
export const LIGHT4 = 0x4004;
export const LIGHT5 = 0x4005;
export const LIGHT6 = 0x4006;
export const LIGHT7 = 0x4007;
export const ARRAY_BUFFER = 0x8892;
export const ELEMENT_ARRAY_BUFFER = 0x8893;
export const ARRAY_BUFFER_BINDING = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
export const VERTEX_ARRAY_BUFFER_BINDING = 0x8896;
export const NORMAL_ARRAY_BUFFER_BINDING = 0x8897;
export const COLOR_ARRAY_BUFFER_BINDING = 0x8898;
export const TEXTURE_COORD_ARRAY_BUFFER_BINDING = 0x889a;
export const STATIC_DRAW = 0x88e4;
export const DYNAMIC_DRAW = 0x88e8;
export const BUFFER_SIZE = 0x8764;
export const BUFFER_USAGE = 0x8765;
export const SUBTRACT = 0x84e7;
export const COMBINE = 0x8570;
export const COMBINE_RGB = 0x8571;
export const COMBINE_ALPHA = 0x8572;
export const RGB_SCALE = 0x8573;
export const ADD_SIGNED = 0x8574;
export const INTERPOLATE = 0x8575;
export const CONSTANT = 0x8576;
export const PRIMARY_COLOR = 0x8577;
export const PREVIOUS = 0x8578;
export const OPERAND0_RGB = 0x8590;
export const OPERAND1_RGB = 0x8591;
export const OPERAND2_RGB = 0x8592;
export const OPERAND0_ALPHA = 0x8598;
export const OPERAND1_ALPHA = 0x8599;
export const OPERAND2_ALPHA = 0x859a;
export const ALPHA_SCALE = 0xd1c;
export const SRC0_RGB = 0x8580;
export const SRC1_RGB = 0x8581;
export const SRC2_RGB = 0x8582;
export const SRC0_ALPHA = 0x8588;
export const SRC1_ALPHA = 0x8589;
export const SRC2_ALPHA = 0x858a;
export const DOT3_RGB = 0x86ae;
export const DOT3_RGBA = 0x86af;

/// Commands

export const def_glAlphaFunc = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glAlphaFunc!: Deno.UnsafeFnPointer<typeof def_glAlphaFunc>;

export function AlphaFunc(
  func: GLenum,
  ref: GLfloat,
): void {
  fn_glAlphaFunc.call(
    func,
    ref,
  );
}

export const def_glClearColor = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glClearColor!: Deno.UnsafeFnPointer<typeof def_glClearColor>;

export function ClearColor(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
  alpha: GLfloat,
): void {
  fn_glClearColor.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearDepthf = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glClearDepthf!: Deno.UnsafeFnPointer<typeof def_glClearDepthf>;

export function ClearDepthf(
  d: GLfloat,
): void {
  fn_glClearDepthf.call(
    d,
  );
}

export const def_glClipPlanef = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanef!: Deno.UnsafeFnPointer<typeof def_glClipPlanef>;

export function ClipPlanef(
  p: GLenum,
  eqn: Buffer,
): void {
  fn_glClipPlanef.call(
    p,
    bufferToFFI(eqn),
  );
}

export const def_glColor4f = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor4f!: Deno.UnsafeFnPointer<typeof def_glColor4f>;

export function Color4f(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
  alpha: GLfloat,
): void {
  fn_glColor4f.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glDepthRangef = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glDepthRangef!: Deno.UnsafeFnPointer<typeof def_glDepthRangef>;

export function DepthRangef(
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glDepthRangef.call(
    n,
    f,
  );
}

export const def_glFogf = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glFogf!: Deno.UnsafeFnPointer<typeof def_glFogf>;

export function Fogf(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glFogf.call(
    pname,
    param,
  );
}

export const def_glFogfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFogfv!: Deno.UnsafeFnPointer<typeof def_glFogfv>;

export function Fogfv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFogfv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glFrustumf = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glFrustumf!: Deno.UnsafeFnPointer<typeof def_glFrustumf>;

export function Frustumf(
  l: GLfloat,
  r: GLfloat,
  b: GLfloat,
  t: GLfloat,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glFrustumf.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glGetClipPlanef = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetClipPlanef!: Deno.UnsafeFnPointer<typeof def_glGetClipPlanef>;

export function GetClipPlanef(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glGetClipPlanef.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glGetFloatv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloatv!: Deno.UnsafeFnPointer<typeof def_glGetFloatv>;

export function GetFloatv(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetFloatv.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetLightfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLightfv!: Deno.UnsafeFnPointer<typeof def_glGetLightfv>;

export function GetLightfv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetLightfv.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMaterialfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMaterialfv!: Deno.UnsafeFnPointer<typeof def_glGetMaterialfv>;

export function GetMaterialfv(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMaterialfv.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexEnvfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexEnvfv!: Deno.UnsafeFnPointer<typeof def_glGetTexEnvfv>;

export function GetTexEnvfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexEnvfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterfv
>;

export function GetTexParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLightModelf = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glLightModelf!: Deno.UnsafeFnPointer<typeof def_glLightModelf>;

export function LightModelf(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glLightModelf.call(
    pname,
    param,
  );
}

export const def_glLightModelfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glLightModelfv!: Deno.UnsafeFnPointer<typeof def_glLightModelfv>;

export function LightModelfv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightModelfv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glLightf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glLightf!: Deno.UnsafeFnPointer<typeof def_glLightf>;

export function Lightf(
  light: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glLightf.call(
    light,
    pname,
    param,
  );
}

export const def_glLightfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glLightfv!: Deno.UnsafeFnPointer<typeof def_glLightfv>;

export function Lightfv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightfv.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLineWidth = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glLineWidth!: Deno.UnsafeFnPointer<typeof def_glLineWidth>;

export function LineWidth(
  width: GLfloat,
): void {
  fn_glLineWidth.call(
    width,
  );
}

export const def_glLoadMatrixf = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadMatrixf!: Deno.UnsafeFnPointer<typeof def_glLoadMatrixf>;

export function LoadMatrixf(
  m: Buffer,
): void {
  fn_glLoadMatrixf.call(
    bufferToFFI(m),
  );
}

export const def_glMaterialf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glMaterialf!: Deno.UnsafeFnPointer<typeof def_glMaterialf>;

export function Materialf(
  face: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glMaterialf.call(
    face,
    pname,
    param,
  );
}

export const def_glMaterialfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMaterialfv!: Deno.UnsafeFnPointer<typeof def_glMaterialfv>;

export function Materialfv(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMaterialfv.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultMatrixf = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultMatrixf!: Deno.UnsafeFnPointer<typeof def_glMultMatrixf>;

export function MultMatrixf(
  m: Buffer,
): void {
  fn_glMultMatrixf.call(
    bufferToFFI(m),
  );
}

export const def_glMultiTexCoord4f = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4f!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4f>;

export function MultiTexCoord4f(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  q: GLfloat,
): void {
  fn_glMultiTexCoord4f.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glNormal3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glNormal3f!: Deno.UnsafeFnPointer<typeof def_glNormal3f>;

export function Normal3f(
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
): void {
  fn_glNormal3f.call(
    nx,
    ny,
    nz,
  );
}

export const def_glOrthof = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glOrthof!: Deno.UnsafeFnPointer<typeof def_glOrthof>;

export function Orthof(
  l: GLfloat,
  r: GLfloat,
  b: GLfloat,
  t: GLfloat,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glOrthof.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glPointParameterf = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPointParameterf!: Deno.UnsafeFnPointer<typeof def_glPointParameterf>;

export function PointParameterf(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPointParameterf.call(
    pname,
    param,
  );
}

export const def_glPointParameterfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameterfv!: Deno.UnsafeFnPointer<typeof def_glPointParameterfv>;

export function PointParameterfv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameterfv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glPointSize = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glPointSize!: Deno.UnsafeFnPointer<typeof def_glPointSize>;

export function PointSize(
  size: GLfloat,
): void {
  fn_glPointSize.call(
    size,
  );
}

export const def_glPolygonOffset = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glPolygonOffset!: Deno.UnsafeFnPointer<typeof def_glPolygonOffset>;

export function PolygonOffset(
  factor: GLfloat,
  units: GLfloat,
): void {
  fn_glPolygonOffset.call(
    factor,
    units,
  );
}

export const def_glRotatef = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glRotatef!: Deno.UnsafeFnPointer<typeof def_glRotatef>;

export function Rotatef(
  angle: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glRotatef.call(
    angle,
    x,
    y,
    z,
  );
}

export const def_glScalef = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glScalef!: Deno.UnsafeFnPointer<typeof def_glScalef>;

export function Scalef(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glScalef.call(
    x,
    y,
    z,
  );
}

export const def_glTexEnvf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTexEnvf!: Deno.UnsafeFnPointer<typeof def_glTexEnvf>;

export function TexEnvf(
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTexEnvf.call(
    target,
    pname,
    param,
  );
}

export const def_glTexEnvfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexEnvfv!: Deno.UnsafeFnPointer<typeof def_glTexEnvfv>;

export function TexEnvfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexEnvfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTexParameterf!: Deno.UnsafeFnPointer<typeof def_glTexParameterf>;

export function TexParameterf(
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTexParameterf.call(
    target,
    pname,
    param,
  );
}

export const def_glTexParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterfv!: Deno.UnsafeFnPointer<typeof def_glTexParameterfv>;

export function TexParameterfv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterfv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTranslatef = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTranslatef!: Deno.UnsafeFnPointer<typeof def_glTranslatef>;

export function Translatef(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTranslatef.call(
    x,
    y,
    z,
  );
}

export const def_glActiveTexture = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glActiveTexture!: Deno.UnsafeFnPointer<typeof def_glActiveTexture>;

export function ActiveTexture(
  texture: GLenum,
): void {
  fn_glActiveTexture.call(
    texture,
  );
}

export const def_glAlphaFuncx = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glAlphaFuncx!: Deno.UnsafeFnPointer<typeof def_glAlphaFuncx>;

export function AlphaFuncx(
  func: GLenum,
  ref: GLfixed,
): void {
  fn_glAlphaFuncx.call(
    func,
    ref,
  );
}

export const def_glBindBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindBuffer!: Deno.UnsafeFnPointer<typeof def_glBindBuffer>;

export function BindBuffer(
  target: GLenum,
  buffer: GLuint,
): void {
  fn_glBindBuffer.call(
    target,
    buffer,
  );
}

export const def_glBindTexture = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTexture!: Deno.UnsafeFnPointer<typeof def_glBindTexture>;

export function BindTexture(
  target: GLenum,
  texture: GLuint,
): void {
  fn_glBindTexture.call(
    target,
    texture,
  );
}

export const def_glBlendFunc = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFunc!: Deno.UnsafeFnPointer<typeof def_glBlendFunc>;

export function BlendFunc(
  sfactor: GLenum,
  dfactor: GLenum,
): void {
  fn_glBlendFunc.call(
    sfactor,
    dfactor,
  );
}

export const def_glBufferData = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glBufferData!: Deno.UnsafeFnPointer<typeof def_glBufferData>;

export function BufferData(
  target: GLenum,
  size: GLsizeiptr,
  data: Buffer,
  usage: GLenum,
): void {
  fn_glBufferData.call(
    target,
    size,
    bufferToFFI(data),
    usage,
  );
}

export const def_glBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glBufferSubData!: Deno.UnsafeFnPointer<typeof def_glBufferSubData>;

export function BufferSubData(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glBufferSubData.call(
    target,
    bufferToFFI(offset),
    size,
    bufferToFFI(data),
  );
}

export const def_glClear = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glClear!: Deno.UnsafeFnPointer<typeof def_glClear>;

export function Clear(
  mask: GLbitfield,
): void {
  fn_glClear.call(
    mask,
  );
}

export const def_glClearColorx = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glClearColorx!: Deno.UnsafeFnPointer<typeof def_glClearColorx>;

export function ClearColorx(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glClearColorx.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearDepthx = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glClearDepthx!: Deno.UnsafeFnPointer<typeof def_glClearDepthx>;

export function ClearDepthx(
  depth: GLfixed,
): void {
  fn_glClearDepthx.call(
    depth,
  );
}

export const def_glClearStencil = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glClearStencil!: Deno.UnsafeFnPointer<typeof def_glClearStencil>;

export function ClearStencil(
  s: GLint,
): void {
  fn_glClearStencil.call(
    s,
  );
}

export const def_glClientActiveTexture = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glClientActiveTexture!: Deno.UnsafeFnPointer<
  typeof def_glClientActiveTexture
>;

export function ClientActiveTexture(
  texture: GLenum,
): void {
  fn_glClientActiveTexture.call(
    texture,
  );
}

export const def_glClipPlanex = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanex!: Deno.UnsafeFnPointer<typeof def_glClipPlanex>;

export function ClipPlanex(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glClipPlanex.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glColor4ub = {
  parameters: ["u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColor4ub!: Deno.UnsafeFnPointer<typeof def_glColor4ub>;

export function Color4ub(
  red: GLubyte,
  green: GLubyte,
  blue: GLubyte,
  alpha: GLubyte,
): void {
  fn_glColor4ub.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4x = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glColor4x!: Deno.UnsafeFnPointer<typeof def_glColor4x>;

export function Color4x(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glColor4x.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColorMask = {
  parameters: ["u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColorMask!: Deno.UnsafeFnPointer<typeof def_glColorMask>;

export function ColorMask(
  red: GLboolean,
  green: GLboolean,
  blue: GLboolean,
  alpha: GLboolean,
): void {
  fn_glColorMask.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColorPointer = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glColorPointer!: Deno.UnsafeFnPointer<typeof def_glColorPointer>;

export function ColorPointer(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glColorPointer.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glCompressedTexImage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage2D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexImage2D
>;

export function CompressedTexImage2D(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage2D.call(
    target,
    level,
    internalformat,
    width,
    height,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage2D = {
  parameters: [
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glCompressedTexSubImage2D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexSubImage2D
>;

export function CompressedTexSubImage2D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage2D.call(
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCopyTexImage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexImage2D!: Deno.UnsafeFnPointer<typeof def_glCopyTexImage2D>;

export function CopyTexImage2D(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
): void {
  fn_glCopyTexImage2D.call(
    target,
    level,
    internalformat,
    x,
    y,
    width,
    height,
    border,
  );
}

export const def_glCopyTexSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage2D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage2D
>;

export function CopyTexSubImage2D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTexSubImage2D.call(
    target,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glCullFace = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCullFace!: Deno.UnsafeFnPointer<typeof def_glCullFace>;

export function CullFace(
  mode: GLenum,
): void {
  fn_glCullFace.call(
    mode,
  );
}

export const def_glDeleteBuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteBuffers!: Deno.UnsafeFnPointer<typeof def_glDeleteBuffers>;

export function DeleteBuffers(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glDeleteBuffers.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glDeleteTextures = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteTextures!: Deno.UnsafeFnPointer<typeof def_glDeleteTextures>;

export function DeleteTextures(
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glDeleteTextures.call(
    n,
    bufferToFFI(textures),
  );
}

export const def_glDepthFunc = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDepthFunc!: Deno.UnsafeFnPointer<typeof def_glDepthFunc>;

export function DepthFunc(
  func: GLenum,
): void {
  fn_glDepthFunc.call(
    func,
  );
}

export const def_glDepthMask = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glDepthMask!: Deno.UnsafeFnPointer<typeof def_glDepthMask>;

export function DepthMask(
  flag: GLboolean,
): void {
  fn_glDepthMask.call(
    flag,
  );
}

export const def_glDepthRangex = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glDepthRangex!: Deno.UnsafeFnPointer<typeof def_glDepthRangex>;

export function DepthRangex(
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glDepthRangex.call(
    n,
    f,
  );
}

export const def_glDisable = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisable!: Deno.UnsafeFnPointer<typeof def_glDisable>;

export function Disable(
  cap: GLenum,
): void {
  fn_glDisable.call(
    cap,
  );
}

export const def_glDisableClientState = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisableClientState!: Deno.UnsafeFnPointer<
  typeof def_glDisableClientState
>;

export function DisableClientState(
  array: GLenum,
): void {
  fn_glDisableClientState.call(
    array,
  );
}

export const def_glDrawArrays = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArrays!: Deno.UnsafeFnPointer<typeof def_glDrawArrays>;

export function DrawArrays(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
): void {
  fn_glDrawArrays.call(
    mode,
    first,
    count,
  );
}

export const def_glDrawElements = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawElements!: Deno.UnsafeFnPointer<typeof def_glDrawElements>;

export function DrawElements(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
): void {
  fn_glDrawElements.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
  );
}

export const def_glEnable = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnable!: Deno.UnsafeFnPointer<typeof def_glEnable>;

export function Enable(
  cap: GLenum,
): void {
  fn_glEnable.call(
    cap,
  );
}

export const def_glEnableClientState = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableClientState!: Deno.UnsafeFnPointer<
  typeof def_glEnableClientState
>;

export function EnableClientState(
  array: GLenum,
): void {
  fn_glEnableClientState.call(
    array,
  );
}

export const def_glFinish = {
  parameters: [],
  result: "void",
} as const;

let fn_glFinish!: Deno.UnsafeFnPointer<typeof def_glFinish>;

export function Finish(): void {
  fn_glFinish.call();
}

export const def_glFlush = {
  parameters: [],
  result: "void",
} as const;

let fn_glFlush!: Deno.UnsafeFnPointer<typeof def_glFlush>;

export function Flush(): void {
  fn_glFlush.call();
}

export const def_glFogx = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glFogx!: Deno.UnsafeFnPointer<typeof def_glFogx>;

export function Fogx(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glFogx.call(
    pname,
    param,
  );
}

export const def_glFogxv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFogxv!: Deno.UnsafeFnPointer<typeof def_glFogxv>;

export function Fogxv(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glFogxv.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glFrontFace = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glFrontFace!: Deno.UnsafeFnPointer<typeof def_glFrontFace>;

export function FrontFace(
  mode: GLenum,
): void {
  fn_glFrontFace.call(
    mode,
  );
}

export const def_glFrustumx = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFrustumx!: Deno.UnsafeFnPointer<typeof def_glFrustumx>;

export function Frustumx(
  l: GLfixed,
  r: GLfixed,
  b: GLfixed,
  t: GLfixed,
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glFrustumx.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glGetBooleanv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBooleanv!: Deno.UnsafeFnPointer<typeof def_glGetBooleanv>;

export function GetBooleanv(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetBooleanv.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetBufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetBufferParameteriv
>;

export function GetBufferParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetClipPlanex = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetClipPlanex!: Deno.UnsafeFnPointer<typeof def_glGetClipPlanex>;

export function GetClipPlanex(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glGetClipPlanex.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glGenBuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenBuffers!: Deno.UnsafeFnPointer<typeof def_glGenBuffers>;

export function GenBuffers(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glGenBuffers.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glGenTextures = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenTextures!: Deno.UnsafeFnPointer<typeof def_glGenTextures>;

export function GenTextures(
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glGenTextures.call(
    n,
    bufferToFFI(textures),
  );
}

export const def_glGetError = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetError!: Deno.UnsafeFnPointer<typeof def_glGetError>;

export function GetError(): GLenum {
  return fn_glGetError.call();
}

export const def_glGetFixedv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFixedv!: Deno.UnsafeFnPointer<typeof def_glGetFixedv>;

export function GetFixedv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFixedv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetIntegerv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegerv!: Deno.UnsafeFnPointer<typeof def_glGetIntegerv>;

export function GetIntegerv(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetIntegerv.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetLightxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLightxv!: Deno.UnsafeFnPointer<typeof def_glGetLightxv>;

export function GetLightxv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetLightxv.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMaterialxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMaterialxv!: Deno.UnsafeFnPointer<typeof def_glGetMaterialxv>;

export function GetMaterialxv(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMaterialxv.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPointerv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointerv!: Deno.UnsafeFnPointer<typeof def_glGetPointerv>;

export function GetPointerv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPointerv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetString = {
  parameters: ["u32"],
  result: "buffer",
} as const;

let fn_glGetString!: Deno.UnsafeFnPointer<typeof def_glGetString>;

export function GetString(
  name: GLenum,
): Buffer {
  return fn_glGetString.call(
    name,
  );
}

export const def_glGetTexEnviv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexEnviv!: Deno.UnsafeFnPointer<typeof def_glGetTexEnviv>;

export function GetTexEnviv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexEnviv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexEnvxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexEnvxv!: Deno.UnsafeFnPointer<typeof def_glGetTexEnvxv>;

export function GetTexEnvxv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexEnvxv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameteriv
>;

export function GetTexParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterxv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterxv
>;

export function GetTexParameterxv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterxv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glHint = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glHint!: Deno.UnsafeFnPointer<typeof def_glHint>;

export function Hint(
  target: GLenum,
  mode: GLenum,
): void {
  fn_glHint.call(
    target,
    mode,
  );
}

export const def_glIsBuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsBuffer!: Deno.UnsafeFnPointer<typeof def_glIsBuffer>;

export function IsBuffer(
  buffer: GLuint,
): GLboolean {
  return fn_glIsBuffer.call(
    buffer,
  );
}

export const def_glIsEnabled = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsEnabled!: Deno.UnsafeFnPointer<typeof def_glIsEnabled>;

export function IsEnabled(
  cap: GLenum,
): GLboolean {
  return fn_glIsEnabled.call(
    cap,
  );
}

export const def_glIsTexture = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsTexture!: Deno.UnsafeFnPointer<typeof def_glIsTexture>;

export function IsTexture(
  texture: GLuint,
): GLboolean {
  return fn_glIsTexture.call(
    texture,
  );
}

export const def_glLightModelx = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glLightModelx!: Deno.UnsafeFnPointer<typeof def_glLightModelx>;

export function LightModelx(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glLightModelx.call(
    pname,
    param,
  );
}

export const def_glLightModelxv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glLightModelxv!: Deno.UnsafeFnPointer<typeof def_glLightModelxv>;

export function LightModelxv(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glLightModelxv.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glLightx = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glLightx!: Deno.UnsafeFnPointer<typeof def_glLightx>;

export function Lightx(
  light: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glLightx.call(
    light,
    pname,
    param,
  );
}

export const def_glLightxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glLightxv!: Deno.UnsafeFnPointer<typeof def_glLightxv>;

export function Lightxv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightxv.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLineWidthx = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glLineWidthx!: Deno.UnsafeFnPointer<typeof def_glLineWidthx>;

export function LineWidthx(
  width: GLfixed,
): void {
  fn_glLineWidthx.call(
    width,
  );
}

export const def_glLoadIdentity = {
  parameters: [],
  result: "void",
} as const;

let fn_glLoadIdentity!: Deno.UnsafeFnPointer<typeof def_glLoadIdentity>;

export function LoadIdentity(): void {
  fn_glLoadIdentity.call();
}

export const def_glLoadMatrixx = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadMatrixx!: Deno.UnsafeFnPointer<typeof def_glLoadMatrixx>;

export function LoadMatrixx(
  m: Buffer,
): void {
  fn_glLoadMatrixx.call(
    bufferToFFI(m),
  );
}

export const def_glLogicOp = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glLogicOp!: Deno.UnsafeFnPointer<typeof def_glLogicOp>;

export function LogicOp(
  opcode: GLenum,
): void {
  fn_glLogicOp.call(
    opcode,
  );
}

export const def_glMaterialx = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMaterialx!: Deno.UnsafeFnPointer<typeof def_glMaterialx>;

export function Materialx(
  face: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glMaterialx.call(
    face,
    pname,
    param,
  );
}

export const def_glMaterialxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMaterialxv!: Deno.UnsafeFnPointer<typeof def_glMaterialxv>;

export function Materialxv(
  face: GLenum,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glMaterialxv.call(
    face,
    pname,
    bufferToFFI(param),
  );
}

export const def_glMatrixMode = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixMode!: Deno.UnsafeFnPointer<typeof def_glMatrixMode>;

export function MatrixMode(
  mode: GLenum,
): void {
  fn_glMatrixMode.call(
    mode,
  );
}

export const def_glMultMatrixx = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultMatrixx!: Deno.UnsafeFnPointer<typeof def_glMultMatrixx>;

export function MultMatrixx(
  m: Buffer,
): void {
  fn_glMultMatrixx.call(
    bufferToFFI(m),
  );
}

export const def_glMultiTexCoord4x = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4x!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4x>;

export function MultiTexCoord4x(
  texture: GLenum,
  s: GLfixed,
  t: GLfixed,
  r: GLfixed,
  q: GLfixed,
): void {
  fn_glMultiTexCoord4x.call(
    texture,
    s,
    t,
    r,
    q,
  );
}

export const def_glNormal3x = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNormal3x!: Deno.UnsafeFnPointer<typeof def_glNormal3x>;

export function Normal3x(
  nx: GLfixed,
  ny: GLfixed,
  nz: GLfixed,
): void {
  fn_glNormal3x.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormalPointer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNormalPointer!: Deno.UnsafeFnPointer<typeof def_glNormalPointer>;

export function NormalPointer(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glNormalPointer.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glOrthox = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glOrthox!: Deno.UnsafeFnPointer<typeof def_glOrthox>;

export function Orthox(
  l: GLfixed,
  r: GLfixed,
  b: GLfixed,
  t: GLfixed,
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glOrthox.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glPixelStorei = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPixelStorei!: Deno.UnsafeFnPointer<typeof def_glPixelStorei>;

export function PixelStorei(
  pname: GLenum,
  param: GLint,
): void {
  fn_glPixelStorei.call(
    pname,
    param,
  );
}

export const def_glPointParameterx = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPointParameterx!: Deno.UnsafeFnPointer<typeof def_glPointParameterx>;

export function PointParameterx(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glPointParameterx.call(
    pname,
    param,
  );
}

export const def_glPointParameterxv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameterxv!: Deno.UnsafeFnPointer<typeof def_glPointParameterxv>;

export function PointParameterxv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameterxv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glPointSizex = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glPointSizex!: Deno.UnsafeFnPointer<typeof def_glPointSizex>;

export function PointSizex(
  size: GLfixed,
): void {
  fn_glPointSizex.call(
    size,
  );
}

export const def_glPolygonOffsetx = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glPolygonOffsetx!: Deno.UnsafeFnPointer<typeof def_glPolygonOffsetx>;

export function PolygonOffsetx(
  factor: GLfixed,
  units: GLfixed,
): void {
  fn_glPolygonOffsetx.call(
    factor,
    units,
  );
}

export const def_glPopMatrix = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopMatrix!: Deno.UnsafeFnPointer<typeof def_glPopMatrix>;

export function PopMatrix(): void {
  fn_glPopMatrix.call();
}

export const def_glPushMatrix = {
  parameters: [],
  result: "void",
} as const;

let fn_glPushMatrix!: Deno.UnsafeFnPointer<typeof def_glPushMatrix>;

export function PushMatrix(): void {
  fn_glPushMatrix.call();
}

export const def_glReadPixels = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glReadPixels!: Deno.UnsafeFnPointer<typeof def_glReadPixels>;

export function ReadPixels(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glReadPixels.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glRotatex = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRotatex!: Deno.UnsafeFnPointer<typeof def_glRotatex>;

export function Rotatex(
  angle: GLfixed,
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glRotatex.call(
    angle,
    x,
    y,
    z,
  );
}

export const def_glSampleCoverage = {
  parameters: ["f32", "u8"],
  result: "void",
} as const;

let fn_glSampleCoverage!: Deno.UnsafeFnPointer<typeof def_glSampleCoverage>;

export function SampleCoverage(
  value: GLfloat,
  invert: GLboolean,
): void {
  fn_glSampleCoverage.call(
    value,
    invert,
  );
}

export const def_glSampleCoveragex = {
  parameters: ["i32", "u8"],
  result: "void",
} as const;

let fn_glSampleCoveragex!: Deno.UnsafeFnPointer<typeof def_glSampleCoveragex>;

export function SampleCoveragex(
  value: GLclampx,
  invert: GLboolean,
): void {
  fn_glSampleCoveragex.call(
    value,
    invert,
  );
}

export const def_glScalex = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScalex!: Deno.UnsafeFnPointer<typeof def_glScalex>;

export function Scalex(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glScalex.call(
    x,
    y,
    z,
  );
}

export const def_glScissor = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScissor!: Deno.UnsafeFnPointer<typeof def_glScissor>;

export function Scissor(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glScissor.call(
    x,
    y,
    width,
    height,
  );
}

export const def_glShadeModel = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glShadeModel!: Deno.UnsafeFnPointer<typeof def_glShadeModel>;

export function ShadeModel(
  mode: GLenum,
): void {
  fn_glShadeModel.call(
    mode,
  );
}

export const def_glStencilFunc = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glStencilFunc!: Deno.UnsafeFnPointer<typeof def_glStencilFunc>;

export function StencilFunc(
  func: GLenum,
  ref: GLint,
  mask: GLuint,
): void {
  fn_glStencilFunc.call(
    func,
    ref,
    mask,
  );
}

export const def_glStencilMask = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glStencilMask!: Deno.UnsafeFnPointer<typeof def_glStencilMask>;

export function StencilMask(
  mask: GLuint,
): void {
  fn_glStencilMask.call(
    mask,
  );
}

export const def_glStencilOp = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStencilOp!: Deno.UnsafeFnPointer<typeof def_glStencilOp>;

export function StencilOp(
  fail: GLenum,
  zfail: GLenum,
  zpass: GLenum,
): void {
  fn_glStencilOp.call(
    fail,
    zfail,
    zpass,
  );
}

export const def_glTexCoordPointer = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordPointer!: Deno.UnsafeFnPointer<typeof def_glTexCoordPointer>;

export function TexCoordPointer(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glTexCoordPointer.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glTexEnvi = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexEnvi!: Deno.UnsafeFnPointer<typeof def_glTexEnvi>;

export function TexEnvi(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTexEnvi.call(
    target,
    pname,
    param,
  );
}

export const def_glTexEnvx = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexEnvx!: Deno.UnsafeFnPointer<typeof def_glTexEnvx>;

export function TexEnvx(
  target: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexEnvx.call(
    target,
    pname,
    param,
  );
}

export const def_glTexEnviv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexEnviv!: Deno.UnsafeFnPointer<typeof def_glTexEnviv>;

export function TexEnviv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexEnviv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexEnvxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexEnvxv!: Deno.UnsafeFnPointer<typeof def_glTexEnvxv>;

export function TexEnvxv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexEnvxv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexImage2D = {
  parameters: [
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glTexImage2D!: Deno.UnsafeFnPointer<typeof def_glTexImage2D>;

export function TexImage2D(
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage2D.call(
    target,
    level,
    internalformat,
    width,
    height,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexParameteri!: Deno.UnsafeFnPointer<typeof def_glTexParameteri>;

export function TexParameteri(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTexParameteri.call(
    target,
    pname,
    param,
  );
}

export const def_glTexParameterx = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexParameterx!: Deno.UnsafeFnPointer<typeof def_glTexParameterx>;

export function TexParameterx(
  target: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexParameterx.call(
    target,
    pname,
    param,
  );
}

export const def_glTexParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameteriv!: Deno.UnsafeFnPointer<typeof def_glTexParameteriv>;

export function TexParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterxv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterxv!: Deno.UnsafeFnPointer<typeof def_glTexParameterxv>;

export function TexParameterxv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterxv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexSubImage2D = {
  parameters: [
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glTexSubImage2D!: Deno.UnsafeFnPointer<typeof def_glTexSubImage2D>;

export function TexSubImage2D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage2D.call(
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTranslatex = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTranslatex!: Deno.UnsafeFnPointer<typeof def_glTranslatex>;

export function Translatex(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glTranslatex.call(
    x,
    y,
    z,
  );
}

export const def_glVertexPointer = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexPointer!: Deno.UnsafeFnPointer<typeof def_glVertexPointer>;

export function VertexPointer(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexPointer.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glViewport = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glViewport!: Deno.UnsafeFnPointer<typeof def_glViewport>;

export function Viewport(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glViewport.call(
    x,
    y,
    width,
    height,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glAlphaFunc = new Deno.UnsafeFnPointer(
    proc("glAlphaFunc"),
    def_glAlphaFunc,
  );
  fn_glClearColor = new Deno.UnsafeFnPointer(
    proc("glClearColor"),
    def_glClearColor,
  );
  fn_glClearDepthf = new Deno.UnsafeFnPointer(
    proc("glClearDepthf"),
    def_glClearDepthf,
  );
  fn_glClipPlanef = new Deno.UnsafeFnPointer(
    proc("glClipPlanef"),
    def_glClipPlanef,
  );
  fn_glColor4f = new Deno.UnsafeFnPointer(proc("glColor4f"), def_glColor4f);
  fn_glDepthRangef = new Deno.UnsafeFnPointer(
    proc("glDepthRangef"),
    def_glDepthRangef,
  );
  fn_glFogf = new Deno.UnsafeFnPointer(proc("glFogf"), def_glFogf);
  fn_glFogfv = new Deno.UnsafeFnPointer(proc("glFogfv"), def_glFogfv);
  fn_glFrustumf = new Deno.UnsafeFnPointer(proc("glFrustumf"), def_glFrustumf);
  fn_glGetClipPlanef = new Deno.UnsafeFnPointer(
    proc("glGetClipPlanef"),
    def_glGetClipPlanef,
  );
  fn_glGetFloatv = new Deno.UnsafeFnPointer(
    proc("glGetFloatv"),
    def_glGetFloatv,
  );
  fn_glGetLightfv = new Deno.UnsafeFnPointer(
    proc("glGetLightfv"),
    def_glGetLightfv,
  );
  fn_glGetMaterialfv = new Deno.UnsafeFnPointer(
    proc("glGetMaterialfv"),
    def_glGetMaterialfv,
  );
  fn_glGetTexEnvfv = new Deno.UnsafeFnPointer(
    proc("glGetTexEnvfv"),
    def_glGetTexEnvfv,
  );
  fn_glGetTexParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterfv"),
    def_glGetTexParameterfv,
  );
  fn_glLightModelf = new Deno.UnsafeFnPointer(
    proc("glLightModelf"),
    def_glLightModelf,
  );
  fn_glLightModelfv = new Deno.UnsafeFnPointer(
    proc("glLightModelfv"),
    def_glLightModelfv,
  );
  fn_glLightf = new Deno.UnsafeFnPointer(proc("glLightf"), def_glLightf);
  fn_glLightfv = new Deno.UnsafeFnPointer(proc("glLightfv"), def_glLightfv);
  fn_glLineWidth = new Deno.UnsafeFnPointer(
    proc("glLineWidth"),
    def_glLineWidth,
  );
  fn_glLoadMatrixf = new Deno.UnsafeFnPointer(
    proc("glLoadMatrixf"),
    def_glLoadMatrixf,
  );
  fn_glMaterialf = new Deno.UnsafeFnPointer(
    proc("glMaterialf"),
    def_glMaterialf,
  );
  fn_glMaterialfv = new Deno.UnsafeFnPointer(
    proc("glMaterialfv"),
    def_glMaterialfv,
  );
  fn_glMultMatrixf = new Deno.UnsafeFnPointer(
    proc("glMultMatrixf"),
    def_glMultMatrixf,
  );
  fn_glMultiTexCoord4f = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4f"),
    def_glMultiTexCoord4f,
  );
  fn_glNormal3f = new Deno.UnsafeFnPointer(proc("glNormal3f"), def_glNormal3f);
  fn_glOrthof = new Deno.UnsafeFnPointer(proc("glOrthof"), def_glOrthof);
  fn_glPointParameterf = new Deno.UnsafeFnPointer(
    proc("glPointParameterf"),
    def_glPointParameterf,
  );
  fn_glPointParameterfv = new Deno.UnsafeFnPointer(
    proc("glPointParameterfv"),
    def_glPointParameterfv,
  );
  fn_glPointSize = new Deno.UnsafeFnPointer(
    proc("glPointSize"),
    def_glPointSize,
  );
  fn_glPolygonOffset = new Deno.UnsafeFnPointer(
    proc("glPolygonOffset"),
    def_glPolygonOffset,
  );
  fn_glRotatef = new Deno.UnsafeFnPointer(proc("glRotatef"), def_glRotatef);
  fn_glScalef = new Deno.UnsafeFnPointer(proc("glScalef"), def_glScalef);
  fn_glTexEnvf = new Deno.UnsafeFnPointer(proc("glTexEnvf"), def_glTexEnvf);
  fn_glTexEnvfv = new Deno.UnsafeFnPointer(proc("glTexEnvfv"), def_glTexEnvfv);
  fn_glTexParameterf = new Deno.UnsafeFnPointer(
    proc("glTexParameterf"),
    def_glTexParameterf,
  );
  fn_glTexParameterfv = new Deno.UnsafeFnPointer(
    proc("glTexParameterfv"),
    def_glTexParameterfv,
  );
  fn_glTranslatef = new Deno.UnsafeFnPointer(
    proc("glTranslatef"),
    def_glTranslatef,
  );
  fn_glActiveTexture = new Deno.UnsafeFnPointer(
    proc("glActiveTexture"),
    def_glActiveTexture,
  );
  fn_glAlphaFuncx = new Deno.UnsafeFnPointer(
    proc("glAlphaFuncx"),
    def_glAlphaFuncx,
  );
  fn_glBindBuffer = new Deno.UnsafeFnPointer(
    proc("glBindBuffer"),
    def_glBindBuffer,
  );
  fn_glBindTexture = new Deno.UnsafeFnPointer(
    proc("glBindTexture"),
    def_glBindTexture,
  );
  fn_glBlendFunc = new Deno.UnsafeFnPointer(
    proc("glBlendFunc"),
    def_glBlendFunc,
  );
  fn_glBufferData = new Deno.UnsafeFnPointer(
    proc("glBufferData"),
    def_glBufferData,
  );
  fn_glBufferSubData = new Deno.UnsafeFnPointer(
    proc("glBufferSubData"),
    def_glBufferSubData,
  );
  fn_glClear = new Deno.UnsafeFnPointer(proc("glClear"), def_glClear);
  fn_glClearColorx = new Deno.UnsafeFnPointer(
    proc("glClearColorx"),
    def_glClearColorx,
  );
  fn_glClearDepthx = new Deno.UnsafeFnPointer(
    proc("glClearDepthx"),
    def_glClearDepthx,
  );
  fn_glClearStencil = new Deno.UnsafeFnPointer(
    proc("glClearStencil"),
    def_glClearStencil,
  );
  fn_glClientActiveTexture = new Deno.UnsafeFnPointer(
    proc("glClientActiveTexture"),
    def_glClientActiveTexture,
  );
  fn_glClipPlanex = new Deno.UnsafeFnPointer(
    proc("glClipPlanex"),
    def_glClipPlanex,
  );
  fn_glColor4ub = new Deno.UnsafeFnPointer(proc("glColor4ub"), def_glColor4ub);
  fn_glColor4x = new Deno.UnsafeFnPointer(proc("glColor4x"), def_glColor4x);
  fn_glColorMask = new Deno.UnsafeFnPointer(
    proc("glColorMask"),
    def_glColorMask,
  );
  fn_glColorPointer = new Deno.UnsafeFnPointer(
    proc("glColorPointer"),
    def_glColorPointer,
  );
  fn_glCompressedTexImage2D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage2D"),
    def_glCompressedTexImage2D,
  );
  fn_glCompressedTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage2D"),
    def_glCompressedTexSubImage2D,
  );
  fn_glCopyTexImage2D = new Deno.UnsafeFnPointer(
    proc("glCopyTexImage2D"),
    def_glCopyTexImage2D,
  );
  fn_glCopyTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage2D"),
    def_glCopyTexSubImage2D,
  );
  fn_glCullFace = new Deno.UnsafeFnPointer(proc("glCullFace"), def_glCullFace);
  fn_glDeleteBuffers = new Deno.UnsafeFnPointer(
    proc("glDeleteBuffers"),
    def_glDeleteBuffers,
  );
  fn_glDeleteTextures = new Deno.UnsafeFnPointer(
    proc("glDeleteTextures"),
    def_glDeleteTextures,
  );
  fn_glDepthFunc = new Deno.UnsafeFnPointer(
    proc("glDepthFunc"),
    def_glDepthFunc,
  );
  fn_glDepthMask = new Deno.UnsafeFnPointer(
    proc("glDepthMask"),
    def_glDepthMask,
  );
  fn_glDepthRangex = new Deno.UnsafeFnPointer(
    proc("glDepthRangex"),
    def_glDepthRangex,
  );
  fn_glDisable = new Deno.UnsafeFnPointer(proc("glDisable"), def_glDisable);
  fn_glDisableClientState = new Deno.UnsafeFnPointer(
    proc("glDisableClientState"),
    def_glDisableClientState,
  );
  fn_glDrawArrays = new Deno.UnsafeFnPointer(
    proc("glDrawArrays"),
    def_glDrawArrays,
  );
  fn_glDrawElements = new Deno.UnsafeFnPointer(
    proc("glDrawElements"),
    def_glDrawElements,
  );
  fn_glEnable = new Deno.UnsafeFnPointer(proc("glEnable"), def_glEnable);
  fn_glEnableClientState = new Deno.UnsafeFnPointer(
    proc("glEnableClientState"),
    def_glEnableClientState,
  );
  fn_glFinish = new Deno.UnsafeFnPointer(proc("glFinish"), def_glFinish);
  fn_glFlush = new Deno.UnsafeFnPointer(proc("glFlush"), def_glFlush);
  fn_glFogx = new Deno.UnsafeFnPointer(proc("glFogx"), def_glFogx);
  fn_glFogxv = new Deno.UnsafeFnPointer(proc("glFogxv"), def_glFogxv);
  fn_glFrontFace = new Deno.UnsafeFnPointer(
    proc("glFrontFace"),
    def_glFrontFace,
  );
  fn_glFrustumx = new Deno.UnsafeFnPointer(proc("glFrustumx"), def_glFrustumx);
  fn_glGetBooleanv = new Deno.UnsafeFnPointer(
    proc("glGetBooleanv"),
    def_glGetBooleanv,
  );
  fn_glGetBufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetBufferParameteriv"),
    def_glGetBufferParameteriv,
  );
  fn_glGetClipPlanex = new Deno.UnsafeFnPointer(
    proc("glGetClipPlanex"),
    def_glGetClipPlanex,
  );
  fn_glGenBuffers = new Deno.UnsafeFnPointer(
    proc("glGenBuffers"),
    def_glGenBuffers,
  );
  fn_glGenTextures = new Deno.UnsafeFnPointer(
    proc("glGenTextures"),
    def_glGenTextures,
  );
  fn_glGetError = new Deno.UnsafeFnPointer(proc("glGetError"), def_glGetError);
  fn_glGetFixedv = new Deno.UnsafeFnPointer(
    proc("glGetFixedv"),
    def_glGetFixedv,
  );
  fn_glGetIntegerv = new Deno.UnsafeFnPointer(
    proc("glGetIntegerv"),
    def_glGetIntegerv,
  );
  fn_glGetLightxv = new Deno.UnsafeFnPointer(
    proc("glGetLightxv"),
    def_glGetLightxv,
  );
  fn_glGetMaterialxv = new Deno.UnsafeFnPointer(
    proc("glGetMaterialxv"),
    def_glGetMaterialxv,
  );
  fn_glGetPointerv = new Deno.UnsafeFnPointer(
    proc("glGetPointerv"),
    def_glGetPointerv,
  );
  fn_glGetString = new Deno.UnsafeFnPointer(
    proc("glGetString"),
    def_glGetString,
  );
  fn_glGetTexEnviv = new Deno.UnsafeFnPointer(
    proc("glGetTexEnviv"),
    def_glGetTexEnviv,
  );
  fn_glGetTexEnvxv = new Deno.UnsafeFnPointer(
    proc("glGetTexEnvxv"),
    def_glGetTexEnvxv,
  );
  fn_glGetTexParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameteriv"),
    def_glGetTexParameteriv,
  );
  fn_glGetTexParameterxv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterxv"),
    def_glGetTexParameterxv,
  );
  fn_glHint = new Deno.UnsafeFnPointer(proc("glHint"), def_glHint);
  fn_glIsBuffer = new Deno.UnsafeFnPointer(proc("glIsBuffer"), def_glIsBuffer);
  fn_glIsEnabled = new Deno.UnsafeFnPointer(
    proc("glIsEnabled"),
    def_glIsEnabled,
  );
  fn_glIsTexture = new Deno.UnsafeFnPointer(
    proc("glIsTexture"),
    def_glIsTexture,
  );
  fn_glLightModelx = new Deno.UnsafeFnPointer(
    proc("glLightModelx"),
    def_glLightModelx,
  );
  fn_glLightModelxv = new Deno.UnsafeFnPointer(
    proc("glLightModelxv"),
    def_glLightModelxv,
  );
  fn_glLightx = new Deno.UnsafeFnPointer(proc("glLightx"), def_glLightx);
  fn_glLightxv = new Deno.UnsafeFnPointer(proc("glLightxv"), def_glLightxv);
  fn_glLineWidthx = new Deno.UnsafeFnPointer(
    proc("glLineWidthx"),
    def_glLineWidthx,
  );
  fn_glLoadIdentity = new Deno.UnsafeFnPointer(
    proc("glLoadIdentity"),
    def_glLoadIdentity,
  );
  fn_glLoadMatrixx = new Deno.UnsafeFnPointer(
    proc("glLoadMatrixx"),
    def_glLoadMatrixx,
  );
  fn_glLogicOp = new Deno.UnsafeFnPointer(proc("glLogicOp"), def_glLogicOp);
  fn_glMaterialx = new Deno.UnsafeFnPointer(
    proc("glMaterialx"),
    def_glMaterialx,
  );
  fn_glMaterialxv = new Deno.UnsafeFnPointer(
    proc("glMaterialxv"),
    def_glMaterialxv,
  );
  fn_glMatrixMode = new Deno.UnsafeFnPointer(
    proc("glMatrixMode"),
    def_glMatrixMode,
  );
  fn_glMultMatrixx = new Deno.UnsafeFnPointer(
    proc("glMultMatrixx"),
    def_glMultMatrixx,
  );
  fn_glMultiTexCoord4x = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4x"),
    def_glMultiTexCoord4x,
  );
  fn_glNormal3x = new Deno.UnsafeFnPointer(proc("glNormal3x"), def_glNormal3x);
  fn_glNormalPointer = new Deno.UnsafeFnPointer(
    proc("glNormalPointer"),
    def_glNormalPointer,
  );
  fn_glOrthox = new Deno.UnsafeFnPointer(proc("glOrthox"), def_glOrthox);
  fn_glPixelStorei = new Deno.UnsafeFnPointer(
    proc("glPixelStorei"),
    def_glPixelStorei,
  );
  fn_glPointParameterx = new Deno.UnsafeFnPointer(
    proc("glPointParameterx"),
    def_glPointParameterx,
  );
  fn_glPointParameterxv = new Deno.UnsafeFnPointer(
    proc("glPointParameterxv"),
    def_glPointParameterxv,
  );
  fn_glPointSizex = new Deno.UnsafeFnPointer(
    proc("glPointSizex"),
    def_glPointSizex,
  );
  fn_glPolygonOffsetx = new Deno.UnsafeFnPointer(
    proc("glPolygonOffsetx"),
    def_glPolygonOffsetx,
  );
  fn_glPopMatrix = new Deno.UnsafeFnPointer(
    proc("glPopMatrix"),
    def_glPopMatrix,
  );
  fn_glPushMatrix = new Deno.UnsafeFnPointer(
    proc("glPushMatrix"),
    def_glPushMatrix,
  );
  fn_glReadPixels = new Deno.UnsafeFnPointer(
    proc("glReadPixels"),
    def_glReadPixels,
  );
  fn_glRotatex = new Deno.UnsafeFnPointer(proc("glRotatex"), def_glRotatex);
  fn_glSampleCoverage = new Deno.UnsafeFnPointer(
    proc("glSampleCoverage"),
    def_glSampleCoverage,
  );
  fn_glSampleCoveragex = new Deno.UnsafeFnPointer(
    proc("glSampleCoveragex"),
    def_glSampleCoveragex,
  );
  fn_glScalex = new Deno.UnsafeFnPointer(proc("glScalex"), def_glScalex);
  fn_glScissor = new Deno.UnsafeFnPointer(proc("glScissor"), def_glScissor);
  fn_glShadeModel = new Deno.UnsafeFnPointer(
    proc("glShadeModel"),
    def_glShadeModel,
  );
  fn_glStencilFunc = new Deno.UnsafeFnPointer(
    proc("glStencilFunc"),
    def_glStencilFunc,
  );
  fn_glStencilMask = new Deno.UnsafeFnPointer(
    proc("glStencilMask"),
    def_glStencilMask,
  );
  fn_glStencilOp = new Deno.UnsafeFnPointer(
    proc("glStencilOp"),
    def_glStencilOp,
  );
  fn_glTexCoordPointer = new Deno.UnsafeFnPointer(
    proc("glTexCoordPointer"),
    def_glTexCoordPointer,
  );
  fn_glTexEnvi = new Deno.UnsafeFnPointer(proc("glTexEnvi"), def_glTexEnvi);
  fn_glTexEnvx = new Deno.UnsafeFnPointer(proc("glTexEnvx"), def_glTexEnvx);
  fn_glTexEnviv = new Deno.UnsafeFnPointer(proc("glTexEnviv"), def_glTexEnviv);
  fn_glTexEnvxv = new Deno.UnsafeFnPointer(proc("glTexEnvxv"), def_glTexEnvxv);
  fn_glTexImage2D = new Deno.UnsafeFnPointer(
    proc("glTexImage2D"),
    def_glTexImage2D,
  );
  fn_glTexParameteri = new Deno.UnsafeFnPointer(
    proc("glTexParameteri"),
    def_glTexParameteri,
  );
  fn_glTexParameterx = new Deno.UnsafeFnPointer(
    proc("glTexParameterx"),
    def_glTexParameterx,
  );
  fn_glTexParameteriv = new Deno.UnsafeFnPointer(
    proc("glTexParameteriv"),
    def_glTexParameteriv,
  );
  fn_glTexParameterxv = new Deno.UnsafeFnPointer(
    proc("glTexParameterxv"),
    def_glTexParameterxv,
  );
  fn_glTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glTexSubImage2D"),
    def_glTexSubImage2D,
  );
  fn_glTranslatex = new Deno.UnsafeFnPointer(
    proc("glTranslatex"),
    def_glTranslatex,
  );
  fn_glVertexPointer = new Deno.UnsafeFnPointer(
    proc("glVertexPointer"),
    def_glVertexPointer,
  );
  fn_glViewport = new Deno.UnsafeFnPointer(proc("glViewport"), def_glViewport);
}
