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
export const TRANSFORM_FEEDBACK_BUFFER_EXT = 0x8c8e;
export const TRANSFORM_FEEDBACK_BUFFER_START_EXT = 0x8c84;
export const TRANSFORM_FEEDBACK_BUFFER_SIZE_EXT = 0x8c85;
export const TRANSFORM_FEEDBACK_BUFFER_BINDING_EXT = 0x8c8f;
export const INTERLEAVED_ATTRIBS_EXT = 0x8c8c;
export const SEPARATE_ATTRIBS_EXT = 0x8c8d;
export const PRIMITIVES_GENERATED_EXT = 0x8c87;
export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN_EXT = 0x8c88;
export const RASTERIZER_DISCARD_EXT = 0x8c89;
export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS_EXT = 0x8c8a;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS_EXT = 0x8c8b;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS_EXT = 0x8c80;
export const TRANSFORM_FEEDBACK_VARYINGS_EXT = 0x8c83;
export const TRANSFORM_FEEDBACK_BUFFER_MODE_EXT = 0x8c7f;
export const TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH_EXT = 0x8c76;

/// Commands

export const def_glBeginTransformFeedbackEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginTransformFeedbackEXT!: Deno.UnsafeFnPointer<
  typeof def_glBeginTransformFeedbackEXT
>;

export function BeginTransformFeedbackEXT(
  primitiveMode: GLenum,
): void {
  fn_glBeginTransformFeedbackEXT.call(
    primitiveMode,
  );
}

export const def_glEndTransformFeedbackEXT = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndTransformFeedbackEXT!: Deno.UnsafeFnPointer<
  typeof def_glEndTransformFeedbackEXT
>;

export function EndTransformFeedbackEXT(): void {
  fn_glEndTransformFeedbackEXT.call();
}

export const def_glBindBufferRangeEXT = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glBindBufferRangeEXT!: Deno.UnsafeFnPointer<
  typeof def_glBindBufferRangeEXT
>;

export function BindBufferRangeEXT(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glBindBufferRangeEXT.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
    size,
  );
}

export const def_glBindBufferOffsetEXT = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindBufferOffsetEXT!: Deno.UnsafeFnPointer<
  typeof def_glBindBufferOffsetEXT
>;

export function BindBufferOffsetEXT(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
): void {
  fn_glBindBufferOffsetEXT.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
  );
}

export const def_glBindBufferBaseEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindBufferBaseEXT!: Deno.UnsafeFnPointer<
  typeof def_glBindBufferBaseEXT
>;

export function BindBufferBaseEXT(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glBindBufferBaseEXT.call(
    target,
    index,
    buffer,
  );
}

export const def_glTransformFeedbackVaryingsEXT = {
  parameters: ["u32", "i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackVaryingsEXT!: Deno.UnsafeFnPointer<
  typeof def_glTransformFeedbackVaryingsEXT
>;

export function TransformFeedbackVaryingsEXT(
  program: GLuint,
  count: GLsizei,
  varyings: Buffer,
  bufferMode: GLenum,
): void {
  fn_glTransformFeedbackVaryingsEXT.call(
    program,
    count,
    bufferToFFI(varyings),
    bufferMode,
  );
}

export const def_glGetTransformFeedbackVaryingEXT = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbackVaryingEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetTransformFeedbackVaryingEXT
>;

export function GetTransformFeedbackVaryingEXT(
  program: GLuint,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetTransformFeedbackVaryingEXT.call(
    program,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBeginTransformFeedbackEXT = new Deno.UnsafeFnPointer(
    proc("glBeginTransformFeedbackEXT"),
    def_glBeginTransformFeedbackEXT,
  );
  fn_glEndTransformFeedbackEXT = new Deno.UnsafeFnPointer(
    proc("glEndTransformFeedbackEXT"),
    def_glEndTransformFeedbackEXT,
  );
  fn_glBindBufferRangeEXT = new Deno.UnsafeFnPointer(
    proc("glBindBufferRangeEXT"),
    def_glBindBufferRangeEXT,
  );
  fn_glBindBufferOffsetEXT = new Deno.UnsafeFnPointer(
    proc("glBindBufferOffsetEXT"),
    def_glBindBufferOffsetEXT,
  );
  fn_glBindBufferBaseEXT = new Deno.UnsafeFnPointer(
    proc("glBindBufferBaseEXT"),
    def_glBindBufferBaseEXT,
  );
  fn_glTransformFeedbackVaryingsEXT = new Deno.UnsafeFnPointer(
    proc("glTransformFeedbackVaryingsEXT"),
    def_glTransformFeedbackVaryingsEXT,
  );
  fn_glGetTransformFeedbackVaryingEXT = new Deno.UnsafeFnPointer(
    proc("glGetTransformFeedbackVaryingEXT"),
    def_glGetTransformFeedbackVaryingEXT,
  );
}
