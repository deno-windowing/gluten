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
export const SAMPLER_BINDING = 0x8919;

/// Commands

export const def_glGenSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenSamplers!: Deno.UnsafeFnPointer<typeof def_glGenSamplers>;

export function GenSamplers(
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glGenSamplers.call(
    count,
    bufferToFFI(samplers),
  );
}

export const def_glDeleteSamplers = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteSamplers!: Deno.UnsafeFnPointer<typeof def_glDeleteSamplers>;

export function DeleteSamplers(
  count: GLsizei,
  samplers: Buffer,
): void {
  fn_glDeleteSamplers.call(
    count,
    bufferToFFI(samplers),
  );
}

export const def_glIsSampler = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsSampler!: Deno.UnsafeFnPointer<typeof def_glIsSampler>;

export function IsSampler(
  sampler: GLuint,
): GLboolean {
  return fn_glIsSampler.call(
    sampler,
  );
}

export const def_glBindSampler = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindSampler!: Deno.UnsafeFnPointer<typeof def_glBindSampler>;

export function BindSampler(
  unit: GLuint,
  sampler: GLuint,
): void {
  fn_glBindSampler.call(
    unit,
    sampler,
  );
}

export const def_glSamplerParameteri = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glSamplerParameteri!: Deno.UnsafeFnPointer<typeof def_glSamplerParameteri>;

export function SamplerParameteri(
  sampler: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glSamplerParameteri.call(
    sampler,
    pname,
    param,
  );
}

export const def_glSamplerParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameteriv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameteriv>;

export function SamplerParameteriv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameteriv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterf = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glSamplerParameterf!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterf>;

export function SamplerParameterf(
  sampler: GLuint,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glSamplerParameterf.call(
    sampler,
    pname,
    param,
  );
}

export const def_glSamplerParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterfv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterfv>;

export function SamplerParameterfv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterfv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIiv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIiv>;

export function SamplerParameterIiv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIiv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glSamplerParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glSamplerParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glSamplerParameterIuiv>;

export function SamplerParameterIuiv(
  sampler: GLuint,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glSamplerParameterIuiv.call(
    sampler,
    pname,
    bufferToFFI(param),
  );
}

export const def_glGetSamplerParameteriv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameteriv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameteriv>;

export function GetSamplerParameteriv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameteriv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterIiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIiv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIiv>;

export function GetSamplerParameterIiv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIiv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterfv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterfv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterfv>;

export function GetSamplerParameterfv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterfv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetSamplerParameterIuiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetSamplerParameterIuiv!: Deno.UnsafeFnPointer<typeof def_glGetSamplerParameterIuiv>;

export function GetSamplerParameterIuiv(
  sampler: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetSamplerParameterIuiv.call(
    sampler,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGenSamplers = new Deno.UnsafeFnPointer(proc("glGenSamplers"), def_glGenSamplers);
  fn_glDeleteSamplers = new Deno.UnsafeFnPointer(proc("glDeleteSamplers"), def_glDeleteSamplers);
  fn_glIsSampler = new Deno.UnsafeFnPointer(proc("glIsSampler"), def_glIsSampler);
  fn_glBindSampler = new Deno.UnsafeFnPointer(proc("glBindSampler"), def_glBindSampler);
  fn_glSamplerParameteri = new Deno.UnsafeFnPointer(proc("glSamplerParameteri"), def_glSamplerParameteri);
  fn_glSamplerParameteriv = new Deno.UnsafeFnPointer(proc("glSamplerParameteriv"), def_glSamplerParameteriv);
  fn_glSamplerParameterf = new Deno.UnsafeFnPointer(proc("glSamplerParameterf"), def_glSamplerParameterf);
  fn_glSamplerParameterfv = new Deno.UnsafeFnPointer(proc("glSamplerParameterfv"), def_glSamplerParameterfv);
  fn_glSamplerParameterIiv = new Deno.UnsafeFnPointer(proc("glSamplerParameterIiv"), def_glSamplerParameterIiv);
  fn_glSamplerParameterIuiv = new Deno.UnsafeFnPointer(proc("glSamplerParameterIuiv"), def_glSamplerParameterIuiv);
  fn_glGetSamplerParameteriv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameteriv"), def_glGetSamplerParameteriv);
  fn_glGetSamplerParameterIiv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIiv"), def_glGetSamplerParameterIiv);
  fn_glGetSamplerParameterfv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterfv"), def_glGetSamplerParameterfv);
  fn_glGetSamplerParameterIuiv = new Deno.UnsafeFnPointer(proc("glGetSamplerParameterIuiv"), def_glGetSamplerParameterIuiv);
}
