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
export const PREFER_DOUBLEBUFFER_HINT_PGI = 0x1a1f8;
export const CONSERVE_MEMORY_HINT_PGI = 0x1a1fd;
export const RECLAIM_MEMORY_HINT_PGI = 0x1a1fe;
export const NATIVE_GRAPHICS_HANDLE_PGI = 0x1a202;
export const NATIVE_GRAPHICS_BEGIN_HINT_PGI = 0x1a203;
export const NATIVE_GRAPHICS_END_HINT_PGI = 0x1a204;
export const ALWAYS_FAST_HINT_PGI = 0x1a20c;
export const ALWAYS_SOFT_HINT_PGI = 0x1a20d;
export const ALLOW_DRAW_OBJ_HINT_PGI = 0x1a20e;
export const ALLOW_DRAW_WIN_HINT_PGI = 0x1a20f;
export const ALLOW_DRAW_FRG_HINT_PGI = 0x1a210;
export const ALLOW_DRAW_MEM_HINT_PGI = 0x1a211;
export const STRICT_DEPTHFUNC_HINT_PGI = 0x1a216;
export const STRICT_LIGHTING_HINT_PGI = 0x1a217;
export const STRICT_SCISSOR_HINT_PGI = 0x1a218;
export const FULL_STIPPLE_HINT_PGI = 0x1a219;
export const CLIP_NEAR_HINT_PGI = 0x1a220;
export const CLIP_FAR_HINT_PGI = 0x1a221;
export const WIDE_LINE_HINT_PGI = 0x1a222;
export const BACK_NORMALS_HINT_PGI = 0x1a223;

/// Commands

export const def_glHintPGI = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glHintPGI!: Deno.UnsafeFnPointer<typeof def_glHintPGI>;

export function HintPGI(
  target: GLenum,
  mode: GLint,
): void {
  fn_glHintPGI.call(
    target,
    mode,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glHintPGI = new Deno.UnsafeFnPointer(proc("glHintPGI"), def_glHintPGI);
}
