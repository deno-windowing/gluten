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
export const FRAME_NV = 0x8e26;
export const FIELDS_NV = 0x8e27;
export const CURRENT_TIME_NV = 0x8e28;
export const NUM_FILL_STREAMS_NV = 0x8e29;
export const PRESENT_TIME_NV = 0x8e2a;
export const PRESENT_DURATION_NV = 0x8e2b;

/// Commands

export const def_glPresentFrameKeyedNV = {
  parameters: ["u32", "u64", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glPresentFrameKeyedNV!: Deno.UnsafeFnPointer<typeof def_glPresentFrameKeyedNV>;

export function PresentFrameKeyedNV(
  video_slot: GLuint,
  minPresentTime: GLuint64EXT,
  beginPresentTimeId: GLuint,
  presentDurationId: GLuint,
  type: GLenum,
  target0: GLenum,
  fill0: GLuint,
  key0: GLuint,
  target1: GLenum,
  fill1: GLuint,
  key1: GLuint,
): void {
  fn_glPresentFrameKeyedNV.call(
    video_slot,
    minPresentTime,
    beginPresentTimeId,
    presentDurationId,
    type,
    target0,
    fill0,
    key0,
    target1,
    fill1,
    key1,
  );
}

export const def_glPresentFrameDualFillNV = {
  parameters: ["u32", "u64", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glPresentFrameDualFillNV!: Deno.UnsafeFnPointer<typeof def_glPresentFrameDualFillNV>;

export function PresentFrameDualFillNV(
  video_slot: GLuint,
  minPresentTime: GLuint64EXT,
  beginPresentTimeId: GLuint,
  presentDurationId: GLuint,
  type: GLenum,
  target0: GLenum,
  fill0: GLuint,
  target1: GLenum,
  fill1: GLuint,
  target2: GLenum,
  fill2: GLuint,
  target3: GLenum,
  fill3: GLuint,
): void {
  fn_glPresentFrameDualFillNV.call(
    video_slot,
    minPresentTime,
    beginPresentTimeId,
    presentDurationId,
    type,
    target0,
    fill0,
    target1,
    fill1,
    target2,
    fill2,
    target3,
    fill3,
  );
}

export const def_glGetVideoivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoivNV!: Deno.UnsafeFnPointer<typeof def_glGetVideoivNV>;

export function GetVideoivNV(
  video_slot: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoivNV.call(
    video_slot,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideouivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideouivNV!: Deno.UnsafeFnPointer<typeof def_glGetVideouivNV>;

export function GetVideouivNV(
  video_slot: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideouivNV.call(
    video_slot,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideoi64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoi64vNV!: Deno.UnsafeFnPointer<typeof def_glGetVideoi64vNV>;

export function GetVideoi64vNV(
  video_slot: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoi64vNV.call(
    video_slot,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideoui64vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoui64vNV!: Deno.UnsafeFnPointer<typeof def_glGetVideoui64vNV>;

export function GetVideoui64vNV(
  video_slot: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoui64vNV.call(
    video_slot,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPresentFrameKeyedNV = new Deno.UnsafeFnPointer(proc("glPresentFrameKeyedNV"), def_glPresentFrameKeyedNV);
  fn_glPresentFrameDualFillNV = new Deno.UnsafeFnPointer(proc("glPresentFrameDualFillNV"), def_glPresentFrameDualFillNV);
  fn_glGetVideoivNV = new Deno.UnsafeFnPointer(proc("glGetVideoivNV"), def_glGetVideoivNV);
  fn_glGetVideouivNV = new Deno.UnsafeFnPointer(proc("glGetVideouivNV"), def_glGetVideouivNV);
  fn_glGetVideoi64vNV = new Deno.UnsafeFnPointer(proc("glGetVideoi64vNV"), def_glGetVideoi64vNV);
  fn_glGetVideoui64vNV = new Deno.UnsafeFnPointer(proc("glGetVideoui64vNV"), def_glGetVideoui64vNV);
}
