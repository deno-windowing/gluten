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
export const VERTEX_ATTRIB_ARRAY_INTEGER_NV = 0x88fd;

/// Commands

export const def_glVertexAttribI1iEXT = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI1iEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1iEXT>;

export function VertexAttribI1iEXT(
  index: GLuint,
  x: GLint,
): void {
  fn_glVertexAttribI1iEXT.call(
    index,
    x,
  );
}

export const def_glVertexAttribI2iEXT = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI2iEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2iEXT>;

export function VertexAttribI2iEXT(
  index: GLuint,
  x: GLint,
  y: GLint,
): void {
  fn_glVertexAttribI2iEXT.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribI3iEXT = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI3iEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3iEXT>;

export function VertexAttribI3iEXT(
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
): void {
  fn_glVertexAttribI3iEXT.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribI4iEXT = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertexAttribI4iEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4iEXT>;

export function VertexAttribI4iEXT(
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glVertexAttribI4iEXT.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribI1uiEXT = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI1uiEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1uiEXT>;

export function VertexAttribI1uiEXT(
  index: GLuint,
  x: GLuint,
): void {
  fn_glVertexAttribI1uiEXT.call(
    index,
    x,
  );
}

export const def_glVertexAttribI2uiEXT = {
  parameters: ["u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI2uiEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2uiEXT>;

export function VertexAttribI2uiEXT(
  index: GLuint,
  x: GLuint,
  y: GLuint,
): void {
  fn_glVertexAttribI2uiEXT.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttribI3uiEXT = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI3uiEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3uiEXT>;

export function VertexAttribI3uiEXT(
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
): void {
  fn_glVertexAttribI3uiEXT.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttribI4uiEXT = {
  parameters: ["u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glVertexAttribI4uiEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4uiEXT>;

export function VertexAttribI4uiEXT(
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
  w: GLuint,
): void {
  fn_glVertexAttribI4uiEXT.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttribI1ivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI1ivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1ivEXT>;

export function VertexAttribI1ivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI1ivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI2ivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI2ivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2ivEXT>;

export function VertexAttribI2ivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI2ivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI3ivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI3ivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3ivEXT>;

export function VertexAttribI3ivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI3ivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4ivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4ivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4ivEXT>;

export function VertexAttribI4ivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4ivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI1uivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI1uivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI1uivEXT>;

export function VertexAttribI1uivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI1uivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI2uivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI2uivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI2uivEXT>;

export function VertexAttribI2uivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI2uivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI3uivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI3uivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI3uivEXT>;

export function VertexAttribI3uivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI3uivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4uivEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4uivEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4uivEXT>;

export function VertexAttribI4uivEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4uivEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4bvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4bvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4bvEXT>;

export function VertexAttribI4bvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4bvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4svEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4svEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4svEXT>;

export function VertexAttribI4svEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4svEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4ubvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4ubvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4ubvEXT>;

export function VertexAttribI4ubvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4ubvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribI4usvEXT = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribI4usvEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribI4usvEXT>;

export function VertexAttribI4usvEXT(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttribI4usvEXT.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribIPointerEXT = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribIPointerEXT!: Deno.UnsafeFnPointer<typeof def_glVertexAttribIPointerEXT>;

export function VertexAttribIPointerEXT(
  index: GLuint,
  size: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribIPointerEXT.call(
    index,
    size,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glGetVertexAttribIivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribIivEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribIivEXT>;

export function GetVertexAttribIivEXT(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribIivEXT.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribIuivEXT = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribIuivEXT!: Deno.UnsafeFnPointer<typeof def_glGetVertexAttribIuivEXT>;

export function GetVertexAttribIuivEXT(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribIuivEXT.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexAttribI1iEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI1iEXT")!, def_glVertexAttribI1iEXT);
  fn_glVertexAttribI2iEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI2iEXT")!, def_glVertexAttribI2iEXT);
  fn_glVertexAttribI3iEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI3iEXT")!, def_glVertexAttribI3iEXT);
  fn_glVertexAttribI4iEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4iEXT")!, def_glVertexAttribI4iEXT);
  fn_glVertexAttribI1uiEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI1uiEXT")!, def_glVertexAttribI1uiEXT);
  fn_glVertexAttribI2uiEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI2uiEXT")!, def_glVertexAttribI2uiEXT);
  fn_glVertexAttribI3uiEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI3uiEXT")!, def_glVertexAttribI3uiEXT);
  fn_glVertexAttribI4uiEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4uiEXT")!, def_glVertexAttribI4uiEXT);
  fn_glVertexAttribI1ivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI1ivEXT")!, def_glVertexAttribI1ivEXT);
  fn_glVertexAttribI2ivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI2ivEXT")!, def_glVertexAttribI2ivEXT);
  fn_glVertexAttribI3ivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI3ivEXT")!, def_glVertexAttribI3ivEXT);
  fn_glVertexAttribI4ivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4ivEXT")!, def_glVertexAttribI4ivEXT);
  fn_glVertexAttribI1uivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI1uivEXT")!, def_glVertexAttribI1uivEXT);
  fn_glVertexAttribI2uivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI2uivEXT")!, def_glVertexAttribI2uivEXT);
  fn_glVertexAttribI3uivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI3uivEXT")!, def_glVertexAttribI3uivEXT);
  fn_glVertexAttribI4uivEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4uivEXT")!, def_glVertexAttribI4uivEXT);
  fn_glVertexAttribI4bvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4bvEXT")!, def_glVertexAttribI4bvEXT);
  fn_glVertexAttribI4svEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4svEXT")!, def_glVertexAttribI4svEXT);
  fn_glVertexAttribI4ubvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4ubvEXT")!, def_glVertexAttribI4ubvEXT);
  fn_glVertexAttribI4usvEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribI4usvEXT")!, def_glVertexAttribI4usvEXT);
  fn_glVertexAttribIPointerEXT = new Deno.UnsafeFnPointer(proc("glVertexAttribIPointerEXT")!, def_glVertexAttribIPointerEXT);
  fn_glGetVertexAttribIivEXT = new Deno.UnsafeFnPointer(proc("glGetVertexAttribIivEXT")!, def_glGetVertexAttribIivEXT);
  fn_glGetVertexAttribIuivEXT = new Deno.UnsafeFnPointer(proc("glGetVertexAttribIuivEXT")!, def_glGetVertexAttribIuivEXT);
}
