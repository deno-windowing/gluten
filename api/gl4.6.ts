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
export const VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe;
export const SRC1_COLOR = 0x88f9;
export const ONE_MINUS_SRC1_COLOR = 0x88fa;
export const ONE_MINUS_SRC1_ALPHA = 0x88fb;
export const MAX_DUAL_SOURCE_DRAW_BUFFERS = 0x88fc;
export const ANY_SAMPLES_PASSED = 0x8c2f;
export const SAMPLER_BINDING = 0x8919;
export const RGB10_A2UI = 0x906f;
export const TEXTURE_SWIZZLE_R = 0x8e42;
export const TEXTURE_SWIZZLE_G = 0x8e43;
export const TEXTURE_SWIZZLE_B = 0x8e44;
export const TEXTURE_SWIZZLE_A = 0x8e45;
export const TEXTURE_SWIZZLE_RGBA = 0x8e46;
export const TIME_ELAPSED = 0x88bf;
export const TIMESTAMP = 0x8e28;
export const INT_2_10_10_10_REV = 0x8d9f;
export const SAMPLE_SHADING = 0x8c36;
export const MIN_SAMPLE_SHADING_VALUE = 0x8c37;
export const MIN_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5e;
export const MAX_PROGRAM_TEXTURE_GATHER_OFFSET = 0x8e5f;
export const TEXTURE_CUBE_MAP_ARRAY = 0x9009;
export const TEXTURE_BINDING_CUBE_MAP_ARRAY = 0x900a;
export const PROXY_TEXTURE_CUBE_MAP_ARRAY = 0x900b;
export const SAMPLER_CUBE_MAP_ARRAY = 0x900c;
export const SAMPLER_CUBE_MAP_ARRAY_SHADOW = 0x900d;
export const INT_SAMPLER_CUBE_MAP_ARRAY = 0x900e;
export const UNSIGNED_INT_SAMPLER_CUBE_MAP_ARRAY = 0x900f;
export const DRAW_INDIRECT_BUFFER = 0x8f3f;
export const DRAW_INDIRECT_BUFFER_BINDING = 0x8f43;
export const GEOMETRY_SHADER_INVOCATIONS = 0x887f;
export const MAX_GEOMETRY_SHADER_INVOCATIONS = 0x8e5a;
export const MIN_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5b;
export const MAX_FRAGMENT_INTERPOLATION_OFFSET = 0x8e5c;
export const FRAGMENT_INTERPOLATION_OFFSET_BITS = 0x8e5d;
export const MAX_VERTEX_STREAMS = 0x8e71;
export const DOUBLE_VEC2 = 0x8ffc;
export const DOUBLE_VEC3 = 0x8ffd;
export const DOUBLE_VEC4 = 0x8ffe;
export const DOUBLE_MAT2 = 0x8f46;
export const DOUBLE_MAT3 = 0x8f47;
export const DOUBLE_MAT4 = 0x8f48;
export const DOUBLE_MAT2x3 = 0x8f49;
export const DOUBLE_MAT2x4 = 0x8f4a;
export const DOUBLE_MAT3x2 = 0x8f4b;
export const DOUBLE_MAT3x4 = 0x8f4c;
export const DOUBLE_MAT4x2 = 0x8f4d;
export const DOUBLE_MAT4x3 = 0x8f4e;
export const ACTIVE_SUBROUTINES = 0x8de5;
export const ACTIVE_SUBROUTINE_UNIFORMS = 0x8de6;
export const ACTIVE_SUBROUTINE_UNIFORM_LOCATIONS = 0x8e47;
export const ACTIVE_SUBROUTINE_MAX_LENGTH = 0x8e48;
export const ACTIVE_SUBROUTINE_UNIFORM_MAX_LENGTH = 0x8e49;
export const MAX_SUBROUTINES = 0x8de7;
export const MAX_SUBROUTINE_UNIFORM_LOCATIONS = 0x8de8;
export const NUM_COMPATIBLE_SUBROUTINES = 0x8e4a;
export const COMPATIBLE_SUBROUTINES = 0x8e4b;
export const PATCHES = 0xe;
export const PATCH_VERTICES = 0x8e72;
export const PATCH_DEFAULT_INNER_LEVEL = 0x8e73;
export const PATCH_DEFAULT_OUTER_LEVEL = 0x8e74;
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
export const UNIFORM_BLOCK_REFERENCED_BY_TESS_CONTROL_SHADER = 0x84f0;
export const UNIFORM_BLOCK_REFERENCED_BY_TESS_EVALUATION_SHADER = 0x84f1;
export const TESS_EVALUATION_SHADER = 0x8e87;
export const TESS_CONTROL_SHADER = 0x8e88;
export const TRANSFORM_FEEDBACK = 0x8e22;
export const TRANSFORM_FEEDBACK_BUFFER_PAUSED = 0x8e23;
export const TRANSFORM_FEEDBACK_BUFFER_ACTIVE = 0x8e24;
export const TRANSFORM_FEEDBACK_BINDING = 0x8e25;
export const MAX_TRANSFORM_FEEDBACK_BUFFERS = 0x8e70;
export const FIXED = 0x140c;
export const IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;
export const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;
export const LOW_FLOAT = 0x8df0;
export const MEDIUM_FLOAT = 0x8df1;
export const HIGH_FLOAT = 0x8df2;
export const LOW_INT = 0x8df3;
export const MEDIUM_INT = 0x8df4;
export const HIGH_INT = 0x8df5;
export const SHADER_COMPILER = 0x8dfa;
export const SHADER_BINARY_FORMATS = 0x8df8;
export const NUM_SHADER_BINARY_FORMATS = 0x8df9;
export const MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;
export const MAX_VARYING_VECTORS = 0x8dfc;
export const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;
export const RGB565 = 0x8d62;
export const PROGRAM_BINARY_RETRIEVABLE_HINT = 0x8257;
export const PROGRAM_BINARY_LENGTH = 0x8741;
export const NUM_PROGRAM_BINARY_FORMATS = 0x87fe;
export const PROGRAM_BINARY_FORMATS = 0x87ff;
export const VERTEX_SHADER_BIT = 0x1;
export const FRAGMENT_SHADER_BIT = 0x2;
export const GEOMETRY_SHADER_BIT = 0x4;
export const TESS_CONTROL_SHADER_BIT = 0x8;
export const TESS_EVALUATION_SHADER_BIT = 0x10;
export const ALL_SHADER_BITS = 0xffffffff;
export const PROGRAM_SEPARABLE = 0x8258;
export const ACTIVE_PROGRAM = 0x8259;
export const PROGRAM_PIPELINE_BINDING = 0x825a;
export const MAX_VIEWPORTS = 0x825b;
export const VIEWPORT_SUBPIXEL_BITS = 0x825c;
export const VIEWPORT_BOUNDS_RANGE = 0x825d;
export const LAYER_PROVOKING_VERTEX = 0x825e;
export const VIEWPORT_INDEX_PROVOKING_VERTEX = 0x825f;
export const UNDEFINED_VERTEX = 0x8260;
export const COPY_READ_BUFFER_BINDING = 0x8f36;
export const COPY_WRITE_BUFFER_BINDING = 0x8f37;
export const TRANSFORM_FEEDBACK_ACTIVE = 0x8e24;
export const TRANSFORM_FEEDBACK_PAUSED = 0x8e23;
export const UNPACK_COMPRESSED_BLOCK_WIDTH = 0x9127;
export const UNPACK_COMPRESSED_BLOCK_HEIGHT = 0x9128;
export const UNPACK_COMPRESSED_BLOCK_DEPTH = 0x9129;
export const UNPACK_COMPRESSED_BLOCK_SIZE = 0x912a;
export const PACK_COMPRESSED_BLOCK_WIDTH = 0x912b;
export const PACK_COMPRESSED_BLOCK_HEIGHT = 0x912c;
export const PACK_COMPRESSED_BLOCK_DEPTH = 0x912d;
export const PACK_COMPRESSED_BLOCK_SIZE = 0x912e;
export const NUM_SAMPLE_COUNTS = 0x9380;
export const MIN_MAP_BUFFER_ALIGNMENT = 0x90bc;
export const ATOMIC_COUNTER_BUFFER = 0x92c0;
export const ATOMIC_COUNTER_BUFFER_BINDING = 0x92c1;
export const ATOMIC_COUNTER_BUFFER_START = 0x92c2;
export const ATOMIC_COUNTER_BUFFER_SIZE = 0x92c3;
export const ATOMIC_COUNTER_BUFFER_DATA_SIZE = 0x92c4;
export const ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTERS = 0x92c5;
export const ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTER_INDICES = 0x92c6;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_VERTEX_SHADER = 0x92c7;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_CONTROL_SHADER = 0x92c8;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_EVALUATION_SHADER = 0x92c9;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_GEOMETRY_SHADER = 0x92ca;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_FRAGMENT_SHADER = 0x92cb;
export const MAX_VERTEX_ATOMIC_COUNTER_BUFFERS = 0x92cc;
export const MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS = 0x92cd;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS = 0x92ce;
export const MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS = 0x92cf;
export const MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS = 0x92d0;
export const MAX_COMBINED_ATOMIC_COUNTER_BUFFERS = 0x92d1;
export const MAX_VERTEX_ATOMIC_COUNTERS = 0x92d2;
export const MAX_TESS_CONTROL_ATOMIC_COUNTERS = 0x92d3;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTERS = 0x92d4;
export const MAX_GEOMETRY_ATOMIC_COUNTERS = 0x92d5;
export const MAX_FRAGMENT_ATOMIC_COUNTERS = 0x92d6;
export const MAX_COMBINED_ATOMIC_COUNTERS = 0x92d7;
export const MAX_ATOMIC_COUNTER_BUFFER_SIZE = 0x92d8;
export const MAX_ATOMIC_COUNTER_BUFFER_BINDINGS = 0x92dc;
export const ACTIVE_ATOMIC_COUNTER_BUFFERS = 0x92d9;
export const UNIFORM_ATOMIC_COUNTER_BUFFER_INDEX = 0x92da;
export const UNSIGNED_INT_ATOMIC_COUNTER = 0x92db;
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
export const MAX_IMAGE_UNITS = 0x8f38;
export const MAX_COMBINED_IMAGE_UNITS_AND_FRAGMENT_OUTPUTS = 0x8f39;
export const IMAGE_BINDING_NAME = 0x8f3a;
export const IMAGE_BINDING_LEVEL = 0x8f3b;
export const IMAGE_BINDING_LAYERED = 0x8f3c;
export const IMAGE_BINDING_LAYER = 0x8f3d;
export const IMAGE_BINDING_ACCESS = 0x8f3e;
export const IMAGE_1D = 0x904c;
export const IMAGE_2D = 0x904d;
export const IMAGE_3D = 0x904e;
export const IMAGE_2D_RECT = 0x904f;
export const IMAGE_CUBE = 0x9050;
export const IMAGE_BUFFER = 0x9051;
export const IMAGE_1D_ARRAY = 0x9052;
export const IMAGE_2D_ARRAY = 0x9053;
export const IMAGE_CUBE_MAP_ARRAY = 0x9054;
export const IMAGE_2D_MULTISAMPLE = 0x9055;
export const IMAGE_2D_MULTISAMPLE_ARRAY = 0x9056;
export const INT_IMAGE_1D = 0x9057;
export const INT_IMAGE_2D = 0x9058;
export const INT_IMAGE_3D = 0x9059;
export const INT_IMAGE_2D_RECT = 0x905a;
export const INT_IMAGE_CUBE = 0x905b;
export const INT_IMAGE_BUFFER = 0x905c;
export const INT_IMAGE_1D_ARRAY = 0x905d;
export const INT_IMAGE_2D_ARRAY = 0x905e;
export const INT_IMAGE_CUBE_MAP_ARRAY = 0x905f;
export const INT_IMAGE_2D_MULTISAMPLE = 0x9060;
export const INT_IMAGE_2D_MULTISAMPLE_ARRAY = 0x9061;
export const UNSIGNED_INT_IMAGE_1D = 0x9062;
export const UNSIGNED_INT_IMAGE_2D = 0x9063;
export const UNSIGNED_INT_IMAGE_3D = 0x9064;
export const UNSIGNED_INT_IMAGE_2D_RECT = 0x9065;
export const UNSIGNED_INT_IMAGE_CUBE = 0x9066;
export const UNSIGNED_INT_IMAGE_BUFFER = 0x9067;
export const UNSIGNED_INT_IMAGE_1D_ARRAY = 0x9068;
export const UNSIGNED_INT_IMAGE_2D_ARRAY = 0x9069;
export const UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY = 0x906a;
export const UNSIGNED_INT_IMAGE_2D_MULTISAMPLE = 0x906b;
export const UNSIGNED_INT_IMAGE_2D_MULTISAMPLE_ARRAY = 0x906c;
export const MAX_IMAGE_SAMPLES = 0x906d;
export const IMAGE_BINDING_FORMAT = 0x906e;
export const IMAGE_FORMAT_COMPATIBILITY_TYPE = 0x90c7;
export const IMAGE_FORMAT_COMPATIBILITY_BY_SIZE = 0x90c8;
export const IMAGE_FORMAT_COMPATIBILITY_BY_CLASS = 0x90c9;
export const MAX_VERTEX_IMAGE_UNIFORMS = 0x90ca;
export const MAX_TESS_CONTROL_IMAGE_UNIFORMS = 0x90cb;
export const MAX_TESS_EVALUATION_IMAGE_UNIFORMS = 0x90cc;
export const MAX_GEOMETRY_IMAGE_UNIFORMS = 0x90cd;
export const MAX_FRAGMENT_IMAGE_UNIFORMS = 0x90ce;
export const MAX_COMBINED_IMAGE_UNIFORMS = 0x90cf;
export const COMPRESSED_RGBA_BPTC_UNORM = 0x8e8c;
export const COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 0x8e8d;
export const COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 0x8e8e;
export const COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 0x8e8f;
export const TEXTURE_IMMUTABLE_FORMAT = 0x912f;
export const NUM_SHADING_LANGUAGE_VERSIONS = 0x82e9;
export const VERTEX_ATTRIB_ARRAY_LONG = 0x874e;
export const COMPRESSED_RGB8_ETC2 = 0x9274;
export const COMPRESSED_SRGB8_ETC2 = 0x9275;
export const COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9276;
export const COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9277;
export const COMPRESSED_RGBA8_ETC2_EAC = 0x9278;
export const COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9279;
export const COMPRESSED_R11_EAC = 0x9270;
export const COMPRESSED_SIGNED_R11_EAC = 0x9271;
export const COMPRESSED_RG11_EAC = 0x9272;
export const COMPRESSED_SIGNED_RG11_EAC = 0x9273;
export const PRIMITIVE_RESTART_FIXED_INDEX = 0x8d69;
export const ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;
export const MAX_ELEMENT_INDEX = 0x8d6b;
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
export const UNIFORM_BLOCK_REFERENCED_BY_COMPUTE_SHADER = 0x90ec;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_COMPUTE_SHADER = 0x90ed;
export const DISPATCH_INDIRECT_BUFFER = 0x90ee;
export const DISPATCH_INDIRECT_BUFFER_BINDING = 0x90ef;
export const COMPUTE_SHADER_BIT = 0x20;
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
export const MAX_DEBUG_MESSAGE_LENGTH = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES = 0x9144;
export const DEBUG_LOGGED_MESSAGES = 0x9145;
export const DEBUG_SEVERITY_HIGH = 0x9146;
export const DEBUG_SEVERITY_MEDIUM = 0x9147;
export const DEBUG_SEVERITY_LOW = 0x9148;
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
export const DEBUG_OUTPUT = 0x92e0;
export const CONTEXT_FLAG_DEBUG_BIT = 0x2;
export const MAX_UNIFORM_LOCATIONS = 0x826e;
export const FRAMEBUFFER_DEFAULT_WIDTH = 0x9310;
export const FRAMEBUFFER_DEFAULT_HEIGHT = 0x9311;
export const FRAMEBUFFER_DEFAULT_LAYERS = 0x9312;
export const FRAMEBUFFER_DEFAULT_SAMPLES = 0x9313;
export const FRAMEBUFFER_DEFAULT_FIXED_SAMPLE_LOCATIONS = 0x9314;
export const MAX_FRAMEBUFFER_WIDTH = 0x9315;
export const MAX_FRAMEBUFFER_HEIGHT = 0x9316;
export const MAX_FRAMEBUFFER_LAYERS = 0x9317;
export const MAX_FRAMEBUFFER_SAMPLES = 0x9318;
export const INTERNALFORMAT_SUPPORTED = 0x826f;
export const INTERNALFORMAT_PREFERRED = 0x8270;
export const INTERNALFORMAT_RED_SIZE = 0x8271;
export const INTERNALFORMAT_GREEN_SIZE = 0x8272;
export const INTERNALFORMAT_BLUE_SIZE = 0x8273;
export const INTERNALFORMAT_ALPHA_SIZE = 0x8274;
export const INTERNALFORMAT_DEPTH_SIZE = 0x8275;
export const INTERNALFORMAT_STENCIL_SIZE = 0x8276;
export const INTERNALFORMAT_SHARED_SIZE = 0x8277;
export const INTERNALFORMAT_RED_TYPE = 0x8278;
export const INTERNALFORMAT_GREEN_TYPE = 0x8279;
export const INTERNALFORMAT_BLUE_TYPE = 0x827a;
export const INTERNALFORMAT_ALPHA_TYPE = 0x827b;
export const INTERNALFORMAT_DEPTH_TYPE = 0x827c;
export const INTERNALFORMAT_STENCIL_TYPE = 0x827d;
export const MAX_WIDTH = 0x827e;
export const MAX_HEIGHT = 0x827f;
export const MAX_DEPTH = 0x8280;
export const MAX_LAYERS = 0x8281;
export const MAX_COMBINED_DIMENSIONS = 0x8282;
export const COLOR_COMPONENTS = 0x8283;
export const DEPTH_COMPONENTS = 0x8284;
export const STENCIL_COMPONENTS = 0x8285;
export const COLOR_RENDERABLE = 0x8286;
export const DEPTH_RENDERABLE = 0x8287;
export const STENCIL_RENDERABLE = 0x8288;
export const FRAMEBUFFER_RENDERABLE = 0x8289;
export const FRAMEBUFFER_RENDERABLE_LAYERED = 0x828a;
export const FRAMEBUFFER_BLEND = 0x828b;
export const READ_PIXELS = 0x828c;
export const READ_PIXELS_FORMAT = 0x828d;
export const READ_PIXELS_TYPE = 0x828e;
export const TEXTURE_IMAGE_FORMAT = 0x828f;
export const TEXTURE_IMAGE_TYPE = 0x8290;
export const GET_TEXTURE_IMAGE_FORMAT = 0x8291;
export const GET_TEXTURE_IMAGE_TYPE = 0x8292;
export const MIPMAP = 0x8293;
export const MANUAL_GENERATE_MIPMAP = 0x8294;
export const AUTO_GENERATE_MIPMAP = 0x8295;
export const COLOR_ENCODING = 0x8296;
export const SRGB_READ = 0x8297;
export const SRGB_WRITE = 0x8298;
export const FILTER = 0x829a;
export const VERTEX_TEXTURE = 0x829b;
export const TESS_CONTROL_TEXTURE = 0x829c;
export const TESS_EVALUATION_TEXTURE = 0x829d;
export const GEOMETRY_TEXTURE = 0x829e;
export const FRAGMENT_TEXTURE = 0x829f;
export const COMPUTE_TEXTURE = 0x82a0;
export const TEXTURE_SHADOW = 0x82a1;
export const TEXTURE_GATHER = 0x82a2;
export const TEXTURE_GATHER_SHADOW = 0x82a3;
export const SHADER_IMAGE_LOAD = 0x82a4;
export const SHADER_IMAGE_STORE = 0x82a5;
export const SHADER_IMAGE_ATOMIC = 0x82a6;
export const IMAGE_TEXEL_SIZE = 0x82a7;
export const IMAGE_COMPATIBILITY_CLASS = 0x82a8;
export const IMAGE_PIXEL_FORMAT = 0x82a9;
export const IMAGE_PIXEL_TYPE = 0x82aa;
export const SIMULTANEOUS_TEXTURE_AND_DEPTH_TEST = 0x82ac;
export const SIMULTANEOUS_TEXTURE_AND_STENCIL_TEST = 0x82ad;
export const SIMULTANEOUS_TEXTURE_AND_DEPTH_WRITE = 0x82ae;
export const SIMULTANEOUS_TEXTURE_AND_STENCIL_WRITE = 0x82af;
export const TEXTURE_COMPRESSED_BLOCK_WIDTH = 0x82b1;
export const TEXTURE_COMPRESSED_BLOCK_HEIGHT = 0x82b2;
export const TEXTURE_COMPRESSED_BLOCK_SIZE = 0x82b3;
export const CLEAR_BUFFER = 0x82b4;
export const TEXTURE_VIEW = 0x82b5;
export const VIEW_COMPATIBILITY_CLASS = 0x82b6;
export const FULL_SUPPORT = 0x82b7;
export const CAVEAT_SUPPORT = 0x82b8;
export const IMAGE_CLASS_4_X_32 = 0x82b9;
export const IMAGE_CLASS_2_X_32 = 0x82ba;
export const IMAGE_CLASS_1_X_32 = 0x82bb;
export const IMAGE_CLASS_4_X_16 = 0x82bc;
export const IMAGE_CLASS_2_X_16 = 0x82bd;
export const IMAGE_CLASS_1_X_16 = 0x82be;
export const IMAGE_CLASS_4_X_8 = 0x82bf;
export const IMAGE_CLASS_2_X_8 = 0x82c0;
export const IMAGE_CLASS_1_X_8 = 0x82c1;
export const IMAGE_CLASS_11_11_10 = 0x82c2;
export const IMAGE_CLASS_10_10_10_2 = 0x82c3;
export const VIEW_CLASS_128_BITS = 0x82c4;
export const VIEW_CLASS_96_BITS = 0x82c5;
export const VIEW_CLASS_64_BITS = 0x82c6;
export const VIEW_CLASS_48_BITS = 0x82c7;
export const VIEW_CLASS_32_BITS = 0x82c8;
export const VIEW_CLASS_24_BITS = 0x82c9;
export const VIEW_CLASS_16_BITS = 0x82ca;
export const VIEW_CLASS_8_BITS = 0x82cb;
export const VIEW_CLASS_S3TC_DXT1_RGB = 0x82cc;
export const VIEW_CLASS_S3TC_DXT1_RGBA = 0x82cd;
export const VIEW_CLASS_S3TC_DXT3_RGBA = 0x82ce;
export const VIEW_CLASS_S3TC_DXT5_RGBA = 0x82cf;
export const VIEW_CLASS_RGTC1_RED = 0x82d0;
export const VIEW_CLASS_RGTC2_RG = 0x82d1;
export const VIEW_CLASS_BPTC_UNORM = 0x82d2;
export const VIEW_CLASS_BPTC_FLOAT = 0x82d3;
export const UNIFORM = 0x92e1;
export const UNIFORM_BLOCK = 0x92e2;
export const PROGRAM_INPUT = 0x92e3;
export const PROGRAM_OUTPUT = 0x92e4;
export const BUFFER_VARIABLE = 0x92e5;
export const SHADER_STORAGE_BLOCK = 0x92e6;
export const VERTEX_SUBROUTINE = 0x92e8;
export const TESS_CONTROL_SUBROUTINE = 0x92e9;
export const TESS_EVALUATION_SUBROUTINE = 0x92ea;
export const GEOMETRY_SUBROUTINE = 0x92eb;
export const FRAGMENT_SUBROUTINE = 0x92ec;
export const COMPUTE_SUBROUTINE = 0x92ed;
export const VERTEX_SUBROUTINE_UNIFORM = 0x92ee;
export const TESS_CONTROL_SUBROUTINE_UNIFORM = 0x92ef;
export const TESS_EVALUATION_SUBROUTINE_UNIFORM = 0x92f0;
export const GEOMETRY_SUBROUTINE_UNIFORM = 0x92f1;
export const FRAGMENT_SUBROUTINE_UNIFORM = 0x92f2;
export const COMPUTE_SUBROUTINE_UNIFORM = 0x92f3;
export const TRANSFORM_FEEDBACK_VARYING = 0x92f4;
export const ACTIVE_RESOURCES = 0x92f5;
export const MAX_NAME_LENGTH = 0x92f6;
export const MAX_NUM_ACTIVE_VARIABLES = 0x92f7;
export const MAX_NUM_COMPATIBLE_SUBROUTINES = 0x92f8;
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
export const REFERENCED_BY_TESS_CONTROL_SHADER = 0x9307;
export const REFERENCED_BY_TESS_EVALUATION_SHADER = 0x9308;
export const REFERENCED_BY_GEOMETRY_SHADER = 0x9309;
export const REFERENCED_BY_FRAGMENT_SHADER = 0x930a;
export const REFERENCED_BY_COMPUTE_SHADER = 0x930b;
export const TOP_LEVEL_ARRAY_SIZE = 0x930c;
export const TOP_LEVEL_ARRAY_STRIDE = 0x930d;
export const LOCATION = 0x930e;
export const LOCATION_INDEX = 0x930f;
export const IS_PER_PATCH = 0x92e7;
export const SHADER_STORAGE_BUFFER = 0x90d2;
export const SHADER_STORAGE_BUFFER_BINDING = 0x90d3;
export const SHADER_STORAGE_BUFFER_START = 0x90d4;
export const SHADER_STORAGE_BUFFER_SIZE = 0x90d5;
export const MAX_VERTEX_SHADER_STORAGE_BLOCKS = 0x90d6;
export const MAX_GEOMETRY_SHADER_STORAGE_BLOCKS = 0x90d7;
export const MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS = 0x90d8;
export const MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS = 0x90d9;
export const MAX_FRAGMENT_SHADER_STORAGE_BLOCKS = 0x90da;
export const MAX_COMPUTE_SHADER_STORAGE_BLOCKS = 0x90db;
export const MAX_COMBINED_SHADER_STORAGE_BLOCKS = 0x90dc;
export const MAX_SHADER_STORAGE_BUFFER_BINDINGS = 0x90dd;
export const MAX_SHADER_STORAGE_BLOCK_SIZE = 0x90de;
export const SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT = 0x90df;
export const SHADER_STORAGE_BARRIER_BIT = 0x2000;
export const MAX_COMBINED_SHADER_OUTPUT_RESOURCES = 0x8f39;
export const DEPTH_STENCIL_TEXTURE_MODE = 0x90ea;
export const TEXTURE_BUFFER_OFFSET = 0x919d;
export const TEXTURE_BUFFER_SIZE = 0x919e;
export const TEXTURE_BUFFER_OFFSET_ALIGNMENT = 0x919f;
export const TEXTURE_VIEW_MIN_LEVEL = 0x82db;
export const TEXTURE_VIEW_NUM_LEVELS = 0x82dc;
export const TEXTURE_VIEW_MIN_LAYER = 0x82dd;
export const TEXTURE_VIEW_NUM_LAYERS = 0x82de;
export const TEXTURE_IMMUTABLE_LEVELS = 0x82df;
export const VERTEX_ATTRIB_BINDING = 0x82d4;
export const VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d5;
export const VERTEX_BINDING_DIVISOR = 0x82d6;
export const VERTEX_BINDING_OFFSET = 0x82d7;
export const VERTEX_BINDING_STRIDE = 0x82d8;
export const MAX_VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d9;
export const MAX_VERTEX_ATTRIB_BINDINGS = 0x82da;
export const VERTEX_BINDING_BUFFER = 0x8f4f;
export const DISPLAY_LIST = 0x82e7;
export const STACK_UNDERFLOW = 0x504;
export const STACK_OVERFLOW = 0x503;
export const MAX_VERTEX_ATTRIB_STRIDE = 0x82e5;
export const PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED = 0x8221;
export const TEXTURE_BUFFER_BINDING = 0x8c2a;
export const MAP_PERSISTENT_BIT = 0x40;
export const MAP_COHERENT_BIT = 0x80;
export const DYNAMIC_STORAGE_BIT = 0x100;
export const CLIENT_STORAGE_BIT = 0x200;
export const CLIENT_MAPPED_BUFFER_BARRIER_BIT = 0x4000;
export const BUFFER_IMMUTABLE_STORAGE = 0x821f;
export const BUFFER_STORAGE_FLAGS = 0x8220;
export const CLEAR_TEXTURE = 0x9365;
export const LOCATION_COMPONENT = 0x934a;
export const TRANSFORM_FEEDBACK_BUFFER_INDEX = 0x934b;
export const TRANSFORM_FEEDBACK_BUFFER_STRIDE = 0x934c;
export const QUERY_BUFFER = 0x9192;
export const QUERY_BUFFER_BARRIER_BIT = 0x8000;
export const QUERY_BUFFER_BINDING = 0x9193;
export const QUERY_RESULT_NO_WAIT = 0x9194;
export const MIRROR_CLAMP_TO_EDGE = 0x8743;
export const CONTEXT_LOST = 0x507;
export const NEGATIVE_ONE_TO_ONE = 0x935e;
export const ZERO_TO_ONE = 0x935f;
export const CLIP_ORIGIN = 0x935c;
export const CLIP_DEPTH_MODE = 0x935d;
export const QUERY_WAIT_INVERTED = 0x8e17;
export const QUERY_NO_WAIT_INVERTED = 0x8e18;
export const QUERY_BY_REGION_WAIT_INVERTED = 0x8e19;
export const QUERY_BY_REGION_NO_WAIT_INVERTED = 0x8e1a;
export const MAX_CULL_DISTANCES = 0x82f9;
export const MAX_COMBINED_CLIP_AND_CULL_DISTANCES = 0x82fa;
export const TEXTURE_TARGET = 0x1006;
export const QUERY_TARGET = 0x82ea;
export const GUILTY_CONTEXT_RESET = 0x8253;
export const INNOCENT_CONTEXT_RESET = 0x8254;
export const UNKNOWN_CONTEXT_RESET = 0x8255;
export const RESET_NOTIFICATION_STRATEGY = 0x8256;
export const LOSE_CONTEXT_ON_RESET = 0x8252;
export const NO_RESET_NOTIFICATION = 0x8261;
export const CONTEXT_FLAG_ROBUST_ACCESS_BIT = 0x4;
export const COLOR_TABLE = 0x80d0;
export const POST_CONVOLUTION_COLOR_TABLE = 0x80d1;
export const POST_COLOR_MATRIX_COLOR_TABLE = 0x80d2;
export const PROXY_COLOR_TABLE = 0x80d3;
export const PROXY_POST_CONVOLUTION_COLOR_TABLE = 0x80d4;
export const PROXY_POST_COLOR_MATRIX_COLOR_TABLE = 0x80d5;
export const CONVOLUTION_1D = 0x8010;
export const CONVOLUTION_2D = 0x8011;
export const SEPARABLE_2D = 0x8012;
export const HISTOGRAM = 0x8024;
export const PROXY_HISTOGRAM = 0x8025;
export const MINMAX = 0x802e;
export const CONTEXT_RELEASE_BEHAVIOR = 0x82fb;
export const CONTEXT_RELEASE_BEHAVIOR_FLUSH = 0x82fc;
export const SHADER_BINARY_FORMAT_SPIR_V = 0x9551;
export const SPIR_V_BINARY = 0x9552;
export const PARAMETER_BUFFER = 0x80ee;
export const PARAMETER_BUFFER_BINDING = 0x80ef;
export const CONTEXT_FLAG_NO_ERROR_BIT = 0x8;
export const VERTICES_SUBMITTED = 0x82ee;
export const PRIMITIVES_SUBMITTED = 0x82ef;
export const VERTEX_SHADER_INVOCATIONS = 0x82f0;
export const TESS_CONTROL_SHADER_PATCHES = 0x82f1;
export const TESS_EVALUATION_SHADER_INVOCATIONS = 0x82f2;
export const GEOMETRY_SHADER_PRIMITIVES_EMITTED = 0x82f3;
export const FRAGMENT_SHADER_INVOCATIONS = 0x82f4;
export const COMPUTE_SHADER_INVOCATIONS = 0x82f5;
export const CLIPPING_INPUT_PRIMITIVES = 0x82f6;
export const CLIPPING_OUTPUT_PRIMITIVES = 0x82f7;
export const POLYGON_OFFSET_CLAMP = 0x8e1b;
export const SPIR_V_EXTENSIONS = 0x9553;
export const NUM_SPIR_V_EXTENSIONS = 0x9554;
export const TEXTURE_MAX_ANISOTROPY = 0x84fe;
export const MAX_TEXTURE_MAX_ANISOTROPY = 0x84ff;
export const TRANSFORM_FEEDBACK_OVERFLOW = 0x82ec;
export const TRANSFORM_FEEDBACK_STREAM_OVERFLOW = 0x82ed;

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

export const def_glBindFragDataLocationIndexed = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindFragDataLocationIndexed!: Deno.UnsafeFnPointer<typeof def_glBindFragDataLocationIndexed>;

export function BindFragDataLocationIndexed(
  program: GLuint,
  colorNumber: GLuint,
  index: GLuint,
  name: Buffer,
): void {
  fn_glBindFragDataLocationIndexed.call(
    program,
    colorNumber,
    index,
    bufferToFFI(name),
  );
}

export const def_glGetFragDataIndex = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetFragDataIndex!: Deno.UnsafeFnPointer<typeof def_glGetFragDataIndex>;

export function GetFragDataIndex(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetFragDataIndex.call(
    program,
    bufferToFFI(name),
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

let fn_glSamplerParameteri!: Deno.UnsafeFnPointer<typeof def_glSamplerParameteri>;

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

let fn_glSamplerParameteriv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameteriv>;

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

let fn_glSamplerParameterf!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterf>;

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

let fn_glSamplerParameterfv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterfv>;

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

export const def_glSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIiv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIiv>;

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

let fn_glSamplerParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIuiv>;

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

export const def_glGetSamplerParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameteriv>;

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

export const def_glGetSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIiv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIiv>;

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

export const def_glGetSamplerParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterfv>;

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

export const def_glGetSamplerParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIuiv>;

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

export const def_glQueryCounter = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glQueryCounter!: Deno.UnsafeFnPointer<typeof def_glQueryCounter>;

export function QueryCounter(
  id: GLuint,
  target: GLenum,
): void {
  fn_glQueryCounter.call(
    id,
    target,
  );
}

export const def_glGetQueryObjecti64v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjecti64v!: Deno.UnsafeFnPointer<typeof def_glGetQueryObjecti64v>;

export function GetQueryObjecti64v(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjecti64v.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectui64v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectui64v!: Deno.UnsafeFnPointer<typeof def_glGetQueryObjectui64v>;

export function GetQueryObjectui64v(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectui64v.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVertexAttribDivisor = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribDivisor!: Deno.UnsafeFnPointer<typeof def_glVertexAttribDivisor>;

export function VertexAttribDivisor(
  index: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexAttribDivisor.call(
    index,
    divisor,
  );
}

export const def_glVertexAttribP1ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP1ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP1ui>;

export function VertexAttribP1ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP1ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP1uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP1uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP1uiv>;

export function VertexAttribP1uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP1uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP2ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP2ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP2ui>;

export function VertexAttribP2ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP2ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP2uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP2uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP2uiv>;

export function VertexAttribP2uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP2uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP3ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP3ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP3ui>;

export function VertexAttribP3ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP3ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP3uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP3uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP3uiv>;

export function VertexAttribP3uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP3uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP4ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP4ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP4ui>;

export function VertexAttribP4ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP4ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP4uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP4uiv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP4uiv>;

export function VertexAttribP4uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP4uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexP2ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP2ui!: Deno.UnsafeFnPointer<typeof def_glVertexP2ui>;

export function VertexP2ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP2ui.call(
    type,
    value,
  );
}

export const def_glVertexP2uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP2uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP2uiv>;

export function VertexP2uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP2uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glVertexP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP3ui!: Deno.UnsafeFnPointer<typeof def_glVertexP3ui>;

export function VertexP3ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP3ui.call(
    type,
    value,
  );
}

export const def_glVertexP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP3uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP3uiv>;

export function VertexP3uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP3uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glVertexP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP4ui!: Deno.UnsafeFnPointer<typeof def_glVertexP4ui>;

export function VertexP4ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP4ui.call(
    type,
    value,
  );
}

export const def_glVertexP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP4uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP4uiv>;

export function VertexP4uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP4uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glTexCoordP1ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP1ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP1ui>;

export function TexCoordP1ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP1ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP1uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP1uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP1uiv>;

export function TexCoordP1uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP1uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP2ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP2ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP2ui>;

export function TexCoordP2ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP2ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP2uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP2uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP2uiv>;

export function TexCoordP2uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP2uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP3ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP3ui>;

export function TexCoordP3ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP3ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP3uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP3uiv>;

export function TexCoordP3uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP3uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP4ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP4ui>;

export function TexCoordP4ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP4ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP4uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP4uiv>;

export function TexCoordP4uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP4uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP1ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP1ui!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP1ui>;

export function MultiTexCoordP1ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP1ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP1uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP1uiv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP1uiv>;

export function MultiTexCoordP1uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP1uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP2ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP2ui!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP2ui>;

export function MultiTexCoordP2ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP2ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP2uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP2uiv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP2uiv>;

export function MultiTexCoordP2uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP2uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP3ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP3ui!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP3ui>;

export function MultiTexCoordP3ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP3ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP3uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP3uiv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP3uiv>;

export function MultiTexCoordP3uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP3uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP4ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP4ui!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP4ui>;

export function MultiTexCoordP4ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP4ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP4uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP4uiv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordP4uiv>;

export function MultiTexCoordP4uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP4uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glNormalP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNormalP3ui!: Deno.UnsafeFnPointer<typeof def_glNormalP3ui>;

export function NormalP3ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glNormalP3ui.call(
    type,
    coords,
  );
}

export const def_glNormalP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalP3uiv!: Deno.UnsafeFnPointer<typeof def_glNormalP3uiv>;

export function NormalP3uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glNormalP3uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glColorP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glColorP3ui!: Deno.UnsafeFnPointer<typeof def_glColorP3ui>;

export function ColorP3ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glColorP3ui.call(
    type,
    color,
  );
}

export const def_glColorP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glColorP3uiv!: Deno.UnsafeFnPointer<typeof def_glColorP3uiv>;

export function ColorP3uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glColorP3uiv.call(
    type,
    bufferToFFI(color),
  );
}

export const def_glColorP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glColorP4ui!: Deno.UnsafeFnPointer<typeof def_glColorP4ui>;

export function ColorP4ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glColorP4ui.call(
    type,
    color,
  );
}

export const def_glColorP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glColorP4uiv!: Deno.UnsafeFnPointer<typeof def_glColorP4uiv>;

export function ColorP4uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glColorP4uiv.call(
    type,
    bufferToFFI(color),
  );
}

export const def_glSecondaryColorP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSecondaryColorP3ui!: Deno.UnsafeFnPointer<typeof def_glSecondaryColorP3ui>;

export function SecondaryColorP3ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glSecondaryColorP3ui.call(
    type,
    color,
  );
}

export const def_glSecondaryColorP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glSecondaryColorP3uiv!: Deno.UnsafeFnPointer<typeof def_glSecondaryColorP3uiv>;

export function SecondaryColorP3uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glSecondaryColorP3uiv.call(
    type,
    bufferToFFI(color),
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

let fn_glBlendEquationSeparatei!: Deno.UnsafeFnPointer<typeof def_glBlendEquationSeparatei>;

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

let fn_glBlendFuncSeparatei!: Deno.UnsafeFnPointer<typeof def_glBlendFuncSeparatei>;

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

export const def_glDrawArraysIndirect = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawArraysIndirect!: Deno.UnsafeFnPointer<typeof def_glDrawArraysIndirect>;

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

let fn_glDrawElementsIndirect!: Deno.UnsafeFnPointer<typeof def_glDrawElementsIndirect>;

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

export const def_glUniform1d = {
  parameters: ["i32", "f64"],
  result: "void",
} as const;

let fn_glUniform1d!: Deno.UnsafeFnPointer<typeof def_glUniform1d>;

export function Uniform1d(
  location: GLint,
  x: GLdouble,
): void {
  fn_glUniform1d.call(
    location,
    x,
  );
}

export const def_glUniform2d = {
  parameters: ["i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform2d!: Deno.UnsafeFnPointer<typeof def_glUniform2d>;

export function Uniform2d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glUniform2d.call(
    location,
    x,
    y,
  );
}

export const def_glUniform3d = {
  parameters: ["i32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform3d!: Deno.UnsafeFnPointer<typeof def_glUniform3d>;

export function Uniform3d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glUniform3d.call(
    location,
    x,
    y,
    z,
  );
}

export const def_glUniform4d = {
  parameters: ["i32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glUniform4d!: Deno.UnsafeFnPointer<typeof def_glUniform4d>;

export function Uniform4d(
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glUniform4d.call(
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glUniform1dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform1dv!: Deno.UnsafeFnPointer<typeof def_glUniform1dv>;

export function Uniform1dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform1dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform2dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform2dv!: Deno.UnsafeFnPointer<typeof def_glUniform2dv>;

export function Uniform2dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform2dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform3dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform3dv!: Deno.UnsafeFnPointer<typeof def_glUniform3dv>;

export function Uniform3dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform3dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniform4dv = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniform4dv!: Deno.UnsafeFnPointer<typeof def_glUniform4dv>;

export function Uniform4dv(
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glUniform4dv.call(
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2dv>;

export function UniformMatrix2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3dv>;

export function UniformMatrix3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4dv>;

export function UniformMatrix4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x3dv>;

export function UniformMatrix2x3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix2x4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix2x4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix2x4dv>;

export function UniformMatrix2x4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix2x4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x2dv>;

export function UniformMatrix3x2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix3x4dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix3x4dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix3x4dv>;

export function UniformMatrix3x4dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix3x4dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x2dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x2dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x2dv>;

export function UniformMatrix4x2dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x2dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glUniformMatrix4x3dv = {
  parameters: ["i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glUniformMatrix4x3dv!: Deno.UnsafeFnPointer<typeof def_glUniformMatrix4x3dv>;

export function UniformMatrix4x3dv(
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glUniformMatrix4x3dv.call(
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glGetUniformdv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformdv!: Deno.UnsafeFnPointer<typeof def_glGetUniformdv>;

export function GetUniformdv(
  program: GLuint,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformdv.call(
    program,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetSubroutineUniformLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetSubroutineUniformLocation!: Deno.UnsafeFnPointer<typeof def_glGetSubroutineUniformLocation>;

export function GetSubroutineUniformLocation(
  program: GLuint,
  shadertype: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetSubroutineUniformLocation.call(
    program,
    shadertype,
    bufferToFFI(name),
  );
}

export const def_glGetSubroutineIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetSubroutineIndex!: Deno.UnsafeFnPointer<typeof def_glGetSubroutineIndex>;

export function GetSubroutineIndex(
  program: GLuint,
  shadertype: GLenum,
  name: Buffer,
): GLuint {
  return fn_glGetSubroutineIndex.call(
    program,
    shadertype,
    bufferToFFI(name),
  );
}

export const def_glGetActiveSubroutineUniformiv = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineUniformiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineUniformiv>;

export function GetActiveSubroutineUniformiv(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  pname: GLenum,
  values: Buffer,
): void {
  fn_glGetActiveSubroutineUniformiv.call(
    program,
    shadertype,
    index,
    pname,
    bufferToFFI(values),
  );
}

export const def_glGetActiveSubroutineUniformName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineUniformName!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineUniformName>;

export function GetActiveSubroutineUniformName(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveSubroutineUniformName.call(
    program,
    shadertype,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glGetActiveSubroutineName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveSubroutineName!: Deno.UnsafeFnPointer<typeof def_glGetActiveSubroutineName>;

export function GetActiveSubroutineName(
  program: GLuint,
  shadertype: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveSubroutineName.call(
    program,
    shadertype,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glUniformSubroutinesuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glUniformSubroutinesuiv!: Deno.UnsafeFnPointer<typeof def_glUniformSubroutinesuiv>;

export function UniformSubroutinesuiv(
  shadertype: GLenum,
  count: GLsizei,
  indices: Buffer,
): void {
  fn_glUniformSubroutinesuiv.call(
    shadertype,
    count,
    bufferToFFI(indices),
  );
}

export const def_glGetUniformSubroutineuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetUniformSubroutineuiv!: Deno.UnsafeFnPointer<typeof def_glGetUniformSubroutineuiv>;

export function GetUniformSubroutineuiv(
  shadertype: GLenum,
  location: GLint,
  params: Buffer,
): void {
  fn_glGetUniformSubroutineuiv.call(
    shadertype,
    location,
    bufferToFFI(params),
  );
}

export const def_glGetProgramStageiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramStageiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramStageiv>;

export function GetProgramStageiv(
  program: GLuint,
  shadertype: GLenum,
  pname: GLenum,
  values: Buffer,
): void {
  fn_glGetProgramStageiv.call(
    program,
    shadertype,
    pname,
    bufferToFFI(values),
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

export const def_glPatchParameterfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPatchParameterfv!: Deno.UnsafeFnPointer<typeof def_glPatchParameterfv>;

export function PatchParameterfv(
  pname: GLenum,
  values: Buffer,
): void {
  fn_glPatchParameterfv.call(
    pname,
    bufferToFFI(values),
  );
}

export const def_glBindTransformFeedback = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glBindTransformFeedback>;

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

let fn_glDeleteTransformFeedbacks!: Deno.UnsafeFnPointer<typeof def_glDeleteTransformFeedbacks>;

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

let fn_glGenTransformFeedbacks!: Deno.UnsafeFnPointer<typeof def_glGenTransformFeedbacks>;

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

let fn_glIsTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glIsTransformFeedback>;

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

let fn_glPauseTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glPauseTransformFeedback>;

export function PauseTransformFeedback(): void {
  fn_glPauseTransformFeedback.call();
}

export const def_glResumeTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glResumeTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glResumeTransformFeedback>;

export function ResumeTransformFeedback(): void {
  fn_glResumeTransformFeedback.call();
}

export const def_glDrawTransformFeedback = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedback!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedback>;

export function DrawTransformFeedback(
  mode: GLenum,
  id: GLuint,
): void {
  fn_glDrawTransformFeedback.call(
    mode,
    id,
  );
}

export const def_glDrawTransformFeedbackStream = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedbackStream!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedbackStream>;

export function DrawTransformFeedbackStream(
  mode: GLenum,
  id: GLuint,
  stream: GLuint,
): void {
  fn_glDrawTransformFeedbackStream.call(
    mode,
    id,
    stream,
  );
}

export const def_glBeginQueryIndexed = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBeginQueryIndexed!: Deno.UnsafeFnPointer<typeof def_glBeginQueryIndexed>;

export function BeginQueryIndexed(
  target: GLenum,
  index: GLuint,
  id: GLuint,
): void {
  fn_glBeginQueryIndexed.call(
    target,
    index,
    id,
  );
}

export const def_glEndQueryIndexed = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEndQueryIndexed!: Deno.UnsafeFnPointer<typeof def_glEndQueryIndexed>;

export function EndQueryIndexed(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEndQueryIndexed.call(
    target,
    index,
  );
}

export const def_glGetQueryIndexediv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryIndexediv!: Deno.UnsafeFnPointer<typeof def_glGetQueryIndexediv>;

export function GetQueryIndexediv(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryIndexediv.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glReleaseShaderCompiler = {
  parameters: [],
  result: "void",
} as const;

let fn_glReleaseShaderCompiler!: Deno.UnsafeFnPointer<typeof def_glReleaseShaderCompiler>;

export function ReleaseShaderCompiler(): void {
  fn_glReleaseShaderCompiler.call();
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

export const def_glGetShaderPrecisionFormat = {
  parameters: ["u32", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetShaderPrecisionFormat!: Deno.UnsafeFnPointer<typeof def_glGetShaderPrecisionFormat>;

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

let fn_glProgramParameteri!: Deno.UnsafeFnPointer<typeof def_glProgramParameteri>;

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

let fn_glActiveShaderProgram!: Deno.UnsafeFnPointer<typeof def_glActiveShaderProgram>;

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

let fn_glCreateShaderProgramv!: Deno.UnsafeFnPointer<typeof def_glCreateShaderProgramv>;

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

let fn_glBindProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glBindProgramPipeline>;

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

let fn_glDeleteProgramPipelines!: Deno.UnsafeFnPointer<typeof def_glDeleteProgramPipelines>;

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

let fn_glGenProgramPipelines!: Deno.UnsafeFnPointer<typeof def_glGenProgramPipelines>;

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

let fn_glIsProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glIsProgramPipeline>;

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

let fn_glGetProgramPipelineiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramPipelineiv>;

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

export const def_glProgramUniform1iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1iv>;

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

export const def_glProgramUniform1fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1fv>;

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

export const def_glProgramUniform1d = {
  parameters: ["u32", "i32", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform1d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1d>;

export function ProgramUniform1d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
): void {
  fn_glProgramUniform1d.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform1dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1dv>;

export function ProgramUniform1dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1ui = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform1ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1ui>;

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

export const def_glProgramUniform1uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1uiv>;

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

export const def_glProgramUniform2iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2iv>;

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

export const def_glProgramUniform2fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2fv>;

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

export const def_glProgramUniform2d = {
  parameters: ["u32", "i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform2d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2d>;

export function ProgramUniform2d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
): void {
  fn_glProgramUniform2d.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform2dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2dv>;

export function ProgramUniform2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2ui = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform2ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2ui>;

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

export const def_glProgramUniform2uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2uiv>;

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

export const def_glProgramUniform3iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3iv>;

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

export const def_glProgramUniform3fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3fv>;

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

export const def_glProgramUniform3d = {
  parameters: ["u32", "i32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform3d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3d>;

export function ProgramUniform3d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
  v2: GLdouble,
): void {
  fn_glProgramUniform3d.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform3dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3dv>;

export function ProgramUniform3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform3ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3ui>;

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

export const def_glProgramUniform3uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3uiv>;

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

export const def_glProgramUniform4iv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4iv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4iv>;

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

export const def_glProgramUniform4fv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4fv>;

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

export const def_glProgramUniform4d = {
  parameters: ["u32", "i32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform4d!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4d>;

export function ProgramUniform4d(
  program: GLuint,
  location: GLint,
  v0: GLdouble,
  v1: GLdouble,
  v2: GLdouble,
  v3: GLdouble,
): void {
  fn_glProgramUniform4d.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform4dv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4dv>;

export function ProgramUniform4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4dv.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4ui = {
  parameters: ["u32", "i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform4ui!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4ui>;

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

export const def_glProgramUniform4uiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4uiv!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4uiv>;

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

export const def_glProgramUniformMatrix2fv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2fv>;

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

let fn_glProgramUniformMatrix3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3fv>;

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

let fn_glProgramUniformMatrix4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4fv>;

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

export const def_glProgramUniformMatrix2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2dv>;

export function ProgramUniformMatrix2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3dv>;

export function ProgramUniformMatrix3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4dv>;

export function ProgramUniformMatrix4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4dv.call(
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

let fn_glProgramUniformMatrix2x3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3fv>;

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

let fn_glProgramUniformMatrix3x2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2fv>;

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

let fn_glProgramUniformMatrix2x4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4fv>;

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

let fn_glProgramUniformMatrix4x2fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2fv>;

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

let fn_glProgramUniformMatrix3x4fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4fv>;

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

let fn_glProgramUniformMatrix4x3fv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3fv>;

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

export const def_glProgramUniformMatrix2x3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3dv>;

export function ProgramUniformMatrix2x3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2dv>;

export function ProgramUniformMatrix3x2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4dv>;

export function ProgramUniformMatrix2x4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2dv>;

export function ProgramUniformMatrix4x2dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4dv>;

export function ProgramUniformMatrix3x4dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4dv.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3dv = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3dv!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3dv>;

export function ProgramUniformMatrix4x3dv(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3dv.call(
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

let fn_glValidateProgramPipeline!: Deno.UnsafeFnPointer<typeof def_glValidateProgramPipeline>;

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

let fn_glGetProgramPipelineInfoLog!: Deno.UnsafeFnPointer<typeof def_glGetProgramPipelineInfoLog>;

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

export const def_glVertexAttribL1d = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL1d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1d>;

export function VertexAttribL1d(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttribL1d.call(
    index,
    x,
  );
}

export const def_glVertexAttribL2d = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL2d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2d>;

export function VertexAttribL2d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttribL2d.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribL3d = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL3d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3d>;

export function VertexAttribL3d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttribL3d.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribL4d = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL4d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4d>;

export function VertexAttribL4d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttribL4d.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribL1dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1dv>;

export function VertexAttribL1dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL2dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL2dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2dv>;

export function VertexAttribL2dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL2dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL3dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL3dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3dv>;

export function VertexAttribL3dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL3dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL4dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL4dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4dv>;

export function VertexAttribL4dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL4dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribLPointer = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribLPointer!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLPointer>;

export function VertexAttribLPointer(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribLPointer.call(
    index,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glGetVertexAttribLdv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLdv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribLdv>;

export function GetVertexAttribLdv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLdv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glViewportArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glViewportArrayv!: Deno.UnsafeFnPointer<typeof def_glViewportArrayv>;

export function ViewportArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glViewportArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glViewportIndexedf = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glViewportIndexedf!: Deno.UnsafeFnPointer<typeof def_glViewportIndexedf>;

export function ViewportIndexedf(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  w: GLfloat,
  h: GLfloat,
): void {
  fn_glViewportIndexedf.call(
    index,
    x,
    y,
    w,
    h,
  );
}

export const def_glViewportIndexedfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glViewportIndexedfv!: Deno.UnsafeFnPointer<typeof def_glViewportIndexedfv>;

export function ViewportIndexedfv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glViewportIndexedfv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glScissorArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glScissorArrayv!: Deno.UnsafeFnPointer<typeof def_glScissorArrayv>;

export function ScissorArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glScissorArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glScissorIndexed = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScissorIndexed!: Deno.UnsafeFnPointer<typeof def_glScissorIndexed>;

export function ScissorIndexed(
  index: GLuint,
  left: GLint,
  bottom: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glScissorIndexed.call(
    index,
    left,
    bottom,
    width,
    height,
  );
}

export const def_glScissorIndexedv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glScissorIndexedv!: Deno.UnsafeFnPointer<typeof def_glScissorIndexedv>;

export function ScissorIndexedv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glScissorIndexedv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeArrayv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDepthRangeArrayv!: Deno.UnsafeFnPointer<typeof def_glDepthRangeArrayv>;

export function DepthRangeArrayv(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glDepthRangeArrayv.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeIndexed = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glDepthRangeIndexed!: Deno.UnsafeFnPointer<typeof def_glDepthRangeIndexed>;

export function DepthRangeIndexed(
  index: GLuint,
  n: GLdouble,
  f: GLdouble,
): void {
  fn_glDepthRangeIndexed.call(
    index,
    n,
    f,
  );
}

export const def_glGetFloati_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloati_v!: Deno.UnsafeFnPointer<typeof def_glGetFloati_v>;

export function GetFloati_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetFloati_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetDoublei_v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDoublei_v!: Deno.UnsafeFnPointer<typeof def_glGetDoublei_v>;

export function GetDoublei_v(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetDoublei_v.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glDrawArraysInstancedBaseInstance = {
  parameters: ["u32", "i32", "i32", "i32", "u32"],
  result: "void",
} as const;

let fn_glDrawArraysInstancedBaseInstance!: Deno.UnsafeFnPointer<typeof def_glDrawArraysInstancedBaseInstance>;

export function DrawArraysInstancedBaseInstance(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
  instancecount: GLsizei,
  baseinstance: GLuint,
): void {
  fn_glDrawArraysInstancedBaseInstance.call(
    mode,
    first,
    count,
    instancecount,
    baseinstance,
  );
}

export const def_glDrawElementsInstancedBaseInstance = {
  parameters: ["u32", "i32", "u32", "buffer", "i32", "u32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedBaseInstance!: Deno.UnsafeFnPointer<typeof def_glDrawElementsInstancedBaseInstance>;

export function DrawElementsInstancedBaseInstance(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  instancecount: GLsizei,
  baseinstance: GLuint,
): void {
  fn_glDrawElementsInstancedBaseInstance.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    instancecount,
    baseinstance,
  );
}

export const def_glDrawElementsInstancedBaseVertexBaseInstance = {
  parameters: ["u32", "i32", "u32", "buffer", "i32", "i32", "u32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedBaseVertexBaseInstance!: Deno.UnsafeFnPointer<typeof def_glDrawElementsInstancedBaseVertexBaseInstance>;

export function DrawElementsInstancedBaseVertexBaseInstance(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  instancecount: GLsizei,
  basevertex: GLint,
  baseinstance: GLuint,
): void {
  fn_glDrawElementsInstancedBaseVertexBaseInstance.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    instancecount,
    basevertex,
    baseinstance,
  );
}

export const def_glGetInternalformativ = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetInternalformativ!: Deno.UnsafeFnPointer<typeof def_glGetInternalformativ>;

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

export const def_glGetActiveAtomicCounterBufferiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveAtomicCounterBufferiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveAtomicCounterBufferiv>;

export function GetActiveAtomicCounterBufferiv(
  program: GLuint,
  bufferIndex: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveAtomicCounterBufferiv.call(
    program,
    bufferIndex,
    pname,
    bufferToFFI(params),
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

export const def_glTexStorage1D = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexStorage1D!: Deno.UnsafeFnPointer<typeof def_glTexStorage1D>;

export function TexStorage1D(
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTexStorage1D.call(
    target,
    levels,
    internalformat,
    width,
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

export const def_glDrawTransformFeedbackInstanced = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedbackInstanced!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedbackInstanced>;

export function DrawTransformFeedbackInstanced(
  mode: GLenum,
  id: GLuint,
  instancecount: GLsizei,
): void {
  fn_glDrawTransformFeedbackInstanced.call(
    mode,
    id,
    instancecount,
  );
}

export const def_glDrawTransformFeedbackStreamInstanced = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedbackStreamInstanced!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedbackStreamInstanced>;

export function DrawTransformFeedbackStreamInstanced(
  mode: GLenum,
  id: GLuint,
  stream: GLuint,
  instancecount: GLsizei,
): void {
  fn_glDrawTransformFeedbackStreamInstanced.call(
    mode,
    id,
    stream,
    instancecount,
  );
}

export const def_glClearBufferData = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferData!: Deno.UnsafeFnPointer<typeof def_glClearBufferData>;

export function ClearBufferData(
  target: GLenum,
  internalformat: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearBufferData.call(
    target,
    internalformat,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearBufferSubData = {
  parameters: ["u32", "u32", "buffer", "isize", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferSubData!: Deno.UnsafeFnPointer<typeof def_glClearBufferSubData>;

export function ClearBufferSubData(
  target: GLenum,
  internalformat: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearBufferSubData.call(
    target,
    internalformat,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    format,
    type,
    bufferToFFI(data),
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

let fn_glDispatchComputeIndirect!: Deno.UnsafeFnPointer<typeof def_glDispatchComputeIndirect>;

export function DispatchComputeIndirect(
  indirect: GLintptr,
): void {
  fn_glDispatchComputeIndirect.call(
    bufferToFFI(indirect),
  );
}

export const def_glCopyImageSubData = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
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

export const def_glFramebufferParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferParameteri!: Deno.UnsafeFnPointer<typeof def_glFramebufferParameteri>;

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

let fn_glGetFramebufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferParameteriv>;

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

export const def_glGetInternalformati64v = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetInternalformati64v!: Deno.UnsafeFnPointer<typeof def_glGetInternalformati64v>;

export function GetInternalformati64v(
  target: GLenum,
  internalformat: GLenum,
  pname: GLenum,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glGetInternalformati64v.call(
    target,
    internalformat,
    pname,
    count,
    bufferToFFI(params),
  );
}

export const def_glInvalidateTexSubImage = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateTexSubImage!: Deno.UnsafeFnPointer<typeof def_glInvalidateTexSubImage>;

export function InvalidateTexSubImage(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glInvalidateTexSubImage.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
  );
}

export const def_glInvalidateTexImage = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateTexImage!: Deno.UnsafeFnPointer<typeof def_glInvalidateTexImage>;

export function InvalidateTexImage(
  texture: GLuint,
  level: GLint,
): void {
  fn_glInvalidateTexImage.call(
    texture,
    level,
  );
}

export const def_glInvalidateBufferSubData = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glInvalidateBufferSubData!: Deno.UnsafeFnPointer<typeof def_glInvalidateBufferSubData>;

export function InvalidateBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glInvalidateBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
  );
}

export const def_glInvalidateBufferData = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glInvalidateBufferData!: Deno.UnsafeFnPointer<typeof def_glInvalidateBufferData>;

export function InvalidateBufferData(
  buffer: GLuint,
): void {
  fn_glInvalidateBufferData.call(
    buffer,
  );
}

export const def_glInvalidateFramebuffer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInvalidateFramebuffer!: Deno.UnsafeFnPointer<typeof def_glInvalidateFramebuffer>;

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

let fn_glInvalidateSubFramebuffer!: Deno.UnsafeFnPointer<typeof def_glInvalidateSubFramebuffer>;

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

export const def_glMultiDrawArraysIndirect = {
  parameters: ["u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawArraysIndirect!: Deno.UnsafeFnPointer<typeof def_glMultiDrawArraysIndirect>;

export function MultiDrawArraysIndirect(
  mode: GLenum,
  indirect: Buffer,
  drawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawArraysIndirect.call(
    mode,
    bufferToFFI(indirect),
    drawcount,
    stride,
  );
}

export const def_glMultiDrawElementsIndirect = {
  parameters: ["u32", "u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawElementsIndirect!: Deno.UnsafeFnPointer<typeof def_glMultiDrawElementsIndirect>;

export function MultiDrawElementsIndirect(
  mode: GLenum,
  type: GLenum,
  indirect: Buffer,
  drawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawElementsIndirect.call(
    mode,
    type,
    bufferToFFI(indirect),
    drawcount,
    stride,
  );
}

export const def_glGetProgramInterfaceiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramInterfaceiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramInterfaceiv>;

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

let fn_glGetProgramResourceIndex!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceIndex>;

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

let fn_glGetProgramResourceName!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceName>;

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

let fn_glGetProgramResourceiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceiv>;

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

let fn_glGetProgramResourceLocation!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceLocation>;

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

export const def_glGetProgramResourceLocationIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetProgramResourceLocationIndex!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceLocationIndex>;

export function GetProgramResourceLocationIndex(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetProgramResourceLocationIndex.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glShaderStorageBlockBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glShaderStorageBlockBinding!: Deno.UnsafeFnPointer<typeof def_glShaderStorageBlockBinding>;

export function ShaderStorageBlockBinding(
  program: GLuint,
  storageBlockIndex: GLuint,
  storageBlockBinding: GLuint,
): void {
  fn_glShaderStorageBlockBinding.call(
    program,
    storageBlockIndex,
    storageBlockBinding,
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
    Deno.UnsafePointer.value(size),
  );
}

export const def_glTexStorage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexStorage2DMultisample!: Deno.UnsafeFnPointer<typeof def_glTexStorage2DMultisample>;

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

export const def_glTexStorage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexStorage3DMultisample!: Deno.UnsafeFnPointer<typeof def_glTexStorage3DMultisample>;

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

export const def_glTextureView = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTextureView!: Deno.UnsafeFnPointer<typeof def_glTextureView>;

export function TextureView(
  texture: GLuint,
  target: GLenum,
  origtexture: GLuint,
  internalformat: GLenum,
  minlevel: GLuint,
  numlevels: GLuint,
  minlayer: GLuint,
  numlayers: GLuint,
): void {
  fn_glTextureView.call(
    texture,
    target,
    origtexture,
    internalformat,
    minlevel,
    numlevels,
    minlayer,
    numlayers,
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

let fn_glVertexAttribFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribFormat>;

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

let fn_glVertexAttribIFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribIFormat>;

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

export const def_glVertexAttribLFormat = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribLFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLFormat>;

export function VertexAttribLFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribLFormat.call(
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

let fn_glVertexAttribBinding!: Deno.UnsafeFnPointer<typeof def_glVertexAttribBinding>;

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

let fn_glVertexBindingDivisor!: Deno.UnsafeFnPointer<typeof def_glVertexBindingDivisor>;

export function VertexBindingDivisor(
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexBindingDivisor.call(
    bindingindex,
    divisor,
  );
}

export const def_glDebugMessageControl = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageControl!: Deno.UnsafeFnPointer<typeof def_glDebugMessageControl>;

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

let fn_glDebugMessageInsert!: Deno.UnsafeFnPointer<typeof def_glDebugMessageInsert>;

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

let fn_glDebugMessageCallback!: Deno.UnsafeFnPointer<typeof def_glDebugMessageCallback>;

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
  parameters: ["u32", "i32", "buffer", "buffer", "buffer", "buffer", "buffer", "buffer"],
  result: "u32",
} as const;

let fn_glGetDebugMessageLog!: Deno.UnsafeFnPointer<typeof def_glGetDebugMessageLog>;

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

let fn_glGetObjectPtrLabel!: Deno.UnsafeFnPointer<typeof def_glGetObjectPtrLabel>;

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

export const def_glBufferStorage = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glBufferStorage!: Deno.UnsafeFnPointer<typeof def_glBufferStorage>;

export function BufferStorage(
  target: GLenum,
  size: GLsizeiptr,
  data: Buffer,
  flags: GLbitfield,
): void {
  fn_glBufferStorage.call(
    target,
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
    flags,
  );
}

export const def_glClearTexImage = {
  parameters: ["u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearTexImage!: Deno.UnsafeFnPointer<typeof def_glClearTexImage>;

export function ClearTexImage(
  texture: GLuint,
  level: GLint,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearTexImage.call(
    texture,
    level,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearTexSubImage = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearTexSubImage!: Deno.UnsafeFnPointer<typeof def_glClearTexSubImage>;

export function ClearTexSubImage(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearTexSubImage.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glBindBuffersBase = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindBuffersBase!: Deno.UnsafeFnPointer<typeof def_glBindBuffersBase>;

export function BindBuffersBase(
  target: GLenum,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
): void {
  fn_glBindBuffersBase.call(
    target,
    first,
    count,
    bufferToFFI(buffers),
  );
}

export const def_glBindBuffersRange = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glBindBuffersRange!: Deno.UnsafeFnPointer<typeof def_glBindBuffersRange>;

export function BindBuffersRange(
  target: GLenum,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  sizes: Buffer,
): void {
  fn_glBindBuffersRange.call(
    target,
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(sizes),
  );
}

export const def_glBindTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindTextures!: Deno.UnsafeFnPointer<typeof def_glBindTextures>;

export function BindTextures(
  first: GLuint,
  count: GLsizei,
  textures: Buffer,
): void {
  fn_glBindTextures.call(
    first,
    count,
    bufferToFFI(textures),
  );
}

export const def_glBindSamplers = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindSamplers!: Deno.UnsafeFnPointer<typeof def_glBindSamplers>;

export function BindSamplers(
  first: GLuint,
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glBindSamplers.call(
    first,
    count,
    bufferToFFI(samplers),
  );
}

export const def_glBindImageTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindImageTextures!: Deno.UnsafeFnPointer<typeof def_glBindImageTextures>;

export function BindImageTextures(
  first: GLuint,
  count: GLsizei,
  textures: Buffer,
): void {
  fn_glBindImageTextures.call(
    first,
    count,
    bufferToFFI(textures),
  );
}

export const def_glBindVertexBuffers = {
  parameters: ["u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glBindVertexBuffers!: Deno.UnsafeFnPointer<typeof def_glBindVertexBuffers>;

export function BindVertexBuffers(
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  strides: Buffer,
): void {
  fn_glBindVertexBuffers.call(
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(strides),
  );
}

export const def_glClipControl = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glClipControl!: Deno.UnsafeFnPointer<typeof def_glClipControl>;

export function ClipControl(
  origin: GLenum,
  depth: GLenum,
): void {
  fn_glClipControl.call(
    origin,
    depth,
  );
}

export const def_glCreateTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateTransformFeedbacks!: Deno.UnsafeFnPointer<typeof def_glCreateTransformFeedbacks>;

export function CreateTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glCreateTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glTransformFeedbackBufferBase = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackBufferBase!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackBufferBase>;

export function TransformFeedbackBufferBase(
  xfb: GLuint,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glTransformFeedbackBufferBase.call(
    xfb,
    index,
    buffer,
  );
}

export const def_glTransformFeedbackBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTransformFeedbackBufferRange!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackBufferRange>;

export function TransformFeedbackBufferRange(
  xfb: GLuint,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTransformFeedbackBufferRange.call(
    xfb,
    index,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glGetTransformFeedbackiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbackiv!: Deno.UnsafeFnPointer<typeof def_glGetTransformFeedbackiv>;

export function GetTransformFeedbackiv(
  xfb: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetTransformFeedbackiv.call(
    xfb,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetTransformFeedbacki_v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbacki_v!: Deno.UnsafeFnPointer<typeof def_glGetTransformFeedbacki_v>;

export function GetTransformFeedbacki_v(
  xfb: GLuint,
  pname: GLenum,
  index: GLuint,
  param: Buffer,
): void {
  fn_glGetTransformFeedbacki_v.call(
    xfb,
    pname,
    index,
    bufferToFFI(param),
  );
}

export const def_glGetTransformFeedbacki64_v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbacki64_v!: Deno.UnsafeFnPointer<typeof def_glGetTransformFeedbacki64_v>;

export function GetTransformFeedbacki64_v(
  xfb: GLuint,
  pname: GLenum,
  index: GLuint,
  param: Buffer,
): void {
  fn_glGetTransformFeedbacki64_v.call(
    xfb,
    pname,
    index,
    bufferToFFI(param),
  );
}

export const def_glCreateBuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateBuffers!: Deno.UnsafeFnPointer<typeof def_glCreateBuffers>;

export function CreateBuffers(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glCreateBuffers.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glNamedBufferStorage = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferStorage!: Deno.UnsafeFnPointer<typeof def_glNamedBufferStorage>;

export function NamedBufferStorage(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  flags: GLbitfield,
): void {
  fn_glNamedBufferStorage.call(
    buffer,
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
    flags,
  );
}

export const def_glNamedBufferData = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferData!: Deno.UnsafeFnPointer<typeof def_glNamedBufferData>;

export function NamedBufferData(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  usage: GLenum,
): void {
  fn_glNamedBufferData.call(
    buffer,
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
    usage,
  );
}

export const def_glNamedBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glNamedBufferSubData!: Deno.UnsafeFnPointer<typeof def_glNamedBufferSubData>;

export function NamedBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glNamedBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glCopyNamedBufferSubData = {
  parameters: ["u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glCopyNamedBufferSubData!: Deno.UnsafeFnPointer<typeof def_glCopyNamedBufferSubData>;

export function CopyNamedBufferSubData(
  readBuffer: GLuint,
  writeBuffer: GLuint,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glCopyNamedBufferSubData.call(
    readBuffer,
    writeBuffer,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glClearNamedBufferData = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferData!: Deno.UnsafeFnPointer<typeof def_glClearNamedBufferData>;

export function ClearNamedBufferData(
  buffer: GLuint,
  internalformat: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferData.call(
    buffer,
    internalformat,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearNamedBufferSubData = {
  parameters: ["u32", "u32", "buffer", "isize", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferSubData!: Deno.UnsafeFnPointer<typeof def_glClearNamedBufferSubData>;

export function ClearNamedBufferSubData(
  buffer: GLuint,
  internalformat: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferSubData.call(
    buffer,
    internalformat,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glMapNamedBuffer = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBuffer!: Deno.UnsafeFnPointer<typeof def_glMapNamedBuffer>;

export function MapNamedBuffer(
  buffer: GLuint,
  access: GLenum,
): Buffer {
  return fn_glMapNamedBuffer.call(
    buffer,
    access,
  );
}

export const def_glMapNamedBufferRange = {
  parameters: ["u32", "buffer", "isize", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBufferRange!: Deno.UnsafeFnPointer<typeof def_glMapNamedBufferRange>;

export function MapNamedBufferRange(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
  access: GLbitfield,
): Buffer {
  return fn_glMapNamedBufferRange.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
    access,
  );
}

export const def_glUnmapNamedBuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glUnmapNamedBuffer!: Deno.UnsafeFnPointer<typeof def_glUnmapNamedBuffer>;

export function UnmapNamedBuffer(
  buffer: GLuint,
): GLboolean {
  return fn_glUnmapNamedBuffer.call(
    buffer,
  );
}

export const def_glFlushMappedNamedBufferRange = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedNamedBufferRange!: Deno.UnsafeFnPointer<typeof def_glFlushMappedNamedBufferRange>;

export function FlushMappedNamedBufferRange(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedNamedBufferRange.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
  );
}

export const def_glGetNamedBufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferParameteriv>;

export function GetNamedBufferParameteriv(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameteriv.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferParameteri64v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameteri64v!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferParameteri64v>;

export function GetNamedBufferParameteri64v(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameteri64v.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferPointerv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferPointerv!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferPointerv>;

export function GetNamedBufferPointerv(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferPointerv.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferSubData!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferSubData>;

export function GetNamedBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glGetNamedBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glCreateFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateFramebuffers!: Deno.UnsafeFnPointer<typeof def_glCreateFramebuffers>;

export function CreateFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glCreateFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glNamedFramebufferRenderbuffer = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferRenderbuffer>;

export function NamedFramebufferRenderbuffer(
  framebuffer: GLuint,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glNamedFramebufferRenderbuffer.call(
    framebuffer,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glNamedFramebufferParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferParameteri!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferParameteri>;

export function NamedFramebufferParameteri(
  framebuffer: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glNamedFramebufferParameteri.call(
    framebuffer,
    pname,
    param,
  );
}

export const def_glNamedFramebufferTexture = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTexture!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTexture>;

export function NamedFramebufferTexture(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glNamedFramebufferTexture.call(
    framebuffer,
    attachment,
    texture,
    level,
  );
}

export const def_glNamedFramebufferTextureLayer = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTextureLayer!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTextureLayer>;

export function NamedFramebufferTextureLayer(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glNamedFramebufferTextureLayer.call(
    framebuffer,
    attachment,
    texture,
    level,
    layer,
  );
}

export const def_glNamedFramebufferDrawBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferDrawBuffer!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferDrawBuffer>;

export function NamedFramebufferDrawBuffer(
  framebuffer: GLuint,
  buf: GLenum,
): void {
  fn_glNamedFramebufferDrawBuffer.call(
    framebuffer,
    buf,
  );
}

export const def_glNamedFramebufferDrawBuffers = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedFramebufferDrawBuffers!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferDrawBuffers>;

export function NamedFramebufferDrawBuffers(
  framebuffer: GLuint,
  n: GLsizei,
  bufs: Buffer,
): void {
  fn_glNamedFramebufferDrawBuffers.call(
    framebuffer,
    n,
    bufferToFFI(bufs),
  );
}

export const def_glNamedFramebufferReadBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferReadBuffer!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferReadBuffer>;

export function NamedFramebufferReadBuffer(
  framebuffer: GLuint,
  src: GLenum,
): void {
  fn_glNamedFramebufferReadBuffer.call(
    framebuffer,
    src,
  );
}

export const def_glInvalidateNamedFramebufferData = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInvalidateNamedFramebufferData!: Deno.UnsafeFnPointer<typeof def_glInvalidateNamedFramebufferData>;

export function InvalidateNamedFramebufferData(
  framebuffer: GLuint,
  numAttachments: GLsizei,
  attachments: Buffer,
): void {
  fn_glInvalidateNamedFramebufferData.call(
    framebuffer,
    numAttachments,
    bufferToFFI(attachments),
  );
}

export const def_glInvalidateNamedFramebufferSubData = {
  parameters: ["u32", "i32", "buffer", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateNamedFramebufferSubData!: Deno.UnsafeFnPointer<typeof def_glInvalidateNamedFramebufferSubData>;

export function InvalidateNamedFramebufferSubData(
  framebuffer: GLuint,
  numAttachments: GLsizei,
  attachments: Buffer,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glInvalidateNamedFramebufferSubData.call(
    framebuffer,
    numAttachments,
    bufferToFFI(attachments),
    x,
    y,
    width,
    height,
  );
}

export const def_glClearNamedFramebufferiv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferiv!: Deno.UnsafeFnPointer<typeof def_glClearNamedFramebufferiv>;

export function ClearNamedFramebufferiv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferiv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferuiv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferuiv!: Deno.UnsafeFnPointer<typeof def_glClearNamedFramebufferuiv>;

export function ClearNamedFramebufferuiv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferuiv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferfv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferfv!: Deno.UnsafeFnPointer<typeof def_glClearNamedFramebufferfv>;

export function ClearNamedFramebufferfv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferfv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferfi = {
  parameters: ["u32", "u32", "i32", "f32", "i32"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferfi!: Deno.UnsafeFnPointer<typeof def_glClearNamedFramebufferfi>;

export function ClearNamedFramebufferfi(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  depth: GLfloat,
  stencil: GLint,
): void {
  fn_glClearNamedFramebufferfi.call(
    framebuffer,
    buffer,
    drawbuffer,
    depth,
    stencil,
  );
}

export const def_glBlitNamedFramebuffer = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlitNamedFramebuffer!: Deno.UnsafeFnPointer<typeof def_glBlitNamedFramebuffer>;

export function BlitNamedFramebuffer(
  readFramebuffer: GLuint,
  drawFramebuffer: GLuint,
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
  fn_glBlitNamedFramebuffer.call(
    readFramebuffer,
    drawFramebuffer,
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

export const def_glCheckNamedFramebufferStatus = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glCheckNamedFramebufferStatus!: Deno.UnsafeFnPointer<typeof def_glCheckNamedFramebufferStatus>;

export function CheckNamedFramebufferStatus(
  framebuffer: GLuint,
  target: GLenum,
): GLenum {
  return fn_glCheckNamedFramebufferStatus.call(
    framebuffer,
    target,
  );
}

export const def_glGetNamedFramebufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetNamedFramebufferParameteriv>;

export function GetNamedFramebufferParameteriv(
  framebuffer: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetNamedFramebufferParameteriv.call(
    framebuffer,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetNamedFramebufferAttachmentParameteriv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferAttachmentParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetNamedFramebufferAttachmentParameteriv>;

export function GetNamedFramebufferAttachmentParameteriv(
  framebuffer: GLuint,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedFramebufferAttachmentParameteriv.call(
    framebuffer,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateRenderbuffers!: Deno.UnsafeFnPointer<typeof def_glCreateRenderbuffers>;

export function CreateRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glCreateRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glNamedRenderbufferStorage = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorage!: Deno.UnsafeFnPointer<typeof def_glNamedRenderbufferStorage>;

export function NamedRenderbufferStorage(
  renderbuffer: GLuint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorage.call(
    renderbuffer,
    internalformat,
    width,
    height,
  );
}

export const def_glNamedRenderbufferStorageMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorageMultisample!: Deno.UnsafeFnPointer<typeof def_glNamedRenderbufferStorageMultisample>;

export function NamedRenderbufferStorageMultisample(
  renderbuffer: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorageMultisample.call(
    renderbuffer,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glGetNamedRenderbufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedRenderbufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetNamedRenderbufferParameteriv>;

export function GetNamedRenderbufferParameteriv(
  renderbuffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedRenderbufferParameteriv.call(
    renderbuffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateTextures!: Deno.UnsafeFnPointer<typeof def_glCreateTextures>;

export function CreateTextures(
  target: GLenum,
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glCreateTextures.call(
    target,
    n,
    bufferToFFI(textures),
  );
}

export const def_glTextureBuffer = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTextureBuffer!: Deno.UnsafeFnPointer<typeof def_glTextureBuffer>;

export function TextureBuffer(
  texture: GLuint,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glTextureBuffer.call(
    texture,
    internalformat,
    buffer,
  );
}

export const def_glTextureBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTextureBufferRange!: Deno.UnsafeFnPointer<typeof def_glTextureBufferRange>;

export function TextureBufferRange(
  texture: GLuint,
  internalformat: GLenum,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTextureBufferRange.call(
    texture,
    internalformat,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glTextureStorage1D = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage1D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage1D>;

export function TextureStorage1D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTextureStorage1D.call(
    texture,
    levels,
    internalformat,
    width,
  );
}

export const def_glTextureStorage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage2D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2D>;

export function TextureStorage2D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTextureStorage2D.call(
    texture,
    levels,
    internalformat,
    width,
    height,
  );
}

export const def_glTextureStorage3D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage3D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3D>;

export function TextureStorage3D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTextureStorage3D.call(
    texture,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

export const def_glTextureStorage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage2DMultisample!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2DMultisample>;

export function TextureStorage2DMultisample(
  texture: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage2DMultisample.call(
    texture,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glTextureStorage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage3DMultisample!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3DMultisample>;

export function TextureStorage3DMultisample(
  texture: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage3DMultisample.call(
    texture,
    samples,
    internalformat,
    width,
    height,
    depth,
    fixedsamplelocations,
  );
}

export const def_glTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage1D!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage1D>;

export function TextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage2D!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage2D>;

export function TextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage2D.call(
    texture,
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

export const def_glTextureSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage3D!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage3D>;

export function TextureSubImage3D(
  texture: GLuint,
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
  fn_glTextureSubImage3D.call(
    texture,
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

export const def_glCompressedTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage1D!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage1D>;

export function CompressedTextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTextureSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage2D!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage2D>;

export function CompressedTextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTextureSubImage2D.call(
    texture,
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

export const def_glCompressedTextureSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage3D!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage3D>;

export function CompressedTextureSubImage3D(
  texture: GLuint,
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
  fn_glCompressedTextureSubImage3D.call(
    texture,
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

export const def_glCopyTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage1D!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage1D>;

export function CopyTextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyTextureSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage2D!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage2D>;

export function CopyTextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTextureSubImage2D.call(
    texture,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glCopyTextureSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage3D!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage3D>;

export function CopyTextureSubImage3D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTextureSubImage3D.call(
    texture,
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

export const def_glTextureParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTextureParameterf!: Deno.UnsafeFnPointer<typeof def_glTextureParameterf>;

export function TextureParameterf(
  texture: GLuint,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTextureParameterf.call(
    texture,
    pname,
    param,
  );
}

export const def_glTextureParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterfv!: Deno.UnsafeFnPointer<typeof def_glTextureParameterfv>;

export function TextureParameterfv(
  texture: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTextureParameterfv.call(
    texture,
    pname,
    bufferToFFI(param),
  );
}

export const def_glTextureParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureParameteri!: Deno.UnsafeFnPointer<typeof def_glTextureParameteri>;

export function TextureParameteri(
  texture: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTextureParameteri.call(
    texture,
    pname,
    param,
  );
}

export const def_glTextureParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIiv!: Deno.UnsafeFnPointer<typeof def_glTextureParameterIiv>;

export function TextureParameterIiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glTextureParameterIuiv>;

export function TextureParameterIuiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIuiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameteriv!: Deno.UnsafeFnPointer<typeof def_glTextureParameteriv>;

export function TextureParameteriv(
  texture: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTextureParameteriv.call(
    texture,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGenerateTextureMipmap = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateTextureMipmap!: Deno.UnsafeFnPointer<typeof def_glGenerateTextureMipmap>;

export function GenerateTextureMipmap(
  texture: GLuint,
): void {
  fn_glGenerateTextureMipmap.call(
    texture,
  );
}

export const def_glBindTextureUnit = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTextureUnit!: Deno.UnsafeFnPointer<typeof def_glBindTextureUnit>;

export function BindTextureUnit(
  unit: GLuint,
  texture: GLuint,
): void {
  fn_glBindTextureUnit.call(
    unit,
    texture,
  );
}

export const def_glGetTextureImage = {
  parameters: ["u32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureImage!: Deno.UnsafeFnPointer<typeof def_glGetTextureImage>;

export function GetTextureImage(
  texture: GLuint,
  level: GLint,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetTextureImage.call(
    texture,
    level,
    format,
    type,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetCompressedTextureImage = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTextureImage!: Deno.UnsafeFnPointer<typeof def_glGetCompressedTextureImage>;

export function GetCompressedTextureImage(
  texture: GLuint,
  level: GLint,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetCompressedTextureImage.call(
    texture,
    level,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetTextureLevelParameterfv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetTextureLevelParameterfv>;

export function GetTextureLevelParameterfv(
  texture: GLuint,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameterfv.call(
    texture,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureLevelParameteriv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetTextureLevelParameteriv>;

export function GetTextureLevelParameteriv(
  texture: GLuint,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameteriv.call(
    texture,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterfv>;

export function GetTextureParameterfv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterfv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIiv!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterIiv>;

export function GetTextureParameterIiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterIuiv>;

export function GetTextureParameterIuiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIuiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameteriv>;

export function GetTextureParameteriv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameteriv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateVertexArrays!: Deno.UnsafeFnPointer<typeof def_glCreateVertexArrays>;

export function CreateVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glCreateVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glDisableVertexArrayAttrib = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableVertexArrayAttrib!: Deno.UnsafeFnPointer<typeof def_glDisableVertexArrayAttrib>;

export function DisableVertexArrayAttrib(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glDisableVertexArrayAttrib.call(
    vaobj,
    index,
  );
}

export const def_glEnableVertexArrayAttrib = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableVertexArrayAttrib!: Deno.UnsafeFnPointer<typeof def_glEnableVertexArrayAttrib>;

export function EnableVertexArrayAttrib(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glEnableVertexArrayAttrib.call(
    vaobj,
    index,
  );
}

export const def_glVertexArrayElementBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayElementBuffer!: Deno.UnsafeFnPointer<typeof def_glVertexArrayElementBuffer>;

export function VertexArrayElementBuffer(
  vaobj: GLuint,
  buffer: GLuint,
): void {
  fn_glVertexArrayElementBuffer.call(
    vaobj,
    buffer,
  );
}

export const def_glVertexArrayVertexBuffer = {
  parameters: ["u32", "u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexBuffer!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexBuffer>;

export function VertexArrayVertexBuffer(
  vaobj: GLuint,
  bindingindex: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  stride: GLsizei,
): void {
  fn_glVertexArrayVertexBuffer.call(
    vaobj,
    bindingindex,
    buffer,
    bufferToFFI(offset),
    stride,
  );
}

export const def_glVertexArrayVertexBuffers = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexBuffers!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexBuffers>;

export function VertexArrayVertexBuffers(
  vaobj: GLuint,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  strides: Buffer,
): void {
  fn_glVertexArrayVertexBuffers.call(
    vaobj,
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(strides),
  );
}

export const def_glVertexArrayAttribBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribBinding!: Deno.UnsafeFnPointer<typeof def_glVertexArrayAttribBinding>;

export function VertexArrayAttribBinding(
  vaobj: GLuint,
  attribindex: GLuint,
  bindingindex: GLuint,
): void {
  fn_glVertexArrayAttribBinding.call(
    vaobj,
    attribindex,
    bindingindex,
  );
}

export const def_glVertexArrayAttribFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribFormat!: Deno.UnsafeFnPointer<typeof def_glVertexArrayAttribFormat>;

export function VertexArrayAttribFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    normalized,
    relativeoffset,
  );
}

export const def_glVertexArrayAttribIFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribIFormat!: Deno.UnsafeFnPointer<typeof def_glVertexArrayAttribIFormat>;

export function VertexArrayAttribIFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribIFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayAttribLFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribLFormat!: Deno.UnsafeFnPointer<typeof def_glVertexArrayAttribLFormat>;

export function VertexArrayAttribLFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribLFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayBindingDivisor = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayBindingDivisor!: Deno.UnsafeFnPointer<typeof def_glVertexArrayBindingDivisor>;

export function VertexArrayBindingDivisor(
  vaobj: GLuint,
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexArrayBindingDivisor.call(
    vaobj,
    bindingindex,
    divisor,
  );
}

export const def_glGetVertexArrayiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayiv!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayiv>;

export function GetVertexArrayiv(
  vaobj: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayiv.call(
    vaobj,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayIndexediv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIndexediv!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayIndexediv>;

export function GetVertexArrayIndexediv(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIndexediv.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayIndexed64iv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIndexed64iv!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayIndexed64iv>;

export function GetVertexArrayIndexed64iv(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIndexed64iv.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glCreateSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateSamplers!: Deno.UnsafeFnPointer<typeof def_glCreateSamplers>;

export function CreateSamplers(
  n: GLsizei,
  samplers: Buffer,
): void {
  fn_glCreateSamplers.call(
    n,
    bufferToFFI(samplers),
  );
}

export const def_glCreateProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateProgramPipelines!: Deno.UnsafeFnPointer<typeof def_glCreateProgramPipelines>;

export function CreateProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glCreateProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glCreateQueries = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateQueries!: Deno.UnsafeFnPointer<typeof def_glCreateQueries>;

export function CreateQueries(
  target: GLenum,
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glCreateQueries.call(
    target,
    n,
    bufferToFFI(ids),
  );
}

export const def_glGetQueryBufferObjecti64v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjecti64v!: Deno.UnsafeFnPointer<typeof def_glGetQueryBufferObjecti64v>;

export function GetQueryBufferObjecti64v(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjecti64v.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectiv!: Deno.UnsafeFnPointer<typeof def_glGetQueryBufferObjectiv>;

export function GetQueryBufferObjectiv(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectiv.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectui64v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectui64v!: Deno.UnsafeFnPointer<typeof def_glGetQueryBufferObjectui64v>;

export function GetQueryBufferObjectui64v(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectui64v.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectuiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectuiv!: Deno.UnsafeFnPointer<typeof def_glGetQueryBufferObjectuiv>;

export function GetQueryBufferObjectuiv(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectuiv.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glMemoryBarrierByRegion = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMemoryBarrierByRegion!: Deno.UnsafeFnPointer<typeof def_glMemoryBarrierByRegion>;

export function MemoryBarrierByRegion(
  barriers: GLbitfield,
): void {
  fn_glMemoryBarrierByRegion.call(
    barriers,
  );
}

export const def_glGetTextureSubImage = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureSubImage!: Deno.UnsafeFnPointer<typeof def_glGetTextureSubImage>;

export function GetTextureSubImage(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetTextureSubImage.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    format,
    type,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetCompressedTextureSubImage = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTextureSubImage!: Deno.UnsafeFnPointer<typeof def_glGetCompressedTextureSubImage>;

export function GetCompressedTextureSubImage(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetCompressedTextureSubImage.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    bufSize,
    bufferToFFI(pixels),
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

export const def_glGetnCompressedTexImage = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnCompressedTexImage!: Deno.UnsafeFnPointer<typeof def_glGetnCompressedTexImage>;

export function GetnCompressedTexImage(
  target: GLenum,
  lod: GLint,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetnCompressedTexImage.call(
    target,
    lod,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetnTexImage = {
  parameters: ["u32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnTexImage!: Deno.UnsafeFnPointer<typeof def_glGetnTexImage>;

export function GetnTexImage(
  target: GLenum,
  level: GLint,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetnTexImage.call(
    target,
    level,
    format,
    type,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetnUniformdv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformdv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformdv>;

export function GetnUniformdv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformdv.call(
    program,
    location,
    bufSize,
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

export const def_glGetnMapdv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapdv!: Deno.UnsafeFnPointer<typeof def_glGetnMapdv>;

export function GetnMapdv(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapdv.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnMapfv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapfv!: Deno.UnsafeFnPointer<typeof def_glGetnMapfv>;

export function GetnMapfv(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapfv.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnMapiv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMapiv!: Deno.UnsafeFnPointer<typeof def_glGetnMapiv>;

export function GetnMapiv(
  target: GLenum,
  query: GLenum,
  bufSize: GLsizei,
  v: Buffer,
): void {
  fn_glGetnMapiv.call(
    target,
    query,
    bufSize,
    bufferToFFI(v),
  );
}

export const def_glGetnPixelMapfv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapfv!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapfv>;

export function GetnPixelMapfv(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapfv.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPixelMapuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapuiv!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapuiv>;

export function GetnPixelMapuiv(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapuiv.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPixelMapusv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPixelMapusv!: Deno.UnsafeFnPointer<typeof def_glGetnPixelMapusv>;

export function GetnPixelMapusv(
  map: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnPixelMapusv.call(
    map,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnPolygonStipple = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnPolygonStipple!: Deno.UnsafeFnPointer<typeof def_glGetnPolygonStipple>;

export function GetnPolygonStipple(
  bufSize: GLsizei,
  pattern: Buffer,
): void {
  fn_glGetnPolygonStipple.call(
    bufSize,
    bufferToFFI(pattern),
  );
}

export const def_glGetnColorTable = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnColorTable!: Deno.UnsafeFnPointer<typeof def_glGetnColorTable>;

export function GetnColorTable(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  table: Buffer,
): void {
  fn_glGetnColorTable.call(
    target,
    format,
    type,
    bufSize,
    bufferToFFI(table),
  );
}

export const def_glGetnConvolutionFilter = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnConvolutionFilter!: Deno.UnsafeFnPointer<typeof def_glGetnConvolutionFilter>;

export function GetnConvolutionFilter(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  image: Buffer,
): void {
  fn_glGetnConvolutionFilter.call(
    target,
    format,
    type,
    bufSize,
    bufferToFFI(image),
  );
}

export const def_glGetnSeparableFilter = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetnSeparableFilter!: Deno.UnsafeFnPointer<typeof def_glGetnSeparableFilter>;

export function GetnSeparableFilter(
  target: GLenum,
  format: GLenum,
  type: GLenum,
  rowBufSize: GLsizei,
  row: Buffer,
  columnBufSize: GLsizei,
  column: Buffer,
  span: Buffer,
): void {
  fn_glGetnSeparableFilter.call(
    target,
    format,
    type,
    rowBufSize,
    bufferToFFI(row),
    columnBufSize,
    bufferToFFI(column),
    bufferToFFI(span),
  );
}

export const def_glGetnHistogram = {
  parameters: ["u32", "u8", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnHistogram!: Deno.UnsafeFnPointer<typeof def_glGetnHistogram>;

export function GetnHistogram(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnHistogram.call(
    target,
    reset,
    format,
    type,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glGetnMinmax = {
  parameters: ["u32", "u8", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnMinmax!: Deno.UnsafeFnPointer<typeof def_glGetnMinmax>;

export function GetnMinmax(
  target: GLenum,
  reset: GLboolean,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  values: Buffer,
): void {
  fn_glGetnMinmax.call(
    target,
    reset,
    format,
    type,
    bufSize,
    bufferToFFI(values),
  );
}

export const def_glTextureBarrier = {
  parameters: [],
  result: "void",
} as const;

let fn_glTextureBarrier!: Deno.UnsafeFnPointer<typeof def_glTextureBarrier>;

export function TextureBarrier(): void {
  fn_glTextureBarrier.call();
}

export const def_glSpecializeShader = {
  parameters: ["u32", "buffer", "u32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glSpecializeShader!: Deno.UnsafeFnPointer<typeof def_glSpecializeShader>;

export function SpecializeShader(
  shader: GLuint,
  pEntryPoint: Buffer,
  numSpecializationConstants: GLuint,
  pConstantIndex: Buffer,
  pConstantValue: Buffer,
): void {
  fn_glSpecializeShader.call(
    shader,
    bufferToFFI(pEntryPoint),
    numSpecializationConstants,
    bufferToFFI(pConstantIndex),
    bufferToFFI(pConstantValue),
  );
}

export const def_glMultiDrawArraysIndirectCount = {
  parameters: ["u32", "buffer", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawArraysIndirectCount!: Deno.UnsafeFnPointer<typeof def_glMultiDrawArraysIndirectCount>;

export function MultiDrawArraysIndirectCount(
  mode: GLenum,
  indirect: Buffer,
  drawcount: GLintptr,
  maxdrawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawArraysIndirectCount.call(
    mode,
    bufferToFFI(indirect),
    bufferToFFI(drawcount),
    maxdrawcount,
    stride,
  );
}

export const def_glMultiDrawElementsIndirectCount = {
  parameters: ["u32", "u32", "buffer", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawElementsIndirectCount!: Deno.UnsafeFnPointer<typeof def_glMultiDrawElementsIndirectCount>;

export function MultiDrawElementsIndirectCount(
  mode: GLenum,
  type: GLenum,
  indirect: Buffer,
  drawcount: GLintptr,
  maxdrawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawElementsIndirectCount.call(
    mode,
    type,
    bufferToFFI(indirect),
    bufferToFFI(drawcount),
    maxdrawcount,
    stride,
  );
}

export const def_glPolygonOffsetClamp = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glPolygonOffsetClamp!: Deno.UnsafeFnPointer<typeof def_glPolygonOffsetClamp>;

export function PolygonOffsetClamp(
  factor: GLfloat,
  units: GLfloat,
  clamp: GLfloat,
): void {
  fn_glPolygonOffsetClamp.call(
    factor,
    units,
    clamp,
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
  fn_glBindFragDataLocationIndexed = new Deno.UnsafeFnPointer(proc("glBindFragDataLocationIndexed")!, def_glBindFragDataLocationIndexed);
  fn_glGetFragDataIndex = new Deno.UnsafeFnPointer(proc("glGetFragDataIndex")!, def_glGetFragDataIndex);
  fn_glGenSamplers = new Deno.UnsafeFnPointer(proc("glGenSamplers")!, def_glGenSamplers);
  fn_glDeleteSamplers = new Deno.UnsafeFnPointer(proc("glDeleteSamplers")!, def_glDeleteSamplers);
  fn_glIsSampler = new Deno.UnsafeFnPointer(proc("glIsSampler")!, def_glIsSampler);
  fn_glBindSampler = new Deno.UnsafeFnPointer(proc("glBindSampler")!, def_glBindSampler);
  fn_glSamplerParameteri = new Deno.UnsafeFnPointer(proc("glSamplerParameteri")!, def_glSamplerParameteri);
  fn_glSamplerParameteriv = new Deno.UnsafeFnPointer(proc("glSamplerParameteriv")!, def_glSamplerParameteriv);
  fn_glSamplerParameterf = new Deno.UnsafeFnPointer(proc("glSamplerParameterf")!, def_glSamplerParameterf);
  fn_glSamplerParameterfv = new Deno.UnsafeFnPointer(proc("glSamplerParameterfv")!, def_glSamplerParameterfv);
  fn_glSamplerParameterIiv = new Deno.UnsafeFnPointer(proc("glSamplerParameterIiv")!, def_glSamplerParameterIiv);
  fn_glSamplerParameterIuiv = new Deno.UnsafeFnPointer(proc("glSamplerParameterIuiv")!, def_glSamplerParameterIuiv);
  fn_glGetSamplerParameteriv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameteriv")!, def_glGetSamplerParameteriv);
  fn_glGetSamplerParameterIiv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIiv")!, def_glGetSamplerParameterIiv);
  fn_glGetSamplerParameterfv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterfv")!, def_glGetSamplerParameterfv);
  fn_glGetSamplerParameterIuiv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIuiv")!, def_glGetSamplerParameterIuiv);
  fn_glQueryCounter = new Deno.UnsafeFnPointer(proc("glQueryCounter")!, def_glQueryCounter);
  fn_glGetQueryObjecti64v = new Deno.UnsafeFnPointer(proc("glGetQueryObjecti64v")!, def_glGetQueryObjecti64v);
  fn_glGetQueryObjectui64v = new Deno.UnsafeFnPointer(proc("glGetQueryObjectui64v")!, def_glGetQueryObjectui64v);
  fn_glVertexAttribDivisor = new Deno.UnsafeFnPointer(proc("glVertexAttribDivisor")!, def_glVertexAttribDivisor);
  fn_glVertexAttribP1ui = new Deno.UnsafeFnPointer(proc("glVertexAttribP1ui")!, def_glVertexAttribP1ui);
  fn_glVertexAttribP1uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribP1uiv")!, def_glVertexAttribP1uiv);
  fn_glVertexAttribP2ui = new Deno.UnsafeFnPointer(proc("glVertexAttribP2ui")!, def_glVertexAttribP2ui);
  fn_glVertexAttribP2uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribP2uiv")!, def_glVertexAttribP2uiv);
  fn_glVertexAttribP3ui = new Deno.UnsafeFnPointer(proc("glVertexAttribP3ui")!, def_glVertexAttribP3ui);
  fn_glVertexAttribP3uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribP3uiv")!, def_glVertexAttribP3uiv);
  fn_glVertexAttribP4ui = new Deno.UnsafeFnPointer(proc("glVertexAttribP4ui")!, def_glVertexAttribP4ui);
  fn_glVertexAttribP4uiv = new Deno.UnsafeFnPointer(proc("glVertexAttribP4uiv")!, def_glVertexAttribP4uiv);
  fn_glVertexP2ui = new Deno.UnsafeFnPointer(proc("glVertexP2ui")!, def_glVertexP2ui);
  fn_glVertexP2uiv = new Deno.UnsafeFnPointer(proc("glVertexP2uiv")!, def_glVertexP2uiv);
  fn_glVertexP3ui = new Deno.UnsafeFnPointer(proc("glVertexP3ui")!, def_glVertexP3ui);
  fn_glVertexP3uiv = new Deno.UnsafeFnPointer(proc("glVertexP3uiv")!, def_glVertexP3uiv);
  fn_glVertexP4ui = new Deno.UnsafeFnPointer(proc("glVertexP4ui")!, def_glVertexP4ui);
  fn_glVertexP4uiv = new Deno.UnsafeFnPointer(proc("glVertexP4uiv")!, def_glVertexP4uiv);
  fn_glTexCoordP1ui = new Deno.UnsafeFnPointer(proc("glTexCoordP1ui")!, def_glTexCoordP1ui);
  fn_glTexCoordP1uiv = new Deno.UnsafeFnPointer(proc("glTexCoordP1uiv")!, def_glTexCoordP1uiv);
  fn_glTexCoordP2ui = new Deno.UnsafeFnPointer(proc("glTexCoordP2ui")!, def_glTexCoordP2ui);
  fn_glTexCoordP2uiv = new Deno.UnsafeFnPointer(proc("glTexCoordP2uiv")!, def_glTexCoordP2uiv);
  fn_glTexCoordP3ui = new Deno.UnsafeFnPointer(proc("glTexCoordP3ui")!, def_glTexCoordP3ui);
  fn_glTexCoordP3uiv = new Deno.UnsafeFnPointer(proc("glTexCoordP3uiv")!, def_glTexCoordP3uiv);
  fn_glTexCoordP4ui = new Deno.UnsafeFnPointer(proc("glTexCoordP4ui")!, def_glTexCoordP4ui);
  fn_glTexCoordP4uiv = new Deno.UnsafeFnPointer(proc("glTexCoordP4uiv")!, def_glTexCoordP4uiv);
  fn_glMultiTexCoordP1ui = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP1ui")!, def_glMultiTexCoordP1ui);
  fn_glMultiTexCoordP1uiv = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP1uiv")!, def_glMultiTexCoordP1uiv);
  fn_glMultiTexCoordP2ui = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP2ui")!, def_glMultiTexCoordP2ui);
  fn_glMultiTexCoordP2uiv = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP2uiv")!, def_glMultiTexCoordP2uiv);
  fn_glMultiTexCoordP3ui = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP3ui")!, def_glMultiTexCoordP3ui);
  fn_glMultiTexCoordP3uiv = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP3uiv")!, def_glMultiTexCoordP3uiv);
  fn_glMultiTexCoordP4ui = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP4ui")!, def_glMultiTexCoordP4ui);
  fn_glMultiTexCoordP4uiv = new Deno.UnsafeFnPointer(proc("glMultiTexCoordP4uiv")!, def_glMultiTexCoordP4uiv);
  fn_glNormalP3ui = new Deno.UnsafeFnPointer(proc("glNormalP3ui")!, def_glNormalP3ui);
  fn_glNormalP3uiv = new Deno.UnsafeFnPointer(proc("glNormalP3uiv")!, def_glNormalP3uiv);
  fn_glColorP3ui = new Deno.UnsafeFnPointer(proc("glColorP3ui")!, def_glColorP3ui);
  fn_glColorP3uiv = new Deno.UnsafeFnPointer(proc("glColorP3uiv")!, def_glColorP3uiv);
  fn_glColorP4ui = new Deno.UnsafeFnPointer(proc("glColorP4ui")!, def_glColorP4ui);
  fn_glColorP4uiv = new Deno.UnsafeFnPointer(proc("glColorP4uiv")!, def_glColorP4uiv);
  fn_glSecondaryColorP3ui = new Deno.UnsafeFnPointer(proc("glSecondaryColorP3ui")!, def_glSecondaryColorP3ui);
  fn_glSecondaryColorP3uiv = new Deno.UnsafeFnPointer(proc("glSecondaryColorP3uiv")!, def_glSecondaryColorP3uiv);
  fn_glMinSampleShading = new Deno.UnsafeFnPointer(proc("glMinSampleShading")!, def_glMinSampleShading);
  fn_glBlendEquationi = new Deno.UnsafeFnPointer(proc("glBlendEquationi")!, def_glBlendEquationi);
  fn_glBlendEquationSeparatei = new Deno.UnsafeFnPointer(proc("glBlendEquationSeparatei")!, def_glBlendEquationSeparatei);
  fn_glBlendFunci = new Deno.UnsafeFnPointer(proc("glBlendFunci")!, def_glBlendFunci);
  fn_glBlendFuncSeparatei = new Deno.UnsafeFnPointer(proc("glBlendFuncSeparatei")!, def_glBlendFuncSeparatei);
  fn_glDrawArraysIndirect = new Deno.UnsafeFnPointer(proc("glDrawArraysIndirect")!, def_glDrawArraysIndirect);
  fn_glDrawElementsIndirect = new Deno.UnsafeFnPointer(proc("glDrawElementsIndirect")!, def_glDrawElementsIndirect);
  fn_glUniform1d = new Deno.UnsafeFnPointer(proc("glUniform1d")!, def_glUniform1d);
  fn_glUniform2d = new Deno.UnsafeFnPointer(proc("glUniform2d")!, def_glUniform2d);
  fn_glUniform3d = new Deno.UnsafeFnPointer(proc("glUniform3d")!, def_glUniform3d);
  fn_glUniform4d = new Deno.UnsafeFnPointer(proc("glUniform4d")!, def_glUniform4d);
  fn_glUniform1dv = new Deno.UnsafeFnPointer(proc("glUniform1dv")!, def_glUniform1dv);
  fn_glUniform2dv = new Deno.UnsafeFnPointer(proc("glUniform2dv")!, def_glUniform2dv);
  fn_glUniform3dv = new Deno.UnsafeFnPointer(proc("glUniform3dv")!, def_glUniform3dv);
  fn_glUniform4dv = new Deno.UnsafeFnPointer(proc("glUniform4dv")!, def_glUniform4dv);
  fn_glUniformMatrix2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2dv")!, def_glUniformMatrix2dv);
  fn_glUniformMatrix3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3dv")!, def_glUniformMatrix3dv);
  fn_glUniformMatrix4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4dv")!, def_glUniformMatrix4dv);
  fn_glUniformMatrix2x3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x3dv")!, def_glUniformMatrix2x3dv);
  fn_glUniformMatrix2x4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix2x4dv")!, def_glUniformMatrix2x4dv);
  fn_glUniformMatrix3x2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x2dv")!, def_glUniformMatrix3x2dv);
  fn_glUniformMatrix3x4dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix3x4dv")!, def_glUniformMatrix3x4dv);
  fn_glUniformMatrix4x2dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x2dv")!, def_glUniformMatrix4x2dv);
  fn_glUniformMatrix4x3dv = new Deno.UnsafeFnPointer(proc("glUniformMatrix4x3dv")!, def_glUniformMatrix4x3dv);
  fn_glGetUniformdv = new Deno.UnsafeFnPointer(proc("glGetUniformdv")!, def_glGetUniformdv);
  fn_glGetSubroutineUniformLocation = new Deno.UnsafeFnPointer(proc("glGetSubroutineUniformLocation")!, def_glGetSubroutineUniformLocation);
  fn_glGetSubroutineIndex = new Deno.UnsafeFnPointer(proc("glGetSubroutineIndex")!, def_glGetSubroutineIndex);
  fn_glGetActiveSubroutineUniformiv = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineUniformiv")!, def_glGetActiveSubroutineUniformiv);
  fn_glGetActiveSubroutineUniformName = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineUniformName")!, def_glGetActiveSubroutineUniformName);
  fn_glGetActiveSubroutineName = new Deno.UnsafeFnPointer(proc("glGetActiveSubroutineName")!, def_glGetActiveSubroutineName);
  fn_glUniformSubroutinesuiv = new Deno.UnsafeFnPointer(proc("glUniformSubroutinesuiv")!, def_glUniformSubroutinesuiv);
  fn_glGetUniformSubroutineuiv = new Deno.UnsafeFnPointer(proc("glGetUniformSubroutineuiv")!, def_glGetUniformSubroutineuiv);
  fn_glGetProgramStageiv = new Deno.UnsafeFnPointer(proc("glGetProgramStageiv")!, def_glGetProgramStageiv);
  fn_glPatchParameteri = new Deno.UnsafeFnPointer(proc("glPatchParameteri")!, def_glPatchParameteri);
  fn_glPatchParameterfv = new Deno.UnsafeFnPointer(proc("glPatchParameterfv")!, def_glPatchParameterfv);
  fn_glBindTransformFeedback = new Deno.UnsafeFnPointer(proc("glBindTransformFeedback")!, def_glBindTransformFeedback);
  fn_glDeleteTransformFeedbacks = new Deno.UnsafeFnPointer(proc("glDeleteTransformFeedbacks")!, def_glDeleteTransformFeedbacks);
  fn_glGenTransformFeedbacks = new Deno.UnsafeFnPointer(proc("glGenTransformFeedbacks")!, def_glGenTransformFeedbacks);
  fn_glIsTransformFeedback = new Deno.UnsafeFnPointer(proc("glIsTransformFeedback")!, def_glIsTransformFeedback);
  fn_glPauseTransformFeedback = new Deno.UnsafeFnPointer(proc("glPauseTransformFeedback")!, def_glPauseTransformFeedback);
  fn_glResumeTransformFeedback = new Deno.UnsafeFnPointer(proc("glResumeTransformFeedback")!, def_glResumeTransformFeedback);
  fn_glDrawTransformFeedback = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedback")!, def_glDrawTransformFeedback);
  fn_glDrawTransformFeedbackStream = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedbackStream")!, def_glDrawTransformFeedbackStream);
  fn_glBeginQueryIndexed = new Deno.UnsafeFnPointer(proc("glBeginQueryIndexed")!, def_glBeginQueryIndexed);
  fn_glEndQueryIndexed = new Deno.UnsafeFnPointer(proc("glEndQueryIndexed")!, def_glEndQueryIndexed);
  fn_glGetQueryIndexediv = new Deno.UnsafeFnPointer(proc("glGetQueryIndexediv")!, def_glGetQueryIndexediv);
  fn_glReleaseShaderCompiler = new Deno.UnsafeFnPointer(proc("glReleaseShaderCompiler")!, def_glReleaseShaderCompiler);
  fn_glShaderBinary = new Deno.UnsafeFnPointer(proc("glShaderBinary")!, def_glShaderBinary);
  fn_glGetShaderPrecisionFormat = new Deno.UnsafeFnPointer(proc("glGetShaderPrecisionFormat")!, def_glGetShaderPrecisionFormat);
  fn_glDepthRangef = new Deno.UnsafeFnPointer(proc("glDepthRangef")!, def_glDepthRangef);
  fn_glClearDepthf = new Deno.UnsafeFnPointer(proc("glClearDepthf")!, def_glClearDepthf);
  fn_glGetProgramBinary = new Deno.UnsafeFnPointer(proc("glGetProgramBinary")!, def_glGetProgramBinary);
  fn_glProgramBinary = new Deno.UnsafeFnPointer(proc("glProgramBinary")!, def_glProgramBinary);
  fn_glProgramParameteri = new Deno.UnsafeFnPointer(proc("glProgramParameteri")!, def_glProgramParameteri);
  fn_glUseProgramStages = new Deno.UnsafeFnPointer(proc("glUseProgramStages")!, def_glUseProgramStages);
  fn_glActiveShaderProgram = new Deno.UnsafeFnPointer(proc("glActiveShaderProgram")!, def_glActiveShaderProgram);
  fn_glCreateShaderProgramv = new Deno.UnsafeFnPointer(proc("glCreateShaderProgramv")!, def_glCreateShaderProgramv);
  fn_glBindProgramPipeline = new Deno.UnsafeFnPointer(proc("glBindProgramPipeline")!, def_glBindProgramPipeline);
  fn_glDeleteProgramPipelines = new Deno.UnsafeFnPointer(proc("glDeleteProgramPipelines")!, def_glDeleteProgramPipelines);
  fn_glGenProgramPipelines = new Deno.UnsafeFnPointer(proc("glGenProgramPipelines")!, def_glGenProgramPipelines);
  fn_glIsProgramPipeline = new Deno.UnsafeFnPointer(proc("glIsProgramPipeline")!, def_glIsProgramPipeline);
  fn_glGetProgramPipelineiv = new Deno.UnsafeFnPointer(proc("glGetProgramPipelineiv")!, def_glGetProgramPipelineiv);
  fn_glProgramUniform1i = new Deno.UnsafeFnPointer(proc("glProgramUniform1i")!, def_glProgramUniform1i);
  fn_glProgramUniform1iv = new Deno.UnsafeFnPointer(proc("glProgramUniform1iv")!, def_glProgramUniform1iv);
  fn_glProgramUniform1f = new Deno.UnsafeFnPointer(proc("glProgramUniform1f")!, def_glProgramUniform1f);
  fn_glProgramUniform1fv = new Deno.UnsafeFnPointer(proc("glProgramUniform1fv")!, def_glProgramUniform1fv);
  fn_glProgramUniform1d = new Deno.UnsafeFnPointer(proc("glProgramUniform1d")!, def_glProgramUniform1d);
  fn_glProgramUniform1dv = new Deno.UnsafeFnPointer(proc("glProgramUniform1dv")!, def_glProgramUniform1dv);
  fn_glProgramUniform1ui = new Deno.UnsafeFnPointer(proc("glProgramUniform1ui")!, def_glProgramUniform1ui);
  fn_glProgramUniform1uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform1uiv")!, def_glProgramUniform1uiv);
  fn_glProgramUniform2i = new Deno.UnsafeFnPointer(proc("glProgramUniform2i")!, def_glProgramUniform2i);
  fn_glProgramUniform2iv = new Deno.UnsafeFnPointer(proc("glProgramUniform2iv")!, def_glProgramUniform2iv);
  fn_glProgramUniform2f = new Deno.UnsafeFnPointer(proc("glProgramUniform2f")!, def_glProgramUniform2f);
  fn_glProgramUniform2fv = new Deno.UnsafeFnPointer(proc("glProgramUniform2fv")!, def_glProgramUniform2fv);
  fn_glProgramUniform2d = new Deno.UnsafeFnPointer(proc("glProgramUniform2d")!, def_glProgramUniform2d);
  fn_glProgramUniform2dv = new Deno.UnsafeFnPointer(proc("glProgramUniform2dv")!, def_glProgramUniform2dv);
  fn_glProgramUniform2ui = new Deno.UnsafeFnPointer(proc("glProgramUniform2ui")!, def_glProgramUniform2ui);
  fn_glProgramUniform2uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform2uiv")!, def_glProgramUniform2uiv);
  fn_glProgramUniform3i = new Deno.UnsafeFnPointer(proc("glProgramUniform3i")!, def_glProgramUniform3i);
  fn_glProgramUniform3iv = new Deno.UnsafeFnPointer(proc("glProgramUniform3iv")!, def_glProgramUniform3iv);
  fn_glProgramUniform3f = new Deno.UnsafeFnPointer(proc("glProgramUniform3f")!, def_glProgramUniform3f);
  fn_glProgramUniform3fv = new Deno.UnsafeFnPointer(proc("glProgramUniform3fv")!, def_glProgramUniform3fv);
  fn_glProgramUniform3d = new Deno.UnsafeFnPointer(proc("glProgramUniform3d")!, def_glProgramUniform3d);
  fn_glProgramUniform3dv = new Deno.UnsafeFnPointer(proc("glProgramUniform3dv")!, def_glProgramUniform3dv);
  fn_glProgramUniform3ui = new Deno.UnsafeFnPointer(proc("glProgramUniform3ui")!, def_glProgramUniform3ui);
  fn_glProgramUniform3uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform3uiv")!, def_glProgramUniform3uiv);
  fn_glProgramUniform4i = new Deno.UnsafeFnPointer(proc("glProgramUniform4i")!, def_glProgramUniform4i);
  fn_glProgramUniform4iv = new Deno.UnsafeFnPointer(proc("glProgramUniform4iv")!, def_glProgramUniform4iv);
  fn_glProgramUniform4f = new Deno.UnsafeFnPointer(proc("glProgramUniform4f")!, def_glProgramUniform4f);
  fn_glProgramUniform4fv = new Deno.UnsafeFnPointer(proc("glProgramUniform4fv")!, def_glProgramUniform4fv);
  fn_glProgramUniform4d = new Deno.UnsafeFnPointer(proc("glProgramUniform4d")!, def_glProgramUniform4d);
  fn_glProgramUniform4dv = new Deno.UnsafeFnPointer(proc("glProgramUniform4dv")!, def_glProgramUniform4dv);
  fn_glProgramUniform4ui = new Deno.UnsafeFnPointer(proc("glProgramUniform4ui")!, def_glProgramUniform4ui);
  fn_glProgramUniform4uiv = new Deno.UnsafeFnPointer(proc("glProgramUniform4uiv")!, def_glProgramUniform4uiv);
  fn_glProgramUniformMatrix2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2fv")!, def_glProgramUniformMatrix2fv);
  fn_glProgramUniformMatrix3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3fv")!, def_glProgramUniformMatrix3fv);
  fn_glProgramUniformMatrix4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4fv")!, def_glProgramUniformMatrix4fv);
  fn_glProgramUniformMatrix2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2dv")!, def_glProgramUniformMatrix2dv);
  fn_glProgramUniformMatrix3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3dv")!, def_glProgramUniformMatrix3dv);
  fn_glProgramUniformMatrix4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4dv")!, def_glProgramUniformMatrix4dv);
  fn_glProgramUniformMatrix2x3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3fv")!, def_glProgramUniformMatrix2x3fv);
  fn_glProgramUniformMatrix3x2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2fv")!, def_glProgramUniformMatrix3x2fv);
  fn_glProgramUniformMatrix2x4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4fv")!, def_glProgramUniformMatrix2x4fv);
  fn_glProgramUniformMatrix4x2fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2fv")!, def_glProgramUniformMatrix4x2fv);
  fn_glProgramUniformMatrix3x4fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4fv")!, def_glProgramUniformMatrix3x4fv);
  fn_glProgramUniformMatrix4x3fv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3fv")!, def_glProgramUniformMatrix4x3fv);
  fn_glProgramUniformMatrix2x3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3dv")!, def_glProgramUniformMatrix2x3dv);
  fn_glProgramUniformMatrix3x2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2dv")!, def_glProgramUniformMatrix3x2dv);
  fn_glProgramUniformMatrix2x4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4dv")!, def_glProgramUniformMatrix2x4dv);
  fn_glProgramUniformMatrix4x2dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2dv")!, def_glProgramUniformMatrix4x2dv);
  fn_glProgramUniformMatrix3x4dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4dv")!, def_glProgramUniformMatrix3x4dv);
  fn_glProgramUniformMatrix4x3dv = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3dv")!, def_glProgramUniformMatrix4x3dv);
  fn_glValidateProgramPipeline = new Deno.UnsafeFnPointer(proc("glValidateProgramPipeline")!, def_glValidateProgramPipeline);
  fn_glGetProgramPipelineInfoLog = new Deno.UnsafeFnPointer(proc("glGetProgramPipelineInfoLog")!, def_glGetProgramPipelineInfoLog);
  fn_glVertexAttribL1d = new Deno.UnsafeFnPointer(proc("glVertexAttribL1d")!, def_glVertexAttribL1d);
  fn_glVertexAttribL2d = new Deno.UnsafeFnPointer(proc("glVertexAttribL2d")!, def_glVertexAttribL2d);
  fn_glVertexAttribL3d = new Deno.UnsafeFnPointer(proc("glVertexAttribL3d")!, def_glVertexAttribL3d);
  fn_glVertexAttribL4d = new Deno.UnsafeFnPointer(proc("glVertexAttribL4d")!, def_glVertexAttribL4d);
  fn_glVertexAttribL1dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL1dv")!, def_glVertexAttribL1dv);
  fn_glVertexAttribL2dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL2dv")!, def_glVertexAttribL2dv);
  fn_glVertexAttribL3dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL3dv")!, def_glVertexAttribL3dv);
  fn_glVertexAttribL4dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL4dv")!, def_glVertexAttribL4dv);
  fn_glVertexAttribLPointer = new Deno.UnsafeFnPointer(proc("glVertexAttribLPointer")!, def_glVertexAttribLPointer);
  fn_glGetVertexAttribLdv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribLdv")!, def_glGetVertexAttribLdv);
  fn_glViewportArrayv = new Deno.UnsafeFnPointer(proc("glViewportArrayv")!, def_glViewportArrayv);
  fn_glViewportIndexedf = new Deno.UnsafeFnPointer(proc("glViewportIndexedf")!, def_glViewportIndexedf);
  fn_glViewportIndexedfv = new Deno.UnsafeFnPointer(proc("glViewportIndexedfv")!, def_glViewportIndexedfv);
  fn_glScissorArrayv = new Deno.UnsafeFnPointer(proc("glScissorArrayv")!, def_glScissorArrayv);
  fn_glScissorIndexed = new Deno.UnsafeFnPointer(proc("glScissorIndexed")!, def_glScissorIndexed);
  fn_glScissorIndexedv = new Deno.UnsafeFnPointer(proc("glScissorIndexedv")!, def_glScissorIndexedv);
  fn_glDepthRangeArrayv = new Deno.UnsafeFnPointer(proc("glDepthRangeArrayv")!, def_glDepthRangeArrayv);
  fn_glDepthRangeIndexed = new Deno.UnsafeFnPointer(proc("glDepthRangeIndexed")!, def_glDepthRangeIndexed);
  fn_glGetFloati_v = new Deno.UnsafeFnPointer(proc("glGetFloati_v")!, def_glGetFloati_v);
  fn_glGetDoublei_v = new Deno.UnsafeFnPointer(proc("glGetDoublei_v")!, def_glGetDoublei_v);
  fn_glDrawArraysInstancedBaseInstance = new Deno.UnsafeFnPointer(proc("glDrawArraysInstancedBaseInstance")!, def_glDrawArraysInstancedBaseInstance);
  fn_glDrawElementsInstancedBaseInstance = new Deno.UnsafeFnPointer(proc("glDrawElementsInstancedBaseInstance")!, def_glDrawElementsInstancedBaseInstance);
  fn_glDrawElementsInstancedBaseVertexBaseInstance = new Deno.UnsafeFnPointer(proc("glDrawElementsInstancedBaseVertexBaseInstance")!, def_glDrawElementsInstancedBaseVertexBaseInstance);
  fn_glGetInternalformativ = new Deno.UnsafeFnPointer(proc("glGetInternalformativ")!, def_glGetInternalformativ);
  fn_glGetActiveAtomicCounterBufferiv = new Deno.UnsafeFnPointer(proc("glGetActiveAtomicCounterBufferiv")!, def_glGetActiveAtomicCounterBufferiv);
  fn_glBindImageTexture = new Deno.UnsafeFnPointer(proc("glBindImageTexture")!, def_glBindImageTexture);
  fn_glMemoryBarrier = new Deno.UnsafeFnPointer(proc("glMemoryBarrier")!, def_glMemoryBarrier);
  fn_glTexStorage1D = new Deno.UnsafeFnPointer(proc("glTexStorage1D")!, def_glTexStorage1D);
  fn_glTexStorage2D = new Deno.UnsafeFnPointer(proc("glTexStorage2D")!, def_glTexStorage2D);
  fn_glTexStorage3D = new Deno.UnsafeFnPointer(proc("glTexStorage3D")!, def_glTexStorage3D);
  fn_glDrawTransformFeedbackInstanced = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedbackInstanced")!, def_glDrawTransformFeedbackInstanced);
  fn_glDrawTransformFeedbackStreamInstanced = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedbackStreamInstanced")!, def_glDrawTransformFeedbackStreamInstanced);
  fn_glClearBufferData = new Deno.UnsafeFnPointer(proc("glClearBufferData")!, def_glClearBufferData);
  fn_glClearBufferSubData = new Deno.UnsafeFnPointer(proc("glClearBufferSubData")!, def_glClearBufferSubData);
  fn_glDispatchCompute = new Deno.UnsafeFnPointer(proc("glDispatchCompute")!, def_glDispatchCompute);
  fn_glDispatchComputeIndirect = new Deno.UnsafeFnPointer(proc("glDispatchComputeIndirect")!, def_glDispatchComputeIndirect);
  fn_glCopyImageSubData = new Deno.UnsafeFnPointer(proc("glCopyImageSubData")!, def_glCopyImageSubData);
  fn_glFramebufferParameteri = new Deno.UnsafeFnPointer(proc("glFramebufferParameteri")!, def_glFramebufferParameteri);
  fn_glGetFramebufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetFramebufferParameteriv")!, def_glGetFramebufferParameteriv);
  fn_glGetInternalformati64v = new Deno.UnsafeFnPointer(proc("glGetInternalformati64v")!, def_glGetInternalformati64v);
  fn_glInvalidateTexSubImage = new Deno.UnsafeFnPointer(proc("glInvalidateTexSubImage")!, def_glInvalidateTexSubImage);
  fn_glInvalidateTexImage = new Deno.UnsafeFnPointer(proc("glInvalidateTexImage")!, def_glInvalidateTexImage);
  fn_glInvalidateBufferSubData = new Deno.UnsafeFnPointer(proc("glInvalidateBufferSubData")!, def_glInvalidateBufferSubData);
  fn_glInvalidateBufferData = new Deno.UnsafeFnPointer(proc("glInvalidateBufferData")!, def_glInvalidateBufferData);
  fn_glInvalidateFramebuffer = new Deno.UnsafeFnPointer(proc("glInvalidateFramebuffer")!, def_glInvalidateFramebuffer);
  fn_glInvalidateSubFramebuffer = new Deno.UnsafeFnPointer(proc("glInvalidateSubFramebuffer")!, def_glInvalidateSubFramebuffer);
  fn_glMultiDrawArraysIndirect = new Deno.UnsafeFnPointer(proc("glMultiDrawArraysIndirect")!, def_glMultiDrawArraysIndirect);
  fn_glMultiDrawElementsIndirect = new Deno.UnsafeFnPointer(proc("glMultiDrawElementsIndirect")!, def_glMultiDrawElementsIndirect);
  fn_glGetProgramInterfaceiv = new Deno.UnsafeFnPointer(proc("glGetProgramInterfaceiv")!, def_glGetProgramInterfaceiv);
  fn_glGetProgramResourceIndex = new Deno.UnsafeFnPointer(proc("glGetProgramResourceIndex")!, def_glGetProgramResourceIndex);
  fn_glGetProgramResourceName = new Deno.UnsafeFnPointer(proc("glGetProgramResourceName")!, def_glGetProgramResourceName);
  fn_glGetProgramResourceiv = new Deno.UnsafeFnPointer(proc("glGetProgramResourceiv")!, def_glGetProgramResourceiv);
  fn_glGetProgramResourceLocation = new Deno.UnsafeFnPointer(proc("glGetProgramResourceLocation")!, def_glGetProgramResourceLocation);
  fn_glGetProgramResourceLocationIndex = new Deno.UnsafeFnPointer(proc("glGetProgramResourceLocationIndex")!, def_glGetProgramResourceLocationIndex);
  fn_glShaderStorageBlockBinding = new Deno.UnsafeFnPointer(proc("glShaderStorageBlockBinding")!, def_glShaderStorageBlockBinding);
  fn_glTexBufferRange = new Deno.UnsafeFnPointer(proc("glTexBufferRange")!, def_glTexBufferRange);
  fn_glTexStorage2DMultisample = new Deno.UnsafeFnPointer(proc("glTexStorage2DMultisample")!, def_glTexStorage2DMultisample);
  fn_glTexStorage3DMultisample = new Deno.UnsafeFnPointer(proc("glTexStorage3DMultisample")!, def_glTexStorage3DMultisample);
  fn_glTextureView = new Deno.UnsafeFnPointer(proc("glTextureView")!, def_glTextureView);
  fn_glBindVertexBuffer = new Deno.UnsafeFnPointer(proc("glBindVertexBuffer")!, def_glBindVertexBuffer);
  fn_glVertexAttribFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribFormat")!, def_glVertexAttribFormat);
  fn_glVertexAttribIFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribIFormat")!, def_glVertexAttribIFormat);
  fn_glVertexAttribLFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribLFormat")!, def_glVertexAttribLFormat);
  fn_glVertexAttribBinding = new Deno.UnsafeFnPointer(proc("glVertexAttribBinding")!, def_glVertexAttribBinding);
  fn_glVertexBindingDivisor = new Deno.UnsafeFnPointer(proc("glVertexBindingDivisor")!, def_glVertexBindingDivisor);
  fn_glDebugMessageControl = new Deno.UnsafeFnPointer(proc("glDebugMessageControl")!, def_glDebugMessageControl);
  fn_glDebugMessageInsert = new Deno.UnsafeFnPointer(proc("glDebugMessageInsert")!, def_glDebugMessageInsert);
  fn_glDebugMessageCallback = new Deno.UnsafeFnPointer(proc("glDebugMessageCallback")!, def_glDebugMessageCallback);
  fn_glGetDebugMessageLog = new Deno.UnsafeFnPointer(proc("glGetDebugMessageLog")!, def_glGetDebugMessageLog);
  fn_glPushDebugGroup = new Deno.UnsafeFnPointer(proc("glPushDebugGroup")!, def_glPushDebugGroup);
  fn_glPopDebugGroup = new Deno.UnsafeFnPointer(proc("glPopDebugGroup")!, def_glPopDebugGroup);
  fn_glObjectLabel = new Deno.UnsafeFnPointer(proc("glObjectLabel")!, def_glObjectLabel);
  fn_glGetObjectLabel = new Deno.UnsafeFnPointer(proc("glGetObjectLabel")!, def_glGetObjectLabel);
  fn_glObjectPtrLabel = new Deno.UnsafeFnPointer(proc("glObjectPtrLabel")!, def_glObjectPtrLabel);
  fn_glGetObjectPtrLabel = new Deno.UnsafeFnPointer(proc("glGetObjectPtrLabel")!, def_glGetObjectPtrLabel);
  fn_glGetPointerv = new Deno.UnsafeFnPointer(proc("glGetPointerv")!, def_glGetPointerv);
  fn_glBufferStorage = new Deno.UnsafeFnPointer(proc("glBufferStorage")!, def_glBufferStorage);
  fn_glClearTexImage = new Deno.UnsafeFnPointer(proc("glClearTexImage")!, def_glClearTexImage);
  fn_glClearTexSubImage = new Deno.UnsafeFnPointer(proc("glClearTexSubImage")!, def_glClearTexSubImage);
  fn_glBindBuffersBase = new Deno.UnsafeFnPointer(proc("glBindBuffersBase")!, def_glBindBuffersBase);
  fn_glBindBuffersRange = new Deno.UnsafeFnPointer(proc("glBindBuffersRange")!, def_glBindBuffersRange);
  fn_glBindTextures = new Deno.UnsafeFnPointer(proc("glBindTextures")!, def_glBindTextures);
  fn_glBindSamplers = new Deno.UnsafeFnPointer(proc("glBindSamplers")!, def_glBindSamplers);
  fn_glBindImageTextures = new Deno.UnsafeFnPointer(proc("glBindImageTextures")!, def_glBindImageTextures);
  fn_glBindVertexBuffers = new Deno.UnsafeFnPointer(proc("glBindVertexBuffers")!, def_glBindVertexBuffers);
  fn_glClipControl = new Deno.UnsafeFnPointer(proc("glClipControl")!, def_glClipControl);
  fn_glCreateTransformFeedbacks = new Deno.UnsafeFnPointer(proc("glCreateTransformFeedbacks")!, def_glCreateTransformFeedbacks);
  fn_glTransformFeedbackBufferBase = new Deno.UnsafeFnPointer(proc("glTransformFeedbackBufferBase")!, def_glTransformFeedbackBufferBase);
  fn_glTransformFeedbackBufferRange = new Deno.UnsafeFnPointer(proc("glTransformFeedbackBufferRange")!, def_glTransformFeedbackBufferRange);
  fn_glGetTransformFeedbackiv = new Deno.UnsafeFnPointer(proc("glGetTransformFeedbackiv")!, def_glGetTransformFeedbackiv);
  fn_glGetTransformFeedbacki_v = new Deno.UnsafeFnPointer(proc("glGetTransformFeedbacki_v")!, def_glGetTransformFeedbacki_v);
  fn_glGetTransformFeedbacki64_v = new Deno.UnsafeFnPointer(proc("glGetTransformFeedbacki64_v")!, def_glGetTransformFeedbacki64_v);
  fn_glCreateBuffers = new Deno.UnsafeFnPointer(proc("glCreateBuffers")!, def_glCreateBuffers);
  fn_glNamedBufferStorage = new Deno.UnsafeFnPointer(proc("glNamedBufferStorage")!, def_glNamedBufferStorage);
  fn_glNamedBufferData = new Deno.UnsafeFnPointer(proc("glNamedBufferData")!, def_glNamedBufferData);
  fn_glNamedBufferSubData = new Deno.UnsafeFnPointer(proc("glNamedBufferSubData")!, def_glNamedBufferSubData);
  fn_glCopyNamedBufferSubData = new Deno.UnsafeFnPointer(proc("glCopyNamedBufferSubData")!, def_glCopyNamedBufferSubData);
  fn_glClearNamedBufferData = new Deno.UnsafeFnPointer(proc("glClearNamedBufferData")!, def_glClearNamedBufferData);
  fn_glClearNamedBufferSubData = new Deno.UnsafeFnPointer(proc("glClearNamedBufferSubData")!, def_glClearNamedBufferSubData);
  fn_glMapNamedBuffer = new Deno.UnsafeFnPointer(proc("glMapNamedBuffer")!, def_glMapNamedBuffer);
  fn_glMapNamedBufferRange = new Deno.UnsafeFnPointer(proc("glMapNamedBufferRange")!, def_glMapNamedBufferRange);
  fn_glUnmapNamedBuffer = new Deno.UnsafeFnPointer(proc("glUnmapNamedBuffer")!, def_glUnmapNamedBuffer);
  fn_glFlushMappedNamedBufferRange = new Deno.UnsafeFnPointer(proc("glFlushMappedNamedBufferRange")!, def_glFlushMappedNamedBufferRange);
  fn_glGetNamedBufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetNamedBufferParameteriv")!, def_glGetNamedBufferParameteriv);
  fn_glGetNamedBufferParameteri64v = new Deno.UnsafeFnPointer(proc("glGetNamedBufferParameteri64v")!, def_glGetNamedBufferParameteri64v);
  fn_glGetNamedBufferPointerv = new Deno.UnsafeFnPointer(proc("glGetNamedBufferPointerv")!, def_glGetNamedBufferPointerv);
  fn_glGetNamedBufferSubData = new Deno.UnsafeFnPointer(proc("glGetNamedBufferSubData")!, def_glGetNamedBufferSubData);
  fn_glCreateFramebuffers = new Deno.UnsafeFnPointer(proc("glCreateFramebuffers")!, def_glCreateFramebuffers);
  fn_glNamedFramebufferRenderbuffer = new Deno.UnsafeFnPointer(proc("glNamedFramebufferRenderbuffer")!, def_glNamedFramebufferRenderbuffer);
  fn_glNamedFramebufferParameteri = new Deno.UnsafeFnPointer(proc("glNamedFramebufferParameteri")!, def_glNamedFramebufferParameteri);
  fn_glNamedFramebufferTexture = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTexture")!, def_glNamedFramebufferTexture);
  fn_glNamedFramebufferTextureLayer = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTextureLayer")!, def_glNamedFramebufferTextureLayer);
  fn_glNamedFramebufferDrawBuffer = new Deno.UnsafeFnPointer(proc("glNamedFramebufferDrawBuffer")!, def_glNamedFramebufferDrawBuffer);
  fn_glNamedFramebufferDrawBuffers = new Deno.UnsafeFnPointer(proc("glNamedFramebufferDrawBuffers")!, def_glNamedFramebufferDrawBuffers);
  fn_glNamedFramebufferReadBuffer = new Deno.UnsafeFnPointer(proc("glNamedFramebufferReadBuffer")!, def_glNamedFramebufferReadBuffer);
  fn_glInvalidateNamedFramebufferData = new Deno.UnsafeFnPointer(proc("glInvalidateNamedFramebufferData")!, def_glInvalidateNamedFramebufferData);
  fn_glInvalidateNamedFramebufferSubData = new Deno.UnsafeFnPointer(proc("glInvalidateNamedFramebufferSubData")!, def_glInvalidateNamedFramebufferSubData);
  fn_glClearNamedFramebufferiv = new Deno.UnsafeFnPointer(proc("glClearNamedFramebufferiv")!, def_glClearNamedFramebufferiv);
  fn_glClearNamedFramebufferuiv = new Deno.UnsafeFnPointer(proc("glClearNamedFramebufferuiv")!, def_glClearNamedFramebufferuiv);
  fn_glClearNamedFramebufferfv = new Deno.UnsafeFnPointer(proc("glClearNamedFramebufferfv")!, def_glClearNamedFramebufferfv);
  fn_glClearNamedFramebufferfi = new Deno.UnsafeFnPointer(proc("glClearNamedFramebufferfi")!, def_glClearNamedFramebufferfi);
  fn_glBlitNamedFramebuffer = new Deno.UnsafeFnPointer(proc("glBlitNamedFramebuffer")!, def_glBlitNamedFramebuffer);
  fn_glCheckNamedFramebufferStatus = new Deno.UnsafeFnPointer(proc("glCheckNamedFramebufferStatus")!, def_glCheckNamedFramebufferStatus);
  fn_glGetNamedFramebufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetNamedFramebufferParameteriv")!, def_glGetNamedFramebufferParameteriv);
  fn_glGetNamedFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(proc("glGetNamedFramebufferAttachmentParameteriv")!, def_glGetNamedFramebufferAttachmentParameteriv);
  fn_glCreateRenderbuffers = new Deno.UnsafeFnPointer(proc("glCreateRenderbuffers")!, def_glCreateRenderbuffers);
  fn_glNamedRenderbufferStorage = new Deno.UnsafeFnPointer(proc("glNamedRenderbufferStorage")!, def_glNamedRenderbufferStorage);
  fn_glNamedRenderbufferStorageMultisample = new Deno.UnsafeFnPointer(proc("glNamedRenderbufferStorageMultisample")!, def_glNamedRenderbufferStorageMultisample);
  fn_glGetNamedRenderbufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetNamedRenderbufferParameteriv")!, def_glGetNamedRenderbufferParameteriv);
  fn_glCreateTextures = new Deno.UnsafeFnPointer(proc("glCreateTextures")!, def_glCreateTextures);
  fn_glTextureBuffer = new Deno.UnsafeFnPointer(proc("glTextureBuffer")!, def_glTextureBuffer);
  fn_glTextureBufferRange = new Deno.UnsafeFnPointer(proc("glTextureBufferRange")!, def_glTextureBufferRange);
  fn_glTextureStorage1D = new Deno.UnsafeFnPointer(proc("glTextureStorage1D")!, def_glTextureStorage1D);
  fn_glTextureStorage2D = new Deno.UnsafeFnPointer(proc("glTextureStorage2D")!, def_glTextureStorage2D);
  fn_glTextureStorage3D = new Deno.UnsafeFnPointer(proc("glTextureStorage3D")!, def_glTextureStorage3D);
  fn_glTextureStorage2DMultisample = new Deno.UnsafeFnPointer(proc("glTextureStorage2DMultisample")!, def_glTextureStorage2DMultisample);
  fn_glTextureStorage3DMultisample = new Deno.UnsafeFnPointer(proc("glTextureStorage3DMultisample")!, def_glTextureStorage3DMultisample);
  fn_glTextureSubImage1D = new Deno.UnsafeFnPointer(proc("glTextureSubImage1D")!, def_glTextureSubImage1D);
  fn_glTextureSubImage2D = new Deno.UnsafeFnPointer(proc("glTextureSubImage2D")!, def_glTextureSubImage2D);
  fn_glTextureSubImage3D = new Deno.UnsafeFnPointer(proc("glTextureSubImage3D")!, def_glTextureSubImage3D);
  fn_glCompressedTextureSubImage1D = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage1D")!, def_glCompressedTextureSubImage1D);
  fn_glCompressedTextureSubImage2D = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage2D")!, def_glCompressedTextureSubImage2D);
  fn_glCompressedTextureSubImage3D = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage3D")!, def_glCompressedTextureSubImage3D);
  fn_glCopyTextureSubImage1D = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage1D")!, def_glCopyTextureSubImage1D);
  fn_glCopyTextureSubImage2D = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage2D")!, def_glCopyTextureSubImage2D);
  fn_glCopyTextureSubImage3D = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage3D")!, def_glCopyTextureSubImage3D);
  fn_glTextureParameterf = new Deno.UnsafeFnPointer(proc("glTextureParameterf")!, def_glTextureParameterf);
  fn_glTextureParameterfv = new Deno.UnsafeFnPointer(proc("glTextureParameterfv")!, def_glTextureParameterfv);
  fn_glTextureParameteri = new Deno.UnsafeFnPointer(proc("glTextureParameteri")!, def_glTextureParameteri);
  fn_glTextureParameterIiv = new Deno.UnsafeFnPointer(proc("glTextureParameterIiv")!, def_glTextureParameterIiv);
  fn_glTextureParameterIuiv = new Deno.UnsafeFnPointer(proc("glTextureParameterIuiv")!, def_glTextureParameterIuiv);
  fn_glTextureParameteriv = new Deno.UnsafeFnPointer(proc("glTextureParameteriv")!, def_glTextureParameteriv);
  fn_glGenerateTextureMipmap = new Deno.UnsafeFnPointer(proc("glGenerateTextureMipmap")!, def_glGenerateTextureMipmap);
  fn_glBindTextureUnit = new Deno.UnsafeFnPointer(proc("glBindTextureUnit")!, def_glBindTextureUnit);
  fn_glGetTextureImage = new Deno.UnsafeFnPointer(proc("glGetTextureImage")!, def_glGetTextureImage);
  fn_glGetCompressedTextureImage = new Deno.UnsafeFnPointer(proc("glGetCompressedTextureImage")!, def_glGetCompressedTextureImage);
  fn_glGetTextureLevelParameterfv = new Deno.UnsafeFnPointer(proc("glGetTextureLevelParameterfv")!, def_glGetTextureLevelParameterfv);
  fn_glGetTextureLevelParameteriv = new Deno.UnsafeFnPointer(proc("glGetTextureLevelParameteriv")!, def_glGetTextureLevelParameteriv);
  fn_glGetTextureParameterfv = new Deno.UnsafeFnPointer(proc("glGetTextureParameterfv")!, def_glGetTextureParameterfv);
  fn_glGetTextureParameterIiv = new Deno.UnsafeFnPointer(proc("glGetTextureParameterIiv")!, def_glGetTextureParameterIiv);
  fn_glGetTextureParameterIuiv = new Deno.UnsafeFnPointer(proc("glGetTextureParameterIuiv")!, def_glGetTextureParameterIuiv);
  fn_glGetTextureParameteriv = new Deno.UnsafeFnPointer(proc("glGetTextureParameteriv")!, def_glGetTextureParameteriv);
  fn_glCreateVertexArrays = new Deno.UnsafeFnPointer(proc("glCreateVertexArrays")!, def_glCreateVertexArrays);
  fn_glDisableVertexArrayAttrib = new Deno.UnsafeFnPointer(proc("glDisableVertexArrayAttrib")!, def_glDisableVertexArrayAttrib);
  fn_glEnableVertexArrayAttrib = new Deno.UnsafeFnPointer(proc("glEnableVertexArrayAttrib")!, def_glEnableVertexArrayAttrib);
  fn_glVertexArrayElementBuffer = new Deno.UnsafeFnPointer(proc("glVertexArrayElementBuffer")!, def_glVertexArrayElementBuffer);
  fn_glVertexArrayVertexBuffer = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexBuffer")!, def_glVertexArrayVertexBuffer);
  fn_glVertexArrayVertexBuffers = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexBuffers")!, def_glVertexArrayVertexBuffers);
  fn_glVertexArrayAttribBinding = new Deno.UnsafeFnPointer(proc("glVertexArrayAttribBinding")!, def_glVertexArrayAttribBinding);
  fn_glVertexArrayAttribFormat = new Deno.UnsafeFnPointer(proc("glVertexArrayAttribFormat")!, def_glVertexArrayAttribFormat);
  fn_glVertexArrayAttribIFormat = new Deno.UnsafeFnPointer(proc("glVertexArrayAttribIFormat")!, def_glVertexArrayAttribIFormat);
  fn_glVertexArrayAttribLFormat = new Deno.UnsafeFnPointer(proc("glVertexArrayAttribLFormat")!, def_glVertexArrayAttribLFormat);
  fn_glVertexArrayBindingDivisor = new Deno.UnsafeFnPointer(proc("glVertexArrayBindingDivisor")!, def_glVertexArrayBindingDivisor);
  fn_glGetVertexArrayiv = new Deno.UnsafeFnPointer(proc("glGetVertexArrayiv")!, def_glGetVertexArrayiv);
  fn_glGetVertexArrayIndexediv = new Deno.UnsafeFnPointer(proc("glGetVertexArrayIndexediv")!, def_glGetVertexArrayIndexediv);
  fn_glGetVertexArrayIndexed64iv = new Deno.UnsafeFnPointer(proc("glGetVertexArrayIndexed64iv")!, def_glGetVertexArrayIndexed64iv);
  fn_glCreateSamplers = new Deno.UnsafeFnPointer(proc("glCreateSamplers")!, def_glCreateSamplers);
  fn_glCreateProgramPipelines = new Deno.UnsafeFnPointer(proc("glCreateProgramPipelines")!, def_glCreateProgramPipelines);
  fn_glCreateQueries = new Deno.UnsafeFnPointer(proc("glCreateQueries")!, def_glCreateQueries);
  fn_glGetQueryBufferObjecti64v = new Deno.UnsafeFnPointer(proc("glGetQueryBufferObjecti64v")!, def_glGetQueryBufferObjecti64v);
  fn_glGetQueryBufferObjectiv = new Deno.UnsafeFnPointer(proc("glGetQueryBufferObjectiv")!, def_glGetQueryBufferObjectiv);
  fn_glGetQueryBufferObjectui64v = new Deno.UnsafeFnPointer(proc("glGetQueryBufferObjectui64v")!, def_glGetQueryBufferObjectui64v);
  fn_glGetQueryBufferObjectuiv = new Deno.UnsafeFnPointer(proc("glGetQueryBufferObjectuiv")!, def_glGetQueryBufferObjectuiv);
  fn_glMemoryBarrierByRegion = new Deno.UnsafeFnPointer(proc("glMemoryBarrierByRegion")!, def_glMemoryBarrierByRegion);
  fn_glGetTextureSubImage = new Deno.UnsafeFnPointer(proc("glGetTextureSubImage")!, def_glGetTextureSubImage);
  fn_glGetCompressedTextureSubImage = new Deno.UnsafeFnPointer(proc("glGetCompressedTextureSubImage")!, def_glGetCompressedTextureSubImage);
  fn_glGetGraphicsResetStatus = new Deno.UnsafeFnPointer(proc("glGetGraphicsResetStatus")!, def_glGetGraphicsResetStatus);
  fn_glGetnCompressedTexImage = new Deno.UnsafeFnPointer(proc("glGetnCompressedTexImage")!, def_glGetnCompressedTexImage);
  fn_glGetnTexImage = new Deno.UnsafeFnPointer(proc("glGetnTexImage")!, def_glGetnTexImage);
  fn_glGetnUniformdv = new Deno.UnsafeFnPointer(proc("glGetnUniformdv")!, def_glGetnUniformdv);
  fn_glGetnUniformfv = new Deno.UnsafeFnPointer(proc("glGetnUniformfv")!, def_glGetnUniformfv);
  fn_glGetnUniformiv = new Deno.UnsafeFnPointer(proc("glGetnUniformiv")!, def_glGetnUniformiv);
  fn_glGetnUniformuiv = new Deno.UnsafeFnPointer(proc("glGetnUniformuiv")!, def_glGetnUniformuiv);
  fn_glReadnPixels = new Deno.UnsafeFnPointer(proc("glReadnPixels")!, def_glReadnPixels);
  fn_glGetnMapdv = new Deno.UnsafeFnPointer(proc("glGetnMapdv")!, def_glGetnMapdv);
  fn_glGetnMapfv = new Deno.UnsafeFnPointer(proc("glGetnMapfv")!, def_glGetnMapfv);
  fn_glGetnMapiv = new Deno.UnsafeFnPointer(proc("glGetnMapiv")!, def_glGetnMapiv);
  fn_glGetnPixelMapfv = new Deno.UnsafeFnPointer(proc("glGetnPixelMapfv")!, def_glGetnPixelMapfv);
  fn_glGetnPixelMapuiv = new Deno.UnsafeFnPointer(proc("glGetnPixelMapuiv")!, def_glGetnPixelMapuiv);
  fn_glGetnPixelMapusv = new Deno.UnsafeFnPointer(proc("glGetnPixelMapusv")!, def_glGetnPixelMapusv);
  fn_glGetnPolygonStipple = new Deno.UnsafeFnPointer(proc("glGetnPolygonStipple")!, def_glGetnPolygonStipple);
  fn_glGetnColorTable = new Deno.UnsafeFnPointer(proc("glGetnColorTable")!, def_glGetnColorTable);
  fn_glGetnConvolutionFilter = new Deno.UnsafeFnPointer(proc("glGetnConvolutionFilter")!, def_glGetnConvolutionFilter);
  fn_glGetnSeparableFilter = new Deno.UnsafeFnPointer(proc("glGetnSeparableFilter")!, def_glGetnSeparableFilter);
  fn_glGetnHistogram = new Deno.UnsafeFnPointer(proc("glGetnHistogram")!, def_glGetnHistogram);
  fn_glGetnMinmax = new Deno.UnsafeFnPointer(proc("glGetnMinmax")!, def_glGetnMinmax);
  fn_glTextureBarrier = new Deno.UnsafeFnPointer(proc("glTextureBarrier")!, def_glTextureBarrier);
  fn_glSpecializeShader = new Deno.UnsafeFnPointer(proc("glSpecializeShader")!, def_glSpecializeShader);
  fn_glMultiDrawArraysIndirectCount = new Deno.UnsafeFnPointer(proc("glMultiDrawArraysIndirectCount")!, def_glMultiDrawArraysIndirectCount);
  fn_glMultiDrawElementsIndirectCount = new Deno.UnsafeFnPointer(proc("glMultiDrawElementsIndirectCount")!, def_glMultiDrawElementsIndirectCount);
  fn_glPolygonOffsetClamp = new Deno.UnsafeFnPointer(proc("glPolygonOffsetClamp")!, def_glPolygonOffsetClamp);
}
