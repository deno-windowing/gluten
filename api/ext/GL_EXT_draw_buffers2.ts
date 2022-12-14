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

/// Commands

export const def_glColorMaskIndexedEXT = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glColorMaskIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glColorMaskIndexedEXT>;

export function ColorMaskIndexedEXT(
  index: GLuint,
  r: GLboolean,
  g: GLboolean,
  b: GLboolean,
  a: GLboolean,
): void {
  fn_glColorMaskIndexedEXT.call(
    index,
    r,
    g,
    b,
    a,
  );
}

export const def_glGetBooleanIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBooleanIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetBooleanIndexedvEXT>;

export function GetBooleanIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetBooleanIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glGetIntegerIndexedvEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegerIndexedvEXT!: Deno.UnsafeFnPointer<typeof def_glGetIntegerIndexedvEXT>;

export function GetIntegerIndexedvEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetIntegerIndexedvEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glEnableIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glEnableIndexedEXT>;

export function EnableIndexedEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableIndexedEXT.call(
    target,
    index,
  );
}

export const def_glDisableIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glDisableIndexedEXT>;

export function DisableIndexedEXT(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableIndexedEXT.call(
    target,
    index,
  );
}

export const def_glIsEnabledIndexedEXT = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnabledIndexedEXT!: Deno.UnsafeFnPointer<typeof def_glIsEnabledIndexedEXT>;

export function IsEnabledIndexedEXT(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnabledIndexedEXT.call(
    target,
    index,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glColorMaskIndexedEXT = new Deno.UnsafeFnPointer(proc("glColorMaskIndexedEXT"), def_glColorMaskIndexedEXT);
  fn_glGetBooleanIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetBooleanIndexedvEXT"), def_glGetBooleanIndexedvEXT);
  fn_glGetIntegerIndexedvEXT = new Deno.UnsafeFnPointer(proc("glGetIntegerIndexedvEXT"), def_glGetIntegerIndexedvEXT);
  fn_glEnableIndexedEXT = new Deno.UnsafeFnPointer(proc("glEnableIndexedEXT"), def_glEnableIndexedEXT);
  fn_glDisableIndexedEXT = new Deno.UnsafeFnPointer(proc("glDisableIndexedEXT"), def_glDisableIndexedEXT);
  fn_glIsEnabledIndexedEXT = new Deno.UnsafeFnPointer(proc("glIsEnabledIndexedEXT"), def_glIsEnabledIndexedEXT);
}
