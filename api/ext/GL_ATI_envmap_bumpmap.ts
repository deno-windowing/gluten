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
export const BUMP_ROT_MATRIX_ATI = 0x8775;
export const BUMP_ROT_MATRIX_SIZE_ATI = 0x8776;
export const BUMP_NUM_TEX_UNITS_ATI = 0x8777;
export const BUMP_TEX_UNITS_ATI = 0x8778;
export const DUDV_ATI = 0x8779;
export const DU8DV8_ATI = 0x877a;
export const BUMP_ENVMAP_ATI = 0x877b;
export const BUMP_TARGET_ATI = 0x877c;

/// Commands

export const def_glTexBumpParameterivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexBumpParameterivATI!: Deno.UnsafeFnPointer<typeof def_glTexBumpParameterivATI>;

export function TexBumpParameterivATI(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTexBumpParameterivATI.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glTexBumpParameterfvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexBumpParameterfvATI!: Deno.UnsafeFnPointer<typeof def_glTexBumpParameterfvATI>;

export function TexBumpParameterfvATI(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTexBumpParameterfvATI.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetTexBumpParameterivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexBumpParameterivATI!: Deno.UnsafeFnPointer<typeof def_glGetTexBumpParameterivATI>;

export function GetTexBumpParameterivATI(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetTexBumpParameterivATI.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetTexBumpParameterfvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexBumpParameterfvATI!: Deno.UnsafeFnPointer<typeof def_glGetTexBumpParameterfvATI>;

export function GetTexBumpParameterfvATI(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetTexBumpParameterfvATI.call(
    pname,
    bufferToFFI(param),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexBumpParameterivATI = new Deno.UnsafeFnPointer(proc("glTexBumpParameterivATI"), def_glTexBumpParameterivATI);
  fn_glTexBumpParameterfvATI = new Deno.UnsafeFnPointer(proc("glTexBumpParameterfvATI"), def_glTexBumpParameterfvATI);
  fn_glGetTexBumpParameterivATI = new Deno.UnsafeFnPointer(proc("glGetTexBumpParameterivATI"), def_glGetTexBumpParameterivATI);
  fn_glGetTexBumpParameterfvATI = new Deno.UnsafeFnPointer(proc("glGetTexBumpParameterfvATI"), def_glGetTexBumpParameterfvATI);
}
