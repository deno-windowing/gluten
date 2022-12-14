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
export const GLOBAL_ALPHA_SUN = 0x81d9;
export const GLOBAL_ALPHA_FACTOR_SUN = 0x81da;

/// Commands

export const def_glGlobalAlphaFactorbSUN = {
  parameters: ["i8"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactorbSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactorbSUN>;

export function GlobalAlphaFactorbSUN(
  factor: GLbyte,
): void {
  fn_glGlobalAlphaFactorbSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactorsSUN = {
  parameters: ["i16"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactorsSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactorsSUN>;

export function GlobalAlphaFactorsSUN(
  factor: GLshort,
): void {
  fn_glGlobalAlphaFactorsSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactoriSUN = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactoriSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactoriSUN>;

export function GlobalAlphaFactoriSUN(
  factor: GLint,
): void {
  fn_glGlobalAlphaFactoriSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactorfSUN = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactorfSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactorfSUN>;

export function GlobalAlphaFactorfSUN(
  factor: GLfloat,
): void {
  fn_glGlobalAlphaFactorfSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactordSUN = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactordSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactordSUN>;

export function GlobalAlphaFactordSUN(
  factor: GLdouble,
): void {
  fn_glGlobalAlphaFactordSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactorubSUN = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactorubSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactorubSUN>;

export function GlobalAlphaFactorubSUN(
  factor: GLubyte,
): void {
  fn_glGlobalAlphaFactorubSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactorusSUN = {
  parameters: ["u16"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactorusSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactorusSUN>;

export function GlobalAlphaFactorusSUN(
  factor: GLushort,
): void {
  fn_glGlobalAlphaFactorusSUN.call(
    factor,
  );
}

export const def_glGlobalAlphaFactoruiSUN = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glGlobalAlphaFactoruiSUN!: Deno.UnsafeFnPointer<typeof def_glGlobalAlphaFactoruiSUN>;

export function GlobalAlphaFactoruiSUN(
  factor: GLuint,
): void {
  fn_glGlobalAlphaFactoruiSUN.call(
    factor,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGlobalAlphaFactorbSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactorbSUN"), def_glGlobalAlphaFactorbSUN);
  fn_glGlobalAlphaFactorsSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactorsSUN"), def_glGlobalAlphaFactorsSUN);
  fn_glGlobalAlphaFactoriSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactoriSUN"), def_glGlobalAlphaFactoriSUN);
  fn_glGlobalAlphaFactorfSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactorfSUN"), def_glGlobalAlphaFactorfSUN);
  fn_glGlobalAlphaFactordSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactordSUN"), def_glGlobalAlphaFactordSUN);
  fn_glGlobalAlphaFactorubSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactorubSUN"), def_glGlobalAlphaFactorubSUN);
  fn_glGlobalAlphaFactorusSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactorusSUN"), def_glGlobalAlphaFactorusSUN);
  fn_glGlobalAlphaFactoruiSUN = new Deno.UnsafeFnPointer(proc("glGlobalAlphaFactoruiSUN"), def_glGlobalAlphaFactoruiSUN);
}
