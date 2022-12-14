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
export const TEXTURE_CROP_RECT_OES = 0x8b9d;

/// Commands

export const def_glDrawTexsOES = {
  parameters: ["i16", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glDrawTexsOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexsOES>;

export function DrawTexsOES(
  x: GLshort,
  y: GLshort,
  z: GLshort,
  width: GLshort,
  height: GLshort,
): void {
  fn_glDrawTexsOES.call(
    x,
    y,
    z,
    width,
    height,
  );
}

export const def_glDrawTexiOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawTexiOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexiOES>;

export function DrawTexiOES(
  x: GLint,
  y: GLint,
  z: GLint,
  width: GLint,
  height: GLint,
): void {
  fn_glDrawTexiOES.call(
    x,
    y,
    z,
    width,
    height,
  );
}

export const def_glDrawTexxOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glDrawTexxOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexxOES>;

export function DrawTexxOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
  width: GLfixed,
  height: GLfixed,
): void {
  fn_glDrawTexxOES.call(
    x,
    y,
    z,
    width,
    height,
  );
}

export const def_glDrawTexsvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDrawTexsvOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexsvOES>;

export function DrawTexsvOES(
  coords: Buffer,
): void {
  fn_glDrawTexsvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glDrawTexivOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDrawTexivOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexivOES>;

export function DrawTexivOES(
  coords: Buffer,
): void {
  fn_glDrawTexivOES.call(
    bufferToFFI(coords),
  );
}

export const def_glDrawTexxvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDrawTexxvOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexxvOES>;

export function DrawTexxvOES(
  coords: Buffer,
): void {
  fn_glDrawTexxvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glDrawTexfOES = {
  parameters: ["f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glDrawTexfOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexfOES>;

export function DrawTexfOES(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  width: GLfloat,
  height: GLfloat,
): void {
  fn_glDrawTexfOES.call(
    x,
    y,
    z,
    width,
    height,
  );
}

export const def_glDrawTexfvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDrawTexfvOES!: Deno.UnsafeFnPointer<typeof def_glDrawTexfvOES>;

export function DrawTexfvOES(
  coords: Buffer,
): void {
  fn_glDrawTexfvOES.call(
    bufferToFFI(coords),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawTexsOES = new Deno.UnsafeFnPointer(proc("glDrawTexsOES"), def_glDrawTexsOES);
  fn_glDrawTexiOES = new Deno.UnsafeFnPointer(proc("glDrawTexiOES"), def_glDrawTexiOES);
  fn_glDrawTexxOES = new Deno.UnsafeFnPointer(proc("glDrawTexxOES"), def_glDrawTexxOES);
  fn_glDrawTexsvOES = new Deno.UnsafeFnPointer(proc("glDrawTexsvOES"), def_glDrawTexsvOES);
  fn_glDrawTexivOES = new Deno.UnsafeFnPointer(proc("glDrawTexivOES"), def_glDrawTexivOES);
  fn_glDrawTexxvOES = new Deno.UnsafeFnPointer(proc("glDrawTexxvOES"), def_glDrawTexxvOES);
  fn_glDrawTexfOES = new Deno.UnsafeFnPointer(proc("glDrawTexfOES"), def_glDrawTexfOES);
  fn_glDrawTexfvOES = new Deno.UnsafeFnPointer(proc("glDrawTexfvOES"), def_glDrawTexfvOES);
}
