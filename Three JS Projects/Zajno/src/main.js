import LocomotiveScroll from "locomotive-scroll";

import * as Three from "three";
import { OrbitControls, plane } from "three/examples/jsm/Addons.js";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";
import gsap from "gsap";

const locomotiveScroll = new LocomotiveScroll();

const scene = new Three.Scene();

// FOV setting so the size becomes px based
const cameraDistance = 20;
const fov =
  2 * Math.atan(window.innerHeight / 2 / cameraDistance) * (180 / Math.PI); // * by 180/Math.PI as to conert radians to angle

const camera = new Three.PerspectiveCamera(
  fov,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

// const geometry = new Three.PlaneGeometry(100, 100);
// const material = new Three.ShaderMaterial({});

// const plane = new Three.Mesh(geometry, material);
// scene.add(plane);

camera.position.z = cameraDistance;

const canvas = document.querySelector("canvas");

const renderer = new Three.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", (e) => {
  const newFov =
    2 * Math.atan(window.innerHeight / 2 / cameraDistance) * (180 / Math.PI);

  camera.fov = newFov;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix(); // if not added will flatten and stretch the model
  updatePlanesPosition();
});

// const controls = new OrbitControls(camera, renderer.domElement);

// -------------------------------------- Mapping of planes in entire page with texture --------------------------------------

const images = document.querySelectorAll("img");
const planes = [];
images.forEach((image) => {
  console.log(image);
  const imgbounds = image.getBoundingClientRect();

  const texture = new Three.TextureLoader().load(image.src);
  const material = new Three.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTexture: { value: texture },
      uMouse: { value: new Three.Vector2(-1, -1) },
      uHover: { value: 0 },
    },
  });
  const geometry = new Three.PlaneGeometry(imgbounds.width, imgbounds.height);
  const plane = new Three.Mesh(geometry, material);
  plane.position.set(
    imgbounds.left - window.innerWidth / 2 + imgbounds.width / 2,
    -imgbounds.top + window.innerHeight / 2 - imgbounds.height / 2,
    0,
  );
  planes.push(plane);
  scene.add(plane);
});

const raycaster = new Three.Raycaster();
const pointer = new Three.Vector2();
const offscreenMouse = new Three.Vector2(-1, -1);

// ----------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------ Update plane position on scroll -------------------------------------------------

const updatePlanesPosition = () => {
  planes.forEach((plane, index) => {
    const image = images[index];
    const imgbounds = image.getBoundingClientRect();

    // keep the plane geometry aligned with the image bounds on resize
    plane.geometry.dispose();
    plane.geometry = new Three.PlaneGeometry(imgbounds.width, imgbounds.height);

    plane.position.set(
      imgbounds.left - window.innerWidth / 2 + imgbounds.width / 2,
      -imgbounds.top + window.innerHeight / 2 - imgbounds.height / 2,
      0,
    );
  });
};

window.addEventListener("mousemove", (e) => {
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(planes);

  planes.forEach((plane) => {
    gsap.to(plane.material.uniforms.uHover, {
      value: 0,
      duration: 0.3,
    });
  });

  if (intersects.length > 0) {
    const intersectedPlane = intersects[0];
    const uv = intersectedPlane.uv;

    gsap.to(intersectedPlane.object.material.uniforms.uMouse.value, {
      x: uv.x,
      y: uv.y,
      duration: 0.2,
    });

    gsap.to(intersectedPlane.object.material.uniforms.uHover, {
      value: 1,
      duration: 0.3,
    });
  }
});

const timer = new Three.Timer();

const animate = () => {
  window.requestAnimationFrame(animate);
  //   controls.update();
  updatePlanesPosition();
  timer.update();
  renderer.render(scene, camera);
};
animate();

locomotiveScroll.on("scroll", updatePlanesPosition);
