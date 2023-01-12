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
export const VERTEX_ARRAY_BINDING = 0x85b5;

/// Commands

export const def_glBindVertexArray = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBindVertexArray!: Deno.UnsafeFnPointer<typeof def_glBindVertexArray>;

export function BindVertexArray(
  array: GLuint,
): void {
  fn_glBindVertexArray.call(
    array,
  );
}

export const def_glDeleteVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteVertexArrays!: Deno.UnsafeFnPointer<
  typeof def_glDeleteVertexArrays
>;

export function DeleteVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glDeleteVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glGenVertexArrays = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenVertexArrays!: Deno.UnsafeFnPointer<typeof def_glGenVertexArrays>;

export function GenVertexArrays(
  n: GLsizei,
  arrays: Buffer,
): void {
  fn_glGenVertexArrays.call(
    n,
    bufferToFFI(arrays),
  );
}

export const def_glIsVertexArray = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsVertexArray!: Deno.UnsafeFnPointer<typeof def_glIsVertexArray>;

export function IsVertexArray(
  array: GLuint,
): GLboolean {
  return fn_glIsVertexArray.call(
    array,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindVertexArray = new Deno.UnsafeFnPointer(
    proc("glBindVertexArray"),
    def_glBindVertexArray,
  );
  fn_glDeleteVertexArrays = new Deno.UnsafeFnPointer(
    proc("glDeleteVertexArrays"),
    def_glDeleteVertexArrays,
  );
  fn_glGenVertexArrays = new Deno.UnsafeFnPointer(
    proc("glGenVertexArrays"),
    def_glGenVertexArrays,
  );
  fn_glIsVertexArray = new Deno.UnsafeFnPointer(
    proc("glIsVertexArray"),
    def_glIsVertexArray,
  );
}
