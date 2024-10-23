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
export const VERTEX_ATTRIB_ARRAY_DIVISOR_EXT = 0x88fe;

/// Commands

export const def_glDrawArraysInstancedEXT = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArraysInstancedEXT!: Deno.UnsafeFnPointer<
  typeof def_glDrawArraysInstancedEXT
>;

export function DrawArraysInstancedEXT(
  mode: GLenum,
  start: GLint,
  count: GLsizei,
  primcount: GLsizei,
): void {
  fn_glDrawArraysInstancedEXT.call(
    mode,
    start,
    count,
    primcount,
  );
}

export const def_glDrawElementsInstancedEXT = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedEXT!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsInstancedEXT
>;

export function DrawElementsInstancedEXT(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  primcount: GLsizei,
): void {
  fn_glDrawElementsInstancedEXT.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    primcount,
  );
}

export const def_glVertexAttribDivisorEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribDivisorEXT!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribDivisorEXT
>;

export function VertexAttribDivisorEXT(
  index: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexAttribDivisorEXT.call(
    index,
    divisor,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawArraysInstancedEXT = new Deno.UnsafeFnPointer(
    proc("glDrawArraysInstancedEXT")!,
    def_glDrawArraysInstancedEXT,
  );
  fn_glDrawElementsInstancedEXT = new Deno.UnsafeFnPointer(
    proc("glDrawElementsInstancedEXT")!,
    def_glDrawElementsInstancedEXT,
  );
  fn_glVertexAttribDivisorEXT = new Deno.UnsafeFnPointer(
    proc("glVertexAttribDivisorEXT")!,
    def_glVertexAttribDivisorEXT,
  );
}
