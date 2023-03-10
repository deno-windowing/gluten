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
export const MAX_VERTEX_BINDABLE_UNIFORMS_EXT = 0x8de2;
export const MAX_FRAGMENT_BINDABLE_UNIFORMS_EXT = 0x8de3;
export const MAX_GEOMETRY_BINDABLE_UNIFORMS_EXT = 0x8de4;
export const MAX_BINDABLE_UNIFORM_SIZE_EXT = 0x8ded;
export const UNIFORM_BUFFER_EXT = 0x8dee;
export const UNIFORM_BUFFER_BINDING_EXT = 0x8def;

/// Commands

export const def_glUniformBufferEXT = {
  parameters: ["u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glUniformBufferEXT!: Deno.UnsafeFnPointer<typeof def_glUniformBufferEXT>;

export function UniformBufferEXT(
  program: GLuint,
  location: GLint,
  buffer: GLuint,
): void {
  fn_glUniformBufferEXT.call(
    program,
    location,
    buffer,
  );
}

export const def_glGetUniformBufferSizeEXT = {
  parameters: ["u32", "i32"],
  result: "i32",
} as const;

let fn_glGetUniformBufferSizeEXT!: Deno.UnsafeFnPointer<typeof def_glGetUniformBufferSizeEXT>;

export function GetUniformBufferSizeEXT(
  program: GLuint,
  location: GLint,
): GLint {
  return fn_glGetUniformBufferSizeEXT.call(
    program,
    location,
  );
}

export const def_glGetUniformOffsetEXT = {
  parameters: ["u32", "i32"],
  result: "buffer",
} as const;

let fn_glGetUniformOffsetEXT!: Deno.UnsafeFnPointer<typeof def_glGetUniformOffsetEXT>;

export function GetUniformOffsetEXT(
  program: GLuint,
  location: GLint,
): GLintptr {
  return fn_glGetUniformOffsetEXT.call(
    program,
    location,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glUniformBufferEXT = new Deno.UnsafeFnPointer(proc("glUniformBufferEXT")!, def_glUniformBufferEXT);
  fn_glGetUniformBufferSizeEXT = new Deno.UnsafeFnPointer(proc("glGetUniformBufferSizeEXT")!, def_glGetUniformBufferSizeEXT);
  fn_glGetUniformOffsetEXT = new Deno.UnsafeFnPointer(proc("glGetUniformOffsetEXT")!, def_glGetUniformOffsetEXT);
}
