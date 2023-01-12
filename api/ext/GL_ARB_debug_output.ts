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
export const DEBUG_OUTPUT_SYNCHRONOUS_ARB = 0x8242;
export const DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_ARB = 0x8243;
export const DEBUG_CALLBACK_FUNCTION_ARB = 0x8244;
export const DEBUG_CALLBACK_USER_PARAM_ARB = 0x8245;
export const DEBUG_SOURCE_API_ARB = 0x8246;
export const DEBUG_SOURCE_WINDOW_SYSTEM_ARB = 0x8247;
export const DEBUG_SOURCE_SHADER_COMPILER_ARB = 0x8248;
export const DEBUG_SOURCE_THIRD_PARTY_ARB = 0x8249;
export const DEBUG_SOURCE_APPLICATION_ARB = 0x824a;
export const DEBUG_SOURCE_OTHER_ARB = 0x824b;
export const DEBUG_TYPE_ERROR_ARB = 0x824c;
export const DEBUG_TYPE_DEPRECATED_BEHAVIOR_ARB = 0x824d;
export const DEBUG_TYPE_UNDEFINED_BEHAVIOR_ARB = 0x824e;
export const DEBUG_TYPE_PORTABILITY_ARB = 0x824f;
export const DEBUG_TYPE_PERFORMANCE_ARB = 0x8250;
export const DEBUG_TYPE_OTHER_ARB = 0x8251;
export const MAX_DEBUG_MESSAGE_LENGTH_ARB = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES_ARB = 0x9144;
export const DEBUG_LOGGED_MESSAGES_ARB = 0x9145;
export const DEBUG_SEVERITY_HIGH_ARB = 0x9146;
export const DEBUG_SEVERITY_MEDIUM_ARB = 0x9147;
export const DEBUG_SEVERITY_LOW_ARB = 0x9148;

/// Commands

export const def_glDebugMessageControlARB = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageControlARB!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageControlARB
>;

export function DebugMessageControlARB(
  source: GLenum,
  type: GLenum,
  severity: GLenum,
  count: GLsizei,
  ids: Buffer,
  enabled: GLboolean,
): void {
  fn_glDebugMessageControlARB.call(
    source,
    type,
    severity,
    count,
    bufferToFFI(ids),
    enabled,
  );
}

export const def_glDebugMessageInsertARB = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageInsertARB!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageInsertARB
>;

export function DebugMessageInsertARB(
  source: GLenum,
  type: GLenum,
  id: GLuint,
  severity: GLenum,
  length: GLsizei,
  buf: Buffer,
): void {
  fn_glDebugMessageInsertARB.call(
    source,
    type,
    id,
    severity,
    length,
    bufferToFFI(buf),
  );
}

export const def_glDebugMessageCallbackARB = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageCallbackARB!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageCallbackARB
>;

export function DebugMessageCallbackARB(
  callback: GLDEBUGPROCARB,
  userParam: Buffer,
): void {
  fn_glDebugMessageCallbackARB.call(
    bufferToFFI(callback),
    bufferToFFI(userParam),
  );
}

export const def_glGetDebugMessageLogARB = {
  parameters: [
    "u32",
    "i32",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
    "buffer",
  ],
  result: "u32",
} as const;

let fn_glGetDebugMessageLogARB!: Deno.UnsafeFnPointer<
  typeof def_glGetDebugMessageLogARB
>;

export function GetDebugMessageLogARB(
  count: GLuint,
  bufSize: GLsizei,
  sources: Buffer,
  types: Buffer,
  ids: Buffer,
  severities: Buffer,
  lengths: Buffer,
  messageLog: Buffer,
): GLuint {
  return fn_glGetDebugMessageLogARB.call(
    count,
    bufSize,
    bufferToFFI(sources),
    bufferToFFI(types),
    bufferToFFI(ids),
    bufferToFFI(severities),
    bufferToFFI(lengths),
    bufferToFFI(messageLog),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDebugMessageControlARB = new Deno.UnsafeFnPointer(
    proc("glDebugMessageControlARB"),
    def_glDebugMessageControlARB,
  );
  fn_glDebugMessageInsertARB = new Deno.UnsafeFnPointer(
    proc("glDebugMessageInsertARB"),
    def_glDebugMessageInsertARB,
  );
  fn_glDebugMessageCallbackARB = new Deno.UnsafeFnPointer(
    proc("glDebugMessageCallbackARB"),
    def_glDebugMessageCallbackARB,
  );
  fn_glGetDebugMessageLogARB = new Deno.UnsafeFnPointer(
    proc("glGetDebugMessageLogARB"),
    def_glGetDebugMessageLogARB,
  );
}
