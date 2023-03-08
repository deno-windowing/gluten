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
export const NORMAL_MAP_OES = 0x8511;
export const REFLECTION_MAP_OES = 0x8512;
export const TEXTURE_CUBE_MAP_OES = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP_OES = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X_OES = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X_OES = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y_OES = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y_OES = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z_OES = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z_OES = 0x851a;
export const MAX_CUBE_MAP_TEXTURE_SIZE_OES = 0x851c;
export const TEXTURE_GEN_MODE_OES = 0x2500;
export const TEXTURE_GEN_STR_OES = 0x8d60;

/// Commands

export const def_glTexGenfOES = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTexGenfOES!: Deno.UnsafeFnPointer<typeof def_glTexGenfOES>;

export function TexGenfOES(
  coord: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTexGenfOES.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGenfvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGenfvOES!: Deno.UnsafeFnPointer<typeof def_glTexGenfvOES>;

export function TexGenfvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGenfvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexGeniOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexGeniOES!: Deno.UnsafeFnPointer<typeof def_glTexGeniOES>;

export function TexGeniOES(
  coord: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTexGeniOES.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGenivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGenivOES!: Deno.UnsafeFnPointer<typeof def_glTexGenivOES>;

export function TexGenivOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGenivOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexGenxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexGenxOES!: Deno.UnsafeFnPointer<typeof def_glTexGenxOES>;

export function TexGenxOES(
  coord: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexGenxOES.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGenxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGenxvOES!: Deno.UnsafeFnPointer<typeof def_glTexGenxvOES>;

export function TexGenxvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGenxvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexGenfvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGenfvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexGenfvOES>;

export function GetTexGenfvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGenfvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexGenivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGenivOES!: Deno.UnsafeFnPointer<typeof def_glGetTexGenivOES>;

export function GetTexGenivOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGenivOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexGenxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGenxvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexGenxvOES>;

export function GetTexGenxvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGenxvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexGenfOES = new Deno.UnsafeFnPointer(proc("glTexGenfOES")!, def_glTexGenfOES);
  fn_glTexGenfvOES = new Deno.UnsafeFnPointer(proc("glTexGenfvOES")!, def_glTexGenfvOES);
  fn_glTexGeniOES = new Deno.UnsafeFnPointer(proc("glTexGeniOES")!, def_glTexGeniOES);
  fn_glTexGenivOES = new Deno.UnsafeFnPointer(proc("glTexGenivOES")!, def_glTexGenivOES);
  fn_glTexGenxOES = new Deno.UnsafeFnPointer(proc("glTexGenxOES")!, def_glTexGenxOES);
  fn_glTexGenxvOES = new Deno.UnsafeFnPointer(proc("glTexGenxvOES")!, def_glTexGenxvOES);
  fn_glGetTexGenfvOES = new Deno.UnsafeFnPointer(proc("glGetTexGenfvOES")!, def_glGetTexGenfvOES);
  fn_glGetTexGenivOES = new Deno.UnsafeFnPointer(proc("glGetTexGenivOES")!, def_glGetTexGenivOES);
  fn_glGetTexGenxvOES = new Deno.UnsafeFnPointer(proc("glGetTexGenxvOES")!, def_glGetTexGenxvOES);
}
