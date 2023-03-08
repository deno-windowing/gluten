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
export const MAX_VERTEX_STREAMS_ATI = 0x876b;
export const VERTEX_STREAM0_ATI = 0x876c;
export const VERTEX_STREAM1_ATI = 0x876d;
export const VERTEX_STREAM2_ATI = 0x876e;
export const VERTEX_STREAM3_ATI = 0x876f;
export const VERTEX_STREAM4_ATI = 0x8770;
export const VERTEX_STREAM5_ATI = 0x8771;
export const VERTEX_STREAM6_ATI = 0x8772;
export const VERTEX_STREAM7_ATI = 0x8773;
export const VERTEX_SOURCE_ATI = 0x8774;

/// Commands

export const def_glVertexStream1sATI = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glVertexStream1sATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1sATI>;

export function VertexStream1sATI(
  stream: GLenum,
  x: GLshort,
): void {
  fn_glVertexStream1sATI.call(
    stream,
    x,
  );
}

export const def_glVertexStream1svATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream1svATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1svATI>;

export function VertexStream1svATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream1svATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream1iATI = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glVertexStream1iATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1iATI>;

export function VertexStream1iATI(
  stream: GLenum,
  x: GLint,
): void {
  fn_glVertexStream1iATI.call(
    stream,
    x,
  );
}

export const def_glVertexStream1ivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream1ivATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1ivATI>;

export function VertexStream1ivATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream1ivATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream1fATI = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glVertexStream1fATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1fATI>;

export function VertexStream1fATI(
  stream: GLenum,
  x: GLfloat,
): void {
  fn_glVertexStream1fATI.call(
    stream,
    x,
  );
}

export const def_glVertexStream1fvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream1fvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1fvATI>;

export function VertexStream1fvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream1fvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream1dATI = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexStream1dATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1dATI>;

export function VertexStream1dATI(
  stream: GLenum,
  x: GLdouble,
): void {
  fn_glVertexStream1dATI.call(
    stream,
    x,
  );
}

export const def_glVertexStream1dvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream1dvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream1dvATI>;

export function VertexStream1dvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream1dvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream2sATI = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexStream2sATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2sATI>;

export function VertexStream2sATI(
  stream: GLenum,
  x: GLshort,
  y: GLshort,
): void {
  fn_glVertexStream2sATI.call(
    stream,
    x,
    y,
  );
}

export const def_glVertexStream2svATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream2svATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2svATI>;

export function VertexStream2svATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream2svATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream2iATI = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexStream2iATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2iATI>;

export function VertexStream2iATI(
  stream: GLenum,
  x: GLint,
  y: GLint,
): void {
  fn_glVertexStream2iATI.call(
    stream,
    x,
    y,
  );
}

export const def_glVertexStream2ivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream2ivATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2ivATI>;

export function VertexStream2ivATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream2ivATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream2fATI = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexStream2fATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2fATI>;

export function VertexStream2fATI(
  stream: GLenum,
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glVertexStream2fATI.call(
    stream,
    x,
    y,
  );
}

export const def_glVertexStream2fvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream2fvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2fvATI>;

export function VertexStream2fvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream2fvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream2dATI = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexStream2dATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2dATI>;

export function VertexStream2dATI(
  stream: GLenum,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexStream2dATI.call(
    stream,
    x,
    y,
  );
}

export const def_glVertexStream2dvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream2dvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream2dvATI>;

export function VertexStream2dvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream2dvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream3sATI = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexStream3sATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3sATI>;

export function VertexStream3sATI(
  stream: GLenum,
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glVertexStream3sATI.call(
    stream,
    x,
    y,
    z,
  );
}

export const def_glVertexStream3svATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream3svATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3svATI>;

export function VertexStream3svATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream3svATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream3iATI = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexStream3iATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3iATI>;

export function VertexStream3iATI(
  stream: GLenum,
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glVertexStream3iATI.call(
    stream,
    x,
    y,
    z,
  );
}

export const def_glVertexStream3ivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream3ivATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3ivATI>;

export function VertexStream3ivATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream3ivATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream3fATI = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexStream3fATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3fATI>;

export function VertexStream3fATI(
  stream: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glVertexStream3fATI.call(
    stream,
    x,
    y,
    z,
  );
}

export const def_glVertexStream3fvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream3fvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3fvATI>;

export function VertexStream3fvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream3fvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream3dATI = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexStream3dATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3dATI>;

export function VertexStream3dATI(
  stream: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexStream3dATI.call(
    stream,
    x,
    y,
    z,
  );
}

export const def_glVertexStream3dvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream3dvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream3dvATI>;

export function VertexStream3dvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream3dvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream4sATI = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexStream4sATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4sATI>;

export function VertexStream4sATI(
  stream: GLenum,
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glVertexStream4sATI.call(
    stream,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexStream4svATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream4svATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4svATI>;

export function VertexStream4svATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream4svATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream4iATI = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexStream4iATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4iATI>;

export function VertexStream4iATI(
  stream: GLenum,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glVertexStream4iATI.call(
    stream,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexStream4ivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream4ivATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4ivATI>;

export function VertexStream4ivATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream4ivATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream4fATI = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexStream4fATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4fATI>;

export function VertexStream4fATI(
  stream: GLenum,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glVertexStream4fATI.call(
    stream,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexStream4fvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream4fvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4fvATI>;

export function VertexStream4fvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream4fvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glVertexStream4dATI = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexStream4dATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4dATI>;

export function VertexStream4dATI(
  stream: GLenum,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexStream4dATI.call(
    stream,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexStream4dvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexStream4dvATI!: Deno.UnsafeFnPointer<typeof def_glVertexStream4dvATI>;

export function VertexStream4dvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glVertexStream4dvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glNormalStream3bATI = {
  parameters: ["u32", "i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glNormalStream3bATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3bATI>;

export function NormalStream3bATI(
  stream: GLenum,
  nx: GLbyte,
  ny: GLbyte,
  nz: GLbyte,
): void {
  fn_glNormalStream3bATI.call(
    stream,
    nx,
    ny,
    nz,
  );
}

export const def_glNormalStream3bvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalStream3bvATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3bvATI>;

export function NormalStream3bvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glNormalStream3bvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glNormalStream3sATI = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glNormalStream3sATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3sATI>;

export function NormalStream3sATI(
  stream: GLenum,
  nx: GLshort,
  ny: GLshort,
  nz: GLshort,
): void {
  fn_glNormalStream3sATI.call(
    stream,
    nx,
    ny,
    nz,
  );
}

export const def_glNormalStream3svATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalStream3svATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3svATI>;

export function NormalStream3svATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glNormalStream3svATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glNormalStream3iATI = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNormalStream3iATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3iATI>;

export function NormalStream3iATI(
  stream: GLenum,
  nx: GLint,
  ny: GLint,
  nz: GLint,
): void {
  fn_glNormalStream3iATI.call(
    stream,
    nx,
    ny,
    nz,
  );
}

export const def_glNormalStream3ivATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalStream3ivATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3ivATI>;

export function NormalStream3ivATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glNormalStream3ivATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glNormalStream3fATI = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glNormalStream3fATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3fATI>;

export function NormalStream3fATI(
  stream: GLenum,
  nx: GLfloat,
  ny: GLfloat,
  nz: GLfloat,
): void {
  fn_glNormalStream3fATI.call(
    stream,
    nx,
    ny,
    nz,
  );
}

export const def_glNormalStream3fvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalStream3fvATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3fvATI>;

export function NormalStream3fvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glNormalStream3fvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glNormalStream3dATI = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glNormalStream3dATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3dATI>;

export function NormalStream3dATI(
  stream: GLenum,
  nx: GLdouble,
  ny: GLdouble,
  nz: GLdouble,
): void {
  fn_glNormalStream3dATI.call(
    stream,
    nx,
    ny,
    nz,
  );
}

export const def_glNormalStream3dvATI = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalStream3dvATI!: Deno.UnsafeFnPointer<typeof def_glNormalStream3dvATI>;

export function NormalStream3dvATI(
  stream: GLenum,
  coords: Buffer,
): void {
  fn_glNormalStream3dvATI.call(
    stream,
    bufferToFFI(coords),
  );
}

export const def_glClientActiveVertexStreamATI = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glClientActiveVertexStreamATI!: Deno.UnsafeFnPointer<typeof def_glClientActiveVertexStreamATI>;

export function ClientActiveVertexStreamATI(
  stream: GLenum,
): void {
  fn_glClientActiveVertexStreamATI.call(
    stream,
  );
}

export const def_glVertexBlendEnviATI = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glVertexBlendEnviATI!: Deno.UnsafeFnPointer<typeof def_glVertexBlendEnviATI>;

export function VertexBlendEnviATI(
  pname: GLenum,
  param: GLint,
): void {
  fn_glVertexBlendEnviATI.call(
    pname,
    param,
  );
}

export const def_glVertexBlendEnvfATI = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glVertexBlendEnvfATI!: Deno.UnsafeFnPointer<typeof def_glVertexBlendEnvfATI>;

export function VertexBlendEnvfATI(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glVertexBlendEnvfATI.call(
    pname,
    param,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexStream1sATI = new Deno.UnsafeFnPointer(proc("glVertexStream1sATI")!, def_glVertexStream1sATI);
  fn_glVertexStream1svATI = new Deno.UnsafeFnPointer(proc("glVertexStream1svATI")!, def_glVertexStream1svATI);
  fn_glVertexStream1iATI = new Deno.UnsafeFnPointer(proc("glVertexStream1iATI")!, def_glVertexStream1iATI);
  fn_glVertexStream1ivATI = new Deno.UnsafeFnPointer(proc("glVertexStream1ivATI")!, def_glVertexStream1ivATI);
  fn_glVertexStream1fATI = new Deno.UnsafeFnPointer(proc("glVertexStream1fATI")!, def_glVertexStream1fATI);
  fn_glVertexStream1fvATI = new Deno.UnsafeFnPointer(proc("glVertexStream1fvATI")!, def_glVertexStream1fvATI);
  fn_glVertexStream1dATI = new Deno.UnsafeFnPointer(proc("glVertexStream1dATI")!, def_glVertexStream1dATI);
  fn_glVertexStream1dvATI = new Deno.UnsafeFnPointer(proc("glVertexStream1dvATI")!, def_glVertexStream1dvATI);
  fn_glVertexStream2sATI = new Deno.UnsafeFnPointer(proc("glVertexStream2sATI")!, def_glVertexStream2sATI);
  fn_glVertexStream2svATI = new Deno.UnsafeFnPointer(proc("glVertexStream2svATI")!, def_glVertexStream2svATI);
  fn_glVertexStream2iATI = new Deno.UnsafeFnPointer(proc("glVertexStream2iATI")!, def_glVertexStream2iATI);
  fn_glVertexStream2ivATI = new Deno.UnsafeFnPointer(proc("glVertexStream2ivATI")!, def_glVertexStream2ivATI);
  fn_glVertexStream2fATI = new Deno.UnsafeFnPointer(proc("glVertexStream2fATI")!, def_glVertexStream2fATI);
  fn_glVertexStream2fvATI = new Deno.UnsafeFnPointer(proc("glVertexStream2fvATI")!, def_glVertexStream2fvATI);
  fn_glVertexStream2dATI = new Deno.UnsafeFnPointer(proc("glVertexStream2dATI")!, def_glVertexStream2dATI);
  fn_glVertexStream2dvATI = new Deno.UnsafeFnPointer(proc("glVertexStream2dvATI")!, def_glVertexStream2dvATI);
  fn_glVertexStream3sATI = new Deno.UnsafeFnPointer(proc("glVertexStream3sATI")!, def_glVertexStream3sATI);
  fn_glVertexStream3svATI = new Deno.UnsafeFnPointer(proc("glVertexStream3svATI")!, def_glVertexStream3svATI);
  fn_glVertexStream3iATI = new Deno.UnsafeFnPointer(proc("glVertexStream3iATI")!, def_glVertexStream3iATI);
  fn_glVertexStream3ivATI = new Deno.UnsafeFnPointer(proc("glVertexStream3ivATI")!, def_glVertexStream3ivATI);
  fn_glVertexStream3fATI = new Deno.UnsafeFnPointer(proc("glVertexStream3fATI")!, def_glVertexStream3fATI);
  fn_glVertexStream3fvATI = new Deno.UnsafeFnPointer(proc("glVertexStream3fvATI")!, def_glVertexStream3fvATI);
  fn_glVertexStream3dATI = new Deno.UnsafeFnPointer(proc("glVertexStream3dATI")!, def_glVertexStream3dATI);
  fn_glVertexStream3dvATI = new Deno.UnsafeFnPointer(proc("glVertexStream3dvATI")!, def_glVertexStream3dvATI);
  fn_glVertexStream4sATI = new Deno.UnsafeFnPointer(proc("glVertexStream4sATI")!, def_glVertexStream4sATI);
  fn_glVertexStream4svATI = new Deno.UnsafeFnPointer(proc("glVertexStream4svATI")!, def_glVertexStream4svATI);
  fn_glVertexStream4iATI = new Deno.UnsafeFnPointer(proc("glVertexStream4iATI")!, def_glVertexStream4iATI);
  fn_glVertexStream4ivATI = new Deno.UnsafeFnPointer(proc("glVertexStream4ivATI")!, def_glVertexStream4ivATI);
  fn_glVertexStream4fATI = new Deno.UnsafeFnPointer(proc("glVertexStream4fATI")!, def_glVertexStream4fATI);
  fn_glVertexStream4fvATI = new Deno.UnsafeFnPointer(proc("glVertexStream4fvATI")!, def_glVertexStream4fvATI);
  fn_glVertexStream4dATI = new Deno.UnsafeFnPointer(proc("glVertexStream4dATI")!, def_glVertexStream4dATI);
  fn_glVertexStream4dvATI = new Deno.UnsafeFnPointer(proc("glVertexStream4dvATI")!, def_glVertexStream4dvATI);
  fn_glNormalStream3bATI = new Deno.UnsafeFnPointer(proc("glNormalStream3bATI")!, def_glNormalStream3bATI);
  fn_glNormalStream3bvATI = new Deno.UnsafeFnPointer(proc("glNormalStream3bvATI")!, def_glNormalStream3bvATI);
  fn_glNormalStream3sATI = new Deno.UnsafeFnPointer(proc("glNormalStream3sATI")!, def_glNormalStream3sATI);
  fn_glNormalStream3svATI = new Deno.UnsafeFnPointer(proc("glNormalStream3svATI")!, def_glNormalStream3svATI);
  fn_glNormalStream3iATI = new Deno.UnsafeFnPointer(proc("glNormalStream3iATI")!, def_glNormalStream3iATI);
  fn_glNormalStream3ivATI = new Deno.UnsafeFnPointer(proc("glNormalStream3ivATI")!, def_glNormalStream3ivATI);
  fn_glNormalStream3fATI = new Deno.UnsafeFnPointer(proc("glNormalStream3fATI")!, def_glNormalStream3fATI);
  fn_glNormalStream3fvATI = new Deno.UnsafeFnPointer(proc("glNormalStream3fvATI")!, def_glNormalStream3fvATI);
  fn_glNormalStream3dATI = new Deno.UnsafeFnPointer(proc("glNormalStream3dATI")!, def_glNormalStream3dATI);
  fn_glNormalStream3dvATI = new Deno.UnsafeFnPointer(proc("glNormalStream3dvATI")!, def_glNormalStream3dvATI);
  fn_glClientActiveVertexStreamATI = new Deno.UnsafeFnPointer(proc("glClientActiveVertexStreamATI")!, def_glClientActiveVertexStreamATI);
  fn_glVertexBlendEnviATI = new Deno.UnsafeFnPointer(proc("glVertexBlendEnviATI")!, def_glVertexBlendEnviATI);
  fn_glVertexBlendEnvfATI = new Deno.UnsafeFnPointer(proc("glVertexBlendEnvfATI")!, def_glVertexBlendEnvfATI);
}
