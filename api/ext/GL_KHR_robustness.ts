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
export const NO_ERROR = 0x0;
export const CONTEXT_ROBUST_ACCESS = 0x90f3;
export const LOSE_CONTEXT_ON_RESET = 0x8252;
export const GUILTY_CONTEXT_RESET = 0x8253;
export const INNOCENT_CONTEXT_RESET = 0x8254;
export const UNKNOWN_CONTEXT_RESET = 0x8255;
export const RESET_NOTIFICATION_STRATEGY = 0x8256;
export const NO_RESET_NOTIFICATION = 0x8261;
export const CONTEXT_LOST = 0x507;
export const NO_ERROR = 0x0;
export const CONTEXT_ROBUST_ACCESS_KHR = 0x90f3;
export const LOSE_CONTEXT_ON_RESET_KHR = 0x8252;
export const GUILTY_CONTEXT_RESET_KHR = 0x8253;
export const INNOCENT_CONTEXT_RESET_KHR = 0x8254;
export const UNKNOWN_CONTEXT_RESET_KHR = 0x8255;
export const RESET_NOTIFICATION_STRATEGY_KHR = 0x8256;
export const NO_RESET_NOTIFICATION_KHR = 0x8261;
export const CONTEXT_LOST_KHR = 0x507;

/// Commands

export const def_glGetGraphicsResetStatus = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatus!: Deno.UnsafeFnPointer<
  typeof def_glGetGraphicsResetStatus
>;

export function GetGraphicsResetStatus(): GLenum {
  return fn_glGetGraphicsResetStatus.call();
}

export const def_glReadnPixels = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReadnPixels!: Deno.UnsafeFnPointer<typeof def_glReadnPixels>;

export function ReadnPixels(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  data: Buffer,
): void {
  fn_glReadnPixels.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufSize,
    bufferToFFI(data),
  );
}

export const def_glGetnUniformfv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformfv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformfv>;

export function GetnUniformfv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformfv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformiv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformiv>;

export function GetnUniformiv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformiv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformuiv = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformuiv!: Deno.UnsafeFnPointer<typeof def_glGetnUniformuiv>;

export function GetnUniformuiv(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformuiv.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetGraphicsResetStatusKHR = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatusKHR!: Deno.UnsafeFnPointer<
  typeof def_glGetGraphicsResetStatusKHR
>;

export function GetGraphicsResetStatusKHR(): GLenum {
  return fn_glGetGraphicsResetStatusKHR.call();
}

export const def_glReadnPixelsKHR = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReadnPixelsKHR!: Deno.UnsafeFnPointer<typeof def_glReadnPixelsKHR>;

export function ReadnPixelsKHR(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  data: Buffer,
): void {
  fn_glReadnPixelsKHR.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufSize,
    bufferToFFI(data),
  );
}

export const def_glGetnUniformfvKHR = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformfvKHR!: Deno.UnsafeFnPointer<typeof def_glGetnUniformfvKHR>;

export function GetnUniformfvKHR(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformfvKHR.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformivKHR = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformivKHR!: Deno.UnsafeFnPointer<typeof def_glGetnUniformivKHR>;

export function GetnUniformivKHR(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformivKHR.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformuivKHR = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformuivKHR!: Deno.UnsafeFnPointer<
  typeof def_glGetnUniformuivKHR
>;

export function GetnUniformuivKHR(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformuivKHR.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetGraphicsResetStatus = new Deno.UnsafeFnPointer(
    proc("glGetGraphicsResetStatus"),
    def_glGetGraphicsResetStatus,
  );
  fn_glReadnPixels = new Deno.UnsafeFnPointer(
    proc("glReadnPixels"),
    def_glReadnPixels,
  );
  fn_glGetnUniformfv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformfv"),
    def_glGetnUniformfv,
  );
  fn_glGetnUniformiv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformiv"),
    def_glGetnUniformiv,
  );
  fn_glGetnUniformuiv = new Deno.UnsafeFnPointer(
    proc("glGetnUniformuiv"),
    def_glGetnUniformuiv,
  );
  fn_glGetGraphicsResetStatusKHR = new Deno.UnsafeFnPointer(
    proc("glGetGraphicsResetStatusKHR"),
    def_glGetGraphicsResetStatusKHR,
  );
  fn_glReadnPixelsKHR = new Deno.UnsafeFnPointer(
    proc("glReadnPixelsKHR"),
    def_glReadnPixelsKHR,
  );
  fn_glGetnUniformfvKHR = new Deno.UnsafeFnPointer(
    proc("glGetnUniformfvKHR"),
    def_glGetnUniformfvKHR,
  );
  fn_glGetnUniformivKHR = new Deno.UnsafeFnPointer(
    proc("glGetnUniformivKHR"),
    def_glGetnUniformivKHR,
  );
  fn_glGetnUniformuivKHR = new Deno.UnsafeFnPointer(
    proc("glGetnUniformuivKHR"),
    def_glGetnUniformuivKHR,
  );
}
