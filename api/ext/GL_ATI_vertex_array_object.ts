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
export const STATIC_ATI = 0x8760;
export const DYNAMIC_ATI = 0x8761;
export const PRESERVE_ATI = 0x8762;
export const DISCARD_ATI = 0x8763;
export const OBJECT_BUFFER_SIZE_ATI = 0x8764;
export const OBJECT_BUFFER_USAGE_ATI = 0x8765;
export const ARRAY_OBJECT_BUFFER_ATI = 0x8766;
export const ARRAY_OBJECT_OFFSET_ATI = 0x8767;

/// Commands

export const def_glNewObjectBufferATI = {
  parameters: ["i32", "buffer", "u32"],
  result: "u32",
} as const;

let fn_glNewObjectBufferATI!: Deno.UnsafeFnPointer<typeof def_glNewObjectBufferATI>;

export function NewObjectBufferATI(
  size: GLsizei,
  pointer: Buffer,
  usage: GLenum,
): GLuint {
  return fn_glNewObjectBufferATI.call(
    size,
    bufferToFFI(pointer),
    usage,
  );
}

export const def_glIsObjectBufferATI = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsObjectBufferATI!: Deno.UnsafeFnPointer<typeof def_glIsObjectBufferATI>;

export function IsObjectBufferATI(
  buffer: GLuint,
): GLboolean {
  return fn_glIsObjectBufferATI.call(
    buffer,
  );
}

export const def_glUpdateObjectBufferATI = {
  parameters: ["u32", "u32", "i32", "buffer", "u32"],
  result: "void",
} as const;

let fn_glUpdateObjectBufferATI!: Deno.UnsafeFnPointer<typeof def_glUpdateObjectBufferATI>;

export function UpdateObjectBufferATI(
  buffer: GLuint,
  offset: GLuint,
  size: GLsizei,
  pointer: Buffer,
  preserve: GLenum,
): void {
  fn_glUpdateObjectBufferATI.call(
    buffer,
    offset,
    size,
    bufferToFFI(pointer),
    preserve,
  );
}

export const def_glGetObjectBufferfvATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectBufferfvATI!: Deno.UnsafeFnPointer<typeof def_glGetObjectBufferfvATI>;

export function GetObjectBufferfvATI(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetObjectBufferfvATI.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetObjectBufferivATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectBufferivATI!: Deno.UnsafeFnPointer<typeof def_glGetObjectBufferivATI>;

export function GetObjectBufferivATI(
  buffer: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetObjectBufferivATI.call(
    buffer,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFreeObjectBufferATI = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glFreeObjectBufferATI!: Deno.UnsafeFnPointer<typeof def_glFreeObjectBufferATI>;

export function FreeObjectBufferATI(
  buffer: GLuint,
): void {
  fn_glFreeObjectBufferATI.call(
    buffer,
  );
}

export const def_glArrayObjectATI = {
  parameters: ["u32", "i32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glArrayObjectATI!: Deno.UnsafeFnPointer<typeof def_glArrayObjectATI>;

export function ArrayObjectATI(
  array: GLenum,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  buffer: GLuint,
  offset: GLuint,
): void {
  fn_glArrayObjectATI.call(
    array,
    size,
    type,
    stride,
    buffer,
    offset,
  );
}

export const def_glGetArrayObjectfvATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetArrayObjectfvATI!: Deno.UnsafeFnPointer<typeof def_glGetArrayObjectfvATI>;

export function GetArrayObjectfvATI(
  array: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetArrayObjectfvATI.call(
    array,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetArrayObjectivATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetArrayObjectivATI!: Deno.UnsafeFnPointer<typeof def_glGetArrayObjectivATI>;

export function GetArrayObjectivATI(
  array: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetArrayObjectivATI.call(
    array,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVariantArrayObjectATI = {
  parameters: ["u32", "u32", "i32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVariantArrayObjectATI!: Deno.UnsafeFnPointer<typeof def_glVariantArrayObjectATI>;

export function VariantArrayObjectATI(
  id: GLuint,
  type: GLenum,
  stride: GLsizei,
  buffer: GLuint,
  offset: GLuint,
): void {
  fn_glVariantArrayObjectATI.call(
    id,
    type,
    stride,
    buffer,
    offset,
  );
}

export const def_glGetVariantArrayObjectfvATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantArrayObjectfvATI!: Deno.UnsafeFnPointer<typeof def_glGetVariantArrayObjectfvATI>;

export function GetVariantArrayObjectfvATI(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVariantArrayObjectfvATI.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVariantArrayObjectivATI = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVariantArrayObjectivATI!: Deno.UnsafeFnPointer<typeof def_glGetVariantArrayObjectivATI>;

export function GetVariantArrayObjectivATI(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVariantArrayObjectivATI.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glNewObjectBufferATI = new Deno.UnsafeFnPointer(proc("glNewObjectBufferATI")!, def_glNewObjectBufferATI);
  fn_glIsObjectBufferATI = new Deno.UnsafeFnPointer(proc("glIsObjectBufferATI")!, def_glIsObjectBufferATI);
  fn_glUpdateObjectBufferATI = new Deno.UnsafeFnPointer(proc("glUpdateObjectBufferATI")!, def_glUpdateObjectBufferATI);
  fn_glGetObjectBufferfvATI = new Deno.UnsafeFnPointer(proc("glGetObjectBufferfvATI")!, def_glGetObjectBufferfvATI);
  fn_glGetObjectBufferivATI = new Deno.UnsafeFnPointer(proc("glGetObjectBufferivATI")!, def_glGetObjectBufferivATI);
  fn_glFreeObjectBufferATI = new Deno.UnsafeFnPointer(proc("glFreeObjectBufferATI")!, def_glFreeObjectBufferATI);
  fn_glArrayObjectATI = new Deno.UnsafeFnPointer(proc("glArrayObjectATI")!, def_glArrayObjectATI);
  fn_glGetArrayObjectfvATI = new Deno.UnsafeFnPointer(proc("glGetArrayObjectfvATI")!, def_glGetArrayObjectfvATI);
  fn_glGetArrayObjectivATI = new Deno.UnsafeFnPointer(proc("glGetArrayObjectivATI")!, def_glGetArrayObjectivATI);
  fn_glVariantArrayObjectATI = new Deno.UnsafeFnPointer(proc("glVariantArrayObjectATI")!, def_glVariantArrayObjectATI);
  fn_glGetVariantArrayObjectfvATI = new Deno.UnsafeFnPointer(proc("glGetVariantArrayObjectfvATI")!, def_glGetVariantArrayObjectfvATI);
  fn_glGetVariantArrayObjectivATI = new Deno.UnsafeFnPointer(proc("glGetVariantArrayObjectivATI")!, def_glGetVariantArrayObjectivATI);
}
