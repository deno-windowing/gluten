/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
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

/// Commands

export const def_glGenQueryResourceTagNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenQueryResourceTagNV!: Deno.UnsafeFnPointer<typeof def_glGenQueryResourceTagNV>;

export function GenQueryResourceTagNV(
  n: GLsizei,
  tagIds: Buffer,
): void {
  fn_glGenQueryResourceTagNV.call(
    n,
    bufferToFFI(tagIds),
  );
}

export const def_glDeleteQueryResourceTagNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteQueryResourceTagNV!: Deno.UnsafeFnPointer<typeof def_glDeleteQueryResourceTagNV>;

export function DeleteQueryResourceTagNV(
  n: GLsizei,
  tagIds: Buffer,
): void {
  fn_glDeleteQueryResourceTagNV.call(
    n,
    bufferToFFI(tagIds),
  );
}

export const def_glQueryResourceTagNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glQueryResourceTagNV!: Deno.UnsafeFnPointer<typeof def_glQueryResourceTagNV>;

export function QueryResourceTagNV(
  tagId: GLint,
  tagString: Buffer,
): void {
  fn_glQueryResourceTagNV.call(
    tagId,
    bufferToFFI(tagString),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenQueryResourceTagNV = new Deno.UnsafeFnPointer(proc("glGenQueryResourceTagNV"), def_glGenQueryResourceTagNV);
  fn_glDeleteQueryResourceTagNV = new Deno.UnsafeFnPointer(proc("glDeleteQueryResourceTagNV"), def_glDeleteQueryResourceTagNV);
  fn_glQueryResourceTagNV = new Deno.UnsafeFnPointer(proc("glQueryResourceTagNV"), def_glQueryResourceTagNV);
}
