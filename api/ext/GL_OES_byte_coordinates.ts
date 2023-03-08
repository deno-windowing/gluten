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
export const BYTE = 0x1400;

/// Commands

export const def_glMultiTexCoord1bOES = {
  parameters: ["u32", "i8"],
  result: "void",
} as const;

let fn_glMultiTexCoord1bOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord1bOES
>;

export function MultiTexCoord1bOES(
  texture: GLenum,
  s: GLbyte,
): void {
  fn_glMultiTexCoord1bOES.call(
    texture,
    s,
  );
}

export const def_glMultiTexCoord1bvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1bvOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord1bvOES
>;

export function MultiTexCoord1bvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord1bvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord2bOES = {
  parameters: ["u32", "i8", "i8"],
  result: "void",
} as const;

let fn_glMultiTexCoord2bOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord2bOES
>;

export function MultiTexCoord2bOES(
  texture: GLenum,
  s: GLbyte,
  t: GLbyte,
): void {
  fn_glMultiTexCoord2bOES.call(
    texture,
    s,
    t,
  );
}

export const def_glMultiTexCoord2bvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2bvOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord2bvOES
>;

export function MultiTexCoord2bvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord2bvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord3bOES = {
  parameters: ["u32", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glMultiTexCoord3bOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord3bOES
>;

export function MultiTexCoord3bOES(
  texture: GLenum,
  s: GLbyte,
  t: GLbyte,
  r: GLbyte,
): void {
  fn_glMultiTexCoord3bOES.call(
    texture,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3bvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3bvOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord3bvOES
>;

export function MultiTexCoord3bvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord3bvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord4bOES = {
  parameters: ["u32", "i8", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glMultiTexCoord4bOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord4bOES
>;

export function MultiTexCoord4bOES(
  texture: GLenum,
  s: GLbyte,
  t: GLbyte,
  r: GLbyte,
  q: GLbyte,
): void {
  fn_glMultiTexCoord4bOES.call(
    texture,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4bvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4bvOES!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord4bvOES
>;

export function MultiTexCoord4bvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord4bvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glTexCoord1bOES = {
  parameters: ["i8"],
  result: "void",
} as const;

let fn_glTexCoord1bOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord1bOES>;

export function TexCoord1bOES(
  s: GLbyte,
): void {
  fn_glTexCoord1bOES.call(
    s,
  );
}

export const def_glTexCoord1bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1bvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord1bvOES>;

export function TexCoord1bvOES(
  coords: Buffer,
): void {
  fn_glTexCoord1bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord2bOES = {
  parameters: ["i8", "i8"],
  result: "void",
} as const;

let fn_glTexCoord2bOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord2bOES>;

export function TexCoord2bOES(
  s: GLbyte,
  t: GLbyte,
): void {
  fn_glTexCoord2bOES.call(
    s,
    t,
  );
}

export const def_glTexCoord2bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2bvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord2bvOES>;

export function TexCoord2bvOES(
  coords: Buffer,
): void {
  fn_glTexCoord2bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord3bOES = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glTexCoord3bOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord3bOES>;

export function TexCoord3bOES(
  s: GLbyte,
  t: GLbyte,
  r: GLbyte,
): void {
  fn_glTexCoord3bOES.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3bvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord3bvOES>;

export function TexCoord3bvOES(
  coords: Buffer,
): void {
  fn_glTexCoord3bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord4bOES = {
  parameters: ["i8", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glTexCoord4bOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord4bOES>;

export function TexCoord4bOES(
  s: GLbyte,
  t: GLbyte,
  r: GLbyte,
  q: GLbyte,
): void {
  fn_glTexCoord4bOES.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4bvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord4bvOES>;

export function TexCoord4bvOES(
  coords: Buffer,
): void {
  fn_glTexCoord4bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glVertex2bOES = {
  parameters: ["i8", "i8"],
  result: "void",
} as const;

let fn_glVertex2bOES!: Deno.UnsafeFnPointer<typeof def_glVertex2bOES>;

export function Vertex2bOES(
  x: GLbyte,
  y: GLbyte,
): void {
  fn_glVertex2bOES.call(
    x,
    y,
  );
}

export const def_glVertex2bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2bvOES!: Deno.UnsafeFnPointer<typeof def_glVertex2bvOES>;

export function Vertex2bvOES(
  coords: Buffer,
): void {
  fn_glVertex2bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glVertex3bOES = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glVertex3bOES!: Deno.UnsafeFnPointer<typeof def_glVertex3bOES>;

export function Vertex3bOES(
  x: GLbyte,
  y: GLbyte,
  z: GLbyte,
): void {
  fn_glVertex3bOES.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3bvOES!: Deno.UnsafeFnPointer<typeof def_glVertex3bvOES>;

export function Vertex3bvOES(
  coords: Buffer,
): void {
  fn_glVertex3bvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glVertex4bOES = {
  parameters: ["i8", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glVertex4bOES!: Deno.UnsafeFnPointer<typeof def_glVertex4bOES>;

export function Vertex4bOES(
  x: GLbyte,
  y: GLbyte,
  z: GLbyte,
  w: GLbyte,
): void {
  fn_glVertex4bOES.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4bvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4bvOES!: Deno.UnsafeFnPointer<typeof def_glVertex4bvOES>;

export function Vertex4bvOES(
  coords: Buffer,
): void {
  fn_glVertex4bvOES.call(
    bufferToFFI(coords),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMultiTexCoord1bOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1bOES")!,
    def_glMultiTexCoord1bOES,
  );
  fn_glMultiTexCoord1bvOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1bvOES")!,
    def_glMultiTexCoord1bvOES,
  );
  fn_glMultiTexCoord2bOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2bOES")!,
    def_glMultiTexCoord2bOES,
  );
  fn_glMultiTexCoord2bvOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2bvOES")!,
    def_glMultiTexCoord2bvOES,
  );
  fn_glMultiTexCoord3bOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3bOES")!,
    def_glMultiTexCoord3bOES,
  );
  fn_glMultiTexCoord3bvOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3bvOES")!,
    def_glMultiTexCoord3bvOES,
  );
  fn_glMultiTexCoord4bOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4bOES")!,
    def_glMultiTexCoord4bOES,
  );
  fn_glMultiTexCoord4bvOES = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4bvOES")!,
    def_glMultiTexCoord4bvOES,
  );
  fn_glTexCoord1bOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord1bOES")!,
    def_glTexCoord1bOES,
  );
  fn_glTexCoord1bvOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord1bvOES")!,
    def_glTexCoord1bvOES,
  );
  fn_glTexCoord2bOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord2bOES")!,
    def_glTexCoord2bOES,
  );
  fn_glTexCoord2bvOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord2bvOES")!,
    def_glTexCoord2bvOES,
  );
  fn_glTexCoord3bOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord3bOES")!,
    def_glTexCoord3bOES,
  );
  fn_glTexCoord3bvOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord3bvOES")!,
    def_glTexCoord3bvOES,
  );
  fn_glTexCoord4bOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord4bOES")!,
    def_glTexCoord4bOES,
  );
  fn_glTexCoord4bvOES = new Deno.UnsafeFnPointer(
    proc("glTexCoord4bvOES")!,
    def_glTexCoord4bvOES,
  );
  fn_glVertex2bOES = new Deno.UnsafeFnPointer(
    proc("glVertex2bOES")!,
    def_glVertex2bOES,
  );
  fn_glVertex2bvOES = new Deno.UnsafeFnPointer(
    proc("glVertex2bvOES")!,
    def_glVertex2bvOES,
  );
  fn_glVertex3bOES = new Deno.UnsafeFnPointer(
    proc("glVertex3bOES")!,
    def_glVertex3bOES,
  );
  fn_glVertex3bvOES = new Deno.UnsafeFnPointer(
    proc("glVertex3bvOES")!,
    def_glVertex3bvOES,
  );
  fn_glVertex4bOES = new Deno.UnsafeFnPointer(
    proc("glVertex4bOES")!,
    def_glVertex4bOES,
  );
  fn_glVertex4bvOES = new Deno.UnsafeFnPointer(
    proc("glVertex4bvOES")!,
    def_glVertex4bvOES,
  );
}
