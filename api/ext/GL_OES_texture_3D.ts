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
export const TEXTURE_WRAP_R_OES = 0x8072;
export const TEXTURE_3D_OES = 0x806f;
export const TEXTURE_BINDING_3D_OES = 0x806a;
export const MAX_3D_TEXTURE_SIZE_OES = 0x8073;
export const SAMPLER_3D_OES = 0x8b5f;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_3D_ZOFFSET_OES = 0x8cd4;

/// Commands

export const def_glTexImage3DOES = {
  parameters: [
    "u32",
    "i32",
    "u32",
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

let fn_glTexImage3DOES!: Deno.UnsafeFnPointer<typeof def_glTexImage3DOES>;

export function TexImage3DOES(
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTexImage3DOES.call(
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

export const def_glTexSubImage3DOES = {
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

let fn_glTexSubImage3DOES!: Deno.UnsafeFnPointer<typeof def_glTexSubImage3DOES>;

export function TexSubImage3DOES(
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
  fn_glTexSubImage3DOES.call(
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

export const def_glCopyTexSubImage3DOES = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTexSubImage3DOES!: Deno.UnsafeFnPointer<
  typeof def_glCopyTexSubImage3DOES
>;

export function CopyTexSubImage3DOES(
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
  fn_glCopyTexSubImage3DOES.call(
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

export const def_glCompressedTexImage3DOES = {
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

let fn_glCompressedTexImage3DOES!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexImage3DOES
>;

export function CompressedTexImage3DOES(
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
  fn_glCompressedTexImage3DOES.call(
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

export const def_glCompressedTexSubImage3DOES = {
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

let fn_glCompressedTexSubImage3DOES!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTexSubImage3DOES
>;

export function CompressedTexSubImage3DOES(
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
  fn_glCompressedTexSubImage3DOES.call(
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

export const def_glFramebufferTexture3DOES = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture3DOES!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture3DOES
>;

export function FramebufferTexture3DOES(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  zoffset: GLint,
): void {
  fn_glFramebufferTexture3DOES.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    zoffset,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexImage3DOES = new Deno.UnsafeFnPointer(
    proc("glTexImage3DOES")!,
    def_glTexImage3DOES,
  );
  fn_glTexSubImage3DOES = new Deno.UnsafeFnPointer(
    proc("glTexSubImage3DOES")!,
    def_glTexSubImage3DOES,
  );
  fn_glCopyTexSubImage3DOES = new Deno.UnsafeFnPointer(
    proc("glCopyTexSubImage3DOES")!,
    def_glCopyTexSubImage3DOES,
  );
  fn_glCompressedTexImage3DOES = new Deno.UnsafeFnPointer(
    proc("glCompressedTexImage3DOES")!,
    def_glCompressedTexImage3DOES,
  );
  fn_glCompressedTexSubImage3DOES = new Deno.UnsafeFnPointer(
    proc("glCompressedTexSubImage3DOES")!,
    def_glCompressedTexSubImage3DOES,
  );
  fn_glFramebufferTexture3DOES = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture3DOES")!,
    def_glFramebufferTexture3DOES,
  );
}
