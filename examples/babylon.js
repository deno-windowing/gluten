import { WebGLCanvas } from "../src/webgl/mod.ts";
import "https://cdn.babylonjs.com/babylon.max.js";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const canvas = new WebGLCanvas({
  title: "Babylon.js",
  width: 800,
  height: 600,
});

Object.defineProperties(window, {
  devicePixelRatio: {
    value: 1,
  },
  innerWidth: {
    get() {
      return canvas.width;
    },
  },
  innerHeight: {
    get() {
      return canvas.height;
    },
  },
});

const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});

function createScene() {
  var scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene,
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene,
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape.
  var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
    diameter: 2,
    segments: 32,
  }, scene);

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Our built-in 'ground' shape.
  var ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 6,
    height: 6,
  }, scene);

  return scene;
}

const scene = createScene();

addEventListener("close", () => {
  engine.stopRenderLoop();
});

engine.runRenderLoop(function () {
  scene.render();
});

addEventListener("resize", function () {
  engine.resize();
});
