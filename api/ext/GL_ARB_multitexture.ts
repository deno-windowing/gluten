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
export const TEXTURE0_ARB = 0x84c0;
export const TEXTURE1_ARB = 0x84c1;
export const TEXTURE2_ARB = 0x84c2;
export const TEXTURE3_ARB = 0x84c3;
export const TEXTURE4_ARB = 0x84c4;
export const TEXTURE5_ARB = 0x84c5;
export const TEXTURE6_ARB = 0x84c6;
export const TEXTURE7_ARB = 0x84c7;
export const TEXTURE8_ARB = 0x84c8;
export const TEXTURE9_ARB = 0x84c9;
export const TEXTURE10_ARB = 0x84ca;
export const TEXTURE11_ARB = 0x84cb;
export const TEXTURE12_ARB = 0x84cc;
export const TEXTURE13_ARB = 0x84cd;
export const TEXTURE14_ARB = 0x84ce;
export const TEXTURE15_ARB = 0x84cf;
export const TEXTURE16_ARB = 0x84d0;
export const TEXTURE17_ARB = 0x84d1;
export const TEXTURE18_ARB = 0x84d2;
export const TEXTURE19_ARB = 0x84d3;
export const TEXTURE20_ARB = 0x84d4;
export const TEXTURE21_ARB = 0x84d5;
export const TEXTURE22_ARB = 0x84d6;
export const TEXTURE23_ARB = 0x84d7;
export const TEXTURE24_ARB = 0x84d8;
export const TEXTURE25_ARB = 0x84d9;
export const TEXTURE26_ARB = 0x84da;
export const TEXTURE27_ARB = 0x84db;
export const TEXTURE28_ARB = 0x84dc;
export const TEXTURE29_ARB = 0x84dd;
export const TEXTURE30_ARB = 0x84de;
export const TEXTURE31_ARB = 0x84df;
export const ACTIVE_TEXTURE_ARB = 0x84e0;
export const CLIENT_ACTIVE_TEXTURE_ARB = 0x84e1;
export const MAX_TEXTURE_UNITS_ARB = 0x84e2;

/// Commands

export const def_glActiveTextureARB = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glActiveTextureARB!: Deno.UnsafeFnPointer<typeof def_glActiveTextureARB>;

export function ActiveTextureARB(
  texture: GLenum,
): void {
  fn_glActiveTextureARB.call(
    texture,
  );
}

export const def_glClientActiveTextureARB = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glClientActiveTextureARB!: Deno.UnsafeFnPointer<typeof def_glClientActiveTextureARB>;

export function ClientActiveTextureARB(
  texture: GLenum,
): void {
  fn_glClientActiveTextureARB.call(
    texture,
  );
}

export const def_glMultiTexCoord1dARB = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord1dARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1dARB>;

export function MultiTexCoord1dARB(
  target: GLenum,
  s: GLdouble,
): void {
  fn_glMultiTexCoord1dARB.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1dvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1dvARB>;

export function MultiTexCoord1dvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1dvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1fARB = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord1fARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1fARB>;

export function MultiTexCoord1fARB(
  target: GLenum,
  s: GLfloat,
): void {
  fn_glMultiTexCoord1fARB.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1fvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1fvARB>;

export function MultiTexCoord1fvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1fvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1iARB = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord1iARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1iARB>;

export function MultiTexCoord1iARB(
  target: GLenum,
  s: GLint,
): void {
  fn_glMultiTexCoord1iARB.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1ivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1ivARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1ivARB>;

export function MultiTexCoord1ivARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1ivARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1sARB = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord1sARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1sARB>;

export function MultiTexCoord1sARB(
  target: GLenum,
  s: GLshort,
): void {
  fn_glMultiTexCoord1sARB.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1svARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1svARB>;

export function MultiTexCoord1svARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1svARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2dARB = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord2dARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2dARB>;

export function MultiTexCoord2dARB(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
): void {
  fn_glMultiTexCoord2dARB.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2dvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2dvARB>;

export function MultiTexCoord2dvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2dvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2fARB = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord2fARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2fARB>;

export function MultiTexCoord2fARB(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
): void {
  fn_glMultiTexCoord2fARB.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2fvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2fvARB>;

export function MultiTexCoord2fvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2fvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2iARB = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord2iARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2iARB>;

export function MultiTexCoord2iARB(
  target: GLenum,
  s: GLint,
  t: GLint,
): void {
  fn_glMultiTexCoord2iARB.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2ivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2ivARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2ivARB>;

export function MultiTexCoord2ivARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2ivARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2sARB = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord2sARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2sARB>;

export function MultiTexCoord2sARB(
  target: GLenum,
  s: GLshort,
  t: GLshort,
): void {
  fn_glMultiTexCoord2sARB.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2svARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2svARB>;

export function MultiTexCoord2svARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2svARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3dARB = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord3dARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3dARB>;

export function MultiTexCoord3dARB(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
): void {
  fn_glMultiTexCoord3dARB.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3dvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3dvARB>;

export function MultiTexCoord3dvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3dvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3fARB = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord3fARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3fARB>;

export function MultiTexCoord3fARB(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
): void {
  fn_glMultiTexCoord3fARB.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3fvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3fvARB>;

export function MultiTexCoord3fvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3fvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3iARB = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord3iARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3iARB>;

export function MultiTexCoord3iARB(
  target: GLenum,
  s: GLint,
  t: GLint,
  r: GLint,
): void {
  fn_glMultiTexCoord3iARB.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3ivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3ivARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3ivARB>;

export function MultiTexCoord3ivARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3ivARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3sARB = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord3sARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3sARB>;

export function MultiTexCoord3sARB(
  target: GLenum,
  s: GLshort,
  t: GLshort,
  r: GLshort,
): void {
  fn_glMultiTexCoord3sARB.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3svARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3svARB>;

export function MultiTexCoord3svARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3svARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4dARB = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glMultiTexCoord4dARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4dARB>;

export function MultiTexCoord4dARB(
  target: GLenum,
  s: GLdouble,
  t: GLdouble,
  r: GLdouble,
  q: GLdouble,
): void {
  fn_glMultiTexCoord4dARB.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4dvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4dvARB>;

export function MultiTexCoord4dvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4dvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4fARB = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4fARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4fARB>;

export function MultiTexCoord4fARB(
  target: GLenum,
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  q: GLfloat,
): void {
  fn_glMultiTexCoord4fARB.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4fvARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4fvARB>;

export function MultiTexCoord4fvARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4fvARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4iARB = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4iARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4iARB>;

export function MultiTexCoord4iARB(
  target: GLenum,
  s: GLint,
  t: GLint,
  r: GLint,
  q: GLint,
): void {
  fn_glMultiTexCoord4iARB.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4ivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4ivARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4ivARB>;

export function MultiTexCoord4ivARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4ivARB.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4sARB = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glMultiTexCoord4sARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4sARB>;

export function MultiTexCoord4sARB(
  target: GLenum,
  s: GLshort,
  t: GLshort,
  r: GLshort,
  q: GLshort,
): void {
  fn_glMultiTexCoord4sARB.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4svARB!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4svARB>;

export function MultiTexCoord4svARB(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4svARB.call(
    target,
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glActiveTextureARB = new Deno.UnsafeFnPointer(proc("glActiveTextureARB")!, def_glActiveTextureARB);
  fn_glClientActiveTextureARB = new Deno.UnsafeFnPointer(proc("glClientActiveTextureARB")!, def_glClientActiveTextureARB);
  fn_glMultiTexCoord1dARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1dARB")!, def_glMultiTexCoord1dARB);
  fn_glMultiTexCoord1dvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1dvARB")!, def_glMultiTexCoord1dvARB);
  fn_glMultiTexCoord1fARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1fARB")!, def_glMultiTexCoord1fARB);
  fn_glMultiTexCoord1fvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1fvARB")!, def_glMultiTexCoord1fvARB);
  fn_glMultiTexCoord1iARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1iARB")!, def_glMultiTexCoord1iARB);
  fn_glMultiTexCoord1ivARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1ivARB")!, def_glMultiTexCoord1ivARB);
  fn_glMultiTexCoord1sARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1sARB")!, def_glMultiTexCoord1sARB);
  fn_glMultiTexCoord1svARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1svARB")!, def_glMultiTexCoord1svARB);
  fn_glMultiTexCoord2dARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2dARB")!, def_glMultiTexCoord2dARB);
  fn_glMultiTexCoord2dvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2dvARB")!, def_glMultiTexCoord2dvARB);
  fn_glMultiTexCoord2fARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2fARB")!, def_glMultiTexCoord2fARB);
  fn_glMultiTexCoord2fvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2fvARB")!, def_glMultiTexCoord2fvARB);
  fn_glMultiTexCoord2iARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2iARB")!, def_glMultiTexCoord2iARB);
  fn_glMultiTexCoord2ivARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2ivARB")!, def_glMultiTexCoord2ivARB);
  fn_glMultiTexCoord2sARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2sARB")!, def_glMultiTexCoord2sARB);
  fn_glMultiTexCoord2svARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2svARB")!, def_glMultiTexCoord2svARB);
  fn_glMultiTexCoord3dARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3dARB")!, def_glMultiTexCoord3dARB);
  fn_glMultiTexCoord3dvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3dvARB")!, def_glMultiTexCoord3dvARB);
  fn_glMultiTexCoord3fARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3fARB")!, def_glMultiTexCoord3fARB);
  fn_glMultiTexCoord3fvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3fvARB")!, def_glMultiTexCoord3fvARB);
  fn_glMultiTexCoord3iARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3iARB")!, def_glMultiTexCoord3iARB);
  fn_glMultiTexCoord3ivARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3ivARB")!, def_glMultiTexCoord3ivARB);
  fn_glMultiTexCoord3sARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3sARB")!, def_glMultiTexCoord3sARB);
  fn_glMultiTexCoord3svARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3svARB")!, def_glMultiTexCoord3svARB);
  fn_glMultiTexCoord4dARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4dARB")!, def_glMultiTexCoord4dARB);
  fn_glMultiTexCoord4dvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4dvARB")!, def_glMultiTexCoord4dvARB);
  fn_glMultiTexCoord4fARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4fARB")!, def_glMultiTexCoord4fARB);
  fn_glMultiTexCoord4fvARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4fvARB")!, def_glMultiTexCoord4fvARB);
  fn_glMultiTexCoord4iARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4iARB")!, def_glMultiTexCoord4iARB);
  fn_glMultiTexCoord4ivARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4ivARB")!, def_glMultiTexCoord4ivARB);
  fn_glMultiTexCoord4sARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4sARB")!, def_glMultiTexCoord4sARB);
  fn_glMultiTexCoord4svARB = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4svARB")!, def_glMultiTexCoord4svARB);
}
