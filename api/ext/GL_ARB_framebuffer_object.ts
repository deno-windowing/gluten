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
export const INVALID_FRAMEBUFFER_OPERATION = 0x506;
export const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
export const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
export const FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
export const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
export const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
export const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
export const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
export const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
export const FRAMEBUFFER_DEFAULT = 0x8218;
export const FRAMEBUFFER_UNDEFINED = 0x8219;
export const DEPTH_STENCIL_ATTACHMENT = 0x821a;
export const MAX_RENDERBUFFER_SIZE = 0x84e8;
export const DEPTH_STENCIL = 0x84f9;
export const UNSIGNED_INT_24_8 = 0x84fa;
export const DEPTH24_STENCIL8 = 0x88f0;
export const TEXTURE_STENCIL_SIZE = 0x88f1;
export const UNSIGNED_NORMALIZED = 0x8c17;
export const FRAMEBUFFER_BINDING = 0x8ca6;
export const DRAW_FRAMEBUFFER_BINDING = 0x8ca6;
export const RENDERBUFFER_BINDING = 0x8ca7;
export const READ_FRAMEBUFFER = 0x8ca8;
export const DRAW_FRAMEBUFFER = 0x8ca9;
export const READ_FRAMEBUFFER_BINDING = 0x8caa;
export const RENDERBUFFER_SAMPLES = 0x8cab;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;
export const FRAMEBUFFER_COMPLETE = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER = 0x8cdb;
export const FRAMEBUFFER_INCOMPLETE_READ_BUFFER = 0x8cdc;
export const FRAMEBUFFER_UNSUPPORTED = 0x8cdd;
export const MAX_COLOR_ATTACHMENTS = 0x8cdf;
export const COLOR_ATTACHMENT0 = 0x8ce0;
export const COLOR_ATTACHMENT1 = 0x8ce1;
export const COLOR_ATTACHMENT2 = 0x8ce2;
export const COLOR_ATTACHMENT3 = 0x8ce3;
export const COLOR_ATTACHMENT4 = 0x8ce4;
export const COLOR_ATTACHMENT5 = 0x8ce5;
export const COLOR_ATTACHMENT6 = 0x8ce6;
export const COLOR_ATTACHMENT7 = 0x8ce7;
export const COLOR_ATTACHMENT8 = 0x8ce8;
export const COLOR_ATTACHMENT9 = 0x8ce9;
export const COLOR_ATTACHMENT10 = 0x8cea;
export const COLOR_ATTACHMENT11 = 0x8ceb;
export const COLOR_ATTACHMENT12 = 0x8cec;
export const COLOR_ATTACHMENT13 = 0x8ced;
export const COLOR_ATTACHMENT14 = 0x8cee;
export const COLOR_ATTACHMENT15 = 0x8cef;
export const DEPTH_ATTACHMENT = 0x8d00;
export const STENCIL_ATTACHMENT = 0x8d20;
export const FRAMEBUFFER = 0x8d40;
export const RENDERBUFFER = 0x8d41;
export const RENDERBUFFER_WIDTH = 0x8d42;
export const RENDERBUFFER_HEIGHT = 0x8d43;
export const RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;
export const STENCIL_INDEX1 = 0x8d46;
export const STENCIL_INDEX4 = 0x8d47;
export const STENCIL_INDEX8 = 0x8d48;
export const STENCIL_INDEX16 = 0x8d49;
export const RENDERBUFFER_RED_SIZE = 0x8d50;
export const RENDERBUFFER_GREEN_SIZE = 0x8d51;
export const RENDERBUFFER_BLUE_SIZE = 0x8d52;
export const RENDERBUFFER_ALPHA_SIZE = 0x8d53;
export const RENDERBUFFER_DEPTH_SIZE = 0x8d54;
export const RENDERBUFFER_STENCIL_SIZE = 0x8d55;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;
export const MAX_SAMPLES = 0x8d57;
export const INDEX = 0x8222;

/// Commands

export const def_glIsRenderbuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glIsRenderbuffer>;

export function IsRenderbuffer(
  renderbuffer: GLuint,
): GLboolean {
  return fn_glIsRenderbuffer.call(
    renderbuffer,
  );
}

export const def_glBindRenderbuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glBindRenderbuffer>;

export function BindRenderbuffer(
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glBindRenderbuffer.call(
    target,
    renderbuffer,
  );
}

export const def_glDeleteRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteRenderbuffers!: Deno.UnsafeFnPointer<typeof def_glDeleteRenderbuffers>;

export function DeleteRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glDeleteRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glGenRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenRenderbuffers!: Deno.UnsafeFnPointer<typeof def_glGenRenderbuffers>;

export function GenRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glGenRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glRenderbufferStorage = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorage!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorage>;

export function RenderbufferStorage(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorage.call(
    target,
    internalformat,
    width,
    height,
  );
}

export const def_glGetRenderbufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetRenderbufferParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetRenderbufferParameteriv>;

export function GetRenderbufferParameteriv(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetRenderbufferParameteriv.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIsFramebuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsFramebuffer!: Deno.UnsafeFnPointer<typeof def_glIsFramebuffer>;

export function IsFramebuffer(
  framebuffer: GLuint,
): GLboolean {
  return fn_glIsFramebuffer.call(
    framebuffer,
  );
}

export const def_glBindFramebuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindFramebuffer!: Deno.UnsafeFnPointer<typeof def_glBindFramebuffer>;

export function BindFramebuffer(
  target: GLenum,
  framebuffer: GLuint,
): void {
  fn_glBindFramebuffer.call(
    target,
    framebuffer,
  );
}

export const def_glDeleteFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFramebuffers!: Deno.UnsafeFnPointer<typeof def_glDeleteFramebuffers>;

export function DeleteFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glDeleteFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glGenFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenFramebuffers!: Deno.UnsafeFnPointer<typeof def_glGenFramebuffers>;

export function GenFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glGenFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glCheckFramebufferStatus = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glCheckFramebufferStatus!: Deno.UnsafeFnPointer<typeof def_glCheckFramebufferStatus>;

export function CheckFramebufferStatus(
  target: GLenum,
): GLenum {
  return fn_glCheckFramebufferStatus.call(
    target,
  );
}

export const def_glFramebufferTexture1D = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture1D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture1D>;

export function FramebufferTexture1D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture1D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glFramebufferTexture2D = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture2D>;

export function FramebufferTexture2D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture2D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glFramebufferTexture3D = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture3D!: Deno.UnsafeFnPointer<typeof def_glFramebufferTexture3D>;

export function FramebufferTexture3D(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  zoffset: GLint,
): void {
  fn_glFramebufferTexture3D.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    zoffset,
  );
}

export const def_glFramebufferRenderbuffer = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferRenderbuffer!: Deno.UnsafeFnPointer<typeof def_glFramebufferRenderbuffer>;

export function FramebufferRenderbuffer(
  target: GLenum,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glFramebufferRenderbuffer.call(
    target,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glGetFramebufferAttachmentParameteriv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferAttachmentParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferAttachmentParameteriv>;

export function GetFramebufferAttachmentParameteriv(
  target: GLenum,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferAttachmentParameteriv.call(
    target,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGenerateMipmap = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateMipmap!: Deno.UnsafeFnPointer<typeof def_glGenerateMipmap>;

export function GenerateMipmap(
  target: GLenum,
): void {
  fn_glGenerateMipmap.call(
    target,
  );
}

export const def_glBlitFramebuffer = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBlitFramebuffer!: Deno.UnsafeFnPointer<typeof def_glBlitFramebuffer>;

export function BlitFramebuffer(
  srcX0: GLint,
  srcY0: GLint,
  srcX1: GLint,
  srcY1: GLint,
  dstX0: GLint,
  dstY0: GLint,
  dstX1: GLint,
  dstY1: GLint,
  mask: GLbitfield,
  filter: GLenum,
): void {
  fn_glBlitFramebuffer.call(
    srcX0,
    srcY0,
    srcX1,
    srcY1,
    dstX0,
    dstY0,
    dstX1,
    dstY1,
    mask,
    filter,
  );
}

export const def_glRenderbufferStorageMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageMultisample!: Deno.UnsafeFnPointer<typeof def_glRenderbufferStorageMultisample>;

export function RenderbufferStorageMultisample(
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageMultisample.call(
    target,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glFramebufferTextureLayer = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureLayer!: Deno.UnsafeFnPointer<typeof def_glFramebufferTextureLayer>;

export function FramebufferTextureLayer(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glFramebufferTextureLayer.call(
    target,
    attachment,
    texture,
    level,
    layer,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glIsRenderbuffer = new Deno.UnsafeFnPointer(proc("glIsRenderbuffer")!, def_glIsRenderbuffer);
  fn_glBindRenderbuffer = new Deno.UnsafeFnPointer(proc("glBindRenderbuffer")!, def_glBindRenderbuffer);
  fn_glDeleteRenderbuffers = new Deno.UnsafeFnPointer(proc("glDeleteRenderbuffers")!, def_glDeleteRenderbuffers);
  fn_glGenRenderbuffers = new Deno.UnsafeFnPointer(proc("glGenRenderbuffers")!, def_glGenRenderbuffers);
  fn_glRenderbufferStorage = new Deno.UnsafeFnPointer(proc("glRenderbufferStorage")!, def_glRenderbufferStorage);
  fn_glGetRenderbufferParameteriv = new Deno.UnsafeFnPointer(proc("glGetRenderbufferParameteriv")!, def_glGetRenderbufferParameteriv);
  fn_glIsFramebuffer = new Deno.UnsafeFnPointer(proc("glIsFramebuffer")!, def_glIsFramebuffer);
  fn_glBindFramebuffer = new Deno.UnsafeFnPointer(proc("glBindFramebuffer")!, def_glBindFramebuffer);
  fn_glDeleteFramebuffers = new Deno.UnsafeFnPointer(proc("glDeleteFramebuffers")!, def_glDeleteFramebuffers);
  fn_glGenFramebuffers = new Deno.UnsafeFnPointer(proc("glGenFramebuffers")!, def_glGenFramebuffers);
  fn_glCheckFramebufferStatus = new Deno.UnsafeFnPointer(proc("glCheckFramebufferStatus")!, def_glCheckFramebufferStatus);
  fn_glFramebufferTexture1D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture1D")!, def_glFramebufferTexture1D);
  fn_glFramebufferTexture2D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture2D")!, def_glFramebufferTexture2D);
  fn_glFramebufferTexture3D = new Deno.UnsafeFnPointer(proc("glFramebufferTexture3D")!, def_glFramebufferTexture3D);
  fn_glFramebufferRenderbuffer = new Deno.UnsafeFnPointer(proc("glFramebufferRenderbuffer")!, def_glFramebufferRenderbuffer);
  fn_glGetFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(proc("glGetFramebufferAttachmentParameteriv")!, def_glGetFramebufferAttachmentParameteriv);
  fn_glGenerateMipmap = new Deno.UnsafeFnPointer(proc("glGenerateMipmap")!, def_glGenerateMipmap);
  fn_glBlitFramebuffer = new Deno.UnsafeFnPointer(proc("glBlitFramebuffer")!, def_glBlitFramebuffer);
  fn_glRenderbufferStorageMultisample = new Deno.UnsafeFnPointer(proc("glRenderbufferStorageMultisample")!, def_glRenderbufferStorageMultisample);
  fn_glFramebufferTextureLayer = new Deno.UnsafeFnPointer(proc("glFramebufferTextureLayer")!, def_glFramebufferTextureLayer);
}
