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
export const RGB32I = 0x8d83;
export const DOUBLE_VEC2 = 0x8ffc;
export const DOUBLE_VEC3 = 0x8ffd;
export const DOUBLE_VEC4 = 0x8ffe;
export const DOUBLE_MAT2 = 0x8f46;
export const DOUBLE_MAT3 = 0x8f47;
export const DOUBLE_MAT4 = 0x8f48;
export const DOUBLE_MAT2x3 = 0x8f49;
export const DOUBLE_MAT2x4 = 0x8f4a;
export const DOUBLE_MAT3x2 = 0x8f4b;
export const DOUBLE_MAT3x4 = 0x8f4c;
export const DOUBLE_MAT4x2 = 0x8f4d;
export const DOUBLE_MAT4x3 = 0x8f4e;

/// Commands

export const def_glVertexAttribL1d = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL1d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1d>;

export function VertexAttribL1d(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttribL1d.call(
    index,
    x,
  );
}

export const def_glVertexAttribL2d = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL2d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2d>;

export function VertexAttribL2d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttribL2d.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribL3d = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL3d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3d>;

export function VertexAttribL3d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttribL3d.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribL4d = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL4d!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4d>;

export function VertexAttribL4d(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttribL4d.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribL1dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1dv>;

export function VertexAttribL1dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL2dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL2dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2dv>;

export function VertexAttribL2dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL2dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL3dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL3dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3dv>;

export function VertexAttribL3dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL3dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL4dv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL4dv!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4dv>;

export function VertexAttribL4dv(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL4dv.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribLPointer = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribLPointer!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLPointer>;

export function VertexAttribLPointer(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribLPointer.call(
    index,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glGetVertexAttribLdv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLdv!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribLdv>;

export function GetVertexAttribLdv(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLdv.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttribL1d = new Deno.UnsafeFnPointer(proc("glVertexAttribL1d"), def_glVertexAttribL1d);
  fn_glVertexAttribL2d = new Deno.UnsafeFnPointer(proc("glVertexAttribL2d"), def_glVertexAttribL2d);
  fn_glVertexAttribL3d = new Deno.UnsafeFnPointer(proc("glVertexAttribL3d"), def_glVertexAttribL3d);
  fn_glVertexAttribL4d = new Deno.UnsafeFnPointer(proc("glVertexAttribL4d"), def_glVertexAttribL4d);
  fn_glVertexAttribL1dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL1dv"), def_glVertexAttribL1dv);
  fn_glVertexAttribL2dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL2dv"), def_glVertexAttribL2dv);
  fn_glVertexAttribL3dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL3dv"), def_glVertexAttribL3dv);
  fn_glVertexAttribL4dv = new Deno.UnsafeFnPointer(proc("glVertexAttribL4dv"), def_glVertexAttribL4dv);
  fn_glVertexAttribLPointer = new Deno.UnsafeFnPointer(proc("glVertexAttribLPointer"), def_glVertexAttribLPointer);
  fn_glGetVertexAttribLdv = new Deno.UnsafeFnPointer(proc("glGetVertexAttribLdv"), def_glGetVertexAttribLdv);
}
