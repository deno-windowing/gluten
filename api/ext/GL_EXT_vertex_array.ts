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
export const VERTEX_ARRAY_EXT = 0x8074;
export const NORMAL_ARRAY_EXT = 0x8075;
export const COLOR_ARRAY_EXT = 0x8076;
export const INDEX_ARRAY_EXT = 0x8077;
export const TEXTURE_COORD_ARRAY_EXT = 0x8078;
export const EDGE_FLAG_ARRAY_EXT = 0x8079;
export const VERTEX_ARRAY_SIZE_EXT = 0x807a;
export const VERTEX_ARRAY_TYPE_EXT = 0x807b;
export const VERTEX_ARRAY_STRIDE_EXT = 0x807c;
export const VERTEX_ARRAY_COUNT_EXT = 0x807d;
export const NORMAL_ARRAY_TYPE_EXT = 0x807e;
export const NORMAL_ARRAY_STRIDE_EXT = 0x807f;
export const NORMAL_ARRAY_COUNT_EXT = 0x8080;
export const COLOR_ARRAY_SIZE_EXT = 0x8081;
export const COLOR_ARRAY_TYPE_EXT = 0x8082;
export const COLOR_ARRAY_STRIDE_EXT = 0x8083;
export const COLOR_ARRAY_COUNT_EXT = 0x8084;
export const INDEX_ARRAY_TYPE_EXT = 0x8085;
export const INDEX_ARRAY_STRIDE_EXT = 0x8086;
export const INDEX_ARRAY_COUNT_EXT = 0x8087;
export const TEXTURE_COORD_ARRAY_SIZE_EXT = 0x8088;
export const TEXTURE_COORD_ARRAY_TYPE_EXT = 0x8089;
export const TEXTURE_COORD_ARRAY_STRIDE_EXT = 0x808a;
export const TEXTURE_COORD_ARRAY_COUNT_EXT = 0x808b;
export const EDGE_FLAG_ARRAY_STRIDE_EXT = 0x808c;
export const EDGE_FLAG_ARRAY_COUNT_EXT = 0x808d;
export const VERTEX_ARRAY_POINTER_EXT = 0x808e;
export const NORMAL_ARRAY_POINTER_EXT = 0x808f;
export const COLOR_ARRAY_POINTER_EXT = 0x8090;
export const INDEX_ARRAY_POINTER_EXT = 0x8091;
export const TEXTURE_COORD_ARRAY_POINTER_EXT = 0x8092;
export const EDGE_FLAG_ARRAY_POINTER_EXT = 0x8093;

/// Commands

export const def_glArrayElementEXT = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glArrayElementEXT!: Deno.UnsafeFnPointer<typeof def_glArrayElementEXT>;

export function ArrayElementEXT(
  i: GLint,
): void {
  fn_glArrayElementEXT.call(
    i,
  );
}

export const def_glColorPointerEXT = {
  parameters: ["i32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glColorPointerEXT!: Deno.UnsafeFnPointer<typeof def_glColorPointerEXT>;

export function ColorPointerEXT(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glColorPointerEXT.call(
    size,
    type,
    stride,
    count,
    bufferToFFI(pointer),
  );
}

export const def_glDrawArraysEXT = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawArraysEXT!: Deno.UnsafeFnPointer<typeof def_glDrawArraysEXT>;

export function DrawArraysEXT(
  mode: GLenum,
  first: GLint,
  count: GLsizei,
): void {
  fn_glDrawArraysEXT.call(
    mode,
    first,
    count,
  );
}

export const def_glEdgeFlagPointerEXT = {
  parameters: ["i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glEdgeFlagPointerEXT!: Deno.UnsafeFnPointer<typeof def_glEdgeFlagPointerEXT>;

export function EdgeFlagPointerEXT(
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glEdgeFlagPointerEXT.call(
    stride,
    count,
    bufferToFFI(pointer),
  );
}

export const def_glGetPointervEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointervEXT!: Deno.UnsafeFnPointer<typeof def_glGetPointervEXT>;

export function GetPointervEXT(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPointervEXT.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glIndexPointerEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glIndexPointerEXT!: Deno.UnsafeFnPointer<typeof def_glIndexPointerEXT>;

export function IndexPointerEXT(
  type: GLenum,
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glIndexPointerEXT.call(
    type,
    stride,
    count,
    bufferToFFI(pointer),
  );
}

export const def_glNormalPointerEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNormalPointerEXT!: Deno.UnsafeFnPointer<typeof def_glNormalPointerEXT>;

export function NormalPointerEXT(
  type: GLenum,
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glNormalPointerEXT.call(
    type,
    stride,
    count,
    bufferToFFI(pointer),
  );
}

export const def_glTexCoordPointerEXT = {
  parameters: ["i32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordPointerEXT!: Deno.UnsafeFnPointer<typeof def_glTexCoordPointerEXT>;

export function TexCoordPointerEXT(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glTexCoordPointerEXT.call(
    size,
    type,
    stride,
    count,
    bufferToFFI(pointer),
  );
}

export const def_glVertexPointerEXT = {
  parameters: ["i32", "u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexPointerEXT!: Deno.UnsafeFnPointer<typeof def_glVertexPointerEXT>;

export function VertexPointerEXT(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  count: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexPointerEXT.call(
    size,
    type,
    stride,
    count,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glArrayElementEXT = new Deno.UnsafeFnPointer(proc("glArrayElementEXT"), def_glArrayElementEXT);
  fn_glColorPointerEXT = new Deno.UnsafeFnPointer(proc("glColorPointerEXT"), def_glColorPointerEXT);
  fn_glDrawArraysEXT = new Deno.UnsafeFnPointer(proc("glDrawArraysEXT"), def_glDrawArraysEXT);
  fn_glEdgeFlagPointerEXT = new Deno.UnsafeFnPointer(proc("glEdgeFlagPointerEXT"), def_glEdgeFlagPointerEXT);
  fn_glGetPointervEXT = new Deno.UnsafeFnPointer(proc("glGetPointervEXT"), def_glGetPointervEXT);
  fn_glIndexPointerEXT = new Deno.UnsafeFnPointer(proc("glIndexPointerEXT"), def_glIndexPointerEXT);
  fn_glNormalPointerEXT = new Deno.UnsafeFnPointer(proc("glNormalPointerEXT"), def_glNormalPointerEXT);
  fn_glTexCoordPointerEXT = new Deno.UnsafeFnPointer(proc("glTexCoordPointerEXT"), def_glTexCoordPointerEXT);
  fn_glVertexPointerEXT = new Deno.UnsafeFnPointer(proc("glVertexPointerEXT"), def_glVertexPointerEXT);
}
