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

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      new BABYLON.Vector3(0, 0, 0),
    );
    camera.attachControl(this.canvas, true);
    const _light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene,
    );

    BABYLON.SceneLoader.ImportMeshAsync(
      ["ground", "semi_house"],
      "https://assets.babylonjs.com/meshes/",
      "both_houses_scene.babylon",
    );

    return scene;
  }
}

init(new Game());