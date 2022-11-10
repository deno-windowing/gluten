// https://registry.khronos.org/webgl/specs/latest/1.0/

import type { DwmWindow } from "./deps.ts";
import {
  createContext,
  getProcAddress,
  GlContextProfile,
  init,
  swapBuffers,
} from "../../mod.ts";
import * as gl from "../api/gles2.ts";
import { glObjectName, _uniformLocation } from "./object.ts";
import { cstr } from "./utils.ts";

init();

export interface WebGLContextAttributes {
  alpha?: boolean;
  depth?: boolean;
  stencil?: boolean;
  antialias?: boolean;
  premultipliedAlpha?: boolean;
  preserveDrawingBuffer?: boolean;
  powerPreference?: "default" | "high-performance" | "low-power";
  failIfMajorPerformanceCaveat?: boolean;
  desynchronized?: boolean;
}

/**
 * Provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of a dwm window.
 */
export class WebGLRenderingContext {
  #context;
  #attributes: WebGLContextAttributes | null = null;

  get context() {
    return this.#context;
  }

  constructor(public window: DwmWindow, attributes?: WebGLContextAttributes) {
    this.#context = createContext(window.nativeHandle, {
      major: 2,
      minor: 0,
      profile: GlContextProfile.ES,
      vsync: true,
      samples: 4,
    });
    gl.loadGL(getProcAddress);
    addEventListener("redrawRequested", (event) => {
      if (event.window.id === window.id) {
        swapBuffers(this.#context);
      }
    });
    this.#attributes = attributes ?? null;
  }

  get drawingBufferHeight() {
    return this.window.size.height;
  }

  get drawingBufferWidth() {
    return this.window.size.width;
  }

  /// 5.14.2 Getting information about the context

  getContextAttributes() {
    return this.#attributes;
  }

  /// 5.14.3 Setting and getting state

  activeTexture(texture: number) {
    gl.ActiveTexture(texture);
  }

  blendColor(r: number, g: number, b: number, a: number) {
    gl.BlendColor(r, g, b, a);
  }

  blendEquation(mode: number) {
    gl.BlendEquation(mode);
  }

  blendEquationSeparate(modeRGB: number, modeAlpha: number) {
    gl.BlendEquationSeparate(modeRGB, modeAlpha);
  }

  blendFunc(sfactor: number, dfactor: number) {
    gl.BlendFunc(sfactor, dfactor);
  }

  blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number) {
    gl.BlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  }

  /**
   * Specifies the color values used when clearing color buffers.
   */
  clearColor(r: number, g: number, b: number, a: number) {
    gl.ClearColor(r, g, b, a);
  }

  clearDepth(depth: number) {
    gl.ClearDepthf(depth);
  }

  clearStencil(s: number) {
    gl.ClearStencil(s);
  }

  colorMask(r: boolean, g: boolean, b: boolean, a: boolean) {
    gl.ColorMask(Number(r), Number(g), Number(b), Number(a));
  }

  cullFace(mode: number) {
    gl.CullFace(mode);
  }

  depthFunc(func: number) {
    gl.DepthFunc(func);
  }

  depthMask(flag: boolean) {
    gl.DepthMask(Number(flag));
  }

  depthRange(zNear: number, zFar: number) {
    gl.DepthRangef(zNear, zFar);
  }

  disable(cap: number) {
    gl.Disable(cap);
  }

  /**
   * Enables specific WebGL capabilities for this context.
   */
  enable(cap: number) {
    gl.Enable(cap);
  }

  frontFace(mode: number) {
    gl.FrontFace(mode);
  }

  getParameter(pname: number) {
    switch (pname) {
      case this.VERSION:
        return `WebGL 1.0 (OpenGL ES 2.0 Deno ${Deno.version.deno})`;
      
      case this.VENDOR:
        return "Deno";

      case this.RENDERER:
        return "DenoGL";

      case gl.SCISSOR_BOX:
      case gl.VIEWPORT: {
        const box = new Int32Array(4);
        gl.GetIntegerv(pname, box);
        return box;
      }

      case gl.MAX_TEXTURE_IMAGE_UNITS:
      case gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
      case gl.MAX_TEXTURE_SIZE:
      case gl.MAX_CUBE_MAP_TEXTURE_SIZE:
      case gl.ALPHA_BITS:
      case gl.BLUE_BITS:
      case gl.DEPTH_BITS:
      case gl.GREEN_BITS:
      case gl.MAX_FRAGMENT_UNIFORM_VECTORS:
      case gl.MAX_RENDERBUFFER_SIZE:
      case gl.MAX_VARYING_VECTORS:
      case gl.MAX_VERTEX_ATTRIBS:
      case gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
      case gl.MAX_VERTEX_UNIFORM_VECTORS:
      case gl.PACK_ALIGNMENT:
      case gl.RED_BITS:
      case gl.SAMPLE_BUFFERS:
      case gl.SAMPLES:
      case gl.STENCIL_BACK_REF:
      case gl.STENCIL_BITS:
      case gl.STENCIL_CLEAR_VALUE:
      case gl.STENCIL_REF:
      case gl.SUBPIXEL_BITS:
      case gl.UNPACK_ALIGNMENT: {
        const value = new Int32Array(1);
        gl.GetIntegerv(pname, value);
        return value[0];
      }

      default:
        throw new Error("invalid pname: " + pname.toString(16));
    }
  }

  getError() {
    return gl.GetError();
  }

  hint(target: number, mode: number) {
    gl.Hint(target, mode);
  }

  isEnabled(cap: number) {
    return gl.IsEnabled(cap) === gl.TRUE;
  }

  lineWidth(width: number) {
    gl.LineWidth(width);
  }

  pixelStorei(pname: number, param: number) {
    console.log("STUB: pixelStorei:", pname, param);
    gl.PixelStorei(pname, param);
  }

  polygonOffset(factor: number, units: number) {
    gl.PolygonOffset(factor, units);
  }

  sampleCoverage(value: number, invert: boolean) {
    gl.SampleCoverage(value, Number(invert));
  }

  stencilFunc(func: number, ref: number, mask: number) {
    gl.StencilFunc(func, ref, mask);
  }

  stencilFuncSeparate(face: number, func: number, ref: number, mask: number) {
    gl.StencilFuncSeparate(face, func, ref, mask);
  }

  stencilMask(mask: number) {
    gl.StencilMask(mask);
  }

  stencilMaskSeparate(face: number, mask: number) {
    gl.StencilMaskSeparate(face, mask);
  }

  stencilOp(fail: number, zfail: number, zpass: number) {
    gl.StencilOp(fail, zfail, zpass);
  }

  stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number) {
    gl.StencilOpSeparate(face, fail, zfail, zpass);
  }

  /// 5.14.4 Viewing and clipping

  scissor(x: number, y: number, width: number, height: number) {
    gl.Scissor(x, y, width, height);
  }

  /**
   * Sets the viewport, which specifies the affine transformation of x and y from normalized device coordinates to window coordinates.
   */
  viewport(x: number, y: number, width: number, height: number) {
    gl.Viewport(x, y, width, height);
  }

  /// 5.14.5 Buffer objects

  /**
   * Binds a given {@link WebGLBuffer} to a target.
   */
  bindBuffer(target: number, buffer: WebGLBuffer | null) {
    switch (target) {
      case gl.ARRAY_BUFFER:
      case gl.ELEMENT_ARRAY_BUFFER:
        gl.BindBuffer(target, buffer?.[glObjectName] ?? 0);
        break;
      default:
        throw new Error("invalid target");
    }
  }

  #bufferData1(target: number, size: number, usage: number) {
    gl.BufferData(target, size, new Uint8Array(size), usage);
  }

  #bufferData2(target: number, data: ArrayBufferView, usage: number) {
    gl.BufferData(target, data.byteLength, new Uint8Array(data.buffer), usage);
  }

  /**
   * Initializes and creates the buffer object's data store.
   */
  bufferData(target: number, data: ArrayBufferView | number, usage: number) {
    if (typeof data === "number") {
      this.#bufferData1(target, data, usage);
    } else {
      this.#bufferData2(target, data, usage);
    }
  }

  /**
   * Creates and initializes a {@link WebGLBuffer} storing data such as vertices or colors.
   */
  createBuffer() {
    const buffer = new Uint32Array(1);
    gl.GenBuffers(1, buffer);
    return new WebGLBuffer(buffer[0]);
  }

  deleteBuffer(buffer: WebGLBuffer | null) {
    if (buffer) {
      gl.DeleteBuffers(1, new Uint32Array([buffer[glObjectName]]));
    }
  }

  /// 5.14.6 Framebuffer objects

  bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null) {
    gl.BindFramebuffer(target, framebuffer?.[glObjectName] ?? 0);
  }

  createFramebuffer() {
    const framebuffer = new Uint32Array(1);
    gl.GenFramebuffers(1, framebuffer);
    return new WebGLFramebuffer(framebuffer[0]);
  }

  deleteFramebuffer(framebuffer: WebGLFramebuffer | null) {
    if (framebuffer) {
      gl.DeleteFramebuffers(1, new Uint32Array([framebuffer[glObjectName]]));
    }
  }

  framebufferRenderbuffer(
    target: number,
    attachment: number,
    renderbuffertarget: number,
    renderbuffer: WebGLRenderbuffer | null,
  ) {
    gl.FramebufferRenderbuffer(
      target,
      attachment,
      renderbuffertarget,
      renderbuffer?.[glObjectName] ?? 0,
    );
  }

  framebufferTexture2D(
    target: number,
    attachment: number,
    textarget: number,
    texture: WebGLTexture | null,
    level: number,
  ) {
    gl.FramebufferTexture2D(
      target,
      attachment,
      textarget,
      texture?.[glObjectName] ?? 0,
      level,
    );
  }

  /// 5.14.7 Renderbuffer objects

  bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer | null) {
    gl.BindRenderbuffer(target, renderbuffer?.[glObjectName] ?? 0);
  }

  createRenderbuffer() {
    const renderbuffer = new Uint32Array(1);
    gl.GenRenderbuffers(1, renderbuffer);
    return new WebGLRenderbuffer(renderbuffer[0]);
  }

  renderbufferStorage(
    target: number,
    internalformat: number,
    width: number,
    height: number,
  ) {
    gl.RenderbufferStorage(target, internalformat, width, height);
  }

  /// 5.14.8 Texture objects

  bindTexture(target: number, texture: WebGLTexture | null) {
    gl.BindTexture(target, texture?.[glObjectName] ?? 0);
  }

  createTexture() {
    const texture = new Uint32Array(1);
    gl.GenTextures(1, texture);
    return new WebGLTexture(texture[0]);
  }

  texParameteri(target: number, pname: number, param: number) {
    gl.TexParameteri(target, pname, param);
  }

  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    pixels: ArrayBufferView | null,
  ) {
    console.log("texImage2D", target,
    level,
    internalformat,
    width,
    height,
    border,
    format,
    type,
    pixels?.buffer ? Deno.UnsafePointer.of(pixels.buffer) : 0);
    gl.TexImage2D(
      target,
      level,
      internalformat,
      width,
      height,
      border,
      format,
      type,
      pixels?.buffer ? Deno.UnsafePointer.of(pixels.buffer) : 0,
    );
  }

  /// 5.14.9 Programs and Shaders

  /**
   * Attaches either a fragment or vertex {@link WebGLShader} to a {@link WebGLProgram}.
   */
  attachShader(program: WebGLProgram, shader: WebGLShader) {
    gl.AttachShader(program[glObjectName], shader[glObjectName]);
  }

  /**
   *  Compiles a GLSL shader into binary data so that it can be used by a {@link WebGLProgram}.
   */
  compileShader(shader: WebGLShader) {
    gl.CompileShader(shader[glObjectName]);
  }

  /**
   * Creates and initializes a {@link WebGLProgram} object.
   */
  createProgram() {
    const program = gl.CreateProgram();
    return new WebGLProgram(program);
  }

  /**
   * Creates a WebGLShader that can then be configured further using {@link WebGLRenderingContext.shaderSource()} and {@link WebGLRenderingContext.compileShader()}.
   */
  createShader(type: number) {
    const shader = gl.CreateShader(type);
    return new WebGLShader(shader);
  }

  deleteProgram(program: WebGLProgram | null) {
    if (program) {
      gl.DeleteProgram(program[glObjectName]);
    }
  }

  deleteShader(shader: WebGLShader | null) {
    if (shader) {
      gl.DeleteShader(shader[glObjectName]);
    }
  }

  getProgramParameter(program: WebGLProgram, pname: number) {
    switch (pname) {
      case gl.DELETE_STATUS:
      case gl.LINK_STATUS:
      case gl.VALIDATE_STATUS: {
        const status = new Uint32Array(1);
        gl.GetProgramiv(program[glObjectName], pname, status);
        return status[0] === gl.TRUE;
      }

      case gl.ATTACHED_SHADERS:
      case gl.ACTIVE_ATTRIBUTES:
      case gl.ACTIVE_UNIFORMS: {
        const count = new Int32Array(1);
        gl.GetProgramiv(program[glObjectName], pname, count);
        return count[0];
      }
    }
  }

  getProgramInfoLog(program: WebGLProgram) {
    const length = new Uint32Array(1);
    gl.GetProgramInfoLog(
      program[glObjectName],
      0,
      length,
      null as unknown as Uint8Array,
    );
    const buf = new Uint8Array(length[0]);
    gl.GetProgramInfoLog(
      program[glObjectName],
      buf.byteLength,
      length,
      buf,
    );
    return new TextDecoder().decode(buf);
  }

  /**
   * Returns information about the given shader.
   */
  getShaderParameter(shader: WebGLShader, pname: number) {
    switch (pname) {
      case gl.DELETE_STATUS:
      case gl.COMPILE_STATUS: {
        const status = new Uint32Array(1);
        gl.GetShaderiv(shader[glObjectName], pname, status);
        return status[0] === gl.TRUE;
      }

      case gl.SHADER_TYPE: {
        const status = new Uint32Array(1);
        gl.GetShaderiv(shader[glObjectName], pname, status);
        return status[0];
      }

      default:
        throw new Error("invalid pname");
    }
  }

  /**
   * Returns the information log for a shader object.
   */
  getShaderInfoLog(shader: WebGLShader) {
    const length = new Uint32Array(1);
    gl.GetShaderInfoLog(
      shader[glObjectName],
      0,
      length,
      null as unknown as Uint8Array,
    );
    const buf = new Uint8Array(length[0]);
    gl.GetShaderInfoLog(
      shader[glObjectName],
      buf.byteLength,
      length,
      buf,
    );
    return new TextDecoder().decode(buf);
  }

  /**
   * Links a given {@link WebGLProgram}, completing the process of preparing the GPU code for the program's fragment and vertex shaders.
   */
  linkProgram(program: WebGLProgram) {
    gl.LinkProgram(program[glObjectName]);
  }

  /**
   * Sets the source code of a {@link WebGLShader}.
   */
  shaderSource(shader: WebGLShader, source: string) {
    const buf = new TextEncoder().encode(source);
    gl.ShaderSource(
      shader[glObjectName],
      1,
      new Uint8Array(
        new BigUint64Array([BigInt(Deno.UnsafePointer.of(buf))]).buffer,
      ),
      new Uint32Array([buf.byteLength]),
    );
  }

  /**
   * Sets the specified {@link WebGLProgram} as part of the current rendering state.
   */
  useProgram(program: WebGLProgram | null) {
    gl.UseProgram(program?.[glObjectName] ?? 0);
  }

  /// 5.14.10 Uniforms and attributes

  disableVertexAttribArray(index: number) {
    gl.DisableVertexAttribArray(index);
  }

  /**
   * Turns on the generic vertex attribute array at the specified index into the list of attribute arrays.
   */
  enableVertexAttribArray(index: number) {
    gl.EnableVertexAttribArray(index);
  }

  getActiveAttrib(program: WebGLProgram, index: number) {
    const name = new Uint8Array(256);
    const length = new Uint32Array(1);
    const size = new Uint32Array(1);
    const type = new Uint32Array(1);
    gl.GetActiveAttrib(
      program[glObjectName],
      index,
      name.byteLength,
      length,
      size,
      type,
      name,
    );
    return {
      name: new TextDecoder().decode(name.subarray(0, length[0])),
      size: size[0],
      type: type[0],
    };
  }

  getActiveUniform(program: WebGLProgram, index: number) {
    const name = new Uint8Array(256);
    const length = new Uint32Array(1);
    const size = new Uint32Array(1);
    const type = new Uint32Array(1);
    gl.GetActiveUniform(
      program[glObjectName],
      index,
      name.byteLength,
      length,
      size,
      type,
      name,
    );
    return {
      name: new TextDecoder().decode(name.subarray(0, length[0])),
      size: size[0],
      type: type[0],
    };
  }

  /**
   * Returns the location of an attribute variable in a given {@link WebGLProgram}.
   */
  getAttribLocation(program: WebGLProgram, name: string) {
    return gl.GetAttribLocation(program[glObjectName], cstr(name));
  }

  getUniformLocation(program: WebGLProgram, name: string) {
    const location = gl.GetUniformLocation(program[glObjectName], cstr(name));
    return location < 0 ? null : new WebGLUniformLocation(location);
  }

  /**
   * Specify constant values for generic vertex attributes.
   */
  vertexAttribPointer(
    index: number,
    size: number,
    type: number,
    normalized: boolean,
    stride: number,
    offset: number,
  ) {
    gl.VertexAttribPointer(
      index,
      size,
      type,
      Number(normalized),
      stride,
      offset,
    );
  }

  /// 5.14.11 Draw Operations

  /**
   * Clears buffers to preset values.
   */
  clear(mask: number) {
    gl.Clear(mask);
  }

  /**
   * Renders primitives from array data.
   */
  drawArrays(mode: number, first: number, count: number) {
    gl.DrawArrays(mode, first, count);
  }

  drawElements(mode: number, count: number, type: number, offset: number) {
    gl.DrawElements(mode, count, type, offset);
  }

  finish() {
    gl.Finish();
  }

  flush() {
    gl.Flush();
  }

  /// 5.14.12 Read Operations

  readPixels(
    x: number,
    y: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: ArrayBufferView,
  ) {
    gl.ReadPixels(
      x,
      y,
      width,
      height,
      format,
      type,
      Deno.UnsafePointer.of(pixels),
    );
  }

  /// 5.14.14 Detecting and enabling extensions

  getExtension(name: string) {
    console.log("STUB: getExtension:", name);
    return null;
  }

  // No section

  uniform1i(location: WebGLUniformLocation | null, v0: number) {
    gl.Uniform1i(location?.[_uniformLocation] ?? 0, Number(v0));
  }

  uniform1f(location: WebGLUniformLocation | null, x: number) {
    gl.Uniform1f(location?.[_uniformLocation] ?? 0, x);
  }

  uniform3f(location: WebGLUniformLocation | null, x: number, y: number, z: number) {
    gl.Uniform3f(location?.[_uniformLocation] ?? 0, x, y, z);
  }

  uniform4f(location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number) {
    gl.Uniform4f(location?.[_uniformLocation] ?? 0, x, y, z, w); 
  }

  uniform3fv(location: WebGLUniformLocation | null, v: Float32Array | number[]) {
    gl.Uniform3fv(location?.[_uniformLocation] ?? 0, v.length, new Float32Array(v));
  }

  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: boolean,
    value: Float32Array | number[],
  ) {
    gl.UniformMatrix3fv(
      location?.[_uniformLocation] ?? 0,
      value.length
        ? value.length / 9
        : 0,
      Number(transpose),
      new Float32Array(value),
    );
  }

  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: boolean,
    value: Float32Array | number[],
  ) {
    gl.UniformMatrix4fv(
      location?.[_uniformLocation] ?? 0,
      1,
      Number(transpose),
      new Float32Array(value),
    );
  }

  /* ClearBufferMask */
  DEPTH_BUFFER_BIT = 0x00000100;
  STENCIL_BUFFER_BIT = 0x00000400;
  COLOR_BUFFER_BIT = 0x00004000;

  /* BeginMode */
  POINTS = 0x0000;
  LINES = 0x0001;
  LINE_LOOP = 0x0002;
  LINE_STRIP = 0x0003;
  TRIANGLES = 0x0004;
  TRIANGLE_STRIP = 0x0005;
  TRIANGLE_FAN = 0x0006;

  /* AlphaFunction (not supported in ES20) */
  /*      NEVER */
  /*      LESS */
  /*      EQUAL */
  /*      LEQUAL */
  /*      GREATER */
  /*      NOTEQUAL */
  /*      GEQUAL */
  /*      ALWAYS */

  /* BlendingFactorDest */
  ZERO = 0;
  ONE = 1;
  SRC_COLOR = 0x0300;
  ONE_MINUS_SRC_COLOR = 0x0301;
  SRC_ALPHA = 0x0302;
  ONE_MINUS_SRC_ALPHA = 0x0303;
  DST_ALPHA = 0x0304;
  ONE_MINUS_DST_ALPHA = 0x0305;

  /* BlendingFactorSrc */
  /*      ZERO */
  /*      ONE */
  DST_COLOR = 0x0306;
  ONE_MINUS_DST_COLOR = 0x0307;
  SRC_ALPHA_SATURATE = 0x0308;
  /*      SRC_ALPHA */
  /*      ONE_MINUS_SRC_ALPHA */
  /*      DST_ALPHA */
  /*      ONE_MINUS_DST_ALPHA */

  /* BlendEquationSeparate */
  FUNC_ADD = 0x8006;
  BLEND_EQUATION = 0x8009;
  BLEND_EQUATION_RGB = 0x8009; /* same as BLEND_EQUATION */
  BLEND_EQUATION_ALPHA = 0x883D;

  /* BlendSubtract */
  FUNC_SUBTRACT = 0x800A;
  FUNC_REVERSE_SUBTRACT = 0x800B;

  /* Separate Blend Functions */
  BLEND_DST_RGB = 0x80C8;
  BLEND_SRC_RGB = 0x80C9;
  BLEND_DST_ALPHA = 0x80CA;
  BLEND_SRC_ALPHA = 0x80CB;
  CONSTANT_COLOR = 0x8001;
  ONE_MINUS_CONSTANT_COLOR = 0x8002;
  CONSTANT_ALPHA = 0x8003;
  ONE_MINUS_CONSTANT_ALPHA = 0x8004;
  BLEND_COLOR = 0x8005;

  /* Buffer Objects */
  ARRAY_BUFFER = 0x8892;
  ELEMENT_ARRAY_BUFFER = 0x8893;
  ARRAY_BUFFER_BINDING = 0x8894;
  ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;

  STREAM_DRAW = 0x88E0;
  STATIC_DRAW = 0x88E4;
  DYNAMIC_DRAW = 0x88E8;

  BUFFER_SIZE = 0x8764;
  BUFFER_USAGE = 0x8765;

  CURRENT_VERTEX_ATTRIB = 0x8626;

  /* CullFaceMode */
  FRONT = 0x0404;
  BACK = 0x0405;
  FRONT_AND_BACK = 0x0408;

  /* DepthFunction */
  /*      NEVER */
  /*      LESS */
  /*      EQUAL */
  /*      LEQUAL */
  /*      GREATER */
  /*      NOTEQUAL */
  /*      GEQUAL */
  /*      ALWAYS */

  /* EnableCap */
  /* TEXTURE_2D */
  CULL_FACE = 0x0B44;
  BLEND = 0x0BE2;
  DITHER = 0x0BD0;
  STENCIL_TEST = 0x0B90;
  DEPTH_TEST = 0x0B71;
  SCISSOR_TEST = 0x0C11;
  POLYGON_OFFSET_FILL = 0x8037;
  SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
  SAMPLE_COVERAGE = 0x80A0;

  /* ErrorCode */
  NO_ERROR = 0;
  INVALID_ENUM = 0x0500;
  INVALID_VALUE = 0x0501;
  INVALID_OPERATION = 0x0502;
  OUT_OF_MEMORY = 0x0505;

  /* FrontFaceDirection */
  CW = 0x0900;
  CCW = 0x0901;

  /* GetPName */
  LINE_WIDTH = 0x0B21;
  ALIASED_POINT_SIZE_RANGE = 0x846D;
  ALIASED_LINE_WIDTH_RANGE = 0x846E;
  CULL_FACE_MODE = 0x0B45;
  FRONT_FACE = 0x0B46;
  DEPTH_RANGE = 0x0B70;
  DEPTH_WRITEMASK = 0x0B72;
  DEPTH_CLEAR_VALUE = 0x0B73;
  DEPTH_FUNC = 0x0B74;
  STENCIL_CLEAR_VALUE = 0x0B91;
  STENCIL_FUNC = 0x0B92;
  STENCIL_FAIL = 0x0B94;
  STENCIL_PASS_DEPTH_FAIL = 0x0B95;
  STENCIL_PASS_DEPTH_PASS = 0x0B96;
  STENCIL_REF = 0x0B97;
  STENCIL_VALUE_MASK = 0x0B93;
  STENCIL_WRITEMASK = 0x0B98;
  STENCIL_BACK_FUNC = 0x8800;
  STENCIL_BACK_FAIL = 0x8801;
  STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
  STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
  STENCIL_BACK_REF = 0x8CA3;
  STENCIL_BACK_VALUE_MASK = 0x8CA4;
  STENCIL_BACK_WRITEMASK = 0x8CA5;
  VIEWPORT = 0x0BA2;
  SCISSOR_BOX = 0x0C10;
  /*      SCISSOR_TEST */
  COLOR_CLEAR_VALUE = 0x0C22;
  COLOR_WRITEMASK = 0x0C23;
  UNPACK_ALIGNMENT = 0x0CF5;
  PACK_ALIGNMENT = 0x0D05;
  MAX_TEXTURE_SIZE = 0x0D33;
  MAX_VIEWPORT_DIMS = 0x0D3A;
  SUBPIXEL_BITS = 0x0D50;
  RED_BITS = 0x0D52;
  GREEN_BITS = 0x0D53;
  BLUE_BITS = 0x0D54;
  ALPHA_BITS = 0x0D55;
  DEPTH_BITS = 0x0D56;
  STENCIL_BITS = 0x0D57;
  POLYGON_OFFSET_UNITS = 0x2A00;
  /*      POLYGON_OFFSET_FILL */
  POLYGON_OFFSET_FACTOR = 0x8038;
  TEXTURE_BINDING_2D = 0x8069;
  SAMPLE_BUFFERS = 0x80A8;
  SAMPLES = 0x80A9;
  SAMPLE_COVERAGE_VALUE = 0x80AA;
  SAMPLE_COVERAGE_INVERT = 0x80AB;

  /* GetTextureParameter */
  /*      TEXTURE_MAG_FILTER */
  /*      TEXTURE_MIN_FILTER */
  /*      TEXTURE_WRAP_S */
  /*      TEXTURE_WRAP_T */

  COMPRESSED_TEXTURE_FORMATS = 0x86A3;

  /* HintMode */
  DONT_CARE = 0x1100;
  FASTEST = 0x1101;
  NICEST = 0x1102;

  /* HintTarget */
  GENERATE_MIPMAP_HINT = 0x8192;

  /* DataType */
  BYTE = 0x1400;
  UNSIGNED_BYTE = 0x1401;
  SHORT = 0x1402;
  UNSIGNED_SHORT = 0x1403;
  INT = 0x1404;
  UNSIGNED_INT = 0x1405;
  FLOAT = 0x1406;

  /* PixelFormat */
  DEPTH_COMPONENT = 0x1902;
  ALPHA = 0x1906;
  RGB = 0x1907;
  RGBA = 0x1908;
  LUMINANCE = 0x1909;
  LUMINANCE_ALPHA = 0x190A;

  /* PixelType */
  /*      UNSIGNED_BYTE */
  UNSIGNED_SHORT_4_4_4_4 = 0x8033;
  UNSIGNED_SHORT_5_5_5_1 = 0x8034;
  UNSIGNED_SHORT_5_6_5 = 0x8363;

  /* Shaders */
  FRAGMENT_SHADER = 0x8B30;
  VERTEX_SHADER = 0x8B31;
  MAX_VERTEX_ATTRIBS = 0x8869;
  MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
  MAX_VARYING_VECTORS = 0x8DFC;
  MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
  MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
  MAX_TEXTURE_IMAGE_UNITS = 0x8872;
  MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
  SHADER_TYPE = 0x8B4F;
  DELETE_STATUS = 0x8B80;
  LINK_STATUS = 0x8B82;
  VALIDATE_STATUS = 0x8B83;
  ATTACHED_SHADERS = 0x8B85;
  ACTIVE_UNIFORMS = 0x8B86;
  ACTIVE_ATTRIBUTES = 0x8B89;
  SHADING_LANGUAGE_VERSION = 0x8B8C;
  CURRENT_PROGRAM = 0x8B8D;

  /* StencilFunction */
  NEVER = 0x0200;
  LESS = 0x0201;
  EQUAL = 0x0202;
  LEQUAL = 0x0203;
  GREATER = 0x0204;
  NOTEQUAL = 0x0205;
  GEQUAL = 0x0206;
  ALWAYS = 0x0207;

  /* StencilOp */
  /*      ZERO */
  KEEP = 0x1E00;
  REPLACE = 0x1E01;
  INCR = 0x1E02;
  DECR = 0x1E03;
  INVERT = 0x150A;
  INCR_WRAP = 0x8507;
  DECR_WRAP = 0x8508;

  /* StringName */
  VENDOR = 0x1F00;
  RENDERER = 0x1F01;
  VERSION = 0x1F02;

  /* TextureMagFilter */
  NEAREST = 0x2600;
  LINEAR = 0x2601;

  /* TextureMinFilter */
  /*      NEAREST */
  /*      LINEAR */
  NEAREST_MIPMAP_NEAREST = 0x2700;
  LINEAR_MIPMAP_NEAREST = 0x2701;
  NEAREST_MIPMAP_LINEAR = 0x2702;
  LINEAR_MIPMAP_LINEAR = 0x2703;

  /* TextureParameterName */
  TEXTURE_MAG_FILTER = 0x2800;
  TEXTURE_MIN_FILTER = 0x2801;
  TEXTURE_WRAP_S = 0x2802;
  TEXTURE_WRAP_T = 0x2803;

  /* TextureTarget */
  TEXTURE_2D = 0x0DE1;
  TEXTURE = 0x1702;

  TEXTURE_CUBE_MAP = 0x8513;
  TEXTURE_BINDING_CUBE_MAP = 0x8514;
  TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
  TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
  TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
  TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
  TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
  TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
  MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;

  /* TextureUnit */
  TEXTURE0 = 0x84C0;
  TEXTURE1 = 0x84C1;
  TEXTURE2 = 0x84C2;
  TEXTURE3 = 0x84C3;
  TEXTURE4 = 0x84C4;
  TEXTURE5 = 0x84C5;
  TEXTURE6 = 0x84C6;
  TEXTURE7 = 0x84C7;
  TEXTURE8 = 0x84C8;
  TEXTURE9 = 0x84C9;
  TEXTURE10 = 0x84CA;
  TEXTURE11 = 0x84CB;
  TEXTURE12 = 0x84CC;
  TEXTURE13 = 0x84CD;
  TEXTURE14 = 0x84CE;
  TEXTURE15 = 0x84CF;
  TEXTURE16 = 0x84D0;
  TEXTURE17 = 0x84D1;
  TEXTURE18 = 0x84D2;
  TEXTURE19 = 0x84D3;
  TEXTURE20 = 0x84D4;
  TEXTURE21 = 0x84D5;
  TEXTURE22 = 0x84D6;
  TEXTURE23 = 0x84D7;
  TEXTURE24 = 0x84D8;
  TEXTURE25 = 0x84D9;
  TEXTURE26 = 0x84DA;
  TEXTURE27 = 0x84DB;
  TEXTURE28 = 0x84DC;
  TEXTURE29 = 0x84DD;
  TEXTURE30 = 0x84DE;
  TEXTURE31 = 0x84DF;
  ACTIVE_TEXTURE = 0x84E0;

  /* TextureWrapMode */
  REPEAT = 0x2901;
  CLAMP_TO_EDGE = 0x812F;
  MIRRORED_REPEAT = 0x8370;

  /* Uniform Types */
  FLOAT_VEC2 = 0x8B50;
  FLOAT_VEC3 = 0x8B51;
  FLOAT_VEC4 = 0x8B52;
  INT_VEC2 = 0x8B53;
  INT_VEC3 = 0x8B54;
  INT_VEC4 = 0x8B55;
  BOOL = 0x8B56;
  BOOL_VEC2 = 0x8B57;
  BOOL_VEC3 = 0x8B58;
  BOOL_VEC4 = 0x8B59;
  FLOAT_MAT2 = 0x8B5A;
  FLOAT_MAT3 = 0x8B5B;
  FLOAT_MAT4 = 0x8B5C;
  SAMPLER_2D = 0x8B5E;
  SAMPLER_CUBE = 0x8B60;

  /* Vertex Arrays */
  VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
  VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
  VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
  VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
  VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
  VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;

  /* Read Format */
  IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
  IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;

  /* Shader Source */
  COMPILE_STATUS = 0x8B81;

  /* Shader Precision-Specified Types */
  LOW_FLOAT = 0x8DF0;
  MEDIUM_FLOAT = 0x8DF1;
  HIGH_FLOAT = 0x8DF2;
  LOW_INT = 0x8DF3;
  MEDIUM_INT = 0x8DF4;
  HIGH_INT = 0x8DF5;

  /* Framebuffer Object. */
  FRAMEBUFFER = 0x8D40;
  RENDERBUFFER = 0x8D41;

  RGBA4 = 0x8056;
  RGB5_A1 = 0x8057;
  RGB565 = 0x8D62;
  DEPTH_COMPONENT16 = 0x81A5;
  STENCIL_INDEX8 = 0x8D48;
  DEPTH_STENCIL = 0x84F9;

  RENDERBUFFER_WIDTH = 0x8D42;
  RENDERBUFFER_HEIGHT = 0x8D43;
  RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
  RENDERBUFFER_RED_SIZE = 0x8D50;
  RENDERBUFFER_GREEN_SIZE = 0x8D51;
  RENDERBUFFER_BLUE_SIZE = 0x8D52;
  RENDERBUFFER_ALPHA_SIZE = 0x8D53;
  RENDERBUFFER_DEPTH_SIZE = 0x8D54;
  RENDERBUFFER_STENCIL_SIZE = 0x8D55;

  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;

  COLOR_ATTACHMENT0 = 0x8CE0;
  DEPTH_ATTACHMENT = 0x8D00;
  STENCIL_ATTACHMENT = 0x8D20;
  DEPTH_STENCIL_ATTACHMENT = 0x821A;

  NONE = 0;

  FRAMEBUFFER_COMPLETE = 0x8CD5;
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
  FRAMEBUFFER_UNSUPPORTED = 0x8CDD;

  FRAMEBUFFER_BINDING = 0x8CA6;
  RENDERBUFFER_BINDING = 0x8CA7;
  MAX_RENDERBUFFER_SIZE = 0x84E8;

  INVALID_FRAMEBUFFER_OPERATION = 0x0506;

  /* WebGL-specific enums */
  UNPACK_FLIP_Y_WEBGL = 0x9240;
  UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
  CONTEXT_LOST_WEBGL = 0x9242;
  UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
  BROWSER_DEFAULT_WEBGL = 0x9244;
}

Object.assign(globalThis, {
  WebGLRenderingContext,
});

const WebGLRenderingContextAlias = WebGLRenderingContext;

declare global {
  class WebGLRenderingContext extends WebGLRenderingContextAlias {}
}
