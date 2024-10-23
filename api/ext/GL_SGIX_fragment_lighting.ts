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
export const FRAGMENT_LIGHTING_SGIX = 0x8400;
export const FRAGMENT_COLOR_MATERIAL_SGIX = 0x8401;
export const FRAGMENT_COLOR_MATERIAL_FACE_SGIX = 0x8402;
export const FRAGMENT_COLOR_MATERIAL_PARAMETER_SGIX = 0x8403;
export const MAX_FRAGMENT_LIGHTS_SGIX = 0x8404;
export const MAX_ACTIVE_LIGHTS_SGIX = 0x8405;
export const CURRENT_RASTER_NORMAL_SGIX = 0x8406;
export const LIGHT_ENV_MODE_SGIX = 0x8407;
export const FRAGMENT_LIGHT_MODEL_LOCAL_VIEWER_SGIX = 0x8408;
export const FRAGMENT_LIGHT_MODEL_TWO_SIDE_SGIX = 0x8409;
export const FRAGMENT_LIGHT_MODEL_AMBIENT_SGIX = 0x840a;
export const FRAGMENT_LIGHT_MODEL_NORMAL_INTERPOLATION_SGIX = 0x840b;
export const FRAGMENT_LIGHT0_SGIX = 0x840c;
export const FRAGMENT_LIGHT1_SGIX = 0x840d;
export const FRAGMENT_LIGHT2_SGIX = 0x840e;
export const FRAGMENT_LIGHT3_SGIX = 0x840f;
export const FRAGMENT_LIGHT4_SGIX = 0x8410;
export const FRAGMENT_LIGHT5_SGIX = 0x8411;
export const FRAGMENT_LIGHT6_SGIX = 0x8412;
export const FRAGMENT_LIGHT7_SGIX = 0x8413;

/// Commands

export const def_glFragmentColorMaterialSGIX = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glFragmentColorMaterialSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentColorMaterialSGIX
>;

export function FragmentColorMaterialSGIX(
  face: GLenum,
  mode: GLenum,
): void {
  fn_glFragmentColorMaterialSGIX.call(
    face,
    mode,
  );
}

export const def_glFragmentLightfSGIX = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glFragmentLightfSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightfSGIX
>;

export function FragmentLightfSGIX(
  light: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glFragmentLightfSGIX.call(
    light,
    pname,
    param,
  );
}

export const def_glFragmentLightfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentLightfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightfvSGIX
>;

export function FragmentLightfvSGIX(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentLightfvSGIX.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFragmentLightiSGIX = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFragmentLightiSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightiSGIX
>;

export function FragmentLightiSGIX(
  light: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glFragmentLightiSGIX.call(
    light,
    pname,
    param,
  );
}

export const def_glFragmentLightivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentLightivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightivSGIX
>;

export function FragmentLightivSGIX(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentLightivSGIX.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFragmentLightModelfSGIX = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glFragmentLightModelfSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightModelfSGIX
>;

export function FragmentLightModelfSGIX(
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glFragmentLightModelfSGIX.call(
    pname,
    param,
  );
}

export const def_glFragmentLightModelfvSGIX = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentLightModelfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightModelfvSGIX
>;

export function FragmentLightModelfvSGIX(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentLightModelfvSGIX.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glFragmentLightModeliSGIX = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glFragmentLightModeliSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightModeliSGIX
>;

export function FragmentLightModeliSGIX(
  pname: GLenum,
  param: GLint,
): void {
  fn_glFragmentLightModeliSGIX.call(
    pname,
    param,
  );
}

export const def_glFragmentLightModelivSGIX = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentLightModelivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentLightModelivSGIX
>;

export function FragmentLightModelivSGIX(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentLightModelivSGIX.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glFragmentMaterialfSGIX = {
  parameters: ["u32", "u32", "f32"],
  result: "void",
} as const;

let fn_glFragmentMaterialfSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentMaterialfSGIX
>;

export function FragmentMaterialfSGIX(
  face: GLenum,
  pname: GLenum,
  param: GLfloat,
): void {
  fn_glFragmentMaterialfSGIX.call(
    face,
    pname,
    param,
  );
}

export const def_glFragmentMaterialfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentMaterialfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentMaterialfvSGIX
>;

export function FragmentMaterialfvSGIX(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentMaterialfvSGIX.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glFragmentMaterialiSGIX = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFragmentMaterialiSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentMaterialiSGIX
>;

export function FragmentMaterialiSGIX(
  face: GLenum,
  pname: GLenum,
  param: GLint,
): void {
  fn_glFragmentMaterialiSGIX.call(
    face,
    pname,
    param,
  );
}

export const def_glFragmentMaterialivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFragmentMaterialivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glFragmentMaterialivSGIX
>;

export function FragmentMaterialivSGIX(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glFragmentMaterialivSGIX.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFragmentLightfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFragmentLightfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetFragmentLightfvSGIX
>;

export function GetFragmentLightfvSGIX(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFragmentLightfvSGIX.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFragmentLightivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFragmentLightivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetFragmentLightivSGIX
>;

export function GetFragmentLightivSGIX(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFragmentLightivSGIX.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFragmentMaterialfvSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFragmentMaterialfvSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetFragmentMaterialfvSGIX
>;

export function GetFragmentMaterialfvSGIX(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFragmentMaterialfvSGIX.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetFragmentMaterialivSGIX = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFragmentMaterialivSGIX!: Deno.UnsafeFnPointer<
  typeof def_glGetFragmentMaterialivSGIX
>;

export function GetFragmentMaterialivSGIX(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFragmentMaterialivSGIX.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLightEnviSGIX = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glLightEnviSGIX!: Deno.UnsafeFnPointer<typeof def_glLightEnviSGIX>;

export function LightEnviSGIX(
  pname: GLenum,
  param: GLint,
): void {
  fn_glLightEnviSGIX.call(
    pname,
    param,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glFragmentColorMaterialSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentColorMaterialSGIX")!,
    def_glFragmentColorMaterialSGIX,
  );
  fn_glFragmentLightfSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightfSGIX")!,
    def_glFragmentLightfSGIX,
  );
  fn_glFragmentLightfvSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightfvSGIX")!,
    def_glFragmentLightfvSGIX,
  );
  fn_glFragmentLightiSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightiSGIX")!,
    def_glFragmentLightiSGIX,
  );
  fn_glFragmentLightivSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightivSGIX")!,
    def_glFragmentLightivSGIX,
  );
  fn_glFragmentLightModelfSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightModelfSGIX")!,
    def_glFragmentLightModelfSGIX,
  );
  fn_glFragmentLightModelfvSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightModelfvSGIX")!,
    def_glFragmentLightModelfvSGIX,
  );
  fn_glFragmentLightModeliSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightModeliSGIX")!,
    def_glFragmentLightModeliSGIX,
  );
  fn_glFragmentLightModelivSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentLightModelivSGIX")!,
    def_glFragmentLightModelivSGIX,
  );
  fn_glFragmentMaterialfSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentMaterialfSGIX")!,
    def_glFragmentMaterialfSGIX,
  );
  fn_glFragmentMaterialfvSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentMaterialfvSGIX")!,
    def_glFragmentMaterialfvSGIX,
  );
  fn_glFragmentMaterialiSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentMaterialiSGIX")!,
    def_glFragmentMaterialiSGIX,
  );
  fn_glFragmentMaterialivSGIX = new Deno.UnsafeFnPointer(
    proc("glFragmentMaterialivSGIX")!,
    def_glFragmentMaterialivSGIX,
  );
  fn_glGetFragmentLightfvSGIX = new Deno.UnsafeFnPointer(
    proc("glGetFragmentLightfvSGIX")!,
    def_glGetFragmentLightfvSGIX,
  );
  fn_glGetFragmentLightivSGIX = new Deno.UnsafeFnPointer(
    proc("glGetFragmentLightivSGIX")!,
    def_glGetFragmentLightivSGIX,
  );
  fn_glGetFragmentMaterialfvSGIX = new Deno.UnsafeFnPointer(
    proc("glGetFragmentMaterialfvSGIX")!,
    def_glGetFragmentMaterialfvSGIX,
  );
  fn_glGetFragmentMaterialivSGIX = new Deno.UnsafeFnPointer(
    proc("glGetFragmentMaterialivSGIX")!,
    def_glGetFragmentMaterialivSGIX,
  );
  fn_glLightEnviSGIX = new Deno.UnsafeFnPointer(
    proc("glLightEnviSGIX")!,
    def_glLightEnviSGIX,
  );
}
