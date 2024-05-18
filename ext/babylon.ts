//@deno-types="npm:babylonjs"
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
import type { CreateWindowOptions } from "../src/webgl/deps.ts";

BABYLON.SceneLoader.ShowLoadingScreen = false;

export abstract class World {
  canvas: WebGLCanvas;
  engine: BABYLON.Engine;
  constructor(
    settings: CreateWindowOptions = {},
    engineSettings: BABYLON.EngineOptions = {},
    antialias = true,
  ) {
    this.canvas = new WebGLCanvas(settings);
    this.engine = new BABYLON.Engine(this.canvas, antialias, engineSettings);
    addEventListener("resize", () => {
      this.engine.resize();
    });

    addEventListener("close", () => {
      this.engine.stopRenderLoop();
    });
  }

  abstract createScene(): BABYLON.Scene;
}

export function init<T extends World>(app: T) {
  const world = app;
  try {
    const scene = world.createScene();
    world.engine.runRenderLoop(() => {
      try {
        scene.render();
      } catch (e) {
        console.log(e);
      }
    });

    return world.canvas.run();
  } catch (e) {
    console.log(e);
  }
}
