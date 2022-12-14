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
export const PATCHES = 0xe;
export const PATCH_VERTICES = 0x8e72;
export const PATCH_DEFAULT_INNER_LEVEL = 0x8e73;
export const PATCH_DEFAULT_OUTER_LEVEL = 0x8e74;
export const TESS_CONTROL_OUTPUT_VERTICES = 0x8e75;
export const TESS_GEN_MODE = 0x8e76;
export const TESS_GEN_SPACING = 0x8e77;
export const TESS_GEN_VERTEX_ORDER = 0x8e78;
export const TESS_GEN_POINT_MODE = 0x8e79;
export const TRIANGLES = 0x4;
export const ISOLINES = 0x8e7a;
export const QUADS = 0x7;
export const EQUAL = 0x202;
export const FRACTIONAL_ODD = 0x8e7b;
export const FRACTIONAL_EVEN = 0x8e7c;
export const CCW = 0x901;
export const CW = 0x900;
export const MAX_PATCH_VERTICES = 0x8e7d;
export const MAX_TESS_GEN_LEVEL = 0x8e7e;
export const MAX_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e7f;
export const MAX_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e80;
export const MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS = 0x8e81;
export const MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS = 0x8e82;
export const MAX_TESS_CONTROL_OUTPUT_COMPONENTS = 0x8e83;
export const MAX_TESS_PATCH_COMPONENTS = 0x8e84;
export const MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS = 0x8e85;
export const MAX_TESS_EVALUATION_OUTPUT_COMPONENTS = 0x8e86;
export const MAX_TESS_CONTROL_UNIFORM_BLOCKS = 0x8e89;
export const MAX_TESS_EVALUATION_UNIFORM_BLOCKS = 0x8e8a;
export const MAX_TESS_CONTROL_INPUT_COMPONENTS = 0x886c;
export const MAX_TESS_EVALUATION_INPUT_COMPONENTS = 0x886d;
export const MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS = 0x8e1e;
export const MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS = 0x8e1f;
export const UNIFORM_BLOCK_REFERENCED_BY_TESS_CONTROL_SHADER = 0x84f0;
export const UNIFORM_BLOCK_REFERENCED_BY_TESS_EVALUATION_SHADER = 0x84f1;
export const TESS_EVALUATION_SHADER = 0x8e87;
export const TESS_CONTROL_SHADER = 0x8e88;

/// Commands

export const def_glPatchParameteri = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPatchParameteri!: Deno.UnsafeFnPointer<typeof def_glPatchParameteri>;

export function PatchParameteri(
  pname: GLenum,
  value: GLint,
): void {
  fn_glPatchParameteri.call(
    pname,
    value,
  );
}

export const def_glPatchParameterfv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPatchParameterfv!: Deno.UnsafeFnPointer<typeof def_glPatchParameterfv>;

export function PatchParameterfv(
  pname: GLenum,
  values: Buffer,
): void {
  fn_glPatchParameterfv.call(
    pname,
    bufferToFFI(values),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glPatchParameteri = new Deno.UnsafeFnPointer(proc("glPatchParameteri"), def_glPatchParameteri);
  fn_glPatchParameterfv = new Deno.UnsafeFnPointer(proc("glPatchParameterfv"), def_glPatchParameterfv);
}
