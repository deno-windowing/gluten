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
export const MAX_TRANSFORM_FEEDBACK_BUFFERS = 0x8e70;
export const MAX_VERTEX_STREAMS = 0x8e71;

/// Commands

export const def_glDrawTransformFeedbackStream = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glDrawTransformFeedbackStream!: Deno.UnsafeFnPointer<typeof def_glDrawTransformFeedbackStream>;

export function DrawTransformFeedbackStream(
  mode: GLenum,
  id: GLuint,
  stream: GLuint,
): void {
  fn_glDrawTransformFeedbackStream.call(
    mode,
    id,
    stream,
  );
}

export const def_glBeginQueryIndexed = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBeginQueryIndexed!: Deno.UnsafeFnPointer<typeof def_glBeginQueryIndexed>;

export function BeginQueryIndexed(
  target: GLenum,
  index: GLuint,
  id: GLuint,
): void {
  fn_glBeginQueryIndexed.call(
    target,
    index,
    id,
  );
}

export const def_glEndQueryIndexed = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEndQueryIndexed!: Deno.UnsafeFnPointer<typeof def_glEndQueryIndexed>;

export function EndQueryIndexed(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEndQueryIndexed.call(
    target,
    index,
  );
}

export const def_glGetQueryIndexediv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetQueryIndexediv!: Deno.UnsafeFnPointer<typeof def_glGetQueryIndexediv>;

export function GetQueryIndexediv(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetQueryIndexediv.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawTransformFeedbackStream = new Deno.UnsafeFnPointer(proc("glDrawTransformFeedbackStream"), def_glDrawTransformFeedbackStream);
  fn_glBeginQueryIndexed = new Deno.UnsafeFnPointer(proc("glBeginQueryIndexed"), def_glBeginQueryIndexed);
  fn_glEndQueryIndexed = new Deno.UnsafeFnPointer(proc("glEndQueryIndexed"), def_glEndQueryIndexed);
  fn_glGetQueryIndexediv = new Deno.UnsafeFnPointer(proc("glGetQueryIndexediv"), def_glGetQueryIndexediv);
}
