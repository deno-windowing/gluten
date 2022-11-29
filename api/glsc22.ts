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

export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x506;

export const GL_CONTEXT_LOST = 0x507;

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

export const GL_RED = 0x1903;

export const GL_RG = 0x8227;

export const GL_RGB = 0x1907;

export const GL_RGBA = 0x1908;

export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;

export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;

export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363;

export const GL_MAX_VERTEX_ATTRIBS = 0x8869;

export const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;

export const GL_MAX_VARYING_VECTORS = 0x8dfc;

export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;

export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;

export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;

export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;

export const GL_LINK_STATUS = 0x8b82;

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

export const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f;

export const GL_TEXTURE = 0x1702;

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

export const GL_SAMPLER_2D = 0x8b5e;

export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;

export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;

export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;

export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;

export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;

export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;

export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;

export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;

export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;

export const GL_NUM_PROGRAM_BINARY_FORMATS = 0x87fe;

export const GL_PROGRAM_BINARY_FORMATS = 0x87ff;

export const GL_LOW_FLOAT = 0x8df0;

export const GL_MEDIUM_FLOAT = 0x8df1;

export const GL_HIGH_FLOAT = 0x8df2;

export const GL_LOW_INT = 0x8df3;

export const GL_MEDIUM_INT = 0x8df4;

export const GL_HIGH_INT = 0x8df5;

export const GL_FRAMEBUFFER = 0x8d40;

export const GL_RENDERBUFFER = 0x8d41;

export const GL_R8 = 0x8229;

export const GL_RG8 = 0x822b;

export const GL_RGB8 = 0x8051;

export const GL_RGBA8 = 0x8058;

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

export const GL_COLOR_ATTACHMENT0 = 0x8ce0;

export const GL_DEPTH_ATTACHMENT = 0x8d00;

export const GL_STENCIL_ATTACHMENT = 0x8d20;

export const GL_NONE = 0x0;

export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5;

export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;

export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;

export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9;

export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd;

export const GL_FRAMEBUFFER_UNDEFINED = 0x8219;

export const GL_FRAMEBUFFER_BINDING = 0x8ca6;

export const GL_RENDERBUFFER_BINDING = 0x8ca7;

export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8;

export const GL_GUILTY_CONTEXT_RESET = 0x8253;

export const GL_INNOCENT_CONTEXT_RESET = 0x8254;

export const GL_UNKNOWN_CONTEXT_RESET = 0x8255;

export const GL_CONTEXT_ROBUST_ACCESS = 0x90f3;

export const GL_RESET_NOTIFICATION_STRATEGY = 0x8256;

export const GL_LOSE_CONTEXT_ON_RESET = 0x8252;

/// Commands
