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
export const INVALID_FRAMEBUFFER_OPERATION_EXT = 0x506;
export const MAX_RENDERBUFFER_SIZE_EXT = 0x84e8;
export const FRAMEBUFFER_BINDING_EXT = 0x8ca6;
export const RENDERBUFFER_BINDING_EXT = 0x8ca7;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_EXT = 0x8cd0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_EXT = 0x8cd1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_EXT = 0x8cd2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_EXT = 0x8cd3;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_3D_ZOFFSET_EXT = 0x8cd4;
export const FRAMEBUFFER_COMPLETE_EXT = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT_EXT = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_EXT = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS_EXT = 0x8cd9;
export const FRAMEBUFFER_INCOMPLETE_FORMATS_EXT = 0x8cda;
export const FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER_EXT = 0x8cdb;
export const FRAMEBUFFER_INCOMPLETE_READ_BUFFER_EXT = 0x8cdc;
export const FRAMEBUFFER_UNSUPPORTED_EXT = 0x8cdd;
export const MAX_COLOR_ATTACHMENTS_EXT = 0x8cdf;
export const COLOR_ATTACHMENT0_EXT = 0x8ce0;
export const COLOR_ATTACHMENT1_EXT = 0x8ce1;
export const COLOR_ATTACHMENT2_EXT = 0x8ce2;
export const COLOR_ATTACHMENT3_EXT = 0x8ce3;
export const COLOR_ATTACHMENT4_EXT = 0x8ce4;
export const COLOR_ATTACHMENT5_EXT = 0x8ce5;
export const COLOR_ATTACHMENT6_EXT = 0x8ce6;
export const COLOR_ATTACHMENT7_EXT = 0x8ce7;
export const COLOR_ATTACHMENT8_EXT = 0x8ce8;
export const COLOR_ATTACHMENT9_EXT = 0x8ce9;
export const COLOR_ATTACHMENT10_EXT = 0x8cea;
export const COLOR_ATTACHMENT11_EXT = 0x8ceb;
export const COLOR_ATTACHMENT12_EXT = 0x8cec;
export const COLOR_ATTACHMENT13_EXT = 0x8ced;
export const COLOR_ATTACHMENT14_EXT = 0x8cee;
export const COLOR_ATTACHMENT15_EXT = 0x8cef;
export const DEPTH_ATTACHMENT_EXT = 0x8d00;
export const STENCIL_ATTACHMENT_EXT = 0x8d20;
export const FRAMEBUFFER_EXT = 0x8d40;
export const RENDERBUFFER_EXT = 0x8d41;
export const RENDERBUFFER_WIDTH_EXT = 0x8d42;
export const RENDERBUFFER_HEIGHT_EXT = 0x8d43;
export const RENDERBUFFER_INTERNAL_FORMAT_EXT = 0x8d44;
export const STENCIL_INDEX1_EXT = 0x8d46;
export const STENCIL_INDEX4_EXT = 0x8d47;
export const STENCIL_INDEX8_EXT = 0x8d48;
export const STENCIL_INDEX16_EXT = 0x8d49;
export const RENDERBUFFER_RED_SIZE_EXT = 0x8d50;
export const RENDERBUFFER_GREEN_SIZE_EXT = 0x8d51;
export const RENDERBUFFER_BLUE_SIZE_EXT = 0x8d52;
export const RENDERBUFFER_ALPHA_SIZE_EXT = 0x8d53;
export const RENDERBUFFER_DEPTH_SIZE_EXT = 0x8d54;
export const RENDERBUFFER_STENCIL_SIZE_EXT = 0x8d55;

/// Commands

export const def_glIsRenderbufferEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glIsRenderbufferEXT>;

export function IsRenderbufferEXT(
  renderbuffer: GLuint,
): GLboolean {
  return fn_glIsRenderbufferEXT.call(
    renderbuffer,
  );
}

export const def_glBindRenderbufferEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glBindRenderbufferEXT>;

export function BindRenderbufferEXT(
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glBindRenderbufferEXT.call(
    target,
    renderbuffer,
  );
}

export const def_glDeleteRenderbuffersEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteRenderbuffersEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteRenderbuffersEXT>;

export function DeleteRenderbuffersEXT(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glDeleteRenderbuffersEXT.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glGenRenderbuffersEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenRenderbuffersEXT!: Deno.UnsafeFnPointer<typeof def_glGenRenderbuffersEXT>;

export function GenRenderbuffersEXT(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glGenRenderbuffersEXT.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glRenderbufferStorageEXT = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageEXT!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorageEXT>;

export function RenderbufferStorageEXT(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageEXT.call(
    target,
    internalformat,
    width,
    height,
  );
}

export const def_glGetRenderbufferParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetRenderbufferParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetRenderbufferParameterivEXT>;

export function GetRenderbufferParameterivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetRenderbufferParameterivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIsFramebufferEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsFramebufferEXT!: Deno.UnsafeFnPointer<typeof def_glIsFramebufferEXT>;

export function IsFramebufferEXT(
  framebuffer: GLuint,
): GLboolean {
  return fn_glIsFramebufferEXT.call(
    framebuffer,
  );
}

export const def_glBindFramebufferEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindFramebufferEXT!: Deno.UnsafeFnPointer<typeof def_glBindFramebufferEXT>;

export function BindFramebufferEXT(
  target: GLenum,
  framebuffer: GLuint,
): void {
  fn_glBindFramebufferEXT.call(
    target,
    framebuffer,
  );
}

export const def_glDeleteFramebuffersEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFramebuffersEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteFramebuffersEXT>;

export function DeleteFramebuffersEXT(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glDeleteFramebuffersEXT.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glGenFramebuffersEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenFramebuffersEXT!: Deno.UnsafeFnPointer<typeof def_glGenFramebuffersEXT>;

export function GenFramebuffersEXT(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glGenFramebuffersEXT.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glCheckFramebufferStatusEXT = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glCheckFramebufferStatusEXT!: Deno.UnsafeFnPointer<typeof def_glCheckFramebufferStatusEXT>;

export function CheckFramebufferStatusEXT(
  target: GLenum,
): GLenum {
  return fn_glCheckFramebufferStatusEXT.call(
    target,
  );
}

export const def_glFramebufferTexture1DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture1DEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture1DEXT>;

export function FramebufferTexture1DEXT(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture1DEXT.call(
    target,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glFramebufferTexture2DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2DEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture2DEXT>;

export function FramebufferTexture2DEXT(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture2DEXT.call(
    target,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glFramebufferTexture3DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture3DEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture3DEXT>;

export function FramebufferTexture3DEXT(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  zoffset: GLint,
): void {
  fn_glFramebufferTexture3DEXT.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    zoffset,
  );
}

export const def_glFramebufferRenderbufferEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferRenderbufferEXT>;

export function FramebufferRenderbufferEXT(
  target: GLenum,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glFramebufferRenderbufferEXT.call(
    target,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glGetFramebufferAttachmentParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferAttachmentParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferAttachmentParameterivEXT>;

export function GetFramebufferAttachmentParameterivEXT(
  target: GLenum,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferAttachmentParameterivEXT.call(
    target,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGenerateMipmapEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateMipmapEXT!: Deno.UnsafeFnPointer<typeof def_glGenerateMipmapEXT>;

export function GenerateMipmapEXT(
  target: GLenum,
): void {
  fn_glGenerateMipmapEXT.call(
    target,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glIsRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glIsRenderbufferEXT"), def_glIsRenderbufferEXT);
  fn_glBindRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glBindRenderbufferEXT"), def_glBindRenderbufferEXT);
  fn_glDeleteRenderbuffersEXT = new Deno.UnsafeFnPointer(proc("glDeleteRenderbuffersEXT"), def_glDeleteRenderbuffersEXT);
  fn_glGenRenderbuffersEXT = new Deno.UnsafeFnPointer(proc("glGenRenderbuffersEXT"), def_glGenRenderbuffersEXT);
  fn_glRenderbufferStorageEXT = new Deno.UnsafeFnPointer(proc("glRenderbufferStorageEXT"), def_glRenderbufferStorageEXT);
  fn_glGetRenderbufferParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetRenderbufferParameterivEXT"), def_glGetRenderbufferParameterivEXT);
  fn_glIsFramebufferEXT = new Deno.UnsafeFnPointer(proc("glIsFramebufferEXT"), def_glIsFramebufferEXT);
  fn_glBindFramebufferEXT = new Deno.UnsafeFnPointer(proc("glBindFramebufferEXT"), def_glBindFramebufferEXT);
  fn_glDeleteFramebuffersEXT = new Deno.UnsafeFnPointer(proc("glDeleteFramebuffersEXT"), def_glDeleteFramebuffersEXT);
  fn_glGenFramebuffersEXT = new Deno.UnsafeFnPointer(proc("glGenFramebuffersEXT"), def_glGenFramebuffersEXT);
  fn_glCheckFramebufferStatusEXT = new Deno.UnsafeFnPointer(proc("glCheckFramebufferStatusEXT"), def_glCheckFramebufferStatusEXT);
  fn_glFramebufferTexture1DEXT = new Deno.UnsafeFnPointer(proc("glFramebufferTexture1DEXT"), def_glFramebufferTexture1DEXT);
  fn_glFramebufferTexture2DEXT = new Deno.UnsafeFnPointer(proc("glFramebufferTexture2DEXT"), def_glFramebufferTexture2DEXT);
  fn_glFramebufferTexture3DEXT = new Deno.UnsafeFnPointer(proc("glFramebufferTexture3DEXT"), def_glFramebufferTexture3DEXT);
  fn_glFramebufferRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glFramebufferRenderbufferEXT"), def_glFramebufferRenderbufferEXT);
  fn_glGetFramebufferAttachmentParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetFramebufferAttachmentParameterivEXT"), def_glGetFramebufferAttachmentParameterivEXT);
  fn_glGenerateMipmapEXT = new Deno.UnsafeFnPointer(proc("glGenerateMipmapEXT"), def_glGenerateMipmapEXT);
}
