import { WebGLCanvas } from "../src/webgl/mod.ts";

const window = new WebGLCanvas({
  title: "Deno DWM + Native WebGL",
  width: 800,
  height: 600,
  resizable: true,
});

const gl = window.getContext("webgl");

addEventListener("resize", (event) => {
  gl.viewport(0, 0, event.width, event.height);
});

// deno-lint-ignore no-explicit-any
let vertBuffer: any, shaderProg: any, shaderVertPosAttr: any;

function init() {
  vertBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);
  const verts = [
    0.0,
    1.0,
    0.0,
    1.0,
    -1.0,
    0.0,
    -1.0,
    -1.0,
    0.0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

  const checkShaderCompile = function (shader: WebGLShader, type: string) {
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const errmes = type + " shader compile failed: " +
        gl.getShaderInfoLog(shader);
      throw new Error(errmes);
    }
  };

  const vertShaderSource = `
  attribute vec3 vertPos;
  void main(void) {
      gl_Position = vec4(vertPos, 1.0);
  }`;
  const vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertShaderSource);
  gl.compileShader(vertShader);
  checkShaderCompile(vertShader, "vertex");

  const fragShaderSource = `
  void main(void) {
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  }`;
  const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fragShaderSource);
  gl.compileShader(fragShader);
  checkShaderCompile(fragShader, "fragment");

  shaderProg = gl.createProgram();
  gl.attachShader(shaderProg, vertShader);
  gl.attachShader(shaderProg, fragShader);
  gl.linkProgram(shaderProg);

  shaderVertPosAttr = gl.getAttribLocation(shaderProg, "vertPos");
  gl.enableVertexAttribArray(shaderVertPosAttr);
}

function draw() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.useProgram(shaderProg);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);
  gl.vertexAttribPointer(shaderVertPosAttr, 3, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function frame() {
  draw();
  requestAnimationFrame(frame);
}

init();
requestAnimationFrame(frame);

await window.run();
