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

/// Commands

export const def_glWindowPos2dARB = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos2dARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2dARB>;

export function WindowPos2dARB(
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glWindowPos2dARB.call(
    x,
    y,
  );
}

export const def_glWindowPos2dvARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2dvARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2dvARB>;

export function WindowPos2dvARB(
  v: Buffer,
): void {
  fn_glWindowPos2dvARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2fARB = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos2fARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2fARB>;

export function WindowPos2fARB(
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glWindowPos2fARB.call(
    x,
    y,
  );
}

export const def_glWindowPos2fvARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2fvARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2fvARB>;

export function WindowPos2fvARB(
  v: Buffer,
): void {
  fn_glWindowPos2fvARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2iARB = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos2iARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2iARB>;

export function WindowPos2iARB(
  x: GLint,
  y: GLint,
): void {
  fn_glWindowPos2iARB.call(
    x,
    y,
  );
}

export const def_glWindowPos2ivARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2ivARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2ivARB>;

export function WindowPos2ivARB(
  v: Buffer,
): void {
  fn_glWindowPos2ivARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2sARB = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos2sARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2sARB>;

export function WindowPos2sARB(
  x: GLshort,
  y: GLshort,
): void {
  fn_glWindowPos2sARB.call(
    x,
    y,
  );
}

export const def_glWindowPos2svARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2svARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos2svARB>;

export function WindowPos2svARB(
  v: Buffer,
): void {
  fn_glWindowPos2svARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3dARB = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos3dARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3dARB>;

export function WindowPos3dARB(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glWindowPos3dARB.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3dvARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3dvARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3dvARB>;

export function WindowPos3dvARB(
  v: Buffer,
): void {
  fn_glWindowPos3dvARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3fARB = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos3fARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3fARB>;

export function WindowPos3fARB(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glWindowPos3fARB.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3fvARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3fvARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3fvARB>;

export function WindowPos3fvARB(
  v: Buffer,
): void {
  fn_glWindowPos3fvARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3iARB = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos3iARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3iARB>;

export function WindowPos3iARB(
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glWindowPos3iARB.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3ivARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3ivARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3ivARB>;

export function WindowPos3ivARB(
  v: Buffer,
): void {
  fn_glWindowPos3ivARB.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3sARB = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos3sARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3sARB>;

export function WindowPos3sARB(
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glWindowPos3sARB.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3svARB = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3svARB!: Deno.UnsafeFnPointer<typeof def_glWindowPos3svARB>;

export function WindowPos3svARB(
  v: Buffer,
): void {
  fn_glWindowPos3svARB.call(
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glWindowPos2dARB = new Deno.UnsafeFnPointer(proc("glWindowPos2dARB"), def_glWindowPos2dARB);
  fn_glWindowPos2dvARB = new Deno.UnsafeFnPointer(proc("glWindowPos2dvARB"), def_glWindowPos2dvARB);
  fn_glWindowPos2fARB = new Deno.UnsafeFnPointer(proc("glWindowPos2fARB"), def_glWindowPos2fARB);
  fn_glWindowPos2fvARB = new Deno.UnsafeFnPointer(proc("glWindowPos2fvARB"), def_glWindowPos2fvARB);
  fn_glWindowPos2iARB = new Deno.UnsafeFnPointer(proc("glWindowPos2iARB"), def_glWindowPos2iARB);
  fn_glWindowPos2ivARB = new Deno.UnsafeFnPointer(proc("glWindowPos2ivARB"), def_glWindowPos2ivARB);
  fn_glWindowPos2sARB = new Deno.UnsafeFnPointer(proc("glWindowPos2sARB"), def_glWindowPos2sARB);
  fn_glWindowPos2svARB = new Deno.UnsafeFnPointer(proc("glWindowPos2svARB"), def_glWindowPos2svARB);
  fn_glWindowPos3dARB = new Deno.UnsafeFnPointer(proc("glWindowPos3dARB"), def_glWindowPos3dARB);
  fn_glWindowPos3dvARB = new Deno.UnsafeFnPointer(proc("glWindowPos3dvARB"), def_glWindowPos3dvARB);
  fn_glWindowPos3fARB = new Deno.UnsafeFnPointer(proc("glWindowPos3fARB"), def_glWindowPos3fARB);
  fn_glWindowPos3fvARB = new Deno.UnsafeFnPointer(proc("glWindowPos3fvARB"), def_glWindowPos3fvARB);
  fn_glWindowPos3iARB = new Deno.UnsafeFnPointer(proc("glWindowPos3iARB"), def_glWindowPos3iARB);
  fn_glWindowPos3ivARB = new Deno.UnsafeFnPointer(proc("glWindowPos3ivARB"), def_glWindowPos3ivARB);
  fn_glWindowPos3sARB = new Deno.UnsafeFnPointer(proc("glWindowPos3sARB"), def_glWindowPos3sARB);
  fn_glWindowPos3svARB = new Deno.UnsafeFnPointer(proc("glWindowPos3svARB"), def_glWindowPos3svARB);
}
