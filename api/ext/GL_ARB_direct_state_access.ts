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
export const TEXTURE_TARGET = 0x1006;
export const QUERY_TARGET = 0x82ea;
export const TEXTURE_BINDING_1D = 0x8068;
export const TEXTURE_BINDING_1D_ARRAY = 0x8c1c;
export const TEXTURE_BINDING_2D = 0x8069;
export const TEXTURE_BINDING_2D_ARRAY = 0x8c1d;
export const TEXTURE_BINDING_2D_MULTISAMPLE = 0x9104;
export const TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY = 0x9105;
export const TEXTURE_BINDING_3D = 0x806a;
export const TEXTURE_BINDING_BUFFER = 0x8c2c;
export const TEXTURE_BINDING_CUBE_MAP = 0x8514;
export const TEXTURE_BINDING_CUBE_MAP_ARRAY = 0x900a;
export const TEXTURE_BINDING_RECTANGLE = 0x84f6;

/// Commands

export const def_glCreateTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateTransformFeedbacks!: Deno.UnsafeFnPointer<
  typeof def_glCreateTransformFeedbacks
>;

export function CreateTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glCreateTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glTransformFeedbackBufferBase = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackBufferBase!: Deno.UnsafeFnPointer<
  typeof def_glTransformFeedbackBufferBase
>;

export function TransformFeedbackBufferBase(
  xfb: GLuint,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glTransformFeedbackBufferBase.call(
    xfb,
    index,
    buffer,
  );
}

export const def_glTransformFeedbackBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTransformFeedbackBufferRange!: Deno.UnsafeFnPointer<
  typeof def_glTransformFeedbackBufferRange
>;

export function TransformFeedbackBufferRange(
  xfb: GLuint,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTransformFeedbackBufferRange.call(
    xfb,
    index,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glGetTransformFeedbackiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbackiv!: Deno.UnsafeFnPointer<
  typeof def_glGetTransformFeedbackiv
>;

export function GetTransformFeedbackiv(
  xfb: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetTransformFeedbackiv.call(
    xfb,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetTransformFeedbacki_v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbacki_v!: Deno.UnsafeFnPointer<
  typeof def_glGetTransformFeedbacki_v
>;

export function GetTransformFeedbacki_v(
  xfb: GLuint,
  pname: GLenum,
  index: GLuint,
  param: Buffer,
): void {
  fn_glGetTransformFeedbacki_v.call(
    xfb,
    pname,
    index,
    bufferToFFI(param),
  );
}

export const def_glGetTransformFeedbacki64_v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbacki64_v!: Deno.UnsafeFnPointer<
  typeof def_glGetTransformFeedbacki64_v
>;

export function GetTransformFeedbacki64_v(
  xfb: GLuint,
  pname: GLenum,
  index: GLuint,
  param: Buffer,
): void {
  fn_glGetTransformFeedbacki64_v.call(
    xfb,
    pname,
    index,
    bufferToFFI(param),
  );
}

export const def_glCreateBuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateBuffers!: Deno.UnsafeFnPointer<typeof def_glCreateBuffers>;

export function CreateBuffers(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glCreateBuffers.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glNamedBufferStorage = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferStorage!: Deno.UnsafeFnPointer<
  typeof def_glNamedBufferStorage
>;

export function NamedBufferStorage(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  flags: GLbitfield,
): void {
  fn_glNamedBufferStorage.call(
    buffer,
    size,
    bufferToFFI(data),
    flags,
  );
}

export const def_glNamedBufferData = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferData!: Deno.UnsafeFnPointer<typeof def_glNamedBufferData>;

export function NamedBufferData(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  usage: GLenum,
): void {
  fn_glNamedBufferData.call(
    buffer,
    size,
    bufferToFFI(data),
    usage,
  );
}

export const def_glNamedBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glNamedBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glNamedBufferSubData
>;

export function NamedBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glNamedBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    size,
    bufferToFFI(data),
  );
}

export const def_glCopyNamedBufferSubData = {
  parameters: ["u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glCopyNamedBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glCopyNamedBufferSubData
>;

export function CopyNamedBufferSubData(
  readBuffer: GLuint,
  writeBuffer: GLuint,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glCopyNamedBufferSubData.call(
    readBuffer,
    writeBuffer,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    size,
  );
}

export const def_glClearNamedBufferData = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferData!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedBufferData
>;

export function ClearNamedBufferData(
  buffer: GLuint,
  internalformat: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferData.call(
    buffer,
    internalformat,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearNamedBufferSubData = {
  parameters: ["u32", "u32", "buffer", "isize", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedBufferSubData
>;

export function ClearNamedBufferSubData(
  buffer: GLuint,
  internalformat: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferSubData.call(
    buffer,
    internalformat,
    bufferToFFI(offset),
    size,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glMapNamedBuffer = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBuffer!: Deno.UnsafeFnPointer<typeof def_glMapNamedBuffer>;

export function MapNamedBuffer(
  buffer: GLuint,
  access: GLenum,
): Buffer {
  return fn_glMapNamedBuffer.call(
    buffer,
    access,
  );
}

export const def_glMapNamedBufferRange = {
  parameters: ["u32", "buffer", "isize", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBufferRange!: Deno.UnsafeFnPointer<
  typeof def_glMapNamedBufferRange
>;

export function MapNamedBufferRange(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
  access: GLbitfield,
): Buffer {
  return fn_glMapNamedBufferRange.call(
    buffer,
    bufferToFFI(offset),
    length,
    access,
  );
}

export const def_glUnmapNamedBuffer = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glUnmapNamedBuffer!: Deno.UnsafeFnPointer<typeof def_glUnmapNamedBuffer>;

export function UnmapNamedBuffer(
  buffer: GLuint,
): GLboolean {
  return fn_glUnmapNamedBuffer.call(
    buffer,
  );
}

export const def_glFlushMappedNamedBufferRange = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedNamedBufferRange!: Deno.UnsafeFnPointer<
  typeof def_glFlushMappedNamedBufferRange
>;

export function FlushMappedNamedBufferRange(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedNamedBufferRange.call(
    buffer,
    bufferToFFI(offset),
    length,
  );
}

export const def_glGetNamedBufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedBufferParameteriv
>;

export function GetNamedBufferParameteriv(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameteriv.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferParameteri64v = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameteri64v!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedBufferParameteri64v
>;

export function GetNamedBufferParameteri64v(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameteri64v.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferPointerv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferPointerv!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedBufferPointerv
>;

export function GetNamedBufferPointerv(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferPointerv.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferSubData = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedBufferSubData
>;

export function GetNamedBufferSubData(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glGetNamedBufferSubData.call(
    buffer,
    bufferToFFI(offset),
    size,
    bufferToFFI(data),
  );
}

export const def_glCreateFramebuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateFramebuffers!: Deno.UnsafeFnPointer<
  typeof def_glCreateFramebuffers
>;

export function CreateFramebuffers(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glCreateFramebuffers.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glNamedFramebufferRenderbuffer = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferRenderbuffer!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferRenderbuffer
>;

export function NamedFramebufferRenderbuffer(
  framebuffer: GLuint,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glNamedFramebufferRenderbuffer.call(
    framebuffer,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glNamedFramebufferParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferParameteri!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferParameteri
>;

export function NamedFramebufferParameteri(
  framebuffer: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glNamedFramebufferParameteri.call(
    framebuffer,
    pname,
    param,
  );
}

export const def_glNamedFramebufferTexture = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTexture!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferTexture
>;

export function NamedFramebufferTexture(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glNamedFramebufferTexture.call(
    framebuffer,
    attachment,
    texture,
    level,
  );
}

export const def_glNamedFramebufferTextureLayer = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTextureLayer!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferTextureLayer
>;

export function NamedFramebufferTextureLayer(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glNamedFramebufferTextureLayer.call(
    framebuffer,
    attachment,
    texture,
    level,
    layer,
  );
}

export const def_glNamedFramebufferDrawBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferDrawBuffer!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferDrawBuffer
>;

export function NamedFramebufferDrawBuffer(
  framebuffer: GLuint,
  buf: GLenum,
): void {
  fn_glNamedFramebufferDrawBuffer.call(
    framebuffer,
    buf,
  );
}

export const def_glNamedFramebufferDrawBuffers = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedFramebufferDrawBuffers!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferDrawBuffers
>;

export function NamedFramebufferDrawBuffers(
  framebuffer: GLuint,
  n: GLsizei,
  bufs: Buffer,
): void {
  fn_glNamedFramebufferDrawBuffers.call(
    framebuffer,
    n,
    bufferToFFI(bufs),
  );
}

export const def_glNamedFramebufferReadBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferReadBuffer!: Deno.UnsafeFnPointer<
  typeof def_glNamedFramebufferReadBuffer
>;

export function NamedFramebufferReadBuffer(
  framebuffer: GLuint,
  src: GLenum,
): void {
  fn_glNamedFramebufferReadBuffer.call(
    framebuffer,
    src,
  );
}

export const def_glInvalidateNamedFramebufferData = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glInvalidateNamedFramebufferData!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateNamedFramebufferData
>;

export function InvalidateNamedFramebufferData(
  framebuffer: GLuint,
  numAttachments: GLsizei,
  attachments: Buffer,
): void {
  fn_glInvalidateNamedFramebufferData.call(
    framebuffer,
    numAttachments,
    bufferToFFI(attachments),
  );
}

export const def_glInvalidateNamedFramebufferSubData = {
  parameters: ["u32", "i32", "buffer", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glInvalidateNamedFramebufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glInvalidateNamedFramebufferSubData
>;

export function InvalidateNamedFramebufferSubData(
  framebuffer: GLuint,
  numAttachments: GLsizei,
  attachments: Buffer,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glInvalidateNamedFramebufferSubData.call(
    framebuffer,
    numAttachments,
    bufferToFFI(attachments),
    x,
    y,
    width,
    height,
  );
}

export const def_glClearNamedFramebufferiv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferiv!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedFramebufferiv
>;

export function ClearNamedFramebufferiv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferiv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferuiv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferuiv!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedFramebufferuiv
>;

export function ClearNamedFramebufferuiv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferuiv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferfv = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferfv!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedFramebufferfv
>;

export function ClearNamedFramebufferfv(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  value: Buffer,
): void {
  fn_glClearNamedFramebufferfv.call(
    framebuffer,
    buffer,
    drawbuffer,
    bufferToFFI(value),
  );
}

export const def_glClearNamedFramebufferfi = {
  parameters: ["u32", "u32", "i32", "f32", "i32"],
  result: "void",
} as const;

let fn_glClearNamedFramebufferfi!: Deno.UnsafeFnPointer<
  typeof def_glClearNamedFramebufferfi
>;

export function ClearNamedFramebufferfi(
  framebuffer: GLuint,
  buffer: GLenum,
  drawbuffer: GLint,
  depth: GLfloat,
  stencil: GLint,
): void {
  fn_glClearNamedFramebufferfi.call(
    framebuffer,
    buffer,
    drawbuffer,
    depth,
    stencil,
  );
}

export const def_glBlitNamedFramebuffer = {
  parameters: [
    "u32",
    "u32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "u32",
    "u32",
  ],
  result: "void",
} as const;

let fn_glBlitNamedFramebuffer!: Deno.UnsafeFnPointer<
  typeof def_glBlitNamedFramebuffer
>;

export function BlitNamedFramebuffer(
  readFramebuffer: GLuint,
  drawFramebuffer: GLuint,
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
  fn_glBlitNamedFramebuffer.call(
    readFramebuffer,
    drawFramebuffer,
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

export const def_glCheckNamedFramebufferStatus = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glCheckNamedFramebufferStatus!: Deno.UnsafeFnPointer<
  typeof def_glCheckNamedFramebufferStatus
>;

export function CheckNamedFramebufferStatus(
  framebuffer: GLuint,
  target: GLenum,
): GLenum {
  return fn_glCheckNamedFramebufferStatus.call(
    framebuffer,
    target,
  );
}

export const def_glGetNamedFramebufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedFramebufferParameteriv
>;

export function GetNamedFramebufferParameteriv(
  framebuffer: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetNamedFramebufferParameteriv.call(
    framebuffer,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetNamedFramebufferAttachmentParameteriv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferAttachmentParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedFramebufferAttachmentParameteriv
>;

export function GetNamedFramebufferAttachmentParameteriv(
  framebuffer: GLuint,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedFramebufferAttachmentParameteriv.call(
    framebuffer,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateRenderbuffers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateRenderbuffers!: Deno.UnsafeFnPointer<
  typeof def_glCreateRenderbuffers
>;

export function CreateRenderbuffers(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glCreateRenderbuffers.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glNamedRenderbufferStorage = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorage!: Deno.UnsafeFnPointer<
  typeof def_glNamedRenderbufferStorage
>;

export function NamedRenderbufferStorage(
  renderbuffer: GLuint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorage.call(
    renderbuffer,
    internalformat,
    width,
    height,
  );
}

export const def_glNamedRenderbufferStorageMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorageMultisample!: Deno.UnsafeFnPointer<
  typeof def_glNamedRenderbufferStorageMultisample
>;

export function NamedRenderbufferStorageMultisample(
  renderbuffer: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorageMultisample.call(
    renderbuffer,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glGetNamedRenderbufferParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedRenderbufferParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetNamedRenderbufferParameteriv
>;

export function GetNamedRenderbufferParameteriv(
  renderbuffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedRenderbufferParameteriv.call(
    renderbuffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateTextures!: Deno.UnsafeFnPointer<typeof def_glCreateTextures>;

export function CreateTextures(
  target: GLenum,
  n: GLsizei,
  textures: Buffer,
): void {
  fn_glCreateTextures.call(
    target,
    n,
    bufferToFFI(textures),
  );
}

export const def_glTextureBuffer = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTextureBuffer!: Deno.UnsafeFnPointer<typeof def_glTextureBuffer>;

export function TextureBuffer(
  texture: GLuint,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glTextureBuffer.call(
    texture,
    internalformat,
    buffer,
  );
}

export const def_glTextureBufferRange = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTextureBufferRange!: Deno.UnsafeFnPointer<
  typeof def_glTextureBufferRange
>;

export function TextureBufferRange(
  texture: GLuint,
  internalformat: GLenum,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTextureBufferRange.call(
    texture,
    internalformat,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glTextureStorage1D = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage1D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage1D>;

export function TextureStorage1D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTextureStorage1D.call(
    texture,
    levels,
    internalformat,
    width,
  );
}

export const def_glTextureStorage2D = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage2D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2D>;

export function TextureStorage2D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTextureStorage2D.call(
    texture,
    levels,
    internalformat,
    width,
    height,
  );
}

export const def_glTextureStorage3D = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage3D!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3D>;

export function TextureStorage3D(
  texture: GLuint,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTextureStorage3D.call(
    texture,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

export const def_glTextureStorage2DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage2DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTextureStorage2DMultisample
>;

export function TextureStorage2DMultisample(
  texture: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage2DMultisample.call(
    texture,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glTextureStorage3DMultisample = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage3DMultisample!: Deno.UnsafeFnPointer<
  typeof def_glTextureStorage3DMultisample
>;

export function TextureStorage3DMultisample(
  texture: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage3DMultisample.call(
    texture,
    samples,
    internalformat,
    width,
    height,
    depth,
    fixedsamplelocations,
  );
}

export const def_glTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage1D!: Deno.UnsafeFnPointer<
  typeof def_glTextureSubImage1D
>;

export function TextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureSubImage2D = {
  parameters: [
    "u32",
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

let fn_glTextureSubImage2D!: Deno.UnsafeFnPointer<
  typeof def_glTextureSubImage2D
>;

export function TextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage2D.call(
    texture,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureSubImage3D = {
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

let fn_glTextureSubImage3D!: Deno.UnsafeFnPointer<
  typeof def_glTextureSubImage3D
>;

export function TextureSubImage3D(
  texture: GLuint,
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
  fn_glTextureSubImage3D.call(
    texture,
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

export const def_glCompressedTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage1D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTextureSubImage1D
>;

export function CompressedTextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTextureSubImage2D = {
  parameters: [
    "u32",
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

let fn_glCompressedTextureSubImage2D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTextureSubImage2D
>;

export function CompressedTextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  data: Buffer,
): void {
  fn_glCompressedTextureSubImage2D.call(
    texture,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    imageSize,
    bufferToFFI(data),
  );
}

export const def_glCompressedTextureSubImage3D = {
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

let fn_glCompressedTextureSubImage3D!: Deno.UnsafeFnPointer<
  typeof def_glCompressedTextureSubImage3D
>;

export function CompressedTextureSubImage3D(
  texture: GLuint,
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
  fn_glCompressedTextureSubImage3D.call(
    texture,
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

export const def_glCopyTextureSubImage1D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage1D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTextureSubImage1D
>;

export function CopyTextureSubImage1D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyTextureSubImage1D.call(
    texture,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyTextureSubImage2D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage2D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTextureSubImage2D
>;

export function CopyTextureSubImage2D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTextureSubImage2D.call(
    texture,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glCopyTextureSubImage3D = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage3D!: Deno.UnsafeFnPointer<
  typeof def_glCopyTextureSubImage3D
>;

export function CopyTextureSubImage3D(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTextureSubImage3D.call(
    texture,
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

export const def_glTextureParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTextureParameterf!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameterf
>;

export function TextureParameterf(
  texture: GLuint,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTextureParameterf.call(
    texture,
    pname,
    param,
  );
}

export const def_glTextureParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameterfv
>;

export function TextureParameterfv(
  texture: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTextureParameterfv.call(
    texture,
    pname,
    bufferToFFI(param),
  );
}

export const def_glTextureParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureParameteri!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameteri
>;

export function TextureParameteri(
  texture: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTextureParameteri.call(
    texture,
    pname,
    param,
  );
}

export const def_glTextureParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIiv!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameterIiv
>;

export function TextureParameterIiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIuiv!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameterIuiv
>;

export function TextureParameterIuiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIuiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glTextureParameteriv
>;

export function TextureParameteriv(
  texture: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glTextureParameteriv.call(
    texture,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGenerateTextureMipmap = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateTextureMipmap!: Deno.UnsafeFnPointer<
  typeof def_glGenerateTextureMipmap
>;

export function GenerateTextureMipmap(
  texture: GLuint,
): void {
  fn_glGenerateTextureMipmap.call(
    texture,
  );
}

export const def_glBindTextureUnit = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTextureUnit!: Deno.UnsafeFnPointer<typeof def_glBindTextureUnit>;

export function BindTextureUnit(
  unit: GLuint,
  texture: GLuint,
): void {
  fn_glBindTextureUnit.call(
    unit,
    texture,
  );
}

export const def_glGetTextureImage = {
  parameters: ["u32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureImage!: Deno.UnsafeFnPointer<typeof def_glGetTextureImage>;

export function GetTextureImage(
  texture: GLuint,
  level: GLint,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetTextureImage.call(
    texture,
    level,
    format,
    type,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetCompressedTextureImage = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTextureImage!: Deno.UnsafeFnPointer<
  typeof def_glGetCompressedTextureImage
>;

export function GetCompressedTextureImage(
  texture: GLuint,
  level: GLint,
  bufSize: GLsizei,
  pixels: Buffer,
): void {
  fn_glGetCompressedTextureImage.call(
    texture,
    level,
    bufSize,
    bufferToFFI(pixels),
  );
}

export const def_glGetTextureLevelParameterfv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureLevelParameterfv
>;

export function GetTextureLevelParameterfv(
  texture: GLuint,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameterfv.call(
    texture,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureLevelParameteriv = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureLevelParameteriv
>;

export function GetTextureLevelParameteriv(
  texture: GLuint,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameteriv.call(
    texture,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterfv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureParameterfv
>;

export function GetTextureParameterfv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterfv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIiv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureParameterIiv
>;

export function GetTextureParameterIiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureParameterIuiv
>;

export function GetTextureParameterIuiv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIuiv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameteriv!: Deno.UnsafeFnPointer<
  typeof def_glGetTextureParameteriv
>;

export function GetTextureParameteriv(
  texture: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameteriv.call(
    texture,
    pname,
    bufferToFFI(params),
  );
}

export const def_glCreateVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateVertexArrays!: Deno.UnsafeFnPointer<
  typeof def_glCreateVertexArrays
>;

export function CreateVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glCreateVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glDisableVertexArrayAttrib = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableVertexArrayAttrib!: Deno.UnsafeFnPointer<
  typeof def_glDisableVertexArrayAttrib
>;

export function DisableVertexArrayAttrib(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glDisableVertexArrayAttrib.call(
    vaobj,
    index,
  );
}

export const def_glEnableVertexArrayAttrib = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableVertexArrayAttrib!: Deno.UnsafeFnPointer<
  typeof def_glEnableVertexArrayAttrib
>;

export function EnableVertexArrayAttrib(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glEnableVertexArrayAttrib.call(
    vaobj,
    index,
  );
}

export const def_glVertexArrayElementBuffer = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayElementBuffer!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayElementBuffer
>;

export function VertexArrayElementBuffer(
  vaobj: GLuint,
  buffer: GLuint,
): void {
  fn_glVertexArrayElementBuffer.call(
    vaobj,
    buffer,
  );
}

export const def_glVertexArrayVertexBuffer = {
  parameters: ["u32", "u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexBuffer!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayVertexBuffer
>;

export function VertexArrayVertexBuffer(
  vaobj: GLuint,
  bindingindex: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  stride: GLsizei,
): void {
  fn_glVertexArrayVertexBuffer.call(
    vaobj,
    bindingindex,
    buffer,
    bufferToFFI(offset),
    stride,
  );
}

export const def_glVertexArrayVertexBuffers = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexBuffers!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayVertexBuffers
>;

export function VertexArrayVertexBuffers(
  vaobj: GLuint,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  strides: Buffer,
): void {
  fn_glVertexArrayVertexBuffers.call(
    vaobj,
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(strides),
  );
}

export const def_glVertexArrayAttribBinding = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribBinding!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayAttribBinding
>;

export function VertexArrayAttribBinding(
  vaobj: GLuint,
  attribindex: GLuint,
  bindingindex: GLuint,
): void {
  fn_glVertexArrayAttribBinding.call(
    vaobj,
    attribindex,
    bindingindex,
  );
}

export const def_glVertexArrayAttribFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribFormat!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayAttribFormat
>;

export function VertexArrayAttribFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    normalized,
    relativeoffset,
  );
}

export const def_glVertexArrayAttribIFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribIFormat!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayAttribIFormat
>;

export function VertexArrayAttribIFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribIFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayAttribLFormat = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayAttribLFormat!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayAttribLFormat
>;

export function VertexArrayAttribLFormat(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayAttribLFormat.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayBindingDivisor = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayBindingDivisor!: Deno.UnsafeFnPointer<
  typeof def_glVertexArrayBindingDivisor
>;

export function VertexArrayBindingDivisor(
  vaobj: GLuint,
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexArrayBindingDivisor.call(
    vaobj,
    bindingindex,
    divisor,
  );
}

export const def_glGetVertexArrayiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayiv!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayiv>;

export function GetVertexArrayiv(
  vaobj: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayiv.call(
    vaobj,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayIndexediv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIndexediv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexArrayIndexediv
>;

export function GetVertexArrayIndexediv(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIndexediv.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayIndexed64iv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIndexed64iv!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexArrayIndexed64iv
>;

export function GetVertexArrayIndexed64iv(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIndexed64iv.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glCreateSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateSamplers!: Deno.UnsafeFnPointer<typeof def_glCreateSamplers>;

export function CreateSamplers(
  n: GLsizei,
  samplers: Buffer,
): void {
  fn_glCreateSamplers.call(
    n,
    bufferToFFI(samplers),
  );
}

export const def_glCreateProgramPipelines = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateProgramPipelines!: Deno.UnsafeFnPointer<
  typeof def_glCreateProgramPipelines
>;

export function CreateProgramPipelines(
  n: GLsizei,
  pipelines: Buffer,
): void {
  fn_glCreateProgramPipelines.call(
    n,
    bufferToFFI(pipelines),
  );
}

export const def_glCreateQueries = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateQueries!: Deno.UnsafeFnPointer<typeof def_glCreateQueries>;

export function CreateQueries(
  target: GLenum,
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glCreateQueries.call(
    target,
    n,
    bufferToFFI(ids),
  );
}

export const def_glGetQueryBufferObjecti64v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjecti64v!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryBufferObjecti64v
>;

export function GetQueryBufferObjecti64v(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjecti64v.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectiv!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryBufferObjectiv
>;

export function GetQueryBufferObjectiv(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectiv.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectui64v = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectui64v!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryBufferObjectui64v
>;

export function GetQueryBufferObjectui64v(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectui64v.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

export const def_glGetQueryBufferObjectuiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryBufferObjectuiv!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryBufferObjectuiv
>;

export function GetQueryBufferObjectuiv(
  id: GLuint,
  buffer: GLuint,
  pname: GLenum,
  offset: GLintptr,
): void {
  fn_glGetQueryBufferObjectuiv.call(
    id,
    buffer,
    pname,
    bufferToFFI(offset),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCreateTransformFeedbacks = new Deno.UnsafeFnPointer(
    proc("glCreateTransformFeedbacks"),
    def_glCreateTransformFeedbacks,
  );
  fn_glTransformFeedbackBufferBase = new Deno.UnsafeFnPointer(
    proc("glTransformFeedbackBufferBase"),
    def_glTransformFeedbackBufferBase,
  );
  fn_glTransformFeedbackBufferRange = new Deno.UnsafeFnPointer(
    proc("glTransformFeedbackBufferRange"),
    def_glTransformFeedbackBufferRange,
  );
  fn_glGetTransformFeedbackiv = new Deno.UnsafeFnPointer(
    proc("glGetTransformFeedbackiv"),
    def_glGetTransformFeedbackiv,
  );
  fn_glGetTransformFeedbacki_v = new Deno.UnsafeFnPointer(
    proc("glGetTransformFeedbacki_v"),
    def_glGetTransformFeedbacki_v,
  );
  fn_glGetTransformFeedbacki64_v = new Deno.UnsafeFnPointer(
    proc("glGetTransformFeedbacki64_v"),
    def_glGetTransformFeedbacki64_v,
  );
  fn_glCreateBuffers = new Deno.UnsafeFnPointer(
    proc("glCreateBuffers"),
    def_glCreateBuffers,
  );
  fn_glNamedBufferStorage = new Deno.UnsafeFnPointer(
    proc("glNamedBufferStorage"),
    def_glNamedBufferStorage,
  );
  fn_glNamedBufferData = new Deno.UnsafeFnPointer(
    proc("glNamedBufferData"),
    def_glNamedBufferData,
  );
  fn_glNamedBufferSubData = new Deno.UnsafeFnPointer(
    proc("glNamedBufferSubData"),
    def_glNamedBufferSubData,
  );
  fn_glCopyNamedBufferSubData = new Deno.UnsafeFnPointer(
    proc("glCopyNamedBufferSubData"),
    def_glCopyNamedBufferSubData,
  );
  fn_glClearNamedBufferData = new Deno.UnsafeFnPointer(
    proc("glClearNamedBufferData"),
    def_glClearNamedBufferData,
  );
  fn_glClearNamedBufferSubData = new Deno.UnsafeFnPointer(
    proc("glClearNamedBufferSubData"),
    def_glClearNamedBufferSubData,
  );
  fn_glMapNamedBuffer = new Deno.UnsafeFnPointer(
    proc("glMapNamedBuffer"),
    def_glMapNamedBuffer,
  );
  fn_glMapNamedBufferRange = new Deno.UnsafeFnPointer(
    proc("glMapNamedBufferRange"),
    def_glMapNamedBufferRange,
  );
  fn_glUnmapNamedBuffer = new Deno.UnsafeFnPointer(
    proc("glUnmapNamedBuffer"),
    def_glUnmapNamedBuffer,
  );
  fn_glFlushMappedNamedBufferRange = new Deno.UnsafeFnPointer(
    proc("glFlushMappedNamedBufferRange"),
    def_glFlushMappedNamedBufferRange,
  );
  fn_glGetNamedBufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetNamedBufferParameteriv"),
    def_glGetNamedBufferParameteriv,
  );
  fn_glGetNamedBufferParameteri64v = new Deno.UnsafeFnPointer(
    proc("glGetNamedBufferParameteri64v"),
    def_glGetNamedBufferParameteri64v,
  );
  fn_glGetNamedBufferPointerv = new Deno.UnsafeFnPointer(
    proc("glGetNamedBufferPointerv"),
    def_glGetNamedBufferPointerv,
  );
  fn_glGetNamedBufferSubData = new Deno.UnsafeFnPointer(
    proc("glGetNamedBufferSubData"),
    def_glGetNamedBufferSubData,
  );
  fn_glCreateFramebuffers = new Deno.UnsafeFnPointer(
    proc("glCreateFramebuffers"),
    def_glCreateFramebuffers,
  );
  fn_glNamedFramebufferRenderbuffer = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferRenderbuffer"),
    def_glNamedFramebufferRenderbuffer,
  );
  fn_glNamedFramebufferParameteri = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferParameteri"),
    def_glNamedFramebufferParameteri,
  );
  fn_glNamedFramebufferTexture = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferTexture"),
    def_glNamedFramebufferTexture,
  );
  fn_glNamedFramebufferTextureLayer = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferTextureLayer"),
    def_glNamedFramebufferTextureLayer,
  );
  fn_glNamedFramebufferDrawBuffer = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferDrawBuffer"),
    def_glNamedFramebufferDrawBuffer,
  );
  fn_glNamedFramebufferDrawBuffers = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferDrawBuffers"),
    def_glNamedFramebufferDrawBuffers,
  );
  fn_glNamedFramebufferReadBuffer = new Deno.UnsafeFnPointer(
    proc("glNamedFramebufferReadBuffer"),
    def_glNamedFramebufferReadBuffer,
  );
  fn_glInvalidateNamedFramebufferData = new Deno.UnsafeFnPointer(
    proc("glInvalidateNamedFramebufferData"),
    def_glInvalidateNamedFramebufferData,
  );
  fn_glInvalidateNamedFramebufferSubData = new Deno.UnsafeFnPointer(
    proc("glInvalidateNamedFramebufferSubData"),
    def_glInvalidateNamedFramebufferSubData,
  );
  fn_glClearNamedFramebufferiv = new Deno.UnsafeFnPointer(
    proc("glClearNamedFramebufferiv"),
    def_glClearNamedFramebufferiv,
  );
  fn_glClearNamedFramebufferuiv = new Deno.UnsafeFnPointer(
    proc("glClearNamedFramebufferuiv"),
    def_glClearNamedFramebufferuiv,
  );
  fn_glClearNamedFramebufferfv = new Deno.UnsafeFnPointer(
    proc("glClearNamedFramebufferfv"),
    def_glClearNamedFramebufferfv,
  );
  fn_glClearNamedFramebufferfi = new Deno.UnsafeFnPointer(
    proc("glClearNamedFramebufferfi"),
    def_glClearNamedFramebufferfi,
  );
  fn_glBlitNamedFramebuffer = new Deno.UnsafeFnPointer(
    proc("glBlitNamedFramebuffer"),
    def_glBlitNamedFramebuffer,
  );
  fn_glCheckNamedFramebufferStatus = new Deno.UnsafeFnPointer(
    proc("glCheckNamedFramebufferStatus"),
    def_glCheckNamedFramebufferStatus,
  );
  fn_glGetNamedFramebufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetNamedFramebufferParameteriv"),
    def_glGetNamedFramebufferParameteriv,
  );
  fn_glGetNamedFramebufferAttachmentParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetNamedFramebufferAttachmentParameteriv"),
    def_glGetNamedFramebufferAttachmentParameteriv,
  );
  fn_glCreateRenderbuffers = new Deno.UnsafeFnPointer(
    proc("glCreateRenderbuffers"),
    def_glCreateRenderbuffers,
  );
  fn_glNamedRenderbufferStorage = new Deno.UnsafeFnPointer(
    proc("glNamedRenderbufferStorage"),
    def_glNamedRenderbufferStorage,
  );
  fn_glNamedRenderbufferStorageMultisample = new Deno.UnsafeFnPointer(
    proc("glNamedRenderbufferStorageMultisample"),
    def_glNamedRenderbufferStorageMultisample,
  );
  fn_glGetNamedRenderbufferParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetNamedRenderbufferParameteriv"),
    def_glGetNamedRenderbufferParameteriv,
  );
  fn_glCreateTextures = new Deno.UnsafeFnPointer(
    proc("glCreateTextures"),
    def_glCreateTextures,
  );
  fn_glTextureBuffer = new Deno.UnsafeFnPointer(
    proc("glTextureBuffer"),
    def_glTextureBuffer,
  );
  fn_glTextureBufferRange = new Deno.UnsafeFnPointer(
    proc("glTextureBufferRange"),
    def_glTextureBufferRange,
  );
  fn_glTextureStorage1D = new Deno.UnsafeFnPointer(
    proc("glTextureStorage1D"),
    def_glTextureStorage1D,
  );
  fn_glTextureStorage2D = new Deno.UnsafeFnPointer(
    proc("glTextureStorage2D"),
    def_glTextureStorage2D,
  );
  fn_glTextureStorage3D = new Deno.UnsafeFnPointer(
    proc("glTextureStorage3D"),
    def_glTextureStorage3D,
  );
  fn_glTextureStorage2DMultisample = new Deno.UnsafeFnPointer(
    proc("glTextureStorage2DMultisample"),
    def_glTextureStorage2DMultisample,
  );
  fn_glTextureStorage3DMultisample = new Deno.UnsafeFnPointer(
    proc("glTextureStorage3DMultisample"),
    def_glTextureStorage3DMultisample,
  );
  fn_glTextureSubImage1D = new Deno.UnsafeFnPointer(
    proc("glTextureSubImage1D"),
    def_glTextureSubImage1D,
  );
  fn_glTextureSubImage2D = new Deno.UnsafeFnPointer(
    proc("glTextureSubImage2D"),
    def_glTextureSubImage2D,
  );
  fn_glTextureSubImage3D = new Deno.UnsafeFnPointer(
    proc("glTextureSubImage3D"),
    def_glTextureSubImage3D,
  );
  fn_glCompressedTextureSubImage1D = new Deno.UnsafeFnPointer(
    proc("glCompressedTextureSubImage1D"),
    def_glCompressedTextureSubImage1D,
  );
  fn_glCompressedTextureSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCompressedTextureSubImage2D"),
    def_glCompressedTextureSubImage2D,
  );
  fn_glCompressedTextureSubImage3D = new Deno.UnsafeFnPointer(
    proc("glCompressedTextureSubImage3D"),
    def_glCompressedTextureSubImage3D,
  );
  fn_glCopyTextureSubImage1D = new Deno.UnsafeFnPointer(
    proc("glCopyTextureSubImage1D"),
    def_glCopyTextureSubImage1D,
  );
  fn_glCopyTextureSubImage2D = new Deno.UnsafeFnPointer(
    proc("glCopyTextureSubImage2D"),
    def_glCopyTextureSubImage2D,
  );
  fn_glCopyTextureSubImage3D = new Deno.UnsafeFnPointer(
    proc("glCopyTextureSubImage3D"),
    def_glCopyTextureSubImage3D,
  );
  fn_glTextureParameterf = new Deno.UnsafeFnPointer(
    proc("glTextureParameterf"),
    def_glTextureParameterf,
  );
  fn_glTextureParameterfv = new Deno.UnsafeFnPointer(
    proc("glTextureParameterfv"),
    def_glTextureParameterfv,
  );
  fn_glTextureParameteri = new Deno.UnsafeFnPointer(
    proc("glTextureParameteri"),
    def_glTextureParameteri,
  );
  fn_glTextureParameterIiv = new Deno.UnsafeFnPointer(
    proc("glTextureParameterIiv"),
    def_glTextureParameterIiv,
  );
  fn_glTextureParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glTextureParameterIuiv"),
    def_glTextureParameterIuiv,
  );
  fn_glTextureParameteriv = new Deno.UnsafeFnPointer(
    proc("glTextureParameteriv"),
    def_glTextureParameteriv,
  );
  fn_glGenerateTextureMipmap = new Deno.UnsafeFnPointer(
    proc("glGenerateTextureMipmap"),
    def_glGenerateTextureMipmap,
  );
  fn_glBindTextureUnit = new Deno.UnsafeFnPointer(
    proc("glBindTextureUnit"),
    def_glBindTextureUnit,
  );
  fn_glGetTextureImage = new Deno.UnsafeFnPointer(
    proc("glGetTextureImage"),
    def_glGetTextureImage,
  );
  fn_glGetCompressedTextureImage = new Deno.UnsafeFnPointer(
    proc("glGetCompressedTextureImage"),
    def_glGetCompressedTextureImage,
  );
  fn_glGetTextureLevelParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTextureLevelParameterfv"),
    def_glGetTextureLevelParameterfv,
  );
  fn_glGetTextureLevelParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTextureLevelParameteriv"),
    def_glGetTextureLevelParameteriv,
  );
  fn_glGetTextureParameterfv = new Deno.UnsafeFnPointer(
    proc("glGetTextureParameterfv"),
    def_glGetTextureParameterfv,
  );
  fn_glGetTextureParameterIiv = new Deno.UnsafeFnPointer(
    proc("glGetTextureParameterIiv"),
    def_glGetTextureParameterIiv,
  );
  fn_glGetTextureParameterIuiv = new Deno.UnsafeFnPointer(
    proc("glGetTextureParameterIuiv"),
    def_glGetTextureParameterIuiv,
  );
  fn_glGetTextureParameteriv = new Deno.UnsafeFnPointer(
    proc("glGetTextureParameteriv"),
    def_glGetTextureParameteriv,
  );
  fn_glCreateVertexArrays = new Deno.UnsafeFnPointer(
    proc("glCreateVertexArrays"),
    def_glCreateVertexArrays,
  );
  fn_glDisableVertexArrayAttrib = new Deno.UnsafeFnPointer(
    proc("glDisableVertexArrayAttrib"),
    def_glDisableVertexArrayAttrib,
  );
  fn_glEnableVertexArrayAttrib = new Deno.UnsafeFnPointer(
    proc("glEnableVertexArrayAttrib"),
    def_glEnableVertexArrayAttrib,
  );
  fn_glVertexArrayElementBuffer = new Deno.UnsafeFnPointer(
    proc("glVertexArrayElementBuffer"),
    def_glVertexArrayElementBuffer,
  );
  fn_glVertexArrayVertexBuffer = new Deno.UnsafeFnPointer(
    proc("glVertexArrayVertexBuffer"),
    def_glVertexArrayVertexBuffer,
  );
  fn_glVertexArrayVertexBuffers = new Deno.UnsafeFnPointer(
    proc("glVertexArrayVertexBuffers"),
    def_glVertexArrayVertexBuffers,
  );
  fn_glVertexArrayAttribBinding = new Deno.UnsafeFnPointer(
    proc("glVertexArrayAttribBinding"),
    def_glVertexArrayAttribBinding,
  );
  fn_glVertexArrayAttribFormat = new Deno.UnsafeFnPointer(
    proc("glVertexArrayAttribFormat"),
    def_glVertexArrayAttribFormat,
  );
  fn_glVertexArrayAttribIFormat = new Deno.UnsafeFnPointer(
    proc("glVertexArrayAttribIFormat"),
    def_glVertexArrayAttribIFormat,
  );
  fn_glVertexArrayAttribLFormat = new Deno.UnsafeFnPointer(
    proc("glVertexArrayAttribLFormat"),
    def_glVertexArrayAttribLFormat,
  );
  fn_glVertexArrayBindingDivisor = new Deno.UnsafeFnPointer(
    proc("glVertexArrayBindingDivisor"),
    def_glVertexArrayBindingDivisor,
  );
  fn_glGetVertexArrayiv = new Deno.UnsafeFnPointer(
    proc("glGetVertexArrayiv"),
    def_glGetVertexArrayiv,
  );
  fn_glGetVertexArrayIndexediv = new Deno.UnsafeFnPointer(
    proc("glGetVertexArrayIndexediv"),
    def_glGetVertexArrayIndexediv,
  );
  fn_glGetVertexArrayIndexed64iv = new Deno.UnsafeFnPointer(
    proc("glGetVertexArrayIndexed64iv"),
    def_glGetVertexArrayIndexed64iv,
  );
  fn_glCreateSamplers = new Deno.UnsafeFnPointer(
    proc("glCreateSamplers"),
    def_glCreateSamplers,
  );
  fn_glCreateProgramPipelines = new Deno.UnsafeFnPointer(
    proc("glCreateProgramPipelines"),
    def_glCreateProgramPipelines,
  );
  fn_glCreateQueries = new Deno.UnsafeFnPointer(
    proc("glCreateQueries"),
    def_glCreateQueries,
  );
  fn_glGetQueryBufferObjecti64v = new Deno.UnsafeFnPointer(
    proc("glGetQueryBufferObjecti64v"),
    def_glGetQueryBufferObjecti64v,
  );
  fn_glGetQueryBufferObjectiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryBufferObjectiv"),
    def_glGetQueryBufferObjectiv,
  );
  fn_glGetQueryBufferObjectui64v = new Deno.UnsafeFnPointer(
    proc("glGetQueryBufferObjectui64v"),
    def_glGetQueryBufferObjectui64v,
  );
  fn_glGetQueryBufferObjectuiv = new Deno.UnsafeFnPointer(
    proc("glGetQueryBufferObjectuiv"),
    def_glGetQueryBufferObjectuiv,
  );
}
