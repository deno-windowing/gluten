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

/// Commands

export const def_glBindBuffersBase = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindBuffersBase!: Deno.UnsafeFnPointer<typeof def_glBindBuffersBase>;

export function BindBuffersBase(
  target: GLenum,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
): void {
  fn_glBindBuffersBase.call(
    target,
    first,
    count,
    bufferToFFI(buffers),
  );
}

export const def_glBindBuffersRange = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glBindBuffersRange!: Deno.UnsafeFnPointer<typeof def_glBindBuffersRange>;

export function BindBuffersRange(
  target: GLenum,
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  sizes: Buffer,
): void {
  fn_glBindBuffersRange.call(
    target,
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(sizes),
  );
}

export const def_glBindTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindTextures!: Deno.UnsafeFnPointer<typeof def_glBindTextures>;

export function BindTextures(
  first: GLuint,
  count: GLsizei,
  textures: Buffer,
): void {
  fn_glBindTextures.call(
    first,
    count,
    bufferToFFI(textures),
  );
}

export const def_glBindSamplers = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindSamplers!: Deno.UnsafeFnPointer<typeof def_glBindSamplers>;

export function BindSamplers(
  first: GLuint,
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glBindSamplers.call(
    first,
    count,
    bufferToFFI(samplers),
  );
}

export const def_glBindImageTextures = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBindImageTextures!: Deno.UnsafeFnPointer<typeof def_glBindImageTextures>;

export function BindImageTextures(
  first: GLuint,
  count: GLsizei,
  textures: Buffer,
): void {
  fn_glBindImageTextures.call(
    first,
    count,
    bufferToFFI(textures),
  );
}

export const def_glBindVertexBuffers = {
  parameters: ["u32", "i32", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glBindVertexBuffers!: Deno.UnsafeFnPointer<typeof def_glBindVertexBuffers>;

export function BindVertexBuffers(
  first: GLuint,
  count: GLsizei,
  buffers: Buffer,
  offsets: Buffer,
  strides: Buffer,
): void {
  fn_glBindVertexBuffers.call(
    first,
    count,
    bufferToFFI(buffers),
    bufferToFFI(offsets),
    bufferToFFI(strides),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindBuffersBase = new Deno.UnsafeFnPointer(proc("glBindBuffersBase")!, def_glBindBuffersBase);
  fn_glBindBuffersRange = new Deno.UnsafeFnPointer(proc("glBindBuffersRange")!, def_glBindBuffersRange);
  fn_glBindTextures = new Deno.UnsafeFnPointer(proc("glBindTextures")!, def_glBindTextures);
  fn_glBindSamplers = new Deno.UnsafeFnPointer(proc("glBindSamplers")!, def_glBindSamplers);
  fn_glBindImageTextures = new Deno.UnsafeFnPointer(proc("glBindImageTextures")!, def_glBindImageTextures);
  fn_glBindVertexBuffers = new Deno.UnsafeFnPointer(proc("glBindVertexBuffers")!, def_glBindVertexBuffers);
}
