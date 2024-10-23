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
export const INSTRUMENT_BUFFER_POINTER_SGIX = 0x8180;
export const INSTRUMENT_MEASUREMENTS_SGIX = 0x8181;

/// Commands

export const def_glGetInstrumentsSGIX = {
  parameters: [],
  result: "i32",
} as const;

let fn_glGetInstrumentsSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetInstrumentsSGIX
>;

export function GetInstrumentsSGIX(): GLint {
  return fn_glGetInstrumentsSGIX.call();
}

export const def_glInstrumentsBufferSGIX = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glInstrumentsBufferSGIX!: Deno.UnsafeFnPointer<
  typeof def_glInstrumentsBufferSGIX
>;

export function InstrumentsBufferSGIX(
  size: GLsizei,
  buffer: Buffer,
): void {
  fn_glInstrumentsBufferSGIX.call(
    size,
    bufferToFFI(buffer),
  );
}

export const def_glPollInstrumentsSGIX = {
  parameters: ["buffer"],
  result: "i32",
} as const;

let fn_glPollInstrumentsSGIX!: Deno.UnsafeFnPointer<
  typeof def_glPollInstrumentsSGIX
>;

export function PollInstrumentsSGIX(
  marker_p: Buffer,
): GLint {
  return fn_glPollInstrumentsSGIX.call(
    bufferToFFI(marker_p),
  );
}

export const def_glReadInstrumentsSGIX = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glReadInstrumentsSGIX!: Deno.UnsafeFnPointer<
  typeof def_glReadInstrumentsSGIX
>;

export function ReadInstrumentsSGIX(
  marker: GLint,
): void {
  fn_glReadInstrumentsSGIX.call(
    marker,
  );
}

export const def_glStartInstrumentsSGIX = {
  parameters: [],
  result: "void",
} as const;

let fn_glStartInstrumentsSGIX!: Deno.UnsafeFnPointer<
  typeof def_glStartInstrumentsSGIX
>;

export function StartInstrumentsSGIX(): void {
  fn_glStartInstrumentsSGIX.call();
}

export const def_glStopInstrumentsSGIX = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glStopInstrumentsSGIX!: Deno.UnsafeFnPointer<
  typeof def_glStopInstrumentsSGIX
>;

export function StopInstrumentsSGIX(
  marker: GLint,
): void {
  fn_glStopInstrumentsSGIX.call(
    marker,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetInstrumentsSGIX = new Deno.UnsafeFnPointer(
    proc("glGetInstrumentsSGIX")!,
    def_glGetInstrumentsSGIX,
  );
  fn_glInstrumentsBufferSGIX = new Deno.UnsafeFnPointer(
    proc("glInstrumentsBufferSGIX")!,
    def_glInstrumentsBufferSGIX,
  );
  fn_glPollInstrumentsSGIX = new Deno.UnsafeFnPointer(
    proc("glPollInstrumentsSGIX")!,
    def_glPollInstrumentsSGIX,
  );
  fn_glReadInstrumentsSGIX = new Deno.UnsafeFnPointer(
    proc("glReadInstrumentsSGIX")!,
    def_glReadInstrumentsSGIX,
  );
  fn_glStartInstrumentsSGIX = new Deno.UnsafeFnPointer(
    proc("glStartInstrumentsSGIX")!,
    def_glStartInstrumentsSGIX,
  );
  fn_glStopInstrumentsSGIX = new Deno.UnsafeFnPointer(
    proc("glStopInstrumentsSGIX")!,
    def_glStopInstrumentsSGIX,
  );
}
