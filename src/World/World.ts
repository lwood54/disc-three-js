import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createAxesHelper, createGridHelper } from "./helpers";
import { Train } from "./components/Train/Train";
import { loadBirds } from "./components/birds/birds";

import { createControls, CustomOrbitControls } from "./systems/controls";
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
  readonly controls: CustomOrbitControls;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.controls = createControls(this.camera, this.renderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);

    const train = new Train();

    const { mainLight, ambientLight } = createLights();
    const directionalLightHelper = new DirectionalLightHelper(mainLight, 5);

    this.loop.updatables.push(train, this.camera, mainLight, this.controls);

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

  async init() {
    const { flamingo, parrot, stork } = await loadBirds();
    this.controls.target.copy(parrot.position);
    this.loop.updatables.push(flamingo, parrot, stork);
    this.scene.add(flamingo, parrot, stork);
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
