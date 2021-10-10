import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const setupModel = (data: GLTF) => data.scene.children[0];

export { setupModel };
