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
export const NONE = 0x0;
export const FRONT_LEFT = 0x400;
export const FRONT_RIGHT = 0x401;
export const BACK_LEFT = 0x402;
export const BACK_RIGHT = 0x403;
export const FRONT = 0x404;
export const BACK = 0x405;
export const LEFT = 0x406;
export const RIGHT = 0x407;
export const FRONT_AND_BACK = 0x408;
export const NO_ERROR = 0x0;
export const INVALID_ENUM = 0x500;
export const INVALID_VALUE = 0x501;
export const INVALID_OPERATION = 0x502;
export const OUT_OF_MEMORY = 0x505;
export const CW = 0x900;
export const CCW = 0x901;
export const POINT_SIZE = 0xb11;
export const POINT_SIZE_RANGE = 0xb12;
export const POINT_SIZE_GRANULARITY = 0xb13;
export const LINE_SMOOTH = 0xb20;
export const LINE_WIDTH = 0xb21;
export const LINE_WIDTH_RANGE = 0xb22;
export const LINE_WIDTH_GRANULARITY = 0xb23;
export const POLYGON_MODE = 0xb40;
export const POLYGON_SMOOTH = 0xb41;
export const CULL_FACE = 0xb44;
export const CULL_FACE_MODE = 0xb45;
export const FRONT_FACE = 0xb46;
export const DEPTH_RANGE = 0xb70;
export const DEPTH_TEST = 0xb71;
export const DEPTH_WRITEMASK = 0xb72;
export const DEPTH_CLEAR_VALUE = 0xb73;
export const DEPTH_FUNC = 0xb74;
export const STENCIL_TEST = 0xb90;
export const STENCIL_CLEAR_VALUE = 0xb91;
export const STENCIL_FUNC = 0xb92;
export const STENCIL_VALUE_MASK = 0xb93;
export const STENCIL_FAIL = 0xb94;
export const STENCIL_PASS_DEPTH_FAIL = 0xb95;
export const STENCIL_PASS_DEPTH_PASS = 0xb96;
export const STENCIL_REF = 0xb97;
export const STENCIL_WRITEMASK = 0xb98;
export const VIEWPORT = 0xba2;
export const DITHER = 0xbd0;
export const BLEND_DST = 0xbe0;
export const BLEND_SRC = 0xbe1;
export const BLEND = 0xbe2;
export const LOGIC_OP_MODE = 0xbf0;
export const DRAW_BUFFER = 0xc01;
export const READ_BUFFER = 0xc02;
export const SCISSOR_BOX = 0xc10;
export const SCISSOR_TEST = 0xc11;
export const COLOR_CLEAR_VALUE = 0xc22;
export const COLOR_WRITEMASK = 0xc23;
export const DOUBLEBUFFER = 0xc32;
export const STEREO = 0xc33;
export const LINE_SMOOTH_HINT = 0xc52;
export const POLYGON_SMOOTH_HINT = 0xc53;
export const UNPACK_SWAP_BYTES = 0xcf0;
export const UNPACK_LSB_FIRST = 0xcf1;
export const UNPACK_ROW_LENGTH = 0xcf2;
export const UNPACK_SKIP_ROWS = 0xcf3;
export const UNPACK_SKIP_PIXELS = 0xcf4;
export const UNPACK_ALIGNMENT = 0xcf5;
export const PACK_SWAP_BYTES = 0xd00;
export const PACK_LSB_FIRST = 0xd01;
export const PACK_ROW_LENGTH = 0xd02;
export const PACK_SKIP_ROWS = 0xd03;
export const PACK_SKIP_PIXELS = 0xd04;
export const PACK_ALIGNMENT = 0xd05;
export const MAX_TEXTURE_SIZE = 0xd33;
export const MAX_VIEWPORT_DIMS = 0xd3a;
export const SUBPIXEL_BITS = 0xd50;
export const TEXTURE_1D = 0xde0;
export const TEXTURE_2D = 0xde1;
export const TEXTURE_WIDTH = 0x1000;
export const TEXTURE_HEIGHT = 0x1001;
export const TEXTURE_BORDER_COLOR = 0x1004;
export const DONT_CARE = 0x1100;
export const FASTEST = 0x1101;
export const NICEST = 0x1102;
export const BYTE = 0x1400;
export const UNSIGNED_BYTE = 0x1401;
export const SHORT = 0x1402;
export const UNSIGNED_SHORT = 0x1403;
export const INT = 0x1404;
export const UNSIGNED_INT = 0x1405;
export const FLOAT = 0x1406;
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
export const TEXTURE = 0x1702;
export const COLOR = 0x1800;
export const DEPTH = 0x1801;
export const STENCIL = 0x1802;
export const STENCIL_INDEX = 0x1901;
export const DEPTH_COMPONENT = 0x1902;
export const RED = 0x1903;
export const GREEN = 0x1904;
export const BLUE = 0x1905;
export const ALPHA = 0x1906;
export const RGB = 0x1907;
export const RGBA = 0x1908;
export const POINT = 0x1b00;
export const LINE = 0x1b01;
export const FILL = 0x1b02;
export const KEEP = 0x1e00;
export const REPLACE = 0x1e01;
export const INCR = 0x1e02;
export const DECR = 0x1e03;
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
export const REPEAT = 0x2901;
export const COLOR_LOGIC_OP = 0xbf2;
export const POLYGON_OFFSET_UNITS = 0x2a00;
export const POLYGON_OFFSET_POINT = 0x2a01;
export const POLYGON_OFFSET_LINE = 0x2a02;
export const POLYGON_OFFSET_FILL = 0x8037;
export const POLYGON_OFFSET_FACTOR = 0x8038;
export const TEXTURE_BINDING_1D = 0x8068;
export const TEXTURE_BINDING_2D = 0x8069;
export const TEXTURE_INTERNAL_FORMAT = 0x1003;
export const TEXTURE_RED_SIZE = 0x805c;
export const TEXTURE_GREEN_SIZE = 0x805d;
export const TEXTURE_BLUE_SIZE = 0x805e;
export const TEXTURE_ALPHA_SIZE = 0x805f;
export const DOUBLE = 0x140a;
export const PROXY_TEXTURE_1D = 0x8063;
export const PROXY_TEXTURE_2D = 0x8064;
export const R3_G3_B2 = 0x2a10;
export const RGB4 = 0x804f;
export const RGB5 = 0x8050;
export const RGB8 = 0x8051;
export const RGB10 = 0x8052;
export const RGB12 = 0x8053;
export const RGB16 = 0x8054;
export const RGBA2 = 0x8055;
export const RGBA4 = 0x8056;
export const RGB5_A1 = 0x8057;
export const RGBA8 = 0x8058;
export const RGB10_A2 = 0x8059;
export const RGBA12 = 0x805a;
export const RGBA16 = 0x805b;
export const UNSIGNED_BYTE_3_3_2 = 0x8032;
export const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
export const UNSIGNED_INT_8_8_8_8 = 0x8035;
export const UNSIGNED_INT_10_10_10_2 = 0x8036;
export const TEXTURE_BINDING_3D = 0x806a;
export const PACK_SKIP_IMAGES = 0x806b;
export const PACK_IMAGE_HEIGHT = 0x806c;
export const UNPACK_SKIP_IMAGES = 0x806d;
export const UNPACK_IMAGE_HEIGHT = 0x806e;
export const TEXTURE_3D = 0x806f;
export const PROXY_TEXTURE_3D = 0x8070;
export const TEXTURE_DEPTH = 0x8071;
export const TEXTURE_WRAP_R = 0x8072;
export const MAX_3D_TEXTURE_SIZE = 0x8073;
export const UNSIGNED_BYTE_2_3_3_REV = 0x8362;
export const UNSIGNED_SHORT_5_6_5 = 0x8363;
export const UNSIGNED_SHORT_5_6_5_REV = 0x8364;
export const UNSIGNED_SHORT_4_4_4_4_REV = 0x8365;
export const UNSIGNED_SHORT_1_5_5_5_REV = 0x8366;
export const UNSIGNED_INT_8_8_8_8_REV = 0x8367;
export const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
export const BGR = 0x80e0;
export const BGRA = 0x80e1;
export const MAX_ELEMENTS_VERTICES = 0x80e8;
export const MAX_ELEMENTS_INDICES = 0x80e9;
export const CLAMP_TO_EDGE = 0x812f;
export const TEXTURE_MIN_LOD = 0x813a;
export const TEXTURE_MAX_LOD = 0x813b;
export const TEXTURE_BASE_LEVEL = 0x813c;
export const TEXTURE_MAX_LEVEL = 0x813d;
export const SMOOTH_POINT_SIZE_RANGE = 0xb12;
export const SMOOTH_POINT_SIZE_GRANULARITY = 0xb13;
export const SMOOTH_LINE_WIDTH_RANGE = 0xb22;
export const SMOOTH_LINE_WIDTH_GRANULARITY = 0xb23;
export const ALIASED_LINE_WIDTH_RANGE = 0x846e;
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
export const MULTISAMPLE = 0x809d;
export const SAMPLE_ALPHA_TO_COVERAGE = 0x809e;
export const SAMPLE_ALPHA_TO_ONE = 0x809f;
export const SAMPLE_COVERAGE = 0x80a0;
export const SAMPLE_BUFFERS = 0x80a8;
export const SAMPLES = 0x80a9;
export const SAMPLE_COVERAGE_VALUE = 0x80aa;
export const SAMPLE_COVERAGE_INVERT = 0x80ab;
export const TEXTURE_CUBE_MAP = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
export const PROXY_TEXTURE_CUBE_MAP = 0x851b;
export const MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c;
export const COMPRESSED_RGB = 0x84ed;
export const COMPRESSED_RGBA = 0x84ee;
export const TEXTURE_COMPRESSION_HINT = 0x84ef;
export const TEXTURE_COMPRESSED_IMAGE_SIZE = 0x86a0;
export const TEXTURE_COMPRESSED = 0x86a1;
export const NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;
export const COMPRESSED_TEXTURE_FORMATS = 0x86a3;
export const CLAMP_TO_BORDER = 0x812d;
export const BLEND_DST_RGB = 0x80c8;
export const BLEND_SRC_RGB = 0x80c9;
export const BLEND_DST_ALPHA = 0x80ca;
export const BLEND_SRC_ALPHA = 0x80cb;
export const POINT_FADE_THRESHOLD_SIZE = 0x8128;
export const DEPTH_COMPONENT16 = 0x81a5;
export const DEPTH_COMPONENT24 = 0x81a6;
export const DEPTH_COMPONENT32 = 0x81a7;
export const MIRRORED_REPEAT = 0x8370;
export const MAX_TEXTURE_LOD_BIAS = 0x84fd;
export const TEXTURE_LOD_BIAS = 0x8501;
export const INCR_WRAP = 0x8507;
export const DECR_WRAP = 0x8508;
export const TEXTURE_DEPTH_SIZE = 0x884a;
export const TEXTURE_COMPARE_MODE = 0x884c;
export const TEXTURE_COMPARE_FUNC = 0x884d;
export const BLEND_COLOR = 0x8005;
export const BLEND_EQUATION = 0x8009;
export const CONSTANT_COLOR = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR = 0x8002;
export const CONSTANT_ALPHA = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA = 0x8004;
export const FUNC_ADD = 0x8006;
export const FUNC_REVERSE_SUBTRACT = 0x800b;
export const FUNC_SUBTRACT = 0x800a;
export const MIN = 0x8007;
export const MAX = 0x8008;
export const BUFFER_SIZE = 0x8764;
export const BUFFER_USAGE = 0x8765;
export const QUERY_COUNTER_BITS = 0x8864;
export const CURRENT_QUERY = 0x8865;
export const QUERY_RESULT = 0x8866;
export const QUERY_RESULT_AVAILABLE = 0x8867;
export const ARRAY_BUFFER = 0x8892;
export const ELEMENT_ARRAY_BUFFER = 0x8893;
export const ARRAY_BUFFER_BINDING = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;
export const READ_ONLY = 0x88b8;
export const WRITE_ONLY = 0x88b9;
export const READ_WRITE = 0x88ba;
export const BUFFER_ACCESS = 0x88bb;
export const BUFFER_MAPPED = 0x88bc;
export const BUFFER_MAP_POINTER = 0x88bd;
export const STREAM_DRAW = 0x88e0;
export const STREAM_READ = 0x88e1;
export const STREAM_COPY = 0x88e2;
export const STATIC_DRAW = 0x88e4;
export const STATIC_READ = 0x88e5;
export const STATIC_COPY = 0x88e6;
export const DYNAMIC_DRAW = 0x88e8;
export const DYNAMIC_READ = 0x88e9;
export const DYNAMIC_COPY = 0x88ea;
export const SAMPLES_PASSED = 0x8914;
export const SRC1_ALPHA = 0x8589;
export const BLEND_EQUATION_RGB = 0x8009;
export const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
export const CURRENT_VERTEX_ATTRIB = 0x8626;
export const VERTEX_PROGRAM_POINT_SIZE = 0x8642;
export const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
export const STENCIL_BACK_FUNC = 0x8800;
export const STENCIL_BACK_FAIL = 0x8801;
export const STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
export const STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
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
export const BLEND_EQUATION_ALPHA = 0x883d;
export const MAX_VERTEX_ATTRIBS = 0x8869;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;
export const MAX_TEXTURE_IMAGE_UNITS = 0x8872;
export const FRAGMENT_SHADER = 0x8b30;
export const VERTEX_SHADER = 0x8b31;
export const MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49;
export const MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a;
export const MAX_VARYING_FLOATS = 0x8b4b;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;
export const SHADER_TYPE = 0x8b4f;
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
export const SAMPLER_1D = 0x8b5d;
export const SAMPLER_2D = 0x8b5e;
export const SAMPLER_3D = 0x8b5f;
export const SAMPLER_CUBE = 0x8b60;
export const SAMPLER_1D_SHADOW = 0x8b61;
export const SAMPLER_2D_SHADOW = 0x8b62;
export const DELETE_STATUS = 0x8b80;
export const COMPILE_STATUS = 0x8b81;
export const LINK_STATUS = 0x8b82;
export const VALIDATE_STATUS = 0x8b83;
export const INFO_LOG_LENGTH = 0x8b84;
export const ATTACHED_SHADERS = 0x8b85;
export const ACTIVE_UNIFORMS = 0x8b86;
export const ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87;
export const SHADER_SOURCE_LENGTH = 0x8b88;
export const ACTIVE_ATTRIBUTES = 0x8b89;
export const ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a;
export const FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
export const SHADING_LANGUAGE_VERSION = 0x8b8c;
export const CURRENT_PROGRAM = 0x8b8d;
export const POINT_SPRITE_COORD_ORIGIN = 0x8ca0;
export const LOWER_LEFT = 0x8ca1;
export const UPPER_LEFT = 0x8ca2;
export const STENCIL_BACK_REF = 0x8ca3;
export const STENCIL_BACK_VALUE_MASK = 0x8ca4;
export const STENCIL_BACK_WRITEMASK = 0x8ca5;
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
export const SRGB_ALPHA = 0x8c42;
export const SRGB8_ALPHA8 = 0x8c43;
export const COMPRESSED_SRGB = 0x8c48;
export const COMPRESSED_SRGB_ALPHA = 0x8c49;
export const COMPARE_REF_TO_TEXTURE = 0x884e;
export const CLIP_DISTANCE0 = 0x3000;
export const CLIP_DISTANCE1 = 0x3001;
export const CLIP_DISTANCE2 = 0x3002;
export const CLIP_DISTANCE3 = 0x3003;
export const CLIP_DISTANCE4 = 0x3004;
export const CLIP_DISTANCE5 = 0x3005;
export const CLIP_DISTANCE6 = 0x3006;
export const CLIP_DISTANCE7 = 0x3007;
export const MAX_CLIP_DISTANCES = 0xd32;
export const MAJOR_VERSION = 0x821b;
export const MINOR_VERSION = 0x821c;
export const NUM_EXTENSIONS = 0x821d;
export const CONTEXT_FLAGS = 0x821e;
export const COMPRESSED_RED = 0x8225;
export const COMPRESSED_RG = 0x8226;
export const CONTEXT_FLAG_FORWARD_COMPATIBLE_BIT = 0x1;
export const RGBA32F = 0x8814;
export const RGB32F = 0x8815;
export const RGBA16F = 0x881a;
export const RGB16F = 0x881b;
export const VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd;
export const MAX_ARRAY_TEXTURE_LAYERS = 0x88ff;
export const MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
export const MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
export const CLAMP_READ_COLOR = 0x891c;
export const FIXED_ONLY = 0x891d;
export const MAX_VARYING_COMPONENTS = 0x8b4b;
export const TEXTURE_1D_ARRAY = 0x8c18;
export const PROXY_TEXTURE_1D_ARRAY = 0x8c19;
export const TEXTURE_2D_ARRAY = 0x8c1a;
export const PROXY_TEXTURE_2D_ARRAY = 0x8c1b;
export const TEXTURE_BINDING_1D_ARRAY = 0x8c1c;
export const TEXTURE_BINDING_2D_ARRAY = 0x8c1d;
export const R11F_G11F_B10F = 0x8c3a;
export const UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;
export const RGB9_E5 = 0x8c3d;
export const UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;
export const TEXTURE_SHARED_SIZE = 0x8c3f;
export const TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76;
export const TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80;
export const TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
export const TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84;
export const TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85;
export const PRIMITIVES_GENERATED = 0x8c87;
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
export const GREEN_INTEGER = 0x8d95;
export const BLUE_INTEGER = 0x8d96;
export const RGB_INTEGER = 0x8d98;
export const RGBA_INTEGER = 0x8d99;
export const BGR_INTEGER = 0x8d9a;
export const BGRA_INTEGER = 0x8d9b;
export const SAMPLER_1D_ARRAY = 0x8dc0;
export const SAMPLER_2D_ARRAY = 0x8dc1;
export const SAMPLER_1D_ARRAY_SHADOW = 0x8dc3;
export const SAMPLER_2D_ARRAY_SHADOW = 0x8dc4;
export const SAMPLER_CUBE_SHADOW = 0x8dc5;
export const UNSIGNED_INT_VEC2 = 0x8dc6;
export const UNSIGNED_INT_VEC3 = 0x8dc7;
export const UNSIGNED_INT_VEC4 = 0x8dc8;
export const INT_SAMPLER_1D = 0x8dc9;
export const INT_SAMPLER_2D = 0x8dca;
export const INT_SAMPLER_3D = 0x8dcb;
export const INT_SAMPLER_CUBE = 0x8dcc;
export const INT_SAMPLER_1D_ARRAY = 0x8dce;
export const INT_SAMPLER_2D_ARRAY = 0x8dcf;
export const UNSIGNED_INT_SAMPLER_1D = 0x8dd1;
export const UNSIGNED_INT_SAMPLER_2D = 0x8dd2;
export const UNSIGNED_INT_SAMPLER_3D = 0x8dd3;
export const UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4;
export const UNSIGNED_INT_SAMPLER_1D_ARRAY = 0x8dd6;
export const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7;
export const QUERY_WAIT = 0x8e13;
export const QUERY_NO_WAIT = 0x8e14;
export const QUERY_BY_REGION_WAIT = 0x8e15;
export const QUERY_BY_REGION_NO_WAIT = 0x8e16;
export const BUFFER_ACCESS_FLAGS = 0x911f;
export const BUFFER_MAP_LENGTH = 0x9120;
export const BUFFER_MAP_OFFSET = 0x9121;
export const DEPTH_COMPONENT32F = 0x8cac;
export const DEPTH32F_STENCIL8 = 0x8cad;
export const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;
export const INVALID_FRAMEBUFFER_OPERATION = 0x506;
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
export const MAX_RENDERBUFFER_SIZE = 0x84e8;
export const DEPTH_STENCIL = 0x84f9;
export const UNSIGNED_INT_24_8 = 0x84fa;
export const DEPTH24_STENCIL8 = 0x88f0;
export const TEXTURE_STENCIL_SIZE = 0x88f1;
export const TEXTURE_RED_TYPE = 0x8c10;
export const TEXTURE_GREEN_TYPE = 0x8c11;
export const TEXTURE_BLUE_TYPE = 0x8c12;
export const TEXTURE_ALPHA_TYPE = 0x8c13;
export const TEXTURE_DEPTH_TYPE = 0x8c16;
export const UNSIGNED_NORMALIZED = 0x8c17;
export const FRAMEBUFFER_BINDING = 0x8ca6;
export const DRAW_FRAMEBUFFER_BINDING = 0x8ca6;
export const RENDERBUFFER_BINDING = 0x8ca7;
export const READ_FRAMEBUFFER = 0x8ca8;
export const DRAW_FRAMEBUFFER = 0x8ca9;
export const READ_FRAMEBUFFER_BINDING = 0x8caa;
export const RENDERBUFFER_SAMPLES = 0x8cab;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;
export const FRAMEBUFFER_COMPLETE = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER = 0x8cdb;
export const FRAMEBUFFER_INCOMPLETE_READ_BUFFER = 0x8cdc;
export const FRAMEBUFFER_UNSUPPORTED = 0x8cdd;
export const MAX_COLOR_ATTACHMENTS = 0x8cdf;
export const COLOR_ATTACHMENT0 = 0x8ce0;
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
export const DEPTH_ATTACHMENT = 0x8d00;
export const STENCIL_ATTACHMENT = 0x8d20;
export const FRAMEBUFFER = 0x8d40;
export const RENDERBUFFER = 0x8d41;
export const RENDERBUFFER_WIDTH = 0x8d42;
export const RENDERBUFFER_HEIGHT = 0x8d43;
export const RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;
export const STENCIL_INDEX1 = 0x8d46;
export const STENCIL_INDEX4 = 0x8d47;
export const STENCIL_INDEX8 = 0x8d48;
export const STENCIL_INDEX16 = 0x8d49;
export const RENDERBUFFER_RED_SIZE = 0x8d50;
export const RENDERBUFFER_GREEN_SIZE = 0x8d51;
export const RENDERBUFFER_BLUE_SIZE = 0x8d52;
export const RENDERBUFFER_ALPHA_SIZE = 0x8d53;
export const RENDERBUFFER_DEPTH_SIZE = 0x8d54;
export const RENDERBUFFER_STENCIL_SIZE = 0x8d55;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;
export const MAX_SAMPLES = 0x8d57;
export const FRAMEBUFFER_SRGB = 0x8db9;
export const HALF_FLOAT = 0x140b;
export const MAP_READ_BIT = 0x1;
export const MAP_WRITE_BIT = 0x2;
export const MAP_INVALIDATE_RANGE_BIT = 0x4;
export const MAP_INVALIDATE_BUFFER_BIT = 0x8;
export const MAP_FLUSH_EXPLICIT_BIT = 0x10;
export const MAP_UNSYNCHRONIZED_BIT = 0x20;
export const COMPRESSED_RED_RGTC1 = 0x8dbb;
export const COMPRESSED_SIGNED_RED_RGTC1 = 0x8dbc;
export const COMPRESSED_RG_RGTC2 = 0x8dbd;
export const COMPRESSED_SIGNED_RG_RGTC2 = 0x8dbe;
export const RG = 0x8227;
export const RG_INTEGER = 0x8228;
export const R8 = 0x8229;
export const R16 = 0x822a;
export const RG8 = 0x822b;
export const RG16 = 0x822c;
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
export const SAMPLER_2D_RECT = 0x8b63;
export const SAMPLER_2D_RECT_SHADOW = 0x8b64;
export const SAMPLER_BUFFER = 0x8dc2;
export const INT_SAMPLER_2D_RECT = 0x8dcd;
export const INT_SAMPLER_BUFFER = 0x8dd0;
export const UNSIGNED_INT_SAMPLER_2D_RECT = 0x8dd5;
export const UNSIGNED_INT_SAMPLER_BUFFER = 0x8dd8;
export const TEXTURE_BUFFER = 0x8c2a;
export const MAX_TEXTURE_BUFFER_SIZE = 0x8c2b;
export const TEXTURE_BINDING_BUFFER = 0x8c2c;
export const TEXTURE_BUFFER_DATA_STORE_BINDING = 0x8c2d;
export const TEXTURE_RECTANGLE = 0x84f5;
export const TEXTURE_BINDING_RECTANGLE = 0x84f6;
export const PROXY_TEXTURE_RECTANGLE = 0x84f7;
export const MAX_RECTANGLE_TEXTURE_SIZE = 0x84f8;
export const R8_SNORM = 0x8f94;
export const RG8_SNORM = 0x8f95;
export const RGB8_SNORM = 0x8f96;
export const RGBA8_SNORM = 0x8f97;
export const R16_SNORM = 0x8f98;
export const RG16_SNORM = 0x8f99;
export const RGB16_SNORM = 0x8f9a;
export const RGBA16_SNORM = 0x8f9b;
export const SIGNED_NORMALIZED = 0x8f9c;
export const PRIMITIVE_RESTART = 0x8f9d;
export const PRIMITIVE_RESTART_INDEX = 0x8f9e;
export const COPY_READ_BUFFER = 0x8f36;
export const COPY_WRITE_BUFFER = 0x8f37;
export const UNIFORM_BUFFER = 0x8a11;
export const UNIFORM_BUFFER_BINDING = 0x8a28;
export const UNIFORM_BUFFER_START = 0x8a29;
export const UNIFORM_BUFFER_SIZE = 0x8a2a;
export const MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b;
export const MAX_GEOMETRY_UNIFORM_BLOCKS = 0x8a2c;
export const MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d;
export const MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e;
export const MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f;
export const MAX_UNIFORM_BLOCK_SIZE = 0x8a30;
export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31;
export const MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS = 0x8a32;
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
export const UNIFORM_BLOCK_REFERENCED_BY_GEOMETRY_SHADER = 0x8a45;
export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
export const INVALID_INDEX = 0xffffffff;
export const CONTEXT_CORE_PROFILE_BIT = 0x1;
export const CONTEXT_COMPATIBILITY_PROFILE_BIT = 0x2;
export const LINES_ADJACENCY = 0xa;
export const LINE_STRIP_ADJACENCY = 0xb;
export const TRIANGLES_ADJACENCY = 0xc;
export const TRIANGLE_STRIP_ADJACENCY = 0xd;
export const PROGRAM_POINT_SIZE = 0x8642;
export const MAX_GEOMETRY_TEXTURE_IMAGE_UNITS = 0x8c29;
export const FRAMEBUFFER_ATTACHMENT_LAYERED = 0x8da7;
export const FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS = 0x8da8;
export const GEOMETRY_SHADER = 0x8dd9;
export const GEOMETRY_VERTICES_OUT = 0x8916;
export const GEOMETRY_INPUT_TYPE = 0x8917;
export const GEOMETRY_OUTPUT_TYPE = 0x8918;
export const MAX_GEOMETRY_UNIFORM_COMPONENTS = 0x8ddf;
export const MAX_GEOMETRY_OUTPUT_VERTICES = 0x8de0;
export const MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS = 0x8de1;
export const MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
export const MAX_GEOMETRY_INPUT_COMPONENTS = 0x9123;
export const MAX_GEOMETRY_OUTPUT_COMPONENTS = 0x9124;
export const MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
export const CONTEXT_PROFILE_MASK = 0x9126;
export const DEPTH_CLAMP = 0x864f;
export const QUADS_FOLLOW_PROVOKING_VERTEX_CONVENTION = 0x8e4c;
export const FIRST_VERTEX_CONVENTION = 0x8e4d;
export const LAST_VERTEX_CONVENTION = 0x8e4e;
export const PROVOKING_VERTEX = 0x8e4f;
export const TEXTURE_CUBE_MAP_SEAMLESS = 0x884f;
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
export const TIMEOUT_IGNORED = 0x10000000000000000;
export const SYNC_FLUSH_COMMANDS_BIT = 0x1;
export const SAMPLE_POSITION = 0x8e50;
export const SAMPLE_MASK = 0x8e51;
export const SAMPLE_MASK_VALUE = 0x8e52;
export const MAX_SAMPLE_MASK_WORDS = 0x8e59;
export const TEXTURE_2D_MULTISAMPLE = 0x9100;
export const PROXY_TEXTURE_2D_MULTISAMPLE = 0x9101;
export const TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9102;
export const PROXY_TEXTURE_2D_MULTISAMPLE_ARRAY = 0x9103;
export const TEXTURE_BINDING_2D_MULTISAMPLE = 0x9104;
export const TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY = 0x9105;
export const TEXTURE_SAMPLES = 0x9106;
export const TEXTURE_FIXED_SAMPLE_LOCATIONS = 0x9107;
export const SAMPLER_2D_MULTISAMPLE = 0x9108;
export const INT_SAMPLER_2D_MULTISAMPLE = 0x9109;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE = 0x910a;
export const SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910b;
export const INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910c;
export const UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY = 0x910d;
export const MAX_COLOR_TEXTURE_SAMPLES = 0x910e;
export const MAX_DEPTH_TEXTURE_SAMPLES = 0x910f;
export const MAX_INTEGER_SAMPLES = 0x9110;

/// Commands

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

export const def_glPolygonMode = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glPolygonMode!: Deno.UnsafeFnPointer<typeof def_glPolygonMode>;

export function PolygonMode(
  face: GLenum,
  mode: GLenum,
): void {
  fn_glPolygonMode.call(
    face,
    mode,
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

export const def_glTexImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexImage1D!: Deno.UnsafeFnPointer<typeof def_glTexImage1D>;

export function TexImage1D(
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage1D.call(
    target,
    level,
    internalformat,
    width,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTexImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
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

export const def_glDrawBuffer = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDrawBuffer!: Deno.UnsafeFnPointer<typeof def_glDrawBuffer>;

export function DrawBuffer(
  buf: GLenum,
): void {
  fn_glDrawBuffer.call(
    buf,
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

export const def_glClearDepth = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glClearDepth!: Deno.UnsafeFnPointer<typeof def_glClearDepth>;

export function ClearDepth(
  depth: GLdouble,
): void {
  fn_glClearDepth.call(
    depth,
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

export const def_glPixelStoref = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPixelStoref!: Deno.UnsafeFnPointer<typeof def_glPixelStoref>;

export function PixelStoref(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPixelStoref.call(
    pname,
    param,
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

export const def_glGetDoublev = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDoublev!: Deno.UnsafeFnPointer<typeof def_glGetDoublev>;

export function GetDoublev(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetDoublev.call(
    pname,
    bufferToFFI(data),
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

export const def_glGetTexImage = {
  parameters: ["u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexImage!: Deno.UnsafeFnPointer<typeof def_glGetTexImage>;

export function GetTexImage(
  target: GLenum,
  level: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glGetTexImage.call(
    target,
    level,
    format,
    type,
    bufferToFFI(pixels),
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

export const def_glGetTexLevelParameterfv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexLevelParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetTexLevelParameterfv>;

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

export const def_glGetTexLevelParameteriv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexLevelParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetTexLevelParameteriv>;

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

export const def_glDepthRange = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glDepthRange!: Deno.UnsafeFnPointer<typeof def_glDepthRange>;

export function DepthRange(
  n: GLdouble,
  f: GLdouble,
): void {
  fn_glDepthRange.call(
    n,
    f,
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

export const def_glCopyTexImage1D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexImage1D!: Deno.UnsafeFnPointer<typeof def_glCopyTexImage1D>;

export function CopyTexImage1D(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  border: GLint,
): void {
  fn_glCopyTexImage1D.call(
    target,
    level,
    internalformat,
    x,
    y,
    width,
    border,
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

export const def_glCopyTexSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage1D!: Deno.UnsafeFnPointer<typeof def_glCopyTexSubImage1D>;

export function CopyTexSubImage1D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyTexSubImage1D.call(
    target,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyTexSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage2D!: Deno.UnsafeFnPointer<typeof def_glCopyTexSubImage2D>;

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

export const def_glTexSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexSubImage1D!: Deno.UnsafeFnPointer<typeof def_glTexSubImage1D>;

export function TexSubImage1D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexSubImage1D.call(
    target,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
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

export const def_glTexImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
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
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
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

let fn_glCopyTexSubImage3D!: Deno.UnsafeFnPointer<typeof def_glCopyTexSubImage3D>;

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

export const def_glCompressedTexImage3D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage3D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage3D>;

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

export const def_glCompressedTexImage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage2D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage2D>;

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

export const def_glCompressedTexImage1D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage1D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexImage1D>;

export function CompressedTexImage1D(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexImage1D.call(
    target,
    level,
    internalformat,
    width,
    border,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTexSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage3D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage3D>;

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

export const def_glCompressedTexSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage1D!: Deno.UnsafeFnPointer<typeof def_glCompressedTexSubImage1D>;

export function CompressedTexSubImage1D(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTexSubImage1D.call(
    target,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glGetCompressedTexImage = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTexImage!: Deno.UnsafeFnPointer<typeof def_glGetCompressedTexImage>;

export function GetCompressedTexImage(
  target: GLenum,
  level: GLint,
  img: Buffer,
): void {
  fn_glGetCompressedTexImage.call(
    target,
    level,
    bufferToFFI(img),
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

export const def_glMultiDrawArrays = {
  parameters: ["u32", "buffer", "buffer", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawArrays!: Deno.UnsafeFnPointer<typeof def_glMultiDrawArrays>;

export function MultiDrawArrays(
  mode: GLenum,
  first: Buffer,
  count: Buffer,
  drawcount: GLsizei,
): void {
  fn_glMultiDrawArrays.call(
    mode,
    bufferToFFI(first),
    bufferToFFI(count),
    drawcount,
  );
}

export const def_glMultiDrawElements = {
  parameters: ["u32", "buffer", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawElements!: Deno.UnsafeFnPointer<typeof def_glMultiDrawElements>;

export function MultiDrawElements(
  mode: GLenum,
  count: Buffer,
  type: GLenum,
  indices: Buffer,
  drawcount: GLsizei,
): void {
  fn_glMultiDrawElements.call(
    mode,
    bufferToFFI(count),
    type,
    bufferToFFI(indices),
    drawcount,
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

export const def_glPointParameteri = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPointParameteri!: Deno.UnsafeFnPointer<typeof def_glPointParameteri>;

export function PointParameteri(
  pname: GLenum,
  param: GLint,
): void {
  fn_glPointParameteri.call(
    pname,
    param,
  );
}

export const def_glPointParameteriv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameteriv!: Deno.UnsafeFnPointer<typeof def_glPointParameteriv>;

export function PointParameteriv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameteriv.call(
    pname,
    bufferToFFI(params),
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

export const def_glGetQueryObjectiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectiv!: Deno.UnsafeFnPointer<typeof def_glGetQueryObjectiv>;

export function GetQueryObjectiv(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectiv.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectuiv!: Deno.UnsafeFnPointer<typeof def_glGetQueryObjectuiv>;

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
    Deno.UnsafePointer.value(size),
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
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glGetBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferSubData!: Deno.UnsafeFnPointer<typeof def_glGetBufferSubData>;

export function GetBufferSubData(
  target: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glGetBufferSubData.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glMapBuffer = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glMapBuffer!: Deno.UnsafeFnPointer<typeof def_glMapBuffer>;

export function MapBuffer(
  target: GLenum,
  access: GLenum,
): Buffer {
  return fn_glMapBuffer.call(
    target,
    access,
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

export const def_glGetBufferPointerv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferPointerv!: Deno.UnsafeFnPointer<typeof def_glGetBufferPointerv>;

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

let fn_glBindAttribLocation!: Deno.UnsafeFnPointer<typeof def_glBindAttribLocation>;

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

let fn_glGetAttachedShaders!: Deno.UnsafeFnPointer<typeof def_glGetAttachedShaders>;

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

let fn_glGetProgramInfoLog!: Deno.UnsafeFnPointer<typeof def_glGetProgramInfoLog>;

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

export const def_glGetVertexAttribdv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribdv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribdv>;

export function GetVertexAttribdv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribdv.call(
    index,
    pname,
    bufferToFFI(params),
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

export const def_glVertexAttrib1d = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib1d!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1d>;

export function VertexAttrib1d(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttrib1d.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1dv>;

export function VertexAttrib1dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1dv.call(
    index,
    bufferToFFI(v),
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

export const def_glVertexAttrib1s = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib1s!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1s>;

export function VertexAttrib1s(
  index: GLuint,
  x: GLshort,
): void {
  fn_glVertexAttrib1s.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1sv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1sv>;

export function VertexAttrib1sv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1sv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2d = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib2d!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2d>;

export function VertexAttrib2d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttrib2d.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2dv>;

export function VertexAttrib2dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2dv.call(
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

export const def_glVertexAttrib2s = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib2s!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2s>;

export function VertexAttrib2s(
  index: GLuint,
  x: GLshort,
  y: GLshort,
): void {
  fn_glVertexAttrib2s.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2sv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2sv>;

export function VertexAttrib2sv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2sv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3d = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib3d!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3d>;

export function VertexAttrib3d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttrib3d.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3dv>;

export function VertexAttrib3dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3dv.call(
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

export const def_glVertexAttrib3s = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib3s!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3s>;

export function VertexAttrib3s(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glVertexAttrib3s.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3sv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3sv>;

export function VertexAttrib3sv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3sv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Nbv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nbv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nbv>;

export function VertexAttrib4Nbv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Nbv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Niv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Niv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Niv>;

export function VertexAttrib4Niv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Niv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Nsv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nsv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nsv>;

export function VertexAttrib4Nsv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Nsv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Nub = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nub!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nub>;

export function VertexAttrib4Nub(
  index: GLuint,
  x: GLubyte,
  y: GLubyte,
  z: GLubyte,
  w: GLubyte,
): void {
  fn_glVertexAttrib4Nub.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4Nubv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nubv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nubv>;

export function VertexAttrib4Nubv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Nubv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Nuiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nuiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nuiv>;

export function VertexAttrib4Nuiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Nuiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4Nusv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4Nusv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4Nusv>;

export function VertexAttrib4Nusv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4Nusv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4bv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4bv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4bv>;

export function VertexAttrib4bv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4bv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4d = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib4d!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4d>;

export function VertexAttrib4d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttrib4d.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4dv>;

export function VertexAttrib4dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4dv.call(
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

export const def_glVertexAttrib4iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4iv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4iv>;

export function VertexAttrib4iv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4iv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4s = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib4s!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4s>;

export function VertexAttrib4s(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glVertexAttrib4s.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4sv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4sv>;

export function VertexAttrib4sv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4sv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4ubv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4ubv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4ubv>;

export function VertexAttrib4ubv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4ubv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4uiv>;

export function VertexAttrib4uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4usv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4usv!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4usv>;

export function VertexAttrib4usv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4usv.call(
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

export const def_glUniformMatrix2x3fv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x3fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x3fv>;

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

let fn_glUniformMatrix3x2fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x2fv>;

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

let fn_glUniformMatrix2x4fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x4fv>;

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

let fn_glUniformMatrix4x2fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x2fv>;

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

let fn_glUniformMatrix3x4fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x4fv>;

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

let fn_glUniformMatrix4x3fv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x3fv>;

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

export const def_glBeginTransformFeedback = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glBeginTransformFeedback>;

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

let fn_glEndTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glEndTransformFeedback>;

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
    Deno.UnsafePointer.value(size),
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

let fn_glTransformFeedbackVaryings!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackVaryings>;

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

let fn_glGetTransformFeedbackVarying!: Deno.UnsafeFnPointer<typeof def_glGetTransformFeedbackVarying>;

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

export const def_glClampColor = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glClampColor!: Deno.UnsafeFnPointer<typeof def_glClampColor>;

export function ClampColor(
  target: GLenum,
  clamp: GLenum,
): void {
  fn_glClampColor.call(
    target,
    clamp,
  );
}

export const def_glBeginConditionalRender = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBeginConditionalRender!: Deno.UnsafeFnPointer<typeof def_glBeginConditionalRender>;

export function BeginConditionalRender(
  id: GLuint,
  mode: GLenum,
): void {
  fn_glBeginConditionalRender.call(
    id,
    mode,
  );
}

export const def_glEndConditionalRender = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndConditionalRender!: Deno.UnsafeFnPointer<typeof def_glEndConditionalRender>;

export function EndConditionalRender(): void {
  fn_glEndConditionalRender.call();
}

export const def_glVertexAttribIPointer = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribIPointer!: Deno.UnsafeFnPointer<typeof def_glVertexAttribIPointer>;

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

let fn_glGetVertexAttribIiv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribIiv>;

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

let fn_glGetVertexAttribIuiv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribIuiv>;

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

export const def_glVertexAttribI1i = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI1i!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1i>;

export function VertexAttribI1i(
  index: GLuint,
  x: GLint,
): void {
  fn_glVertexAttribI1i.call(
    index,
    x,
  );
}

export const def_glVertexAttribI2i = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI2i!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2i>;

export function VertexAttribI2i(
  index: GLuint,
  x: GLint,
  y: GLint,
): void {
  fn_glVertexAttribI2i.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribI3i = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI3i!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3i>;

export function VertexAttribI3i(
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glVertexAttribI3i.call(
    index,
    x,
    y,
    z,
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

export const def_glVertexAttribI1ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI1ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1ui>;

export function VertexAttribI1ui(
  index: GLuint,
  x: GLuint,
): void {
  fn_glVertexAttribI1ui.call(
    index,
    x,
  );
}

export const def_glVertexAttribI2ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI2ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2ui>;

export function VertexAttribI2ui(
  index: GLuint,
  x: GLuint,
  y: GLuint,
): void {
  fn_glVertexAttribI2ui.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribI3ui = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI3ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3ui>;

export function VertexAttribI3ui(
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
): void {
  fn_glVertexAttribI3ui.call(
    index,
    x,
    y,
    z,
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

export const def_glVertexAttribI1iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI1iv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1iv>;

export function VertexAttribI1iv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI1iv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI2iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI2iv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2iv>;

export function VertexAttribI2iv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI2iv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI3iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI3iv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3iv>;

export function VertexAttribI3iv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI3iv.call(
    index,
    bufferToFFI(v),
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

export const def_glVertexAttribI1uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI1uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1uiv>;

export function VertexAttribI1uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI1uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI2uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI2uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2uiv>;

export function VertexAttribI2uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI2uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI3uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3uiv>;

export function VertexAttribI3uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI3uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4uiv>;

export function VertexAttribI4uiv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4uiv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4bv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4bv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4bv>;

export function VertexAttribI4bv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4bv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4sv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4sv>;

export function VertexAttribI4sv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4sv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4ubv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4ubv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4ubv>;

export function VertexAttribI4ubv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4ubv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4usv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4usv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4usv>;

export function VertexAttribI4usv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4usv.call(
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

export const def_glBindFragDataLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindFragDataLocation!: Deno.UnsafeFnPointer<typeof def_glBindFragDataLocation>;

export function BindFragDataLocation(
  program: GLuint,
  color: GLuint,
  name: Buffer,
): void {
  fn_glBindFragDataLocation.call(
    program,
    color,
    bufferToFFI(name),
  );
}

export const def_glGetFragDataLocation = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetFragDataLocation!: Deno.UnsafeFnPointer<typeof def_glGetFragDataLocation>;

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

let fn_glGetTexParameterIiv!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIiv>;

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

let fn_glGetTexParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIuiv>;

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

export const def_glDeleteRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteRenderbuffers!: Deno.UnsafeFnPointer<typeof def_glDeleteRenderbuffers>;

export function DeleteRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glDeleteRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
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

export const def_glDeleteFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFramebuffers!: Deno.UnsafeFnPointer<typeof def_glDeleteFramebuffers>;

export function DeleteFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glDeleteFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
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

export const def_glFramebufferTexture1D = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture1D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture1D>;

export function FramebufferTexture1D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture1D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
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

export const def_glFramebufferTexture3D = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture3D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture3D>;

export function FramebufferTexture3D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  zoffset: GLint,
): void {
  fn_glFramebufferTexture3D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    zoffset,
  );
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

export const def_glBlitFramebuffer = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32"],
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

let fn_glRenderbufferStorageMultisample!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorageMultisample>;

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

let fn_glFramebufferTextureLayer!: Deno.UnsafeFnPointer<typeof def_glFramebufferTextureLayer>;

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
    Deno.UnsafePointer.value(length),
    access,
  );
}

export const def_glFlushMappedBufferRange = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedBufferRange!: Deno.UnsafeFnPointer<typeof def_glFlushMappedBufferRange>;

export function FlushMappedBufferRange(
  target: GLenum,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedBufferRange.call(
    target,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
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

let fn_glDeleteVertexArrays!: Deno.UnsafeFnPointer<typeof def_glDeleteVertexArrays>;

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

export const def_glDrawArraysInstanced = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArraysInstanced!: Deno.UnsafeFnPointer<typeof def_glDrawArraysInstanced>;

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

let fn_glDrawElementsInstanced!: Deno.UnsafeFnPointer<typeof def_glDrawElementsInstanced>;

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

export const def_glPrimitiveRestartIndex = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPrimitiveRestartIndex!: Deno.UnsafeFnPointer<typeof def_glPrimitiveRestartIndex>;

export function PrimitiveRestartIndex(
  index: GLuint,
): void {
  fn_glPrimitiveRestartIndex.call(
    index,
  );
}

export const def_glCopyBufferSubData = {
  parameters: ["u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glCopyBufferSubData!: Deno.UnsafeFnPointer<typeof def_glCopyBufferSubData>;

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
    Deno.UnsafePointer.value(size),
  );
}

export const def_glGetUniformIndices = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformIndices!: Deno.UnsafeFnPointer<typeof def_glGetUniformIndices>;

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

let fn_glGetActiveUniformsiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniformsiv>;

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

export const def_glGetActiveUniformName = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveUniformName!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniformName>;

export function GetActiveUniformName(
  program: GLuint,
  uniformIndex: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  uniformName: Buffer,
): void {
  fn_glGetActiveUniformName.call(
    program,
    uniformIndex,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(uniformName),
  );
}

export const def_glGetUniformBlockIndex = {
  parameters: ["u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetUniformBlockIndex!: Deno.UnsafeFnPointer<typeof def_glGetUniformBlockIndex>;

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

let fn_glGetActiveUniformBlockiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniformBlockiv>;

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

let fn_glGetActiveUniformBlockName!: Deno.UnsafeFnPointer<typeof def_glGetActiveUniformBlockName>;

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

let fn_glUniformBlockBinding!: Deno.UnsafeFnPointer<typeof def_glUniformBlockBinding>;

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

export const def_glDrawElementsBaseVertex = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsBaseVertex!: Deno.UnsafeFnPointer<typeof def_glDrawElementsBaseVertex>;

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

let fn_glDrawRangeElementsBaseVertex!: Deno.UnsafeFnPointer<typeof def_glDrawRangeElementsBaseVertex>;

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

let fn_glDrawElementsInstancedBaseVertex!: Deno.UnsafeFnPointer<typeof def_glDrawElementsInstancedBaseVertex>;

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

export const def_glMultiDrawElementsBaseVertex = {
  parameters: ["u32", "buffer", "u32", "buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMultiDrawElementsBaseVertex!: Deno.UnsafeFnPointer<typeof def_glMultiDrawElementsBaseVertex>;

export function MultiDrawElementsBaseVertex(
  mode: GLenum,
  count: Buffer,
  type: GLenum,
  indices: Buffer,
  drawcount: GLsizei,
  basevertex: Buffer,
): void {
  fn_glMultiDrawElementsBaseVertex.call(
    mode,
    bufferToFFI(count),
    type,
    bufferToFFI(indices),
    drawcount,
    bufferToFFI(basevertex),
  );
}

export const def_glProvokingVertex = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glProvokingVertex!: Deno.UnsafeFnPointer<typeof def_glProvokingVertex>;

export function ProvokingVertex(
  mode: GLenum,
): void {
  fn_glProvokingVertex.call(
    mode,
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
    Deno.UnsafePointer.value(timeout),
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
    Deno.UnsafePointer.value(timeout),
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

let fn_glGetBufferParameteri64v!: Deno.UnsafeFnPointer<typeof def_glGetBufferParameteri64v>;

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

export const def_glFramebufferTexture = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture>;

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

export const def_glTexImage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage2DMultisample!: Deno.UnsafeFnPointer<typeof def_glTexImage2DMultisample>;

export function TexImage2DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexImage2DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glTexImage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexImage3DMultisample!: Deno.UnsafeFnPointer<typeof def_glTexImage3DMultisample>;

export function TexImage3DMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTexImage3DMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
    depth,
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

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCullFace = new Deno.UnsafeFnPointer(proc("glCullFace")!, def_glCullFace);
  fn_glFrontFace = new Deno.UnsafeFnPointer(proc("glFrontFace")!, def_glFrontFace);
  fn_glHint = new Deno.UnsafeFnPointer(proc("glHint")!, def_glHint);
  fn_glLineWidth = new Deno.UnsafeFnPointer(proc("glLineWidth")!, def_glLineWidth);
  fn_glPointSize = new Deno.UnsafeFnPointer(proc("glPointSize")!, def_glPointSize);
  fn_glPolygonMode = new Deno.UnsafeFnPointer(proc("glPolygonMode")!, def_glPolygonMode);
  fn_glScissor = new Deno.UnsafeFnPointer(proc("glScissor")!, def_glScissor);
  fn_glTexParameterf = new Deno.UnsafeFnPointer(proc("glTexParameterf")!, def_glTexParameterf);
  fn_glTexParameterfv = new Deno.UnsafeFnPointer(proc("glTexParameterfv")!, def_glTexParameterfv);
  fn_glTexParameteri = new Deno.UnsafeFnPointer(proc("glTexParameteri")!, def_glTexParameteri);
  fn_glTexParameteriv = new Deno.UnsafeFnPointer(proc("glTexParameteriv")!, def_glTexParameteriv);
  fn_glTexImage1D = new Deno.UnsafeFnPointer(proc("glTexImage1D")!, def_glTexImage1D);
  fn_glTexImage2D = new Deno.UnsafeFnPointer(proc("glTexImage2D")!, def_glTexImage2D);
  fn_glDrawBuffer = new Deno.UnsafeFnPointer(proc("glDrawBuffer")!, def_glDrawBuffer);
  fn_glClear = new Deno.UnsafeFnPointer(proc("glClear")!, def_glClear);
  fn_glClearColor = new Deno.UnsafeFnPointer(proc("glClearColor")!, def_glClearColor);
  fn_glClearStencil = new Deno.UnsafeFnPointer(proc("glClearStencil")!, def_glClearStencil);
  fn_glClearDepth = new Deno.UnsafeFnPointer(proc("glClearDepth")!, def_glClearDepth);
  fn_glStencilMask = new Deno.UnsafeFnPointer(proc("glStencilMask")!, def_glStencilMask);
  fn_glColorMask = new Deno.UnsafeFnPointer(proc("glColorMask")!, def_glColorMask);
  fn_glDepthMask = new Deno.UnsafeFnPointer(proc("glDepthMask")!, def_glDepthMask);
  fn_glDisable = new Deno.UnsafeFnPointer(proc("glDisable")!, def_glDisable);
  fn_glEnable = new Deno.UnsafeFnPointer(proc("glEnable")!, def_glEnable);
  fn_glFinish = new Deno.UnsafeFnPointer(proc("glFinish")!, def_glFinish);
  fn_glFlush = new Deno.UnsafeFnPointer(proc("glFlush")!, def_glFlush);
  fn_glBlendFunc = new Deno.UnsafeFnPointer(proc("glBlendFunc")!, def_glBlendFunc);
  fn_glLogicOp = new Deno.UnsafeFnPointer(proc("glLogicOp")!, def_glLogicOp);
  fn_glStencilFunc = new Deno.UnsafeFnPointer(proc("glStencilFunc")!, def_glStencilFunc);
  fn_glStencilOp = new Deno.UnsafeFnPointer(proc("glStencilOp")!, def_glStencilOp);
  fn_glDepthFunc = new Deno.UnsafeFnPointer(proc("glDepthFunc")!, def_glDepthFunc);
  fn_glPixelStoref = new Deno.UnsafeFnPointer(proc("glPixelStoref")!, def_glPixelStoref);
  fn_glPixelStorei = new Deno.UnsafeFnPointer(proc("glPixelStorei")!, def_glPixelStorei);
  fn_glReadBuffer = new Deno.UnsafeFnPointer(proc("glReadBuffer")!, def_glReadBuffer);
  fn_glReadPixels = new Deno.UnsafeFnPointer(proc("glReadPixels")!, def_glReadPixels);
  fn_glGetBooleanv = new Deno.UnsafeFnPointer(proc("glGetBooleanv")!, def_glGetBooleanv);
  fn_glGetDoublev = new Deno.UnsafeFnPointer(proc("glGetDoublev")!, def_glGetDoublev);
  fn_glGetError = new Deno.UnsafeFnPointer(proc("glGetError")!, def_glGetError);
  fn_glGetFloatv = new Deno.UnsafeFnPointer(proc("glGetFloatv")!, def_glGetFloatv);
  fn_glGetIntegerv = new Deno.UnsafeFnPointer(proc("glGetIntegerv")!, def_glGetIntegerv);
  fn_glGetString = new Deno.UnsafeFnPointer(proc("glGetString")!, def_glGetString);
  fn_glGetTexImage = new Deno.UnsafeFnPointer(proc("glGetTexImage")!, def_glGetTexImage);
  fn_glGetTexParameterfv = new Deno.UnsafeFnPointer(proc("glGetTexParameterfv")!, def_glGetTexParameterfv);
  fn_glGetTexParameteriv = new Deno.UnsafeFnPointer(proc("glGetTexParameteriv")!, def_glGetTexParameteriv);
  fn_glGetTexLevelParameterfv = new Deno.UnsafeFnPointer(proc("glGetTexLevelParameterfv")!, def_glGetTexLevelParameterfv);
  fn_glGetTexLevelParameteriv = new Deno.UnsafeFnPointer(proc("glGetTexLevelParameteriv")!, def_glGetTexLevelParameteriv);
  fn_glIsEnabled = new Deno.UnsafeFnPointer(proc("glIsEnabled")!, def_glIsEnabled);
  fn_glDepthRange = new Deno.UnsafeFnPointer(proc("glDepthRange")!, def_glDepthRange);
  fn_glViewport = new Deno.UnsafeFnPointer(proc("glViewport")!, def_glViewport);
  fn_glDrawArrays = new Deno.UnsafeFnPointer(proc("glDrawArrays")!, def_glDrawArrays);
  fn_glDrawElements = new Deno.UnsafeFnPointer(proc("glDrawElements")!, def_glDrawElements);
  fn_glPolygonOffset = new Deno.UnsafeFnPointer(proc("glPolygonOffset")!, def_glPolygonOffset);
  fn_glCopyTexImage1D = new Deno.UnsafeFnPointer(proc("glCopyTexImage1D")!, def_glCopyTexImage1D);
  fn_glCopyTexImage2D = new Deno.UnsafeFnPointer(proc("glCopyTexImage2D")!, def_glCopyTexImage2D);
  fn_glCopyTexSubImage1D = new Deno.UnsafeFnPointer(proc("glCopyTexSubImage1D")!, def_glCopyTexSubImage1D);
  fn_glCopyTexSubImage2D = new Deno.UnsafeFnPointer(proc("glCopyTexSubImage2D")!, def_glCopyTexSubImage2D);
  fn_glTexSubImage1D = new Deno.UnsafeFnPointer(proc("glTexSubImage1D")!, def_glTexSubImage1D);
  fn_glTexSubImage2D = new Deno.UnsafeFnPointer(proc("glTexSubImage2D")!, def_glTexSubImage2D);
  fn_glBindTexture = new Deno.UnsafeFnPointer(proc("glBindTexture")!, def_glBindTexture);
  fn_glDeleteTextures = new Deno.UnsafeFnPointer(proc("glDeleteTextures")!, def_glDeleteTextures);
  fn_glGenTextures = new Deno.UnsafeFnPointer(proc("glGenTextures")!, def_glGenTextures);
  fn_glIsTexture = new Deno.UnsafeFnPointer(proc("glIsTexture")!, def_glIsTexture);
  fn_glDrawRangeElements = new Deno.UnsafeFnPointer(proc("glDrawRangeElements")!, def_glDrawRangeElements);
  fn_glTexImage3D = new Deno.UnsafeFnPointer(proc("glTexImage3D")!, def_glTexImage3D);
  fn_glTexSubImage3D = new Deno.UnsafeFnPointer(proc("glTexSubImage3D")!, def_glTexSubImage3D);
  fn_glCopyTexSubImage3D = new Deno.UnsafeFnPointer(proc("glCopyTexSubImage3D")!, def_glCopyTexSubImage3D);
  fn_glActiveTexture = new Deno.UnsafeFnPointer(proc("glActiveTexture")!, def_glActiveTexture);
  fn_glSampleCoverage = new Deno.UnsafeFnPointer(proc("glSampleCoverage")!, def_glSampleCoverage);
  fn_glCompressedTexImage3D = new Deno.UnsafeFnPointer(proc("glCompressedTexImage3D")!, def_glCompressedTexImage3D);
  fn_glCompressedTexImage2D = new Deno.UnsafeFnPointer(proc("glCompressedTexImage2D")!, def_glCompressedTexImage2D);
  fn_glCompressedTexImage1D = new Deno.UnsafeFnPointer(proc("glCompressedTexImage1D")!, def_glCompressedTexImage1D);
  fn_glCompressedTexSubImage3D = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage3D")!, def_glCompressedTexSubImage3D);
  fn_glCompressedTexSubImage2D = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage2D")!, def_glCompressedTexSubImage2D);
  fn_glCompressedTexSubImage1D = new Deno.UnsafeFnPointer(proc("glCompressedTexSubImage1D")!, def_glCompressedTexSubImage1D);
  fn_glGetCompressedTexImage = new Deno.UnsafeFnPointer(proc("glGetCompressedTexImage")!, def_glGetCompressedTexImage);
  fn_glBlendFuncSeparate = new Deno.UnsafeFnPointer(proc("glBlendFuncSeparate")!, def_glBlendFuncSeparate);
  fn_glMultiDrawArrays = new Deno.UnsafeFnPointer(proc("glMultiDrawArrays")!, def_glMultiDrawArrays);
  fn_glMultiDrawElements = new Deno.UnsafeFnPointer(proc("glMultiDrawElements")!, def_glMultiDrawElements);
  fn_glPointParameterf = new Deno.UnsafeFnPointer(proc("glPointParameterf")!, def_glPointParameterf);
  fn_glPointParameterfv = new Deno.UnsafeFnPointer(proc("glPointParameterfv")!, def_glPointParameterfv);
  fn_glPointParameteri = new Deno.UnsafeFnPointer(proc("glPointParameteri")!, def_glPointParameteri);
  fn_glPointParameteriv = new Deno.UnsafeFnPointer(proc("glPointParameteriv")!, def_glPointParameteriv);
  fn_glBlendColor = new Deno.UnsafeFnPointer(proc("glBlendColor")!, def_glBlendColor);
  fn_glBlendEquation = new Deno.UnsafeFnPointer(proc("glBlendEquation")!, def_glBlendEquation);
  fn_glGenQueries = new Deno.UnsafeFnPointer(proc("glGenQueries")!, def_glGenQueries);
  fn_glDeleteQueries = new Deno.UnsafeFnPointer(proc("glDeleteQueries")!, def_glDeleteQueries);
  fn_glIsQuery = new Deno.UnsafeFnPointer(proc("glIsQuery")!, def_glIsQuery);
  fn_glBeginQuery = new Deno.UnsafeFnPointer(proc("glBeginQuery")!, def_glBeginQuery);
  fn_glEndQuery = new Deno.UnsafeFnPointer(proc("glEndQuery")!, def_glEndQuery);
  fn_glGetQueryiv = new Deno.UnsafeFnPointer(proc("glGetQueryiv")!, def_glGetQueryiv);
  fn_glGetQueryObjectiv = new Deno.UnsafeFnPointer(proc("glGetQueryObjectiv")!, def_glGetQueryObjectiv);
  fn_glGetQueryObjectuiv = new Deno.UnsafeFnPointer(proc("glGetQueryObjectuiv")!, def_glGetQueryObjectuiv);
  fn_glBindBuffer = new Deno.UnsafeFnPointer(proc("glBindBuffer")!, def_glBindBuffer);
  fn_glDeleteBuffers = new Deno.UnsafeFnPointer(proc("glDeleteBuffers")!, def_glDeleteBuffers);
  fn_glGenBuffers = new Deno.UnsafeFnPointer(proc("glGenBuffers")!, def_glGenBuffers);
  fn_glIsBuffer = new Deno.UnsafeFnPointer(proc("glIsBuffer")!, def_glIsBuffer);
  fn_glBufferData = new Deno.UnsafeFnPointer(proc("glBufferData")!, def_glBufferData);
  fn_glBufferSubData = new Deno.UnsafeFnPointer(proc("glBufferSubData")!, def_glBufferSubData);
  fn_glGetBufferSubData = new Deno.UnsafeFnPointer(proc("glGetBufferSubData")!, def_glGetBufferSubData);
  fn_glMapBuffer = new Deno.UnsafeFnPointer(proc("glMapBuffer")!, def_glMapBuffer);
  fn_glUnmapBuffer = new Deno.UnsafeFnPointer(proc("glUnmapBuffer")!, def_glUnmapBuffer);
  fn_glGetBufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetBufferParameteriv")!, def_glGetBufferParameteriv);
  fn_glGetBufferPointerv = new Deno.UnsafeFnPointer(proc("glGetBufferPointerv")!, def_glGetBufferPointerv);
  fn_glBlendEquationSeparate = new Deno.UnsafeFnPointer(proc("glBlendEquationSeparate")!, def_glBlendEquationSeparate);
  fn_glDrawBuffers = new Deno.UnsafeFnPointer(proc("glDrawBuffers")!, def_glDrawBuffers);
  fn_glStencilOpSeparate = new Deno.UnsafeFnPointer(proc("glStencilOpSeparate")!, def_glStencilOpSeparate);
  fn_glStencilFuncSeparate = new Deno.UnsafeFnPointer(proc("glStencilFuncSeparate")!, def_glStencilFuncSeparate);
  fn_glStencilMaskSeparate = new Deno.UnsafeFnPointer(proc("glStencilMaskSeparate")!, def_glStencilMaskSeparate);
  fn_glAttachShader = new Deno.UnsafeFnPointer(proc("glAttachShader")!, def_glAttachShader);
  fn_glBindAttribLocation = new Deno.UnsafeFnPointer(proc("glBindAttribLocation")!, def_glBindAttribLocation);
  fn_glCompileShader = new Deno.UnsafeFnPointer(proc("glCompileShader")!, def_glCompileShader);
  fn_glCreateProgram = new Deno.UnsafeFnPointer(proc("glCreateProgram")!, def_glCreateProgram);
  fn_glCreateShader = new Deno.UnsafeFnPointer(proc("glCreateShader")!, def_glCreateShader);
  fn_glDeleteProgram = new Deno.UnsafeFnPointer(proc("glDeleteProgram")!, def_glDeleteProgram);
  fn_glDeleteShader = new Deno.UnsafeFnPointer(proc("glDeleteShader")!, def_glDeleteShader);
  fn_glDetachShader = new Deno.UnsafeFnPointer(proc("glDetachShader")!, def_glDetachShader);
  fn_glDisableVertexAttribArray = new Deno.UnsafeFnPointer(proc("glDisableVertexAttribArray")!, def_glDisableVertexAttribArray);
  fn_glEnableVertexAttribArray = new Deno.UnsafeFnPointer(proc("glEnableVertexAttribArray")!, def_glEnableVertexAttribArray);
  fn_glGetActiveAttrib = new Deno.UnsafeFnPointer(proc("glGetActiveAttrib")!, def_glGetActiveAttrib);
  fn_glGetActiveUniform = new Deno.UnsafeFnPointer(proc("glGetActiveUniform")!, def_glGetActiveUniform);
  fn_glGetAttachedShaders = new Deno.UnsafeFnPointer(proc("glGetAttachedShaders")!, def_glGetAttachedShaders);
  fn_glGetAttribLocation = new Deno.UnsafeFnPointer(proc("glGetAttribLocation")!, def_glGetAttribLocation);
  fn_glGetProgramiv = new Deno.UnsafeFnPointer(proc("glGetProgramiv")!, def_glGetProgramiv);
  fn_glGetProgramInfoLog = new Deno.UnsafeFnPointer(proc("glGetProgramInfoLog")!, def_glGetProgramInfoLog);
  fn_glGetShaderiv = new Deno.UnsafeFnPointer(proc("glGetShaderiv")!, def_glGetShaderiv);
  fn_glGetShaderInfoLog = new Deno.UnsafeFnPointer(proc("glGetShaderInfoLog")!, def_glGetShaderInfoLog);
  fn_glGetShaderSource = new Deno.UnsafeFnPointer(proc("glGetShaderSource")!, def_glGetShaderSource);
  fn_glGetUniformLocation = new Deno.UnsafeFnPointer(proc("glGetUniformLocation")!, def_glGetUniformLocation);
  fn_glGetUniformfv = new Deno.UnsafeFnPointer(proc("glGetUniformfv")!, def_glGetUniformfv);
  fn_glGetUniformiv = new Deno.UnsafeFnPointer(proc("glGetUniformiv")!, def_glGetUniformiv);
  fn_glGetVertexAttribdv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribdv")!, def_glGetVertexAttribdv);
  fn_glGetVertexAttribfv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribfv")!, def_glGetVertexAttribfv);
  fn_glGetVertexAttribiv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribiv")!, def_glGetVertexAttribiv);
  fn_glGetVertexAttribPointerv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribPointerv")!, def_glGetVertexAttribPointerv);
  fn_glIsProgram = new Deno.UnsafeFnPointer(proc("glIsProgram")!, def_glIsProgram);
  fn_glIsShader = new Deno.UnsafeFnPointer(proc("glIsShader")!, def_glIsShader);
  fn_glLinkProgram = new Deno.UnsafeFnPointer(proc("glLinkProgram")!, def_glLinkProgram);
  fn_glShaderSource = new Deno.UnsafeFnPointer(proc("glShaderSource")!, def_glShaderSource);
  fn_glUseProgram = new Deno.UnsafeFnPointer(proc("glUseProgram")!, def_glUseProgram);
  fn_glUniform1f = new Deno.UnsafeFnPointer(proc("glUniform1f")!, def_glUniform1f);
  fn_glUniform2f = new Deno.UnsafeFnPointer(proc("glUniform2f")!, def_glUniform2f);
  fn_glUniform3f = new Deno.UnsafeFnPointer(proc("glUniform3f")!, def_glUniform3f);
  fn_glUniform4f = new Deno.UnsafeFnPointer(proc("glUniform4f")!, def_glUniform4f);
  fn_glUniform1i = new Deno.UnsafeFnPointer(proc("glUniform1i")!, def_glUniform1i);
  fn_glUniform2i = new Deno.UnsafeFnPointer(proc("glUniform2i")!, def_glUniform2i);
  fn_glUniform3i = new Deno.UnsafeFnPointer(proc("glUniform3i")!, def_glUniform3i);
  fn_glUniform4i = new Deno.UnsafeFnPointer(proc("glUniform4i")!, def_glUniform4i);
  fn_glUniform1fv = new Deno.UnsafeFnPointer(proc("glUniform1fv")!, def_glUniform1fv);
  fn_glUniform2fv = new Deno.UnsafeFnPointer(proc("glUniform2fv")!, def_glUniform2fv);
  fn_glUniform3fv = new Deno.UnsafeFnPointer(proc("glUniform3fv")!, def_glUniform3fv);
  fn_glUniform4fv = new Deno.UnsafeFnPointer(proc("glUniform4fv")!, def_glUniform4fv);
  fn_glUniform1iv = new Deno.UnsafeFnPointer(proc("glUniform1iv")!, def_glUniform1iv);
  fn_glUniform2iv = new Deno.UnsafeFnPointer(proc("glUniform2iv")!, def_glUniform2iv);
  fn_glUniform3iv = new Deno.UnsafeFnPointer(proc("glUniform3iv")!, def_glUniform3iv);
  fn_glUniform4iv = new Deno.UnsafeFnPointer(proc("glUniform4iv")!, def_glUniform4iv);
  fn_glUniformMatrix2fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2fv")!, def_glUniformMatrix2fv);
  fn_glUniformMatrix3fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3fv")!, def_glUniformMatrix3fv);
  fn_glUniformMatrix4fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4fv")!, def_glUniformMatrix4fv);
  fn_glValidateProgram = new Deno.UnsafeFnPointer(proc("glValidateProgram")!, def_glValidateProgram);
  fn_glVertexAttrib1d = new Deno.UnsafeFnPointer(proc("glVertexAttrib1d")!, def_glVertexAttrib1d);
  fn_glVertexAttrib1dv = new Deno.UnsafeFnPointer(proc("glVertexAttrib1dv")!, def_glVertexAttrib1dv);
  fn_glVertexAttrib1f = new Deno.UnsafeFnPointer(proc("glVertexAttrib1f")!, def_glVertexAttrib1f);
  fn_glVertexAttrib1fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib1fv")!, def_glVertexAttrib1fv);
  fn_glVertexAttrib1s = new Deno.UnsafeFnPointer(proc("glVertexAttrib1s")!, def_glVertexAttrib1s);
  fn_glVertexAttrib1sv = new Deno.UnsafeFnPointer(proc("glVertexAttrib1sv")!, def_glVertexAttrib1sv);
  fn_glVertexAttrib2d = new Deno.UnsafeFnPointer(proc("glVertexAttrib2d")!, def_glVertexAttrib2d);
  fn_glVertexAttrib2dv = new Deno.UnsafeFnPointer(proc("glVertexAttrib2dv")!, def_glVertexAttrib2dv);
  fn_glVertexAttrib2f = new Deno.UnsafeFnPointer(proc("glVertexAttrib2f")!, def_glVertexAttrib2f);
  fn_glVertexAttrib2fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib2fv")!, def_glVertexAttrib2fv);
  fn_glVertexAttrib2s = new Deno.UnsafeFnPointer(proc("glVertexAttrib2s")!, def_glVertexAttrib2s);
  fn_glVertexAttrib2sv = new Deno.UnsafeFnPointer(proc("glVertexAttrib2sv")!, def_glVertexAttrib2sv);
  fn_glVertexAttrib3d = new Deno.UnsafeFnPointer(proc("glVertexAttrib3d")!, def_glVertexAttrib3d);
  fn_glVertexAttrib3dv = new Deno.UnsafeFnPointer(proc("glVertexAttrib3dv")!, def_glVertexAttrib3dv);
  fn_glVertexAttrib3f = new Deno.UnsafeFnPointer(proc("glVertexAttrib3f")!, def_glVertexAttrib3f);
  fn_glVertexAttrib3fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib3fv")!, def_glVertexAttrib3fv);
  fn_glVertexAttrib3s = new Deno.UnsafeFnPointer(proc("glVertexAttrib3s")!, def_glVertexAttrib3s);
  fn_glVertexAttrib3sv = new Deno.UnsafeFnPointer(proc("glVertexAttrib3sv")!, def_glVertexAttrib3sv);
  fn_glVertexAttrib4Nbv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nbv")!, def_glVertexAttrib4Nbv);
  fn_glVertexAttrib4Niv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Niv")!, def_glVertexAttrib4Niv);
  fn_glVertexAttrib4Nsv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nsv")!, def_glVertexAttrib4Nsv);
  fn_glVertexAttrib4Nub = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nub")!, def_glVertexAttrib4Nub);
  fn_glVertexAttrib4Nubv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nubv")!, def_glVertexAttrib4Nubv);
  fn_glVertexAttrib4Nuiv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nuiv")!, def_glVertexAttrib4Nuiv);
  fn_glVertexAttrib4Nusv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4Nusv")!, def_glVertexAttrib4Nusv);
  fn_glVertexAttrib4bv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4bv")!, def_glVertexAttrib4bv);
  fn_glVertexAttrib4d = new Deno.UnsafeFnPointer(proc("glVertexAttrib4d")!, def_glVertexAttrib4d);
  fn_glVertexAttrib4dv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4dv")!, def_glVertexAttrib4dv);
  fn_glVertexAttrib4f = new Deno.UnsafeFnPointer(proc("glVertexAttrib4f")!, def_glVertexAttrib4f);
  fn_glVertexAttrib4fv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4fv")!, def_glVertexAttrib4fv);
  fn_glVertexAttrib4iv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4iv")!, def_glVertexAttrib4iv);
  fn_glVertexAttrib4s = new Deno.UnsafeFnPointer(proc("glVertexAttrib4s")!, def_glVertexAttrib4s);
  fn_glVertexAttrib4sv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4sv")!, def_glVertexAttrib4sv);
  fn_glVertexAttrib4ubv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4ubv")!, def_glVertexAttrib4ubv);
  fn_glVertexAttrib4uiv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4uiv")!, def_glVertexAttrib4uiv);
  fn_glVertexAttrib4usv = new Deno.UnsafeFnPointer(proc("glVertexAttrib4usv")!, def_glVertexAttrib4usv);
  fn_glVertexAttribPointer = new Deno.UnsafeFnPointer(proc("glVertexAttribPointer")!, def_glVertexAttribPointer);
  fn_glUniformMatrix2x3fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x3fv")!, def_glUniformMatrix2x3fv);
  fn_glUniformMatrix3x2fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x2fv")!, def_glUniformMatrix3x2fv);
  fn_glUniformMatrix2x4fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x4fv")!, def_glUniformMatrix2x4fv);
  fn_glUniformMatrix4x2fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x2fv")!, def_glUniformMatrix4x2fv);
  fn_glUniformMatrix3x4fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x4fv")!, def_glUniformMatrix3x4fv);
  fn_glUniformMatrix4x3fv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x3fv")!, def_glUniformMatrix4x3fv);
  fn_glColorMaski = new Deno.UnsafeFnPointer(proc("glColorMaski")!, def_glColorMaski);
  fn_glGetBooleani_v = new Deno.UnsafeFnPointer(proc("glGetBooleani_v")!, def_glGetBooleani_v);
  fn_glGetIntegeri_v = new Deno.UnsafeFnPointer(proc("glGetIntegeri_v")!, def_glGetIntegeri_v);
  fn_glEnablei = new Deno.UnsafeFnPointer(proc("glEnablei")!, def_glEnablei);
  fn_glDisablei = new Deno.UnsafeFnPointer(proc("glDisablei")!, def_glDisablei);
  fn_glIsEnabledi = new Deno.UnsafeFnPointer(proc("glIsEnabledi")!, def_glIsEnabledi);
  fn_glBeginTransformFeedback = new Deno.UnsafeFnPointer(proc("glBeginTransformFeedback")!, def_glBeginTransformFeedback);
  fn_glEndTransformFeedback = new Deno.UnsafeFnPointer(proc("glEndTransformFeedback")!, def_glEndTransformFeedback);
  fn_glBindBufferRange = new Deno.UnsafeFnPointer(proc("glBindBufferRange")!, def_glBindBufferRange);
  fn_glBindBufferBase = new Deno.UnsafeFnPointer(proc("glBindBufferBase")!, def_glBindBufferBase);
  fn_glTransformFeedbackVaryings = new Deno.UnsafeFnPointer(proc("glTransformFeedbackVaryings")!, def_glTransformFeedbackVaryings);
  fn_glGetTransformFeedbackVarying = new Deno.UnsafeFnPointer(proc("glGetTransformFeedbackVarying")!, def_glGetTransformFeedbackVarying);
  fn_glClampColor = new Deno.UnsafeFnPointer(proc("glClampColor")!, def_glClampColor);
  fn_glBeginConditionalRender = new Deno.UnsafeFnPointer(proc("glBeginConditionalRender")!, def_glBeginConditionalRender);
  fn_glEndConditionalRender = new Deno.UnsafeFnPointer(proc("glEndConditionalRender")!, def_glEndConditionalRender);
  fn_glVertexAttribIPointer = new Deno.UnsafeFnPointer(proc("glVertexAttribIPointer")!, def_glVertexAttribIPointer);
  fn_glGetVertexAttribIiv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribIiv")!, def_glGetVertexAttribIiv);
  fn_glGetVertexAttribIuiv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribIuiv")!, def_glGetVertexAttribIuiv);
  fn_glVertexAttribI1i = new Deno.UnsafeFnPointer(proc("glVertexAttribI1i")!, def_glVertexAttribI1i);
  fn_glVertexAttribI2i = new Deno.UnsafeFnPointer(proc("glVertexAttribI2i")!, def_glVertexAttribI2i);
  fn_glVertexAttribI3i = new Deno.UnsafeFnPointer(proc("glVertexAttribI3i")!, def_glVertexAttribI3i);
  fn_glVertexAttribI4i = new Deno.UnsafeFnPointer(proc("glVertexAttribI4i")!, def_glVertexAttribI4i);
  fn_glVertexAttribI1ui = new Deno.UnsafeFnPointer(proc("glVertexAttribI1ui")!, def_glVertexAttribI1ui);
  fn_glVertexAttribI2ui = new Deno.UnsafeFnPointer(proc("glVertexAttribI2ui")!, def_glVertexAttribI2ui);
  fn_glVertexAttribI3ui = new Deno.UnsafeFnPointer(proc("glVertexAttribI3ui")!, def_glVertexAttribI3ui);
  fn_glVertexAttribI4ui = new Deno.UnsafeFnPointer(proc("glVertexAttribI4ui")!, def_glVertexAttribI4ui);
  fn_glVertexAttribI1iv = new Deno.UnsafeFnPointer(proc("glVertexAttribI1iv")!, def_glVertexAttribI1iv);
  fn_glVertexAttribI2iv = new Deno.UnsafeFnPointer(proc("glVertexAttribI2iv")!, def_glVertexAttribI2iv);
  fn_glVertexAttribI3iv = new Deno.UnsafeFnPointer(proc("glVertexAttribI3iv")!, def_glVertexAttribI3iv);
  fn_glVertexAttribI4iv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4iv")!, def_glVertexAttribI4iv);
  fn_glVertexAttribI1uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribI1uiv")!, def_glVertexAttribI1uiv);
  fn_glVertexAttribI2uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribI2uiv")!, def_glVertexAttribI2uiv);
  fn_glVertexAttribI3uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribI3uiv")!, def_glVertexAttribI3uiv);
  fn_glVertexAttribI4uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4uiv")!, def_glVertexAttribI4uiv);
  fn_glVertexAttribI4bv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4bv")!, def_glVertexAttribI4bv);
  fn_glVertexAttribI4sv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4sv")!, def_glVertexAttribI4sv);
  fn_glVertexAttribI4ubv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4ubv")!, def_glVertexAttribI4ubv);
  fn_glVertexAttribI4usv = new Deno.UnsafeFnPointer(proc("glVertexAttribI4usv")!, def_glVertexAttribI4usv);
  fn_glGetUniformuiv = new Deno.UnsafeFnPointer(proc("glGetUniformuiv")!, def_glGetUniformuiv);
  fn_glBindFragDataLocation = new Deno.UnsafeFnPointer(proc("glBindFragDataLocation")!, def_glBindFragDataLocation);
  fn_glGetFragDataLocation = new Deno.UnsafeFnPointer(proc("glGetFragDataLocation")!, def_glGetFragDataLocation);
  fn_glUniform1ui = new Deno.UnsafeFnPointer(proc("glUniform1ui")!, def_glUniform1ui);
  fn_glUniform2ui = new Deno.UnsafeFnPointer(proc("glUniform2ui")!, def_glUniform2ui);
  fn_glUniform3ui = new Deno.UnsafeFnPointer(proc("glUniform3ui")!, def_glUniform3ui);
  fn_glUniform4ui = new Deno.UnsafeFnPointer(proc("glUniform4ui")!, def_glUniform4ui);
  fn_glUniform1uiv = new Deno.UnsafeFnPointer(proc("glUniform1uiv")!, def_glUniform1uiv);
  fn_glUniform2uiv = new Deno.UnsafeFnPointer(proc("glUniform2uiv")!, def_glUniform2uiv);
  fn_glUniform3uiv = new Deno.UnsafeFnPointer(proc("glUniform3uiv")!, def_glUniform3uiv);
  fn_glUniform4uiv = new Deno.UnsafeFnPointer(proc("glUniform4uiv")!, def_glUniform4uiv);
  fn_glTexParameterIiv = new Deno.UnsafeFnPointer(proc("glTexParameterIiv")!, def_glTexParameterIiv);
  fn_glTexParameterIuiv = new Deno.UnsafeFnPointer(proc("glTexParameterIuiv")!, def_glTexParameterIuiv);
  fn_glGetTexParameterIiv = new Deno.UnsafeFnPointer(proc("glGetTexParameterIiv")!, def_glGetTexParameterIiv);
  fn_glGetTexParameterIuiv = new Deno.UnsafeFnPointer(proc("glGetTexParameterIuiv")!, def_glGetTexParameterIuiv);
  fn_glClearBufferiv = new Deno.UnsafeFnPointer(proc("glClearBufferiv")!, def_glClearBufferiv);
  fn_glClearBufferuiv = new Deno.UnsafeFnPointer(proc("glClearBufferuiv")!, def_glClearBufferuiv);
  fn_glClearBufferfv = new Deno.UnsafeFnPointer(proc("glClearBufferfv")!, def_glClearBufferfv);
  fn_glClearBufferfi = new Deno.UnsafeFnPointer(proc("glClearBufferfi")!, def_glClearBufferfi);
  fn_glGetStringi = new Deno.UnsafeFnPointer(proc("glGetStringi")!, def_glGetStringi);
  fn_glIsRenderbuffer = new Deno.UnsafeFnPointer(proc("glIsRenderbuffer")!, def_glIsRenderbuffer);
  fn_glBindRenderbuffer = new Deno.UnsafeFnPointer(proc("glBindRenderbuffer")!, def_glBindRenderbuffer);
  fn_glDeleteRenderbuffers = new Deno.UnsafeFnPointer(proc("glDeleteRenderbuffers")!, def_glDeleteRenderbuffers);
  fn_glGenRenderbuffers = new Deno.UnsafeFnPointer(proc("glGenRenderbuffers")!, def_glGenRenderbuffers);
  fn_glRenderbufferStorage = new Deno.UnsafeFnPointer(proc("glRenderbufferStorage")!, def_glRenderbufferStorage);
  fn_glGetRenderbufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetRenderbufferParameteriv")!, def_glGetRenderbufferParameteriv);
  fn_glIsFramebuffer = new Deno.UnsafeFnPointer(proc("glIsFramebuffer")!, def_glIsFramebuffer);
  fn_glBindFramebuffer = new Deno.UnsafeFnPointer(proc("glBindFramebuffer")!, def_glBindFramebuffer);
  fn_glDeleteFramebuffers = new Deno.UnsafeFnPointer(proc("glDeleteFramebuffers")!, def_glDeleteFramebuffers);
  fn_glGenFramebuffers = new Deno.UnsafeFnPointer(proc("glGenFramebuffers")!, def_glGenFramebuffers);
  fn_glCheckFramebufferStatus = new Deno.UnsafeFnPointer(proc("glCheckFramebufferStatus")!, def_glCheckFramebufferStatus);
  fn_glFramebufferTexture1D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture1D")!, def_glFramebufferTexture1D);
  fn_glFramebufferTexture2D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture2D")!, def_glFramebufferTexture2D);
  fn_glFramebufferTexture3D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture3D")!, def_glFramebufferTexture3D);
  fn_glFramebufferRenderbuffer = new Deno.UnsafeFnPointer(proc("glFramebufferRenderbuffer")!, def_glFramebufferRenderbuffer);
  fn_glGetFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(proc("glGetFramebufferAttachmentParameteriv")!, def_glGetFramebufferAttachmentParameteriv);
  fn_glGenerateMipmap = new Deno.UnsafeFnPointer(proc("glGenerateMipmap")!, def_glGenerateMipmap);
  fn_glBlitFramebuffer = new Deno.UnsafeFnPointer(proc("glBlitFramebuffer")!, def_glBlitFramebuffer);
  fn_glRenderbufferStorageMultisample = new Deno.UnsafeFnPointer(proc("glRenderbufferStorageMultisample")!, def_glRenderbufferStorageMultisample);
  fn_glFramebufferTextureLayer = new Deno.UnsafeFnPointer(proc("glFramebufferTextureLayer")!, def_glFramebufferTextureLayer);
  fn_glMapBufferRange = new Deno.UnsafeFnPointer(proc("glMapBufferRange")!, def_glMapBufferRange);
  fn_glFlushMappedBufferRange = new Deno.UnsafeFnPointer(proc("glFlushMappedBufferRange")!, def_glFlushMappedBufferRange);
  fn_glBindVertexArray = new Deno.UnsafeFnPointer(proc("glBindVertexArray")!, def_glBindVertexArray);
  fn_glDeleteVertexArrays = new Deno.UnsafeFnPointer(proc("glDeleteVertexArrays")!, def_glDeleteVertexArrays);
  fn_glGenVertexArrays = new Deno.UnsafeFnPointer(proc("glGenVertexArrays")!, def_glGenVertexArrays);
  fn_glIsVertexArray = new Deno.UnsafeFnPointer(proc("glIsVertexArray")!, def_glIsVertexArray);
  fn_glDrawArraysInstanced = new Deno.UnsafeFnPointer(proc("glDrawArraysInstanced")!, def_glDrawArraysInstanced);
  fn_glDrawElementsInstanced = new Deno.UnsafeFnPointer(proc("glDrawElementsInstanced")!, def_glDrawElementsInstanced);
  fn_glTexBuffer = new Deno.UnsafeFnPointer(proc("glTexBuffer")!, def_glTexBuffer);
  fn_glPrimitiveRestartIndex = new Deno.UnsafeFnPointer(proc("glPrimitiveRestartIndex")!, def_glPrimitiveRestartIndex);
  fn_glCopyBufferSubData = new Deno.UnsafeFnPointer(proc("glCopyBufferSubData")!, def_glCopyBufferSubData);
  fn_glGetUniformIndices = new Deno.UnsafeFnPointer(proc("glGetUniformIndices")!, def_glGetUniformIndices);
  fn_glGetActiveUniformsiv = new Deno.UnsafeFnPointer(proc("glGetActiveUniformsiv")!, def_glGetActiveUniformsiv);
  fn_glGetActiveUniformName = new Deno.UnsafeFnPointer(proc("glGetActiveUniformName")!, def_glGetActiveUniformName);
  fn_glGetUniformBlockIndex = new Deno.UnsafeFnPointer(proc("glGetUniformBlockIndex")!, def_glGetUniformBlockIndex);
  fn_glGetActiveUniformBlockiv = new Deno.UnsafeFnPointer(proc("glGetActiveUniformBlockiv")!, def_glGetActiveUniformBlockiv);
  fn_glGetActiveUniformBlockName = new Deno.UnsafeFnPointer(proc("glGetActiveUniformBlockName")!, def_glGetActiveUniformBlockName);
  fn_glUniformBlockBinding = new Deno.UnsafeFnPointer(proc("glUniformBlockBinding")!, def_glUniformBlockBinding);
  fn_glDrawElementsBaseVertex = new Deno.UnsafeFnPointer(proc("glDrawElementsBaseVertex")!, def_glDrawElementsBaseVertex);
  fn_glDrawRangeElementsBaseVertex = new Deno.UnsafeFnPointer(proc("glDrawRangeElementsBaseVertex")!, def_glDrawRangeElementsBaseVertex);
  fn_glDrawElementsInstancedBaseVertex = new Deno.UnsafeFnPointer(proc("glDrawElementsInstancedBaseVertex")!, def_glDrawElementsInstancedBaseVertex);
  fn_glMultiDrawElementsBaseVertex = new Deno.UnsafeFnPointer(proc("glMultiDrawElementsBaseVertex")!, def_glMultiDrawElementsBaseVertex);
  fn_glProvokingVertex = new Deno.UnsafeFnPointer(proc("glProvokingVertex")!, def_glProvokingVertex);
  fn_glFenceSync = new Deno.UnsafeFnPointer(proc("glFenceSync")!, def_glFenceSync);
  fn_glIsSync = new Deno.UnsafeFnPointer(proc("glIsSync")!, def_glIsSync);
  fn_glDeleteSync = new Deno.UnsafeFnPointer(proc("glDeleteSync")!, def_glDeleteSync);
  fn_glClientWaitSync = new Deno.UnsafeFnPointer(proc("glClientWaitSync")!, def_glClientWaitSync);
  fn_glWaitSync = new Deno.UnsafeFnPointer(proc("glWaitSync")!, def_glWaitSync);
  fn_glGetInteger64v = new Deno.UnsafeFnPointer(proc("glGetInteger64v")!, def_glGetInteger64v);
  fn_glGetSynciv = new Deno.UnsafeFnPointer(proc("glGetSynciv")!, def_glGetSynciv);
  fn_glGetInteger64i_v = new Deno.UnsafeFnPointer(proc("glGetInteger64i_v")!, def_glGetInteger64i_v);
  fn_glGetBufferParameteri64v = new Deno.UnsafeFnPointer(proc("glGetBufferParameteri64v")!, def_glGetBufferParameteri64v);
  fn_glFramebufferTexture = new Deno.UnsafeFnPointer(proc("glFramebufferTexture")!, def_glFramebufferTexture);
  fn_glTexImage2DMultisample = new Deno.UnsafeFnPointer(proc("glTexImage2DMultisample")!, def_glTexImage2DMultisample);
  fn_glTexImage3DMultisample = new Deno.UnsafeFnPointer(proc("glTexImage3DMultisample")!, def_glTexImage3DMultisample);
  fn_glGetMultisamplefv = new Deno.UnsafeFnPointer(proc("glGetMultisamplefv")!, def_glGetMultisamplefv);
  fn_glSampleMaski = new Deno.UnsafeFnPointer(proc("glSampleMaski")!, def_glSampleMaski);
}
