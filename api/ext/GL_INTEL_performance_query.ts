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
export const PERFQUERY_SINGLE_CONTEXT_INTEL = 0x0;
export const PERFQUERY_GLOBAL_CONTEXT_INTEL = 0x1;
export const PERFQUERY_WAIT_INTEL = 0x83fb;
export const PERFQUERY_FLUSH_INTEL = 0x83fa;
export const PERFQUERY_DONOT_FLUSH_INTEL = 0x83f9;
export const PERFQUERY_COUNTER_EVENT_INTEL = 0x94f0;
export const PERFQUERY_COUNTER_DURATION_NORM_INTEL = 0x94f1;
export const PERFQUERY_COUNTER_DURATION_RAW_INTEL = 0x94f2;
export const PERFQUERY_COUNTER_THROUGHPUT_INTEL = 0x94f3;
export const PERFQUERY_COUNTER_RAW_INTEL = 0x94f4;
export const PERFQUERY_COUNTER_TIMESTAMP_INTEL = 0x94f5;
export const PERFQUERY_COUNTER_DATA_UINT32_INTEL = 0x94f8;
export const PERFQUERY_COUNTER_DATA_UINT64_INTEL = 0x94f9;
export const PERFQUERY_COUNTER_DATA_FLOAT_INTEL = 0x94fa;
export const PERFQUERY_COUNTER_DATA_DOUBLE_INTEL = 0x94fb;
export const PERFQUERY_COUNTER_DATA_BOOL32_INTEL = 0x94fc;
export const PERFQUERY_QUERY_NAME_LENGTH_MAX_INTEL = 0x94fd;
export const PERFQUERY_COUNTER_NAME_LENGTH_MAX_INTEL = 0x94fe;
export const PERFQUERY_COUNTER_DESC_LENGTH_MAX_INTEL = 0x94ff;
export const PERFQUERY_GPA_EXTENDED_COUNTERS_INTEL = 0x9500;

/// Commands

export const def_glBeginPerfQueryINTEL = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginPerfQueryINTEL!: Deno.UnsafeFnPointer<typeof def_glBeginPerfQueryINTEL>;

export function BeginPerfQueryINTEL(
  queryHandle: GLuint,
): void {
  fn_glBeginPerfQueryINTEL.call(
    queryHandle,
  );
}

export const def_glCreatePerfQueryINTEL = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glCreatePerfQueryINTEL!: Deno.UnsafeFnPointer<typeof def_glCreatePerfQueryINTEL>;

export function CreatePerfQueryINTEL(
  queryId: GLuint,
  queryHandle: Buffer,
): void {
  fn_glCreatePerfQueryINTEL.call(
    queryId,
    bufferToFFI(queryHandle),
  );
}

export const def_glDeletePerfQueryINTEL = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDeletePerfQueryINTEL!: Deno.UnsafeFnPointer<typeof def_glDeletePerfQueryINTEL>;

export function DeletePerfQueryINTEL(
  queryHandle: GLuint,
): void {
  fn_glDeletePerfQueryINTEL.call(
    queryHandle,
  );
}

export const def_glEndPerfQueryINTEL = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndPerfQueryINTEL!: Deno.UnsafeFnPointer<typeof def_glEndPerfQueryINTEL>;

export function EndPerfQueryINTEL(
  queryHandle: GLuint,
): void {
  fn_glEndPerfQueryINTEL.call(
    queryHandle,
  );
}

export const def_glGetFirstPerfQueryIdINTEL = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glGetFirstPerfQueryIdINTEL!: Deno.UnsafeFnPointer<typeof def_glGetFirstPerfQueryIdINTEL>;

export function GetFirstPerfQueryIdINTEL(
  queryId: Buffer,
): void {
  fn_glGetFirstPerfQueryIdINTEL.call(
    bufferToFFI(queryId),
  );
}

export const def_glGetNextPerfQueryIdINTEL = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetNextPerfQueryIdINTEL!: Deno.UnsafeFnPointer<typeof def_glGetNextPerfQueryIdINTEL>;

export function GetNextPerfQueryIdINTEL(
  queryId: GLuint,
  nextQueryId: Buffer,
): void {
  fn_glGetNextPerfQueryIdINTEL.call(
    queryId,
    bufferToFFI(nextQueryId),
  );
}

export const def_glGetPerfCounterInfoINTEL = {
  parameters: ["u32", "u32", "u32", "buffer", "u32", "buffer", "buffer", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfCounterInfoINTEL!: Deno.UnsafeFnPointer<typeof def_glGetPerfCounterInfoINTEL>;

export function GetPerfCounterInfoINTEL(
  queryId: GLuint,
  counterId: GLuint,
  counterNameLength: GLuint,
  counterName: Buffer,
  counterDescLength: GLuint,
  counterDesc: Buffer,
  counterOffset: Buffer,
  counterDataSize: Buffer,
  counterTypeEnum: Buffer,
  counterDataTypeEnum: Buffer,
  rawCounterMaxValue: Buffer,
): void {
  fn_glGetPerfCounterInfoINTEL.call(
    queryId,
    counterId,
    counterNameLength,
    bufferToFFI(counterName),
    counterDescLength,
    bufferToFFI(counterDesc),
    bufferToFFI(counterOffset),
    bufferToFFI(counterDataSize),
    bufferToFFI(counterTypeEnum),
    bufferToFFI(counterDataTypeEnum),
    bufferToFFI(rawCounterMaxValue),
  );
}

export const def_glGetPerfQueryDataINTEL = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfQueryDataINTEL!: Deno.UnsafeFnPointer<typeof def_glGetPerfQueryDataINTEL>;

export function GetPerfQueryDataINTEL(
  queryHandle: GLuint,
  flags: GLuint,
  dataSize: GLsizei,
  data: Buffer,
  bytesWritten: Buffer,
): void {
  fn_glGetPerfQueryDataINTEL.call(
    queryHandle,
    flags,
    dataSize,
    bufferToFFI(data),
    bufferToFFI(bytesWritten),
  );
}

export const def_glGetPerfQueryIdByNameINTEL = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfQueryIdByNameINTEL!: Deno.UnsafeFnPointer<typeof def_glGetPerfQueryIdByNameINTEL>;

export function GetPerfQueryIdByNameINTEL(
  queryName: Buffer,
  queryId: Buffer,
): void {
  fn_glGetPerfQueryIdByNameINTEL.call(
    bufferToFFI(queryName),
    bufferToFFI(queryId),
  );
}

export const def_glGetPerfQueryInfoINTEL = {
  parameters: ["u32", "u32", "buffer", "buffer", "buffer", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfQueryInfoINTEL!: Deno.UnsafeFnPointer<typeof def_glGetPerfQueryInfoINTEL>;

export function GetPerfQueryInfoINTEL(
  queryId: GLuint,
  queryNameLength: GLuint,
  queryName: Buffer,
  dataSize: Buffer,
  noCounters: Buffer,
  noInstances: Buffer,
  capsMask: Buffer,
): void {
  fn_glGetPerfQueryInfoINTEL.call(
    queryId,
    queryNameLength,
    bufferToFFI(queryName),
    bufferToFFI(dataSize),
    bufferToFFI(noCounters),
    bufferToFFI(noInstances),
    bufferToFFI(capsMask),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glBeginPerfQueryINTEL = new Deno.UnsafeFnPointer(proc("glBeginPerfQueryINTEL"), def_glBeginPerfQueryINTEL);
  fn_glCreatePerfQueryINTEL = new Deno.UnsafeFnPointer(proc("glCreatePerfQueryINTEL"), def_glCreatePerfQueryINTEL);
  fn_glDeletePerfQueryINTEL = new Deno.UnsafeFnPointer(proc("glDeletePerfQueryINTEL"), def_glDeletePerfQueryINTEL);
  fn_glEndPerfQueryINTEL = new Deno.UnsafeFnPointer(proc("glEndPerfQueryINTEL"), def_glEndPerfQueryINTEL);
  fn_glGetFirstPerfQueryIdINTEL = new Deno.UnsafeFnPointer(proc("glGetFirstPerfQueryIdINTEL"), def_glGetFirstPerfQueryIdINTEL);
  fn_glGetNextPerfQueryIdINTEL = new Deno.UnsafeFnPointer(proc("glGetNextPerfQueryIdINTEL"), def_glGetNextPerfQueryIdINTEL);
  fn_glGetPerfCounterInfoINTEL = new Deno.UnsafeFnPointer(proc("glGetPerfCounterInfoINTEL"), def_glGetPerfCounterInfoINTEL);
  fn_glGetPerfQueryDataINTEL = new Deno.UnsafeFnPointer(proc("glGetPerfQueryDataINTEL"), def_glGetPerfQueryDataINTEL);
  fn_glGetPerfQueryIdByNameINTEL = new Deno.UnsafeFnPointer(proc("glGetPerfQueryIdByNameINTEL"), def_glGetPerfQueryIdByNameINTEL);
  fn_glGetPerfQueryInfoINTEL = new Deno.UnsafeFnPointer(proc("glGetPerfQueryInfoINTEL"), def_glGetPerfQueryInfoINTEL);
}
