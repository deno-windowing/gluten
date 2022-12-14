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
export const TEXTURE_BORDER_COLOR_EXT = 0x1004;
export const CLAMP_TO_BORDER_EXT = 0x812d;

/// Commands

export const def_glTexParameterIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glTexParameterIivEXT>;

export function TexParameterIivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterIuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glTexParameterIuivEXT>;

export function TexParameterIuivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterIuivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIivEXT>;

export function GetTexParameterIivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterIuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterIuivEXT>;

export function GetTexParameterIuivEXT(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterIuivEXT.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glSamplerParameterIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIivEXT>;

export function SamplerParameterIivEXT(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIivEXT.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterIuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIuivEXT>;

export function SamplerParameterIuivEXT(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIuivEXT.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetSamplerParameterIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIivEXT>;

export function GetSamplerParameterIivEXT(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIivEXT.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterIuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIuivEXT>;

export function GetSamplerParameterIuivEXT(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIuivEXT.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexParameterIivEXT = new Deno.UnsafeFnPointer(proc("glTexParameterIivEXT"), def_glTexParameterIivEXT);
  fn_glTexParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glTexParameterIuivEXT"), def_glTexParameterIuivEXT);
  fn_glGetTexParameterIivEXT = new Deno.UnsafeFnPointer(proc("glGetTexParameterIivEXT"), def_glGetTexParameterIivEXT);
  fn_glGetTexParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glGetTexParameterIuivEXT"), def_glGetTexParameterIuivEXT);
  fn_glSamplerParameterIivEXT = new Deno.UnsafeFnPointer(proc("glSamplerParameterIivEXT"), def_glSamplerParameterIivEXT);
  fn_glSamplerParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glSamplerParameterIuivEXT"), def_glSamplerParameterIuivEXT);
  fn_glGetSamplerParameterIivEXT = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIivEXT"), def_glGetSamplerParameterIivEXT);
  fn_glGetSamplerParameterIuivEXT = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIuivEXT"), def_glGetSamplerParameterIuivEXT);
}
