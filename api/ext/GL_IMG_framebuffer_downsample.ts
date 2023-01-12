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
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE_AND_DOWNSAMPLE_IMG = 0x913c;
export const NUM_DOWNSAMPLE_SCALES_IMG = 0x913d;
export const DOWNSAMPLE_SCALES_IMG = 0x913e;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_SCALE_IMG = 0x913f;

/// Commands

export const def_glFramebufferTexture2DDownsampleIMG = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTexture2DDownsampleIMG!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTexture2DDownsampleIMG
>;

export function FramebufferTexture2DDownsampleIMG(
  target: GLenum,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  xscale: GLint,
  yscale: GLint,
): void {
  fn_glFramebufferTexture2DDownsampleIMG.call(
    target,
    attachment,
    textarget,
    texture,
    level,
    xscale,
    yscale,
  );
}

export const def_glFramebufferTextureLayerDownsampleIMG = {
  parameters: ["u32", "u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureLayerDownsampleIMG!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTextureLayerDownsampleIMG
>;

export function FramebufferTextureLayerDownsampleIMG(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
  xscale: GLint,
  yscale: GLint,
): void {
  fn_glFramebufferTextureLayerDownsampleIMG.call(
    target,
    attachment,
    texture,
    level,
    layer,
    xscale,
    yscale,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFramebufferTexture2DDownsampleIMG = new Deno.UnsafeFnPointer(
    proc("glFramebufferTexture2DDownsampleIMG"),
    def_glFramebufferTexture2DDownsampleIMG,
  );
  fn_glFramebufferTextureLayerDownsampleIMG = new Deno.UnsafeFnPointer(
    proc("glFramebufferTextureLayerDownsampleIMG"),
    def_glFramebufferTextureLayerDownsampleIMG,
  );
}
