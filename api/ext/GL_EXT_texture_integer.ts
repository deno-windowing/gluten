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
export const RGBA32UI_EXT = 0x8d70;
export const RGB32UI_EXT = 0x8d71;
export const ALPHA32UI_EXT = 0x8d72;
export const INTENSITY32UI_EXT = 0x8d73;
export const LUMINANCE32UI_EXT = 0x8d74;
export const LUMINANCE_ALPHA32UI_EXT = 0x8d75;
export const RGBA16UI_EXT = 0x8d76;
export const RGB16UI_EXT = 0x8d77;
export const ALPHA16UI_EXT = 0x8d78;
export const INTENSITY16UI_EXT = 0x8d79;
export const LUMINANCE16UI_EXT = 0x8d7a;
export const LUMINANCE_ALPHA16UI_EXT = 0x8d7b;
export const RGBA8UI_EXT = 0x8d7c;
export const RGB8UI_EXT = 0x8d7d;
export const ALPHA8UI_EXT = 0x8d7e;
export const INTENSITY8UI_EXT = 0x8d7f;
export const LUMINANCE8UI_EXT = 0x8d80;
export const LUMINANCE_ALPHA8UI_EXT = 0x8d81;
export const RGBA32I_EXT = 0x8d82;
export const RGB32I_EXT = 0x8d83;
export const ALPHA32I_EXT = 0x8d84;
export const INTENSITY32I_EXT = 0x8d85;
export const LUMINANCE32I_EXT = 0x8d86;
export const LUMINANCE_ALPHA32I_EXT = 0x8d87;
export const RGBA16I_EXT = 0x8d88;
export const RGB16I_EXT = 0x8d89;
export const ALPHA16I_EXT = 0x8d8a;
export const INTENSITY16I_EXT = 0x8d8b;
export const LUMINANCE16I_EXT = 0x8d8c;
export const LUMINANCE_ALPHA16I_EXT = 0x8d8d;
export const RGBA8I_EXT = 0x8d8e;
export const RGB8I_EXT = 0x8d8f;
export const ALPHA8I_EXT = 0x8d90;
export const INTENSITY8I_EXT = 0x8d91;
export const LUMINANCE8I_EXT = 0x8d92;
export const LUMINANCE_ALPHA8I_EXT = 0x8d93;
export const RED_INTEGER_EXT = 0x8d94;
export const GREEN_INTEGER_EXT = 0x8d95;
export const BLUE_INTEGER_EXT = 0x8d96;
export const ALPHA_INTEGER_EXT = 0x8d97;
export const RGB_INTEGER_EXT = 0x8d98;
export const RGBA_INTEGER_EXT = 0x8d99;
export const BGR_INTEGER_EXT = 0x8d9a;
export const BGRA_INTEGER_EXT = 0x8d9b;
export const LUMINANCE_INTEGER_EXT = 0x8d9c;
export const LUMINANCE_ALPHA_INTEGER_EXT = 0x8d9d;
export const RGBA_INTEGER_MODE_EXT = 0x8d9e;

/// Commands

export const def_glTexParameterIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterIivEXT!: Deno.UnsafeFnPointer<
  typeof def_glTexParameterIivEXT
>;

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

let fn_glTexParameterIuivEXT!: Deno.UnsafeFnPointer<
  typeof def_glTexParameterIuivEXT
>;

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

let fn_glGetTexParameterIivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterIivEXT
>;

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

let fn_glGetTexParameterIuivEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetTexParameterIuivEXT
>;

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

export const def_glClearColorIiEXT = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glClearColorIiEXT!: Deno.UnsafeFnPointer<typeof def_glClearColorIiEXT>;

export function ClearColorIiEXT(
  red: GLint,
  green: GLint,
  blue: GLint,
  alpha: GLint,
): void {
  fn_glClearColorIiEXT.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearColorIuiEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glClearColorIuiEXT!: Deno.UnsafeFnPointer<typeof def_glClearColorIuiEXT>;

export function ClearColorIuiEXT(
  red: GLuint,
  green: GLuint,
  blue: GLuint,
  alpha: GLuint,
): void {
  fn_glClearColorIuiEXT.call(
    red,
    green,
    blue,
    alpha,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTexParameterIivEXT = new Deno.UnsafeFnPointer(
    proc("glTexParameterIivEXT"),
    def_glTexParameterIivEXT,
  );
  fn_glTexParameterIuivEXT = new Deno.UnsafeFnPointer(
    proc("glTexParameterIuivEXT"),
    def_glTexParameterIuivEXT,
  );
  fn_glGetTexParameterIivEXT = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterIivEXT"),
    def_glGetTexParameterIivEXT,
  );
  fn_glGetTexParameterIuivEXT = new Deno.UnsafeFnPointer(
    proc("glGetTexParameterIuivEXT"),
    def_glGetTexParameterIuivEXT,
  );
  fn_glClearColorIiEXT = new Deno.UnsafeFnPointer(
    proc("glClearColorIiEXT"),
    def_glClearColorIiEXT,
  );
  fn_glClearColorIuiEXT = new Deno.UnsafeFnPointer(
    proc("glClearColorIuiEXT"),
    def_glClearColorIuiEXT,
  );
}
