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
export const QUADS = 0x7;
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
export const STACK_OVERFLOW = 0x503;
export const STACK_UNDERFLOW = 0x504;
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
export const CURRENT_BIT = 0x1;
export const POINT_BIT = 0x2;
export const LINE_BIT = 0x4;
export const POLYGON_BIT = 0x8;
export const POLYGON_STIPPLE_BIT = 0x10;
export const PIXEL_MODE_BIT = 0x20;
export const LIGHTING_BIT = 0x40;
export const FOG_BIT = 0x80;
export const ACCUM_BUFFER_BIT = 0x200;
export const VIEWPORT_BIT = 0x800;
export const TRANSFORM_BIT = 0x1000;
export const ENABLE_BIT = 0x2000;
export const HINT_BIT = 0x8000;
export const EVAL_BIT = 0x10000;
export const LIST_BIT = 0x20000;
export const TEXTURE_BIT = 0x40000;
export const SCISSOR_BIT = 0x80000;
export const ALL_ATTRIB_BITS = 0xffffffff;
export const QUAD_STRIP = 0x8;
export const POLYGON = 0x9;
export const ACCUM = 0x100;
export const LOAD = 0x101;
export const RETURN = 0x102;
export const MULT = 0x103;
export const ADD = 0x104;
export const AUX0 = 0x409;
export const AUX1 = 0x40a;
export const AUX2 = 0x40b;
export const AUX3 = 0x40c;
export const GL_2D = 0x600;
export const GL_3D = 0x601;
export const GL_3D_COLOR = 0x602;
export const GL_3D_COLOR_TEXTURE = 0x603;
export const GL_4D_COLOR_TEXTURE = 0x604;
export const PASS_THROUGH_TOKEN = 0x700;
export const POINT_TOKEN = 0x701;
export const LINE_TOKEN = 0x702;
export const POLYGON_TOKEN = 0x703;
export const BITMAP_TOKEN = 0x704;
export const DRAW_PIXEL_TOKEN = 0x705;
export const COPY_PIXEL_TOKEN = 0x706;
export const LINE_RESET_TOKEN = 0x707;
export const EXP = 0x800;
export const EXP2 = 0x801;
export const COEFF = 0xa00;
export const ORDER = 0xa01;
export const DOMAIN = 0xa02;
export const PIXEL_MAP_I_TO_I = 0xc70;
export const PIXEL_MAP_S_TO_S = 0xc71;
export const PIXEL_MAP_I_TO_R = 0xc72;
export const PIXEL_MAP_I_TO_G = 0xc73;
export const PIXEL_MAP_I_TO_B = 0xc74;
export const PIXEL_MAP_I_TO_A = 0xc75;
export const PIXEL_MAP_R_TO_R = 0xc76;
export const PIXEL_MAP_G_TO_G = 0xc77;
export const PIXEL_MAP_B_TO_B = 0xc78;
export const PIXEL_MAP_A_TO_A = 0xc79;
export const CURRENT_COLOR = 0xb00;
export const CURRENT_INDEX = 0xb01;
export const CURRENT_NORMAL = 0xb02;
export const CURRENT_TEXTURE_COORDS = 0xb03;
export const CURRENT_RASTER_COLOR = 0xb04;
export const CURRENT_RASTER_INDEX = 0xb05;
export const CURRENT_RASTER_TEXTURE_COORDS = 0xb06;
export const CURRENT_RASTER_POSITION = 0xb07;
export const CURRENT_RASTER_POSITION_VALID = 0xb08;
export const CURRENT_RASTER_DISTANCE = 0xb09;
export const POINT_SMOOTH = 0xb10;
export const LINE_STIPPLE = 0xb24;
export const LINE_STIPPLE_PATTERN = 0xb25;
export const LINE_STIPPLE_REPEAT = 0xb26;
export const LIST_MODE = 0xb30;
export const MAX_LIST_NESTING = 0xb31;
export const LIST_BASE = 0xb32;
export const LIST_INDEX = 0xb33;
export const POLYGON_STIPPLE = 0xb42;
export const EDGE_FLAG = 0xb43;
export const LIGHTING = 0xb50;
export const LIGHT_MODEL_LOCAL_VIEWER = 0xb51;
export const LIGHT_MODEL_TWO_SIDE = 0xb52;
export const LIGHT_MODEL_AMBIENT = 0xb53;
export const SHADE_MODEL = 0xb54;
export const COLOR_MATERIAL_FACE = 0xb55;
export const COLOR_MATERIAL_PARAMETER = 0xb56;
export const COLOR_MATERIAL = 0xb57;
export const FOG = 0xb60;
export const FOG_INDEX = 0xb61;
export const FOG_DENSITY = 0xb62;
export const FOG_START = 0xb63;
export const FOG_END = 0xb64;
export const FOG_MODE = 0xb65;
export const FOG_COLOR = 0xb66;
export const ACCUM_CLEAR_VALUE = 0xb80;
export const MATRIX_MODE = 0xba0;
export const NORMALIZE = 0xba1;
export const MODELVIEW_STACK_DEPTH = 0xba3;
export const PROJECTION_STACK_DEPTH = 0xba4;
export const TEXTURE_STACK_DEPTH = 0xba5;
export const MODELVIEW_MATRIX = 0xba6;
export const PROJECTION_MATRIX = 0xba7;
export const TEXTURE_MATRIX = 0xba8;
export const ATTRIB_STACK_DEPTH = 0xbb0;
export const ALPHA_TEST = 0xbc0;
export const ALPHA_TEST_FUNC = 0xbc1;
export const ALPHA_TEST_REF = 0xbc2;
export const LOGIC_OP = 0xbf1;
export const AUX_BUFFERS = 0xc00;
export const INDEX_CLEAR_VALUE = 0xc20;
export const INDEX_WRITEMASK = 0xc21;
export const INDEX_MODE = 0xc30;
export const RGBA_MODE = 0xc31;
export const RENDER_MODE = 0xc40;
export const PERSPECTIVE_CORRECTION_HINT = 0xc50;
export const POINT_SMOOTH_HINT = 0xc51;
export const FOG_HINT = 0xc54;
export const TEXTURE_GEN_S = 0xc60;
export const TEXTURE_GEN_T = 0xc61;
export const TEXTURE_GEN_R = 0xc62;
export const TEXTURE_GEN_Q = 0xc63;
export const PIXEL_MAP_I_TO_I_SIZE = 0xcb0;
export const PIXEL_MAP_S_TO_S_SIZE = 0xcb1;
export const PIXEL_MAP_I_TO_R_SIZE = 0xcb2;
export const PIXEL_MAP_I_TO_G_SIZE = 0xcb3;
export const PIXEL_MAP_I_TO_B_SIZE = 0xcb4;
export const PIXEL_MAP_I_TO_A_SIZE = 0xcb5;
export const PIXEL_MAP_R_TO_R_SIZE = 0xcb6;
export const PIXEL_MAP_G_TO_G_SIZE = 0xcb7;
export const PIXEL_MAP_B_TO_B_SIZE = 0xcb8;
export const PIXEL_MAP_A_TO_A_SIZE = 0xcb9;
export const MAP_COLOR = 0xd10;
export const MAP_STENCIL = 0xd11;
export const INDEX_SHIFT = 0xd12;
export const INDEX_OFFSET = 0xd13;
export const RED_SCALE = 0xd14;
export const RED_BIAS = 0xd15;
export const ZOOM_X = 0xd16;
export const ZOOM_Y = 0xd17;
export const GREEN_SCALE = 0xd18;
export const GREEN_BIAS = 0xd19;
export const BLUE_SCALE = 0xd1a;
export const BLUE_BIAS = 0xd1b;
export const ALPHA_SCALE = 0xd1c;
export const ALPHA_BIAS = 0xd1d;
export const DEPTH_SCALE = 0xd1e;
export const DEPTH_BIAS = 0xd1f;
export const MAX_EVAL_ORDER = 0xd30;
export const MAX_LIGHTS = 0xd31;
export const MAX_CLIP_PLANES = 0xd32;
export const MAX_PIXEL_MAP_TABLE = 0xd34;
export const MAX_ATTRIB_STACK_DEPTH = 0xd35;
export const MAX_MODELVIEW_STACK_DEPTH = 0xd36;
export const MAX_NAME_STACK_DEPTH = 0xd37;
export const MAX_PROJECTION_STACK_DEPTH = 0xd38;
export const MAX_TEXTURE_STACK_DEPTH = 0xd39;
export const INDEX_BITS = 0xd51;
export const RED_BITS = 0xd52;
export const GREEN_BITS = 0xd53;
export const BLUE_BITS = 0xd54;
export const ALPHA_BITS = 0xd55;
export const DEPTH_BITS = 0xd56;
export const STENCIL_BITS = 0xd57;
export const ACCUM_RED_BITS = 0xd58;
export const ACCUM_GREEN_BITS = 0xd59;
export const ACCUM_BLUE_BITS = 0xd5a;
export const ACCUM_ALPHA_BITS = 0xd5b;
export const NAME_STACK_DEPTH = 0xd70;
export const AUTO_NORMAL = 0xd80;
export const MAP1_COLOR_4 = 0xd90;
export const MAP1_INDEX = 0xd91;
export const MAP1_NORMAL = 0xd92;
export const MAP1_TEXTURE_COORD_1 = 0xd93;
export const MAP1_TEXTURE_COORD_2 = 0xd94;
export const MAP1_TEXTURE_COORD_3 = 0xd95;
export const MAP1_TEXTURE_COORD_4 = 0xd96;
export const MAP1_VERTEX_3 = 0xd97;
export const MAP1_VERTEX_4 = 0xd98;
export const MAP2_COLOR_4 = 0xdb0;
export const MAP2_INDEX = 0xdb1;
export const MAP2_NORMAL = 0xdb2;
export const MAP2_TEXTURE_COORD_1 = 0xdb3;
export const MAP2_TEXTURE_COORD_2 = 0xdb4;
export const MAP2_TEXTURE_COORD_3 = 0xdb5;
export const MAP2_TEXTURE_COORD_4 = 0xdb6;
export const MAP2_VERTEX_3 = 0xdb7;
export const MAP2_VERTEX_4 = 0xdb8;
export const MAP1_GRID_DOMAIN = 0xdd0;
export const MAP1_GRID_SEGMENTS = 0xdd1;
export const MAP2_GRID_DOMAIN = 0xdd2;
export const MAP2_GRID_SEGMENTS = 0xdd3;
export const TEXTURE_COMPONENTS = 0x1003;
export const TEXTURE_BORDER = 0x1005;
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
export const COMPILE = 0x1300;
export const COMPILE_AND_EXECUTE = 0x1301;
export const GL_2_BYTES = 0x1407;
export const GL_3_BYTES = 0x1408;
export const GL_4_BYTES = 0x1409;
export const EMISSION = 0x1600;
export const SHININESS = 0x1601;
export const AMBIENT_AND_DIFFUSE = 0x1602;
export const COLOR_INDEXES = 0x1603;
export const MODELVIEW = 0x1700;
export const PROJECTION = 0x1701;
export const COLOR_INDEX = 0x1900;
export const LUMINANCE = 0x1909;
export const LUMINANCE_ALPHA = 0x190a;
export const BITMAP = 0x1a00;
export const RENDER = 0x1c00;
export const FEEDBACK = 0x1c01;
export const SELECT = 0x1c02;
export const FLAT = 0x1d00;
export const SMOOTH = 0x1d01;
export const S = 0x2000;
export const T = 0x2001;
export const R = 0x2002;
export const Q = 0x2003;
export const MODULATE = 0x2100;
export const DECAL = 0x2101;
export const TEXTURE_ENV_MODE = 0x2200;
export const TEXTURE_ENV_COLOR = 0x2201;
export const TEXTURE_ENV = 0x2300;
export const EYE_LINEAR = 0x2400;
export const OBJECT_LINEAR = 0x2401;
export const SPHERE_MAP = 0x2402;
export const TEXTURE_GEN_MODE = 0x2500;
export const OBJECT_PLANE = 0x2501;
export const EYE_PLANE = 0x2502;
export const CLAMP = 0x2900;
export const CLIP_PLANE0 = 0x3000;
export const CLIP_PLANE1 = 0x3001;
export const CLIP_PLANE2 = 0x3002;
export const CLIP_PLANE3 = 0x3003;
export const CLIP_PLANE4 = 0x3004;
export const CLIP_PLANE5 = 0x3005;
export const LIGHT0 = 0x4000;
export const LIGHT1 = 0x4001;
export const LIGHT2 = 0x4002;
export const LIGHT3 = 0x4003;
export const LIGHT4 = 0x4004;
export const LIGHT5 = 0x4005;
export const LIGHT6 = 0x4006;
export const LIGHT7 = 0x4007;
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
export const CLIENT_PIXEL_STORE_BIT = 0x1;
export const CLIENT_VERTEX_ARRAY_BIT = 0x2;
export const CLIENT_ALL_ATTRIB_BITS = 0xffffffff;
export const VERTEX_ARRAY_POINTER = 0x808e;
export const NORMAL_ARRAY_POINTER = 0x808f;
export const COLOR_ARRAY_POINTER = 0x8090;
export const INDEX_ARRAY_POINTER = 0x8091;
export const TEXTURE_COORD_ARRAY_POINTER = 0x8092;
export const EDGE_FLAG_ARRAY_POINTER = 0x8093;
export const FEEDBACK_BUFFER_POINTER = 0xdf0;
export const SELECTION_BUFFER_POINTER = 0xdf3;
export const CLIENT_ATTRIB_STACK_DEPTH = 0xbb1;
export const INDEX_LOGIC_OP = 0xbf1;
export const MAX_CLIENT_ATTRIB_STACK_DEPTH = 0xd3b;
export const FEEDBACK_BUFFER_SIZE = 0xdf1;
export const FEEDBACK_BUFFER_TYPE = 0xdf2;
export const SELECTION_BUFFER_SIZE = 0xdf4;
export const VERTEX_ARRAY = 0x8074;
export const NORMAL_ARRAY = 0x8075;
export const COLOR_ARRAY = 0x8076;
export const INDEX_ARRAY = 0x8077;
export const TEXTURE_COORD_ARRAY = 0x8078;
export const EDGE_FLAG_ARRAY = 0x8079;
export const VERTEX_ARRAY_SIZE = 0x807a;
export const VERTEX_ARRAY_TYPE = 0x807b;
export const VERTEX_ARRAY_STRIDE = 0x807c;
export const NORMAL_ARRAY_TYPE = 0x807e;
export const NORMAL_ARRAY_STRIDE = 0x807f;
export const COLOR_ARRAY_SIZE = 0x8081;
export const COLOR_ARRAY_TYPE = 0x8082;
export const COLOR_ARRAY_STRIDE = 0x8083;
export const INDEX_ARRAY_TYPE = 0x8085;
export const INDEX_ARRAY_STRIDE = 0x8086;
export const TEXTURE_COORD_ARRAY_SIZE = 0x8088;
export const TEXTURE_COORD_ARRAY_TYPE = 0x8089;
export const TEXTURE_COORD_ARRAY_STRIDE = 0x808a;
export const EDGE_FLAG_ARRAY_STRIDE = 0x808c;
export const TEXTURE_LUMINANCE_SIZE = 0x8060;
export const TEXTURE_INTENSITY_SIZE = 0x8061;
export const TEXTURE_PRIORITY = 0x8066;
export const TEXTURE_RESIDENT = 0x8067;
export const ALPHA4 = 0x803b;
export const ALPHA8 = 0x803c;
export const ALPHA12 = 0x803d;
export const ALPHA16 = 0x803e;
export const LUMINANCE4 = 0x803f;
export const LUMINANCE8 = 0x8040;
export const LUMINANCE12 = 0x8041;
export const LUMINANCE16 = 0x8042;
export const LUMINANCE4_ALPHA4 = 0x8043;
export const LUMINANCE6_ALPHA2 = 0x8044;
export const LUMINANCE8_ALPHA8 = 0x8045;
export const LUMINANCE12_ALPHA4 = 0x8046;
export const LUMINANCE12_ALPHA12 = 0x8047;
export const LUMINANCE16_ALPHA16 = 0x8048;
export const INTENSITY = 0x8049;
export const INTENSITY4 = 0x804a;
export const INTENSITY8 = 0x804b;
export const INTENSITY12 = 0x804c;
export const INTENSITY16 = 0x804d;
export const V2F = 0x2a20;
export const V3F = 0x2a21;
export const C4UB_V2F = 0x2a22;
export const C4UB_V3F = 0x2a23;
export const C3F_V3F = 0x2a24;
export const N3F_V3F = 0x2a25;
export const C4F_N3F_V3F = 0x2a26;
export const T2F_V3F = 0x2a27;
export const T4F_V4F = 0x2a28;
export const T2F_C4UB_V3F = 0x2a29;
export const T2F_C3F_V3F = 0x2a2a;
export const T2F_N3F_V3F = 0x2a2b;
export const T2F_C4F_N3F_V3F = 0x2a2c;
export const T4F_C4F_N3F_V4F = 0x2a2d;
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
export const RESCALE_NORMAL = 0x803a;
export const LIGHT_MODEL_COLOR_CONTROL = 0x81f8;
export const SINGLE_COLOR = 0x81f9;
export const SEPARATE_SPECULAR_COLOR = 0x81fa;
export const ALIASED_POINT_SIZE_RANGE = 0x846d;
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
export const CLIENT_ACTIVE_TEXTURE = 0x84e1;
export const MAX_TEXTURE_UNITS = 0x84e2;
export const TRANSPOSE_MODELVIEW_MATRIX = 0x84e3;
export const TRANSPOSE_PROJECTION_MATRIX = 0x84e4;
export const TRANSPOSE_TEXTURE_MATRIX = 0x84e5;
export const TRANSPOSE_COLOR_MATRIX = 0x84e6;
export const MULTISAMPLE_BIT = 0x20000000;
export const NORMAL_MAP = 0x8511;
export const REFLECTION_MAP = 0x8512;
export const COMPRESSED_ALPHA = 0x84e9;
export const COMPRESSED_LUMINANCE = 0x84ea;
export const COMPRESSED_LUMINANCE_ALPHA = 0x84eb;
export const COMPRESSED_INTENSITY = 0x84ec;
export const COMBINE = 0x8570;
export const COMBINE_RGB = 0x8571;
export const COMBINE_ALPHA = 0x8572;
export const SOURCE0_RGB = 0x8580;
export const SOURCE1_RGB = 0x8581;
export const SOURCE2_RGB = 0x8582;
export const SOURCE0_ALPHA = 0x8588;
export const SOURCE1_ALPHA = 0x8589;
export const SOURCE2_ALPHA = 0x858a;
export const OPERAND0_RGB = 0x8590;
export const OPERAND1_RGB = 0x8591;
export const OPERAND2_RGB = 0x8592;
export const OPERAND0_ALPHA = 0x8598;
export const OPERAND1_ALPHA = 0x8599;
export const OPERAND2_ALPHA = 0x859a;
export const RGB_SCALE = 0x8573;
export const ADD_SIGNED = 0x8574;
export const INTERPOLATE = 0x8575;
export const SUBTRACT = 0x84e7;
export const CONSTANT = 0x8576;
export const PRIMARY_COLOR = 0x8577;
export const PREVIOUS = 0x8578;
export const DOT3_RGB = 0x86ae;
export const DOT3_RGBA = 0x86af;
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
export const POINT_SIZE_MIN = 0x8126;
export const POINT_SIZE_MAX = 0x8127;
export const POINT_DISTANCE_ATTENUATION = 0x8129;
export const GENERATE_MIPMAP = 0x8191;
export const GENERATE_MIPMAP_HINT = 0x8192;
export const FOG_COORDINATE_SOURCE = 0x8450;
export const FOG_COORDINATE = 0x8451;
export const FRAGMENT_DEPTH = 0x8452;
export const CURRENT_FOG_COORDINATE = 0x8453;
export const FOG_COORDINATE_ARRAY_TYPE = 0x8454;
export const FOG_COORDINATE_ARRAY_STRIDE = 0x8455;
export const FOG_COORDINATE_ARRAY_POINTER = 0x8456;
export const FOG_COORDINATE_ARRAY = 0x8457;
export const COLOR_SUM = 0x8458;
export const CURRENT_SECONDARY_COLOR = 0x8459;
export const SECONDARY_COLOR_ARRAY_SIZE = 0x845a;
export const SECONDARY_COLOR_ARRAY_TYPE = 0x845b;
export const SECONDARY_COLOR_ARRAY_STRIDE = 0x845c;
export const SECONDARY_COLOR_ARRAY_POINTER = 0x845d;
export const SECONDARY_COLOR_ARRAY = 0x845e;
export const TEXTURE_FILTER_CONTROL = 0x8500;
export const DEPTH_TEXTURE_MODE = 0x884b;
export const COMPARE_R_TO_TEXTURE = 0x884e;
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
export const VERTEX_ARRAY_BUFFER_BINDING = 0x8896;
export const NORMAL_ARRAY_BUFFER_BINDING = 0x8897;
export const COLOR_ARRAY_BUFFER_BINDING = 0x8898;
export const INDEX_ARRAY_BUFFER_BINDING = 0x8899;
export const TEXTURE_COORD_ARRAY_BUFFER_BINDING = 0x889a;
export const EDGE_FLAG_ARRAY_BUFFER_BINDING = 0x889b;
export const SECONDARY_COLOR_ARRAY_BUFFER_BINDING = 0x889c;
export const FOG_COORDINATE_ARRAY_BUFFER_BINDING = 0x889d;
export const WEIGHT_ARRAY_BUFFER_BINDING = 0x889e;
export const FOG_COORD_SRC = 0x8450;
export const FOG_COORD = 0x8451;
export const CURRENT_FOG_COORD = 0x8453;
export const FOG_COORD_ARRAY_TYPE = 0x8454;
export const FOG_COORD_ARRAY_STRIDE = 0x8455;
export const FOG_COORD_ARRAY_POINTER = 0x8456;
export const FOG_COORD_ARRAY = 0x8457;
export const FOG_COORD_ARRAY_BUFFER_BINDING = 0x889d;
export const SRC0_RGB = 0x8580;
export const SRC1_RGB = 0x8581;
export const SRC2_RGB = 0x8582;
export const SRC0_ALPHA = 0x8588;
export const SRC2_ALPHA = 0x858a;
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
export const VERTEX_PROGRAM_TWO_SIDE = 0x8643;
export const POINT_SPRITE = 0x8861;
export const COORD_REPLACE = 0x8862;
export const MAX_TEXTURE_COORDS = 0x8871;

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

export const def_glNewList = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNewList!: Deno.UnsafeFnPointer<typeof def_glNewList>;

export function NewList(
  list: GLuint,
  mode: GLenum,
): void {
  fn_glNewList.call(
    list,
    mode,
  );
}

export const def_glEndList = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndList!: Deno.UnsafeFnPointer<typeof def_glEndList>;

export function EndList(): void {
  fn_glEndList.call();
}

export const def_glCallList = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCallList!: Deno.UnsafeFnPointer<typeof def_glCallList>;

export function CallList(
  list: GLuint,
): void {
  fn_glCallList.call(
    list,
  );
}

export const def_glCallLists = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glCallLists!: Deno.UnsafeFnPointer<typeof def_glCallLists>;

export function CallLists(
  n: GLsizei,
  type: GLenum,
  lists: Buffer,
): void {
  fn_glCallLists.call(
    n,
    type,
    bufferToFFI(lists),
  );
}

export const def_glDeleteLists = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glDeleteLists!: Deno.UnsafeFnPointer<typeof def_glDeleteLists>;

export function DeleteLists(
  list: GLuint,
  range: GLsizei,
): void {
  fn_glDeleteLists.call(
    list,
    range,
  );
}

export const def_glGenLists = {
  parameters: ["i32"],
  result: "u32",
} as const;

let fn_glGenLists!: Deno.UnsafeFnPointer<typeof def_glGenLists>;

export function GenLists(
  range: GLsizei,
): GLuint {
  return fn_glGenLists.call(
    range,
  );
}

export const def_glListBase = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glListBase!: Deno.UnsafeFnPointer<typeof def_glListBase>;

export function ListBase(
  base: GLuint,
): void {
  fn_glListBase.call(
    base,
  );
}

export const def_glBegin = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBegin!: Deno.UnsafeFnPointer<typeof def_glBegin>;

export function Begin(
  mode: GLenum,
): void {
  fn_glBegin.call(
    mode,
  );
}

export const def_glBitmap = {
  parameters: ["i32", "i32", "f32", "f32", "f32", "f32", "buffer"],
  result: "void",
} as const;

let fn_glBitmap!: Deno.UnsafeFnPointer<typeof def_glBitmap>;

export function Bitmap(
  width: GLsizei,
  height: GLsizei,
  xorig: GLfloat,
  yorig: GLfloat,
  xmove: GLfloat,
  ymove: GLfloat,
  bitmap: Buffer,
): void {
  fn_glBitmap.call(
    width,
    height,
    xorig,
    yorig,
    xmove,
    ymove,
    bufferToFFI(bitmap),
  );
}

export const def_glColor3b = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glColor3b!: Deno.UnsafeFnPointer<typeof def_glColor3b>;

export function Color3b(
  red: GLbyte,
  green: GLbyte,
  blue: GLbyte,
): void {
  fn_glColor3b.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3bv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3bv!: Deno.UnsafeFnPointer<typeof def_glColor3bv>;

export function Color3bv(
  v: Buffer,
): void {
  fn_glColor3bv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glColor3d!: Deno.UnsafeFnPointer<typeof def_glColor3d>;

export function Color3d(
  red: GLdouble,
  green: GLdouble,
  blue: GLdouble,
): void {
  fn_glColor3d.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3dv!: Deno.UnsafeFnPointer<typeof def_glColor3dv>;

export function Color3dv(
  v: Buffer,
): void {
  fn_glColor3dv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor3f!: Deno.UnsafeFnPointer<typeof def_glColor3f>;

export function Color3f(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
): void {
  fn_glColor3f.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3fv!: Deno.UnsafeFnPointer<typeof def_glColor3fv>;

export function Color3fv(
  v: Buffer,
): void {
  fn_glColor3fv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glColor3i!: Deno.UnsafeFnPointer<typeof def_glColor3i>;

export function Color3i(
  red: GLint,
  green: GLint,
  blue: GLint,
): void {
  fn_glColor3i.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3iv!: Deno.UnsafeFnPointer<typeof def_glColor3iv>;

export function Color3iv(
  v: Buffer,
): void {
  fn_glColor3iv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glColor3s!: Deno.UnsafeFnPointer<typeof def_glColor3s>;

export function Color3s(
  red: GLshort,
  green: GLshort,
  blue: GLshort,
): void {
  fn_glColor3s.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3sv!: Deno.UnsafeFnPointer<typeof def_glColor3sv>;

export function Color3sv(
  v: Buffer,
): void {
  fn_glColor3sv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3ub = {
  parameters: ["u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColor3ub!: Deno.UnsafeFnPointer<typeof def_glColor3ub>;

export function Color3ub(
  red: GLubyte,
  green: GLubyte,
  blue: GLubyte,
): void {
  fn_glColor3ub.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3ubv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3ubv!: Deno.UnsafeFnPointer<typeof def_glColor3ubv>;

export function Color3ubv(
  v: Buffer,
): void {
  fn_glColor3ubv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glColor3ui!: Deno.UnsafeFnPointer<typeof def_glColor3ui>;

export function Color3ui(
  red: GLuint,
  green: GLuint,
  blue: GLuint,
): void {
  fn_glColor3ui.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3uiv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3uiv!: Deno.UnsafeFnPointer<typeof def_glColor3uiv>;

export function Color3uiv(
  v: Buffer,
): void {
  fn_glColor3uiv.call(
    bufferToFFI(v),
  );
}

export const def_glColor3us = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glColor3us!: Deno.UnsafeFnPointer<typeof def_glColor3us>;

export function Color3us(
  red: GLushort,
  green: GLushort,
  blue: GLushort,
): void {
  fn_glColor3us.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3usv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3usv!: Deno.UnsafeFnPointer<typeof def_glColor3usv>;

export function Color3usv(
  v: Buffer,
): void {
  fn_glColor3usv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4b = {
  parameters: ["i8", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glColor4b!: Deno.UnsafeFnPointer<typeof def_glColor4b>;

export function Color4b(
  red: GLbyte,
  green: GLbyte,
  blue: GLbyte,
  alpha: GLbyte,
): void {
  fn_glColor4b.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4bv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4bv!: Deno.UnsafeFnPointer<typeof def_glColor4bv>;

export function Color4bv(
  v: Buffer,
): void {
  fn_glColor4bv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4d = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glColor4d!: Deno.UnsafeFnPointer<typeof def_glColor4d>;

export function Color4d(
  red: GLdouble,
  green: GLdouble,
  blue: GLdouble,
  alpha: GLdouble,
): void {
  fn_glColor4d.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4dv!: Deno.UnsafeFnPointer<typeof def_glColor4dv>;

export function Color4dv(
  v: Buffer,
): void {
  fn_glColor4dv.call(
    bufferToFFI(v),
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

export const def_glColor4fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4fv!: Deno.UnsafeFnPointer<typeof def_glColor4fv>;

export function Color4fv(
  v: Buffer,
): void {
  fn_glColor4fv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4i = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glColor4i!: Deno.UnsafeFnPointer<typeof def_glColor4i>;

export function Color4i(
  red: GLint,
  green: GLint,
  blue: GLint,
  alpha: GLint,
): void {
  fn_glColor4i.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4iv!: Deno.UnsafeFnPointer<typeof def_glColor4iv>;

export function Color4iv(
  v: Buffer,
): void {
  fn_glColor4iv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4s = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glColor4s!: Deno.UnsafeFnPointer<typeof def_glColor4s>;

export function Color4s(
  red: GLshort,
  green: GLshort,
  blue: GLshort,
  alpha: GLshort,
): void {
  fn_glColor4s.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4sv!: Deno.UnsafeFnPointer<typeof def_glColor4sv>;

export function Color4sv(
  v: Buffer,
): void {
  fn_glColor4sv.call(
    bufferToFFI(v),
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

export const def_glColor4ubv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4ubv!: Deno.UnsafeFnPointer<typeof def_glColor4ubv>;

export function Color4ubv(
  v: Buffer,
): void {
  fn_glColor4ubv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4ui = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glColor4ui!: Deno.UnsafeFnPointer<typeof def_glColor4ui>;

export function Color4ui(
  red: GLuint,
  green: GLuint,
  blue: GLuint,
  alpha: GLuint,
): void {
  fn_glColor4ui.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4uiv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4uiv!: Deno.UnsafeFnPointer<typeof def_glColor4uiv>;

export function Color4uiv(
  v: Buffer,
): void {
  fn_glColor4uiv.call(
    bufferToFFI(v),
  );
}

export const def_glColor4us = {
  parameters: ["u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glColor4us!: Deno.UnsafeFnPointer<typeof def_glColor4us>;

export function Color4us(
  red: GLushort,
  green: GLushort,
  blue: GLushort,
  alpha: GLushort,
): void {
  fn_glColor4us.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4usv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4usv!: Deno.UnsafeFnPointer<typeof def_glColor4usv>;

export function Color4usv(
  v: Buffer,
): void {
  fn_glColor4usv.call(
    bufferToFFI(v),
  );
}

export const def_glEdgeFlag = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glEdgeFlag!: Deno.UnsafeFnPointer<typeof def_glEdgeFlag>;

export function EdgeFlag(
  flag: GLboolean,
): void {
  fn_glEdgeFlag.call(
    flag,
  );
}

export const def_glEdgeFlagv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEdgeFlagv!: Deno.UnsafeFnPointer<typeof def_glEdgeFlagv>;

export function EdgeFlagv(
  flag: Buffer,
): void {
  fn_glEdgeFlagv.call(
    bufferToFFI(flag),
  );
}

export const def_glEnd = {
  parameters: [],
  result: "void",
} as const;

let fn_glEnd!: Deno.UnsafeFnPointer<typeof def_glEnd>;

export function End(): void {
  fn_glEnd.call();
}

export const def_glIndexd = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glIndexd!: Deno.UnsafeFnPointer<typeof def_glIndexd>;

export function Indexd(
  c: GLdouble,
): void {
  fn_glIndexd.call(
    c,
  );
}

export const def_glIndexdv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexdv!: Deno.UnsafeFnPointer<typeof def_glIndexdv>;

export function Indexdv(
  c: Buffer,
): void {
  fn_glIndexdv.call(
    bufferToFFI(c),
  );
}

export const def_glIndexf = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glIndexf!: Deno.UnsafeFnPointer<typeof def_glIndexf>;

export function Indexf(
  c: GLfloat,
): void {
  fn_glIndexf.call(
    c,
  );
}

export const def_glIndexfv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexfv!: Deno.UnsafeFnPointer<typeof def_glIndexfv>;

export function Indexfv(
  c: Buffer,
): void {
  fn_glIndexfv.call(
    bufferToFFI(c),
  );
}

export const def_glIndexi = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glIndexi!: Deno.UnsafeFnPointer<typeof def_glIndexi>;

export function Indexi(
  c: GLint,
): void {
  fn_glIndexi.call(
    c,
  );
}

export const def_glIndexiv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexiv!: Deno.UnsafeFnPointer<typeof def_glIndexiv>;

export function Indexiv(
  c: Buffer,
): void {
  fn_glIndexiv.call(
    bufferToFFI(c),
  );
}

export const def_glIndexs = {
  parameters: ["i16"],
  result: "void",
} as const;

let fn_glIndexs!: Deno.UnsafeFnPointer<typeof def_glIndexs>;

export function Indexs(
  c: GLshort,
): void {
  fn_glIndexs.call(
    c,
  );
}

export const def_glIndexsv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexsv!: Deno.UnsafeFnPointer<typeof def_glIndexsv>;

export function Indexsv(
  c: Buffer,
): void {
  fn_glIndexsv.call(
    bufferToFFI(c),
  );
}

export const def_glNormal3b = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glNormal3b!: Deno.UnsafeFnPointer<typeof def_glNormal3b>;

export function Normal3b(
  nx: GLbyte,
  ny: GLbyte,
  nz: GLbyte,
): void {
  fn_glNormal3b.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormal3bv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3bv!: Deno.UnsafeFnPointer<typeof def_glNormal3bv>;

export function Normal3bv(
  v: Buffer,
): void {
  fn_glNormal3bv.call(
    bufferToFFI(v),
  );
}

export const def_glNormal3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glNormal3d!: Deno.UnsafeFnPointer<typeof def_glNormal3d>;

export function Normal3d(
  nx: GLdouble,
  ny: GLdouble,
  nz: GLdouble,
): void {
  fn_glNormal3d.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormal3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3dv!: Deno.UnsafeFnPointer<typeof def_glNormal3dv>;

export function Normal3dv(
  v: Buffer,
): void {
  fn_glNormal3dv.call(
    bufferToFFI(v),
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

export const def_glNormal3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3fv!: Deno.UnsafeFnPointer<typeof def_glNormal3fv>;

export function Normal3fv(
  v: Buffer,
): void {
  fn_glNormal3fv.call(
    bufferToFFI(v),
  );
}

export const def_glNormal3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNormal3i!: Deno.UnsafeFnPointer<typeof def_glNormal3i>;

export function Normal3i(
  nx: GLint,
  ny: GLint,
  nz: GLint,
): void {
  fn_glNormal3i.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormal3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3iv!: Deno.UnsafeFnPointer<typeof def_glNormal3iv>;

export function Normal3iv(
  v: Buffer,
): void {
  fn_glNormal3iv.call(
    bufferToFFI(v),
  );
}

export const def_glNormal3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glNormal3s!: Deno.UnsafeFnPointer<typeof def_glNormal3s>;

export function Normal3s(
  nx: GLshort,
  ny: GLshort,
  nz: GLshort,
): void {
  fn_glNormal3s.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormal3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3sv!: Deno.UnsafeFnPointer<typeof def_glNormal3sv>;

export function Normal3sv(
  v: Buffer,
): void {
  fn_glNormal3sv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos2d = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glRasterPos2d!: Deno.UnsafeFnPointer<typeof def_glRasterPos2d>;

export function RasterPos2d(
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glRasterPos2d.call(
    x,
    y,
  );
}

export const def_glRasterPos2dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos2dv!: Deno.UnsafeFnPointer<typeof def_glRasterPos2dv>;

export function RasterPos2dv(
  v: Buffer,
): void {
  fn_glRasterPos2dv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos2f = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glRasterPos2f!: Deno.UnsafeFnPointer<typeof def_glRasterPos2f>;

export function RasterPos2f(
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glRasterPos2f.call(
    x,
    y,
  );
}

export const def_glRasterPos2fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos2fv!: Deno.UnsafeFnPointer<typeof def_glRasterPos2fv>;

export function RasterPos2fv(
  v: Buffer,
): void {
  fn_glRasterPos2fv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos2i = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos2i!: Deno.UnsafeFnPointer<typeof def_glRasterPos2i>;

export function RasterPos2i(
  x: GLint,
  y: GLint,
): void {
  fn_glRasterPos2i.call(
    x,
    y,
  );
}

export const def_glRasterPos2iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos2iv!: Deno.UnsafeFnPointer<typeof def_glRasterPos2iv>;

export function RasterPos2iv(
  v: Buffer,
): void {
  fn_glRasterPos2iv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos2s = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glRasterPos2s!: Deno.UnsafeFnPointer<typeof def_glRasterPos2s>;

export function RasterPos2s(
  x: GLshort,
  y: GLshort,
): void {
  fn_glRasterPos2s.call(
    x,
    y,
  );
}

export const def_glRasterPos2sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos2sv!: Deno.UnsafeFnPointer<typeof def_glRasterPos2sv>;

export function RasterPos2sv(
  v: Buffer,
): void {
  fn_glRasterPos2sv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glRasterPos3d!: Deno.UnsafeFnPointer<typeof def_glRasterPos3d>;

export function RasterPos3d(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glRasterPos3d.call(
    x,
    y,
    z,
  );
}

export const def_glRasterPos3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos3dv!: Deno.UnsafeFnPointer<typeof def_glRasterPos3dv>;

export function RasterPos3dv(
  v: Buffer,
): void {
  fn_glRasterPos3dv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glRasterPos3f!: Deno.UnsafeFnPointer<typeof def_glRasterPos3f>;

export function RasterPos3f(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glRasterPos3f.call(
    x,
    y,
    z,
  );
}

export const def_glRasterPos3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos3fv!: Deno.UnsafeFnPointer<typeof def_glRasterPos3fv>;

export function RasterPos3fv(
  v: Buffer,
): void {
  fn_glRasterPos3fv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos3i!: Deno.UnsafeFnPointer<typeof def_glRasterPos3i>;

export function RasterPos3i(
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glRasterPos3i.call(
    x,
    y,
    z,
  );
}

export const def_glRasterPos3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos3iv!: Deno.UnsafeFnPointer<typeof def_glRasterPos3iv>;

export function RasterPos3iv(
  v: Buffer,
): void {
  fn_glRasterPos3iv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glRasterPos3s!: Deno.UnsafeFnPointer<typeof def_glRasterPos3s>;

export function RasterPos3s(
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glRasterPos3s.call(
    x,
    y,
    z,
  );
}

export const def_glRasterPos3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos3sv!: Deno.UnsafeFnPointer<typeof def_glRasterPos3sv>;

export function RasterPos3sv(
  v: Buffer,
): void {
  fn_glRasterPos3sv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos4d = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glRasterPos4d!: Deno.UnsafeFnPointer<typeof def_glRasterPos4d>;

export function RasterPos4d(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glRasterPos4d.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glRasterPos4dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos4dv!: Deno.UnsafeFnPointer<typeof def_glRasterPos4dv>;

export function RasterPos4dv(
  v: Buffer,
): void {
  fn_glRasterPos4dv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos4f = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glRasterPos4f!: Deno.UnsafeFnPointer<typeof def_glRasterPos4f>;

export function RasterPos4f(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glRasterPos4f.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glRasterPos4fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos4fv!: Deno.UnsafeFnPointer<typeof def_glRasterPos4fv>;

export function RasterPos4fv(
  v: Buffer,
): void {
  fn_glRasterPos4fv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos4i = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos4i!: Deno.UnsafeFnPointer<typeof def_glRasterPos4i>;

export function RasterPos4i(
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glRasterPos4i.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glRasterPos4iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos4iv!: Deno.UnsafeFnPointer<typeof def_glRasterPos4iv>;

export function RasterPos4iv(
  v: Buffer,
): void {
  fn_glRasterPos4iv.call(
    bufferToFFI(v),
  );
}

export const def_glRasterPos4s = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glRasterPos4s!: Deno.UnsafeFnPointer<typeof def_glRasterPos4s>;

export function RasterPos4s(
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glRasterPos4s.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glRasterPos4sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos4sv!: Deno.UnsafeFnPointer<typeof def_glRasterPos4sv>;

export function RasterPos4sv(
  v: Buffer,
): void {
  fn_glRasterPos4sv.call(
    bufferToFFI(v),
  );
}

export const def_glRectd = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glRectd!: Deno.UnsafeFnPointer<typeof def_glRectd>;

export function Rectd(
  x1: GLdouble,
  y1: GLdouble,
  x2: GLdouble,
  y2: GLdouble,
): void {
  fn_glRectd.call(
    x1,
    y1,
    x2,
    y2,
  );
}

export const def_glRectdv = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glRectdv!: Deno.UnsafeFnPointer<typeof def_glRectdv>;

export function Rectdv(
  v1: Buffer,
  v2: Buffer,
): void {
  fn_glRectdv.call(
    bufferToFFI(v1),
    bufferToFFI(v2),
  );
}

export const def_glRectf = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glRectf!: Deno.UnsafeFnPointer<typeof def_glRectf>;

export function Rectf(
  x1: GLfloat,
  y1: GLfloat,
  x2: GLfloat,
  y2: GLfloat,
): void {
  fn_glRectf.call(
    x1,
    y1,
    x2,
    y2,
  );
}

export const def_glRectfv = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glRectfv!: Deno.UnsafeFnPointer<typeof def_glRectfv>;

export function Rectfv(
  v1: Buffer,
  v2: Buffer,
): void {
  fn_glRectfv.call(
    bufferToFFI(v1),
    bufferToFFI(v2),
  );
}

export const def_glRecti = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRecti!: Deno.UnsafeFnPointer<typeof def_glRecti>;

export function Recti(
  x1: GLint,
  y1: GLint,
  x2: GLint,
  y2: GLint,
): void {
  fn_glRecti.call(
    x1,
    y1,
    x2,
    y2,
  );
}

export const def_glRectiv = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glRectiv!: Deno.UnsafeFnPointer<typeof def_glRectiv>;

export function Rectiv(
  v1: Buffer,
  v2: Buffer,
): void {
  fn_glRectiv.call(
    bufferToFFI(v1),
    bufferToFFI(v2),
  );
}

export const def_glRects = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glRects!: Deno.UnsafeFnPointer<typeof def_glRects>;

export function Rects(
  x1: GLshort,
  y1: GLshort,
  x2: GLshort,
  y2: GLshort,
): void {
  fn_glRects.call(
    x1,
    y1,
    x2,
    y2,
  );
}

export const def_glRectsv = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glRectsv!: Deno.UnsafeFnPointer<typeof def_glRectsv>;

export function Rectsv(
  v1: Buffer,
  v2: Buffer,
): void {
  fn_glRectsv.call(
    bufferToFFI(v1),
    bufferToFFI(v2),
  );
}

export const def_glTexCoord1d = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glTexCoord1d!: Deno.UnsafeFnPointer<typeof def_glTexCoord1d>;

export function TexCoord1d(
  s: GLdouble,
): void {
  fn_glTexCoord1d.call(
    s,
  );
}

export const def_glTexCoord1dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1dv!: Deno.UnsafeFnPointer<typeof def_glTexCoord1dv>;

export function TexCoord1dv(
  v: Buffer,
): void {
  fn_glTexCoord1dv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord1f = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glTexCoord1f!: Deno.UnsafeFnPointer<typeof def_glTexCoord1f>;

export function TexCoord1f(
  s: GLfloat,
): void {
  fn_glTexCoord1f.call(
    s,
  );
}

export const def_glTexCoord1fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1fv!: Deno.UnsafeFnPointer<typeof def_glTexCoord1fv>;

export function TexCoord1fv(
  v: Buffer,
): void {
  fn_glTexCoord1fv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord1i = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glTexCoord1i!: Deno.UnsafeFnPointer<typeof def_glTexCoord1i>;

export function TexCoord1i(
  s: GLint,
): void {
  fn_glTexCoord1i.call(
    s,
  );
}

export const def_glTexCoord1iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1iv!: Deno.UnsafeFnPointer<typeof def_glTexCoord1iv>;

export function TexCoord1iv(
  v: Buffer,
): void {
  fn_glTexCoord1iv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord1s = {
  parameters: ["i16"],
  result: "void",
} as const;

let fn_glTexCoord1s!: Deno.UnsafeFnPointer<typeof def_glTexCoord1s>;

export function TexCoord1s(
  s: GLshort,
): void {
  fn_glTexCoord1s.call(
    s,
  );
}

export const def_glTexCoord1sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1sv!: Deno.UnsafeFnPointer<typeof def_glTexCoord1sv>;

export function TexCoord1sv(
  v: Buffer,
): void {
  fn_glTexCoord1sv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord2d = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glTexCoord2d!: Deno.UnsafeFnPointer<typeof def_glTexCoord2d>;

export function TexCoord2d(
  s: GLdouble,
  t: GLdouble,
): void {
  fn_glTexCoord2d.call(
    s,
    t,
  );
}

export const def_glTexCoord2dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2dv!: Deno.UnsafeFnPointer<typeof def_glTexCoord2dv>;

export function TexCoord2dv(
  v: Buffer,
): void {
  fn_glTexCoord2dv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord2f = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2f!: Deno.UnsafeFnPointer<typeof def_glTexCoord2f>;

export function TexCoord2f(
  s: GLfloat,
  t: GLfloat,
): void {
  fn_glTexCoord2f.call(
    s,
    t,
  );
}

export const def_glTexCoord2fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fv!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fv>;

export function TexCoord2fv(
  v: Buffer,
): void {
  fn_glTexCoord2fv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord2i = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord2i!: Deno.UnsafeFnPointer<typeof def_glTexCoord2i>;

export function TexCoord2i(
  s: GLint,
  t: GLint,
): void {
  fn_glTexCoord2i.call(
    s,
    t,
  );
}

export const def_glTexCoord2iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2iv!: Deno.UnsafeFnPointer<typeof def_glTexCoord2iv>;

export function TexCoord2iv(
  v: Buffer,
): void {
  fn_glTexCoord2iv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord2s = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glTexCoord2s!: Deno.UnsafeFnPointer<typeof def_glTexCoord2s>;

export function TexCoord2s(
  s: GLshort,
  t: GLshort,
): void {
  fn_glTexCoord2s.call(
    s,
    t,
  );
}

export const def_glTexCoord2sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2sv!: Deno.UnsafeFnPointer<typeof def_glTexCoord2sv>;

export function TexCoord2sv(
  v: Buffer,
): void {
  fn_glTexCoord2sv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glTexCoord3d!: Deno.UnsafeFnPointer<typeof def_glTexCoord3d>;

export function TexCoord3d(
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
): void {
  fn_glTexCoord3d.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3dv!: Deno.UnsafeFnPointer<typeof def_glTexCoord3dv>;

export function TexCoord3dv(
  v: Buffer,
): void {
  fn_glTexCoord3dv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord3f!: Deno.UnsafeFnPointer<typeof def_glTexCoord3f>;

export function TexCoord3f(
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
): void {
  fn_glTexCoord3f.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3fv!: Deno.UnsafeFnPointer<typeof def_glTexCoord3fv>;

export function TexCoord3fv(
  v: Buffer,
): void {
  fn_glTexCoord3fv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord3i!: Deno.UnsafeFnPointer<typeof def_glTexCoord3i>;

export function TexCoord3i(
  s: GLint,
  t: GLint,
  r: GLint,
): void {
  fn_glTexCoord3i.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3iv!: Deno.UnsafeFnPointer<typeof def_glTexCoord3iv>;

export function TexCoord3iv(
  v: Buffer,
): void {
  fn_glTexCoord3iv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glTexCoord3s!: Deno.UnsafeFnPointer<typeof def_glTexCoord3s>;

export function TexCoord3s(
  s: GLshort,
  t: GLshort,
  r: GLshort,
): void {
  fn_glTexCoord3s.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3sv!: Deno.UnsafeFnPointer<typeof def_glTexCoord3sv>;

export function TexCoord3sv(
  v: Buffer,
): void {
  fn_glTexCoord3sv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord4d = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glTexCoord4d!: Deno.UnsafeFnPointer<typeof def_glTexCoord4d>;

export function TexCoord4d(
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
  q: GLdouble,
): void {
  fn_glTexCoord4d.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4dv!: Deno.UnsafeFnPointer<typeof def_glTexCoord4dv>;

export function TexCoord4dv(
  v: Buffer,
): void {
  fn_glTexCoord4dv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord4f = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord4f!: Deno.UnsafeFnPointer<typeof def_glTexCoord4f>;

export function TexCoord4f(
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  q: GLfloat,
): void {
  fn_glTexCoord4f.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4fv!: Deno.UnsafeFnPointer<typeof def_glTexCoord4fv>;

export function TexCoord4fv(
  v: Buffer,
): void {
  fn_glTexCoord4fv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord4i = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord4i!: Deno.UnsafeFnPointer<typeof def_glTexCoord4i>;

export function TexCoord4i(
  s: GLint,
  t: GLint,
  r: GLint,
  q: GLint,
): void {
  fn_glTexCoord4i.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4iv!: Deno.UnsafeFnPointer<typeof def_glTexCoord4iv>;

export function TexCoord4iv(
  v: Buffer,
): void {
  fn_glTexCoord4iv.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord4s = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glTexCoord4s!: Deno.UnsafeFnPointer<typeof def_glTexCoord4s>;

export function TexCoord4s(
  s: GLshort,
  t: GLshort,
  r: GLshort,
  q: GLshort,
): void {
  fn_glTexCoord4s.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4sv!: Deno.UnsafeFnPointer<typeof def_glTexCoord4sv>;

export function TexCoord4sv(
  v: Buffer,
): void {
  fn_glTexCoord4sv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex2d = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glVertex2d!: Deno.UnsafeFnPointer<typeof def_glVertex2d>;

export function Vertex2d(
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertex2d.call(
    x,
    y,
  );
}

export const def_glVertex2dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2dv!: Deno.UnsafeFnPointer<typeof def_glVertex2dv>;

export function Vertex2dv(
  v: Buffer,
): void {
  fn_glVertex2dv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex2f = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glVertex2f!: Deno.UnsafeFnPointer<typeof def_glVertex2f>;

export function Vertex2f(
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glVertex2f.call(
    x,
    y,
  );
}

export const def_glVertex2fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2fv!: Deno.UnsafeFnPointer<typeof def_glVertex2fv>;

export function Vertex2fv(
  v: Buffer,
): void {
  fn_glVertex2fv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex2i = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glVertex2i!: Deno.UnsafeFnPointer<typeof def_glVertex2i>;

export function Vertex2i(
  x: GLint,
  y: GLint,
): void {
  fn_glVertex2i.call(
    x,
    y,
  );
}

export const def_glVertex2iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2iv!: Deno.UnsafeFnPointer<typeof def_glVertex2iv>;

export function Vertex2iv(
  v: Buffer,
): void {
  fn_glVertex2iv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex2s = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glVertex2s!: Deno.UnsafeFnPointer<typeof def_glVertex2s>;

export function Vertex2s(
  x: GLshort,
  y: GLshort,
): void {
  fn_glVertex2s.call(
    x,
    y,
  );
}

export const def_glVertex2sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2sv!: Deno.UnsafeFnPointer<typeof def_glVertex2sv>;

export function Vertex2sv(
  v: Buffer,
): void {
  fn_glVertex2sv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertex3d!: Deno.UnsafeFnPointer<typeof def_glVertex3d>;

export function Vertex3d(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertex3d.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3dv!: Deno.UnsafeFnPointer<typeof def_glVertex3dv>;

export function Vertex3dv(
  v: Buffer,
): void {
  fn_glVertex3dv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertex3f!: Deno.UnsafeFnPointer<typeof def_glVertex3f>;

export function Vertex3f(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glVertex3f.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3fv!: Deno.UnsafeFnPointer<typeof def_glVertex3fv>;

export function Vertex3fv(
  v: Buffer,
): void {
  fn_glVertex3fv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertex3i!: Deno.UnsafeFnPointer<typeof def_glVertex3i>;

export function Vertex3i(
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glVertex3i.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3iv!: Deno.UnsafeFnPointer<typeof def_glVertex3iv>;

export function Vertex3iv(
  v: Buffer,
): void {
  fn_glVertex3iv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertex3s!: Deno.UnsafeFnPointer<typeof def_glVertex3s>;

export function Vertex3s(
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glVertex3s.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3sv!: Deno.UnsafeFnPointer<typeof def_glVertex3sv>;

export function Vertex3sv(
  v: Buffer,
): void {
  fn_glVertex3sv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex4d = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertex4d!: Deno.UnsafeFnPointer<typeof def_glVertex4d>;

export function Vertex4d(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertex4d.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4dv!: Deno.UnsafeFnPointer<typeof def_glVertex4dv>;

export function Vertex4dv(
  v: Buffer,
): void {
  fn_glVertex4dv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex4f = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertex4f!: Deno.UnsafeFnPointer<typeof def_glVertex4f>;

export function Vertex4f(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glVertex4f.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4fv!: Deno.UnsafeFnPointer<typeof def_glVertex4fv>;

export function Vertex4fv(
  v: Buffer,
): void {
  fn_glVertex4fv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex4i = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertex4i!: Deno.UnsafeFnPointer<typeof def_glVertex4i>;

export function Vertex4i(
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glVertex4i.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4iv!: Deno.UnsafeFnPointer<typeof def_glVertex4iv>;

export function Vertex4iv(
  v: Buffer,
): void {
  fn_glVertex4iv.call(
    bufferToFFI(v),
  );
}

export const def_glVertex4s = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertex4s!: Deno.UnsafeFnPointer<typeof def_glVertex4s>;

export function Vertex4s(
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glVertex4s.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4sv!: Deno.UnsafeFnPointer<typeof def_glVertex4sv>;

export function Vertex4sv(
  v: Buffer,
): void {
  fn_glVertex4sv.call(
    bufferToFFI(v),
  );
}

export const def_glClipPlane = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlane!: Deno.UnsafeFnPointer<typeof def_glClipPlane>;

export function ClipPlane(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glClipPlane.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glColorMaterial = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glColorMaterial!: Deno.UnsafeFnPointer<typeof def_glColorMaterial>;

export function ColorMaterial(
  face: GLenum,
  mode: GLenum,
): void {
  fn_glColorMaterial.call(
    face,
    mode,
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

export const def_glFogi = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glFogi!: Deno.UnsafeFnPointer<typeof def_glFogi>;

export function Fogi(
  pname: GLenum,
  param: GLint,
): void {
  fn_glFogi.call(
    pname,
    param,
  );
}

export const def_glFogiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFogiv!: Deno.UnsafeFnPointer<typeof def_glFogiv>;

export function Fogiv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFogiv.call(
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

export const def_glLighti = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glLighti!: Deno.UnsafeFnPointer<typeof def_glLighti>;

export function Lighti(
  light: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glLighti.call(
    light,
    pname,
    param,
  );
}

export const def_glLightiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glLightiv!: Deno.UnsafeFnPointer<typeof def_glLightiv>;

export function Lightiv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightiv.call(
    light,
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

export const def_glLightModeli = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glLightModeli!: Deno.UnsafeFnPointer<typeof def_glLightModeli>;

export function LightModeli(
  pname: GLenum,
  param: GLint,
): void {
  fn_glLightModeli.call(
    pname,
    param,
  );
}

export const def_glLightModeliv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glLightModeliv!: Deno.UnsafeFnPointer<typeof def_glLightModeliv>;

export function LightModeliv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightModeliv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glLineStipple = {
  parameters: ["i32", "u16"],
  result: "void",
} as const;

let fn_glLineStipple!: Deno.UnsafeFnPointer<typeof def_glLineStipple>;

export function LineStipple(
  factor: GLint,
  pattern: GLushort,
): void {
  fn_glLineStipple.call(
    factor,
    pattern,
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

export const def_glMateriali = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMateriali!: Deno.UnsafeFnPointer<typeof def_glMateriali>;

export function Materiali(
  face: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glMateriali.call(
    face,
    pname,
    param,
  );
}

export const def_glMaterialiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMaterialiv!: Deno.UnsafeFnPointer<typeof def_glMaterialiv>;

export function Materialiv(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMaterialiv.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glPolygonStipple = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glPolygonStipple!: Deno.UnsafeFnPointer<typeof def_glPolygonStipple>;

export function PolygonStipple(
  mask: Buffer,
): void {
  fn_glPolygonStipple.call(
    bufferToFFI(mask),
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

export const def_glTexGend = {
  parameters: ["u32", "u32", "f64"],
  result: "void",
} as const;

let fn_glTexGend!: Deno.UnsafeFnPointer<typeof def_glTexGend>;

export function TexGend(
  coord: GLenum,
  pname: GLenum,
  param: GLdouble,
): void {
  fn_glTexGend.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGendv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGendv!: Deno.UnsafeFnPointer<typeof def_glTexGendv>;

export function TexGendv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGendv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexGenf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTexGenf!: Deno.UnsafeFnPointer<typeof def_glTexGenf>;

export function TexGenf(
  coord: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTexGenf.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGenfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGenfv!: Deno.UnsafeFnPointer<typeof def_glTexGenfv>;

export function TexGenfv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGenfv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexGeni = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexGeni!: Deno.UnsafeFnPointer<typeof def_glTexGeni>;

export function TexGeni(
  coord: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTexGeni.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGeniv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGeniv!: Deno.UnsafeFnPointer<typeof def_glTexGeniv>;

export function TexGeniv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGeniv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFeedbackBuffer = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFeedbackBuffer!: Deno.UnsafeFnPointer<typeof def_glFeedbackBuffer>;

export function FeedbackBuffer(
  size: GLsizei,
  type: GLenum,
  buffer: Buffer,
): void {
  fn_glFeedbackBuffer.call(
    size,
    type,
    bufferToFFI(buffer),
  );
}

export const def_glSelectBuffer = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glSelectBuffer!: Deno.UnsafeFnPointer<typeof def_glSelectBuffer>;

export function SelectBuffer(
  size: GLsizei,
  buffer: Buffer,
): void {
  fn_glSelectBuffer.call(
    size,
    bufferToFFI(buffer),
  );
}

export const def_glRenderMode = {
  parameters: ["u32"],
  result: "i32",
} as const;

let fn_glRenderMode!: Deno.UnsafeFnPointer<typeof def_glRenderMode>;

export function RenderMode(
  mode: GLenum,
): GLint {
  return fn_glRenderMode.call(
    mode,
  );
}

export const def_glInitNames = {
  parameters: [],
  result: "void",
} as const;

let fn_glInitNames!: Deno.UnsafeFnPointer<typeof def_glInitNames>;

export function InitNames(): void {
  fn_glInitNames.call();
}

export const def_glLoadName = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glLoadName!: Deno.UnsafeFnPointer<typeof def_glLoadName>;

export function LoadName(
  name: GLuint,
): void {
  fn_glLoadName.call(
    name,
  );
}

export const def_glPassThrough = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glPassThrough!: Deno.UnsafeFnPointer<typeof def_glPassThrough>;

export function PassThrough(
  token: GLfloat,
): void {
  fn_glPassThrough.call(
    token,
  );
}

export const def_glPopName = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopName!: Deno.UnsafeFnPointer<typeof def_glPopName>;

export function PopName(): void {
  fn_glPopName.call();
}

export const def_glPushName = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPushName!: Deno.UnsafeFnPointer<typeof def_glPushName>;

export function PushName(
  name: GLuint,
): void {
  fn_glPushName.call(
    name,
  );
}

export const def_glClearAccum = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glClearAccum!: Deno.UnsafeFnPointer<typeof def_glClearAccum>;

export function ClearAccum(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
  alpha: GLfloat,
): void {
  fn_glClearAccum.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearIndex = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glClearIndex!: Deno.UnsafeFnPointer<typeof def_glClearIndex>;

export function ClearIndex(
  c: GLfloat,
): void {
  fn_glClearIndex.call(
    c,
  );
}

export const def_glIndexMask = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glIndexMask!: Deno.UnsafeFnPointer<typeof def_glIndexMask>;

export function IndexMask(
  mask: GLuint,
): void {
  fn_glIndexMask.call(
    mask,
  );
}

export const def_glAccum = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glAccum!: Deno.UnsafeFnPointer<typeof def_glAccum>;

export function Accum(
  op: GLenum,
  value: GLfloat,
): void {
  fn_glAccum.call(
    op,
    value,
  );
}

export const def_glPopAttrib = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopAttrib!: Deno.UnsafeFnPointer<typeof def_glPopAttrib>;

export function PopAttrib(): void {
  fn_glPopAttrib.call();
}

export const def_glPushAttrib = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPushAttrib!: Deno.UnsafeFnPointer<typeof def_glPushAttrib>;

export function PushAttrib(
  mask: GLbitfield,
): void {
  fn_glPushAttrib.call(
    mask,
  );
}

export const def_glMap1d = {
  parameters: ["u32", "f64", "f64", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMap1d!: Deno.UnsafeFnPointer<typeof def_glMap1d>;

export function Map1d(
  target: GLenum,
  u1: GLdouble,
  u2: GLdouble,
  stride: GLint,
  order: GLint,
  points: Buffer,
): void {
  fn_glMap1d.call(
    target,
    u1,
    u2,
    stride,
    order,
    bufferToFFI(points),
  );
}

export const def_glMap1f = {
  parameters: ["u32", "f32", "f32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMap1f!: Deno.UnsafeFnPointer<typeof def_glMap1f>;

export function Map1f(
  target: GLenum,
  u1: GLfloat,
  u2: GLfloat,
  stride: GLint,
  order: GLint,
  points: Buffer,
): void {
  fn_glMap1f.call(
    target,
    u1,
    u2,
    stride,
    order,
    bufferToFFI(points),
  );
}

export const def_glMap2d = {
  parameters: [
    "u32",
    "f64",
    "f64",
    "i32",
    "i32",
    "f64",
    "f64",
    "i32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glMap2d!: Deno.UnsafeFnPointer<typeof def_glMap2d>;

export function Map2d(
  target: GLenum,
  u1: GLdouble,
  u2: GLdouble,
  ustride: GLint,
  uorder: GLint,
  v1: GLdouble,
  v2: GLdouble,
  vstride: GLint,
  vorder: GLint,
  points: Buffer,
): void {
  fn_glMap2d.call(
    target,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    bufferToFFI(points),
  );
}

export const def_glMap2f = {
  parameters: [
    "u32",
    "f32",
    "f32",
    "i32",
    "i32",
    "f32",
    "f32",
    "i32",
    "i32",
    "buffer",
  ],
  result: "void",
} as const;

let fn_glMap2f!: Deno.UnsafeFnPointer<typeof def_glMap2f>;

export function Map2f(
  target: GLenum,
  u1: GLfloat,
  u2: GLfloat,
  ustride: GLint,
  uorder: GLint,
  v1: GLfloat,
  v2: GLfloat,
  vstride: GLint,
  vorder: GLint,
  points: Buffer,
): void {
  fn_glMap2f.call(
    target,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    bufferToFFI(points),
  );
}

export const def_glMapGrid1d = {
  parameters: ["i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glMapGrid1d!: Deno.UnsafeFnPointer<typeof def_glMapGrid1d>;

export function MapGrid1d(
  un: GLint,
  u1: GLdouble,
  u2: GLdouble,
): void {
  fn_glMapGrid1d.call(
    un,
    u1,
    u2,
  );
}

export const def_glMapGrid1f = {
  parameters: ["i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMapGrid1f!: Deno.UnsafeFnPointer<typeof def_glMapGrid1f>;

export function MapGrid1f(
  un: GLint,
  u1: GLfloat,
  u2: GLfloat,
): void {
  fn_glMapGrid1f.call(
    un,
    u1,
    u2,
  );
}

export const def_glMapGrid2d = {
  parameters: ["i32", "f64", "f64", "i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glMapGrid2d!: Deno.UnsafeFnPointer<typeof def_glMapGrid2d>;

export function MapGrid2d(
  un: GLint,
  u1: GLdouble,
  u2: GLdouble,
  vn: GLint,
  v1: GLdouble,
  v2: GLdouble,
): void {
  fn_glMapGrid2d.call(
    un,
    u1,
    u2,
    vn,
    v1,
    v2,
  );
}

export const def_glMapGrid2f = {
  parameters: ["i32", "f32", "f32", "i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMapGrid2f!: Deno.UnsafeFnPointer<typeof def_glMapGrid2f>;

export function MapGrid2f(
  un: GLint,
  u1: GLfloat,
  u2: GLfloat,
  vn: GLint,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glMapGrid2f.call(
    un,
    u1,
    u2,
    vn,
    v1,
    v2,
  );
}

export const def_glEvalCoord1d = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glEvalCoord1d!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1d>;

export function EvalCoord1d(
  u: GLdouble,
): void {
  fn_glEvalCoord1d.call(
    u,
  );
}

export const def_glEvalCoord1dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord1dv!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1dv>;

export function EvalCoord1dv(
  u: Buffer,
): void {
  fn_glEvalCoord1dv.call(
    bufferToFFI(u),
  );
}

export const def_glEvalCoord1f = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glEvalCoord1f!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1f>;

export function EvalCoord1f(
  u: GLfloat,
): void {
  fn_glEvalCoord1f.call(
    u,
  );
}

export const def_glEvalCoord1fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord1fv!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1fv>;

export function EvalCoord1fv(
  u: Buffer,
): void {
  fn_glEvalCoord1fv.call(
    bufferToFFI(u),
  );
}

export const def_glEvalCoord2d = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glEvalCoord2d!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2d>;

export function EvalCoord2d(
  u: GLdouble,
  v: GLdouble,
): void {
  fn_glEvalCoord2d.call(
    u,
    v,
  );
}

export const def_glEvalCoord2dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord2dv!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2dv>;

export function EvalCoord2dv(
  u: Buffer,
): void {
  fn_glEvalCoord2dv.call(
    bufferToFFI(u),
  );
}

export const def_glEvalCoord2f = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glEvalCoord2f!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2f>;

export function EvalCoord2f(
  u: GLfloat,
  v: GLfloat,
): void {
  fn_glEvalCoord2f.call(
    u,
    v,
  );
}

export const def_glEvalCoord2fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord2fv!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2fv>;

export function EvalCoord2fv(
  u: Buffer,
): void {
  fn_glEvalCoord2fv.call(
    bufferToFFI(u),
  );
}

export const def_glEvalMesh1 = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glEvalMesh1!: Deno.UnsafeFnPointer<typeof def_glEvalMesh1>;

export function EvalMesh1(
  mode: GLenum,
  i1: GLint,
  i2: GLint,
): void {
  fn_glEvalMesh1.call(
    mode,
    i1,
    i2,
  );
}

export const def_glEvalPoint1 = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glEvalPoint1!: Deno.UnsafeFnPointer<typeof def_glEvalPoint1>;

export function EvalPoint1(
  i: GLint,
): void {
  fn_glEvalPoint1.call(
    i,
  );
}

export const def_glEvalMesh2 = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glEvalMesh2!: Deno.UnsafeFnPointer<typeof def_glEvalMesh2>;

export function EvalMesh2(
  mode: GLenum,
  i1: GLint,
  i2: GLint,
  j1: GLint,
  j2: GLint,
): void {
  fn_glEvalMesh2.call(
    mode,
    i1,
    i2,
    j1,
    j2,
  );
}

export const def_glEvalPoint2 = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glEvalPoint2!: Deno.UnsafeFnPointer<typeof def_glEvalPoint2>;

export function EvalPoint2(
  i: GLint,
  j: GLint,
): void {
  fn_glEvalPoint2.call(
    i,
    j,
  );
}

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

export const def_glPixelZoom = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glPixelZoom!: Deno.UnsafeFnPointer<typeof def_glPixelZoom>;

export function PixelZoom(
  xfactor: GLfloat,
  yfactor: GLfloat,
): void {
  fn_glPixelZoom.call(
    xfactor,
    yfactor,
  );
}

export const def_glPixelTransferf = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPixelTransferf!: Deno.UnsafeFnPointer<typeof def_glPixelTransferf>;

export function PixelTransferf(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPixelTransferf.call(
    pname,
    param,
  );
}

export const def_glPixelTransferi = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPixelTransferi!: Deno.UnsafeFnPointer<typeof def_glPixelTransferi>;

export function PixelTransferi(
  pname: GLenum,
  param: GLint,
): void {
  fn_glPixelTransferi.call(
    pname,
    param,
  );
}

export const def_glPixelMapfv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPixelMapfv!: Deno.UnsafeFnPointer<typeof def_glPixelMapfv>;

export function PixelMapfv(
  map: GLenum,
  mapsize: GLsizei,
  values: Buffer,
): void {
  fn_glPixelMapfv.call(
    map,
    mapsize,
    bufferToFFI(values),
  );
}

export const def_glPixelMapuiv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPixelMapuiv!: Deno.UnsafeFnPointer<typeof def_glPixelMapuiv>;

export function PixelMapuiv(
  map: GLenum,
  mapsize: GLsizei,
  values: Buffer,
): void {
  fn_glPixelMapuiv.call(
    map,
    mapsize,
    bufferToFFI(values),
  );
}

export const def_glPixelMapusv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPixelMapusv!: Deno.UnsafeFnPointer<typeof def_glPixelMapusv>;

export function PixelMapusv(
  map: GLenum,
  mapsize: GLsizei,
  values: Buffer,
): void {
  fn_glPixelMapusv.call(
    map,
    mapsize,
    bufferToFFI(values),
  );
}

export const def_glCopyPixels = {
  parameters: ["i32", "i32", "i32", "i32", "u32"],
  result: "void",
} as const;

let fn_glCopyPixels!: Deno.UnsafeFnPointer<typeof def_glCopyPixels>;

export function CopyPixels(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  type: GLenum,
): void {
  fn_glCopyPixels.call(
    x,
    y,
    width,
    height,
    type,
  );
}

export const def_glDrawPixels = {
  parameters: ["i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glDrawPixels!: Deno.UnsafeFnPointer<typeof def_glDrawPixels>;

export function DrawPixels(
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glDrawPixels.call(
    width,
    height,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glGetClipPlane = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetClipPlane!: Deno.UnsafeFnPointer<typeof def_glGetClipPlane>;

export function GetClipPlane(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glGetClipPlane.call(
    plane,
    bufferToFFI(equation),
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

export const def_glGetLightiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLightiv!: Deno.UnsafeFnPointer<typeof def_glGetLightiv>;

export function GetLightiv(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetLightiv.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapdv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapdv!: Deno.UnsafeFnPointer<typeof def_glGetMapdv>;

export function GetMapdv(
  target: GLenum,
  query: GLenum,
  v: Buffer,
): void {
  fn_glGetMapdv.call(
    target,
    query,
    bufferToFFI(v),
  );
}

export const def_glGetMapfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapfv!: Deno.UnsafeFnPointer<typeof def_glGetMapfv>;

export function GetMapfv(
  target: GLenum,
  query: GLenum,
  v: Buffer,
): void {
  fn_glGetMapfv.call(
    target,
    query,
    bufferToFFI(v),
  );
}

export const def_glGetMapiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapiv!: Deno.UnsafeFnPointer<typeof def_glGetMapiv>;

export function GetMapiv(
  target: GLenum,
  query: GLenum,
  v: Buffer,
): void {
  fn_glGetMapiv.call(
    target,
    query,
    bufferToFFI(v),
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

export const def_glGetMaterialiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMaterialiv!: Deno.UnsafeFnPointer<typeof def_glGetMaterialiv>;

export function GetMaterialiv(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMaterialiv.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPixelMapfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelMapfv!: Deno.UnsafeFnPointer<typeof def_glGetPixelMapfv>;

export function GetPixelMapfv(
  map: GLenum,
  values: Buffer,
): void {
  fn_glGetPixelMapfv.call(
    map,
    bufferToFFI(values),
  );
}

export const def_glGetPixelMapuiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelMapuiv!: Deno.UnsafeFnPointer<typeof def_glGetPixelMapuiv>;

export function GetPixelMapuiv(
  map: GLenum,
  values: Buffer,
): void {
  fn_glGetPixelMapuiv.call(
    map,
    bufferToFFI(values),
  );
}

export const def_glGetPixelMapusv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelMapusv!: Deno.UnsafeFnPointer<typeof def_glGetPixelMapusv>;

export function GetPixelMapusv(
  map: GLenum,
  values: Buffer,
): void {
  fn_glGetPixelMapusv.call(
    map,
    bufferToFFI(values),
  );
}

export const def_glGetPolygonStipple = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glGetPolygonStipple!: Deno.UnsafeFnPointer<
  typeof def_glGetPolygonStipple
>;

export function GetPolygonStipple(
  mask: Buffer,
): void {
  fn_glGetPolygonStipple.call(
    bufferToFFI(mask),
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

export const def_glGetTexGendv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGendv!: Deno.UnsafeFnPointer<typeof def_glGetTexGendv>;

export function GetTexGendv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGendv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexGenfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGenfv!: Deno.UnsafeFnPointer<typeof def_glGetTexGenfv>;

export function GetTexGenfv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGenfv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexGeniv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGeniv!: Deno.UnsafeFnPointer<typeof def_glGetTexGeniv>;

export function GetTexGeniv(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGeniv.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIsList = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsList!: Deno.UnsafeFnPointer<typeof def_glIsList>;

export function IsList(
  list: GLuint,
): GLboolean {
  return fn_glIsList.call(
    list,
  );
}

export const def_glFrustum = {
  parameters: ["f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glFrustum!: Deno.UnsafeFnPointer<typeof def_glFrustum>;

export function Frustum(
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glFrustum.call(
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
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

export const def_glLoadMatrixd = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadMatrixd!: Deno.UnsafeFnPointer<typeof def_glLoadMatrixd>;

export function LoadMatrixd(
  m: Buffer,
): void {
  fn_glLoadMatrixd.call(
    bufferToFFI(m),
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

export const def_glMultMatrixd = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultMatrixd!: Deno.UnsafeFnPointer<typeof def_glMultMatrixd>;

export function MultMatrixd(
  m: Buffer,
): void {
  fn_glMultMatrixd.call(
    bufferToFFI(m),
  );
}

export const def_glOrtho = {
  parameters: ["f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glOrtho!: Deno.UnsafeFnPointer<typeof def_glOrtho>;

export function Ortho(
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glOrtho.call(
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
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

export const def_glRotated = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glRotated!: Deno.UnsafeFnPointer<typeof def_glRotated>;

export function Rotated(
  angle: GLdouble,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glRotated.call(
    angle,
    x,
    y,
    z,
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

export const def_glScaled = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glScaled!: Deno.UnsafeFnPointer<typeof def_glScaled>;

export function Scaled(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glScaled.call(
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

export const def_glTranslated = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glTranslated!: Deno.UnsafeFnPointer<typeof def_glTranslated>;

export function Translated(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glTranslated.call(
    x,
    y,
    z,
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

let fn_glCopyTexSubImage1D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage1D
>;

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

export const def_glArrayElement = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glArrayElement!: Deno.UnsafeFnPointer<typeof def_glArrayElement>;

export function ArrayElement(
  i: GLint,
): void {
  fn_glArrayElement.call(
    i,
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

export const def_glEdgeFlagPointer = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glEdgeFlagPointer!: Deno.UnsafeFnPointer<typeof def_glEdgeFlagPointer>;

export function EdgeFlagPointer(
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glEdgeFlagPointer.call(
    stride,
    bufferToFFI(pointer),
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

export const def_glIndexPointer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glIndexPointer!: Deno.UnsafeFnPointer<typeof def_glIndexPointer>;

export function IndexPointer(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glIndexPointer.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glInterleavedArrays = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInterleavedArrays!: Deno.UnsafeFnPointer<
  typeof def_glInterleavedArrays
>;

export function InterleavedArrays(
  format: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glInterleavedArrays.call(
    format,
    stride,
    bufferToFFI(pointer),
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

export const def_glAreTexturesResident = {
  parameters: ["i32", "buffer", "buffer"],
  result: "u8",
} as const;

let fn_glAreTexturesResident!: Deno.UnsafeFnPointer<
  typeof def_glAreTexturesResident
>;

export function AreTexturesResident(
  n: GLsizei,
  textures: Buffer,
  residences: Buffer,
): GLboolean {
  return fn_glAreTexturesResident.call(
    n,
    bufferToFFI(textures),
    bufferToFFI(residences),
  );
}

export const def_glPrioritizeTextures = {
  parameters: ["i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glPrioritizeTextures!: Deno.UnsafeFnPointer<
  typeof def_glPrioritizeTextures
>;

export function PrioritizeTextures(
  n: GLsizei,
  textures: Buffer,
  priorities: Buffer,
): void {
  fn_glPrioritizeTextures.call(
    n,
    bufferToFFI(textures),
    bufferToFFI(priorities),
  );
}

export const def_glIndexub = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glIndexub!: Deno.UnsafeFnPointer<typeof def_glIndexub>;

export function Indexub(
  c: GLubyte,
): void {
  fn_glIndexub.call(
    c,
  );
}

export const def_glIndexubv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexubv!: Deno.UnsafeFnPointer<typeof def_glIndexubv>;

export function Indexubv(
  c: Buffer,
): void {
  fn_glIndexubv.call(
    bufferToFFI(c),
  );
}

export const def_glPopClientAttrib = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopClientAttrib!: Deno.UnsafeFnPointer<typeof def_glPopClientAttrib>;

export function PopClientAttrib(): void {
  fn_glPopClientAttrib.call();
}

export const def_glPushClientAttrib = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPushClientAttrib!: Deno.UnsafeFnPointer<typeof def_glPushClientAttrib>;

export function PushClientAttrib(
  mask: GLbitfield,
): void {
  fn_glPushClientAttrib.call(
    mask,
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

export const def_glCompressedTexImage1D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexImage1D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexImage1D
>;

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

export const def_glCompressedTexSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTexSubImage1D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexSubImage1D
>;

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

let fn_glGetCompressedTexImage!: Deno.UnsafeFnPointer<
  typeof def_glGetCompressedTexImage
>;

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

export const def_glMultiTexCoord1d = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord1d!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1d>;

export function MultiTexCoord1d(
  target: GLenum,
  s: GLdouble,
): void {
  fn_glMultiTexCoord1d.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1dv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1dv>;

export function MultiTexCoord1dv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1dv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1f = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord1f!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1f>;

export function MultiTexCoord1f(
  target: GLenum,
  s: GLfloat,
): void {
  fn_glMultiTexCoord1f.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1fv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1fv>;

export function MultiTexCoord1fv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1fv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1i = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord1i!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1i>;

export function MultiTexCoord1i(
  target: GLenum,
  s: GLint,
): void {
  fn_glMultiTexCoord1i.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1iv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1iv>;

export function MultiTexCoord1iv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1iv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1s = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord1s!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1s>;

export function MultiTexCoord1s(
  target: GLenum,
  s: GLshort,
): void {
  fn_glMultiTexCoord1s.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1sv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1sv>;

export function MultiTexCoord1sv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1sv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2d = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord2d!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2d>;

export function MultiTexCoord2d(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
): void {
  fn_glMultiTexCoord2d.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2dv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2dv>;

export function MultiTexCoord2dv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2dv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2f = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord2f!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2f>;

export function MultiTexCoord2f(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
): void {
  fn_glMultiTexCoord2f.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2fv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2fv>;

export function MultiTexCoord2fv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2fv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2i = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord2i!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2i>;

export function MultiTexCoord2i(
  target: GLenum,
  s: GLint,
  t: GLint,
): void {
  fn_glMultiTexCoord2i.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2iv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2iv>;

export function MultiTexCoord2iv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2iv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2s = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord2s!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2s>;

export function MultiTexCoord2s(
  target: GLenum,
  s: GLshort,
  t: GLshort,
): void {
  fn_glMultiTexCoord2s.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2sv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2sv>;

export function MultiTexCoord2sv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2sv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3d = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord3d!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3d>;

export function MultiTexCoord3d(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
): void {
  fn_glMultiTexCoord3d.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3dv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3dv>;

export function MultiTexCoord3dv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3dv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3f = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord3f!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3f>;

export function MultiTexCoord3f(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
): void {
  fn_glMultiTexCoord3f.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3fv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3fv>;

export function MultiTexCoord3fv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3fv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3i = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord3i!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3i>;

export function MultiTexCoord3i(
  target: GLenum,
  s: GLint,
  t: GLint,
  r: GLint,
): void {
  fn_glMultiTexCoord3i.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3iv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3iv>;

export function MultiTexCoord3iv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3iv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3s = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord3s!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3s>;

export function MultiTexCoord3s(
  target: GLenum,
  s: GLshort,
  t: GLshort,
  r: GLshort,
): void {
  fn_glMultiTexCoord3s.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3sv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3sv>;

export function MultiTexCoord3sv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3sv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4d = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord4d!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4d>;

export function MultiTexCoord4d(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
  q: GLdouble,
): void {
  fn_glMultiTexCoord4d.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4dv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4dv>;

export function MultiTexCoord4dv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4dv.call(
    target,
    bufferToFFI(v),
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

export const def_glMultiTexCoord4fv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4fv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4fv>;

export function MultiTexCoord4fv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4fv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4i = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4i!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4i>;

export function MultiTexCoord4i(
  target: GLenum,
  s: GLint,
  t: GLint,
  r: GLint,
  q: GLint,
): void {
  fn_glMultiTexCoord4i.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4iv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4iv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4iv>;

export function MultiTexCoord4iv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4iv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4s = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord4s!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4s>;

export function MultiTexCoord4s(
  target: GLenum,
  s: GLshort,
  t: GLshort,
  r: GLshort,
  q: GLshort,
): void {
  fn_glMultiTexCoord4s.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4sv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4sv!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4sv>;

export function MultiTexCoord4sv(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4sv.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glLoadTransposeMatrixf = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadTransposeMatrixf!: Deno.UnsafeFnPointer<
  typeof def_glLoadTransposeMatrixf
>;

export function LoadTransposeMatrixf(
  m: Buffer,
): void {
  fn_glLoadTransposeMatrixf.call(
    bufferToFFI(m),
  );
}

export const def_glLoadTransposeMatrixd = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadTransposeMatrixd!: Deno.UnsafeFnPointer<
  typeof def_glLoadTransposeMatrixd
>;

export function LoadTransposeMatrixd(
  m: Buffer,
): void {
  fn_glLoadTransposeMatrixd.call(
    bufferToFFI(m),
  );
}

export const def_glMultTransposeMatrixf = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultTransposeMatrixf!: Deno.UnsafeFnPointer<
  typeof def_glMultTransposeMatrixf
>;

export function MultTransposeMatrixf(
  m: Buffer,
): void {
  fn_glMultTransposeMatrixf.call(
    bufferToFFI(m),
  );
}

export const def_glMultTransposeMatrixd = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultTransposeMatrixd!: Deno.UnsafeFnPointer<
  typeof def_glMultTransposeMatrixd
>;

export function MultTransposeMatrixd(
  m: Buffer,
): void {
  fn_glMultTransposeMatrixd.call(
    bufferToFFI(m),
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

let fn_glMultiDrawElements!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawElements
>;

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

export const def_glFogCoordf = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glFogCoordf!: Deno.UnsafeFnPointer<typeof def_glFogCoordf>;

export function FogCoordf(
  coord: GLfloat,
): void {
  fn_glFogCoordf.call(
    coord,
  );
}

export const def_glFogCoordfv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glFogCoordfv!: Deno.UnsafeFnPointer<typeof def_glFogCoordfv>;

export function FogCoordfv(
  coord: Buffer,
): void {
  fn_glFogCoordfv.call(
    bufferToFFI(coord),
  );
}

export const def_glFogCoordd = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glFogCoordd!: Deno.UnsafeFnPointer<typeof def_glFogCoordd>;

export function FogCoordd(
  coord: GLdouble,
): void {
  fn_glFogCoordd.call(
    coord,
  );
}

export const def_glFogCoorddv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glFogCoorddv!: Deno.UnsafeFnPointer<typeof def_glFogCoorddv>;

export function FogCoorddv(
  coord: Buffer,
): void {
  fn_glFogCoorddv.call(
    bufferToFFI(coord),
  );
}

export const def_glFogCoordPointer = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glFogCoordPointer!: Deno.UnsafeFnPointer<typeof def_glFogCoordPointer>;

export function FogCoordPointer(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glFogCoordPointer.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glSecondaryColor3b = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glSecondaryColor3b!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3b>;

export function SecondaryColor3b(
  red: GLbyte,
  green: GLbyte,
  blue: GLbyte,
): void {
  fn_glSecondaryColor3b.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3bv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3bv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3bv
>;

export function SecondaryColor3bv(
  v: Buffer,
): void {
  fn_glSecondaryColor3bv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glSecondaryColor3d!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3d>;

export function SecondaryColor3d(
  red: GLdouble,
  green: GLdouble,
  blue: GLdouble,
): void {
  fn_glSecondaryColor3d.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3dv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3dv
>;

export function SecondaryColor3dv(
  v: Buffer,
): void {
  fn_glSecondaryColor3dv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glSecondaryColor3f!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3f>;

export function SecondaryColor3f(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
): void {
  fn_glSecondaryColor3f.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3fv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3fv
>;

export function SecondaryColor3fv(
  v: Buffer,
): void {
  fn_glSecondaryColor3fv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glSecondaryColor3i!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3i>;

export function SecondaryColor3i(
  red: GLint,
  green: GLint,
  blue: GLint,
): void {
  fn_glSecondaryColor3i.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3iv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3iv
>;

export function SecondaryColor3iv(
  v: Buffer,
): void {
  fn_glSecondaryColor3iv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glSecondaryColor3s!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3s>;

export function SecondaryColor3s(
  red: GLshort,
  green: GLshort,
  blue: GLshort,
): void {
  fn_glSecondaryColor3s.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3sv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3sv
>;

export function SecondaryColor3sv(
  v: Buffer,
): void {
  fn_glSecondaryColor3sv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3ub = {
  parameters: ["u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glSecondaryColor3ub!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3ub
>;

export function SecondaryColor3ub(
  red: GLubyte,
  green: GLubyte,
  blue: GLubyte,
): void {
  fn_glSecondaryColor3ub.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3ubv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3ubv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3ubv
>;

export function SecondaryColor3ubv(
  v: Buffer,
): void {
  fn_glSecondaryColor3ubv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glSecondaryColor3ui!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3ui
>;

export function SecondaryColor3ui(
  red: GLuint,
  green: GLuint,
  blue: GLuint,
): void {
  fn_glSecondaryColor3ui.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3uiv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3uiv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3uiv
>;

export function SecondaryColor3uiv(
  v: Buffer,
): void {
  fn_glSecondaryColor3uiv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3us = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glSecondaryColor3us!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3us
>;

export function SecondaryColor3us(
  red: GLushort,
  green: GLushort,
  blue: GLushort,
): void {
  fn_glSecondaryColor3us.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3usv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3usv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3usv
>;

export function SecondaryColor3usv(
  v: Buffer,
): void {
  fn_glSecondaryColor3usv.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColorPointer = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glSecondaryColorPointer!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColorPointer
>;

export function SecondaryColorPointer(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glSecondaryColorPointer.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glWindowPos2d = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos2d!: Deno.UnsafeFnPointer<typeof def_glWindowPos2d>;

export function WindowPos2d(
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glWindowPos2d.call(
    x,
    y,
  );
}

export const def_glWindowPos2dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2dv!: Deno.UnsafeFnPointer<typeof def_glWindowPos2dv>;

export function WindowPos2dv(
  v: Buffer,
): void {
  fn_glWindowPos2dv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2f = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos2f!: Deno.UnsafeFnPointer<typeof def_glWindowPos2f>;

export function WindowPos2f(
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glWindowPos2f.call(
    x,
    y,
  );
}

export const def_glWindowPos2fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2fv!: Deno.UnsafeFnPointer<typeof def_glWindowPos2fv>;

export function WindowPos2fv(
  v: Buffer,
): void {
  fn_glWindowPos2fv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2i = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos2i!: Deno.UnsafeFnPointer<typeof def_glWindowPos2i>;

export function WindowPos2i(
  x: GLint,
  y: GLint,
): void {
  fn_glWindowPos2i.call(
    x,
    y,
  );
}

export const def_glWindowPos2iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2iv!: Deno.UnsafeFnPointer<typeof def_glWindowPos2iv>;

export function WindowPos2iv(
  v: Buffer,
): void {
  fn_glWindowPos2iv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2s = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos2s!: Deno.UnsafeFnPointer<typeof def_glWindowPos2s>;

export function WindowPos2s(
  x: GLshort,
  y: GLshort,
): void {
  fn_glWindowPos2s.call(
    x,
    y,
  );
}

export const def_glWindowPos2sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2sv!: Deno.UnsafeFnPointer<typeof def_glWindowPos2sv>;

export function WindowPos2sv(
  v: Buffer,
): void {
  fn_glWindowPos2sv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3d = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos3d!: Deno.UnsafeFnPointer<typeof def_glWindowPos3d>;

export function WindowPos3d(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glWindowPos3d.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3dv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3dv!: Deno.UnsafeFnPointer<typeof def_glWindowPos3dv>;

export function WindowPos3dv(
  v: Buffer,
): void {
  fn_glWindowPos3dv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3f = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos3f!: Deno.UnsafeFnPointer<typeof def_glWindowPos3f>;

export function WindowPos3f(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glWindowPos3f.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3fv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3fv!: Deno.UnsafeFnPointer<typeof def_glWindowPos3fv>;

export function WindowPos3fv(
  v: Buffer,
): void {
  fn_glWindowPos3fv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3i = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos3i!: Deno.UnsafeFnPointer<typeof def_glWindowPos3i>;

export function WindowPos3i(
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glWindowPos3i.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3iv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3iv!: Deno.UnsafeFnPointer<typeof def_glWindowPos3iv>;

export function WindowPos3iv(
  v: Buffer,
): void {
  fn_glWindowPos3iv.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3s = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos3s!: Deno.UnsafeFnPointer<typeof def_glWindowPos3s>;

export function WindowPos3s(
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glWindowPos3s.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3sv = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3sv!: Deno.UnsafeFnPointer<typeof def_glWindowPos3sv>;

export function WindowPos3sv(
  v: Buffer,
): void {
  fn_glWindowPos3sv.call(
    bufferToFFI(v),
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
    size,
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

let fn_glGetVertexAttribdv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribdv
>;

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

let fn_glVertexAttrib4Nubv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4Nubv
>;

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

let fn_glVertexAttrib4Nuiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4Nuiv
>;

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

let fn_glVertexAttrib4Nusv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4Nusv
>;

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

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCullFace = new Deno.UnsafeFnPointer(proc("glCullFace"), def_glCullFace);
  fn_glFrontFace = new Deno.UnsafeFnPointer(
    proc("glFrontFace"),
    def_glFrontFace,
  );
  fn_glHint = new Deno.UnsafeFnPointer(proc("glHint"), def_glHint);
  fn_glLineWidth = new Deno.UnsafeFnPointer(
    proc("glLineWidth"),
    def_glLineWidth,
  );
  fn_glPointSize = new Deno.UnsafeFnPointer(
    proc("glPointSize"),
    def_glPointSize,
  );
  fn_glPolygonMode = new Deno.UnsafeFnPointer(
    proc("glPolygonMode"),
    def_glPolygonMode,
  );
  fn_glScissor = new Deno.UnsafeFnPointer(proc("glScissor"), def_glScissor);
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
  fn_glTexImage1D = new Deno.UnsafeFnPointer(
    proc("glTexImage1D"),
    def_glTexImage1D,
  );
  fn_glTexImage2D = new Deno.UnsafeFnPointer(
    proc("glTexImage2D"),
    def_glTexImage2D,
  );
  fn_glDrawBuffer = new Deno.UnsafeFnPointer(
    proc("glDrawBuffer"),
    def_glDrawBuffer,
  );
  fn_glClear = new Deno.UnsafeFnPointer(proc("glClear"), def_glClear);
  fn_glClearColor = new Deno.UnsafeFnPointer(
    proc("glClearColor"),
    def_glClearColor,
  );
  fn_glClearStencil = new Deno.UnsafeFnPointer(
    proc("glClearStencil"),
    def_glClearStencil,
  );
  fn_glClearDepth = new Deno.UnsafeFnPointer(
    proc("glClearDepth"),
    def_glClearDepth,
  );
  fn_glStencilMask = new Deno.UnsafeFnPointer(
    proc("glStencilMask"),
    def_glStencilMask,
  );
  fn_glColorMask = new Deno.UnsafeFnPointer(
    proc("glColorMask"),
    def_glColorMask,
  );
  fn_glDepthMask = new Deno.UnsafeFnPointer(
    proc("glDepthMask"),
    def_glDepthMask,
  );
  fn_glDisable = new Deno.UnsafeFnPointer(proc("glDisable"), def_glDisable);
  fn_glEnable = new Deno.UnsafeFnPointer(proc("glEnable"), def_glEnable);
  fn_glFinish = new Deno.UnsafeFnPointer(proc("glFinish"), def_glFinish);
  fn_glFlush = new Deno.UnsafeFnPointer(proc("glFlush"), def_glFlush);
  fn_glBlendFunc = new Deno.UnsafeFnPointer(
    proc("glBlendFunc"),
    def_glBlendFunc,
  );
  fn_glLogicOp = new Deno.UnsafeFnPointer(proc("glLogicOp"), def_glLogicOp);
  fn_glStencilFunc = new Deno.UnsafeFnPointer(
    proc("glStencilFunc"),
    def_glStencilFunc,
  );
  fn_glStencilOp = new Deno.UnsafeFnPointer(
    proc("glStencilOp"),
    def_glStencilOp,
  );
  fn_glDepthFunc = new Deno.UnsafeFnPointer(
    proc("glDepthFunc"),
    def_glDepthFunc,
  );
  fn_glPixelStoref = new Deno.UnsafeFnPointer(
    proc("glPixelStoref"),
    def_glPixelStoref,
  );
  fn_glPixelStorei = new Deno.UnsafeFnPointer(
    proc("glPixelStorei"),
    def_glPixelStorei,
  );
  fn_glReadBuffer = new Deno.UnsafeFnPointer(
    proc("glReadBuffer"),
    def_glReadBuffer,
  );
  fn_glReadPixels = new Deno.UnsafeFnPointer(
    proc("glReadPixels"),
    def_glReadPixels,
  );
  fn_glGetBooleanv = new Deno.UnsafeFnPointer(
    proc("glGetBooleanv"),
    def_glGetBooleanv,
  );
  fn_glGetDoublev = new Deno.UnsafeFnPointer(
    proc("glGetDoublev"),
    def_glGetDoublev,
  );
  fn_glGetError = new Deno.UnsafeFnPointer(proc("glGetError"), def_glGetError);
  fn_glGetFloatv = new Deno.UnsafeFnPointer(
    proc("glGetFloatv"),
    def_glGetFloatv,
  );
  fn_glGetIntegerv = new Deno.UnsafeFnPointer(
    proc("glGetIntegerv"),
    def_glGetIntegerv,
  );
  fn_glGetString = new Deno.UnsafeFnPointer(
    proc("glGetString"),
    def_glGetString,
  );
  fn_glGetTexImage = new Deno.UnsafeFnPointer(
    proc("glGetTexImage"),
    def_glGetTexImage,
  );
  fn_glGetTexParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterfv"),
    def_glGetTexParameterfv,
  );
  fn_glGetTexParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTexParameteriv"),
    def_glGetTexParameteriv,
  );
  fn_glGetTexLevelParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTexLevelParameterfv"),
    def_glGetTexLevelParameterfv,
  );
  fn_glGetTexLevelParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTexLevelParameteriv"),
    def_glGetTexLevelParameteriv,
  );
  fn_glIsEnabled = new Deno.UnsafeFnPointer(
    proc("glIsEnabled"),
    def_glIsEnabled,
  );
  fn_glDepthRange = new Deno.UnsafeFnPointer(
    proc("glDepthRange"),
    def_glDepthRange,
  );
  fn_glViewport = new Deno.UnsafeFnPointer(proc("glViewport"), def_glViewport);
  fn_glNewList = new Deno.UnsafeFnPointer(proc("glNewList"), def_glNewList);
  fn_glEndList = new Deno.UnsafeFnPointer(proc("glEndList"), def_glEndList);
  fn_glCallList = new Deno.UnsafeFnPointer(proc("glCallList"), def_glCallList);
  fn_glCallLists = new Deno.UnsafeFnPointer(
    proc("glCallLists"),
    def_glCallLists,
  );
  fn_glDeleteLists = new Deno.UnsafeFnPointer(
    proc("glDeleteLists"),
    def_glDeleteLists,
  );
  fn_glGenLists = new Deno.UnsafeFnPointer(proc("glGenLists"), def_glGenLists);
  fn_glListBase = new Deno.UnsafeFnPointer(proc("glListBase"), def_glListBase);
  fn_glBegin = new Deno.UnsafeFnPointer(proc("glBegin"), def_glBegin);
  fn_glBitmap = new Deno.UnsafeFnPointer(proc("glBitmap"), def_glBitmap);
  fn_glColor3b = new Deno.UnsafeFnPointer(proc("glColor3b"), def_glColor3b);
  fn_glColor3bv = new Deno.UnsafeFnPointer(proc("glColor3bv"), def_glColor3bv);
  fn_glColor3d = new Deno.UnsafeFnPointer(proc("glColor3d"), def_glColor3d);
  fn_glColor3dv = new Deno.UnsafeFnPointer(proc("glColor3dv"), def_glColor3dv);
  fn_glColor3f = new Deno.UnsafeFnPointer(proc("glColor3f"), def_glColor3f);
  fn_glColor3fv = new Deno.UnsafeFnPointer(proc("glColor3fv"), def_glColor3fv);
  fn_glColor3i = new Deno.UnsafeFnPointer(proc("glColor3i"), def_glColor3i);
  fn_glColor3iv = new Deno.UnsafeFnPointer(proc("glColor3iv"), def_glColor3iv);
  fn_glColor3s = new Deno.UnsafeFnPointer(proc("glColor3s"), def_glColor3s);
  fn_glColor3sv = new Deno.UnsafeFnPointer(proc("glColor3sv"), def_glColor3sv);
  fn_glColor3ub = new Deno.UnsafeFnPointer(proc("glColor3ub"), def_glColor3ub);
  fn_glColor3ubv = new Deno.UnsafeFnPointer(
    proc("glColor3ubv"),
    def_glColor3ubv,
  );
  fn_glColor3ui = new Deno.UnsafeFnPointer(proc("glColor3ui"), def_glColor3ui);
  fn_glColor3uiv = new Deno.UnsafeFnPointer(
    proc("glColor3uiv"),
    def_glColor3uiv,
  );
  fn_glColor3us = new Deno.UnsafeFnPointer(proc("glColor3us"), def_glColor3us);
  fn_glColor3usv = new Deno.UnsafeFnPointer(
    proc("glColor3usv"),
    def_glColor3usv,
  );
  fn_glColor4b = new Deno.UnsafeFnPointer(proc("glColor4b"), def_glColor4b);
  fn_glColor4bv = new Deno.UnsafeFnPointer(proc("glColor4bv"), def_glColor4bv);
  fn_glColor4d = new Deno.UnsafeFnPointer(proc("glColor4d"), def_glColor4d);
  fn_glColor4dv = new Deno.UnsafeFnPointer(proc("glColor4dv"), def_glColor4dv);
  fn_glColor4f = new Deno.UnsafeFnPointer(proc("glColor4f"), def_glColor4f);
  fn_glColor4fv = new Deno.UnsafeFnPointer(proc("glColor4fv"), def_glColor4fv);
  fn_glColor4i = new Deno.UnsafeFnPointer(proc("glColor4i"), def_glColor4i);
  fn_glColor4iv = new Deno.UnsafeFnPointer(proc("glColor4iv"), def_glColor4iv);
  fn_glColor4s = new Deno.UnsafeFnPointer(proc("glColor4s"), def_glColor4s);
  fn_glColor4sv = new Deno.UnsafeFnPointer(proc("glColor4sv"), def_glColor4sv);
  fn_glColor4ub = new Deno.UnsafeFnPointer(proc("glColor4ub"), def_glColor4ub);
  fn_glColor4ubv = new Deno.UnsafeFnPointer(
    proc("glColor4ubv"),
    def_glColor4ubv,
  );
  fn_glColor4ui = new Deno.UnsafeFnPointer(proc("glColor4ui"), def_glColor4ui);
  fn_glColor4uiv = new Deno.UnsafeFnPointer(
    proc("glColor4uiv"),
    def_glColor4uiv,
  );
  fn_glColor4us = new Deno.UnsafeFnPointer(proc("glColor4us"), def_glColor4us);
  fn_glColor4usv = new Deno.UnsafeFnPointer(
    proc("glColor4usv"),
    def_glColor4usv,
  );
  fn_glEdgeFlag = new Deno.UnsafeFnPointer(proc("glEdgeFlag"), def_glEdgeFlag);
  fn_glEdgeFlagv = new Deno.UnsafeFnPointer(
    proc("glEdgeFlagv"),
    def_glEdgeFlagv,
  );
  fn_glEnd = new Deno.UnsafeFnPointer(proc("glEnd"), def_glEnd);
  fn_glIndexd = new Deno.UnsafeFnPointer(proc("glIndexd"), def_glIndexd);
  fn_glIndexdv = new Deno.UnsafeFnPointer(proc("glIndexdv"), def_glIndexdv);
  fn_glIndexf = new Deno.UnsafeFnPointer(proc("glIndexf"), def_glIndexf);
  fn_glIndexfv = new Deno.UnsafeFnPointer(proc("glIndexfv"), def_glIndexfv);
  fn_glIndexi = new Deno.UnsafeFnPointer(proc("glIndexi"), def_glIndexi);
  fn_glIndexiv = new Deno.UnsafeFnPointer(proc("glIndexiv"), def_glIndexiv);
  fn_glIndexs = new Deno.UnsafeFnPointer(proc("glIndexs"), def_glIndexs);
  fn_glIndexsv = new Deno.UnsafeFnPointer(proc("glIndexsv"), def_glIndexsv);
  fn_glNormal3b = new Deno.UnsafeFnPointer(proc("glNormal3b"), def_glNormal3b);
  fn_glNormal3bv = new Deno.UnsafeFnPointer(
    proc("glNormal3bv"),
    def_glNormal3bv,
  );
  fn_glNormal3d = new Deno.UnsafeFnPointer(proc("glNormal3d"), def_glNormal3d);
  fn_glNormal3dv = new Deno.UnsafeFnPointer(
    proc("glNormal3dv"),
    def_glNormal3dv,
  );
  fn_glNormal3f = new Deno.UnsafeFnPointer(proc("glNormal3f"), def_glNormal3f);
  fn_glNormal3fv = new Deno.UnsafeFnPointer(
    proc("glNormal3fv"),
    def_glNormal3fv,
  );
  fn_glNormal3i = new Deno.UnsafeFnPointer(proc("glNormal3i"), def_glNormal3i);
  fn_glNormal3iv = new Deno.UnsafeFnPointer(
    proc("glNormal3iv"),
    def_glNormal3iv,
  );
  fn_glNormal3s = new Deno.UnsafeFnPointer(proc("glNormal3s"), def_glNormal3s);
  fn_glNormal3sv = new Deno.UnsafeFnPointer(
    proc("glNormal3sv"),
    def_glNormal3sv,
  );
  fn_glRasterPos2d = new Deno.UnsafeFnPointer(
    proc("glRasterPos2d"),
    def_glRasterPos2d,
  );
  fn_glRasterPos2dv = new Deno.UnsafeFnPointer(
    proc("glRasterPos2dv"),
    def_glRasterPos2dv,
  );
  fn_glRasterPos2f = new Deno.UnsafeFnPointer(
    proc("glRasterPos2f"),
    def_glRasterPos2f,
  );
  fn_glRasterPos2fv = new Deno.UnsafeFnPointer(
    proc("glRasterPos2fv"),
    def_glRasterPos2fv,
  );
  fn_glRasterPos2i = new Deno.UnsafeFnPointer(
    proc("glRasterPos2i"),
    def_glRasterPos2i,
  );
  fn_glRasterPos2iv = new Deno.UnsafeFnPointer(
    proc("glRasterPos2iv"),
    def_glRasterPos2iv,
  );
  fn_glRasterPos2s = new Deno.UnsafeFnPointer(
    proc("glRasterPos2s"),
    def_glRasterPos2s,
  );
  fn_glRasterPos2sv = new Deno.UnsafeFnPointer(
    proc("glRasterPos2sv"),
    def_glRasterPos2sv,
  );
  fn_glRasterPos3d = new Deno.UnsafeFnPointer(
    proc("glRasterPos3d"),
    def_glRasterPos3d,
  );
  fn_glRasterPos3dv = new Deno.UnsafeFnPointer(
    proc("glRasterPos3dv"),
    def_glRasterPos3dv,
  );
  fn_glRasterPos3f = new Deno.UnsafeFnPointer(
    proc("glRasterPos3f"),
    def_glRasterPos3f,
  );
  fn_glRasterPos3fv = new Deno.UnsafeFnPointer(
    proc("glRasterPos3fv"),
    def_glRasterPos3fv,
  );
  fn_glRasterPos3i = new Deno.UnsafeFnPointer(
    proc("glRasterPos3i"),
    def_glRasterPos3i,
  );
  fn_glRasterPos3iv = new Deno.UnsafeFnPointer(
    proc("glRasterPos3iv"),
    def_glRasterPos3iv,
  );
  fn_glRasterPos3s = new Deno.UnsafeFnPointer(
    proc("glRasterPos3s"),
    def_glRasterPos3s,
  );
  fn_glRasterPos3sv = new Deno.UnsafeFnPointer(
    proc("glRasterPos3sv"),
    def_glRasterPos3sv,
  );
  fn_glRasterPos4d = new Deno.UnsafeFnPointer(
    proc("glRasterPos4d"),
    def_glRasterPos4d,
  );
  fn_glRasterPos4dv = new Deno.UnsafeFnPointer(
    proc("glRasterPos4dv"),
    def_glRasterPos4dv,
  );
  fn_glRasterPos4f = new Deno.UnsafeFnPointer(
    proc("glRasterPos4f"),
    def_glRasterPos4f,
  );
  fn_glRasterPos4fv = new Deno.UnsafeFnPointer(
    proc("glRasterPos4fv"),
    def_glRasterPos4fv,
  );
  fn_glRasterPos4i = new Deno.UnsafeFnPointer(
    proc("glRasterPos4i"),
    def_glRasterPos4i,
  );
  fn_glRasterPos4iv = new Deno.UnsafeFnPointer(
    proc("glRasterPos4iv"),
    def_glRasterPos4iv,
  );
  fn_glRasterPos4s = new Deno.UnsafeFnPointer(
    proc("glRasterPos4s"),
    def_glRasterPos4s,
  );
  fn_glRasterPos4sv = new Deno.UnsafeFnPointer(
    proc("glRasterPos4sv"),
    def_glRasterPos4sv,
  );
  fn_glRectd = new Deno.UnsafeFnPointer(proc("glRectd"), def_glRectd);
  fn_glRectdv = new Deno.UnsafeFnPointer(proc("glRectdv"), def_glRectdv);
  fn_glRectf = new Deno.UnsafeFnPointer(proc("glRectf"), def_glRectf);
  fn_glRectfv = new Deno.UnsafeFnPointer(proc("glRectfv"), def_glRectfv);
  fn_glRecti = new Deno.UnsafeFnPointer(proc("glRecti"), def_glRecti);
  fn_glRectiv = new Deno.UnsafeFnPointer(proc("glRectiv"), def_glRectiv);
  fn_glRects = new Deno.UnsafeFnPointer(proc("glRects"), def_glRects);
  fn_glRectsv = new Deno.UnsafeFnPointer(proc("glRectsv"), def_glRectsv);
  fn_glTexCoord1d = new Deno.UnsafeFnPointer(
    proc("glTexCoord1d"),
    def_glTexCoord1d,
  );
  fn_glTexCoord1dv = new Deno.UnsafeFnPointer(
    proc("glTexCoord1dv"),
    def_glTexCoord1dv,
  );
  fn_glTexCoord1f = new Deno.UnsafeFnPointer(
    proc("glTexCoord1f"),
    def_glTexCoord1f,
  );
  fn_glTexCoord1fv = new Deno.UnsafeFnPointer(
    proc("glTexCoord1fv"),
    def_glTexCoord1fv,
  );
  fn_glTexCoord1i = new Deno.UnsafeFnPointer(
    proc("glTexCoord1i"),
    def_glTexCoord1i,
  );
  fn_glTexCoord1iv = new Deno.UnsafeFnPointer(
    proc("glTexCoord1iv"),
    def_glTexCoord1iv,
  );
  fn_glTexCoord1s = new Deno.UnsafeFnPointer(
    proc("glTexCoord1s"),
    def_glTexCoord1s,
  );
  fn_glTexCoord1sv = new Deno.UnsafeFnPointer(
    proc("glTexCoord1sv"),
    def_glTexCoord1sv,
  );
  fn_glTexCoord2d = new Deno.UnsafeFnPointer(
    proc("glTexCoord2d"),
    def_glTexCoord2d,
  );
  fn_glTexCoord2dv = new Deno.UnsafeFnPointer(
    proc("glTexCoord2dv"),
    def_glTexCoord2dv,
  );
  fn_glTexCoord2f = new Deno.UnsafeFnPointer(
    proc("glTexCoord2f"),
    def_glTexCoord2f,
  );
  fn_glTexCoord2fv = new Deno.UnsafeFnPointer(
    proc("glTexCoord2fv"),
    def_glTexCoord2fv,
  );
  fn_glTexCoord2i = new Deno.UnsafeFnPointer(
    proc("glTexCoord2i"),
    def_glTexCoord2i,
  );
  fn_glTexCoord2iv = new Deno.UnsafeFnPointer(
    proc("glTexCoord2iv"),
    def_glTexCoord2iv,
  );
  fn_glTexCoord2s = new Deno.UnsafeFnPointer(
    proc("glTexCoord2s"),
    def_glTexCoord2s,
  );
  fn_glTexCoord2sv = new Deno.UnsafeFnPointer(
    proc("glTexCoord2sv"),
    def_glTexCoord2sv,
  );
  fn_glTexCoord3d = new Deno.UnsafeFnPointer(
    proc("glTexCoord3d"),
    def_glTexCoord3d,
  );
  fn_glTexCoord3dv = new Deno.UnsafeFnPointer(
    proc("glTexCoord3dv"),
    def_glTexCoord3dv,
  );
  fn_glTexCoord3f = new Deno.UnsafeFnPointer(
    proc("glTexCoord3f"),
    def_glTexCoord3f,
  );
  fn_glTexCoord3fv = new Deno.UnsafeFnPointer(
    proc("glTexCoord3fv"),
    def_glTexCoord3fv,
  );
  fn_glTexCoord3i = new Deno.UnsafeFnPointer(
    proc("glTexCoord3i"),
    def_glTexCoord3i,
  );
  fn_glTexCoord3iv = new Deno.UnsafeFnPointer(
    proc("glTexCoord3iv"),
    def_glTexCoord3iv,
  );
  fn_glTexCoord3s = new Deno.UnsafeFnPointer(
    proc("glTexCoord3s"),
    def_glTexCoord3s,
  );
  fn_glTexCoord3sv = new Deno.UnsafeFnPointer(
    proc("glTexCoord3sv"),
    def_glTexCoord3sv,
  );
  fn_glTexCoord4d = new Deno.UnsafeFnPointer(
    proc("glTexCoord4d"),
    def_glTexCoord4d,
  );
  fn_glTexCoord4dv = new Deno.UnsafeFnPointer(
    proc("glTexCoord4dv"),
    def_glTexCoord4dv,
  );
  fn_glTexCoord4f = new Deno.UnsafeFnPointer(
    proc("glTexCoord4f"),
    def_glTexCoord4f,
  );
  fn_glTexCoord4fv = new Deno.UnsafeFnPointer(
    proc("glTexCoord4fv"),
    def_glTexCoord4fv,
  );
  fn_glTexCoord4i = new Deno.UnsafeFnPointer(
    proc("glTexCoord4i"),
    def_glTexCoord4i,
  );
  fn_glTexCoord4iv = new Deno.UnsafeFnPointer(
    proc("glTexCoord4iv"),
    def_glTexCoord4iv,
  );
  fn_glTexCoord4s = new Deno.UnsafeFnPointer(
    proc("glTexCoord4s"),
    def_glTexCoord4s,
  );
  fn_glTexCoord4sv = new Deno.UnsafeFnPointer(
    proc("glTexCoord4sv"),
    def_glTexCoord4sv,
  );
  fn_glVertex2d = new Deno.UnsafeFnPointer(proc("glVertex2d"), def_glVertex2d);
  fn_glVertex2dv = new Deno.UnsafeFnPointer(
    proc("glVertex2dv"),
    def_glVertex2dv,
  );
  fn_glVertex2f = new Deno.UnsafeFnPointer(proc("glVertex2f"), def_glVertex2f);
  fn_glVertex2fv = new Deno.UnsafeFnPointer(
    proc("glVertex2fv"),
    def_glVertex2fv,
  );
  fn_glVertex2i = new Deno.UnsafeFnPointer(proc("glVertex2i"), def_glVertex2i);
  fn_glVertex2iv = new Deno.UnsafeFnPointer(
    proc("glVertex2iv"),
    def_glVertex2iv,
  );
  fn_glVertex2s = new Deno.UnsafeFnPointer(proc("glVertex2s"), def_glVertex2s);
  fn_glVertex2sv = new Deno.UnsafeFnPointer(
    proc("glVertex2sv"),
    def_glVertex2sv,
  );
  fn_glVertex3d = new Deno.UnsafeFnPointer(proc("glVertex3d"), def_glVertex3d);
  fn_glVertex3dv = new Deno.UnsafeFnPointer(
    proc("glVertex3dv"),
    def_glVertex3dv,
  );
  fn_glVertex3f = new Deno.UnsafeFnPointer(proc("glVertex3f"), def_glVertex3f);
  fn_glVertex3fv = new Deno.UnsafeFnPointer(
    proc("glVertex3fv"),
    def_glVertex3fv,
  );
  fn_glVertex3i = new Deno.UnsafeFnPointer(proc("glVertex3i"), def_glVertex3i);
  fn_glVertex3iv = new Deno.UnsafeFnPointer(
    proc("glVertex3iv"),
    def_glVertex3iv,
  );
  fn_glVertex3s = new Deno.UnsafeFnPointer(proc("glVertex3s"), def_glVertex3s);
  fn_glVertex3sv = new Deno.UnsafeFnPointer(
    proc("glVertex3sv"),
    def_glVertex3sv,
  );
  fn_glVertex4d = new Deno.UnsafeFnPointer(proc("glVertex4d"), def_glVertex4d);
  fn_glVertex4dv = new Deno.UnsafeFnPointer(
    proc("glVertex4dv"),
    def_glVertex4dv,
  );
  fn_glVertex4f = new Deno.UnsafeFnPointer(proc("glVertex4f"), def_glVertex4f);
  fn_glVertex4fv = new Deno.UnsafeFnPointer(
    proc("glVertex4fv"),
    def_glVertex4fv,
  );
  fn_glVertex4i = new Deno.UnsafeFnPointer(proc("glVertex4i"), def_glVertex4i);
  fn_glVertex4iv = new Deno.UnsafeFnPointer(
    proc("glVertex4iv"),
    def_glVertex4iv,
  );
  fn_glVertex4s = new Deno.UnsafeFnPointer(proc("glVertex4s"), def_glVertex4s);
  fn_glVertex4sv = new Deno.UnsafeFnPointer(
    proc("glVertex4sv"),
    def_glVertex4sv,
  );
  fn_glClipPlane = new Deno.UnsafeFnPointer(
    proc("glClipPlane"),
    def_glClipPlane,
  );
  fn_glColorMaterial = new Deno.UnsafeFnPointer(
    proc("glColorMaterial"),
    def_glColorMaterial,
  );
  fn_glFogf = new Deno.UnsafeFnPointer(proc("glFogf"), def_glFogf);
  fn_glFogfv = new Deno.UnsafeFnPointer(proc("glFogfv"), def_glFogfv);
  fn_glFogi = new Deno.UnsafeFnPointer(proc("glFogi"), def_glFogi);
  fn_glFogiv = new Deno.UnsafeFnPointer(proc("glFogiv"), def_glFogiv);
  fn_glLightf = new Deno.UnsafeFnPointer(proc("glLightf"), def_glLightf);
  fn_glLightfv = new Deno.UnsafeFnPointer(proc("glLightfv"), def_glLightfv);
  fn_glLighti = new Deno.UnsafeFnPointer(proc("glLighti"), def_glLighti);
  fn_glLightiv = new Deno.UnsafeFnPointer(proc("glLightiv"), def_glLightiv);
  fn_glLightModelf = new Deno.UnsafeFnPointer(
    proc("glLightModelf"),
    def_glLightModelf,
  );
  fn_glLightModelfv = new Deno.UnsafeFnPointer(
    proc("glLightModelfv"),
    def_glLightModelfv,
  );
  fn_glLightModeli = new Deno.UnsafeFnPointer(
    proc("glLightModeli"),
    def_glLightModeli,
  );
  fn_glLightModeliv = new Deno.UnsafeFnPointer(
    proc("glLightModeliv"),
    def_glLightModeliv,
  );
  fn_glLineStipple = new Deno.UnsafeFnPointer(
    proc("glLineStipple"),
    def_glLineStipple,
  );
  fn_glMaterialf = new Deno.UnsafeFnPointer(
    proc("glMaterialf"),
    def_glMaterialf,
  );
  fn_glMaterialfv = new Deno.UnsafeFnPointer(
    proc("glMaterialfv"),
    def_glMaterialfv,
  );
  fn_glMateriali = new Deno.UnsafeFnPointer(
    proc("glMateriali"),
    def_glMateriali,
  );
  fn_glMaterialiv = new Deno.UnsafeFnPointer(
    proc("glMaterialiv"),
    def_glMaterialiv,
  );
  fn_glPolygonStipple = new Deno.UnsafeFnPointer(
    proc("glPolygonStipple"),
    def_glPolygonStipple,
  );
  fn_glShadeModel = new Deno.UnsafeFnPointer(
    proc("glShadeModel"),
    def_glShadeModel,
  );
  fn_glTexEnvf = new Deno.UnsafeFnPointer(proc("glTexEnvf"), def_glTexEnvf);
  fn_glTexEnvfv = new Deno.UnsafeFnPointer(proc("glTexEnvfv"), def_glTexEnvfv);
  fn_glTexEnvi = new Deno.UnsafeFnPointer(proc("glTexEnvi"), def_glTexEnvi);
  fn_glTexEnviv = new Deno.UnsafeFnPointer(proc("glTexEnviv"), def_glTexEnviv);
  fn_glTexGend = new Deno.UnsafeFnPointer(proc("glTexGend"), def_glTexGend);
  fn_glTexGendv = new Deno.UnsafeFnPointer(proc("glTexGendv"), def_glTexGendv);
  fn_glTexGenf = new Deno.UnsafeFnPointer(proc("glTexGenf"), def_glTexGenf);
  fn_glTexGenfv = new Deno.UnsafeFnPointer(proc("glTexGenfv"), def_glTexGenfv);
  fn_glTexGeni = new Deno.UnsafeFnPointer(proc("glTexGeni"), def_glTexGeni);
  fn_glTexGeniv = new Deno.UnsafeFnPointer(proc("glTexGeniv"), def_glTexGeniv);
  fn_glFeedbackBuffer = new Deno.UnsafeFnPointer(
    proc("glFeedbackBuffer"),
    def_glFeedbackBuffer,
  );
  fn_glSelectBuffer = new Deno.UnsafeFnPointer(
    proc("glSelectBuffer"),
    def_glSelectBuffer,
  );
  fn_glRenderMode = new Deno.UnsafeFnPointer(
    proc("glRenderMode"),
    def_glRenderMode,
  );
  fn_glInitNames = new Deno.UnsafeFnPointer(
    proc("glInitNames"),
    def_glInitNames,
  );
  fn_glLoadName = new Deno.UnsafeFnPointer(proc("glLoadName"), def_glLoadName);
  fn_glPassThrough = new Deno.UnsafeFnPointer(
    proc("glPassThrough"),
    def_glPassThrough,
  );
  fn_glPopName = new Deno.UnsafeFnPointer(proc("glPopName"), def_glPopName);
  fn_glPushName = new Deno.UnsafeFnPointer(proc("glPushName"), def_glPushName);
  fn_glClearAccum = new Deno.UnsafeFnPointer(
    proc("glClearAccum"),
    def_glClearAccum,
  );
  fn_glClearIndex = new Deno.UnsafeFnPointer(
    proc("glClearIndex"),
    def_glClearIndex,
  );
  fn_glIndexMask = new Deno.UnsafeFnPointer(
    proc("glIndexMask"),
    def_glIndexMask,
  );
  fn_glAccum = new Deno.UnsafeFnPointer(proc("glAccum"), def_glAccum);
  fn_glPopAttrib = new Deno.UnsafeFnPointer(
    proc("glPopAttrib"),
    def_glPopAttrib,
  );
  fn_glPushAttrib = new Deno.UnsafeFnPointer(
    proc("glPushAttrib"),
    def_glPushAttrib,
  );
  fn_glMap1d = new Deno.UnsafeFnPointer(proc("glMap1d"), def_glMap1d);
  fn_glMap1f = new Deno.UnsafeFnPointer(proc("glMap1f"), def_glMap1f);
  fn_glMap2d = new Deno.UnsafeFnPointer(proc("glMap2d"), def_glMap2d);
  fn_glMap2f = new Deno.UnsafeFnPointer(proc("glMap2f"), def_glMap2f);
  fn_glMapGrid1d = new Deno.UnsafeFnPointer(
    proc("glMapGrid1d"),
    def_glMapGrid1d,
  );
  fn_glMapGrid1f = new Deno.UnsafeFnPointer(
    proc("glMapGrid1f"),
    def_glMapGrid1f,
  );
  fn_glMapGrid2d = new Deno.UnsafeFnPointer(
    proc("glMapGrid2d"),
    def_glMapGrid2d,
  );
  fn_glMapGrid2f = new Deno.UnsafeFnPointer(
    proc("glMapGrid2f"),
    def_glMapGrid2f,
  );
  fn_glEvalCoord1d = new Deno.UnsafeFnPointer(
    proc("glEvalCoord1d"),
    def_glEvalCoord1d,
  );
  fn_glEvalCoord1dv = new Deno.UnsafeFnPointer(
    proc("glEvalCoord1dv"),
    def_glEvalCoord1dv,
  );
  fn_glEvalCoord1f = new Deno.UnsafeFnPointer(
    proc("glEvalCoord1f"),
    def_glEvalCoord1f,
  );
  fn_glEvalCoord1fv = new Deno.UnsafeFnPointer(
    proc("glEvalCoord1fv"),
    def_glEvalCoord1fv,
  );
  fn_glEvalCoord2d = new Deno.UnsafeFnPointer(
    proc("glEvalCoord2d"),
    def_glEvalCoord2d,
  );
  fn_glEvalCoord2dv = new Deno.UnsafeFnPointer(
    proc("glEvalCoord2dv"),
    def_glEvalCoord2dv,
  );
  fn_glEvalCoord2f = new Deno.UnsafeFnPointer(
    proc("glEvalCoord2f"),
    def_glEvalCoord2f,
  );
  fn_glEvalCoord2fv = new Deno.UnsafeFnPointer(
    proc("glEvalCoord2fv"),
    def_glEvalCoord2fv,
  );
  fn_glEvalMesh1 = new Deno.UnsafeFnPointer(
    proc("glEvalMesh1"),
    def_glEvalMesh1,
  );
  fn_glEvalPoint1 = new Deno.UnsafeFnPointer(
    proc("glEvalPoint1"),
    def_glEvalPoint1,
  );
  fn_glEvalMesh2 = new Deno.UnsafeFnPointer(
    proc("glEvalMesh2"),
    def_glEvalMesh2,
  );
  fn_glEvalPoint2 = new Deno.UnsafeFnPointer(
    proc("glEvalPoint2"),
    def_glEvalPoint2,
  );
  fn_glAlphaFunc = new Deno.UnsafeFnPointer(
    proc("glAlphaFunc"),
    def_glAlphaFunc,
  );
  fn_glPixelZoom = new Deno.UnsafeFnPointer(
    proc("glPixelZoom"),
    def_glPixelZoom,
  );
  fn_glPixelTransferf = new Deno.UnsafeFnPointer(
    proc("glPixelTransferf"),
    def_glPixelTransferf,
  );
  fn_glPixelTransferi = new Deno.UnsafeFnPointer(
    proc("glPixelTransferi"),
    def_glPixelTransferi,
  );
  fn_glPixelMapfv = new Deno.UnsafeFnPointer(
    proc("glPixelMapfv"),
    def_glPixelMapfv,
  );
  fn_glPixelMapuiv = new Deno.UnsafeFnPointer(
    proc("glPixelMapuiv"),
    def_glPixelMapuiv,
  );
  fn_glPixelMapusv = new Deno.UnsafeFnPointer(
    proc("glPixelMapusv"),
    def_glPixelMapusv,
  );
  fn_glCopyPixels = new Deno.UnsafeFnPointer(
    proc("glCopyPixels"),
    def_glCopyPixels,
  );
  fn_glDrawPixels = new Deno.UnsafeFnPointer(
    proc("glDrawPixels"),
    def_glDrawPixels,
  );
  fn_glGetClipPlane = new Deno.UnsafeFnPointer(
    proc("glGetClipPlane"),
    def_glGetClipPlane,
  );
  fn_glGetLightfv = new Deno.UnsafeFnPointer(
    proc("glGetLightfv"),
    def_glGetLightfv,
  );
  fn_glGetLightiv = new Deno.UnsafeFnPointer(
    proc("glGetLightiv"),
    def_glGetLightiv,
  );
  fn_glGetMapdv = new Deno.UnsafeFnPointer(proc("glGetMapdv"), def_glGetMapdv);
  fn_glGetMapfv = new Deno.UnsafeFnPointer(proc("glGetMapfv"), def_glGetMapfv);
  fn_glGetMapiv = new Deno.UnsafeFnPointer(proc("glGetMapiv"), def_glGetMapiv);
  fn_glGetMaterialfv = new Deno.UnsafeFnPointer(
    proc("glGetMaterialfv"),
    def_glGetMaterialfv,
  );
  fn_glGetMaterialiv = new Deno.UnsafeFnPointer(
    proc("glGetMaterialiv"),
    def_glGetMaterialiv,
  );
  fn_glGetPixelMapfv = new Deno.UnsafeFnPointer(
    proc("glGetPixelMapfv"),
    def_glGetPixelMapfv,
  );
  fn_glGetPixelMapuiv = new Deno.UnsafeFnPointer(
    proc("glGetPixelMapuiv"),
    def_glGetPixelMapuiv,
  );
  fn_glGetPixelMapusv = new Deno.UnsafeFnPointer(
    proc("glGetPixelMapusv"),
    def_glGetPixelMapusv,
  );
  fn_glGetPolygonStipple = new Deno.UnsafeFnPointer(
    proc("glGetPolygonStipple"),
    def_glGetPolygonStipple,
  );
  fn_glGetTexEnvfv = new Deno.UnsafeFnPointer(
    proc("glGetTexEnvfv"),
    def_glGetTexEnvfv,
  );
  fn_glGetTexEnviv = new Deno.UnsafeFnPointer(
    proc("glGetTexEnviv"),
    def_glGetTexEnviv,
  );
  fn_glGetTexGendv = new Deno.UnsafeFnPointer(
    proc("glGetTexGendv"),
    def_glGetTexGendv,
  );
  fn_glGetTexGenfv = new Deno.UnsafeFnPointer(
    proc("glGetTexGenfv"),
    def_glGetTexGenfv,
  );
  fn_glGetTexGeniv = new Deno.UnsafeFnPointer(
    proc("glGetTexGeniv"),
    def_glGetTexGeniv,
  );
  fn_glIsList = new Deno.UnsafeFnPointer(proc("glIsList"), def_glIsList);
  fn_glFrustum = new Deno.UnsafeFnPointer(proc("glFrustum"), def_glFrustum);
  fn_glLoadIdentity = new Deno.UnsafeFnPointer(
    proc("glLoadIdentity"),
    def_glLoadIdentity,
  );
  fn_glLoadMatrixf = new Deno.UnsafeFnPointer(
    proc("glLoadMatrixf"),
    def_glLoadMatrixf,
  );
  fn_glLoadMatrixd = new Deno.UnsafeFnPointer(
    proc("glLoadMatrixd"),
    def_glLoadMatrixd,
  );
  fn_glMatrixMode = new Deno.UnsafeFnPointer(
    proc("glMatrixMode"),
    def_glMatrixMode,
  );
  fn_glMultMatrixf = new Deno.UnsafeFnPointer(
    proc("glMultMatrixf"),
    def_glMultMatrixf,
  );
  fn_glMultMatrixd = new Deno.UnsafeFnPointer(
    proc("glMultMatrixd"),
    def_glMultMatrixd,
  );
  fn_glOrtho = new Deno.UnsafeFnPointer(proc("glOrtho"), def_glOrtho);
  fn_glPopMatrix = new Deno.UnsafeFnPointer(
    proc("glPopMatrix"),
    def_glPopMatrix,
  );
  fn_glPushMatrix = new Deno.UnsafeFnPointer(
    proc("glPushMatrix"),
    def_glPushMatrix,
  );
  fn_glRotated = new Deno.UnsafeFnPointer(proc("glRotated"), def_glRotated);
  fn_glRotatef = new Deno.UnsafeFnPointer(proc("glRotatef"), def_glRotatef);
  fn_glScaled = new Deno.UnsafeFnPointer(proc("glScaled"), def_glScaled);
  fn_glScalef = new Deno.UnsafeFnPointer(proc("glScalef"), def_glScalef);
  fn_glTranslated = new Deno.UnsafeFnPointer(
    proc("glTranslated"),
    def_glTranslated,
  );
  fn_glTranslatef = new Deno.UnsafeFnPointer(
    proc("glTranslatef"),
    def_glTranslatef,
  );
  fn_glDrawArrays = new Deno.UnsafeFnPointer(
    proc("glDrawArrays"),
    def_glDrawArrays,
  );
  fn_glDrawElements = new Deno.UnsafeFnPointer(
    proc("glDrawElements"),
    def_glDrawElements,
  );
  fn_glGetPointerv = new Deno.UnsafeFnPointer(
    proc("glGetPointerv"),
    def_glGetPointerv,
  );
  fn_glPolygonOffset = new Deno.UnsafeFnPointer(
    proc("glPolygonOffset"),
    def_glPolygonOffset,
  );
  fn_glCopyTexImage1D = new Deno.UnsafeFnPointer(
    proc("glCopyTexImage1D"),
    def_glCopyTexImage1D,
  );
  fn_glCopyTexImage2D = new Deno.UnsafeFnPointer(
    proc("glCopyTexImage2D"),
    def_glCopyTexImage2D,
  );
  fn_glCopyTexSubImage1D = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage1D"),
    def_glCopyTexSubImage1D,
  );
  fn_glCopyTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage2D"),
    def_glCopyTexSubImage2D,
  );
  fn_glTexSubImage1D = new Deno.UnsafeFnPointer(
    proc("glTexSubImage1D"),
    def_glTexSubImage1D,
  );
  fn_glTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glTexSubImage2D"),
    def_glTexSubImage2D,
  );
  fn_glBindTexture = new Deno.UnsafeFnPointer(
    proc("glBindTexture"),
    def_glBindTexture,
  );
  fn_glDeleteTextures = new Deno.UnsafeFnPointer(
    proc("glDeleteTextures"),
    def_glDeleteTextures,
  );
  fn_glGenTextures = new Deno.UnsafeFnPointer(
    proc("glGenTextures"),
    def_glGenTextures,
  );
  fn_glIsTexture = new Deno.UnsafeFnPointer(
    proc("glIsTexture"),
    def_glIsTexture,
  );
  fn_glArrayElement = new Deno.UnsafeFnPointer(
    proc("glArrayElement"),
    def_glArrayElement,
  );
  fn_glColorPointer = new Deno.UnsafeFnPointer(
    proc("glColorPointer"),
    def_glColorPointer,
  );
  fn_glDisableClientState = new Deno.UnsafeFnPointer(
    proc("glDisableClientState"),
    def_glDisableClientState,
  );
  fn_glEdgeFlagPointer = new Deno.UnsafeFnPointer(
    proc("glEdgeFlagPointer"),
    def_glEdgeFlagPointer,
  );
  fn_glEnableClientState = new Deno.UnsafeFnPointer(
    proc("glEnableClientState"),
    def_glEnableClientState,
  );
  fn_glIndexPointer = new Deno.UnsafeFnPointer(
    proc("glIndexPointer"),
    def_glIndexPointer,
  );
  fn_glInterleavedArrays = new Deno.UnsafeFnPointer(
    proc("glInterleavedArrays"),
    def_glInterleavedArrays,
  );
  fn_glNormalPointer = new Deno.UnsafeFnPointer(
    proc("glNormalPointer"),
    def_glNormalPointer,
  );
  fn_glTexCoordPointer = new Deno.UnsafeFnPointer(
    proc("glTexCoordPointer"),
    def_glTexCoordPointer,
  );
  fn_glVertexPointer = new Deno.UnsafeFnPointer(
    proc("glVertexPointer"),
    def_glVertexPointer,
  );
  fn_glAreTexturesResident = new Deno.UnsafeFnPointer(
    proc("glAreTexturesResident"),
    def_glAreTexturesResident,
  );
  fn_glPrioritizeTextures = new Deno.UnsafeFnPointer(
    proc("glPrioritizeTextures"),
    def_glPrioritizeTextures,
  );
  fn_glIndexub = new Deno.UnsafeFnPointer(proc("glIndexub"), def_glIndexub);
  fn_glIndexubv = new Deno.UnsafeFnPointer(proc("glIndexubv"), def_glIndexubv);
  fn_glPopClientAttrib = new Deno.UnsafeFnPointer(
    proc("glPopClientAttrib"),
    def_glPopClientAttrib,
  );
  fn_glPushClientAttrib = new Deno.UnsafeFnPointer(
    proc("glPushClientAttrib"),
    def_glPushClientAttrib,
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
  fn_glActiveTexture = new Deno.UnsafeFnPointer(
    proc("glActiveTexture"),
    def_glActiveTexture,
  );
  fn_glSampleCoverage = new Deno.UnsafeFnPointer(
    proc("glSampleCoverage"),
    def_glSampleCoverage,
  );
  fn_glCompressedTexImage3D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage3D"),
    def_glCompressedTexImage3D,
  );
  fn_glCompressedTexImage2D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage2D"),
    def_glCompressedTexImage2D,
  );
  fn_glCompressedTexImage1D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage1D"),
    def_glCompressedTexImage1D,
  );
  fn_glCompressedTexSubImage3D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage3D"),
    def_glCompressedTexSubImage3D,
  );
  fn_glCompressedTexSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage2D"),
    def_glCompressedTexSubImage2D,
  );
  fn_glCompressedTexSubImage1D = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage1D"),
    def_glCompressedTexSubImage1D,
  );
  fn_glGetCompressedTexImage = new Deno.UnsafeFnPointer(
    proc("glGetCompressedTexImage"),
    def_glGetCompressedTexImage,
  );
  fn_glClientActiveTexture = new Deno.UnsafeFnPointer(
    proc("glClientActiveTexture"),
    def_glClientActiveTexture,
  );
  fn_glMultiTexCoord1d = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1d"),
    def_glMultiTexCoord1d,
  );
  fn_glMultiTexCoord1dv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1dv"),
    def_glMultiTexCoord1dv,
  );
  fn_glMultiTexCoord1f = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1f"),
    def_glMultiTexCoord1f,
  );
  fn_glMultiTexCoord1fv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1fv"),
    def_glMultiTexCoord1fv,
  );
  fn_glMultiTexCoord1i = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1i"),
    def_glMultiTexCoord1i,
  );
  fn_glMultiTexCoord1iv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1iv"),
    def_glMultiTexCoord1iv,
  );
  fn_glMultiTexCoord1s = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1s"),
    def_glMultiTexCoord1s,
  );
  fn_glMultiTexCoord1sv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1sv"),
    def_glMultiTexCoord1sv,
  );
  fn_glMultiTexCoord2d = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2d"),
    def_glMultiTexCoord2d,
  );
  fn_glMultiTexCoord2dv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2dv"),
    def_glMultiTexCoord2dv,
  );
  fn_glMultiTexCoord2f = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2f"),
    def_glMultiTexCoord2f,
  );
  fn_glMultiTexCoord2fv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2fv"),
    def_glMultiTexCoord2fv,
  );
  fn_glMultiTexCoord2i = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2i"),
    def_glMultiTexCoord2i,
  );
  fn_glMultiTexCoord2iv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2iv"),
    def_glMultiTexCoord2iv,
  );
  fn_glMultiTexCoord2s = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2s"),
    def_glMultiTexCoord2s,
  );
  fn_glMultiTexCoord2sv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2sv"),
    def_glMultiTexCoord2sv,
  );
  fn_glMultiTexCoord3d = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3d"),
    def_glMultiTexCoord3d,
  );
  fn_glMultiTexCoord3dv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3dv"),
    def_glMultiTexCoord3dv,
  );
  fn_glMultiTexCoord3f = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3f"),
    def_glMultiTexCoord3f,
  );
  fn_glMultiTexCoord3fv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3fv"),
    def_glMultiTexCoord3fv,
  );
  fn_glMultiTexCoord3i = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3i"),
    def_glMultiTexCoord3i,
  );
  fn_glMultiTexCoord3iv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3iv"),
    def_glMultiTexCoord3iv,
  );
  fn_glMultiTexCoord3s = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3s"),
    def_glMultiTexCoord3s,
  );
  fn_glMultiTexCoord3sv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3sv"),
    def_glMultiTexCoord3sv,
  );
  fn_glMultiTexCoord4d = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4d"),
    def_glMultiTexCoord4d,
  );
  fn_glMultiTexCoord4dv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4dv"),
    def_glMultiTexCoord4dv,
  );
  fn_glMultiTexCoord4f = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4f"),
    def_glMultiTexCoord4f,
  );
  fn_glMultiTexCoord4fv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4fv"),
    def_glMultiTexCoord4fv,
  );
  fn_glMultiTexCoord4i = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4i"),
    def_glMultiTexCoord4i,
  );
  fn_glMultiTexCoord4iv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4iv"),
    def_glMultiTexCoord4iv,
  );
  fn_glMultiTexCoord4s = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4s"),
    def_glMultiTexCoord4s,
  );
  fn_glMultiTexCoord4sv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4sv"),
    def_glMultiTexCoord4sv,
  );
  fn_glLoadTransposeMatrixf = new Deno.UnsafeFnPointer(
    proc("glLoadTransposeMatrixf"),
    def_glLoadTransposeMatrixf,
  );
  fn_glLoadTransposeMatrixd = new Deno.UnsafeFnPointer(
    proc("glLoadTransposeMatrixd"),
    def_glLoadTransposeMatrixd,
  );
  fn_glMultTransposeMatrixf = new Deno.UnsafeFnPointer(
    proc("glMultTransposeMatrixf"),
    def_glMultTransposeMatrixf,
  );
  fn_glMultTransposeMatrixd = new Deno.UnsafeFnPointer(
    proc("glMultTransposeMatrixd"),
    def_glMultTransposeMatrixd,
  );
  fn_glBlendFuncSeparate = new Deno.UnsafeFnPointer(
    proc("glBlendFuncSeparate"),
    def_glBlendFuncSeparate,
  );
  fn_glMultiDrawArrays = new Deno.UnsafeFnPointer(
    proc("glMultiDrawArrays"),
    def_glMultiDrawArrays,
  );
  fn_glMultiDrawElements = new Deno.UnsafeFnPointer(
    proc("glMultiDrawElements"),
    def_glMultiDrawElements,
  );
  fn_glPointParameterf = new Deno.UnsafeFnPointer(
    proc("glPointParameterf"),
    def_glPointParameterf,
  );
  fn_glPointParameterfv = new Deno.UnsafeFnPointer(
    proc("glPointParameterfv"),
    def_glPointParameterfv,
  );
  fn_glPointParameteri = new Deno.UnsafeFnPointer(
    proc("glPointParameteri"),
    def_glPointParameteri,
  );
  fn_glPointParameteriv = new Deno.UnsafeFnPointer(
    proc("glPointParameteriv"),
    def_glPointParameteriv,
  );
  fn_glFogCoordf = new Deno.UnsafeFnPointer(
    proc("glFogCoordf"),
    def_glFogCoordf,
  );
  fn_glFogCoordfv = new Deno.UnsafeFnPointer(
    proc("glFogCoordfv"),
    def_glFogCoordfv,
  );
  fn_glFogCoordd = new Deno.UnsafeFnPointer(
    proc("glFogCoordd"),
    def_glFogCoordd,
  );
  fn_glFogCoorddv = new Deno.UnsafeFnPointer(
    proc("glFogCoorddv"),
    def_glFogCoorddv,
  );
  fn_glFogCoordPointer = new Deno.UnsafeFnPointer(
    proc("glFogCoordPointer"),
    def_glFogCoordPointer,
  );
  fn_glSecondaryColor3b = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3b"),
    def_glSecondaryColor3b,
  );
  fn_glSecondaryColor3bv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3bv"),
    def_glSecondaryColor3bv,
  );
  fn_glSecondaryColor3d = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3d"),
    def_glSecondaryColor3d,
  );
  fn_glSecondaryColor3dv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3dv"),
    def_glSecondaryColor3dv,
  );
  fn_glSecondaryColor3f = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3f"),
    def_glSecondaryColor3f,
  );
  fn_glSecondaryColor3fv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3fv"),
    def_glSecondaryColor3fv,
  );
  fn_glSecondaryColor3i = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3i"),
    def_glSecondaryColor3i,
  );
  fn_glSecondaryColor3iv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3iv"),
    def_glSecondaryColor3iv,
  );
  fn_glSecondaryColor3s = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3s"),
    def_glSecondaryColor3s,
  );
  fn_glSecondaryColor3sv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3sv"),
    def_glSecondaryColor3sv,
  );
  fn_glSecondaryColor3ub = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3ub"),
    def_glSecondaryColor3ub,
  );
  fn_glSecondaryColor3ubv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3ubv"),
    def_glSecondaryColor3ubv,
  );
  fn_glSecondaryColor3ui = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3ui"),
    def_glSecondaryColor3ui,
  );
  fn_glSecondaryColor3uiv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3uiv"),
    def_glSecondaryColor3uiv,
  );
  fn_glSecondaryColor3us = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3us"),
    def_glSecondaryColor3us,
  );
  fn_glSecondaryColor3usv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3usv"),
    def_glSecondaryColor3usv,
  );
  fn_glSecondaryColorPointer = new Deno.UnsafeFnPointer(
    proc("glSecondaryColorPointer"),
    def_glSecondaryColorPointer,
  );
  fn_glWindowPos2d = new Deno.UnsafeFnPointer(
    proc("glWindowPos2d"),
    def_glWindowPos2d,
  );
  fn_glWindowPos2dv = new Deno.UnsafeFnPointer(
    proc("glWindowPos2dv"),
    def_glWindowPos2dv,
  );
  fn_glWindowPos2f = new Deno.UnsafeFnPointer(
    proc("glWindowPos2f"),
    def_glWindowPos2f,
  );
  fn_glWindowPos2fv = new Deno.UnsafeFnPointer(
    proc("glWindowPos2fv"),
    def_glWindowPos2fv,
  );
  fn_glWindowPos2i = new Deno.UnsafeFnPointer(
    proc("glWindowPos2i"),
    def_glWindowPos2i,
  );
  fn_glWindowPos2iv = new Deno.UnsafeFnPointer(
    proc("glWindowPos2iv"),
    def_glWindowPos2iv,
  );
  fn_glWindowPos2s = new Deno.UnsafeFnPointer(
    proc("glWindowPos2s"),
    def_glWindowPos2s,
  );
  fn_glWindowPos2sv = new Deno.UnsafeFnPointer(
    proc("glWindowPos2sv"),
    def_glWindowPos2sv,
  );
  fn_glWindowPos3d = new Deno.UnsafeFnPointer(
    proc("glWindowPos3d"),
    def_glWindowPos3d,
  );
  fn_glWindowPos3dv = new Deno.UnsafeFnPointer(
    proc("glWindowPos3dv"),
    def_glWindowPos3dv,
  );
  fn_glWindowPos3f = new Deno.UnsafeFnPointer(
    proc("glWindowPos3f"),
    def_glWindowPos3f,
  );
  fn_glWindowPos3fv = new Deno.UnsafeFnPointer(
    proc("glWindowPos3fv"),
    def_glWindowPos3fv,
  );
  fn_glWindowPos3i = new Deno.UnsafeFnPointer(
    proc("glWindowPos3i"),
    def_glWindowPos3i,
  );
  fn_glWindowPos3iv = new Deno.UnsafeFnPointer(
    proc("glWindowPos3iv"),
    def_glWindowPos3iv,
  );
  fn_glWindowPos3s = new Deno.UnsafeFnPointer(
    proc("glWindowPos3s"),
    def_glWindowPos3s,
  );
  fn_glWindowPos3sv = new Deno.UnsafeFnPointer(
    proc("glWindowPos3sv"),
    def_glWindowPos3sv,
  );
  fn_glBlendColor = new Deno.UnsafeFnPointer(
    proc("glBlendColor"),
    def_glBlendColor,
  );
  fn_glBlendEquation = new Deno.UnsafeFnPointer(
    proc("glBlendEquation"),
    def_glBlendEquation,
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
  fn_glGetQueryObjectiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryObjectiv"),
    def_glGetQueryObjectiv,
  );
  fn_glGetQueryObjectuiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryObjectuiv"),
    def_glGetQueryObjectuiv,
  );
  fn_glBindBuffer = new Deno.UnsafeFnPointer(
    proc("glBindBuffer"),
    def_glBindBuffer,
  );
  fn_glDeleteBuffers = new Deno.UnsafeFnPointer(
    proc("glDeleteBuffers"),
    def_glDeleteBuffers,
  );
  fn_glGenBuffers = new Deno.UnsafeFnPointer(
    proc("glGenBuffers"),
    def_glGenBuffers,
  );
  fn_glIsBuffer = new Deno.UnsafeFnPointer(proc("glIsBuffer"), def_glIsBuffer);
  fn_glBufferData = new Deno.UnsafeFnPointer(
    proc("glBufferData"),
    def_glBufferData,
  );
  fn_glBufferSubData = new Deno.UnsafeFnPointer(
    proc("glBufferSubData"),
    def_glBufferSubData,
  );
  fn_glGetBufferSubData = new Deno.UnsafeFnPointer(
    proc("glGetBufferSubData"),
    def_glGetBufferSubData,
  );
  fn_glMapBuffer = new Deno.UnsafeFnPointer(
    proc("glMapBuffer"),
    def_glMapBuffer,
  );
  fn_glUnmapBuffer = new Deno.UnsafeFnPointer(
    proc("glUnmapBuffer"),
    def_glUnmapBuffer,
  );
  fn_glGetBufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetBufferParameteriv"),
    def_glGetBufferParameteriv,
  );
  fn_glGetBufferPointerv = new Deno.UnsafeFnPointer(
    proc("glGetBufferPointerv"),
    def_glGetBufferPointerv,
  );
  fn_glBlendEquationSeparate = new Deno.UnsafeFnPointer(
    proc("glBlendEquationSeparate"),
    def_glBlendEquationSeparate,
  );
  fn_glDrawBuffers = new Deno.UnsafeFnPointer(
    proc("glDrawBuffers"),
    def_glDrawBuffers,
  );
  fn_glStencilOpSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilOpSeparate"),
    def_glStencilOpSeparate,
  );
  fn_glStencilFuncSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilFuncSeparate"),
    def_glStencilFuncSeparate,
  );
  fn_glStencilMaskSeparate = new Deno.UnsafeFnPointer(
    proc("glStencilMaskSeparate"),
    def_glStencilMaskSeparate,
  );
  fn_glAttachShader = new Deno.UnsafeFnPointer(
    proc("glAttachShader"),
    def_glAttachShader,
  );
  fn_glBindAttribLocation = new Deno.UnsafeFnPointer(
    proc("glBindAttribLocation"),
    def_glBindAttribLocation,
  );
  fn_glCompileShader = new Deno.UnsafeFnPointer(
    proc("glCompileShader"),
    def_glCompileShader,
  );
  fn_glCreateProgram = new Deno.UnsafeFnPointer(
    proc("glCreateProgram"),
    def_glCreateProgram,
  );
  fn_glCreateShader = new Deno.UnsafeFnPointer(
    proc("glCreateShader"),
    def_glCreateShader,
  );
  fn_glDeleteProgram = new Deno.UnsafeFnPointer(
    proc("glDeleteProgram"),
    def_glDeleteProgram,
  );
  fn_glDeleteShader = new Deno.UnsafeFnPointer(
    proc("glDeleteShader"),
    def_glDeleteShader,
  );
  fn_glDetachShader = new Deno.UnsafeFnPointer(
    proc("glDetachShader"),
    def_glDetachShader,
  );
  fn_glDisableVertexAttribArray = new Deno.UnsafeFnPointer(
    proc("glDisableVertexAttribArray"),
    def_glDisableVertexAttribArray,
  );
  fn_glEnableVertexAttribArray = new Deno.UnsafeFnPointer(
    proc("glEnableVertexAttribArray"),
    def_glEnableVertexAttribArray,
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
  fn_glGetProgramiv = new Deno.UnsafeFnPointer(
    proc("glGetProgramiv"),
    def_glGetProgramiv,
  );
  fn_glGetProgramInfoLog = new Deno.UnsafeFnPointer(
    proc("glGetProgramInfoLog"),
    def_glGetProgramInfoLog,
  );
  fn_glGetShaderiv = new Deno.UnsafeFnPointer(
    proc("glGetShaderiv"),
    def_glGetShaderiv,
  );
  fn_glGetShaderInfoLog = new Deno.UnsafeFnPointer(
    proc("glGetShaderInfoLog"),
    def_glGetShaderInfoLog,
  );
  fn_glGetShaderSource = new Deno.UnsafeFnPointer(
    proc("glGetShaderSource"),
    def_glGetShaderSource,
  );
  fn_glGetUniformLocation = new Deno.UnsafeFnPointer(
    proc("glGetUniformLocation"),
    def_glGetUniformLocation,
  );
  fn_glGetUniformfv = new Deno.UnsafeFnPointer(
    proc("glGetUniformfv"),
    def_glGetUniformfv,
  );
  fn_glGetUniformiv = new Deno.UnsafeFnPointer(
    proc("glGetUniformiv"),
    def_glGetUniformiv,
  );
  fn_glGetVertexAttribdv = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribdv"),
    def_glGetVertexAttribdv,
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
  fn_glIsProgram = new Deno.UnsafeFnPointer(
    proc("glIsProgram"),
    def_glIsProgram,
  );
  fn_glIsShader = new Deno.UnsafeFnPointer(proc("glIsShader"), def_glIsShader);
  fn_glLinkProgram = new Deno.UnsafeFnPointer(
    proc("glLinkProgram"),
    def_glLinkProgram,
  );
  fn_glShaderSource = new Deno.UnsafeFnPointer(
    proc("glShaderSource"),
    def_glShaderSource,
  );
  fn_glUseProgram = new Deno.UnsafeFnPointer(
    proc("glUseProgram"),
    def_glUseProgram,
  );
  fn_glUniform1f = new Deno.UnsafeFnPointer(
    proc("glUniform1f"),
    def_glUniform1f,
  );
  fn_glUniform2f = new Deno.UnsafeFnPointer(
    proc("glUniform2f"),
    def_glUniform2f,
  );
  fn_glUniform3f = new Deno.UnsafeFnPointer(
    proc("glUniform3f"),
    def_glUniform3f,
  );
  fn_glUniform4f = new Deno.UnsafeFnPointer(
    proc("glUniform4f"),
    def_glUniform4f,
  );
  fn_glUniform1i = new Deno.UnsafeFnPointer(
    proc("glUniform1i"),
    def_glUniform1i,
  );
  fn_glUniform2i = new Deno.UnsafeFnPointer(
    proc("glUniform2i"),
    def_glUniform2i,
  );
  fn_glUniform3i = new Deno.UnsafeFnPointer(
    proc("glUniform3i"),
    def_glUniform3i,
  );
  fn_glUniform4i = new Deno.UnsafeFnPointer(
    proc("glUniform4i"),
    def_glUniform4i,
  );
  fn_glUniform1fv = new Deno.UnsafeFnPointer(
    proc("glUniform1fv"),
    def_glUniform1fv,
  );
  fn_glUniform2fv = new Deno.UnsafeFnPointer(
    proc("glUniform2fv"),
    def_glUniform2fv,
  );
  fn_glUniform3fv = new Deno.UnsafeFnPointer(
    proc("glUniform3fv"),
    def_glUniform3fv,
  );
  fn_glUniform4fv = new Deno.UnsafeFnPointer(
    proc("glUniform4fv"),
    def_glUniform4fv,
  );
  fn_glUniform1iv = new Deno.UnsafeFnPointer(
    proc("glUniform1iv"),
    def_glUniform1iv,
  );
  fn_glUniform2iv = new Deno.UnsafeFnPointer(
    proc("glUniform2iv"),
    def_glUniform2iv,
  );
  fn_glUniform3iv = new Deno.UnsafeFnPointer(
    proc("glUniform3iv"),
    def_glUniform3iv,
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
  fn_glValidateProgram = new Deno.UnsafeFnPointer(
    proc("glValidateProgram"),
    def_glValidateProgram,
  );
  fn_glVertexAttrib1d = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1d"),
    def_glVertexAttrib1d,
  );
  fn_glVertexAttrib1dv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dv"),
    def_glVertexAttrib1dv,
  );
  fn_glVertexAttrib1f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1f"),
    def_glVertexAttrib1f,
  );
  fn_glVertexAttrib1fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fv"),
    def_glVertexAttrib1fv,
  );
  fn_glVertexAttrib1s = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1s"),
    def_glVertexAttrib1s,
  );
  fn_glVertexAttrib1sv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1sv"),
    def_glVertexAttrib1sv,
  );
  fn_glVertexAttrib2d = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2d"),
    def_glVertexAttrib2d,
  );
  fn_glVertexAttrib2dv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dv"),
    def_glVertexAttrib2dv,
  );
  fn_glVertexAttrib2f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2f"),
    def_glVertexAttrib2f,
  );
  fn_glVertexAttrib2fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fv"),
    def_glVertexAttrib2fv,
  );
  fn_glVertexAttrib2s = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2s"),
    def_glVertexAttrib2s,
  );
  fn_glVertexAttrib2sv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2sv"),
    def_glVertexAttrib2sv,
  );
  fn_glVertexAttrib3d = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3d"),
    def_glVertexAttrib3d,
  );
  fn_glVertexAttrib3dv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dv"),
    def_glVertexAttrib3dv,
  );
  fn_glVertexAttrib3f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3f"),
    def_glVertexAttrib3f,
  );
  fn_glVertexAttrib3fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fv"),
    def_glVertexAttrib3fv,
  );
  fn_glVertexAttrib3s = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3s"),
    def_glVertexAttrib3s,
  );
  fn_glVertexAttrib3sv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3sv"),
    def_glVertexAttrib3sv,
  );
  fn_glVertexAttrib4Nbv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nbv"),
    def_glVertexAttrib4Nbv,
  );
  fn_glVertexAttrib4Niv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Niv"),
    def_glVertexAttrib4Niv,
  );
  fn_glVertexAttrib4Nsv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nsv"),
    def_glVertexAttrib4Nsv,
  );
  fn_glVertexAttrib4Nub = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nub"),
    def_glVertexAttrib4Nub,
  );
  fn_glVertexAttrib4Nubv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nubv"),
    def_glVertexAttrib4Nubv,
  );
  fn_glVertexAttrib4Nuiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nuiv"),
    def_glVertexAttrib4Nuiv,
  );
  fn_glVertexAttrib4Nusv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4Nusv"),
    def_glVertexAttrib4Nusv,
  );
  fn_glVertexAttrib4bv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4bv"),
    def_glVertexAttrib4bv,
  );
  fn_glVertexAttrib4d = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4d"),
    def_glVertexAttrib4d,
  );
  fn_glVertexAttrib4dv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dv"),
    def_glVertexAttrib4dv,
  );
  fn_glVertexAttrib4f = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4f"),
    def_glVertexAttrib4f,
  );
  fn_glVertexAttrib4fv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fv"),
    def_glVertexAttrib4fv,
  );
  fn_glVertexAttrib4iv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4iv"),
    def_glVertexAttrib4iv,
  );
  fn_glVertexAttrib4s = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4s"),
    def_glVertexAttrib4s,
  );
  fn_glVertexAttrib4sv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4sv"),
    def_glVertexAttrib4sv,
  );
  fn_glVertexAttrib4ubv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ubv"),
    def_glVertexAttrib4ubv,
  );
  fn_glVertexAttrib4uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4uiv"),
    def_glVertexAttrib4uiv,
  );
  fn_glVertexAttrib4usv = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4usv"),
    def_glVertexAttrib4usv,
  );
  fn_glVertexAttribPointer = new Deno.UnsafeFnPointer(
    proc("glVertexAttribPointer"),
    def_glVertexAttribPointer,
  );
}
