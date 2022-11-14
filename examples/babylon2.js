import { canvas, engine, runScene } from "./babylon_runner.js";

runScene(() => {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    15,
    new BABYLON.Vector3(0, 0, 0),
  );
  camera.attachControl(canvas, true);
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0),
  );

  BABYLON.SceneLoader.ImportMeshAsync(
    ["ground", "semi_house"],
    "https://assets.babylonjs.com/meshes/",
    "both_houses_scene.babylon",
  );

  return scene;
});
