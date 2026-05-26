import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll();

// import * as Three from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import vertexShader from "../shaders/vertexShader.glsl";
// import fragmentShader from "../shaders/fragmentShader.glsl";

// const scene = new Three.Scene();

// const camera = new Three.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );

// const geometry = new Three.BoxGeometry(1, 1, 1);
// const material = new Three.ShaderMaterial({});

// const cube = new Three.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 7;

// const canvas = document.querySelector("canvas");

// const renderer = new Three.WebGLRenderer({
//   canvas: canvas,
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// window.addEventListener("resize", (e) => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.updateProjectionMatrix(); // if not added will flatten and stretch the model
// });

// const controls = new OrbitControls(camera, renderer.domElement);

// const timer = new Three.Timer();

// const animate = () => {
//   window.requestAnimationFrame(animate);
//   controls.update();
//   timer.update();
//   renderer.render(scene, camera);
// };
// animate();
