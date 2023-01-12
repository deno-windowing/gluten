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
export const TRANSFORM_FEEDBACK = 0x8e22;
export const TRANSFORM_FEEDBACK_BUFFER_PAUSED = 0x8e23;
export const TRANSFORM_FEEDBACK_BUFFER_ACTIVE = 0x8e24;
export const TRANSFORM_FEEDBACK_BINDING = 0x8e25;

/// Commands

export const def_glBindTransformFeedback = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glBindTransformFeedback
>;

export function BindTransformFeedback(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBindTransformFeedback.call(
    target,
    id,
  );
}

export const def_glDeleteTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteTransformFeedbacks!: Deno.UnsafeFnPointer<
  typeof def_glDeleteTransformFeedbacks
>;

export function DeleteTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glDeleteTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glGenTransformFeedbacks = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenTransformFeedbacks!: Deno.UnsafeFnPointer<
  typeof def_glGenTransformFeedbacks
>;

export function GenTransformFeedbacks(
  n: GLsizei,
  ids: Buffer,
): void {
  fn_glGenTransformFeedbacks.call(
    n,
    bufferToFFI(ids),
  );
}

export const def_glIsTransformFeedback = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glIsTransformFeedback
>;

export function IsTransformFeedback(
  id: GLuint,
): GLboolean {
  return fn_glIsTransformFeedback.call(
    id,
  );
}

export const def_glPauseTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glPauseTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glPauseTransformFeedback
>;

export function PauseTransformFeedback(): void {
  fn_glPauseTransformFeedback.call();
}

export const def_glResumeTransformFeedback = {
  parameters: [],
  result: "void",
} as const;

let fn_glResumeTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glResumeTransformFeedback
>;

export function ResumeTransformFeedback(): void {
  fn_glResumeTransformFeedback.call();
}

export const def_glDrawTransformFeedback = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedback!: Deno.UnsafeFnPointer<
  typeof def_glDrawTransformFeedback
>;

export function DrawTransformFeedback(
  mode: GLenum,
  id: GLuint,
): void {
  fn_glDrawTransformFeedback.call(
    mode,
    id,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glBindTransformFeedback"),
    def_glBindTransformFeedback,
  );
  fn_glDeleteTransformFeedbacks = new Deno.UnsafeFnPointer(
    proc("glDeleteTransformFeedbacks"),
    def_glDeleteTransformFeedbacks,
  );
  fn_glGenTransformFeedbacks = new Deno.UnsafeFnPointer(
    proc("glGenTransformFeedbacks"),
    def_glGenTransformFeedbacks,
  );
  fn_glIsTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glIsTransformFeedback"),
    def_glIsTransformFeedback,
  );
  fn_glPauseTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glPauseTransformFeedback"),
    def_glPauseTransformFeedback,
  );
  fn_glResumeTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glResumeTransformFeedback"),
    def_glResumeTransformFeedback,
  );
  fn_glDrawTransformFeedback = new Deno.UnsafeFnPointer(
    proc("glDrawTransformFeedback"),
    def_glDrawTransformFeedback,
  );
}
