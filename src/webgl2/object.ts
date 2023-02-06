import {
  WebGLObject
} from "../webgl/object.ts";

class WebGLQuery extends WebGLObject {}
class WebGLSampler extends WebGLObject {}
class WebGLSync extends WebGLObject {}
class WebGLTransformFeedback extends WebGLObject {}
class WebGLVertexArrayObject extends WebGLObject {}

Object.assign(globalThis, {
  WebGLQuery,
  WebGLSampler,
  WebGLSync,
  WebGLTransformFeedback,
  WebGLVertexArrayObject,
})

declare global {
  class WebGLQuery extends WebGLObject {} 
}