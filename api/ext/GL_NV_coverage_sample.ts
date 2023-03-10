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

/// Enums
export const COVERAGE_COMPONENT_NV = 0x8ed0;
export const COVERAGE_COMPONENT4_NV = 0x8ed1;
export const COVERAGE_ATTACHMENT_NV = 0x8ed2;
export const COVERAGE_BUFFERS_NV = 0x8ed3;
export const COVERAGE_SAMPLES_NV = 0x8ed4;
export const COVERAGE_ALL_FRAGMENTS_NV = 0x8ed5;
export const COVERAGE_EDGE_FRAGMENTS_NV = 0x8ed6;
export const COVERAGE_AUTOMATIC_NV = 0x8ed7;
export const COVERAGE_BUFFER_BIT_NV = 0x8000;

/// Commands

export const def_glCoverageMaskNV = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glCoverageMaskNV!: Deno.UnsafeFnPointer<typeof def_glCoverageMaskNV>;

export function CoverageMaskNV(
  mask: GLboolean,
): void {
  fn_glCoverageMaskNV.call(
    mask,
  );
}

export const def_glCoverageOperationNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCoverageOperationNV!: Deno.UnsafeFnPointer<typeof def_glCoverageOperationNV>;

export function CoverageOperationNV(
  operation: GLenum,
): void {
  fn_glCoverageOperationNV.call(
    operation,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCoverageMaskNV = new Deno.UnsafeFnPointer(proc("glCoverageMaskNV")!, def_glCoverageMaskNV);
  fn_glCoverageOperationNV = new Deno.UnsafeFnPointer(proc("glCoverageOperationNV")!, def_glCoverageOperationNV);
}
