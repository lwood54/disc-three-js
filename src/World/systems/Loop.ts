import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";

const clock = new Clock();

class Loop {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  scene: Scene;
  updatables: any[];

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // call get detla only once per frame
    const delta = clock.getDelta();

    for (const object of this.updatables) {
      Boolean(object.tick) && object.tick(delta);
    }
  }
}

export { Loop };
