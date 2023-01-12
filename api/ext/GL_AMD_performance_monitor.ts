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
export const COUNTER_TYPE_AMD = 0x8bc0;
export const COUNTER_RANGE_AMD = 0x8bc1;
export const UNSIGNED_INT64_AMD = 0x8bc2;
export const PERCENTAGE_AMD = 0x8bc3;
export const PERFMON_RESULT_AVAILABLE_AMD = 0x8bc4;
export const PERFMON_RESULT_SIZE_AMD = 0x8bc5;
export const PERFMON_RESULT_AMD = 0x8bc6;

/// Commands

export const def_glGetPerfMonitorGroupsAMD = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorGroupsAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorGroupsAMD
>;

export function GetPerfMonitorGroupsAMD(
  numGroups: Buffer,
  groupsSize: GLsizei,
  groups: Buffer,
): void {
  fn_glGetPerfMonitorGroupsAMD.call(
    bufferToFFI(numGroups),
    groupsSize,
    bufferToFFI(groups),
  );
}

export const def_glGetPerfMonitorCountersAMD = {
  parameters: ["u32", "buffer", "buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorCountersAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorCountersAMD
>;

export function GetPerfMonitorCountersAMD(
  group: GLuint,
  numCounters: Buffer,
  maxActiveCounters: Buffer,
  counterSize: GLsizei,
  counters: Buffer,
): void {
  fn_glGetPerfMonitorCountersAMD.call(
    group,
    bufferToFFI(numCounters),
    bufferToFFI(maxActiveCounters),
    counterSize,
    bufferToFFI(counters),
  );
}

export const def_glGetPerfMonitorGroupStringAMD = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorGroupStringAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorGroupStringAMD
>;

export function GetPerfMonitorGroupStringAMD(
  group: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  groupString: Buffer,
): void {
  fn_glGetPerfMonitorGroupStringAMD.call(
    group,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(groupString),
  );
}

export const def_glGetPerfMonitorCounterStringAMD = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorCounterStringAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorCounterStringAMD
>;

export function GetPerfMonitorCounterStringAMD(
  group: GLuint,
  counter: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  counterString: Buffer,
): void {
  fn_glGetPerfMonitorCounterStringAMD.call(
    group,
    counter,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(counterString),
  );
}

export const def_glGetPerfMonitorCounterInfoAMD = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorCounterInfoAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorCounterInfoAMD
>;

export function GetPerfMonitorCounterInfoAMD(
  group: GLuint,
  counter: GLuint,
  pname: GLenum,
  data: Buffer,
): void {
  fn_glGetPerfMonitorCounterInfoAMD.call(
    group,
    counter,
    pname,
    bufferToFFI(data),
  );
}

export const def_glGenPerfMonitorsAMD = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenPerfMonitorsAMD!: Deno.UnsafeFnPointer<
  typeof def_glGenPerfMonitorsAMD
>;

export function GenPerfMonitorsAMD(
  n: GLsizei,
  monitors: Buffer,
): void {
  fn_glGenPerfMonitorsAMD.call(
    n,
    bufferToFFI(monitors),
  );
}

export const def_glDeletePerfMonitorsAMD = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeletePerfMonitorsAMD!: Deno.UnsafeFnPointer<
  typeof def_glDeletePerfMonitorsAMD
>;

export function DeletePerfMonitorsAMD(
  n: GLsizei,
  monitors: Buffer,
): void {
  fn_glDeletePerfMonitorsAMD.call(
    n,
    bufferToFFI(monitors),
  );
}

export const def_glSelectPerfMonitorCountersAMD = {
  parameters: ["u32", "u8", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glSelectPerfMonitorCountersAMD!: Deno.UnsafeFnPointer<
  typeof def_glSelectPerfMonitorCountersAMD
>;

export function SelectPerfMonitorCountersAMD(
  monitor: GLuint,
  enable: GLboolean,
  group: GLuint,
  numCounters: GLint,
  counterList: Buffer,
): void {
  fn_glSelectPerfMonitorCountersAMD.call(
    monitor,
    enable,
    group,
    numCounters,
    bufferToFFI(counterList),
  );
}

export const def_glBeginPerfMonitorAMD = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glBeginPerfMonitorAMD!: Deno.UnsafeFnPointer<
  typeof def_glBeginPerfMonitorAMD
>;

export function BeginPerfMonitorAMD(
  monitor: GLuint,
): void {
  fn_glBeginPerfMonitorAMD.call(
    monitor,
  );
}

export const def_glEndPerfMonitorAMD = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEndPerfMonitorAMD!: Deno.UnsafeFnPointer<
  typeof def_glEndPerfMonitorAMD
>;

export function EndPerfMonitorAMD(
  monitor: GLuint,
): void {
  fn_glEndPerfMonitorAMD.call(
    monitor,
  );
}

export const def_glGetPerfMonitorCounterDataAMD = {
  parameters: ["u32", "u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetPerfMonitorCounterDataAMD!: Deno.UnsafeFnPointer<
  typeof def_glGetPerfMonitorCounterDataAMD
>;

export function GetPerfMonitorCounterDataAMD(
  monitor: GLuint,
  pname: GLenum,
  dataSize: GLsizei,
  data: Buffer,
  bytesWritten: Buffer,
): void {
  fn_glGetPerfMonitorCounterDataAMD.call(
    monitor,
    pname,
    dataSize,
    bufferToFFI(data),
    bufferToFFI(bytesWritten),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetPerfMonitorGroupsAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorGroupsAMD"),
    def_glGetPerfMonitorGroupsAMD,
  );
  fn_glGetPerfMonitorCountersAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorCountersAMD"),
    def_glGetPerfMonitorCountersAMD,
  );
  fn_glGetPerfMonitorGroupStringAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorGroupStringAMD"),
    def_glGetPerfMonitorGroupStringAMD,
  );
  fn_glGetPerfMonitorCounterStringAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorCounterStringAMD"),
    def_glGetPerfMonitorCounterStringAMD,
  );
  fn_glGetPerfMonitorCounterInfoAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorCounterInfoAMD"),
    def_glGetPerfMonitorCounterInfoAMD,
  );
  fn_glGenPerfMonitorsAMD = new Deno.UnsafeFnPointer(
    proc("glGenPerfMonitorsAMD"),
    def_glGenPerfMonitorsAMD,
  );
  fn_glDeletePerfMonitorsAMD = new Deno.UnsafeFnPointer(
    proc("glDeletePerfMonitorsAMD"),
    def_glDeletePerfMonitorsAMD,
  );
  fn_glSelectPerfMonitorCountersAMD = new Deno.UnsafeFnPointer(
    proc("glSelectPerfMonitorCountersAMD"),
    def_glSelectPerfMonitorCountersAMD,
  );
  fn_glBeginPerfMonitorAMD = new Deno.UnsafeFnPointer(
    proc("glBeginPerfMonitorAMD"),
    def_glBeginPerfMonitorAMD,
  );
  fn_glEndPerfMonitorAMD = new Deno.UnsafeFnPointer(
    proc("glEndPerfMonitorAMD"),
    def_glEndPerfMonitorAMD,
  );
  fn_glGetPerfMonitorCounterDataAMD = new Deno.UnsafeFnPointer(
    proc("glGetPerfMonitorCounterDataAMD"),
    def_glGetPerfMonitorCounterDataAMD,
  );
}
