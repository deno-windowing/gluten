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
export const VERTEX_PROGRAM_NV = 0x8620;
export const VERTEX_STATE_PROGRAM_NV = 0x8621;
export const ATTRIB_ARRAY_SIZE_NV = 0x8623;
export const ATTRIB_ARRAY_STRIDE_NV = 0x8624;
export const ATTRIB_ARRAY_TYPE_NV = 0x8625;
export const CURRENT_ATTRIB_NV = 0x8626;
export const PROGRAM_LENGTH_NV = 0x8627;
export const PROGRAM_STRING_NV = 0x8628;
export const MODELVIEW_PROJECTION_NV = 0x8629;
export const IDENTITY_NV = 0x862a;
export const INVERSE_NV = 0x862b;
export const TRANSPOSE_NV = 0x862c;
export const INVERSE_TRANSPOSE_NV = 0x862d;
export const MAX_TRACK_MATRIX_STACK_DEPTH_NV = 0x862e;
export const MAX_TRACK_MATRICES_NV = 0x862f;
export const MATRIX0_NV = 0x8630;
export const MATRIX1_NV = 0x8631;
export const MATRIX2_NV = 0x8632;
export const MATRIX3_NV = 0x8633;
export const MATRIX4_NV = 0x8634;
export const MATRIX5_NV = 0x8635;
export const MATRIX6_NV = 0x8636;
export const MATRIX7_NV = 0x8637;
export const CURRENT_MATRIX_STACK_DEPTH_NV = 0x8640;
export const CURRENT_MATRIX_NV = 0x8641;
export const VERTEX_PROGRAM_POINT_SIZE_NV = 0x8642;
export const VERTEX_PROGRAM_TWO_SIDE_NV = 0x8643;
export const PROGRAM_PARAMETER_NV = 0x8644;
export const ATTRIB_ARRAY_POINTER_NV = 0x8645;
export const PROGRAM_TARGET_NV = 0x8646;
export const PROGRAM_RESIDENT_NV = 0x8647;
export const TRACK_MATRIX_NV = 0x8648;
export const TRACK_MATRIX_TRANSFORM_NV = 0x8649;
export const VERTEX_PROGRAM_BINDING_NV = 0x864a;
export const PROGRAM_ERROR_POSITION_NV = 0x864b;
export const VERTEX_ATTRIB_ARRAY0_NV = 0x8650;
export const VERTEX_ATTRIB_ARRAY1_NV = 0x8651;
export const VERTEX_ATTRIB_ARRAY2_NV = 0x8652;
export const VERTEX_ATTRIB_ARRAY3_NV = 0x8653;
export const VERTEX_ATTRIB_ARRAY4_NV = 0x8654;
export const VERTEX_ATTRIB_ARRAY5_NV = 0x8655;
export const VERTEX_ATTRIB_ARRAY6_NV = 0x8656;
export const VERTEX_ATTRIB_ARRAY7_NV = 0x8657;
export const VERTEX_ATTRIB_ARRAY8_NV = 0x8658;
export const VERTEX_ATTRIB_ARRAY9_NV = 0x8659;
export const VERTEX_ATTRIB_ARRAY10_NV = 0x865a;
export const VERTEX_ATTRIB_ARRAY11_NV = 0x865b;
export const VERTEX_ATTRIB_ARRAY12_NV = 0x865c;
export const VERTEX_ATTRIB_ARRAY13_NV = 0x865d;
export const VERTEX_ATTRIB_ARRAY14_NV = 0x865e;
export const VERTEX_ATTRIB_ARRAY15_NV = 0x865f;
export const MAP1_VERTEX_ATTRIB0_4_NV = 0x8660;
export const MAP1_VERTEX_ATTRIB1_4_NV = 0x8661;
export const MAP1_VERTEX_ATTRIB2_4_NV = 0x8662;
export const MAP1_VERTEX_ATTRIB3_4_NV = 0x8663;
export const MAP1_VERTEX_ATTRIB4_4_NV = 0x8664;
export const MAP1_VERTEX_ATTRIB5_4_NV = 0x8665;
export const MAP1_VERTEX_ATTRIB6_4_NV = 0x8666;
export const MAP1_VERTEX_ATTRIB7_4_NV = 0x8667;
export const MAP1_VERTEX_ATTRIB8_4_NV = 0x8668;
export const MAP1_VERTEX_ATTRIB9_4_NV = 0x8669;
export const MAP1_VERTEX_ATTRIB10_4_NV = 0x866a;
export const MAP1_VERTEX_ATTRIB11_4_NV = 0x866b;
export const MAP1_VERTEX_ATTRIB12_4_NV = 0x866c;
export const MAP1_VERTEX_ATTRIB13_4_NV = 0x866d;
export const MAP1_VERTEX_ATTRIB14_4_NV = 0x866e;
export const MAP1_VERTEX_ATTRIB15_4_NV = 0x866f;
export const MAP2_VERTEX_ATTRIB0_4_NV = 0x8670;
export const MAP2_VERTEX_ATTRIB1_4_NV = 0x8671;
export const MAP2_VERTEX_ATTRIB2_4_NV = 0x8672;
export const MAP2_VERTEX_ATTRIB3_4_NV = 0x8673;
export const MAP2_VERTEX_ATTRIB4_4_NV = 0x8674;
export const MAP2_VERTEX_ATTRIB5_4_NV = 0x8675;
export const MAP2_VERTEX_ATTRIB6_4_NV = 0x8676;
export const MAP2_VERTEX_ATTRIB7_4_NV = 0x8677;
export const MAP2_VERTEX_ATTRIB8_4_NV = 0x8678;
export const MAP2_VERTEX_ATTRIB9_4_NV = 0x8679;
export const MAP2_VERTEX_ATTRIB10_4_NV = 0x867a;
export const MAP2_VERTEX_ATTRIB11_4_NV = 0x867b;
export const MAP2_VERTEX_ATTRIB12_4_NV = 0x867c;
export const MAP2_VERTEX_ATTRIB13_4_NV = 0x867d;
export const MAP2_VERTEX_ATTRIB14_4_NV = 0x867e;
export const MAP2_VERTEX_ATTRIB15_4_NV = 0x867f;

/// Commands

export const def_glAreProgramsResidentNV = {
  parameters: ["i32", "buffer", "buffer"],
  result: "u8",
} as const;

let fn_glAreProgramsResidentNV!: Deno.UnsafeFnPointer<
  typeof def_glAreProgramsResidentNV
>;

export function AreProgramsResidentNV(
  n: GLsizei,
  programs: Buffer,
  residences: Buffer,
): GLboolean {
  return fn_glAreProgramsResidentNV.call(
    n,
    bufferToFFI(programs),
    bufferToFFI(residences),
  );
}

export const def_glBindProgramNV = {
  parameters: ["u32", "u32"],
  result: "void",
} as const;

let fn_glBindProgramNV!: Deno.UnsafeFnPointer<typeof def_glBindProgramNV>;

export function BindProgramNV(
  target: GLenum,
  id: GLuint,
): void {
  fn_glBindProgramNV.call(
    target,
    id,
  );
}

export const def_glDeleteProgramsNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDeleteProgramsNV!: Deno.UnsafeFnPointer<typeof def_glDeleteProgramsNV>;

export function DeleteProgramsNV(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glDeleteProgramsNV.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glExecuteProgramNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glExecuteProgramNV!: Deno.UnsafeFnPointer<typeof def_glExecuteProgramNV>;

export function ExecuteProgramNV(
  target: GLenum,
  id: GLuint,
  params: Buffer,
): void {
  fn_glExecuteProgramNV.call(
    target,
    id,
    bufferToFFI(params),
  );
}

export const def_glGenProgramsNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glGenProgramsNV!: Deno.UnsafeFnPointer<typeof def_glGenProgramsNV>;

export function GenProgramsNV(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glGenProgramsNV.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glGetProgramParameterdvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramParameterdvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramParameterdvNV
>;

export function GetProgramParameterdvNV(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramParameterdvNV.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramParameterfvNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramParameterfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramParameterfvNV
>;

export function GetProgramParameterfvNV(
  target: GLenum,
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramParameterfvNV.call(
    target,
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramivNV!: Deno.UnsafeFnPointer<typeof def_glGetProgramivNV>;

export function GetProgramivNV(
  id: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetProgramivNV.call(
    id,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetProgramStringNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetProgramStringNV!: Deno.UnsafeFnPointer<
  typeof def_glGetProgramStringNV
>;

export function GetProgramStringNV(
  id: GLuint,
  pname: GLenum,
  program: Buffer,
): void {
  fn_glGetProgramStringNV.call(
    id,
    pname,
    bufferToFFI(program),
  );
}

export const def_glGetTrackMatrixivNV = {
  parameters: ["u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetTrackMatrixivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetTrackMatrixivNV
>;

export function GetTrackMatrixivNV(
  target: GLenum,
  address: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetTrackMatrixivNV.call(
    target,
    address,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribdvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribdvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribdvNV
>;

export function GetVertexAttribdvNV(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribdvNV.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribfvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribfvNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribfvNV
>;

export function GetVertexAttribfvNV(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribfvNV.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribivNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribivNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribivNV
>;

export function GetVertexAttribivNV(
  index: GLuint,
  pname: GLenum,
  params: Buffer,
): void {
  fn_glGetVertexAttribivNV.call(
    index,
    pname,
    bufferToFFI(params),
  );
}

export const def_glGetVertexAttribPointervNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glGetVertexAttribPointervNV!: Deno.UnsafeFnPointer<
  typeof def_glGetVertexAttribPointervNV
>;

export function GetVertexAttribPointervNV(
  index: GLuint,
  pname: GLenum,
  pointer: Buffer,
): void {
  fn_glGetVertexAttribPointervNV.call(
    index,
    pname,
    bufferToFFI(pointer),
  );
}

export const def_glIsProgramNV = {
  parameters: ["u32"],
  result: "u8",
} as const;

let fn_glIsProgramNV!: Deno.UnsafeFnPointer<typeof def_glIsProgramNV>;

export function IsProgramNV(
  id: GLuint,
): GLboolean {
  return fn_glIsProgramNV.call(
    id,
  );
}

export const def_glLoadProgramNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glLoadProgramNV!: Deno.UnsafeFnPointer<typeof def_glLoadProgramNV>;

export function LoadProgramNV(
  target: GLenum,
  id: GLuint,
  len: GLsizei,
  program: Buffer,
): void {
  fn_glLoadProgramNV.call(
    target,
    id,
    len,
    bufferToFFI(program),
  );
}

export const def_glProgramParameter4dNV = {
  parameters: ["u32", "u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glProgramParameter4dNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameter4dNV
>;

export function ProgramParameter4dNV(
  target: GLenum,
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glProgramParameter4dNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramParameter4dvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramParameter4dvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameter4dvNV
>;

export function ProgramParameter4dvNV(
  target: GLenum,
  index: GLuint,
  v: Buffer,
): void {
  fn_glProgramParameter4dvNV.call(
    target,
    index,
    bufferToFFI(v),
  );
}

export const def_glProgramParameter4fNV = {
  parameters: ["u32", "u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glProgramParameter4fNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameter4fNV
>;

export function ProgramParameter4fNV(
  target: GLenum,
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glProgramParameter4fNV.call(
    target,
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glProgramParameter4fvNV = {
  parameters: ["u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glProgramParameter4fvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameter4fvNV
>;

export function ProgramParameter4fvNV(
  target: GLenum,
  index: GLuint,
  v: Buffer,
): void {
  fn_glProgramParameter4fvNV.call(
    target,
    index,
    bufferToFFI(v),
  );
}

export const def_glProgramParameters4dvNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramParameters4dvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameters4dvNV
>;

export function ProgramParameters4dvNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glProgramParameters4dvNV.call(
    target,
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glProgramParameters4fvNV = {
  parameters: ["u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glProgramParameters4fvNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramParameters4fvNV
>;

export function ProgramParameters4fvNV(
  target: GLenum,
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glProgramParameters4fvNV.call(
    target,
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glRequestResidentProgramsNV = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glRequestResidentProgramsNV!: Deno.UnsafeFnPointer<
  typeof def_glRequestResidentProgramsNV
>;

export function RequestResidentProgramsNV(
  n: GLsizei,
  programs: Buffer,
): void {
  fn_glRequestResidentProgramsNV.call(
    n,
    bufferToFFI(programs),
  );
}

export const def_glTrackMatrixNV = {
  parameters: ["u32", "u32", "u32", "u32"],
  result: "void",
} as const;

let fn_glTrackMatrixNV!: Deno.UnsafeFnPointer<typeof def_glTrackMatrixNV>;

export function TrackMatrixNV(
  target: GLenum,
  address: GLuint,
  matrix: GLenum,
  transform: GLenum,
): void {
  fn_glTrackMatrixNV.call(
    target,
    address,
    matrix,
    transform,
  );
}

export const def_glVertexAttribPointerNV = {
  parameters: ["u32", "i32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribPointerNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribPointerNV
>;

export function VertexAttribPointerNV(
  index: GLuint,
  fsize: GLint,
  type: GLenum,
  stride: GLsizei,
  pointer: Buffer,
): void {
  fn_glVertexAttribPointerNV.call(
    index,
    fsize,
    type,
    stride,
    bufferToFFI(pointer),
  );
}

export const def_glVertexAttrib1dNV = {
  parameters: ["u32", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib1dNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1dNV>;

export function VertexAttrib1dNV(
  index: GLuint,
  x: GLdouble,
): void {
  fn_glVertexAttrib1dNV.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1dvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1dvNV
>;

export function VertexAttrib1dvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1dvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib1fNV = {
  parameters: ["u32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib1fNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1fNV>;

export function VertexAttrib1fNV(
  index: GLuint,
  x: GLfloat,
): void {
  fn_glVertexAttrib1fNV.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1fvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1fvNV
>;

export function VertexAttrib1fvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1fvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib1sNV = {
  parameters: ["u32", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib1sNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib1sNV>;

export function VertexAttrib1sNV(
  index: GLuint,
  x: GLshort,
): void {
  fn_glVertexAttrib1sNV.call(
    index,
    x,
  );
}

export const def_glVertexAttrib1svNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib1svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib1svNV
>;

export function VertexAttrib1svNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib1svNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2dNV = {
  parameters: ["u32", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib2dNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2dNV>;

export function VertexAttrib2dNV(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
): void {
  fn_glVertexAttrib2dNV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2dvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2dvNV
>;

export function VertexAttrib2dvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2dvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2fNV = {
  parameters: ["u32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib2fNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2fNV>;

export function VertexAttrib2fNV(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
): void {
  fn_glVertexAttrib2fNV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2fvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2fvNV
>;

export function VertexAttrib2fvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2fvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib2sNV = {
  parameters: ["u32", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib2sNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib2sNV>;

export function VertexAttrib2sNV(
  index: GLuint,
  x: GLshort,
  y: GLshort,
): void {
  fn_glVertexAttrib2sNV.call(
    index,
    x,
    y,
  );
}

export const def_glVertexAttrib2svNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib2svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib2svNV
>;

export function VertexAttrib2svNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib2svNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3dNV = {
  parameters: ["u32", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib3dNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3dNV>;

export function VertexAttrib3dNV(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
): void {
  fn_glVertexAttrib3dNV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3dvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3dvNV
>;

export function VertexAttrib3dvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3dvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3fNV = {
  parameters: ["u32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib3fNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3fNV>;

export function VertexAttrib3fNV(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
): void {
  fn_glVertexAttrib3fNV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3fvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3fvNV
>;

export function VertexAttrib3fvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3fvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib3sNV = {
  parameters: ["u32", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib3sNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib3sNV>;

export function VertexAttrib3sNV(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
): void {
  fn_glVertexAttrib3sNV.call(
    index,
    x,
    y,
    z,
  );
}

export const def_glVertexAttrib3svNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib3svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib3svNV
>;

export function VertexAttrib3svNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib3svNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4dNV = {
  parameters: ["u32", "f64", "f64", "f64", "f64"],
  result: "void",
} as const;

let fn_glVertexAttrib4dNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4dNV>;

export function VertexAttrib4dNV(
  index: GLuint,
  x: GLdouble,
  y: GLdouble,
  z: GLdouble,
  w: GLdouble,
): void {
  fn_glVertexAttrib4dNV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4dvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4dvNV
>;

export function VertexAttrib4dvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4dvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4fNV = {
  parameters: ["u32", "f32", "f32", "f32", "f32"],
  result: "void",
} as const;

let fn_glVertexAttrib4fNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4fNV>;

export function VertexAttrib4fNV(
  index: GLuint,
  x: GLfloat,
  y: GLfloat,
  z: GLfloat,
  w: GLfloat,
): void {
  fn_glVertexAttrib4fNV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4fvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4fvNV
>;

export function VertexAttrib4fvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4fvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4sNV = {
  parameters: ["u32", "i16", "i16", "i16", "i16"],
  result: "void",
} as const;

let fn_glVertexAttrib4sNV!: Deno.UnsafeFnPointer<typeof def_glVertexAttrib4sNV>;

export function VertexAttrib4sNV(
  index: GLuint,
  x: GLshort,
  y: GLshort,
  z: GLshort,
  w: GLshort,
): void {
  fn_glVertexAttrib4sNV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4svNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4svNV
>;

export function VertexAttrib4svNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4svNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttrib4ubNV = {
  parameters: ["u32", "u8", "u8", "u8", "u8"],
  result: "void",
} as const;

let fn_glVertexAttrib4ubNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4ubNV
>;

export function VertexAttrib4ubNV(
  index: GLuint,
  x: GLubyte,
  y: GLubyte,
  z: GLubyte,
  w: GLubyte,
): void {
  fn_glVertexAttrib4ubNV.call(
    index,
    x,
    y,
    z,
    w,
  );
}

export const def_glVertexAttrib4ubvNV = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttrib4ubvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttrib4ubvNV
>;

export function VertexAttrib4ubvNV(
  index: GLuint,
  v: Buffer,
): void {
  fn_glVertexAttrib4ubvNV.call(
    index,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs1dvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs1dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs1dvNV
>;

export function VertexAttribs1dvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs1dvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs1fvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs1fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs1fvNV
>;

export function VertexAttribs1fvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs1fvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs1svNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs1svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs1svNV
>;

export function VertexAttribs1svNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs1svNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs2dvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs2dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs2dvNV
>;

export function VertexAttribs2dvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs2dvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs2fvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs2fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs2fvNV
>;

export function VertexAttribs2fvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs2fvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs2svNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs2svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs2svNV
>;

export function VertexAttribs2svNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs2svNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs3dvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs3dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs3dvNV
>;

export function VertexAttribs3dvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs3dvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs3fvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs3fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs3fvNV
>;

export function VertexAttribs3fvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs3fvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs3svNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs3svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs3svNV
>;

export function VertexAttribs3svNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs3svNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs4dvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs4dvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs4dvNV
>;

export function VertexAttribs4dvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs4dvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs4fvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs4fvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs4fvNV
>;

export function VertexAttribs4fvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs4fvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs4svNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs4svNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs4svNV
>;

export function VertexAttribs4svNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs4svNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

export const def_glVertexAttribs4ubvNV = {
  parameters: ["u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glVertexAttribs4ubvNV!: Deno.UnsafeFnPointer<
  typeof def_glVertexAttribs4ubvNV
>;

export function VertexAttribs4ubvNV(
  index: GLuint,
  count: GLsizei,
  v: Buffer,
): void {
  fn_glVertexAttribs4ubvNV.call(
    index,
    count,
    bufferToFFI(v),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glAreProgramsResidentNV = new Deno.UnsafeFnPointer(
    proc("glAreProgramsResidentNV"),
    def_glAreProgramsResidentNV,
  );
  fn_glBindProgramNV = new Deno.UnsafeFnPointer(
    proc("glBindProgramNV"),
    def_glBindProgramNV,
  );
  fn_glDeleteProgramsNV = new Deno.UnsafeFnPointer(
    proc("glDeleteProgramsNV"),
    def_glDeleteProgramsNV,
  );
  fn_glExecuteProgramNV = new Deno.UnsafeFnPointer(
    proc("glExecuteProgramNV"),
    def_glExecuteProgramNV,
  );
  fn_glGenProgramsNV = new Deno.UnsafeFnPointer(
    proc("glGenProgramsNV"),
    def_glGenProgramsNV,
  );
  fn_glGetProgramParameterdvNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramParameterdvNV"),
    def_glGetProgramParameterdvNV,
  );
  fn_glGetProgramParameterfvNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramParameterfvNV"),
    def_glGetProgramParameterfvNV,
  );
  fn_glGetProgramivNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramivNV"),
    def_glGetProgramivNV,
  );
  fn_glGetProgramStringNV = new Deno.UnsafeFnPointer(
    proc("glGetProgramStringNV"),
    def_glGetProgramStringNV,
  );
  fn_glGetTrackMatrixivNV = new Deno.UnsafeFnPointer(
    proc("glGetTrackMatrixivNV"),
    def_glGetTrackMatrixivNV,
  );
  fn_glGetVertexAttribdvNV = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribdvNV"),
    def_glGetVertexAttribdvNV,
  );
  fn_glGetVertexAttribfvNV = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribfvNV"),
    def_glGetVertexAttribfvNV,
  );
  fn_glGetVertexAttribivNV = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribivNV"),
    def_glGetVertexAttribivNV,
  );
  fn_glGetVertexAttribPointervNV = new Deno.UnsafeFnPointer(
    proc("glGetVertexAttribPointervNV"),
    def_glGetVertexAttribPointervNV,
  );
  fn_glIsProgramNV = new Deno.UnsafeFnPointer(
    proc("glIsProgramNV"),
    def_glIsProgramNV,
  );
  fn_glLoadProgramNV = new Deno.UnsafeFnPointer(
    proc("glLoadProgramNV"),
    def_glLoadProgramNV,
  );
  fn_glProgramParameter4dNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameter4dNV"),
    def_glProgramParameter4dNV,
  );
  fn_glProgramParameter4dvNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameter4dvNV"),
    def_glProgramParameter4dvNV,
  );
  fn_glProgramParameter4fNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameter4fNV"),
    def_glProgramParameter4fNV,
  );
  fn_glProgramParameter4fvNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameter4fvNV"),
    def_glProgramParameter4fvNV,
  );
  fn_glProgramParameters4dvNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameters4dvNV"),
    def_glProgramParameters4dvNV,
  );
  fn_glProgramParameters4fvNV = new Deno.UnsafeFnPointer(
    proc("glProgramParameters4fvNV"),
    def_glProgramParameters4fvNV,
  );
  fn_glRequestResidentProgramsNV = new Deno.UnsafeFnPointer(
    proc("glRequestResidentProgramsNV"),
    def_glRequestResidentProgramsNV,
  );
  fn_glTrackMatrixNV = new Deno.UnsafeFnPointer(
    proc("glTrackMatrixNV"),
    def_glTrackMatrixNV,
  );
  fn_glVertexAttribPointerNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribPointerNV"),
    def_glVertexAttribPointerNV,
  );
  fn_glVertexAttrib1dNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dNV"),
    def_glVertexAttrib1dNV,
  );
  fn_glVertexAttrib1dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1dvNV"),
    def_glVertexAttrib1dvNV,
  );
  fn_glVertexAttrib1fNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fNV"),
    def_glVertexAttrib1fNV,
  );
  fn_glVertexAttrib1fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1fvNV"),
    def_glVertexAttrib1fvNV,
  );
  fn_glVertexAttrib1sNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1sNV"),
    def_glVertexAttrib1sNV,
  );
  fn_glVertexAttrib1svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib1svNV"),
    def_glVertexAttrib1svNV,
  );
  fn_glVertexAttrib2dNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dNV"),
    def_glVertexAttrib2dNV,
  );
  fn_glVertexAttrib2dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2dvNV"),
    def_glVertexAttrib2dvNV,
  );
  fn_glVertexAttrib2fNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fNV"),
    def_glVertexAttrib2fNV,
  );
  fn_glVertexAttrib2fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2fvNV"),
    def_glVertexAttrib2fvNV,
  );
  fn_glVertexAttrib2sNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2sNV"),
    def_glVertexAttrib2sNV,
  );
  fn_glVertexAttrib2svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib2svNV"),
    def_glVertexAttrib2svNV,
  );
  fn_glVertexAttrib3dNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dNV"),
    def_glVertexAttrib3dNV,
  );
  fn_glVertexAttrib3dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3dvNV"),
    def_glVertexAttrib3dvNV,
  );
  fn_glVertexAttrib3fNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fNV"),
    def_glVertexAttrib3fNV,
  );
  fn_glVertexAttrib3fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3fvNV"),
    def_glVertexAttrib3fvNV,
  );
  fn_glVertexAttrib3sNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3sNV"),
    def_glVertexAttrib3sNV,
  );
  fn_glVertexAttrib3svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib3svNV"),
    def_glVertexAttrib3svNV,
  );
  fn_glVertexAttrib4dNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dNV"),
    def_glVertexAttrib4dNV,
  );
  fn_glVertexAttrib4dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4dvNV"),
    def_glVertexAttrib4dvNV,
  );
  fn_glVertexAttrib4fNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fNV"),
    def_glVertexAttrib4fNV,
  );
  fn_glVertexAttrib4fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4fvNV"),
    def_glVertexAttrib4fvNV,
  );
  fn_glVertexAttrib4sNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4sNV"),
    def_glVertexAttrib4sNV,
  );
  fn_glVertexAttrib4svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4svNV"),
    def_glVertexAttrib4svNV,
  );
  fn_glVertexAttrib4ubNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ubNV"),
    def_glVertexAttrib4ubNV,
  );
  fn_glVertexAttrib4ubvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttrib4ubvNV"),
    def_glVertexAttrib4ubvNV,
  );
  fn_glVertexAttribs1dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs1dvNV"),
    def_glVertexAttribs1dvNV,
  );
  fn_glVertexAttribs1fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs1fvNV"),
    def_glVertexAttribs1fvNV,
  );
  fn_glVertexAttribs1svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs1svNV"),
    def_glVertexAttribs1svNV,
  );
  fn_glVertexAttribs2dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs2dvNV"),
    def_glVertexAttribs2dvNV,
  );
  fn_glVertexAttribs2fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs2fvNV"),
    def_glVertexAttribs2fvNV,
  );
  fn_glVertexAttribs2svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs2svNV"),
    def_glVertexAttribs2svNV,
  );
  fn_glVertexAttribs3dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs3dvNV"),
    def_glVertexAttribs3dvNV,
  );
  fn_glVertexAttribs3fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs3fvNV"),
    def_glVertexAttribs3fvNV,
  );
  fn_glVertexAttribs3svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs3svNV"),
    def_glVertexAttribs3svNV,
  );
  fn_glVertexAttribs4dvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs4dvNV"),
    def_glVertexAttribs4dvNV,
  );
  fn_glVertexAttribs4fvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs4fvNV"),
    def_glVertexAttribs4fvNV,
  );
  fn_glVertexAttribs4svNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs4svNV"),
    def_glVertexAttribs4svNV,
  );
  fn_glVertexAttribs4ubvNV = new Deno.UnsafeFnPointer(
    proc("glVertexAttribs4ubvNV"),
    def_glVertexAttribs4ubvNV,
  );
}
