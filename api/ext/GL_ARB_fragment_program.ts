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
export const FRAGMENT_PROGRAM_ARB = 0x8804;
export const PROGRAM_FORMAT_ASCII_ARB = 0x8875;
export const PROGRAM_LENGTH_ARB = 0x8627;
export const PROGRAM_FORMAT_ARB = 0x8876;
export const PROGRAM_BINDING_ARB = 0x8677;
export const PROGRAM_INSTRUCTIONS_ARB = 0x88a0;
export const MAX_PROGRAM_INSTRUCTIONS_ARB = 0x88a1;
export const PROGRAM_NATIVE_INSTRUCTIONS_ARB = 0x88a2;
export const MAX_PROGRAM_NATIVE_INSTRUCTIONS_ARB = 0x88a3;
export const PROGRAM_TEMPORARIES_ARB = 0x88a4;
export const MAX_PROGRAM_TEMPORARIES_ARB = 0x88a5;
export const PROGRAM_NATIVE_TEMPORARIES_ARB = 0x88a6;
export const MAX_PROGRAM_NATIVE_TEMPORARIES_ARB = 0x88a7;
export const PROGRAM_PARAMETERS_ARB = 0x88a8;
export const MAX_PROGRAM_PARAMETERS_ARB = 0x88a9;
export const PROGRAM_NATIVE_PARAMETERS_ARB = 0x88aa;
export const MAX_PROGRAM_NATIVE_PARAMETERS_ARB = 0x88ab;
export const PROGRAM_ATTRIBS_ARB = 0x88ac;
export const MAX_PROGRAM_ATTRIBS_ARB = 0x88ad;
export const PROGRAM_NATIVE_ATTRIBS_ARB = 0x88ae;
export const MAX_PROGRAM_NATIVE_ATTRIBS_ARB = 0x88af;
export const MAX_PROGRAM_LOCAL_PARAMETERS_ARB = 0x88b4;
export const MAX_PROGRAM_ENV_PARAMETERS_ARB = 0x88b5;
export const PROGRAM_UNDER_NATIVE_LIMITS_ARB = 0x88b6;
export const PROGRAM_ALU_INSTRUCTIONS_ARB = 0x8805;
export const PROGRAM_TEX_INSTRUCTIONS_ARB = 0x8806;
export const PROGRAM_TEX_INDIRECTIONS_ARB = 0x8807;
export const PROGRAM_NATIVE_ALU_INSTRUCTIONS_ARB = 0x8808;
export const PROGRAM_NATIVE_TEX_INSTRUCTIONS_ARB = 0x8809;
export const PROGRAM_NATIVE_TEX_INDIRECTIONS_ARB = 0x880a;
export const MAX_PROGRAM_ALU_INSTRUCTIONS_ARB = 0x880b;
export const MAX_PROGRAM_TEX_INSTRUCTIONS_ARB = 0x880c;
export const MAX_PROGRAM_TEX_INDIRECTIONS_ARB = 0x880d;
export const MAX_PROGRAM_NATIVE_ALU_INSTRUCTIONS_ARB = 0x880e;
export const MAX_PROGRAM_NATIVE_TEX_INSTRUCTIONS_ARB = 0x880f;
export const MAX_PROGRAM_NATIVE_TEX_INDIRECTIONS_ARB = 0x8810;
export const PROGRAM_STRING_ARB = 0x8628;
export const PROGRAM_ERROR_POSITION_ARB = 0x864b;
export const CURRENT_MATRIX_ARB = 0x8641;
export const TRANSPOSE_CURRENT_MATRIX_ARB = 0x88b7;
export const CURRENT_MATRIX_STACK_DEPTH_ARB = 0x8640;
export const MAX_PROGRAM_MATRICES_ARB = 0x862f;
export const MAX_PROGRAM_MATRIX_STACK_DEPTH_ARB = 0x862e;
export const MAX_TEXTURE_COORDS_ARB = 0x8871;
export const MAX_TEXTURE_IMAGE_UNITS_ARB = 0x8872;
export const PROGRAM_ERROR_STRING_ARB = 0x8874;
export const MATRIX0_ARB = 0x88c0;
export const MATRIX1_ARB = 0x88c1;
export const MATRIX2_ARB = 0x88c2;
export const MATRIX3_ARB = 0x88c3;
export const MATRIX4_ARB = 0x88c4;
export const MATRIX5_ARB = 0x88c5;
export const MATRIX6_ARB = 0x88c6;
export const MATRIX7_ARB = 0x88c7;
export const MATRIX8_ARB = 0x88c8;
export const MATRIX9_ARB = 0x88c9;
export const MATRIX10_ARB = 0x88ca;
export const MATRIX11_ARB = 0x88cb;
export const MATRIX12_ARB = 0x88cc;
export const MATRIX13_ARB = 0x88cd;
export const MATRIX14_ARB = 0x88ce;
export const MATRIX15_ARB = 0x88cf;
export const MATRIX16_ARB = 0x88d0;
export const MATRIX17_ARB = 0x88d1;
export const MATRIX18_ARB = 0x88d2;
export const MATRIX19_ARB = 0x88d3;
export const MATRIX20_ARB = 0x88d4;
export const MATRIX21_ARB = 0x88d5;
export const MATRIX22_ARB = 0x88d6;
export const MATRIX23_ARB = 0x88d7;
export const MATRIX24_ARB = 0x88d8;
export const MATRIX25_ARB = 0x88d9;
export const MATRIX26_ARB = 0x88da;
export const MATRIX27_ARB = 0x88db;
export const MATRIX28_ARB = 0x88dc;
export const MATRIX29_ARB = 0x88dd;
export const MATRIX30_ARB = 0x88de;
export const MATRIX31_ARB = 0x88df;

/// Commands

export const def_glProgramStringARB = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramStringARB!: Deno.UnsafeFnPointer<typeof def_glProgramStringARB>;

export function ProgramStringARB(
  target: GLenum,
  format: GLenum,
  len: GLsizei,
  string: Buffer,
): void {
  fn_glProgramStringARB.call(
    target,
    format,
    len,
    bufferToFFI(string),
  );
}

export const def_glBindProgramARB = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindProgramARB!: Deno.UnsafeFnPointer<typeof def_glBindProgramARB>;

export function BindProgramARB(
  target: GLenum,
  program: GLuint,
): void {
  fn_glBindProgramARB.call(
    target,
    program,
  );
}

export const def_glDeleteProgramsARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramsARB!: Deno.UnsafeFnPointer<typeof def_glDeleteProgramsARB>;

export function DeleteProgramsARB(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glDeleteProgramsARB.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glGenProgramsARB = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramsARB!: Deno.UnsafeFnPointer<typeof def_glGenProgramsARB>;

export function GenProgramsARB(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glGenProgramsARB.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glProgramEnvParameter4dARB = {
  parameters: ["u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4dARB!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameter4dARB>;

export function ProgramEnvParameter4dARB(
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramEnvParameter4dARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameter4dvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4dvARB!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameter4dvARB>;

export function ProgramEnvParameter4dvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameter4dvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramEnvParameter4fARB = {
  parameters: ["u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4fARB!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameter4fARB>;

export function ProgramEnvParameter4fARB(
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramEnvParameter4fARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramEnvParameter4fvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramEnvParameter4fvARB!: Deno.UnsafeFnPointer<typeof def_glProgramEnvParameter4fvARB>;

export function ProgramEnvParameter4fvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramEnvParameter4fvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParameter4dARB = {
  parameters: ["u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4dARB!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameter4dARB>;

export function ProgramLocalParameter4dARB(
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramLocalParameter4dARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameter4dvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4dvARB!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameter4dvARB>;

export function ProgramLocalParameter4dvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameter4dvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glProgramLocalParameter4fARB = {
  parameters: ["u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4fARB!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameter4fARB>;

export function ProgramLocalParameter4fARB(
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramLocalParameter4fARB.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramLocalParameter4fvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramLocalParameter4fvARB!: Deno.UnsafeFnPointer<typeof def_glProgramLocalParameter4fvARB>;

export function ProgramLocalParameter4fvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glProgramLocalParameter4fvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterdvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterdvARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramEnvParameterdvARB>;

export function GetProgramEnvParameterdvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterdvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramEnvParameterfvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramEnvParameterfvARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramEnvParameterfvARB>;

export function GetProgramEnvParameterfvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramEnvParameterfvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterdvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterdvARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramLocalParameterdvARB>;

export function GetProgramLocalParameterdvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterdvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramLocalParameterfvARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramLocalParameterfvARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramLocalParameterfvARB>;

export function GetProgramLocalParameterfvARB(
  target: GLenum,
  index: GLuint,
  params: Buffer,
): void {
  fn_glGetProgramLocalParameterfvARB.call(
    target,
    index,
    bufferToFFI(params),
  );
}

export const def_glGetProgramivARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramivARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramivARB>;

export function GetProgramivARB(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramivARB.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramStringARB = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramStringARB!: Deno.UnsafeFnPointer<typeof def_glGetProgramStringARB>;

export function GetProgramStringARB(
  target: GLenum,
  pname: GLenum,
  string: Buffer,
): void {
  fn_glGetProgramStringARB.call(
    target,
    pname,
    bufferToFFI(string),
  );
}

export const def_glIsProgramARB = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramARB!: Deno.UnsafeFnPointer<typeof def_glIsProgramARB>;

export function IsProgramARB(
  program: GLuint,
): GLboolean {
  return fn_glIsProgramARB.call(
    program,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramStringARB = new Deno.UnsafeFnPointer(proc("glProgramStringARB")!, def_glProgramStringARB);
  fn_glBindProgramARB = new Deno.UnsafeFnPointer(proc("glBindProgramARB")!, def_glBindProgramARB);
  fn_glDeleteProgramsARB = new Deno.UnsafeFnPointer(proc("glDeleteProgramsARB")!, def_glDeleteProgramsARB);
  fn_glGenProgramsARB = new Deno.UnsafeFnPointer(proc("glGenProgramsARB")!, def_glGenProgramsARB);
  fn_glProgramEnvParameter4dARB = new Deno.UnsafeFnPointer(proc("glProgramEnvParameter4dARB")!, def_glProgramEnvParameter4dARB);
  fn_glProgramEnvParameter4dvARB = new Deno.UnsafeFnPointer(proc("glProgramEnvParameter4dvARB")!, def_glProgramEnvParameter4dvARB);
  fn_glProgramEnvParameter4fARB = new Deno.UnsafeFnPointer(proc("glProgramEnvParameter4fARB")!, def_glProgramEnvParameter4fARB);
  fn_glProgramEnvParameter4fvARB = new Deno.UnsafeFnPointer(proc("glProgramEnvParameter4fvARB")!, def_glProgramEnvParameter4fvARB);
  fn_glProgramLocalParameter4dARB = new Deno.UnsafeFnPointer(proc("glProgramLocalParameter4dARB")!, def_glProgramLocalParameter4dARB);
  fn_glProgramLocalParameter4dvARB = new Deno.UnsafeFnPointer(proc("glProgramLocalParameter4dvARB")!, def_glProgramLocalParameter4dvARB);
  fn_glProgramLocalParameter4fARB = new Deno.UnsafeFnPointer(proc("glProgramLocalParameter4fARB")!, def_glProgramLocalParameter4fARB);
  fn_glProgramLocalParameter4fvARB = new Deno.UnsafeFnPointer(proc("glProgramLocalParameter4fvARB")!, def_glProgramLocalParameter4fvARB);
  fn_glGetProgramEnvParameterdvARB = new Deno.UnsafeFnPointer(proc("glGetProgramEnvParameterdvARB")!, def_glGetProgramEnvParameterdvARB);
  fn_glGetProgramEnvParameterfvARB = new Deno.UnsafeFnPointer(proc("glGetProgramEnvParameterfvARB")!, def_glGetProgramEnvParameterfvARB);
  fn_glGetProgramLocalParameterdvARB = new Deno.UnsafeFnPointer(proc("glGetProgramLocalParameterdvARB")!, def_glGetProgramLocalParameterdvARB);
  fn_glGetProgramLocalParameterfvARB = new Deno.UnsafeFnPointer(proc("glGetProgramLocalParameterfvARB")!, def_glGetProgramLocalParameterfvARB);
  fn_glGetProgramivARB = new Deno.UnsafeFnPointer(proc("glGetProgramivARB")!, def_glGetProgramivARB);
  fn_glGetProgramStringARB = new Deno.UnsafeFnPointer(proc("glGetProgramStringARB")!, def_glGetProgramStringARB);
  fn_glIsProgramARB = new Deno.UnsafeFnPointer(proc("glIsProgramARB")!, def_glIsProgramARB);
}
