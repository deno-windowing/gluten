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
export const ELEMENT_ARRAY_APPLE = 0x8a0c;
export const ELEMENT_ARRAY_TYPE_APPLE = 0x8a0d;
export const ELEMENT_ARRAY_POINTER_APPLE = 0x8a0e;

/// Commands

export const def_glElementPointerAPPLE = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glElementPointerAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glElementPointerAPPLE
>;

export function ElementPointerAPPLE(
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glElementPointerAPPLE.call(
    type,
    bufferToFFI(pointer),
  );
}

export const def_glDrawElementArrayAPPLE = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawElementArrayAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glDrawElementArrayAPPLE
>;

export function DrawElementArrayAPPLE(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
): void {
  fn_glDrawElementArrayAPPLE.call(
    mode,
    first,
    count,
  );
}

export const def_glDrawRangeElementArrayAPPLE = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawRangeElementArrayAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glDrawRangeElementArrayAPPLE
>;

export function DrawRangeElementArrayAPPLE(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  first: GLint,
  count: GLsizei,
): void {
  fn_glDrawRangeElementArrayAPPLE.call(
    mode,
    start,
    end,
    first,
    count,
  );
}

export const def_glMultiDrawElementArrayAPPLE = {
  parameters: ["u32", "buffer", "buffer", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawElementArrayAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawElementArrayAPPLE
>;

export function MultiDrawElementArrayAPPLE(
  mode: GLenum,
  first: Buffer,
  count: Buffer,
  primcount: GLsizei,
): void {
  fn_glMultiDrawElementArrayAPPLE.call(
    mode,
    bufferToFFI(first),
    bufferToFFI(count),
    primcount,
  );
}

export const def_glMultiDrawRangeElementArrayAPPLE = {
  parameters: ["u32", "u32", "u32", "buffer", "buffer", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawRangeElementArrayAPPLE!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawRangeElementArrayAPPLE
>;

export function MultiDrawRangeElementArrayAPPLE(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  first: Buffer,
  count: Buffer,
  primcount: GLsizei,
): void {
  fn_glMultiDrawRangeElementArrayAPPLE.call(
    mode,
    start,
    end,
    bufferToFFI(first),
    bufferToFFI(count),
    primcount,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glElementPointerAPPLE = new Deno.UnsafeFnPointer(
    proc("glElementPointerAPPLE"),
    def_glElementPointerAPPLE,
  );
  fn_glDrawElementArrayAPPLE = new Deno.UnsafeFnPointer(
    proc("glDrawElementArrayAPPLE"),
    def_glDrawElementArrayAPPLE,
  );
  fn_glDrawRangeElementArrayAPPLE = new Deno.UnsafeFnPointer(
    proc("glDrawRangeElementArrayAPPLE"),
    def_glDrawRangeElementArrayAPPLE,
  );
  fn_glMultiDrawElementArrayAPPLE = new Deno.UnsafeFnPointer(
    proc("glMultiDrawElementArrayAPPLE"),
    def_glMultiDrawElementArrayAPPLE,
  );
  fn_glMultiDrawRangeElementArrayAPPLE = new Deno.UnsafeFnPointer(
    proc("glMultiDrawRangeElementArrayAPPLE"),
    def_glMultiDrawRangeElementArrayAPPLE,
  );
}
