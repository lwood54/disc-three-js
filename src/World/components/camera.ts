import { PerspectiveCamera } from "three";
// import { getZoomDirection } from "../helpers/index";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  // add animation logic
  // let zoomDirection = 1;

  camera.tick = () => {
    // zoomDirection = getZoomDirection(camera.position.z, zoomDirection);
    // camera.position.z += zoomDirection * 0.1;
  };

  return camera;
}

export { createCamera };
