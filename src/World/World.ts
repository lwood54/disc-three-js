import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createAxesHelper, createGridHelper } from "./helpers";
import { Train } from "./components/Train/Train";

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
    const controls = createControls(this.camera, this.renderer.domElement);

    const train = new Train();

    const { mainLight, ambientLight } = createLights();
    const directionalLightHelper = new DirectionalLightHelper(mainLight, 5);

    this.loop.updatables.push(train, this.camera, mainLight, controls);

    this.scene.add(
      ambientLight,
      train,
      mainLight,
      directionalLightHelper,
      createAxesHelper(),
      createGridHelper()
    );

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
