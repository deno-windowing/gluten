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
export const BUFFER_OBJECT_APPLE = 0x85b3;
export const RELEASED_APPLE = 0x8a19;
export const VOLATILE_APPLE = 0x8a1a;
export const RETAINED_APPLE = 0x8a1b;
export const UNDEFINED_APPLE = 0x8a1c;
export const PURGEABLE_APPLE = 0x8a1d;

/// Commands

export const def_glObjectPurgeableAPPLE = {
  parameters: ["u32", "u32", "u32"],
  result: "u32",
} as const;

let fn_glObjectPurgeableAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glObjectPurgeableAPPLE
>;

export function ObjectPurgeableAPPLE(
  objectType: GLenum,
  name: GLuint,
  option: GLenum,
): GLenum {
  return fn_glObjectPurgeableAPPLE.call(
    objectType,
    name,
    option,
  );
}

export const def_glObjectUnpurgeableAPPLE = {
  parameters: ["u32", "u32", "u32"],
  result: "u32",
} as const;

let fn_glObjectUnpurgeableAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glObjectUnpurgeableAPPLE
>;

export function ObjectUnpurgeableAPPLE(
  objectType: GLenum,
  name: GLuint,
  option: GLenum,
): GLenum {
  return fn_glObjectUnpurgeableAPPLE.call(
    objectType,
    name,
    option,
  );
}

export const def_glGetObjectParameterivAPPLE = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectParameterivAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectParameterivAPPLE
>;

export function GetObjectParameterivAPPLE(
  objectType: GLenum,
  name: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetObjectParameterivAPPLE.call(
    objectType,
    name,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glObjectPurgeableAPPLE = new Deno.UnsafeFnPointer(
    proc("glObjectPurgeableAPPLE")!,
    def_glObjectPurgeableAPPLE,
  );
  fn_glObjectUnpurgeableAPPLE = new Deno.UnsafeFnPointer(
    proc("glObjectUnpurgeableAPPLE")!,
    def_glObjectUnpurgeableAPPLE,
  );
  fn_glGetObjectParameterivAPPLE = new Deno.UnsafeFnPointer(
    proc("glGetObjectParameterivAPPLE")!,
    def_glGetObjectParameterivAPPLE,
  );
}
