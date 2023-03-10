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
export const PROGRAM_MATRIX_EXT = 0x8e2d;
export const TRANSPOSE_PROGRAM_MATRIX_EXT = 0x8e2e;
export const PROGRAM_MATRIX_STACK_DEPTH_EXT = 0x8e2f;

/// Commands

export const def_glMatrixLoadfEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadfEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoadfEXT>;

export function MatrixLoadfEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadfEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoaddEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoaddEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoaddEXT>;

export function MatrixLoaddEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoaddEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultfEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultfEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultfEXT>;

export function MatrixMultfEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultfEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultdEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultdEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultdEXT>;

export function MatrixMultdEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultdEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoadIdentityEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixLoadIdentityEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoadIdentityEXT>;

export function MatrixLoadIdentityEXT(
  mode: GLenum,
): void {
  fn_glMatrixLoadIdentityEXT.call(
    mode,
  );
}

export const def_glMatrixRotatefEXT = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixRotatefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixRotatefEXT>;

export function MatrixRotatefEXT(
  mode: GLenum,
  angle: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixRotatefEXT.call(
    mode,
    angle,
    x,
    y,
    z,
  );
}

export const def_glMatrixRotatedEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixRotatedEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixRotatedEXT>;

export function MatrixRotatedEXT(
  mode: GLenum,
  angle: GLdouble,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixRotatedEXT.call(
    mode,
    angle,
    x,
    y,
    z,
  );
}

export const def_glMatrixScalefEXT = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixScalefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixScalefEXT>;

export function MatrixScalefEXT(
  mode: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixScalefEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixScaledEXT = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixScaledEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixScaledEXT>;

export function MatrixScaledEXT(
  mode: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixScaledEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixTranslatefEXT = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMatrixTranslatefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixTranslatefEXT>;

export function MatrixTranslatefEXT(
  mode: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glMatrixTranslatefEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixTranslatedEXT = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixTranslatedEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixTranslatedEXT>;

export function MatrixTranslatedEXT(
  mode: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glMatrixTranslatedEXT.call(
    mode,
    x,
    y,
    z,
  );
}

export const def_glMatrixFrustumEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixFrustumEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixFrustumEXT>;

export function MatrixFrustumEXT(
  mode: GLenum,
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glMatrixFrustumEXT.call(
    mode,
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
  );
}

export const def_glMatrixOrthoEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMatrixOrthoEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixOrthoEXT>;

export function MatrixOrthoEXT(
  mode: GLenum,
  left: GLdouble,
  right: GLdouble,
  bottom: GLdouble,
  top: GLdouble,
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glMatrixOrthoEXT.call(
    mode,
    left,
    right,
    bottom,
    top,
    zNear,
    zFar,
  );
}

export const def_glMatrixPopEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixPopEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixPopEXT>;

export function MatrixPopEXT(
  mode: GLenum,
): void {
  fn_glMatrixPopEXT.call(
    mode,
  );
}

export const def_glMatrixPushEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glMatrixPushEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixPushEXT>;

export function MatrixPushEXT(
  mode: GLenum,
): void {
  fn_glMatrixPushEXT.call(
    mode,
  );
}

export const def_glClientAttribDefaultEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glClientAttribDefaultEXT!: Deno.UnsafeFnPointer<typeof def_glClientAttribDefaultEXT>;

export function ClientAttribDefaultEXT(
  mask: GLbitfield,
): void {
  fn_glClientAttribDefaultEXT.call(
    mask,
  );
}

export const def_glPushClientAttribDefaultEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glPushClientAttribDefaultEXT!: Deno.UnsafeFnPointer<typeof def_glPushClientAttribDefaultEXT>;

export function PushClientAttribDefaultEXT(
  mask: GLbitfield,
): void {
  fn_glPushClientAttribDefaultEXT.call(
    mask,
  );
}

export const def_glTextureParameterfEXT = {
  parameters: ["u32", "u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glTextureParameterfEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameterfEXT>;

export function TextureParameterfEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glTextureParameterfEXT.call(
    texture,
    target,
    pname,
    param,
  );
}

export const def_glTextureParameterfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameterfvEXT>;

export function TextureParameterfvEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterfvEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameteriEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureParameteriEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameteriEXT>;

export function TextureParameteriEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glTextureParameteriEXT.call(
    texture,
    target,
    pname,
    param,
  );
}

export const def_glTextureParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameterivEXT>;

export function TextureParameterivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureImage1DEXT>;

export function TextureImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureImage1DEXT.call(
    texture,
    target,
    level,
    internalformat,
    width,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureImage2DEXT>;

export function TextureImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureImage2DEXT.call(
    texture,
    target,
    level,
    internalformat,
    width,
    height,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage1DEXT>;

export function TextureSubImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage1DEXT.call(
    texture,
    target,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glTextureSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage2DEXT>;

export function TextureSubImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureSubImage2DEXT.call(
    texture,
    target,
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

export const def_glCopyTextureImage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyTextureImage1DEXT>;

export function CopyTextureImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  border: GLint,
): void {
  fn_glCopyTextureImage1DEXT.call(
    texture,
    target,
    level,
    internalformat,
    x,
    y,
    width,
    border,
  );
}

export const def_glCopyTextureImage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyTextureImage2DEXT>;

export function CopyTextureImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
): void {
  fn_glCopyTextureImage2DEXT.call(
    texture,
    target,
    level,
    internalformat,
    x,
    y,
    width,
    height,
    border,
  );
}

export const def_glCopyTextureSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage1DEXT>;

export function CopyTextureSubImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyTextureSubImage1DEXT.call(
    texture,
    target,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyTextureSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage2DEXT>;

export function CopyTextureSubImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyTextureSubImage2DEXT.call(
    texture,
    target,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glGetTextureImageEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureImageEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureImageEXT>;

export function GetTextureImageEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glGetTextureImageEXT.call(
    texture,
    target,
    level,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glGetTextureParameterfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterfvEXT>;

export function GetTextureParameterfvEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterfvEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterivEXT>;

export function GetTextureParameterivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureLevelParameterfvEXT = {
  parameters: ["u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureLevelParameterfvEXT>;

export function GetTextureLevelParameterfvEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameterfvEXT.call(
    texture,
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureLevelParameterivEXT = {
  parameters: ["u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureLevelParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureLevelParameterivEXT>;

export function GetTextureLevelParameterivEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureLevelParameterivEXT.call(
    texture,
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureImage3DEXT>;

export function TextureImage3DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glTextureImage3DEXT.call(
    texture,
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

export const def_glTextureSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureSubImage3DEXT>;

export function TextureSubImage3DEXT(
  texture: GLuint,
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
  fn_glTextureSubImage3DEXT.call(
    texture,
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

export const def_glCopyTextureSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyTextureSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyTextureSubImage3DEXT>;

export function CopyTextureSubImage3DEXT(
  texture: GLuint,
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
  fn_glCopyTextureSubImage3DEXT.call(
    texture,
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

export const def_glBindMultiTextureEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindMultiTextureEXT!: Deno.UnsafeFnPointer<typeof def_glBindMultiTextureEXT>;

export function BindMultiTextureEXT(
  texunit: GLenum,
  target: GLenum,
  texture: GLuint,
): void {
  fn_glBindMultiTextureEXT.call(
    texunit,
    target,
    texture,
  );
}

export const def_glMultiTexCoordPointerEXT = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordPointerEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoordPointerEXT>;

export function MultiTexCoordPointerEXT(
  texunit: GLenum,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glMultiTexCoordPointerEXT.call(
    texunit,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glMultiTexEnvfEXT = {
  parameters: ["u32", "u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexEnvfEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexEnvfEXT>;

export function MultiTexEnvfEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glMultiTexEnvfEXT.call(
    texunit,
    target,
    pname,
    param,
  );
}

export const def_glMultiTexEnvfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexEnvfvEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexEnvfvEXT>;

export function MultiTexEnvfvEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexEnvfvEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexEnviEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexEnviEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexEnviEXT>;

export function MultiTexEnviEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glMultiTexEnviEXT.call(
    texunit,
    target,
    pname,
    param,
  );
}

export const def_glMultiTexEnvivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexEnvivEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexEnvivEXT>;

export function MultiTexEnvivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexEnvivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexGendEXT = {
  parameters: ["u32", "u32", "u32", "f64"],
  result: "void",
} as const;

let fn_glMultiTexGendEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGendEXT>;

export function MultiTexGendEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  param: GLdouble,
): void {
  fn_glMultiTexGendEXT.call(
    texunit,
    coord,
    pname,
    param,
  );
}

export const def_glMultiTexGendvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexGendvEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGendvEXT>;

export function MultiTexGendvEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexGendvEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexGenfEXT = {
  parameters: ["u32", "u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexGenfEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGenfEXT>;

export function MultiTexGenfEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glMultiTexGenfEXT.call(
    texunit,
    coord,
    pname,
    param,
  );
}

export const def_glMultiTexGenfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexGenfvEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGenfvEXT>;

export function MultiTexGenfvEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexGenfvEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexGeniEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexGeniEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGeniEXT>;

export function MultiTexGeniEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glMultiTexGeniEXT.call(
    texunit,
    coord,
    pname,
    param,
  );
}

export const def_glMultiTexGenivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexGenivEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexGenivEXT>;

export function MultiTexGenivEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexGenivEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexEnvfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexEnvfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexEnvfvEXT>;

export function GetMultiTexEnvfvEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexEnvfvEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexEnvivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexEnvivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexEnvivEXT>;

export function GetMultiTexEnvivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexEnvivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexGendvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexGendvEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexGendvEXT>;

export function GetMultiTexGendvEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexGendvEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexGenfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexGenfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexGenfvEXT>;

export function GetMultiTexGenfvEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexGenfvEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexGenivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexGenivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexGenivEXT>;

export function GetMultiTexGenivEXT(
  texunit: GLenum,
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexGenivEXT.call(
    texunit,
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexParameteriEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexParameteriEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameteriEXT>;

export function MultiTexParameteriEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glMultiTexParameteriEXT.call(
    texunit,
    target,
    pname,
    param,
  );
}

export const def_glMultiTexParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameterivEXT>;

export function MultiTexParameterivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexParameterivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexParameterfEXT = {
  parameters: ["u32", "u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexParameterfEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameterfEXT>;

export function MultiTexParameterfEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glMultiTexParameterfEXT.call(
    texunit,
    target,
    pname,
    param,
  );
}

export const def_glMultiTexParameterfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameterfvEXT>;

export function MultiTexParameterfvEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexParameterfvEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexImage1DEXT>;

export function MultiTexImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glMultiTexImage1DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    width,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glMultiTexImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexImage2DEXT>;

export function MultiTexImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glMultiTexImage2DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    width,
    height,
    border,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glMultiTexSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexSubImage1DEXT>;

export function MultiTexSubImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glMultiTexSubImage1DEXT.call(
    texunit,
    target,
    level,
    xoffset,
    width,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glMultiTexSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexSubImage2DEXT>;

export function MultiTexSubImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glMultiTexSubImage2DEXT.call(
    texunit,
    target,
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

export const def_glCopyMultiTexImage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyMultiTexImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyMultiTexImage1DEXT>;

export function CopyMultiTexImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  border: GLint,
): void {
  fn_glCopyMultiTexImage1DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    x,
    y,
    width,
    border,
  );
}

export const def_glCopyMultiTexImage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyMultiTexImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyMultiTexImage2DEXT>;

export function CopyMultiTexImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
): void {
  fn_glCopyMultiTexImage2DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    x,
    y,
    width,
    height,
    border,
  );
}

export const def_glCopyMultiTexSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyMultiTexSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyMultiTexSubImage1DEXT>;

export function CopyMultiTexSubImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
): void {
  fn_glCopyMultiTexSubImage1DEXT.call(
    texunit,
    target,
    level,
    xoffset,
    x,
    y,
    width,
  );
}

export const def_glCopyMultiTexSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyMultiTexSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyMultiTexSubImage2DEXT>;

export function CopyMultiTexSubImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glCopyMultiTexSubImage2DEXT.call(
    texunit,
    target,
    level,
    xoffset,
    yoffset,
    x,
    y,
    width,
    height,
  );
}

export const def_glGetMultiTexImageEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexImageEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexImageEXT>;

export function GetMultiTexImageEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glGetMultiTexImageEXT.call(
    texunit,
    target,
    level,
    format,
    type,
    bufferToFFI(pixels),
  );
}

export const def_glGetMultiTexParameterfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexParameterfvEXT>;

export function GetMultiTexParameterfvEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexParameterfvEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexParameterivEXT>;

export function GetMultiTexParameterivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexParameterivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexLevelParameterfvEXT = {
  parameters: ["u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexLevelParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexLevelParameterfvEXT>;

export function GetMultiTexLevelParameterfvEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexLevelParameterfvEXT.call(
    texunit,
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexLevelParameterivEXT = {
  parameters: ["u32", "u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexLevelParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexLevelParameterivEXT>;

export function GetMultiTexLevelParameterivEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexLevelParameterivEXT.call(
    texunit,
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexImage3DEXT>;

export function MultiTexImage3DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  format: GLenum,
  type: GLenum,
  pixels: Buffer,
): void {
  fn_glMultiTexImage3DEXT.call(
    texunit,
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

export const def_glMultiTexSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexSubImage3DEXT>;

export function MultiTexSubImage3DEXT(
  texunit: GLenum,
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
  fn_glMultiTexSubImage3DEXT.call(
    texunit,
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

export const def_glCopyMultiTexSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glCopyMultiTexSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCopyMultiTexSubImage3DEXT>;

export function CopyMultiTexSubImage3DEXT(
  texunit: GLenum,
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
  fn_glCopyMultiTexSubImage3DEXT.call(
    texunit,
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

export const def_glEnableClientStateIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableClientStateIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glEnableClientStateIndexedEXT>;

export function EnableClientStateIndexedEXT(
  array: GLenum,
  index: GLuint,
): void {
  fn_glEnableClientStateIndexedEXT.call(
    array,
    index,
  );
}

export const def_glDisableClientStateIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableClientStateIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glDisableClientStateIndexedEXT>;

export function DisableClientStateIndexedEXT(
  array: GLenum,
  index: GLuint,
): void {
  fn_glDisableClientStateIndexedEXT.call(
    array,
    index,
  );
}

export const def_glGetFloatIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloatIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetFloatIndexedvEXT>;

export function GetFloatIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetFloatIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetDoubleIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDoubleIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetDoubleIndexedvEXT>;

export function GetDoubleIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetDoubleIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetPointerIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointerIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetPointerIndexedvEXT>;

export function GetPointerIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetPointerIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glEnableIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glEnableIndexedEXT>;

export function EnableIndexedEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableIndexedEXT.call(
    target,
    index,
  );
}

export const def_glDisableIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glDisableIndexedEXT>;

export function DisableIndexedEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableIndexedEXT.call(
    target,
    index,
  );
}

export const def_glIsEnabledIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnabledIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glIsEnabledIndexedEXT>;

export function IsEnabledIndexedEXT(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnabledIndexedEXT.call(
    target,
    index,
  );
}

export const def_glGetIntegerIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegerIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetIntegerIndexedvEXT>;

export function GetIntegerIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetIntegerIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetBooleanIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBooleanIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetBooleanIndexedvEXT>;

export function GetBooleanIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetBooleanIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glCompressedTextureImage3DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureImage3DEXT>;

export function CompressedTextureImage3DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedTextureImage3DEXT.call(
    texture,
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedTextureImage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureImage2DEXT>;

export function CompressedTextureImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedTextureImage2DEXT.call(
    texture,
    target,
    level,
    internalformat,
    width,
    height,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedTextureImage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureImage1DEXT>;

export function CompressedTextureImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedTextureImage1DEXT.call(
    texture,
    target,
    level,
    internalformat,
    width,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedTextureSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage3DEXT>;

export function CompressedTextureSubImage3DEXT(
  texture: GLuint,
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
  bits: Buffer,
): void {
  fn_glCompressedTextureSubImage3DEXT.call(
    texture,
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
    bufferToFFI(bits),
  );
}

export const def_glCompressedTextureSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage2DEXT>;

export function CompressedTextureSubImage2DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedTextureSubImage2DEXT.call(
    texture,
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedTextureSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedTextureSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedTextureSubImage1DEXT>;

export function CompressedTextureSubImage1DEXT(
  texture: GLuint,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedTextureSubImage1DEXT.call(
    texture,
    target,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glGetCompressedTextureImageEXT = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedTextureImageEXT!: Deno.UnsafeFnPointer<typeof def_glGetCompressedTextureImageEXT>;

export function GetCompressedTextureImageEXT(
  texture: GLuint,
  target: GLenum,
  lod: GLint,
  img: Buffer,
): void {
  fn_glGetCompressedTextureImageEXT.call(
    texture,
    target,
    lod,
    bufferToFFI(img),
  );
}

export const def_glCompressedMultiTexImage3DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexImage3DEXT>;

export function CompressedMultiTexImage3DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedMultiTexImage3DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    width,
    height,
    depth,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedMultiTexImage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexImage2DEXT>;

export function CompressedMultiTexImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedMultiTexImage2DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    width,
    height,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedMultiTexImage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexImage1DEXT>;

export function CompressedMultiTexImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  internalformat: GLenum,
  width: GLsizei,
  border: GLint,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedMultiTexImage1DEXT.call(
    texunit,
    target,
    level,
    internalformat,
    width,
    border,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedMultiTexSubImage3DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexSubImage3DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexSubImage3DEXT>;

export function CompressedMultiTexSubImage3DEXT(
  texunit: GLenum,
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
  bits: Buffer,
): void {
  fn_glCompressedMultiTexSubImage3DEXT.call(
    texunit,
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
    bufferToFFI(bits),
  );
}

export const def_glCompressedMultiTexSubImage2DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexSubImage2DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexSubImage2DEXT>;

export function CompressedMultiTexSubImage2DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedMultiTexSubImage2DEXT.call(
    texunit,
    target,
    level,
    xoffset,
    yoffset,
    width,
    height,
    format,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glCompressedMultiTexSubImage1DEXT = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glCompressedMultiTexSubImage1DEXT!: Deno.UnsafeFnPointer<typeof def_glCompressedMultiTexSubImage1DEXT>;

export function CompressedMultiTexSubImage1DEXT(
  texunit: GLenum,
  target: GLenum,
  level: GLint,
  xoffset: GLint,
  width: GLsizei,
  format: GLenum,
  imageSize: GLsizei,
  bits: Buffer,
): void {
  fn_glCompressedMultiTexSubImage1DEXT.call(
    texunit,
    target,
    level,
    xoffset,
    width,
    format,
    imageSize,
    bufferToFFI(bits),
  );
}

export const def_glGetCompressedMultiTexImageEXT = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetCompressedMultiTexImageEXT!: Deno.UnsafeFnPointer<typeof def_glGetCompressedMultiTexImageEXT>;

export function GetCompressedMultiTexImageEXT(
  texunit: GLenum,
  target: GLenum,
  lod: GLint,
  img: Buffer,
): void {
  fn_glGetCompressedMultiTexImageEXT.call(
    texunit,
    target,
    lod,
    bufferToFFI(img),
  );
}

export const def_glMatrixLoadTransposefEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadTransposefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoadTransposefEXT>;

export function MatrixLoadTransposefEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadTransposefEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixLoadTransposedEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixLoadTransposedEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixLoadTransposedEXT>;

export function MatrixLoadTransposedEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixLoadTransposedEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultTransposefEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultTransposefEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultTransposefEXT>;

export function MatrixMultTransposefEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultTransposefEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glMatrixMultTransposedEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMatrixMultTransposedEXT!: Deno.UnsafeFnPointer<typeof def_glMatrixMultTransposedEXT>;

export function MatrixMultTransposedEXT(
  mode: GLenum,
  m: Buffer,
): void {
  fn_glMatrixMultTransposedEXT.call(
    mode,
    bufferToFFI(m),
  );
}

export const def_glNamedBufferDataEXT = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferDataEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferDataEXT>;

export function NamedBufferDataEXT(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  usage: GLenum,
): void {
  fn_glNamedBufferDataEXT.call(
    buffer,
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
    usage,
  );
}

export const def_glNamedBufferSubDataEXT = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glNamedBufferSubDataEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferSubDataEXT>;

export function NamedBufferSubDataEXT(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glNamedBufferSubDataEXT.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glMapNamedBufferEXT = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBufferEXT!: Deno.UnsafeFnPointer<typeof def_glMapNamedBufferEXT>;

export function MapNamedBufferEXT(
  buffer: GLuint,
  access: GLenum,
): Buffer {
  return fn_glMapNamedBufferEXT.call(
    buffer,
    access,
  );
}

export const def_glUnmapNamedBufferEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glUnmapNamedBufferEXT!: Deno.UnsafeFnPointer<typeof def_glUnmapNamedBufferEXT>;

export function UnmapNamedBufferEXT(
  buffer: GLuint,
): GLboolean {
  return fn_glUnmapNamedBufferEXT.call(
    buffer,
  );
}

export const def_glGetNamedBufferParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferParameterivEXT>;

export function GetNamedBufferParameterivEXT(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferParameterivEXT.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferPointervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferPointervEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferPointervEXT>;

export function GetNamedBufferPointervEXT(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedBufferPointervEXT.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedBufferSubDataEXT = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedBufferSubDataEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedBufferSubDataEXT>;

export function GetNamedBufferSubDataEXT(
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
  data: Buffer,
): void {
  fn_glGetNamedBufferSubDataEXT.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
  );
}

export const def_glProgramUniform1fEXT = {
  parameters: ["u32", "i32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform1fEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1fEXT>;

export function ProgramUniform1fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
): void {
  fn_glProgramUniform1fEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2fEXT = {
  parameters: ["u32", "i32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform2fEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2fEXT>;

export function ProgramUniform2fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
): void {
  fn_glProgramUniform2fEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3fEXT = {
  parameters: ["u32", "i32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform3fEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3fEXT>;

export function ProgramUniform3fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
): void {
  fn_glProgramUniform3fEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4fEXT = {
  parameters: ["u32", "i32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramUniform4fEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4fEXT>;

export function ProgramUniform4fEXT(
  program: GLuint,
  location: GLint,
  v0: GLfloat,
  v1: GLfloat,
  v2: GLfloat,
  v3: GLfloat,
): void {
  fn_glProgramUniform4fEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1iEXT = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform1iEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1iEXT>;

export function ProgramUniform1iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
): void {
  fn_glProgramUniform1iEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2iEXT = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform2iEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2iEXT>;

export function ProgramUniform2iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
): void {
  fn_glProgramUniform2iEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3iEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform3iEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3iEXT>;

export function ProgramUniform3iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
): void {
  fn_glProgramUniform3iEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4iEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramUniform4iEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4iEXT>;

export function ProgramUniform4iEXT(
  program: GLuint,
  location: GLint,
  v0: GLint,
  v1: GLint,
  v2: GLint,
  v3: GLint,
): void {
  fn_glProgramUniform4iEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1fvEXT>;

export function ProgramUniform1fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2fvEXT>;

export function ProgramUniform2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3fvEXT>;

export function ProgramUniform3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4fvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4fvEXT>;

export function ProgramUniform4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4fvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform1ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1ivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1ivEXT>;

export function ProgramUniform1ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2ivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2ivEXT>;

export function ProgramUniform2ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3ivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3ivEXT>;

export function ProgramUniform3ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4ivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4ivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4ivEXT>;

export function ProgramUniform4ivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4ivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2fvEXT>;

export function ProgramUniformMatrix2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3fvEXT>;

export function ProgramUniformMatrix3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4fvEXT>;

export function ProgramUniformMatrix4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3fvEXT>;

export function ProgramUniformMatrix2x3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2fvEXT>;

export function ProgramUniformMatrix3x2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4fvEXT>;

export function ProgramUniformMatrix2x4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2fvEXT>;

export function ProgramUniformMatrix4x2fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4fvEXT>;

export function ProgramUniformMatrix3x4fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3fvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3fvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3fvEXT>;

export function ProgramUniformMatrix4x3fvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3fvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glTextureBufferEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTextureBufferEXT!: Deno.UnsafeFnPointer<typeof def_glTextureBufferEXT>;

export function TextureBufferEXT(
  texture: GLuint,
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glTextureBufferEXT.call(
    texture,
    target,
    internalformat,
    buffer,
  );
}

export const def_glMultiTexBufferEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexBufferEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexBufferEXT>;

export function MultiTexBufferEXT(
  texunit: GLenum,
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
): void {
  fn_glMultiTexBufferEXT.call(
    texunit,
    target,
    internalformat,
    buffer,
  );
}

export const def_glTextureParameterIivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameterIivEXT>;

export function TextureParameterIivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTextureParameterIuivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTextureParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glTextureParameterIuivEXT>;

export function TextureParameterIuivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTextureParameterIuivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterIivEXT>;

export function GetTextureParameterIivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTextureParameterIuivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTextureParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTextureParameterIuivEXT>;

export function GetTextureParameterIuivEXT(
  texture: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTextureParameterIuivEXT.call(
    texture,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexParameterIivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameterIivEXT>;

export function MultiTexParameterIivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexParameterIivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glMultiTexParameterIuivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexParameterIuivEXT>;

export function MultiTexParameterIuivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMultiTexParameterIuivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexParameterIivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexParameterIivEXT>;

export function GetMultiTexParameterIivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexParameterIivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMultiTexParameterIuivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMultiTexParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMultiTexParameterIuivEXT>;

export function GetMultiTexParameterIuivEXT(
  texunit: GLenum,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMultiTexParameterIuivEXT.call(
    texunit,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glProgramUniform1uiEXT = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform1uiEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1uiEXT>;

export function ProgramUniform1uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
): void {
  fn_glProgramUniform1uiEXT.call(
    program,
    location,
    v0,
  );
}

export const def_glProgramUniform2uiEXT = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform2uiEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2uiEXT>;

export function ProgramUniform2uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
): void {
  fn_glProgramUniform2uiEXT.call(
    program,
    location,
    v0,
    v1,
  );
}

export const def_glProgramUniform3uiEXT = {
  parameters: ["u32", "i32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform3uiEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3uiEXT>;

export function ProgramUniform3uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
): void {
  fn_glProgramUniform3uiEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
  );
}

export const def_glProgramUniform4uiEXT = {
  parameters: ["u32", "i32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramUniform4uiEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4uiEXT>;

export function ProgramUniform4uiEXT(
  program: GLuint,
  location: GLint,
  v0: GLuint,
  v1: GLuint,
  v2: GLuint,
  v3: GLuint,
): void {
  fn_glProgramUniform4uiEXT.call(
    program,
    location,
    v0,
    v1,
    v2,
    v3,
  );
}

export const def_glProgramUniform1uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1uivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1uivEXT>;

export function ProgramUniform1uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2uivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2uivEXT>;

export function ProgramUniform2uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3uivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3uivEXT>;

export function ProgramUniform3uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4uivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4uivEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4uivEXT>;

export function ProgramUniform4uivEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4uivEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glNamedProgramLocalParameters4fvEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameters4fvEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameters4fvEXT>;

export function NamedProgramLocalParameters4fvEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParameters4fvEXT.call(
    program,
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramLocalParameterI4iEXT = {
  parameters: ["u32", "u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameterI4iEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameterI4iEXT>;

export function NamedProgramLocalParameterI4iEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glNamedProgramLocalParameterI4iEXT.call(
    program,
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glNamedProgramLocalParameterI4ivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameterI4ivEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameterI4ivEXT>;

export function NamedProgramLocalParameterI4ivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParameterI4ivEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramLocalParametersI4ivEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParametersI4ivEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParametersI4ivEXT>;

export function NamedProgramLocalParametersI4ivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParametersI4ivEXT.call(
    program,
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramLocalParameterI4uiEXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameterI4uiEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameterI4uiEXT>;

export function NamedProgramLocalParameterI4uiEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
  w: GLuint,
): void {
  fn_glNamedProgramLocalParameterI4uiEXT.call(
    program,
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glNamedProgramLocalParameterI4uivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameterI4uivEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameterI4uivEXT>;

export function NamedProgramLocalParameterI4uivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParameterI4uivEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramLocalParametersI4uivEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParametersI4uivEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParametersI4uivEXT>;

export function NamedProgramLocalParametersI4uivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParametersI4uivEXT.call(
    program,
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramLocalParameterIivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramLocalParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramLocalParameterIivEXT>;

export function GetNamedProgramLocalParameterIivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetNamedProgramLocalParameterIivEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramLocalParameterIuivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramLocalParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramLocalParameterIuivEXT>;

export function GetNamedProgramLocalParameterIuivEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetNamedProgramLocalParameterIuivEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glEnableClientStateiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableClientStateiEXT!: Deno.UnsafeFnPointer<typeof def_glEnableClientStateiEXT>;

export function EnableClientStateiEXT(
  array: GLenum,
  index: GLuint,
): void {
  fn_glEnableClientStateiEXT.call(
    array,
    index,
  );
}

export const def_glDisableClientStateiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableClientStateiEXT!: Deno.UnsafeFnPointer<typeof def_glDisableClientStateiEXT>;

export function DisableClientStateiEXT(
  array: GLenum,
  index: GLuint,
): void {
  fn_glDisableClientStateiEXT.call(
    array,
    index,
  );
}

export const def_glGetFloati_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloati_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetFloati_vEXT>;

export function GetFloati_vEXT(
  pname: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetFloati_vEXT.call(
    pname,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetDoublei_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDoublei_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetDoublei_vEXT>;

export function GetDoublei_vEXT(
  pname: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetDoublei_vEXT.call(
    pname,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetPointeri_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointeri_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetPointeri_vEXT>;

export function GetPointeri_vEXT(
  pname: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetPointeri_vEXT.call(
    pname,
    index,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramStringEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramStringEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramStringEXT>;

export function NamedProgramStringEXT(
  program: GLuint,
  target: GLenum,
  format: GLenum,
  len: GLsizei,
  string: Buffer,
): void {
  fn_glNamedProgramStringEXT.call(
    program,
    target,
    format,
    len,
    bufferToFFI(string),
  );
}

export const def_glNamedProgramLocalParameter4dEXT = {
  parameters: ["u32", "u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameter4dEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameter4dEXT>;

export function NamedProgramLocalParameter4dEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glNamedProgramLocalParameter4dEXT.call(
    program,
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glNamedProgramLocalParameter4dvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameter4dvEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameter4dvEXT>;

export function NamedProgramLocalParameter4dvEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParameter4dvEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glNamedProgramLocalParameter4fEXT = {
  parameters: ["u32", "u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameter4fEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameter4fEXT>;

export function NamedProgramLocalParameter4fEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glNamedProgramLocalParameter4fEXT.call(
    program,
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glNamedProgramLocalParameter4fvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glNamedProgramLocalParameter4fvEXT!: Deno.UnsafeFnPointer<typeof def_glNamedProgramLocalParameter4fvEXT>;

export function NamedProgramLocalParameter4fvEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glNamedProgramLocalParameter4fvEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramLocalParameterdvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramLocalParameterdvEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramLocalParameterdvEXT>;

export function GetNamedProgramLocalParameterdvEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetNamedProgramLocalParameterdvEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramLocalParameterfvEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramLocalParameterfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramLocalParameterfvEXT>;

export function GetNamedProgramLocalParameterfvEXT(
  program: GLuint,
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetNamedProgramLocalParameterfvEXT.call(
    program,
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramivEXT>;

export function GetNamedProgramivEXT(
  program: GLuint,
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedProgramivEXT.call(
    program,
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetNamedProgramStringEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedProgramStringEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedProgramStringEXT>;

export function GetNamedProgramStringEXT(
  program: GLuint,
  target: GLenum,
  pname: GLenum,
  string: Buffer,
): void {
  fn_glGetNamedProgramStringEXT.call(
    program,
    target,
    pname,
    bufferToFFI(string),
  );
}

export const def_glNamedRenderbufferStorageEXT = {
  parameters: ["u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorageEXT!: Deno.UnsafeFnPointer<typeof def_glNamedRenderbufferStorageEXT>;

export function NamedRenderbufferStorageEXT(
  renderbuffer: GLuint,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorageEXT.call(
    renderbuffer,
    internalformat,
    width,
    height,
  );
}

export const def_glGetNamedRenderbufferParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedRenderbufferParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedRenderbufferParameterivEXT>;

export function GetNamedRenderbufferParameterivEXT(
  renderbuffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedRenderbufferParameterivEXT.call(
    renderbuffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glNamedRenderbufferStorageMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorageMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glNamedRenderbufferStorageMultisampleEXT>;

export function NamedRenderbufferStorageMultisampleEXT(
  renderbuffer: GLuint,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorageMultisampleEXT.call(
    renderbuffer,
    samples,
    internalformat,
    width,
    height,
  );
}

export const def_glNamedRenderbufferStorageMultisampleCoverageEXT = {
  parameters: ["u32", "i32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedRenderbufferStorageMultisampleCoverageEXT!: Deno.UnsafeFnPointer<typeof def_glNamedRenderbufferStorageMultisampleCoverageEXT>;

export function NamedRenderbufferStorageMultisampleCoverageEXT(
  renderbuffer: GLuint,
  coverageSamples: GLsizei,
  colorSamples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glNamedRenderbufferStorageMultisampleCoverageEXT.call(
    renderbuffer,
    coverageSamples,
    colorSamples,
    internalformat,
    width,
    height,
  );
}

export const def_glCheckNamedFramebufferStatusEXT = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glCheckNamedFramebufferStatusEXT!: Deno.UnsafeFnPointer<typeof def_glCheckNamedFramebufferStatusEXT>;

export function CheckNamedFramebufferStatusEXT(
  framebuffer: GLuint,
  target: GLenum,
): GLenum {
  return fn_glCheckNamedFramebufferStatusEXT.call(
    framebuffer,
    target,
  );
}

export const def_glNamedFramebufferTexture1DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTexture1DEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTexture1DEXT>;

export function NamedFramebufferTexture1DEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glNamedFramebufferTexture1DEXT.call(
    framebuffer,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glNamedFramebufferTexture2DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTexture2DEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTexture2DEXT>;

export function NamedFramebufferTexture2DEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glNamedFramebufferTexture2DEXT.call(
    framebuffer,
    attachment,
    textarget,
    texture,
    level,
  );
}

export const def_glNamedFramebufferTexture3DEXT = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTexture3DEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTexture3DEXT>;

export function NamedFramebufferTexture3DEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  textarget: GLenum,
  texture: GLuint,
  level: GLint,
  zoffset: GLint,
): void {
  fn_glNamedFramebufferTexture3DEXT.call(
    framebuffer,
    attachment,
    textarget,
    texture,
    level,
    zoffset,
  );
}

export const def_glNamedFramebufferRenderbufferEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferRenderbufferEXT>;

export function NamedFramebufferRenderbufferEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  renderbuffertarget: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glNamedFramebufferRenderbufferEXT.call(
    framebuffer,
    attachment,
    renderbuffertarget,
    renderbuffer,
  );
}

export const def_glGetNamedFramebufferAttachmentParameterivEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferAttachmentParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedFramebufferAttachmentParameterivEXT>;

export function GetNamedFramebufferAttachmentParameterivEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedFramebufferAttachmentParameterivEXT.call(
    framebuffer,
    attachment,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGenerateTextureMipmapEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glGenerateTextureMipmapEXT!: Deno.UnsafeFnPointer<typeof def_glGenerateTextureMipmapEXT>;

export function GenerateTextureMipmapEXT(
  texture: GLuint,
  target: GLenum,
): void {
  fn_glGenerateTextureMipmapEXT.call(
    texture,
    target,
  );
}

export const def_glGenerateMultiTexMipmapEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glGenerateMultiTexMipmapEXT!: Deno.UnsafeFnPointer<typeof def_glGenerateMultiTexMipmapEXT>;

export function GenerateMultiTexMipmapEXT(
  texunit: GLenum,
  target: GLenum,
): void {
  fn_glGenerateMultiTexMipmapEXT.call(
    texunit,
    target,
  );
}

export const def_glFramebufferDrawBufferEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferDrawBufferEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferDrawBufferEXT>;

export function FramebufferDrawBufferEXT(
  framebuffer: GLuint,
  mode: GLenum,
): void {
  fn_glFramebufferDrawBufferEXT.call(
    framebuffer,
    mode,
  );
}

export const def_glFramebufferDrawBuffersEXT = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glFramebufferDrawBuffersEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferDrawBuffersEXT>;

export function FramebufferDrawBuffersEXT(
  framebuffer: GLuint,
  n: GLsizei,
  bufs: Buffer,
): void {
  fn_glFramebufferDrawBuffersEXT.call(
    framebuffer,
    n,
    bufferToFFI(bufs),
  );
}

export const def_glFramebufferReadBufferEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferReadBufferEXT!: Deno.UnsafeFnPointer<typeof def_glFramebufferReadBufferEXT>;

export function FramebufferReadBufferEXT(
  framebuffer: GLuint,
  mode: GLenum,
): void {
  fn_glFramebufferReadBufferEXT.call(
    framebuffer,
    mode,
  );
}

export const def_glGetFramebufferParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferParameterivEXT>;

export function GetFramebufferParameterivEXT(
  framebuffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFramebufferParameterivEXT.call(
    framebuffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glNamedCopyBufferSubDataEXT = {
  parameters: ["u32", "u32", "buffer", "buffer", "isize"],
  result: "void",
} as const;

let fn_glNamedCopyBufferSubDataEXT!: Deno.UnsafeFnPointer<typeof def_glNamedCopyBufferSubDataEXT>;

export function NamedCopyBufferSubDataEXT(
  readBuffer: GLuint,
  writeBuffer: GLuint,
  readOffset: GLintptr,
  writeOffset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glNamedCopyBufferSubDataEXT.call(
    readBuffer,
    writeBuffer,
    bufferToFFI(readOffset),
    bufferToFFI(writeOffset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glNamedFramebufferTextureEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTextureEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTextureEXT>;

export function NamedFramebufferTextureEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glNamedFramebufferTextureEXT.call(
    framebuffer,
    attachment,
    texture,
    level,
  );
}

export const def_glNamedFramebufferTextureLayerEXT = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTextureLayerEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTextureLayerEXT>;

export function NamedFramebufferTextureLayerEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glNamedFramebufferTextureLayerEXT.call(
    framebuffer,
    attachment,
    texture,
    level,
    layer,
  );
}

export const def_glNamedFramebufferTextureFaceEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glNamedFramebufferTextureFaceEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferTextureFaceEXT>;

export function NamedFramebufferTextureFaceEXT(
  framebuffer: GLuint,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  face: GLenum,
): void {
  fn_glNamedFramebufferTextureFaceEXT.call(
    framebuffer,
    attachment,
    texture,
    level,
    face,
  );
}

export const def_glTextureRenderbufferEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTextureRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glTextureRenderbufferEXT>;

export function TextureRenderbufferEXT(
  texture: GLuint,
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glTextureRenderbufferEXT.call(
    texture,
    target,
    renderbuffer,
  );
}

export const def_glMultiTexRenderbufferEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexRenderbufferEXT!: Deno.UnsafeFnPointer<typeof def_glMultiTexRenderbufferEXT>;

export function MultiTexRenderbufferEXT(
  texunit: GLenum,
  target: GLenum,
  renderbuffer: GLuint,
): void {
  fn_glMultiTexRenderbufferEXT.call(
    texunit,
    target,
    renderbuffer,
  );
}

export const def_glVertexArrayVertexOffsetEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexOffsetEXT>;

export function VertexArrayVertexOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayVertexOffsetEXT.call(
    vaobj,
    buffer,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayColorOffsetEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayColorOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayColorOffsetEXT>;

export function VertexArrayColorOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayColorOffsetEXT.call(
    vaobj,
    buffer,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayEdgeFlagOffsetEXT = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayEdgeFlagOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayEdgeFlagOffsetEXT>;

export function VertexArrayEdgeFlagOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayEdgeFlagOffsetEXT.call(
    vaobj,
    buffer,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayIndexOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayIndexOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayIndexOffsetEXT>;

export function VertexArrayIndexOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayIndexOffsetEXT.call(
    vaobj,
    buffer,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayNormalOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayNormalOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayNormalOffsetEXT>;

export function VertexArrayNormalOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayNormalOffsetEXT.call(
    vaobj,
    buffer,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayTexCoordOffsetEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayTexCoordOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayTexCoordOffsetEXT>;

export function VertexArrayTexCoordOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayTexCoordOffsetEXT.call(
    vaobj,
    buffer,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayMultiTexCoordOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayMultiTexCoordOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayMultiTexCoordOffsetEXT>;

export function VertexArrayMultiTexCoordOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  texunit: GLenum,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayMultiTexCoordOffsetEXT.call(
    vaobj,
    buffer,
    texunit,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayFogCoordOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayFogCoordOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayFogCoordOffsetEXT>;

export function VertexArrayFogCoordOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayFogCoordOffsetEXT.call(
    vaobj,
    buffer,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArraySecondaryColorOffsetEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArraySecondaryColorOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArraySecondaryColorOffsetEXT>;

export function VertexArraySecondaryColorOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArraySecondaryColorOffsetEXT.call(
    vaobj,
    buffer,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayVertexAttribOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "u8", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribOffsetEXT>;

export function VertexArrayVertexAttribOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  index: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayVertexAttribOffsetEXT.call(
    vaobj,
    buffer,
    index,
    size,
    type,
    normalized,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glVertexArrayVertexAttribIOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribIOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribIOffsetEXT>;

export function VertexArrayVertexAttribIOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayVertexAttribIOffsetEXT.call(
    vaobj,
    buffer,
    index,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glEnableVertexArrayEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableVertexArrayEXT!: Deno.UnsafeFnPointer<typeof def_glEnableVertexArrayEXT>;

export function EnableVertexArrayEXT(
  vaobj: GLuint,
  array: GLenum,
): void {
  fn_glEnableVertexArrayEXT.call(
    vaobj,
    array,
  );
}

export const def_glDisableVertexArrayEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableVertexArrayEXT!: Deno.UnsafeFnPointer<typeof def_glDisableVertexArrayEXT>;

export function DisableVertexArrayEXT(
  vaobj: GLuint,
  array: GLenum,
): void {
  fn_glDisableVertexArrayEXT.call(
    vaobj,
    array,
  );
}

export const def_glEnableVertexArrayAttribEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableVertexArrayAttribEXT!: Deno.UnsafeFnPointer<typeof def_glEnableVertexArrayAttribEXT>;

export function EnableVertexArrayAttribEXT(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glEnableVertexArrayAttribEXT.call(
    vaobj,
    index,
  );
}

export const def_glDisableVertexArrayAttribEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableVertexArrayAttribEXT!: Deno.UnsafeFnPointer<typeof def_glDisableVertexArrayAttribEXT>;

export function DisableVertexArrayAttribEXT(
  vaobj: GLuint,
  index: GLuint,
): void {
  fn_glDisableVertexArrayAttribEXT.call(
    vaobj,
    index,
  );
}

export const def_glGetVertexArrayIntegervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIntegervEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayIntegervEXT>;

export function GetVertexArrayIntegervEXT(
  vaobj: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIntegervEXT.call(
    vaobj,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayPointervEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayPointervEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayPointervEXT>;

export function GetVertexArrayPointervEXT(
  vaobj: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayPointervEXT.call(
    vaobj,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayIntegeri_vEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayIntegeri_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayIntegeri_vEXT>;

export function GetVertexArrayIntegeri_vEXT(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayIntegeri_vEXT.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetVertexArrayPointeri_vEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexArrayPointeri_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexArrayPointeri_vEXT>;

export function GetVertexArrayPointeri_vEXT(
  vaobj: GLuint,
  index: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glGetVertexArrayPointeri_vEXT.call(
    vaobj,
    index,
    pname,
    bufferToFFI(param),
  );
}

export const def_glMapNamedBufferRangeEXT = {
  parameters: ["u32", "buffer", "isize", "u32"],
  result: "buffer",
} as const;

let fn_glMapNamedBufferRangeEXT!: Deno.UnsafeFnPointer<typeof def_glMapNamedBufferRangeEXT>;

export function MapNamedBufferRangeEXT(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
  access: GLbitfield,
): Buffer {
  return fn_glMapNamedBufferRangeEXT.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
    access,
  );
}

export const def_glFlushMappedNamedBufferRangeEXT = {
  parameters: ["u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glFlushMappedNamedBufferRangeEXT!: Deno.UnsafeFnPointer<typeof def_glFlushMappedNamedBufferRangeEXT>;

export function FlushMappedNamedBufferRangeEXT(
  buffer: GLuint,
  offset: GLintptr,
  length: GLsizeiptr,
): void {
  fn_glFlushMappedNamedBufferRangeEXT.call(
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(length),
  );
}

export const def_glNamedBufferStorageEXT = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glNamedBufferStorageEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferStorageEXT>;

export function NamedBufferStorageEXT(
  buffer: GLuint,
  size: GLsizeiptr,
  data: Buffer,
  flags: GLbitfield,
): void {
  fn_glNamedBufferStorageEXT.call(
    buffer,
    Deno.UnsafePointer.value(size),
    bufferToFFI(data),
    flags,
  );
}

export const def_glClearNamedBufferDataEXT = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferDataEXT!: Deno.UnsafeFnPointer<typeof def_glClearNamedBufferDataEXT>;

export function ClearNamedBufferDataEXT(
  buffer: GLuint,
  internalformat: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferDataEXT.call(
    buffer,
    internalformat,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearNamedBufferSubDataEXT = {
  parameters: ["u32", "u32", "isize", "isize", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearNamedBufferSubDataEXT!: Deno.UnsafeFnPointer<typeof def_glClearNamedBufferSubDataEXT>;

export function ClearNamedBufferSubDataEXT(
  buffer: GLuint,
  internalformat: GLenum,
  offset: GLsizeiptr,
  size: GLsizeiptr,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearNamedBufferSubDataEXT.call(
    buffer,
    internalformat,
    Deno.UnsafePointer.value(offset),
    Deno.UnsafePointer.value(size),
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glNamedFramebufferParameteriEXT = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glNamedFramebufferParameteriEXT!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferParameteriEXT>;

export function NamedFramebufferParameteriEXT(
  framebuffer: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glNamedFramebufferParameteriEXT.call(
    framebuffer,
    pname,
    param,
  );
}

export const def_glGetNamedFramebufferParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetNamedFramebufferParameterivEXT>;

export function GetNamedFramebufferParameterivEXT(
  framebuffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedFramebufferParameterivEXT.call(
    framebuffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glProgramUniform1dEXT = {
  parameters: ["u32", "i32", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform1dEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1dEXT>;

export function ProgramUniform1dEXT(
  program: GLuint,
  location: GLint,
  x: GLdouble,
): void {
  fn_glProgramUniform1dEXT.call(
    program,
    location,
    x,
  );
}

export const def_glProgramUniform2dEXT = {
  parameters: ["u32", "i32", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform2dEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2dEXT>;

export function ProgramUniform2dEXT(
  program: GLuint,
  location: GLint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glProgramUniform2dEXT.call(
    program,
    location,
    x,
    y,
  );
}

export const def_glProgramUniform3dEXT = {
  parameters: ["u32", "i32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform3dEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3dEXT>;

export function ProgramUniform3dEXT(
  program: GLuint,
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glProgramUniform3dEXT.call(
    program,
    location,
    x,
    y,
    z,
  );
}

export const def_glProgramUniform4dEXT = {
  parameters: ["u32", "i32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramUniform4dEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4dEXT>;

export function ProgramUniform4dEXT(
  program: GLuint,
  location: GLint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramUniform4dEXT.call(
    program,
    location,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramUniform1dvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform1dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform1dvEXT>;

export function ProgramUniform1dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform1dvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform2dvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform2dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform2dvEXT>;

export function ProgramUniform2dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform2dvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform3dvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform3dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform3dvEXT>;

export function ProgramUniform3dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform3dvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniform4dvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniform4dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniform4dvEXT>;

export function ProgramUniform4dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  value: Buffer,
): void {
  fn_glProgramUniform4dvEXT.call(
    program,
    location,
    count,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2dvEXT>;

export function ProgramUniformMatrix2dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3dvEXT>;

export function ProgramUniformMatrix3dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4dvEXT>;

export function ProgramUniformMatrix4dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x3dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x3dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x3dvEXT>;

export function ProgramUniformMatrix2x3dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x3dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix2x4dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix2x4dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix2x4dvEXT>;

export function ProgramUniformMatrix2x4dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix2x4dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x2dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x2dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x2dvEXT>;

export function ProgramUniformMatrix3x2dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x2dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix3x4dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix3x4dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix3x4dvEXT>;

export function ProgramUniformMatrix3x4dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix3x4dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x2dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x2dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x2dvEXT>;

export function ProgramUniformMatrix4x2dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x2dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glProgramUniformMatrix4x3dvEXT = {
  parameters: ["u32", "i32", "i32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glProgramUniformMatrix4x3dvEXT!: Deno.UnsafeFnPointer<typeof def_glProgramUniformMatrix4x3dvEXT>;

export function ProgramUniformMatrix4x3dvEXT(
  program: GLuint,
  location: GLint,
  count: GLsizei,
  transpose: GLboolean,
  value: Buffer,
): void {
  fn_glProgramUniformMatrix4x3dvEXT.call(
    program,
    location,
    count,
    transpose,
    bufferToFFI(value),
  );
}

export const def_glTextureBufferRangeEXT = {
  parameters: ["u32", "u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glTextureBufferRangeEXT!: Deno.UnsafeFnPointer<typeof def_glTextureBufferRangeEXT>;

export function TextureBufferRangeEXT(
  texture: GLuint,
  target: GLenum,
  internalformat: GLenum,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glTextureBufferRangeEXT.call(
    texture,
    target,
    internalformat,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glTextureStorage1DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage1DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage1DEXT>;

export function TextureStorage1DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
): void {
  fn_glTextureStorage1DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
  );
}

export const def_glTextureStorage2DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage2DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2DEXT>;

export function TextureStorage2DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glTextureStorage2DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
    height,
  );
}

export const def_glTextureStorage3DEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTextureStorage3DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3DEXT>;

export function TextureStorage3DEXT(
  texture: GLuint,
  target: GLenum,
  levels: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
): void {
  fn_glTextureStorage3DEXT.call(
    texture,
    target,
    levels,
    internalformat,
    width,
    height,
    depth,
  );
}

export const def_glTextureStorage2DMultisampleEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage2DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage2DMultisampleEXT>;

export function TextureStorage2DMultisampleEXT(
  texture: GLuint,
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage2DMultisampleEXT.call(
    texture,
    target,
    samples,
    internalformat,
    width,
    height,
    fixedsamplelocations,
  );
}

export const def_glTextureStorage3DMultisampleEXT = {
  parameters: ["u32", "u32", "i32", "u32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTextureStorage3DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorage3DMultisampleEXT>;

export function TextureStorage3DMultisampleEXT(
  texture: GLuint,
  target: GLenum,
  samples: GLsizei,
  internalformat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedsamplelocations: GLboolean,
): void {
  fn_glTextureStorage3DMultisampleEXT.call(
    texture,
    target,
    samples,
    internalformat,
    width,
    height,
    depth,
    fixedsamplelocations,
  );
}

export const def_glVertexArrayBindVertexBufferEXT = {
  parameters: ["u32", "u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glVertexArrayBindVertexBufferEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayBindVertexBufferEXT>;

export function VertexArrayBindVertexBufferEXT(
  vaobj: GLuint,
  bindingindex: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  stride: GLsizei,
): void {
  fn_glVertexArrayBindVertexBufferEXT.call(
    vaobj,
    bindingindex,
    buffer,
    bufferToFFI(offset),
    stride,
  );
}

export const def_glVertexArrayVertexAttribFormatEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribFormatEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribFormatEXT>;

export function VertexArrayVertexAttribFormatEXT(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayVertexAttribFormatEXT.call(
    vaobj,
    attribindex,
    size,
    type,
    normalized,
    relativeoffset,
  );
}

export const def_glVertexArrayVertexAttribIFormatEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribIFormatEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribIFormatEXT>;

export function VertexArrayVertexAttribIFormatEXT(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayVertexAttribIFormatEXT.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayVertexAttribLFormatEXT = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribLFormatEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribLFormatEXT>;

export function VertexArrayVertexAttribLFormatEXT(
  vaobj: GLuint,
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexArrayVertexAttribLFormatEXT.call(
    vaobj,
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexArrayVertexAttribBindingEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribBindingEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribBindingEXT>;

export function VertexArrayVertexAttribBindingEXT(
  vaobj: GLuint,
  attribindex: GLuint,
  bindingindex: GLuint,
): void {
  fn_glVertexArrayVertexAttribBindingEXT.call(
    vaobj,
    attribindex,
    bindingindex,
  );
}

export const def_glVertexArrayVertexBindingDivisorEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexBindingDivisorEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexBindingDivisorEXT>;

export function VertexArrayVertexBindingDivisorEXT(
  vaobj: GLuint,
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexArrayVertexBindingDivisorEXT.call(
    vaobj,
    bindingindex,
    divisor,
  );
}

export const def_glVertexArrayVertexAttribLOffsetEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribLOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribLOffsetEXT>;

export function VertexArrayVertexAttribLOffsetEXT(
  vaobj: GLuint,
  buffer: GLuint,
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  offset: GLintptr,
): void {
  fn_glVertexArrayVertexAttribLOffsetEXT.call(
    vaobj,
    buffer,
    index,
    size,
    type,
    stride,
    bufferToFFI(offset),
  );
}

export const def_glTexturePageCommitmentEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "u8"],
  result: "void",
} as const;

let fn_glTexturePageCommitmentEXT!: Deno.UnsafeFnPointer<typeof def_glTexturePageCommitmentEXT>;

export function TexturePageCommitmentEXT(
  texture: GLuint,
  level: GLint,
  xoffset: GLint,
  yoffset: GLint,
  zoffset: GLint,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  commit: GLboolean,
): void {
  fn_glTexturePageCommitmentEXT.call(
    texture,
    level,
    xoffset,
    yoffset,
    zoffset,
    width,
    height,
    depth,
    commit,
  );
}

export const def_glVertexArrayVertexAttribDivisorEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexArrayVertexAttribDivisorEXT!: Deno.UnsafeFnPointer<typeof def_glVertexArrayVertexAttribDivisorEXT>;

export function VertexArrayVertexAttribDivisorEXT(
  vaobj: GLuint,
  index: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexArrayVertexAttribDivisorEXT.call(
    vaobj,
    index,
    divisor,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMatrixLoadfEXT = new Deno.UnsafeFnPointer(proc("glMatrixLoadfEXT")!, def_glMatrixLoadfEXT);
  fn_glMatrixLoaddEXT = new Deno.UnsafeFnPointer(proc("glMatrixLoaddEXT")!, def_glMatrixLoaddEXT);
  fn_glMatrixMultfEXT = new Deno.UnsafeFnPointer(proc("glMatrixMultfEXT")!, def_glMatrixMultfEXT);
  fn_glMatrixMultdEXT = new Deno.UnsafeFnPointer(proc("glMatrixMultdEXT")!, def_glMatrixMultdEXT);
  fn_glMatrixLoadIdentityEXT = new Deno.UnsafeFnPointer(proc("glMatrixLoadIdentityEXT")!, def_glMatrixLoadIdentityEXT);
  fn_glMatrixRotatefEXT = new Deno.UnsafeFnPointer(proc("glMatrixRotatefEXT")!, def_glMatrixRotatefEXT);
  fn_glMatrixRotatedEXT = new Deno.UnsafeFnPointer(proc("glMatrixRotatedEXT")!, def_glMatrixRotatedEXT);
  fn_glMatrixScalefEXT = new Deno.UnsafeFnPointer(proc("glMatrixScalefEXT")!, def_glMatrixScalefEXT);
  fn_glMatrixScaledEXT = new Deno.UnsafeFnPointer(proc("glMatrixScaledEXT")!, def_glMatrixScaledEXT);
  fn_glMatrixTranslatefEXT = new Deno.UnsafeFnPointer(proc("glMatrixTranslatefEXT")!, def_glMatrixTranslatefEXT);
  fn_glMatrixTranslatedEXT = new Deno.UnsafeFnPointer(proc("glMatrixTranslatedEXT")!, def_glMatrixTranslatedEXT);
  fn_glMatrixFrustumEXT = new Deno.UnsafeFnPointer(proc("glMatrixFrustumEXT")!, def_glMatrixFrustumEXT);
  fn_glMatrixOrthoEXT = new Deno.UnsafeFnPointer(proc("glMatrixOrthoEXT")!, def_glMatrixOrthoEXT);
  fn_glMatrixPopEXT = new Deno.UnsafeFnPointer(proc("glMatrixPopEXT")!, def_glMatrixPopEXT);
  fn_glMatrixPushEXT = new Deno.UnsafeFnPointer(proc("glMatrixPushEXT")!, def_glMatrixPushEXT);
  fn_glClientAttribDefaultEXT = new Deno.UnsafeFnPointer(proc("glClientAttribDefaultEXT")!, def_glClientAttribDefaultEXT);
  fn_glPushClientAttribDefaultEXT = new Deno.UnsafeFnPointer(proc("glPushClientAttribDefaultEXT")!, def_glPushClientAttribDefaultEXT);
  fn_glTextureParameterfEXT = new Deno.UnsafeFnPointer(proc("glTextureParameterfEXT")!, def_glTextureParameterfEXT);
  fn_glTextureParameterfvEXT = new Deno.UnsafeFnPointer(proc("glTextureParameterfvEXT")!, def_glTextureParameterfvEXT);
  fn_glTextureParameteriEXT = new Deno.UnsafeFnPointer(proc("glTextureParameteriEXT")!, def_glTextureParameteriEXT);
  fn_glTextureParameterivEXT = new Deno.UnsafeFnPointer(proc("glTextureParameterivEXT")!, def_glTextureParameterivEXT);
  fn_glTextureImage1DEXT = new Deno.UnsafeFnPointer(proc("glTextureImage1DEXT")!, def_glTextureImage1DEXT);
  fn_glTextureImage2DEXT = new Deno.UnsafeFnPointer(proc("glTextureImage2DEXT")!, def_glTextureImage2DEXT);
  fn_glTextureSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glTextureSubImage1DEXT")!, def_glTextureSubImage1DEXT);
  fn_glTextureSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glTextureSubImage2DEXT")!, def_glTextureSubImage2DEXT);
  fn_glCopyTextureImage1DEXT = new Deno.UnsafeFnPointer(proc("glCopyTextureImage1DEXT")!, def_glCopyTextureImage1DEXT);
  fn_glCopyTextureImage2DEXT = new Deno.UnsafeFnPointer(proc("glCopyTextureImage2DEXT")!, def_glCopyTextureImage2DEXT);
  fn_glCopyTextureSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage1DEXT")!, def_glCopyTextureSubImage1DEXT);
  fn_glCopyTextureSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage2DEXT")!, def_glCopyTextureSubImage2DEXT);
  fn_glGetTextureImageEXT = new Deno.UnsafeFnPointer(proc("glGetTextureImageEXT")!, def_glGetTextureImageEXT);
  fn_glGetTextureParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetTextureParameterfvEXT")!, def_glGetTextureParameterfvEXT);
  fn_glGetTextureParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetTextureParameterivEXT")!, def_glGetTextureParameterivEXT);
  fn_glGetTextureLevelParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetTextureLevelParameterfvEXT")!, def_glGetTextureLevelParameterfvEXT);
  fn_glGetTextureLevelParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetTextureLevelParameterivEXT")!, def_glGetTextureLevelParameterivEXT);
  fn_glTextureImage3DEXT = new Deno.UnsafeFnPointer(proc("glTextureImage3DEXT")!, def_glTextureImage3DEXT);
  fn_glTextureSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glTextureSubImage3DEXT")!, def_glTextureSubImage3DEXT);
  fn_glCopyTextureSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glCopyTextureSubImage3DEXT")!, def_glCopyTextureSubImage3DEXT);
  fn_glBindMultiTextureEXT = new Deno.UnsafeFnPointer(proc("glBindMultiTextureEXT")!, def_glBindMultiTextureEXT);
  fn_glMultiTexCoordPointerEXT = new Deno.UnsafeFnPointer(proc("glMultiTexCoordPointerEXT")!, def_glMultiTexCoordPointerEXT);
  fn_glMultiTexEnvfEXT = new Deno.UnsafeFnPointer(proc("glMultiTexEnvfEXT")!, def_glMultiTexEnvfEXT);
  fn_glMultiTexEnvfvEXT = new Deno.UnsafeFnPointer(proc("glMultiTexEnvfvEXT")!, def_glMultiTexEnvfvEXT);
  fn_glMultiTexEnviEXT = new Deno.UnsafeFnPointer(proc("glMultiTexEnviEXT")!, def_glMultiTexEnviEXT);
  fn_glMultiTexEnvivEXT = new Deno.UnsafeFnPointer(proc("glMultiTexEnvivEXT")!, def_glMultiTexEnvivEXT);
  fn_glMultiTexGendEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGendEXT")!, def_glMultiTexGendEXT);
  fn_glMultiTexGendvEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGendvEXT")!, def_glMultiTexGendvEXT);
  fn_glMultiTexGenfEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGenfEXT")!, def_glMultiTexGenfEXT);
  fn_glMultiTexGenfvEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGenfvEXT")!, def_glMultiTexGenfvEXT);
  fn_glMultiTexGeniEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGeniEXT")!, def_glMultiTexGeniEXT);
  fn_glMultiTexGenivEXT = new Deno.UnsafeFnPointer(proc("glMultiTexGenivEXT")!, def_glMultiTexGenivEXT);
  fn_glGetMultiTexEnvfvEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexEnvfvEXT")!, def_glGetMultiTexEnvfvEXT);
  fn_glGetMultiTexEnvivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexEnvivEXT")!, def_glGetMultiTexEnvivEXT);
  fn_glGetMultiTexGendvEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexGendvEXT")!, def_glGetMultiTexGendvEXT);
  fn_glGetMultiTexGenfvEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexGenfvEXT")!, def_glGetMultiTexGenfvEXT);
  fn_glGetMultiTexGenivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexGenivEXT")!, def_glGetMultiTexGenivEXT);
  fn_glMultiTexParameteriEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameteriEXT")!, def_glMultiTexParameteriEXT);
  fn_glMultiTexParameterivEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameterivEXT")!, def_glMultiTexParameterivEXT);
  fn_glMultiTexParameterfEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameterfEXT")!, def_glMultiTexParameterfEXT);
  fn_glMultiTexParameterfvEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameterfvEXT")!, def_glMultiTexParameterfvEXT);
  fn_glMultiTexImage1DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexImage1DEXT")!, def_glMultiTexImage1DEXT);
  fn_glMultiTexImage2DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexImage2DEXT")!, def_glMultiTexImage2DEXT);
  fn_glMultiTexSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexSubImage1DEXT")!, def_glMultiTexSubImage1DEXT);
  fn_glMultiTexSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexSubImage2DEXT")!, def_glMultiTexSubImage2DEXT);
  fn_glCopyMultiTexImage1DEXT = new Deno.UnsafeFnPointer(proc("glCopyMultiTexImage1DEXT")!, def_glCopyMultiTexImage1DEXT);
  fn_glCopyMultiTexImage2DEXT = new Deno.UnsafeFnPointer(proc("glCopyMultiTexImage2DEXT")!, def_glCopyMultiTexImage2DEXT);
  fn_glCopyMultiTexSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glCopyMultiTexSubImage1DEXT")!, def_glCopyMultiTexSubImage1DEXT);
  fn_glCopyMultiTexSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glCopyMultiTexSubImage2DEXT")!, def_glCopyMultiTexSubImage2DEXT);
  fn_glGetMultiTexImageEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexImageEXT")!, def_glGetMultiTexImageEXT);
  fn_glGetMultiTexParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexParameterfvEXT")!, def_glGetMultiTexParameterfvEXT);
  fn_glGetMultiTexParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexParameterivEXT")!, def_glGetMultiTexParameterivEXT);
  fn_glGetMultiTexLevelParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexLevelParameterfvEXT")!, def_glGetMultiTexLevelParameterfvEXT);
  fn_glGetMultiTexLevelParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexLevelParameterivEXT")!, def_glGetMultiTexLevelParameterivEXT);
  fn_glMultiTexImage3DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexImage3DEXT")!, def_glMultiTexImage3DEXT);
  fn_glMultiTexSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glMultiTexSubImage3DEXT")!, def_glMultiTexSubImage3DEXT);
  fn_glCopyMultiTexSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glCopyMultiTexSubImage3DEXT")!, def_glCopyMultiTexSubImage3DEXT);
  fn_glEnableClientStateIndexedEXT = new Deno.UnsafeFnPointer(proc("glEnableClientStateIndexedEXT")!, def_glEnableClientStateIndexedEXT);
  fn_glDisableClientStateIndexedEXT = new Deno.UnsafeFnPointer(proc("glDisableClientStateIndexedEXT")!, def_glDisableClientStateIndexedEXT);
  fn_glGetFloatIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetFloatIndexedvEXT")!, def_glGetFloatIndexedvEXT);
  fn_glGetDoubleIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetDoubleIndexedvEXT")!, def_glGetDoubleIndexedvEXT);
  fn_glGetPointerIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetPointerIndexedvEXT")!, def_glGetPointerIndexedvEXT);
  fn_glEnableIndexedEXT = new Deno.UnsafeFnPointer(proc("glEnableIndexedEXT")!, def_glEnableIndexedEXT);
  fn_glDisableIndexedEXT = new Deno.UnsafeFnPointer(proc("glDisableIndexedEXT")!, def_glDisableIndexedEXT);
  fn_glIsEnabledIndexedEXT = new Deno.UnsafeFnPointer(proc("glIsEnabledIndexedEXT")!, def_glIsEnabledIndexedEXT);
  fn_glGetIntegerIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetIntegerIndexedvEXT")!, def_glGetIntegerIndexedvEXT);
  fn_glGetBooleanIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetBooleanIndexedvEXT")!, def_glGetBooleanIndexedvEXT);
  fn_glCompressedTextureImage3DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureImage3DEXT")!, def_glCompressedTextureImage3DEXT);
  fn_glCompressedTextureImage2DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureImage2DEXT")!, def_glCompressedTextureImage2DEXT);
  fn_glCompressedTextureImage1DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureImage1DEXT")!, def_glCompressedTextureImage1DEXT);
  fn_glCompressedTextureSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage3DEXT")!, def_glCompressedTextureSubImage3DEXT);
  fn_glCompressedTextureSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage2DEXT")!, def_glCompressedTextureSubImage2DEXT);
  fn_glCompressedTextureSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glCompressedTextureSubImage1DEXT")!, def_glCompressedTextureSubImage1DEXT);
  fn_glGetCompressedTextureImageEXT = new Deno.UnsafeFnPointer(proc("glGetCompressedTextureImageEXT")!, def_glGetCompressedTextureImageEXT);
  fn_glCompressedMultiTexImage3DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexImage3DEXT")!, def_glCompressedMultiTexImage3DEXT);
  fn_glCompressedMultiTexImage2DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexImage2DEXT")!, def_glCompressedMultiTexImage2DEXT);
  fn_glCompressedMultiTexImage1DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexImage1DEXT")!, def_glCompressedMultiTexImage1DEXT);
  fn_glCompressedMultiTexSubImage3DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexSubImage3DEXT")!, def_glCompressedMultiTexSubImage3DEXT);
  fn_glCompressedMultiTexSubImage2DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexSubImage2DEXT")!, def_glCompressedMultiTexSubImage2DEXT);
  fn_glCompressedMultiTexSubImage1DEXT = new Deno.UnsafeFnPointer(proc("glCompressedMultiTexSubImage1DEXT")!, def_glCompressedMultiTexSubImage1DEXT);
  fn_glGetCompressedMultiTexImageEXT = new Deno.UnsafeFnPointer(proc("glGetCompressedMultiTexImageEXT")!, def_glGetCompressedMultiTexImageEXT);
  fn_glMatrixLoadTransposefEXT = new Deno.UnsafeFnPointer(proc("glMatrixLoadTransposefEXT")!, def_glMatrixLoadTransposefEXT);
  fn_glMatrixLoadTransposedEXT = new Deno.UnsafeFnPointer(proc("glMatrixLoadTransposedEXT")!, def_glMatrixLoadTransposedEXT);
  fn_glMatrixMultTransposefEXT = new Deno.UnsafeFnPointer(proc("glMatrixMultTransposefEXT")!, def_glMatrixMultTransposefEXT);
  fn_glMatrixMultTransposedEXT = new Deno.UnsafeFnPointer(proc("glMatrixMultTransposedEXT")!, def_glMatrixMultTransposedEXT);
  fn_glNamedBufferDataEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferDataEXT")!, def_glNamedBufferDataEXT);
  fn_glNamedBufferSubDataEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferSubDataEXT")!, def_glNamedBufferSubDataEXT);
  fn_glMapNamedBufferEXT = new Deno.UnsafeFnPointer(proc("glMapNamedBufferEXT")!, def_glMapNamedBufferEXT);
  fn_glUnmapNamedBufferEXT = new Deno.UnsafeFnPointer(proc("glUnmapNamedBufferEXT")!, def_glUnmapNamedBufferEXT);
  fn_glGetNamedBufferParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedBufferParameterivEXT")!, def_glGetNamedBufferParameterivEXT);
  fn_glGetNamedBufferPointervEXT = new Deno.UnsafeFnPointer(proc("glGetNamedBufferPointervEXT")!, def_glGetNamedBufferPointervEXT);
  fn_glGetNamedBufferSubDataEXT = new Deno.UnsafeFnPointer(proc("glGetNamedBufferSubDataEXT")!, def_glGetNamedBufferSubDataEXT);
  fn_glProgramUniform1fEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1fEXT")!, def_glProgramUniform1fEXT);
  fn_glProgramUniform2fEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2fEXT")!, def_glProgramUniform2fEXT);
  fn_glProgramUniform3fEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3fEXT")!, def_glProgramUniform3fEXT);
  fn_glProgramUniform4fEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4fEXT")!, def_glProgramUniform4fEXT);
  fn_glProgramUniform1iEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1iEXT")!, def_glProgramUniform1iEXT);
  fn_glProgramUniform2iEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2iEXT")!, def_glProgramUniform2iEXT);
  fn_glProgramUniform3iEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3iEXT")!, def_glProgramUniform3iEXT);
  fn_glProgramUniform4iEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4iEXT")!, def_glProgramUniform4iEXT);
  fn_glProgramUniform1fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1fvEXT")!, def_glProgramUniform1fvEXT);
  fn_glProgramUniform2fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2fvEXT")!, def_glProgramUniform2fvEXT);
  fn_glProgramUniform3fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3fvEXT")!, def_glProgramUniform3fvEXT);
  fn_glProgramUniform4fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4fvEXT")!, def_glProgramUniform4fvEXT);
  fn_glProgramUniform1ivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1ivEXT")!, def_glProgramUniform1ivEXT);
  fn_glProgramUniform2ivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2ivEXT")!, def_glProgramUniform2ivEXT);
  fn_glProgramUniform3ivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3ivEXT")!, def_glProgramUniform3ivEXT);
  fn_glProgramUniform4ivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4ivEXT")!, def_glProgramUniform4ivEXT);
  fn_glProgramUniformMatrix2fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2fvEXT")!, def_glProgramUniformMatrix2fvEXT);
  fn_glProgramUniformMatrix3fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3fvEXT")!, def_glProgramUniformMatrix3fvEXT);
  fn_glProgramUniformMatrix4fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4fvEXT")!, def_glProgramUniformMatrix4fvEXT);
  fn_glProgramUniformMatrix2x3fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3fvEXT")!, def_glProgramUniformMatrix2x3fvEXT);
  fn_glProgramUniformMatrix3x2fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2fvEXT")!, def_glProgramUniformMatrix3x2fvEXT);
  fn_glProgramUniformMatrix2x4fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4fvEXT")!, def_glProgramUniformMatrix2x4fvEXT);
  fn_glProgramUniformMatrix4x2fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2fvEXT")!, def_glProgramUniformMatrix4x2fvEXT);
  fn_glProgramUniformMatrix3x4fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4fvEXT")!, def_glProgramUniformMatrix3x4fvEXT);
  fn_glProgramUniformMatrix4x3fvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3fvEXT")!, def_glProgramUniformMatrix4x3fvEXT);
  fn_glTextureBufferEXT = new Deno.UnsafeFnPointer(proc("glTextureBufferEXT")!, def_glTextureBufferEXT);
  fn_glMultiTexBufferEXT = new Deno.UnsafeFnPointer(proc("glMultiTexBufferEXT")!, def_glMultiTexBufferEXT);
  fn_glTextureParameterIivEXT = new Deno.UnsafeFnPointer(proc("glTextureParameterIivEXT")!, def_glTextureParameterIivEXT);
  fn_glTextureParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glTextureParameterIuivEXT")!, def_glTextureParameterIuivEXT);
  fn_glGetTextureParameterIivEXT = new Deno.UnsafeFnPointer(proc("glGetTextureParameterIivEXT")!, def_glGetTextureParameterIivEXT);
  fn_glGetTextureParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glGetTextureParameterIuivEXT")!, def_glGetTextureParameterIuivEXT);
  fn_glMultiTexParameterIivEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameterIivEXT")!, def_glMultiTexParameterIivEXT);
  fn_glMultiTexParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glMultiTexParameterIuivEXT")!, def_glMultiTexParameterIuivEXT);
  fn_glGetMultiTexParameterIivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexParameterIivEXT")!, def_glGetMultiTexParameterIivEXT);
  fn_glGetMultiTexParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glGetMultiTexParameterIuivEXT")!, def_glGetMultiTexParameterIuivEXT);
  fn_glProgramUniform1uiEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1uiEXT")!, def_glProgramUniform1uiEXT);
  fn_glProgramUniform2uiEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2uiEXT")!, def_glProgramUniform2uiEXT);
  fn_glProgramUniform3uiEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3uiEXT")!, def_glProgramUniform3uiEXT);
  fn_glProgramUniform4uiEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4uiEXT")!, def_glProgramUniform4uiEXT);
  fn_glProgramUniform1uivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1uivEXT")!, def_glProgramUniform1uivEXT);
  fn_glProgramUniform2uivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2uivEXT")!, def_glProgramUniform2uivEXT);
  fn_glProgramUniform3uivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3uivEXT")!, def_glProgramUniform3uivEXT);
  fn_glProgramUniform4uivEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4uivEXT")!, def_glProgramUniform4uivEXT);
  fn_glNamedProgramLocalParameters4fvEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameters4fvEXT")!, def_glNamedProgramLocalParameters4fvEXT);
  fn_glNamedProgramLocalParameterI4iEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameterI4iEXT")!, def_glNamedProgramLocalParameterI4iEXT);
  fn_glNamedProgramLocalParameterI4ivEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameterI4ivEXT")!, def_glNamedProgramLocalParameterI4ivEXT);
  fn_glNamedProgramLocalParametersI4ivEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParametersI4ivEXT")!, def_glNamedProgramLocalParametersI4ivEXT);
  fn_glNamedProgramLocalParameterI4uiEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameterI4uiEXT")!, def_glNamedProgramLocalParameterI4uiEXT);
  fn_glNamedProgramLocalParameterI4uivEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameterI4uivEXT")!, def_glNamedProgramLocalParameterI4uivEXT);
  fn_glNamedProgramLocalParametersI4uivEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParametersI4uivEXT")!, def_glNamedProgramLocalParametersI4uivEXT);
  fn_glGetNamedProgramLocalParameterIivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramLocalParameterIivEXT")!, def_glGetNamedProgramLocalParameterIivEXT);
  fn_glGetNamedProgramLocalParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramLocalParameterIuivEXT")!, def_glGetNamedProgramLocalParameterIuivEXT);
  fn_glEnableClientStateiEXT = new Deno.UnsafeFnPointer(proc("glEnableClientStateiEXT")!, def_glEnableClientStateiEXT);
  fn_glDisableClientStateiEXT = new Deno.UnsafeFnPointer(proc("glDisableClientStateiEXT")!, def_glDisableClientStateiEXT);
  fn_glGetFloati_vEXT = new Deno.UnsafeFnPointer(proc("glGetFloati_vEXT")!, def_glGetFloati_vEXT);
  fn_glGetDoublei_vEXT = new Deno.UnsafeFnPointer(proc("glGetDoublei_vEXT")!, def_glGetDoublei_vEXT);
  fn_glGetPointeri_vEXT = new Deno.UnsafeFnPointer(proc("glGetPointeri_vEXT")!, def_glGetPointeri_vEXT);
  fn_glNamedProgramStringEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramStringEXT")!, def_glNamedProgramStringEXT);
  fn_glNamedProgramLocalParameter4dEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameter4dEXT")!, def_glNamedProgramLocalParameter4dEXT);
  fn_glNamedProgramLocalParameter4dvEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameter4dvEXT")!, def_glNamedProgramLocalParameter4dvEXT);
  fn_glNamedProgramLocalParameter4fEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameter4fEXT")!, def_glNamedProgramLocalParameter4fEXT);
  fn_glNamedProgramLocalParameter4fvEXT = new Deno.UnsafeFnPointer(proc("glNamedProgramLocalParameter4fvEXT")!, def_glNamedProgramLocalParameter4fvEXT);
  fn_glGetNamedProgramLocalParameterdvEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramLocalParameterdvEXT")!, def_glGetNamedProgramLocalParameterdvEXT);
  fn_glGetNamedProgramLocalParameterfvEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramLocalParameterfvEXT")!, def_glGetNamedProgramLocalParameterfvEXT);
  fn_glGetNamedProgramivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramivEXT")!, def_glGetNamedProgramivEXT);
  fn_glGetNamedProgramStringEXT = new Deno.UnsafeFnPointer(proc("glGetNamedProgramStringEXT")!, def_glGetNamedProgramStringEXT);
  fn_glNamedRenderbufferStorageEXT = new Deno.UnsafeFnPointer(proc("glNamedRenderbufferStorageEXT")!, def_glNamedRenderbufferStorageEXT);
  fn_glGetNamedRenderbufferParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedRenderbufferParameterivEXT")!, def_glGetNamedRenderbufferParameterivEXT);
  fn_glNamedRenderbufferStorageMultisampleEXT = new Deno.UnsafeFnPointer(proc("glNamedRenderbufferStorageMultisampleEXT")!, def_glNamedRenderbufferStorageMultisampleEXT);
  fn_glNamedRenderbufferStorageMultisampleCoverageEXT = new Deno.UnsafeFnPointer(proc("glNamedRenderbufferStorageMultisampleCoverageEXT")!, def_glNamedRenderbufferStorageMultisampleCoverageEXT);
  fn_glCheckNamedFramebufferStatusEXT = new Deno.UnsafeFnPointer(proc("glCheckNamedFramebufferStatusEXT")!, def_glCheckNamedFramebufferStatusEXT);
  fn_glNamedFramebufferTexture1DEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTexture1DEXT")!, def_glNamedFramebufferTexture1DEXT);
  fn_glNamedFramebufferTexture2DEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTexture2DEXT")!, def_glNamedFramebufferTexture2DEXT);
  fn_glNamedFramebufferTexture3DEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTexture3DEXT")!, def_glNamedFramebufferTexture3DEXT);
  fn_glNamedFramebufferRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferRenderbufferEXT")!, def_glNamedFramebufferRenderbufferEXT);
  fn_glGetNamedFramebufferAttachmentParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedFramebufferAttachmentParameterivEXT")!, def_glGetNamedFramebufferAttachmentParameterivEXT);
  fn_glGenerateTextureMipmapEXT = new Deno.UnsafeFnPointer(proc("glGenerateTextureMipmapEXT")!, def_glGenerateTextureMipmapEXT);
  fn_glGenerateMultiTexMipmapEXT = new Deno.UnsafeFnPointer(proc("glGenerateMultiTexMipmapEXT")!, def_glGenerateMultiTexMipmapEXT);
  fn_glFramebufferDrawBufferEXT = new Deno.UnsafeFnPointer(proc("glFramebufferDrawBufferEXT")!, def_glFramebufferDrawBufferEXT);
  fn_glFramebufferDrawBuffersEXT = new Deno.UnsafeFnPointer(proc("glFramebufferDrawBuffersEXT")!, def_glFramebufferDrawBuffersEXT);
  fn_glFramebufferReadBufferEXT = new Deno.UnsafeFnPointer(proc("glFramebufferReadBufferEXT")!, def_glFramebufferReadBufferEXT);
  fn_glGetFramebufferParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetFramebufferParameterivEXT")!, def_glGetFramebufferParameterivEXT);
  fn_glNamedCopyBufferSubDataEXT = new Deno.UnsafeFnPointer(proc("glNamedCopyBufferSubDataEXT")!, def_glNamedCopyBufferSubDataEXT);
  fn_glNamedFramebufferTextureEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTextureEXT")!, def_glNamedFramebufferTextureEXT);
  fn_glNamedFramebufferTextureLayerEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTextureLayerEXT")!, def_glNamedFramebufferTextureLayerEXT);
  fn_glNamedFramebufferTextureFaceEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferTextureFaceEXT")!, def_glNamedFramebufferTextureFaceEXT);
  fn_glTextureRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glTextureRenderbufferEXT")!, def_glTextureRenderbufferEXT);
  fn_glMultiTexRenderbufferEXT = new Deno.UnsafeFnPointer(proc("glMultiTexRenderbufferEXT")!, def_glMultiTexRenderbufferEXT);
  fn_glVertexArrayVertexOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexOffsetEXT")!, def_glVertexArrayVertexOffsetEXT);
  fn_glVertexArrayColorOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayColorOffsetEXT")!, def_glVertexArrayColorOffsetEXT);
  fn_glVertexArrayEdgeFlagOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayEdgeFlagOffsetEXT")!, def_glVertexArrayEdgeFlagOffsetEXT);
  fn_glVertexArrayIndexOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayIndexOffsetEXT")!, def_glVertexArrayIndexOffsetEXT);
  fn_glVertexArrayNormalOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayNormalOffsetEXT")!, def_glVertexArrayNormalOffsetEXT);
  fn_glVertexArrayTexCoordOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayTexCoordOffsetEXT")!, def_glVertexArrayTexCoordOffsetEXT);
  fn_glVertexArrayMultiTexCoordOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayMultiTexCoordOffsetEXT")!, def_glVertexArrayMultiTexCoordOffsetEXT);
  fn_glVertexArrayFogCoordOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayFogCoordOffsetEXT")!, def_glVertexArrayFogCoordOffsetEXT);
  fn_glVertexArraySecondaryColorOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArraySecondaryColorOffsetEXT")!, def_glVertexArraySecondaryColorOffsetEXT);
  fn_glVertexArrayVertexAttribOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribOffsetEXT")!, def_glVertexArrayVertexAttribOffsetEXT);
  fn_glVertexArrayVertexAttribIOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribIOffsetEXT")!, def_glVertexArrayVertexAttribIOffsetEXT);
  fn_glEnableVertexArrayEXT = new Deno.UnsafeFnPointer(proc("glEnableVertexArrayEXT")!, def_glEnableVertexArrayEXT);
  fn_glDisableVertexArrayEXT = new Deno.UnsafeFnPointer(proc("glDisableVertexArrayEXT")!, def_glDisableVertexArrayEXT);
  fn_glEnableVertexArrayAttribEXT = new Deno.UnsafeFnPointer(proc("glEnableVertexArrayAttribEXT")!, def_glEnableVertexArrayAttribEXT);
  fn_glDisableVertexArrayAttribEXT = new Deno.UnsafeFnPointer(proc("glDisableVertexArrayAttribEXT")!, def_glDisableVertexArrayAttribEXT);
  fn_glGetVertexArrayIntegervEXT = new Deno.UnsafeFnPointer(proc("glGetVertexArrayIntegervEXT")!, def_glGetVertexArrayIntegervEXT);
  fn_glGetVertexArrayPointervEXT = new Deno.UnsafeFnPointer(proc("glGetVertexArrayPointervEXT")!, def_glGetVertexArrayPointervEXT);
  fn_glGetVertexArrayIntegeri_vEXT = new Deno.UnsafeFnPointer(proc("glGetVertexArrayIntegeri_vEXT")!, def_glGetVertexArrayIntegeri_vEXT);
  fn_glGetVertexArrayPointeri_vEXT = new Deno.UnsafeFnPointer(proc("glGetVertexArrayPointeri_vEXT")!, def_glGetVertexArrayPointeri_vEXT);
  fn_glMapNamedBufferRangeEXT = new Deno.UnsafeFnPointer(proc("glMapNamedBufferRangeEXT")!, def_glMapNamedBufferRangeEXT);
  fn_glFlushMappedNamedBufferRangeEXT = new Deno.UnsafeFnPointer(proc("glFlushMappedNamedBufferRangeEXT")!, def_glFlushMappedNamedBufferRangeEXT);
  fn_glNamedBufferStorageEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferStorageEXT")!, def_glNamedBufferStorageEXT);
  fn_glClearNamedBufferDataEXT = new Deno.UnsafeFnPointer(proc("glClearNamedBufferDataEXT")!, def_glClearNamedBufferDataEXT);
  fn_glClearNamedBufferSubDataEXT = new Deno.UnsafeFnPointer(proc("glClearNamedBufferSubDataEXT")!, def_glClearNamedBufferSubDataEXT);
  fn_glNamedFramebufferParameteriEXT = new Deno.UnsafeFnPointer(proc("glNamedFramebufferParameteriEXT")!, def_glNamedFramebufferParameteriEXT);
  fn_glGetNamedFramebufferParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetNamedFramebufferParameterivEXT")!, def_glGetNamedFramebufferParameterivEXT);
  fn_glProgramUniform1dEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1dEXT")!, def_glProgramUniform1dEXT);
  fn_glProgramUniform2dEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2dEXT")!, def_glProgramUniform2dEXT);
  fn_glProgramUniform3dEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3dEXT")!, def_glProgramUniform3dEXT);
  fn_glProgramUniform4dEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4dEXT")!, def_glProgramUniform4dEXT);
  fn_glProgramUniform1dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform1dvEXT")!, def_glProgramUniform1dvEXT);
  fn_glProgramUniform2dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform2dvEXT")!, def_glProgramUniform2dvEXT);
  fn_glProgramUniform3dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform3dvEXT")!, def_glProgramUniform3dvEXT);
  fn_glProgramUniform4dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniform4dvEXT")!, def_glProgramUniform4dvEXT);
  fn_glProgramUniformMatrix2dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2dvEXT")!, def_glProgramUniformMatrix2dvEXT);
  fn_glProgramUniformMatrix3dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3dvEXT")!, def_glProgramUniformMatrix3dvEXT);
  fn_glProgramUniformMatrix4dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4dvEXT")!, def_glProgramUniformMatrix4dvEXT);
  fn_glProgramUniformMatrix2x3dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x3dvEXT")!, def_glProgramUniformMatrix2x3dvEXT);
  fn_glProgramUniformMatrix2x4dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix2x4dvEXT")!, def_glProgramUniformMatrix2x4dvEXT);
  fn_glProgramUniformMatrix3x2dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x2dvEXT")!, def_glProgramUniformMatrix3x2dvEXT);
  fn_glProgramUniformMatrix3x4dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix3x4dvEXT")!, def_glProgramUniformMatrix3x4dvEXT);
  fn_glProgramUniformMatrix4x2dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x2dvEXT")!, def_glProgramUniformMatrix4x2dvEXT);
  fn_glProgramUniformMatrix4x3dvEXT = new Deno.UnsafeFnPointer(proc("glProgramUniformMatrix4x3dvEXT")!, def_glProgramUniformMatrix4x3dvEXT);
  fn_glTextureBufferRangeEXT = new Deno.UnsafeFnPointer(proc("glTextureBufferRangeEXT")!, def_glTextureBufferRangeEXT);
  fn_glTextureStorage1DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage1DEXT")!, def_glTextureStorage1DEXT);
  fn_glTextureStorage2DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage2DEXT")!, def_glTextureStorage2DEXT);
  fn_glTextureStorage3DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage3DEXT")!, def_glTextureStorage3DEXT);
  fn_glTextureStorage2DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage2DMultisampleEXT")!, def_glTextureStorage2DMultisampleEXT);
  fn_glTextureStorage3DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTextureStorage3DMultisampleEXT")!, def_glTextureStorage3DMultisampleEXT);
  fn_glVertexArrayBindVertexBufferEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayBindVertexBufferEXT")!, def_glVertexArrayBindVertexBufferEXT);
  fn_glVertexArrayVertexAttribFormatEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribFormatEXT")!, def_glVertexArrayVertexAttribFormatEXT);
  fn_glVertexArrayVertexAttribIFormatEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribIFormatEXT")!, def_glVertexArrayVertexAttribIFormatEXT);
  fn_glVertexArrayVertexAttribLFormatEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribLFormatEXT")!, def_glVertexArrayVertexAttribLFormatEXT);
  fn_glVertexArrayVertexAttribBindingEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribBindingEXT")!, def_glVertexArrayVertexAttribBindingEXT);
  fn_glVertexArrayVertexBindingDivisorEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexBindingDivisorEXT")!, def_glVertexArrayVertexBindingDivisorEXT);
  fn_glVertexArrayVertexAttribLOffsetEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribLOffsetEXT")!, def_glVertexArrayVertexAttribLOffsetEXT);
  fn_glTexturePageCommitmentEXT = new Deno.UnsafeFnPointer(proc("glTexturePageCommitmentEXT")!, def_glTexturePageCommitmentEXT);
  fn_glVertexArrayVertexAttribDivisorEXT = new Deno.UnsafeFnPointer(proc("glVertexArrayVertexAttribDivisorEXT")!, def_glVertexArrayVertexAttribDivisorEXT);
}
