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
export const GEOMETRY_SHADER_EXT = 0x8dd9;
export const GEOMETRY_VERTICES_OUT_EXT = 0x8dda;
export const GEOMETRY_INPUT_TYPE_EXT = 0x8ddb;
export const GEOMETRY_OUTPUT_TYPE_EXT = 0x8ddc;
export const MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_EXT = 0x8c29;
export const MAX_GEOMETRY_VARYING_COMPONENTS_EXT = 0x8ddd;
export const MAX_VERTEX_VARYING_COMPONENTS_EXT = 0x8dde;
export const MAX_VARYING_COMPONENTS_EXT = 0x8b4b;
export const MAX_GEOMETRY_UNIFORM_COMPONENTS_EXT = 0x8ddf;
export const MAX_GEOMETRY_OUTPUT_VERTICES_EXT = 0x8de0;
export const MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_EXT = 0x8de1;
export const LINES_ADJACENCY_EXT = 0xa;
export const LINE_STRIP_ADJACENCY_EXT = 0xb;
export const TRIANGLES_ADJACENCY_EXT = 0xc;
export const TRIANGLE_STRIP_ADJACENCY_EXT = 0xd;
export const FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_EXT = 0x8da8;
export const FRAMEBUFFER_INCOMPLETE_LAYER_COUNT_EXT = 0x8da9;
export const FRAMEBUFFER_ATTACHMENT_LAYERED_EXT = 0x8da7;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER_EXT = 0x8cd4;
export const PROGRAM_POINT_SIZE_EXT = 0x8642;

/// Commands

export const def_glProgramParameteriEXT = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glProgramParameteriEXT!: Deno.UnsafeFnPointer<typeof def_glProgramParameteriEXT>;

export function ProgramParameteriEXT(
  program: GLuint,
  pname: GLenum,
  value: GLint,
): void {
  fn_glProgramParameteriEXT.call(
    program,
    pname,
    value,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramParameteriEXT = new Deno.UnsafeFnPointer(proc("glProgramParameteriEXT")!, def_glProgramParameteriEXT);
}
