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
export const UNIFORM = 0x92e1;
export const UNIFORM_BLOCK = 0x92e2;
export const PROGRAM_INPUT = 0x92e3;
export const PROGRAM_OUTPUT = 0x92e4;
export const BUFFER_VARIABLE = 0x92e5;
export const SHADER_STORAGE_BLOCK = 0x92e6;
export const ATOMIC_COUNTER_BUFFER = 0x92c0;
export const VERTEX_SUBROUTINE = 0x92e8;
export const TESS_CONTROL_SUBROUTINE = 0x92e9;
export const TESS_EVALUATION_SUBROUTINE = 0x92ea;
export const GEOMETRY_SUBROUTINE = 0x92eb;
export const FRAGMENT_SUBROUTINE = 0x92ec;
export const COMPUTE_SUBROUTINE = 0x92ed;
export const VERTEX_SUBROUTINE_UNIFORM = 0x92ee;
export const TESS_CONTROL_SUBROUTINE_UNIFORM = 0x92ef;
export const TESS_EVALUATION_SUBROUTINE_UNIFORM = 0x92f0;
export const GEOMETRY_SUBROUTINE_UNIFORM = 0x92f1;
export const FRAGMENT_SUBROUTINE_UNIFORM = 0x92f2;
export const COMPUTE_SUBROUTINE_UNIFORM = 0x92f3;
export const TRANSFORM_FEEDBACK_VARYING = 0x92f4;
export const ACTIVE_RESOURCES = 0x92f5;
export const MAX_NAME_LENGTH = 0x92f6;
export const MAX_NUM_ACTIVE_VARIABLES = 0x92f7;
export const MAX_NUM_COMPATIBLE_SUBROUTINES = 0x92f8;
export const NAME_LENGTH = 0x92f9;
export const TYPE = 0x92fa;
export const ARRAY_SIZE = 0x92fb;
export const OFFSET = 0x92fc;
export const BLOCK_INDEX = 0x92fd;
export const ARRAY_STRIDE = 0x92fe;
export const MATRIX_STRIDE = 0x92ff;
export const IS_ROW_MAJOR = 0x9300;
export const ATOMIC_COUNTER_BUFFER_INDEX = 0x9301;
export const BUFFER_BINDING = 0x9302;
export const BUFFER_DATA_SIZE = 0x9303;
export const NUM_ACTIVE_VARIABLES = 0x9304;
export const ACTIVE_VARIABLES = 0x9305;
export const REFERENCED_BY_VERTEX_SHADER = 0x9306;
export const REFERENCED_BY_TESS_CONTROL_SHADER = 0x9307;
export const REFERENCED_BY_TESS_EVALUATION_SHADER = 0x9308;
export const REFERENCED_BY_GEOMETRY_SHADER = 0x9309;
export const REFERENCED_BY_FRAGMENT_SHADER = 0x930a;
export const REFERENCED_BY_COMPUTE_SHADER = 0x930b;
export const TOP_LEVEL_ARRAY_SIZE = 0x930c;
export const TOP_LEVEL_ARRAY_STRIDE = 0x930d;
export const LOCATION = 0x930e;
export const LOCATION_INDEX = 0x930f;
export const IS_PER_PATCH = 0x92e7;
export const NUM_COMPATIBLE_SUBROUTINES = 0x8e4a;
export const COMPATIBLE_SUBROUTINES = 0x8e4b;

/// Commands

export const def_glGetProgramInterfaceiv = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramInterfaceiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramInterfaceiv>;

export function GetProgramInterfaceiv(
  program: GLuint,
  programInterface: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramInterfaceiv.call(
    program,
    programInterface,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramResourceIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "u32",
} as const;

let fn_glGetProgramResourceIndex!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceIndex>;

export function GetProgramResourceIndex(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLuint {
  return fn_glGetProgramResourceIndex.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceName = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramResourceName!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceName>;

export function GetProgramResourceName(
  program: GLuint,
  programInterface: GLenum,
  index: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  name: Buffer,
): void {
  fn_glGetProgramResourceName.call(
    program,
    programInterface,
    index,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceiv = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramResourceiv!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceiv>;

export function GetProgramResourceiv(
  program: GLuint,
  programInterface: GLenum,
  index: GLuint,
  propCount: GLsizei,
  props: Buffer,
  count: GLsizei,
  length: Buffer,
  params: Buffer,
): void {
  fn_glGetProgramResourceiv.call(
    program,
    programInterface,
    index,
    propCount,
    bufferToFFI(props),
    count,
    bufferToFFI(length),
    bufferToFFI(params),
  );
}

export const def_glGetProgramResourceLocation = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetProgramResourceLocation!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceLocation>;

export function GetProgramResourceLocation(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetProgramResourceLocation.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

export const def_glGetProgramResourceLocationIndex = {
  parameters: ["u32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glGetProgramResourceLocationIndex!: Deno.UnsafeFnPointer<typeof def_glGetProgramResourceLocationIndex>;

export function GetProgramResourceLocationIndex(
  program: GLuint,
  programInterface: GLenum,
  name: Buffer,
): GLint {
  return fn_glGetProgramResourceLocationIndex.call(
    program,
    programInterface,
    bufferToFFI(name),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetProgramInterfaceiv = new Deno.UnsafeFnPointer(proc("glGetProgramInterfaceiv"), def_glGetProgramInterfaceiv);
  fn_glGetProgramResourceIndex = new Deno.UnsafeFnPointer(proc("glGetProgramResourceIndex"), def_glGetProgramResourceIndex);
  fn_glGetProgramResourceName = new Deno.UnsafeFnPointer(proc("glGetProgramResourceName"), def_glGetProgramResourceName);
  fn_glGetProgramResourceiv = new Deno.UnsafeFnPointer(proc("glGetProgramResourceiv"), def_glGetProgramResourceiv);
  fn_glGetProgramResourceLocation = new Deno.UnsafeFnPointer(proc("glGetProgramResourceLocation"), def_glGetProgramResourceLocation);
  fn_glGetProgramResourceLocationIndex = new Deno.UnsafeFnPointer(proc("glGetProgramResourceLocationIndex"), def_glGetProgramResourceLocationIndex);
}
