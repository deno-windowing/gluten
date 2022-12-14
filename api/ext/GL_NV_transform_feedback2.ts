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
export const TRANSFORM_FEEDBACK_NV = 0x8e22;
export const TRANSFORM_FEEDBACK_BUFFER_PAUSED_NV = 0x8e23;
export const TRANSFORM_FEEDBACK_BUFFER_ACTIVE_NV = 0x8e24;
export const TRANSFORM_FEEDBACK_BINDING_NV = 0x8e25;

/// Commands

export const def_glBindTransformFeedbackNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glBindTransformFeedbackNV>;

export function BindTransformFeedbackNV(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBindTransformFeedbackNV.call(
    target,
    id,
  );
}

export const def_glDeleteTransformFeedbacksNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteTransformFeedbacksNV!: Deno.UnsafeFnPointer<typeof def_glDeleteTransformFeedbacksNV>;

export function DeleteTransformFeedbacksNV(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteTransformFeedbacksNV.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glGenTransformFeedbacksNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenTransformFeedbacksNV!: Deno.UnsafeFnPointer<typeof def_glGenTransformFeedbacksNV>;

export function GenTransformFeedbacksNV(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenTransformFeedbacksNV.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsTransformFeedbackNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glIsTransformFeedbackNV>;

export function IsTransformFeedbackNV(
  id: GLuint,
): GLboolean {
  return fn_glIsTransformFeedbackNV.call(
    id,
  );
}

export const def_glPauseTransformFeedbackNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glPauseTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glPauseTransformFeedbackNV>;

export function PauseTransformFeedbackNV(): void {
  fn_glPauseTransformFeedbackNV.call();
}

export const def_glResumeTransformFeedbackNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glResumeTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glResumeTransformFeedbackNV>;

export function ResumeTransformFeedbackNV(): void {
  fn_glResumeTransformFeedbackNV.call();
}

export const def_glDrawTransformFeedbackNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedbackNV>;

export function DrawTransformFeedbackNV(
  mode: GLenum,
  id: GLuint,
): void {
  fn_glDrawTransformFeedbackNV.call(
    mode,
    id,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glBindTransformFeedbackNV"), def_glBindTransformFeedbackNV);
  fn_glDeleteTransformFeedbacksNV = new Deno.UnsafeFnPointer(proc("glDeleteTransformFeedbacksNV"), def_glDeleteTransformFeedbacksNV);
  fn_glGenTransformFeedbacksNV = new Deno.UnsafeFnPointer(proc("glGenTransformFeedbacksNV"), def_glGenTransformFeedbacksNV);
  fn_glIsTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glIsTransformFeedbackNV"), def_glIsTransformFeedbackNV);
  fn_glPauseTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glPauseTransformFeedbackNV"), def_glPauseTransformFeedbackNV);
  fn_glResumeTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glResumeTransformFeedbackNV"), def_glResumeTransformFeedbackNV);
  fn_glDrawTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedbackNV"), def_glDrawTransformFeedbackNV);
}
