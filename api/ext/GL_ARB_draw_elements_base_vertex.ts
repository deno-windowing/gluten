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

/// Commands

export const def_glDrawElementsBaseVertex = {
  parameters: ["u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsBaseVertex
>;

export function DrawElementsBaseVertex(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  basevertex: GLint,
): void {
  fn_glDrawElementsBaseVertex.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    basevertex,
  );
}

export const def_glDrawRangeElementsBaseVertex = {
  parameters: ["u32", "u32", "u32", "i32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glDrawRangeElementsBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawRangeElementsBaseVertex
>;

export function DrawRangeElementsBaseVertex(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  basevertex: GLint,
): void {
  fn_glDrawRangeElementsBaseVertex.call(
    mode,
    start,
    end,
    count,
    type,
    bufferToFFI(indices),
    basevertex,
  );
}

export const def_glDrawElementsInstancedBaseVertex = {
  parameters: ["u32", "i32", "u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawElementsInstancedBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementsInstancedBaseVertex
>;

export function DrawElementsInstancedBaseVertex(
  mode: GLenum,
  count: GLsizei,
  type: GLenum,
  indices: Buffer,
  instancecount: GLsizei,
  basevertex: GLint,
): void {
  fn_glDrawElementsInstancedBaseVertex.call(
    mode,
    count,
    type,
    bufferToFFI(indices),
    instancecount,
    basevertex,
  );
}

export const def_glMultiDrawElementsBaseVertex = {
  parameters: ["u32", "buffer", "u32", "buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glMultiDrawElementsBaseVertex!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawElementsBaseVertex
>;

export function MultiDrawElementsBaseVertex(
  mode: GLenum,
  count: Buffer,
  type: GLenum,
  indices: Buffer,
  drawcount: GLsizei,
  basevertex: Buffer,
): void {
  fn_glMultiDrawElementsBaseVertex.call(
    mode,
    bufferToFFI(count),
    type,
    bufferToFFI(indices),
    drawcount,
    bufferToFFI(basevertex),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawElementsBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawElementsBaseVertex")!,
    def_glDrawElementsBaseVertex,
  );
  fn_glDrawRangeElementsBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawRangeElementsBaseVertex")!,
    def_glDrawRangeElementsBaseVertex,
  );
  fn_glDrawElementsInstancedBaseVertex = new Deno.UnsafeFnPointer(
    proc("glDrawElementsInstancedBaseVertex")!,
    def_glDrawElementsInstancedBaseVertex,
  );
  fn_glMultiDrawElementsBaseVertex = new Deno.UnsafeFnPointer(
    proc("glMultiDrawElementsBaseVertex")!,
    def_glMultiDrawElementsBaseVertex,
  );
}
