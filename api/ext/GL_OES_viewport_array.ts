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
export const SCISSOR_BOX = 0xc10;
export const VIEWPORT = 0xba2;
export const DEPTH_RANGE = 0xb70;
export const SCISSOR_TEST = 0xc11;
export const MAX_VIEWPORTS_OES = 0x825b;
export const VIEWPORT_SUBPIXEL_BITS_OES = 0x825c;
export const VIEWPORT_BOUNDS_RANGE_OES = 0x825d;
export const VIEWPORT_INDEX_PROVOKING_VERTEX_OES = 0x825f;

/// Commands

export const def_glViewportArrayvOES = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glViewportArrayvOES!: Deno.UnsafeFnPointer<typeof def_glViewportArrayvOES>;

export function ViewportArrayvOES(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glViewportArrayvOES.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glViewportIndexedfOES = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glViewportIndexedfOES!: Deno.UnsafeFnPointer<typeof def_glViewportIndexedfOES>;

export function ViewportIndexedfOES(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  w: GLfloat,
  h: GLfloat,
): void {
  fn_glViewportIndexedfOES.call(
    index,
    x,
    y,
    w,
    h,
  );
}

export const def_glViewportIndexedfvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glViewportIndexedfvOES!: Deno.UnsafeFnPointer<typeof def_glViewportIndexedfvOES>;

export function ViewportIndexedfvOES(
  index: GLuint,
  v: Buffer,
): void {
  fn_glViewportIndexedfvOES.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glScissorArrayvOES = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glScissorArrayvOES!: Deno.UnsafeFnPointer<typeof def_glScissorArrayvOES>;

export function ScissorArrayvOES(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glScissorArrayvOES.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glScissorIndexedOES = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScissorIndexedOES!: Deno.UnsafeFnPointer<typeof def_glScissorIndexedOES>;

export function ScissorIndexedOES(
  index: GLuint,
  left: GLint,
  bottom: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glScissorIndexedOES.call(
    index,
    left,
    bottom,
    width,
    height,
  );
}

export const def_glScissorIndexedvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glScissorIndexedvOES!: Deno.UnsafeFnPointer<typeof def_glScissorIndexedvOES>;

export function ScissorIndexedvOES(
  index: GLuint,
  v: Buffer,
): void {
  fn_glScissorIndexedvOES.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeArrayfvOES = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDepthRangeArrayfvOES!: Deno.UnsafeFnPointer<typeof def_glDepthRangeArrayfvOES>;

export function DepthRangeArrayfvOES(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glDepthRangeArrayfvOES.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeIndexedfOES = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glDepthRangeIndexedfOES!: Deno.UnsafeFnPointer<typeof def_glDepthRangeIndexedfOES>;

export function DepthRangeIndexedfOES(
  index: GLuint,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glDepthRangeIndexedfOES.call(
    index,
    n,
    f,
  );
}

export const def_glGetFloati_vOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloati_vOES!: Deno.UnsafeFnPointer<typeof def_glGetFloati_vOES>;

export function GetFloati_vOES(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetFloati_vOES.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glEnableiOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableiOES!: Deno.UnsafeFnPointer<typeof def_glEnableiOES>;

export function EnableiOES(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableiOES.call(
    target,
    index,
  );
}

export const def_glDisableiOES = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableiOES!: Deno.UnsafeFnPointer<typeof def_glDisableiOES>;

export function DisableiOES(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableiOES.call(
    target,
    index,
  );
}

export const def_glIsEnablediOES = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnablediOES!: Deno.UnsafeFnPointer<typeof def_glIsEnablediOES>;

export function IsEnablediOES(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnablediOES.call(
    target,
    index,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glViewportArrayvOES = new Deno.UnsafeFnPointer(proc("glViewportArrayvOES"), def_glViewportArrayvOES);
  fn_glViewportIndexedfOES = new Deno.UnsafeFnPointer(proc("glViewportIndexedfOES"), def_glViewportIndexedfOES);
  fn_glViewportIndexedfvOES = new Deno.UnsafeFnPointer(proc("glViewportIndexedfvOES"), def_glViewportIndexedfvOES);
  fn_glScissorArrayvOES = new Deno.UnsafeFnPointer(proc("glScissorArrayvOES"), def_glScissorArrayvOES);
  fn_glScissorIndexedOES = new Deno.UnsafeFnPointer(proc("glScissorIndexedOES"), def_glScissorIndexedOES);
  fn_glScissorIndexedvOES = new Deno.UnsafeFnPointer(proc("glScissorIndexedvOES"), def_glScissorIndexedvOES);
  fn_glDepthRangeArrayfvOES = new Deno.UnsafeFnPointer(proc("glDepthRangeArrayfvOES"), def_glDepthRangeArrayfvOES);
  fn_glDepthRangeIndexedfOES = new Deno.UnsafeFnPointer(proc("glDepthRangeIndexedfOES"), def_glDepthRangeIndexedfOES);
  fn_glGetFloati_vOES = new Deno.UnsafeFnPointer(proc("glGetFloati_vOES"), def_glGetFloati_vOES);
  fn_glEnableiOES = new Deno.UnsafeFnPointer(proc("glEnableiOES"), def_glEnableiOES);
  fn_glDisableiOES = new Deno.UnsafeFnPointer(proc("glDisableiOES"), def_glDisableiOES);
  fn_glIsEnablediOES = new Deno.UnsafeFnPointer(proc("glIsEnablediOES"), def_glIsEnablediOES);
}
