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
export const FRAGMENT_MATERIAL_EXT = 0x8349;
export const FRAGMENT_NORMAL_EXT = 0x834a;
export const FRAGMENT_COLOR_EXT = 0x834c;
export const ATTENUATION_EXT = 0x834d;
export const SHADOW_ATTENUATION_EXT = 0x834e;
export const TEXTURE_APPLICATION_MODE_EXT = 0x834f;
export const TEXTURE_LIGHT_EXT = 0x8350;
export const TEXTURE_MATERIAL_FACE_EXT = 0x8351;
export const TEXTURE_MATERIAL_PARAMETER_EXT = 0x8352;
export const FRAGMENT_DEPTH_EXT = 0x8452;

/// Commands

export const def_glApplyTextureEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glApplyTextureEXT!: Deno.UnsafeFnPointer<typeof def_glApplyTextureEXT>;

export function ApplyTextureEXT(
  mode: GLenum,
): void {
  fn_glApplyTextureEXT.call(
    mode,
  );
}

export const def_glTextureLightEXT = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glTextureLightEXT!: Deno.UnsafeFnPointer<typeof def_glTextureLightEXT>;

export function TextureLightEXT(
  pname: GLenum,
): void {
  fn_glTextureLightEXT.call(
    pname,
  );
}

export const def_glTextureMaterialEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTextureMaterialEXT!: Deno.UnsafeFnPointer<
  typeof def_glTextureMaterialEXT
>;

export function TextureMaterialEXT(
  face: GLenum,
  mode: GLenum,
): void {
  fn_glTextureMaterialEXT.call(
    face,
    mode,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glApplyTextureEXT = new Deno.UnsafeFnPointer(
    proc("glApplyTextureEXT")!,
    def_glApplyTextureEXT,
  );
  fn_glTextureLightEXT = new Deno.UnsafeFnPointer(
    proc("glTextureLightEXT")!,
    def_glTextureLightEXT,
  );
  fn_glTextureMaterialEXT = new Deno.UnsafeFnPointer(
    proc("glTextureMaterialEXT")!,
    def_glTextureMaterialEXT,
  );
}
