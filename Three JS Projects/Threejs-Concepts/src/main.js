import * as Three from "three";

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

const geometry = new Three.BoxGeometry(1, 1, 1, 10, 10, 10);
const material = new Three.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new Three.Mesh(geometry, material);

const geometry2 = new Three.BoxGeometry(0.5, 0.5, 0.5, 5, 5, 5);
const material2 = new Three.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube2 = new Three.Mesh(geometry2, material2);

const group = new Three.Group();

group.add(cube);
group.add(cube2);

// group.position.x = -1;
scene.add(group);

camera.position.z = 5;

const canvas = document.querySelector("canvas");

const renderer = new Three.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const animate = () => {
  window.requestAnimationFrame(animate);
  cube.rotation.y += 0.04;
  cube.rotation.z += 0.04;
  cube2.rotation.y -= 0.01;
  cube2.rotation.z -= 0.01;
  renderer.render(scene, camera);
};
animate();
