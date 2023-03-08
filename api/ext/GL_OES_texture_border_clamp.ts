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
export const TEXTURE_BORDER_COLOR_OES = 0x1004;
export const CLAMP_TO_BORDER_OES = 0x812d;

/// Commands

export const def_glTexParameterIivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIivOES!: Deno.UnsafeFnPointer<typeof def_glTexParameterIivOES>;

export function TexParameterIivOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIivOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterIuivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIuivOES!: Deno.UnsafeFnPointer<typeof def_glTexParameterIuivOES>;

export function TexParameterIuivOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIuivOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIivOES!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIivOES>;

export function GetTexParameterIivOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIivOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIuivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIuivOES!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIuivOES>;

export function GetTexParameterIuivOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIuivOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glSamplerParameterIivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIivOES!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIivOES>;

export function SamplerParameterIivOES(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIivOES.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterIuivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIuivOES!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIuivOES>;

export function SamplerParameterIuivOES(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIuivOES.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetSamplerParameterIivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIivOES!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIivOES>;

export function GetSamplerParameterIivOES(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIivOES.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterIuivOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIuivOES!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIuivOES>;

export function GetSamplerParameterIuivOES(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIuivOES.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexParameterIivOES = new Deno.UnsafeFnPointer(proc("glTexParameterIivOES")!, def_glTexParameterIivOES);
  fn_glTexParameterIuivOES = new Deno.UnsafeFnPointer(proc("glTexParameterIuivOES")!, def_glTexParameterIuivOES);
  fn_glGetTexParameterIivOES = new Deno.UnsafeFnPointer(proc("glGetTexParameterIivOES")!, def_glGetTexParameterIivOES);
  fn_glGetTexParameterIuivOES = new Deno.UnsafeFnPointer(proc("glGetTexParameterIuivOES")!, def_glGetTexParameterIuivOES);
  fn_glSamplerParameterIivOES = new Deno.UnsafeFnPointer(proc("glSamplerParameterIivOES")!, def_glSamplerParameterIivOES);
  fn_glSamplerParameterIuivOES = new Deno.UnsafeFnPointer(proc("glSamplerParameterIuivOES")!, def_glSamplerParameterIuivOES);
  fn_glGetSamplerParameterIivOES = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIivOES")!, def_glGetSamplerParameterIivOES);
  fn_glGetSamplerParameterIuivOES = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIuivOES")!, def_glGetSamplerParameterIuivOES);
}
