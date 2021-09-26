import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";

import { createControls } from "./systems/controls";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import {
  DirectionalLightHelper,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

class World {
  readonly camera: PerspectiveCamera;
  readonly renderer: WebGLRenderer;
  readonly scene: Scene;
  readonly loop: Loop;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);
    createControls(this.camera, this.renderer.domElement);
    // const controls = createControls(this.camera, this.renderer.domElement);

    const cube = createCube();
    const light = createLights();
    const helper = new DirectionalLightHelper(light, 5);

    this.loop.updatables.push(cube, this.camera, light);

    this.scene.add(cube, light, helper);

    new Resizer(container, this.camera, this.renderer);
    // const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };
