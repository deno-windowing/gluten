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

/// Enums
export const TEXTURE_TILING_EXT = 0x9580;
export const DEDICATED_MEMORY_OBJECT_EXT = 0x9581;
export const PROTECTED_MEMORY_OBJECT_EXT = 0x959b;
export const NUM_TILING_TYPES_EXT = 0x9582;
export const TILING_TYPES_EXT = 0x9583;
export const OPTIMAL_TILING_EXT = 0x9584;
export const LINEAR_TILING_EXT = 0x9585;
export const NUM_DEVICE_UUIDS_EXT = 0x9596;
export const DEVICE_UUID_EXT = 0x9597;
export const DRIVER_UUID_EXT = 0x9598;
export const UUID_SIZE_EXT = 0x10;

/// Commands

export const def_glGetUnsignedBytevEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetUnsignedBytevEXT!: Deno.UnsafeFnPointer<typeof def_glGetUnsignedBytevEXT>;

export function GetUnsignedBytevEXT(
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetUnsignedBytevEXT.call(
    pname,
    bufferToFFI(data),
  );
}

export const def_glGetUnsignedBytei_vEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetUnsignedBytei_vEXT!: Deno.UnsafeFnPointer<typeof def_glGetUnsignedBytei_vEXT>;

export function GetUnsignedBytei_vEXT(
  target: GLenum,
  index: GLuint,
  data: Buffer,
): void {
  fn_glGetUnsignedBytei_vEXT.call(
    target,
    index,
    bufferToFFI(data),
  );
}

export const def_glDeleteMemoryObjectsEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteMemoryObjectsEXT!: Deno.UnsafeFnPointer<typeof def_glDeleteMemoryObjectsEXT>;

export function DeleteMemoryObjectsEXT(
  n: GLsizei,
  memoryObjects: Buffer,
): void {
  fn_glDeleteMemoryObjectsEXT.call(
    n,
    bufferToFFI(memoryObjects),
  );
}

export const def_glIsMemoryObjectEXT = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsMemoryObjectEXT!: Deno.UnsafeFnPointer<typeof def_glIsMemoryObjectEXT>;

export function IsMemoryObjectEXT(
  memoryObject: GLuint,
): GLboolean {
  return fn_glIsMemoryObjectEXT.call(
    memoryObject,
  );
}

export const def_glCreateMemoryObjectsEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateMemoryObjectsEXT!: Deno.UnsafeFnPointer<typeof def_glCreateMemoryObjectsEXT>;

export function CreateMemoryObjectsEXT(
  n: GLsizei,
  memoryObjects: Buffer,
): void {
  fn_glCreateMemoryObjectsEXT.call(
    n,
    bufferToFFI(memoryObjects),
  );
}

export const def_glMemoryObjectParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMemoryObjectParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glMemoryObjectParameterivEXT>;

export function MemoryObjectParameterivEXT(
  memoryObject: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glMemoryObjectParameterivEXT.call(
    memoryObject,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMemoryObjectParameterivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMemoryObjectParameterivEXT!: Deno.UnsafeFnPointer<typeof def_glGetMemoryObjectParameterivEXT>;

export function GetMemoryObjectParameterivEXT(
  memoryObject: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMemoryObjectParameterivEXT.call(
    memoryObject,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexStorageMem2DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexStorageMem2DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageMem2DEXT>;

export function TexStorageMem2DEXT(
  target: GLenum,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexStorageMem2DEXT.call(
    target,
    levels,
    internalFormat,
    width,
    height,
    memory,
    offset,
  );
}

export const def_glTexStorageMem2DMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexStorageMem2DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageMem2DMultisampleEXT>;

export function TexStorageMem2DMultisampleEXT(
  target: GLenum,
  samples: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedSampleLocations: GLboolean,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexStorageMem2DMultisampleEXT.call(
    target,
    samples,
    internalFormat,
    width,
    height,
    fixedSampleLocations,
    memory,
    offset,
  );
}

export const def_glTexStorageMem3DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexStorageMem3DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageMem3DEXT>;

export function TexStorageMem3DEXT(
  target: GLenum,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexStorageMem3DEXT.call(
    target,
    levels,
    internalFormat,
    width,
    height,
    depth,
    memory,
    offset,
  );
}

export const def_glTexStorageMem3DMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexStorageMem3DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageMem3DMultisampleEXT>;

export function TexStorageMem3DMultisampleEXT(
  target: GLenum,
  samples: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedSampleLocations: GLboolean,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexStorageMem3DMultisampleEXT.call(
    target,
    samples,
    internalFormat,
    width,
    height,
    depth,
    fixedSampleLocations,
    memory,
    offset,
  );
}

export const def_glBufferStorageMemEXT = {
  parameters: ["u32", "isize", "u32", "u64"],
  result: "void",
} as const;

let fn_glBufferStorageMemEXT!: Deno.UnsafeFnPointer<typeof def_glBufferStorageMemEXT>;

export function BufferStorageMemEXT(
  target: GLenum,
  size: GLsizeiptr,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glBufferStorageMemEXT.call(
    target,
    size,
    memory,
    offset,
  );
}

export const def_glTextureStorageMem2DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureStorageMem2DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorageMem2DEXT>;

export function TextureStorageMem2DEXT(
  texture: GLuint,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureStorageMem2DEXT.call(
    texture,
    levels,
    internalFormat,
    width,
    height,
    memory,
    offset,
  );
}

export const def_glTextureStorageMem2DMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "u8", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureStorageMem2DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorageMem2DMultisampleEXT>;

export function TextureStorageMem2DMultisampleEXT(
  texture: GLuint,
  samples: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  fixedSampleLocations: GLboolean,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureStorageMem2DMultisampleEXT.call(
    texture,
    samples,
    internalFormat,
    width,
    height,
    fixedSampleLocations,
    memory,
    offset,
  );
}

export const def_glTextureStorageMem3DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureStorageMem3DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorageMem3DEXT>;

export function TextureStorageMem3DEXT(
  texture: GLuint,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureStorageMem3DEXT.call(
    texture,
    levels,
    internalFormat,
    width,
    height,
    depth,
    memory,
    offset,
  );
}

export const def_glTextureStorageMem3DMultisampleEXT = {
  parameters: ["u32", "i32", "u32", "i32", "i32", "i32", "u8", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureStorageMem3DMultisampleEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorageMem3DMultisampleEXT>;

export function TextureStorageMem3DMultisampleEXT(
  texture: GLuint,
  samples: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  height: GLsizei,
  depth: GLsizei,
  fixedSampleLocations: GLboolean,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureStorageMem3DMultisampleEXT.call(
    texture,
    samples,
    internalFormat,
    width,
    height,
    depth,
    fixedSampleLocations,
    memory,
    offset,
  );
}

export const def_glNamedBufferStorageMemEXT = {
  parameters: ["u32", "isize", "u32", "u64"],
  result: "void",
} as const;

let fn_glNamedBufferStorageMemEXT!: Deno.UnsafeFnPointer<typeof def_glNamedBufferStorageMemEXT>;

export function NamedBufferStorageMemEXT(
  buffer: GLuint,
  size: GLsizeiptr,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glNamedBufferStorageMemEXT.call(
    buffer,
    size,
    memory,
    offset,
  );
}

export const def_glTexStorageMem1DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTexStorageMem1DEXT!: Deno.UnsafeFnPointer<typeof def_glTexStorageMem1DEXT>;

export function TexStorageMem1DEXT(
  target: GLenum,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTexStorageMem1DEXT.call(
    target,
    levels,
    internalFormat,
    width,
    memory,
    offset,
  );
}

export const def_glTextureStorageMem1DEXT = {
  parameters: ["u32", "i32", "u32", "i32", "u32", "u64"],
  result: "void",
} as const;

let fn_glTextureStorageMem1DEXT!: Deno.UnsafeFnPointer<typeof def_glTextureStorageMem1DEXT>;

export function TextureStorageMem1DEXT(
  texture: GLuint,
  levels: GLsizei,
  internalFormat: GLenum,
  width: GLsizei,
  memory: GLuint,
  offset: GLuint64,
): void {
  fn_glTextureStorageMem1DEXT.call(
    texture,
    levels,
    internalFormat,
    width,
    memory,
    offset,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetUnsignedBytevEXT = new Deno.UnsafeFnPointer(proc("glGetUnsignedBytevEXT"), def_glGetUnsignedBytevEXT);
  fn_glGetUnsignedBytei_vEXT = new Deno.UnsafeFnPointer(proc("glGetUnsignedBytei_vEXT"), def_glGetUnsignedBytei_vEXT);
  fn_glDeleteMemoryObjectsEXT = new Deno.UnsafeFnPointer(proc("glDeleteMemoryObjectsEXT"), def_glDeleteMemoryObjectsEXT);
  fn_glIsMemoryObjectEXT = new Deno.UnsafeFnPointer(proc("glIsMemoryObjectEXT"), def_glIsMemoryObjectEXT);
  fn_glCreateMemoryObjectsEXT = new Deno.UnsafeFnPointer(proc("glCreateMemoryObjectsEXT"), def_glCreateMemoryObjectsEXT);
  fn_glMemoryObjectParameterivEXT = new Deno.UnsafeFnPointer(proc("glMemoryObjectParameterivEXT"), def_glMemoryObjectParameterivEXT);
  fn_glGetMemoryObjectParameterivEXT = new Deno.UnsafeFnPointer(proc("glGetMemoryObjectParameterivEXT"), def_glGetMemoryObjectParameterivEXT);
  fn_glTexStorageMem2DEXT = new Deno.UnsafeFnPointer(proc("glTexStorageMem2DEXT"), def_glTexStorageMem2DEXT);
  fn_glTexStorageMem2DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTexStorageMem2DMultisampleEXT"), def_glTexStorageMem2DMultisampleEXT);
  fn_glTexStorageMem3DEXT = new Deno.UnsafeFnPointer(proc("glTexStorageMem3DEXT"), def_glTexStorageMem3DEXT);
  fn_glTexStorageMem3DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTexStorageMem3DMultisampleEXT"), def_glTexStorageMem3DMultisampleEXT);
  fn_glBufferStorageMemEXT = new Deno.UnsafeFnPointer(proc("glBufferStorageMemEXT"), def_glBufferStorageMemEXT);
  fn_glTextureStorageMem2DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorageMem2DEXT"), def_glTextureStorageMem2DEXT);
  fn_glTextureStorageMem2DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTextureStorageMem2DMultisampleEXT"), def_glTextureStorageMem2DMultisampleEXT);
  fn_glTextureStorageMem3DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorageMem3DEXT"), def_glTextureStorageMem3DEXT);
  fn_glTextureStorageMem3DMultisampleEXT = new Deno.UnsafeFnPointer(proc("glTextureStorageMem3DMultisampleEXT"), def_glTextureStorageMem3DMultisampleEXT);
  fn_glNamedBufferStorageMemEXT = new Deno.UnsafeFnPointer(proc("glNamedBufferStorageMemEXT"), def_glNamedBufferStorageMemEXT);
  fn_glTexStorageMem1DEXT = new Deno.UnsafeFnPointer(proc("glTexStorageMem1DEXT"), def_glTexStorageMem1DEXT);
  fn_glTextureStorageMem1DEXT = new Deno.UnsafeFnPointer(proc("glTextureStorageMem1DEXT"), def_glTextureStorageMem1DEXT);
}
