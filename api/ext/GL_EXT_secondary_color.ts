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
export const COLOR_SUM_EXT = 0x8458;
export const CURRENT_SECONDARY_COLOR_EXT = 0x8459;
export const SECONDARY_COLOR_ARRAY_SIZE_EXT = 0x845a;
export const SECONDARY_COLOR_ARRAY_TYPE_EXT = 0x845b;
export const SECONDARY_COLOR_ARRAY_STRIDE_EXT = 0x845c;
export const SECONDARY_COLOR_ARRAY_POINTER_EXT = 0x845d;
export const SECONDARY_COLOR_ARRAY_EXT = 0x845e;

/// Commands

export const def_glSecondaryColor3bEXT = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glSecondaryColor3bEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3bEXT>;

export function SecondaryColor3bEXT(
  red: GLbyte,
  green: GLbyte,
  blue: GLbyte,
): void {
  fn_glSecondaryColor3bEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3bvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3bvEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3bvEXT>;

export function SecondaryColor3bvEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3bvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3dEXT = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glSecondaryColor3dEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3dEXT>;

export function SecondaryColor3dEXT(
  red: GLdouble,
  green: GLdouble,
  blue: GLdouble,
): void {
  fn_glSecondaryColor3dEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3dvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3dvEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3dvEXT>;

export function SecondaryColor3dvEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3dvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3fEXT = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glSecondaryColor3fEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3fEXT>;

export function SecondaryColor3fEXT(
  red: GLfloat,
  green: GLfloat,
  blue: GLfloat,
): void {
  fn_glSecondaryColor3fEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3fvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3fvEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3fvEXT>;

export function SecondaryColor3fvEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3fvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3iEXT = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glSecondaryColor3iEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3iEXT>;

export function SecondaryColor3iEXT(
  red: GLint,
  green: GLint,
  blue: GLint,
): void {
  fn_glSecondaryColor3iEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3ivEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3ivEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3ivEXT>;

export function SecondaryColor3ivEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3ivEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3sEXT = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glSecondaryColor3sEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3sEXT>;

export function SecondaryColor3sEXT(
  red: GLshort,
  green: GLshort,
  blue: GLshort,
): void {
  fn_glSecondaryColor3sEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3svEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3svEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3svEXT>;

export function SecondaryColor3svEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3svEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3ubEXT = {
  parameters: ["u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glSecondaryColor3ubEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3ubEXT>;

export function SecondaryColor3ubEXT(
  red: GLubyte,
  green: GLubyte,
  blue: GLubyte,
): void {
  fn_glSecondaryColor3ubEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3ubvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3ubvEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3ubvEXT>;

export function SecondaryColor3ubvEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3ubvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3uiEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glSecondaryColor3uiEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3uiEXT>;

export function SecondaryColor3uiEXT(
  red: GLuint,
  green: GLuint,
  blue: GLuint,
): void {
  fn_glSecondaryColor3uiEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3uivEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3uivEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3uivEXT>;

export function SecondaryColor3uivEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3uivEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColor3usEXT = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glSecondaryColor3usEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3usEXT>;

export function SecondaryColor3usEXT(
  red: GLushort,
  green: GLushort,
  blue: GLushort,
): void {
  fn_glSecondaryColor3usEXT.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3usvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3usvEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColor3usvEXT>;

export function SecondaryColor3usvEXT(
  v: Buffer,
): void {
  fn_glSecondaryColor3usvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glSecondaryColorPointerEXT = {
  parameters: ["i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glSecondaryColorPointerEXT!: Deno.UnsafeFnPointer<typeof def_glSecondaryColorPointerEXT>;

export function SecondaryColorPointerEXT(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glSecondaryColorPointerEXT.call(
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glSecondaryColor3bEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3bEXT"), def_glSecondaryColor3bEXT);
  fn_glSecondaryColor3bvEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3bvEXT"), def_glSecondaryColor3bvEXT);
  fn_glSecondaryColor3dEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3dEXT"), def_glSecondaryColor3dEXT);
  fn_glSecondaryColor3dvEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3dvEXT"), def_glSecondaryColor3dvEXT);
  fn_glSecondaryColor3fEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3fEXT"), def_glSecondaryColor3fEXT);
  fn_glSecondaryColor3fvEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3fvEXT"), def_glSecondaryColor3fvEXT);
  fn_glSecondaryColor3iEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3iEXT"), def_glSecondaryColor3iEXT);
  fn_glSecondaryColor3ivEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3ivEXT"), def_glSecondaryColor3ivEXT);
  fn_glSecondaryColor3sEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3sEXT"), def_glSecondaryColor3sEXT);
  fn_glSecondaryColor3svEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3svEXT"), def_glSecondaryColor3svEXT);
  fn_glSecondaryColor3ubEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3ubEXT"), def_glSecondaryColor3ubEXT);
  fn_glSecondaryColor3ubvEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3ubvEXT"), def_glSecondaryColor3ubvEXT);
  fn_glSecondaryColor3uiEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3uiEXT"), def_glSecondaryColor3uiEXT);
  fn_glSecondaryColor3uivEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3uivEXT"), def_glSecondaryColor3uivEXT);
  fn_glSecondaryColor3usEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3usEXT"), def_glSecondaryColor3usEXT);
  fn_glSecondaryColor3usvEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColor3usvEXT"), def_glSecondaryColor3usvEXT);
  fn_glSecondaryColorPointerEXT = new Deno.UnsafeFnPointer(proc("glSecondaryColorPointerEXT"), def_glSecondaryColorPointerEXT);
}
