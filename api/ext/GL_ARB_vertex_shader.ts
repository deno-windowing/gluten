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
export const VERTEX_SHADER_ARB = 0x8b31;
export const MAX_VERTEX_UNIFORM_COMPONENTS_ARB = 0x8b4a;
export const MAX_VARYING_FLOATS_ARB = 0x8b4b;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS_ARB = 0x8b4c;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS_ARB = 0x8b4d;
export const OBJECT_ACTIVE_ATTRIBUTES_ARB = 0x8b89;
export const OBJECT_ACTIVE_ATTRIBUTE_MAX_LENGTH_ARB = 0x8b8a;
export const MAX_VERTEX_ATTRIBS_ARB = 0x8869;
export const MAX_TEXTURE_IMAGE_UNITS_ARB = 0x8872;
export const MAX_TEXTURE_COORDS_ARB = 0x8871;
export const VERTEX_PROGRAM_POINT_SIZE_ARB = 0x8642;
export const VERTEX_PROGRAM_TWO_SIDE_ARB = 0x8643;
export const VERTEX_ATTRIB_ARRAY_ENABLED_ARB = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE_ARB = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE_ARB = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE_ARB = 0x8625;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED_ARB = 0x886a;
export const CURRENT_VERTEX_ATTRIB_ARB = 0x8626;
export const VERTEX_ATTRIB_ARRAY_POINTER_ARB = 0x8645;
export const FLOAT = 0x1406;
export const FLOAT_VEC2_ARB = 0x8b50;
export const FLOAT_VEC3_ARB = 0x8b51;
export const FLOAT_VEC4_ARB = 0x8b52;
export const FLOAT_MAT2_ARB = 0x8b5a;
export const FLOAT_MAT3_ARB = 0x8b5b;
export const FLOAT_MAT4_ARB = 0x8b5c;

/// Commands

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

export const def_glBindAttribLocationARB = {
  parameters: ["buffer", "u32", "buffer"],
  result: "void",
} as const;

let fn_glBindAttribLocationARB!: Deno.UnsafeFnPointer<
  typeof def_glBindAttribLocationARB
>;

export function BindAttribLocationARB(
  programObj: GLhandleARB,
  index: GLuint,
  name: Buffer,
): void {
  fn_glBindAttribLocationARB.call(
    bufferToFFI(programObj),
    index,
    bufferToFFI(name),
  );
}

export const def_glGetActiveAttribARB = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetActiveAttribARB!: Deno.UnsafeFnPointer<
  typeof def_glGetActiveAttribARB
>;

export function GetActiveAttribARB(
  programObj: GLhandleARB,
  index: GLuint,
  maxLength: GLsizei,
  length: Buffer,
  size: Buffer,
  type: Buffer,
  name: Buffer,
): void {
  fn_glGetActiveAttribARB.call(
    bufferToFFI(programObj),
    index,
    maxLength,
    bufferToFFI(length),
    bufferToFFI(size),
    bufferToFFI(type),
    bufferToFFI(name),
  );
}

export const def_glGetAttribLocationARB = {
  parameters: ["buffer", "buffer"],
  result: "i32",
} as const;

let fn_glGetAttribLocationARB!: Deno.UnsafeFnPointer<
  typeof def_glGetAttribLocationARB
>;

export function GetAttribLocationARB(
  programObj: GLhandleARB,
  name: Buffer,
): GLint {
  return fn_glGetAttribLocationARB.call(
    bufferToFFI(programObj),
    bufferToFFI(name),
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

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttrib1fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fARB")!,
    def_glVertexAttrib1fARB,
  );
  fn_glVertexAttrib1sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1sARB")!,
    def_glVertexAttrib1sARB,
  );
  fn_glVertexAttrib1dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dARB")!,
    def_glVertexAttrib1dARB,
  );
  fn_glVertexAttrib2fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fARB")!,
    def_glVertexAttrib2fARB,
  );
  fn_glVertexAttrib2sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2sARB")!,
    def_glVertexAttrib2sARB,
  );
  fn_glVertexAttrib2dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dARB")!,
    def_glVertexAttrib2dARB,
  );
  fn_glVertexAttrib3fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fARB")!,
    def_glVertexAttrib3fARB,
  );
  fn_glVertexAttrib3sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3sARB")!,
    def_glVertexAttrib3sARB,
  );
  fn_glVertexAttrib3dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dARB")!,
    def_glVertexAttrib3dARB,
  );
  fn_glVertexAttrib4fARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fARB")!,
    def_glVertexAttrib4fARB,
  );
  fn_glVertexAttrib4sARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4sARB")!,
    def_glVertexAttrib4sARB,
  );
  fn_glVertexAttrib4dARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dARB")!,
    def_glVertexAttrib4dARB,
  );
  fn_glVertexAttrib4NubARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NubARB")!,
    def_glVertexAttrib4NubARB,
  );
  fn_glVertexAttrib1fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fvARB")!,
    def_glVertexAttrib1fvARB,
  );
  fn_glVertexAttrib1svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1svARB")!,
    def_glVertexAttrib1svARB,
  );
  fn_glVertexAttrib1dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dvARB")!,
    def_glVertexAttrib1dvARB,
  );
  fn_glVertexAttrib2fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fvARB")!,
    def_glVertexAttrib2fvARB,
  );
  fn_glVertexAttrib2svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2svARB")!,
    def_glVertexAttrib2svARB,
  );
  fn_glVertexAttrib2dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dvARB")!,
    def_glVertexAttrib2dvARB,
  );
  fn_glVertexAttrib3fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fvARB")!,
    def_glVertexAttrib3fvARB,
  );
  fn_glVertexAttrib3svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3svARB")!,
    def_glVertexAttrib3svARB,
  );
  fn_glVertexAttrib3dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dvARB")!,
    def_glVertexAttrib3dvARB,
  );
  fn_glVertexAttrib4fvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fvARB")!,
    def_glVertexAttrib4fvARB,
  );
  fn_glVertexAttrib4svARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4svARB")!,
    def_glVertexAttrib4svARB,
  );
  fn_glVertexAttrib4dvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dvARB")!,
    def_glVertexAttrib4dvARB,
  );
  fn_glVertexAttrib4ivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ivARB")!,
    def_glVertexAttrib4ivARB,
  );
  fn_glVertexAttrib4bvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4bvARB")!,
    def_glVertexAttrib4bvARB,
  );
  fn_glVertexAttrib4ubvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ubvARB")!,
    def_glVertexAttrib4ubvARB,
  );
  fn_glVertexAttrib4usvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4usvARB")!,
    def_glVertexAttrib4usvARB,
  );
  fn_glVertexAttrib4uivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4uivARB")!,
    def_glVertexAttrib4uivARB,
  );
  fn_glVertexAttrib4NbvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NbvARB")!,
    def_glVertexAttrib4NbvARB,
  );
  fn_glVertexAttrib4NsvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NsvARB")!,
    def_glVertexAttrib4NsvARB,
  );
  fn_glVertexAttrib4NivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NivARB")!,
    def_glVertexAttrib4NivARB,
  );
  fn_glVertexAttrib4NubvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NubvARB")!,
    def_glVertexAttrib4NubvARB,
  );
  fn_glVertexAttrib4NusvARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NusvARB")!,
    def_glVertexAttrib4NusvARB,
  );
  fn_glVertexAttrib4NuivARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4NuivARB")!,
    def_glVertexAttrib4NuivARB,
  );
  fn_glVertexAttribPointerARB = new Deno.UnsafeFnPointer(
    proc("glVertexAttribPointerARB")!,
    def_glVertexAttribPointerARB,
  );
  fn_glEnableVertexAttribArrayARB = new Deno.UnsafeFnPointer(
    proc("glEnableVertexAttribArrayARB")!,
    def_glEnableVertexAttribArrayARB,
  );
  fn_glDisableVertexAttribArrayARB = new Deno.UnsafeFnPointer(
    proc("glDisableVertexAttribArrayARB")!,
    def_glDisableVertexAttribArrayARB,
  );
  fn_glBindAttribLocationARB = new Deno.UnsafeFnPointer(
    proc("glBindAttribLocationARB")!,
    def_glBindAttribLocationARB,
  );
  fn_glGetActiveAttribARB = new Deno.UnsafeFnPointer(
    proc("glGetActiveAttribARB")!,
    def_glGetActiveAttribARB,
  );
  fn_glGetAttribLocationARB = new Deno.UnsafeFnPointer(
    proc("glGetAttribLocationARB")!,
    def_glGetAttribLocationARB,
  );
  fn_glGetVertexAttribdvARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribdvARB")!,
    def_glGetVertexAttribdvARB,
  );
  fn_glGetVertexAttribfvARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribfvARB")!,
    def_glGetVertexAttribfvARB,
  );
  fn_glGetVertexAttribivARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribivARB")!,
    def_glGetVertexAttribivARB,
  );
  fn_glGetVertexAttribPointervARB = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribPointervARB")!,
    def_glGetVertexAttribPointervARB,
  );
}
