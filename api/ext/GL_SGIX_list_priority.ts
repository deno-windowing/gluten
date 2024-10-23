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
const isTypedArray = (arr: unknown) =>
  arr instanceof Int8Array || arr instanceof Uint8Array ||
  arr instanceof Int16Array || arr instanceof Uint16Array ||
  arr instanceof Int32Array || arr instanceof Uint32Array ||
  arr instanceof Float32Array || arr instanceof Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else if (isTypedArray(buf)) {
    return new Uint8Array((buf as TypedArray).buffer);
  } else {
    return new Uint8Array(
      Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1),
    );
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
export const LIST_PRIORITY_SGIX = 0x8182;

/// Commands

export const def_glGetListParameterfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetListParameterfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetListParameterfvSGIX
>;

export function GetListParameterfvSGIX(
  list: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetListParameterfvSGIX.call(
    list,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetListParameterivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetListParameterivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetListParameterivSGIX
>;

export function GetListParameterivSGIX(
  list: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetListParameterivSGIX.call(
    list,
    pname,
    bufferToFFI(params),
  );
}

export const def_glListParameterfSGIX = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glListParameterfSGIX!: Deno.UnsafeFnPointer<
  typeof def_glListParameterfSGIX
>;

export function ListParameterfSGIX(
  list: GLuint,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glListParameterfSGIX.call(
    list,
    pname,
    param,
  );
}

export const def_glListParameterfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glListParameterfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glListParameterfvSGIX
>;

export function ListParameterfvSGIX(
  list: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glListParameterfvSGIX.call(
    list,
    pname,
    bufferToFFI(params),
  );
}

export const def_glListParameteriSGIX = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glListParameteriSGIX!: Deno.UnsafeFnPointer<
  typeof def_glListParameteriSGIX
>;

export function ListParameteriSGIX(
  list: GLuint,
  pname: GLenum,
  param: GLint,
): void {
  fn_glListParameteriSGIX.call(
    list,
    pname,
    param,
  );
}

export const def_glListParameterivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glListParameterivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glListParameterivSGIX
>;

export function ListParameterivSGIX(
  list: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glListParameterivSGIX.call(
    list,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetListParameterfvSGIX = new Deno.UnsafeFnPointer(
    proc("glGetListParameterfvSGIX")!,
    def_glGetListParameterfvSGIX,
  );
  fn_glGetListParameterivSGIX = new Deno.UnsafeFnPointer(
    proc("glGetListParameterivSGIX")!,
    def_glGetListParameterivSGIX,
  );
  fn_glListParameterfSGIX = new Deno.UnsafeFnPointer(
    proc("glListParameterfSGIX")!,
    def_glListParameterfSGIX,
  );
  fn_glListParameterfvSGIX = new Deno.UnsafeFnPointer(
    proc("glListParameterfvSGIX")!,
    def_glListParameterfvSGIX,
  );
  fn_glListParameteriSGIX = new Deno.UnsafeFnPointer(
    proc("glListParameteriSGIX")!,
    def_glListParameteriSGIX,
  );
  fn_glListParameterivSGIX = new Deno.UnsafeFnPointer(
    proc("glListParameterivSGIX")!,
    def_glListParameterivSGIX,
  );
}
