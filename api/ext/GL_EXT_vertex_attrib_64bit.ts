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
export const DOUBLE = 0x140a;
export const DOUBLE_VEC2_EXT = 0x8ffc;
export const DOUBLE_VEC3_EXT = 0x8ffd;
export const DOUBLE_VEC4_EXT = 0x8ffe;
export const DOUBLE_MAT2_EXT = 0x8f46;
export const DOUBLE_MAT3_EXT = 0x8f47;
export const DOUBLE_MAT4_EXT = 0x8f48;
export const DOUBLE_MAT2x3_EXT = 0x8f49;
export const DOUBLE_MAT2x4_EXT = 0x8f4a;
export const DOUBLE_MAT3x2_EXT = 0x8f4b;
export const DOUBLE_MAT3x4_EXT = 0x8f4c;
export const DOUBLE_MAT4x2_EXT = 0x8f4d;
export const DOUBLE_MAT4x3_EXT = 0x8f4e;

/// Commands

export const def_glVertexAttribL1dEXT = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL1dEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1dEXT>;

export function VertexAttribL1dEXT(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttribL1dEXT.call(
    index,
    x,
  );
}

export const def_glVertexAttribL2dEXT = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL2dEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2dEXT>;

export function VertexAttribL2dEXT(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttribL2dEXT.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribL3dEXT = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL3dEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3dEXT>;

export function VertexAttribL3dEXT(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttribL3dEXT.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribL4dEXT = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttribL4dEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4dEXT>;

export function VertexAttribL4dEXT(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttribL4dEXT.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribL1dvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1dvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1dvEXT>;

export function VertexAttribL1dvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1dvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL2dvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL2dvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2dvEXT>;

export function VertexAttribL2dvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL2dvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL3dvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL3dvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3dvEXT>;

export function VertexAttribL3dvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL3dvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL4dvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL4dvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4dvEXT>;

export function VertexAttribL4dvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL4dvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribLPointerEXT = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribLPointerEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLPointerEXT>;

export function VertexAttribLPointerEXT(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribLPointerEXT.call(
    index,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glGetVertexAttribLdvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLdvEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribLdvEXT>;

export function GetVertexAttribLdvEXT(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLdvEXT.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttribL1dEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL1dEXT"), def_glVertexAttribL1dEXT);
  fn_glVertexAttribL2dEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL2dEXT"), def_glVertexAttribL2dEXT);
  fn_glVertexAttribL3dEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL3dEXT"), def_glVertexAttribL3dEXT);
  fn_glVertexAttribL4dEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL4dEXT"), def_glVertexAttribL4dEXT);
  fn_glVertexAttribL1dvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL1dvEXT"), def_glVertexAttribL1dvEXT);
  fn_glVertexAttribL2dvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL2dvEXT"), def_glVertexAttribL2dvEXT);
  fn_glVertexAttribL3dvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL3dvEXT"), def_glVertexAttribL3dvEXT);
  fn_glVertexAttribL4dvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribL4dvEXT"), def_glVertexAttribL4dvEXT);
  fn_glVertexAttribLPointerEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribLPointerEXT"), def_glVertexAttribLPointerEXT);
  fn_glGetVertexAttribLdvEXT = new Deno.UnsafeFnPointer(proc("glGetVertexAttribLdvEXT"), def_glGetVertexAttribLdvEXT);
}
