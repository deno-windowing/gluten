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
export const PROGRAM_PIPELINE_OBJECT_EXT = 0x8a4f;
export const PROGRAM_OBJECT_EXT = 0x8b40;
export const SHADER_OBJECT_EXT = 0x8b48;
export const BUFFER_OBJECT_EXT = 0x9151;
export const QUERY_OBJECT_EXT = 0x9153;
export const VERTEX_ARRAY_OBJECT_EXT = 0x9154;
export const SAMPLER = 0x82e6;
export const TRANSFORM_FEEDBACK = 0x8e22;

/// Commands

export const def_glLabelObjectEXT = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glLabelObjectEXT!: Deno.UnsafeFnPointer<typeof def_glLabelObjectEXT>;

export function LabelObjectEXT(
  type: GLenum,
  object: GLuint,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glLabelObjectEXT.call(
    type,
    object,
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectLabelEXT = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectLabelEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectLabelEXT
>;

export function GetObjectLabelEXT(
  type: GLenum,
  object: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectLabelEXT.call(
    type,
    object,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glLabelObjectEXT = new Deno.UnsafeFnPointer(
    proc("glLabelObjectEXT")!,
    def_glLabelObjectEXT,
  );
  fn_glGetObjectLabelEXT = new Deno.UnsafeFnPointer(
    proc("glGetObjectLabelEXT")!,
    def_glGetObjectLabelEXT,
  );
}
