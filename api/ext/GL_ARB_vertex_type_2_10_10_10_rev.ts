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
export const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
export const INT_2_10_10_10_REV = 0x8d9f;

/// Commands

export const def_glVertexAttribP1ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP1ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP1ui>;

export function VertexAttribP1ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP1ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP1uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP1uiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribP1uiv
>;

export function VertexAttribP1uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP1uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP2ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP2ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP2ui>;

export function VertexAttribP2ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP2ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP2uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP2uiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribP2uiv
>;

export function VertexAttribP2uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP2uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP3ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP3ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP3ui>;

export function VertexAttribP3ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP3ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP3uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP3uiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribP3uiv
>;

export function VertexAttribP3uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP3uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexAttribP4ui = {
  parameters: ["u32", "u32", "u8", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribP4ui!: Deno.UnsafeFnPointer<typeof def_glVertexAttribP4ui>;

export function VertexAttribP4ui(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: GLuint,
): void {
  fn_glVertexAttribP4ui.call(
    index,
    type,
    normalized,
    value,
  );
}

export const def_glVertexAttribP4uiv = {
  parameters: ["u32", "u32", "u8", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribP4uiv!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribP4uiv
>;

export function VertexAttribP4uiv(
  index: GLuint,
  type: GLenum,
  normalized: GLboolean,
  value: Buffer,
): void {
  fn_glVertexAttribP4uiv.call(
    index,
    type,
    normalized,
    bufferToFFI(value),
  );
}

export const def_glVertexP2ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP2ui!: Deno.UnsafeFnPointer<typeof def_glVertexP2ui>;

export function VertexP2ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP2ui.call(
    type,
    value,
  );
}

export const def_glVertexP2uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP2uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP2uiv>;

export function VertexP2uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP2uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glVertexP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP3ui!: Deno.UnsafeFnPointer<typeof def_glVertexP3ui>;

export function VertexP3ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP3ui.call(
    type,
    value,
  );
}

export const def_glVertexP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP3uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP3uiv>;

export function VertexP3uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP3uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glVertexP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexP4ui!: Deno.UnsafeFnPointer<typeof def_glVertexP4ui>;

export function VertexP4ui(
  type: GLenum,
  value: GLuint,
): void {
  fn_glVertexP4ui.call(
    type,
    value,
  );
}

export const def_glVertexP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexP4uiv!: Deno.UnsafeFnPointer<typeof def_glVertexP4uiv>;

export function VertexP4uiv(
  type: GLenum,
  value: Buffer,
): void {
  fn_glVertexP4uiv.call(
    type,
    bufferToFFI(value),
  );
}

export const def_glTexCoordP1ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP1ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP1ui>;

export function TexCoordP1ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP1ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP1uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP1uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP1uiv>;

export function TexCoordP1uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP1uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP2ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP2ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP2ui>;

export function TexCoordP2ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP2ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP2uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP2uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP2uiv>;

export function TexCoordP2uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP2uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP3ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP3ui>;

export function TexCoordP3ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP3ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP3uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP3uiv>;

export function TexCoordP3uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP3uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glTexCoordP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glTexCoordP4ui!: Deno.UnsafeFnPointer<typeof def_glTexCoordP4ui>;

export function TexCoordP4ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glTexCoordP4ui.call(
    type,
    coords,
  );
}

export const def_glTexCoordP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordP4uiv!: Deno.UnsafeFnPointer<typeof def_glTexCoordP4uiv>;

export function TexCoordP4uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glTexCoordP4uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP1ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP1ui!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP1ui
>;

export function MultiTexCoordP1ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP1ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP1uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP1uiv!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP1uiv
>;

export function MultiTexCoordP1uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP1uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP2ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP2ui!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP2ui
>;

export function MultiTexCoordP2ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP2ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP2uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP2uiv!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP2uiv
>;

export function MultiTexCoordP2uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP2uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP3ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP3ui!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP3ui
>;

export function MultiTexCoordP3ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP3ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP3uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP3uiv!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP3uiv
>;

export function MultiTexCoordP3uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP3uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoordP4ui = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glMultiTexCoordP4ui!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP4ui
>;

export function MultiTexCoordP4ui(
  texture: GLenum,
  type: GLenum,
  coords: GLuint,
): void {
  fn_glMultiTexCoordP4ui.call(
    texture,
    type,
    coords,
  );
}

export const def_glMultiTexCoordP4uiv = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoordP4uiv!: Deno.UnsafeFnPointer<
  typeof def_glMultiTexCoordP4uiv
>;

export function MultiTexCoordP4uiv(
  texture: GLenum,
  type: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoordP4uiv.call(
    texture,
    type,
    bufferToFFI(coords),
  );
}

export const def_glNormalP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glNormalP3ui!: Deno.UnsafeFnPointer<typeof def_glNormalP3ui>;

export function NormalP3ui(
  type: GLenum,
  coords: GLuint,
): void {
  fn_glNormalP3ui.call(
    type,
    coords,
  );
}

export const def_glNormalP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalP3uiv!: Deno.UnsafeFnPointer<typeof def_glNormalP3uiv>;

export function NormalP3uiv(
  type: GLenum,
  coords: Buffer,
): void {
  fn_glNormalP3uiv.call(
    type,
    bufferToFFI(coords),
  );
}

export const def_glColorP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glColorP3ui!: Deno.UnsafeFnPointer<typeof def_glColorP3ui>;

export function ColorP3ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glColorP3ui.call(
    type,
    color,
  );
}

export const def_glColorP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glColorP3uiv!: Deno.UnsafeFnPointer<typeof def_glColorP3uiv>;

export function ColorP3uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glColorP3uiv.call(
    type,
    bufferToFFI(color),
  );
}

export const def_glColorP4ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glColorP4ui!: Deno.UnsafeFnPointer<typeof def_glColorP4ui>;

export function ColorP4ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glColorP4ui.call(
    type,
    color,
  );
}

export const def_glColorP4uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glColorP4uiv!: Deno.UnsafeFnPointer<typeof def_glColorP4uiv>;

export function ColorP4uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glColorP4uiv.call(
    type,
    bufferToFFI(color),
  );
}

export const def_glSecondaryColorP3ui = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glSecondaryColorP3ui!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColorP3ui
>;

export function SecondaryColorP3ui(
  type: GLenum,
  color: GLuint,
): void {
  fn_glSecondaryColorP3ui.call(
    type,
    color,
  );
}

export const def_glSecondaryColorP3uiv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glSecondaryColorP3uiv!: Deno.UnsafeFnPointer<
  typeof def_glSecondaryColorP3uiv
>;

export function SecondaryColorP3uiv(
  type: GLenum,
  color: Buffer,
): void {
  fn_glSecondaryColorP3uiv.call(
    type,
    bufferToFFI(color),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttribP1ui = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP1ui")!,
    def_glVertexAttribP1ui,
  );
  fn_glVertexAttribP1uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP1uiv")!,
    def_glVertexAttribP1uiv,
  );
  fn_glVertexAttribP2ui = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP2ui")!,
    def_glVertexAttribP2ui,
  );
  fn_glVertexAttribP2uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP2uiv")!,
    def_glVertexAttribP2uiv,
  );
  fn_glVertexAttribP3ui = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP3ui")!,
    def_glVertexAttribP3ui,
  );
  fn_glVertexAttribP3uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP3uiv")!,
    def_glVertexAttribP3uiv,
  );
  fn_glVertexAttribP4ui = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP4ui")!,
    def_glVertexAttribP4ui,
  );
  fn_glVertexAttribP4uiv = new Deno.UnsafeFnPointer(
    proc("glVertexAttribP4uiv")!,
    def_glVertexAttribP4uiv,
  );
  fn_glVertexP2ui = new Deno.UnsafeFnPointer(
    proc("glVertexP2ui")!,
    def_glVertexP2ui,
  );
  fn_glVertexP2uiv = new Deno.UnsafeFnPointer(
    proc("glVertexP2uiv")!,
    def_glVertexP2uiv,
  );
  fn_glVertexP3ui = new Deno.UnsafeFnPointer(
    proc("glVertexP3ui")!,
    def_glVertexP3ui,
  );
  fn_glVertexP3uiv = new Deno.UnsafeFnPointer(
    proc("glVertexP3uiv")!,
    def_glVertexP3uiv,
  );
  fn_glVertexP4ui = new Deno.UnsafeFnPointer(
    proc("glVertexP4ui")!,
    def_glVertexP4ui,
  );
  fn_glVertexP4uiv = new Deno.UnsafeFnPointer(
    proc("glVertexP4uiv")!,
    def_glVertexP4uiv,
  );
  fn_glTexCoordP1ui = new Deno.UnsafeFnPointer(
    proc("glTexCoordP1ui")!,
    def_glTexCoordP1ui,
  );
  fn_glTexCoordP1uiv = new Deno.UnsafeFnPointer(
    proc("glTexCoordP1uiv")!,
    def_glTexCoordP1uiv,
  );
  fn_glTexCoordP2ui = new Deno.UnsafeFnPointer(
    proc("glTexCoordP2ui")!,
    def_glTexCoordP2ui,
  );
  fn_glTexCoordP2uiv = new Deno.UnsafeFnPointer(
    proc("glTexCoordP2uiv")!,
    def_glTexCoordP2uiv,
  );
  fn_glTexCoordP3ui = new Deno.UnsafeFnPointer(
    proc("glTexCoordP3ui")!,
    def_glTexCoordP3ui,
  );
  fn_glTexCoordP3uiv = new Deno.UnsafeFnPointer(
    proc("glTexCoordP3uiv")!,
    def_glTexCoordP3uiv,
  );
  fn_glTexCoordP4ui = new Deno.UnsafeFnPointer(
    proc("glTexCoordP4ui")!,
    def_glTexCoordP4ui,
  );
  fn_glTexCoordP4uiv = new Deno.UnsafeFnPointer(
    proc("glTexCoordP4uiv")!,
    def_glTexCoordP4uiv,
  );
  fn_glMultiTexCoordP1ui = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP1ui")!,
    def_glMultiTexCoordP1ui,
  );
  fn_glMultiTexCoordP1uiv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP1uiv")!,
    def_glMultiTexCoordP1uiv,
  );
  fn_glMultiTexCoordP2ui = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP2ui")!,
    def_glMultiTexCoordP2ui,
  );
  fn_glMultiTexCoordP2uiv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP2uiv")!,
    def_glMultiTexCoordP2uiv,
  );
  fn_glMultiTexCoordP3ui = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP3ui")!,
    def_glMultiTexCoordP3ui,
  );
  fn_glMultiTexCoordP3uiv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP3uiv")!,
    def_glMultiTexCoordP3uiv,
  );
  fn_glMultiTexCoordP4ui = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP4ui")!,
    def_glMultiTexCoordP4ui,
  );
  fn_glMultiTexCoordP4uiv = new Deno.UnsafeFnPointer(
    proc("glMultiTexCoordP4uiv")!,
    def_glMultiTexCoordP4uiv,
  );
  fn_glNormalP3ui = new Deno.UnsafeFnPointer(
    proc("glNormalP3ui")!,
    def_glNormalP3ui,
  );
  fn_glNormalP3uiv = new Deno.UnsafeFnPointer(
    proc("glNormalP3uiv")!,
    def_glNormalP3uiv,
  );
  fn_glColorP3ui = new Deno.UnsafeFnPointer(
    proc("glColorP3ui")!,
    def_glColorP3ui,
  );
  fn_glColorP3uiv = new Deno.UnsafeFnPointer(
    proc("glColorP3uiv")!,
    def_glColorP3uiv,
  );
  fn_glColorP4ui = new Deno.UnsafeFnPointer(
    proc("glColorP4ui")!,
    def_glColorP4ui,
  );
  fn_glColorP4uiv = new Deno.UnsafeFnPointer(
    proc("glColorP4uiv")!,
    def_glColorP4uiv,
  );
  fn_glSecondaryColorP3ui = new Deno.UnsafeFnPointer(
    proc("glSecondaryColorP3ui")!,
    def_glSecondaryColorP3ui,
  );
  fn_glSecondaryColorP3uiv = new Deno.UnsafeFnPointer(
    proc("glSecondaryColorP3uiv")!,
    def_glSecondaryColorP3uiv,
  );
}
