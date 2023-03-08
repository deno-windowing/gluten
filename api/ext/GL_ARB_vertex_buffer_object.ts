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
export const BUFFER_SIZE_ARB = 0x8764;
export const BUFFER_USAGE_ARB = 0x8765;
export const ARRAY_BUFFER_ARB = 0x8892;
export const ELEMENT_ARRAY_BUFFER_ARB = 0x8893;
export const ARRAY_BUFFER_BINDING_ARB = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING_ARB = 0x8895;
export const VERTEX_ARRAY_BUFFER_BINDING_ARB = 0x8896;
export const NORMAL_ARRAY_BUFFER_BINDING_ARB = 0x8897;
export const COLOR_ARRAY_BUFFER_BINDING_ARB = 0x8898;
export const INDEX_ARRAY_BUFFER_BINDING_ARB = 0x8899;
export const TEXTURE_COORD_ARRAY_BUFFER_BINDING_ARB = 0x889a;
export const EDGE_FLAG_ARRAY_BUFFER_BINDING_ARB = 0x889b;
export const SECONDARY_COLOR_ARRAY_BUFFER_BINDING_ARB = 0x889c;
export const FOG_COORDINATE_ARRAY_BUFFER_BINDING_ARB = 0x889d;
export const WEIGHT_ARRAY_BUFFER_BINDING_ARB = 0x889e;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING_ARB = 0x889f;
export const READ_ONLY_ARB = 0x88b8;
export const WRITE_ONLY_ARB = 0x88b9;
export const READ_WRITE_ARB = 0x88ba;
export const BUFFER_ACCESS_ARB = 0x88bb;
export const BUFFER_MAPPED_ARB = 0x88bc;
export const BUFFER_MAP_POINTER_ARB = 0x88bd;
export const STREAM_DRAW_ARB = 0x88e0;
export const STREAM_READ_ARB = 0x88e1;
export const STREAM_COPY_ARB = 0x88e2;
export const STATIC_DRAW_ARB = 0x88e4;
export const STATIC_READ_ARB = 0x88e5;
export const STATIC_COPY_ARB = 0x88e6;
export const DYNAMIC_DRAW_ARB = 0x88e8;
export const DYNAMIC_READ_ARB = 0x88e9;
export const DYNAMIC_COPY_ARB = 0x88ea;

/// Commands

export const def_glBindBufferARB = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindBufferARB!: Deno.UnsafeFnPointer<typeof def_glBindBufferARB>;

export function BindBufferARB(
  target: GLenum,
  buffer: GLuint,
): void {
  fn_glBindBufferARB.call(
    target,
    buffer,
  );
}

export const def_glDeleteBuffersARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteBuffersARB!: Deno.UnsafeFnPointer<typeof def_glDeleteBuffersARB>;

export function DeleteBuffersARB(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glDeleteBuffersARB.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glGenBuffersARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenBuffersARB!: Deno.UnsafeFnPointer<typeof def_glGenBuffersARB>;

export function GenBuffersARB(
  n: GLsizei,
  buffers: Buffer,
): void {
  fn_glGenBuffersARB.call(
    n,
    bufferToFFI(buffers),
  );
}

export const def_glIsBufferARB = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsBufferARB!: Deno.UnsafeFnPointer<typeof def_glIsBufferARB>;

export function IsBufferARB(
  buffer: GLuint,
): GLboolean {
  return fn_glIsBufferARB.call(
    buffer,
  );
}

export const def_glBufferDataARB = {
  parameters: ["u32", "isize", "buffer", "u32"],
  result: "void",
} as const;

let fn_glBufferDataARB!: Deno.UnsafeFnPointer<typeof def_glBufferDataARB>;

export function BufferDataARB(
  target: GLenum,
  size: GLsizeiptrARB,
  data: Buffer,
  usage: GLenum,
): void {
  fn_glBufferDataARB.call(
    target,
    size,
    bufferToFFI(data),
    usage,
  );
}

export const def_glBufferSubDataARB = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glBufferSubDataARB!: Deno.UnsafeFnPointer<typeof def_glBufferSubDataARB>;

export function BufferSubDataARB(
  target: GLenum,
  offset: GLintptrARB,
  size: GLsizeiptrARB,
  data: Buffer,
): void {
  fn_glBufferSubDataARB.call(
    target,
    bufferToFFI(offset),
    size,
    bufferToFFI(data),
  );
}

export const def_glGetBufferSubDataARB = {
  parameters: ["u32", "buffer", "isize", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferSubDataARB!: Deno.UnsafeFnPointer<typeof def_glGetBufferSubDataARB>;

export function GetBufferSubDataARB(
  target: GLenum,
  offset: GLintptrARB,
  size: GLsizeiptrARB,
  data: Buffer,
): void {
  fn_glGetBufferSubDataARB.call(
    target,
    bufferToFFI(offset),
    size,
    bufferToFFI(data),
  );
}

export const def_glMapBufferARB = {
  parameters: ["u32", "u32"],
  result: "buffer",
} as const;

let fn_glMapBufferARB!: Deno.UnsafeFnPointer<typeof def_glMapBufferARB>;

export function MapBufferARB(
  target: GLenum,
  access: GLenum,
): Buffer {
  return fn_glMapBufferARB.call(
    target,
    access,
  );
}

export const def_glUnmapBufferARB = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glUnmapBufferARB!: Deno.UnsafeFnPointer<typeof def_glUnmapBufferARB>;

export function UnmapBufferARB(
  target: GLenum,
): GLboolean {
  return fn_glUnmapBufferARB.call(
    target,
  );
}

export const def_glGetBufferParameterivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferParameterivARB!: Deno.UnsafeFnPointer<typeof def_glGetBufferParameterivARB>;

export function GetBufferParameterivARB(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferParameterivARB.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetBufferPointervARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetBufferPointervARB!: Deno.UnsafeFnPointer<typeof def_glGetBufferPointervARB>;

export function GetBufferPointervARB(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetBufferPointervARB.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBindBufferARB = new Deno.UnsafeFnPointer(proc("glBindBufferARB")!, def_glBindBufferARB);
  fn_glDeleteBuffersARB = new Deno.UnsafeFnPointer(proc("glDeleteBuffersARB")!, def_glDeleteBuffersARB);
  fn_glGenBuffersARB = new Deno.UnsafeFnPointer(proc("glGenBuffersARB")!, def_glGenBuffersARB);
  fn_glIsBufferARB = new Deno.UnsafeFnPointer(proc("glIsBufferARB")!, def_glIsBufferARB);
  fn_glBufferDataARB = new Deno.UnsafeFnPointer(proc("glBufferDataARB")!, def_glBufferDataARB);
  fn_glBufferSubDataARB = new Deno.UnsafeFnPointer(proc("glBufferSubDataARB")!, def_glBufferSubDataARB);
  fn_glGetBufferSubDataARB = new Deno.UnsafeFnPointer(proc("glGetBufferSubDataARB")!, def_glGetBufferSubDataARB);
  fn_glMapBufferARB = new Deno.UnsafeFnPointer(proc("glMapBufferARB")!, def_glMapBufferARB);
  fn_glUnmapBufferARB = new Deno.UnsafeFnPointer(proc("glUnmapBufferARB")!, def_glUnmapBufferARB);
  fn_glGetBufferParameterivARB = new Deno.UnsafeFnPointer(proc("glGetBufferParameterivARB")!, def_glGetBufferParameterivARB);
  fn_glGetBufferPointervARB = new Deno.UnsafeFnPointer(proc("glGetBufferPointervARB")!, def_glGetBufferPointervARB);
}
