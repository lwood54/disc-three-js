import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class CustomOrbitControls extends OrbitControls {
  tick: () => void;
  constructor(camera: PerspectiveCamera, canvas: HTMLElement) {
    super(camera, canvas);
    this.tick = () => {};
  }
}

function createControls(camera: PerspectiveCamera, canvas: HTMLElement) {
  const controls: CustomOrbitControls = new CustomOrbitControls(camera, canvas);

  controls.enableDamping = true;

  controls.target.y = 1;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls, CustomOrbitControls };
