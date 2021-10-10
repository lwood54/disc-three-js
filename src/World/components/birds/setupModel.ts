import { AnimationMixer, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface CustomObject3D extends Object3D<Event> {
  tick: (delta: number) => AnimationMixer;
}
const setupModel = (data: GLTF) => {
  const model = data.scene.children[0] as CustomObject3D;
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta: number) => mixer.update(delta);

  return model;
};

export { setupModel };
