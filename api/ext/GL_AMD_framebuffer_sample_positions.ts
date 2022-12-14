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
export const SUBSAMPLE_DISTANCE_AMD = 0x883f;
export const PIXELS_PER_SAMPLE_PATTERN_X_AMD = 0x91ae;
export const PIXELS_PER_SAMPLE_PATTERN_Y_AMD = 0x91af;
export const ALL_PIXELS_AMD = 0xffffffff;

/// Commands

export const def_glFramebufferSamplePositionsfvAMD = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFramebufferSamplePositionsfvAMD!: Deno.UnsafeFnPointer<typeof def_glFramebufferSamplePositionsfvAMD>;

export function FramebufferSamplePositionsfvAMD(
  target: GLenum,
  numsamples: GLuint,
  pixelindex: GLuint,
  values: Buffer,
): void {
  fn_glFramebufferSamplePositionsfvAMD.call(
    target,
    numsamples,
    pixelindex,
    bufferToFFI(values),
  );
}

export const def_glNamedFramebufferSamplePositionsfvAMD = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glNamedFramebufferSamplePositionsfvAMD!: Deno.UnsafeFnPointer<typeof def_glNamedFramebufferSamplePositionsfvAMD>;

export function NamedFramebufferSamplePositionsfvAMD(
  framebuffer: GLuint,
  numsamples: GLuint,
  pixelindex: GLuint,
  values: Buffer,
): void {
  fn_glNamedFramebufferSamplePositionsfvAMD.call(
    framebuffer,
    numsamples,
    pixelindex,
    bufferToFFI(values),
  );
}

export const def_glGetFramebufferParameterfvAMD = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetFramebufferParameterfvAMD!: Deno.UnsafeFnPointer<typeof def_glGetFramebufferParameterfvAMD>;

export function GetFramebufferParameterfvAMD(
  target: GLenum,
  pname: GLenum,
  numsamples: GLuint,
  pixelindex: GLuint,
  size: GLsizei,
  values: Buffer,
): void {
  fn_glGetFramebufferParameterfvAMD.call(
    target,
    pname,
    numsamples,
    pixelindex,
    size,
    bufferToFFI(values),
  );
}

export const def_glGetNamedFramebufferParameterfvAMD = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetNamedFramebufferParameterfvAMD!: Deno.UnsafeFnPointer<typeof def_glGetNamedFramebufferParameterfvAMD>;

export function GetNamedFramebufferParameterfvAMD(
  framebuffer: GLuint,
  pname: GLenum,
  numsamples: GLuint,
  pixelindex: GLuint,
  size: GLsizei,
  values: Buffer,
): void {
  fn_glGetNamedFramebufferParameterfvAMD.call(
    framebuffer,
    pname,
    numsamples,
    pixelindex,
    size,
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFramebufferSamplePositionsfvAMD = new Deno.UnsafeFnPointer(proc("glFramebufferSamplePositionsfvAMD"), def_glFramebufferSamplePositionsfvAMD);
  fn_glNamedFramebufferSamplePositionsfvAMD = new Deno.UnsafeFnPointer(proc("glNamedFramebufferSamplePositionsfvAMD"), def_glNamedFramebufferSamplePositionsfvAMD);
  fn_glGetFramebufferParameterfvAMD = new Deno.UnsafeFnPointer(proc("glGetFramebufferParameterfvAMD"), def_glGetFramebufferParameterfvAMD);
  fn_glGetNamedFramebufferParameterfvAMD = new Deno.UnsafeFnPointer(proc("glGetNamedFramebufferParameterfvAMD"), def_glGetNamedFramebufferParameterfvAMD);
}
