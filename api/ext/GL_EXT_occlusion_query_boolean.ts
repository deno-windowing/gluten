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
export const ANY_SAMPLES_PASSED_EXT = 0x8c2f;
export const ANY_SAMPLES_PASSED_CONSERVATIVE_EXT = 0x8d6a;
export const CURRENT_QUERY_EXT = 0x8865;
export const QUERY_RESULT_EXT = 0x8866;
export const QUERY_RESULT_AVAILABLE_EXT = 0x8867;

/// Commands

export const def_glGenQueriesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenQueriesEXT!: Deno.UnsafeFnPointer<typeof def_glGenQueriesEXT>;

export function GenQueriesEXT(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenQueriesEXT.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glDeleteQueriesEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteQueriesEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteQueriesEXT>;

export function DeleteQueriesEXT(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteQueriesEXT.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsQueryEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsQueryEXT!: Deno.UnsafeFnPointer<typeof def_glIsQueryEXT>;

export function IsQueryEXT(
  id: GLuint,
): GLboolean {
  return fn_glIsQueryEXT.call(
    id,
  );
}

export const def_glBeginQueryEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBeginQueryEXT!: Deno.UnsafeFnPointer<typeof def_glBeginQueryEXT>;

export function BeginQueryEXT(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBeginQueryEXT.call(
    target,
    id,
  );
}

export const def_glEndQueryEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndQueryEXT!: Deno.UnsafeFnPointer<typeof def_glEndQueryEXT>;

export function EndQueryEXT(
  target: GLenum,
): void {
  fn_glEndQueryEXT.call(
    target,
  );
}

export const def_glGetQueryivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryivEXT!: Deno.UnsafeFnPointer<typeof def_glGetQueryivEXT>;

export function GetQueryivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetQueryObjectuivEXT>;

export function GetQueryObjectuivEXT(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectuivEXT.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenQueriesEXT = new Deno.UnsafeFnPointer(proc("glGenQueriesEXT")!, def_glGenQueriesEXT);
  fn_glDeleteQueriesEXT = new Deno.UnsafeFnPointer(proc("glDeleteQueriesEXT")!, def_glDeleteQueriesEXT);
  fn_glIsQueryEXT = new Deno.UnsafeFnPointer(proc("glIsQueryEXT")!, def_glIsQueryEXT);
  fn_glBeginQueryEXT = new Deno.UnsafeFnPointer(proc("glBeginQueryEXT")!, def_glBeginQueryEXT);
  fn_glEndQueryEXT = new Deno.UnsafeFnPointer(proc("glEndQueryEXT")!, def_glEndQueryEXT);
  fn_glGetQueryivEXT = new Deno.UnsafeFnPointer(proc("glGetQueryivEXT")!, def_glGetQueryivEXT);
  fn_glGetQueryObjectuivEXT = new Deno.UnsafeFnPointer(proc("glGetQueryObjectuivEXT")!, def_glGetQueryObjectuivEXT);
}
