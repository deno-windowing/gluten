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
export const RESTART_SUN = 0x1;
export const REPLACE_MIDDLE_SUN = 0x2;
export const REPLACE_OLDEST_SUN = 0x3;
export const TRIANGLE_LIST_SUN = 0x81d7;
export const REPLACEMENT_CODE_SUN = 0x81d8;
export const REPLACEMENT_CODE_ARRAY_SUN = 0x85c0;
export const REPLACEMENT_CODE_ARRAY_TYPE_SUN = 0x85c1;
export const REPLACEMENT_CODE_ARRAY_STRIDE_SUN = 0x85c2;
export const REPLACEMENT_CODE_ARRAY_POINTER_SUN = 0x85c3;
export const R1UI_V3F_SUN = 0x85c4;
export const R1UI_C4UB_V3F_SUN = 0x85c5;
export const R1UI_C3F_V3F_SUN = 0x85c6;
export const R1UI_N3F_V3F_SUN = 0x85c7;
export const R1UI_C4F_N3F_V3F_SUN = 0x85c8;
export const R1UI_T2F_V3F_SUN = 0x85c9;
export const R1UI_T2F_N3F_V3F_SUN = 0x85ca;
export const R1UI_T2F_C4F_N3F_V3F_SUN = 0x85cb;

/// Commands

export const def_glReplacementCodeuiSUN = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiSUN>;

export function ReplacementCodeuiSUN(
  code: GLuint,
): void {
  fn_glReplacementCodeuiSUN.call(
    code,
  );
}

export const def_glReplacementCodeusSUN = {
  parameters: ["u16"],
  result: "void",
} as const;

let fn_glReplacementCodeusSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeusSUN>;

export function ReplacementCodeusSUN(
  code: GLushort,
): void {
  fn_glReplacementCodeusSUN.call(
    code,
  );
}

export const def_glReplacementCodeubSUN = {
  parameters: ["u8"],
  result: "void",
} as const;

let fn_glReplacementCodeubSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeubSUN>;

export function ReplacementCodeubSUN(
  code: GLubyte,
): void {
  fn_glReplacementCodeubSUN.call(
    code,
  );
}

export const def_glReplacementCodeuivSUN = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuivSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuivSUN>;

export function ReplacementCodeuivSUN(
  code: Buffer,
): void {
  fn_glReplacementCodeuivSUN.call(
    bufferToFFI(code),
  );
}

export const def_glReplacementCodeusvSUN = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeusvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeusvSUN>;

export function ReplacementCodeusvSUN(
  code: Buffer,
): void {
  fn_glReplacementCodeusvSUN.call(
    bufferToFFI(code),
  );
}

export const def_glReplacementCodeubvSUN = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeubvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeubvSUN>;

export function ReplacementCodeubvSUN(
  code: Buffer,
): void {
  fn_glReplacementCodeubvSUN.call(
    bufferToFFI(code),
  );
}

export const def_glReplacementCodePointerSUN = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodePointerSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodePointerSUN>;

export function ReplacementCodePointerSUN(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glReplacementCodePointerSUN.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glReplacementCodeuiSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiSUN"), def_glReplacementCodeuiSUN);
  fn_glReplacementCodeusSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeusSUN"), def_glReplacementCodeusSUN);
  fn_glReplacementCodeubSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeubSUN"), def_glReplacementCodeubSUN);
  fn_glReplacementCodeuivSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuivSUN"), def_glReplacementCodeuivSUN);
  fn_glReplacementCodeusvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeusvSUN"), def_glReplacementCodeusvSUN);
  fn_glReplacementCodeubvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeubvSUN"), def_glReplacementCodeubvSUN);
  fn_glReplacementCodePointerSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodePointerSUN"), def_glReplacementCodePointerSUN);
}
