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
export const TEXTURE_MEMORY_LAYOUT_INTEL = 0x83ff;
export const LAYOUT_DEFAULT_INTEL = 0x0;
export const LAYOUT_LINEAR_INTEL = 0x1;
export const LAYOUT_LINEAR_CPU_CACHED_INTEL = 0x2;

/// Commands

export const def_glSyncTextureINTEL = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glSyncTextureINTEL!: Deno.UnsafeFnPointer<typeof def_glSyncTextureINTEL>;

export function SyncTextureINTEL(
  texture: GLuint,
): void {
  fn_glSyncTextureINTEL.call(
    texture,
  );
}

export const def_glUnmapTexture2DINTEL = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glUnmapTexture2DINTEL!: Deno.UnsafeFnPointer<typeof def_glUnmapTexture2DINTEL>;

export function UnmapTexture2DINTEL(
  texture: GLuint,
  level: GLint,
): void {
  fn_glUnmapTexture2DINTEL.call(
    texture,
    level,
  );
}

export const def_glMapTexture2DINTEL = {
  parameters: ["u32", "i32", "u32", "buffer", "buffer"],
  result: "buffer",
} as const;

let fn_glMapTexture2DINTEL!: Deno.UnsafeFnPointer<typeof def_glMapTexture2DINTEL>;

export function MapTexture2DINTEL(
  texture: GLuint,
  level: GLint,
  access: GLbitfield,
  stride: Buffer,
  layout: Buffer,
): Buffer {
  return fn_glMapTexture2DINTEL.call(
    texture,
    level,
    access,
    bufferToFFI(stride),
    bufferToFFI(layout),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glSyncTextureINTEL = new Deno.UnsafeFnPointer(proc("glSyncTextureINTEL"), def_glSyncTextureINTEL);
  fn_glUnmapTexture2DINTEL = new Deno.UnsafeFnPointer(proc("glUnmapTexture2DINTEL"), def_glUnmapTexture2DINTEL);
  fn_glMapTexture2DINTEL = new Deno.UnsafeFnPointer(proc("glMapTexture2DINTEL"), def_glMapTexture2DINTEL);
}
