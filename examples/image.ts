import { WebGLCanvas } from "../src/webgl/mod.ts";
import { _uniformLocation } from "../src/webgl/object.ts";

const window = new WebGLCanvas({
    title: "Deno DWM + Native WebGL",
    width: 1024,
    height: 1024,
    resizable: true,
});

const glsl = (strings: TemplateStringsArray, ...values: []) => String.raw({ raw: strings }, ...values);
const gl = window.getContext("webgl");

addEventListener("resize", (event) => {
    gl.viewport(0, 0, event.width, event.height);
});

let vertBuffer: WebGLBuffer, shaderProg: WebGLShader, shaderVertPosAttr: number;

function checkShaderCompile(shader: WebGLShader, type: number) {
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const errmes = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment' + " shader compile failed: " +
            gl.getShaderInfoLog(shader);
        throw new Error(errmes);
    }
}

function initShader(shaderSource: string, type: number) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    checkShaderCompile(shader, type);
    return shader;
}

function initProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    return program;
}

async function loadImage(src: string) {
    const image = new Image();
    await new Promise(resolve => {
        image.onload = resolve;
        image.src = src;
    });
    return image;
}

function init() {
    vertBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);

    const vertices = [
        -1.0, 1.0,
        1.0, -1.0,
        -1.0, -1.0,
        -1.0, 1.0,
        1.0, 1.0,
        1.0, -1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const vertShaderSource = glsl`
    attribute vec2 vertPos;
    varying vec2 imagePos;
    void main(void) {
        gl_Position = vec4(vertPos.xy, 0.0, 1.0);
        imagePos = vertPos;
    }`;
    const vertShader = initShader(vertShaderSource, gl.VERTEX_SHADER);

    const fragShaderSource = glsl`
    precision mediump float;
    varying vec2 imagePos;
    uniform sampler2D imageTex;

    void main(void) {
        gl_FragColor = texture2D(imageTex, imagePos / 2.0 + 0.5);
    }`;
    const fragShader = initShader(fragShaderSource, gl.FRAGMENT_SHADER);

    shaderProg = initProgram(vertShader, fragShader);

    shaderVertPosAttr = gl.getAttribLocation(shaderProg, "vertPos");
    gl.enableVertexAttribArray(shaderVertPosAttr);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([
        255, 255, 0, 255,
        255, 0, 0, 255,
        0, 255, 0, 255,
        0, 0, 255, 255,
    ]));
    loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle(small).svg/2048px-Red_Circle(small).svg.png").then(image => {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    });
    gl.useProgram(shaderProg);
}

function draw() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);
    gl.vertexAttribPointer(shaderVertPosAttr, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function frame() {
    draw();
    requestAnimationFrame(frame);
}

init();
requestAnimationFrame(frame);

await window.run();
