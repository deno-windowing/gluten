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
export const MAX_IMAGE_UNITS_EXT = 0x8f38;
export const MAX_COMBINED_IMAGE_UNITS_AND_FRAGMENT_OUTPUTS_EXT = 0x8f39;
export const IMAGE_BINDING_NAME_EXT = 0x8f3a;
export const IMAGE_BINDING_LEVEL_EXT = 0x8f3b;
export const IMAGE_BINDING_LAYERED_EXT = 0x8f3c;
export const IMAGE_BINDING_LAYER_EXT = 0x8f3d;
export const IMAGE_BINDING_ACCESS_EXT = 0x8f3e;
export const IMAGE_1D_EXT = 0x904c;
export const IMAGE_2D_EXT = 0x904d;
export const IMAGE_3D_EXT = 0x904e;
export const IMAGE_2D_RECT_EXT = 0x904f;
export const IMAGE_CUBE_EXT = 0x9050;
export const IMAGE_BUFFER_EXT = 0x9051;
export const IMAGE_1D_ARRAY_EXT = 0x9052;
export const IMAGE_2D_ARRAY_EXT = 0x9053;
export const IMAGE_CUBE_MAP_ARRAY_EXT = 0x9054;
export const IMAGE_2D_MULTISAMPLE_EXT = 0x9055;
export const IMAGE_2D_MULTISAMPLE_ARRAY_EXT = 0x9056;
export const INT_IMAGE_1D_EXT = 0x9057;
export const INT_IMAGE_2D_EXT = 0x9058;
export const INT_IMAGE_3D_EXT = 0x9059;
export const INT_IMAGE_2D_RECT_EXT = 0x905a;
export const INT_IMAGE_CUBE_EXT = 0x905b;
export const INT_IMAGE_BUFFER_EXT = 0x905c;
export const INT_IMAGE_1D_ARRAY_EXT = 0x905d;
export const INT_IMAGE_2D_ARRAY_EXT = 0x905e;
export const INT_IMAGE_CUBE_MAP_ARRAY_EXT = 0x905f;
export const INT_IMAGE_2D_MULTISAMPLE_EXT = 0x9060;
export const INT_IMAGE_2D_MULTISAMPLE_ARRAY_EXT = 0x9061;
export const UNSIGNED_INT_IMAGE_1D_EXT = 0x9062;
export const UNSIGNED_INT_IMAGE_2D_EXT = 0x9063;
export const UNSIGNED_INT_IMAGE_3D_EXT = 0x9064;
export const UNSIGNED_INT_IMAGE_2D_RECT_EXT = 0x9065;
export const UNSIGNED_INT_IMAGE_CUBE_EXT = 0x9066;
export const UNSIGNED_INT_IMAGE_BUFFER_EXT = 0x9067;
export const UNSIGNED_INT_IMAGE_1D_ARRAY_EXT = 0x9068;
export const UNSIGNED_INT_IMAGE_2D_ARRAY_EXT = 0x9069;
export const UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY_EXT = 0x906a;
export const UNSIGNED_INT_IMAGE_2D_MULTISAMPLE_EXT = 0x906b;
export const UNSIGNED_INT_IMAGE_2D_MULTISAMPLE_ARRAY_EXT = 0x906c;
export const MAX_IMAGE_SAMPLES_EXT = 0x906d;
export const IMAGE_BINDING_FORMAT_EXT = 0x906e;
export const VERTEX_ATTRIB_ARRAY_BARRIER_BIT_EXT = 0x1;
export const ELEMENT_ARRAY_BARRIER_BIT_EXT = 0x2;
export const UNIFORM_BARRIER_BIT_EXT = 0x4;
export const TEXTURE_FETCH_BARRIER_BIT_EXT = 0x8;
export const SHADER_IMAGE_ACCESS_BARRIER_BIT_EXT = 0x20;
export const COMMAND_BARRIER_BIT_EXT = 0x40;
export const PIXEL_BUFFER_BARRIER_BIT_EXT = 0x80;
export const TEXTURE_UPDATE_BARRIER_BIT_EXT = 0x100;
export const BUFFER_UPDATE_BARRIER_BIT_EXT = 0x200;
export const FRAMEBUFFER_BARRIER_BIT_EXT = 0x400;
export const TRANSFORM_FEEDBACK_BARRIER_BIT_EXT = 0x800;
export const ATOMIC_COUNTER_BARRIER_BIT_EXT = 0x1000;
export const ALL_BARRIER_BITS_EXT = 0xffffffff;

/// Commands

export const def_glBindImageTextureEXT = {
  parameters: ["u32", "u32", "i32", "u8", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glBindImageTextureEXT!: Deno.UnsafeFnPointer<typeof def_glBindImageTextureEXT>;

export function BindImageTextureEXT(
  index: GLuint,
  texture: GLuint,
  level: GLint,
  layered: GLboolean,
  layer: GLint,
  access: GLenum,
  format: GLint,
): void {
  fn_glBindImageTextureEXT.call(
    index,
    texture,
    level,
    layered,
    layer,
    access,
    format,
  );
}

export const def_glMemoryBarrierEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMemoryBarrierEXT!: Deno.UnsafeFnPointer<typeof def_glMemoryBarrierEXT>;

export function MemoryBarrierEXT(
  barriers: GLbitfield,
): void {
  fn_glMemoryBarrierEXT.call(
    barriers,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindImageTextureEXT = new Deno.UnsafeFnPointer(proc("glBindImageTextureEXT"), def_glBindImageTextureEXT);
  fn_glMemoryBarrierEXT = new Deno.UnsafeFnPointer(proc("glMemoryBarrierEXT"), def_glMemoryBarrierEXT);
}
