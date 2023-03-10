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
export const FIXED_OES = 0x140c;

/// Commands

export const def_glAlphaFuncxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glAlphaFuncxOES!: Deno.UnsafeFnPointer<typeof def_glAlphaFuncxOES>;

export function AlphaFuncxOES(
  func: GLenum,
  ref: GLfixed,
): void {
  fn_glAlphaFuncxOES.call(
    func,
    ref,
  );
}

export const def_glClearColorxOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glClearColorxOES!: Deno.UnsafeFnPointer<typeof def_glClearColorxOES>;

export function ClearColorxOES(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glClearColorxOES.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearDepthxOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glClearDepthxOES!: Deno.UnsafeFnPointer<typeof def_glClearDepthxOES>;

export function ClearDepthxOES(
  depth: GLfixed,
): void {
  fn_glClearDepthxOES.call(
    depth,
  );
}

export const def_glClipPlanexOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanexOES!: Deno.UnsafeFnPointer<typeof def_glClipPlanexOES>;

export function ClipPlanexOES(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glClipPlanexOES.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glColor4xOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glColor4xOES!: Deno.UnsafeFnPointer<typeof def_glColor4xOES>;

export function Color4xOES(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glColor4xOES.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glDepthRangexOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glDepthRangexOES!: Deno.UnsafeFnPointer<typeof def_glDepthRangexOES>;

export function DepthRangexOES(
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glDepthRangexOES.call(
    n,
    f,
  );
}

export const def_glFogxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glFogxOES!: Deno.UnsafeFnPointer<typeof def_glFogxOES>;

export function FogxOES(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glFogxOES.call(
    pname,
    param,
  );
}

export const def_glFogxvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glFogxvOES!: Deno.UnsafeFnPointer<typeof def_glFogxvOES>;

export function FogxvOES(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glFogxvOES.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glFrustumxOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFrustumxOES!: Deno.UnsafeFnPointer<typeof def_glFrustumxOES>;

export function FrustumxOES(
  l: GLfixed,
  r: GLfixed,
  b: GLfixed,
  t: GLfixed,
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glFrustumxOES.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glGetClipPlanexOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetClipPlanexOES!: Deno.UnsafeFnPointer<typeof def_glGetClipPlanexOES>;

export function GetClipPlanexOES(
  plane: GLenum,
  equation: Buffer,
): void {
  fn_glGetClipPlanexOES.call(
    plane,
    bufferToFFI(equation),
  );
}

export const def_glGetFixedvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glGetFixedvOES!: Deno.UnsafeFnPointer<typeof def_glGetFixedvOES>;

export function GetFixedvOES(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetFixedvOES.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexEnvxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexEnvxvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexEnvxvOES>;

export function GetTexEnvxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexEnvxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexParameterxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexParameterxvOES>;

export function GetTexParameterxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexParameterxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLightModelxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glLightModelxOES!: Deno.UnsafeFnPointer<typeof def_glLightModelxOES>;

export function LightModelxOES(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glLightModelxOES.call(
    pname,
    param,
  );
}

export const def_glLightModelxvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glLightModelxvOES!: Deno.UnsafeFnPointer<typeof def_glLightModelxvOES>;

export function LightModelxvOES(
  pname: GLenum,
  param: Buffer,
): void {
  fn_glLightModelxvOES.call(
    pname,
    bufferToFFI(param),
  );
}

export const def_glLightxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glLightxOES!: Deno.UnsafeFnPointer<typeof def_glLightxOES>;

export function LightxOES(
  light: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glLightxOES.call(
    light,
    pname,
    param,
  );
}

export const def_glLightxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glLightxvOES!: Deno.UnsafeFnPointer<typeof def_glLightxvOES>;

export function LightxvOES(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glLightxvOES.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glLineWidthxOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glLineWidthxOES!: Deno.UnsafeFnPointer<typeof def_glLineWidthxOES>;

export function LineWidthxOES(
  width: GLfixed,
): void {
  fn_glLineWidthxOES.call(
    width,
  );
}

export const def_glLoadMatrixxOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadMatrixxOES!: Deno.UnsafeFnPointer<typeof def_glLoadMatrixxOES>;

export function LoadMatrixxOES(
  m: Buffer,
): void {
  fn_glLoadMatrixxOES.call(
    bufferToFFI(m),
  );
}

export const def_glMaterialxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glMaterialxOES!: Deno.UnsafeFnPointer<typeof def_glMaterialxOES>;

export function MaterialxOES(
  face: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glMaterialxOES.call(
    face,
    pname,
    param,
  );
}

export const def_glMaterialxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glMaterialxvOES!: Deno.UnsafeFnPointer<typeof def_glMaterialxvOES>;

export function MaterialxvOES(
  face: GLenum,
  pname: GLenum,
  param: Buffer,
): void {
  fn_glMaterialxvOES.call(
    face,
    pname,
    bufferToFFI(param),
  );
}

export const def_glMultMatrixxOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultMatrixxOES!: Deno.UnsafeFnPointer<typeof def_glMultMatrixxOES>;

export function MultMatrixxOES(
  m: Buffer,
): void {
  fn_glMultMatrixxOES.call(
    bufferToFFI(m),
  );
}

export const def_glMultiTexCoord4xOES = {
  parameters: ["u32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord4xOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4xOES>;

export function MultiTexCoord4xOES(
  texture: GLenum,
  s: GLfixed,
  t: GLfixed,
  r: GLfixed,
  q: GLfixed,
): void {
  fn_glMultiTexCoord4xOES.call(
    texture,
    s,
    t,
    r,
    q,
  );
}

export const def_glNormal3xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glNormal3xOES!: Deno.UnsafeFnPointer<typeof def_glNormal3xOES>;

export function Normal3xOES(
  nx: GLfixed,
  ny: GLfixed,
  nz: GLfixed,
): void {
  fn_glNormal3xOES.call(
    nx,
    ny,
    nz,
  );
}

export const def_glOrthoxOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glOrthoxOES!: Deno.UnsafeFnPointer<typeof def_glOrthoxOES>;

export function OrthoxOES(
  l: GLfixed,
  r: GLfixed,
  b: GLfixed,
  t: GLfixed,
  n: GLfixed,
  f: GLfixed,
): void {
  fn_glOrthoxOES.call(
    l,
    r,
    b,
    t,
    n,
    f,
  );
}

export const def_glPointParameterxvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glPointParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glPointParameterxvOES>;

export function PointParameterxvOES(
  pname: GLenum,
  params: Buffer,
): void {
  fn_glPointParameterxvOES.call(
    pname,
    bufferToFFI(params),
  );
}

export const def_glPointSizexOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glPointSizexOES!: Deno.UnsafeFnPointer<typeof def_glPointSizexOES>;

export function PointSizexOES(
  size: GLfixed,
): void {
  fn_glPointSizexOES.call(
    size,
  );
}

export const def_glPolygonOffsetxOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glPolygonOffsetxOES!: Deno.UnsafeFnPointer<typeof def_glPolygonOffsetxOES>;

export function PolygonOffsetxOES(
  factor: GLfixed,
  units: GLfixed,
): void {
  fn_glPolygonOffsetxOES.call(
    factor,
    units,
  );
}

export const def_glRotatexOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRotatexOES!: Deno.UnsafeFnPointer<typeof def_glRotatexOES>;

export function RotatexOES(
  angle: GLfixed,
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glRotatexOES.call(
    angle,
    x,
    y,
    z,
  );
}

export const def_glScalexOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glScalexOES!: Deno.UnsafeFnPointer<typeof def_glScalexOES>;

export function ScalexOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glScalexOES.call(
    x,
    y,
    z,
  );
}

export const def_glTexEnvxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexEnvxOES!: Deno.UnsafeFnPointer<typeof def_glTexEnvxOES>;

export function TexEnvxOES(
  target: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexEnvxOES.call(
    target,
    pname,
    param,
  );
}

export const def_glTexEnvxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexEnvxvOES!: Deno.UnsafeFnPointer<typeof def_glTexEnvxvOES>;

export function TexEnvxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexEnvxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTexParameterxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexParameterxOES!: Deno.UnsafeFnPointer<typeof def_glTexParameterxOES>;

export function TexParameterxOES(
  target: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexParameterxOES.call(
    target,
    pname,
    param,
  );
}

export const def_glTexParameterxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glTexParameterxvOES>;

export function TexParameterxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexParameterxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glTranslatexOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTranslatexOES!: Deno.UnsafeFnPointer<typeof def_glTranslatexOES>;

export function TranslatexOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glTranslatexOES.call(
    x,
    y,
    z,
  );
}

export const def_glGetLightxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLightxvOES!: Deno.UnsafeFnPointer<typeof def_glGetLightxvOES>;

export function GetLightxvOES(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetLightxvOES.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMaterialxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMaterialxvOES!: Deno.UnsafeFnPointer<typeof def_glGetMaterialxvOES>;

export function GetMaterialxvOES(
  face: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetMaterialxvOES.call(
    face,
    pname,
    bufferToFFI(params),
  );
}

export const def_glPointParameterxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPointParameterxOES!: Deno.UnsafeFnPointer<typeof def_glPointParameterxOES>;

export function PointParameterxOES(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glPointParameterxOES.call(
    pname,
    param,
  );
}

export const def_glSampleCoveragexOES = {
  parameters: ["i32", "u8"],
  result: "void",
} as const;

let fn_glSampleCoveragexOES!: Deno.UnsafeFnPointer<typeof def_glSampleCoveragexOES>;

export function SampleCoveragexOES(
  value: GLclampx,
  invert: GLboolean,
): void {
  fn_glSampleCoveragexOES.call(
    value,
    invert,
  );
}

export const def_glAccumxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glAccumxOES!: Deno.UnsafeFnPointer<typeof def_glAccumxOES>;

export function AccumxOES(
  op: GLenum,
  value: GLfixed,
): void {
  fn_glAccumxOES.call(
    op,
    value,
  );
}

export const def_glBitmapxOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glBitmapxOES!: Deno.UnsafeFnPointer<typeof def_glBitmapxOES>;

export function BitmapxOES(
  width: GLsizei,
  height: GLsizei,
  xorig: GLfixed,
  yorig: GLfixed,
  xmove: GLfixed,
  ymove: GLfixed,
  bitmap: Buffer,
): void {
  fn_glBitmapxOES.call(
    width,
    height,
    xorig,
    yorig,
    xmove,
    ymove,
    bufferToFFI(bitmap),
  );
}

export const def_glBlendColorxOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glBlendColorxOES!: Deno.UnsafeFnPointer<typeof def_glBlendColorxOES>;

export function BlendColorxOES(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glBlendColorxOES.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glClearAccumxOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glClearAccumxOES!: Deno.UnsafeFnPointer<typeof def_glClearAccumxOES>;

export function ClearAccumxOES(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
  alpha: GLfixed,
): void {
  fn_glClearAccumxOES.call(
    red,
    green,
    blue,
    alpha,
  );
}

export const def_glColor3xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glColor3xOES!: Deno.UnsafeFnPointer<typeof def_glColor3xOES>;

export function Color3xOES(
  red: GLfixed,
  green: GLfixed,
  blue: GLfixed,
): void {
  fn_glColor3xOES.call(
    red,
    green,
    blue,
  );
}

export const def_glColor3xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor3xvOES!: Deno.UnsafeFnPointer<typeof def_glColor3xvOES>;

export function Color3xvOES(
  components: Buffer,
): void {
  fn_glColor3xvOES.call(
    bufferToFFI(components),
  );
}

export const def_glColor4xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glColor4xvOES!: Deno.UnsafeFnPointer<typeof def_glColor4xvOES>;

export function Color4xvOES(
  components: Buffer,
): void {
  fn_glColor4xvOES.call(
    bufferToFFI(components),
  );
}

export const def_glConvolutionParameterxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glConvolutionParameterxOES!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameterxOES>;

export function ConvolutionParameterxOES(
  target: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glConvolutionParameterxOES.call(
    target,
    pname,
    param,
  );
}

export const def_glConvolutionParameterxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glConvolutionParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glConvolutionParameterxvOES>;

export function ConvolutionParameterxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glConvolutionParameterxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glEvalCoord1xOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glEvalCoord1xOES!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1xOES>;

export function EvalCoord1xOES(
  u: GLfixed,
): void {
  fn_glEvalCoord1xOES.call(
    u,
  );
}

export const def_glEvalCoord1xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord1xvOES!: Deno.UnsafeFnPointer<typeof def_glEvalCoord1xvOES>;

export function EvalCoord1xvOES(
  coords: Buffer,
): void {
  fn_glEvalCoord1xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glEvalCoord2xOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glEvalCoord2xOES!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2xOES>;

export function EvalCoord2xOES(
  u: GLfixed,
  v: GLfixed,
): void {
  fn_glEvalCoord2xOES.call(
    u,
    v,
  );
}

export const def_glEvalCoord2xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glEvalCoord2xvOES!: Deno.UnsafeFnPointer<typeof def_glEvalCoord2xvOES>;

export function EvalCoord2xvOES(
  coords: Buffer,
): void {
  fn_glEvalCoord2xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glFeedbackBufferxOES = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glFeedbackBufferxOES!: Deno.UnsafeFnPointer<typeof def_glFeedbackBufferxOES>;

export function FeedbackBufferxOES(
  n: GLsizei,
  type: GLenum,
  buffer: Buffer,
): void {
  fn_glFeedbackBufferxOES.call(
    n,
    type,
    bufferToFFI(buffer),
  );
}

export const def_glGetConvolutionParameterxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetConvolutionParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glGetConvolutionParameterxvOES>;

export function GetConvolutionParameterxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetConvolutionParameterxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetHistogramParameterxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetHistogramParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glGetHistogramParameterxvOES>;

export function GetHistogramParameterxvOES(
  target: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetHistogramParameterxvOES.call(
    target,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetLightxOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetLightxOES!: Deno.UnsafeFnPointer<typeof def_glGetLightxOES>;

export function GetLightxOES(
  light: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetLightxOES.call(
    light,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetMapxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetMapxvOES!: Deno.UnsafeFnPointer<typeof def_glGetMapxvOES>;

export function GetMapxvOES(
  target: GLenum,
  query: GLenum,
  v: Buffer,
): void {
  fn_glGetMapxvOES.call(
    target,
    query,
    bufferToFFI(v),
  );
}

export const def_glGetMaterialxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glGetMaterialxOES!: Deno.UnsafeFnPointer<typeof def_glGetMaterialxOES>;

export function GetMaterialxOES(
  face: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glGetMaterialxOES.call(
    face,
    pname,
    param,
  );
}

export const def_glGetPixelMapxv = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetPixelMapxv!: Deno.UnsafeFnPointer<typeof def_glGetPixelMapxv>;

export function GetPixelMapxv(
  map: GLenum,
  size: GLint,
  values: Buffer,
): void {
  fn_glGetPixelMapxv.call(
    map,
    size,
    bufferToFFI(values),
  );
}

export const def_glGetTexGenxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexGenxvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexGenxvOES>;

export function GetTexGenxvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexGenxvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetTexLevelParameterxvOES = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTexLevelParameterxvOES!: Deno.UnsafeFnPointer<typeof def_glGetTexLevelParameterxvOES>;

export function GetTexLevelParameterxvOES(
  target: GLenum,
  level: GLint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTexLevelParameterxvOES.call(
    target,
    level,
    pname,
    bufferToFFI(params),
  );
}

export const def_glIndexxOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glIndexxOES!: Deno.UnsafeFnPointer<typeof def_glIndexxOES>;

export function IndexxOES(
  component: GLfixed,
): void {
  fn_glIndexxOES.call(
    component,
  );
}

export const def_glIndexxvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glIndexxvOES!: Deno.UnsafeFnPointer<typeof def_glIndexxvOES>;

export function IndexxvOES(
  component: Buffer,
): void {
  fn_glIndexxvOES.call(
    bufferToFFI(component),
  );
}

export const def_glLoadTransposeMatrixxOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glLoadTransposeMatrixxOES!: Deno.UnsafeFnPointer<typeof def_glLoadTransposeMatrixxOES>;

export function LoadTransposeMatrixxOES(
  m: Buffer,
): void {
  fn_glLoadTransposeMatrixxOES.call(
    bufferToFFI(m),
  );
}

export const def_glMap1xOES = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMap1xOES!: Deno.UnsafeFnPointer<typeof def_glMap1xOES>;

export function Map1xOES(
  target: GLenum,
  u1: GLfixed,
  u2: GLfixed,
  stride: GLint,
  order: GLint,
  points: GLfixed,
): void {
  fn_glMap1xOES.call(
    target,
    u1,
    u2,
    stride,
    order,
    points,
  );
}

export const def_glMap2xOES = {
  parameters: ["u32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMap2xOES!: Deno.UnsafeFnPointer<typeof def_glMap2xOES>;

export function Map2xOES(
  target: GLenum,
  u1: GLfixed,
  u2: GLfixed,
  ustride: GLint,
  uorder: GLint,
  v1: GLfixed,
  v2: GLfixed,
  vstride: GLint,
  vorder: GLint,
  points: GLfixed,
): void {
  fn_glMap2xOES.call(
    target,
    u1,
    u2,
    ustride,
    uorder,
    v1,
    v2,
    vstride,
    vorder,
    points,
  );
}

export const def_glMapGrid1xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMapGrid1xOES!: Deno.UnsafeFnPointer<typeof def_glMapGrid1xOES>;

export function MapGrid1xOES(
  n: GLint,
  u1: GLfixed,
  u2: GLfixed,
): void {
  fn_glMapGrid1xOES.call(
    n,
    u1,
    u2,
  );
}

export const def_glMapGrid2xOES = {
  parameters: ["i32", "i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMapGrid2xOES!: Deno.UnsafeFnPointer<typeof def_glMapGrid2xOES>;

export function MapGrid2xOES(
  n: GLint,
  u1: GLfixed,
  u2: GLfixed,
  v1: GLfixed,
  v2: GLfixed,
): void {
  fn_glMapGrid2xOES.call(
    n,
    u1,
    u2,
    v1,
    v2,
  );
}

export const def_glMultTransposeMatrixxOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glMultTransposeMatrixxOES!: Deno.UnsafeFnPointer<typeof def_glMultTransposeMatrixxOES>;

export function MultTransposeMatrixxOES(
  m: Buffer,
): void {
  fn_glMultTransposeMatrixxOES.call(
    bufferToFFI(m),
  );
}

export const def_glMultiTexCoord1xOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord1xOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1xOES>;

export function MultiTexCoord1xOES(
  texture: GLenum,
  s: GLfixed,
): void {
  fn_glMultiTexCoord1xOES.call(
    texture,
    s,
  );
}

export const def_glMultiTexCoord1xvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord1xvOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord1xvOES>;

export function MultiTexCoord1xvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord1xvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord2xOES = {
  parameters: ["u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord2xOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2xOES>;

export function MultiTexCoord2xOES(
  texture: GLenum,
  s: GLfixed,
  t: GLfixed,
): void {
  fn_glMultiTexCoord2xOES.call(
    texture,
    s,
    t,
  );
}

export const def_glMultiTexCoord2xvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord2xvOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord2xvOES>;

export function MultiTexCoord2xvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord2xvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord3xOES = {
  parameters: ["u32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiTexCoord3xOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3xOES>;

export function MultiTexCoord3xOES(
  texture: GLenum,
  s: GLfixed,
  t: GLfixed,
  r: GLfixed,
): void {
  fn_glMultiTexCoord3xOES.call(
    texture,
    s,
    t,
    r,
  );
}

export const def_glMultiTexCoord3xvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord3xvOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord3xvOES>;

export function MultiTexCoord3xvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord3xvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glMultiTexCoord4xvOES = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glMultiTexCoord4xvOES!: Deno.UnsafeFnPointer<typeof def_glMultiTexCoord4xvOES>;

export function MultiTexCoord4xvOES(
  texture: GLenum,
  coords: Buffer,
): void {
  fn_glMultiTexCoord4xvOES.call(
    texture,
    bufferToFFI(coords),
  );
}

export const def_glNormal3xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glNormal3xvOES!: Deno.UnsafeFnPointer<typeof def_glNormal3xvOES>;

export function Normal3xvOES(
  coords: Buffer,
): void {
  fn_glNormal3xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glPassThroughxOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glPassThroughxOES!: Deno.UnsafeFnPointer<typeof def_glPassThroughxOES>;

export function PassThroughxOES(
  token: GLfixed,
): void {
  fn_glPassThroughxOES.call(
    token,
  );
}

export const def_glPixelMapx = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glPixelMapx!: Deno.UnsafeFnPointer<typeof def_glPixelMapx>;

export function PixelMapx(
  map: GLenum,
  size: GLint,
  values: Buffer,
): void {
  fn_glPixelMapx.call(
    map,
    size,
    bufferToFFI(values),
  );
}

export const def_glPixelStorex = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPixelStorex!: Deno.UnsafeFnPointer<typeof def_glPixelStorex>;

export function PixelStorex(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glPixelStorex.call(
    pname,
    param,
  );
}

export const def_glPixelTransferxOES = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glPixelTransferxOES!: Deno.UnsafeFnPointer<typeof def_glPixelTransferxOES>;

export function PixelTransferxOES(
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glPixelTransferxOES.call(
    pname,
    param,
  );
}

export const def_glPixelZoomxOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glPixelZoomxOES!: Deno.UnsafeFnPointer<typeof def_glPixelZoomxOES>;

export function PixelZoomxOES(
  xfactor: GLfixed,
  yfactor: GLfixed,
): void {
  fn_glPixelZoomxOES.call(
    xfactor,
    yfactor,
  );
}

export const def_glPrioritizeTexturesxOES = {
  parameters: ["i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glPrioritizeTexturesxOES!: Deno.UnsafeFnPointer<typeof def_glPrioritizeTexturesxOES>;

export function PrioritizeTexturesxOES(
  n: GLsizei,
  textures: Buffer,
  priorities: Buffer,
): void {
  fn_glPrioritizeTexturesxOES.call(
    n,
    bufferToFFI(textures),
    bufferToFFI(priorities),
  );
}

export const def_glRasterPos2xOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos2xOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos2xOES>;

export function RasterPos2xOES(
  x: GLfixed,
  y: GLfixed,
): void {
  fn_glRasterPos2xOES.call(
    x,
    y,
  );
}

export const def_glRasterPos2xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos2xvOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos2xvOES>;

export function RasterPos2xvOES(
  coords: Buffer,
): void {
  fn_glRasterPos2xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glRasterPos3xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos3xOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos3xOES>;

export function RasterPos3xOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glRasterPos3xOES.call(
    x,
    y,
    z,
  );
}

export const def_glRasterPos3xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos3xvOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos3xvOES>;

export function RasterPos3xvOES(
  coords: Buffer,
): void {
  fn_glRasterPos3xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glRasterPos4xOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRasterPos4xOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos4xOES>;

export function RasterPos4xOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
  w: GLfixed,
): void {
  fn_glRasterPos4xOES.call(
    x,
    y,
    z,
    w,
  );
}

export const def_glRasterPos4xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glRasterPos4xvOES!: Deno.UnsafeFnPointer<typeof def_glRasterPos4xvOES>;

export function RasterPos4xvOES(
  coords: Buffer,
): void {
  fn_glRasterPos4xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glRectxOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glRectxOES!: Deno.UnsafeFnPointer<typeof def_glRectxOES>;

export function RectxOES(
  x1: GLfixed,
  y1: GLfixed,
  x2: GLfixed,
  y2: GLfixed,
): void {
  fn_glRectxOES.call(
    x1,
    y1,
    x2,
    y2,
  );
}

export const def_glRectxvOES = {
  parameters: ["buffer", "buffer"],
  result: "void",
} as const;

let fn_glRectxvOES!: Deno.UnsafeFnPointer<typeof def_glRectxvOES>;

export function RectxvOES(
  v1: Buffer,
  v2: Buffer,
): void {
  fn_glRectxvOES.call(
    bufferToFFI(v1),
    bufferToFFI(v2),
  );
}

export const def_glTexCoord1xOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glTexCoord1xOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord1xOES>;

export function TexCoord1xOES(
  s: GLfixed,
): void {
  fn_glTexCoord1xOES.call(
    s,
  );
}

export const def_glTexCoord1xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord1xvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord1xvOES>;

export function TexCoord1xvOES(
  coords: Buffer,
): void {
  fn_glTexCoord1xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord2xOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord2xOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord2xOES>;

export function TexCoord2xOES(
  s: GLfixed,
  t: GLfixed,
): void {
  fn_glTexCoord2xOES.call(
    s,
    t,
  );
}

export const def_glTexCoord2xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord2xvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord2xvOES>;

export function TexCoord2xvOES(
  coords: Buffer,
): void {
  fn_glTexCoord2xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord3xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord3xOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord3xOES>;

export function TexCoord3xOES(
  s: GLfixed,
  t: GLfixed,
  r: GLfixed,
): void {
  fn_glTexCoord3xOES.call(
    s,
    t,
    r,
  );
}

export const def_glTexCoord3xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord3xvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord3xvOES>;

export function TexCoord3xvOES(
  coords: Buffer,
): void {
  fn_glTexCoord3xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexCoord4xOES = {
  parameters: ["i32", "i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glTexCoord4xOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord4xOES>;

export function TexCoord4xOES(
  s: GLfixed,
  t: GLfixed,
  r: GLfixed,
  q: GLfixed,
): void {
  fn_glTexCoord4xOES.call(
    s,
    t,
    r,
    q,
  );
}

export const def_glTexCoord4xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glTexCoord4xvOES!: Deno.UnsafeFnPointer<typeof def_glTexCoord4xvOES>;

export function TexCoord4xvOES(
  coords: Buffer,
): void {
  fn_glTexCoord4xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glTexGenxOES = {
  parameters: ["u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glTexGenxOES!: Deno.UnsafeFnPointer<typeof def_glTexGenxOES>;

export function TexGenxOES(
  coord: GLenum,
  pname: GLenum,
  param: GLfixed,
): void {
  fn_glTexGenxOES.call(
    coord,
    pname,
    param,
  );
}

export const def_glTexGenxvOES = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexGenxvOES!: Deno.UnsafeFnPointer<typeof def_glTexGenxvOES>;

export function TexGenxvOES(
  coord: GLenum,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glTexGenxvOES.call(
    coord,
    pname,
    bufferToFFI(params),
  );
}

export const def_glVertex2xOES = {
  parameters: ["i32"],
  result: "void",
} as const;

let fn_glVertex2xOES!: Deno.UnsafeFnPointer<typeof def_glVertex2xOES>;

export function Vertex2xOES(
  x: GLfixed,
): void {
  fn_glVertex2xOES.call(
    x,
  );
}

export const def_glVertex2xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex2xvOES!: Deno.UnsafeFnPointer<typeof def_glVertex2xvOES>;

export function Vertex2xvOES(
  coords: Buffer,
): void {
  fn_glVertex2xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glVertex3xOES = {
  parameters: ["i32", "i32"],
  result: "void",
} as const;

let fn_glVertex3xOES!: Deno.UnsafeFnPointer<typeof def_glVertex3xOES>;

export function Vertex3xOES(
  x: GLfixed,
  y: GLfixed,
): void {
  fn_glVertex3xOES.call(
    x,
    y,
  );
}

export const def_glVertex3xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex3xvOES!: Deno.UnsafeFnPointer<typeof def_glVertex3xvOES>;

export function Vertex3xvOES(
  coords: Buffer,
): void {
  fn_glVertex3xvOES.call(
    bufferToFFI(coords),
  );
}

export const def_glVertex4xOES = {
  parameters: ["i32", "i32", "i32"],
  result: "void",
} as const;

let fn_glVertex4xOES!: Deno.UnsafeFnPointer<typeof def_glVertex4xOES>;

export function Vertex4xOES(
  x: GLfixed,
  y: GLfixed,
  z: GLfixed,
): void {
  fn_glVertex4xOES.call(
    x,
    y,
    z,
  );
}

export const def_glVertex4xvOES = {
  parameters: ["buffer"],
  result: "void",
} as const;

let fn_glVertex4xvOES!: Deno.UnsafeFnPointer<typeof def_glVertex4xvOES>;

export function Vertex4xvOES(
  coords: Buffer,
): void {
  fn_glVertex4xvOES.call(
    bufferToFFI(coords),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glAlphaFuncxOES = new Deno.UnsafeFnPointer(proc("glAlphaFuncxOES")!, def_glAlphaFuncxOES);
  fn_glClearColorxOES = new Deno.UnsafeFnPointer(proc("glClearColorxOES")!, def_glClearColorxOES);
  fn_glClearDepthxOES = new Deno.UnsafeFnPointer(proc("glClearDepthxOES")!, def_glClearDepthxOES);
  fn_glClipPlanexOES = new Deno.UnsafeFnPointer(proc("glClipPlanexOES")!, def_glClipPlanexOES);
  fn_glColor4xOES = new Deno.UnsafeFnPointer(proc("glColor4xOES")!, def_glColor4xOES);
  fn_glDepthRangexOES = new Deno.UnsafeFnPointer(proc("glDepthRangexOES")!, def_glDepthRangexOES);
  fn_glFogxOES = new Deno.UnsafeFnPointer(proc("glFogxOES")!, def_glFogxOES);
  fn_glFogxvOES = new Deno.UnsafeFnPointer(proc("glFogxvOES")!, def_glFogxvOES);
  fn_glFrustumxOES = new Deno.UnsafeFnPointer(proc("glFrustumxOES")!, def_glFrustumxOES);
  fn_glGetClipPlanexOES = new Deno.UnsafeFnPointer(proc("glGetClipPlanexOES")!, def_glGetClipPlanexOES);
  fn_glGetFixedvOES = new Deno.UnsafeFnPointer(proc("glGetFixedvOES")!, def_glGetFixedvOES);
  fn_glGetTexEnvxvOES = new Deno.UnsafeFnPointer(proc("glGetTexEnvxvOES")!, def_glGetTexEnvxvOES);
  fn_glGetTexParameterxvOES = new Deno.UnsafeFnPointer(proc("glGetTexParameterxvOES")!, def_glGetTexParameterxvOES);
  fn_glLightModelxOES = new Deno.UnsafeFnPointer(proc("glLightModelxOES")!, def_glLightModelxOES);
  fn_glLightModelxvOES = new Deno.UnsafeFnPointer(proc("glLightModelxvOES")!, def_glLightModelxvOES);
  fn_glLightxOES = new Deno.UnsafeFnPointer(proc("glLightxOES")!, def_glLightxOES);
  fn_glLightxvOES = new Deno.UnsafeFnPointer(proc("glLightxvOES")!, def_glLightxvOES);
  fn_glLineWidthxOES = new Deno.UnsafeFnPointer(proc("glLineWidthxOES")!, def_glLineWidthxOES);
  fn_glLoadMatrixxOES = new Deno.UnsafeFnPointer(proc("glLoadMatrixxOES")!, def_glLoadMatrixxOES);
  fn_glMaterialxOES = new Deno.UnsafeFnPointer(proc("glMaterialxOES")!, def_glMaterialxOES);
  fn_glMaterialxvOES = new Deno.UnsafeFnPointer(proc("glMaterialxvOES")!, def_glMaterialxvOES);
  fn_glMultMatrixxOES = new Deno.UnsafeFnPointer(proc("glMultMatrixxOES")!, def_glMultMatrixxOES);
  fn_glMultiTexCoord4xOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4xOES")!, def_glMultiTexCoord4xOES);
  fn_glNormal3xOES = new Deno.UnsafeFnPointer(proc("glNormal3xOES")!, def_glNormal3xOES);
  fn_glOrthoxOES = new Deno.UnsafeFnPointer(proc("glOrthoxOES")!, def_glOrthoxOES);
  fn_glPointParameterxvOES = new Deno.UnsafeFnPointer(proc("glPointParameterxvOES")!, def_glPointParameterxvOES);
  fn_glPointSizexOES = new Deno.UnsafeFnPointer(proc("glPointSizexOES")!, def_glPointSizexOES);
  fn_glPolygonOffsetxOES = new Deno.UnsafeFnPointer(proc("glPolygonOffsetxOES")!, def_glPolygonOffsetxOES);
  fn_glRotatexOES = new Deno.UnsafeFnPointer(proc("glRotatexOES")!, def_glRotatexOES);
  fn_glScalexOES = new Deno.UnsafeFnPointer(proc("glScalexOES")!, def_glScalexOES);
  fn_glTexEnvxOES = new Deno.UnsafeFnPointer(proc("glTexEnvxOES")!, def_glTexEnvxOES);
  fn_glTexEnvxvOES = new Deno.UnsafeFnPointer(proc("glTexEnvxvOES")!, def_glTexEnvxvOES);
  fn_glTexParameterxOES = new Deno.UnsafeFnPointer(proc("glTexParameterxOES")!, def_glTexParameterxOES);
  fn_glTexParameterxvOES = new Deno.UnsafeFnPointer(proc("glTexParameterxvOES")!, def_glTexParameterxvOES);
  fn_glTranslatexOES = new Deno.UnsafeFnPointer(proc("glTranslatexOES")!, def_glTranslatexOES);
  fn_glGetLightxvOES = new Deno.UnsafeFnPointer(proc("glGetLightxvOES")!, def_glGetLightxvOES);
  fn_glGetMaterialxvOES = new Deno.UnsafeFnPointer(proc("glGetMaterialxvOES")!, def_glGetMaterialxvOES);
  fn_glPointParameterxOES = new Deno.UnsafeFnPointer(proc("glPointParameterxOES")!, def_glPointParameterxOES);
  fn_glSampleCoveragexOES = new Deno.UnsafeFnPointer(proc("glSampleCoveragexOES")!, def_glSampleCoveragexOES);
  fn_glAccumxOES = new Deno.UnsafeFnPointer(proc("glAccumxOES")!, def_glAccumxOES);
  fn_glBitmapxOES = new Deno.UnsafeFnPointer(proc("glBitmapxOES")!, def_glBitmapxOES);
  fn_glBlendColorxOES = new Deno.UnsafeFnPointer(proc("glBlendColorxOES")!, def_glBlendColorxOES);
  fn_glClearAccumxOES = new Deno.UnsafeFnPointer(proc("glClearAccumxOES")!, def_glClearAccumxOES);
  fn_glColor3xOES = new Deno.UnsafeFnPointer(proc("glColor3xOES")!, def_glColor3xOES);
  fn_glColor3xvOES = new Deno.UnsafeFnPointer(proc("glColor3xvOES")!, def_glColor3xvOES);
  fn_glColor4xvOES = new Deno.UnsafeFnPointer(proc("glColor4xvOES")!, def_glColor4xvOES);
  fn_glConvolutionParameterxOES = new Deno.UnsafeFnPointer(proc("glConvolutionParameterxOES")!, def_glConvolutionParameterxOES);
  fn_glConvolutionParameterxvOES = new Deno.UnsafeFnPointer(proc("glConvolutionParameterxvOES")!, def_glConvolutionParameterxvOES);
  fn_glEvalCoord1xOES = new Deno.UnsafeFnPointer(proc("glEvalCoord1xOES")!, def_glEvalCoord1xOES);
  fn_glEvalCoord1xvOES = new Deno.UnsafeFnPointer(proc("glEvalCoord1xvOES")!, def_glEvalCoord1xvOES);
  fn_glEvalCoord2xOES = new Deno.UnsafeFnPointer(proc("glEvalCoord2xOES")!, def_glEvalCoord2xOES);
  fn_glEvalCoord2xvOES = new Deno.UnsafeFnPointer(proc("glEvalCoord2xvOES")!, def_glEvalCoord2xvOES);
  fn_glFeedbackBufferxOES = new Deno.UnsafeFnPointer(proc("glFeedbackBufferxOES")!, def_glFeedbackBufferxOES);
  fn_glGetConvolutionParameterxvOES = new Deno.UnsafeFnPointer(proc("glGetConvolutionParameterxvOES")!, def_glGetConvolutionParameterxvOES);
  fn_glGetHistogramParameterxvOES = new Deno.UnsafeFnPointer(proc("glGetHistogramParameterxvOES")!, def_glGetHistogramParameterxvOES);
  fn_glGetLightxOES = new Deno.UnsafeFnPointer(proc("glGetLightxOES")!, def_glGetLightxOES);
  fn_glGetMapxvOES = new Deno.UnsafeFnPointer(proc("glGetMapxvOES")!, def_glGetMapxvOES);
  fn_glGetMaterialxOES = new Deno.UnsafeFnPointer(proc("glGetMaterialxOES")!, def_glGetMaterialxOES);
  fn_glGetPixelMapxv = new Deno.UnsafeFnPointer(proc("glGetPixelMapxv")!, def_glGetPixelMapxv);
  fn_glGetTexGenxvOES = new Deno.UnsafeFnPointer(proc("glGetTexGenxvOES")!, def_glGetTexGenxvOES);
  fn_glGetTexLevelParameterxvOES = new Deno.UnsafeFnPointer(proc("glGetTexLevelParameterxvOES")!, def_glGetTexLevelParameterxvOES);
  fn_glIndexxOES = new Deno.UnsafeFnPointer(proc("glIndexxOES")!, def_glIndexxOES);
  fn_glIndexxvOES = new Deno.UnsafeFnPointer(proc("glIndexxvOES")!, def_glIndexxvOES);
  fn_glLoadTransposeMatrixxOES = new Deno.UnsafeFnPointer(proc("glLoadTransposeMatrixxOES")!, def_glLoadTransposeMatrixxOES);
  fn_glMap1xOES = new Deno.UnsafeFnPointer(proc("glMap1xOES")!, def_glMap1xOES);
  fn_glMap2xOES = new Deno.UnsafeFnPointer(proc("glMap2xOES")!, def_glMap2xOES);
  fn_glMapGrid1xOES = new Deno.UnsafeFnPointer(proc("glMapGrid1xOES")!, def_glMapGrid1xOES);
  fn_glMapGrid2xOES = new Deno.UnsafeFnPointer(proc("glMapGrid2xOES")!, def_glMapGrid2xOES);
  fn_glMultTransposeMatrixxOES = new Deno.UnsafeFnPointer(proc("glMultTransposeMatrixxOES")!, def_glMultTransposeMatrixxOES);
  fn_glMultiTexCoord1xOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1xOES")!, def_glMultiTexCoord1xOES);
  fn_glMultiTexCoord1xvOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord1xvOES")!, def_glMultiTexCoord1xvOES);
  fn_glMultiTexCoord2xOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2xOES")!, def_glMultiTexCoord2xOES);
  fn_glMultiTexCoord2xvOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord2xvOES")!, def_glMultiTexCoord2xvOES);
  fn_glMultiTexCoord3xOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3xOES")!, def_glMultiTexCoord3xOES);
  fn_glMultiTexCoord3xvOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord3xvOES")!, def_glMultiTexCoord3xvOES);
  fn_glMultiTexCoord4xvOES = new Deno.UnsafeFnPointer(proc("glMultiTexCoord4xvOES")!, def_glMultiTexCoord4xvOES);
  fn_glNormal3xvOES = new Deno.UnsafeFnPointer(proc("glNormal3xvOES")!, def_glNormal3xvOES);
  fn_glPassThroughxOES = new Deno.UnsafeFnPointer(proc("glPassThroughxOES")!, def_glPassThroughxOES);
  fn_glPixelMapx = new Deno.UnsafeFnPointer(proc("glPixelMapx")!, def_glPixelMapx);
  fn_glPixelStorex = new Deno.UnsafeFnPointer(proc("glPixelStorex")!, def_glPixelStorex);
  fn_glPixelTransferxOES = new Deno.UnsafeFnPointer(proc("glPixelTransferxOES")!, def_glPixelTransferxOES);
  fn_glPixelZoomxOES = new Deno.UnsafeFnPointer(proc("glPixelZoomxOES")!, def_glPixelZoomxOES);
  fn_glPrioritizeTexturesxOES = new Deno.UnsafeFnPointer(proc("glPrioritizeTexturesxOES")!, def_glPrioritizeTexturesxOES);
  fn_glRasterPos2xOES = new Deno.UnsafeFnPointer(proc("glRasterPos2xOES")!, def_glRasterPos2xOES);
  fn_glRasterPos2xvOES = new Deno.UnsafeFnPointer(proc("glRasterPos2xvOES")!, def_glRasterPos2xvOES);
  fn_glRasterPos3xOES = new Deno.UnsafeFnPointer(proc("glRasterPos3xOES")!, def_glRasterPos3xOES);
  fn_glRasterPos3xvOES = new Deno.UnsafeFnPointer(proc("glRasterPos3xvOES")!, def_glRasterPos3xvOES);
  fn_glRasterPos4xOES = new Deno.UnsafeFnPointer(proc("glRasterPos4xOES")!, def_glRasterPos4xOES);
  fn_glRasterPos4xvOES = new Deno.UnsafeFnPointer(proc("glRasterPos4xvOES")!, def_glRasterPos4xvOES);
  fn_glRectxOES = new Deno.UnsafeFnPointer(proc("glRectxOES")!, def_glRectxOES);
  fn_glRectxvOES = new Deno.UnsafeFnPointer(proc("glRectxvOES")!, def_glRectxvOES);
  fn_glTexCoord1xOES = new Deno.UnsafeFnPointer(proc("glTexCoord1xOES")!, def_glTexCoord1xOES);
  fn_glTexCoord1xvOES = new Deno.UnsafeFnPointer(proc("glTexCoord1xvOES")!, def_glTexCoord1xvOES);
  fn_glTexCoord2xOES = new Deno.UnsafeFnPointer(proc("glTexCoord2xOES")!, def_glTexCoord2xOES);
  fn_glTexCoord2xvOES = new Deno.UnsafeFnPointer(proc("glTexCoord2xvOES")!, def_glTexCoord2xvOES);
  fn_glTexCoord3xOES = new Deno.UnsafeFnPointer(proc("glTexCoord3xOES")!, def_glTexCoord3xOES);
  fn_glTexCoord3xvOES = new Deno.UnsafeFnPointer(proc("glTexCoord3xvOES")!, def_glTexCoord3xvOES);
  fn_glTexCoord4xOES = new Deno.UnsafeFnPointer(proc("glTexCoord4xOES")!, def_glTexCoord4xOES);
  fn_glTexCoord4xvOES = new Deno.UnsafeFnPointer(proc("glTexCoord4xvOES")!, def_glTexCoord4xvOES);
  fn_glTexGenxOES = new Deno.UnsafeFnPointer(proc("glTexGenxOES")!, def_glTexGenxOES);
  fn_glTexGenxvOES = new Deno.UnsafeFnPointer(proc("glTexGenxvOES")!, def_glTexGenxvOES);
  fn_glVertex2xOES = new Deno.UnsafeFnPointer(proc("glVertex2xOES")!, def_glVertex2xOES);
  fn_glVertex2xvOES = new Deno.UnsafeFnPointer(proc("glVertex2xvOES")!, def_glVertex2xvOES);
  fn_glVertex3xOES = new Deno.UnsafeFnPointer(proc("glVertex3xOES")!, def_glVertex3xOES);
  fn_glVertex3xvOES = new Deno.UnsafeFnPointer(proc("glVertex3xvOES")!, def_glVertex3xvOES);
  fn_glVertex4xOES = new Deno.UnsafeFnPointer(proc("glVertex4xOES")!, def_glVertex4xOES);
  fn_glVertex4xvOES = new Deno.UnsafeFnPointer(proc("glVertex4xvOES")!, def_glVertex4xvOES);
}
