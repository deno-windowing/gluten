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
export const MAX_DEBUG_MESSAGE_LENGTH_AMD = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES_AMD = 0x9144;
export const DEBUG_LOGGED_MESSAGES_AMD = 0x9145;
export const DEBUG_SEVERITY_HIGH_AMD = 0x9146;
export const DEBUG_SEVERITY_MEDIUM_AMD = 0x9147;
export const DEBUG_SEVERITY_LOW_AMD = 0x9148;
export const DEBUG_CATEGORY_API_ERROR_AMD = 0x9149;
export const DEBUG_CATEGORY_WINDOW_SYSTEM_AMD = 0x914a;
export const DEBUG_CATEGORY_DEPRECATION_AMD = 0x914b;
export const DEBUG_CATEGORY_UNDEFINED_BEHAVIOR_AMD = 0x914c;
export const DEBUG_CATEGORY_PERFORMANCE_AMD = 0x914d;
export const DEBUG_CATEGORY_SHADER_COMPILER_AMD = 0x914e;
export const DEBUG_CATEGORY_APPLICATION_AMD = 0x914f;
export const DEBUG_CATEGORY_OTHER_AMD = 0x9150;

/// Commands

export const def_glDebugMessageEnableAMD = {
  parameters: ["u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageEnableAMD!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageEnableAMD
>;

export function DebugMessageEnableAMD(
  category: GLenum,
  severity: GLenum,
  count: GLsizei,
  ids: Buffer,
  enabled: GLboolean,
): void {
  fn_glDebugMessageEnableAMD.call(
    category,
    severity,
    count,
    bufferToFFI(ids),
    enabled,
  );
}

export const def_glDebugMessageInsertAMD = {
  parameters: ["u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageInsertAMD!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageInsertAMD
>;

export function DebugMessageInsertAMD(
  category: GLenum,
  severity: GLenum,
  id: GLuint,
  length: GLsizei,
  buf: Buffer,
): void {
  fn_glDebugMessageInsertAMD.call(
    category,
    severity,
    id,
    length,
    bufferToFFI(buf),
  );
}

export const def_glDebugMessageCallbackAMD = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageCallbackAMD!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageCallbackAMD
>;

export function DebugMessageCallbackAMD(
  callback: GLDEBUGPROCAMD,
  userParam: Buffer,
): void {
  fn_glDebugMessageCallbackAMD.call(
    bufferToFFI(callback),
    bufferToFFI(userParam),
  );
}

export const def_glGetDebugMessageLogAMD = {
  parameters: ["u32", "i32", "buffer", "buffer", "buffer", "buffer", "buffer"],
  result: "u32",
} as const;

let fn_glGetDebugMessageLogAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetDebugMessageLogAMD
>;

export function GetDebugMessageLogAMD(
  count: GLuint,
  bufSize: GLsizei,
  categories: Buffer,
  severities: Buffer,
  ids: Buffer,
  lengths: Buffer,
  message: Buffer,
): GLuint {
  return fn_glGetDebugMessageLogAMD.call(
    count,
    bufSize,
    bufferToFFI(categories),
    bufferToFFI(severities),
    bufferToFFI(ids),
    bufferToFFI(lengths),
    bufferToFFI(message),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDebugMessageEnableAMD = new Deno.UnsafeFnPointer(
    proc("glDebugMessageEnableAMD")!,
    def_glDebugMessageEnableAMD,
  );
  fn_glDebugMessageInsertAMD = new Deno.UnsafeFnPointer(
    proc("glDebugMessageInsertAMD")!,
    def_glDebugMessageInsertAMD,
  );
  fn_glDebugMessageCallbackAMD = new Deno.UnsafeFnPointer(
    proc("glDebugMessageCallbackAMD")!,
    def_glDebugMessageCallbackAMD,
  );
  fn_glGetDebugMessageLogAMD = new Deno.UnsafeFnPointer(
    proc("glGetDebugMessageLogAMD")!,
    def_glGetDebugMessageLogAMD,
  );
}
