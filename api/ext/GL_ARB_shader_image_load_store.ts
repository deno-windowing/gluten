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

/// Commands

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

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindImageTexture = new Deno.UnsafeFnPointer(proc("glBindImageTexture")!, def_glBindImageTexture);
  fn_glMemoryBarrier = new Deno.UnsafeFnPointer(proc("glMemoryBarrier")!, def_glMemoryBarrier);
}
