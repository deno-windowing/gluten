// https://registry.khronos.org/webgl/specs/latest/1.0/

import { DwmWindow, getProcAddress } from "./deps.ts";
import * as gl from "../../api/gles23.ts";
import { _uniformLocation, glObjectName } from "../webgl/object.ts";
import { cstr } from "../webgl/utils.ts";

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
export class WebGL2RenderingContext {
  #attributes: WebGLContextAttributes | null = null;

  constructor(public window: DwmWindow, attributes?: WebGLContextAttributes) {
    gl.load(getProcAddress);
    this.#attributes = attributes ?? null;
  }

  /**
   * Represents the actual height of the current drawing buffer.
   * It should match the height attribute of the window associated with this context,
   * but might differ if the implementation is not able to provide the requested height.
   */
  get drawingBufferHeight() {
    return this.window.framebufferSize.height;
  }

  /**
   * Represents the actual width of the current drawing buffer.
   * It should match the width attribute of the window associated with this context,
   * but might differ if the implementation is not able to provide the requested width.
   */
  get drawingBufferWidth() {
    return this.window.framebufferSize.width;
  }

  /// 5.14.2 Getting information about the context

  /**
   * Returns a WebGLContextAttributes object that contains the actual context parameters. Might return null, if the context is lost.
   */
  getContextAttributes() {
    return this.#attributes;
  }

  /// 5.14.3 Setting and getting state

  /**
   * Specifies which texture unit to make active.
   * @param texture texture unit to activate
   */
  activeTexture(texture: number) {
    gl.ActiveTexture(texture);
  }

  /**
   * Sets the source and destination blending factors.
   * @param r red value
   * @param g green value
   * @param b blue value
   * @param a alpha value
   */
  blendColor(r: number, g: number, b: number, a: number) {
    gl.BlendColor(r, g, b, a);
  }

  /**
   * Sets both the RGB blend equation and alpha blend equation to a single equation.
   */
  blendEquation(mode: number) {
    gl.BlendEquation(mode);
  }

  /**
   * Sets the RGB blend equation and alpha blend equation separately.
   */
  blendEquationSeparate(modeRGB: number, modeAlpha: number) {
    gl.BlendEquationSeparate(modeRGB, modeAlpha);
  }

  /**
   * Defines which function is used for blending pixel arithmetic.
   */
  blendFunc(sfactor: number, dfactor: number) {
    gl.BlendFunc(sfactor, dfactor);
  }

  /**
   * Defines which function is used for blending pixel arithmetic for RGB and alpha components separately.
   */
  blendFuncSeparate(
    srcRGB: number,
    dstRGB: number,
    srcAlpha: number,
    dstAlpha: number,
  ) {
    gl.BlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  }

  /**
   * Specifies the color values used when clearing color buffers.
   */
  clearColor(r: number, g: number, b: number, a: number) {
    gl.ClearColor(r, g, b, a);
  }

  /**
   * Specifies the clear value for the depth buffer.
   */
  clearDepth(depth: number) {
    gl.ClearDepthf(depth);
  }

  /**
   * Specifies the clear value for the stencil buffer.
   */
  clearStencil(s: number) {
    gl.ClearStencil(s);
  }

  /**
   * Sets which color components to enable or to disable when drawing or rendering to a WebGLFramebuffer.
   */
  colorMask(r: boolean, g: boolean, b: boolean, a: boolean) {
    gl.ColorMask(Number(r), Number(g), Number(b), Number(a));
  }

  /**
   * Specifies whether or not front- and/or back-facing polygons can be culled.
   */
  cullFace(mode: number) {
    gl.CullFace(mode);
  }

  /**
   * Specifies a function that compares incoming pixel depth to the current depth buffer value.
   */
  depthFunc(func: number) {
    gl.DepthFunc(func);
  }

  /**
   * Sets whether writing into the depth buffer is enabled or disabled.
   */
  depthMask(flag: boolean) {
    gl.DepthMask(Number(flag));
  }

  /**
   * Specifies the depth range mapping from normalized device coordinates to window or viewport coordinates.
   */
  depthRange(zNear: number, zFar: number) {
    gl.DepthRangef(zNear, zFar);
  }

  /**
   * Disables specific WebGL capabilities for this context.
   */
  disable(cap: number) {
    gl.Disable(cap);
  }

  /**
   * Enables specific WebGL capabilities for this context.
   */
  enable(cap: number) {
    gl.Enable(cap);
  }

  /**
   * Specifies whether polygons are front- or back-facing by setting a winding orientation.
   */
  frontFace(mode: number) {
    gl.FrontFace(mode);
  }

  /**
   * Returns a value for the passed parameter name.
   */
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

  /**
   * Returns error information.
   */
  getError() {
    return gl.GetError();
  }

  /**
   * Specifies hints for certain behaviors. The interpretation of these hints depend on the implementation.
   */
  hint(target: number, mode: number) {
    gl.Hint(target, mode);
  }

  /**
   * Tests whether a specific WebGL capability is enabled or not for this context.
   */
  isEnabled(cap: number) {
    return gl.IsEnabled(cap) === gl.TRUE;
  }

  /**
   * Sets the line width of rasterized lines.
   */
  lineWidth(width: number) {
    gl.LineWidth(width);
  }

  /**
   * Specifies the pixel storage modes.
   */
  pixelStorei(pname: number, param: number) {
    console.log("STUB: pixelStorei:", pname, param);
    gl.PixelStorei(pname, param);
  }

  /**
   * Specifies the scale factors and units to calculate depth values.
   * The offset is added before the depth test is performed and before the value is written into the depth buffer.
   */
  polygonOffset(factor: number, units: number) {
    gl.PolygonOffset(factor, units);
  }

  /**
   * Specifies multi-sample coverage parameters for anti-aliasing effects.
   */
  sampleCoverage(value: number, invert: boolean) {
    gl.SampleCoverage(value, Number(invert));
  }

  /**
   * Sets the front and back function and reference value for stencil testing.
   */
  stencilFunc(func: number, ref: number, mask: number) {
    gl.StencilFunc(func, ref, mask);
  }

  /**
   * Sets the front and/or back function and reference value for stencil testing.
   */
  stencilFuncSeparate(face: number, func: number, ref: number, mask: number) {
    gl.StencilFuncSeparate(face, func, ref, mask);
  }

  /**
   * Controls enabling and disabling of both the front and back writing of individual bits in the stencil planes.
   */
  stencilMask(mask: number) {
    gl.StencilMask(mask);
  }

  /**
   *  controls enabling and disabling of front and/or back writing of individual bits in the stencil planes.
   * The WebGLRenderingContext.stencilMask() method can set both, the front and back stencil writemasks to one value at the same time.
   */
  stencilMaskSeparate(face: number, mask: number) {
    gl.StencilMaskSeparate(face, mask);
  }

  /**
   * Sets both the front and back-facing stencil test actions.
   */
  stencilOp(fail: number, zfail: number, zpass: number) {
    gl.StencilOp(fail, zfail, zpass);
  }

  /**
   * Sets the front and/or back-facing stencil test actions.
   */
  stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number) {
    gl.StencilOpSeparate(face, fail, zfail, zpass);
  }

  /// 5.14.4 Viewing and clipping
  /**
   * Sets a scissor box, which limits the drawing to a specified rectangle.
   */
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

  /**
   * Deletes a given WebGLBuffer. This method has no effect if the buffer has already been deleted.
   */
  deleteBuffer(buffer: WebGLBuffer | null) {
    if (buffer) {
      gl.DeleteBuffers(1, new Uint32Array([buffer[glObjectName]]));
    }
  }

  /// 5.14.6 Framebuffer objects

  bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null) {
    gl.BindFramebuffer(target, framebuffer?.[glObjectName] ?? 0);
  }

  /**
   * Creates and initializes a {@link WebGLFramebuffer} object.
   */
  createFramebuffer() {
    const framebuffer = new Uint32Array(1);
    gl.GenFramebuffers(1, framebuffer);
    return new WebGLFramebuffer(framebuffer[0]);
  }

  /**
   * Deletes a given {@link WebGLFramebuffer} object. This method has no effect if the frame buffer has already been deleted.
   */
  deleteFramebuffer(framebuffer: WebGLFramebuffer | null) {
    if (framebuffer) {
      gl.DeleteFramebuffers(1, new Uint32Array([framebuffer[glObjectName]]));
    }
  }

  /**
   * Attaches a {@link WebGLRenderbuffer} object to a {@link WebGLFramebuffer} object.
   */
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

  /**
   * Attaches a texture to a {@link WebGLFramebuffer}.
   */
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

  copyTexImage2D(
    target: number,
    level: number,
    internalformat: number,
    x: number,
    y: number,
    width: number,
    height: number,
    border: number,
  ) {
    gl.CopyTexImage2D(
      target,
      level,
      internalformat,
      x,
      y,
      width,
      height,
      border,
    );
  }

  createTexture() {
    const texture = new Uint32Array(1);
    gl.GenTextures(1, texture);
    return new WebGLTexture(texture[0]);
  }

  deleteTexture(texture: WebGLTexture | null) {
    if (texture) {
      gl.DeleteTextures(1, new Uint32Array([texture[glObjectName]]));
    }
  }

  generateMipmap(target: number) {
    gl.GenerateMipmap(target);
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
    if (arguments.length === 6) {
      // deno-lint-ignore no-explicit-any
      const img = border as any;
      gl.TexImage2D(
        target,
        level,
        internalformat,
        img.width,
        img.height,
        0,
        width,
        height,
        Deno.UnsafePointer.of(img.rawData),
      );
    } else {
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

  getShaderPrecisionFormat(
    shaderType: number,
    precisionType: number,
  ) {
    const range = new Int32Array(2);
    const precision = new Int32Array(1);
    gl.GetShaderPrecisionFormat(shaderType, precisionType, range, precision);
    return {
      rangeMin: range[0],
      rangeMax: range[1],
      precision,
    };
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
   * Returns a list of all the supported WebGL extensions.
   */
  getSupportedExtensions(): string[] {
    return [];
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

  vertexAttrib1f(
    index: number,
    x: number,
  ): void {
    gl.VertexAttrib1f(index, Number(x));
  }

  vertexAttrib2f(
    index: number,
    x: number,
    y: number,
  ): void {
    gl.VertexAttrib2f(index, Number(x), Number(y));
  }

  vertexAttrib3f(
    index: number,
    x: number,
    y: number,
    z: number,
  ): void {
    gl.VertexAttrib3f(index, Number(x), Number(y), Number(z));
  }

  vertexAttrib4f(
    index: number,
    x: number,
    y: number,
    z: number,
    w: number,
  ): void {
    gl.VertexAttrib4f(
      index,
      Number(x),
      Number(y),
      Number(z),
      Number(w),
    );
  }

  vertexAttrib1fv(
    index: number,
    v: Float32Array | number[],
  ): void {
    gl.VertexAttrib1fv(
      index,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  vertexAttrib2fv(
    index: number,
    v: Float32Array | number[],
  ): void {
    gl.VertexAttrib2fv(
      index,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  vertexAttrib3fv(
    index: number,
    v: Float32Array | number[],
  ): void {
    gl.VertexAttrib3fv(
      index,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  vertexAttrib4fv(
    index: number,
    v: Float32Array | number[],
  ): void {
    gl.VertexAttrib4fv(
      index,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
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

  uniform1iv(
    location: WebGLUniformLocation,
    v: Int32Array | number[],
  ): void {
    gl.Uniform1iv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Int32Array(v) : v,
    );
  }

  uniform1f(location: WebGLUniformLocation | null, x: number) {
    gl.Uniform1f(location?.[_uniformLocation] ?? 0, x);
  }

  uniform1fv(
    location: WebGLUniformLocation,
    v: Float32Array | number[],
  ) {
    gl.Uniform1fv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  uniform2f(location: WebGLUniformLocation | null, x: number, y: number) {
    gl.Uniform2f(location?.[_uniformLocation] ?? 0, x, y);
  }

  uniform2i(
    location: WebGLUniformLocation,
    x: number,
    y: number,
  ) {
    gl.Uniform2i(location[_uniformLocation], Number(x), Number(y));
  }

  uniform2fv(
    location: WebGLUniformLocation,
    v: Float32Array | number[],
  ) {
    gl.Uniform2fv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  uniform2iv(
    location: WebGLUniformLocation,
    v: Int32Array | number[],
  ): void {
    gl.Uniform2iv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Int32Array(v) : v,
    );
  }

  uniform3f(
    location: WebGLUniformLocation | null,
    x: number,
    y: number,
    z: number,
  ) {
    gl.Uniform3f(location?.[_uniformLocation] ?? 0, x, y, z);
  }

  uniform3i(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number,
  ) {
    gl.Uniform3i(location[_uniformLocation], Number(x), Number(y), Number(z));
  }

  uniform3iv(
    location: WebGLUniformLocation | null,
    v: Int32Array | number[],
  ): void {
    if (location === null) {
      return console.warn("uniform3iv: got null location");
    }
    gl.Uniform3iv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Int32Array(v) : v,
    );
  }

  uniform4iv(
    location: WebGLUniformLocation,
    v: Int32Array | number[],
  ): void {
    gl.Uniform4iv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Int32Array(v) : v,
    );
  }

  uniform4f(
    location: WebGLUniformLocation | null,
    x: number,
    y: number,
    z: number,
    w: number,
  ) {
    gl.Uniform4f(location?.[_uniformLocation] ?? 0, x, y, z, w);
  }

  uniform4i(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number,
    w: number,
  ) {
    gl.Uniform4i(
      location[_uniformLocation],
      Number(x),
      Number(y),
      Number(z),
      Number(w),
    );
  }

  uniform3fv(
    location: WebGLUniformLocation | null,
    v: Float32Array | number[],
  ) {
    gl.Uniform3fv(
      location?.[_uniformLocation] ?? 0,
      v.length,
      new Float32Array(v),
    );
  }

  uniform4fv(
    location: WebGLUniformLocation,
    v: Float32Array | number[],
  ): void {
    gl.Uniform4fv(
      location[_uniformLocation],
      1,
      Array.isArray(v) ? new Float32Array(v) : v,
    );
  }

  uniformMatrix2fv(
    location: WebGLUniformLocation,
    transpose: boolean,
    value: Float32Array | number[],
  ): void {
    gl.UniformMatrix2fv(
      location[_uniformLocation],
      1,
      Number(transpose),
      Array.isArray(value) ? new Float32Array(value) : value,
    );
  }

  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: boolean,
    value: Float32Array | number[],
  ) {
    gl.UniformMatrix3fv(
      location?.[_uniformLocation] ?? 0,
      value.length ? value.length / 9 : 0,
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

  HALF_FLOAT_OES = 0x8D61;
  RGBA16F = 0x881A;
  RGBA32F = 0x8814;
  DEPTH24_STENCIL8 = 0x88F0;

  /* New in WebGL 2 */

  READ_BUFFER                                   = 0x0C02;
  UNPACK_ROW_LENGTH                             = 0x0CF2;
  UNPACK_SKIP_ROWS                              = 0x0CF3;
  UNPACK_SKIP_PIXELS                            = 0x0CF4;
  PACK_ROW_LENGTH                               = 0x0D02;
  PACK_SKIP_ROWS                                = 0x0D03;
  PACK_SKIP_PIXELS                              = 0x0D04;
  COLOR                                         = 0x1800;
  DEPTH                                         = 0x1801;
  STENCIL                                       = 0x1802;
  RED                                           = 0x1903;
  RGB8                                          = 0x8051;
  RGBA8                                         = 0x8058;
  RGB10_A2                                      = 0x8059;
  TEXTURE_BINDING_3D                            = 0x806A;
  UNPACK_SKIP_IMAGES                            = 0x806D;
  UNPACK_IMAGE_HEIGHT                           = 0x806E;
  TEXTURE_3D                                    = 0x806F;
  TEXTURE_WRAP_R                                = 0x8072;
  MAX_3D_TEXTURE_SIZE                           = 0x8073;
  UNSIGNED_INT_2_10_10_10_REV                   = 0x8368;
  MAX_ELEMENTS_VERTICES                         = 0x80E8;
  MAX_ELEMENTS_INDICES                          = 0x80E9;
  TEXTURE_MIN_LOD                               = 0x813A;
  TEXTURE_MAX_LOD                               = 0x813B;
  TEXTURE_BASE_LEVEL                            = 0x813C;
  TEXTURE_MAX_LEVEL                             = 0x813D;
  MIN                                           = 0x8007;
  MAX                                           = 0x8008;
  DEPTH_COMPONENT24                             = 0x81A6;
  MAX_TEXTURE_LOD_BIAS                          = 0x84FD;
  TEXTURE_COMPARE_MODE                          = 0x884C;
  TEXTURE_COMPARE_FUNC                          = 0x884D;
  CURRENT_QUERY                                 = 0x8865;
  QUERY_RESULT                                  = 0x8866;
  QUERY_RESULT_AVAILABLE                        = 0x8867;
  STREAM_READ                                   = 0x88E1;
  STREAM_COPY                                   = 0x88E2;
  STATIC_READ                                   = 0x88E5;
  STATIC_COPY                                   = 0x88E6;
  DYNAMIC_READ                                  = 0x88E9;
  DYNAMIC_COPY                                  = 0x88EA;
  MAX_DRAW_BUFFERS                              = 0x8824;
  DRAW_BUFFER0                                  = 0x8825;
  DRAW_BUFFER1                                  = 0x8826;
  DRAW_BUFFER2                                  = 0x8827;
  DRAW_BUFFER3                                  = 0x8828;
  DRAW_BUFFER4                                  = 0x8829;
  DRAW_BUFFER5                                  = 0x882A;
  DRAW_BUFFER6                                  = 0x882B;
  DRAW_BUFFER7                                  = 0x882C;
  DRAW_BUFFER8                                  = 0x882D;
  DRAW_BUFFER9                                  = 0x882E;
  DRAW_BUFFER10                                 = 0x882F;
  DRAW_BUFFER11                                 = 0x8830;
  DRAW_BUFFER12                                 = 0x8831;
  DRAW_BUFFER13                                 = 0x8832;
  DRAW_BUFFER14                                 = 0x8833;
  DRAW_BUFFER15                                 = 0x8834;
  MAX_FRAGMENT_UNIFORM_COMPONENTS               = 0x8B49;
  MAX_VERTEX_UNIFORM_COMPONENTS                 = 0x8B4A;
  SAMPLER_3D                                    = 0x8B5F;
  SAMPLER_2D_SHADOW                             = 0x8B62;
  FRAGMENT_SHADER_DERIVATIVE_HINT               = 0x8B8B;
  PIXEL_PACK_BUFFER                             = 0x88EB;
  PIXEL_UNPACK_BUFFER                           = 0x88EC;
  PIXEL_PACK_BUFFER_BINDING                     = 0x88ED;
  PIXEL_UNPACK_BUFFER_BINDING                   = 0x88EF;
  FLOAT_MAT2x3                                  = 0x8B65;
  FLOAT_MAT2x4                                  = 0x8B66;
  FLOAT_MAT3x2                                  = 0x8B67;
  FLOAT_MAT3x4                                  = 0x8B68;
  FLOAT_MAT4x2                                  = 0x8B69;
  FLOAT_MAT4x3                                  = 0x8B6A;
  SRGB                                          = 0x8C40;
  SRGB8                                         = 0x8C41;
  SRGB8_ALPHA8                                  = 0x8C43;
  COMPARE_REF_TO_TEXTURE                        = 0x884E;
  // RGBA32F                                       = 0x8814;
  RGB32F                                        = 0x8815;
  // RGBA16F                                       = 0x881A;
  RGB16F                                        = 0x881B;
  VERTEX_ATTRIB_ARRAY_INTEGER                   = 0x88FD;
  MAX_ARRAY_TEXTURE_LAYERS                      = 0x88FF;
  MIN_PROGRAM_TEXEL_OFFSET                      = 0x8904;
  MAX_PROGRAM_TEXEL_OFFSET                      = 0x8905;
  MAX_VARYING_COMPONENTS                        = 0x8B4B;
  TEXTURE_2D_ARRAY                              = 0x8C1A;
  TEXTURE_BINDING_2D_ARRAY                      = 0x8C1D;
  R11F_G11F_B10F                                = 0x8C3A;
  UNSIGNED_INT_10F_11F_11F_REV                  = 0x8C3B;
  RGB9_E5                                       = 0x8C3D;
  UNSIGNED_INT_5_9_9_9_REV                      = 0x8C3E;
  TRANSFORM_FEEDBACK_BUFFER_MODE                = 0x8C7F;
  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS    = 0x8C80;
  TRANSFORM_FEEDBACK_VARYINGS                   = 0x8C83;
  TRANSFORM_FEEDBACK_BUFFER_START               = 0x8C84;
  TRANSFORM_FEEDBACK_BUFFER_SIZE                = 0x8C85;
  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN         = 0x8C88;
  RASTERIZER_DISCARD                            = 0x8C89;
  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS       = 0x8C8B;
  INTERLEAVED_ATTRIBS                           = 0x8C8C;
  SEPARATE_ATTRIBS                              = 0x8C8D;
  TRANSFORM_FEEDBACK_BUFFER                     = 0x8C8E;
  TRANSFORM_FEEDBACK_BUFFER_BINDING             = 0x8C8F;
  RGBA32UI                                      = 0x8D70;
  RGB32UI                                       = 0x8D71;
  RGBA16UI                                      = 0x8D76;
  RGB16UI                                       = 0x8D77;
  RGBA8UI                                       = 0x8D7C;
  RGB8UI                                        = 0x8D7D;
  RGBA32I                                       = 0x8D82;
  RGB32I                                        = 0x8D83;
  RGBA16I                                       = 0x8D88;
  RGB16I                                        = 0x8D89;
  RGBA8I                                        = 0x8D8E;
  RGB8I                                         = 0x8D8F;
  RED_INTEGER                                   = 0x8D94;
  RGB_INTEGER                                   = 0x8D98;
  RGBA_INTEGER                                  = 0x8D99;
  SAMPLER_2D_ARRAY                              = 0x8DC1;
  SAMPLER_2D_ARRAY_SHADOW                       = 0x8DC4;
  SAMPLER_CUBE_SHADOW                           = 0x8DC5;
  UNSIGNED_INT_VEC2                             = 0x8DC6;
  UNSIGNED_INT_VEC3                             = 0x8DC7;
  UNSIGNED_INT_VEC4                             = 0x8DC8;
  INT_SAMPLER_2D                                = 0x8DCA;
  INT_SAMPLER_3D                                = 0x8DCB;
  INT_SAMPLER_CUBE                              = 0x8DCC;
  INT_SAMPLER_2D_ARRAY                          = 0x8DCF;
  UNSIGNED_INT_SAMPLER_2D                       = 0x8DD2;
  UNSIGNED_INT_SAMPLER_3D                       = 0x8DD3;
  UNSIGNED_INT_SAMPLER_CUBE                     = 0x8DD4;
  UNSIGNED_INT_SAMPLER_2D_ARRAY                 = 0x8DD7;
  DEPTH_COMPONENT32F                            = 0x8CAC;
  DEPTH32F_STENCIL8                             = 0x8CAD;
  FLOAT_32_UNSIGNED_INT_24_8_REV                = 0x8DAD;
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING         = 0x8210;
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE         = 0x8211;
  FRAMEBUFFER_ATTACHMENT_RED_SIZE               = 0x8212;
  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE             = 0x8213;
  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE              = 0x8214;
  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE             = 0x8215;
  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE             = 0x8216;
  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE           = 0x8217;
  FRAMEBUFFER_DEFAULT                           = 0x8218;
  // DEPTH_STENCIL_ATTACHMENT                      = 0x821A;
  // DEPTH_STENCIL                                 = 0x84F9;
  UNSIGNED_INT_24_8                             = 0x84FA;
  // DEPTH24_STENCIL8                              = 0x88F0;
  UNSIGNED_NORMALIZED                           = 0x8C17;
  DRAW_FRAMEBUFFER_BINDING                      = 0x8CA6; /* Same as FRAMEBUFFER_BINDING */
  READ_FRAMEBUFFER                              = 0x8CA8;
  DRAW_FRAMEBUFFER                              = 0x8CA9;
  READ_FRAMEBUFFER_BINDING                      = 0x8CAA;
  RENDERBUFFER_SAMPLES                          = 0x8CAB;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER          = 0x8CD4;
  MAX_COLOR_ATTACHMENTS                         = 0x8CDF;
  COLOR_ATTACHMENT1                             = 0x8CE1;
  COLOR_ATTACHMENT2                             = 0x8CE2;
  COLOR_ATTACHMENT3                             = 0x8CE3;
  COLOR_ATTACHMENT4                             = 0x8CE4;
  COLOR_ATTACHMENT5                             = 0x8CE5;
  COLOR_ATTACHMENT6                             = 0x8CE6;
  COLOR_ATTACHMENT7                             = 0x8CE7;
  COLOR_ATTACHMENT8                             = 0x8CE8;
  COLOR_ATTACHMENT9                             = 0x8CE9;
  COLOR_ATTACHMENT10                            = 0x8CEA;
  COLOR_ATTACHMENT11                            = 0x8CEB;
  COLOR_ATTACHMENT12                            = 0x8CEC;
  COLOR_ATTACHMENT13                            = 0x8CED;
  COLOR_ATTACHMENT14                            = 0x8CEE;
  COLOR_ATTACHMENT15                            = 0x8CEF;
  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE            = 0x8D56;
  MAX_SAMPLES                                   = 0x8D57;
  HALF_FLOAT                                    = 0x140B;
  RG                                            = 0x8227;
  RG_INTEGER                                    = 0x8228;
  R8                                            = 0x8229;
  RG8                                           = 0x822B;
  R16F                                          = 0x822D;
  R32F                                          = 0x822E;
  RG16F                                         = 0x822F;
  RG32F                                         = 0x8230;
  R8I                                           = 0x8231;
  R8UI                                          = 0x8232;
  R16I                                          = 0x8233;
  R16UI                                         = 0x8234;
  R32I                                          = 0x8235;
  R32UI                                         = 0x8236;
  RG8I                                          = 0x8237;
  RG8UI                                         = 0x8238;
  RG16I                                         = 0x8239;
  RG16UI                                        = 0x823A;
  RG32I                                         = 0x823B;
  RG32UI                                        = 0x823C;
  VERTEX_ARRAY_BINDING                          = 0x85B5;
  R8_SNORM                                      = 0x8F94;
  RG8_SNORM                                     = 0x8F95;
  RGB8_SNORM                                    = 0x8F96;
  RGBA8_SNORM                                   = 0x8F97;
  SIGNED_NORMALIZED                             = 0x8F9C;
  COPY_READ_BUFFER                              = 0x8F36;
  COPY_WRITE_BUFFER                             = 0x8F37;
  COPY_READ_BUFFER_BINDING                      = 0x8F36; /* Same as COPY_READ_BUFFER */
  COPY_WRITE_BUFFER_BINDING                     = 0x8F37; /* Same as COPY_WRITE_BUFFER */
  UNIFORM_BUFFER                                = 0x8A11;
  UNIFORM_BUFFER_BINDING                        = 0x8A28;
  UNIFORM_BUFFER_START                          = 0x8A29;
  UNIFORM_BUFFER_SIZE                           = 0x8A2A;
  MAX_VERTEX_UNIFORM_BLOCKS                     = 0x8A2B;
  MAX_FRAGMENT_UNIFORM_BLOCKS                   = 0x8A2D;
  MAX_COMBINED_UNIFORM_BLOCKS                   = 0x8A2E;
  MAX_UNIFORM_BUFFER_BINDINGS                   = 0x8A2F;
  MAX_UNIFORM_BLOCK_SIZE                        = 0x8A30;
  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS        = 0x8A31;
  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS      = 0x8A33;
  UNIFORM_BUFFER_OFFSET_ALIGNMENT               = 0x8A34;
  ACTIVE_UNIFORM_BLOCKS                         = 0x8A36;
  UNIFORM_TYPE                                  = 0x8A37;
  UNIFORM_SIZE                                  = 0x8A38;
  UNIFORM_BLOCK_INDEX                           = 0x8A3A;
  UNIFORM_OFFSET                                = 0x8A3B;
  UNIFORM_ARRAY_STRIDE                          = 0x8A3C;
  UNIFORM_MATRIX_STRIDE                         = 0x8A3D;
  UNIFORM_IS_ROW_MAJOR                          = 0x8A3E;
  UNIFORM_BLOCK_BINDING                         = 0x8A3F;
  UNIFORM_BLOCK_DATA_SIZE                       = 0x8A40;
  UNIFORM_BLOCK_ACTIVE_UNIFORMS                 = 0x8A42;
  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES          = 0x8A43;
  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER     = 0x8A44;
  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER   = 0x8A46;
  INVALID_INDEX                                 = 0xFFFFFFFF;
  MAX_VERTEX_OUTPUT_COMPONENTS                  = 0x9122;
  MAX_FRAGMENT_INPUT_COMPONENTS                 = 0x9125;
  MAX_SERVER_WAIT_TIMEOUT                       = 0x9111;
  OBJECT_TYPE                                   = 0x9112;
  SYNC_CONDITION                                = 0x9113;
  SYNC_STATUS                                   = 0x9114;
  SYNC_FLAGS                                    = 0x9115;
  SYNC_FENCE                                    = 0x9116;
  SYNC_GPU_COMMANDS_COMPLETE                    = 0x9117;
  UNSIGNALED                                    = 0x9118;
  SIGNALED                                      = 0x9119;
  ALREADY_SIGNALED                              = 0x911A;
  TIMEOUT_EXPIRED                               = 0x911B;
  CONDITION_SATISFIED                           = 0x911C;
  WAIT_FAILED                                   = 0x911D;
  SYNC_FLUSH_COMMANDS_BIT                       = 0x00000001;
  VERTEX_ATTRIB_ARRAY_DIVISOR                   = 0x88FE;
  ANY_SAMPLES_PASSED                            = 0x8C2F;
  ANY_SAMPLES_PASSED_CONSERVATIVE               = 0x8D6A;
  SAMPLER_BINDING                               = 0x8919;
  RGB10_A2UI                                    = 0x906F;
  INT_2_10_10_10_REV                            = 0x8D9F;
  TRANSFORM_FEEDBACK                            = 0x8E22;
  TRANSFORM_FEEDBACK_PAUSED                     = 0x8E23;
  TRANSFORM_FEEDBACK_ACTIVE                     = 0x8E24;
  TRANSFORM_FEEDBACK_BINDING                    = 0x8E25;
  TEXTURE_IMMUTABLE_FORMAT                      = 0x912F;
  MAX_ELEMENT_INDEX                             = 0x8D6B;
  TEXTURE_IMMUTABLE_LEVELS                      = 0x82DF;

  TIMEOUT_IGNORED                               = -1;

  /* WebGL2-specific enums */
  MAX_CLIENT_WAIT_TIMEOUT_WEBGL                 = 0x9247;
}

Object.assign(globalThis, {
  WebGL2RenderingContext,
});

const WebGL2RenderingContextAlias = WebGL2RenderingContext;

declare global {
  class WebGL2RenderingContext extends WebGL2RenderingContextAlias {}
}
