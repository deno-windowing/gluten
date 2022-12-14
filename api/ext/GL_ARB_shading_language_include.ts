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
export const SHADER_INCLUDE_ARB = 0x8dae;
export const NAMED_STRING_LENGTH_ARB = 0x8de9;
export const NAMED_STRING_TYPE_ARB = 0x8dea;

/// Commands

export const def_glNamedStringARB = {
  parameters: ["u32", "i32", "buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glNamedStringARB!: Deno.UnsafeFnPointer<typeof def_glNamedStringARB>;

export function NamedStringARB(
  type: GLenum,
  namelen: GLint,
  name: Buffer,
  stringlen: GLint,
  string: Buffer,
): void {
  fn_glNamedStringARB.call(
    type,
    namelen,
    bufferToFFI(name),
    stringlen,
    bufferToFFI(string),
  );
}

export const def_glDeleteNamedStringARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteNamedStringARB!: Deno.UnsafeFnPointer<typeof def_glDeleteNamedStringARB>;

export function DeleteNamedStringARB(
  namelen: GLint,
  name: Buffer,
): void {
  fn_glDeleteNamedStringARB.call(
    namelen,
    bufferToFFI(name),
  );
}

export const def_glCompileShaderIncludeARB = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glCompileShaderIncludeARB!: Deno.UnsafeFnPointer<typeof def_glCompileShaderIncludeARB>;

export function CompileShaderIncludeARB(
  shader: GLuint,
  count: GLsizei,
  path: Buffer,
  length: Buffer,
): void {
  fn_glCompileShaderIncludeARB.call(
    shader,
    count,
    bufferToFFI(path),
    bufferToFFI(length),
  );
}

export const def_glIsNamedStringARB = {
  parameters: ["i32", "buffer"],
  result: "u8",
} as const;

let fn_glIsNamedStringARB!: Deno.UnsafeFnPointer<typeof def_glIsNamedStringARB>;

export function IsNamedStringARB(
  namelen: GLint,
  name: Buffer,
): GLboolean {
  return fn_glIsNamedStringARB.call(
    namelen,
    bufferToFFI(name),
  );
}

export const def_glGetNamedStringARB = {
  parameters: ["i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedStringARB!: Deno.UnsafeFnPointer<typeof def_glGetNamedStringARB>;

export function GetNamedStringARB(
  namelen: GLint,
  name: Buffer,
  bufSize: GLsizei,
  stringlen: Buffer,
  string: Buffer,
): void {
  fn_glGetNamedStringARB.call(
    namelen,
    bufferToFFI(name),
    bufSize,
    bufferToFFI(stringlen),
    bufferToFFI(string),
  );
}

export const def_glGetNamedStringivARB = {
  parameters: ["i32", "buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedStringivARB!: Deno.UnsafeFnPointer<typeof def_glGetNamedStringivARB>;

export function GetNamedStringivARB(
  namelen: GLint,
  name: Buffer,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetNamedStringivARB.call(
    namelen,
    bufferToFFI(name),
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glNamedStringARB = new Deno.UnsafeFnPointer(proc("glNamedStringARB"), def_glNamedStringARB);
  fn_glDeleteNamedStringARB = new Deno.UnsafeFnPointer(proc("glDeleteNamedStringARB"), def_glDeleteNamedStringARB);
  fn_glCompileShaderIncludeARB = new Deno.UnsafeFnPointer(proc("glCompileShaderIncludeARB"), def_glCompileShaderIncludeARB);
  fn_glIsNamedStringARB = new Deno.UnsafeFnPointer(proc("glIsNamedStringARB"), def_glIsNamedStringARB);
  fn_glGetNamedStringARB = new Deno.UnsafeFnPointer(proc("glGetNamedStringARB"), def_glGetNamedStringARB);
  fn_glGetNamedStringivARB = new Deno.UnsafeFnPointer(proc("glGetNamedStringivARB"), def_glGetNamedStringivARB);
}
