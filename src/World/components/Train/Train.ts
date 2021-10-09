import { Group } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";
import { createMeshes, MeshType } from "./meshes";

class Train extends Group {
  meshes: MeshType;
  constructor() {
    super();
    this.meshes = createMeshes();
    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    );
  }
}

export { Train };
