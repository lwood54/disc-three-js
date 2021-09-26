import { DirectionalLight } from "three";

function createLights() {
  const light = new DirectionalLight("white", 8);

  // move light right, up, towards user
  light.position.set(10, 10, 10);
  light.tick = () => {
    // const { x, y, z } = light.position;
    // light.position.set(x + 1, y + 1, z + 1);
    // light.rotation.z += 1;
    // console.log("light.position.x", light.position.x);
    // console.log("light.position.y", light.position.y);
    // console.log("light.position.z", light.position.z);
  };

  return light;
}

export { createLights };
