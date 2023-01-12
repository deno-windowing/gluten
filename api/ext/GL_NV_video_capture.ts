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
export const VIDEO_BUFFER_NV = 0x9020;
export const VIDEO_BUFFER_BINDING_NV = 0x9021;
export const FIELD_UPPER_NV = 0x9022;
export const FIELD_LOWER_NV = 0x9023;
export const NUM_VIDEO_CAPTURE_STREAMS_NV = 0x9024;
export const NEXT_VIDEO_CAPTURE_BUFFER_STATUS_NV = 0x9025;
export const VIDEO_CAPTURE_TO_422_SUPPORTED_NV = 0x9026;
export const LAST_VIDEO_CAPTURE_STATUS_NV = 0x9027;
export const VIDEO_BUFFER_PITCH_NV = 0x9028;
export const VIDEO_COLOR_CONVERSION_MATRIX_NV = 0x9029;
export const VIDEO_COLOR_CONVERSION_MAX_NV = 0x902a;
export const VIDEO_COLOR_CONVERSION_MIN_NV = 0x902b;
export const VIDEO_COLOR_CONVERSION_OFFSET_NV = 0x902c;
export const VIDEO_BUFFER_INTERNAL_FORMAT_NV = 0x902d;
export const PARTIAL_SUCCESS_NV = 0x902e;
export const SUCCESS_NV = 0x902f;
export const FAILURE_NV = 0x9030;
export const YCBYCR8_422_NV = 0x9031;
export const YCBAYCR8A_4224_NV = 0x9032;
export const Z6Y10Z6CB10Z6Y10Z6CR10_422_NV = 0x9033;
export const Z6Y10Z6CB10Z6A10Z6Y10Z6CR10Z6A10_4224_NV = 0x9034;
export const Z4Y12Z4CB12Z4Y12Z4CR12_422_NV = 0x9035;
export const Z4Y12Z4CB12Z4A12Z4Y12Z4CR12Z4A12_4224_NV = 0x9036;
export const Z4Y12Z4CB12Z4CR12_444_NV = 0x9037;
export const VIDEO_CAPTURE_FRAME_WIDTH_NV = 0x9038;
export const VIDEO_CAPTURE_FRAME_HEIGHT_NV = 0x9039;
export const VIDEO_CAPTURE_FIELD_UPPER_HEIGHT_NV = 0x903a;
export const VIDEO_CAPTURE_FIELD_LOWER_HEIGHT_NV = 0x903b;
export const VIDEO_CAPTURE_SURFACE_ORIGIN_NV = 0x903c;

/// Commands

export const def_glBeginVideoCaptureNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginVideoCaptureNV!: Deno.UnsafeFnPointer<
  typeof def_glBeginVideoCaptureNV
>;

export function BeginVideoCaptureNV(
  video_capture_slot: GLuint,
): void {
  fn_glBeginVideoCaptureNV.call(
    video_capture_slot,
  );
}

export const def_glBindVideoCaptureStreamBufferNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindVideoCaptureStreamBufferNV!: Deno.UnsafeFnPointer<
  typeof def_glBindVideoCaptureStreamBufferNV
>;

export function BindVideoCaptureStreamBufferNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  frame_region: GLenum,
  offset: GLintptrARB,
): void {
  fn_glBindVideoCaptureStreamBufferNV.call(
    video_capture_slot,
    stream,
    frame_region,
    bufferToFFI(offset),
  );
}

export const def_glBindVideoCaptureStreamTextureNV = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glBindVideoCaptureStreamTextureNV!: Deno.UnsafeFnPointer<
  typeof def_glBindVideoCaptureStreamTextureNV
>;

export function BindVideoCaptureStreamTextureNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  frame_region: GLenum,
  target: GLenum,
  texture: GLuint,
): void {
  fn_glBindVideoCaptureStreamTextureNV.call(
    video_capture_slot,
    stream,
    frame_region,
    target,
    texture,
  );
}

export const def_glEndVideoCaptureNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndVideoCaptureNV!: Deno.UnsafeFnPointer<
  typeof def_glEndVideoCaptureNV
>;

export function EndVideoCaptureNV(
  video_capture_slot: GLuint,
): void {
  fn_glEndVideoCaptureNV.call(
    video_capture_slot,
  );
}

export const def_glGetVideoCaptureivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoCaptureivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVideoCaptureivNV
>;

export function GetVideoCaptureivNV(
  video_capture_slot: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoCaptureivNV.call(
    video_capture_slot,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideoCaptureStreamivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoCaptureStreamivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVideoCaptureStreamivNV
>;

export function GetVideoCaptureStreamivNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoCaptureStreamivNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideoCaptureStreamfvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoCaptureStreamfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVideoCaptureStreamfvNV
>;

export function GetVideoCaptureStreamfvNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoCaptureStreamfvNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVideoCaptureStreamdvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVideoCaptureStreamdvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVideoCaptureStreamdvNV
>;

export function GetVideoCaptureStreamdvNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVideoCaptureStreamdvNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVideoCaptureNV = {
  parameters: ["u32", "buffer", "buffer"],
  result: "u32",
} as const;

let fn_glVideoCaptureNV!: Deno.UnsafeFnPointer<typeof def_glVideoCaptureNV>;

export function VideoCaptureNV(
  video_capture_slot: GLuint,
  sequence_num: Buffer,
  capture_time: Buffer,
): GLenum {
  return fn_glVideoCaptureNV.call(
    video_capture_slot,
    bufferToFFI(sequence_num),
    bufferToFFI(capture_time),
  );
}

export const def_glVideoCaptureStreamParameterivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glVideoCaptureStreamParameterivNV!: Deno.UnsafeFnPointer<
  typeof def_glVideoCaptureStreamParameterivNV
>;

export function VideoCaptureStreamParameterivNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glVideoCaptureStreamParameterivNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVideoCaptureStreamParameterfvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glVideoCaptureStreamParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glVideoCaptureStreamParameterfvNV
>;

export function VideoCaptureStreamParameterfvNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glVideoCaptureStreamParameterfvNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVideoCaptureStreamParameterdvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glVideoCaptureStreamParameterdvNV!: Deno.UnsafeFnPointer<
  typeof def_glVideoCaptureStreamParameterdvNV
>;

export function VideoCaptureStreamParameterdvNV(
  video_capture_slot: GLuint,
  stream: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glVideoCaptureStreamParameterdvNV.call(
    video_capture_slot,
    stream,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBeginVideoCaptureNV = new Deno.UnsafeFnPointer(
    proc("glBeginVideoCaptureNV"),
    def_glBeginVideoCaptureNV,
  );
  fn_glBindVideoCaptureStreamBufferNV = new Deno.UnsafeFnPointer(
    proc("glBindVideoCaptureStreamBufferNV"),
    def_glBindVideoCaptureStreamBufferNV,
  );
  fn_glBindVideoCaptureStreamTextureNV = new Deno.UnsafeFnPointer(
    proc("glBindVideoCaptureStreamTextureNV"),
    def_glBindVideoCaptureStreamTextureNV,
  );
  fn_glEndVideoCaptureNV = new Deno.UnsafeFnPointer(
    proc("glEndVideoCaptureNV"),
    def_glEndVideoCaptureNV,
  );
  fn_glGetVideoCaptureivNV = new Deno.UnsafeFnPointer(
    proc("glGetVideoCaptureivNV"),
    def_glGetVideoCaptureivNV,
  );
  fn_glGetVideoCaptureStreamivNV = new Deno.UnsafeFnPointer(
    proc("glGetVideoCaptureStreamivNV"),
    def_glGetVideoCaptureStreamivNV,
  );
  fn_glGetVideoCaptureStreamfvNV = new Deno.UnsafeFnPointer(
    proc("glGetVideoCaptureStreamfvNV"),
    def_glGetVideoCaptureStreamfvNV,
  );
  fn_glGetVideoCaptureStreamdvNV = new Deno.UnsafeFnPointer(
    proc("glGetVideoCaptureStreamdvNV"),
    def_glGetVideoCaptureStreamdvNV,
  );
  fn_glVideoCaptureNV = new Deno.UnsafeFnPointer(
    proc("glVideoCaptureNV"),
    def_glVideoCaptureNV,
  );
  fn_glVideoCaptureStreamParameterivNV = new Deno.UnsafeFnPointer(
    proc("glVideoCaptureStreamParameterivNV"),
    def_glVideoCaptureStreamParameterivNV,
  );
  fn_glVideoCaptureStreamParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glVideoCaptureStreamParameterfvNV"),
    def_glVideoCaptureStreamParameterfvNV,
  );
  fn_glVideoCaptureStreamParameterdvNV = new Deno.UnsafeFnPointer(
    proc("glVideoCaptureStreamParameterdvNV"),
    def_glVideoCaptureStreamParameterdvNV,
  );
}
