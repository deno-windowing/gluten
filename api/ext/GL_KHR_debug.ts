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
export const DEBUG_OUTPUT_SYNCHRONOUS = 0x8242;
export const DEBUG_NEXT_LOGGED_MESSAGE_LENGTH = 0x8243;
export const DEBUG_CALLBACK_FUNCTION = 0x8244;
export const DEBUG_CALLBACK_USER_PARAM = 0x8245;
export const DEBUG_SOURCE_API = 0x8246;
export const DEBUG_SOURCE_WINDOW_SYSTEM = 0x8247;
export const DEBUG_SOURCE_SHADER_COMPILER = 0x8248;
export const DEBUG_SOURCE_THIRD_PARTY = 0x8249;
export const DEBUG_SOURCE_APPLICATION = 0x824a;
export const DEBUG_SOURCE_OTHER = 0x824b;
export const DEBUG_TYPE_ERROR = 0x824c;
export const DEBUG_TYPE_DEPRECATED_BEHAVIOR = 0x824d;
export const DEBUG_TYPE_UNDEFINED_BEHAVIOR = 0x824e;
export const DEBUG_TYPE_PORTABILITY = 0x824f;
export const DEBUG_TYPE_PERFORMANCE = 0x8250;
export const DEBUG_TYPE_OTHER = 0x8251;
export const DEBUG_TYPE_MARKER = 0x8268;
export const DEBUG_TYPE_PUSH_GROUP = 0x8269;
export const DEBUG_TYPE_POP_GROUP = 0x826a;
export const DEBUG_SEVERITY_NOTIFICATION = 0x826b;
export const MAX_DEBUG_GROUP_STACK_DEPTH = 0x826c;
export const DEBUG_GROUP_STACK_DEPTH = 0x826d;
export const BUFFER = 0x82e0;
export const SHADER = 0x82e1;
export const PROGRAM = 0x82e2;
export const VERTEX_ARRAY = 0x8074;
export const QUERY = 0x82e3;
export const PROGRAM_PIPELINE = 0x82e4;
export const SAMPLER = 0x82e6;
export const MAX_LABEL_LENGTH = 0x82e8;
export const MAX_DEBUG_MESSAGE_LENGTH = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES = 0x9144;
export const DEBUG_LOGGED_MESSAGES = 0x9145;
export const DEBUG_SEVERITY_HIGH = 0x9146;
export const DEBUG_SEVERITY_MEDIUM = 0x9147;
export const DEBUG_SEVERITY_LOW = 0x9148;
export const DEBUG_OUTPUT = 0x92e0;
export const CONTEXT_FLAG_DEBUG_BIT = 0x2;
export const STACK_OVERFLOW = 0x503;
export const STACK_UNDERFLOW = 0x504;
export const DEBUG_OUTPUT_SYNCHRONOUS_KHR = 0x8242;
export const DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_KHR = 0x8243;
export const DEBUG_CALLBACK_FUNCTION_KHR = 0x8244;
export const DEBUG_CALLBACK_USER_PARAM_KHR = 0x8245;
export const DEBUG_SOURCE_API_KHR = 0x8246;
export const DEBUG_SOURCE_WINDOW_SYSTEM_KHR = 0x8247;
export const DEBUG_SOURCE_SHADER_COMPILER_KHR = 0x8248;
export const DEBUG_SOURCE_THIRD_PARTY_KHR = 0x8249;
export const DEBUG_SOURCE_APPLICATION_KHR = 0x824a;
export const DEBUG_SOURCE_OTHER_KHR = 0x824b;
export const DEBUG_TYPE_ERROR_KHR = 0x824c;
export const DEBUG_TYPE_DEPRECATED_BEHAVIOR_KHR = 0x824d;
export const DEBUG_TYPE_UNDEFINED_BEHAVIOR_KHR = 0x824e;
export const DEBUG_TYPE_PORTABILITY_KHR = 0x824f;
export const DEBUG_TYPE_PERFORMANCE_KHR = 0x8250;
export const DEBUG_TYPE_OTHER_KHR = 0x8251;
export const DEBUG_TYPE_MARKER_KHR = 0x8268;
export const DEBUG_TYPE_PUSH_GROUP_KHR = 0x8269;
export const DEBUG_TYPE_POP_GROUP_KHR = 0x826a;
export const DEBUG_SEVERITY_NOTIFICATION_KHR = 0x826b;
export const MAX_DEBUG_GROUP_STACK_DEPTH_KHR = 0x826c;
export const DEBUG_GROUP_STACK_DEPTH_KHR = 0x826d;
export const BUFFER_KHR = 0x82e0;
export const SHADER_KHR = 0x82e1;
export const PROGRAM_KHR = 0x82e2;
export const VERTEX_ARRAY_KHR = 0x8074;
export const QUERY_KHR = 0x82e3;
export const PROGRAM_PIPELINE_KHR = 0x82e4;
export const SAMPLER_KHR = 0x82e6;
export const MAX_LABEL_LENGTH_KHR = 0x82e8;
export const MAX_DEBUG_MESSAGE_LENGTH_KHR = 0x9143;
export const MAX_DEBUG_LOGGED_MESSAGES_KHR = 0x9144;
export const DEBUG_LOGGED_MESSAGES_KHR = 0x9145;
export const DEBUG_SEVERITY_HIGH_KHR = 0x9146;
export const DEBUG_SEVERITY_MEDIUM_KHR = 0x9147;
export const DEBUG_SEVERITY_LOW_KHR = 0x9148;
export const DEBUG_OUTPUT_KHR = 0x92e0;
export const CONTEXT_FLAG_DEBUG_BIT_KHR = 0x2;
export const STACK_OVERFLOW_KHR = 0x503;
export const STACK_UNDERFLOW_KHR = 0x504;
export const DISPLAY_LIST = 0x82e7;

/// Commands

export const def_glDebugMessageControl = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageControl!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageControl
>;

export function DebugMessageControl(
  source: GLenum,
  type: GLenum,
  severity: GLenum,
  count: GLsizei,
  ids: Buffer,
  enabled: GLboolean,
): void {
  fn_glDebugMessageControl.call(
    source,
    type,
    severity,
    count,
    bufferToFFI(ids),
    enabled,
  );
}

export const def_glDebugMessageInsert = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageInsert!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageInsert
>;

export function DebugMessageInsert(
  source: GLenum,
  type: GLenum,
  id: GLuint,
  severity: GLenum,
  length: GLsizei,
  buf: Buffer,
): void {
  fn_glDebugMessageInsert.call(
    source,
    type,
    id,
    severity,
    length,
    bufferToFFI(buf),
  );
}

export const def_glDebugMessageCallback = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageCallback!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageCallback
>;

export function DebugMessageCallback(
  callback: GLDEBUGPROC,
  userParam: Buffer,
): void {
  fn_glDebugMessageCallback.call(
    bufferToFFI(callback),
    bufferToFFI(userParam),
  );
}

export const def_glGetDebugMessageLog = {
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

let fn_glGetDebugMessageLog!: Deno.UnsafeFnPointer<
  typeof def_glGetDebugMessageLog
>;

export function GetDebugMessageLog(
  count: GLuint,
  bufSize: GLsizei,
  sources: Buffer,
  types: Buffer,
  ids: Buffer,
  severities: Buffer,
  lengths: Buffer,
  messageLog: Buffer,
): GLuint {
  return fn_glGetDebugMessageLog.call(
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

export const def_glPushDebugGroup = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPushDebugGroup!: Deno.UnsafeFnPointer<typeof def_glPushDebugGroup>;

export function PushDebugGroup(
  source: GLenum,
  id: GLuint,
  length: GLsizei,
  message: Buffer,
): void {
  fn_glPushDebugGroup.call(
    source,
    id,
    length,
    bufferToFFI(message),
  );
}

export const def_glPopDebugGroup = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopDebugGroup!: Deno.UnsafeFnPointer<typeof def_glPopDebugGroup>;

export function PopDebugGroup(): void {
  fn_glPopDebugGroup.call();
}

export const def_glObjectLabel = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectLabel!: Deno.UnsafeFnPointer<typeof def_glObjectLabel>;

export function ObjectLabel(
  identifier: GLenum,
  name: GLuint,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectLabel.call(
    identifier,
    name,
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectLabel = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectLabel!: Deno.UnsafeFnPointer<typeof def_glGetObjectLabel>;

export function GetObjectLabel(
  identifier: GLenum,
  name: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectLabel.call(
    identifier,
    name,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

export const def_glObjectPtrLabel = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectPtrLabel!: Deno.UnsafeFnPointer<typeof def_glObjectPtrLabel>;

export function ObjectPtrLabel(
  ptr: Buffer,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectPtrLabel.call(
    bufferToFFI(ptr),
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectPtrLabel = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectPtrLabel!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectPtrLabel
>;

export function GetObjectPtrLabel(
  ptr: Buffer,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectPtrLabel.call(
    bufferToFFI(ptr),
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

export const def_glGetPointerv = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointerv!: Deno.UnsafeFnPointer<typeof def_glGetPointerv>;

export function GetPointerv(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPointerv.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glDebugMessageControlKHR = {
  parameters: ["u32", "u32", "u32", "i32", "buffer", "u8"],
  result: "void",
} as const;

let fn_glDebugMessageControlKHR!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageControlKHR
>;

export function DebugMessageControlKHR(
  source: GLenum,
  type: GLenum,
  severity: GLenum,
  count: GLsizei,
  ids: Buffer,
  enabled: GLboolean,
): void {
  fn_glDebugMessageControlKHR.call(
    source,
    type,
    severity,
    count,
    bufferToFFI(ids),
    enabled,
  );
}

export const def_glDebugMessageInsertKHR = {
  parameters: ["u32", "u32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageInsertKHR!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageInsertKHR
>;

export function DebugMessageInsertKHR(
  source: GLenum,
  type: GLenum,
  id: GLuint,
  severity: GLenum,
  length: GLsizei,
  buf: Buffer,
): void {
  fn_glDebugMessageInsertKHR.call(
    source,
    type,
    id,
    severity,
    length,
    bufferToFFI(buf),
  );
}

export const def_glDebugMessageCallbackKHR = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glDebugMessageCallbackKHR!: Deno.UnsafeFnPointer<
  typeof def_glDebugMessageCallbackKHR
>;

export function DebugMessageCallbackKHR(
  callback: GLDEBUGPROCKHR,
  userParam: Buffer,
): void {
  fn_glDebugMessageCallbackKHR.call(
    bufferToFFI(callback),
    bufferToFFI(userParam),
  );
}

export const def_glGetDebugMessageLogKHR = {
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

let fn_glGetDebugMessageLogKHR!: Deno.UnsafeFnPointer<
  typeof def_glGetDebugMessageLogKHR
>;

export function GetDebugMessageLogKHR(
  count: GLuint,
  bufSize: GLsizei,
  sources: Buffer,
  types: Buffer,
  ids: Buffer,
  severities: Buffer,
  lengths: Buffer,
  messageLog: Buffer,
): GLuint {
  return fn_glGetDebugMessageLogKHR.call(
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

export const def_glPushDebugGroupKHR = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPushDebugGroupKHR!: Deno.UnsafeFnPointer<
  typeof def_glPushDebugGroupKHR
>;

export function PushDebugGroupKHR(
  source: GLenum,
  id: GLuint,
  length: GLsizei,
  message: Buffer,
): void {
  fn_glPushDebugGroupKHR.call(
    source,
    id,
    length,
    bufferToFFI(message),
  );
}

export const def_glPopDebugGroupKHR = {
  parameters: [],
  result: "void",
} as const;

let fn_glPopDebugGroupKHR!: Deno.UnsafeFnPointer<typeof def_glPopDebugGroupKHR>;

export function PopDebugGroupKHR(): void {
  fn_glPopDebugGroupKHR.call();
}

export const def_glObjectLabelKHR = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectLabelKHR!: Deno.UnsafeFnPointer<typeof def_glObjectLabelKHR>;

export function ObjectLabelKHR(
  identifier: GLenum,
  name: GLuint,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectLabelKHR.call(
    identifier,
    name,
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectLabelKHR = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectLabelKHR!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectLabelKHR
>;

export function GetObjectLabelKHR(
  identifier: GLenum,
  name: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectLabelKHR.call(
    identifier,
    name,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

export const def_glObjectPtrLabelKHR = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glObjectPtrLabelKHR!: Deno.UnsafeFnPointer<
  typeof def_glObjectPtrLabelKHR
>;

export function ObjectPtrLabelKHR(
  ptr: Buffer,
  length: GLsizei,
  label: Buffer,
): void {
  fn_glObjectPtrLabelKHR.call(
    bufferToFFI(ptr),
    length,
    bufferToFFI(label),
  );
}

export const def_glGetObjectPtrLabelKHR = {
  parameters: ["buffer", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetObjectPtrLabelKHR!: Deno.UnsafeFnPointer<
  typeof def_glGetObjectPtrLabelKHR
>;

export function GetObjectPtrLabelKHR(
  ptr: Buffer,
  bufSize: GLsizei,
  length: Buffer,
  label: Buffer,
): void {
  fn_glGetObjectPtrLabelKHR.call(
    bufferToFFI(ptr),
    bufSize,
    bufferToFFI(length),
    bufferToFFI(label),
  );
}

export const def_glGetPointervKHR = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPointervKHR!: Deno.UnsafeFnPointer<typeof def_glGetPointervKHR>;

export function GetPointervKHR(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetPointervKHR.call(
    pname,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDebugMessageControl = new Deno.UnsafeFnPointer(
    proc("glDebugMessageControl")!,
    def_glDebugMessageControl,
  );
  fn_glDebugMessageInsert = new Deno.UnsafeFnPointer(
    proc("glDebugMessageInsert")!,
    def_glDebugMessageInsert,
  );
  fn_glDebugMessageCallback = new Deno.UnsafeFnPointer(
    proc("glDebugMessageCallback")!,
    def_glDebugMessageCallback,
  );
  fn_glGetDebugMessageLog = new Deno.UnsafeFnPointer(
    proc("glGetDebugMessageLog")!,
    def_glGetDebugMessageLog,
  );
  fn_glPushDebugGroup = new Deno.UnsafeFnPointer(
    proc("glPushDebugGroup")!,
    def_glPushDebugGroup,
  );
  fn_glPopDebugGroup = new Deno.UnsafeFnPointer(
    proc("glPopDebugGroup")!,
    def_glPopDebugGroup,
  );
  fn_glObjectLabel = new Deno.UnsafeFnPointer(
    proc("glObjectLabel")!,
    def_glObjectLabel,
  );
  fn_glGetObjectLabel = new Deno.UnsafeFnPointer(
    proc("glGetObjectLabel")!,
    def_glGetObjectLabel,
  );
  fn_glObjectPtrLabel = new Deno.UnsafeFnPointer(
    proc("glObjectPtrLabel")!,
    def_glObjectPtrLabel,
  );
  fn_glGetObjectPtrLabel = new Deno.UnsafeFnPointer(
    proc("glGetObjectPtrLabel")!,
    def_glGetObjectPtrLabel,
  );
  fn_glGetPointerv = new Deno.UnsafeFnPointer(
    proc("glGetPointerv")!,
    def_glGetPointerv,
  );
  fn_glDebugMessageControlKHR = new Deno.UnsafeFnPointer(
    proc("glDebugMessageControlKHR")!,
    def_glDebugMessageControlKHR,
  );
  fn_glDebugMessageInsertKHR = new Deno.UnsafeFnPointer(
    proc("glDebugMessageInsertKHR")!,
    def_glDebugMessageInsertKHR,
  );
  fn_glDebugMessageCallbackKHR = new Deno.UnsafeFnPointer(
    proc("glDebugMessageCallbackKHR")!,
    def_glDebugMessageCallbackKHR,
  );
  fn_glGetDebugMessageLogKHR = new Deno.UnsafeFnPointer(
    proc("glGetDebugMessageLogKHR")!,
    def_glGetDebugMessageLogKHR,
  );
  fn_glPushDebugGroupKHR = new Deno.UnsafeFnPointer(
    proc("glPushDebugGroupKHR")!,
    def_glPushDebugGroupKHR,
  );
  fn_glPopDebugGroupKHR = new Deno.UnsafeFnPointer(
    proc("glPopDebugGroupKHR")!,
    def_glPopDebugGroupKHR,
  );
  fn_glObjectLabelKHR = new Deno.UnsafeFnPointer(
    proc("glObjectLabelKHR")!,
    def_glObjectLabelKHR,
  );
  fn_glGetObjectLabelKHR = new Deno.UnsafeFnPointer(
    proc("glGetObjectLabelKHR")!,
    def_glGetObjectLabelKHR,
  );
  fn_glObjectPtrLabelKHR = new Deno.UnsafeFnPointer(
    proc("glObjectPtrLabelKHR")!,
    def_glObjectPtrLabelKHR,
  );
  fn_glGetObjectPtrLabelKHR = new Deno.UnsafeFnPointer(
    proc("glGetObjectPtrLabelKHR")!,
    def_glGetObjectPtrLabelKHR,
  );
  fn_glGetPointervKHR = new Deno.UnsafeFnPointer(
    proc("glGetPointervKHR")!,
    def_glGetPointervKHR,
  );
}
