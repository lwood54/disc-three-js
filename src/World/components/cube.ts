import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterail() {
  // create a texture loader.
  const textureLoader = new TextureLoader();
  // load a texture
  const texture = textureLoader.load("/src/assets/textures/uv-test-bw.png");
  console.log("texture", texture);
  // const texture = textureLoader.load("/assets/textures/uv-test-col.png");
  // create a "standard" material using
  // the texture loaded above
  const material = new MeshStandardMaterial({
    map: texture,
  });
  return material;
}

function createCube() {
  // create a geometry
  const boxGeometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterail();
  // create a Mesh containing the geometry and material
  const cube = new Mesh(boxGeometry, material);
  cube.rotation.set(-0.5, 0.5, 0.8);
  const radiansPerSecond = MathUtils.degToRad(30);
  cube.tick = (delta: number) => {
    // increase the cube's rotation each frame
    // scale by multiplying delta (delta is actual change in time between frame updates)
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
