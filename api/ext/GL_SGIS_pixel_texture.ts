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
export const PIXEL_TEXTURE_SGIS = 0x8353;
export const PIXEL_FRAGMENT_RGB_SOURCE_SGIS = 0x8354;
export const PIXEL_FRAGMENT_ALPHA_SOURCE_SGIS = 0x8355;
export const PIXEL_GROUP_COLOR_SGIS = 0x8356;

/// Commands

export const def_glPixelTexGenParameteriSGIS = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPixelTexGenParameteriSGIS!: Deno.UnsafeFnPointer<typeof def_glPixelTexGenParameteriSGIS>;

export function PixelTexGenParameteriSGIS(
  pname: GLenum,
  param: GLint,
): void {
  fn_glPixelTexGenParameteriSGIS.call(
    pname,
    param,
  );
}

export const def_glPixelTexGenParameterivSGIS = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPixelTexGenParameterivSGIS!: Deno.UnsafeFnPointer<typeof def_glPixelTexGenParameterivSGIS>;

export function PixelTexGenParameterivSGIS(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPixelTexGenParameterivSGIS.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glPixelTexGenParameterfSGIS = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPixelTexGenParameterfSGIS!: Deno.UnsafeFnPointer<typeof def_glPixelTexGenParameterfSGIS>;

export function PixelTexGenParameterfSGIS(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPixelTexGenParameterfSGIS.call(
    pname,
    param,
  );
}

export const def_glPixelTexGenParameterfvSGIS = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPixelTexGenParameterfvSGIS!: Deno.UnsafeFnPointer<typeof def_glPixelTexGenParameterfvSGIS>;

export function PixelTexGenParameterfvSGIS(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPixelTexGenParameterfvSGIS.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPixelTexGenParameterivSGIS = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelTexGenParameterivSGIS!: Deno.UnsafeFnPointer<typeof def_glGetPixelTexGenParameterivSGIS>;

export function GetPixelTexGenParameterivSGIS(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPixelTexGenParameterivSGIS.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetPixelTexGenParameterfvSGIS = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelTexGenParameterfvSGIS!: Deno.UnsafeFnPointer<typeof def_glGetPixelTexGenParameterfvSGIS>;

export function GetPixelTexGenParameterfvSGIS(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPixelTexGenParameterfvSGIS.call(
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPixelTexGenParameteriSGIS = new Deno.UnsafeFnPointer(proc("glPixelTexGenParameteriSGIS"), def_glPixelTexGenParameteriSGIS);
  fn_glPixelTexGenParameterivSGIS = new Deno.UnsafeFnPointer(proc("glPixelTexGenParameterivSGIS"), def_glPixelTexGenParameterivSGIS);
  fn_glPixelTexGenParameterfSGIS = new Deno.UnsafeFnPointer(proc("glPixelTexGenParameterfSGIS"), def_glPixelTexGenParameterfSGIS);
  fn_glPixelTexGenParameterfvSGIS = new Deno.UnsafeFnPointer(proc("glPixelTexGenParameterfvSGIS"), def_glPixelTexGenParameterfvSGIS);
  fn_glGetPixelTexGenParameterivSGIS = new Deno.UnsafeFnPointer(proc("glGetPixelTexGenParameterivSGIS"), def_glGetPixelTexGenParameterivSGIS);
  fn_glGetPixelTexGenParameterfvSGIS = new Deno.UnsafeFnPointer(proc("glGetPixelTexGenParameterfvSGIS"), def_glGetPixelTexGenParameterfvSGIS);
}
