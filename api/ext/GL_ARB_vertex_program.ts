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
export const COLOR_SUM_ARB = 0x8458;
export const VERTEX_PROGRAM_ARB = 0x8620;
export const VERTEX_ATTRIB_ARRAY_ENABLED_ARB = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE_ARB = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE_ARB = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE_ARB = 0x8625;
export const CURRENT_VERTEX_ATTRIB_ARB = 0x8626;
export const PROGRAM_LENGTH_ARB = 0x8627;
export const PROGRAM_STRING_ARB = 0x8628;
export const MAX_PROGRAM_MATRIX_STACK_DEPTH_ARB = 0x862e;
export const MAX_PROGRAM_MATRICES_ARB = 0x862f;
export const CURRENT_MATRIX_STACK_DEPTH_ARB = 0x8640;
export const CURRENT_MATRIX_ARB = 0x8641;
export const VERTEX_PROGRAM_POINT_SIZE_ARB = 0x8642;
export const VERTEX_PROGRAM_TWO_SIDE_ARB = 0x8643;
export const VERTEX_ATTRIB_ARRAY_POINTER_ARB = 0x8645;
export const PROGRAM_ERROR_POSITION_ARB = 0x864b;
export const PROGRAM_BINDING_ARB = 0x8677;
export const MAX_VERTEX_ATTRIBS_ARB = 0x8869;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED_ARB = 0x886a;
export const PROGRAM_ERROR_STRING_ARB = 0x8874;
export const PROGRAM_FORMAT_ASCII_ARB = 0x8875;
export const PROGRAM_FORMAT_ARB = 0x8876;
export const PROGRAM_INSTRUCTIONS_ARB = 0x88a0;
export const MAX_PROGRAM_INSTRUCTIONS_ARB = 0x88a1;
export const PROGRAM_NATIVE_INSTRUCTIONS_ARB = 0x88a2;
export const MAX_PROGRAM_NATIVE_INSTRUCTIONS_ARB = 0x88a3;
export const PROGRAM_TEMPORARIES_ARB = 0x88a4;
export const MAX_PROGRAM_TEMPORARIES_ARB = 0x88a5;
export const PROGRAM_NATIVE_TEMPORARIES_ARB = 0x88a6;
export const MAX_PROGRAM_NATIVE_TEMPORARIES_ARB = 0x88a7;
export const PROGRAM_PARAMETERS_ARB = 0x88a8;
export const MAX_PROGRAM_PARAMETERS_ARB = 0x88a9;
export const PROGRAM_NATIVE_PARAMETERS_ARB = 0x88aa;
export const MAX_PROGRAM_NATIVE_PARAMETERS_ARB = 0x88ab;
export const PROGRAM_ATTRIBS_ARB = 0x88ac;
export const MAX_PROGRAM_ATTRIBS_ARB = 0x88ad;
export const PROGRAM_NATIVE_ATTRIBS_ARB = 0x88ae;
export const MAX_PROGRAM_NATIVE_ATTRIBS_ARB = 0x88af;
export const PROGRAM_ADDRESS_REGISTERS_ARB = 0x88b0;
export const MAX_PROGRAM_ADDRESS_REGISTERS_ARB = 0x88b1;
export const PROGRAM_NATIVE_ADDRESS_REGISTERS_ARB = 0x88b2;
export const MAX_PROGRAM_NATIVE_ADDRESS_REGISTERS_ARB = 0x88b3;
export const MAX_PROGRAM_LOCAL_PARAMETERS_ARB = 0x88b4;
export const MAX_PROGRAM_ENV_PARAMETERS_ARB = 0x88b5;
export const PROGRAM_UNDER_NATIVE_LIMITS_ARB = 0x88b6;
export const TRANSPOSE_CURRENT_MATRIX_ARB = 0x88b7;
export const MATRIX0_ARB = 0x88c0;
export const MATRIX1_ARB = 0x88c1;
export const MATRIX2_ARB = 0x88c2;
export const MATRIX3_ARB = 0x88c3;
export const MATRIX4_ARB = 0x88c4;
export const MATRIX5_ARB = 0x88c5;
export const MATRIX6_ARB = 0x88c6;
export const MATRIX7_ARB = 0x88c7;
export const MATRIX8_ARB = 0x88c8;
export const MATRIX9_ARB = 0x88c9;
export const MATRIX10_ARB = 0x88ca;
export const MATRIX11_ARB = 0x88cb;
export const MATRIX12_ARB = 0x88cc;
export const MATRIX13_ARB = 0x88cd;
export const MATRIX14_ARB = 0x88ce;
export const MATRIX15_ARB = 0x88cf;
export const MATRIX16_ARB = 0x88d0;
export const MATRIX17_ARB = 0x88d1;
export const MATRIX18_ARB = 0x88d2;
export const MATRIX19_ARB = 0x88d3;
export const MATRIX20_ARB = 0x88d4;
export const MATRIX21_ARB = 0x88d5;
export const MATRIX22_ARB = 0x88d6;
export const MATRIX23_ARB = 0x88d7;
export const MATRIX24_ARB = 0x88d8;
export const MATRIX25_ARB = 0x88d9;
export const MATRIX26_ARB = 0x88da;
export const MATRIX27_ARB = 0x88db;
export const MATRIX28_ARB = 0x88dc;
export const MATRIX29_ARB = 0x88dd;
export const MATRIX30_ARB = 0x88de;
export const MATRIX31_ARB = 0x88df;

/// Commands

export const def_glVertexAttrib1dARB = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib1dARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1dARB
>;

export function VertexAttrib1dARB(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttrib1dARB.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1dvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1dvARB
>;

export function VertexAttrib1dvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1dvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib1fARB = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib1fARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1fARB
>;

export function VertexAttrib1fARB(
  index: GLuint,
  x: GLfloat,
): void {
  fn_glVertexAttrib1fARB.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1fvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1fvARB
>;

export function VertexAttrib1fvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1fvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib1sARB = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib1sARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1sARB
>;

export function VertexAttrib1sARB(
  index: GLuint,
  x: GLshort,
): void {
  fn_glVertexAttrib1sARB.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1svARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1svARB
>;

export function VertexAttrib1svARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1svARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2dARB = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib2dARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2dARB
>;

export function VertexAttrib2dARB(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttrib2dARB.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2dvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2dvARB
>;

export function VertexAttrib2dvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2dvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2fARB = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib2fARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2fARB
>;

export function VertexAttrib2fARB(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glVertexAttrib2fARB.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2fvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2fvARB
>;

export function VertexAttrib2fvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2fvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2sARB = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib2sARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2sARB
>;

export function VertexAttrib2sARB(
  index: GLuint,
  x: GLshort,
  y: GLshort,
): void {
  fn_glVertexAttrib2sARB.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2svARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2svARB
>;

export function VertexAttrib2svARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2svARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3dARB = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib3dARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3dARB
>;

export function VertexAttrib3dARB(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttrib3dARB.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3dvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3dvARB
>;

export function VertexAttrib3dvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3dvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3fARB = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib3fARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3fARB
>;

export function VertexAttrib3fARB(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glVertexAttrib3fARB.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3fvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3fvARB
>;

export function VertexAttrib3fvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3fvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3sARB = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib3sARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3sARB
>;

export function VertexAttrib3sARB(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glVertexAttrib3sARB.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3svARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3svARB
>;

export function VertexAttrib3svARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3svARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NbvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NbvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NbvARB
>;

export function VertexAttrib4NbvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NbvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NivARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NivARB
>;

export function VertexAttrib4NivARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NivARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NsvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NsvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NsvARB
>;

export function VertexAttrib4NsvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NsvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NubARB = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glVertexAttrib4NubARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NubARB
>;

export function VertexAttrib4NubARB(
  index: GLuint,
  x: GLubyte,
  y: GLubyte,
  z: GLubyte,
  w: GLubyte,
): void {
  fn_glVertexAttrib4NubARB.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4NubvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NubvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NubvARB
>;

export function VertexAttrib4NubvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NubvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NuivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NuivARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NuivARB
>;

export function VertexAttrib4NuivARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NuivARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4NusvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4NusvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4NusvARB
>;

export function VertexAttrib4NusvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4NusvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4bvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4bvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4bvARB
>;

export function VertexAttrib4bvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4bvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4dARB = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib4dARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4dARB
>;

export function VertexAttrib4dARB(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttrib4dARB.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4dvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4dvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4dvARB
>;

export function VertexAttrib4dvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4dvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4fARB = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib4fARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4fARB
>;

export function VertexAttrib4fARB(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glVertexAttrib4fARB.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4fvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4fvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4fvARB
>;

export function VertexAttrib4fvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4fvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4ivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4ivARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4ivARB
>;

export function VertexAttrib4ivARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4ivARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4sARB = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib4sARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4sARB
>;

export function VertexAttrib4sARB(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glVertexAttrib4sARB.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4svARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4svARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4svARB
>;

export function VertexAttrib4svARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4svARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4ubvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4ubvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4ubvARB
>;

export function VertexAttrib4ubvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4ubvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4uivARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4uivARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4uivARB
>;

export function VertexAttrib4uivARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4uivARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4usvARB = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4usvARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4usvARB
>;

export function VertexAttrib4usvARB(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4usvARB.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribPointerARB = {
  parameters: ["u32", "i32", "u32", "u8", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribPointerARB!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribPointerARB
>;

export function VertexAttribPointerARB(
  index: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribPointerARB.call(
    index,
    size,
    type,
    normalized,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glEnableVertexAttribArrayARB = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableVertexAttribArrayARB!: Deno.UnsafeFnPointer<
  typeof def_glEnableVertexAttribArrayARB
>;

export function EnableVertexAttribArrayARB(
  index: GLuint,
): void {
  fn_glEnableVertexAttribArrayARB.call(
    index,
  );
}

export const def_glDisableVertexAttribArrayARB = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisableVertexAttribArrayARB!: Deno.UnsafeFnPointer<
  typeof def_glDisableVertexAttribArrayARB
>;

export function DisableVertexAttribArrayARB(
  index: GLuint,
): void {
  fn_glDisableVertexAttribArrayARB.call(
    index,
  );
}

export const def_glProgramStringARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramStringARB!: Deno.UnsafeFnPointer<typeof def_glProgramStringARB>;

export function ProgramStringARB(
  target: GLenum,
  format: GLenum,
  len: GLsizei,
  string: Buffer,
): void {
  fn_glProgramStringARB.call(
    target,
    format,
    len,
    bufferToFFI(string),
  );
}

export const def_glBindProgramARB = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindProgramARB!: Deno.UnsafeFnPointer<typeof def_glBindProgramARB>;

export function BindProgramARB(
  target: GLenum,
  program: GLuint,
): void {
  fn_glBindProgramARB.call(
    target,
    program,
  );
}

export const def_glDeleteProgramsARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramsARB!: Deno.UnsafeFnPointer<
  typeof def_glDeleteProgramsARB
>;

export function DeleteProgramsARB(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glDeleteProgramsARB.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glGenProgramsARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramsARB!: Deno.UnsafeFnPointer<typeof def_glGenProgramsARB>;

export function GenProgramsARB(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glGenProgramsARB.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glProgramEnvParameter4dARB = {
  parameters: ["u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4dARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramEnvParameter4dARB
>;

export function ProgramEnvParameter4dARB(
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramEnvParameter4dARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameter4dvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4dvARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramEnvParameter4dvARB
>;

export function ProgramEnvParameter4dvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameter4dvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParameter4fARB = {
  parameters: ["u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4fARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramEnvParameter4fARB
>;

export function ProgramEnvParameter4fARB(
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramEnvParameter4fARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameter4fvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4fvARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramEnvParameter4fvARB
>;

export function ProgramEnvParameter4fvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameter4fvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParameter4dARB = {
  parameters: ["u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4dARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramLocalParameter4dARB
>;

export function ProgramLocalParameter4dARB(
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramLocalParameter4dARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameter4dvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4dvARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramLocalParameter4dvARB
>;

export function ProgramLocalParameter4dvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameter4dvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParameter4fARB = {
  parameters: ["u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4fARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramLocalParameter4fARB
>;

export function ProgramLocalParameter4fARB(
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramLocalParameter4fARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameter4fvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4fvARB!: Deno.UnsafeFnPointer<
  typeof def_glProgramLocalParameter4fvARB
>;

export function ProgramLocalParameter4fvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameter4fvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterdvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterdvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramEnvParameterdvARB
>;

export function GetProgramEnvParameterdvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterdvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterfvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterfvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramEnvParameterfvARB
>;

export function GetProgramEnvParameterfvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterfvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterdvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterdvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramLocalParameterdvARB
>;

export function GetProgramLocalParameterdvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterdvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterfvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterfvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramLocalParameterfvARB
>;

export function GetProgramLocalParameterfvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterfvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramivARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramivARB>;

export function GetProgramivARB(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramivARB.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramStringARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramStringARB!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramStringARB
>;

export function GetProgramStringARB(
  target: GLenum,
  pname: GLenum,
  string: Buffer,
): void {
  fn_glGetProgramStringARB.call(
    target,
    pname,
    bufferToFFI(string),
  );
}

export const def_glGetVertexAttribdvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribdvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribdvARB
>;

export function GetVertexAttribdvARB(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribdvARB.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribfvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribfvARB!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribfvARB
>;

export function GetVertexAttribfvARB(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribfvARB.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribivARB!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribivARB
>;

export function GetVertexAttribivARB(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribivARB.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribPointervARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribPointervARB!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribPointervARB
>;

export function GetVertexAttribPointervARB(
  index: GLuint,
  pname: GLenum,
  pointer: Buffer,
): void {
  fn_glGetVertexAttribPointervARB.call(
    index,
    pname,
    bufferToFFI(pointer),
  );
}

export const def_glIsProgramARB = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramARB!: Deno.UnsafeFnPointer<typeof def_glIsProgramARB>;

export function IsProgramARB(
  program: GLuint,
): GLboolean {
  return fn_glIsProgramARB.call(
    program,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttrib1dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dARB"),
    def_glVertexAttrib1dARB,
  );
  fn_glVertexAttrib1dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dvARB"),
    def_glVertexAttrib1dvARB,
  );
  fn_glVertexAttrib1fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fARB"),
    def_glVertexAttrib1fARB,
  );
  fn_glVertexAttrib1fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fvARB"),
    def_glVertexAttrib1fvARB,
  );
  fn_glVertexAttrib1sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1sARB"),
    def_glVertexAttrib1sARB,
  );
  fn_glVertexAttrib1svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1svARB"),
    def_glVertexAttrib1svARB,
  );
  fn_glVertexAttrib2dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dARB"),
    def_glVertexAttrib2dARB,
  );
  fn_glVertexAttrib2dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dvARB"),
    def_glVertexAttrib2dvARB,
  );
  fn_glVertexAttrib2fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fARB"),
    def_glVertexAttrib2fARB,
  );
  fn_glVertexAttrib2fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fvARB"),
    def_glVertexAttrib2fvARB,
  );
  fn_glVertexAttrib2sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2sARB"),
    def_glVertexAttrib2sARB,
  );
  fn_glVertexAttrib2svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2svARB"),
    def_glVertexAttrib2svARB,
  );
  fn_glVertexAttrib3dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dARB"),
    def_glVertexAttrib3dARB,
  );
  fn_glVertexAttrib3dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dvARB"),
    def_glVertexAttrib3dvARB,
  );
  fn_glVertexAttrib3fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fARB"),
    def_glVertexAttrib3fARB,
  );
  fn_glVertexAttrib3fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fvARB"),
    def_glVertexAttrib3fvARB,
  );
  fn_glVertexAttrib3sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3sARB"),
    def_glVertexAttrib3sARB,
  );
  fn_glVertexAttrib3svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3svARB"),
    def_glVertexAttrib3svARB,
  );
  fn_glVertexAttrib4NbvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NbvARB"),
    def_glVertexAttrib4NbvARB,
  );
  fn_glVertexAttrib4NivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NivARB"),
    def_glVertexAttrib4NivARB,
  );
  fn_glVertexAttrib4NsvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NsvARB"),
    def_glVertexAttrib4NsvARB,
  );
  fn_glVertexAttrib4NubARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NubARB"),
    def_glVertexAttrib4NubARB,
  );
  fn_glVertexAttrib4NubvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NubvARB"),
    def_glVertexAttrib4NubvARB,
  );
  fn_glVertexAttrib4NuivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NuivARB"),
    def_glVertexAttrib4NuivARB,
  );
  fn_glVertexAttrib4NusvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NusvARB"),
    def_glVertexAttrib4NusvARB,
  );
  fn_glVertexAttrib4bvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4bvARB"),
    def_glVertexAttrib4bvARB,
  );
  fn_glVertexAttrib4dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dARB"),
    def_glVertexAttrib4dARB,
  );
  fn_glVertexAttrib4dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dvARB"),
    def_glVertexAttrib4dvARB,
  );
  fn_glVertexAttrib4fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fARB"),
    def_glVertexAttrib4fARB,
  );
  fn_glVertexAttrib4fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fvARB"),
    def_glVertexAttrib4fvARB,
  );
  fn_glVertexAttrib4ivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ivARB"),
    def_glVertexAttrib4ivARB,
  );
  fn_glVertexAttrib4sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4sARB"),
    def_glVertexAttrib4sARB,
  );
  fn_glVertexAttrib4svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4svARB"),
    def_glVertexAttrib4svARB,
  );
  fn_glVertexAttrib4ubvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ubvARB"),
    def_glVertexAttrib4ubvARB,
  );
  fn_glVertexAttrib4uivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4uivARB"),
    def_glVertexAttrib4uivARB,
  );
  fn_glVertexAttrib4usvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4usvARB"),
    def_glVertexAttrib4usvARB,
  );
  fn_glVertexAttribPointerARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttribPointerARB"),
    def_glVertexAttribPointerARB,
  );
  fn_glEnableVertexAttribArrayARB = new Deno.UnsafeFnPointer(
    proc("glEnableVertexAttribArrayARB"),
    def_glEnableVertexAttribArrayARB,
  );
  fn_glDisableVertexAttribArrayARB = new Deno.UnsafeFnPointer(
    proc("glDisableVertexAttribArrayARB"),
    def_glDisableVertexAttribArrayARB,
  );
  fn_glProgramStringARB = new Deno.UnsafeFnPointer(
    proc("glProgramStringARB"),
    def_glProgramStringARB,
  );
  fn_glBindProgramARB = new Deno.UnsafeFnPointer(
    proc("glBindProgramARB"),
    def_glBindProgramARB,
  );
  fn_glDeleteProgramsARB = new Deno.UnsafeFnPointer(
    proc("glDeleteProgramsARB"),
    def_glDeleteProgramsARB,
  );
  fn_glGenProgramsARB = new Deno.UnsafeFnPointer(
    proc("glGenProgramsARB"),
    def_glGenProgramsARB,
  );
  fn_glProgramEnvParameter4dARB = new Deno.UnsafeFnPointer(
    proc("glProgramEnvParameter4dARB"),
    def_glProgramEnvParameter4dARB,
  );
  fn_glProgramEnvParameter4dvARB = new Deno.UnsafeFnPointer(
    proc("glProgramEnvParameter4dvARB"),
    def_glProgramEnvParameter4dvARB,
  );
  fn_glProgramEnvParameter4fARB = new Deno.UnsafeFnPointer(
    proc("glProgramEnvParameter4fARB"),
    def_glProgramEnvParameter4fARB,
  );
  fn_glProgramEnvParameter4fvARB = new Deno.UnsafeFnPointer(
    proc("glProgramEnvParameter4fvARB"),
    def_glProgramEnvParameter4fvARB,
  );
  fn_glProgramLocalParameter4dARB = new Deno.UnsafeFnPointer(
    proc("glProgramLocalParameter4dARB"),
    def_glProgramLocalParameter4dARB,
  );
  fn_glProgramLocalParameter4dvARB = new Deno.UnsafeFnPointer(
    proc("glProgramLocalParameter4dvARB"),
    def_glProgramLocalParameter4dvARB,
  );
  fn_glProgramLocalParameter4fARB = new Deno.UnsafeFnPointer(
    proc("glProgramLocalParameter4fARB"),
    def_glProgramLocalParameter4fARB,
  );
  fn_glProgramLocalParameter4fvARB = new Deno.UnsafeFnPointer(
    proc("glProgramLocalParameter4fvARB"),
    def_glProgramLocalParameter4fvARB,
  );
  fn_glGetProgramEnvParameterdvARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramEnvParameterdvARB"),
    def_glGetProgramEnvParameterdvARB,
  );
  fn_glGetProgramEnvParameterfvARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramEnvParameterfvARB"),
    def_glGetProgramEnvParameterfvARB,
  );
  fn_glGetProgramLocalParameterdvARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramLocalParameterdvARB"),
    def_glGetProgramLocalParameterdvARB,
  );
  fn_glGetProgramLocalParameterfvARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramLocalParameterfvARB"),
    def_glGetProgramLocalParameterfvARB,
  );
  fn_glGetProgramivARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramivARB"),
    def_glGetProgramivARB,
  );
  fn_glGetProgramStringARB = new Deno.UnsafeFnPointer(
    proc("glGetProgramStringARB"),
    def_glGetProgramStringARB,
  );
  fn_glGetVertexAttribdvARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribdvARB"),
    def_glGetVertexAttribdvARB,
  );
  fn_glGetVertexAttribfvARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribfvARB"),
    def_glGetVertexAttribfvARB,
  );
  fn_glGetVertexAttribivARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribivARB"),
    def_glGetVertexAttribivARB,
  );
  fn_glGetVertexAttribPointervARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribPointervARB"),
    def_glGetVertexAttribPointervARB,
  );
  fn_glIsProgramARB = new Deno.UnsafeFnPointer(
    proc("glIsProgramARB"),
    def_glIsProgramARB,
  );
}
