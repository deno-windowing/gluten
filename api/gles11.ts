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

export const GL_VERSION_ES_CL_1_0 = 0x1;

export const GL_VERSION_ES_CM_1_1 = 0x1;

export const GL_VERSION_ES_CL_1_1 = 0x1;

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

export const GL_NEVER = 0x200;

export const GL_LESS = 0x201;

export const GL_EQUAL = 0x202;

export const GL_LEQUAL = 0x203;

export const GL_GREATER = 0x204;

export const GL_NOTEQUAL = 0x205;

export const GL_GEQUAL = 0x206;

export const GL_ALWAYS = 0x207;

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

export const GL_CLIP_PLANE0 = 0x3000;

export const GL_CLIP_PLANE1 = 0x3001;

export const GL_CLIP_PLANE2 = 0x3002;

export const GL_CLIP_PLANE3 = 0x3003;

export const GL_CLIP_PLANE4 = 0x3004;

export const GL_CLIP_PLANE5 = 0x3005;

export const GL_FRONT = 0x404;

export const GL_BACK = 0x405;

export const GL_FRONT_AND_BACK = 0x408;

export const GL_FOG = 0xb60;

export const GL_LIGHTING = 0xb50;

export const GL_TEXTURE_2D = 0xde1;

export const GL_CULL_FACE = 0xb44;

export const GL_ALPHA_TEST = 0xbc0;

export const GL_BLEND = 0xbe2;

export const GL_COLOR_LOGIC_OP = 0xbf2;

export const GL_DITHER = 0xbd0;

export const GL_STENCIL_TEST = 0xb90;

export const GL_DEPTH_TEST = 0xb71;

export const GL_POINT_SMOOTH = 0xb10;

export const GL_LINE_SMOOTH = 0xb20;

export const GL_SCISSOR_TEST = 0xc11;

export const GL_COLOR_MATERIAL = 0xb57;

export const GL_NORMALIZE = 0xba1;

export const GL_RESCALE_NORMAL = 0x803a;

export const GL_VERTEX_ARRAY = 0x8074;

export const GL_NORMAL_ARRAY = 0x8075;

export const GL_COLOR_ARRAY = 0x8076;

export const GL_TEXTURE_COORD_ARRAY = 0x8078;

export const GL_MULTISAMPLE = 0x809d;

export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e;

export const GL_SAMPLE_ALPHA_TO_ONE = 0x809f;

export const GL_SAMPLE_COVERAGE = 0x80a0;

export const GL_NO_ERROR = 0x0;

export const GL_INVALID_ENUM = 0x500;

export const GL_INVALID_VALUE = 0x501;

export const GL_INVALID_OPERATION = 0x502;

export const GL_STACK_OVERFLOW = 0x503;

export const GL_STACK_UNDERFLOW = 0x504;

export const GL_OUT_OF_MEMORY = 0x505;

export const GL_EXP = 0x800;

export const GL_EXP2 = 0x801;

export const GL_FOG_DENSITY = 0xb62;

export const GL_FOG_START = 0xb63;

export const GL_FOG_END = 0xb64;

export const GL_FOG_MODE = 0xb65;

export const GL_FOG_COLOR = 0xb66;

export const GL_CW = 0x900;

export const GL_CCW = 0x901;

export const GL_CURRENT_COLOR = 0xb00;

export const GL_CURRENT_NORMAL = 0xb02;

export const GL_CURRENT_TEXTURE_COORDS = 0xb03;

export const GL_POINT_SIZE = 0xb11;

export const GL_POINT_SIZE_MIN = 0x8126;

export const GL_POINT_SIZE_MAX = 0x8127;

export const GL_POINT_FADE_THRESHOLD_SIZE = 0x8128;

export const GL_POINT_DISTANCE_ATTENUATION = 0x8129;

export const GL_SMOOTH_POINT_SIZE_RANGE = 0xb12;

export const GL_LINE_WIDTH = 0xb21;

export const GL_SMOOTH_LINE_WIDTH_RANGE = 0xb22;

export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d;

export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e;

export const GL_CULL_FACE_MODE = 0xb45;

export const GL_FRONT_FACE = 0xb46;

export const GL_SHADE_MODEL = 0xb54;

export const GL_DEPTH_RANGE = 0xb70;

export const GL_DEPTH_WRITEMASK = 0xb72;

export const GL_DEPTH_CLEAR_VALUE = 0xb73;

export const GL_DEPTH_FUNC = 0xb74;

export const GL_STENCIL_CLEAR_VALUE = 0xb91;

export const GL_STENCIL_FUNC = 0xb92;

export const GL_STENCIL_VALUE_MASK = 0xb93;

export const GL_STENCIL_FAIL = 0xb94;

export const GL_STENCIL_PASS_DEPTH_FAIL = 0xb95;

export const GL_STENCIL_PASS_DEPTH_PASS = 0xb96;

export const GL_STENCIL_REF = 0xb97;

export const GL_STENCIL_WRITEMASK = 0xb98;

export const GL_MATRIX_MODE = 0xba0;

export const GL_VIEWPORT = 0xba2;

export const GL_MODELVIEW_STACK_DEPTH = 0xba3;

export const GL_PROJECTION_STACK_DEPTH = 0xba4;

export const GL_TEXTURE_STACK_DEPTH = 0xba5;

export const GL_MODELVIEW_MATRIX = 0xba6;

export const GL_PROJECTION_MATRIX = 0xba7;

export const GL_TEXTURE_MATRIX = 0xba8;

export const GL_ALPHA_TEST_FUNC = 0xbc1;

export const GL_ALPHA_TEST_REF = 0xbc2;

export const GL_BLEND_DST = 0xbe0;

export const GL_BLEND_SRC = 0xbe1;

export const GL_LOGIC_OP_MODE = 0xbf0;

export const GL_SCISSOR_BOX = 0xc10;

export const GL_COLOR_CLEAR_VALUE = 0xc22;

export const GL_COLOR_WRITEMASK = 0xc23;

export const GL_MAX_LIGHTS = 0xd31;

export const GL_MAX_CLIP_PLANES = 0xd32;

export const GL_MAX_TEXTURE_SIZE = 0xd33;

export const GL_MAX_MODELVIEW_STACK_DEPTH = 0xd36;

export const GL_MAX_PROJECTION_STACK_DEPTH = 0xd38;

export const GL_MAX_TEXTURE_STACK_DEPTH = 0xd39;

export const GL_MAX_VIEWPORT_DIMS = 0xd3a;

export const GL_MAX_TEXTURE_UNITS = 0x84e2;

export const GL_SUBPIXEL_BITS = 0xd50;

export const GL_RED_BITS = 0xd52;

export const GL_GREEN_BITS = 0xd53;

export const GL_BLUE_BITS = 0xd54;

export const GL_ALPHA_BITS = 0xd55;

export const GL_DEPTH_BITS = 0xd56;

export const GL_STENCIL_BITS = 0xd57;

export const GL_POLYGON_OFFSET_UNITS = 0x2a00;

export const GL_POLYGON_OFFSET_FILL = 0x8037;

export const GL_POLYGON_OFFSET_FACTOR = 0x8038;

export const GL_TEXTURE_BINDING_2D = 0x8069;

export const GL_VERTEX_ARRAY_SIZE = 0x807a;

export const GL_VERTEX_ARRAY_TYPE = 0x807b;

export const GL_VERTEX_ARRAY_STRIDE = 0x807c;

export const GL_NORMAL_ARRAY_TYPE = 0x807e;

export const GL_NORMAL_ARRAY_STRIDE = 0x807f;

export const GL_COLOR_ARRAY_SIZE = 0x8081;

export const GL_COLOR_ARRAY_TYPE = 0x8082;

export const GL_COLOR_ARRAY_STRIDE = 0x8083;

export const GL_TEXTURE_COORD_ARRAY_SIZE = 0x8088;

export const GL_TEXTURE_COORD_ARRAY_TYPE = 0x8089;

export const GL_TEXTURE_COORD_ARRAY_STRIDE = 0x808a;

export const GL_VERTEX_ARRAY_POINTER = 0x808e;

export const GL_NORMAL_ARRAY_POINTER = 0x808f;

export const GL_COLOR_ARRAY_POINTER = 0x8090;

export const GL_TEXTURE_COORD_ARRAY_POINTER = 0x8092;

export const GL_SAMPLE_BUFFERS = 0x80a8;

export const GL_SAMPLES = 0x80a9;

export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa;

export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab;

export const GL_NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;

export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3;

export const GL_DONT_CARE = 0x1100;

export const GL_FASTEST = 0x1101;

export const GL_NICEST = 0x1102;

export const GL_PERSPECTIVE_CORRECTION_HINT = 0xc50;

export const GL_POINT_SMOOTH_HINT = 0xc51;

export const GL_LINE_SMOOTH_HINT = 0xc52;

export const GL_FOG_HINT = 0xc54;

export const GL_GENERATE_MIPMAP_HINT = 0x8192;

export const GL_LIGHT_MODEL_AMBIENT = 0xb53;

export const GL_LIGHT_MODEL_TWO_SIDE = 0xb52;

export const GL_AMBIENT = 0x1200;

export const GL_DIFFUSE = 0x1201;

export const GL_SPECULAR = 0x1202;

export const GL_POSITION = 0x1203;

export const GL_SPOT_DIRECTION = 0x1204;

export const GL_SPOT_EXPONENT = 0x1205;

export const GL_SPOT_CUTOFF = 0x1206;

export const GL_CONSTANT_ATTENUATION = 0x1207;

export const GL_LINEAR_ATTENUATION = 0x1208;

export const GL_QUADRATIC_ATTENUATION = 0x1209;

export const GL_BYTE = 0x1400;

export const GL_UNSIGNED_BYTE = 0x1401;

export const GL_SHORT = 0x1402;

export const GL_UNSIGNED_SHORT = 0x1403;

export const GL_FLOAT = 0x1406;

export const GL_FIXED = 0x140c;

export const GL_CLEAR = 0x1500;

export const GL_AND = 0x1501;

export const GL_AND_REVERSE = 0x1502;

export const GL_COPY = 0x1503;

export const GL_AND_INVERTED = 0x1504;

export const GL_NOOP = 0x1505;

export const GL_XOR = 0x1506;

export const GL_OR = 0x1507;

export const GL_NOR = 0x1508;

export const GL_EQUIV = 0x1509;

export const GL_INVERT = 0x150a;

export const GL_OR_REVERSE = 0x150b;

export const GL_COPY_INVERTED = 0x150c;

export const GL_OR_INVERTED = 0x150d;

export const GL_NAND = 0x150e;

export const GL_SET = 0x150f;

export const GL_EMISSION = 0x1600;

export const GL_SHININESS = 0x1601;

export const GL_AMBIENT_AND_DIFFUSE = 0x1602;

export const GL_MODELVIEW = 0x1700;

export const GL_PROJECTION = 0x1701;

export const GL_TEXTURE = 0x1702;

export const GL_ALPHA = 0x1906;

export const GL_RGB = 0x1907;

export const GL_RGBA = 0x1908;

export const GL_LUMINANCE = 0x1909;

export const GL_LUMINANCE_ALPHA = 0x190a;

export const GL_UNPACK_ALIGNMENT = 0xcf5;

export const GL_PACK_ALIGNMENT = 0xd05;

export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;

export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;

export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363;

export const GL_FLAT = 0x1d00;

export const GL_SMOOTH = 0x1d01;

export const GL_KEEP = 0x1e00;

export const GL_REPLACE = 0x1e01;

export const GL_INCR = 0x1e02;

export const GL_DECR = 0x1e03;

export const GL_VENDOR = 0x1f00;

export const GL_RENDERER = 0x1f01;

export const GL_VERSION = 0x1f02;

export const GL_EXTENSIONS = 0x1f03;

export const GL_MODULATE = 0x2100;

export const GL_DECAL = 0x2101;

export const GL_ADD = 0x104;

export const GL_TEXTURE_ENV_MODE = 0x2200;

export const GL_TEXTURE_ENV_COLOR = 0x2201;

export const GL_TEXTURE_ENV = 0x2300;

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

export const GL_GENERATE_MIPMAP = 0x8191;

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

export const GL_CLIENT_ACTIVE_TEXTURE = 0x84e1;

export const GL_REPEAT = 0x2901;

export const GL_CLAMP_TO_EDGE = 0x812f;

export const GL_LIGHT0 = 0x4000;

export const GL_LIGHT1 = 0x4001;

export const GL_LIGHT2 = 0x4002;

export const GL_LIGHT3 = 0x4003;

export const GL_LIGHT4 = 0x4004;

export const GL_LIGHT5 = 0x4005;

export const GL_LIGHT6 = 0x4006;

export const GL_LIGHT7 = 0x4007;

export const GL_ARRAY_BUFFER = 0x8892;

export const GL_ELEMENT_ARRAY_BUFFER = 0x8893;

export const GL_ARRAY_BUFFER_BINDING = 0x8894;

export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;

export const GL_VERTEX_ARRAY_BUFFER_BINDING = 0x8896;

export const GL_NORMAL_ARRAY_BUFFER_BINDING = 0x8897;

export const GL_COLOR_ARRAY_BUFFER_BINDING = 0x8898;

export const GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING = 0x889a;

export const GL_STATIC_DRAW = 0x88e4;

export const GL_DYNAMIC_DRAW = 0x88e8;

export const GL_BUFFER_SIZE = 0x8764;

export const GL_BUFFER_USAGE = 0x8765;

export const GL_SUBTRACT = 0x84e7;

export const GL_COMBINE = 0x8570;

export const GL_COMBINE_RGB = 0x8571;

export const GL_COMBINE_ALPHA = 0x8572;

export const GL_RGB_SCALE = 0x8573;

export const GL_ADD_SIGNED = 0x8574;

export const GL_INTERPOLATE = 0x8575;

export const GL_CONSTANT = 0x8576;

export const GL_PRIMARY_COLOR = 0x8577;

export const GL_PREVIOUS = 0x8578;

export const GL_OPERAND0_RGB = 0x8590;

export const GL_OPERAND1_RGB = 0x8591;

export const GL_OPERAND2_RGB = 0x8592;

export const GL_OPERAND0_ALPHA = 0x8598;

export const GL_OPERAND1_ALPHA = 0x8599;

export const GL_OPERAND2_ALPHA = 0x859a;

export const GL_ALPHA_SCALE = 0xd1c;

export const GL_SRC0_RGB = 0x8580;

export const GL_SRC1_RGB = 0x8581;

export const GL_SRC2_RGB = 0x8582;

export const GL_SRC0_ALPHA = 0x8588;

export const GL_SRC1_ALPHA = 0x8589;

export const GL_SRC2_ALPHA = 0x858a;

export const GL_DOT3_RGB = 0x86ae;

export const GL_DOT3_RGBA = 0x86af;

/// Commands
