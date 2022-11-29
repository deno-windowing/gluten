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

export const GL_QUADS = 0x7;

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

export const GL_NONE = 0x0;

export const GL_FRONT_LEFT = 0x400;

export const GL_FRONT_RIGHT = 0x401;

export const GL_BACK_LEFT = 0x402;

export const GL_BACK_RIGHT = 0x403;

export const GL_FRONT = 0x404;

export const GL_BACK = 0x405;

export const GL_LEFT = 0x406;

export const GL_RIGHT = 0x407;

export const GL_FRONT_AND_BACK = 0x408;

export const GL_NO_ERROR = 0x0;

export const GL_INVALID_ENUM = 0x500;

export const GL_INVALID_VALUE = 0x501;

export const GL_INVALID_OPERATION = 0x502;

export const GL_OUT_OF_MEMORY = 0x505;

export const GL_CW = 0x900;

export const GL_CCW = 0x901;

export const GL_POINT_SIZE = 0xb11;

export const GL_POINT_SIZE_RANGE = 0xb12;

export const GL_POINT_SIZE_GRANULARITY = 0xb13;

export const GL_LINE_SMOOTH = 0xb20;

export const GL_LINE_WIDTH = 0xb21;

export const GL_LINE_WIDTH_RANGE = 0xb22;

export const GL_LINE_WIDTH_GRANULARITY = 0xb23;

export const GL_POLYGON_MODE = 0xb40;

export const GL_POLYGON_SMOOTH = 0xb41;

export const GL_CULL_FACE = 0xb44;

export const GL_CULL_FACE_MODE = 0xb45;

export const GL_FRONT_FACE = 0xb46;

export const GL_DEPTH_RANGE = 0xb70;

export const GL_DEPTH_TEST = 0xb71;

export const GL_DEPTH_WRITEMASK = 0xb72;

export const GL_DEPTH_CLEAR_VALUE = 0xb73;

export const GL_DEPTH_FUNC = 0xb74;

export const GL_STENCIL_TEST = 0xb90;

export const GL_STENCIL_CLEAR_VALUE = 0xb91;

export const GL_STENCIL_FUNC = 0xb92;

export const GL_STENCIL_VALUE_MASK = 0xb93;

export const GL_STENCIL_FAIL = 0xb94;

export const GL_STENCIL_PASS_DEPTH_FAIL = 0xb95;

export const GL_STENCIL_PASS_DEPTH_PASS = 0xb96;

export const GL_STENCIL_REF = 0xb97;

export const GL_STENCIL_WRITEMASK = 0xb98;

export const GL_VIEWPORT = 0xba2;

export const GL_DITHER = 0xbd0;

export const GL_BLEND_DST = 0xbe0;

export const GL_BLEND_SRC = 0xbe1;

export const GL_BLEND = 0xbe2;

export const GL_LOGIC_OP_MODE = 0xbf0;

export const GL_DRAW_BUFFER = 0xc01;

export const GL_READ_BUFFER = 0xc02;

export const GL_SCISSOR_BOX = 0xc10;

export const GL_SCISSOR_TEST = 0xc11;

export const GL_COLOR_CLEAR_VALUE = 0xc22;

export const GL_COLOR_WRITEMASK = 0xc23;

export const GL_DOUBLEBUFFER = 0xc32;

export const GL_STEREO = 0xc33;

export const GL_LINE_SMOOTH_HINT = 0xc52;

export const GL_POLYGON_SMOOTH_HINT = 0xc53;

export const GL_UNPACK_SWAP_BYTES = 0xcf0;

export const GL_UNPACK_LSB_FIRST = 0xcf1;

export const GL_UNPACK_ROW_LENGTH = 0xcf2;

export const GL_UNPACK_SKIP_ROWS = 0xcf3;

export const GL_UNPACK_SKIP_PIXELS = 0xcf4;

export const GL_UNPACK_ALIGNMENT = 0xcf5;

export const GL_PACK_SWAP_BYTES = 0xd00;

export const GL_PACK_LSB_FIRST = 0xd01;

export const GL_PACK_ROW_LENGTH = 0xd02;

export const GL_PACK_SKIP_ROWS = 0xd03;

export const GL_PACK_SKIP_PIXELS = 0xd04;

export const GL_PACK_ALIGNMENT = 0xd05;

export const GL_MAX_TEXTURE_SIZE = 0xd33;

export const GL_MAX_VIEWPORT_DIMS = 0xd3a;

export const GL_SUBPIXEL_BITS = 0xd50;

export const GL_TEXTURE_1D = 0xde0;

export const GL_TEXTURE_2D = 0xde1;

export const GL_TEXTURE_WIDTH = 0x1000;

export const GL_TEXTURE_HEIGHT = 0x1001;

export const GL_TEXTURE_BORDER_COLOR = 0x1004;

export const GL_DONT_CARE = 0x1100;

export const GL_FASTEST = 0x1101;

export const GL_NICEST = 0x1102;

export const GL_BYTE = 0x1400;

export const GL_UNSIGNED_BYTE = 0x1401;

export const GL_SHORT = 0x1402;

export const GL_UNSIGNED_SHORT = 0x1403;

export const GL_INT = 0x1404;

export const GL_UNSIGNED_INT = 0x1405;

export const GL_FLOAT = 0x1406;

export const GL_STACK_OVERFLOW = 0x503;

export const GL_STACK_UNDERFLOW = 0x504;

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

export const GL_TEXTURE = 0x1702;

export const GL_COLOR = 0x1800;

export const GL_DEPTH = 0x1801;

export const GL_STENCIL = 0x1802;

export const GL_STENCIL_INDEX = 0x1901;

export const GL_DEPTH_COMPONENT = 0x1902;

export const GL_RED = 0x1903;

export const GL_GREEN = 0x1904;

export const GL_BLUE = 0x1905;

export const GL_ALPHA = 0x1906;

export const GL_RGB = 0x1907;

export const GL_RGBA = 0x1908;

export const GL_POINT = 0x1b00;

export const GL_LINE = 0x1b01;

export const GL_FILL = 0x1b02;

export const GL_KEEP = 0x1e00;

export const GL_REPLACE = 0x1e01;

export const GL_INCR = 0x1e02;

export const GL_DECR = 0x1e03;

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

export const GL_REPEAT = 0x2901;

export const GL_CURRENT_BIT = 0x1;

export const GL_POINT_BIT = 0x2;

export const GL_LINE_BIT = 0x4;

export const GL_POLYGON_BIT = 0x8;

export const GL_POLYGON_STIPPLE_BIT = 0x10;

export const GL_PIXEL_MODE_BIT = 0x20;

export const GL_LIGHTING_BIT = 0x40;

export const GL_FOG_BIT = 0x80;

export const GL_ACCUM_BUFFER_BIT = 0x200;

export const GL_VIEWPORT_BIT = 0x800;

export const GL_TRANSFORM_BIT = 0x1000;

export const GL_ENABLE_BIT = 0x2000;

export const GL_HINT_BIT = 0x8000;

export const GL_EVAL_BIT = 0x10000;

export const GL_LIST_BIT = 0x20000;

export const GL_TEXTURE_BIT = 0x40000;

export const GL_SCISSOR_BIT = 0x80000;

export const GL_ALL_ATTRIB_BITS = 0xffffffff;

export const GL_QUAD_STRIP = 0x8;

export const GL_POLYGON = 0x9;

export const GL_ACCUM = 0x100;

export const GL_LOAD = 0x101;

export const GL_RETURN = 0x102;

export const GL_MULT = 0x103;

export const GL_ADD = 0x104;

export const GL_AUX0 = 0x409;

export const GL_AUX1 = 0x40a;

export const GL_AUX2 = 0x40b;

export const GL_AUX3 = 0x40c;

export const GL_2D = 0x600;

export const GL_3D = 0x601;

export const GL_3D_COLOR = 0x602;

export const GL_3D_COLOR_TEXTURE = 0x603;

export const GL_4D_COLOR_TEXTURE = 0x604;

export const GL_PASS_THROUGH_TOKEN = 0x700;

export const GL_POINT_TOKEN = 0x701;

export const GL_LINE_TOKEN = 0x702;

export const GL_POLYGON_TOKEN = 0x703;

export const GL_BITMAP_TOKEN = 0x704;

export const GL_DRAW_PIXEL_TOKEN = 0x705;

export const GL_COPY_PIXEL_TOKEN = 0x706;

export const GL_LINE_RESET_TOKEN = 0x707;

export const GL_EXP = 0x800;

export const GL_EXP2 = 0x801;

export const GL_COEFF = 0xa00;

export const GL_ORDER = 0xa01;

export const GL_DOMAIN = 0xa02;

export const GL_PIXEL_MAP_I_TO_I = 0xc70;

export const GL_PIXEL_MAP_S_TO_S = 0xc71;

export const GL_PIXEL_MAP_I_TO_R = 0xc72;

export const GL_PIXEL_MAP_I_TO_G = 0xc73;

export const GL_PIXEL_MAP_I_TO_B = 0xc74;

export const GL_PIXEL_MAP_I_TO_A = 0xc75;

export const GL_PIXEL_MAP_R_TO_R = 0xc76;

export const GL_PIXEL_MAP_G_TO_G = 0xc77;

export const GL_PIXEL_MAP_B_TO_B = 0xc78;

export const GL_PIXEL_MAP_A_TO_A = 0xc79;

export const GL_CURRENT_COLOR = 0xb00;

export const GL_CURRENT_INDEX = 0xb01;

export const GL_CURRENT_NORMAL = 0xb02;

export const GL_CURRENT_TEXTURE_COORDS = 0xb03;

export const GL_CURRENT_RASTER_COLOR = 0xb04;

export const GL_CURRENT_RASTER_INDEX = 0xb05;

export const GL_CURRENT_RASTER_TEXTURE_COORDS = 0xb06;

export const GL_CURRENT_RASTER_POSITION = 0xb07;

export const GL_CURRENT_RASTER_POSITION_VALID = 0xb08;

export const GL_CURRENT_RASTER_DISTANCE = 0xb09;

export const GL_POINT_SMOOTH = 0xb10;

export const GL_LINE_STIPPLE = 0xb24;

export const GL_LINE_STIPPLE_PATTERN = 0xb25;

export const GL_LINE_STIPPLE_REPEAT = 0xb26;

export const GL_LIST_MODE = 0xb30;

export const GL_MAX_LIST_NESTING = 0xb31;

export const GL_LIST_BASE = 0xb32;

export const GL_LIST_INDEX = 0xb33;

export const GL_POLYGON_STIPPLE = 0xb42;

export const GL_EDGE_FLAG = 0xb43;

export const GL_LIGHTING = 0xb50;

export const GL_LIGHT_MODEL_LOCAL_VIEWER = 0xb51;

export const GL_LIGHT_MODEL_TWO_SIDE = 0xb52;

export const GL_LIGHT_MODEL_AMBIENT = 0xb53;

export const GL_SHADE_MODEL = 0xb54;

export const GL_COLOR_MATERIAL_FACE = 0xb55;

export const GL_COLOR_MATERIAL_PARAMETER = 0xb56;

export const GL_COLOR_MATERIAL = 0xb57;

export const GL_FOG = 0xb60;

export const GL_FOG_INDEX = 0xb61;

export const GL_FOG_DENSITY = 0xb62;

export const GL_FOG_START = 0xb63;

export const GL_FOG_END = 0xb64;

export const GL_FOG_MODE = 0xb65;

export const GL_FOG_COLOR = 0xb66;

export const GL_ACCUM_CLEAR_VALUE = 0xb80;

export const GL_MATRIX_MODE = 0xba0;

export const GL_NORMALIZE = 0xba1;

export const GL_MODELVIEW_STACK_DEPTH = 0xba3;

export const GL_PROJECTION_STACK_DEPTH = 0xba4;

export const GL_TEXTURE_STACK_DEPTH = 0xba5;

export const GL_MODELVIEW_MATRIX = 0xba6;

export const GL_PROJECTION_MATRIX = 0xba7;

export const GL_TEXTURE_MATRIX = 0xba8;

export const GL_ATTRIB_STACK_DEPTH = 0xbb0;

export const GL_ALPHA_TEST = 0xbc0;

export const GL_ALPHA_TEST_FUNC = 0xbc1;

export const GL_ALPHA_TEST_REF = 0xbc2;

export const GL_LOGIC_OP = 0xbf1;

export const GL_AUX_BUFFERS = 0xc00;

export const GL_INDEX_CLEAR_VALUE = 0xc20;

export const GL_INDEX_WRITEMASK = 0xc21;

export const GL_INDEX_MODE = 0xc30;

export const GL_RGBA_MODE = 0xc31;

export const GL_RENDER_MODE = 0xc40;

export const GL_PERSPECTIVE_CORRECTION_HINT = 0xc50;

export const GL_POINT_SMOOTH_HINT = 0xc51;

export const GL_FOG_HINT = 0xc54;

export const GL_TEXTURE_GEN_S = 0xc60;

export const GL_TEXTURE_GEN_T = 0xc61;

export const GL_TEXTURE_GEN_R = 0xc62;

export const GL_TEXTURE_GEN_Q = 0xc63;

export const GL_PIXEL_MAP_I_TO_I_SIZE = 0xcb0;

export const GL_PIXEL_MAP_S_TO_S_SIZE = 0xcb1;

export const GL_PIXEL_MAP_I_TO_R_SIZE = 0xcb2;

export const GL_PIXEL_MAP_I_TO_G_SIZE = 0xcb3;

export const GL_PIXEL_MAP_I_TO_B_SIZE = 0xcb4;

export const GL_PIXEL_MAP_I_TO_A_SIZE = 0xcb5;

export const GL_PIXEL_MAP_R_TO_R_SIZE = 0xcb6;

export const GL_PIXEL_MAP_G_TO_G_SIZE = 0xcb7;

export const GL_PIXEL_MAP_B_TO_B_SIZE = 0xcb8;

export const GL_PIXEL_MAP_A_TO_A_SIZE = 0xcb9;

export const GL_MAP_COLOR = 0xd10;

export const GL_MAP_STENCIL = 0xd11;

export const GL_INDEX_SHIFT = 0xd12;

export const GL_INDEX_OFFSET = 0xd13;

export const GL_RED_SCALE = 0xd14;

export const GL_RED_BIAS = 0xd15;

export const GL_ZOOM_X = 0xd16;

export const GL_ZOOM_Y = 0xd17;

export const GL_GREEN_SCALE = 0xd18;

export const GL_GREEN_BIAS = 0xd19;

export const GL_BLUE_SCALE = 0xd1a;

export const GL_BLUE_BIAS = 0xd1b;

export const GL_ALPHA_SCALE = 0xd1c;

export const GL_ALPHA_BIAS = 0xd1d;

export const GL_DEPTH_SCALE = 0xd1e;

export const GL_DEPTH_BIAS = 0xd1f;

export const GL_MAX_EVAL_ORDER = 0xd30;

export const GL_MAX_LIGHTS = 0xd31;

export const GL_MAX_CLIP_PLANES = 0xd32;

export const GL_MAX_PIXEL_MAP_TABLE = 0xd34;

export const GL_MAX_ATTRIB_STACK_DEPTH = 0xd35;

export const GL_MAX_MODELVIEW_STACK_DEPTH = 0xd36;

export const GL_MAX_NAME_STACK_DEPTH = 0xd37;

export const GL_MAX_PROJECTION_STACK_DEPTH = 0xd38;

export const GL_MAX_TEXTURE_STACK_DEPTH = 0xd39;

export const GL_INDEX_BITS = 0xd51;

export const GL_RED_BITS = 0xd52;

export const GL_GREEN_BITS = 0xd53;

export const GL_BLUE_BITS = 0xd54;

export const GL_ALPHA_BITS = 0xd55;

export const GL_DEPTH_BITS = 0xd56;

export const GL_STENCIL_BITS = 0xd57;

export const GL_ACCUM_RED_BITS = 0xd58;

export const GL_ACCUM_GREEN_BITS = 0xd59;

export const GL_ACCUM_BLUE_BITS = 0xd5a;

export const GL_ACCUM_ALPHA_BITS = 0xd5b;

export const GL_NAME_STACK_DEPTH = 0xd70;

export const GL_AUTO_NORMAL = 0xd80;

export const GL_MAP1_COLOR_4 = 0xd90;

export const GL_MAP1_INDEX = 0xd91;

export const GL_MAP1_NORMAL = 0xd92;

export const GL_MAP1_TEXTURE_COORD_1 = 0xd93;

export const GL_MAP1_TEXTURE_COORD_2 = 0xd94;

export const GL_MAP1_TEXTURE_COORD_3 = 0xd95;

export const GL_MAP1_TEXTURE_COORD_4 = 0xd96;

export const GL_MAP1_VERTEX_3 = 0xd97;

export const GL_MAP1_VERTEX_4 = 0xd98;

export const GL_MAP2_COLOR_4 = 0xdb0;

export const GL_MAP2_INDEX = 0xdb1;

export const GL_MAP2_NORMAL = 0xdb2;

export const GL_MAP2_TEXTURE_COORD_1 = 0xdb3;

export const GL_MAP2_TEXTURE_COORD_2 = 0xdb4;

export const GL_MAP2_TEXTURE_COORD_3 = 0xdb5;

export const GL_MAP2_TEXTURE_COORD_4 = 0xdb6;

export const GL_MAP2_VERTEX_3 = 0xdb7;

export const GL_MAP2_VERTEX_4 = 0xdb8;

export const GL_MAP1_GRID_DOMAIN = 0xdd0;

export const GL_MAP1_GRID_SEGMENTS = 0xdd1;

export const GL_MAP2_GRID_DOMAIN = 0xdd2;

export const GL_MAP2_GRID_SEGMENTS = 0xdd3;

export const GL_TEXTURE_COMPONENTS = 0x1003;

export const GL_TEXTURE_BORDER = 0x1005;

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

export const GL_COMPILE = 0x1300;

export const GL_COMPILE_AND_EXECUTE = 0x1301;

export const GL_2_BYTES = 0x1407;

export const GL_3_BYTES = 0x1408;

export const GL_4_BYTES = 0x1409;

export const GL_EMISSION = 0x1600;

export const GL_SHININESS = 0x1601;

export const GL_AMBIENT_AND_DIFFUSE = 0x1602;

export const GL_COLOR_INDEXES = 0x1603;

export const GL_MODELVIEW = 0x1700;

export const GL_PROJECTION = 0x1701;

export const GL_COLOR_INDEX = 0x1900;

export const GL_LUMINANCE = 0x1909;

export const GL_LUMINANCE_ALPHA = 0x190a;

export const GL_BITMAP = 0x1a00;

export const GL_RENDER = 0x1c00;

export const GL_FEEDBACK = 0x1c01;

export const GL_SELECT = 0x1c02;

export const GL_FLAT = 0x1d00;

export const GL_SMOOTH = 0x1d01;

export const GL_S = 0x2000;

export const GL_T = 0x2001;

export const GL_R = 0x2002;

export const GL_Q = 0x2003;

export const GL_MODULATE = 0x2100;

export const GL_DECAL = 0x2101;

export const GL_TEXTURE_ENV_MODE = 0x2200;

export const GL_TEXTURE_ENV_COLOR = 0x2201;

export const GL_TEXTURE_ENV = 0x2300;

export const GL_EYE_LINEAR = 0x2400;

export const GL_OBJECT_LINEAR = 0x2401;

export const GL_SPHERE_MAP = 0x2402;

export const GL_TEXTURE_GEN_MODE = 0x2500;

export const GL_OBJECT_PLANE = 0x2501;

export const GL_EYE_PLANE = 0x2502;

export const GL_CLAMP = 0x2900;

export const GL_CLIP_PLANE0 = 0x3000;

export const GL_CLIP_PLANE1 = 0x3001;

export const GL_CLIP_PLANE2 = 0x3002;

export const GL_CLIP_PLANE3 = 0x3003;

export const GL_CLIP_PLANE4 = 0x3004;

export const GL_CLIP_PLANE5 = 0x3005;

export const GL_LIGHT0 = 0x4000;

export const GL_LIGHT1 = 0x4001;

export const GL_LIGHT2 = 0x4002;

export const GL_LIGHT3 = 0x4003;

export const GL_LIGHT4 = 0x4004;

export const GL_LIGHT5 = 0x4005;

export const GL_LIGHT6 = 0x4006;

export const GL_LIGHT7 = 0x4007;

export const GL_COLOR_LOGIC_OP = 0xbf2;

export const GL_POLYGON_OFFSET_UNITS = 0x2a00;

export const GL_POLYGON_OFFSET_POINT = 0x2a01;

export const GL_POLYGON_OFFSET_LINE = 0x2a02;

export const GL_POLYGON_OFFSET_FILL = 0x8037;

export const GL_POLYGON_OFFSET_FACTOR = 0x8038;

export const GL_TEXTURE_BINDING_1D = 0x8068;

export const GL_TEXTURE_BINDING_2D = 0x8069;

export const GL_TEXTURE_INTERNAL_FORMAT = 0x1003;

export const GL_TEXTURE_RED_SIZE = 0x805c;

export const GL_TEXTURE_GREEN_SIZE = 0x805d;

export const GL_TEXTURE_BLUE_SIZE = 0x805e;

export const GL_TEXTURE_ALPHA_SIZE = 0x805f;

export const GL_DOUBLE = 0x140a;

export const GL_PROXY_TEXTURE_1D = 0x8063;

export const GL_PROXY_TEXTURE_2D = 0x8064;

export const GL_R3_G3_B2 = 0x2a10;

export const GL_RGB4 = 0x804f;

export const GL_RGB5 = 0x8050;

export const GL_RGB8 = 0x8051;

export const GL_RGB10 = 0x8052;

export const GL_RGB12 = 0x8053;

export const GL_RGB16 = 0x8054;

export const GL_RGBA2 = 0x8055;

export const GL_RGBA4 = 0x8056;

export const GL_RGB5_A1 = 0x8057;

export const GL_RGBA8 = 0x8058;

export const GL_RGB10_A2 = 0x8059;

export const GL_RGBA12 = 0x805a;

export const GL_RGBA16 = 0x805b;

export const GL_CLIENT_PIXEL_STORE_BIT = 0x1;

export const GL_CLIENT_VERTEX_ARRAY_BIT = 0x2;

export const GL_CLIENT_ALL_ATTRIB_BITS = 0xffffffff;

export const GL_VERTEX_ARRAY_POINTER = 0x808e;

export const GL_NORMAL_ARRAY_POINTER = 0x808f;

export const GL_COLOR_ARRAY_POINTER = 0x8090;

export const GL_INDEX_ARRAY_POINTER = 0x8091;

export const GL_TEXTURE_COORD_ARRAY_POINTER = 0x8092;

export const GL_EDGE_FLAG_ARRAY_POINTER = 0x8093;

export const GL_FEEDBACK_BUFFER_POINTER = 0xdf0;

export const GL_SELECTION_BUFFER_POINTER = 0xdf3;

export const GL_CLIENT_ATTRIB_STACK_DEPTH = 0xbb1;

export const GL_INDEX_LOGIC_OP = 0xbf1;

export const GL_MAX_CLIENT_ATTRIB_STACK_DEPTH = 0xd3b;

export const GL_FEEDBACK_BUFFER_SIZE = 0xdf1;

export const GL_FEEDBACK_BUFFER_TYPE = 0xdf2;

export const GL_SELECTION_BUFFER_SIZE = 0xdf4;

export const GL_VERTEX_ARRAY = 0x8074;

export const GL_NORMAL_ARRAY = 0x8075;

export const GL_COLOR_ARRAY = 0x8076;

export const GL_INDEX_ARRAY = 0x8077;

export const GL_TEXTURE_COORD_ARRAY = 0x8078;

export const GL_EDGE_FLAG_ARRAY = 0x8079;

export const GL_VERTEX_ARRAY_SIZE = 0x807a;

export const GL_VERTEX_ARRAY_TYPE = 0x807b;

export const GL_VERTEX_ARRAY_STRIDE = 0x807c;

export const GL_NORMAL_ARRAY_TYPE = 0x807e;

export const GL_NORMAL_ARRAY_STRIDE = 0x807f;

export const GL_COLOR_ARRAY_SIZE = 0x8081;

export const GL_COLOR_ARRAY_TYPE = 0x8082;

export const GL_COLOR_ARRAY_STRIDE = 0x8083;

export const GL_INDEX_ARRAY_TYPE = 0x8085;

export const GL_INDEX_ARRAY_STRIDE = 0x8086;

export const GL_TEXTURE_COORD_ARRAY_SIZE = 0x8088;

export const GL_TEXTURE_COORD_ARRAY_TYPE = 0x8089;

export const GL_TEXTURE_COORD_ARRAY_STRIDE = 0x808a;

export const GL_EDGE_FLAG_ARRAY_STRIDE = 0x808c;

export const GL_TEXTURE_LUMINANCE_SIZE = 0x8060;

export const GL_TEXTURE_INTENSITY_SIZE = 0x8061;

export const GL_TEXTURE_PRIORITY = 0x8066;

export const GL_TEXTURE_RESIDENT = 0x8067;

export const GL_ALPHA4 = 0x803b;

export const GL_ALPHA8 = 0x803c;

export const GL_ALPHA12 = 0x803d;

export const GL_ALPHA16 = 0x803e;

export const GL_LUMINANCE4 = 0x803f;

export const GL_LUMINANCE8 = 0x8040;

export const GL_LUMINANCE12 = 0x8041;

export const GL_LUMINANCE16 = 0x8042;

export const GL_LUMINANCE4_ALPHA4 = 0x8043;

export const GL_LUMINANCE6_ALPHA2 = 0x8044;

export const GL_LUMINANCE8_ALPHA8 = 0x8045;

export const GL_LUMINANCE12_ALPHA4 = 0x8046;

export const GL_LUMINANCE12_ALPHA12 = 0x8047;

export const GL_LUMINANCE16_ALPHA16 = 0x8048;

export const GL_INTENSITY = 0x8049;

export const GL_INTENSITY4 = 0x804a;

export const GL_INTENSITY8 = 0x804b;

export const GL_INTENSITY12 = 0x804c;

export const GL_INTENSITY16 = 0x804d;

export const GL_V2F = 0x2a20;

export const GL_V3F = 0x2a21;

export const GL_C4UB_V2F = 0x2a22;

export const GL_C4UB_V3F = 0x2a23;

export const GL_C3F_V3F = 0x2a24;

export const GL_N3F_V3F = 0x2a25;

export const GL_C4F_N3F_V3F = 0x2a26;

export const GL_T2F_V3F = 0x2a27;

export const GL_T4F_V4F = 0x2a28;

export const GL_T2F_C4UB_V3F = 0x2a29;

export const GL_T2F_C3F_V3F = 0x2a2a;

export const GL_T2F_N3F_V3F = 0x2a2b;

export const GL_T2F_C4F_N3F_V3F = 0x2a2c;

export const GL_T4F_C4F_N3F_V4F = 0x2a2d;

export const GL_UNSIGNED_BYTE_3_3_2 = 0x8032;

export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;

export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;

export const GL_UNSIGNED_INT_8_8_8_8 = 0x8035;

export const GL_UNSIGNED_INT_10_10_10_2 = 0x8036;

export const GL_TEXTURE_BINDING_3D = 0x806a;

export const GL_PACK_SKIP_IMAGES = 0x806b;

export const GL_PACK_IMAGE_HEIGHT = 0x806c;

export const GL_UNPACK_SKIP_IMAGES = 0x806d;

export const GL_UNPACK_IMAGE_HEIGHT = 0x806e;

export const GL_TEXTURE_3D = 0x806f;

export const GL_PROXY_TEXTURE_3D = 0x8070;

export const GL_TEXTURE_DEPTH = 0x8071;

export const GL_TEXTURE_WRAP_R = 0x8072;

export const GL_MAX_3D_TEXTURE_SIZE = 0x8073;

export const GL_UNSIGNED_BYTE_2_3_3_REV = 0x8362;

export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363;

export const GL_UNSIGNED_SHORT_5_6_5_REV = 0x8364;

export const GL_UNSIGNED_SHORT_4_4_4_4_REV = 0x8365;

export const GL_UNSIGNED_SHORT_1_5_5_5_REV = 0x8366;

export const GL_UNSIGNED_INT_8_8_8_8_REV = 0x8367;

export const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368;

export const GL_BGR = 0x80e0;

export const GL_BGRA = 0x80e1;

export const GL_MAX_ELEMENTS_VERTICES = 0x80e8;

export const GL_MAX_ELEMENTS_INDICES = 0x80e9;

export const GL_CLAMP_TO_EDGE = 0x812f;

export const GL_TEXTURE_MIN_LOD = 0x813a;

export const GL_TEXTURE_MAX_LOD = 0x813b;

export const GL_TEXTURE_BASE_LEVEL = 0x813c;

export const GL_TEXTURE_MAX_LEVEL = 0x813d;

export const GL_SMOOTH_POINT_SIZE_RANGE = 0xb12;

export const GL_SMOOTH_POINT_SIZE_GRANULARITY = 0xb13;

export const GL_SMOOTH_LINE_WIDTH_RANGE = 0xb22;

export const GL_SMOOTH_LINE_WIDTH_GRANULARITY = 0xb23;

export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e;

export const GL_RESCALE_NORMAL = 0x803a;

export const GL_LIGHT_MODEL_COLOR_CONTROL = 0x81f8;

export const GL_SINGLE_COLOR = 0x81f9;

export const GL_SEPARATE_SPECULAR_COLOR = 0x81fa;

export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d;

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

export const GL_MULTISAMPLE = 0x809d;

export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e;

export const GL_SAMPLE_ALPHA_TO_ONE = 0x809f;

export const GL_SAMPLE_COVERAGE = 0x80a0;

export const GL_SAMPLE_BUFFERS = 0x80a8;

export const GL_SAMPLES = 0x80a9;

export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa;

export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab;

export const GL_TEXTURE_CUBE_MAP = 0x8513;

export const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;

export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;

export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;

export const GL_PROXY_TEXTURE_CUBE_MAP = 0x851b;

export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c;

export const GL_COMPRESSED_RGB = 0x84ed;

export const GL_COMPRESSED_RGBA = 0x84ee;

export const GL_TEXTURE_COMPRESSION_HINT = 0x84ef;

export const GL_TEXTURE_COMPRESSED_IMAGE_SIZE = 0x86a0;

export const GL_TEXTURE_COMPRESSED = 0x86a1;

export const GL_NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2;

export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3;

export const GL_CLAMP_TO_BORDER = 0x812d;

export const GL_CLIENT_ACTIVE_TEXTURE = 0x84e1;

export const GL_MAX_TEXTURE_UNITS = 0x84e2;

export const GL_TRANSPOSE_MODELVIEW_MATRIX = 0x84e3;

export const GL_TRANSPOSE_PROJECTION_MATRIX = 0x84e4;

export const GL_TRANSPOSE_TEXTURE_MATRIX = 0x84e5;

export const GL_TRANSPOSE_COLOR_MATRIX = 0x84e6;

export const GL_MULTISAMPLE_BIT = 0x20000000;

export const GL_NORMAL_MAP = 0x8511;

export const GL_REFLECTION_MAP = 0x8512;

export const GL_COMPRESSED_ALPHA = 0x84e9;

export const GL_COMPRESSED_LUMINANCE = 0x84ea;

export const GL_COMPRESSED_LUMINANCE_ALPHA = 0x84eb;

export const GL_COMPRESSED_INTENSITY = 0x84ec;

export const GL_COMBINE = 0x8570;

export const GL_COMBINE_RGB = 0x8571;

export const GL_COMBINE_ALPHA = 0x8572;

export const GL_SOURCE0_RGB = 0x8580;

export const GL_SOURCE1_RGB = 0x8581;

export const GL_SOURCE2_RGB = 0x8582;

export const GL_SOURCE0_ALPHA = 0x8588;

export const GL_SOURCE1_ALPHA = 0x8589;

export const GL_SOURCE2_ALPHA = 0x858a;

export const GL_OPERAND0_RGB = 0x8590;

export const GL_OPERAND1_RGB = 0x8591;

export const GL_OPERAND2_RGB = 0x8592;

export const GL_OPERAND0_ALPHA = 0x8598;

export const GL_OPERAND1_ALPHA = 0x8599;

export const GL_OPERAND2_ALPHA = 0x859a;

export const GL_RGB_SCALE = 0x8573;

export const GL_ADD_SIGNED = 0x8574;

export const GL_INTERPOLATE = 0x8575;

export const GL_SUBTRACT = 0x84e7;

export const GL_CONSTANT = 0x8576;

export const GL_PRIMARY_COLOR = 0x8577;

export const GL_PREVIOUS = 0x8578;

export const GL_DOT3_RGB = 0x86ae;

export const GL_DOT3_RGBA = 0x86af;

export const GL_BLEND_DST_RGB = 0x80c8;

export const GL_BLEND_SRC_RGB = 0x80c9;

export const GL_BLEND_DST_ALPHA = 0x80ca;

export const GL_BLEND_SRC_ALPHA = 0x80cb;

export const GL_POINT_FADE_THRESHOLD_SIZE = 0x8128;

export const GL_DEPTH_COMPONENT16 = 0x81a5;

export const GL_DEPTH_COMPONENT24 = 0x81a6;

export const GL_DEPTH_COMPONENT32 = 0x81a7;

export const GL_MIRRORED_REPEAT = 0x8370;

export const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd;

export const GL_TEXTURE_LOD_BIAS = 0x8501;

export const GL_INCR_WRAP = 0x8507;

export const GL_DECR_WRAP = 0x8508;

export const GL_TEXTURE_DEPTH_SIZE = 0x884a;

export const GL_TEXTURE_COMPARE_MODE = 0x884c;

export const GL_TEXTURE_COMPARE_FUNC = 0x884d;

export const GL_POINT_SIZE_MIN = 0x8126;

export const GL_POINT_SIZE_MAX = 0x8127;

export const GL_POINT_DISTANCE_ATTENUATION = 0x8129;

export const GL_GENERATE_MIPMAP = 0x8191;

export const GL_GENERATE_MIPMAP_HINT = 0x8192;

export const GL_FOG_COORDINATE_SOURCE = 0x8450;

export const GL_FOG_COORDINATE = 0x8451;

export const GL_FRAGMENT_DEPTH = 0x8452;

export const GL_CURRENT_FOG_COORDINATE = 0x8453;

export const GL_FOG_COORDINATE_ARRAY_TYPE = 0x8454;

export const GL_FOG_COORDINATE_ARRAY_STRIDE = 0x8455;

export const GL_FOG_COORDINATE_ARRAY_POINTER = 0x8456;

export const GL_FOG_COORDINATE_ARRAY = 0x8457;

export const GL_COLOR_SUM = 0x8458;

export const GL_CURRENT_SECONDARY_COLOR = 0x8459;

export const GL_SECONDARY_COLOR_ARRAY_SIZE = 0x845a;

export const GL_SECONDARY_COLOR_ARRAY_TYPE = 0x845b;

export const GL_SECONDARY_COLOR_ARRAY_STRIDE = 0x845c;

export const GL_SECONDARY_COLOR_ARRAY_POINTER = 0x845d;

export const GL_SECONDARY_COLOR_ARRAY = 0x845e;

export const GL_TEXTURE_FILTER_CONTROL = 0x8500;

export const GL_DEPTH_TEXTURE_MODE = 0x884b;

export const GL_COMPARE_R_TO_TEXTURE = 0x884e;

export const GL_BLEND_COLOR = 0x8005;

export const GL_BLEND_EQUATION = 0x8009;

export const GL_CONSTANT_COLOR = 0x8001;

export const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002;

export const GL_CONSTANT_ALPHA = 0x8003;

export const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004;

export const GL_FUNC_ADD = 0x8006;

export const GL_FUNC_REVERSE_SUBTRACT = 0x800b;

export const GL_FUNC_SUBTRACT = 0x800a;

export const GL_MIN = 0x8007;

export const GL_MAX = 0x8008;

export const GL_BUFFER_SIZE = 0x8764;

export const GL_BUFFER_USAGE = 0x8765;

export const GL_QUERY_COUNTER_BITS = 0x8864;

export const GL_CURRENT_QUERY = 0x8865;

export const GL_QUERY_RESULT = 0x8866;

export const GL_QUERY_RESULT_AVAILABLE = 0x8867;

export const GL_ARRAY_BUFFER = 0x8892;

export const GL_ELEMENT_ARRAY_BUFFER = 0x8893;

export const GL_ARRAY_BUFFER_BINDING = 0x8894;

export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;

export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;

export const GL_READ_ONLY = 0x88b8;

export const GL_WRITE_ONLY = 0x88b9;

export const GL_READ_WRITE = 0x88ba;

export const GL_BUFFER_ACCESS = 0x88bb;

export const GL_BUFFER_MAPPED = 0x88bc;

export const GL_BUFFER_MAP_POINTER = 0x88bd;

export const GL_STREAM_DRAW = 0x88e0;

export const GL_STREAM_READ = 0x88e1;

export const GL_STREAM_COPY = 0x88e2;

export const GL_STATIC_DRAW = 0x88e4;

export const GL_STATIC_READ = 0x88e5;

export const GL_STATIC_COPY = 0x88e6;

export const GL_DYNAMIC_DRAW = 0x88e8;

export const GL_DYNAMIC_READ = 0x88e9;

export const GL_DYNAMIC_COPY = 0x88ea;

export const GL_SAMPLES_PASSED = 0x8914;

export const GL_SRC1_ALPHA = 0x8589;

export const GL_VERTEX_ARRAY_BUFFER_BINDING = 0x8896;

export const GL_NORMAL_ARRAY_BUFFER_BINDING = 0x8897;

export const GL_COLOR_ARRAY_BUFFER_BINDING = 0x8898;

export const GL_INDEX_ARRAY_BUFFER_BINDING = 0x8899;

export const GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING = 0x889a;

export const GL_EDGE_FLAG_ARRAY_BUFFER_BINDING = 0x889b;

export const GL_SECONDARY_COLOR_ARRAY_BUFFER_BINDING = 0x889c;

export const GL_FOG_COORDINATE_ARRAY_BUFFER_BINDING = 0x889d;

export const GL_WEIGHT_ARRAY_BUFFER_BINDING = 0x889e;

export const GL_FOG_COORD_SRC = 0x8450;

export const GL_FOG_COORD = 0x8451;

export const GL_CURRENT_FOG_COORD = 0x8453;

export const GL_FOG_COORD_ARRAY_TYPE = 0x8454;

export const GL_FOG_COORD_ARRAY_STRIDE = 0x8455;

export const GL_FOG_COORD_ARRAY_POINTER = 0x8456;

export const GL_FOG_COORD_ARRAY = 0x8457;

export const GL_FOG_COORD_ARRAY_BUFFER_BINDING = 0x889d;

export const GL_SRC0_RGB = 0x8580;

export const GL_SRC1_RGB = 0x8581;

export const GL_SRC2_RGB = 0x8582;

export const GL_SRC0_ALPHA = 0x8588;

export const GL_SRC2_ALPHA = 0x858a;

export const GL_BLEND_EQUATION_RGB = 0x8009;

export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;

export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;

export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;

export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;

export const GL_CURRENT_VERTEX_ATTRIB = 0x8626;

export const GL_VERTEX_PROGRAM_POINT_SIZE = 0x8642;

export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;

export const GL_STENCIL_BACK_FUNC = 0x8800;

export const GL_STENCIL_BACK_FAIL = 0x8801;

export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;

export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;

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

export const GL_BLEND_EQUATION_ALPHA = 0x883d;

export const GL_MAX_VERTEX_ATTRIBS = 0x8869;

export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;

export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;

export const GL_FRAGMENT_SHADER = 0x8b30;

export const GL_VERTEX_SHADER = 0x8b31;

export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49;

export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a;

export const GL_MAX_VARYING_FLOATS = 0x8b4b;

export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;

export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;

export const GL_SHADER_TYPE = 0x8b4f;

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

export const GL_SAMPLER_1D = 0x8b5d;

export const GL_SAMPLER_2D = 0x8b5e;

export const GL_SAMPLER_3D = 0x8b5f;

export const GL_SAMPLER_CUBE = 0x8b60;

export const GL_SAMPLER_1D_SHADOW = 0x8b61;

export const GL_SAMPLER_2D_SHADOW = 0x8b62;

export const GL_DELETE_STATUS = 0x8b80;

export const GL_COMPILE_STATUS = 0x8b81;

export const GL_LINK_STATUS = 0x8b82;

export const GL_VALIDATE_STATUS = 0x8b83;

export const GL_INFO_LOG_LENGTH = 0x8b84;

export const GL_ATTACHED_SHADERS = 0x8b85;

export const GL_ACTIVE_UNIFORMS = 0x8b86;

export const GL_ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87;

export const GL_SHADER_SOURCE_LENGTH = 0x8b88;

export const GL_ACTIVE_ATTRIBUTES = 0x8b89;

export const GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a;

export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;

export const GL_SHADING_LANGUAGE_VERSION = 0x8b8c;

export const GL_CURRENT_PROGRAM = 0x8b8d;

export const GL_POINT_SPRITE_COORD_ORIGIN = 0x8ca0;

export const GL_LOWER_LEFT = 0x8ca1;

export const GL_UPPER_LEFT = 0x8ca2;

export const GL_STENCIL_BACK_REF = 0x8ca3;

export const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4;

export const GL_STENCIL_BACK_WRITEMASK = 0x8ca5;

export const GL_VERTEX_PROGRAM_TWO_SIDE = 0x8643;

export const GL_POINT_SPRITE = 0x8861;

export const GL_COORD_REPLACE = 0x8862;

export const GL_MAX_TEXTURE_COORDS = 0x8871;

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

export const GL_SRGB_ALPHA = 0x8c42;

export const GL_SRGB8_ALPHA8 = 0x8c43;

export const GL_COMPRESSED_SRGB = 0x8c48;

export const GL_COMPRESSED_SRGB_ALPHA = 0x8c49;

export const GL_CURRENT_RASTER_SECONDARY_COLOR = 0x845f;

export const GL_SLUMINANCE_ALPHA = 0x8c44;

export const GL_SLUMINANCE8_ALPHA8 = 0x8c45;

export const GL_SLUMINANCE = 0x8c46;

export const GL_SLUMINANCE8 = 0x8c47;

export const GL_COMPRESSED_SLUMINANCE = 0x8c4a;

export const GL_COMPRESSED_SLUMINANCE_ALPHA = 0x8c4b;

export const GL_COMPARE_REF_TO_TEXTURE = 0x884e;

export const GL_CLIP_DISTANCE0 = 0x3000;

export const GL_CLIP_DISTANCE1 = 0x3001;

export const GL_CLIP_DISTANCE2 = 0x3002;

export const GL_CLIP_DISTANCE3 = 0x3003;

export const GL_CLIP_DISTANCE4 = 0x3004;

export const GL_CLIP_DISTANCE5 = 0x3005;

export const GL_CLIP_DISTANCE6 = 0x3006;

export const GL_CLIP_DISTANCE7 = 0x3007;

export const GL_MAX_CLIP_DISTANCES = 0xd32;

export const GL_MAJOR_VERSION = 0x821b;

export const GL_MINOR_VERSION = 0x821c;

export const GL_NUM_EXTENSIONS = 0x821d;

export const GL_CONTEXT_FLAGS = 0x821e;

export const GL_COMPRESSED_RED = 0x8225;

export const GL_COMPRESSED_RG = 0x8226;

export const GL_CONTEXT_FLAG_FORWARD_COMPATIBLE_BIT = 0x1;

export const GL_RGBA32F = 0x8814;

export const GL_RGB32F = 0x8815;

export const GL_RGBA16F = 0x881a;

export const GL_RGB16F = 0x881b;

export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd;

export const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff;

export const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904;

export const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905;

export const GL_CLAMP_READ_COLOR = 0x891c;

export const GL_FIXED_ONLY = 0x891d;

export const GL_MAX_VARYING_COMPONENTS = 0x8b4b;

export const GL_TEXTURE_1D_ARRAY = 0x8c18;

export const GL_PROXY_TEXTURE_1D_ARRAY = 0x8c19;

export const GL_TEXTURE_2D_ARRAY = 0x8c1a;

export const GL_PROXY_TEXTURE_2D_ARRAY = 0x8c1b;

export const GL_TEXTURE_BINDING_1D_ARRAY = 0x8c1c;

export const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d;

export const GL_R11F_G11F_B10F = 0x8c3a;

export const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;

export const GL_RGB9_E5 = 0x8c3d;

export const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;

export const GL_TEXTURE_SHARED_SIZE = 0x8c3f;

export const GL_TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76;

export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f;

export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80;

export const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;

export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84;

export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85;

export const GL_PRIMITIVES_GENERATED = 0x8c87;

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

export const GL_GREEN_INTEGER = 0x8d95;

export const GL_BLUE_INTEGER = 0x8d96;

export const GL_RGB_INTEGER = 0x8d98;

export const GL_RGBA_INTEGER = 0x8d99;

export const GL_BGR_INTEGER = 0x8d9a;

export const GL_BGRA_INTEGER = 0x8d9b;

export const GL_SAMPLER_1D_ARRAY = 0x8dc0;

export const GL_SAMPLER_2D_ARRAY = 0x8dc1;

export const GL_SAMPLER_1D_ARRAY_SHADOW = 0x8dc3;

export const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4;

export const GL_SAMPLER_CUBE_SHADOW = 0x8dc5;

export const GL_UNSIGNED_INT_VEC2 = 0x8dc6;

export const GL_UNSIGNED_INT_VEC3 = 0x8dc7;

export const GL_UNSIGNED_INT_VEC4 = 0x8dc8;

export const GL_INT_SAMPLER_1D = 0x8dc9;

export const GL_INT_SAMPLER_2D = 0x8dca;

export const GL_INT_SAMPLER_3D = 0x8dcb;

export const GL_INT_SAMPLER_CUBE = 0x8dcc;

export const GL_INT_SAMPLER_1D_ARRAY = 0x8dce;

export const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf;

export const GL_UNSIGNED_INT_SAMPLER_1D = 0x8dd1;

export const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2;

export const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3;

export const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4;

export const GL_UNSIGNED_INT_SAMPLER_1D_ARRAY = 0x8dd6;

export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7;

export const GL_QUERY_WAIT = 0x8e13;

export const GL_QUERY_NO_WAIT = 0x8e14;

export const GL_QUERY_BY_REGION_WAIT = 0x8e15;

export const GL_QUERY_BY_REGION_NO_WAIT = 0x8e16;

export const GL_BUFFER_ACCESS_FLAGS = 0x911f;

export const GL_BUFFER_MAP_LENGTH = 0x9120;

export const GL_BUFFER_MAP_OFFSET = 0x9121;

export const GL_DEPTH_COMPONENT32F = 0x8cac;

export const GL_DEPTH32F_STENCIL8 = 0x8cad;

export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;

export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x506;

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

export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8;

export const GL_DEPTH_STENCIL = 0x84f9;

export const GL_UNSIGNED_INT_24_8 = 0x84fa;

export const GL_DEPTH24_STENCIL8 = 0x88f0;

export const GL_TEXTURE_STENCIL_SIZE = 0x88f1;

export const GL_TEXTURE_RED_TYPE = 0x8c10;

export const GL_TEXTURE_GREEN_TYPE = 0x8c11;

export const GL_TEXTURE_BLUE_TYPE = 0x8c12;

export const GL_TEXTURE_ALPHA_TYPE = 0x8c13;

export const GL_TEXTURE_DEPTH_TYPE = 0x8c16;

export const GL_UNSIGNED_NORMALIZED = 0x8c17;

export const GL_FRAMEBUFFER_BINDING = 0x8ca6;

export const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6;

export const GL_RENDERBUFFER_BINDING = 0x8ca7;

export const GL_READ_FRAMEBUFFER = 0x8ca8;

export const GL_DRAW_FRAMEBUFFER = 0x8ca9;

export const GL_READ_FRAMEBUFFER_BINDING = 0x8caa;

export const GL_RENDERBUFFER_SAMPLES = 0x8cab;

export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;

export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;

export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;

export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5;

export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;

export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;

export const GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER = 0x8cdb;

export const GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER = 0x8cdc;

export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd;

export const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf;

export const GL_COLOR_ATTACHMENT0 = 0x8ce0;

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

export const GL_DEPTH_ATTACHMENT = 0x8d00;

export const GL_STENCIL_ATTACHMENT = 0x8d20;

export const GL_FRAMEBUFFER = 0x8d40;

export const GL_RENDERBUFFER = 0x8d41;

export const GL_RENDERBUFFER_WIDTH = 0x8d42;

export const GL_RENDERBUFFER_HEIGHT = 0x8d43;

export const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;

export const GL_STENCIL_INDEX1 = 0x8d46;

export const GL_STENCIL_INDEX4 = 0x8d47;

export const GL_STENCIL_INDEX8 = 0x8d48;

export const GL_STENCIL_INDEX16 = 0x8d49;

export const GL_RENDERBUFFER_RED_SIZE = 0x8d50;

export const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51;

export const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52;

export const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53;

export const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54;

export const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55;

export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;

export const GL_MAX_SAMPLES = 0x8d57;

export const GL_INDEX = 0x8222;

export const GL_TEXTURE_LUMINANCE_TYPE = 0x8c14;

export const GL_TEXTURE_INTENSITY_TYPE = 0x8c15;

export const GL_FRAMEBUFFER_SRGB = 0x8db9;

export const GL_HALF_FLOAT = 0x140b;

export const GL_MAP_READ_BIT = 0x1;

export const GL_MAP_WRITE_BIT = 0x2;

export const GL_MAP_INVALIDATE_RANGE_BIT = 0x4;

export const GL_MAP_INVALIDATE_BUFFER_BIT = 0x8;

export const GL_MAP_FLUSH_EXPLICIT_BIT = 0x10;

export const GL_MAP_UNSYNCHRONIZED_BIT = 0x20;

export const GL_COMPRESSED_RED_RGTC1 = 0x8dbb;

export const GL_COMPRESSED_SIGNED_RED_RGTC1 = 0x8dbc;

export const GL_COMPRESSED_RG_RGTC2 = 0x8dbd;

export const GL_COMPRESSED_SIGNED_RG_RGTC2 = 0x8dbe;

export const GL_RG = 0x8227;

export const GL_RG_INTEGER = 0x8228;

export const GL_R8 = 0x8229;

export const GL_R16 = 0x822a;

export const GL_RG8 = 0x822b;

export const GL_RG16 = 0x822c;

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

export const GL_CLAMP_VERTEX_COLOR = 0x891a;

export const GL_CLAMP_FRAGMENT_COLOR = 0x891b;

export const GL_ALPHA_INTEGER = 0x8d97;

/// Commands
