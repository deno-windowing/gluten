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
export const FIXED = 0x140c;
export const DEPTH_COMPONENT = 0x1902;
export const ALPHA = 0x1906;
export const RGB = 0x1907;
export const RGBA = 0x1908;
export const LUMINANCE = 0x1909;
export const LUMINANCE_ALPHA = 0x190a;
export const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
export const UNSIGNED_SHORT_5_6_5 = 0x8363;
export const FRAGMENT_SHADER = 0x8b30;
export const VERTEX_SHADER = 0x8b31;
export const MAX_VERTEX_ATTRIBS = 0x8869;
export const MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;
export const MAX_VARYING_VECTORS = 0x8dfc;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;
export const MAX_TEXTURE_IMAGE_UNITS = 0x8872;
export const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;
export const SHADER_TYPE = 0x8b4f;
export const DELETE_STATUS = 0x8b80;
export const LINK_STATUS = 0x8b82;
export const VALIDATE_STATUS = 0x8b83;
export const ATTACHED_SHADERS = 0x8b85;
export const ACTIVE_UNIFORMS = 0x8b86;
export const ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87;
export const ACTIVE_ATTRIBUTES = 0x8b89;
export const ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a;
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
export const TEXTURE = 0x1702;
export const TEXTURE_CUBE_MAP = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
export const MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c;
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
export const FLOAT_VEC2 = 0x8b50;
export const FLOAT_VEC3 = 0x8b51;
export const FLOAT_VEC4 = 0x8b52;
export const INT_VEC2 = 0x8b53;
export const INT_VEC3 = 0x8b54;
export const INT_VEC4 = 0x8b55;
export const BOOL = 0x8b56;
export const BOOL_VEC2 = 0x8b57;
export const BOOL_VEC3 = 0x8b58;
export const BOOL_VEC4 = 0x8b59;
export const FLOAT_MAT2 = 0x8b5a;
export const FLOAT_MAT3 = 0x8b5b;
export const FLOAT_MAT4 = 0x8b5c;
export const SAMPLER_2D = 0x8b5e;
export const SAMPLER_CUBE = 0x8b60;
export const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;
export const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;
export const IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;
export const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;
export const COMPILE_STATUS = 0x8b81;
export const INFO_LOG_LENGTH = 0x8b84;
export const SHADER_SOURCE_LENGTH = 0x8b88;
export const SHADER_COMPILER = 0x8dfa;
export const SHADER_BINARY_FORMATS = 0x8df8;
export const NUM_SHADER_BINARY_FORMATS = 0x8df9;
export const LOW_FLOAT = 0x8df0;
export const MEDIUM_FLOAT = 0x8df1;
export const HIGH_FLOAT = 0x8df2;
export const LOW_INT = 0x8df3;
export const MEDIUM_INT = 0x8df4;
export const HIGH_INT = 0x8df5;
export const FRAMEBUFFER = 0x8d40;
export const RENDERBUFFER = 0x8d41;
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
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;
export const COLOR_ATTACHMENT0 = 0x8ce0;
export const DEPTH_ATTACHMENT = 0x8d00;
export const STENCIL_ATTACHMENT = 0x8d20;
export const NONE = 0x0;
export const FRAMEBUFFER_COMPLETE = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9;
export const FRAMEBUFFER_UNSUPPORTED = 0x8cdd;
export const FRAMEBUFFER_BINDING = 0x8ca6;
export const RENDERBUFFER_BINDING = 0x8ca7;
export const MAX_RENDERBUFFER_SIZE = 0x84e8;
export const INVALID_FRAMEBUFFER_OPERATION = 0x506;
export const READ_BUFFER = 0xc02;
export const UNPACK_ROW_LENGTH = 0xcf2;
export const UNPACK_SKIP_ROWS = 0xcf3;
export const UNPACK_SKIP_PIXELS = 0xcf4;
export const PACK_ROW_LENGTH = 0xd02;
export const PACK_SKIP_ROWS = 0xd03;
export const PACK_SKIP_PIXELS = 0xd04;
export const COLOR = 0x1800;
export const DEPTH = 0x1801;
export const STENCIL = 0x1802;
export const RED = 0x1903;
export const RGB8 = 0x8051;
export const RGBA8 = 0x8058;
export const RGB10_A2 = 0x8059;
export const TEXTURE_BINDING_3D = 0x806a;
export const UNPACK_SKIP_IMAGES = 0x806d;
export const UNPACK_IMAGE_HEIGHT = 0x806e;
export const TEXTURE_3D = 0x806f;
export const TEXTURE_WRAP_R = 0x8072;
export const MAX_3D_TEXTURE_SIZE = 0x8073;
export const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
export const MAX_ELEMENTS_VERTICES = 0x80e8;
export const MAX_ELEMENTS_INDICES = 0x80e9;
export const TEXTURE_MIN_LOD = 0x813a;
export const TEXTURE_MAX_LOD = 0x813b;
export const TEXTURE_BASE_LEVEL = 0x813c;
export const TEXTURE_MAX_LEVEL = 0x813d;
export const MIN = 0x8007;
export const MAX = 0x8008;
export const DEPTH_COMPONENT24 = 0x81a6;
export const MAX_TEXTURE_LOD_BIAS = 0x84fd;
export const TEXTURE_COMPARE_MODE = 0x884c;
export const TEXTURE_COMPARE_FUNC = 0x884d;
export const CURRENT_QUERY = 0x8865;
export const QUERY_RESULT = 0x8866;
export const QUERY_RESULT_AVAILABLE = 0x8867;
export const BUFFER_MAPPED = 0x88bc;
export const BUFFER_MAP_POINTER = 0x88bd;
export const STREAM_READ = 0x88e1;
export const STREAM_COPY = 0x88e2;
export const STATIC_READ = 0x88e5;
export const STATIC_COPY = 0x88e6;
export const DYNAMIC_READ = 0x88e9;
export const DYNAMIC_COPY = 0x88ea;
export const MAX_DRAW_BUFFERS = 0x8824;
export const DRAW_BUFFER0 = 0x8825;
export const DRAW_BUFFER1 = 0x8826;
export const DRAW_BUFFER2 = 0x8827;
export const DRAW_BUFFER3 = 0x8828;
export const DRAW_BUFFER4 = 0x8829;
export const DRAW_BUFFER5 = 0x882a;
export const DRAW_BUFFER6 = 0x882b;
export const DRAW_BUFFER7 = 0x882c;
export const DRAW_BUFFER8 = 0x882d;
export const DRAW_BUFFER9 = 0x882e;
export const DRAW_BUFFER10 = 0x882f;
export const DRAW_BUFFER11 = 0x8830;
export const DRAW_BUFFER12 = 0x8831;
export const DRAW_BUFFER13 = 0x8832;
export const DRAW_BUFFER14 = 0x8833;
export const DRAW_BUFFER15 = 0x8834;
export const MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49;
export const MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a;
export const SAMPLER_3D = 0x8b5f;
export const SAMPLER_2D_SHADOW = 0x8b62;
export const FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
export const PIXEL_PACK_BUFFER = 0x88eb;
export const PIXEL_UNPACK_BUFFER = 0x88ec;
export const PIXEL_PACK_BUFFER_BINDING = 0x88ed;
export const PIXEL_UNPACK_BUFFER_BINDING = 0x88ef;
export const FLOAT_MAT2x3 = 0x8b65;
export const FLOAT_MAT2x4 = 0x8b66;
export const FLOAT_MAT3x2 = 0x8b67;
export const FLOAT_MAT3x4 = 0x8b68;
export const FLOAT_MAT4x2 = 0x8b69;
export const FLOAT_MAT4x3 = 0x8b6a;
export const SRGB = 0x8c40;
export const SRGB8 = 0x8c41;
export const SRGB8_ALPHA8 = 0x8c43;
export const COMPARE_REF_TO_TEXTURE = 0x884e;
export const MAJOR_VERSION = 0x821b;
export const MINOR_VERSION = 0x821c;
export const NUM_EXTENSIONS = 0x821d;
export const RGBA32F = 0x8814;
export const RGB32F = 0x8815;
export const RGBA16F = 0x881a;
export const RGB16F = 0x881b;
export const VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd;
export const MAX_ARRAY_TEXTURE_LAYERS = 0x88ff;
export const MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
export const MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
export const MAX_VARYING_COMPONENTS = 0x8b4b;
export const TEXTURE_2D_ARRAY = 0x8c1a;
export const TEXTURE_BINDING_2D_ARRAY = 0x8c1d;
export const R11F_G11F_B10F = 0x8c3a;
export const UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;
export const RGB9_E5 = 0x8c3d;
export const UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;
export const TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76;
export const TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80;
export const TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
export const TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84;
export const TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85;
export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88;
export const RASTERIZER_DISCARD = 0x8c89;
export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b;
export const INTERLEAVED_ATTRIBS = 0x8c8c;
export const SEPARATE_ATTRIBS = 0x8c8d;
export const TRANSFORM_FEEDBACK_BUFFER = 0x8c8e;
export const TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f;
export const RGBA32UI = 0x8d70;
export const RGB32UI = 0x8d71;
export const RGBA16UI = 0x8d76;
export const RGB16UI = 0x8d77;
export const RGBA8UI = 0x8d7c;
export const RGB8UI = 0x8d7d;
export const RGBA32I = 0x8d82;
export const RGB32I = 0x8d83;
export const RGBA16I = 0x8d88;
export const RGB16I = 0x8d89;
export const RGBA8I = 0x8d8e;
export const RGB8I = 0x8d8f;
export const RED_INTEGER = 0x8d94;
export const RGB_INTEGER = 0x8d98;
export const RGBA_INTEGER = 0x8d99;
export const SAMPLER_2D_ARRAY = 0x8dc1;
export const SAMPLER_2D_ARRAY_SHADOW = 0x8dc4;
export const SAMPLER_CUBE_SHADOW = 0x8dc5;
export const UNSIGNED_INT_VEC2 = 0x8dc6;
export const UNSIGNED_INT_VEC3 = 0x8dc7;
export const UNSIGNED_INT_VEC4 = 0x8dc8;
export const INT_SAMPLER_2D = 0x8dca;
export const INT_SAMPLER_3D = 0x8dcb;
export const INT_SAMPLER_CUBE = 0x8dcc;
export const INT_SAMPLER_2D_ARRAY = 0x8dcf;
export const UNSIGNED_INT_SAMPLER_2D = 0x8dd2;
export const UNSIGNED_INT_SAMPLER_3D = 0x8dd3;
export const UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4;
export const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7;
export const BUFFER_ACCESS_FLAGS = 0x911f;
export const BUFFER_MAP_LENGTH = 0x9120;
export const BUFFER_MAP_OFFSET = 0x9121;
export const DEPTH_COMPONENT32F = 0x8cac;
export const DEPTH32F_STENCIL8 = 0x8cad;
export const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;
export const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
export const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
export const FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
export const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
export const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
export const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
export const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
export const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
export const FRAMEBUFFER_DEFAULT = 0x8218;
export const FRAMEBUFFER_UNDEFINED = 0x8219;
export const DEPTH_STENCIL_ATTACHMENT = 0x821a;
export const DEPTH_STENCIL = 0x84f9;
export const UNSIGNED_INT_24_8 = 0x84fa;
export const DEPTH24_STENCIL8 = 0x88f0;
export const UNSIGNED_NORMALIZED = 0x8c17;
export const DRAW_FRAMEBUFFER_BINDING = 0x8ca6;
export const READ_FRAMEBUFFER = 0x8ca8;
export const DRAW_FRAMEBUFFER = 0x8ca9;
export const READ_FRAMEBUFFER_BINDING = 0x8caa;
export const RENDERBUFFER_SAMPLES = 0x8cab;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;
export const MAX_COLOR_ATTACHMENTS = 0x8cdf;
export const COLOR_ATTACHMENT1 = 0x8ce1;
export const COLOR_ATTACHMENT2 = 0x8ce2;
export const COLOR_ATTACHMENT3 = 0x8ce3;
export const COLOR_ATTACHMENT4 = 0x8ce4;
export const COLOR_ATTACHMENT5 = 0x8ce5;
export const COLOR_ATTACHMENT6 = 0x8ce6;
export const COLOR_ATTACHMENT7 = 0x8ce7;
export const COLOR_ATTACHMENT8 = 0x8ce8;
export const COLOR_ATTACHMENT9 = 0x8ce9;
export const COLOR_ATTACHMENT10 = 0x8cea;
export const COLOR_ATTACHMENT11 = 0x8ceb;
export const COLOR_ATTACHMENT12 = 0x8cec;
export const COLOR_ATTACHMENT13 = 0x8ced;
export const COLOR_ATTACHMENT14 = 0x8cee;
export const COLOR_ATTACHMENT15 = 0x8cef;
export const COLOR_ATTACHMENT16 = 0x8cf0;
export const COLOR_ATTACHMENT17 = 0x8cf1;
export const COLOR_ATTACHMENT18 = 0x8cf2;
export const COLOR_ATTACHMENT19 = 0x8cf3;
export const COLOR_ATTACHMENT20 = 0x8cf4;
export const COLOR_ATTACHMENT21 = 0x8cf5;
export const COLOR_ATTACHMENT22 = 0x8cf6;
export const COLOR_ATTACHMENT23 = 0x8cf7;
export const COLOR_ATTACHMENT24 = 0x8cf8;
export const COLOR_ATTACHMENT25 = 0x8cf9;
export const COLOR_ATTACHMENT26 = 0x8cfa;
export const COLOR_ATTACHMENT27 = 0x8cfb;
export const COLOR_ATTACHMENT28 = 0x8cfc;
export const COLOR_ATTACHMENT29 = 0x8cfd;
export const COLOR_ATTACHMENT30 = 0x8cfe;
export const COLOR_ATTACHMENT31 = 0x8cff;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;
export const MAX_SAMPLES = 0x8d57;
export const HALF_FLOAT = 0x140b;
export const MAP_READ_BIT = 0x1;
export const MAP_WRITE_BIT = 0x2;
export const MAP_INVALIDATE_RANGE_BIT = 0x4;
export const MAP_INVALIDATE_BUFFER_BIT = 0x8;
export const MAP_FLUSH_EXPLICIT_BIT = 0x10;
export const MAP_UNSYNCHRONIZED_BIT = 0x20;
export const RG = 0x8227;
export const RG_INTEGER = 0x8228;
export const R8 = 0x8229;
export const RG8 = 0x822b;
export const R16F = 0x822d;
export const R32F = 0x822e;
export const RG16F = 0x822f;
export const RG32F = 0x8230;
export const R8I = 0x8231;
export const R8UI = 0x8232;
export const R16I = 0x8233;
export const R16UI = 0x8234;
export const R32I = 0x8235;
export const R32UI = 0x8236;
export const RG8I = 0x8237;
export const RG8UI = 0x8238;
export const RG16I = 0x8239;
export const RG16UI = 0x823a;
export const RG32I = 0x823b;
export const RG32UI = 0x823c;
export const VERTEX_ARRAY_BINDING = 0x85b5;
export const R8_SNORM = 0x8f94;
export const RG8_SNORM = 0x8f95;
export const RGB8_SNORM = 0x8f96;
export const RGBA8_SNORM = 0x8f97;
export const SIGNED_NORMALIZED = 0x8f9c;
export const PRIMITIVE_RESTART_FIXED_INDEX = 0x8d69;
export const COPY_READ_BUFFER = 0x8f36;
export const COPY_WRITE_BUFFER = 0x8f37;
export const COPY_READ_BUFFER_BINDING = 0x8f36;
export const COPY_WRITE_BUFFER_BINDING = 0x8f37;
export const UNIFORM_BUFFER = 0x8a11;
export const UNIFORM_BUFFER_BINDING = 0x8a28;
export const UNIFORM_BUFFER_START = 0x8a29;
export const UNIFORM_BUFFER_SIZE = 0x8a2a;
export const MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b;
export const MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d;
export const MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e;
export const MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f;
export const MAX_UNIFORM_BLOCK_SIZE = 0x8a30;
export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31;
export const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33;
export const UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34;
export const ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH = 0x8a35;
export const ACTIVE_UNIFORM_BLOCKS = 0x8a36;
export const UNIFORM_TYPE = 0x8a37;
export const UNIFORM_SIZE = 0x8a38;
export const UNIFORM_NAME_LENGTH = 0x8a39;
export const UNIFORM_BLOCK_INDEX = 0x8a3a;
export const UNIFORM_OFFSET = 0x8a3b;
export const UNIFORM_ARRAY_STRIDE = 0x8a3c;
export const UNIFORM_MATRIX_STRIDE = 0x8a3d;
export const UNIFORM_IS_ROW_MAJOR = 0x8a3e;
export const UNIFORM_BLOCK_BINDING = 0x8a3f;
export const UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
export const UNIFORM_BLOCK_NAME_LENGTH = 0x8a41;
export const UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42;
export const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
export const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
export const INVALID_INDEX = 0xffffffff;
export const MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
export const MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
export const MAX_SERVER_WAIT_TIMEOUT = 0x9111;
export const OBJECT_TYPE = 0x9112;
export const SYNC_CONDITION = 0x9113;
export const SYNC_STATUS = 0x9114;
export const SYNC_FLAGS = 0x9115;
export const SYNC_FENCE = 0x9116;
export const SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
export const UNSIGNALED = 0x9118;
export const SIGNALED = 0x9119;
export const ALREADY_SIGNALED = 0x911a;
export const TIMEOUT_EXPIRED = 0x911b;
export const CONDITION_SATISFIED = 0x911c;
export const WAIT_FAILED = 0x911d;
export const SYNC_FLUSH_COMMANDS_BIT = 0x1;
export const TIMEOUT_IGNORED = 0x10000000000000000;
export const VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe;
export const ANY_SAMPLES_PASSED = 0x8c2f;
export const ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;
export const SAMPLER_BINDING = 0x8919;
export const RGB10_A2UI = 0x906f;
export const TEXTURE_SWIZZLE_R = 0x8e42;
export const TEXTURE_SWIZZLE_G = 0x8e43;
export const TEXTURE_SWIZZLE_B = 0x8e44;
export const TEXTURE_SWIZZLE_A = 0x8e45;
export const GREEN = 0x1904;
export const BLUE = 0x1905;
export const INT_2_10_10_10_REV = 0x8d9f;
export const TRANSFORM_FEEDBACK = 0x8e22;
export const TRANSFORM_FEEDBACK_PAUSED = 0x8e23;
export const TRANSFORM_FEEDBACK_ACTIVE = 0x8e24;
export const TRANSFORM_FEEDBACK_BINDING = 0x8e25;
export const PROGRAM_BINARY_RETRIEVABLE_HINT = 0x8257;
export const PROGRAM_BINARY_LENGTH = 0x8741;
export const NUM_PROGRAM_BINARY_FORMATS = 0x87fe;
export const PROGRAM_BINARY_FORMATS = 0x87ff;
export const COMPRESSED_R11_EAC = 0x9270;
export const COMPRESSED_SIGNED_R11_EAC = 0x9271;
export const COMPRESSED_RG11_EAC = 0x9272;
export const COMPRESSED_SIGNED_RG11_EAC = 0x9273;
export const COMPRESSED_RGB8_ETC2 = 0x9274;
export const COMPRESSED_SRGB8_ETC2 = 0x9275;
export const COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9276;
export const COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9277;
export const COMPRESSED_RGBA8_ETC2_EAC = 0x9278;
export const COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9279;
export const TEXTURE_IMMUTABLE_FORMAT = 0x912f;
export const MAX_ELEMENT_INDEX = 0x8d6b;
export const NUM_SAMPLE_COUNTS = 0x9380;
export const TEXTURE_IMMUTABLE_LEVELS = 0x82df;
export const COMPUTE_SHADER = 0x91b9;
export const MAX_COMPUTE_UNIFORM_BLOCKS = 0x91bb;
export const MAX_COMPUTE_TEXTURE_IMAGE_UNITS = 0x91bc;
export const MAX_COMPUTE_IMAGE_UNIFORMS = 0x91bd;
export const MAX_COMPUTE_SHARED_MEMORY_SIZE = 0x8262;
export const MAX_COMPUTE_UNIFORM_COMPONENTS = 0x8263;
export const MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS = 0x8264;
export const MAX_COMPUTE_ATOMIC_COUNTERS = 0x8265;
export const MAX_COMBINED_COMPUTE_UNIFORM_COMPONENTS = 0x8266;
export const MAX_COMPUTE_WORK_GROUP_INVOCATIONS = 0x90eb;
export const MAX_COMPUTE_WORK_GROUP_COUNT = 0x91be;
export const MAX_COMPUTE_WORK_GROUP_SIZE = 0x91bf;
export const COMPUTE_WORK_GROUP_SIZE = 0x8267;
export const DISPATCH_INDIRECT_BUFFER = 0x90ee;
export const DISPATCH_INDIRECT_BUFFER_BINDING = 0x90ef;
export const COMPUTE_SHADER_BIT = 0x20;
export const DRAW_INDIRECT_BUFFER = 0x8f3f;
export const DRAW_INDIRECT_BUFFER_BINDING = 0x8f43;
export const MAX_UNIFORM_LOCATIONS = 0x826e;
export const FRAMEBUFFER_DEFAULT_WIDTH = 0x9310;
export const FRAMEBUFFER_DEFAULT_HEIGHT = 0x9311;
export const FRAMEBUFFER_DEFAULT_SAMPLES = 0x9313;
export const FRAMEBUFFER_DEFAULT_FIXED_SAMPLE_LOCATIONS = 0x9314;
export const MAX_FRAMEBUFFER_WIDTH = 0x9315;
export const MAX_FRAMEBUFFER_HEIGHT = 0x9316;
export const MAX_FRAMEBUFFER_SAMPLES = 0x9318;
export const UNIFORM = 0x92e1;
export const UNIFORM_BLOCK = 0x92e2;
export const PROGRAM_INPUT = 0x92e3;
export const PROGRAM_OUTPUT = 0x92e4;
export const BUFFER_VARIABLE = 0x92e5;
export const SHADER_STORAGE_BLOCK = 0x92e6;
export const ATOMIC_COUNTER_BUFFER = 0x92c0;
export const TRANSFORM_FEEDBACK_VARYING = 0x92f4;
export const ACTIVE_RESOURCES = 0x92f5;
export const MAX_NAME_LENGTH = 0x92f6;
export const MAX_NUM_ACTIVE_VARIABLES = 0x92f7;
export const NAME_LENGTH = 0x92f9;
export const TYPE = 0x92fa;
export const ARRAY_SIZE = 0x92fb;
export const OFFSET = 0x92fc;
export const BLOCK_INDEX = 0x92fd;
export const ARRAY_STRIDE = 0x92fe;
export const MATRIX_STRIDE = 0x92ff;
export const IS_ROW_MAJOR = 0x9300;
export const ATOMIC_COUNTER_BUFFER_INDEX = 0x9301;
export const BUFFER_BINDING = 0x9302;
export const BUFFER_DATA_SIZE = 0x9303;
export const NUM_ACTIVE_VARIABLES = 0x9304;
export const ACTIVE_VARIABLES = 0x9305;
export const REFERENCED_BY_VERTEX_SHADER = 0x9306;
export const REFERENCED_BY_FRAGMENT_SHADER = 0x930a;
export const REFERENCED_BY_COMPUTE_SHADER = 0x930b;
export const TOP_LEVEL_ARRAY_SIZE = 0x930c;
export const TOP_LEVEL_ARRAY_STRIDE = 0x930d;
export const LOCATION = 0x930e;
export const VERTEX_SHADER_BIT = 0x1;
export const FRAGMENT_SHADER_BIT = 0x2;
export const ALL_SHADER_BITS = 0xffffffff;
export const PROGRAM_SEPARABLE = 0x8258;
export const ACTIVE_PROGRAM = 0x8259;
export const PROGRAM_PIPELINE_BINDING = 0x825a;
export const ATOMIC_COUNTER_BUFFER_BINDING = 0x92c1;
export const ATOMIC_COUNTER_BUFFER_START = 0x92c2;
export const ATOMIC_COUNTER_BUFFER_SIZE = 0x92c3;
export const MAX_VERTEX_ATOMIC_COUNTER_BUFFERS = 0x92cc;
export const MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS = 0x92d0;
export const MAX_COMBINED_ATOMIC_COUNTER_BUFFERS = 0x92d1;
export const MAX_VERTEX_ATOMIC_COUNTERS = 0x92d2;
export const MAX_FRAGMENT_ATOMIC_COUNTERS = 0x92d6;
export const MAX_COMBINED_ATOMIC_COUNTERS = 0x92d7;
export const MAX_ATOMIC_COUNTER_BUFFER_SIZE = 0x92d8;
export const MAX_ATOMIC_COUNTER_BUFFER_BINDINGS = 0x92dc;
export const ACTIVE_ATOMIC_COUNTER_BUFFERS = 0x92d9;
export const UNSIGNED_INT_ATOMIC_COUNTER = 0x92db;
export const MAX_IMAGE_UNITS = 0x8f38;
export const MAX_VERTEX_IMAGE_UNIFORMS = 0x90ca;
export const MAX_FRAGMENT_IMAGE_UNIFORMS = 0x90ce;
export const MAX_COMBINED_IMAGE_UNIFORMS = 0x90cf;
export const IMAGE_BINDING_NAME = 0x8f3a;
export const IMAGE_BINDING_LEVEL = 0x8f3b;
export const IMAGE_BINDING_LAYERED = 0x8f3c;
export const IMAGE_BINDING_LAYER = 0x8f3d;
export const IMAGE_BINDING_ACCESS = 0x8f3e;
export const IMAGE_BINDING_FORMAT = 0x906e;
export const VERTEX_ATTRIB_ARRAY_BARRIER_BIT = 0x1;
export const ELEMENT_ARRAY_BARRIER_BIT = 0x2;
export const UNIFORM_BARRIER_BIT = 0x4;
export const TEXTURE_FETCH_BARRIER_BIT = 0x8;
export const SHADER_IMAGE_ACCESS_BARRIER_BIT = 0x20;
export const COMMAND_BARRIER_BIT = 0x40;
export const PIXEL_BUFFER_BARRIER_BIT = 0x80;
export const TEXTURE_UPDATE_BARRIER_BIT = 0x100;
export const BUFFER_UPDATE_BARRIER_BIT = 0x200;
export const FRAMEBUFFER_BARRIER_BIT = 0x400;
export const TRANSFORM_FEEDBACK_BARRIER_BIT = 0x800;
export const ATOMIC_COUNTER_BARRIER_BIT = 0x1000;
export const ALL_BARRIER_BITS = 0xffffffff;
export const IMAGE_2D = 0x904d;
export const IMAGE_3D = 0x904e;
export const IMAGE_CUBE = 0x9050;
export const IMAGE_2D_ARRAY = 0x9053;
export const INT_IMAGE_2D = 0x9058;
export const INT_IMAGE_3D = 0x9059;
export const INT_IMAGE_CUBE = 0x905b;
export const INT_IMAGE_2D_ARRAY = 0x905e;
export const UNSIGNED_INT_IMAGE_2D = 0x9063;
export const UNSIGNED_INT_IMAGE_3D = 0x9064;
export const UNSIGNED_INT_IMAGE_CUBE = 0x9066;
export const UNSIGNED_INT_IMAGE_2D_ARRAY = 0x9069;
export const IMAGE_FORMAT_COMPATIBILITY_TYPE = 0x90c7;
export const IMAGE_FORMAT_COMPATIBILITY_BY_SIZE = 0x90c8;
export const IMAGE_FORMAT_COMPATIBILITY_BY_CLASS = 0x90c9;
export const READ_ONLY = 0x88b8;
export const WRITE_ONLY = 0x88b9;
export const READ_WRITE = 0x88ba;
export const SHADER_STORAGE_BUFFER = 0x90d2;
export const SHADER_STORAGE_BUFFER_BINDING = 0x90d3;
export const SHADER_STORAGE_BUFFER_START = 0x90d4;
export const SHADER_STORAGE_BUFFER_SIZE = 0x90d5;
export const MAX_VERTEX_SHADER_STORAGE_BLOCKS = 0x90d6;
export const MAX_FRAGMENT_SHADER_STORAGE_BLOCKS = 0x90da;
export const MAX_COMPUTE_SHADER_STORAGE_BLOCKS = 0x90db;
export const MAX_COMBINED_SHADER_STORAGE_BLOCKS = 0x90dc;
export const MAX_SHADER_STORAGE_BUFFER_BINDINGS = 0x90dd;
export const MAX_SHADER_STORAGE_BLOCK_SIZE = 0x90de;
export const SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT = 0x90df;
export const SHADER_STORAGE_BARRIER_BIT = 0x2000;
export const MAX_COMBINED_SHADER_OUTPUT_RESOURCES = 0x8f39;
export const DEPTH_STENCIL_TEXTURE_MODE = 0x90ea;
export const STENCIL_INDEX = 0x1901;
export const MIN_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5e;
export const MAX_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5f;
export const SAMPLE_POSITION = 0x8e50;
export const SAMPLE_MASK = 0x8e51;
export const SAMPLE_MASK_VALUE = 0x8e52;
export const TEXTURE_2D_MULTISAMPLE = 0x9100;
export const MAX_SAMPLE_MASK_WORDS = 0x8e59;
export const MAX_COLOR_TEXTURE_SAMPLES = 0x910e;
export const MAX_DEPTH_TEXTURE_SAMPLES = 0x910f;
export const MAX_INTEGER_SAMPLES = 0x9110;
export const TEXTURE_BINDING_2D_MULTISAMPLE = 0x9104;
export const TEXTURE_SAMPLES = 0x9106;
export const TEXTURE_FIXED_SAMPLE_LOCATIONS = 0x9107;
export const TEXTURE_WIDTH = 0x1000;
export const TEXTURE_HEIGHT = 0x1001;
export const TEXTURE_DEPTH = 0x8071;
export const TEXTURE_INTERNAL_FORMAT = 0x1003;
export const TEXTURE_RED_SIZE = 0x805c;
export const TEXTURE_GREEN_SIZE = 0x805d;
export const TEXTURE_BLUE_SIZE = 0x805e;
export const TEXTURE_ALPHA_SIZE = 0x805f;
export const TEXTURE_DEPTH_SIZE = 0x884a;
export const TEXTURE_STENCIL_SIZE = 0x88f1;
export const TEXTURE_SHARED_SIZE = 0x8c3f;
export const TEXTURE_RED_TYPE = 0x8c10;
export const TEXTURE_GREEN_TYPE = 0x8c11;
export const TEXTURE_BLUE_TYPE = 0x8c12;
export const TEXTURE_ALPHA_TYPE = 0x8c13;
export const TEXTURE_DEPTH_TYPE = 0x8c16;
export const TEXTURE_COMPRESSED = 0x86a1;
export const SAMPLER_2D_MULTISAMPLE = 0x9108;
export const INT_SAMPLER_2D_MULTISAMPLE = 0x9109;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE = 0x910a;
export const VERTEX_ATTRIB_BINDING = 0x82d4;
export const VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d5;
export const VERTEX_BINDING_DIVISOR = 0x82d6;
export const VERTEX_BINDING_OFFSET = 0x82d7;
export const VERTEX_BINDING_STRIDE = 0x82d8;
export const VERTEX_BINDING_BUFFER = 0x8f4f;
export const MAX_VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d9;
export const MAX_VERTEX_ATTRIB_BINDINGS = 0x82da;
export const MAX_VERTEX_ATTRIB_STRIDE = 0x82e5;
export const MULTISAMPLE_LINE_WIDTH_RANGE = 0x9381;
export const MULTISAMPLE_LINE_WIDTH_GRANULARITY = 0x9382;
export const MULTIPLY = 0x9294;
export const SCREEN = 0x9295;
export const OVERLAY = 0x9296;
export const DARKEN = 0x9297;
export const LIGHTEN = 0x9298;
export const COLORDODGE = 0x9299;
export const COLORBURN = 0x929a;
export const HARDLIGHT = 0x929b;
export const SOFTLIGHT = 0x929c;
export const DIFFERENCE = 0x929e;
export const EXCLUSION = 0x92a0;
export const HSL_HUE = 0x92ad;
export const HSL_SATURATION = 0x92ae;
export const HSL_COLOR = 0x92af;
export const HSL_LUMINOSITY = 0x92b0;
export const DEBUG_OUTPUT_SYNCHRONOUS = 0x8242;
export const DEBUG_NEXT_LOGGED_MESSAGE_LENGTH = 0x8243;
export const DEBUG_CALLBACK_FUNCTION = 0x8244;
export const DEBUG_CALLBACK_USER_PARAM = 0x8245;
export const DEBUG_SOURCE_API = 0x8246;
export const DEBUG_SOURCE_WINDOW_SYSTEM = 0x8247;
export const DEBUG_SOURCE_SHADER_COMPILER = 0x8248;
export const DEBUG_SOURCE_THIRD_PARTY = 0x8249;
export const DEBUG_SOURCE_APPLICATION = 0x824a;
export const DEBUG_SOURCE_OTHER = 0x824b;
export const DEBUG_TYPE_ERROR = 0x824c;
export const DEBUG_TYPE_DEPRECATED_BEHAVIOR = 0x824d;
export const DEBUG_TYPE_UNDEFINED_BEHAVIOR = 0x824e;
export const DEBUG_TYPE_PORTABILITY = 0x824f;
export const DEBUG_TYPE_PERFORMANCE = 0x8250;
export const DEBUG_TYPE_OTHER = 0x8251;
export const DEBUG_TYPE_MARKER = 0x8268;
export const DEBUG_TYPE_PUSH_GROUP = 0x8269;
export const DEBUG_TYPE_POP_GROUP = 0x826a;
export const DEBUG_SEVERITY_NOTIFICATION = 0x826b;
export const MAX_DEBUG_GROUP_STACK_DEPTH = 0x826c;
export const DEBUG_GROUP_STACK_DEPTH = 0x826d;
export const BUFFER = 0x82e0;
export const SHADER = 0x82e1;
export const PROGRAM = 0x82e2;
export const VERTEX_ARRAY = 0x8074;
export const QUERY = 0x82e3;
export const PROGRAM_PIPELINE = 0x82e4;
export const SAMPLER = 0x82e6;
export const MAX_LABEL_LENGTH = 0x82e8;
export const MAX_DEBUG_MESSAGE_LENGTH = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES = 0x9144;
export const DEBUG_LOGGED_MESSAGES = 0x9145;
export const DEBUG_SEVERITY_HIGH = 0x9146;
export const DEBUG_SEVERITY_MEDIUM = 0x9147;
export const DEBUG_SEVERITY_LOW = 0x9148;
export const DEBUG_OUTPUT = 0x92e0;
export const CONTEXT_FLAG_DEBUG_BIT = 0x2;
export const STACK_OVERFLOW = 0x503;
export const STACK_UNDERFLOW = 0x504;
export const GEOMETRY_SHADER = 0x8dd9;
export const GEOMETRY_SHADER_BIT = 0x4;
export const GEOMETRY_VERTICES_OUT = 0x8916;
export const GEOMETRY_INPUT_TYPE = 0x8917;
export const GEOMETRY_OUTPUT_TYPE = 0x8918;
export const GEOMETRY_SHADER_INVOCATIONS = 0x887f;
export const LAYER_PROVOKING_VERTEX = 0x825e;
export const LINES_ADJACENCY = 0xa;
export const LINE_STRIP_ADJACENCY = 0xb;
export const TRIANGLES_ADJACENCY = 0xc;
export const TRIANGLE_STRIP_ADJACENCY = 0xd;
export const MAX_GEOMETRY_UNIFORM_COMPONENTS = 0x8ddf;
export const MAX_GEOMETRY_UNIFORM_BLOCKS = 0x8a2c;
export const MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS = 0x8a32;
export const MAX_GEOMETRY_INPUT_COMPONENTS = 0x9123;
export const MAX_GEOMETRY_OUTPUT_COMPONENTS = 0x9124;
export const MAX_GEOMETRY_OUTPUT_VERTICES = 0x8de0;
export const MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS = 0x8de1;
export const MAX_GEOMETRY_SHADER_INVOCATIONS = 0x8e5a;
export const MAX_GEOMETRY_TEXTURE_IMAGE_UNITS = 0x8c29;
export const MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS = 0x92cf;
export const MAX_GEOMETRY_ATOMIC_COUNTERS = 0x92d5;
export const MAX_GEOMETRY_IMAGE_UNIFORMS = 0x90cd;
export const MAX_GEOMETRY_SHADER_STORAGE_BLOCKS = 0x90d7;
export const FIRST_VERTEX_CONVENTION = 0x8e4d;
export const LAST_VERTEX_CONVENTION = 0x8e4e;
export const UNDEFINED_VERTEX = 0x8260;
export const PRIMITIVES_GENERATED = 0x8c87;
export const FRAMEBUFFER_DEFAULT_LAYERS = 0x9312;
export const MAX_FRAMEBUFFER_LAYERS = 0x9317;
export const FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS = 0x8da8;
export const FRAMEBUFFER_ATTACHMENT_LAYERED = 0x8da7;
export const REFERENCED_BY_GEOMETRY_SHADER = 0x9309;
export const PRIMITIVE_BOUNDING_BOX = 0x92be;
export const CONTEXT_FLAG_ROBUST_ACCESS_BIT = 0x4;
export const CONTEXT_FLAGS = 0x821e;
export const LOSE_CONTEXT_ON_RESET = 0x8252;
export const GUILTY_CONTEXT_RESET = 0x8253;
export const INNOCENT_CONTEXT_RESET = 0x8254;
export const UNKNOWN_CONTEXT_RESET = 0x8255;
export const RESET_NOTIFICATION_STRATEGY = 0x8256;
export const NO_RESET_NOTIFICATION = 0x8261;
export const CONTEXT_LOST = 0x507;
export const SAMPLE_SHADING = 0x8c36;
export const MIN_SAMPLE_SHADING_VALUE = 0x8c37;
export const MIN_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5b;
export const MAX_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5c;
export const FRAGMENT_INTERPOLATION_OFFSET_BITS = 0x8e5d;
export const PATCHES = 0xe;
export const PATCH_VERTICES = 0x8e72;
export const TESS_CONTROL_OUTPUT_VERTICES = 0x8e75;
export const TESS_GEN_MODE = 0x8e76;
export const TESS_GEN_SPACING = 0x8e77;
export const TESS_GEN_VERTEX_ORDER = 0x8e78;
export const TESS_GEN_POINT_MODE = 0x8e79;
export const ISOLINES = 0x8e7a;
export const QUADS = 0x7;
export const FRACTIONAL_ODD = 0x8e7b;
export const FRACTIONAL_EVEN = 0x8e7c;
export const MAX_PATCH_VERTICES = 0x8e7d;
export const MAX_TESS_GEN_LEVEL = 0x8e7e;
export const MAX_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e7f;
export const MAX_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e80;
export const MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS = 0x8e81;
export const MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS = 0x8e82;
export const MAX_TESS_CONTROL_OUTPUT_COMPONENTS = 0x8e83;
export const MAX_TESS_PATCH_COMPONENTS = 0x8e84;
export const MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS = 0x8e85;
export const MAX_TESS_EVALUATION_OUTPUT_COMPONENTS = 0x8e86;
export const MAX_TESS_CONTROL_UNIFORM_BLOCKS = 0x8e89;
export const MAX_TESS_EVALUATION_UNIFORM_BLOCKS = 0x8e8a;
export const MAX_TESS_CONTROL_INPUT_COMPONENTS = 0x886c;
export const MAX_TESS_EVALUATION_INPUT_COMPONENTS = 0x886d;
export const MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e1e;
export const MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e1f;
export const MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS = 0x92cd;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS = 0x92ce;
export const MAX_TESS_CONTROL_ATOMIC_COUNTERS = 0x92d3;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTERS = 0x92d4;
export const MAX_TESS_CONTROL_IMAGE_UNIFORMS = 0x90cb;
export const MAX_TESS_EVALUATION_IMAGE_UNIFORMS = 0x90cc;
export const MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS = 0x90d8;
export const MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS = 0x90d9;
export const PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED = 0x8221;
export const IS_PER_PATCH = 0x92e7;
export const REFERENCED_BY_TESS_CONTROL_SHADER = 0x9307;
export const REFERENCED_BY_TESS_EVALUATION_SHADER = 0x9308;
export const TESS_CONTROL_SHADER = 0x8e88;
export const TESS_EVALUATION_SHADER = 0x8e87;
export const TESS_CONTROL_SHADER_BIT = 0x8;
export const TESS_EVALUATION_SHADER_BIT = 0x10;
export const TEXTURE_BORDER_COLOR = 0x1004;
export const CLAMP_TO_BORDER = 0x812d;
export const TEXTURE_BUFFER = 0x8c2a;
export const TEXTURE_BUFFER_BINDING = 0x8c2a;
export const MAX_TEXTURE_BUFFER_SIZE = 0x8c2b;
export const TEXTURE_BINDING_BUFFER = 0x8c2c;
export const TEXTURE_BUFFER_DATA_STORE_BINDING = 0x8c2d;
export const TEXTURE_BUFFER_OFFSET_ALIGNMENT = 0x919f;
export const SAMPLER_BUFFER = 0x8dc2;
export const INT_SAMPLER_BUFFER = 0x8dd0;
export const UNSIGNED_INT_SAMPLER_BUFFER = 0x8dd8;
export const IMAGE_BUFFER = 0x9051;
export const INT_IMAGE_BUFFER = 0x905c;
export const UNSIGNED_INT_IMAGE_BUFFER = 0x9067;
export const TEXTURE_BUFFER_OFFSET = 0x919d;
export const TEXTURE_BUFFER_SIZE = 0x919e;
export const COMPRESSED_RGBA_ASTC_4x4 = 0x93b0;
export const COMPRESSED_RGBA_ASTC_5x4 = 0x93b1;
export const COMPRESSED_RGBA_ASTC_5x5 = 0x93b2;
export const COMPRESSED_RGBA_ASTC_6x5 = 0x93b3;
export const COMPRESSED_RGBA_ASTC_6x6 = 0x93b4;
export const COMPRESSED_RGBA_ASTC_8x5 = 0x93b5;
export const COMPRESSED_RGBA_ASTC_8x6 = 0x93b6;
export const COMPRESSED_RGBA_ASTC_8x8 = 0x93b7;
export const COMPRESSED_RGBA_ASTC_10x5 = 0x93b8;
export const COMPRESSED_RGBA_ASTC_10x6 = 0x93b9;
export const COMPRESSED_RGBA_ASTC_10x8 = 0x93ba;
export const COMPRESSED_RGBA_ASTC_10x10 = 0x93bb;
export const COMPRESSED_RGBA_ASTC_12x10 = 0x93bc;
export const COMPRESSED_RGBA_ASTC_12x12 = 0x93bd;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_4x4 = 0x93d0;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_5x4 = 0x93d1;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_5x5 = 0x93d2;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_6x5 = 0x93d3;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_6x6 = 0x93d4;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x5 = 0x93d5;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x6 = 0x93d6;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_8x8 = 0x93d7;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x5 = 0x93d8;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x6 = 0x93d9;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x8 = 0x93da;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_10x10 = 0x93db;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_12x10 = 0x93dc;
export const COMPRESSED_SRGB8_ALPHA8_ASTC_12x12 = 0x93dd;
export const TEXTURE_CUBE_MAP_ARRAY = 0x9009;
export const TEXTURE_BINDING_CUBE_MAP_ARRAY = 0x900a;
export const SAMPLER_CUBE_MAP_ARRAY = 0x900c;
export const SAMPLER_CUBE_MAP_ARRAY_SHADOW = 0x900d;
export const INT_SAMPLER_CUBE_MAP_ARRAY = 0x900e;
export const UNSIGNED_INT_SAMPLER_CUBE_MAP_ARRAY = 0x900f;
export const IMAGE_CUBE_MAP_ARRAY = 0x9054;
export const INT_IMAGE_CUBE_MAP_ARRAY = 0x905f;
export const UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY = 0x906a;
export const TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9102;
export const TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY = 0x9105;
export const SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910b;
export const INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910c;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910d;

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

export const def_glAttachShader = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glAttachShader!: Deno.UnsafeFnPointer<typeof def_glAttachShader>;

export function AttachShader(
  program: GLuint,
  shader: GLuint,
): void {
  fn_glAttachShader.call(
    program,
    shader,
  );
}

export const def_glBindAttribLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindAttribLocation!: Deno.UnsafeFnPointer<
  typeof def_glBindAttribLocation
>;

export function BindAttribLocation(
  program: GLuint,
  index: GLuint,
  name: Buffer,
): void {
  fn_glBindAttribLocation.call(
    program,
    index,
    bufferToFFI(name),
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

let fn_glBlendEquationSeparate!: Deno.UnsafeFnPointer<
  typeof def_glBlendEquationSeparate
>;

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

let fn_glBlendFuncSeparate!: Deno.UnsafeFnPointer<
  typeof def_glBlendFuncSeparate
>;

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

let fn_glCheckFramebufferStatus!: Deno.UnsafeFnPointer<
  typeof def_glCheckFramebufferStatus
>;

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

export const def_glCompileShader = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCompileShader!: Deno.UnsafeFnPointer<typeof def_glCompileShader>;

export function CompileShader(
  shader: GLuint,
): void {
  fn_glCompileShader.call(
    shader,
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

export const def_glCreateProgram = {
  parameters: [],
  result: "u32",
} as const;

let fn_glCreateProgram!: Deno.UnsafeFnPointer<typeof def_glCreateProgram>;

export function CreateProgram(): GLuint {
  return fn_glCreateProgram.call();
}

export const def_glCreateShader = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glCreateShader!: Deno.UnsafeFnPointer<typeof def_glCreateShader>;

export function CreateShader(
  type: GLenum,
): GLuint {
  return fn_glCreateShader.call(
    type,
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

export const def_glDeleteFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFramebuffers!: Deno.UnsafeFnPointer<
  typeof def_glDeleteFramebuffers
>;

export function DeleteFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glDeleteFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glDeleteProgram = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeleteProgram!: Deno.UnsafeFnPointer<typeof def_glDeleteProgram>;

export function DeleteProgram(
  program: GLuint,
): void {
  fn_glDeleteProgram.call(
    program,
  );
}

export const def_glDeleteRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteRenderbuffers!: Deno.UnsafeFnPointer<
  typeof def_glDeleteRenderbuffers
>;

export function DeleteRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glDeleteRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glDeleteShader = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeleteShader!: Deno.UnsafeFnPointer<typeof def_glDeleteShader>;

export function DeleteShader(
  shader: GLuint,
): void {
  fn_glDeleteShader.call(
    shader,
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

export const def_glDetachShader = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDetachShader!: Deno.UnsafeFnPointer<typeof def_glDetachShader>;

export function DetachShader(
  program: GLuint,
  shader: GLuint,
): void {
  fn_glDetachShader.call(
    program,
    shader,
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

let fn_glDisableVertexAttribArray!: Deno.UnsafeFnPointer<
  typeof def_glDisableVertexAttribArray
>;

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

export const def_glEnableVertexAttribArray = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableVertexAttribArray!: Deno.UnsafeFnPointer<
  typeof def_glEnableVertexAttribArray
>;

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

let fn_glFramebufferRenderbuffer!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferRenderbuffer
>;

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

let fn_glFramebufferTexture2D!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture2D
>;

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

export const def_glGetActiveAttrib = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveAttrib!: Deno.UnsafeFnPointer<typeof def_glGetActiveAttrib>;

export function GetActiveAttrib(
  program: GLuint,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveAttrib.call(
    program,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glGetActiveUniform = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniform!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniform>;

export function GetActiveUniform(
  program: GLuint,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveUniform.call(
    program,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glGetAttachedShaders = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetAttachedShaders!: Deno.UnsafeFnPointer<
  typeof def_glGetAttachedShaders
>;

export function GetAttachedShaders(
  program: GLuint,
  maxCount: GLsizei,
  count: Buffer,
  shaders: Buffer,
): void {
  fn_glGetAttachedShaders.call(
    program,
    maxCount,
    bufferToFFI(count),
    bufferToFFI(shaders),
  );
}

export const def_glGetAttribLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetAttribLocation!: Deno.UnsafeFnPointer<
  typeof def_glGetAttribLocation
>;

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

let fn_glGetFramebufferAttachmentParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetFramebufferAttachmentParameteriv
>;

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

export const def_glGetProgramInfoLog = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramInfoLog!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramInfoLog
>;

export function GetProgramInfoLog(
  program: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetProgramInfoLog.call(
    program,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

export const def_glGetRenderbufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetRenderbufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetRenderbufferParameteriv
>;

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

export const def_glGetShaderiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderiv!: Deno.UnsafeFnPointer<typeof def_glGetShaderiv>;

export function GetShaderiv(
  shader: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetShaderiv.call(
    shader,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetShaderInfoLog = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderInfoLog!: Deno.UnsafeFnPointer<typeof def_glGetShaderInfoLog>;

export function GetShaderInfoLog(
  shader: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetShaderInfoLog.call(
    shader,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

export const def_glGetShaderPrecisionFormat = {
  parameters: ["u32", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderPrecisionFormat!: Deno.UnsafeFnPointer<
  typeof def_glGetShaderPrecisionFormat
>;

export function GetShaderPrecisionFormat(
  shadertype: GLenum,
  precisiontype: GLenum,
  range: Buffer,
  precision: Buffer,
): void {
  fn_glGetShaderPrecisionFormat.call(
    shadertype,
    precisiontype,
    bufferToFFI(range),
    bufferToFFI(precision),
  );
}

export const def_glGetShaderSource = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderSource!: Deno.UnsafeFnPointer<typeof def_glGetShaderSource>;

export function GetShaderSource(
  shader: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  source: Buffer,
): void {
  fn_glGetShaderSource.call(
    shader,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(source),
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

export const def_glGetUniformfv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformfv!: Deno.UnsafeFnPointer<typeof def_glGetUniformfv>;

export function GetUniformfv(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformfv.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetUniformiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformiv!: Deno.UnsafeFnPointer<typeof def_glGetUniformiv>;

export function GetUniformiv(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformiv.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetUniformLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetUniformLocation!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformLocation
>;

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

let fn_glGetVertexAttribfv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribfv
>;

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

let fn_glGetVertexAttribiv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribiv
>;

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

let fn_glGetVertexAttribPointerv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribPointerv
>;

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

export const def_glIsFramebuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsFramebuffer!: Deno.UnsafeFnPointer<typeof def_glIsFramebuffer>;

export function IsFramebuffer(
  framebuffer: GLuint,
): GLboolean {
  return fn_glIsFramebuffer.call(
    framebuffer,
  );
}

export const def_glIsProgram = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgram!: Deno.UnsafeFnPointer<typeof def_glIsProgram>;

export function IsProgram(
  program: GLuint,
): GLboolean {
  return fn_glIsProgram.call(
    program,
  );
}

export const def_glIsRenderbuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glIsRenderbuffer>;

export function IsRenderbuffer(
  renderbuffer: GLuint,
): GLboolean {
  return fn_glIsRenderbuffer.call(
    renderbuffer,
  );
}

export const def_glIsShader = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsShader!: Deno.UnsafeFnPointer<typeof def_glIsShader>;

export function IsShader(
  shader: GLuint,
): GLboolean {
  return fn_glIsShader.call(
    shader,
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

export const def_glLinkProgram = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glLinkProgram!: Deno.UnsafeFnPointer<typeof def_glLinkProgram>;

export function LinkProgram(
  program: GLuint,
): void {
  fn_glLinkProgram.call(
    program,
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

export const def_glReleaseShaderCompiler = {
  parameters: [],
  result: "void",
} as const;

let fn_glReleaseShaderCompiler!: Deno.UnsafeFnPointer<
  typeof def_glReleaseShaderCompiler
>;

export function ReleaseShaderCompiler(): void {
  fn_glReleaseShaderCompiler.call();
}

export const def_glRenderbufferStorage = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorage!: Deno.UnsafeFnPointer<
  typeof def_glRenderbufferStorage
>;

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

export const def_glShaderBinary = {
  parameters: ["i32", "buffer", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glShaderBinary!: Deno.UnsafeFnPointer<typeof def_glShaderBinary>;

export function ShaderBinary(
  count: GLsizei,
  shaders: Buffer,
  binaryFormat: GLenum,
  binary: Buffer,
  length: GLsizei,
): void {
  fn_glShaderBinary.call(
    count,
    bufferToFFI(shaders),
    binaryFormat,
    bufferToFFI(binary),
    length,
  );
}

export const def_glShaderSource = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glShaderSource!: Deno.UnsafeFnPointer<typeof def_glShaderSource>;

export function ShaderSource(
  shader: GLuint,
  count: GLsizei,
  string: Buffer,
  length: Buffer,
): void {
  fn_glShaderSource.call(
    shader,
    count,
    bufferToFFI(string),
    bufferToFFI(length),
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

let fn_glStencilFuncSeparate!: Deno.UnsafeFnPointer<
  typeof def_glStencilFuncSeparate
>;

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

let fn_glStencilMaskSeparate!: Deno.UnsafeFnPointer<
  typeof def_glStencilMaskSeparate
>;

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

let fn_glStencilOpSeparate!: Deno.UnsafeFnPointer<
  typeof def_glStencilOpSeparate
>;

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

export const def_glValidateProgram = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glValidateProgram!: Deno.UnsafeFnPointer<typeof def_glValidateProgram>;

export function ValidateProgram(
  program: GLuint,
): void {
  fn_glValidateProgram.call(
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

let fn_glVertexAttribPointer!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribPointer
>;

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

export const def_glReadBuffer = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glReadBuffer!: Deno.UnsafeFnPointer<typeof def_glReadBuffer>;

export function ReadBuffer(
  src: GLenum,
): void {
  fn_glReadBuffer.call(
    src,
  );
}

export const def_glDrawRangeElements = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawRangeElements!: Deno.UnsafeFnPointer<
  typeof def_glDrawRangeElements
>;

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

export const def_glTexImage3D = {
  parameters: [
    "u32",
    "i32",
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

let fn_glTexImage3D!: Deno.UnsafeFnPointer<typeof def_glTexImage3D>;

export function TexImage3D(
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage3D.call(
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexSubImage3D = {
  parameters: [
    "u32",
    "i32",
    "i32",
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

let fn_glTexSubImage3D!: Deno.UnsafeFnPointer<typeof def_glTexSubImage3D>;

export function TexSubImage3D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage3D.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glCopyTexSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage3D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage3D
>;

export function CopyTexSubImage3D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTexSubImage3D.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glCompressedTexImage3D = {
  parameters: [
    "u32",
    "i32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glCompressedTexImage3D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexImage3D
>;

export function CompressedTexImage3D(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage3D.call(
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage3D = {
  parameters: [
    "u32",
    "i32",
    "i32",
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

let fn_glCompressedTexSubImage3D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexSubImage3D
>;

export function CompressedTexSubImage3D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage3D.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glGenQueries = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenQueries!: Deno.UnsafeFnPointer<typeof def_glGenQueries>;

export function GenQueries(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenQueries.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glDeleteQueries = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteQueries!: Deno.UnsafeFnPointer<typeof def_glDeleteQueries>;

export function DeleteQueries(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteQueries.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsQuery = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsQuery!: Deno.UnsafeFnPointer<typeof def_glIsQuery>;

export function IsQuery(
  id: GLuint,
): GLboolean {
  return fn_glIsQuery.call(
    id,
  );
}

export const def_glBeginQuery = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBeginQuery!: Deno.UnsafeFnPointer<typeof def_glBeginQuery>;

export function BeginQuery(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBeginQuery.call(
    target,
    id,
  );
}

export const def_glEndQuery = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndQuery!: Deno.UnsafeFnPointer<typeof def_glEndQuery>;

export function EndQuery(
  target: GLenum,
): void {
  fn_glEndQuery.call(
    target,
  );
}

export const def_glGetQueryiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryiv!: Deno.UnsafeFnPointer<typeof def_glGetQueryiv>;

export function GetQueryiv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryiv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryObjectuiv
>;

export function GetQueryObjectuiv(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectuiv.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glUnmapBuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glUnmapBuffer!: Deno.UnsafeFnPointer<typeof def_glUnmapBuffer>;

export function UnmapBuffer(
  target: GLenum,
): GLboolean {
  return fn_glUnmapBuffer.call(
    target,
  );
}

export const def_glGetBufferPointerv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferPointerv!: Deno.UnsafeFnPointer<
  typeof def_glGetBufferPointerv
>;

export function GetBufferPointerv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferPointerv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glDrawBuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDrawBuffers!: Deno.UnsafeFnPointer<typeof def_glDrawBuffers>;

export function DrawBuffers(
  n: GLsizei,
  bufs: Buffer,
): void {
  fn_glDrawBuffers.call(
    n,
    bufferToFFI(bufs),
  );
}

export const def_glUniformMatrix2x3fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x3fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix2x3fv
>;

export function UniformMatrix2x3fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x3fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x2fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x2fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix3x2fv
>;

export function UniformMatrix3x2fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x2fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x4fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x4fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix2x4fv
>;

export function UniformMatrix2x4fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x4fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x2fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x2fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix4x2fv
>;

export function UniformMatrix4x2fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x2fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x4fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x4fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix3x4fv
>;

export function UniformMatrix3x4fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x4fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x3fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x3fv!: Deno.UnsafeFnPointer<
  typeof def_glUniformMatrix4x3fv
>;

export function UniformMatrix4x3fv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x3fv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glBlitFramebuffer = {
  parameters: [
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
  ],
  result: "void",
} as const;

let fn_glBlitFramebuffer!: Deno.UnsafeFnPointer<typeof def_glBlitFramebuffer>;

export function BlitFramebuffer(
  srcX0: GLint,
  srcY0: GLint,
  srcX1: GLint,
  srcY1: GLint,
  dstX0: GLint,
  dstY0: GLint,
  dstX1: GLint,
  dstY1: GLint,
  mask: GLbitfield,
  filter: GLenum,
): void {
  fn_glBlitFramebuffer.call(
    srcX0,
    srcY0,
    srcX1,
    srcY1,
    dstX0,
    dstY0,
    dstX1,
    dstY1,
    mask,
    filter,
  );
}

export const def_glRenderbufferStorageMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageMultisample!: Deno.UnsafeFnPointer<
  typeof def_glRenderbufferStorageMultisample
>;

export function RenderbufferStorageMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glFramebufferTextureLayer = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureLayer!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTextureLayer
>;

export function FramebufferTextureLayer(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glFramebufferTextureLayer.call(
    target,
    attachment,
    texture,
    level,
    layer,
  );
}

export const def_glMapBufferRange = {
  parameters: ["u32", "buffer", "isize", "u32"],
  result: "buffer",
} as const;

let fn_glMapBufferRange!: Deno.UnsafeFnPointer<typeof def_glMapBufferRange>;

export function MapBufferRange(
  target: GLenum,
  offset: GLintptr,
  length: GLsizeiptr,
  access: GLbitfield,
): Buffer {
  return fn_glMapBufferRange.call(
    target,
    bufferToFFI(offset),
    length,
    access,
  );
}

export const def_glFlushMappedBufferRange = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedBufferRange!: Deno.UnsafeFnPointer<
  typeof def_glFlushMappedBufferRange
>;

export function FlushMappedBufferRange(
  target: GLenum,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedBufferRange.call(
    target,
    bufferToFFI(offset),
    length,
  );
}

export const def_glBindVertexArray = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindVertexArray!: Deno.UnsafeFnPointer<typeof def_glBindVertexArray>;

export function BindVertexArray(
  array: GLuint,
): void {
  fn_glBindVertexArray.call(
    array,
  );
}

export const def_glDeleteVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteVertexArrays!: Deno.UnsafeFnPointer<
  typeof def_glDeleteVertexArrays
>;

export function DeleteVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glDeleteVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glGenVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenVertexArrays!: Deno.UnsafeFnPointer<typeof def_glGenVertexArrays>;

export function GenVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glGenVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glIsVertexArray = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsVertexArray!: Deno.UnsafeFnPointer<typeof def_glIsVertexArray>;

export function IsVertexArray(
  array: GLuint,
): GLboolean {
  return fn_glIsVertexArray.call(
    array,
  );
}

export const def_glGetIntegeri_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegeri_v!: Deno.UnsafeFnPointer<typeof def_glGetIntegeri_v>;

export function GetIntegeri_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetIntegeri_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glBeginTransformFeedback = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glBeginTransformFeedback
>;

export function BeginTransformFeedback(
  primitiveMode: GLenum,
): void {
  fn_glBeginTransformFeedback.call(
    primitiveMode,
  );
}

export const def_glEndTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glEndTransformFeedback
>;

export function EndTransformFeedback(): void {
  fn_glEndTransformFeedback.call();
}

export const def_glBindBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glBindBufferRange!: Deno.UnsafeFnPointer<typeof def_glBindBufferRange>;

export function BindBufferRange(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glBindBufferRange.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glBindBufferBase = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindBufferBase!: Deno.UnsafeFnPointer<typeof def_glBindBufferBase>;

export function BindBufferBase(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glBindBufferBase.call(
    target,
    index,
    buffer,
  );
}

export const def_glTransformFeedbackVaryings = {
  parameters: ["u32", "i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackVaryings!: Deno.UnsafeFnPointer<
  typeof def_glTransformFeedbackVaryings
>;

export function TransformFeedbackVaryings(
  program: GLuint,
  count: GLsizei,
  varyings: Buffer,
  bufferMode: GLenum,
): void {
  fn_glTransformFeedbackVaryings.call(
    program,
    count,
    bufferToFFI(varyings),
    bufferMode,
  );
}

export const def_glGetTransformFeedbackVarying = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbackVarying!: Deno.UnsafeFnPointer<
  typeof def_glGetTransformFeedbackVarying
>;

export function GetTransformFeedbackVarying(
  program: GLuint,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetTransformFeedbackVarying.call(
    program,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glVertexAttribIPointer = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribIPointer!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribIPointer
>;

export function VertexAttribIPointer(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribIPointer.call(
    index,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glGetVertexAttribIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribIiv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribIiv
>;

export function GetVertexAttribIiv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribIiv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribIuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribIuiv
>;

export function GetVertexAttribIuiv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribIuiv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVertexAttribI4i = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI4i!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4i>;

export function VertexAttribI4i(
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glVertexAttribI4i.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribI4ui = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI4ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4ui>;

export function VertexAttribI4ui(
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
  w: GLuint,
): void {
  fn_glVertexAttribI4ui.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribI4iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4iv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4iv>;

export function VertexAttribI4iv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4iv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4uiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribI4uiv
>;

export function VertexAttribI4uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glGetUniformuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformuiv!: Deno.UnsafeFnPointer<typeof def_glGetUniformuiv>;

export function GetUniformuiv(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformuiv.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetFragDataLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetFragDataLocation!: Deno.UnsafeFnPointer<
  typeof def_glGetFragDataLocation
>;

export function GetFragDataLocation(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetFragDataLocation.call(
    program,
    bufferToFFI(name),
  );
}

export const def_glUniform1ui = {
  parameters: ["i32", "u32"],
  result: "void",
} as const;

let fn_glUniform1ui!: Deno.UnsafeFnPointer<typeof def_glUniform1ui>;

export function Uniform1ui(
  location: GLint,
  v0: GLuint,
): void {
  fn_glUniform1ui.call(
    location,
    v0,
  );
}

export const def_glUniform2ui = {
  parameters: ["i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUniform2ui!: Deno.UnsafeFnPointer<typeof def_glUniform2ui>;

export function Uniform2ui(
  location: GLint,
  v0: GLuint,
  v1: GLuint,
): void {
  fn_glUniform2ui.call(
    location,
    v0,
    v1,
  );
}

export const def_glUniform3ui = {
  parameters: ["i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUniform3ui!: Deno.UnsafeFnPointer<typeof def_glUniform3ui>;

export function Uniform3ui(
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
): void {
  fn_glUniform3ui.call(
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glUniform4ui = {
  parameters: ["i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUniform4ui!: Deno.UnsafeFnPointer<typeof def_glUniform4ui>;

export function Uniform4ui(
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
  v3: GLuint,
): void {
  fn_glUniform4ui.call(
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glUniform1uiv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1uiv!: Deno.UnsafeFnPointer<typeof def_glUniform1uiv>;

export function Uniform1uiv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1uiv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2uiv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2uiv!: Deno.UnsafeFnPointer<typeof def_glUniform2uiv>;

export function Uniform2uiv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2uiv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3uiv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3uiv!: Deno.UnsafeFnPointer<typeof def_glUniform3uiv>;

export function Uniform3uiv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3uiv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4uiv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4uiv!: Deno.UnsafeFnPointer<typeof def_glUniform4uiv>;

export function Uniform4uiv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4uiv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glClearBufferiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferiv!: Deno.UnsafeFnPointer<typeof def_glClearBufferiv>;

export function ClearBufferiv(
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearBufferiv.call(
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearBufferuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferuiv!: Deno.UnsafeFnPointer<typeof def_glClearBufferuiv>;

export function ClearBufferuiv(
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearBufferuiv.call(
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearBufferfv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferfv!: Deno.UnsafeFnPointer<typeof def_glClearBufferfv>;

export function ClearBufferfv(
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearBufferfv.call(
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearBufferfi = {
  parameters: ["u32", "i32", "f32", "i32"],
  result: "void",
} as const;

let fn_glClearBufferfi!: Deno.UnsafeFnPointer<typeof def_glClearBufferfi>;

export function ClearBufferfi(
  buffer: GLenum,
  drawbuffer: GLint,
  depth: GLfloat,
  stencil: GLint,
): void {
  fn_glClearBufferfi.call(
    buffer,
    drawbuffer,
    depth,
    stencil,
  );
}

export const def_glGetStringi = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glGetStringi!: Deno.UnsafeFnPointer<typeof def_glGetStringi>;

export function GetStringi(
  name: GLenum,
  index: GLuint,
): Buffer {
  return fn_glGetStringi.call(
    name,
    index,
  );
}

export const def_glCopyBufferSubData = {
  parameters: ["u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glCopyBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glCopyBufferSubData
>;

export function CopyBufferSubData(
  readTarget: GLenum,
  writeTarget: GLenum,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glCopyBufferSubData.call(
    readTarget,
    writeTarget,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    size,
  );
}

export const def_glGetUniformIndices = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformIndices!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformIndices
>;

export function GetUniformIndices(
  program: GLuint,
  uniformCount: GLsizei,
  uniformNames: Buffer,
  uniformIndices: Buffer,
): void {
  fn_glGetUniformIndices.call(
    program,
    uniformCount,
    bufferToFFI(uniformNames),
    bufferToFFI(uniformIndices),
  );
}

export const def_glGetActiveUniformsiv = {
  parameters: ["u32", "i32", "buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformsiv!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformsiv
>;

export function GetActiveUniformsiv(
  program: GLuint,
  uniformCount: GLsizei,
  uniformIndices: Buffer,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveUniformsiv.call(
    program,
    uniformCount,
    bufferToFFI(uniformIndices),
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetUniformBlockIndex = {
  parameters: ["u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetUniformBlockIndex!: Deno.UnsafeFnPointer<
  typeof def_glGetUniformBlockIndex
>;

export function GetUniformBlockIndex(
  program: GLuint,
  uniformBlockName: Buffer,
): GLuint {
  return fn_glGetUniformBlockIndex.call(
    program,
    bufferToFFI(uniformBlockName),
  );
}

export const def_glGetActiveUniformBlockiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformBlockiv!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformBlockiv
>;

export function GetActiveUniformBlockiv(
  program: GLuint,
  uniformBlockIndex: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveUniformBlockiv.call(
    program,
    uniformBlockIndex,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetActiveUniformBlockName = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformBlockName!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveUniformBlockName
>;

export function GetActiveUniformBlockName(
  program: GLuint,
  uniformBlockIndex: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  uniformBlockName: Buffer,
): void {
  fn_glGetActiveUniformBlockName.call(
    program,
    uniformBlockIndex,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(uniformBlockName),
  );
}

export const def_glUniformBlockBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUniformBlockBinding!: Deno.UnsafeFnPointer<
  typeof def_glUniformBlockBinding
>;

export function UniformBlockBinding(
  program: GLuint,
  uniformBlockIndex: GLuint,
  uniformBlockBinding: GLuint,
): void {
  fn_glUniformBlockBinding.call(
    program,
    uniformBlockIndex,
    uniformBlockBinding,
  );
}

export const def_glDrawArraysInstanced = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArraysInstanced!: Deno.UnsafeFnPointer<
  typeof def_glDrawArraysInstanced
>;

export function DrawArraysInstanced(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
  instancecount: GLsizei,
): void {
  fn_glDrawArraysInstanced.call(
    mode,
    first,
    count,
    instancecount,
  );
}

export const def_glDrawElementsInstanced = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsInstanced!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsInstanced
>;

export function DrawElementsInstanced(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  instancecount: GLsizei,
): void {
  fn_glDrawElementsInstanced.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    instancecount,
  );
}

export const def_glFenceSync = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glFenceSync!: Deno.UnsafeFnPointer<typeof def_glFenceSync>;

export function FenceSync(
  condition: GLenum,
  flags: GLbitfield,
): GLsync {
  return fn_glFenceSync.call(
    condition,
    flags,
  );
}

export const def_glIsSync = {
  parameters: ["buffer"],
  result: "u8",
} as const;

let fn_glIsSync!: Deno.UnsafeFnPointer<typeof def_glIsSync>;

export function IsSync(
  sync: GLsync,
): GLboolean {
  return fn_glIsSync.call(
    bufferToFFI(sync),
  );
}

export const def_glDeleteSync = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDeleteSync!: Deno.UnsafeFnPointer<typeof def_glDeleteSync>;

export function DeleteSync(
  sync: GLsync,
): void {
  fn_glDeleteSync.call(
    bufferToFFI(sync),
  );
}

export const def_glClientWaitSync = {
  parameters: ["buffer", "u32", "u64"],
  result: "u32",
} as const;

let fn_glClientWaitSync!: Deno.UnsafeFnPointer<typeof def_glClientWaitSync>;

export function ClientWaitSync(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): GLenum {
  return fn_glClientWaitSync.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glWaitSync = {
  parameters: ["buffer", "u32", "u64"],
  result: "void",
} as const;

let fn_glWaitSync!: Deno.UnsafeFnPointer<typeof def_glWaitSync>;

export function WaitSync(
  sync: GLsync,
  flags: GLbitfield,
  timeout: GLuint64,
): void {
  fn_glWaitSync.call(
    bufferToFFI(sync),
    flags,
    timeout,
  );
}

export const def_glGetInteger64v = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInteger64v!: Deno.UnsafeFnPointer<typeof def_glGetInteger64v>;

export function GetInteger64v(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetInteger64v.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetSynciv = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetSynciv!: Deno.UnsafeFnPointer<typeof def_glGetSynciv>;

export function GetSynciv(
  sync: GLsync,
  pname: GLenum,
  count: GLsizei,
  length: Buffer,
  values: Buffer,
): void {
  fn_glGetSynciv.call(
    bufferToFFI(sync),
    pname,
    count,
    bufferToFFI(length),
    bufferToFFI(values),
  );
}

export const def_glGetInteger64i_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetInteger64i_v!: Deno.UnsafeFnPointer<typeof def_glGetInteger64i_v>;

export function GetInteger64i_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetInteger64i_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetBufferParameteri64v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferParameteri64v!: Deno.UnsafeFnPointer<
  typeof def_glGetBufferParameteri64v
>;

export function GetBufferParameteri64v(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferParameteri64v.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGenSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenSamplers!: Deno.UnsafeFnPointer<typeof def_glGenSamplers>;

export function GenSamplers(
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glGenSamplers.call(
    count,
    bufferToFFI(samplers),
  );
}

export const def_glDeleteSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteSamplers!: Deno.UnsafeFnPointer<typeof def_glDeleteSamplers>;

export function DeleteSamplers(
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glDeleteSamplers.call(
    count,
    bufferToFFI(samplers),
  );
}

export const def_glIsSampler = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsSampler!: Deno.UnsafeFnPointer<typeof def_glIsSampler>;

export function IsSampler(
  sampler: GLuint,
): GLboolean {
  return fn_glIsSampler.call(
    sampler,
  );
}

export const def_glBindSampler = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindSampler!: Deno.UnsafeFnPointer<typeof def_glBindSampler>;

export function BindSampler(
  unit: GLuint,
  sampler: GLuint,
): void {
  fn_glBindSampler.call(
    unit,
    sampler,
  );
}

export const def_glSamplerParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glSamplerParameteri!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameteri
>;

export function SamplerParameteri(
  sampler: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glSamplerParameteri.call(
    sampler,
    pname,
    param,
  );
}

export const def_glSamplerParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameteriv
>;

export function SamplerParameteriv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameteriv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glSamplerParameterf!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameterf
>;

export function SamplerParameterf(
  sampler: GLuint,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glSamplerParameterf.call(
    sampler,
    pname,
    param,
  );
}

export const def_glSamplerParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameterfv
>;

export function SamplerParameterfv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterfv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetSamplerParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetSamplerParameteriv
>;

export function GetSamplerParameteriv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameteriv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glGetSamplerParameterfv
>;

export function GetSamplerParameterfv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterfv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVertexAttribDivisor = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribDivisor!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribDivisor
>;

export function VertexAttribDivisor(
  index: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexAttribDivisor.call(
    index,
    divisor,
  );
}

export const def_glBindTransformFeedback = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glBindTransformFeedback
>;

export function BindTransformFeedback(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBindTransformFeedback.call(
    target,
    id,
  );
}

export const def_glDeleteTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteTransformFeedbacks!: Deno.UnsafeFnPointer<
  typeof def_glDeleteTransformFeedbacks
>;

export function DeleteTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glGenTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenTransformFeedbacks!: Deno.UnsafeFnPointer<
  typeof def_glGenTransformFeedbacks
>;

export function GenTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsTransformFeedback = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glIsTransformFeedback
>;

export function IsTransformFeedback(
  id: GLuint,
): GLboolean {
  return fn_glIsTransformFeedback.call(
    id,
  );
}

export const def_glPauseTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glPauseTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glPauseTransformFeedback
>;

export function PauseTransformFeedback(): void {
  fn_glPauseTransformFeedback.call();
}

export const def_glResumeTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glResumeTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glResumeTransformFeedback
>;

export function ResumeTransformFeedback(): void {
  fn_glResumeTransformFeedback.call();
}

export const def_glGetProgramBinary = {
  parameters: ["u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramBinary!: Deno.UnsafeFnPointer<typeof def_glGetProgramBinary>;

export function GetProgramBinary(
  program: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  binaryFormat: Buffer,
  binary: Buffer,
): void {
  fn_glGetProgramBinary.call(
    program,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(binaryFormat),
    bufferToFFI(binary),
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

export const def_glProgramParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glProgramParameteri!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameteri
>;

export function ProgramParameteri(
  program: GLuint,
  pname: GLenum,
  value: GLint,
): void {
  fn_glProgramParameteri.call(
    program,
    pname,
    value,
  );
}

export const def_glInvalidateFramebuffer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInvalidateFramebuffer!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateFramebuffer
>;

export function InvalidateFramebuffer(
  target: GLenum,
  numAttachments: GLsizei,
  attachments: Buffer,
): void {
  fn_glInvalidateFramebuffer.call(
    target,
    numAttachments,
    bufferToFFI(attachments),
  );
}

export const def_glInvalidateSubFramebuffer = {
  parameters: ["u32", "i32", "buffer", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateSubFramebuffer!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateSubFramebuffer
>;

export function InvalidateSubFramebuffer(
  target: GLenum,
  numAttachments: GLsizei,
  attachments: Buffer,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glInvalidateSubFramebuffer.call(
    target,
    numAttachments,
    bufferToFFI(attachments),
    x,
    y,
    width,
    height,
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

export const def_glTexStorage3D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage3D!: Deno.UnsafeFnPointer<typeof def_glTexStorage3D>;

export function TexStorage3D(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTexStorage3D.call(
    target,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

export const def_glGetInternalformativ = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetInternalformativ!: Deno.UnsafeFnPointer<
  typeof def_glGetInternalformativ
>;

export function GetInternalformativ(
  target: GLenum,
  internalformat: GLenum,
  pname: GLenum,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glGetInternalformativ.call(
    target,
    internalformat,
    pname,
    count,
    bufferToFFI(params),
  );
}

export const def_glDispatchCompute = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glDispatchCompute!: Deno.UnsafeFnPointer<typeof def_glDispatchCompute>;

export function DispatchCompute(
  num_groups_x: GLuint,
  num_groups_y: GLuint,
  num_groups_z: GLuint,
): void {
  fn_glDispatchCompute.call(
    num_groups_x,
    num_groups_y,
    num_groups_z,
  );
}

export const def_glDispatchComputeIndirect = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDispatchComputeIndirect!: Deno.UnsafeFnPointer<
  typeof def_glDispatchComputeIndirect
>;

export function DispatchComputeIndirect(
  indirect: GLintptr,
): void {
  fn_glDispatchComputeIndirect.call(
    bufferToFFI(indirect),
  );
}

export const def_glDrawArraysIndirect = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawArraysIndirect!: Deno.UnsafeFnPointer<
  typeof def_glDrawArraysIndirect
>;

export function DrawArraysIndirect(
  mode: GLenum,
  indirect: Buffer,
): void {
  fn_glDrawArraysIndirect.call(
    mode,
    bufferToFFI(indirect),
  );
}

export const def_glDrawElementsIndirect = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawElementsIndirect!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsIndirect
>;

export function DrawElementsIndirect(
  mode: GLenum,
  type: GLenum,
  indirect: Buffer,
): void {
  fn_glDrawElementsIndirect.call(
    mode,
    type,
    bufferToFFI(indirect),
  );
}

export const def_glFramebufferParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferParameteri!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferParameteri
>;

export function FramebufferParameteri(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glFramebufferParameteri.call(
    target,
    pname,
    param,
  );
}

export const def_glGetFramebufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetFramebufferParameteriv
>;

export function GetFramebufferParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramInterfaceiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramInterfaceiv!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramInterfaceiv
>;

export function GetProgramInterfaceiv(
  program: GLuint,
  programInterface: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramInterfaceiv.call(
    program,
    programInterface,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramResourceIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetProgramResourceIndex!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramResourceIndex
>;

export function GetProgramResourceIndex(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLuint {
  return fn_glGetProgramResourceIndex.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramResourceName!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramResourceName
>;

export function GetProgramResourceName(
  program: GLuint,
  programInterface: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetProgramResourceName.call(
    program,
    programInterface,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceiv = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramResourceiv!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramResourceiv
>;

export function GetProgramResourceiv(
  program: GLuint,
  programInterface: GLenum,
  index: GLuint,
  propCount: GLsizei,
  props: Buffer,
  count: GLsizei,
  length: Buffer,
  params: Buffer,
): void {
  fn_glGetProgramResourceiv.call(
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

export const def_glGetProgramResourceLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetProgramResourceLocation!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramResourceLocation
>;

export function GetProgramResourceLocation(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetProgramResourceLocation.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glUseProgramStages = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glUseProgramStages!: Deno.UnsafeFnPointer<typeof def_glUseProgramStages>;

export function UseProgramStages(
  pipeline: GLuint,
  stages: GLbitfield,
  program: GLuint,
): void {
  fn_glUseProgramStages.call(
    pipeline,
    stages,
    program,
  );
}

export const def_glActiveShaderProgram = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glActiveShaderProgram!: Deno.UnsafeFnPointer<
  typeof def_glActiveShaderProgram
>;

export function ActiveShaderProgram(
  pipeline: GLuint,
  program: GLuint,
): void {
  fn_glActiveShaderProgram.call(
    pipeline,
    program,
  );
}

export const def_glCreateShaderProgramv = {
  parameters: ["u32", "i32", "buffer"],
  result: "u32",
} as const;

let fn_glCreateShaderProgramv!: Deno.UnsafeFnPointer<
  typeof def_glCreateShaderProgramv
>;

export function CreateShaderProgramv(
  type: GLenum,
  count: GLsizei,
  strings: Buffer,
): GLuint {
  return fn_glCreateShaderProgramv.call(
    type,
    count,
    bufferToFFI(strings),
  );
}

export const def_glBindProgramPipeline = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindProgramPipeline!: Deno.UnsafeFnPointer<
  typeof def_glBindProgramPipeline
>;

export function BindProgramPipeline(
  pipeline: GLuint,
): void {
  fn_glBindProgramPipeline.call(
    pipeline,
  );
}

export const def_glDeleteProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramPipelines!: Deno.UnsafeFnPointer<
  typeof def_glDeleteProgramPipelines
>;

export function DeleteProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glDeleteProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glGenProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramPipelines!: Deno.UnsafeFnPointer<
  typeof def_glGenProgramPipelines
>;

export function GenProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glGenProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glIsProgramPipeline = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramPipeline!: Deno.UnsafeFnPointer<
  typeof def_glIsProgramPipeline
>;

export function IsProgramPipeline(
  pipeline: GLuint,
): GLboolean {
  return fn_glIsProgramPipeline.call(
    pipeline,
  );
}

export const def_glGetProgramPipelineiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineiv!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramPipelineiv
>;

export function GetProgramPipelineiv(
  pipeline: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramPipelineiv.call(
    pipeline,
    pname,
    bufferToFFI(params),
  );
}

export const def_glProgramUniform1i = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform1i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1i>;

export function ProgramUniform1i(
  program: GLuint,
  location: GLint,
  v0: GLint,
): void {
  fn_glProgramUniform1i.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2i = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform2i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2i>;

export function ProgramUniform2i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glProgramUniform2i.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3i = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform3i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3i>;

export function ProgramUniform3i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glProgramUniform3i.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4i = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform4i!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4i>;

export function ProgramUniform4i(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glProgramUniform4i.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1ui = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform1ui!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1ui
>;

export function ProgramUniform1ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
): void {
  fn_glProgramUniform1ui.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2ui = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform2ui!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2ui
>;

export function ProgramUniform2ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
): void {
  fn_glProgramUniform2ui.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform3ui!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3ui
>;

export function ProgramUniform3ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
): void {
  fn_glProgramUniform3ui.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform4ui!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4ui
>;

export function ProgramUniform4ui(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
  v3: GLuint,
): void {
  fn_glProgramUniform4ui.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1f = {
  parameters: ["u32", "i32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform1f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1f>;

export function ProgramUniform1f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
): void {
  fn_glProgramUniform1f.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2f = {
  parameters: ["u32", "i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform2f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2f>;

export function ProgramUniform2f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glProgramUniform2f.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3f = {
  parameters: ["u32", "i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform3f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3f>;

export function ProgramUniform3f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glProgramUniform3f.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4f = {
  parameters: ["u32", "i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform4f!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4f>;

export function ProgramUniform4f(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glProgramUniform4f.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1iv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1iv
>;

export function ProgramUniform1iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2iv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2iv
>;

export function ProgramUniform2iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3iv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3iv
>;

export function ProgramUniform3iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4iv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4iv
>;

export function ProgramUniform4iv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4iv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1uiv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1uiv
>;

export function ProgramUniform1uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2uiv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2uiv
>;

export function ProgramUniform2uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3uiv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3uiv
>;

export function ProgramUniform3uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4uiv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4uiv
>;

export function ProgramUniform4uiv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4uiv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform1fv
>;

export function ProgramUniform1fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform2fv
>;

export function ProgramUniform2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform3fv
>;

export function ProgramUniform3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniform4fv
>;

export function ProgramUniform4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4fv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2fv
>;

export function ProgramUniformMatrix2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3fv
>;

export function ProgramUniformMatrix3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4fv
>;

export function ProgramUniformMatrix4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2x3fv
>;

export function ProgramUniformMatrix2x3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3x2fv
>;

export function ProgramUniformMatrix3x2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix2x4fv
>;

export function ProgramUniformMatrix2x4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4x2fv
>;

export function ProgramUniformMatrix4x2fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix3x4fv
>;

export function ProgramUniformMatrix3x4fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3fv!: Deno.UnsafeFnPointer<
  typeof def_glProgramUniformMatrix4x3fv
>;

export function ProgramUniformMatrix4x3fv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3fv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glValidateProgramPipeline = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glValidateProgramPipeline!: Deno.UnsafeFnPointer<
  typeof def_glValidateProgramPipeline
>;

export function ValidateProgramPipeline(
  pipeline: GLuint,
): void {
  fn_glValidateProgramPipeline.call(
    pipeline,
  );
}

export const def_glGetProgramPipelineInfoLog = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramPipelineInfoLog!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramPipelineInfoLog
>;

export function GetProgramPipelineInfoLog(
  pipeline: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  infoLog: Buffer,
): void {
  fn_glGetProgramPipelineInfoLog.call(
    pipeline,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(infoLog),
  );
}

export const def_glBindImageTexture = {
  parameters: ["u32", "u32", "i32", "u8", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindImageTexture!: Deno.UnsafeFnPointer<typeof def_glBindImageTexture>;

export function BindImageTexture(
  unit: GLuint,
  texture: GLuint,
  level: GLint,
  layered: GLboolean,
  layer: GLint,
  access: GLenum,
  format: GLenum,
): void {
  fn_glBindImageTexture.call(
    unit,
    texture,
    level,
    layered,
    layer,
    access,
    format,
  );
}

export const def_glGetBooleani_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBooleani_v!: Deno.UnsafeFnPointer<typeof def_glGetBooleani_v>;

export function GetBooleani_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetBooleani_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glMemoryBarrier = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMemoryBarrier!: Deno.UnsafeFnPointer<typeof def_glMemoryBarrier>;

export function MemoryBarrier(
  barriers: GLbitfield,
): void {
  fn_glMemoryBarrier.call(
    barriers,
  );
}

export const def_glMemoryBarrierByRegion = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMemoryBarrierByRegion!: Deno.UnsafeFnPointer<
  typeof def_glMemoryBarrierByRegion
>;

export function MemoryBarrierByRegion(
  barriers: GLbitfield,
): void {
  fn_glMemoryBarrierByRegion.call(
    barriers,
  );
}

export const def_glTexStorage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexStorage2DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTexStorage2DMultisample
>;

export function TexStorage2DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexStorage2DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glGetMultisamplefv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultisamplefv!: Deno.UnsafeFnPointer<typeof def_glGetMultisamplefv>;

export function GetMultisamplefv(
  pname: GLenum,
  index: GLuint,
  val: Buffer,
): void {
  fn_glGetMultisamplefv.call(
    pname,
    index,
    bufferToFFI(val),
  );
}

export const def_glSampleMaski = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSampleMaski!: Deno.UnsafeFnPointer<typeof def_glSampleMaski>;

export function SampleMaski(
  maskNumber: GLuint,
  mask: GLbitfield,
): void {
  fn_glSampleMaski.call(
    maskNumber,
    mask,
  );
}

export const def_glGetTexLevelParameteriv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexLevelParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexLevelParameteriv
>;

export function GetTexLevelParameteriv(
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexLevelParameteriv.call(
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexLevelParameterfv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexLevelParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexLevelParameterfv
>;

export function GetTexLevelParameterfv(
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexLevelParameterfv.call(
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glBindVertexBuffer = {
  parameters: ["u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glBindVertexBuffer!: Deno.UnsafeFnPointer<typeof def_glBindVertexBuffer>;

export function BindVertexBuffer(
  bindingindex: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  stride: GLsizei,
): void {
  fn_glBindVertexBuffer.call(
    bindingindex,
    buffer,
    bufferToFFI(offset),
    stride,
  );
}

export const def_glVertexAttribFormat = {
  parameters: ["u32", "i32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribFormat!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribFormat
>;

export function VertexAttribFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribFormat.call(
    attribindex,
    size,
    type,
    normalized,
    relativeoffset,
  );
}

export const def_glVertexAttribIFormat = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribIFormat!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribIFormat
>;

export function VertexAttribIFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribIFormat.call(
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexAttribBinding = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribBinding!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribBinding
>;

export function VertexAttribBinding(
  attribindex: GLuint,
  bindingindex: GLuint,
): void {
  fn_glVertexAttribBinding.call(
    attribindex,
    bindingindex,
  );
}

export const def_glVertexBindingDivisor = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexBindingDivisor!: Deno.UnsafeFnPointer<
  typeof def_glVertexBindingDivisor
>;

export function VertexBindingDivisor(
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexBindingDivisor.call(
    bindingindex,
    divisor,
  );
}

export const def_glBlendBarrier = {
  parameters: [],
  result: "void",
} as const;

let fn_glBlendBarrier!: Deno.UnsafeFnPointer<typeof def_glBlendBarrier>;

export function BlendBarrier(): void {
  fn_glBlendBarrier.call();
}

export const def_glCopyImageSubData = {
  parameters: [
    "u32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
  ],
  result: "void",
} as const;

let fn_glCopyImageSubData!: Deno.UnsafeFnPointer<typeof def_glCopyImageSubData>;

export function CopyImageSubData(
  srcName: GLuint,
  srcTarget: GLenum,
  srcLevel: GLint,
  srcX: GLint,
  srcY: GLint,
  srcZ: GLint,
  dstName: GLuint,
  dstTarget: GLenum,
  dstLevel: GLint,
  dstX: GLint,
  dstY: GLint,
  dstZ: GLint,
  srcWidth: GLsizei,
  srcHeight: GLsizei,
  srcDepth: GLsizei,
): void {
  fn_glCopyImageSubData.call(
    srcName,
    srcTarget,
    srcLevel,
    srcX,
    srcY,
    srcZ,
    dstName,
    dstTarget,
    dstLevel,
    dstX,
    dstY,
    dstZ,
    srcWidth,
    srcHeight,
    srcDepth,
  );
}

export const def_glDebugMessageControl = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageControl!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageControl
>;

export function DebugMessageControl(
  source: GLenum,
  type: GLenum,
  severity: GLenum,
  count: GLsizei,
  ids: Buffer,
  enabled: GLboolean,
): void {
  fn_glDebugMessageControl.call(
    source,
    type,
    severity,
    count,
    bufferToFFI(ids),
    enabled,
  );
}

export const def_glDebugMessageInsert = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageInsert!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageInsert
>;

export function DebugMessageInsert(
  source: GLenum,
  type: GLenum,
  id: GLuint,
  severity: GLenum,
  length: GLsizei,
  buf: Buffer,
): void {
  fn_glDebugMessageInsert.call(
    source,
    type,
    id,
    severity,
    length,
    bufferToFFI(buf),
  );
}

export const def_glDebugMessageCallback = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageCallback!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageCallback
>;

export function DebugMessageCallback(
  callback: GLDEBUGPROC,
  userParam: Buffer,
): void {
  fn_glDebugMessageCallback.call(
    bufferToFFI(callback),
    bufferToFFI(userParam),
  );
}

export const def_glGetDebugMessageLog = {
  parameters: [
    "u32",
    "i32",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
  ],
  result: "u32",
} as const;

let fn_glGetDebugMessageLog!: Deno.UnsafeFnPointer<
  typeof def_glGetDebugMessageLog
>;

export function GetDebugMessageLog(
  count: GLuint,
  bufSize: GLsizei,
  sources: Buffer,
  types: Buffer,
  ids: Buffer,
  severities: Buffer,
  lengths: Buffer,
  messageLog: Buffer,
): GLuint {
  return fn_glGetDebugMessageLog.call(
    count,
    bufSize,
    bufferToFFI(sources),
    bufferToFFI(types),
    bufferToFFI(ids),
    bufferToFFI(severities),
    bufferToFFI(lengths),
    bufferToFFI(messageLog),
  );
}

export const def_glPushDebugGroup = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPushDebugGroup!: Deno.UnsafeFnPointer<typeof def_glPushDebugGroup>;

export function PushDebugGroup(
  source: GLenum,
  id: GLuint,
  length: GLsizei,
  message: Buffer,
): void {
  fn_glPushDebugGroup.call(
    source,
    id,
    length,
    bufferToFFI(message),
  );
}

export const def_glPopDebugGroup = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopDebugGroup!: Deno.UnsafeFnPointer<typeof def_glPopDebugGroup>;

export function PopDebugGroup(): void {
  fn_glPopDebugGroup.call();
}

export const def_glObjectLabel = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectLabel!: Deno.UnsafeFnPointer<typeof def_glObjectLabel>;

export function ObjectLabel(
  identifier: GLenum,
  name: GLuint,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectLabel.call(
    identifier,
    name,
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectLabel = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectLabel!: Deno.UnsafeFnPointer<typeof def_glGetObjectLabel>;

export function GetObjectLabel(
  identifier: GLenum,
  name: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectLabel.call(
    identifier,
    name,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

export const def_glObjectPtrLabel = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectPtrLabel!: Deno.UnsafeFnPointer<typeof def_glObjectPtrLabel>;

export function ObjectPtrLabel(
  ptr: Buffer,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectPtrLabel.call(
    bufferToFFI(ptr),
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectPtrLabel = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectPtrLabel!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectPtrLabel
>;

export function GetObjectPtrLabel(
  ptr: Buffer,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectPtrLabel.call(
    bufferToFFI(ptr),
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
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

export const def_glEnablei = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnablei!: Deno.UnsafeFnPointer<typeof def_glEnablei>;

export function Enablei(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnablei.call(
    target,
    index,
  );
}

export const def_glDisablei = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisablei!: Deno.UnsafeFnPointer<typeof def_glDisablei>;

export function Disablei(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisablei.call(
    target,
    index,
  );
}

export const def_glBlendEquationi = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationi!: Deno.UnsafeFnPointer<typeof def_glBlendEquationi>;

export function BlendEquationi(
  buf: GLuint,
  mode: GLenum,
): void {
  fn_glBlendEquationi.call(
    buf,
    mode,
  );
}

export const def_glBlendEquationSeparatei = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendEquationSeparatei!: Deno.UnsafeFnPointer<
  typeof def_glBlendEquationSeparatei
>;

export function BlendEquationSeparatei(
  buf: GLuint,
  modeRGB: GLenum,
  modeAlpha: GLenum,
): void {
  fn_glBlendEquationSeparatei.call(
    buf,
    modeRGB,
    modeAlpha,
  );
}

export const def_glBlendFunci = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFunci!: Deno.UnsafeFnPointer<typeof def_glBlendFunci>;

export function BlendFunci(
  buf: GLuint,
  src: GLenum,
  dst: GLenum,
): void {
  fn_glBlendFunci.call(
    buf,
    src,
    dst,
  );
}

export const def_glBlendFuncSeparatei = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlendFuncSeparatei!: Deno.UnsafeFnPointer<
  typeof def_glBlendFuncSeparatei
>;

export function BlendFuncSeparatei(
  buf: GLuint,
  srcRGB: GLenum,
  dstRGB: GLenum,
  srcAlpha: GLenum,
  dstAlpha: GLenum,
): void {
  fn_glBlendFuncSeparatei.call(
    buf,
    srcRGB,
    dstRGB,
    srcAlpha,
    dstAlpha,
  );
}

export const def_glColorMaski = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColorMaski!: Deno.UnsafeFnPointer<typeof def_glColorMaski>;

export function ColorMaski(
  index: GLuint,
  r: GLboolean,
  g: GLboolean,
  b: GLboolean,
  a: GLboolean,
): void {
  fn_glColorMaski.call(
    index,
    r,
    g,
    b,
    a,
  );
}

export const def_glIsEnabledi = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnabledi!: Deno.UnsafeFnPointer<typeof def_glIsEnabledi>;

export function IsEnabledi(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnabledi.call(
    target,
    index,
  );
}

export const def_glDrawElementsBaseVertex = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsBaseVertex
>;

export function DrawElementsBaseVertex(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  basevertex: GLint,
): void {
  fn_glDrawElementsBaseVertex.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    basevertex,
  );
}

export const def_glDrawRangeElementsBaseVertex = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawRangeElementsBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawRangeElementsBaseVertex
>;

export function DrawRangeElementsBaseVertex(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  basevertex: GLint,
): void {
  fn_glDrawRangeElementsBaseVertex.call(
    mode,
    start,
    end,
    count,
    type,
    bufferToFFI(indices),
    basevertex,
  );
}

export const def_glDrawElementsInstancedBaseVertex = {
  parameters: ["u32", "i32", "u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsInstancedBaseVertex
>;

export function DrawElementsInstancedBaseVertex(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  instancecount: GLsizei,
  basevertex: GLint,
): void {
  fn_glDrawElementsInstancedBaseVertex.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    instancecount,
    basevertex,
  );
}

export const def_glFramebufferTexture = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture
>;

export function FramebufferTexture(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture.call(
    target,
    attachment,
    texture,
    level,
  );
}

export const def_glPrimitiveBoundingBox = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glPrimitiveBoundingBox!: Deno.UnsafeFnPointer<
  typeof def_glPrimitiveBoundingBox
>;

export function PrimitiveBoundingBox(
  minX: GLfloat,
  minY: GLfloat,
  minZ: GLfloat,
  minW: GLfloat,
  maxX: GLfloat,
  maxY: GLfloat,
  maxZ: GLfloat,
  maxW: GLfloat,
): void {
  fn_glPrimitiveBoundingBox.call(
    minX,
    minY,
    minZ,
    minW,
    maxX,
    maxY,
    maxZ,
    maxW,
  );
}

export const def_glGetGraphicsResetStatus = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatus!: Deno.UnsafeFnPointer<
  typeof def_glGetGraphicsResetStatus
>;

export function GetGraphicsResetStatus(): GLenum {
  return fn_glGetGraphicsResetStatus.call();
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

export const def_glGetnUniformuiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformuiv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformuiv>;

export function GetnUniformuiv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformuiv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glMinSampleShading = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glMinSampleShading!: Deno.UnsafeFnPointer<typeof def_glMinSampleShading>;

export function MinSampleShading(
  value: GLfloat,
): void {
  fn_glMinSampleShading.call(
    value,
  );
}

export const def_glPatchParameteri = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPatchParameteri!: Deno.UnsafeFnPointer<typeof def_glPatchParameteri>;

export function PatchParameteri(
  pname: GLenum,
  value: GLint,
): void {
  fn_glPatchParameteri.call(
    pname,
    value,
  );
}

export const def_glTexParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIiv!: Deno.UnsafeFnPointer<typeof def_glTexParameterIiv>;

export function TexParameterIiv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIiv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glTexParameterIuiv>;

export function TexParameterIuiv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIuiv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIiv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterIiv
>;

export function GetTexParameterIiv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIiv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterIuiv
>;

export function GetTexParameterIuiv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIuiv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIiv!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameterIiv
>;

export function SamplerParameterIiv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIiv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIuiv!: Deno.UnsafeFnPointer<
  typeof def_glSamplerParameterIuiv
>;

export function SamplerParameterIuiv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIuiv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIiv!: Deno.UnsafeFnPointer<
  typeof def_glGetSamplerParameterIiv
>;

export function GetSamplerParameterIiv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIiv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetSamplerParameterIuiv
>;

export function GetSamplerParameterIuiv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIuiv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexBuffer = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTexBuffer!: Deno.UnsafeFnPointer<typeof def_glTexBuffer>;

export function TexBuffer(
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glTexBuffer.call(
    target,
    internalformat,
    buffer,
  );
}

export const def_glTexBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTexBufferRange!: Deno.UnsafeFnPointer<typeof def_glTexBufferRange>;

export function TexBufferRange(
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTexBufferRange.call(
    target,
    internalformat,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glTexStorage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexStorage3DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTexStorage3DMultisample
>;

export function TexStorage3DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexStorage3DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    depth,
    fixedsamplelocations,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glActiveTexture = new Deno.UnsafeFnPointer(
    proc("glActiveTexture"),
    def_glActiveTexture,
  );
  fn_glAttachShader = new Deno.UnsafeFnPointer(
    proc("glAttachShader"),
    def_glAttachShader,
  );
  fn_glBindAttribLocation = new Deno.UnsafeFnPointer(
    proc("glBindAttribLocation"),
    def_glBindAttribLocation,
  );
  fn_glBindBuffer = new Deno.UnsafeFnPointer(
    proc("glBindBuffer"),
    def_glBindBuffer,
  );
  fn_glBindFramebuffer = new Deno.UnsafeFnPointer(
    proc("glBindFramebuffer"),
    def_glBindFramebuffer,
  );
  fn_glBindRenderbuffer = new Deno.UnsafeFnPointer(
    proc("glBindRenderbuffer"),
    def_glBindRenderbuffer,
  );
  fn_glBindTexture = new Deno.UnsafeFnPointer(
    proc("glBindTexture"),
    def_glBindTexture,
  );
  fn_glBlendColor = new Deno.UnsafeFnPointer(
    proc("glBlendColor"),
    def_glBlendColor,
  );
  fn_glBlendEquation = new Deno.UnsafeFnPointer(
    proc("glBlendEquation"),
    def_glBlendEquation,
  );
  fn_glBlendEquationSeparate = new Deno.UnsafeFnPointer(
    proc("glBlendEquationSeparate"),
    def_glBlendEquationSeparate,
  );
  fn_glBlendFunc = new Deno.UnsafeFnPointer(
    proc("glBlendFunc"),
    def_glBlendFunc,
  );
  fn_glBlendFuncSeparate = new Deno.UnsafeFnPointer(
    proc("glBlendFuncSeparate"),
    def_glBlendFuncSeparate,
  );
  fn_glBufferData = new Deno.UnsafeFnPointer(
    proc("glBufferData"),
    def_glBufferData,
  );
  fn_glBufferSubData = new Deno.UnsafeFnPointer(
    proc("glBufferSubData"),
    def_glBufferSubData,
  );
  fn_glCheckFramebufferStatus = new Deno.UnsafeFnPointer(
    proc("glCheckFramebufferStatus"),
    def_glCheckFramebufferStatus,
  );
  fn_glClear = new Deno.UnsafeFnPointer(proc("glClear"), def_glClear);
  fn_glClearColor = new Deno.UnsafeFnPointer(
    proc("glClearColor"),
    def_glClearColor,
  );
  fn_glClearDepthf = new Deno.UnsafeFnPointer(
    proc("glClearDepthf"),
    def_glClearDepthf,
  );
  fn_glClearStencil = new Deno.UnsafeFnPointer(
    proc("glClearStencil"),
    def_glClearStencil,
  );
  fn_glColorMask = new Deno.UnsafeFnPointer(
    proc("glColorMask"),
    def_glColorMask,
  );
  fn_glCompileShader = new Deno.UnsafeFnPointer(
    proc("glCompileShader"),
    def_glCompileShader,
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
  fn_glCreateProgram = new Deno.UnsafeFnPointer(
    proc("glCreateProgram"),
    def_glCreateProgram,
  );
  fn_glCreateShader = new Deno.UnsafeFnPointer(
    proc("glCreateShader"),
    def_glCreateShader,
  );
  fn_glCullFace = new Deno.UnsafeFnPointer(proc("glCullFace"), def_glCullFace);
  fn_glDeleteBuffers = new Deno.UnsafeFnPointer(
    proc("glDeleteBuffers"),
    def_glDeleteBuffers,
  );
  fn_glDeleteFramebuffers = new Deno.UnsafeFnPointer(
    proc("glDeleteFramebuffers"),
    def_glDeleteFramebuffers,
  );
  fn_glDeleteProgram = new Deno.UnsafeFnPointer(
    proc("glDeleteProgram"),
    def_glDeleteProgram,
  );
  fn_glDeleteRenderbuffers = new Deno.UnsafeFnPointer(
    proc("glDeleteRenderbuffers"),
    def_glDeleteRenderbuffers,
  );
  fn_glDeleteShader = new Deno.UnsafeFnPointer(
    proc("glDeleteShader"),
    def_glDeleteShader,
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
  fn_glDepthRangef = new Deno.UnsafeFnPointer(
    proc("glDepthRangef"),
    def_glDepthRangef,
  );
  fn_glDetachShader = new Deno.UnsafeFnPointer(
    proc("glDetachShader"),
    def_glDetachShader,
  );
  fn_glDisable = new Deno.UnsafeFnPointer(proc("glDisable"), def_glDisable);
  fn_glDisableVertexAttribArray = new Deno.UnsafeFnPointer(
    proc("glDisableVertexAttribArray"),
    def_glDisableVertexAttribArray,
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
  fn_glEnableVertexAttribArray = new Deno.UnsafeFnPointer(
    proc("glEnableVertexAttribArray"),
    def_glEnableVertexAttribArray,
  );
  fn_glFinish = new Deno.UnsafeFnPointer(proc("glFinish"), def_glFinish);
  fn_glFlush = new Deno.UnsafeFnPointer(proc("glFlush"), def_glFlush);
  fn_glFramebufferRenderbuffer = new Deno.UnsafeFnPointer(
    proc("glFramebufferRenderbuffer"),
    def_glFramebufferRenderbuffer,
  );
  fn_glFramebufferTexture2D = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture2D"),
    def_glFramebufferTexture2D,
  );
  fn_glFrontFace = new Deno.UnsafeFnPointer(
    proc("glFrontFace"),
    def_glFrontFace,
  );
  fn_glGenBuffers = new Deno.UnsafeFnPointer(
    proc("glGenBuffers"),
    def_glGenBuffers,
  );
  fn_glGenerateMipmap = new Deno.UnsafeFnPointer(
    proc("glGenerateMipmap"),
    def_glGenerateMipmap,
  );
  fn_glGenFramebuffers = new Deno.UnsafeFnPointer(
    proc("glGenFramebuffers"),
    def_glGenFramebuffers,
  );
  fn_glGenRenderbuffers = new Deno.UnsafeFnPointer(
    proc("glGenRenderbuffers"),
    def_glGenRenderbuffers,
  );
  fn_glGenTextures = new Deno.UnsafeFnPointer(
    proc("glGenTextures"),
    def_glGenTextures,
  );
  fn_glGetActiveAttrib = new Deno.UnsafeFnPointer(
    proc("glGetActiveAttrib"),
    def_glGetActiveAttrib,
  );
  fn_glGetActiveUniform = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniform"),
    def_glGetActiveUniform,
  );
  fn_glGetAttachedShaders = new Deno.UnsafeFnPointer(
    proc("glGetAttachedShaders"),
    def_glGetAttachedShaders,
  );
  fn_glGetAttribLocation = new Deno.UnsafeFnPointer(
    proc("glGetAttribLocation"),
    def_glGetAttribLocation,
  );
  fn_glGetBooleanv = new Deno.UnsafeFnPointer(
    proc("glGetBooleanv"),
    def_glGetBooleanv,
  );
  fn_glGetBufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetBufferParameteriv"),
    def_glGetBufferParameteriv,
  );
  fn_glGetError = new Deno.UnsafeFnPointer(proc("glGetError"), def_glGetError);
  fn_glGetFloatv = new Deno.UnsafeFnPointer(
    proc("glGetFloatv"),
    def_glGetFloatv,
  );
  fn_glGetFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetFramebufferAttachmentParameteriv"),
    def_glGetFramebufferAttachmentParameteriv,
  );
  fn_glGetIntegerv = new Deno.UnsafeFnPointer(
    proc("glGetIntegerv"),
    def_glGetIntegerv,
  );
  fn_glGetProgramiv = new Deno.UnsafeFnPointer(
    proc("glGetProgramiv"),
    def_glGetProgramiv,
  );
  fn_glGetProgramInfoLog = new Deno.UnsafeFnPointer(
    proc("glGetProgramInfoLog"),
    def_glGetProgramInfoLog,
  );
  fn_glGetRenderbufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetRenderbufferParameteriv"),
    def_glGetRenderbufferParameteriv,
  );
  fn_glGetShaderiv = new Deno.UnsafeFnPointer(
    proc("glGetShaderiv"),
    def_glGetShaderiv,
  );
  fn_glGetShaderInfoLog = new Deno.UnsafeFnPointer(
    proc("glGetShaderInfoLog"),
    def_glGetShaderInfoLog,
  );
  fn_glGetShaderPrecisionFormat = new Deno.UnsafeFnPointer(
    proc("glGetShaderPrecisionFormat"),
    def_glGetShaderPrecisionFormat,
  );
  fn_glGetShaderSource = new Deno.UnsafeFnPointer(
    proc("glGetShaderSource"),
    def_glGetShaderSource,
  );
  fn_glGetString = new Deno.UnsafeFnPointer(
    proc("glGetString"),
    def_glGetString,
  );
  fn_glGetTexParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterfv"),
    def_glGetTexParameterfv,
  );
  fn_glGetTexParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameteriv"),
    def_glGetTexParameteriv,
  );
  fn_glGetUniformfv = new Deno.UnsafeFnPointer(
    proc("glGetUniformfv"),
    def_glGetUniformfv,
  );
  fn_glGetUniformiv = new Deno.UnsafeFnPointer(
    proc("glGetUniformiv"),
    def_glGetUniformiv,
  );
  fn_glGetUniformLocation = new Deno.UnsafeFnPointer(
    proc("glGetUniformLocation"),
    def_glGetUniformLocation,
  );
  fn_glGetVertexAttribfv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribfv"),
    def_glGetVertexAttribfv,
  );
  fn_glGetVertexAttribiv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribiv"),
    def_glGetVertexAttribiv,
  );
  fn_glGetVertexAttribPointerv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribPointerv"),
    def_glGetVertexAttribPointerv,
  );
  fn_glHint = new Deno.UnsafeFnPointer(proc("glHint"), def_glHint);
  fn_glIsBuffer = new Deno.UnsafeFnPointer(proc("glIsBuffer"), def_glIsBuffer);
  fn_glIsEnabled = new Deno.UnsafeFnPointer(
    proc("glIsEnabled"),
    def_glIsEnabled,
  );
  fn_glIsFramebuffer = new Deno.UnsafeFnPointer(
    proc("glIsFramebuffer"),
    def_glIsFramebuffer,
  );
  fn_glIsProgram = new Deno.UnsafeFnPointer(
    proc("glIsProgram"),
    def_glIsProgram,
  );
  fn_glIsRenderbuffer = new Deno.UnsafeFnPointer(
    proc("glIsRenderbuffer"),
    def_glIsRenderbuffer,
  );
  fn_glIsShader = new Deno.UnsafeFnPointer(proc("glIsShader"), def_glIsShader);
  fn_glIsTexture = new Deno.UnsafeFnPointer(
    proc("glIsTexture"),
    def_glIsTexture,
  );
  fn_glLineWidth = new Deno.UnsafeFnPointer(
    proc("glLineWidth"),
    def_glLineWidth,
  );
  fn_glLinkProgram = new Deno.UnsafeFnPointer(
    proc("glLinkProgram"),
    def_glLinkProgram,
  );
  fn_glPixelStorei = new Deno.UnsafeFnPointer(
    proc("glPixelStorei"),
    def_glPixelStorei,
  );
  fn_glPolygonOffset = new Deno.UnsafeFnPointer(
    proc("glPolygonOffset"),
    def_glPolygonOffset,
  );
  fn_glReadPixels = new Deno.UnsafeFnPointer(
    proc("glReadPixels"),
    def_glReadPixels,
  );
  fn_glReleaseShaderCompiler = new Deno.UnsafeFnPointer(
    proc("glReleaseShaderCompiler"),
    def_glReleaseShaderCompiler,
  );
  fn_glRenderbufferStorage = new Deno.UnsafeFnPointer(
    proc("glRenderbufferStorage"),
    def_glRenderbufferStorage,
  );
  fn_glSampleCoverage = new Deno.UnsafeFnPointer(
    proc("glSampleCoverage"),
    def_glSampleCoverage,
  );
  fn_glScissor = new Deno.UnsafeFnPointer(proc("glScissor"), def_glScissor);
  fn_glShaderBinary = new Deno.UnsafeFnPointer(
    proc("glShaderBinary"),
    def_glShaderBinary,
  );
  fn_glShaderSource = new Deno.UnsafeFnPointer(
    proc("glShaderSource"),
    def_glShaderSource,
  );
  fn_glStencilFunc = new Deno.UnsafeFnPointer(
    proc("glStencilFunc"),
    def_glStencilFunc,
  );
  fn_glStencilFuncSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilFuncSeparate"),
    def_glStencilFuncSeparate,
  );
  fn_glStencilMask = new Deno.UnsafeFnPointer(
    proc("glStencilMask"),
    def_glStencilMask,
  );
  fn_glStencilMaskSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilMaskSeparate"),
    def_glStencilMaskSeparate,
  );
  fn_glStencilOp = new Deno.UnsafeFnPointer(
    proc("glStencilOp"),
    def_glStencilOp,
  );
  fn_glStencilOpSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilOpSeparate"),
    def_glStencilOpSeparate,
  );
  fn_glTexImage2D = new Deno.UnsafeFnPointer(
    proc("glTexImage2D"),
    def_glTexImage2D,
  );
  fn_glTexParameterf = new Deno.UnsafeFnPointer(
    proc("glTexParameterf"),
    def_glTexParameterf,
  );
  fn_glTexParameterfv = new Deno.UnsafeFnPointer(
    proc("glTexParameterfv"),
    def_glTexParameterfv,
  );
  fn_glTexParameteri = new Deno.UnsafeFnPointer(
    proc("glTexParameteri"),
    def_glTexParameteri,
  );
  fn_glTexParameteriv = new Deno.UnsafeFnPointer(
    proc("glTexParameteriv"),
    def_glTexParameteriv,
  );
  fn_glTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glTexSubImage2D"),
    def_glTexSubImage2D,
  );
  fn_glUniform1f = new Deno.UnsafeFnPointer(
    proc("glUniform1f"),
    def_glUniform1f,
  );
  fn_glUniform1fv = new Deno.UnsafeFnPointer(
    proc("glUniform1fv"),
    def_glUniform1fv,
  );
  fn_glUniform1i = new Deno.UnsafeFnPointer(
    proc("glUniform1i"),
    def_glUniform1i,
  );
  fn_glUniform1iv = new Deno.UnsafeFnPointer(
    proc("glUniform1iv"),
    def_glUniform1iv,
  );
  fn_glUniform2f = new Deno.UnsafeFnPointer(
    proc("glUniform2f"),
    def_glUniform2f,
  );
  fn_glUniform2fv = new Deno.UnsafeFnPointer(
    proc("glUniform2fv"),
    def_glUniform2fv,
  );
  fn_glUniform2i = new Deno.UnsafeFnPointer(
    proc("glUniform2i"),
    def_glUniform2i,
  );
  fn_glUniform2iv = new Deno.UnsafeFnPointer(
    proc("glUniform2iv"),
    def_glUniform2iv,
  );
  fn_glUniform3f = new Deno.UnsafeFnPointer(
    proc("glUniform3f"),
    def_glUniform3f,
  );
  fn_glUniform3fv = new Deno.UnsafeFnPointer(
    proc("glUniform3fv"),
    def_glUniform3fv,
  );
  fn_glUniform3i = new Deno.UnsafeFnPointer(
    proc("glUniform3i"),
    def_glUniform3i,
  );
  fn_glUniform3iv = new Deno.UnsafeFnPointer(
    proc("glUniform3iv"),
    def_glUniform3iv,
  );
  fn_glUniform4f = new Deno.UnsafeFnPointer(
    proc("glUniform4f"),
    def_glUniform4f,
  );
  fn_glUniform4fv = new Deno.UnsafeFnPointer(
    proc("glUniform4fv"),
    def_glUniform4fv,
  );
  fn_glUniform4i = new Deno.UnsafeFnPointer(
    proc("glUniform4i"),
    def_glUniform4i,
  );
  fn_glUniform4iv = new Deno.UnsafeFnPointer(
    proc("glUniform4iv"),
    def_glUniform4iv,
  );
  fn_glUniformMatrix2fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix2fv"),
    def_glUniformMatrix2fv,
  );
  fn_glUniformMatrix3fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix3fv"),
    def_glUniformMatrix3fv,
  );
  fn_glUniformMatrix4fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix4fv"),
    def_glUniformMatrix4fv,
  );
  fn_glUseProgram = new Deno.UnsafeFnPointer(
    proc("glUseProgram"),
    def_glUseProgram,
  );
  fn_glValidateProgram = new Deno.UnsafeFnPointer(
    proc("glValidateProgram"),
    def_glValidateProgram,
  );
  fn_glVertexAttrib1f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1f"),
    def_glVertexAttrib1f,
  );
  fn_glVertexAttrib1fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fv"),
    def_glVertexAttrib1fv,
  );
  fn_glVertexAttrib2f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2f"),
    def_glVertexAttrib2f,
  );
  fn_glVertexAttrib2fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fv"),
    def_glVertexAttrib2fv,
  );
  fn_glVertexAttrib3f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3f"),
    def_glVertexAttrib3f,
  );
  fn_glVertexAttrib3fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fv"),
    def_glVertexAttrib3fv,
  );
  fn_glVertexAttrib4f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4f"),
    def_glVertexAttrib4f,
  );
  fn_glVertexAttrib4fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fv"),
    def_glVertexAttrib4fv,
  );
  fn_glVertexAttribPointer = new Deno.UnsafeFnPointer(
    proc("glVertexAttribPointer"),
    def_glVertexAttribPointer,
  );
  fn_glViewport = new Deno.UnsafeFnPointer(proc("glViewport"), def_glViewport);
  fn_glReadBuffer = new Deno.UnsafeFnPointer(
    proc("glReadBuffer"),
    def_glReadBuffer,
  );
  fn_glDrawRangeElements = new Deno.UnsafeFnPointer(
    proc("glDrawRangeElements"),
    def_glDrawRangeElements,
  );
  fn_glTexImage3D = new Deno.UnsafeFnPointer(
    proc("glTexImage3D"),
    def_glTexImage3D,
  );
  fn_glTexSubImage3D = new Deno.UnsafeFnPointer(
    proc("glTexSubImage3D"),
    def_glTexSubImage3D,
  );
  fn_glCopyTexSubImage3D = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage3D"),
    def_glCopyTexSubImage3D,
  );
  fn_glCompressedTexImage3D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage3D"),
    def_glCompressedTexImage3D,
  );
  fn_glCompressedTexSubImage3D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage3D"),
    def_glCompressedTexSubImage3D,
  );
  fn_glGenQueries = new Deno.UnsafeFnPointer(
    proc("glGenQueries"),
    def_glGenQueries,
  );
  fn_glDeleteQueries = new Deno.UnsafeFnPointer(
    proc("glDeleteQueries"),
    def_glDeleteQueries,
  );
  fn_glIsQuery = new Deno.UnsafeFnPointer(proc("glIsQuery"), def_glIsQuery);
  fn_glBeginQuery = new Deno.UnsafeFnPointer(
    proc("glBeginQuery"),
    def_glBeginQuery,
  );
  fn_glEndQuery = new Deno.UnsafeFnPointer(proc("glEndQuery"), def_glEndQuery);
  fn_glGetQueryiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryiv"),
    def_glGetQueryiv,
  );
  fn_glGetQueryObjectuiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryObjectuiv"),
    def_glGetQueryObjectuiv,
  );
  fn_glUnmapBuffer = new Deno.UnsafeFnPointer(
    proc("glUnmapBuffer"),
    def_glUnmapBuffer,
  );
  fn_glGetBufferPointerv = new Deno.UnsafeFnPointer(
    proc("glGetBufferPointerv"),
    def_glGetBufferPointerv,
  );
  fn_glDrawBuffers = new Deno.UnsafeFnPointer(
    proc("glDrawBuffers"),
    def_glDrawBuffers,
  );
  fn_glUniformMatrix2x3fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix2x3fv"),
    def_glUniformMatrix2x3fv,
  );
  fn_glUniformMatrix3x2fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix3x2fv"),
    def_glUniformMatrix3x2fv,
  );
  fn_glUniformMatrix2x4fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix2x4fv"),
    def_glUniformMatrix2x4fv,
  );
  fn_glUniformMatrix4x2fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix4x2fv"),
    def_glUniformMatrix4x2fv,
  );
  fn_glUniformMatrix3x4fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix3x4fv"),
    def_glUniformMatrix3x4fv,
  );
  fn_glUniformMatrix4x3fv = new Deno.UnsafeFnPointer(
    proc("glUniformMatrix4x3fv"),
    def_glUniformMatrix4x3fv,
  );
  fn_glBlitFramebuffer = new Deno.UnsafeFnPointer(
    proc("glBlitFramebuffer"),
    def_glBlitFramebuffer,
  );
  fn_glRenderbufferStorageMultisample = new Deno.UnsafeFnPointer(
    proc("glRenderbufferStorageMultisample"),
    def_glRenderbufferStorageMultisample,
  );
  fn_glFramebufferTextureLayer = new Deno.UnsafeFnPointer(
    proc("glFramebufferTextureLayer"),
    def_glFramebufferTextureLayer,
  );
  fn_glMapBufferRange = new Deno.UnsafeFnPointer(
    proc("glMapBufferRange"),
    def_glMapBufferRange,
  );
  fn_glFlushMappedBufferRange = new Deno.UnsafeFnPointer(
    proc("glFlushMappedBufferRange"),
    def_glFlushMappedBufferRange,
  );
  fn_glBindVertexArray = new Deno.UnsafeFnPointer(
    proc("glBindVertexArray"),
    def_glBindVertexArray,
  );
  fn_glDeleteVertexArrays = new Deno.UnsafeFnPointer(
    proc("glDeleteVertexArrays"),
    def_glDeleteVertexArrays,
  );
  fn_glGenVertexArrays = new Deno.UnsafeFnPointer(
    proc("glGenVertexArrays"),
    def_glGenVertexArrays,
  );
  fn_glIsVertexArray = new Deno.UnsafeFnPointer(
    proc("glIsVertexArray"),
    def_glIsVertexArray,
  );
  fn_glGetIntegeri_v = new Deno.UnsafeFnPointer(
    proc("glGetIntegeri_v"),
    def_glGetIntegeri_v,
  );
  fn_glBeginTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glBeginTransformFeedback"),
    def_glBeginTransformFeedback,
  );
  fn_glEndTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glEndTransformFeedback"),
    def_glEndTransformFeedback,
  );
  fn_glBindBufferRange = new Deno.UnsafeFnPointer(
    proc("glBindBufferRange"),
    def_glBindBufferRange,
  );
  fn_glBindBufferBase = new Deno.UnsafeFnPointer(
    proc("glBindBufferBase"),
    def_glBindBufferBase,
  );
  fn_glTransformFeedbackVaryings = new Deno.UnsafeFnPointer(
    proc("glTransformFeedbackVaryings"),
    def_glTransformFeedbackVaryings,
  );
  fn_glGetTransformFeedbackVarying = new Deno.UnsafeFnPointer(
    proc("glGetTransformFeedbackVarying"),
    def_glGetTransformFeedbackVarying,
  );
  fn_glVertexAttribIPointer = new Deno.UnsafeFnPointer(
    proc("glVertexAttribIPointer"),
    def_glVertexAttribIPointer,
  );
  fn_glGetVertexAttribIiv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribIiv"),
    def_glGetVertexAttribIiv,
  );
  fn_glGetVertexAttribIuiv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribIuiv"),
    def_glGetVertexAttribIuiv,
  );
  fn_glVertexAttribI4i = new Deno.UnsafeFnPointer(
    proc("glVertexAttribI4i"),
    def_glVertexAttribI4i,
  );
  fn_glVertexAttribI4ui = new Deno.UnsafeFnPointer(
    proc("glVertexAttribI4ui"),
    def_glVertexAttribI4ui,
  );
  fn_glVertexAttribI4iv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribI4iv"),
    def_glVertexAttribI4iv,
  );
  fn_glVertexAttribI4uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribI4uiv"),
    def_glVertexAttribI4uiv,
  );
  fn_glGetUniformuiv = new Deno.UnsafeFnPointer(
    proc("glGetUniformuiv"),
    def_glGetUniformuiv,
  );
  fn_glGetFragDataLocation = new Deno.UnsafeFnPointer(
    proc("glGetFragDataLocation"),
    def_glGetFragDataLocation,
  );
  fn_glUniform1ui = new Deno.UnsafeFnPointer(
    proc("glUniform1ui"),
    def_glUniform1ui,
  );
  fn_glUniform2ui = new Deno.UnsafeFnPointer(
    proc("glUniform2ui"),
    def_glUniform2ui,
  );
  fn_glUniform3ui = new Deno.UnsafeFnPointer(
    proc("glUniform3ui"),
    def_glUniform3ui,
  );
  fn_glUniform4ui = new Deno.UnsafeFnPointer(
    proc("glUniform4ui"),
    def_glUniform4ui,
  );
  fn_glUniform1uiv = new Deno.UnsafeFnPointer(
    proc("glUniform1uiv"),
    def_glUniform1uiv,
  );
  fn_glUniform2uiv = new Deno.UnsafeFnPointer(
    proc("glUniform2uiv"),
    def_glUniform2uiv,
  );
  fn_glUniform3uiv = new Deno.UnsafeFnPointer(
    proc("glUniform3uiv"),
    def_glUniform3uiv,
  );
  fn_glUniform4uiv = new Deno.UnsafeFnPointer(
    proc("glUniform4uiv"),
    def_glUniform4uiv,
  );
  fn_glClearBufferiv = new Deno.UnsafeFnPointer(
    proc("glClearBufferiv"),
    def_glClearBufferiv,
  );
  fn_glClearBufferuiv = new Deno.UnsafeFnPointer(
    proc("glClearBufferuiv"),
    def_glClearBufferuiv,
  );
  fn_glClearBufferfv = new Deno.UnsafeFnPointer(
    proc("glClearBufferfv"),
    def_glClearBufferfv,
  );
  fn_glClearBufferfi = new Deno.UnsafeFnPointer(
    proc("glClearBufferfi"),
    def_glClearBufferfi,
  );
  fn_glGetStringi = new Deno.UnsafeFnPointer(
    proc("glGetStringi"),
    def_glGetStringi,
  );
  fn_glCopyBufferSubData = new Deno.UnsafeFnPointer(
    proc("glCopyBufferSubData"),
    def_glCopyBufferSubData,
  );
  fn_glGetUniformIndices = new Deno.UnsafeFnPointer(
    proc("glGetUniformIndices"),
    def_glGetUniformIndices,
  );
  fn_glGetActiveUniformsiv = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformsiv"),
    def_glGetActiveUniformsiv,
  );
  fn_glGetUniformBlockIndex = new Deno.UnsafeFnPointer(
    proc("glGetUniformBlockIndex"),
    def_glGetUniformBlockIndex,
  );
  fn_glGetActiveUniformBlockiv = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformBlockiv"),
    def_glGetActiveUniformBlockiv,
  );
  fn_glGetActiveUniformBlockName = new Deno.UnsafeFnPointer(
    proc("glGetActiveUniformBlockName"),
    def_glGetActiveUniformBlockName,
  );
  fn_glUniformBlockBinding = new Deno.UnsafeFnPointer(
    proc("glUniformBlockBinding"),
    def_glUniformBlockBinding,
  );
  fn_glDrawArraysInstanced = new Deno.UnsafeFnPointer(
    proc("glDrawArraysInstanced"),
    def_glDrawArraysInstanced,
  );
  fn_glDrawElementsInstanced = new Deno.UnsafeFnPointer(
    proc("glDrawElementsInstanced"),
    def_glDrawElementsInstanced,
  );
  fn_glFenceSync = new Deno.UnsafeFnPointer(
    proc("glFenceSync"),
    def_glFenceSync,
  );
  fn_glIsSync = new Deno.UnsafeFnPointer(proc("glIsSync"), def_glIsSync);
  fn_glDeleteSync = new Deno.UnsafeFnPointer(
    proc("glDeleteSync"),
    def_glDeleteSync,
  );
  fn_glClientWaitSync = new Deno.UnsafeFnPointer(
    proc("glClientWaitSync"),
    def_glClientWaitSync,
  );
  fn_glWaitSync = new Deno.UnsafeFnPointer(proc("glWaitSync"), def_glWaitSync);
  fn_glGetInteger64v = new Deno.UnsafeFnPointer(
    proc("glGetInteger64v"),
    def_glGetInteger64v,
  );
  fn_glGetSynciv = new Deno.UnsafeFnPointer(
    proc("glGetSynciv"),
    def_glGetSynciv,
  );
  fn_glGetInteger64i_v = new Deno.UnsafeFnPointer(
    proc("glGetInteger64i_v"),
    def_glGetInteger64i_v,
  );
  fn_glGetBufferParameteri64v = new Deno.UnsafeFnPointer(
    proc("glGetBufferParameteri64v"),
    def_glGetBufferParameteri64v,
  );
  fn_glGenSamplers = new Deno.UnsafeFnPointer(
    proc("glGenSamplers"),
    def_glGenSamplers,
  );
  fn_glDeleteSamplers = new Deno.UnsafeFnPointer(
    proc("glDeleteSamplers"),
    def_glDeleteSamplers,
  );
  fn_glIsSampler = new Deno.UnsafeFnPointer(
    proc("glIsSampler"),
    def_glIsSampler,
  );
  fn_glBindSampler = new Deno.UnsafeFnPointer(
    proc("glBindSampler"),
    def_glBindSampler,
  );
  fn_glSamplerParameteri = new Deno.UnsafeFnPointer(
    proc("glSamplerParameteri"),
    def_glSamplerParameteri,
  );
  fn_glSamplerParameteriv = new Deno.UnsafeFnPointer(
    proc("glSamplerParameteriv"),
    def_glSamplerParameteriv,
  );
  fn_glSamplerParameterf = new Deno.UnsafeFnPointer(
    proc("glSamplerParameterf"),
    def_glSamplerParameterf,
  );
  fn_glSamplerParameterfv = new Deno.UnsafeFnPointer(
    proc("glSamplerParameterfv"),
    def_glSamplerParameterfv,
  );
  fn_glGetSamplerParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetSamplerParameteriv"),
    def_glGetSamplerParameteriv,
  );
  fn_glGetSamplerParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetSamplerParameterfv"),
    def_glGetSamplerParameterfv,
  );
  fn_glVertexAttribDivisor = new Deno.UnsafeFnPointer(
    proc("glVertexAttribDivisor"),
    def_glVertexAttribDivisor,
  );
  fn_glBindTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glBindTransformFeedback"),
    def_glBindTransformFeedback,
  );
  fn_glDeleteTransformFeedbacks = new Deno.UnsafeFnPointer(
    proc("glDeleteTransformFeedbacks"),
    def_glDeleteTransformFeedbacks,
  );
  fn_glGenTransformFeedbacks = new Deno.UnsafeFnPointer(
    proc("glGenTransformFeedbacks"),
    def_glGenTransformFeedbacks,
  );
  fn_glIsTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glIsTransformFeedback"),
    def_glIsTransformFeedback,
  );
  fn_glPauseTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glPauseTransformFeedback"),
    def_glPauseTransformFeedback,
  );
  fn_glResumeTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glResumeTransformFeedback"),
    def_glResumeTransformFeedback,
  );
  fn_glGetProgramBinary = new Deno.UnsafeFnPointer(
    proc("glGetProgramBinary"),
    def_glGetProgramBinary,
  );
  fn_glProgramBinary = new Deno.UnsafeFnPointer(
    proc("glProgramBinary"),
    def_glProgramBinary,
  );
  fn_glProgramParameteri = new Deno.UnsafeFnPointer(
    proc("glProgramParameteri"),
    def_glProgramParameteri,
  );
  fn_glInvalidateFramebuffer = new Deno.UnsafeFnPointer(
    proc("glInvalidateFramebuffer"),
    def_glInvalidateFramebuffer,
  );
  fn_glInvalidateSubFramebuffer = new Deno.UnsafeFnPointer(
    proc("glInvalidateSubFramebuffer"),
    def_glInvalidateSubFramebuffer,
  );
  fn_glTexStorage2D = new Deno.UnsafeFnPointer(
    proc("glTexStorage2D"),
    def_glTexStorage2D,
  );
  fn_glTexStorage3D = new Deno.UnsafeFnPointer(
    proc("glTexStorage3D"),
    def_glTexStorage3D,
  );
  fn_glGetInternalformativ = new Deno.UnsafeFnPointer(
    proc("glGetInternalformativ"),
    def_glGetInternalformativ,
  );
  fn_glDispatchCompute = new Deno.UnsafeFnPointer(
    proc("glDispatchCompute"),
    def_glDispatchCompute,
  );
  fn_glDispatchComputeIndirect = new Deno.UnsafeFnPointer(
    proc("glDispatchComputeIndirect"),
    def_glDispatchComputeIndirect,
  );
  fn_glDrawArraysIndirect = new Deno.UnsafeFnPointer(
    proc("glDrawArraysIndirect"),
    def_glDrawArraysIndirect,
  );
  fn_glDrawElementsIndirect = new Deno.UnsafeFnPointer(
    proc("glDrawElementsIndirect"),
    def_glDrawElementsIndirect,
  );
  fn_glFramebufferParameteri = new Deno.UnsafeFnPointer(
    proc("glFramebufferParameteri"),
    def_glFramebufferParameteri,
  );
  fn_glGetFramebufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetFramebufferParameteriv"),
    def_glGetFramebufferParameteriv,
  );
  fn_glGetProgramInterfaceiv = new Deno.UnsafeFnPointer(
    proc("glGetProgramInterfaceiv"),
    def_glGetProgramInterfaceiv,
  );
  fn_glGetProgramResourceIndex = new Deno.UnsafeFnPointer(
    proc("glGetProgramResourceIndex"),
    def_glGetProgramResourceIndex,
  );
  fn_glGetProgramResourceName = new Deno.UnsafeFnPointer(
    proc("glGetProgramResourceName"),
    def_glGetProgramResourceName,
  );
  fn_glGetProgramResourceiv = new Deno.UnsafeFnPointer(
    proc("glGetProgramResourceiv"),
    def_glGetProgramResourceiv,
  );
  fn_glGetProgramResourceLocation = new Deno.UnsafeFnPointer(
    proc("glGetProgramResourceLocation"),
    def_glGetProgramResourceLocation,
  );
  fn_glUseProgramStages = new Deno.UnsafeFnPointer(
    proc("glUseProgramStages"),
    def_glUseProgramStages,
  );
  fn_glActiveShaderProgram = new Deno.UnsafeFnPointer(
    proc("glActiveShaderProgram"),
    def_glActiveShaderProgram,
  );
  fn_glCreateShaderProgramv = new Deno.UnsafeFnPointer(
    proc("glCreateShaderProgramv"),
    def_glCreateShaderProgramv,
  );
  fn_glBindProgramPipeline = new Deno.UnsafeFnPointer(
    proc("glBindProgramPipeline"),
    def_glBindProgramPipeline,
  );
  fn_glDeleteProgramPipelines = new Deno.UnsafeFnPointer(
    proc("glDeleteProgramPipelines"),
    def_glDeleteProgramPipelines,
  );
  fn_glGenProgramPipelines = new Deno.UnsafeFnPointer(
    proc("glGenProgramPipelines"),
    def_glGenProgramPipelines,
  );
  fn_glIsProgramPipeline = new Deno.UnsafeFnPointer(
    proc("glIsProgramPipeline"),
    def_glIsProgramPipeline,
  );
  fn_glGetProgramPipelineiv = new Deno.UnsafeFnPointer(
    proc("glGetProgramPipelineiv"),
    def_glGetProgramPipelineiv,
  );
  fn_glProgramUniform1i = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1i"),
    def_glProgramUniform1i,
  );
  fn_glProgramUniform2i = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2i"),
    def_glProgramUniform2i,
  );
  fn_glProgramUniform3i = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3i"),
    def_glProgramUniform3i,
  );
  fn_glProgramUniform4i = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4i"),
    def_glProgramUniform4i,
  );
  fn_glProgramUniform1ui = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1ui"),
    def_glProgramUniform1ui,
  );
  fn_glProgramUniform2ui = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2ui"),
    def_glProgramUniform2ui,
  );
  fn_glProgramUniform3ui = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3ui"),
    def_glProgramUniform3ui,
  );
  fn_glProgramUniform4ui = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4ui"),
    def_glProgramUniform4ui,
  );
  fn_glProgramUniform1f = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1f"),
    def_glProgramUniform1f,
  );
  fn_glProgramUniform2f = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2f"),
    def_glProgramUniform2f,
  );
  fn_glProgramUniform3f = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3f"),
    def_glProgramUniform3f,
  );
  fn_glProgramUniform4f = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4f"),
    def_glProgramUniform4f,
  );
  fn_glProgramUniform1iv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1iv"),
    def_glProgramUniform1iv,
  );
  fn_glProgramUniform2iv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2iv"),
    def_glProgramUniform2iv,
  );
  fn_glProgramUniform3iv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3iv"),
    def_glProgramUniform3iv,
  );
  fn_glProgramUniform4iv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4iv"),
    def_glProgramUniform4iv,
  );
  fn_glProgramUniform1uiv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1uiv"),
    def_glProgramUniform1uiv,
  );
  fn_glProgramUniform2uiv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2uiv"),
    def_glProgramUniform2uiv,
  );
  fn_glProgramUniform3uiv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3uiv"),
    def_glProgramUniform3uiv,
  );
  fn_glProgramUniform4uiv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4uiv"),
    def_glProgramUniform4uiv,
  );
  fn_glProgramUniform1fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform1fv"),
    def_glProgramUniform1fv,
  );
  fn_glProgramUniform2fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform2fv"),
    def_glProgramUniform2fv,
  );
  fn_glProgramUniform3fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform3fv"),
    def_glProgramUniform3fv,
  );
  fn_glProgramUniform4fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniform4fv"),
    def_glProgramUniform4fv,
  );
  fn_glProgramUniformMatrix2fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2fv"),
    def_glProgramUniformMatrix2fv,
  );
  fn_glProgramUniformMatrix3fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3fv"),
    def_glProgramUniformMatrix3fv,
  );
  fn_glProgramUniformMatrix4fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4fv"),
    def_glProgramUniformMatrix4fv,
  );
  fn_glProgramUniformMatrix2x3fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2x3fv"),
    def_glProgramUniformMatrix2x3fv,
  );
  fn_glProgramUniformMatrix3x2fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3x2fv"),
    def_glProgramUniformMatrix3x2fv,
  );
  fn_glProgramUniformMatrix2x4fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix2x4fv"),
    def_glProgramUniformMatrix2x4fv,
  );
  fn_glProgramUniformMatrix4x2fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4x2fv"),
    def_glProgramUniformMatrix4x2fv,
  );
  fn_glProgramUniformMatrix3x4fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix3x4fv"),
    def_glProgramUniformMatrix3x4fv,
  );
  fn_glProgramUniformMatrix4x3fv = new Deno.UnsafeFnPointer(
    proc("glProgramUniformMatrix4x3fv"),
    def_glProgramUniformMatrix4x3fv,
  );
  fn_glValidateProgramPipeline = new Deno.UnsafeFnPointer(
    proc("glValidateProgramPipeline"),
    def_glValidateProgramPipeline,
  );
  fn_glGetProgramPipelineInfoLog = new Deno.UnsafeFnPointer(
    proc("glGetProgramPipelineInfoLog"),
    def_glGetProgramPipelineInfoLog,
  );
  fn_glBindImageTexture = new Deno.UnsafeFnPointer(
    proc("glBindImageTexture"),
    def_glBindImageTexture,
  );
  fn_glGetBooleani_v = new Deno.UnsafeFnPointer(
    proc("glGetBooleani_v"),
    def_glGetBooleani_v,
  );
  fn_glMemoryBarrier = new Deno.UnsafeFnPointer(
    proc("glMemoryBarrier"),
    def_glMemoryBarrier,
  );
  fn_glMemoryBarrierByRegion = new Deno.UnsafeFnPointer(
    proc("glMemoryBarrierByRegion"),
    def_glMemoryBarrierByRegion,
  );
  fn_glTexStorage2DMultisample = new Deno.UnsafeFnPointer(
    proc("glTexStorage2DMultisample"),
    def_glTexStorage2DMultisample,
  );
  fn_glGetMultisamplefv = new Deno.UnsafeFnPointer(
    proc("glGetMultisamplefv"),
    def_glGetMultisamplefv,
  );
  fn_glSampleMaski = new Deno.UnsafeFnPointer(
    proc("glSampleMaski"),
    def_glSampleMaski,
  );
  fn_glGetTexLevelParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTexLevelParameteriv"),
    def_glGetTexLevelParameteriv,
  );
  fn_glGetTexLevelParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTexLevelParameterfv"),
    def_glGetTexLevelParameterfv,
  );
  fn_glBindVertexBuffer = new Deno.UnsafeFnPointer(
    proc("glBindVertexBuffer"),
    def_glBindVertexBuffer,
  );
  fn_glVertexAttribFormat = new Deno.UnsafeFnPointer(
    proc("glVertexAttribFormat"),
    def_glVertexAttribFormat,
  );
  fn_glVertexAttribIFormat = new Deno.UnsafeFnPointer(
    proc("glVertexAttribIFormat"),
    def_glVertexAttribIFormat,
  );
  fn_glVertexAttribBinding = new Deno.UnsafeFnPointer(
    proc("glVertexAttribBinding"),
    def_glVertexAttribBinding,
  );
  fn_glVertexBindingDivisor = new Deno.UnsafeFnPointer(
    proc("glVertexBindingDivisor"),
    def_glVertexBindingDivisor,
  );
  fn_glBlendBarrier = new Deno.UnsafeFnPointer(
    proc("glBlendBarrier"),
    def_glBlendBarrier,
  );
  fn_glCopyImageSubData = new Deno.UnsafeFnPointer(
    proc("glCopyImageSubData"),
    def_glCopyImageSubData,
  );
  fn_glDebugMessageControl = new Deno.UnsafeFnPointer(
    proc("glDebugMessageControl"),
    def_glDebugMessageControl,
  );
  fn_glDebugMessageInsert = new Deno.UnsafeFnPointer(
    proc("glDebugMessageInsert"),
    def_glDebugMessageInsert,
  );
  fn_glDebugMessageCallback = new Deno.UnsafeFnPointer(
    proc("glDebugMessageCallback"),
    def_glDebugMessageCallback,
  );
  fn_glGetDebugMessageLog = new Deno.UnsafeFnPointer(
    proc("glGetDebugMessageLog"),
    def_glGetDebugMessageLog,
  );
  fn_glPushDebugGroup = new Deno.UnsafeFnPointer(
    proc("glPushDebugGroup"),
    def_glPushDebugGroup,
  );
  fn_glPopDebugGroup = new Deno.UnsafeFnPointer(
    proc("glPopDebugGroup"),
    def_glPopDebugGroup,
  );
  fn_glObjectLabel = new Deno.UnsafeFnPointer(
    proc("glObjectLabel"),
    def_glObjectLabel,
  );
  fn_glGetObjectLabel = new Deno.UnsafeFnPointer(
    proc("glGetObjectLabel"),
    def_glGetObjectLabel,
  );
  fn_glObjectPtrLabel = new Deno.UnsafeFnPointer(
    proc("glObjectPtrLabel"),
    def_glObjectPtrLabel,
  );
  fn_glGetObjectPtrLabel = new Deno.UnsafeFnPointer(
    proc("glGetObjectPtrLabel"),
    def_glGetObjectPtrLabel,
  );
  fn_glGetPointerv = new Deno.UnsafeFnPointer(
    proc("glGetPointerv"),
    def_glGetPointerv,
  );
  fn_glEnablei = new Deno.UnsafeFnPointer(proc("glEnablei"), def_glEnablei);
  fn_glDisablei = new Deno.UnsafeFnPointer(proc("glDisablei"), def_glDisablei);
  fn_glBlendEquationi = new Deno.UnsafeFnPointer(
    proc("glBlendEquationi"),
    def_glBlendEquationi,
  );
  fn_glBlendEquationSeparatei = new Deno.UnsafeFnPointer(
    proc("glBlendEquationSeparatei"),
    def_glBlendEquationSeparatei,
  );
  fn_glBlendFunci = new Deno.UnsafeFnPointer(
    proc("glBlendFunci"),
    def_glBlendFunci,
  );
  fn_glBlendFuncSeparatei = new Deno.UnsafeFnPointer(
    proc("glBlendFuncSeparatei"),
    def_glBlendFuncSeparatei,
  );
  fn_glColorMaski = new Deno.UnsafeFnPointer(
    proc("glColorMaski"),
    def_glColorMaski,
  );
  fn_glIsEnabledi = new Deno.UnsafeFnPointer(
    proc("glIsEnabledi"),
    def_glIsEnabledi,
  );
  fn_glDrawElementsBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawElementsBaseVertex"),
    def_glDrawElementsBaseVertex,
  );
  fn_glDrawRangeElementsBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawRangeElementsBaseVertex"),
    def_glDrawRangeElementsBaseVertex,
  );
  fn_glDrawElementsInstancedBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawElementsInstancedBaseVertex"),
    def_glDrawElementsInstancedBaseVertex,
  );
  fn_glFramebufferTexture = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture"),
    def_glFramebufferTexture,
  );
  fn_glPrimitiveBoundingBox = new Deno.UnsafeFnPointer(
    proc("glPrimitiveBoundingBox"),
    def_glPrimitiveBoundingBox,
  );
  fn_glGetGraphicsResetStatus = new Deno.UnsafeFnPointer(
    proc("glGetGraphicsResetStatus"),
    def_glGetGraphicsResetStatus,
  );
  fn_glReadnPixels = new Deno.UnsafeFnPointer(
    proc("glReadnPixels"),
    def_glReadnPixels,
  );
  fn_glGetnUniformfv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformfv"),
    def_glGetnUniformfv,
  );
  fn_glGetnUniformiv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformiv"),
    def_glGetnUniformiv,
  );
  fn_glGetnUniformuiv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformuiv"),
    def_glGetnUniformuiv,
  );
  fn_glMinSampleShading = new Deno.UnsafeFnPointer(
    proc("glMinSampleShading"),
    def_glMinSampleShading,
  );
  fn_glPatchParameteri = new Deno.UnsafeFnPointer(
    proc("glPatchParameteri"),
    def_glPatchParameteri,
  );
  fn_glTexParameterIiv = new Deno.UnsafeFnPointer(
    proc("glTexParameterIiv"),
    def_glTexParameterIiv,
  );
  fn_glTexParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glTexParameterIuiv"),
    def_glTexParameterIuiv,
  );
  fn_glGetTexParameterIiv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterIiv"),
    def_glGetTexParameterIiv,
  );
  fn_glGetTexParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterIuiv"),
    def_glGetTexParameterIuiv,
  );
  fn_glSamplerParameterIiv = new Deno.UnsafeFnPointer(
    proc("glSamplerParameterIiv"),
    def_glSamplerParameterIiv,
  );
  fn_glSamplerParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glSamplerParameterIuiv"),
    def_glSamplerParameterIuiv,
  );
  fn_glGetSamplerParameterIiv = new Deno.UnsafeFnPointer(
    proc("glGetSamplerParameterIiv"),
    def_glGetSamplerParameterIiv,
  );
  fn_glGetSamplerParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glGetSamplerParameterIuiv"),
    def_glGetSamplerParameterIuiv,
  );
  fn_glTexBuffer = new Deno.UnsafeFnPointer(
    proc("glTexBuffer"),
    def_glTexBuffer,
  );
  fn_glTexBufferRange = new Deno.UnsafeFnPointer(
    proc("glTexBufferRange"),
    def_glTexBufferRange,
  );
  fn_glTexStorage3DMultisample = new Deno.UnsafeFnPointer(
    proc("glTexStorage3DMultisample"),
    def_glTexStorage3DMultisample,
  );
}
