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
export const GEOMETRY_SHADER_OES = 0x8dd9;
export const GEOMETRY_SHADER_BIT_OES = 0x4;
export const GEOMETRY_LINKED_VERTICES_OUT_OES = 0x8916;
export const GEOMETRY_LINKED_INPUT_TYPE_OES = 0x8917;
export const GEOMETRY_LINKED_OUTPUT_TYPE_OES = 0x8918;
export const GEOMETRY_SHADER_INVOCATIONS_OES = 0x887f;
export const LAYER_PROVOKING_VERTEX_OES = 0x825e;
export const LINES_ADJACENCY_OES = 0xa;
export const LINE_STRIP_ADJACENCY_OES = 0xb;
export const TRIANGLES_ADJACENCY_OES = 0xc;
export const TRIANGLE_STRIP_ADJACENCY_OES = 0xd;
export const MAX_GEOMETRY_UNIFORM_COMPONENTS_OES = 0x8ddf;
export const MAX_GEOMETRY_UNIFORM_BLOCKS_OES = 0x8a2c;
export const MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS_OES = 0x8a32;
export const MAX_GEOMETRY_INPUT_COMPONENTS_OES = 0x9123;
export const MAX_GEOMETRY_OUTPUT_COMPONENTS_OES = 0x9124;
export const MAX_GEOMETRY_OUTPUT_VERTICES_OES = 0x8de0;
export const MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_OES = 0x8de1;
export const MAX_GEOMETRY_SHADER_INVOCATIONS_OES = 0x8e5a;
export const MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_OES = 0x8c29;
export const MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS_OES = 0x92cf;
export const MAX_GEOMETRY_ATOMIC_COUNTERS_OES = 0x92d5;
export const MAX_GEOMETRY_IMAGE_UNIFORMS_OES = 0x90cd;
export const MAX_GEOMETRY_SHADER_STORAGE_BLOCKS_OES = 0x90d7;
export const FIRST_VERTEX_CONVENTION_OES = 0x8e4d;
export const LAST_VERTEX_CONVENTION_OES = 0x8e4e;
export const UNDEFINED_VERTEX_OES = 0x8260;
export const PRIMITIVES_GENERATED_OES = 0x8c87;
export const FRAMEBUFFER_DEFAULT_LAYERS_OES = 0x9312;
export const MAX_FRAMEBUFFER_LAYERS_OES = 0x9317;
export const FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_OES = 0x8da8;
export const FRAMEBUFFER_ATTACHMENT_LAYERED_OES = 0x8da7;
export const REFERENCED_BY_GEOMETRY_SHADER_OES = 0x9309;

/// Commands

export const def_glFramebufferTextureOES = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureOES!: Deno.UnsafeFnPointer<typeof def_glFramebufferTextureOES>;

export function FramebufferTextureOES(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTextureOES.call(
    target,
    attachment,
    texture,
    level,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFramebufferTextureOES = new Deno.UnsafeFnPointer(proc("glFramebufferTextureOES"), def_glFramebufferTextureOES);
}
