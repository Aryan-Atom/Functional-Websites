import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 4, // higher = smoother/slower
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  autoRaf: false,
  lerp: 0.05,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

const geometry = new Three.IcosahedronGeometry(1, 25, 25);
const material = new Three.ShaderMaterial({
  // wireframe: true,
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uColorChange: { value: 0 },
  },
});

const sphere = new Three.Mesh(geometry, material);
sphere.position.y = -1.3;
scene.add(sphere);

camera.position.z = 7;

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

//----------------------------------------------------GSAP----------------------------------------------------------------

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

tl.to(
  sphere.position,
  {
    y: 0,
    ease: "power2.inOut",
    z: -2,
  },
  "a",
)
  .to(
    material.uniforms.uColorChange,
    {
      value: 1,
      ease: "power2.inOut",
    },
    "a",
  )
  .to(
    ".landing h1",
    {
      opacity: 0,
    },
    "a",
  )
  .to(".landing p", {
    opacity: 1,
  });

const animate = () => {
  window.requestAnimationFrame(animate);
  // controls.update();
  timer.update();
  material.uniforms.uTime.value = timer.getElapsed();
  renderer.render(scene, camera);
};
animate();
