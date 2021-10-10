import "./styles/main.css";
import { World } from "./World/World";

async function main() {
  const container: HTMLElement | null =
    document.querySelector("#scene-container");

  const world = container && new World(container);
  if (!world) return;

  await world.init();

  world?.start();
}

main().catch((err) => {
  console.error("ERROR ==> ", err);
});
