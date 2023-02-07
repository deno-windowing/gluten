export const glObjectName = Symbol("[[glObjectName]]");
export const invalidated = Symbol("[[invalidated]]");
export const _uniformLocation = Symbol("[[uniformLocation]]");

const cache = new Map<number, WebGLObject>();

/**
 * This is the parent interface for all WebGL resource objects.
 */
export class WebGLObject {
  [glObjectName]: number;
  [invalidated]: boolean = false;

  constructor(name: number) {
    this[glObjectName] = name;
    if (name === 0) {
      console.log("warn: GL object created with zero name");
    }
  }

  static make(name: number) {
    if (cache.has(name)) {
      return cache.get(name)!;
    } else {
      const obj = new this(name);
      cache.set(name, obj);
      return obj;
    }
  }

  toString() {
    return `WebGLObject(${this[glObjectName]})`;
  }

  [Symbol.for("Deno.customInspect")]() {
    return this.toString();
  }
}

/**
 * Represents an opaque buffer object storing data such as vertices or colors.
 */
export class WebGLBuffer extends WebGLObject {}

/**
 * Can either be a vertex or a fragment shader.
 * A {@link WebGLProgram} requires both types of shaders.
 */
export class WebGLShader extends WebGLObject {}

/**
 * Combination of two compiled {@link WebGLShader}s consisting of a vertex shader and a fragment shader (both written in GLSL).
 */
export class WebGLProgram extends WebGLObject {}

export class WebGLTexture extends WebGLObject {}

export class WebGLFramebuffer extends WebGLObject {}

export class WebGLRenderbuffer extends WebGLObject {}

export class WebGLUniformLocation {
  [_uniformLocation]: number;

  constructor(location: number) {
    this[_uniformLocation] = location;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `WebGLUniformLocation(${this[_uniformLocation]})`;
  }
}

export class WebGLActiveInfo {
  #size: number;
  #type: number;
  #name: string;

  constructor(size: number, type: number, name: string) {
    this.#size = size;
    this.#type = type;
    this.#name = name;
  }

  get size() {
    return this.#size;
  }
  get type() {
    return this.#type;
  }
  get name() {
    return this.#name;
  }
}

export class WebGLShaderPrecisionFormat {
  #rangeMin: number;
  #rangeMax: number;
  #precision: number;

  constructor(rangeMin: number, rangeMax: number, precision: number) {
    this.#rangeMin = rangeMin;
    this.#rangeMax = rangeMax;
    this.#precision = precision;
  }

  get rangeMin() {
    return this.#rangeMin;
  }
  get rangeMax() {
    return this.#rangeMax;
  }
  get precision() {
    return this.#precision;
  }
}

Object.assign(globalThis, {
  WebGLBuffer,
  WebGLShader,
  WebGLProgram,
  WebGLTexture,
  WebGLFramebuffer,
  WebGLRenderbuffer,
  WebGLUniformLocation,
});

const WebGLUniformLocationAlias = WebGLUniformLocation;
const WebGLActiveInfoAlias = WebGLActiveInfo;
const WebGLShaderPrecisionFormatAlias = WebGLShaderPrecisionFormat;

declare global {
  class WebGLBuffer extends WebGLObject {}
  class WebGLShader extends WebGLObject {}
  class WebGLProgram extends WebGLObject {}
  class WebGLTexture extends WebGLObject {}
  class WebGLFramebuffer extends WebGLObject {}
  class WebGLRenderbuffer extends WebGLObject {}
  class WebGLUniformLocation extends WebGLUniformLocationAlias {}
  class WebGLActiveInfo extends WebGLActiveInfoAlias {}
  class WebGLShaderPrecisionFormat extends WebGLShaderPrecisionFormatAlias {}
}
