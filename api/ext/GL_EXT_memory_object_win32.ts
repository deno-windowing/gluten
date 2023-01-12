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
export const HANDLE_TYPE_OPAQUE_WIN32_EXT = 0x9587;
export const HANDLE_TYPE_OPAQUE_WIN32_KMT_EXT = 0x9588;
export const DEVICE_LUID_EXT = 0x9599;
export const DEVICE_NODE_MASK_EXT = 0x959a;
export const LUID_SIZE_EXT = 0x8;
export const HANDLE_TYPE_D3D12_TILEPOOL_EXT = 0x9589;
export const HANDLE_TYPE_D3D12_RESOURCE_EXT = 0x958a;
export const HANDLE_TYPE_D3D11_IMAGE_EXT = 0x958b;
export const HANDLE_TYPE_D3D11_IMAGE_KMT_EXT = 0x958c;

/// Commands

export const def_glImportMemoryWin32HandleEXT = {
  parameters: ["u32", "u64", "u32", "buffer"],
  result: "void",
} as const;

let fn_glImportMemoryWin32HandleEXT!: Deno.UnsafeFnPointer<
  typeof def_glImportMemoryWin32HandleEXT
>;

export function ImportMemoryWin32HandleEXT(
  memory: GLuint,
  size: GLuint64,
  handleType: GLenum,
  handle: Buffer,
): void {
  fn_glImportMemoryWin32HandleEXT.call(
    memory,
    size,
    handleType,
    bufferToFFI(handle),
  );
}

export const def_glImportMemoryWin32NameEXT = {
  parameters: ["u32", "u64", "u32", "buffer"],
  result: "void",
} as const;

let fn_glImportMemoryWin32NameEXT!: Deno.UnsafeFnPointer<
  typeof def_glImportMemoryWin32NameEXT
>;

export function ImportMemoryWin32NameEXT(
  memory: GLuint,
  size: GLuint64,
  handleType: GLenum,
  name: Buffer,
): void {
  fn_glImportMemoryWin32NameEXT.call(
    memory,
    size,
    handleType,
    bufferToFFI(name),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glImportMemoryWin32HandleEXT = new Deno.UnsafeFnPointer(
    proc("glImportMemoryWin32HandleEXT"),
    def_glImportMemoryWin32HandleEXT,
  );
  fn_glImportMemoryWin32NameEXT = new Deno.UnsafeFnPointer(
    proc("glImportMemoryWin32NameEXT"),
    def_glImportMemoryWin32NameEXT,
  );
}
