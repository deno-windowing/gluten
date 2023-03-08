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
export const PATCHES_EXT = 0xe;
export const PATCH_VERTICES_EXT = 0x8e72;
export const TESS_CONTROL_OUTPUT_VERTICES_EXT = 0x8e75;
export const TESS_GEN_MODE_EXT = 0x8e76;
export const TESS_GEN_SPACING_EXT = 0x8e77;
export const TESS_GEN_VERTEX_ORDER_EXT = 0x8e78;
export const TESS_GEN_POINT_MODE_EXT = 0x8e79;
export const TRIANGLES = 0x4;
export const ISOLINES_EXT = 0x8e7a;
export const QUADS_EXT = 0x7;
export const EQUAL = 0x202;
export const FRACTIONAL_ODD_EXT = 0x8e7b;
export const FRACTIONAL_EVEN_EXT = 0x8e7c;
export const CCW = 0x901;
export const CW = 0x900;
export const MAX_PATCH_VERTICES_EXT = 0x8e7d;
export const MAX_TESS_GEN_LEVEL_EXT = 0x8e7e;
export const MAX_TESS_CONTROL_UNIFORM_COMPONENTS_EXT = 0x8e7f;
export const MAX_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT = 0x8e80;
export const MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS_EXT = 0x8e81;
export const MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS_EXT = 0x8e82;
export const MAX_TESS_CONTROL_OUTPUT_COMPONENTS_EXT = 0x8e83;
export const MAX_TESS_PATCH_COMPONENTS_EXT = 0x8e84;
export const MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS_EXT = 0x8e85;
export const MAX_TESS_EVALUATION_OUTPUT_COMPONENTS_EXT = 0x8e86;
export const MAX_TESS_CONTROL_UNIFORM_BLOCKS_EXT = 0x8e89;
export const MAX_TESS_EVALUATION_UNIFORM_BLOCKS_EXT = 0x8e8a;
export const MAX_TESS_CONTROL_INPUT_COMPONENTS_EXT = 0x886c;
export const MAX_TESS_EVALUATION_INPUT_COMPONENTS_EXT = 0x886d;
export const MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS_EXT = 0x8e1e;
export const MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT = 0x8e1f;
export const MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS_EXT = 0x92cd;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS_EXT = 0x92ce;
export const MAX_TESS_CONTROL_ATOMIC_COUNTERS_EXT = 0x92d3;
export const MAX_TESS_EVALUATION_ATOMIC_COUNTERS_EXT = 0x92d4;
export const MAX_TESS_CONTROL_IMAGE_UNIFORMS_EXT = 0x90cb;
export const MAX_TESS_EVALUATION_IMAGE_UNIFORMS_EXT = 0x90cc;
export const MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS_EXT = 0x90d8;
export const MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS_EXT = 0x90d9;
export const PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED = 0x8221;
export const IS_PER_PATCH_EXT = 0x92e7;
export const REFERENCED_BY_TESS_CONTROL_SHADER_EXT = 0x9307;
export const REFERENCED_BY_TESS_EVALUATION_SHADER_EXT = 0x9308;
export const TESS_CONTROL_SHADER_EXT = 0x8e88;
export const TESS_EVALUATION_SHADER_EXT = 0x8e87;
export const TESS_CONTROL_SHADER_BIT_EXT = 0x8;
export const TESS_EVALUATION_SHADER_BIT_EXT = 0x10;

/// Commands

export const def_glPatchParameteriEXT = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPatchParameteriEXT!: Deno.UnsafeFnPointer<
  typeof def_glPatchParameteriEXT
>;

export function PatchParameteriEXT(
  pname: GLenum,
  value: GLint,
): void {
  fn_glPatchParameteriEXT.call(
    pname,
    value,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPatchParameteriEXT = new Deno.UnsafeFnPointer(
    proc("glPatchParameteriEXT")!,
    def_glPatchParameteriEXT,
  );
}
