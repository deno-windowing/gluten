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
export const VERTEX_ATTRIB_ARRAY_UNIFIED_NV = 0x8f1e;
export const ELEMENT_ARRAY_UNIFIED_NV = 0x8f1f;
export const VERTEX_ATTRIB_ARRAY_ADDRESS_NV = 0x8f20;
export const VERTEX_ARRAY_ADDRESS_NV = 0x8f21;
export const NORMAL_ARRAY_ADDRESS_NV = 0x8f22;
export const COLOR_ARRAY_ADDRESS_NV = 0x8f23;
export const INDEX_ARRAY_ADDRESS_NV = 0x8f24;
export const TEXTURE_COORD_ARRAY_ADDRESS_NV = 0x8f25;
export const EDGE_FLAG_ARRAY_ADDRESS_NV = 0x8f26;
export const SECONDARY_COLOR_ARRAY_ADDRESS_NV = 0x8f27;
export const FOG_COORD_ARRAY_ADDRESS_NV = 0x8f28;
export const ELEMENT_ARRAY_ADDRESS_NV = 0x8f29;
export const VERTEX_ATTRIB_ARRAY_LENGTH_NV = 0x8f2a;
export const VERTEX_ARRAY_LENGTH_NV = 0x8f2b;
export const NORMAL_ARRAY_LENGTH_NV = 0x8f2c;
export const COLOR_ARRAY_LENGTH_NV = 0x8f2d;
export const INDEX_ARRAY_LENGTH_NV = 0x8f2e;
export const TEXTURE_COORD_ARRAY_LENGTH_NV = 0x8f2f;
export const EDGE_FLAG_ARRAY_LENGTH_NV = 0x8f30;
export const SECONDARY_COLOR_ARRAY_LENGTH_NV = 0x8f31;
export const FOG_COORD_ARRAY_LENGTH_NV = 0x8f32;
export const ELEMENT_ARRAY_LENGTH_NV = 0x8f33;
export const DRAW_INDIRECT_UNIFIED_NV = 0x8f40;
export const DRAW_INDIRECT_ADDRESS_NV = 0x8f41;
export const DRAW_INDIRECT_LENGTH_NV = 0x8f42;

/// Commands

export const def_glBufferAddressRangeNV = {
  parameters: ["u32", "u32", "u64", "isize"],
  result: "void",
} as const;

let fn_glBufferAddressRangeNV!: Deno.UnsafeFnPointer<
  typeof def_glBufferAddressRangeNV
>;

export function BufferAddressRangeNV(
  pname: GLenum,
  index: GLuint,
  address: GLuint64EXT,
  length: GLsizeiptr,
): void {
  fn_glBufferAddressRangeNV.call(
    pname,
    index,
    address,
    length,
  );
}

export const def_glVertexFormatNV = {
  parameters: ["i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glVertexFormatNV!: Deno.UnsafeFnPointer<typeof def_glVertexFormatNV>;

export function VertexFormatNV(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glVertexFormatNV.call(
    size,
    type,
    stride,
  );
}

export const def_glNormalFormatNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glNormalFormatNV!: Deno.UnsafeFnPointer<typeof def_glNormalFormatNV>;

export function NormalFormatNV(
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glNormalFormatNV.call(
    type,
    stride,
  );
}

export const def_glColorFormatNV = {
  parameters: ["i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glColorFormatNV!: Deno.UnsafeFnPointer<typeof def_glColorFormatNV>;

export function ColorFormatNV(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glColorFormatNV.call(
    size,
    type,
    stride,
  );
}

export const def_glIndexFormatNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glIndexFormatNV!: Deno.UnsafeFnPointer<typeof def_glIndexFormatNV>;

export function IndexFormatNV(
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glIndexFormatNV.call(
    type,
    stride,
  );
}

export const def_glTexCoordFormatNV = {
  parameters: ["i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexCoordFormatNV!: Deno.UnsafeFnPointer<typeof def_glTexCoordFormatNV>;

export function TexCoordFormatNV(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glTexCoordFormatNV.call(
    size,
    type,
    stride,
  );
}

export const def_glEdgeFlagFormatNV = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glEdgeFlagFormatNV!: Deno.UnsafeFnPointer<typeof def_glEdgeFlagFormatNV>;

export function EdgeFlagFormatNV(
  stride: GLsizei,
): void {
  fn_glEdgeFlagFormatNV.call(
    stride,
  );
}

export const def_glSecondaryColorFormatNV = {
  parameters: ["i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glSecondaryColorFormatNV!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColorFormatNV
>;

export function SecondaryColorFormatNV(
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glSecondaryColorFormatNV.call(
    size,
    type,
    stride,
  );
}

export const def_glFogCoordFormatNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glFogCoordFormatNV!: Deno.UnsafeFnPointer<typeof def_glFogCoordFormatNV>;

export function FogCoordFormatNV(
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glFogCoordFormatNV.call(
    type,
    stride,
  );
}

export const def_glVertexAttribFormatNV = {
  parameters: ["u32", "i32", "u32", "u8", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribFormatNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribFormatNV
>;

export function VertexAttribFormatNV(
  index: GLuint,
  size: GLint,
  type: GLenum,
  normalized: GLboolean,
  stride: GLsizei,
): void {
  fn_glVertexAttribFormatNV.call(
    index,
    size,
    type,
    normalized,
    stride,
  );
}

export const def_glVertexAttribIFormatNV = {
  parameters: ["u32", "i32", "u32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribIFormatNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribIFormatNV
>;

export function VertexAttribIFormatNV(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
): void {
  fn_glVertexAttribIFormatNV.call(
    index,
    size,
    type,
    stride,
  );
}

export const def_glGetIntegerui64i_vNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetIntegerui64i_vNV!: Deno.UnsafeFnPointer<
  typeof def_glGetIntegerui64i_vNV
>;

export function GetIntegerui64i_vNV(
  value: GLenum,
  index: GLuint,
  result: Buffer,
): void {
  fn_glGetIntegerui64i_vNV.call(
    value,
    index,
    bufferToFFI(result),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBufferAddressRangeNV = new Deno.UnsafeFnPointer(
    proc("glBufferAddressRangeNV"),
    def_glBufferAddressRangeNV,
  );
  fn_glVertexFormatNV = new Deno.UnsafeFnPointer(
    proc("glVertexFormatNV"),
    def_glVertexFormatNV,
  );
  fn_glNormalFormatNV = new Deno.UnsafeFnPointer(
    proc("glNormalFormatNV"),
    def_glNormalFormatNV,
  );
  fn_glColorFormatNV = new Deno.UnsafeFnPointer(
    proc("glColorFormatNV"),
    def_glColorFormatNV,
  );
  fn_glIndexFormatNV = new Deno.UnsafeFnPointer(
    proc("glIndexFormatNV"),
    def_glIndexFormatNV,
  );
  fn_glTexCoordFormatNV = new Deno.UnsafeFnPointer(
    proc("glTexCoordFormatNV"),
    def_glTexCoordFormatNV,
  );
  fn_glEdgeFlagFormatNV = new Deno.UnsafeFnPointer(
    proc("glEdgeFlagFormatNV"),
    def_glEdgeFlagFormatNV,
  );
  fn_glSecondaryColorFormatNV = new Deno.UnsafeFnPointer(
    proc("glSecondaryColorFormatNV"),
    def_glSecondaryColorFormatNV,
  );
  fn_glFogCoordFormatNV = new Deno.UnsafeFnPointer(
    proc("glFogCoordFormatNV"),
    def_glFogCoordFormatNV,
  );
  fn_glVertexAttribFormatNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribFormatNV"),
    def_glVertexAttribFormatNV,
  );
  fn_glVertexAttribIFormatNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribIFormatNV"),
    def_glVertexAttribIFormatNV,
  );
  fn_glGetIntegerui64i_vNV = new Deno.UnsafeFnPointer(
    proc("glGetIntegerui64i_vNV"),
    def_glGetIntegerui64i_vNV,
  );
}
