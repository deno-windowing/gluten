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
export const VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe;

/// Commands

export const def_glDrawArraysInstancedANGLE = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArraysInstancedANGLE!: Deno.UnsafeFnPointer<
  typeof def_glDrawArraysInstancedANGLE
>;

export function DrawArraysInstancedANGLE(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
  primcount: GLsizei,
): void {
  fn_glDrawArraysInstancedANGLE.call(
    mode,
    first,
    count,
    primcount,
  );
}

export const def_glDrawElementsInstancedANGLE = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedANGLE!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsInstancedANGLE
>;

export function DrawElementsInstancedANGLE(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  primcount: GLsizei,
): void {
  fn_glDrawElementsInstancedANGLE.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    primcount,
  );
}

export const def_glVertexAttribDivisorANGLE = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribDivisorANGLE!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribDivisorANGLE
>;

export function VertexAttribDivisorANGLE(
  index: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexAttribDivisorANGLE.call(
    index,
    divisor,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawArraysInstancedANGLE = new Deno.UnsafeFnPointer(
    proc("glDrawArraysInstancedANGLE"),
    def_glDrawArraysInstancedANGLE,
  );
  fn_glDrawElementsInstancedANGLE = new Deno.UnsafeFnPointer(
    proc("glDrawElementsInstancedANGLE"),
    def_glDrawElementsInstancedANGLE,
  );
  fn_glVertexAttribDivisorANGLE = new Deno.UnsafeFnPointer(
    proc("glVertexAttribDivisorANGLE"),
    def_glVertexAttribDivisorANGLE,
  );
}
