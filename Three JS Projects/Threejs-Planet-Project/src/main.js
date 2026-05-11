import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import gsap from "gsap";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
scene.add(camera);

const radius = 1;
const segments = 32;
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00];
const spheres = new THREE.Group();

for (let i = 0; i < 4; i++) {
  const geometry = new THREE.SphereGeometry(radius, segments, segments);
  const material = new THREE.MeshBasicMaterial({ color: colors[i] });
  const sphere = new THREE.Mesh(geometry, material);

  const angle = (i / 4) * (Math.PI * 2);

  sphere.position.x = 3 * Math.cos(angle);
  sphere.position.z = 3 * Math.sin(angle);

  spheres.add(sphere);
}

scene.add(spheres);

camera.position.z = 8;

const canvas = document.querySelector("canvas");
const render = new THREE.WebGLRenderer({ canvas, antialias: true });
render.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, render.domElement);

setInterval(() => {
  gsap.to(spheres.rotation, {
    y: `+=${Math.PI / 2}`,
    duration: 2,
    ease: "expo.inOut",
  });
}, 2000);
const animate = () => {
  requestAnimationFrame(animate);
  render.render(scene, camera);
};

animate();
