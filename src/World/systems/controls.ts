import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera: PerspectiveCamera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);

  return controls;
}

export { createControls };
