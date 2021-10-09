import {
  SphereBufferGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereBufferGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({
    color: "indigo",
  });
  // group.scale.multiplyScalar(2);

  const protoSphere = new Mesh(geometry, material);
  group.add(protoSphere);
  for (let i = 0; i < 1; i += 0.001) {
    const sphere = protoSphere.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.scale.multiplyScalar(0.01 + i);
    sphere.position.z = -i * 5;
    group.add(sphere);
  }

  const radiansPerSecond = MathUtils.degToRad(30);
  group.tick = (delta: number) => {
    group.rotation.z -= delta * radiansPerSecond;
  };
  group.scale.multiplyScalar(2);

  return group;
}

export { createMeshGroup };
