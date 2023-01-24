import { init, World } from "../ext/babylon.ts";

class Game extends World {
  constructor() {
    super({
      title: "Babylon.js",
      width: 800,
      height: 600,
    }, {
      preserveDrawingBuffer: true,
      stencil: true,
      // deno-lint-ignore no-explicit-any
    } as any, true);
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine);

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene,
    );

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(window, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene,
    );

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
      diameter: 2,
      segments: 32,
    }, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape.
    const _ground = BABYLON.MeshBuilder.CreateGround("ground", {
      width: 6,
      height: 6,
    }, scene);

    return scene;
  }
}

init(new Game());
