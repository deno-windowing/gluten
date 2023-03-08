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

export const def_glClearDepthfOES = {
  parameters: ["f32"],
  result: "void",
} as const;

let fn_glClearDepthfOES!: Deno.UnsafeFnPointer<typeof def_glClearDepthfOES>;

export function ClearDepthfOES(
  depth: GLclampf,
): void {
  fn_glClearDepthfOES.call(
    depth,
  );
}

export const def_glClipPlanefOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanefOES!: Deno.UnsafeFnPointer<typeof def_glClipPlanefOES>;

export function ClipPlanefOES(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glClipPlanefOES.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glDepthRangefOES = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glDepthRangefOES!: Deno.UnsafeFnPointer<typeof def_glDepthRangefOES>;

export function DepthRangefOES(
  n: GLclampf,
  f: GLclampf,
): void {
  fn_glDepthRangefOES.call(
    n,
    f,
  );
}

export const def_glFrustumfOES = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glFrustumfOES!: Deno.UnsafeFnPointer<typeof def_glFrustumfOES>;

export function FrustumfOES(
  l: GLfloat,
  r: GLfloat,
  b: GLfloat,
  t: GLfloat,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glFrustumfOES.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glGetClipPlanefOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetClipPlanefOES!: Deno.UnsafeFnPointer<typeof def_glGetClipPlanefOES>;

export function GetClipPlanefOES(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glGetClipPlanefOES.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glOrthofOES = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glOrthofOES!: Deno.UnsafeFnPointer<typeof def_glOrthofOES>;

export function OrthofOES(
  l: GLfloat,
  r: GLfloat,
  b: GLfloat,
  t: GLfloat,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glOrthofOES.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glClearDepthfOES = new Deno.UnsafeFnPointer(proc("glClearDepthfOES")!, def_glClearDepthfOES);
  fn_glClipPlanefOES = new Deno.UnsafeFnPointer(proc("glClipPlanefOES")!, def_glClipPlanefOES);
  fn_glDepthRangefOES = new Deno.UnsafeFnPointer(proc("glDepthRangefOES")!, def_glDepthRangefOES);
  fn_glFrustumfOES = new Deno.UnsafeFnPointer(proc("glFrustumfOES")!, def_glFrustumfOES);
  fn_glGetClipPlanefOES = new Deno.UnsafeFnPointer(proc("glGetClipPlanefOES")!, def_glGetClipPlanefOES);
  fn_glOrthofOES = new Deno.UnsafeFnPointer(proc("glOrthofOES")!, def_glOrthofOES);
}
