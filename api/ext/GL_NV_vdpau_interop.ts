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
export const SURFACE_STATE_NV = 0x86eb;
export const SURFACE_REGISTERED_NV = 0x86fd;
export const SURFACE_MAPPED_NV = 0x8700;
export const WRITE_DISCARD_NV = 0x88be;

/// Commands

export const def_glVDPAUInitNV = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glVDPAUInitNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUInitNV>;

export function VDPAUInitNV(
  vdpDevice: Buffer,
  getProcAddress: Buffer,
): void {
  fn_glVDPAUInitNV.call(
    bufferToFFI(vdpDevice),
    bufferToFFI(getProcAddress),
  );
}

export const def_glVDPAUFiniNV = {
  parameters: [],
  result: "void",
} as const;

let fn_glVDPAUFiniNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUFiniNV>;

export function VDPAUFiniNV(): void {
  fn_glVDPAUFiniNV.call();
}

export const def_glVDPAURegisterVideoSurfaceNV = {
  parameters: ["buffer", "u32", "i32", "buffer"],
  result: "buffer",
} as const;

let fn_glVDPAURegisterVideoSurfaceNV!: Deno.UnsafeFnPointer<typeof def_glVDPAURegisterVideoSurfaceNV>;

export function VDPAURegisterVideoSurfaceNV(
  vdpSurface: Buffer,
  target: GLenum,
  numTextureNames: GLsizei,
  textureNames: Buffer,
): GLvdpauSurfaceNV {
  return fn_glVDPAURegisterVideoSurfaceNV.call(
    bufferToFFI(vdpSurface),
    target,
    numTextureNames,
    bufferToFFI(textureNames),
  );
}

export const def_glVDPAURegisterOutputSurfaceNV = {
  parameters: ["buffer", "u32", "i32", "buffer"],
  result: "buffer",
} as const;

let fn_glVDPAURegisterOutputSurfaceNV!: Deno.UnsafeFnPointer<typeof def_glVDPAURegisterOutputSurfaceNV>;

export function VDPAURegisterOutputSurfaceNV(
  vdpSurface: Buffer,
  target: GLenum,
  numTextureNames: GLsizei,
  textureNames: Buffer,
): GLvdpauSurfaceNV {
  return fn_glVDPAURegisterOutputSurfaceNV.call(
    bufferToFFI(vdpSurface),
    target,
    numTextureNames,
    bufferToFFI(textureNames),
  );
}

export const def_glVDPAUIsSurfaceNV = {
  parameters: ["buffer"],
  result: "u8",
} as const;

let fn_glVDPAUIsSurfaceNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUIsSurfaceNV>;

export function VDPAUIsSurfaceNV(
  surface: GLvdpauSurfaceNV,
): GLboolean {
  return fn_glVDPAUIsSurfaceNV.call(
    bufferToFFI(surface),
  );
}

export const def_glVDPAUUnregisterSurfaceNV = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVDPAUUnregisterSurfaceNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUUnregisterSurfaceNV>;

export function VDPAUUnregisterSurfaceNV(
  surface: GLvdpauSurfaceNV,
): void {
  fn_glVDPAUUnregisterSurfaceNV.call(
    bufferToFFI(surface),
  );
}

export const def_glVDPAUGetSurfaceivNV = {
  parameters: ["buffer", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glVDPAUGetSurfaceivNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUGetSurfaceivNV>;

export function VDPAUGetSurfaceivNV(
  surface: GLvdpauSurfaceNV,
  pname: GLenum,
  count: GLsizei,
  length: Buffer,
  values: Buffer,
): void {
  fn_glVDPAUGetSurfaceivNV.call(
    bufferToFFI(surface),
    pname,
    count,
    bufferToFFI(length),
    bufferToFFI(values),
  );
}

export const def_glVDPAUSurfaceAccessNV = {
  parameters: ["buffer", "u32"],
  result: "void",
} as const;

let fn_glVDPAUSurfaceAccessNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUSurfaceAccessNV>;

export function VDPAUSurfaceAccessNV(
  surface: GLvdpauSurfaceNV,
  access: GLenum,
): void {
  fn_glVDPAUSurfaceAccessNV.call(
    bufferToFFI(surface),
    access,
  );
}

export const def_glVDPAUMapSurfacesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glVDPAUMapSurfacesNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUMapSurfacesNV>;

export function VDPAUMapSurfacesNV(
  numSurfaces: GLsizei,
  surfaces: Buffer,
): void {
  fn_glVDPAUMapSurfacesNV.call(
    numSurfaces,
    bufferToFFI(surfaces),
  );
}

export const def_glVDPAUUnmapSurfacesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glVDPAUUnmapSurfacesNV!: Deno.UnsafeFnPointer<typeof def_glVDPAUUnmapSurfacesNV>;

export function VDPAUUnmapSurfacesNV(
  numSurface: GLsizei,
  surfaces: Buffer,
): void {
  fn_glVDPAUUnmapSurfacesNV.call(
    numSurface,
    bufferToFFI(surfaces),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVDPAUInitNV = new Deno.UnsafeFnPointer(proc("glVDPAUInitNV"), def_glVDPAUInitNV);
  fn_glVDPAUFiniNV = new Deno.UnsafeFnPointer(proc("glVDPAUFiniNV"), def_glVDPAUFiniNV);
  fn_glVDPAURegisterVideoSurfaceNV = new Deno.UnsafeFnPointer(proc("glVDPAURegisterVideoSurfaceNV"), def_glVDPAURegisterVideoSurfaceNV);
  fn_glVDPAURegisterOutputSurfaceNV = new Deno.UnsafeFnPointer(proc("glVDPAURegisterOutputSurfaceNV"), def_glVDPAURegisterOutputSurfaceNV);
  fn_glVDPAUIsSurfaceNV = new Deno.UnsafeFnPointer(proc("glVDPAUIsSurfaceNV"), def_glVDPAUIsSurfaceNV);
  fn_glVDPAUUnregisterSurfaceNV = new Deno.UnsafeFnPointer(proc("glVDPAUUnregisterSurfaceNV"), def_glVDPAUUnregisterSurfaceNV);
  fn_glVDPAUGetSurfaceivNV = new Deno.UnsafeFnPointer(proc("glVDPAUGetSurfaceivNV"), def_glVDPAUGetSurfaceivNV);
  fn_glVDPAUSurfaceAccessNV = new Deno.UnsafeFnPointer(proc("glVDPAUSurfaceAccessNV"), def_glVDPAUSurfaceAccessNV);
  fn_glVDPAUMapSurfacesNV = new Deno.UnsafeFnPointer(proc("glVDPAUMapSurfacesNV"), def_glVDPAUMapSurfacesNV);
  fn_glVDPAUUnmapSurfacesNV = new Deno.UnsafeFnPointer(proc("glVDPAUUnmapSurfacesNV"), def_glVDPAUUnmapSurfacesNV);
}
