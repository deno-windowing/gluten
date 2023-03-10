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
export const TERMINATE_SEQUENCE_COMMAND_NV = 0x0;
export const NOP_COMMAND_NV = 0x1;
export const DRAW_ELEMENTS_COMMAND_NV = 0x2;
export const DRAW_ARRAYS_COMMAND_NV = 0x3;
export const DRAW_ELEMENTS_STRIP_COMMAND_NV = 0x4;
export const DRAW_ARRAYS_STRIP_COMMAND_NV = 0x5;
export const DRAW_ELEMENTS_INSTANCED_COMMAND_NV = 0x6;
export const DRAW_ARRAYS_INSTANCED_COMMAND_NV = 0x7;
export const ELEMENT_ADDRESS_COMMAND_NV = 0x8;
export const ATTRIBUTE_ADDRESS_COMMAND_NV = 0x9;
export const UNIFORM_ADDRESS_COMMAND_NV = 0xa;
export const BLEND_COLOR_COMMAND_NV = 0xb;
export const STENCIL_REF_COMMAND_NV = 0xc;
export const LINE_WIDTH_COMMAND_NV = 0xd;
export const POLYGON_OFFSET_COMMAND_NV = 0xe;
export const ALPHA_REF_COMMAND_NV = 0xf;
export const VIEWPORT_COMMAND_NV = 0x10;
export const SCISSOR_COMMAND_NV = 0x11;
export const FRONT_FACE_COMMAND_NV = 0x12;

/// Commands

export const def_glCreateStatesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateStatesNV!: Deno.UnsafeFnPointer<typeof def_glCreateStatesNV>;

export function CreateStatesNV(
  n: GLsizei,
  states: Buffer,
): void {
  fn_glCreateStatesNV.call(
    n,
    bufferToFFI(states),
  );
}

export const def_glDeleteStatesNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteStatesNV!: Deno.UnsafeFnPointer<typeof def_glDeleteStatesNV>;

export function DeleteStatesNV(
  n: GLsizei,
  states: Buffer,
): void {
  fn_glDeleteStatesNV.call(
    n,
    bufferToFFI(states),
  );
}

export const def_glIsStateNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsStateNV!: Deno.UnsafeFnPointer<typeof def_glIsStateNV>;

export function IsStateNV(
  state: GLuint,
): GLboolean {
  return fn_glIsStateNV.call(
    state,
  );
}

export const def_glStateCaptureNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glStateCaptureNV!: Deno.UnsafeFnPointer<typeof def_glStateCaptureNV>;

export function StateCaptureNV(
  state: GLuint,
  mode: GLenum,
): void {
  fn_glStateCaptureNV.call(
    state,
    mode,
  );
}

export const def_glGetCommandHeaderNV = {
  parameters: ["u32", "u32"],
  result: "u32",
} as const;

let fn_glGetCommandHeaderNV!: Deno.UnsafeFnPointer<typeof def_glGetCommandHeaderNV>;

export function GetCommandHeaderNV(
  tokenID: GLenum,
  size: GLuint,
): GLuint {
  return fn_glGetCommandHeaderNV.call(
    tokenID,
    size,
  );
}

export const def_glGetStageIndexNV = {
  parameters: ["u32"],
  result: "u16",
} as const;

let fn_glGetStageIndexNV!: Deno.UnsafeFnPointer<typeof def_glGetStageIndexNV>;

export function GetStageIndexNV(
  shadertype: GLenum,
): GLushort {
  return fn_glGetStageIndexNV.call(
    shadertype,
  );
}

export const def_glDrawCommandsNV = {
  parameters: ["u32", "u32", "buffer", "buffer", "u32"],
  result: "void",
} as const;

let fn_glDrawCommandsNV!: Deno.UnsafeFnPointer<typeof def_glDrawCommandsNV>;

export function DrawCommandsNV(
  primitiveMode: GLenum,
  buffer: GLuint,
  indirects: Buffer,
  sizes: Buffer,
  count: GLuint,
): void {
  fn_glDrawCommandsNV.call(
    primitiveMode,
    buffer,
    bufferToFFI(indirects),
    bufferToFFI(sizes),
    count,
  );
}

export const def_glDrawCommandsAddressNV = {
  parameters: ["u32", "buffer", "buffer", "u32"],
  result: "void",
} as const;

let fn_glDrawCommandsAddressNV!: Deno.UnsafeFnPointer<typeof def_glDrawCommandsAddressNV>;

export function DrawCommandsAddressNV(
  primitiveMode: GLenum,
  indirects: Buffer,
  sizes: Buffer,
  count: GLuint,
): void {
  fn_glDrawCommandsAddressNV.call(
    primitiveMode,
    bufferToFFI(indirects),
    bufferToFFI(sizes),
    count,
  );
}

export const def_glDrawCommandsStatesNV = {
  parameters: ["u32", "buffer", "buffer", "buffer", "buffer", "u32"],
  result: "void",
} as const;

let fn_glDrawCommandsStatesNV!: Deno.UnsafeFnPointer<typeof def_glDrawCommandsStatesNV>;

export function DrawCommandsStatesNV(
  buffer: GLuint,
  indirects: Buffer,
  sizes: Buffer,
  states: Buffer,
  fbos: Buffer,
  count: GLuint,
): void {
  fn_glDrawCommandsStatesNV.call(
    buffer,
    bufferToFFI(indirects),
    bufferToFFI(sizes),
    bufferToFFI(states),
    bufferToFFI(fbos),
    count,
  );
}

export const def_glDrawCommandsStatesAddressNV = {
  parameters: ["buffer", "buffer", "buffer", "buffer", "u32"],
  result: "void",
} as const;

let fn_glDrawCommandsStatesAddressNV!: Deno.UnsafeFnPointer<typeof def_glDrawCommandsStatesAddressNV>;

export function DrawCommandsStatesAddressNV(
  indirects: Buffer,
  sizes: Buffer,
  states: Buffer,
  fbos: Buffer,
  count: GLuint,
): void {
  fn_glDrawCommandsStatesAddressNV.call(
    bufferToFFI(indirects),
    bufferToFFI(sizes),
    bufferToFFI(states),
    bufferToFFI(fbos),
    count,
  );
}

export const def_glCreateCommandListsNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glCreateCommandListsNV!: Deno.UnsafeFnPointer<typeof def_glCreateCommandListsNV>;

export function CreateCommandListsNV(
  n: GLsizei,
  lists: Buffer,
): void {
  fn_glCreateCommandListsNV.call(
    n,
    bufferToFFI(lists),
  );
}

export const def_glDeleteCommandListsNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteCommandListsNV!: Deno.UnsafeFnPointer<typeof def_glDeleteCommandListsNV>;

export function DeleteCommandListsNV(
  n: GLsizei,
  lists: Buffer,
): void {
  fn_glDeleteCommandListsNV.call(
    n,
    bufferToFFI(lists),
  );
}

export const def_glIsCommandListNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsCommandListNV!: Deno.UnsafeFnPointer<typeof def_glIsCommandListNV>;

export function IsCommandListNV(
  list: GLuint,
): GLboolean {
  return fn_glIsCommandListNV.call(
    list,
  );
}

export const def_glListDrawCommandsStatesClientNV = {
  parameters: ["u32", "u32", "buffer", "buffer", "buffer", "buffer", "u32"],
  result: "void",
} as const;

let fn_glListDrawCommandsStatesClientNV!: Deno.UnsafeFnPointer<typeof def_glListDrawCommandsStatesClientNV>;

export function ListDrawCommandsStatesClientNV(
  list: GLuint,
  segment: GLuint,
  indirects: Buffer,
  sizes: Buffer,
  states: Buffer,
  fbos: Buffer,
  count: GLuint,
): void {
  fn_glListDrawCommandsStatesClientNV.call(
    list,
    segment,
    bufferToFFI(indirects),
    bufferToFFI(sizes),
    bufferToFFI(states),
    bufferToFFI(fbos),
    count,
  );
}

export const def_glCommandListSegmentsNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glCommandListSegmentsNV!: Deno.UnsafeFnPointer<typeof def_glCommandListSegmentsNV>;

export function CommandListSegmentsNV(
  list: GLuint,
  segments: GLuint,
): void {
  fn_glCommandListSegmentsNV.call(
    list,
    segments,
  );
}

export const def_glCompileCommandListNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCompileCommandListNV!: Deno.UnsafeFnPointer<typeof def_glCompileCommandListNV>;

export function CompileCommandListNV(
  list: GLuint,
): void {
  fn_glCompileCommandListNV.call(
    list,
  );
}

export const def_glCallCommandListNV = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glCallCommandListNV!: Deno.UnsafeFnPointer<typeof def_glCallCommandListNV>;

export function CallCommandListNV(
  list: GLuint,
): void {
  fn_glCallCommandListNV.call(
    list,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glCreateStatesNV = new Deno.UnsafeFnPointer(proc("glCreateStatesNV")!, def_glCreateStatesNV);
  fn_glDeleteStatesNV = new Deno.UnsafeFnPointer(proc("glDeleteStatesNV")!, def_glDeleteStatesNV);
  fn_glIsStateNV = new Deno.UnsafeFnPointer(proc("glIsStateNV")!, def_glIsStateNV);
  fn_glStateCaptureNV = new Deno.UnsafeFnPointer(proc("glStateCaptureNV")!, def_glStateCaptureNV);
  fn_glGetCommandHeaderNV = new Deno.UnsafeFnPointer(proc("glGetCommandHeaderNV")!, def_glGetCommandHeaderNV);
  fn_glGetStageIndexNV = new Deno.UnsafeFnPointer(proc("glGetStageIndexNV")!, def_glGetStageIndexNV);
  fn_glDrawCommandsNV = new Deno.UnsafeFnPointer(proc("glDrawCommandsNV")!, def_glDrawCommandsNV);
  fn_glDrawCommandsAddressNV = new Deno.UnsafeFnPointer(proc("glDrawCommandsAddressNV")!, def_glDrawCommandsAddressNV);
  fn_glDrawCommandsStatesNV = new Deno.UnsafeFnPointer(proc("glDrawCommandsStatesNV")!, def_glDrawCommandsStatesNV);
  fn_glDrawCommandsStatesAddressNV = new Deno.UnsafeFnPointer(proc("glDrawCommandsStatesAddressNV")!, def_glDrawCommandsStatesAddressNV);
  fn_glCreateCommandListsNV = new Deno.UnsafeFnPointer(proc("glCreateCommandListsNV")!, def_glCreateCommandListsNV);
  fn_glDeleteCommandListsNV = new Deno.UnsafeFnPointer(proc("glDeleteCommandListsNV")!, def_glDeleteCommandListsNV);
  fn_glIsCommandListNV = new Deno.UnsafeFnPointer(proc("glIsCommandListNV")!, def_glIsCommandListNV);
  fn_glListDrawCommandsStatesClientNV = new Deno.UnsafeFnPointer(proc("glListDrawCommandsStatesClientNV")!, def_glListDrawCommandsStatesClientNV);
  fn_glCommandListSegmentsNV = new Deno.UnsafeFnPointer(proc("glCommandListSegmentsNV")!, def_glCommandListSegmentsNV);
  fn_glCompileCommandListNV = new Deno.UnsafeFnPointer(proc("glCompileCommandListNV")!, def_glCompileCommandListNV);
  fn_glCallCommandListNV = new Deno.UnsafeFnPointer(proc("glCallCommandListNV")!, def_glCallCommandListNV);
}
