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
export const BACK_PRIMARY_COLOR_NV = 0x8c77;
export const BACK_SECONDARY_COLOR_NV = 0x8c78;
export const TEXTURE_COORD_NV = 0x8c79;
export const CLIP_DISTANCE_NV = 0x8c7a;
export const VERTEX_ID_NV = 0x8c7b;
export const PRIMITIVE_ID_NV = 0x8c7c;
export const GENERIC_ATTRIB_NV = 0x8c7d;
export const TRANSFORM_FEEDBACK_ATTRIBS_NV = 0x8c7e;
export const TRANSFORM_FEEDBACK_BUFFER_MODE_NV = 0x8c7f;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS_NV = 0x8c80;
export const ACTIVE_VARYINGS_NV = 0x8c81;
export const ACTIVE_VARYING_MAX_LENGTH_NV = 0x8c82;
export const TRANSFORM_FEEDBACK_VARYINGS_NV = 0x8c83;
export const TRANSFORM_FEEDBACK_BUFFER_START_NV = 0x8c84;
export const TRANSFORM_FEEDBACK_BUFFER_SIZE_NV = 0x8c85;
export const TRANSFORM_FEEDBACK_RECORD_NV = 0x8c86;
export const PRIMITIVES_GENERATED_NV = 0x8c87;
export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN_NV = 0x8c88;
export const RASTERIZER_DISCARD_NV = 0x8c89;
export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS_NV = 0x8c8a;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS_NV = 0x8c8b;
export const INTERLEAVED_ATTRIBS_NV = 0x8c8c;
export const SEPARATE_ATTRIBS_NV = 0x8c8d;
export const TRANSFORM_FEEDBACK_BUFFER_NV = 0x8c8e;
export const TRANSFORM_FEEDBACK_BUFFER_BINDING_NV = 0x8c8f;
export const LAYER_NV = 0x8daa;
export const NEXT_BUFFER_NV = 0x-2;
export const SKIP_COMPONENTS4_NV = 0x-3;
export const SKIP_COMPONENTS3_NV = 0x-4;
export const SKIP_COMPONENTS2_NV = 0x-5;
export const SKIP_COMPONENTS1_NV = 0x-6;

/// Commands

export const def_glBeginTransformFeedbackNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glBeginTransformFeedbackNV>;

export function BeginTransformFeedbackNV(
  primitiveMode: GLenum,
): void {
  fn_glBeginTransformFeedbackNV.call(
    primitiveMode,
  );
}

export const def_glEndTransformFeedbackNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glEndTransformFeedbackNV!: Deno.UnsafeFnPointer<typeof def_glEndTransformFeedbackNV>;

export function EndTransformFeedbackNV(): void {
  fn_glEndTransformFeedbackNV.call();
}

export const def_glTransformFeedbackAttribsNV = {
  parameters: ["i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackAttribsNV!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackAttribsNV>;

export function TransformFeedbackAttribsNV(
  count: GLsizei,
  attribs: Buffer,
  bufferMode: GLenum,
): void {
  fn_glTransformFeedbackAttribsNV.call(
    count,
    bufferToFFI(attribs),
    bufferMode,
  );
}

export const def_glBindBufferRangeNV = {
  parameters: ["u32", "u32", "u32", "buffer", "isize"],
  result: "void",
} as const;

let fn_glBindBufferRangeNV!: Deno.UnsafeFnPointer<typeof def_glBindBufferRangeNV>;

export function BindBufferRangeNV(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
  size: GLsizeiptr,
): void {
  fn_glBindBufferRangeNV.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
    Deno.UnsafePointer.value(size),
  );
}

export const def_glBindBufferOffsetNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindBufferOffsetNV!: Deno.UnsafeFnPointer<typeof def_glBindBufferOffsetNV>;

export function BindBufferOffsetNV(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
  offset: GLintptr,
): void {
  fn_glBindBufferOffsetNV.call(
    target,
    index,
    buffer,
    bufferToFFI(offset),
  );
}

export const def_glBindBufferBaseNV = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindBufferBaseNV!: Deno.UnsafeFnPointer<typeof def_glBindBufferBaseNV>;

export function BindBufferBaseNV(
  target: GLenum,
  index: GLuint,
  buffer: GLuint,
): void {
  fn_glBindBufferBaseNV.call(
    target,
    index,
    buffer,
  );
}

export const def_glTransformFeedbackVaryingsNV = {
  parameters: ["u32", "i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackVaryingsNV!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackVaryingsNV>;

export function TransformFeedbackVaryingsNV(
  program: GLuint,
  count: GLsizei,
  locations: Buffer,
  bufferMode: GLenum,
): void {
  fn_glTransformFeedbackVaryingsNV.call(
    program,
    count,
    bufferToFFI(locations),
    bufferMode,
  );
}

export const def_glActiveVaryingNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glActiveVaryingNV!: Deno.UnsafeFnPointer<typeof def_glActiveVaryingNV>;

export function ActiveVaryingNV(
  program: GLuint,
  name: Buffer,
): void {
  fn_glActiveVaryingNV.call(
    program,
    bufferToFFI(name),
  );
}

export const def_glGetVaryingLocationNV = {
  parameters: ["u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetVaryingLocationNV!: Deno.UnsafeFnPointer<typeof def_glGetVaryingLocationNV>;

export function GetVaryingLocationNV(
  program: GLuint,
  name: Buffer,
): GLint {
  return fn_glGetVaryingLocationNV.call(
    program,
    bufferToFFI(name),
  );
}

export const def_glGetActiveVaryingNV = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveVaryingNV!: Deno.UnsafeFnPointer<typeof def_glGetActiveVaryingNV>;

export function GetActiveVaryingNV(
  program: GLuint,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveVaryingNV.call(
    program,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glGetTransformFeedbackVaryingNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTransformFeedbackVaryingNV!: Deno.UnsafeFnPointer<typeof def_glGetTransformFeedbackVaryingNV>;

export function GetTransformFeedbackVaryingNV(
  program: GLuint,
  index: GLuint,
  location: Buffer,
): void {
  fn_glGetTransformFeedbackVaryingNV.call(
    program,
    index,
    bufferToFFI(location),
  );
}

export const def_glTransformFeedbackStreamAttribsNV = {
  parameters: ["i32", "buffer", "i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glTransformFeedbackStreamAttribsNV!: Deno.UnsafeFnPointer<typeof def_glTransformFeedbackStreamAttribsNV>;

export function TransformFeedbackStreamAttribsNV(
  count: GLsizei,
  attribs: Buffer,
  nbuffers: GLsizei,
  bufstreams: Buffer,
  bufferMode: GLenum,
): void {
  fn_glTransformFeedbackStreamAttribsNV.call(
    count,
    bufferToFFI(attribs),
    nbuffers,
    bufferToFFI(bufstreams),
    bufferMode,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBeginTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glBeginTransformFeedbackNV")!, def_glBeginTransformFeedbackNV);
  fn_glEndTransformFeedbackNV = new Deno.UnsafeFnPointer(proc("glEndTransformFeedbackNV")!, def_glEndTransformFeedbackNV);
  fn_glTransformFeedbackAttribsNV = new Deno.UnsafeFnPointer(proc("glTransformFeedbackAttribsNV")!, def_glTransformFeedbackAttribsNV);
  fn_glBindBufferRangeNV = new Deno.UnsafeFnPointer(proc("glBindBufferRangeNV")!, def_glBindBufferRangeNV);
  fn_glBindBufferOffsetNV = new Deno.UnsafeFnPointer(proc("glBindBufferOffsetNV")!, def_glBindBufferOffsetNV);
  fn_glBindBufferBaseNV = new Deno.UnsafeFnPointer(proc("glBindBufferBaseNV")!, def_glBindBufferBaseNV);
  fn_glTransformFeedbackVaryingsNV = new Deno.UnsafeFnPointer(proc("glTransformFeedbackVaryingsNV")!, def_glTransformFeedbackVaryingsNV);
  fn_glActiveVaryingNV = new Deno.UnsafeFnPointer(proc("glActiveVaryingNV")!, def_glActiveVaryingNV);
  fn_glGetVaryingLocationNV = new Deno.UnsafeFnPointer(proc("glGetVaryingLocationNV")!, def_glGetVaryingLocationNV);
  fn_glGetActiveVaryingNV = new Deno.UnsafeFnPointer(proc("glGetActiveVaryingNV")!, def_glGetActiveVaryingNV);
  fn_glGetTransformFeedbackVaryingNV = new Deno.UnsafeFnPointer(proc("glGetTransformFeedbackVaryingNV")!, def_glGetTransformFeedbackVaryingNV);
  fn_glTransformFeedbackStreamAttribsNV = new Deno.UnsafeFnPointer(proc("glTransformFeedbackStreamAttribsNV")!, def_glTransformFeedbackStreamAttribsNV);
}
