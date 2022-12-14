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
export const COMPUTE_SHADER = 0x91b9;
export const MAX_COMPUTE_UNIFORM_BLOCKS = 0x91bb;
export const MAX_COMPUTE_TEXTURE_IMAGE_UNITS = 0x91bc;
export const MAX_COMPUTE_IMAGE_UNIFORMS = 0x91bd;
export const MAX_COMPUTE_SHARED_MEMORY_SIZE = 0x8262;
export const MAX_COMPUTE_UNIFORM_COMPONENTS = 0x8263;
export const MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS = 0x8264;
export const MAX_COMPUTE_ATOMIC_COUNTERS = 0x8265;
export const MAX_COMBINED_COMPUTE_UNIFORM_COMPONENTS = 0x8266;
export const MAX_COMPUTE_WORK_GROUP_INVOCATIONS = 0x90eb;
export const MAX_COMPUTE_WORK_GROUP_COUNT = 0x91be;
export const MAX_COMPUTE_WORK_GROUP_SIZE = 0x91bf;
export const COMPUTE_WORK_GROUP_SIZE = 0x8267;
export const UNIFORM_BLOCK_REFERENCED_BY_COMPUTE_SHADER = 0x90ec;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_COMPUTE_SHADER = 0x90ed;
export const DISPATCH_INDIRECT_BUFFER = 0x90ee;
export const DISPATCH_INDIRECT_BUFFER_BINDING = 0x90ef;
export const COMPUTE_SHADER_BIT = 0x20;

/// Commands

export const def_glDispatchCompute = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glDispatchCompute!: Deno.UnsafeFnPointer<typeof def_glDispatchCompute>;

export function DispatchCompute(
  num_groups_x: GLuint,
  num_groups_y: GLuint,
  num_groups_z: GLuint,
): void {
  fn_glDispatchCompute.call(
    num_groups_x,
    num_groups_y,
    num_groups_z,
  );
}

export const def_glDispatchComputeIndirect = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDispatchComputeIndirect!: Deno.UnsafeFnPointer<typeof def_glDispatchComputeIndirect>;

export function DispatchComputeIndirect(
  indirect: GLintptr,
): void {
  fn_glDispatchComputeIndirect.call(
    bufferToFFI(indirect),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDispatchCompute = new Deno.UnsafeFnPointer(proc("glDispatchCompute"), def_glDispatchCompute);
  fn_glDispatchComputeIndirect = new Deno.UnsafeFnPointer(proc("glDispatchComputeIndirect"), def_glDispatchComputeIndirect);
}
