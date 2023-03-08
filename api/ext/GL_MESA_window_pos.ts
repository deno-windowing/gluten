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

/// Commands

export const def_glWindowPos2dMESA = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos2dMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2dMESA>;

export function WindowPos2dMESA(
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glWindowPos2dMESA.call(
    x,
    y,
  );
}

export const def_glWindowPos2dvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2dvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2dvMESA>;

export function WindowPos2dvMESA(
  v: Buffer,
): void {
  fn_glWindowPos2dvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2fMESA = {
  parameters: ["f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos2fMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2fMESA>;

export function WindowPos2fMESA(
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glWindowPos2fMESA.call(
    x,
    y,
  );
}

export const def_glWindowPos2fvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2fvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2fvMESA>;

export function WindowPos2fvMESA(
  v: Buffer,
): void {
  fn_glWindowPos2fvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2iMESA = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos2iMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2iMESA>;

export function WindowPos2iMESA(
  x: GLint,
  y: GLint,
): void {
  fn_glWindowPos2iMESA.call(
    x,
    y,
  );
}

export const def_glWindowPos2ivMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2ivMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2ivMESA>;

export function WindowPos2ivMESA(
  v: Buffer,
): void {
  fn_glWindowPos2ivMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos2sMESA = {
  parameters: ["i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos2sMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2sMESA>;

export function WindowPos2sMESA(
  x: GLshort,
  y: GLshort,
): void {
  fn_glWindowPos2sMESA.call(
    x,
    y,
  );
}

export const def_glWindowPos2svMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos2svMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos2svMESA>;

export function WindowPos2svMESA(
  v: Buffer,
): void {
  fn_glWindowPos2svMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3dMESA = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos3dMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3dMESA>;

export function WindowPos3dMESA(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glWindowPos3dMESA.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3dvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3dvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3dvMESA>;

export function WindowPos3dvMESA(
  v: Buffer,
): void {
  fn_glWindowPos3dvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3fMESA = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos3fMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3fMESA>;

export function WindowPos3fMESA(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glWindowPos3fMESA.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3fvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3fvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3fvMESA>;

export function WindowPos3fvMESA(
  v: Buffer,
): void {
  fn_glWindowPos3fvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3iMESA = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos3iMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3iMESA>;

export function WindowPos3iMESA(
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glWindowPos3iMESA.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3ivMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3ivMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3ivMESA>;

export function WindowPos3ivMESA(
  v: Buffer,
): void {
  fn_glWindowPos3ivMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos3sMESA = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos3sMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3sMESA>;

export function WindowPos3sMESA(
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glWindowPos3sMESA.call(
    x,
    y,
    z,
  );
}

export const def_glWindowPos3svMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos3svMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos3svMESA>;

export function WindowPos3svMESA(
  v: Buffer,
): void {
  fn_glWindowPos3svMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos4dMESA = {
  parameters: ["f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glWindowPos4dMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4dMESA>;

export function WindowPos4dMESA(
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glWindowPos4dMESA.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glWindowPos4dvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos4dvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4dvMESA>;

export function WindowPos4dvMESA(
  v: Buffer,
): void {
  fn_glWindowPos4dvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos4fMESA = {
  parameters: ["f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glWindowPos4fMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4fMESA>;

export function WindowPos4fMESA(
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glWindowPos4fMESA.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glWindowPos4fvMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos4fvMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4fvMESA>;

export function WindowPos4fvMESA(
  v: Buffer,
): void {
  fn_glWindowPos4fvMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos4iMESA = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glWindowPos4iMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4iMESA>;

export function WindowPos4iMESA(
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glWindowPos4iMESA.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glWindowPos4ivMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos4ivMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4ivMESA>;

export function WindowPos4ivMESA(
  v: Buffer,
): void {
  fn_glWindowPos4ivMESA.call(
    bufferToFFI(v),
  );
}

export const def_glWindowPos4sMESA = {
  parameters: ["i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glWindowPos4sMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4sMESA>;

export function WindowPos4sMESA(
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glWindowPos4sMESA.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glWindowPos4svMESA = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glWindowPos4svMESA!: Deno.UnsafeFnPointer<typeof def_glWindowPos4svMESA>;

export function WindowPos4svMESA(
  v: Buffer,
): void {
  fn_glWindowPos4svMESA.call(
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glWindowPos2dMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2dMESA")!,
    def_glWindowPos2dMESA,
  );
  fn_glWindowPos2dvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2dvMESA")!,
    def_glWindowPos2dvMESA,
  );
  fn_glWindowPos2fMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2fMESA")!,
    def_glWindowPos2fMESA,
  );
  fn_glWindowPos2fvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2fvMESA")!,
    def_glWindowPos2fvMESA,
  );
  fn_glWindowPos2iMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2iMESA")!,
    def_glWindowPos2iMESA,
  );
  fn_glWindowPos2ivMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2ivMESA")!,
    def_glWindowPos2ivMESA,
  );
  fn_glWindowPos2sMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2sMESA")!,
    def_glWindowPos2sMESA,
  );
  fn_glWindowPos2svMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos2svMESA")!,
    def_glWindowPos2svMESA,
  );
  fn_glWindowPos3dMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3dMESA")!,
    def_glWindowPos3dMESA,
  );
  fn_glWindowPos3dvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3dvMESA")!,
    def_glWindowPos3dvMESA,
  );
  fn_glWindowPos3fMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3fMESA")!,
    def_glWindowPos3fMESA,
  );
  fn_glWindowPos3fvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3fvMESA")!,
    def_glWindowPos3fvMESA,
  );
  fn_glWindowPos3iMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3iMESA")!,
    def_glWindowPos3iMESA,
  );
  fn_glWindowPos3ivMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3ivMESA")!,
    def_glWindowPos3ivMESA,
  );
  fn_glWindowPos3sMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3sMESA")!,
    def_glWindowPos3sMESA,
  );
  fn_glWindowPos3svMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos3svMESA")!,
    def_glWindowPos3svMESA,
  );
  fn_glWindowPos4dMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4dMESA")!,
    def_glWindowPos4dMESA,
  );
  fn_glWindowPos4dvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4dvMESA")!,
    def_glWindowPos4dvMESA,
  );
  fn_glWindowPos4fMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4fMESA")!,
    def_glWindowPos4fMESA,
  );
  fn_glWindowPos4fvMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4fvMESA")!,
    def_glWindowPos4fvMESA,
  );
  fn_glWindowPos4iMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4iMESA")!,
    def_glWindowPos4iMESA,
  );
  fn_glWindowPos4ivMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4ivMESA")!,
    def_glWindowPos4ivMESA,
  );
  fn_glWindowPos4sMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4sMESA")!,
    def_glWindowPos4sMESA,
  );
  fn_glWindowPos4svMESA = new Deno.UnsafeFnPointer(
    proc("glWindowPos4svMESA")!,
    def_glWindowPos4svMESA,
  );
}
