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
export const INT64_NV = 0x140e;
export const UNSIGNED_INT64_NV = 0x140f;

/// Commands

export const def_glVertexAttribL1i64NV = {
  parameters: ["u32", "i64"],
  result: "void",
} as const;

let fn_glVertexAttribL1i64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1i64NV>;

export function VertexAttribL1i64NV(
  index: GLuint,
  x: GLint64EXT,
): void {
  fn_glVertexAttribL1i64NV.call(
    index,
    x,
  );
}

export const def_glVertexAttribL2i64NV = {
  parameters: ["u32", "i64", "i64"],
  result: "void",
} as const;

let fn_glVertexAttribL2i64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2i64NV>;

export function VertexAttribL2i64NV(
  index: GLuint,
  x: GLint64EXT,
  y: GLint64EXT,
): void {
  fn_glVertexAttribL2i64NV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribL3i64NV = {
  parameters: ["u32", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glVertexAttribL3i64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3i64NV>;

export function VertexAttribL3i64NV(
  index: GLuint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
): void {
  fn_glVertexAttribL3i64NV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribL4i64NV = {
  parameters: ["u32", "i64", "i64", "i64", "i64"],
  result: "void",
} as const;

let fn_glVertexAttribL4i64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4i64NV>;

export function VertexAttribL4i64NV(
  index: GLuint,
  x: GLint64EXT,
  y: GLint64EXT,
  z: GLint64EXT,
  w: GLint64EXT,
): void {
  fn_glVertexAttribL4i64NV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribL1i64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1i64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1i64vNV>;

export function VertexAttribL1i64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1i64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL2i64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL2i64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2i64vNV>;

export function VertexAttribL2i64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL2i64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL3i64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL3i64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3i64vNV>;

export function VertexAttribL3i64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL3i64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL4i64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL4i64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4i64vNV>;

export function VertexAttribL4i64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL4i64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL1ui64NV = {
  parameters: ["u32", "u64"],
  result: "void",
} as const;

let fn_glVertexAttribL1ui64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1ui64NV>;

export function VertexAttribL1ui64NV(
  index: GLuint,
  x: GLuint64EXT,
): void {
  fn_glVertexAttribL1ui64NV.call(
    index,
    x,
  );
}

export const def_glVertexAttribL2ui64NV = {
  parameters: ["u32", "u64", "u64"],
  result: "void",
} as const;

let fn_glVertexAttribL2ui64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2ui64NV>;

export function VertexAttribL2ui64NV(
  index: GLuint,
  x: GLuint64EXT,
  y: GLuint64EXT,
): void {
  fn_glVertexAttribL2ui64NV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribL3ui64NV = {
  parameters: ["u32", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glVertexAttribL3ui64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3ui64NV>;

export function VertexAttribL3ui64NV(
  index: GLuint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
): void {
  fn_glVertexAttribL3ui64NV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribL4ui64NV = {
  parameters: ["u32", "u64", "u64", "u64", "u64"],
  result: "void",
} as const;

let fn_glVertexAttribL4ui64NV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4ui64NV>;

export function VertexAttribL4ui64NV(
  index: GLuint,
  x: GLuint64EXT,
  y: GLuint64EXT,
  z: GLuint64EXT,
  w: GLuint64EXT,
): void {
  fn_glVertexAttribL4ui64NV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribL1ui64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL1ui64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL1ui64vNV>;

export function VertexAttribL1ui64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL1ui64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL2ui64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL2ui64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL2ui64vNV>;

export function VertexAttribL2ui64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL2ui64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL3ui64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL3ui64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL3ui64vNV>;

export function VertexAttribL3ui64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL3ui64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribL4ui64vNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribL4ui64vNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribL4ui64vNV>;

export function VertexAttribL4ui64vNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribL4ui64vNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glGetVertexAttribLi64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLi64vNV!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribLi64vNV>;

export function GetVertexAttribLi64vNV(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLi64vNV.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribLui64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribLui64vNV!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribLui64vNV>;

export function GetVertexAttribLui64vNV(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribLui64vNV.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVertexAttribLFormatNV = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribLFormatNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttribLFormatNV>;

export function VertexAttribLFormatNV(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glVertexAttribLFormatNV.call(
    index,
    size,
    type,
    stride,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttribL1i64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL1i64NV")!, def_glVertexAttribL1i64NV);
  fn_glVertexAttribL2i64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL2i64NV")!, def_glVertexAttribL2i64NV);
  fn_glVertexAttribL3i64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL3i64NV")!, def_glVertexAttribL3i64NV);
  fn_glVertexAttribL4i64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL4i64NV")!, def_glVertexAttribL4i64NV);
  fn_glVertexAttribL1i64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL1i64vNV")!, def_glVertexAttribL1i64vNV);
  fn_glVertexAttribL2i64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL2i64vNV")!, def_glVertexAttribL2i64vNV);
  fn_glVertexAttribL3i64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL3i64vNV")!, def_glVertexAttribL3i64vNV);
  fn_glVertexAttribL4i64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL4i64vNV")!, def_glVertexAttribL4i64vNV);
  fn_glVertexAttribL1ui64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL1ui64NV")!, def_glVertexAttribL1ui64NV);
  fn_glVertexAttribL2ui64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL2ui64NV")!, def_glVertexAttribL2ui64NV);
  fn_glVertexAttribL3ui64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL3ui64NV")!, def_glVertexAttribL3ui64NV);
  fn_glVertexAttribL4ui64NV = new Deno.UnsafeFnPointer(proc("glVertexAttribL4ui64NV")!, def_glVertexAttribL4ui64NV);
  fn_glVertexAttribL1ui64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL1ui64vNV")!, def_glVertexAttribL1ui64vNV);
  fn_glVertexAttribL2ui64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL2ui64vNV")!, def_glVertexAttribL2ui64vNV);
  fn_glVertexAttribL3ui64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL3ui64vNV")!, def_glVertexAttribL3ui64vNV);
  fn_glVertexAttribL4ui64vNV = new Deno.UnsafeFnPointer(proc("glVertexAttribL4ui64vNV")!, def_glVertexAttribL4ui64vNV);
  fn_glGetVertexAttribLi64vNV = new Deno.UnsafeFnPointer(proc("glGetVertexAttribLi64vNV")!, def_glGetVertexAttribLi64vNV);
  fn_glGetVertexAttribLui64vNV = new Deno.UnsafeFnPointer(proc("glGetVertexAttribLui64vNV")!, def_glGetVertexAttribLui64vNV);
  fn_glVertexAttribLFormatNV = new Deno.UnsafeFnPointer(proc("glVertexAttribLFormatNV")!, def_glVertexAttribLFormatNV);
}
