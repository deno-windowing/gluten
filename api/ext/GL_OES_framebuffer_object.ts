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
export const NONE_OES = 0x0;
export const FRAMEBUFFER_OES = 0x8d40;
export const RENDERBUFFER_OES = 0x8d41;
export const RGBA4_OES = 0x8056;
export const RGB5_A1_OES = 0x8057;
export const RGB565_OES = 0x8d62;
export const DEPTH_COMPONENT16_OES = 0x81a5;
export const RENDERBUFFER_WIDTH_OES = 0x8d42;
export const RENDERBUFFER_HEIGHT_OES = 0x8d43;
export const RENDERBUFFER_INTERNAL_FORMAT_OES = 0x8d44;
export const RENDERBUFFER_RED_SIZE_OES = 0x8d50;
export const RENDERBUFFER_GREEN_SIZE_OES = 0x8d51;
export const RENDERBUFFER_BLUE_SIZE_OES = 0x8d52;
export const RENDERBUFFER_ALPHA_SIZE_OES = 0x8d53;
export const RENDERBUFFER_DEPTH_SIZE_OES = 0x8d54;
export const RENDERBUFFER_STENCIL_SIZE_OES = 0x8d55;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_OES = 0x8cd0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_OES = 0x8cd1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_OES = 0x8cd2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_OES = 0x8cd3;
export const COLOR_ATTACHMENT0_OES = 0x8ce0;
export const DEPTH_ATTACHMENT_OES = 0x8d00;
export const STENCIL_ATTACHMENT_OES = 0x8d20;
export const FRAMEBUFFER_COMPLETE_OES = 0x8cd5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT_OES = 0x8cd6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_OES = 0x8cd7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS_OES = 0x8cd9;
export const FRAMEBUFFER_INCOMPLETE_FORMATS_OES = 0x8cda;
export const FRAMEBUFFER_UNSUPPORTED_OES = 0x8cdd;
export const FRAMEBUFFER_BINDING_OES = 0x8ca6;
export const RENDERBUFFER_BINDING_OES = 0x8ca7;
export const MAX_RENDERBUFFER_SIZE_OES = 0x84e8;
export const INVALID_FRAMEBUFFER_OPERATION_OES = 0x506;

/// Commands

export const def_glIsRenderbufferOES = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsRenderbufferOES!: Deno.UnsafeFnPointer<
  typeof def_glIsRenderbufferOES
>;

export function IsRenderbufferOES(
  renderbuffer: GLuint,
): GLboolean {
  return fn_glIsRenderbufferOES.call(
    renderbuffer,
  );
}

export const def_glBindRenderbufferOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindRenderbufferOES!: Deno.UnsafeFnPointer<
  typeof def_glBindRenderbufferOES
>;

export function BindRenderbufferOES(
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glBindRenderbufferOES.call(
    target,
    renderbuffer,
  );
}

export const def_glDeleteRenderbuffersOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteRenderbuffersOES!: Deno.UnsafeFnPointer<
  typeof def_glDeleteRenderbuffersOES
>;

export function DeleteRenderbuffersOES(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glDeleteRenderbuffersOES.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glGenRenderbuffersOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenRenderbuffersOES!: Deno.UnsafeFnPointer<
  typeof def_glGenRenderbuffersOES
>;

export function GenRenderbuffersOES(
  n: GLsizei,
  renderbuffers: Buffer,
): void {
  fn_glGenRenderbuffersOES.call(
    n,
    bufferToFFI(renderbuffers),
  );
}

export const def_glRenderbufferStorageOES = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRenderbufferStorageOES!: Deno.UnsafeFnPointer<
  typeof def_glRenderbufferStorageOES
>;

export function RenderbufferStorageOES(
  target: GLenum,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glRenderbufferStorageOES.call(
    target,
    internalformat,
    width,
    height,
  );
}

export const def_glGetRenderbufferParameterivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetRenderbufferParameterivOES!: Deno.UnsafeFnPointer<
  typeof def_glGetRenderbufferParameterivOES
>;

export function GetRenderbufferParameterivOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetRenderbufferParameterivOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIsFramebufferOES = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsFramebufferOES!: Deno.UnsafeFnPointer<typeof def_glIsFramebufferOES>;

export function IsFramebufferOES(
  framebuffer: GLuint,
): GLboolean {
  return fn_glIsFramebufferOES.call(
    framebuffer,
  );
}

export const def_glBindFramebufferOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindFramebufferOES!: Deno.UnsafeFnPointer<
  typeof def_glBindFramebufferOES
>;

export function BindFramebufferOES(
  target: GLenum,
  framebuffer: GLuint,
): void {
  fn_glBindFramebufferOES.call(
    target,
    framebuffer,
  );
}

export const def_glDeleteFramebuffersOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteFramebuffersOES!: Deno.UnsafeFnPointer<
  typeof def_glDeleteFramebuffersOES
>;

export function DeleteFramebuffersOES(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glDeleteFramebuffersOES.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glGenFramebuffersOES = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenFramebuffersOES!: Deno.UnsafeFnPointer<
  typeof def_glGenFramebuffersOES
>;

export function GenFramebuffersOES(
  n: GLsizei,
  framebuffers: Buffer,
): void {
  fn_glGenFramebuffersOES.call(
    n,
    bufferToFFI(framebuffers),
  );
}

export const def_glCheckFramebufferStatusOES = {
  parameters: ["u32"],
  result: "u32",
} as const;

let fn_glCheckFramebufferStatusOES!: Deno.UnsafeFnPointer<
  typeof def_glCheckFramebufferStatusOES
>;

export function CheckFramebufferStatusOES(
  target: GLenum,
): GLenum {
  return fn_glCheckFramebufferStatusOES.call(
    target,
  );
}

export const def_glFramebufferRenderbufferOES = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferRenderbufferOES!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferRenderbufferOES
>;

export function FramebufferRenderbufferOES(
  target: GLenum,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glFramebufferRenderbufferOES.call(
    target,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glFramebufferTexture2DOES = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2DOES!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture2DOES
>;

export function FramebufferTexture2DOES(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTexture2DOES.call(
    target,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glGetFramebufferAttachmentParameterivOES = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferAttachmentParameterivOES!: Deno.UnsafeFnPointer<
  typeof def_glGetFramebufferAttachmentParameterivOES
>;

export function GetFramebufferAttachmentParameterivOES(
  target: GLenum,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferAttachmentParameterivOES.call(
    target,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGenerateMipmapOES = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGenerateMipmapOES!: Deno.UnsafeFnPointer<
  typeof def_glGenerateMipmapOES
>;

export function GenerateMipmapOES(
  target: GLenum,
): void {
  fn_glGenerateMipmapOES.call(
    target,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glIsRenderbufferOES = new Deno.UnsafeFnPointer(
    proc("glIsRenderbufferOES")!,
    def_glIsRenderbufferOES,
  );
  fn_glBindRenderbufferOES = new Deno.UnsafeFnPointer(
    proc("glBindRenderbufferOES")!,
    def_glBindRenderbufferOES,
  );
  fn_glDeleteRenderbuffersOES = new Deno.UnsafeFnPointer(
    proc("glDeleteRenderbuffersOES")!,
    def_glDeleteRenderbuffersOES,
  );
  fn_glGenRenderbuffersOES = new Deno.UnsafeFnPointer(
    proc("glGenRenderbuffersOES")!,
    def_glGenRenderbuffersOES,
  );
  fn_glRenderbufferStorageOES = new Deno.UnsafeFnPointer(
    proc("glRenderbufferStorageOES")!,
    def_glRenderbufferStorageOES,
  );
  fn_glGetRenderbufferParameterivOES = new Deno.UnsafeFnPointer(
    proc("glGetRenderbufferParameterivOES")!,
    def_glGetRenderbufferParameterivOES,
  );
  fn_glIsFramebufferOES = new Deno.UnsafeFnPointer(
    proc("glIsFramebufferOES")!,
    def_glIsFramebufferOES,
  );
  fn_glBindFramebufferOES = new Deno.UnsafeFnPointer(
    proc("glBindFramebufferOES")!,
    def_glBindFramebufferOES,
  );
  fn_glDeleteFramebuffersOES = new Deno.UnsafeFnPointer(
    proc("glDeleteFramebuffersOES")!,
    def_glDeleteFramebuffersOES,
  );
  fn_glGenFramebuffersOES = new Deno.UnsafeFnPointer(
    proc("glGenFramebuffersOES")!,
    def_glGenFramebuffersOES,
  );
  fn_glCheckFramebufferStatusOES = new Deno.UnsafeFnPointer(
    proc("glCheckFramebufferStatusOES")!,
    def_glCheckFramebufferStatusOES,
  );
  fn_glFramebufferRenderbufferOES = new Deno.UnsafeFnPointer(
    proc("glFramebufferRenderbufferOES")!,
    def_glFramebufferRenderbufferOES,
  );
  fn_glFramebufferTexture2DOES = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture2DOES")!,
    def_glFramebufferTexture2DOES,
  );
  fn_glGetFramebufferAttachmentParameterivOES = new Deno.UnsafeFnPointer(
    proc("glGetFramebufferAttachmentParameterivOES")!,
    def_glGetFramebufferAttachmentParameterivOES,
  );
  fn_glGenerateMipmapOES = new Deno.UnsafeFnPointer(
    proc("glGenerateMipmapOES")!,
    def_glGenerateMipmapOES,
  );
}
