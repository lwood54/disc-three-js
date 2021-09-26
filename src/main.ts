import "./styles/main.css";

import { World } from "./World/World";

function main() {
  // world implementation details
  const container = document.querySelector("#scene-container");
  console.log("container", typeof container);
  if (typeof container === "object") {
    const world = new World(container as HTMLElement); // TODO: handle Element | null better
    world.start();
  }
}

main();
