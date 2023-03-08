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
export const MIN_PROGRAM_TEXEL_OFFSET_NV = 0x8904;
export const MAX_PROGRAM_TEXEL_OFFSET_NV = 0x8905;
export const PROGRAM_ATTRIB_COMPONENTS_NV = 0x8906;
export const PROGRAM_RESULT_COMPONENTS_NV = 0x8907;
export const MAX_PROGRAM_ATTRIB_COMPONENTS_NV = 0x8908;
export const MAX_PROGRAM_RESULT_COMPONENTS_NV = 0x8909;
export const MAX_PROGRAM_GENERIC_ATTRIBS_NV = 0x8da5;
export const MAX_PROGRAM_GENERIC_RESULTS_NV = 0x8da6;

/// Commands

export const def_glProgramLocalParameterI4iNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramLocalParameterI4iNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameterI4iNV>;

export function ProgramLocalParameterI4iNV(
  target: GLenum,
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glProgramLocalParameterI4iNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameterI4ivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameterI4ivNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameterI4ivNV>;

export function ProgramLocalParameterI4ivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameterI4ivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParametersI4ivNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParametersI4ivNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParametersI4ivNV>;

export function ProgramLocalParametersI4ivNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramLocalParametersI4ivNV.call(
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParameterI4uiNV = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramLocalParameterI4uiNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameterI4uiNV>;

export function ProgramLocalParameterI4uiNV(
  target: GLenum,
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
  w: GLuint,
): void {
  fn_glProgramLocalParameterI4uiNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameterI4uivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameterI4uivNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameterI4uivNV>;

export function ProgramLocalParameterI4uivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameterI4uivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParametersI4uivNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParametersI4uivNV!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParametersI4uivNV>;

export function ProgramLocalParametersI4uivNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramLocalParametersI4uivNV.call(
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParameterI4iNV = {
  parameters: ["u32", "u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glProgramEnvParameterI4iNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameterI4iNV>;

export function ProgramEnvParameterI4iNV(
  target: GLenum,
  index: GLuint,
  x: GLint,
  y: GLint,
  z: GLint,
  w: GLint,
): void {
  fn_glProgramEnvParameterI4iNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameterI4ivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameterI4ivNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameterI4ivNV>;

export function ProgramEnvParameterI4ivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameterI4ivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParametersI4ivNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParametersI4ivNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParametersI4ivNV>;

export function ProgramEnvParametersI4ivNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramEnvParametersI4ivNV.call(
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParameterI4uiNV = {
  parameters: ["u32", "u32", "u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glProgramEnvParameterI4uiNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameterI4uiNV>;

export function ProgramEnvParameterI4uiNV(
  target: GLenum,
  index: GLuint,
  x: GLuint,
  y: GLuint,
  z: GLuint,
  w: GLuint,
): void {
  fn_glProgramEnvParameterI4uiNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameterI4uivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameterI4uivNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameterI4uivNV>;

export function ProgramEnvParameterI4uivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameterI4uivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParametersI4uivNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParametersI4uivNV!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParametersI4uivNV>;

export function ProgramEnvParametersI4uivNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  params: Buffer,
): void {
  fn_glProgramEnvParametersI4uivNV.call(
    target,
    index,
    count,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterIivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterIivNV!: Deno.UnsafeFnPointer<typeof def_glGetProgramLocalParameterIivNV>;

export function GetProgramLocalParameterIivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterIivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterIuivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterIuivNV!: Deno.UnsafeFnPointer<typeof def_glGetProgramLocalParameterIuivNV>;

export function GetProgramLocalParameterIuivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterIuivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterIivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterIivNV!: Deno.UnsafeFnPointer<typeof def_glGetProgramEnvParameterIivNV>;

export function GetProgramEnvParameterIivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterIivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterIuivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterIuivNV!: Deno.UnsafeFnPointer<typeof def_glGetProgramEnvParameterIuivNV>;

export function GetProgramEnvParameterIuivNV(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterIuivNV.call(
    target,
    index,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramLocalParameterI4iNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParameterI4iNV")!, def_glProgramLocalParameterI4iNV);
  fn_glProgramLocalParameterI4ivNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParameterI4ivNV")!, def_glProgramLocalParameterI4ivNV);
  fn_glProgramLocalParametersI4ivNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParametersI4ivNV")!, def_glProgramLocalParametersI4ivNV);
  fn_glProgramLocalParameterI4uiNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParameterI4uiNV")!, def_glProgramLocalParameterI4uiNV);
  fn_glProgramLocalParameterI4uivNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParameterI4uivNV")!, def_glProgramLocalParameterI4uivNV);
  fn_glProgramLocalParametersI4uivNV = new Deno.UnsafeFnPointer(proc("glProgramLocalParametersI4uivNV")!, def_glProgramLocalParametersI4uivNV);
  fn_glProgramEnvParameterI4iNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParameterI4iNV")!, def_glProgramEnvParameterI4iNV);
  fn_glProgramEnvParameterI4ivNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParameterI4ivNV")!, def_glProgramEnvParameterI4ivNV);
  fn_glProgramEnvParametersI4ivNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParametersI4ivNV")!, def_glProgramEnvParametersI4ivNV);
  fn_glProgramEnvParameterI4uiNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParameterI4uiNV")!, def_glProgramEnvParameterI4uiNV);
  fn_glProgramEnvParameterI4uivNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParameterI4uivNV")!, def_glProgramEnvParameterI4uivNV);
  fn_glProgramEnvParametersI4uivNV = new Deno.UnsafeFnPointer(proc("glProgramEnvParametersI4uivNV")!, def_glProgramEnvParametersI4uivNV);
  fn_glGetProgramLocalParameterIivNV = new Deno.UnsafeFnPointer(proc("glGetProgramLocalParameterIivNV")!, def_glGetProgramLocalParameterIivNV);
  fn_glGetProgramLocalParameterIuivNV = new Deno.UnsafeFnPointer(proc("glGetProgramLocalParameterIuivNV")!, def_glGetProgramLocalParameterIuivNV);
  fn_glGetProgramEnvParameterIivNV = new Deno.UnsafeFnPointer(proc("glGetProgramEnvParameterIivNV")!, def_glGetProgramEnvParameterIivNV);
  fn_glGetProgramEnvParameterIuivNV = new Deno.UnsafeFnPointer(proc("glGetProgramEnvParameterIuivNV")!, def_glGetProgramEnvParameterIuivNV);
}
