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
export const TEXTURE_SPARSE_ARB = 0x91a6;
export const VIRTUAL_PAGE_SIZE_INDEX_ARB = 0x91a7;
export const NUM_SPARSE_LEVELS_ARB = 0x91aa;
export const NUM_VIRTUAL_PAGE_SIZES_ARB = 0x91a8;
export const VIRTUAL_PAGE_SIZE_X_ARB = 0x9195;
export const VIRTUAL_PAGE_SIZE_Y_ARB = 0x9196;
export const VIRTUAL_PAGE_SIZE_Z_ARB = 0x9197;
export const MAX_SPARSE_TEXTURE_SIZE_ARB = 0x9198;
export const MAX_SPARSE_3D_TEXTURE_SIZE_ARB = 0x9199;
export const MAX_SPARSE_ARRAY_TEXTURE_LAYERS_ARB = 0x919a;
export const SPARSE_TEXTURE_FULL_ARRAY_CUBE_MIPMAPS_ARB = 0x91a9;

/// Commands

export const def_glTexPageCommitmentARB = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexPageCommitmentARB!: Deno.UnsafeFnPointer<
  typeof def_glTexPageCommitmentARB
>;

export function TexPageCommitmentARB(
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
  fn_glTexPageCommitmentARB.call(
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
  fn_glTexPageCommitmentARB = new Deno.UnsafeFnPointer(
    proc("glTexPageCommitmentARB"),
    def_glTexPageCommitmentARB,
  );
}
