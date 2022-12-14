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

export const def_glColor4ubVertex2fSUN = {
  parameters: ["u8", "u8", "u8", "u8", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor4ubVertex2fSUN!: Deno.UnsafeFnPointer<typeof def_glColor4ubVertex2fSUN>;

export function Color4ubVertex2fSUN(
  r: GLubyte,
  g: GLubyte,
  b: GLubyte,
  a: GLubyte,
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glColor4ubVertex2fSUN.call(
    r,
    g,
    b,
    a,
    x,
    y,
  );
}

export const def_glColor4ubVertex2fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glColor4ubVertex2fvSUN!: Deno.UnsafeFnPointer<typeof def_glColor4ubVertex2fvSUN>;

export function Color4ubVertex2fvSUN(
  c: Buffer,
  v: Buffer,
): void {
  fn_glColor4ubVertex2fvSUN.call(
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glColor4ubVertex3fSUN = {
  parameters: ["u8", "u8", "u8", "u8", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor4ubVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glColor4ubVertex3fSUN>;

export function Color4ubVertex3fSUN(
  r: GLubyte,
  g: GLubyte,
  b: GLubyte,
  a: GLubyte,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glColor4ubVertex3fSUN.call(
    r,
    g,
    b,
    a,
    x,
    y,
    z,
  );
}

export const def_glColor4ubVertex3fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glColor4ubVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glColor4ubVertex3fvSUN>;

export function Color4ubVertex3fvSUN(
  c: Buffer,
  v: Buffer,
): void {
  fn_glColor4ubVertex3fvSUN.call(
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glColor3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glColor3fVertex3fSUN>;

export function Color3fVertex3fSUN(
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glColor3fVertex3fSUN.call(
    r,
    g,
    b,
    x,
    y,
    z,
  );
}

export const def_glColor3fVertex3fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glColor3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glColor3fVertex3fvSUN>;

export function Color3fVertex3fvSUN(
  c: Buffer,
  v: Buffer,
): void {
  fn_glColor3fVertex3fvSUN.call(
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glNormal3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glNormal3fVertex3fSUN>;

export function Normal3fVertex3fSUN(
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glNormal3fVertex3fSUN.call(
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glNormal3fVertex3fvSUN>;

export function Normal3fVertex3fvSUN(
  n: Buffer,
  v: Buffer,
): void {
  fn_glNormal3fVertex3fvSUN.call(
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glColor4fNormal3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glColor4fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glColor4fNormal3fVertex3fSUN>;

export function Color4fNormal3fVertex3fSUN(
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  a: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glColor4fNormal3fVertex3fSUN.call(
    r,
    g,
    b,
    a,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glColor4fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glColor4fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glColor4fNormal3fVertex3fvSUN>;

export function Color4fNormal3fVertex3fvSUN(
  c: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glColor4fNormal3fVertex3fvSUN.call(
    bufferToFFI(c),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glTexCoord2fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fVertex3fSUN>;

export function TexCoord2fVertex3fSUN(
  s: GLfloat,
  t: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTexCoord2fVertex3fSUN.call(
    s,
    t,
    x,
    y,
    z,
  );
}

export const def_glTexCoord2fVertex3fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fVertex3fvSUN>;

export function TexCoord2fVertex3fvSUN(
  tc: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord2fVertex3fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(v),
  );
}

export const def_glTexCoord4fVertex4fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord4fVertex4fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord4fVertex4fSUN>;

export function TexCoord4fVertex4fSUN(
  s: GLfloat,
  t: GLfloat,
  p: GLfloat,
  q: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glTexCoord4fVertex4fSUN.call(
    s,
    t,
    p,
    q,
    x,
    y,
    z,
    w,
  );
}

export const def_glTexCoord4fVertex4fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord4fVertex4fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord4fVertex4fvSUN>;

export function TexCoord4fVertex4fvSUN(
  tc: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord4fVertex4fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(v),
  );
}

export const def_glTexCoord2fColor4ubVertex3fSUN = {
  parameters: ["f32", "f32", "u8", "u8", "u8", "u8", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2fColor4ubVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor4ubVertex3fSUN>;

export function TexCoord2fColor4ubVertex3fSUN(
  s: GLfloat,
  t: GLfloat,
  r: GLubyte,
  g: GLubyte,
  b: GLubyte,
  a: GLubyte,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTexCoord2fColor4ubVertex3fSUN.call(
    s,
    t,
    r,
    g,
    b,
    a,
    x,
    y,
    z,
  );
}

export const def_glTexCoord2fColor4ubVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fColor4ubVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor4ubVertex3fvSUN>;

export function TexCoord2fColor4ubVertex3fvSUN(
  tc: Buffer,
  c: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord2fColor4ubVertex3fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glTexCoord2fColor3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2fColor3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor3fVertex3fSUN>;

export function TexCoord2fColor3fVertex3fSUN(
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTexCoord2fColor3fVertex3fSUN.call(
    s,
    t,
    r,
    g,
    b,
    x,
    y,
    z,
  );
}

export const def_glTexCoord2fColor3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fColor3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor3fVertex3fvSUN>;

export function TexCoord2fColor3fVertex3fvSUN(
  tc: Buffer,
  c: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord2fColor3fVertex3fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glTexCoord2fNormal3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fNormal3fVertex3fSUN>;

export function TexCoord2fNormal3fVertex3fSUN(
  s: GLfloat,
  t: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTexCoord2fNormal3fVertex3fSUN.call(
    s,
    t,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glTexCoord2fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fNormal3fVertex3fvSUN>;

export function TexCoord2fNormal3fVertex3fvSUN(
  tc: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord2fNormal3fVertex3fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glTexCoord2fColor4fNormal3fVertex3fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord2fColor4fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor4fNormal3fVertex3fSUN>;

export function TexCoord2fColor4fNormal3fVertex3fSUN(
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  a: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glTexCoord2fColor4fNormal3fVertex3fSUN.call(
    s,
    t,
    r,
    g,
    b,
    a,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glTexCoord2fColor4fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord2fColor4fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord2fColor4fNormal3fVertex3fvSUN>;

export function TexCoord2fColor4fNormal3fVertex3fvSUN(
  tc: Buffer,
  c: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord2fColor4fNormal3fVertex3fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(c),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glTexCoord4fColor4fNormal3fVertex4fSUN = {
  parameters: ["f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTexCoord4fColor4fNormal3fVertex4fSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord4fColor4fNormal3fVertex4fSUN>;

export function TexCoord4fColor4fNormal3fVertex4fSUN(
  s: GLfloat,
  t: GLfloat,
  p: GLfloat,
  q: GLfloat,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  a: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glTexCoord4fColor4fNormal3fVertex4fSUN.call(
    s,
    t,
    p,
    q,
    r,
    g,
    b,
    a,
    nx,
    ny,
    nz,
    x,
    y,
    z,
    w,
  );
}

export const def_glTexCoord4fColor4fNormal3fVertex4fvSUN = {
  parameters: ["buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glTexCoord4fColor4fNormal3fVertex4fvSUN!: Deno.UnsafeFnPointer<typeof def_glTexCoord4fColor4fNormal3fVertex4fvSUN>;

export function TexCoord4fColor4fNormal3fVertex4fvSUN(
  tc: Buffer,
  c: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glTexCoord4fColor4fNormal3fVertex4fvSUN.call(
    bufferToFFI(tc),
    bufferToFFI(c),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiVertex3fSUN>;

export function ReplacementCodeuiVertex3fSUN(
  rc: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiVertex3fSUN.call(
    rc,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiVertex3fvSUN = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiVertex3fvSUN>;

export function ReplacementCodeuiVertex3fvSUN(
  rc: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiColor4ubVertex3fSUN = {
  parameters: ["u32", "u8", "u8", "u8", "u8", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor4ubVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor4ubVertex3fSUN>;

export function ReplacementCodeuiColor4ubVertex3fSUN(
  rc: GLuint,
  r: GLubyte,
  g: GLubyte,
  b: GLubyte,
  a: GLubyte,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiColor4ubVertex3fSUN.call(
    rc,
    r,
    g,
    b,
    a,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiColor4ubVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor4ubVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor4ubVertex3fvSUN>;

export function ReplacementCodeuiColor4ubVertex3fvSUN(
  rc: Buffer,
  c: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiColor4ubVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiColor3fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor3fVertex3fSUN>;

export function ReplacementCodeuiColor3fVertex3fSUN(
  rc: GLuint,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiColor3fVertex3fSUN.call(
    rc,
    r,
    g,
    b,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiColor3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor3fVertex3fvSUN>;

export function ReplacementCodeuiColor3fVertex3fvSUN(
  rc: Buffer,
  c: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiColor3fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(c),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiNormal3fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiNormal3fVertex3fSUN>;

export function ReplacementCodeuiNormal3fVertex3fSUN(
  rc: GLuint,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiNormal3fVertex3fSUN.call(
    rc,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiNormal3fVertex3fvSUN>;

export function ReplacementCodeuiNormal3fVertex3fvSUN(
  rc: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiNormal3fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiColor4fNormal3fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor4fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor4fNormal3fVertex3fSUN>;

export function ReplacementCodeuiColor4fNormal3fVertex3fSUN(
  rc: GLuint,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  a: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiColor4fNormal3fVertex3fSUN.call(
    rc,
    r,
    g,
    b,
    a,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiColor4fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiColor4fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiColor4fNormal3fVertex3fvSUN>;

export function ReplacementCodeuiColor4fNormal3fVertex3fvSUN(
  rc: Buffer,
  c: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiColor4fNormal3fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(c),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiTexCoord2fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fVertex3fSUN>;

export function ReplacementCodeuiTexCoord2fVertex3fSUN(
  rc: GLuint,
  s: GLfloat,
  t: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiTexCoord2fVertex3fSUN.call(
    rc,
    s,
    t,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiTexCoord2fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fVertex3fvSUN>;

export function ReplacementCodeuiTexCoord2fVertex3fvSUN(
  rc: Buffer,
  tc: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiTexCoord2fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(tc),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN>;

export function ReplacementCodeuiTexCoord2fNormal3fVertex3fSUN(
  rc: GLuint,
  s: GLfloat,
  t: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN.call(
    rc,
    s,
    t,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN>;

export function ReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN(
  rc: Buffer,
  tc: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(tc),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

export const def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN = {
  parameters: ["u32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN>;

export function ReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN(
  rc: GLuint,
  s: GLfloat,
  t: GLfloat,
  r: GLfloat,
  g: GLfloat,
  b: GLfloat,
  a: GLfloat,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN.call(
    rc,
    s,
    t,
    r,
    g,
    b,
    a,
    nx,
    ny,
    nz,
    x,
    y,
    z,
  );
}

export const def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN = {
  parameters: ["buffer", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN!: Deno.UnsafeFnPointer<typeof def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN>;

export function ReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN(
  rc: Buffer,
  tc: Buffer,
  c: Buffer,
  n: Buffer,
  v: Buffer,
): void {
  fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN.call(
    bufferToFFI(rc),
    bufferToFFI(tc),
    bufferToFFI(c),
    bufferToFFI(n),
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glColor4ubVertex2fSUN = new Deno.UnsafeFnPointer(proc("glColor4ubVertex2fSUN"), def_glColor4ubVertex2fSUN);
  fn_glColor4ubVertex2fvSUN = new Deno.UnsafeFnPointer(proc("glColor4ubVertex2fvSUN"), def_glColor4ubVertex2fvSUN);
  fn_glColor4ubVertex3fSUN = new Deno.UnsafeFnPointer(proc("glColor4ubVertex3fSUN"), def_glColor4ubVertex3fSUN);
  fn_glColor4ubVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glColor4ubVertex3fvSUN"), def_glColor4ubVertex3fvSUN);
  fn_glColor3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glColor3fVertex3fSUN"), def_glColor3fVertex3fSUN);
  fn_glColor3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glColor3fVertex3fvSUN"), def_glColor3fVertex3fvSUN);
  fn_glNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glNormal3fVertex3fSUN"), def_glNormal3fVertex3fSUN);
  fn_glNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glNormal3fVertex3fvSUN"), def_glNormal3fVertex3fvSUN);
  fn_glColor4fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glColor4fNormal3fVertex3fSUN"), def_glColor4fNormal3fVertex3fSUN);
  fn_glColor4fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glColor4fNormal3fVertex3fvSUN"), def_glColor4fNormal3fVertex3fvSUN);
  fn_glTexCoord2fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fVertex3fSUN"), def_glTexCoord2fVertex3fSUN);
  fn_glTexCoord2fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fVertex3fvSUN"), def_glTexCoord2fVertex3fvSUN);
  fn_glTexCoord4fVertex4fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord4fVertex4fSUN"), def_glTexCoord4fVertex4fSUN);
  fn_glTexCoord4fVertex4fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord4fVertex4fvSUN"), def_glTexCoord4fVertex4fvSUN);
  fn_glTexCoord2fColor4ubVertex3fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor4ubVertex3fSUN"), def_glTexCoord2fColor4ubVertex3fSUN);
  fn_glTexCoord2fColor4ubVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor4ubVertex3fvSUN"), def_glTexCoord2fColor4ubVertex3fvSUN);
  fn_glTexCoord2fColor3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor3fVertex3fSUN"), def_glTexCoord2fColor3fVertex3fSUN);
  fn_glTexCoord2fColor3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor3fVertex3fvSUN"), def_glTexCoord2fColor3fVertex3fvSUN);
  fn_glTexCoord2fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fNormal3fVertex3fSUN"), def_glTexCoord2fNormal3fVertex3fSUN);
  fn_glTexCoord2fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fNormal3fVertex3fvSUN"), def_glTexCoord2fNormal3fVertex3fvSUN);
  fn_glTexCoord2fColor4fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor4fNormal3fVertex3fSUN"), def_glTexCoord2fColor4fNormal3fVertex3fSUN);
  fn_glTexCoord2fColor4fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord2fColor4fNormal3fVertex3fvSUN"), def_glTexCoord2fColor4fNormal3fVertex3fvSUN);
  fn_glTexCoord4fColor4fNormal3fVertex4fSUN = new Deno.UnsafeFnPointer(proc("glTexCoord4fColor4fNormal3fVertex4fSUN"), def_glTexCoord4fColor4fNormal3fVertex4fSUN);
  fn_glTexCoord4fColor4fNormal3fVertex4fvSUN = new Deno.UnsafeFnPointer(proc("glTexCoord4fColor4fNormal3fVertex4fvSUN"), def_glTexCoord4fColor4fNormal3fVertex4fvSUN);
  fn_glReplacementCodeuiVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiVertex3fSUN"), def_glReplacementCodeuiVertex3fSUN);
  fn_glReplacementCodeuiVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiVertex3fvSUN"), def_glReplacementCodeuiVertex3fvSUN);
  fn_glReplacementCodeuiColor4ubVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor4ubVertex3fSUN"), def_glReplacementCodeuiColor4ubVertex3fSUN);
  fn_glReplacementCodeuiColor4ubVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor4ubVertex3fvSUN"), def_glReplacementCodeuiColor4ubVertex3fvSUN);
  fn_glReplacementCodeuiColor3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor3fVertex3fSUN"), def_glReplacementCodeuiColor3fVertex3fSUN);
  fn_glReplacementCodeuiColor3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor3fVertex3fvSUN"), def_glReplacementCodeuiColor3fVertex3fvSUN);
  fn_glReplacementCodeuiNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiNormal3fVertex3fSUN"), def_glReplacementCodeuiNormal3fVertex3fSUN);
  fn_glReplacementCodeuiNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiNormal3fVertex3fvSUN"), def_glReplacementCodeuiNormal3fVertex3fvSUN);
  fn_glReplacementCodeuiColor4fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor4fNormal3fVertex3fSUN"), def_glReplacementCodeuiColor4fNormal3fVertex3fSUN);
  fn_glReplacementCodeuiColor4fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiColor4fNormal3fVertex3fvSUN"), def_glReplacementCodeuiColor4fNormal3fVertex3fvSUN);
  fn_glReplacementCodeuiTexCoord2fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fVertex3fSUN"), def_glReplacementCodeuiTexCoord2fVertex3fSUN);
  fn_glReplacementCodeuiTexCoord2fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fVertex3fvSUN"), def_glReplacementCodeuiTexCoord2fVertex3fvSUN);
  fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN"), def_glReplacementCodeuiTexCoord2fNormal3fVertex3fSUN);
  fn_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN"), def_glReplacementCodeuiTexCoord2fNormal3fVertex3fvSUN);
  fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN"), def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fSUN);
  fn_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN = new Deno.UnsafeFnPointer(proc("glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN"), def_glReplacementCodeuiTexCoord2fColor4fNormal3fVertex3fvSUN);
}
