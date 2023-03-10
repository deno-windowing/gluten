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
export const SRC1_COLOR_EXT = 0x88f9;
export const SRC1_ALPHA_EXT = 0x8589;
export const ONE_MINUS_SRC1_COLOR_EXT = 0x88fa;
export const ONE_MINUS_SRC1_ALPHA_EXT = 0x88fb;
export const SRC_ALPHA_SATURATE_EXT = 0x308;
export const LOCATION_INDEX_EXT = 0x930f;
export const MAX_DUAL_SOURCE_DRAW_BUFFERS_EXT = 0x88fc;

/// Commands

export const def_glBindFragDataLocationIndexedEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindFragDataLocationIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glBindFragDataLocationIndexedEXT>;

export function BindFragDataLocationIndexedEXT(
  program: GLuint,
  colorNumber: GLuint,
  index: GLuint,
  name: Buffer,
): void {
  fn_glBindFragDataLocationIndexedEXT.call(
    program,
    colorNumber,
    index,
    bufferToFFI(name),
  );
}

export const def_glBindFragDataLocationEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindFragDataLocationEXT!: Deno.UnsafeFnPointer<typeof def_glBindFragDataLocationEXT>;

export function BindFragDataLocationEXT(
  program: GLuint,
  color: GLuint,
  name: Buffer,
): void {
  fn_glBindFragDataLocationEXT.call(
    program,
    color,
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceLocationIndexEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetProgramResourceLocationIndexEXT!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceLocationIndexEXT>;

export function GetProgramResourceLocationIndexEXT(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetProgramResourceLocationIndexEXT.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glGetFragDataIndexEXT = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetFragDataIndexEXT!: Deno.UnsafeFnPointer<typeof def_glGetFragDataIndexEXT>;

export function GetFragDataIndexEXT(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetFragDataIndexEXT.call(
    program,
    bufferToFFI(name),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindFragDataLocationIndexedEXT = new Deno.UnsafeFnPointer(proc("glBindFragDataLocationIndexedEXT")!, def_glBindFragDataLocationIndexedEXT);
  fn_glBindFragDataLocationEXT = new Deno.UnsafeFnPointer(proc("glBindFragDataLocationEXT")!, def_glBindFragDataLocationEXT);
  fn_glGetProgramResourceLocationIndexEXT = new Deno.UnsafeFnPointer(proc("glGetProgramResourceLocationIndexEXT")!, def_glGetProgramResourceLocationIndexEXT);
  fn_glGetFragDataIndexEXT = new Deno.UnsafeFnPointer(proc("glGetFragDataIndexEXT")!, def_glGetFragDataIndexEXT);
}
