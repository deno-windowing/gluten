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
export const DETAIL_TEXTURE_2D_SGIS = 0x8095;
export const DETAIL_TEXTURE_2D_BINDING_SGIS = 0x8096;
export const LINEAR_DETAIL_SGIS = 0x8097;
export const LINEAR_DETAIL_ALPHA_SGIS = 0x8098;
export const LINEAR_DETAIL_COLOR_SGIS = 0x8099;
export const DETAIL_TEXTURE_LEVEL_SGIS = 0x809a;
export const DETAIL_TEXTURE_MODE_SGIS = 0x809b;
export const DETAIL_TEXTURE_FUNC_POINTS_SGIS = 0x809c;

/// Commands

export const def_glDetailTexFuncSGIS = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDetailTexFuncSGIS!: Deno.UnsafeFnPointer<
  typeof def_glDetailTexFuncSGIS
>;

export function DetailTexFuncSGIS(
  target: GLenum,
  n: GLsizei,
  points: Buffer,
): void {
  fn_glDetailTexFuncSGIS.call(
    target,
    n,
    bufferToFFI(points),
  );
}

export const def_glGetDetailTexFuncSGIS = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetDetailTexFuncSGIS!: Deno.UnsafeFnPointer<
  typeof def_glGetDetailTexFuncSGIS
>;

export function GetDetailTexFuncSGIS(
  target: GLenum,
  points: Buffer,
): void {
  fn_glGetDetailTexFuncSGIS.call(
    target,
    bufferToFFI(points),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDetailTexFuncSGIS = new Deno.UnsafeFnPointer(
    proc("glDetailTexFuncSGIS"),
    def_glDetailTexFuncSGIS,
  );
  fn_glGetDetailTexFuncSGIS = new Deno.UnsafeFnPointer(
    proc("glGetDetailTexFuncSGIS"),
    def_glGetDetailTexFuncSGIS,
  );
}
