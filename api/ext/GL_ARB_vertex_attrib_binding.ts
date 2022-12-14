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

/// Enums
export const VERTEX_ATTRIB_BINDING = 0x82d4;
export const VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d5;
export const VERTEX_BINDING_DIVISOR = 0x82d6;
export const VERTEX_BINDING_OFFSET = 0x82d7;
export const VERTEX_BINDING_STRIDE = 0x82d8;
export const MAX_VERTEX_ATTRIB_RELATIVE_OFFSET = 0x82d9;
export const MAX_VERTEX_ATTRIB_BINDINGS = 0x82da;

/// Commands

export const def_glBindVertexBuffer = {
  parameters: ["u32", "u32", "buffer", "i32"],
  result: "void",
} as const;

let fn_glBindVertexBuffer!: Deno.UnsafeFnPointer<typeof def_glBindVertexBuffer>;

export function BindVertexBuffer(
  bindingindex: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  stride: GLsizei,
): void {
  fn_glBindVertexBuffer.call(
    bindingindex,
    buffer,
    bufferToFFI(offset),
    stride,
  );
}

export const def_glVertexAttribFormat = {
  parameters: ["u32", "i32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribFormat>;

export function VertexAttribFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribFormat.call(
    attribindex,
    size,
    type,
    normalized,
    relativeoffset,
  );
}

export const def_glVertexAttribIFormat = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribIFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribIFormat>;

export function VertexAttribIFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribIFormat.call(
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexAttribLFormat = {
  parameters: ["u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribLFormat!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLFormat>;

export function VertexAttribLFormat(
  attribindex: GLuint,
  size: GLint,
  type: GLenum,
  relativeoffset: GLuint,
): void {
  fn_glVertexAttribLFormat.call(
    attribindex,
    size,
    type,
    relativeoffset,
  );
}

export const def_glVertexAttribBinding = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribBinding!: Deno.UnsafeFnPointer<typeof def_glVertexAttribBinding>;

export function VertexAttribBinding(
  attribindex: GLuint,
  bindingindex: GLuint,
): void {
  fn_glVertexAttribBinding.call(
    attribindex,
    bindingindex,
  );
}

export const def_glVertexBindingDivisor = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexBindingDivisor!: Deno.UnsafeFnPointer<typeof def_glVertexBindingDivisor>;

export function VertexBindingDivisor(
  bindingindex: GLuint,
  divisor: GLuint,
): void {
  fn_glVertexBindingDivisor.call(
    bindingindex,
    divisor,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindVertexBuffer = new Deno.UnsafeFnPointer(proc("glBindVertexBuffer"), def_glBindVertexBuffer);
  fn_glVertexAttribFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribFormat"), def_glVertexAttribFormat);
  fn_glVertexAttribIFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribIFormat"), def_glVertexAttribIFormat);
  fn_glVertexAttribLFormat = new Deno.UnsafeFnPointer(proc("glVertexAttribLFormat"), def_glVertexAttribLFormat);
  fn_glVertexAttribBinding = new Deno.UnsafeFnPointer(proc("glVertexAttribBinding"), def_glVertexAttribBinding);
  fn_glVertexBindingDivisor = new Deno.UnsafeFnPointer(proc("glVertexBindingDivisor"), def_glVertexBindingDivisor);
}
