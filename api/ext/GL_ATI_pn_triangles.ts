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
export const PN_TRIANGLES_ATI = 0x87f0;
export const MAX_PN_TRIANGLES_TESSELATION_LEVEL_ATI = 0x87f1;
export const PN_TRIANGLES_POINT_MODE_ATI = 0x87f2;
export const PN_TRIANGLES_NORMAL_MODE_ATI = 0x87f3;
export const PN_TRIANGLES_TESSELATION_LEVEL_ATI = 0x87f4;
export const PN_TRIANGLES_POINT_MODE_LINEAR_ATI = 0x87f5;
export const PN_TRIANGLES_POINT_MODE_CUBIC_ATI = 0x87f6;
export const PN_TRIANGLES_NORMAL_MODE_LINEAR_ATI = 0x87f7;
export const PN_TRIANGLES_NORMAL_MODE_QUADRATIC_ATI = 0x87f8;

/// Commands

export const def_glPNTrianglesiATI = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPNTrianglesiATI!: Deno.UnsafeFnPointer<typeof def_glPNTrianglesiATI>;

export function PNTrianglesiATI(
  pname: GLenum,
  param: GLint,
): void {
  fn_glPNTrianglesiATI.call(
    pname,
    param,
  );
}

export const def_glPNTrianglesfATI = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glPNTrianglesfATI!: Deno.UnsafeFnPointer<typeof def_glPNTrianglesfATI>;

export function PNTrianglesfATI(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glPNTrianglesfATI.call(
    pname,
    param,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPNTrianglesiATI = new Deno.UnsafeFnPointer(
    proc("glPNTrianglesiATI")!,
    def_glPNTrianglesiATI,
  );
  fn_glPNTrianglesfATI = new Deno.UnsafeFnPointer(
    proc("glPNTrianglesfATI")!,
    def_glPNTrianglesfATI,
  );
}
