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
export const ELEMENT_ARRAY_ATI = 0x8768;
export const ELEMENT_ARRAY_TYPE_ATI = 0x8769;
export const ELEMENT_ARRAY_POINTER_ATI = 0x876a;

/// Commands

export const def_glElementPointerATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glElementPointerATI!: Deno.UnsafeFnPointer<typeof def_glElementPointerATI>;

export function ElementPointerATI(
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glElementPointerATI.call(
    type,
    bufferToFFI(pointer),
  );
}

export const def_glDrawElementArrayATI = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glDrawElementArrayATI!: Deno.UnsafeFnPointer<typeof def_glDrawElementArrayATI>;

export function DrawElementArrayATI(
  mode: GLenum,
  count: GLsizei,
): void {
  fn_glDrawElementArrayATI.call(
    mode,
    count,
  );
}

export const def_glDrawRangeElementArrayATI = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glDrawRangeElementArrayATI!: Deno.UnsafeFnPointer<typeof def_glDrawRangeElementArrayATI>;

export function DrawRangeElementArrayATI(
  mode: GLenum,
  start: GLuint,
  end: GLuint,
  count: GLsizei,
): void {
  fn_glDrawRangeElementArrayATI.call(
    mode,
    start,
    end,
    count,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glElementPointerATI = new Deno.UnsafeFnPointer(proc("glElementPointerATI")!, def_glElementPointerATI);
  fn_glDrawElementArrayATI = new Deno.UnsafeFnPointer(proc("glDrawElementArrayATI")!, def_glDrawElementArrayATI);
  fn_glDrawRangeElementArrayATI = new Deno.UnsafeFnPointer(proc("glDrawRangeElementArrayATI")!, def_glDrawRangeElementArrayATI);
}
