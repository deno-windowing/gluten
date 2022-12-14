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
export const FUNC_ADD = 0x8006;
export const BLEND_EQUATION = 0x8009;
export const BLEND_EQUATION_RGB = 0x8009;
export const BLEND_EQUATION_ALPHA = 0x883d;
export const FUNC_SUBTRACT = 0x800a;
export const FUNC_REVERSE_SUBTRACT = 0x800b;
export const BLEND_DST_RGB = 0x80c8;
export const BLEND_SRC_RGB = 0x80c9;
export const BLEND_DST_ALPHA = 0x80ca;
export const BLEND_SRC_ALPHA = 0x80cb;
export const CONSTANT_COLOR = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR = 0x8002;
export const CONSTANT_ALPHA = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA = 0x8004;
export const BLEND_COLOR = 0x8005;
export const ARRAY_BUFFER = 0x8892;
export const ELEMENT_ARRAY_BUFFER = 0x8893;
export const ARRAY_BUFFER_BINDING = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
export const STREAM_DRAW = 0x88e0;
export const STATIC_DRAW = 0x88e4;
export const DYNAMIC_DRAW = 0x88e8;
export const BUFFER_SIZE = 0x8764;
export const BUFFER_USAGE = 0x8765;
export const CURRENT_VERTEX_ATTRIB = 0x8626;
export const FRONT = 0x404;
export const BACK = 0x405;
export const FRONT_AND_BACK = 0x408;
export const TEXTURE_2D = 0xde1;
export const CULL_FACE = 0xb44;
export const BLEND = 0xbe2;
export const DITHER = 0xbd0;
export const STENCIL_TEST = 0xb90;
export const DEPTH_TEST = 0xb71;
export const SCISSOR_TEST = 0xc11;
export const POLYGON_OFFSET_FILL = 0x8037;
export const SAMPLE_ALPHA_TO_COVERAGE = 0x809e;
export const SAMPLE_COVERAGE = 0x80a0;
export const NO_ERROR = 0x0;
export const INVALID_ENUM = 0x500;
export const INVALID_VALUE = 0x501;
export const INVALID_OPERATION = 0x502;
export const OUT_OF_MEMORY = 0x505;
export const INVALID_FRAMEBUFFER_OPERATION = 0x506;
export const CONTEXT_LOST = 0x507;
export const CW = 0x900;
export const CCW = 0x901;
export const LINE_WIDTH = 0xb21;
export const ALIASED_POINT_SIZE_RANGE = 0x846d;
export const ALIASED_LINE_WIDTH_RANGE = 0x846e;
export const CULL_FACE_MODE = 0xb45;
export const FRONT_FACE = 0xb46;
export const DEPTH_RANGE = 0xb70;
export const DEPTH_WRITEMASK = 0xb72;
export const DEPTH_CLEAR_VALUE = 0xb73;
export const DEPTH_FUNC = 0xb74;
export const STENCIL_CLEAR_VALUE = 0xb91;
export const STENCIL_FUNC = 0xb92;
export const STENCIL_FAIL = 0xb94;
export const STENCIL_PASS_DEPTH_FAIL = 0xb95;
export const STENCIL_PASS_DEPTH_PASS = 0xb96;
export const STENCIL_REF = 0xb97;
export const STENCIL_VALUE_MASK = 0xb93;
export const STENCIL_WRITEMASK = 0xb98;
export const STENCIL_BACK_FUNC = 0x8800;
export const STENCIL_BACK_FAIL = 0x8801;
export const STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
export const STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
export const STENCIL_BACK_REF = 0x8ca3;
export const STENCIL_BACK_VALUE_MASK = 0x8ca4;
export const STENCIL_BACK_WRITEMASK = 0x8ca5;
export const VIEWPORT = 0xba2;
export const SCISSOR_BOX = 0xc10;
export const COLOR_CLEAR_VALUE = 0xc22;
export const COLOR_WRITEMASK = 0xc23;
export const UNPACK_ALIGNMENT = 0xcf5;
export const PACK_ALIGNMENT = 0xd05;
export const MAX_TEXTURE_SIZE = 0xd33;
export const MAX_VIEWPORT_DIMS = 0xd3a;
export const SUBPIXEL_BITS = 0xd50;
export const RED_BITS = 0xd52;
export const GREEN_BITS = 0xd53;
export const BLUE_BITS = 0xd54;
export const ALPHA_BITS = 0xd55;
export const DEPTH_BITS = 0xd56;
export const STENCIL_BITS = 0xd57;
export const POLYGON_OFFSET_UNITS = 0x2a00;
export const POLYGON_OFFSET_FACTOR = 0x8038;
export const TEXTURE_BINDING_2D = 0x8069;
export const SAMPLE_BUFFERS = 0x80a8;
export const SAMPLES = 0x80a9;
export const SAMPLE_COVERAGE_VALUE = 0x80aa;
export const SAMPLE_COVERAGE_INVERT = 0x80ab;
export const NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;
export const COMPRESSED_TEXTURE_FORMATS = 0x86a3;
export const DONT_CARE = 0x1100;
export const FASTEST = 0x1101;
export const NICEST = 0x1102;
export const GENERATE_MIPMAP_HINT = 0x8192;
export const BYTE = 0x1400;
export const UNSIGNED_BYTE = 0x1401;
export const SHORT = 0x1402;
export const UNSIGNED_SHORT = 0x1403;
export const INT = 0x1404;
export const UNSIGNED_INT = 0x1405;
export const FLOAT = 0x1406;
export const RED = 0x1903;
export const RG = 0x8227;
export const RGB = 0x1907;
export const RGBA = 0x1908;
export const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
export const UNSIGNED_SHORT_5_6_5 = 0x8363;
export const MAX_VERTEX_ATTRIBS = 0x8869;
export const MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;
export const MAX_VARYING_VECTORS = 0x8dfc;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;
export const MAX_TEXTURE_IMAGE_UNITS = 0x8872;
export const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;
export const LINK_STATUS = 0x8b82;
export const SHADING_LANGUAGE_VERSION = 0x8b8c;
export const CURRENT_PROGRAM = 0x8b8d;
export const NEVER = 0x200;
export const LESS = 0x201;
export const EQUAL = 0x202;
export const LEQUAL = 0x203;
export const GREATER = 0x204;
export const NOTEQUAL = 0x205;
export const GEQUAL = 0x206;
export const ALWAYS = 0x207;
export const KEEP = 0x1e00;
export const REPLACE = 0x1e01;
export const INCR = 0x1e02;
export const DECR = 0x1e03;
export const INVERT = 0x150a;
export const INCR_WRAP = 0x8507;
export const DECR_WRAP = 0x8508;
export const VENDOR = 0x1f00;
export const RENDERER = 0x1f01;
export const VERSION = 0x1f02;
export const EXTENSIONS = 0x1f03;
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
export const TEXTURE_IMMUTABLE_FORMAT = 0x912f;
export const TEXTURE = 0x1702;
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
export const REPEAT = 0x2901;
export const CLAMP_TO_EDGE = 0x812f;
export const MIRRORED_REPEAT = 0x8370;
export const SAMPLER_2D = 0x8b5e;
export const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;
export const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;
export const IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;
export const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;
export const NUM_PROGRAM_BINARY_FORMATS = 0x87fe;
export const PROGRAM_BINARY_FORMATS = 0x87ff;
export const LOW_FLOAT = 0x8df0;
export const MEDIUM_FLOAT = 0x8df1;
export const HIGH_FLOAT = 0x8df2;
export const LOW_INT = 0x8df3;
export const MEDIUM_INT = 0x8df4;
export const HIGH_INT = 0x8df5;
export const FRAMEBUFFER = 0x8d40;
export const RENDERBUFFER = 0x8d41;
export const R8 = 0x8229;
export const RG8 = 0x822b;
export const RGB8 = 0x8051;
export const RGBA8 = 0x8058;
export const RGBA4 = 0x8056;
export const RGB5_A1 = 0x8057;
export const RGB565 = 0x8d62;
export const DEPTH_COMPONENT16 = 0x81a5;
export const STENCIL_INDEX8 = 0x8d48;
export const RENDERBUFFER_WIDTH = 0x8d42;
export const RENDERBUFFER_HEIGHT = 0x8d43;
export const RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;
export const RENDERBUFFER_RED_SIZE = 0x8d50;
export const RENDERBUFFER_GREEN_SIZE = 0x8d51;
export const RENDERBUFFER_BLUE_SIZE = 0x8d52;
export const RENDERBUFFER_ALPHA_SIZE = 0x8d53;
export const RENDERBUFFER_DEPTH_SIZE = 0x8d54;
export const RENDERBUFFER_STENCIL_SIZE = 0x8d55;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;
export const COLOR_ATTACHMENT0 = 0x8ce0;
export const DEPTH_ATTACHMENT = 0x8d00;
export const STENCIL_ATTACHMENT = 0x8d20;
export const NONE = 0x0;
export const FRAMEBUFFER_COMPLETE = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9;
export const FRAMEBUFFER_UNSUPPORTED = 0x8cdd;
export const FRAMEBUFFER_UNDEFINED = 0x8219;
export const FRAMEBUFFER_BINDING = 0x8ca6;
export const RENDERBUFFER_BINDING = 0x8ca7;
export const MAX_RENDERBUFFER_SIZE = 0x84e8;
export const GUILTY_CONTEXT_RESET = 0x8253;
export const INNOCENT_CONTEXT_RESET = 0x8254;
export const UNKNOWN_CONTEXT_RESET = 0x8255;
export const CONTEXT_ROBUST_ACCESS = 0x90f3;
export const RESET_NOTIFICATION_STRATEGY = 0x8256;
export const LOSE_CONTEXT_ON_RESET = 0x8252;

/// Commands

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

export const def_glBindFramebuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindFramebuffer!: Deno.UnsafeFnPointer<typeof def_glBindFramebuffer>;

export function BindFramebuffer(
  target: GLenum,
  framebuffer: GLuint,
): void {
  fn_glBindFramebuffer.call(
    target,
    framebuffer,
  );
}

export const def_glBindRenderbuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glBindRenderbuffer>;

export function BindRenderbuffer(
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glBindRenderbuffer.call(
    target,
    renderbuffer,
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

export const def_glBlendEquationSeparate = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationSeparate!: Deno.UnsafeFnPointer<typeof def_glBlendEquationSeparate>;

export function BlendEquationSeparate(
  modeRGB: GLenum,
  modeAlpha: GLenum,
): void {
  fn_glBlendEquationSeparate.call(
    modeRGB,
    modeAlpha,
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

export const def_glBlendFuncSeparate = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncSeparate!: Deno.UnsafeFnPointer<typeof def_glBlendFuncSeparate>;

export function BlendFuncSeparate(
  sfactorRGB: GLenum,
  dfactorRGB: GLenum,
  sfactorAlpha: GLenum,
  dfactorAlpha: GLenum,
): void {
  fn_glBlendFuncSeparate.call(
    sfactorRGB,
    dfactorRGB,
    sfactorAlpha,
    dfactorAlpha,
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

export const def_glCheckFramebufferStatus = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glCheckFramebufferStatus!: Deno.UnsafeFnPointer<typeof def_glCheckFramebufferStatus>;

export function CheckFramebufferStatus(
  target: GLenum,
): GLenum {
  return fn_glCheckFramebufferStatus.call(
    target,
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

export const def_glCompressedTexSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage2D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage2D>;

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

export const def_glCreateProgram = {
  parameters: [],
  result: "u32",
} as const;

let fn_glCreateProgram!: Deno.UnsafeFnPointer<typeof def_glCreateProgram>;

export function CreateProgram(): GLuint {
  return fn_glCreateProgram.call();
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

export const def_glDisableVertexAttribArray = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisableVertexAttribArray!: Deno.UnsafeFnPointer<typeof def_glDisableVertexAttribArray>;

export function DisableVertexAttribArray(
  index: GLuint,
): void {
  fn_glDisableVertexAttribArray.call(
    index,
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

export const def_glDrawRangeElements = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawRangeElements!: Deno.UnsafeFnPointer<typeof def_glDrawRangeElements>;

export function DrawRangeElements(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
): void {
  fn_glDrawRangeElements.call(
    mode,
    start,
    end,
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

export const def_glEnableVertexAttribArray = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableVertexAttribArray!: Deno.UnsafeFnPointer<typeof def_glEnableVertexAttribArray>;

export function EnableVertexAttribArray(
  index: GLuint,
): void {
  fn_glEnableVertexAttribArray.call(
    index,
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

export const def_glFramebufferRenderbuffer = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glFramebufferRenderbuffer>;

export function FramebufferRenderbuffer(
  target: GLenum,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glFramebufferRenderbuffer.call(
    target,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glFramebufferTexture2D = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture2D>;

export function FramebufferTexture2D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture2D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
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

export const def_glGenerateMipmap = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateMipmap!: Deno.UnsafeFnPointer<typeof def_glGenerateMipmap>;

export function GenerateMipmap(
  target: GLenum,
): void {
  fn_glGenerateMipmap.call(
    target,
  );
}

export const def_glGenFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenFramebuffers!: Deno.UnsafeFnPointer<typeof def_glGenFramebuffers>;

export function GenFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glGenFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glGenRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenRenderbuffers!: Deno.UnsafeFnPointer<typeof def_glGenRenderbuffers>;

export function GenRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glGenRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
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

export const def_glGetAttribLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetAttribLocation!: Deno.UnsafeFnPointer<typeof def_glGetAttribLocation>;

export function GetAttribLocation(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetAttribLocation.call(
    program,
    bufferToFFI(name),
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

let fn_glGetBufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetBufferParameteriv>;

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

export const def_glGetError = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetError!: Deno.UnsafeFnPointer<typeof def_glGetError>;

export function GetError(): GLenum {
  return fn_glGetError.call();
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

export const def_glGetFramebufferAttachmentParameteriv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferAttachmentParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferAttachmentParameteriv>;

export function GetFramebufferAttachmentParameteriv(
  target: GLenum,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferAttachmentParameteriv.call(
    target,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetGraphicsResetStatus = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatus!: Deno.UnsafeFnPointer<typeof def_glGetGraphicsResetStatus>;

export function GetGraphicsResetStatus(): GLenum {
  return fn_glGetGraphicsResetStatus.call();
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

export const def_glGetProgramiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramiv>;

export function GetProgramiv(
  program: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramiv.call(
    program,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetRenderbufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetRenderbufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetRenderbufferParameteriv>;

export function GetRenderbufferParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetRenderbufferParameteriv.call(
    target,
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

export const def_glGetTexParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterfv>;

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

export const def_glGetTexParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetTexParameteriv>;

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

export const def_glGetnUniformfv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformfv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformfv>;

export function GetnUniformfv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformfv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformiv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformiv>;

export function GetnUniformiv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformiv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetUniformLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetUniformLocation!: Deno.UnsafeFnPointer<typeof def_glGetUniformLocation>;

export function GetUniformLocation(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetUniformLocation.call(
    program,
    bufferToFFI(name),
  );
}

export const def_glGetVertexAttribfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribfv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribfv>;

export function GetVertexAttribfv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribfv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribiv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribiv>;

export function GetVertexAttribiv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribiv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribPointerv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribPointerv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribPointerv>;

export function GetVertexAttribPointerv(
  index: GLuint,
  pname: GLenum,
  pointer: Buffer,
): void {
  fn_glGetVertexAttribPointerv.call(
    index,
    pname,
    bufferToFFI(pointer),
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

export const def_glProgramBinary = {
  parameters: ["u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glProgramBinary!: Deno.UnsafeFnPointer<typeof def_glProgramBinary>;

export function ProgramBinary(
  program: GLuint,
  binaryFormat: GLenum,
  binary: Buffer,
  length: GLsizei,
): void {
  fn_glProgramBinary.call(
    program,
    binaryFormat,
    bufferToFFI(binary),
    length,
  );
}

export const def_glReadnPixels = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReadnPixels!: Deno.UnsafeFnPointer<typeof def_glReadnPixels>;

export function ReadnPixels(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  data: Buffer,
): void {
  fn_glReadnPixels.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufSize,
    bufferToFFI(data),
  );
}

export const def_glRenderbufferStorage = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorage!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorage>;

export function RenderbufferStorage(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorage.call(
    target,
    internalformat,
    width,
    height,
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

export const def_glStencilFuncSeparate = {
  parameters: ["u32", "u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glStencilFuncSeparate!: Deno.UnsafeFnPointer<typeof def_glStencilFuncSeparate>;

export function StencilFuncSeparate(
  face: GLenum,
  func: GLenum,
  ref: GLint,
  mask: GLuint,
): void {
  fn_glStencilFuncSeparate.call(
    face,
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

export const def_glStencilMaskSeparate = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glStencilMaskSeparate!: Deno.UnsafeFnPointer<typeof def_glStencilMaskSeparate>;

export function StencilMaskSeparate(
  face: GLenum,
  mask: GLuint,
): void {
  fn_glStencilMaskSeparate.call(
    face,
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

export const def_glStencilOpSeparate = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStencilOpSeparate!: Deno.UnsafeFnPointer<typeof def_glStencilOpSeparate>;

export function StencilOpSeparate(
  face: GLenum,
  sfail: GLenum,
  dpfail: GLenum,
  dppass: GLenum,
): void {
  fn_glStencilOpSeparate.call(
    face,
    sfail,
    dpfail,
    dppass,
  );
}

export const def_glTexStorage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage2D!: Deno.UnsafeFnPointer<typeof def_glTexStorage2D>;

export function TexStorage2D(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTexStorage2D.call(
    target,
    levels,
    internalformat,
    width,
    height,
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

export const def_glTexSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
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

export const def_glUniform1f = {
  parameters: ["i32", "f32"],
  result: "void",
} as const;

let fn_glUniform1f!: Deno.UnsafeFnPointer<typeof def_glUniform1f>;

export function Uniform1f(
  location: GLint,
  v0: GLfloat,
): void {
  fn_glUniform1f.call(
    location,
    v0,
  );
}

export const def_glUniform1fv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1fv!: Deno.UnsafeFnPointer<typeof def_glUniform1fv>;

export function Uniform1fv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1fv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform1i = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glUniform1i!: Deno.UnsafeFnPointer<typeof def_glUniform1i>;

export function Uniform1i(
  location: GLint,
  v0: GLint,
): void {
  fn_glUniform1i.call(
    location,
    v0,
  );
}

export const def_glUniform1iv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1iv!: Deno.UnsafeFnPointer<typeof def_glUniform1iv>;

export function Uniform1iv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1iv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2f = {
  parameters: ["i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform2f!: Deno.UnsafeFnPointer<typeof def_glUniform2f>;

export function Uniform2f(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glUniform2f.call(
    location,
    v0,
    v1,
  );
}

export const def_glUniform2fv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2fv!: Deno.UnsafeFnPointer<typeof def_glUniform2fv>;

export function Uniform2fv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2fv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform2i!: Deno.UnsafeFnPointer<typeof def_glUniform2i>;

export function Uniform2i(
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glUniform2i.call(
    location,
    v0,
    v1,
  );
}

export const def_glUniform2iv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2iv!: Deno.UnsafeFnPointer<typeof def_glUniform2iv>;

export function Uniform2iv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2iv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3f = {
  parameters: ["i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform3f!: Deno.UnsafeFnPointer<typeof def_glUniform3f>;

export function Uniform3f(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glUniform3f.call(
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glUniform3fv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3fv!: Deno.UnsafeFnPointer<typeof def_glUniform3fv>;

export function Uniform3fv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3fv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3i = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform3i!: Deno.UnsafeFnPointer<typeof def_glUniform3i>;

export function Uniform3i(
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glUniform3i.call(
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glUniform3iv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3iv!: Deno.UnsafeFnPointer<typeof def_glUniform3iv>;

export function Uniform3iv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3iv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4f = {
  parameters: ["i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glUniform4f!: Deno.UnsafeFnPointer<typeof def_glUniform4f>;

export function Uniform4f(
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glUniform4f.call(
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glUniform4fv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4fv!: Deno.UnsafeFnPointer<typeof def_glUniform4fv>;

export function Uniform4fv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4fv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4i = {
  parameters: ["i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glUniform4i!: Deno.UnsafeFnPointer<typeof def_glUniform4i>;

export function Uniform4i(
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glUniform4i.call(
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glUniform4iv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4iv!: Deno.UnsafeFnPointer<typeof def_glUniform4iv>;

export function Uniform4iv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4iv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2fv>;

export function UniformMatrix2fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3fv>;

export function UniformMatrix3fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4fv>;

export function UniformMatrix4fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUseProgram = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glUseProgram!: Deno.UnsafeFnPointer<typeof def_glUseProgram>;

export function UseProgram(
  program: GLuint,
): void {
  fn_glUseProgram.call(
    program,
  );
}

export const def_glVertexAttrib1f = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib1f!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1f>;

export function VertexAttrib1f(
  index: GLuint,
  x: GLfloat,
): void {
  fn_glVertexAttrib1f.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1fv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1fv>;

export function VertexAttrib1fv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1fv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2f = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib2f!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2f>;

export function VertexAttrib2f(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glVertexAttrib2f.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2fv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2fv>;

export function VertexAttrib2fv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2fv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3f = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib3f!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3f>;

export function VertexAttrib3f(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glVertexAttrib3f.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3fv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3fv>;

export function VertexAttrib3fv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3fv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4f = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib4f!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4f>;

export function VertexAttrib4f(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glVertexAttrib4f.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4fv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4fv>;

export function VertexAttrib4fv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4fv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribPointer = {
  parameters: ["u32", "i32", "u32", "u8", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribPointer!: Deno.UnsafeFnPointer<typeof def_glVertexAttribPointer>;

export function VertexAttribPointer(
  index: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribPointer.call(
    index,
    size,
    type,
    normalized,
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
  fn_glActiveTexture = new Deno.UnsafeFnPointer(proc("glActiveTexture"), def_glActiveTexture);
  fn_glBindBuffer = new Deno.UnsafeFnPointer(proc("glBindBuffer"), def_glBindBuffer);
  fn_glBindFramebuffer = new Deno.UnsafeFnPointer(proc("glBindFramebuffer"), def_glBindFramebuffer);
  fn_glBindRenderbuffer = new Deno.UnsafeFnPointer(proc("glBindRenderbuffer"), def_glBindRenderbuffer);
  fn_glBindTexture = new Deno.UnsafeFnPointer(proc("glBindTexture"), def_glBindTexture);
  fn_glBlendColor = new Deno.UnsafeFnPointer(proc("glBlendColor"), def_glBlendColor);
  fn_glBlendEquation = new Deno.UnsafeFnPointer(proc("glBlendEquation"), def_glBlendEquation);
  fn_glBlendEquationSeparate = new Deno.UnsafeFnPointer(proc("glBlendEquationSeparate"), def_glBlendEquationSeparate);
  fn_glBlendFunc = new Deno.UnsafeFnPointer(proc("glBlendFunc"), def_glBlendFunc);
  fn_glBlendFuncSeparate = new Deno.UnsafeFnPointer(proc("glBlendFuncSeparate"), def_glBlendFuncSeparate);
  fn_glBufferData = new Deno.UnsafeFnPointer(proc("glBufferData"), def_glBufferData);
  fn_glBufferSubData = new Deno.UnsafeFnPointer(proc("glBufferSubData"), def_glBufferSubData);
  fn_glCheckFramebufferStatus = new Deno.UnsafeFnPointer(proc("glCheckFramebufferStatus"), def_glCheckFramebufferStatus);
  fn_glClear = new Deno.UnsafeFnPointer(proc("glClear"), def_glClear);
  fn_glClearColor = new Deno.UnsafeFnPointer(proc("glClearColor"), def_glClearColor);
  fn_glClearDepthf = new Deno.UnsafeFnPointer(proc("glClearDepthf"), def_glClearDepthf);
  fn_glClearStencil = new Deno.UnsafeFnPointer(proc("glClearStencil"), def_glClearStencil);
  fn_glColorMask = new Deno.UnsafeFnPointer(proc("glColorMask"), def_glColorMask);
  fn_glCompressedTexSubImage2D = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage2D"), def_glCompressedTexSubImage2D);
  fn_glCreateProgram = new Deno.UnsafeFnPointer(proc("glCreateProgram"), def_glCreateProgram);
  fn_glCullFace = new Deno.UnsafeFnPointer(proc("glCullFace"), def_glCullFace);
  fn_glDepthFunc = new Deno.UnsafeFnPointer(proc("glDepthFunc"), def_glDepthFunc);
  fn_glDepthMask = new Deno.UnsafeFnPointer(proc("glDepthMask"), def_glDepthMask);
  fn_glDepthRangef = new Deno.UnsafeFnPointer(proc("glDepthRangef"), def_glDepthRangef);
  fn_glDisable = new Deno.UnsafeFnPointer(proc("glDisable"), def_glDisable);
  fn_glDisableVertexAttribArray = new Deno.UnsafeFnPointer(proc("glDisableVertexAttribArray"), def_glDisableVertexAttribArray);
  fn_glDrawArrays = new Deno.UnsafeFnPointer(proc("glDrawArrays"), def_glDrawArrays);
  fn_glDrawRangeElements = new Deno.UnsafeFnPointer(proc("glDrawRangeElements"), def_glDrawRangeElements);
  fn_glEnable = new Deno.UnsafeFnPointer(proc("glEnable"), def_glEnable);
  fn_glEnableVertexAttribArray = new Deno.UnsafeFnPointer(proc("glEnableVertexAttribArray"), def_glEnableVertexAttribArray);
  fn_glFinish = new Deno.UnsafeFnPointer(proc("glFinish"), def_glFinish);
  fn_glFlush = new Deno.UnsafeFnPointer(proc("glFlush"), def_glFlush);
  fn_glFramebufferRenderbuffer = new Deno.UnsafeFnPointer(proc("glFramebufferRenderbuffer"), def_glFramebufferRenderbuffer);
  fn_glFramebufferTexture2D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture2D"), def_glFramebufferTexture2D);
  fn_glFrontFace = new Deno.UnsafeFnPointer(proc("glFrontFace"), def_glFrontFace);
  fn_glGenBuffers = new Deno.UnsafeFnPointer(proc("glGenBuffers"), def_glGenBuffers);
  fn_glGenerateMipmap = new Deno.UnsafeFnPointer(proc("glGenerateMipmap"), def_glGenerateMipmap);
  fn_glGenFramebuffers = new Deno.UnsafeFnPointer(proc("glGenFramebuffers"), def_glGenFramebuffers);
  fn_glGenRenderbuffers = new Deno.UnsafeFnPointer(proc("glGenRenderbuffers"), def_glGenRenderbuffers);
  fn_glGenTextures = new Deno.UnsafeFnPointer(proc("glGenTextures"), def_glGenTextures);
  fn_glGetAttribLocation = new Deno.UnsafeFnPointer(proc("glGetAttribLocation"), def_glGetAttribLocation);
  fn_glGetBooleanv = new Deno.UnsafeFnPointer(proc("glGetBooleanv"), def_glGetBooleanv);
  fn_glGetBufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetBufferParameteriv"), def_glGetBufferParameteriv);
  fn_glGetError = new Deno.UnsafeFnPointer(proc("glGetError"), def_glGetError);
  fn_glGetFloatv = new Deno.UnsafeFnPointer(proc("glGetFloatv"), def_glGetFloatv);
  fn_glGetFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(proc("glGetFramebufferAttachmentParameteriv"), def_glGetFramebufferAttachmentParameteriv);
  fn_glGetGraphicsResetStatus = new Deno.UnsafeFnPointer(proc("glGetGraphicsResetStatus"), def_glGetGraphicsResetStatus);
  fn_glGetIntegerv = new Deno.UnsafeFnPointer(proc("glGetIntegerv"), def_glGetIntegerv);
  fn_glGetProgramiv = new Deno.UnsafeFnPointer(proc("glGetProgramiv"), def_glGetProgramiv);
  fn_glGetRenderbufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetRenderbufferParameteriv"), def_glGetRenderbufferParameteriv);
  fn_glGetString = new Deno.UnsafeFnPointer(proc("glGetString"), def_glGetString);
  fn_glGetTexParameterfv = new Deno.UnsafeFnPointer(proc("glGetTexParameterfv"), def_glGetTexParameterfv);
  fn_glGetTexParameteriv = new Deno.UnsafeFnPointer(proc("glGetTexParameteriv"), def_glGetTexParameteriv);
  fn_glGetnUniformfv = new Deno.UnsafeFnPointer(proc("glGetnUniformfv"), def_glGetnUniformfv);
  fn_glGetnUniformiv = new Deno.UnsafeFnPointer(proc("glGetnUniformiv"), def_glGetnUniformiv);
  fn_glGetUniformLocation = new Deno.UnsafeFnPointer(proc("glGetUniformLocation"), def_glGetUniformLocation);
  fn_glGetVertexAttribfv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribfv"), def_glGetVertexAttribfv);
  fn_glGetVertexAttribiv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribiv"), def_glGetVertexAttribiv);
  fn_glGetVertexAttribPointerv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribPointerv"), def_glGetVertexAttribPointerv);
  fn_glHint = new Deno.UnsafeFnPointer(proc("glHint"), def_glHint);
  fn_glIsEnabled = new Deno.UnsafeFnPointer(proc("glIsEnabled"), def_glIsEnabled);
  fn_glLineWidth = new Deno.UnsafeFnPointer(proc("glLineWidth"), def_glLineWidth);
  fn_glPixelStorei = new Deno.UnsafeFnPointer(proc("glPixelStorei"), def_glPixelStorei);
  fn_glPolygonOffset = new Deno.UnsafeFnPointer(proc("glPolygonOffset"), def_glPolygonOffset);
  fn_glProgramBinary = new Deno.UnsafeFnPointer(proc("glProgramBinary"), def_glProgramBinary);
  fn_glReadnPixels = new Deno.UnsafeFnPointer(proc("glReadnPixels"), def_glReadnPixels);
  fn_glRenderbufferStorage = new Deno.UnsafeFnPointer(proc("glRenderbufferStorage"), def_glRenderbufferStorage);
  fn_glSampleCoverage = new Deno.UnsafeFnPointer(proc("glSampleCoverage"), def_glSampleCoverage);
  fn_glScissor = new Deno.UnsafeFnPointer(proc("glScissor"), def_glScissor);
  fn_glStencilFunc = new Deno.UnsafeFnPointer(proc("glStencilFunc"), def_glStencilFunc);
  fn_glStencilFuncSeparate = new Deno.UnsafeFnPointer(proc("glStencilFuncSeparate"), def_glStencilFuncSeparate);
  fn_glStencilMask = new Deno.UnsafeFnPointer(proc("glStencilMask"), def_glStencilMask);
  fn_glStencilMaskSeparate = new Deno.UnsafeFnPointer(proc("glStencilMaskSeparate"), def_glStencilMaskSeparate);
  fn_glStencilOp = new Deno.UnsafeFnPointer(proc("glStencilOp"), def_glStencilOp);
  fn_glStencilOpSeparate = new Deno.UnsafeFnPointer(proc("glStencilOpSeparate"), def_glStencilOpSeparate);
  fn_glTexStorage2D = new Deno.UnsafeFnPointer(proc("glTexStorage2D"), def_glTexStorage2D);
  fn_glTexParameterf = new Deno.UnsafeFnPointer(proc("glTexParameterf"), def_glTexParameterf);
  fn_glTexParameterfv = new Deno.UnsafeFnPointer(proc("glTexParameterfv"), def_glTexParameterfv);
  fn_glTexParameteri = new Deno.UnsafeFnPointer(proc("glTexParameteri"), def_glTexParameteri);
  fn_glTexParameteriv = new Deno.UnsafeFnPointer(proc("glTexParameteriv"), def_glTexParameteriv);
  fn_glTexSubImage2D = new Deno.UnsafeFnPointer(proc("glTexSubImage2D"), def_glTexSubImage2D);
  fn_glUniform1f = new Deno.UnsafeFnPointer(proc("glUniform1f"), def_glUniform1f);
  fn_glUniform1fv = new Deno.UnsafeFnPointer(proc("glUniform1fv"), def_glUniform1fv);
  fn_glUniform1i = new Deno.UnsafeFnPointer(proc("glUniform1i"), def_glUniform1i);
  fn_glUniform1iv = new Deno.UnsafeFnPointer(proc("glUniform1iv"), def_glUniform1iv);
  fn_glUniform2f = new Deno.UnsafeFnPointer(proc("glUniform2f"), def_glUniform2f);
  fn_glUniform2fv = new Deno.UnsafeFnPointer(proc("glUniform2fv"), def_glUniform2fv);
  fn_glUniform2i = new Deno.UnsafeFnPointer(proc("glUniform2i"), def_glUniform2i);
  fn_glUniform2iv = new Deno.UnsafeFnPointer(proc("glUniform2iv"), def_glUniform2iv);
  fn_glUniform3f = new Deno.UnsafeFnPointer(proc("glUniform3f"), def_glUniform3f);
  fn_glUniform3fv = new Deno.UnsafeFnPointer(proc("glUniform3fv"), def_glUniform3fv);
  fn_glUniform3i = new Deno.UnsafeFnPointer(proc("glUniform3i"), def_glUniform3i);
  fn_glUniform3iv = new Deno.UnsafeFnPointer(proc("glUniform3iv"), def_glUniform3iv);
  fn_glUniform4f = new Deno.UnsafeFnPointer(proc("glUniform4f"), def_glUniform4f);
  fn_glUniform4fv = new Deno.UnsafeFnPointer(proc("glUniform4fv"), def_glUniform4fv);
  fn_glUniform4i = new Deno.UnsafeFnPointer(proc("glUniform4i"), def_glUniform4i);
  fn_glUniform4iv = new Deno.UnsafeFnPointer(proc("glUniform4iv"), def_glUniform4iv);
  fn_glUniformMatrix2fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2fv"), def_glUniformMatrix2fv);
  fn_glUniformMatrix3fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3fv"), def_glUniformMatrix3fv);
  fn_glUniformMatrix4fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4fv"), def_glUniformMatrix4fv);
  fn_glUseProgram = new Deno.UnsafeFnPointer(proc("glUseProgram"), def_glUseProgram);
  fn_glVertexAttrib1f = new Deno.UnsafeFnPointer(proc("glVertexAttrib1f"), def_glVertexAttrib1f);
  fn_glVertexAttrib1fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib1fv"), def_glVertexAttrib1fv);
  fn_glVertexAttrib2f = new Deno.UnsafeFnPointer(proc("glVertexAttrib2f"), def_glVertexAttrib2f);
  fn_glVertexAttrib2fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib2fv"), def_glVertexAttrib2fv);
  fn_glVertexAttrib3f = new Deno.UnsafeFnPointer(proc("glVertexAttrib3f"), def_glVertexAttrib3f);
  fn_glVertexAttrib3fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib3fv"), def_glVertexAttrib3fv);
  fn_glVertexAttrib4f = new Deno.UnsafeFnPointer(proc("glVertexAttrib4f"), def_glVertexAttrib4f);
  fn_glVertexAttrib4fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4fv"), def_glVertexAttrib4fv);
  fn_glVertexAttribPointer = new Deno.UnsafeFnPointer(proc("glVertexAttribPointer"), def_glVertexAttribPointer);
  fn_glViewport = new Deno.UnsafeFnPointer(proc("glViewport"), def_glViewport);
}
