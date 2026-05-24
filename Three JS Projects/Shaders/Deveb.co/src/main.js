import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

const geometry = new Three.IcosahedronGeometry(0.2, 25, 25);
const material = new Three.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    displace: { value: 0.19 },
    decay: { value: 1.2 },
    size: { value: 0.44 },
    complex: { value: 0.0 },
    waves: { value: 20.0 },
    eqcolor: { value: 3.1 },
    rcolor: { value: 2.5 },
    gcolor: { value: 2.4 },
    bcolor: { value: 2.0 },
    redhell: { value: true },
  },
});

const cube = new Three.Mesh(geometry, material);
cube.position.y = -1.3;
scene.add(cube);

camera.position.z = 28;

const canvas = document.querySelector("canvas");

const renderer = new Three.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix(); // if not added will flatten and stretch the model
});

// const controls = new OrbitControls(camera, renderer.domElement);

const timer = new Three.Timer();

const animate = () => {
  window.requestAnimationFrame(animate);
  // controls.update();
  timer.update();
  material.uniforms.uTime.value = timer.getElapsed() * 0.2;
  renderer.render(scene, camera);
};
animate();
