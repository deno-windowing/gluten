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
export const TEXTURE_WIDTH_QCOM = 0x8bd2;
export const TEXTURE_HEIGHT_QCOM = 0x8bd3;
export const TEXTURE_DEPTH_QCOM = 0x8bd4;
export const TEXTURE_INTERNAL_FORMAT_QCOM = 0x8bd5;
export const TEXTURE_FORMAT_QCOM = 0x8bd6;
export const TEXTURE_TYPE_QCOM = 0x8bd7;
export const TEXTURE_IMAGE_VALID_QCOM = 0x8bd8;
export const TEXTURE_NUM_LEVELS_QCOM = 0x8bd9;
export const TEXTURE_TARGET_QCOM = 0x8bda;
export const TEXTURE_OBJECT_VALID_QCOM = 0x8bdb;
export const STATE_RESTORE = 0x8bdc;

/// Commands

export const def_glExtGetTexturesQCOM = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetTexturesQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetTexturesQCOM
>;

export function ExtGetTexturesQCOM(
  textures: Buffer,
  maxTextures: GLint,
  numTextures: Buffer,
): void {
  fn_glExtGetTexturesQCOM.call(
    bufferToFFI(textures),
    maxTextures,
    bufferToFFI(numTextures),
  );
}

export const def_glExtGetBuffersQCOM = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetBuffersQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetBuffersQCOM
>;

export function ExtGetBuffersQCOM(
  buffers: Buffer,
  maxBuffers: GLint,
  numBuffers: Buffer,
): void {
  fn_glExtGetBuffersQCOM.call(
    bufferToFFI(buffers),
    maxBuffers,
    bufferToFFI(numBuffers),
  );
}

export const def_glExtGetRenderbuffersQCOM = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetRenderbuffersQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetRenderbuffersQCOM
>;

export function ExtGetRenderbuffersQCOM(
  renderbuffers: Buffer,
  maxRenderbuffers: GLint,
  numRenderbuffers: Buffer,
): void {
  fn_glExtGetRenderbuffersQCOM.call(
    bufferToFFI(renderbuffers),
    maxRenderbuffers,
    bufferToFFI(numRenderbuffers),
  );
}

export const def_glExtGetFramebuffersQCOM = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetFramebuffersQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetFramebuffersQCOM
>;

export function ExtGetFramebuffersQCOM(
  framebuffers: Buffer,
  maxFramebuffers: GLint,
  numFramebuffers: Buffer,
): void {
  fn_glExtGetFramebuffersQCOM.call(
    bufferToFFI(framebuffers),
    maxFramebuffers,
    bufferToFFI(numFramebuffers),
  );
}

export const def_glExtGetTexLevelParameterivQCOM = {
  parameters: ["u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetTexLevelParameterivQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetTexLevelParameterivQCOM
>;

export function ExtGetTexLevelParameterivQCOM(
  texture: GLuint,
  face: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glExtGetTexLevelParameterivQCOM.call(
    texture,
    face,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glExtTexObjectStateOverrideiQCOM = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glExtTexObjectStateOverrideiQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtTexObjectStateOverrideiQCOM
>;

export function ExtTexObjectStateOverrideiQCOM(
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glExtTexObjectStateOverrideiQCOM.call(
    target,
    pname,
    param,
  );
}

export const def_glExtGetTexSubImageQCOM = {
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

let fn_glExtGetTexSubImageQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetTexSubImageQCOM
>;

export function ExtGetTexSubImageQCOM(
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
  texels: Buffer,
): void {
  fn_glExtGetTexSubImageQCOM.call(
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
    bufferToFFI(texels),
  );
}

export const def_glExtGetBufferPointervQCOM = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glExtGetBufferPointervQCOM!: Deno.UnsafeFnPointer<
  typeof def_glExtGetBufferPointervQCOM
>;

export function ExtGetBufferPointervQCOM(
  target: GLenum,
  params: Buffer,
): void {
  fn_glExtGetBufferPointervQCOM.call(
    target,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glExtGetTexturesQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetTexturesQCOM"),
    def_glExtGetTexturesQCOM,
  );
  fn_glExtGetBuffersQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetBuffersQCOM"),
    def_glExtGetBuffersQCOM,
  );
  fn_glExtGetRenderbuffersQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetRenderbuffersQCOM"),
    def_glExtGetRenderbuffersQCOM,
  );
  fn_glExtGetFramebuffersQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetFramebuffersQCOM"),
    def_glExtGetFramebuffersQCOM,
  );
  fn_glExtGetTexLevelParameterivQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetTexLevelParameterivQCOM"),
    def_glExtGetTexLevelParameterivQCOM,
  );
  fn_glExtTexObjectStateOverrideiQCOM = new Deno.UnsafeFnPointer(
    proc("glExtTexObjectStateOverrideiQCOM"),
    def_glExtTexObjectStateOverrideiQCOM,
  );
  fn_glExtGetTexSubImageQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetTexSubImageQCOM"),
    def_glExtGetTexSubImageQCOM,
  );
  fn_glExtGetBufferPointervQCOM = new Deno.UnsafeFnPointer(
    proc("glExtGetBufferPointervQCOM"),
    def_glExtGetBufferPointervQCOM,
  );
}
