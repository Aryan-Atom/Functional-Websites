import * as Three from "three";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

const geometry = new Three.PlaneGeometry(0.5, 0.5, 30, 30);
const material = new Three.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  side: Three.DoubleSide,
  uniforms: {
    uTime: { value: 0 },
    uTexture:{value: new Three.TextureLoader().load("./textures/texture.png")}
  },
});

const cube = new Three.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const canvas = document.querySelector("canvas");

const renderer = new Three.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const animate = () => {
  window.requestAnimationFrame(animate);

  material.uniforms.uTime.value += 0.1;

  controls.update();

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
animate();
