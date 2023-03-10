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
export const COLOR_ATTACHMENT_EXT = 0x90f0;
export const MULTIVIEW_EXT = 0x90f1;
export const DRAW_BUFFER_EXT = 0xc01;
export const READ_BUFFER_EXT = 0xc02;
export const MAX_MULTIVIEW_BUFFERS_EXT = 0x90f2;

/// Commands

export const def_glReadBufferIndexedEXT = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glReadBufferIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glReadBufferIndexedEXT>;

export function ReadBufferIndexedEXT(
  src: GLenum,
  index: GLint,
): void {
  fn_glReadBufferIndexedEXT.call(
    src,
    index,
  );
}

export const def_glDrawBuffersIndexedEXT = {
  parameters: ["i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glDrawBuffersIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glDrawBuffersIndexedEXT>;

export function DrawBuffersIndexedEXT(
  n: GLint,
  location: Buffer,
  indices: Buffer,
): void {
  fn_glDrawBuffersIndexedEXT.call(
    n,
    bufferToFFI(location),
    bufferToFFI(indices),
  );
}

export const def_glGetIntegeri_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegeri_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetIntegeri_vEXT>;

export function GetIntegeri_vEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetIntegeri_vEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glReadBufferIndexedEXT = new Deno.UnsafeFnPointer(proc("glReadBufferIndexedEXT")!, def_glReadBufferIndexedEXT);
  fn_glDrawBuffersIndexedEXT = new Deno.UnsafeFnPointer(proc("glDrawBuffersIndexedEXT")!, def_glDrawBuffersIndexedEXT);
  fn_glGetIntegeri_vEXT = new Deno.UnsafeFnPointer(proc("glGetIntegeri_vEXT")!, def_glGetIntegeri_vEXT);
}
