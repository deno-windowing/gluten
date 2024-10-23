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
export const HALF_FLOAT_NV = 0x140b;

/// Commands

export const def_glVertex2hNV = {
  parameters: ["u16", "u16"],
  result: "void",
} as const;

let fn_glVertex2hNV!: Deno.UnsafeFnPointer<typeof def_glVertex2hNV>;

export function Vertex2hNV(
  x: GLhalfNV,
  y: GLhalfNV,
): void {
  fn_glVertex2hNV.call(
    x,
    y,
  );
}

export const def_glVertex2hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2hvNV!: Deno.UnsafeFnPointer<typeof def_glVertex2hvNV>;

export function Vertex2hvNV(
  v: Buffer,
): void {
  fn_glVertex2hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glVertex3hNV = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glVertex3hNV!: Deno.UnsafeFnPointer<typeof def_glVertex3hNV>;

export function Vertex3hNV(
  x: GLhalfNV,
  y: GLhalfNV,
  z: GLhalfNV,
): void {
  fn_glVertex3hNV.call(
    x,
    y,
    z,
  );
}

export const def_glVertex3hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3hvNV!: Deno.UnsafeFnPointer<typeof def_glVertex3hvNV>;

export function Vertex3hvNV(
  v: Buffer,
): void {
  fn_glVertex3hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glVertex4hNV = {
  parameters: ["u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glVertex4hNV!: Deno.UnsafeFnPointer<typeof def_glVertex4hNV>;

export function Vertex4hNV(
  x: GLhalfNV,
  y: GLhalfNV,
  z: GLhalfNV,
  w: GLhalfNV,
): void {
  fn_glVertex4hNV.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glVertex4hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4hvNV!: Deno.UnsafeFnPointer<typeof def_glVertex4hvNV>;

export function Vertex4hvNV(
  v: Buffer,
): void {
  fn_glVertex4hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glNormal3hNV = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glNormal3hNV!: Deno.UnsafeFnPointer<typeof def_glNormal3hNV>;

export function Normal3hNV(
  nx: GLhalfNV,
  ny: GLhalfNV,
  nz: GLhalfNV,
): void {
  fn_glNormal3hNV.call(
    nx,
    ny,
    nz,
  );
}

export const def_glNormal3hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3hvNV!: Deno.UnsafeFnPointer<typeof def_glNormal3hvNV>;

export function Normal3hvNV(
  v: Buffer,
): void {
  fn_glNormal3hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glColor3hNV = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glColor3hNV!: Deno.UnsafeFnPointer<typeof def_glColor3hNV>;

export function Color3hNV(
  red: GLhalfNV,
  green: GLhalfNV,
  blue: GLhalfNV,
): void {
  fn_glColor3hNV.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3hvNV!: Deno.UnsafeFnPointer<typeof def_glColor3hvNV>;

export function Color3hvNV(
  v: Buffer,
): void {
  fn_glColor3hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glColor4hNV = {
  parameters: ["u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glColor4hNV!: Deno.UnsafeFnPointer<typeof def_glColor4hNV>;

export function Color4hNV(
  red: GLhalfNV,
  green: GLhalfNV,
  blue: GLhalfNV,
  alpha: GLhalfNV,
): void {
  fn_glColor4hNV.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor4hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4hvNV!: Deno.UnsafeFnPointer<typeof def_glColor4hvNV>;

export function Color4hvNV(
  v: Buffer,
): void {
  fn_glColor4hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord1hNV = {
  parameters: ["u16"],
  result: "void",
} as const;

let fn_glTexCoord1hNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord1hNV>;

export function TexCoord1hNV(
  s: GLhalfNV,
): void {
  fn_glTexCoord1hNV.call(
    s,
  );
}

export const def_glTexCoord1hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1hvNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord1hvNV>;

export function TexCoord1hvNV(
  v: Buffer,
): void {
  fn_glTexCoord1hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord2hNV = {
  parameters: ["u16", "u16"],
  result: "void",
} as const;

let fn_glTexCoord2hNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord2hNV>;

export function TexCoord2hNV(
  s: GLhalfNV,
  t: GLhalfNV,
): void {
  fn_glTexCoord2hNV.call(
    s,
    t,
  );
}

export const def_glTexCoord2hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2hvNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord2hvNV>;

export function TexCoord2hvNV(
  v: Buffer,
): void {
  fn_glTexCoord2hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord3hNV = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glTexCoord3hNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord3hNV>;

export function TexCoord3hNV(
  s: GLhalfNV,
  t: GLhalfNV,
  r: GLhalfNV,
): void {
  fn_glTexCoord3hNV.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3hvNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord3hvNV>;

export function TexCoord3hvNV(
  v: Buffer,
): void {
  fn_glTexCoord3hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glTexCoord4hNV = {
  parameters: ["u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glTexCoord4hNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord4hNV>;

export function TexCoord4hNV(
  s: GLhalfNV,
  t: GLhalfNV,
  r: GLhalfNV,
  q: GLhalfNV,
): void {
  fn_glTexCoord4hNV.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4hvNV!: Deno.UnsafeFnPointer<typeof def_glTexCoord4hvNV>;

export function TexCoord4hvNV(
  v: Buffer,
): void {
  fn_glTexCoord4hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord1hNV = {
  parameters: ["u32", "u16"],
  result: "void",
} as const;

let fn_glMultiTexCoord1hNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord1hNV
>;

export function MultiTexCoord1hNV(
  target: GLenum,
  s: GLhalfNV,
): void {
  fn_glMultiTexCoord1hNV.call(
    target,
    s,
  );
}

export const def_glMultiTexCoord1hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1hvNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord1hvNV
>;

export function MultiTexCoord1hvNV(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord1hvNV.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord2hNV = {
  parameters: ["u32", "u16", "u16"],
  result: "void",
} as const;

let fn_glMultiTexCoord2hNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord2hNV
>;

export function MultiTexCoord2hNV(
  target: GLenum,
  s: GLhalfNV,
  t: GLhalfNV,
): void {
  fn_glMultiTexCoord2hNV.call(
    target,
    s,
    t,
  );
}

export const def_glMultiTexCoord2hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2hvNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord2hvNV
>;

export function MultiTexCoord2hvNV(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord2hvNV.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord3hNV = {
  parameters: ["u32", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glMultiTexCoord3hNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord3hNV
>;

export function MultiTexCoord3hNV(
  target: GLenum,
  s: GLhalfNV,
  t: GLhalfNV,
  r: GLhalfNV,
): void {
  fn_glMultiTexCoord3hNV.call(
    target,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3hvNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord3hvNV
>;

export function MultiTexCoord3hvNV(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord3hvNV.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glMultiTexCoord4hNV = {
  parameters: ["u32", "u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glMultiTexCoord4hNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord4hNV
>;

export function MultiTexCoord4hNV(
  target: GLenum,
  s: GLhalfNV,
  t: GLhalfNV,
  r: GLhalfNV,
  q: GLhalfNV,
): void {
  fn_glMultiTexCoord4hNV.call(
    target,
    s,
    t,
    r,
    q,
  );
}

export const def_glMultiTexCoord4hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4hvNV!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoord4hvNV
>;

export function MultiTexCoord4hvNV(
  target: GLenum,
  v: Buffer,
): void {
  fn_glMultiTexCoord4hvNV.call(
    target,
    bufferToFFI(v),
  );
}

export const def_glFogCoordhNV = {
  parameters: ["u16"],
  result: "void",
} as const;

let fn_glFogCoordhNV!: Deno.UnsafeFnPointer<typeof def_glFogCoordhNV>;

export function FogCoordhNV(
  fog: GLhalfNV,
): void {
  fn_glFogCoordhNV.call(
    fog,
  );
}

export const def_glFogCoordhvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glFogCoordhvNV!: Deno.UnsafeFnPointer<typeof def_glFogCoordhvNV>;

export function FogCoordhvNV(
  fog: Buffer,
): void {
  fn_glFogCoordhvNV.call(
    bufferToFFI(fog),
  );
}

export const def_glSecondaryColor3hNV = {
  parameters: ["u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glSecondaryColor3hNV!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3hNV
>;

export function SecondaryColor3hNV(
  red: GLhalfNV,
  green: GLhalfNV,
  blue: GLhalfNV,
): void {
  fn_glSecondaryColor3hNV.call(
    red,
    green,
    blue,
  );
}

export const def_glSecondaryColor3hvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glSecondaryColor3hvNV!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColor3hvNV
>;

export function SecondaryColor3hvNV(
  v: Buffer,
): void {
  fn_glSecondaryColor3hvNV.call(
    bufferToFFI(v),
  );
}

export const def_glVertexWeighthNV = {
  parameters: ["u16"],
  result: "void",
} as const;

let fn_glVertexWeighthNV!: Deno.UnsafeFnPointer<typeof def_glVertexWeighthNV>;

export function VertexWeighthNV(
  weight: GLhalfNV,
): void {
  fn_glVertexWeighthNV.call(
    weight,
  );
}

export const def_glVertexWeighthvNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertexWeighthvNV!: Deno.UnsafeFnPointer<typeof def_glVertexWeighthvNV>;

export function VertexWeighthvNV(
  weight: Buffer,
): void {
  fn_glVertexWeighthvNV.call(
    bufferToFFI(weight),
  );
}

export const def_glVertexAttrib1hNV = {
  parameters: ["u32", "u16"],
  result: "void",
} as const;

let fn_glVertexAttrib1hNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1hNV>;

export function VertexAttrib1hNV(
  index: GLuint,
  x: GLhalfNV,
): void {
  fn_glVertexAttrib1hNV.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1hvNV
>;

export function VertexAttrib1hvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1hvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2hNV = {
  parameters: ["u32", "u16", "u16"],
  result: "void",
} as const;

let fn_glVertexAttrib2hNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2hNV>;

export function VertexAttrib2hNV(
  index: GLuint,
  x: GLhalfNV,
  y: GLhalfNV,
): void {
  fn_glVertexAttrib2hNV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2hvNV
>;

export function VertexAttrib2hvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2hvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3hNV = {
  parameters: ["u32", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glVertexAttrib3hNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3hNV>;

export function VertexAttrib3hNV(
  index: GLuint,
  x: GLhalfNV,
  y: GLhalfNV,
  z: GLhalfNV,
): void {
  fn_glVertexAttrib3hNV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3hvNV
>;

export function VertexAttrib3hvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3hvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4hNV = {
  parameters: ["u32", "u16", "u16", "u16", "u16"],
  result: "void",
} as const;

let fn_glVertexAttrib4hNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4hNV>;

export function VertexAttrib4hNV(
  index: GLuint,
  x: GLhalfNV,
  y: GLhalfNV,
  z: GLhalfNV,
  w: GLhalfNV,
): void {
  fn_glVertexAttrib4hNV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4hvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4hvNV
>;

export function VertexAttrib4hvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4hvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs1hvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs1hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs1hvNV
>;

export function VertexAttribs1hvNV(
  index: GLuint,
  n: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs1hvNV.call(
    index,
    n,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs2hvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs2hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs2hvNV
>;

export function VertexAttribs2hvNV(
  index: GLuint,
  n: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs2hvNV.call(
    index,
    n,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs3hvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs3hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs3hvNV
>;

export function VertexAttribs3hvNV(
  index: GLuint,
  n: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs3hvNV.call(
    index,
    n,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs4hvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs4hvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs4hvNV
>;

export function VertexAttribs4hvNV(
  index: GLuint,
  n: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs4hvNV.call(
    index,
    n,
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertex2hNV = new Deno.UnsafeFnPointer(
    proc("glVertex2hNV")!,
    def_glVertex2hNV,
  );
  fn_glVertex2hvNV = new Deno.UnsafeFnPointer(
    proc("glVertex2hvNV")!,
    def_glVertex2hvNV,
  );
  fn_glVertex3hNV = new Deno.UnsafeFnPointer(
    proc("glVertex3hNV")!,
    def_glVertex3hNV,
  );
  fn_glVertex3hvNV = new Deno.UnsafeFnPointer(
    proc("glVertex3hvNV")!,
    def_glVertex3hvNV,
  );
  fn_glVertex4hNV = new Deno.UnsafeFnPointer(
    proc("glVertex4hNV")!,
    def_glVertex4hNV,
  );
  fn_glVertex4hvNV = new Deno.UnsafeFnPointer(
    proc("glVertex4hvNV")!,
    def_glVertex4hvNV,
  );
  fn_glNormal3hNV = new Deno.UnsafeFnPointer(
    proc("glNormal3hNV")!,
    def_glNormal3hNV,
  );
  fn_glNormal3hvNV = new Deno.UnsafeFnPointer(
    proc("glNormal3hvNV")!,
    def_glNormal3hvNV,
  );
  fn_glColor3hNV = new Deno.UnsafeFnPointer(
    proc("glColor3hNV")!,
    def_glColor3hNV,
  );
  fn_glColor3hvNV = new Deno.UnsafeFnPointer(
    proc("glColor3hvNV")!,
    def_glColor3hvNV,
  );
  fn_glColor4hNV = new Deno.UnsafeFnPointer(
    proc("glColor4hNV")!,
    def_glColor4hNV,
  );
  fn_glColor4hvNV = new Deno.UnsafeFnPointer(
    proc("glColor4hvNV")!,
    def_glColor4hvNV,
  );
  fn_glTexCoord1hNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord1hNV")!,
    def_glTexCoord1hNV,
  );
  fn_glTexCoord1hvNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord1hvNV")!,
    def_glTexCoord1hvNV,
  );
  fn_glTexCoord2hNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord2hNV")!,
    def_glTexCoord2hNV,
  );
  fn_glTexCoord2hvNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord2hvNV")!,
    def_glTexCoord2hvNV,
  );
  fn_glTexCoord3hNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord3hNV")!,
    def_glTexCoord3hNV,
  );
  fn_glTexCoord3hvNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord3hvNV")!,
    def_glTexCoord3hvNV,
  );
  fn_glTexCoord4hNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord4hNV")!,
    def_glTexCoord4hNV,
  );
  fn_glTexCoord4hvNV = new Deno.UnsafeFnPointer(
    proc("glTexCoord4hvNV")!,
    def_glTexCoord4hvNV,
  );
  fn_glMultiTexCoord1hNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1hNV")!,
    def_glMultiTexCoord1hNV,
  );
  fn_glMultiTexCoord1hvNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord1hvNV")!,
    def_glMultiTexCoord1hvNV,
  );
  fn_glMultiTexCoord2hNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2hNV")!,
    def_glMultiTexCoord2hNV,
  );
  fn_glMultiTexCoord2hvNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord2hvNV")!,
    def_glMultiTexCoord2hvNV,
  );
  fn_glMultiTexCoord3hNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3hNV")!,
    def_glMultiTexCoord3hNV,
  );
  fn_glMultiTexCoord3hvNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord3hvNV")!,
    def_glMultiTexCoord3hvNV,
  );
  fn_glMultiTexCoord4hNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4hNV")!,
    def_glMultiTexCoord4hNV,
  );
  fn_glMultiTexCoord4hvNV = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoord4hvNV")!,
    def_glMultiTexCoord4hvNV,
  );
  fn_glFogCoordhNV = new Deno.UnsafeFnPointer(
    proc("glFogCoordhNV")!,
    def_glFogCoordhNV,
  );
  fn_glFogCoordhvNV = new Deno.UnsafeFnPointer(
    proc("glFogCoordhvNV")!,
    def_glFogCoordhvNV,
  );
  fn_glSecondaryColor3hNV = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3hNV")!,
    def_glSecondaryColor3hNV,
  );
  fn_glSecondaryColor3hvNV = new Deno.UnsafeFnPointer(
    proc("glSecondaryColor3hvNV")!,
    def_glSecondaryColor3hvNV,
  );
  fn_glVertexWeighthNV = new Deno.UnsafeFnPointer(
    proc("glVertexWeighthNV")!,
    def_glVertexWeighthNV,
  );
  fn_glVertexWeighthvNV = new Deno.UnsafeFnPointer(
    proc("glVertexWeighthvNV")!,
    def_glVertexWeighthvNV,
  );
  fn_glVertexAttrib1hNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1hNV")!,
    def_glVertexAttrib1hNV,
  );
  fn_glVertexAttrib1hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1hvNV")!,
    def_glVertexAttrib1hvNV,
  );
  fn_glVertexAttrib2hNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2hNV")!,
    def_glVertexAttrib2hNV,
  );
  fn_glVertexAttrib2hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2hvNV")!,
    def_glVertexAttrib2hvNV,
  );
  fn_glVertexAttrib3hNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3hNV")!,
    def_glVertexAttrib3hNV,
  );
  fn_glVertexAttrib3hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3hvNV")!,
    def_glVertexAttrib3hvNV,
  );
  fn_glVertexAttrib4hNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4hNV")!,
    def_glVertexAttrib4hNV,
  );
  fn_glVertexAttrib4hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4hvNV")!,
    def_glVertexAttrib4hvNV,
  );
  fn_glVertexAttribs1hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs1hvNV")!,
    def_glVertexAttribs1hvNV,
  );
  fn_glVertexAttribs2hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs2hvNV")!,
    def_glVertexAttribs2hvNV,
  );
  fn_glVertexAttribs3hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs3hvNV")!,
    def_glVertexAttribs3hvNV,
  );
  fn_glVertexAttribs4hvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs4hvNV")!,
    def_glVertexAttribs4hvNV,
  );
}
