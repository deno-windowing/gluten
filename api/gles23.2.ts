/// This file is auto-generated. Do not edit.

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

export type GLeglClientBufferEXT = Deno.PointerValue;

export type GLeglImageOES = Deno.PointerValue;

export type GLchar = number;

export type GLcharARB = number;

export type GLhandleARB = Deno.PointerValue;

export type GLhalf = number;

export type GLhalfARB = number;

export type GLfixed = number;

export type GLintptr = Deno.PointerValue;

export type GLintptrARB = Deno.PointerValue;

export type GLsizeiptr = Deno.PointerValue;

export type GLsizeiptrARB = Deno.PointerValue;

export type GLint64 = Deno.PointerValue;

export type GLint64EXT = Deno.PointerValue;

export type GLuint64 = Deno.PointerValue;

export type GLuint64EXT = Deno.PointerValue;

export type GLsync = Deno.PointerValue;

export type GLDEBUGPROC = Deno.PointerValue;

export type GLDEBUGPROCARB = Deno.PointerValue;

export type GLDEBUGPROCKHR = Deno.PointerValue;

export type GLDEBUGPROCAMD = Deno.PointerValue;

export type GLhalfNV = number;

export type GLvdpauSurfaceNV = Deno.PointerValue;

export type GLVULKANPROCNV = Deno.PointerValue;

/// Enums

export const GL_DEPTH_BUFFER_BIT = 0x100;

export const GL_STENCIL_BUFFER_BIT = 0x400;

export const GL_COLOR_BUFFER_BIT = 0x4000;

export const GL_FALSE = 0x0;

export const GL_TRUE = 0x1;

export const GL_POINTS = 0x0;

export const GL_LINES = 0x1;

export const GL_LINE_LOOP = 0x2;

export const GL_LINE_STRIP = 0x3;

export const GL_TRIANGLES = 0x4;

export const GL_TRIANGLE_STRIP = 0x5;

export const GL_TRIANGLE_FAN = 0x6;

export const GL_ZERO = 0x0;

export const GL_ONE = 0x1;

export const GL_SRC_COLOR = 0x300;

export const GL_ONE_MINUS_SRC_COLOR = 0x301;

export const GL_SRC_ALPHA = 0x302;

export const GL_ONE_MINUS_SRC_ALPHA = 0x303;

export const GL_DST_ALPHA = 0x304;

export const GL_ONE_MINUS_DST_ALPHA = 0x305;

export const GL_DST_COLOR = 0x306;

export const GL_ONE_MINUS_DST_COLOR = 0x307;

export const GL_SRC_ALPHA_SATURATE = 0x308;

export const GL_FUNC_ADD = 0x8006;

export const GL_BLEND_EQUATION = 0x8009;

export const GL_BLEND_EQUATION_RGB = 0x8009;

export const GL_BLEND_EQUATION_ALPHA = 0x883d;

export const GL_FUNC_SUBTRACT = 0x800a;

export const GL_FUNC_REVERSE_SUBTRACT = 0x800b;

export const GL_BLEND_DST_RGB = 0x80c8;

export const GL_BLEND_SRC_RGB = 0x80c9;

export const GL_BLEND_DST_ALPHA = 0x80ca;

export const GL_BLEND_SRC_ALPHA = 0x80cb;

export const GL_CONSTANT_COLOR = 0x8001;

export const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002;

export const GL_CONSTANT_ALPHA = 0x8003;

export const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004;

export const GL_BLEND_COLOR = 0x8005;

export const GL_ARRAY_BUFFER = 0x8892;

export const GL_ELEMENT_ARRAY_BUFFER = 0x8893;

export const GL_ARRAY_BUFFER_BINDING = 0x8894;

export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;

export const GL_STREAM_DRAW = 0x88e0;

export const GL_STATIC_DRAW = 0x88e4;

export const GL_DYNAMIC_DRAW = 0x88e8;

export const GL_BUFFER_SIZE = 0x8764;

export const GL_BUFFER_USAGE = 0x8765;

export const GL_CURRENT_VERTEX_ATTRIB = 0x8626;

export const GL_FRONT = 0x404;

export const GL_BACK = 0x405;

export const GL_FRONT_AND_BACK = 0x408;

export const GL_TEXTURE_2D = 0xde1;

export const GL_CULL_FACE = 0xb44;

export const GL_BLEND = 0xbe2;

export const GL_DITHER = 0xbd0;

export const GL_STENCIL_TEST = 0xb90;

export const GL_DEPTH_TEST = 0xb71;

export const GL_SCISSOR_TEST = 0xc11;

export const GL_POLYGON_OFFSET_FILL = 0x8037;

export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e;

export const GL_SAMPLE_COVERAGE = 0x80a0;

export const GL_NO_ERROR = 0x0;

export const GL_INVALID_ENUM = 0x500;

export const GL_INVALID_VALUE = 0x501;

export const GL_INVALID_OPERATION = 0x502;

export const GL_OUT_OF_MEMORY = 0x505;

export const GL_CW = 0x900;

export const GL_CCW = 0x901;

export const GL_LINE_WIDTH = 0xb21;

export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d;

export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e;

export const GL_CULL_FACE_MODE = 0xb45;

export const GL_FRONT_FACE = 0xb46;

export const GL_DEPTH_RANGE = 0xb70;

export const GL_DEPTH_WRITEMASK = 0xb72;

export const GL_DEPTH_CLEAR_VALUE = 0xb73;

export const GL_DEPTH_FUNC = 0xb74;

export const GL_STENCIL_CLEAR_VALUE = 0xb91;

export const GL_STENCIL_FUNC = 0xb92;

export const GL_STENCIL_FAIL = 0xb94;

export const GL_STENCIL_PASS_DEPTH_FAIL = 0xb95;

export const GL_STENCIL_PASS_DEPTH_PASS = 0xb96;

export const GL_STENCIL_REF = 0xb97;

export const GL_STENCIL_VALUE_MASK = 0xb93;

export const GL_STENCIL_WRITEMASK = 0xb98;

export const GL_STENCIL_BACK_FUNC = 0x8800;

export const GL_STENCIL_BACK_FAIL = 0x8801;

export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;

export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;

export const GL_STENCIL_BACK_REF = 0x8ca3;

export const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4;

export const GL_STENCIL_BACK_WRITEMASK = 0x8ca5;

export const GL_VIEWPORT = 0xba2;

export const GL_SCISSOR_BOX = 0xc10;

export const GL_COLOR_CLEAR_VALUE = 0xc22;

export const GL_COLOR_WRITEMASK = 0xc23;

export const GL_UNPACK_ALIGNMENT = 0xcf5;

export const GL_PACK_ALIGNMENT = 0xd05;

export const GL_MAX_TEXTURE_SIZE = 0xd33;

export const GL_MAX_VIEWPORT_DIMS = 0xd3a;

export const GL_SUBPIXEL_BITS = 0xd50;

export const GL_RED_BITS = 0xd52;

export const GL_GREEN_BITS = 0xd53;

export const GL_BLUE_BITS = 0xd54;

export const GL_ALPHA_BITS = 0xd55;

export const GL_DEPTH_BITS = 0xd56;

export const GL_STENCIL_BITS = 0xd57;

export const GL_POLYGON_OFFSET_UNITS = 0x2a00;

export const GL_POLYGON_OFFSET_FACTOR = 0x8038;

export const GL_TEXTURE_BINDING_2D = 0x8069;

export const GL_SAMPLE_BUFFERS = 0x80a8;

export const GL_SAMPLES = 0x80a9;

export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa;

export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab;

export const GL_NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;

export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3;

export const GL_DONT_CARE = 0x1100;

export const GL_FASTEST = 0x1101;

export const GL_NICEST = 0x1102;

export const GL_GENERATE_MIPMAP_HINT = 0x8192;

export const GL_BYTE = 0x1400;

export const GL_UNSIGNED_BYTE = 0x1401;

export const GL_SHORT = 0x1402;

export const GL_UNSIGNED_SHORT = 0x1403;

export const GL_INT = 0x1404;

export const GL_UNSIGNED_INT = 0x1405;

export const GL_FLOAT = 0x1406;

export const GL_FIXED = 0x140c;

export const GL_DEPTH_COMPONENT = 0x1902;

export const GL_ALPHA = 0x1906;

export const GL_RGB = 0x1907;

export const GL_RGBA = 0x1908;

export const GL_LUMINANCE = 0x1909;

export const GL_LUMINANCE_ALPHA = 0x190a;

export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;

export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;

export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363;

export const GL_FRAGMENT_SHADER = 0x8b30;

export const GL_VERTEX_SHADER = 0x8b31;

export const GL_MAX_VERTEX_ATTRIBS = 0x8869;

export const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;

export const GL_MAX_VARYING_VECTORS = 0x8dfc;

export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;

export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;

export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;

export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;

export const GL_SHADER_TYPE = 0x8b4f;

export const GL_DELETE_STATUS = 0x8b80;

export const GL_LINK_STATUS = 0x8b82;

export const GL_VALIDATE_STATUS = 0x8b83;

export const GL_ATTACHED_SHADERS = 0x8b85;

export const GL_ACTIVE_UNIFORMS = 0x8b86;

export const GL_ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87;

export const GL_ACTIVE_ATTRIBUTES = 0x8b89;

export const GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a;

export const GL_SHADING_LANGUAGE_VERSION = 0x8b8c;

export const GL_CURRENT_PROGRAM = 0x8b8d;

export const GL_NEVER = 0x200;

export const GL_LESS = 0x201;

export const GL_EQUAL = 0x202;

export const GL_LEQUAL = 0x203;

export const GL_GREATER = 0x204;

export const GL_NOTEQUAL = 0x205;

export const GL_GEQUAL = 0x206;

export const GL_ALWAYS = 0x207;

export const GL_KEEP = 0x1e00;

export const GL_REPLACE = 0x1e01;

export const GL_INCR = 0x1e02;

export const GL_DECR = 0x1e03;

export const GL_INVERT = 0x150a;

export const GL_INCR_WRAP = 0x8507;

export const GL_DECR_WRAP = 0x8508;

export const GL_VENDOR = 0x1f00;

export const GL_RENDERER = 0x1f01;

export const GL_VERSION = 0x1f02;

export const GL_EXTENSIONS = 0x1f03;

export const GL_NEAREST = 0x2600;

export const GL_LINEAR = 0x2601;

export const GL_NEAREST_MIPMAP_NEAREST = 0x2700;

export const GL_LINEAR_MIPMAP_NEAREST = 0x2701;

export const GL_NEAREST_MIPMAP_LINEAR = 0x2702;

export const GL_LINEAR_MIPMAP_LINEAR = 0x2703;

export const GL_TEXTURE_MAG_FILTER = 0x2800;

export const GL_TEXTURE_MIN_FILTER = 0x2801;

export const GL_TEXTURE_WRAP_S = 0x2802;

export const GL_TEXTURE_WRAP_T = 0x2803;

export const GL_TEXTURE = 0x1702;

export const GL_TEXTURE_CUBE_MAP = 0x8513;

export const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;

export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c;

export const GL_TEXTURE0 = 0x84c0;

export const GL_TEXTURE1 = 0x84c1;

export const GL_TEXTURE2 = 0x84c2;

export const GL_TEXTURE3 = 0x84c3;

export const GL_TEXTURE4 = 0x84c4;

export const GL_TEXTURE5 = 0x84c5;

export const GL_TEXTURE6 = 0x84c6;

export const GL_TEXTURE7 = 0x84c7;

export const GL_TEXTURE8 = 0x84c8;

export const GL_TEXTURE9 = 0x84c9;

export const GL_TEXTURE10 = 0x84ca;

export const GL_TEXTURE11 = 0x84cb;

export const GL_TEXTURE12 = 0x84cc;

export const GL_TEXTURE13 = 0x84cd;

export const GL_TEXTURE14 = 0x84ce;

export const GL_TEXTURE15 = 0x84cf;

export const GL_TEXTURE16 = 0x84d0;

export const GL_TEXTURE17 = 0x84d1;

export const GL_TEXTURE18 = 0x84d2;

export const GL_TEXTURE19 = 0x84d3;

export const GL_TEXTURE20 = 0x84d4;

export const GL_TEXTURE21 = 0x84d5;

export const GL_TEXTURE22 = 0x84d6;

export const GL_TEXTURE23 = 0x84d7;

export const GL_TEXTURE24 = 0x84d8;

export const GL_TEXTURE25 = 0x84d9;

export const GL_TEXTURE26 = 0x84da;

export const GL_TEXTURE27 = 0x84db;

export const GL_TEXTURE28 = 0x84dc;

export const GL_TEXTURE29 = 0x84dd;

export const GL_TEXTURE30 = 0x84de;

export const GL_TEXTURE31 = 0x84df;

export const GL_ACTIVE_TEXTURE = 0x84e0;

export const GL_REPEAT = 0x2901;

export const GL_CLAMP_TO_EDGE = 0x812f;

export const GL_MIRRORED_REPEAT = 0x8370;

export const GL_FLOAT_VEC2 = 0x8b50;

export const GL_FLOAT_VEC3 = 0x8b51;

export const GL_FLOAT_VEC4 = 0x8b52;

export const GL_INT_VEC2 = 0x8b53;

export const GL_INT_VEC3 = 0x8b54;

export const GL_INT_VEC4 = 0x8b55;

export const GL_BOOL = 0x8b56;

export const GL_BOOL_VEC2 = 0x8b57;

export const GL_BOOL_VEC3 = 0x8b58;

export const GL_BOOL_VEC4 = 0x8b59;

export const GL_FLOAT_MAT2 = 0x8b5a;

export const GL_FLOAT_MAT3 = 0x8b5b;

export const GL_FLOAT_MAT4 = 0x8b5c;

export const GL_SAMPLER_2D = 0x8b5e;

export const GL_SAMPLER_CUBE = 0x8b60;

export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;

export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;

export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;

export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;

export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;

export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;

export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;

export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;

export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;

export const GL_COMPILE_STATUS = 0x8b81;

export const GL_INFO_LOG_LENGTH = 0x8b84;

export const GL_SHADER_SOURCE_LENGTH = 0x8b88;

export const GL_SHADER_COMPILER = 0x8dfa;

export const GL_SHADER_BINARY_FORMATS = 0x8df8;

export const GL_NUM_SHADER_BINARY_FORMATS = 0x8df9;

export const GL_LOW_FLOAT = 0x8df0;

export const GL_MEDIUM_FLOAT = 0x8df1;

export const GL_HIGH_FLOAT = 0x8df2;

export const GL_LOW_INT = 0x8df3;

export const GL_MEDIUM_INT = 0x8df4;

export const GL_HIGH_INT = 0x8df5;

export const GL_FRAMEBUFFER = 0x8d40;

export const GL_RENDERBUFFER = 0x8d41;

export const GL_RGBA4 = 0x8056;

export const GL_RGB5_A1 = 0x8057;

export const GL_RGB565 = 0x8d62;

export const GL_DEPTH_COMPONENT16 = 0x81a5;

export const GL_STENCIL_INDEX8 = 0x8d48;

export const GL_RENDERBUFFER_WIDTH = 0x8d42;

export const GL_RENDERBUFFER_HEIGHT = 0x8d43;

export const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;

export const GL_RENDERBUFFER_RED_SIZE = 0x8d50;

export const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51;

export const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52;

export const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53;

export const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54;

export const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55;

export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;

export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;

export const GL_COLOR_ATTACHMENT0 = 0x8ce0;

export const GL_DEPTH_ATTACHMENT = 0x8d00;

export const GL_STENCIL_ATTACHMENT = 0x8d20;

export const GL_NONE = 0x0;

export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5;

export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;

export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;

export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9;

export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd;

export const GL_FRAMEBUFFER_BINDING = 0x8ca6;

export const GL_RENDERBUFFER_BINDING = 0x8ca7;

export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8;

export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x506;

export const GL_READ_BUFFER = 0xc02;

export const GL_UNPACK_ROW_LENGTH = 0xcf2;

export const GL_UNPACK_SKIP_ROWS = 0xcf3;

export const GL_UNPACK_SKIP_PIXELS = 0xcf4;

export const GL_PACK_ROW_LENGTH = 0xd02;

export const GL_PACK_SKIP_ROWS = 0xd03;

export const GL_PACK_SKIP_PIXELS = 0xd04;

export const GL_COLOR = 0x1800;

export const GL_DEPTH = 0x1801;

export const GL_STENCIL = 0x1802;

export const GL_RED = 0x1903;

export const GL_RGB8 = 0x8051;

export const GL_RGBA8 = 0x8058;

export const GL_RGB10_A2 = 0x8059;

export const GL_TEXTURE_BINDING_3D = 0x806a;

export const GL_UNPACK_SKIP_IMAGES = 0x806d;

export const GL_UNPACK_IMAGE_HEIGHT = 0x806e;

export const GL_TEXTURE_3D = 0x806f;

export const GL_TEXTURE_WRAP_R = 0x8072;

export const GL_MAX_3D_TEXTURE_SIZE = 0x8073;

export const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368;

export const GL_MAX_ELEMENTS_VERTICES = 0x80e8;

export const GL_MAX_ELEMENTS_INDICES = 0x80e9;

export const GL_TEXTURE_MIN_LOD = 0x813a;

export const GL_TEXTURE_MAX_LOD = 0x813b;

export const GL_TEXTURE_BASE_LEVEL = 0x813c;

export const GL_TEXTURE_MAX_LEVEL = 0x813d;

export const GL_MIN = 0x8007;

export const GL_MAX = 0x8008;

export const GL_DEPTH_COMPONENT24 = 0x81a6;

export const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd;

export const GL_TEXTURE_COMPARE_MODE = 0x884c;

export const GL_TEXTURE_COMPARE_FUNC = 0x884d;

export const GL_CURRENT_QUERY = 0x8865;

export const GL_QUERY_RESULT = 0x8866;

export const GL_QUERY_RESULT_AVAILABLE = 0x8867;

export const GL_BUFFER_MAPPED = 0x88bc;

export const GL_BUFFER_MAP_POINTER = 0x88bd;

export const GL_STREAM_READ = 0x88e1;

export const GL_STREAM_COPY = 0x88e2;

export const GL_STATIC_READ = 0x88e5;

export const GL_STATIC_COPY = 0x88e6;

export const GL_DYNAMIC_READ = 0x88e9;

export const GL_DYNAMIC_COPY = 0x88ea;

export const GL_MAX_DRAW_BUFFERS = 0x8824;

export const GL_DRAW_BUFFER0 = 0x8825;

export const GL_DRAW_BUFFER1 = 0x8826;

export const GL_DRAW_BUFFER2 = 0x8827;

export const GL_DRAW_BUFFER3 = 0x8828;

export const GL_DRAW_BUFFER4 = 0x8829;

export const GL_DRAW_BUFFER5 = 0x882a;

export const GL_DRAW_BUFFER6 = 0x882b;

export const GL_DRAW_BUFFER7 = 0x882c;

export const GL_DRAW_BUFFER8 = 0x882d;

export const GL_DRAW_BUFFER9 = 0x882e;

export const GL_DRAW_BUFFER10 = 0x882f;

export const GL_DRAW_BUFFER11 = 0x8830;

export const GL_DRAW_BUFFER12 = 0x8831;

export const GL_DRAW_BUFFER13 = 0x8832;

export const GL_DRAW_BUFFER14 = 0x8833;

export const GL_DRAW_BUFFER15 = 0x8834;

export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49;

export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a;

export const GL_SAMPLER_3D = 0x8b5f;

export const GL_SAMPLER_2D_SHADOW = 0x8b62;

export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;

export const GL_PIXEL_PACK_BUFFER = 0x88eb;

export const GL_PIXEL_UNPACK_BUFFER = 0x88ec;

export const GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed;

export const GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef;

export const GL_FLOAT_MAT2x3 = 0x8b65;

export const GL_FLOAT_MAT2x4 = 0x8b66;

export const GL_FLOAT_MAT3x2 = 0x8b67;

export const GL_FLOAT_MAT3x4 = 0x8b68;

export const GL_FLOAT_MAT4x2 = 0x8b69;

export const GL_FLOAT_MAT4x3 = 0x8b6a;

export const GL_SRGB = 0x8c40;

export const GL_SRGB8 = 0x8c41;

export const GL_SRGB8_ALPHA8 = 0x8c43;

export const GL_COMPARE_REF_TO_TEXTURE = 0x884e;

export const GL_MAJOR_VERSION = 0x821b;

export const GL_MINOR_VERSION = 0x821c;

export const GL_NUM_EXTENSIONS = 0x821d;

export const GL_RGBA32F = 0x8814;

export const GL_RGB32F = 0x8815;

export const GL_RGBA16F = 0x881a;

export const GL_RGB16F = 0x881b;

export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd;

export const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff;

export const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904;

export const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905;

export const GL_MAX_VARYING_COMPONENTS = 0x8b4b;

export const GL_TEXTURE_2D_ARRAY = 0x8c1a;

export const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d;

export const GL_R11F_G11F_B10F = 0x8c3a;

export const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;

export const GL_RGB9_E5 = 0x8c3d;

export const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;

export const GL_TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76;

export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f;

export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80;

export const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;

export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84;

export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85;

export const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88;

export const GL_RASTERIZER_DISCARD = 0x8c89;

export const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a;

export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b;

export const GL_INTERLEAVED_ATTRIBS = 0x8c8c;

export const GL_SEPARATE_ATTRIBS = 0x8c8d;

export const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e;

export const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f;

export const GL_RGBA32UI = 0x8d70;

export const GL_RGB32UI = 0x8d71;

export const GL_RGBA16UI = 0x8d76;

export const GL_RGB16UI = 0x8d77;

export const GL_RGBA8UI = 0x8d7c;

export const GL_RGB8UI = 0x8d7d;

export const GL_RGBA32I = 0x8d82;

export const GL_RGB32I = 0x8d83;

export const GL_RGBA16I = 0x8d88;

export const GL_RGB16I = 0x8d89;

export const GL_RGBA8I = 0x8d8e;

export const GL_RGB8I = 0x8d8f;

export const GL_RED_INTEGER = 0x8d94;

export const GL_RGB_INTEGER = 0x8d98;

export const GL_RGBA_INTEGER = 0x8d99;

export const GL_SAMPLER_2D_ARRAY = 0x8dc1;

export const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4;

export const GL_SAMPLER_CUBE_SHADOW = 0x8dc5;

export const GL_UNSIGNED_INT_VEC2 = 0x8dc6;

export const GL_UNSIGNED_INT_VEC3 = 0x8dc7;

export const GL_UNSIGNED_INT_VEC4 = 0x8dc8;

export const GL_INT_SAMPLER_2D = 0x8dca;

export const GL_INT_SAMPLER_3D = 0x8dcb;

export const GL_INT_SAMPLER_CUBE = 0x8dcc;

export const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf;

export const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2;

export const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3;

export const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4;

export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7;

export const GL_BUFFER_ACCESS_FLAGS = 0x911f;

export const GL_BUFFER_MAP_LENGTH = 0x9120;

export const GL_BUFFER_MAP_OFFSET = 0x9121;

export const GL_DEPTH_COMPONENT32F = 0x8cac;

export const GL_DEPTH32F_STENCIL8 = 0x8cad;

export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;

export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;

export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;

export const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;

export const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;

export const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;

export const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;

export const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;

export const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;

export const GL_FRAMEBUFFER_DEFAULT = 0x8218;

export const GL_FRAMEBUFFER_UNDEFINED = 0x8219;

export const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a;

export const GL_DEPTH_STENCIL = 0x84f9;

export const GL_UNSIGNED_INT_24_8 = 0x84fa;

export const GL_DEPTH24_STENCIL8 = 0x88f0;

export const GL_UNSIGNED_NORMALIZED = 0x8c17;

export const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6;

export const GL_READ_FRAMEBUFFER = 0x8ca8;

export const GL_DRAW_FRAMEBUFFER = 0x8ca9;

export const GL_READ_FRAMEBUFFER_BINDING = 0x8caa;

export const GL_RENDERBUFFER_SAMPLES = 0x8cab;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;

export const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf;

export const GL_COLOR_ATTACHMENT1 = 0x8ce1;

export const GL_COLOR_ATTACHMENT2 = 0x8ce2;

export const GL_COLOR_ATTACHMENT3 = 0x8ce3;

export const GL_COLOR_ATTACHMENT4 = 0x8ce4;

export const GL_COLOR_ATTACHMENT5 = 0x8ce5;

export const GL_COLOR_ATTACHMENT6 = 0x8ce6;

export const GL_COLOR_ATTACHMENT7 = 0x8ce7;

export const GL_COLOR_ATTACHMENT8 = 0x8ce8;

export const GL_COLOR_ATTACHMENT9 = 0x8ce9;

export const GL_COLOR_ATTACHMENT10 = 0x8cea;

export const GL_COLOR_ATTACHMENT11 = 0x8ceb;

export const GL_COLOR_ATTACHMENT12 = 0x8cec;

export const GL_COLOR_ATTACHMENT13 = 0x8ced;

export const GL_COLOR_ATTACHMENT14 = 0x8cee;

export const GL_COLOR_ATTACHMENT15 = 0x8cef;

export const GL_COLOR_ATTACHMENT16 = 0x8cf0;

export const GL_COLOR_ATTACHMENT17 = 0x8cf1;

export const GL_COLOR_ATTACHMENT18 = 0x8cf2;

export const GL_COLOR_ATTACHMENT19 = 0x8cf3;

export const GL_COLOR_ATTACHMENT20 = 0x8cf4;

export const GL_COLOR_ATTACHMENT21 = 0x8cf5;

export const GL_COLOR_ATTACHMENT22 = 0x8cf6;

export const GL_COLOR_ATTACHMENT23 = 0x8cf7;

export const GL_COLOR_ATTACHMENT24 = 0x8cf8;

export const GL_COLOR_ATTACHMENT25 = 0x8cf9;

export const GL_COLOR_ATTACHMENT26 = 0x8cfa;

export const GL_COLOR_ATTACHMENT27 = 0x8cfb;

export const GL_COLOR_ATTACHMENT28 = 0x8cfc;

export const GL_COLOR_ATTACHMENT29 = 0x8cfd;

export const GL_COLOR_ATTACHMENT30 = 0x8cfe;

export const GL_COLOR_ATTACHMENT31 = 0x8cff;

export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;

export const GL_MAX_SAMPLES = 0x8d57;

export const GL_HALF_FLOAT = 0x140b;

export const GL_MAP_READ_BIT = 0x1;

export const GL_MAP_WRITE_BIT = 0x2;

export const GL_MAP_INVALIDATE_RANGE_BIT = 0x4;

export const GL_MAP_INVALIDATE_BUFFER_BIT = 0x8;

export const GL_MAP_FLUSH_EXPLICIT_BIT = 0x10;

export const GL_MAP_UNSYNCHRONIZED_BIT = 0x20;

export const GL_RG = 0x8227;

export const GL_RG_INTEGER = 0x8228;

export const GL_R8 = 0x8229;

export const GL_RG8 = 0x822b;

export const GL_R16F = 0x822d;

export const GL_R32F = 0x822e;

export const GL_RG16F = 0x822f;

export const GL_RG32F = 0x8230;

export const GL_R8I = 0x8231;

export const GL_R8UI = 0x8232;

export const GL_R16I = 0x8233;

export const GL_R16UI = 0x8234;

export const GL_R32I = 0x8235;

export const GL_R32UI = 0x8236;

export const GL_RG8I = 0x8237;

export const GL_RG8UI = 0x8238;

export const GL_RG16I = 0x8239;

export const GL_RG16UI = 0x823a;

export const GL_RG32I = 0x823b;

export const GL_RG32UI = 0x823c;

export const GL_VERTEX_ARRAY_BINDING = 0x85b5;

export const GL_R8_SNORM = 0x8f94;

export const GL_RG8_SNORM = 0x8f95;

export const GL_RGB8_SNORM = 0x8f96;

export const GL_RGBA8_SNORM = 0x8f97;

export const GL_SIGNED_NORMALIZED = 0x8f9c;

export const GL_PRIMITIVE_RESTART_FIXED_INDEX = 0x8d69;

export const GL_COPY_READ_BUFFER = 0x8f36;

export const GL_COPY_WRITE_BUFFER = 0x8f37;

export const GL_COPY_READ_BUFFER_BINDING = 0x8f36;

export const GL_COPY_WRITE_BUFFER_BINDING = 0x8f37;

export const GL_UNIFORM_BUFFER = 0x8a11;

export const GL_UNIFORM_BUFFER_BINDING = 0x8a28;

export const GL_UNIFORM_BUFFER_START = 0x8a29;

export const GL_UNIFORM_BUFFER_SIZE = 0x8a2a;

export const GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b;

export const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d;

export const GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e;

export const GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f;

export const GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30;

export const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31;

export const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33;

export const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34;

export const GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH = 0x8a35;

export const GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36;

export const GL_UNIFORM_TYPE = 0x8a37;

export const GL_UNIFORM_SIZE = 0x8a38;

export const GL_UNIFORM_NAME_LENGTH = 0x8a39;

export const GL_UNIFORM_BLOCK_INDEX = 0x8a3a;

export const GL_UNIFORM_OFFSET = 0x8a3b;

export const GL_UNIFORM_ARRAY_STRIDE = 0x8a3c;

export const GL_UNIFORM_MATRIX_STRIDE = 0x8a3d;

export const GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e;

export const GL_UNIFORM_BLOCK_BINDING = 0x8a3f;

export const GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40;

export const GL_UNIFORM_BLOCK_NAME_LENGTH = 0x8a41;

export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42;

export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;

export const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;

export const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;

export const GL_INVALID_INDEX = 0xffffffff;

export const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;

export const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;

export const GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111;

export const GL_OBJECT_TYPE = 0x9112;

export const GL_SYNC_CONDITION = 0x9113;

export const GL_SYNC_STATUS = 0x9114;

export const GL_SYNC_FLAGS = 0x9115;

export const GL_SYNC_FENCE = 0x9116;

export const GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117;

export const GL_UNSIGNALED = 0x9118;

export const GL_SIGNALED = 0x9119;

export const GL_ALREADY_SIGNALED = 0x911a;

export const GL_TIMEOUT_EXPIRED = 0x911b;

export const GL_CONDITION_SATISFIED = 0x911c;

export const GL_WAIT_FAILED = 0x911d;

export const GL_SYNC_FLUSH_COMMANDS_BIT = 0x1;

export const GL_TIMEOUT_IGNORED = 0x10000000000000000;

export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe;

export const GL_ANY_SAMPLES_PASSED = 0x8c2f;

export const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;

export const GL_SAMPLER_BINDING = 0x8919;

export const GL_RGB10_A2UI = 0x906f;

export const GL_TEXTURE_SWIZZLE_R = 0x8e42;

export const GL_TEXTURE_SWIZZLE_G = 0x8e43;

export const GL_TEXTURE_SWIZZLE_B = 0x8e44;

export const GL_TEXTURE_SWIZZLE_A = 0x8e45;

export const GL_GREEN = 0x1904;

export const GL_BLUE = 0x1905;

export const GL_INT_2_10_10_10_REV = 0x8d9f;

export const GL_TRANSFORM_FEEDBACK = 0x8e22;

export const GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23;

export const GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24;

export const GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25;

export const GL_PROGRAM_BINARY_RETRIEVABLE_HINT = 0x8257;

export const GL_PROGRAM_BINARY_LENGTH = 0x8741;

export const GL_NUM_PROGRAM_BINARY_FORMATS = 0x87fe;

export const GL_PROGRAM_BINARY_FORMATS = 0x87ff;

export const GL_COMPRESSED_R11_EAC = 0x9270;

export const GL_COMPRESSED_SIGNED_R11_EAC = 0x9271;

export const GL_COMPRESSED_RG11_EAC = 0x9272;

export const GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273;

export const GL_COMPRESSED_RGB8_ETC2 = 0x9274;

export const GL_COMPRESSED_SRGB8_ETC2 = 0x9275;

export const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9276;

export const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9277;

export const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9278;

export const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9279;

export const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f;

export const GL_MAX_ELEMENT_INDEX = 0x8d6b;

export const GL_NUM_SAMPLE_COUNTS = 0x9380;

export const GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df;

export const GL_COMPUTE_SHADER = 0x91b9;

export const GL_MAX_COMPUTE_UNIFORM_BLOCKS = 0x91bb;

export const GL_MAX_COMPUTE_TEXTURE_IMAGE_UNITS = 0x91bc;

export const GL_MAX_COMPUTE_IMAGE_UNIFORMS = 0x91bd;

export const GL_MAX_COMPUTE_SHARED_MEMORY_SIZE = 0x8262;

export const GL_MAX_COMPUTE_UNIFORM_COMPONENTS = 0x8263;

export const GL_MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS = 0x8264;

export const GL_MAX_COMPUTE_ATOMIC_COUNTERS = 0x8265;

export const GL_MAX_COMBINED_COMPUTE_UNIFORM_COMPONENTS = 0x8266;

export const GL_MAX_COMPUTE_WORK_GROUP_INVOCATIONS = 0x90eb;

export const GL_MAX_COMPUTE_WORK_GROUP_COUNT = 0x91be;

export const GL_MAX_COMPUTE_WORK_GROUP_SIZE = 0x91bf;

export const GL_COMPUTE_WORK_GROUP_SIZE = 0x8267;

export const GL_DISPATCH_INDIRECT_BUFFER = 0x90ee;

export const GL_DISPATCH_INDIRECT_BUFFER_BINDING = 0x90ef;

export const GL_COMPUTE_SHADER_BIT = 0x20;

export const GL_DRAW_INDIRECT_BUFFER = 0x8f3f;

export const GL_DRAW_INDIRECT_BUFFER_BINDING = 0x8f43;

export const GL_MAX_UNIFORM_LOCATIONS = 0x826e;

export const GL_FRAMEBUFFER_DEFAULT_WIDTH = 0x9310;

export const GL_FRAMEBUFFER_DEFAULT_HEIGHT = 0x9311;

export const GL_FRAMEBUFFER_DEFAULT_SAMPLES = 0x9313;

export const GL_FRAMEBUFFER_DEFAULT_FIXED_SAMPLE_LOCATIONS = 0x9314;

export const GL_MAX_FRAMEBUFFER_WIDTH = 0x9315;

export const GL_MAX_FRAMEBUFFER_HEIGHT = 0x9316;

export const GL_MAX_FRAMEBUFFER_SAMPLES = 0x9318;

export const GL_UNIFORM = 0x92e1;

export const GL_UNIFORM_BLOCK = 0x92e2;

export const GL_PROGRAM_INPUT = 0x92e3;

export const GL_PROGRAM_OUTPUT = 0x92e4;

export const GL_BUFFER_VARIABLE = 0x92e5;

export const GL_SHADER_STORAGE_BLOCK = 0x92e6;

export const GL_ATOMIC_COUNTER_BUFFER = 0x92c0;

export const GL_TRANSFORM_FEEDBACK_VARYING = 0x92f4;

export const GL_ACTIVE_RESOURCES = 0x92f5;

export const GL_MAX_NAME_LENGTH = 0x92f6;

export const GL_MAX_NUM_ACTIVE_VARIABLES = 0x92f7;

export const GL_NAME_LENGTH = 0x92f9;

export const GL_TYPE = 0x92fa;

export const GL_ARRAY_SIZE = 0x92fb;

export const GL_OFFSET = 0x92fc;

export const GL_BLOCK_INDEX = 0x92fd;

export const GL_ARRAY_STRIDE = 0x92fe;

export const GL_MATRIX_STRIDE = 0x92ff;

export const GL_IS_ROW_MAJOR = 0x9300;

export const GL_ATOMIC_COUNTER_BUFFER_INDEX = 0x9301;

export const GL_BUFFER_BINDING = 0x9302;

export const GL_BUFFER_DATA_SIZE = 0x9303;

export const GL_NUM_ACTIVE_VARIABLES = 0x9304;

export const GL_ACTIVE_VARIABLES = 0x9305;

export const GL_REFERENCED_BY_VERTEX_SHADER = 0x9306;

export const GL_REFERENCED_BY_FRAGMENT_SHADER = 0x930a;

export const GL_REFERENCED_BY_COMPUTE_SHADER = 0x930b;

export const GL_TOP_LEVEL_ARRAY_SIZE = 0x930c;

export const GL_TOP_LEVEL_ARRAY_STRIDE = 0x930d;

export const GL_LOCATION = 0x930e;

export const GL_VERTEX_SHADER_BIT = 0x1;

export const GL_FRAGMENT_SHADER_BIT = 0x2;

export const GL_ALL_SHADER_BITS = 0xffffffff;

export const GL_PROGRAM_SEPARABLE = 0x8258;

export const GL_ACTIVE_PROGRAM = 0x8259;

export const GL_PROGRAM_PIPELINE_BINDING = 0x825a;

export const GL_ATOMIC_COUNTER_BUFFER_BINDING = 0x92c1;

export const GL_ATOMIC_COUNTER_BUFFER_START = 0x92c2;

export const GL_ATOMIC_COUNTER_BUFFER_SIZE = 0x92c3;

export const GL_MAX_VERTEX_ATOMIC_COUNTER_BUFFERS = 0x92cc;

export const GL_MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS = 0x92d0;

export const GL_MAX_COMBINED_ATOMIC_COUNTER_BUFFERS = 0x92d1;

export const GL_MAX_VERTEX_ATOMIC_COUNTERS = 0x92d2;

export const GL_MAX_FRAGMENT_ATOMIC_COUNTERS = 0x92d6;

export const GL_MAX_COMBINED_ATOMIC_COUNTERS = 0x92d7;

export const GL_MAX_ATOMIC_COUNTER_BUFFER_SIZE = 0x92d8;

export const GL_MAX_ATOMIC_COUNTER_BUFFER_BINDINGS = 0x92dc;

export const GL_ACTIVE_ATOMIC_COUNTER_BUFFERS = 0x92d9;

export const GL_UNSIGNED_INT_ATOMIC_COUNTER = 0x92db;

export const GL_MAX_IMAGE_UNITS = 0x8f38;

export const GL_MAX_VERTEX_IMAGE_UNIFORMS = 0x90ca;

export const GL_MAX_FRAGMENT_IMAGE_UNIFORMS = 0x90ce;

export const GL_MAX_COMBINED_IMAGE_UNIFORMS = 0x90cf;

export const GL_IMAGE_BINDING_NAME = 0x8f3a;

export const GL_IMAGE_BINDING_LEVEL = 0x8f3b;

export const GL_IMAGE_BINDING_LAYERED = 0x8f3c;

export const GL_IMAGE_BINDING_LAYER = 0x8f3d;

export const GL_IMAGE_BINDING_ACCESS = 0x8f3e;

export const GL_IMAGE_BINDING_FORMAT = 0x906e;

export const GL_VERTEX_ATTRIB_ARRAY_BARRIER_BIT = 0x1;

export const GL_ELEMENT_ARRAY_BARRIER_BIT = 0x2;

export const GL_UNIFORM_BARRIER_BIT = 0x4;

export const GL_TEXTURE_FETCH_BARRIER_BIT = 0x8;

export const GL_SHADER_IMAGE_ACCESS_BARRIER_BIT = 0x20;

export const GL_COMMAND_BARRIER_BIT = 0x40;

export const GL_PIXEL_BUFFER_BARRIER_BIT = 0x80;

export const GL_TEXTURE_UPDATE_BARRIER_BIT = 0x100;

export const GL_BUFFER_UPDATE_BARRIER_BIT = 0x200;

export const GL_FRAMEBUFFER_BARRIER_BIT = 0x400;

export const GL_TRANSFORM_FEEDBACK_BARRIER_BIT = 0x800;

export const GL_ATOMIC_COUNTER_BARRIER_BIT = 0x1000;

export const GL_ALL_BARRIER_BITS = 0xffffffff;

export const GL_IMAGE_2D = 0x904d;

export const GL_IMAGE_3D = 0x904e;

export const GL_IMAGE_CUBE = 0x9050;

export const GL_IMAGE_2D_ARRAY = 0x9053;

export const GL_INT_IMAGE_2D = 0x9058;

export const GL_INT_IMAGE_3D = 0x9059;

export const GL_INT_IMAGE_CUBE = 0x905b;

export const GL_INT_IMAGE_2D_ARRAY = 0x905e;

export const GL_UNSIGNED_INT_IMAGE_2D = 0x9063;

export const GL_UNSIGNED_INT_IMAGE_3D = 0x9064;

export const GL_UNSIGNED_INT_IMAGE_CUBE = 0x9066;

export const GL_UNSIGNED_INT_IMAGE_2D_ARRAY = 0x9069;

export const GL_IMAGE_FORMAT_COMPATIBILITY_TYPE = 0x90c7;

export const GL_IMAGE_FORMAT_COMPATIBILITY_BY_SIZE = 0x90c8;

export const GL_IMAGE_FORMAT_COMPATIBILITY_BY_CLASS = 0x90c9;

export const GL_READ_ONLY = 0x88b8;

export const GL_WRITE_ONLY = 0x88b9;

export const GL_READ_WRITE = 0x88ba;

export const GL_SHADER_STORAGE_BUFFER = 0x90d2;

export const GL_SHADER_STORAGE_BUFFER_BINDING = 0x90d3;

export const GL_SHADER_STORAGE_BUFFER_START = 0x90d4;

export const GL_SHADER_STORAGE_BUFFER_SIZE = 0x90d5;

export const GL_MAX_VERTEX_SHADER_STORAGE_BLOCKS = 0x90d6;

export const GL_MAX_FRAGMENT_SHADER_STORAGE_BLOCKS = 0x90da;

export const GL_MAX_COMPUTE_SHADER_STORAGE_BLOCKS = 0x90db;

export const GL_MAX_COMBINED_SHADER_STORAGE_BLOCKS = 0x90dc;

export const GL_MAX_SHADER_STORAGE_BUFFER_BINDINGS = 0x90dd;

export const GL_MAX_SHADER_STORAGE_BLOCK_SIZE = 0x90de;

export const GL_SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT = 0x90df;

export const GL_SHADER_STORAGE_BARRIER_BIT = 0x2000;

export const GL_MAX_COMBINED_SHADER_OUTPUT_RESOURCES = 0x8f39;

export const GL_DEPTH_STENCIL_TEXTURE_MODE = 0x90ea;

export const GL_STENCIL_INDEX = 0x1901;

export const GL_MIN_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5e;

export const GL_MAX_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5f;

export const GL_SAMPLE_POSITION = 0x8e50;

export const GL_SAMPLE_MASK = 0x8e51;

export const GL_SAMPLE_MASK_VALUE = 0x8e52;

export const GL_TEXTURE_2D_MULTISAMPLE = 0x9100;

export const GL_MAX_SAMPLE_MASK_WORDS = 0x8e59;

export const GL_MAX_COLOR_TEXTURE_SAMPLES = 0x910e;

export const GL_MAX_DEPTH_TEXTURE_SAMPLES = 0x910f;

export const GL_MAX_INTEGER_SAMPLES = 0x9110;

export const GL_TEXTURE_BINDING_2D_MULTISAMPLE = 0x9104;

export const GL_TEXTURE_SAMPLES = 0x9106;

export const GL_TEXTURE_FIXED_SAMPLE_LOCATIONS = 0x9107;

export const GL_TEXTURE_WIDTH = 0x1000;

export const GL_TEXTURE_HEIGHT = 0x1001;

export const GL_TEXTURE_DEPTH = 0x8071;

export const GL_TEXTURE_INTERNAL_FORMAT = 0x1003;

export const GL_TEXTURE_RED_SIZE = 0x805c;

export const GL_TEXTURE_GREEN_SIZE = 0x805d;

export const GL_TEXTURE_BLUE_SIZE = 0x805e;

export const GL_TEXTURE_ALPHA_SIZE = 0x805f;

export const GL_TEXTURE_DEPTH_SIZE = 0x884a;

export const GL_TEXTURE_STENCIL_SIZE = 0x88f1;

export const GL_TEXTURE_SHARED_SIZE = 0x8c3f;

export const GL_TEXTURE_RED_TYPE = 0x8c10;

export const GL_TEXTURE_GREEN_TYPE = 0x8c11;

export const GL_TEXTURE_BLUE_TYPE = 0x8c12;

export const GL_TEXTURE_ALPHA_TYPE = 0x8c13;

export const GL_TEXTURE_DEPTH_TYPE = 0x8c16;

export const GL_TEXTURE_COMPRESSED = 0x86a1;

export const GL_SAMPLER_2D_MULTISAMPLE = 0x9108;

export const GL_INT_SAMPLER_2D_MULTISAMPLE = 0x9109;

export const GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE = 0x910a;

export const GL_VERTEX_ATTRIB_BINDING = 0x82d4;

export const GL_VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d5;

export const GL_VERTEX_BINDING_DIVISOR = 0x82d6;

export const GL_VERTEX_BINDING_OFFSET = 0x82d7;

export const GL_VERTEX_BINDING_STRIDE = 0x82d8;

export const GL_VERTEX_BINDING_BUFFER = 0x8f4f;

export const GL_MAX_VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d9;

export const GL_MAX_VERTEX_ATTRIB_BINDINGS = 0x82da;

export const GL_MAX_VERTEX_ATTRIB_STRIDE = 0x82e5;

export const GL_MULTISAMPLE_LINE_WIDTH_RANGE = 0x9381;

export const GL_MULTISAMPLE_LINE_WIDTH_GRANULARITY = 0x9382;

export const GL_MULTIPLY = 0x9294;

export const GL_SCREEN = 0x9295;

export const GL_OVERLAY = 0x9296;

export const GL_DARKEN = 0x9297;

export const GL_LIGHTEN = 0x9298;

export const GL_COLORDODGE = 0x9299;

export const GL_COLORBURN = 0x929a;

export const GL_HARDLIGHT = 0x929b;

export const GL_SOFTLIGHT = 0x929c;

export const GL_DIFFERENCE = 0x929e;

export const GL_EXCLUSION = 0x92a0;

export const GL_HSL_HUE = 0x92ad;

export const GL_HSL_SATURATION = 0x92ae;

export const GL_HSL_COLOR = 0x92af;

export const GL_HSL_LUMINOSITY = 0x92b0;

export const GL_DEBUG_OUTPUT_SYNCHRONOUS = 0x8242;

export const GL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH = 0x8243;

export const GL_DEBUG_CALLBACK_FUNCTION = 0x8244;

export const GL_DEBUG_CALLBACK_USER_PARAM = 0x8245;

export const GL_DEBUG_SOURCE_API = 0x8246;

export const GL_DEBUG_SOURCE_WINDOW_SYSTEM = 0x8247;

export const GL_DEBUG_SOURCE_SHADER_COMPILER = 0x8248;

export const GL_DEBUG_SOURCE_THIRD_PARTY = 0x8249;

export const GL_DEBUG_SOURCE_APPLICATION = 0x824a;

export const GL_DEBUG_SOURCE_OTHER = 0x824b;

export const GL_DEBUG_TYPE_ERROR = 0x824c;

export const GL_DEBUG_TYPE_DEPRECATED_BEHAVIOR = 0x824d;

export const GL_DEBUG_TYPE_UNDEFINED_BEHAVIOR = 0x824e;

export const GL_DEBUG_TYPE_PORTABILITY = 0x824f;

export const GL_DEBUG_TYPE_PERFORMANCE = 0x8250;

export const GL_DEBUG_TYPE_OTHER = 0x8251;

export const GL_DEBUG_TYPE_MARKER = 0x8268;

export const GL_DEBUG_TYPE_PUSH_GROUP = 0x8269;

export const GL_DEBUG_TYPE_POP_GROUP = 0x826a;

export const GL_DEBUG_SEVERITY_NOTIFICATION = 0x826b;

export const GL_MAX_DEBUG_GROUP_STACK_DEPTH = 0x826c;

export const GL_DEBUG_GROUP_STACK_DEPTH = 0x826d;

export const GL_BUFFER = 0x82e0;

export const GL_SHADER = 0x82e1;

export const GL_PROGRAM = 0x82e2;

export const GL_VERTEX_ARRAY = 0x8074;

export const GL_QUERY = 0x82e3;

export const GL_PROGRAM_PIPELINE = 0x82e4;

export const GL_SAMPLER = 0x82e6;

export const GL_MAX_LABEL_LENGTH = 0x82e8;

export const GL_MAX_DEBUG_MESSAGE_LENGTH = 0x9143;

export const GL_MAX_DEBUG_LOGGED_MESSAGES = 0x9144;

export const GL_DEBUG_LOGGED_MESSAGES = 0x9145;

export const GL_DEBUG_SEVERITY_HIGH = 0x9146;

export const GL_DEBUG_SEVERITY_MEDIUM = 0x9147;

export const GL_DEBUG_SEVERITY_LOW = 0x9148;

export const GL_DEBUG_OUTPUT = 0x92e0;

export const GL_CONTEXT_FLAG_DEBUG_BIT = 0x2;

export const GL_STACK_OVERFLOW = 0x503;

export const GL_STACK_UNDERFLOW = 0x504;

export const GL_GEOMETRY_SHADER = 0x8dd9;

export const GL_GEOMETRY_SHADER_BIT = 0x4;

export const GL_GEOMETRY_VERTICES_OUT = 0x8916;

export const GL_GEOMETRY_INPUT_TYPE = 0x8917;

export const GL_GEOMETRY_OUTPUT_TYPE = 0x8918;

export const GL_GEOMETRY_SHADER_INVOCATIONS = 0x887f;

export const GL_LAYER_PROVOKING_VERTEX = 0x825e;

export const GL_LINES_ADJACENCY = 0xa;

export const GL_LINE_STRIP_ADJACENCY = 0xb;

export const GL_TRIANGLES_ADJACENCY = 0xc;

export const GL_TRIANGLE_STRIP_ADJACENCY = 0xd;

export const GL_MAX_GEOMETRY_UNIFORM_COMPONENTS = 0x8ddf;

export const GL_MAX_GEOMETRY_UNIFORM_BLOCKS = 0x8a2c;

export const GL_MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS = 0x8a32;

export const GL_MAX_GEOMETRY_INPUT_COMPONENTS = 0x9123;

export const GL_MAX_GEOMETRY_OUTPUT_COMPONENTS = 0x9124;

export const GL_MAX_GEOMETRY_OUTPUT_VERTICES = 0x8de0;

export const GL_MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS = 0x8de1;

export const GL_MAX_GEOMETRY_SHADER_INVOCATIONS = 0x8e5a;

export const GL_MAX_GEOMETRY_TEXTURE_IMAGE_UNITS = 0x8c29;

export const GL_MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS = 0x92cf;

export const GL_MAX_GEOMETRY_ATOMIC_COUNTERS = 0x92d5;

export const GL_MAX_GEOMETRY_IMAGE_UNIFORMS = 0x90cd;

export const GL_MAX_GEOMETRY_SHADER_STORAGE_BLOCKS = 0x90d7;

export const GL_FIRST_VERTEX_CONVENTION = 0x8e4d;

export const GL_LAST_VERTEX_CONVENTION = 0x8e4e;

export const GL_UNDEFINED_VERTEX = 0x8260;

export const GL_PRIMITIVES_GENERATED = 0x8c87;

export const GL_FRAMEBUFFER_DEFAULT_LAYERS = 0x9312;

export const GL_MAX_FRAMEBUFFER_LAYERS = 0x9317;

export const GL_FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS = 0x8da8;

export const GL_FRAMEBUFFER_ATTACHMENT_LAYERED = 0x8da7;

export const GL_REFERENCED_BY_GEOMETRY_SHADER = 0x9309;

export const GL_PRIMITIVE_BOUNDING_BOX = 0x92be;

export const GL_CONTEXT_FLAG_ROBUST_ACCESS_BIT = 0x4;

export const GL_CONTEXT_FLAGS = 0x821e;

export const GL_LOSE_CONTEXT_ON_RESET = 0x8252;

export const GL_GUILTY_CONTEXT_RESET = 0x8253;

export const GL_INNOCENT_CONTEXT_RESET = 0x8254;

export const GL_UNKNOWN_CONTEXT_RESET = 0x8255;

export const GL_RESET_NOTIFICATION_STRATEGY = 0x8256;

export const GL_NO_RESET_NOTIFICATION = 0x8261;

export const GL_CONTEXT_LOST = 0x507;

export const GL_SAMPLE_SHADING = 0x8c36;

export const GL_MIN_SAMPLE_SHADING_VALUE = 0x8c37;

export const GL_MIN_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5b;

export const GL_MAX_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5c;

export const GL_FRAGMENT_INTERPOLATION_OFFSET_BITS = 0x8e5d;

export const GL_PATCHES = 0xe;

export const GL_PATCH_VERTICES = 0x8e72;

export const GL_TESS_CONTROL_OUTPUT_VERTICES = 0x8e75;

export const GL_TESS_GEN_MODE = 0x8e76;

export const GL_TESS_GEN_SPACING = 0x8e77;

export const GL_TESS_GEN_VERTEX_ORDER = 0x8e78;

export const GL_TESS_GEN_POINT_MODE = 0x8e79;

export const GL_ISOLINES = 0x8e7a;

export const GL_QUADS = 0x7;

export const GL_FRACTIONAL_ODD = 0x8e7b;

export const GL_FRACTIONAL_EVEN = 0x8e7c;

export const GL_MAX_PATCH_VERTICES = 0x8e7d;

export const GL_MAX_TESS_GEN_LEVEL = 0x8e7e;

export const GL_MAX_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e7f;

export const GL_MAX_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e80;

export const GL_MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS = 0x8e81;

export const GL_MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS = 0x8e82;

export const GL_MAX_TESS_CONTROL_OUTPUT_COMPONENTS = 0x8e83;

export const GL_MAX_TESS_PATCH_COMPONENTS = 0x8e84;

export const GL_MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS = 0x8e85;

export const GL_MAX_TESS_EVALUATION_OUTPUT_COMPONENTS = 0x8e86;

export const GL_MAX_TESS_CONTROL_UNIFORM_BLOCKS = 0x8e89;

export const GL_MAX_TESS_EVALUATION_UNIFORM_BLOCKS = 0x8e8a;

export const GL_MAX_TESS_CONTROL_INPUT_COMPONENTS = 0x886c;

export const GL_MAX_TESS_EVALUATION_INPUT_COMPONENTS = 0x886d;

export const GL_MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e1e;

export const GL_MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e1f;

export const GL_MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS = 0x92cd;

export const GL_MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS = 0x92ce;

export const GL_MAX_TESS_CONTROL_ATOMIC_COUNTERS = 0x92d3;

export const GL_MAX_TESS_EVALUATION_ATOMIC_COUNTERS = 0x92d4;

export const GL_MAX_TESS_CONTROL_IMAGE_UNIFORMS = 0x90cb;

export const GL_MAX_TESS_EVALUATION_IMAGE_UNIFORMS = 0x90cc;

export const GL_MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS = 0x90d8;

export const GL_MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS = 0x90d9;

export const GL_PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED = 0x8221;

export const GL_IS_PER_PATCH = 0x92e7;

export const GL_REFERENCED_BY_TESS_CONTROL_SHADER = 0x9307;

export const GL_REFERENCED_BY_TESS_EVALUATION_SHADER = 0x9308;

export const GL_TESS_CONTROL_SHADER = 0x8e88;

export const GL_TESS_EVALUATION_SHADER = 0x8e87;

export const GL_TESS_CONTROL_SHADER_BIT = 0x8;

export const GL_TESS_EVALUATION_SHADER_BIT = 0x10;

export const GL_TEXTURE_BORDER_COLOR = 0x1004;

export const GL_CLAMP_TO_BORDER = 0x812d;

export const GL_TEXTURE_BUFFER = 0x8c2a;

export const GL_TEXTURE_BUFFER_BINDING = 0x8c2a;

export const GL_MAX_TEXTURE_BUFFER_SIZE = 0x8c2b;

export const GL_TEXTURE_BINDING_BUFFER = 0x8c2c;

export const GL_TEXTURE_BUFFER_DATA_STORE_BINDING = 0x8c2d;

export const GL_TEXTURE_BUFFER_OFFSET_ALIGNMENT = 0x919f;

export const GL_SAMPLER_BUFFER = 0x8dc2;

export const GL_INT_SAMPLER_BUFFER = 0x8dd0;

export const GL_UNSIGNED_INT_SAMPLER_BUFFER = 0x8dd8;

export const GL_IMAGE_BUFFER = 0x9051;

export const GL_INT_IMAGE_BUFFER = 0x905c;

export const GL_UNSIGNED_INT_IMAGE_BUFFER = 0x9067;

export const GL_TEXTURE_BUFFER_OFFSET = 0x919d;

export const GL_TEXTURE_BUFFER_SIZE = 0x919e;

export const GL_COMPRESSED_RGBA_ASTC_4x4 = 0x93b0;

export const GL_COMPRESSED_RGBA_ASTC_5x4 = 0x93b1;

export const GL_COMPRESSED_RGBA_ASTC_5x5 = 0x93b2;

export const GL_COMPRESSED_RGBA_ASTC_6x5 = 0x93b3;

export const GL_COMPRESSED_RGBA_ASTC_6x6 = 0x93b4;

export const GL_COMPRESSED_RGBA_ASTC_8x5 = 0x93b5;

export const GL_COMPRESSED_RGBA_ASTC_8x6 = 0x93b6;

export const GL_COMPRESSED_RGBA_ASTC_8x8 = 0x93b7;

export const GL_COMPRESSED_RGBA_ASTC_10x5 = 0x93b8;

export const GL_COMPRESSED_RGBA_ASTC_10x6 = 0x93b9;

export const GL_COMPRESSED_RGBA_ASTC_10x8 = 0x93ba;

export const GL_COMPRESSED_RGBA_ASTC_10x10 = 0x93bb;

export const GL_COMPRESSED_RGBA_ASTC_12x10 = 0x93bc;

export const GL_COMPRESSED_RGBA_ASTC_12x12 = 0x93bd;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4 = 0x93d0;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4 = 0x93d1;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5 = 0x93d2;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5 = 0x93d3;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6 = 0x93d4;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5 = 0x93d5;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6 = 0x93d6;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8 = 0x93d7;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5 = 0x93d8;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6 = 0x93d9;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8 = 0x93da;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10 = 0x93db;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10 = 0x93dc;

export const GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12 = 0x93dd;

export const GL_TEXTURE_CUBE_MAP_ARRAY = 0x9009;

export const GL_TEXTURE_BINDING_CUBE_MAP_ARRAY = 0x900a;

export const GL_SAMPLER_CUBE_MAP_ARRAY = 0x900c;

export const GL_SAMPLER_CUBE_MAP_ARRAY_SHADOW = 0x900d;

export const GL_INT_SAMPLER_CUBE_MAP_ARRAY = 0x900e;

export const GL_UNSIGNED_INT_SAMPLER_CUBE_MAP_ARRAY = 0x900f;

export const GL_IMAGE_CUBE_MAP_ARRAY = 0x9054;

export const GL_INT_IMAGE_CUBE_MAP_ARRAY = 0x905f;

export const GL_UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY = 0x906a;

export const GL_TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9102;

export const GL_TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY = 0x9105;

export const GL_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910b;

export const GL_INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910c;

export const GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910d;

/// Commands
