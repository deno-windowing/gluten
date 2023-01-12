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
export const COLOR_BUFFER_BIT0_QCOM = 0x1;
export const COLOR_BUFFER_BIT1_QCOM = 0x2;
export const COLOR_BUFFER_BIT2_QCOM = 0x4;
export const COLOR_BUFFER_BIT3_QCOM = 0x8;
export const COLOR_BUFFER_BIT4_QCOM = 0x10;
export const COLOR_BUFFER_BIT5_QCOM = 0x20;
export const COLOR_BUFFER_BIT6_QCOM = 0x40;
export const COLOR_BUFFER_BIT7_QCOM = 0x80;
export const DEPTH_BUFFER_BIT0_QCOM = 0x100;
export const DEPTH_BUFFER_BIT1_QCOM = 0x200;
export const DEPTH_BUFFER_BIT2_QCOM = 0x400;
export const DEPTH_BUFFER_BIT3_QCOM = 0x800;
export const DEPTH_BUFFER_BIT4_QCOM = 0x1000;
export const DEPTH_BUFFER_BIT5_QCOM = 0x2000;
export const DEPTH_BUFFER_BIT6_QCOM = 0x4000;
export const DEPTH_BUFFER_BIT7_QCOM = 0x8000;
export const STENCIL_BUFFER_BIT0_QCOM = 0x10000;
export const STENCIL_BUFFER_BIT1_QCOM = 0x20000;
export const STENCIL_BUFFER_BIT2_QCOM = 0x40000;
export const STENCIL_BUFFER_BIT3_QCOM = 0x80000;
export const STENCIL_BUFFER_BIT4_QCOM = 0x100000;
export const STENCIL_BUFFER_BIT5_QCOM = 0x200000;
export const STENCIL_BUFFER_BIT6_QCOM = 0x400000;
export const STENCIL_BUFFER_BIT7_QCOM = 0x800000;
export const MULTISAMPLE_BUFFER_BIT0_QCOM = 0x1000000;
export const MULTISAMPLE_BUFFER_BIT1_QCOM = 0x2000000;
export const MULTISAMPLE_BUFFER_BIT2_QCOM = 0x4000000;
export const MULTISAMPLE_BUFFER_BIT3_QCOM = 0x8000000;
export const MULTISAMPLE_BUFFER_BIT4_QCOM = 0x10000000;
export const MULTISAMPLE_BUFFER_BIT5_QCOM = 0x20000000;
export const MULTISAMPLE_BUFFER_BIT6_QCOM = 0x40000000;
export const MULTISAMPLE_BUFFER_BIT7_QCOM = 0x80000000;

/// Commands

export const def_glStartTilingQCOM = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glStartTilingQCOM!: Deno.UnsafeFnPointer<typeof def_glStartTilingQCOM>;

export function StartTilingQCOM(
  x: GLuint,
  y: GLuint,
  width: GLuint,
  height: GLuint,
  preserveMask: GLbitfield,
): void {
  fn_glStartTilingQCOM.call(
    x,
    y,
    width,
    height,
    preserveMask,
  );
}

export const def_glEndTilingQCOM = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndTilingQCOM!: Deno.UnsafeFnPointer<typeof def_glEndTilingQCOM>;

export function EndTilingQCOM(
  preserveMask: GLbitfield,
): void {
  fn_glEndTilingQCOM.call(
    preserveMask,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glStartTilingQCOM = new Deno.UnsafeFnPointer(
    proc("glStartTilingQCOM"),
    def_glStartTilingQCOM,
  );
  fn_glEndTilingQCOM = new Deno.UnsafeFnPointer(
    proc("glEndTilingQCOM"),
    def_glEndTilingQCOM,
  );
}
