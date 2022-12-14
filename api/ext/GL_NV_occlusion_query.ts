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
export const PIXEL_COUNTER_BITS_NV = 0x8864;
export const CURRENT_OCCLUSION_QUERY_ID_NV = 0x8865;
export const PIXEL_COUNT_NV = 0x8866;
export const PIXEL_COUNT_AVAILABLE_NV = 0x8867;

/// Commands

export const def_glGenOcclusionQueriesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenOcclusionQueriesNV!: Deno.UnsafeFnPointer<typeof def_glGenOcclusionQueriesNV>;

export function GenOcclusionQueriesNV(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenOcclusionQueriesNV.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glDeleteOcclusionQueriesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteOcclusionQueriesNV!: Deno.UnsafeFnPointer<typeof def_glDeleteOcclusionQueriesNV>;

export function DeleteOcclusionQueriesNV(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteOcclusionQueriesNV.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsOcclusionQueryNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsOcclusionQueryNV!: Deno.UnsafeFnPointer<typeof def_glIsOcclusionQueryNV>;

export function IsOcclusionQueryNV(
  id: GLuint,
): GLboolean {
  return fn_glIsOcclusionQueryNV.call(
    id,
  );
}

export const def_glBeginOcclusionQueryNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginOcclusionQueryNV!: Deno.UnsafeFnPointer<typeof def_glBeginOcclusionQueryNV>;

export function BeginOcclusionQueryNV(
  id: GLuint,
): void {
  fn_glBeginOcclusionQueryNV.call(
    id,
  );
}

export const def_glEndOcclusionQueryNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndOcclusionQueryNV!: Deno.UnsafeFnPointer<typeof def_glEndOcclusionQueryNV>;

export function EndOcclusionQueryNV(): void {
  fn_glEndOcclusionQueryNV.call();
}

export const def_glGetOcclusionQueryivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetOcclusionQueryivNV!: Deno.UnsafeFnPointer<typeof def_glGetOcclusionQueryivNV>;

export function GetOcclusionQueryivNV(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetOcclusionQueryivNV.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetOcclusionQueryuivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetOcclusionQueryuivNV!: Deno.UnsafeFnPointer<typeof def_glGetOcclusionQueryuivNV>;

export function GetOcclusionQueryuivNV(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetOcclusionQueryuivNV.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenOcclusionQueriesNV = new Deno.UnsafeFnPointer(proc("glGenOcclusionQueriesNV"), def_glGenOcclusionQueriesNV);
  fn_glDeleteOcclusionQueriesNV = new Deno.UnsafeFnPointer(proc("glDeleteOcclusionQueriesNV"), def_glDeleteOcclusionQueriesNV);
  fn_glIsOcclusionQueryNV = new Deno.UnsafeFnPointer(proc("glIsOcclusionQueryNV"), def_glIsOcclusionQueryNV);
  fn_glBeginOcclusionQueryNV = new Deno.UnsafeFnPointer(proc("glBeginOcclusionQueryNV"), def_glBeginOcclusionQueryNV);
  fn_glEndOcclusionQueryNV = new Deno.UnsafeFnPointer(proc("glEndOcclusionQueryNV"), def_glEndOcclusionQueryNV);
  fn_glGetOcclusionQueryivNV = new Deno.UnsafeFnPointer(proc("glGetOcclusionQueryivNV"), def_glGetOcclusionQueryivNV);
  fn_glGetOcclusionQueryuivNV = new Deno.UnsafeFnPointer(proc("glGetOcclusionQueryuivNV"), def_glGetOcclusionQueryuivNV);
}
