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
export const MAX_VIEWPORTS_NV = 0x825b;
export const VIEWPORT_SUBPIXEL_BITS_NV = 0x825c;
export const VIEWPORT_BOUNDS_RANGE_NV = 0x825d;
export const VIEWPORT_INDEX_PROVOKING_VERTEX_NV = 0x825f;
export const SCISSOR_BOX = 0xc10;
export const VIEWPORT = 0xba2;
export const DEPTH_RANGE = 0xb70;
export const SCISSOR_TEST = 0xc11;

/// Commands

export const def_glViewportArrayvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glViewportArrayvNV!: Deno.UnsafeFnPointer<typeof def_glViewportArrayvNV>;

export function ViewportArrayvNV(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glViewportArrayvNV.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glViewportIndexedfNV = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glViewportIndexedfNV!: Deno.UnsafeFnPointer<
  typeof def_glViewportIndexedfNV
>;

export function ViewportIndexedfNV(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  w: GLfloat,
  h: GLfloat,
): void {
  fn_glViewportIndexedfNV.call(
    index,
    x,
    y,
    w,
    h,
  );
}

export const def_glViewportIndexedfvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glViewportIndexedfvNV!: Deno.UnsafeFnPointer<
  typeof def_glViewportIndexedfvNV
>;

export function ViewportIndexedfvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glViewportIndexedfvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glScissorArrayvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glScissorArrayvNV!: Deno.UnsafeFnPointer<typeof def_glScissorArrayvNV>;

export function ScissorArrayvNV(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glScissorArrayvNV.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glScissorIndexedNV = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScissorIndexedNV!: Deno.UnsafeFnPointer<typeof def_glScissorIndexedNV>;

export function ScissorIndexedNV(
  index: GLuint,
  left: GLint,
  bottom: GLint,
  width: GLsizei,
  height: GLsizei,
): void {
  fn_glScissorIndexedNV.call(
    index,
    left,
    bottom,
    width,
    height,
  );
}

export const def_glScissorIndexedvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glScissorIndexedvNV!: Deno.UnsafeFnPointer<
  typeof def_glScissorIndexedvNV
>;

export function ScissorIndexedvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glScissorIndexedvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeArrayfvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDepthRangeArrayfvNV!: Deno.UnsafeFnPointer<
  typeof def_glDepthRangeArrayfvNV
>;

export function DepthRangeArrayfvNV(
  first: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glDepthRangeArrayfvNV.call(
    first,
    count,
    bufferToFFI(v),
  );
}

export const def_glDepthRangeIndexedfNV = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glDepthRangeIndexedfNV!: Deno.UnsafeFnPointer<
  typeof def_glDepthRangeIndexedfNV
>;

export function DepthRangeIndexedfNV(
  index: GLuint,
  n: GLfloat,
  f: GLfloat,
): void {
  fn_glDepthRangeIndexedfNV.call(
    index,
    n,
    f,
  );
}

export const def_glGetFloati_vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFloati_vNV!: Deno.UnsafeFnPointer<typeof def_glGetFloati_vNV>;

export function GetFloati_vNV(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetFloati_vNV.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glEnableiNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glEnableiNV!: Deno.UnsafeFnPointer<typeof def_glEnableiNV>;

export function EnableiNV(
  target: GLenum,
  index: GLuint,
): void {
  fn_glEnableiNV.call(
    target,
    index,
  );
}

export const def_glDisableiNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDisableiNV!: Deno.UnsafeFnPointer<typeof def_glDisableiNV>;

export function DisableiNV(
  target: GLenum,
  index: GLuint,
): void {
  fn_glDisableiNV.call(
    target,
    index,
  );
}

export const def_glIsEnablediNV = {
  parameters: ["u32", "u32"],
  result: "u8",
} as const;

let fn_glIsEnablediNV!: Deno.UnsafeFnPointer<typeof def_glIsEnablediNV>;

export function IsEnablediNV(
  target: GLenum,
  index: GLuint,
): GLboolean {
  return fn_glIsEnablediNV.call(
    target,
    index,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glViewportArrayvNV = new Deno.UnsafeFnPointer(
    proc("glViewportArrayvNV")!,
    def_glViewportArrayvNV,
  );
  fn_glViewportIndexedfNV = new Deno.UnsafeFnPointer(
    proc("glViewportIndexedfNV")!,
    def_glViewportIndexedfNV,
  );
  fn_glViewportIndexedfvNV = new Deno.UnsafeFnPointer(
    proc("glViewportIndexedfvNV")!,
    def_glViewportIndexedfvNV,
  );
  fn_glScissorArrayvNV = new Deno.UnsafeFnPointer(
    proc("glScissorArrayvNV")!,
    def_glScissorArrayvNV,
  );
  fn_glScissorIndexedNV = new Deno.UnsafeFnPointer(
    proc("glScissorIndexedNV")!,
    def_glScissorIndexedNV,
  );
  fn_glScissorIndexedvNV = new Deno.UnsafeFnPointer(
    proc("glScissorIndexedvNV")!,
    def_glScissorIndexedvNV,
  );
  fn_glDepthRangeArrayfvNV = new Deno.UnsafeFnPointer(
    proc("glDepthRangeArrayfvNV")!,
    def_glDepthRangeArrayfvNV,
  );
  fn_glDepthRangeIndexedfNV = new Deno.UnsafeFnPointer(
    proc("glDepthRangeIndexedfNV")!,
    def_glDepthRangeIndexedfNV,
  );
  fn_glGetFloati_vNV = new Deno.UnsafeFnPointer(
    proc("glGetFloati_vNV")!,
    def_glGetFloati_vNV,
  );
  fn_glEnableiNV = new Deno.UnsafeFnPointer(
    proc("glEnableiNV")!,
    def_glEnableiNV,
  );
  fn_glDisableiNV = new Deno.UnsafeFnPointer(
    proc("glDisableiNV")!,
    def_glDisableiNV,
  );
  fn_glIsEnablediNV = new Deno.UnsafeFnPointer(
    proc("glIsEnablediNV")!,
    def_glIsEnablediNV,
  );
}
