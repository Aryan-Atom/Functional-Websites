import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import "./style.scss";

// Get canvas
const canvas = document.querySelector("#experience-canvas");
const experience = document.querySelector("#experience");
const isMobileMedia = window.matchMedia(
  "(max-width: 768px), (pointer: coarse)"
);
const baseFov = 25;
const mobileFov = 40; // Reduced FOV for mobile
const sizes = { width: window.innerWidth, height: window.innerHeight };
const baseTarget = new THREE.Vector3(
  -0.5606242876205354,
  2.398642331480653,
  -0.6845418531121432
);
const basePosition = new THREE.Vector3(
  13.416304985610472,
  7.498278735059506,
  14.793638164008605
);

function getPixelRatio() {
  return Math.min(window.devicePixelRatio, isMobileMedia.matches ? 1.5 : 2);
}

// Create renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: !isMobileMedia.matches,
  alpha: true,
  powerPreference: isMobileMedia.matches ? "low-power" : "high-performance"
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

// Create scene
const scene = new THREE.Scene();

// HDRI environment lighting (replaces manual lights)
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

new HDRLoader().load(
  "/hdri/citrus_orchard_road_puresky_2k.hdr",
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = texture;
    scene.environment = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environmentIntensity = 0.75;
    texture.dispose();
    pmremGenerator.dispose();
  },
  undefined,
  (error) => console.error("Failed to load HDRI", error)
);

// Camera
const camera = new THREE.PerspectiveCamera(
  isMobileMedia.matches ? mobileFov : baseFov,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.copy(basePosition);

scene.add(camera);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Allow smooth pan (right/left movement) as well as zoom in/out
controls.enablePan = true;
controls.screenSpacePanning = false; // vertical pan will stay vertical in world
controls.panSpeed = 0.3; // slow down pan
controls.dampingFactor = isMobileMedia.matches ? 0.09 : 0.12;
controls.zoomSpeed = isMobileMedia.matches ? 0.75 : 0.4; // slower and smooth zoom
controls.rotateSpeed = 0.055; // slightly slower for smooth rotation

controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN
}; // allow two-finger pan and zoom

controls.target.copy(baseTarget);
controls.update();

const baseOffset = basePosition.clone().sub(baseTarget);
const baseSpherical = new THREE.Spherical().setFromVector3(baseOffset);
const initialPhi = baseSpherical.phi;
const initialTheta = baseSpherical.theta;

// Constrain orbiting tilt (up/down movement)
const polarLimit = 0;
controls.minPolarAngle = initialPhi - polarLimit;
controls.maxPolarAngle = initialPhi + polarLimit;

// Limit left/right swing (azimuth) for smoothness
const azimuthLimit = 0.15;
controls.minAzimuthAngle = initialTheta - azimuthLimit;
controls.maxAzimuthAngle = initialTheta + azimuthLimit;

// Allow zoom in/out, but clamp distance to min/max
// Calculate a reasonable min/max distance from initial camera-target offset
const baseDistance = baseOffset.length();
controls.minDistance = baseDistance * 0.4;  // Can get 40% as close
controls.maxDistance = baseDistance * 2.0;  // Can get up to double the distance

function applyResponsiveFraming() {
  camera.aspect = sizes.width / sizes.height;
  camera.fov = isMobileMedia.matches ? mobileFov : baseFov;
  camera.position.copy(basePosition);
  camera.updateProjectionMatrix();
  controls.update();
}

function updateExperienceSize() {
  const rect = experience.getBoundingClientRect();
  sizes.width = Math.max(Math.floor(rect.width), 1);
  sizes.height = Math.max(Math.floor(rect.height), 1);

  applyResponsiveFraming();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(getPixelRatio());
}

updateExperienceSize();

const resizeObserver = new ResizeObserver(updateExperienceSize);
resizeObserver.observe(experience);
window.visualViewport?.addEventListener("resize", updateExperienceSize);
window.addEventListener("orientationchange", () =>
  setTimeout(updateExperienceSize, 150)
);
isMobileMedia.addEventListener("change", updateExperienceSize);

// Set up texture and gltf loading
const textureLoader = new THREE.TextureLoader();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

const textureMap = {
  first: "/textures/TextureSet1.jpg",
  second: "/textures/TextureSet2.jpg",
  third: "/textures/TextureSet3.jpg",
  fourth: "/textures/TextureSet4.jpg"
};

// Helper function to load and flip Y for textures
function loadTextureFlippedY(path) {
  const tex = textureLoader.load(path);
  tex.flipY = false;
  return tex;
}

// Preload textures once (shared across meshes)
const textures = {
  first: loadTextureFlippedY(textureMap.first),
  second: loadTextureFlippedY(textureMap.second),
  third: loadTextureFlippedY(textureMap.third),
  fourth: loadTextureFlippedY(textureMap.fourth)
};

const meshTextureMap = {
  Mesh1: textures.first,
  Mesh2: textures.second,
  Mesh3: textures.third
};

// Load GLB and apply textures
loader.load(
  "/models/Room-v1.glb",
  (glb) => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // GLB meshes often share one material — clone so each mesh gets its own map
        child.material = child.material.clone();
        child.material.map = meshTextureMap[child.name] ?? textures.fourth;
        child.material.envMapIntensity = 1;
        child.material.needsUpdate = true;
      }
    });
    scene.add(glb.scene);
  },
  (xhr) => {
    // Optionally, log loading progress
    // console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  },
  (error) => {
    console.error("An error happened while loading the model", error);
  }
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
