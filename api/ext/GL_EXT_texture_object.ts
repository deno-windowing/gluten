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
export const TEXTURE_PRIORITY_EXT = 0x8066;
export const TEXTURE_RESIDENT_EXT = 0x8067;
export const TEXTURE_1D_BINDING_EXT = 0x8068;
export const TEXTURE_2D_BINDING_EXT = 0x8069;
export const TEXTURE_3D_BINDING_EXT = 0x806a;

/// Commands

export const def_glAreTexturesResidentEXT = {
  parameters: ["i32", "buffer", "buffer"],
  result: "u8",
} as const;

let fn_glAreTexturesResidentEXT!: Deno.UnsafeFnPointer<typeof def_glAreTexturesResidentEXT>;

export function AreTexturesResidentEXT(
  n: GLsizei,
  textures: Buffer,
  residences: Buffer,
): GLboolean {
  return fn_glAreTexturesResidentEXT.call(
    n,
    bufferToFFI(textures),
    bufferToFFI(residences),
  );
}

export const def_glBindTextureEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTextureEXT!: Deno.UnsafeFnPointer<typeof def_glBindTextureEXT>;

export function BindTextureEXT(
  target: GLenum,
  texture: GLuint,
): void {
  fn_glBindTextureEXT.call(
    target,
    texture,
  );
}

export const def_glDeleteTexturesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteTexturesEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteTexturesEXT>;

export function DeleteTexturesEXT(
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glDeleteTexturesEXT.call(
    n,
    bufferToFFI(textures),
  );
}

export const def_glGenTexturesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenTexturesEXT!: Deno.UnsafeFnPointer<typeof def_glGenTexturesEXT>;

export function GenTexturesEXT(
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glGenTexturesEXT.call(
    n,
    bufferToFFI(textures),
  );
}

export const def_glIsTextureEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsTextureEXT!: Deno.UnsafeFnPointer<typeof def_glIsTextureEXT>;

export function IsTextureEXT(
  texture: GLuint,
): GLboolean {
  return fn_glIsTextureEXT.call(
    texture,
  );
}

export const def_glPrioritizeTexturesEXT = {
  parameters: ["i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glPrioritizeTexturesEXT!: Deno.UnsafeFnPointer<typeof def_glPrioritizeTexturesEXT>;

export function PrioritizeTexturesEXT(
  n: GLsizei,
  textures: Buffer,
  priorities: Buffer,
): void {
  fn_glPrioritizeTexturesEXT.call(
    n,
    bufferToFFI(textures),
    bufferToFFI(priorities),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glAreTexturesResidentEXT = new Deno.UnsafeFnPointer(proc("glAreTexturesResidentEXT"), def_glAreTexturesResidentEXT);
  fn_glBindTextureEXT = new Deno.UnsafeFnPointer(proc("glBindTextureEXT"), def_glBindTextureEXT);
  fn_glDeleteTexturesEXT = new Deno.UnsafeFnPointer(proc("glDeleteTexturesEXT"), def_glDeleteTexturesEXT);
  fn_glGenTexturesEXT = new Deno.UnsafeFnPointer(proc("glGenTexturesEXT"), def_glGenTexturesEXT);
  fn_glIsTextureEXT = new Deno.UnsafeFnPointer(proc("glIsTextureEXT"), def_glIsTextureEXT);
  fn_glPrioritizeTexturesEXT = new Deno.UnsafeFnPointer(proc("glPrioritizeTexturesEXT"), def_glPrioritizeTexturesEXT);
}
