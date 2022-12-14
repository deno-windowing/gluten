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
export const MESH_SHADER_NV = 0x9559;
export const TASK_SHADER_NV = 0x955a;
export const MAX_MESH_UNIFORM_BLOCKS_NV = 0x8e60;
export const MAX_MESH_TEXTURE_IMAGE_UNITS_NV = 0x8e61;
export const MAX_MESH_IMAGE_UNIFORMS_NV = 0x8e62;
export const MAX_MESH_UNIFORM_COMPONENTS_NV = 0x8e63;
export const MAX_MESH_ATOMIC_COUNTER_BUFFERS_NV = 0x8e64;
export const MAX_MESH_ATOMIC_COUNTERS_NV = 0x8e65;
export const MAX_MESH_SHADER_STORAGE_BLOCKS_NV = 0x8e66;
export const MAX_COMBINED_MESH_UNIFORM_COMPONENTS_NV = 0x8e67;
export const MAX_TASK_UNIFORM_BLOCKS_NV = 0x8e68;
export const MAX_TASK_TEXTURE_IMAGE_UNITS_NV = 0x8e69;
export const MAX_TASK_IMAGE_UNIFORMS_NV = 0x8e6a;
export const MAX_TASK_UNIFORM_COMPONENTS_NV = 0x8e6b;
export const MAX_TASK_ATOMIC_COUNTER_BUFFERS_NV = 0x8e6c;
export const MAX_TASK_ATOMIC_COUNTERS_NV = 0x8e6d;
export const MAX_TASK_SHADER_STORAGE_BLOCKS_NV = 0x8e6e;
export const MAX_COMBINED_TASK_UNIFORM_COMPONENTS_NV = 0x8e6f;
export const MAX_MESH_WORK_GROUP_INVOCATIONS_NV = 0x95a2;
export const MAX_TASK_WORK_GROUP_INVOCATIONS_NV = 0x95a3;
export const MAX_MESH_TOTAL_MEMORY_SIZE_NV = 0x9536;
export const MAX_TASK_TOTAL_MEMORY_SIZE_NV = 0x9537;
export const MAX_MESH_OUTPUT_VERTICES_NV = 0x9538;
export const MAX_MESH_OUTPUT_PRIMITIVES_NV = 0x9539;
export const MAX_TASK_OUTPUT_COUNT_NV = 0x953a;
export const MAX_DRAW_MESH_TASKS_COUNT_NV = 0x953d;
export const MAX_MESH_VIEWS_NV = 0x9557;
export const MESH_OUTPUT_PER_VERTEX_GRANULARITY_NV = 0x92df;
export const MESH_OUTPUT_PER_PRIMITIVE_GRANULARITY_NV = 0x9543;
export const MAX_MESH_WORK_GROUP_SIZE_NV = 0x953b;
export const MAX_TASK_WORK_GROUP_SIZE_NV = 0x953c;
export const MESH_WORK_GROUP_SIZE_NV = 0x953e;
export const TASK_WORK_GROUP_SIZE_NV = 0x953f;
export const MESH_VERTICES_OUT_NV = 0x9579;
export const MESH_PRIMITIVES_OUT_NV = 0x957a;
export const MESH_OUTPUT_TYPE_NV = 0x957b;
export const UNIFORM_BLOCK_REFERENCED_BY_MESH_SHADER_NV = 0x959c;
export const UNIFORM_BLOCK_REFERENCED_BY_TASK_SHADER_NV = 0x959d;
export const REFERENCED_BY_MESH_SHADER_NV = 0x95a0;
export const REFERENCED_BY_TASK_SHADER_NV = 0x95a1;
export const MESH_SHADER_BIT_NV = 0x40;
export const TASK_SHADER_BIT_NV = 0x80;
export const MESH_SUBROUTINE_NV = 0x957c;
export const TASK_SUBROUTINE_NV = 0x957d;
export const MESH_SUBROUTINE_UNIFORM_NV = 0x957e;
export const TASK_SUBROUTINE_UNIFORM_NV = 0x957f;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_MESH_SHADER_NV = 0x959e;
export const ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TASK_SHADER_NV = 0x959f;

/// Commands

export const def_glDrawMeshTasksNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glDrawMeshTasksNV!: Deno.UnsafeFnPointer<typeof def_glDrawMeshTasksNV>;

export function DrawMeshTasksNV(
  first: GLuint,
  count: GLuint,
): void {
  fn_glDrawMeshTasksNV.call(
    first,
    count,
  );
}

export const def_glDrawMeshTasksIndirectNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glDrawMeshTasksIndirectNV!: Deno.UnsafeFnPointer<typeof def_glDrawMeshTasksIndirectNV>;

export function DrawMeshTasksIndirectNV(
  indirect: GLintptr,
): void {
  fn_glDrawMeshTasksIndirectNV.call(
    bufferToFFI(indirect),
  );
}

export const def_glMultiDrawMeshTasksIndirectNV = {
  parameters: ["buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawMeshTasksIndirectNV!: Deno.UnsafeFnPointer<typeof def_glMultiDrawMeshTasksIndirectNV>;

export function MultiDrawMeshTasksIndirectNV(
  indirect: GLintptr,
  drawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawMeshTasksIndirectNV.call(
    bufferToFFI(indirect),
    drawcount,
    stride,
  );
}

export const def_glMultiDrawMeshTasksIndirectCountNV = {
  parameters: ["buffer", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawMeshTasksIndirectCountNV!: Deno.UnsafeFnPointer<typeof def_glMultiDrawMeshTasksIndirectCountNV>;

export function MultiDrawMeshTasksIndirectCountNV(
  indirect: GLintptr,
  drawcount: GLintptr,
  maxdrawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawMeshTasksIndirectCountNV.call(
    bufferToFFI(indirect),
    bufferToFFI(drawcount),
    maxdrawcount,
    stride,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawMeshTasksNV = new Deno.UnsafeFnPointer(proc("glDrawMeshTasksNV"), def_glDrawMeshTasksNV);
  fn_glDrawMeshTasksIndirectNV = new Deno.UnsafeFnPointer(proc("glDrawMeshTasksIndirectNV"), def_glDrawMeshTasksIndirectNV);
  fn_glMultiDrawMeshTasksIndirectNV = new Deno.UnsafeFnPointer(proc("glMultiDrawMeshTasksIndirectNV"), def_glMultiDrawMeshTasksIndirectNV);
  fn_glMultiDrawMeshTasksIndirectCountNV = new Deno.UnsafeFnPointer(proc("glMultiDrawMeshTasksIndirectCountNV"), def_glMultiDrawMeshTasksIndirectCountNV);
}
