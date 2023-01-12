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
export const TANGENT_ARRAY_EXT = 0x8439;
export const BINORMAL_ARRAY_EXT = 0x843a;
export const CURRENT_TANGENT_EXT = 0x843b;
export const CURRENT_BINORMAL_EXT = 0x843c;
export const TANGENT_ARRAY_TYPE_EXT = 0x843e;
export const TANGENT_ARRAY_STRIDE_EXT = 0x843f;
export const BINORMAL_ARRAY_TYPE_EXT = 0x8440;
export const BINORMAL_ARRAY_STRIDE_EXT = 0x8441;
export const TANGENT_ARRAY_POINTER_EXT = 0x8442;
export const BINORMAL_ARRAY_POINTER_EXT = 0x8443;
export const MAP1_TANGENT_EXT = 0x8444;
export const MAP2_TANGENT_EXT = 0x8445;
export const MAP1_BINORMAL_EXT = 0x8446;
export const MAP2_BINORMAL_EXT = 0x8447;

/// Commands

export const def_glTangent3bEXT = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glTangent3bEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3bEXT>;

export function Tangent3bEXT(
  tx: GLbyte,
  ty: GLbyte,
  tz: GLbyte,
): void {
  fn_glTangent3bEXT.call(
    tx,
    ty,
    tz,
  );
}

export const def_glTangent3bvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTangent3bvEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3bvEXT>;

export function Tangent3bvEXT(
  v: Buffer,
): void {
  fn_glTangent3bvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glTangent3dEXT = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glTangent3dEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3dEXT>;

export function Tangent3dEXT(
  tx: GLdouble,
  ty: GLdouble,
  tz: GLdouble,
): void {
  fn_glTangent3dEXT.call(
    tx,
    ty,
    tz,
  );
}

export const def_glTangent3dvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTangent3dvEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3dvEXT>;

export function Tangent3dvEXT(
  v: Buffer,
): void {
  fn_glTangent3dvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glTangent3fEXT = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glTangent3fEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3fEXT>;

export function Tangent3fEXT(
  tx: GLfloat,
  ty: GLfloat,
  tz: GLfloat,
): void {
  fn_glTangent3fEXT.call(
    tx,
    ty,
    tz,
  );
}

export const def_glTangent3fvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTangent3fvEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3fvEXT>;

export function Tangent3fvEXT(
  v: Buffer,
): void {
  fn_glTangent3fvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glTangent3iEXT = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTangent3iEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3iEXT>;

export function Tangent3iEXT(
  tx: GLint,
  ty: GLint,
  tz: GLint,
): void {
  fn_glTangent3iEXT.call(
    tx,
    ty,
    tz,
  );
}

export const def_glTangent3ivEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTangent3ivEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3ivEXT>;

export function Tangent3ivEXT(
  v: Buffer,
): void {
  fn_glTangent3ivEXT.call(
    bufferToFFI(v),
  );
}

export const def_glTangent3sEXT = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glTangent3sEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3sEXT>;

export function Tangent3sEXT(
  tx: GLshort,
  ty: GLshort,
  tz: GLshort,
): void {
  fn_glTangent3sEXT.call(
    tx,
    ty,
    tz,
  );
}

export const def_glTangent3svEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTangent3svEXT!: Deno.UnsafeFnPointer<typeof def_glTangent3svEXT>;

export function Tangent3svEXT(
  v: Buffer,
): void {
  fn_glTangent3svEXT.call(
    bufferToFFI(v),
  );
}

export const def_glBinormal3bEXT = {
  parameters: ["i8", "i8", "i8"],
  result: "void",
} as const;

let fn_glBinormal3bEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3bEXT>;

export function Binormal3bEXT(
  bx: GLbyte,
  by: GLbyte,
  bz: GLbyte,
): void {
  fn_glBinormal3bEXT.call(
    bx,
    by,
    bz,
  );
}

export const def_glBinormal3bvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glBinormal3bvEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3bvEXT>;

export function Binormal3bvEXT(
  v: Buffer,
): void {
  fn_glBinormal3bvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glBinormal3dEXT = {
  parameters: ["f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glBinormal3dEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3dEXT>;

export function Binormal3dEXT(
  bx: GLdouble,
  by: GLdouble,
  bz: GLdouble,
): void {
  fn_glBinormal3dEXT.call(
    bx,
    by,
    bz,
  );
}

export const def_glBinormal3dvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glBinormal3dvEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3dvEXT>;

export function Binormal3dvEXT(
  v: Buffer,
): void {
  fn_glBinormal3dvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glBinormal3fEXT = {
  parameters: ["f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glBinormal3fEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3fEXT>;

export function Binormal3fEXT(
  bx: GLfloat,
  by: GLfloat,
  bz: GLfloat,
): void {
  fn_glBinormal3fEXT.call(
    bx,
    by,
    bz,
  );
}

export const def_glBinormal3fvEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glBinormal3fvEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3fvEXT>;

export function Binormal3fvEXT(
  v: Buffer,
): void {
  fn_glBinormal3fvEXT.call(
    bufferToFFI(v),
  );
}

export const def_glBinormal3iEXT = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glBinormal3iEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3iEXT>;

export function Binormal3iEXT(
  bx: GLint,
  by: GLint,
  bz: GLint,
): void {
  fn_glBinormal3iEXT.call(
    bx,
    by,
    bz,
  );
}

export const def_glBinormal3ivEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glBinormal3ivEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3ivEXT>;

export function Binormal3ivEXT(
  v: Buffer,
): void {
  fn_glBinormal3ivEXT.call(
    bufferToFFI(v),
  );
}

export const def_glBinormal3sEXT = {
  parameters: ["i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glBinormal3sEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3sEXT>;

export function Binormal3sEXT(
  bx: GLshort,
  by: GLshort,
  bz: GLshort,
): void {
  fn_glBinormal3sEXT.call(
    bx,
    by,
    bz,
  );
}

export const def_glBinormal3svEXT = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glBinormal3svEXT!: Deno.UnsafeFnPointer<typeof def_glBinormal3svEXT>;

export function Binormal3svEXT(
  v: Buffer,
): void {
  fn_glBinormal3svEXT.call(
    bufferToFFI(v),
  );
}

export const def_glTangentPointerEXT = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glTangentPointerEXT!: Deno.UnsafeFnPointer<
  typeof def_glTangentPointerEXT
>;

export function TangentPointerEXT(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glTangentPointerEXT.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glBinormalPointerEXT = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBinormalPointerEXT!: Deno.UnsafeFnPointer<
  typeof def_glBinormalPointerEXT
>;

export function BinormalPointerEXT(
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glBinormalPointerEXT.call(
    type,
    stride,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glTangent3bEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3bEXT"),
    def_glTangent3bEXT,
  );
  fn_glTangent3bvEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3bvEXT"),
    def_glTangent3bvEXT,
  );
  fn_glTangent3dEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3dEXT"),
    def_glTangent3dEXT,
  );
  fn_glTangent3dvEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3dvEXT"),
    def_glTangent3dvEXT,
  );
  fn_glTangent3fEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3fEXT"),
    def_glTangent3fEXT,
  );
  fn_glTangent3fvEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3fvEXT"),
    def_glTangent3fvEXT,
  );
  fn_glTangent3iEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3iEXT"),
    def_glTangent3iEXT,
  );
  fn_glTangent3ivEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3ivEXT"),
    def_glTangent3ivEXT,
  );
  fn_glTangent3sEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3sEXT"),
    def_glTangent3sEXT,
  );
  fn_glTangent3svEXT = new Deno.UnsafeFnPointer(
    proc("glTangent3svEXT"),
    def_glTangent3svEXT,
  );
  fn_glBinormal3bEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3bEXT"),
    def_glBinormal3bEXT,
  );
  fn_glBinormal3bvEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3bvEXT"),
    def_glBinormal3bvEXT,
  );
  fn_glBinormal3dEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3dEXT"),
    def_glBinormal3dEXT,
  );
  fn_glBinormal3dvEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3dvEXT"),
    def_glBinormal3dvEXT,
  );
  fn_glBinormal3fEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3fEXT"),
    def_glBinormal3fEXT,
  );
  fn_glBinormal3fvEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3fvEXT"),
    def_glBinormal3fvEXT,
  );
  fn_glBinormal3iEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3iEXT"),
    def_glBinormal3iEXT,
  );
  fn_glBinormal3ivEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3ivEXT"),
    def_glBinormal3ivEXT,
  );
  fn_glBinormal3sEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3sEXT"),
    def_glBinormal3sEXT,
  );
  fn_glBinormal3svEXT = new Deno.UnsafeFnPointer(
    proc("glBinormal3svEXT"),
    def_glBinormal3svEXT,
  );
  fn_glTangentPointerEXT = new Deno.UnsafeFnPointer(
    proc("glTangentPointerEXT"),
    def_glTangentPointerEXT,
  );
  fn_glBinormalPointerEXT = new Deno.UnsafeFnPointer(
    proc("glBinormalPointerEXT"),
    def_glBinormalPointerEXT,
  );
}
