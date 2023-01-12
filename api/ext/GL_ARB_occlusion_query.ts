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
export const QUERY_COUNTER_BITS_ARB = 0x8864;
export const CURRENT_QUERY_ARB = 0x8865;
export const QUERY_RESULT_ARB = 0x8866;
export const QUERY_RESULT_AVAILABLE_ARB = 0x8867;
export const SAMPLES_PASSED_ARB = 0x8914;

/// Commands

export const def_glGenQueriesARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenQueriesARB!: Deno.UnsafeFnPointer<typeof def_glGenQueriesARB>;

export function GenQueriesARB(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenQueriesARB.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glDeleteQueriesARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteQueriesARB!: Deno.UnsafeFnPointer<typeof def_glDeleteQueriesARB>;

export function DeleteQueriesARB(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteQueriesARB.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsQueryARB = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsQueryARB!: Deno.UnsafeFnPointer<typeof def_glIsQueryARB>;

export function IsQueryARB(
  id: GLuint,
): GLboolean {
  return fn_glIsQueryARB.call(
    id,
  );
}

export const def_glBeginQueryARB = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBeginQueryARB!: Deno.UnsafeFnPointer<typeof def_glBeginQueryARB>;

export function BeginQueryARB(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBeginQueryARB.call(
    target,
    id,
  );
}

export const def_glEndQueryARB = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndQueryARB!: Deno.UnsafeFnPointer<typeof def_glEndQueryARB>;

export function EndQueryARB(
  target: GLenum,
): void {
  fn_glEndQueryARB.call(
    target,
  );
}

export const def_glGetQueryivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryivARB!: Deno.UnsafeFnPointer<typeof def_glGetQueryivARB>;

export function GetQueryivARB(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryivARB.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectivARB!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryObjectivARB
>;

export function GetQueryObjectivARB(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectivARB.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetQueryObjectuivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryObjectuivARB!: Deno.UnsafeFnPointer<
  typeof def_glGetQueryObjectuivARB
>;

export function GetQueryObjectuivARB(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryObjectuivARB.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenQueriesARB = new Deno.UnsafeFnPointer(
    proc("glGenQueriesARB"),
    def_glGenQueriesARB,
  );
  fn_glDeleteQueriesARB = new Deno.UnsafeFnPointer(
    proc("glDeleteQueriesARB"),
    def_glDeleteQueriesARB,
  );
  fn_glIsQueryARB = new Deno.UnsafeFnPointer(
    proc("glIsQueryARB"),
    def_glIsQueryARB,
  );
  fn_glBeginQueryARB = new Deno.UnsafeFnPointer(
    proc("glBeginQueryARB"),
    def_glBeginQueryARB,
  );
  fn_glEndQueryARB = new Deno.UnsafeFnPointer(
    proc("glEndQueryARB"),
    def_glEndQueryARB,
  );
  fn_glGetQueryivARB = new Deno.UnsafeFnPointer(
    proc("glGetQueryivARB"),
    def_glGetQueryivARB,
  );
  fn_glGetQueryObjectivARB = new Deno.UnsafeFnPointer(
    proc("glGetQueryObjectivARB"),
    def_glGetQueryObjectivARB,
  );
  fn_glGetQueryObjectuivARB = new Deno.UnsafeFnPointer(
    proc("glGetQueryObjectuivARB"),
    def_glGetQueryObjectuivARB,
  );
}
