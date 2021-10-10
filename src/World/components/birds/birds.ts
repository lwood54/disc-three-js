import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync("/assets/models/Parrot.glb"),
    loader.loadAsync("/assets/models/Flamingo.glb"),
    loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  console.log("Squaaawk!", parrotData);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(1, 4, 1);
  const parrot = setupModel(parrotData);
  parrot.position.set(3, 4, 3);
  const stork = setupModel(storkData);
  stork.position.set(5, 4, 5);

  return { flamingo, parrot, stork };
}

export { loadBirds };
