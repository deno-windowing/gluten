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
const isTypedArray = (arr: unknown) =>
  arr instanceof Int8Array || arr instanceof Uint8Array ||
  arr instanceof Int16Array || arr instanceof Uint16Array ||
  arr instanceof Int32Array || arr instanceof Uint32Array ||
  arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(
      Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1),
    );
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
export const TEXTURE_SPARSE_EXT = 0x91a6;
export const VIRTUAL_PAGE_SIZE_INDEX_EXT = 0x91a7;
export const NUM_SPARSE_LEVELS_EXT = 0x91aa;
export const NUM_VIRTUAL_PAGE_SIZES_EXT = 0x91a8;
export const VIRTUAL_PAGE_SIZE_X_EXT = 0x9195;
export const VIRTUAL_PAGE_SIZE_Y_EXT = 0x9196;
export const VIRTUAL_PAGE_SIZE_Z_EXT = 0x9197;
export const TEXTURE_2D = 0xde1;
export const TEXTURE_2D_ARRAY = 0x8c1a;
export const TEXTURE_CUBE_MAP = 0x8513;
export const TEXTURE_CUBE_MAP_ARRAY_OES = 0x9009;
export const TEXTURE_3D = 0x806f;
export const MAX_SPARSE_TEXTURE_SIZE_EXT = 0x9198;
export const MAX_SPARSE_3D_TEXTURE_SIZE_EXT = 0x9199;
export const MAX_SPARSE_ARRAY_TEXTURE_LAYERS_EXT = 0x919a;
export const SPARSE_TEXTURE_FULL_ARRAY_CUBE_MIPMAPS_EXT = 0x91a9;

/// Commands

export const def_glTexPageCommitmentEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexPageCommitmentEXT!: Deno.UnsafeFnPointer<
  typeof def_glTexPageCommitmentEXT
>;

export function TexPageCommitmentEXT(
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  commit: GLboolean,
): void {
  fn_glTexPageCommitmentEXT.call(
    target,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    commit,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexPageCommitmentEXT = new Deno.UnsafeFnPointer(
    proc("glTexPageCommitmentEXT")!,
    def_glTexPageCommitmentEXT,
  );
}
