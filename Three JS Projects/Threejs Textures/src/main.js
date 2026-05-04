import * as THREE from "three";
import { OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";
//-------------------- Scene / Camera -------------------------//
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

//-------------------- HDRI ----------------------//

// const hdri = new RGBELoader();

// hdri.load(
//   "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/sundowner_overlook_1k.hdr",

//   function (hdriTexture) {
//     hdriTexture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = hdriTexture;
//   },
// );

//-------------------- Textures ------------------//

const textureLoader = new THREE.TextureLoader();

const moonTexture = textureLoader.load("./moon.jpg");

moonTexture.colorSpace = THREE.SRGBColorSpace; // for better contrast colours

const cloudTexture = textureLoader.load("./clouds.jpg");

cloudTexture.colorSpace = THREE.SRGBColorSpace; // for better contrast colours

//-------------------- Geometery / Object -------------------------//

const geometry = new THREE.SphereGeometry(1, 60, 60);
const material = new THREE.MeshPhysicalMaterial({ map: moonTexture });
const moon = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.SphereGeometry(1.02, 60, 60);
const material2 = new THREE.MeshPhysicalMaterial({ alphaMap: cloudTexture }); // to load alphamap and transparent textutres
material2.transparent = true;
const clouds = new THREE.Mesh(geometry2, material2);

// material.metalness = 0.5;
// material.roughness = 0.5;

camera.position.z = 5;

scene.add(moon);
scene.add(clouds);
//-------------------- Lights -------------------------//
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

// directionalLight.position.y = 6;
// directionalLight.position.x = 6;
// directionalLight.position.z = 6;

directionalLight.position.set(6, 6, 6);

scene.add(directionalLight);

const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(helper);

//-------------------- Renderer -------------------------//

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

//--------------------Orbit Controls ----------------------------//

const controls = new OrbitControls(camera, renderer.domElement);

//-------------------- Render Function -------------------------//

const animate = () => {
  window.requestAnimationFrame(animate);
  clouds.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
};

animate();
