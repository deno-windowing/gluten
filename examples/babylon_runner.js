import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { WebGLCanvas } from "../src/webgl/mod.ts";
import "https://preview.babylonjs.com/ammo.js";
import "https://preview.babylonjs.com/cannon.js";
import "https://preview.babylonjs.com/Oimo.js";
import "https://preview.babylonjs.com/earcut.min.js";
import "https://preview.babylonjs.com/babylon.js";
import "https://preview.babylonjs.com/materialsLibrary/babylonjs.materials.min.js";
import "https://preview.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js";
import "https://preview.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js";
import "https://preview.babylonjs.com/loaders/babylonjs.loaders.js";
import "https://preview.babylonjs.com/serializers/babylonjs.serializers.min.js";

BABYLON.SceneLoader.ShowLoadingScreen = false;

export const canvas = new WebGLCanvas({
  title: "Babylon.js",
  width: 800,
  height: 600,
  // maximized: true,
});

export const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});

addEventListener("resize", () => {
  engine.resize();
});

addEventListener("close", () => {
  engine.stopRenderLoop();
});

export function runScene(createScene) {
  try {
    const scene = createScene();

    engine.runRenderLoop(() => {
      try {
        scene.render();
      } catch (e) {
        console.log(e);
      }
    });

    return canvas.run();
  } catch (e) {
    console.log(e);
  }
}
