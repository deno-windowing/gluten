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
export const ATOMIC_COUNTER_BUFFER = 0x92c0;
export const ATOMIC_COUNTER_BUFFER_BINDING = 0x92c1;
export const ATOMIC_COUNTER_BUFFER_START = 0x92c2;
export const ATOMIC_COUNTER_BUFFER_SIZE = 0x92c3;
export const ATOMIC_COUNTER_BUFFER_DATA_SIZE = 0x92c4;
export const ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTERS = 0x92c5;
export const ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTER_INDICES = 0x92c6;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_VERTEX_SHADER = 0x92c7;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_CONTROL_SHADER = 0x92c8;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_EVALUATION_SHADER = 0x92c9;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_GEOMETRY_SHADER = 0x92ca;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_FRAGMENT_SHADER = 0x92cb;
export const MAX_VERTEX_ATOMIC_COUNTER_BUFFERS = 0x92cc;
export const MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS = 0x92cd;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS = 0x92ce;
export const MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS = 0x92cf;
export const MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS = 0x92d0;
export const MAX_COMBINED_ATOMIC_COUNTER_BUFFERS = 0x92d1;
export const MAX_VERTEX_ATOMIC_COUNTERS = 0x92d2;
export const MAX_TESS_CONTROL_ATOMIC_COUNTERS = 0x92d3;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTERS = 0x92d4;
export const MAX_GEOMETRY_ATOMIC_COUNTERS = 0x92d5;
export const MAX_FRAGMENT_ATOMIC_COUNTERS = 0x92d6;
export const MAX_COMBINED_ATOMIC_COUNTERS = 0x92d7;
export const MAX_ATOMIC_COUNTER_BUFFER_SIZE = 0x92d8;
export const MAX_ATOMIC_COUNTER_BUFFER_BINDINGS = 0x92dc;
export const ACTIVE_ATOMIC_COUNTER_BUFFERS = 0x92d9;
export const UNIFORM_ATOMIC_COUNTER_BUFFER_INDEX = 0x92da;
export const UNSIGNED_INT_ATOMIC_COUNTER = 0x92db;

/// Commands

export const def_glGetActiveAtomicCounterBufferiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveAtomicCounterBufferiv!: Deno.UnsafeFnPointer<typeof def_glGetActiveAtomicCounterBufferiv>;

export function GetActiveAtomicCounterBufferiv(
  program: GLuint,
  bufferIndex: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetActiveAtomicCounterBufferiv.call(
    program,
    bufferIndex,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetActiveAtomicCounterBufferiv = new Deno.UnsafeFnPointer(proc("glGetActiveAtomicCounterBufferiv")!, def_glGetActiveAtomicCounterBufferiv);
}
