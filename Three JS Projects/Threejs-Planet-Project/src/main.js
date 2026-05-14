import * as THREE from "three";
import { HDRLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import gsap from "gsap";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
scene.add(camera);

//HDRI

const loader = new HDRLoader();
loader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/moonlit_golf_1k.hdr",
  function (hdriTexture) {
    hdriTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdriTexture;
    // scene.environmentIntensity = 2.5;
  },
);

// Background
const starTexture = new THREE.TextureLoader().load("./stars/stars.jpg");
starTexture.colorSpace = THREE.SRGBColorSpace;
const starGeometry = new THREE.SphereGeometry(50, 32, 32);
const starMaterial = new THREE.MeshPhysicalMaterial({
  map: starTexture,
  side: THREE.BackSide,
  opacity: 0.4,
  transparent: true,
});

const starSphere = new THREE.Mesh(starGeometry, starMaterial);

scene.add(starSphere);

const radius = 1.1;
const orbitRadius = 3.5;
const segments = 32;
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00];
const spheres = new THREE.Group();
const textures = [
  "./csilla/color.png",
  "./earth/map.jpg",
  "./venus/map.jpg",
  "./volcanic/color.png",
];

for (let i = 0; i < 4; i++) {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textures[i]);
  texture.colorSpace = THREE.SRGBColorSpace;
  const geometry = new THREE.SphereGeometry(radius, segments, segments);
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);

  const angle = (i / 4) * (Math.PI * 2);

  sphere.position.x = orbitRadius * Math.cos(angle);
  sphere.position.z = orbitRadius * Math.sin(angle);

  spheres.add(sphere);
}

spheres.rotation.x = 0.14;
spheres.position.y = -0.48;

scene.add(spheres);

camera.position.z = 8;

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// const controls = new OrbitControls(camera, renderer.domElement);

setInterval(() => {
  gsap.to(spheres.rotation, {
    y: `+=${Math.PI / 2}`,
    duration: 1.5,
    ease: "expo.inOut",
  });
}, 2000);
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
