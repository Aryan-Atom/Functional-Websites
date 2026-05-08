import GUI from "lil-gui";
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

const geometry = new THREE.BoxGeometry(1, 1, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const box = new THREE.Mesh(geometry, material);

camera.position.z = 5;

scene.add(box);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

//--------------------Performance---------------------------------//

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//--------------------Mouse Movements lookAt()--------------------//

const mouse = {
  x: 0,
  y: 0,
};

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.clientX / window.innerWidth;
//   mouse.y = e.clientY / window.innerHeight; // as are large number to convert them to [0,1] range  (/ window.innerWidth and window.innerHeight)
// });

// now this will calculate ites between 0 , 1 and we need negative as well so will  (-0.5)

//--------------------Handling Resposnivity----------------------//

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix(); // if not added will flatten and stretch the model
});

//--------------------Orbit Controls ----------------------------//

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // allows a smooth free flow of ease out
// controls.dampingFactor = 0.6;
// controls.enableRotate = false; //Enables and disables rotation
// controls.enableZoom = false;

//---------------------  Max rotation on x axis
controls.minAzimuthAngle = -Math.PI / 4;
controls.maxAzimuthAngle = Math.PI / 4;

//---------------------  Max rotation on y axis
controls.minPolarAngle = -Math.PI / 4;
controls.maxPolarAngle = Math.PI / 4;

//----------------------------------------- zoom range (orthographic)
controls.minZoom = 8;
controls.maxZoom = 12;

//----------------------------------------- zoom range (PerspectiveCamera)
controls.minDistance = 8;
controls.maxDistance = 12;

//---------------------lil - gui--------------------------------//

const gui = new GUI();

const boxSettings = {
  width: 1,
  height: 1,
  depth: 2,

  positionX: 0,
  positionY: 0,
  positionZ: 0,

  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,

  color: "#ff0000",
};

const sizeFolder = gui.addFolder("Box Size");

sizeFolder.add(boxSettings, "width", 0.1, 10, 0.1).onChange(() => {
  box.geometry.dispose();
  box.geometry = new THREE.BoxGeometry(
    boxSettings.width,
    boxSettings.height,
    boxSettings.depth,
  );
});

sizeFolder.add(boxSettings, "height", 0.1, 10, 0.1).onChange(() => {
  box.geometry.dispose();
  box.geometry = new THREE.BoxGeometry(
    boxSettings.width,
    boxSettings.height,
    boxSettings.depth,
  );
});

sizeFolder.add(boxSettings, "depth", 0.1, 10, 0.1).onChange(() => {
  box.geometry.dispose();
  box.geometry = new THREE.BoxGeometry(
    boxSettings.width,
    boxSettings.height,
    boxSettings.depth,
  );
});

const positionFolder = gui.addFolder("Position");

positionFolder.add(box.position, "x", -10, 10, 0.1).name("positionX");

positionFolder.add(box.position, "y", -10, 10, 0.1).name("positionY");

positionFolder.add(box.position, "z", -10, 10, 0.1).name("positionZ");

const rotationFolder = gui.addFolder("Rotation");

rotationFolder.add(box.rotation, "x", 0, Math.PI * 2, 0.01).name("rotationX");

rotationFolder.add(box.rotation, "y", 0, Math.PI * 2, 0.01).name("rotationY");

rotationFolder.add(box.rotation, "z", 0, Math.PI * 2, 0.01).name("rotationZ");

gui.addColor(boxSettings, "color").onChange((value) => {
  box.material.color.set(value);
});

//-------------------- Render Function -------------------------//

const animate = () => {
  window.requestAnimationFrame(animate);
  controls.update();
  // box.lookAt(2 * (mouse.x - 0.5), 2 * (-mouse.y + 0.5), 1); // three js calculate value in downwards y negative, but web calculates downward positive
  renderer.render(scene, camera);
};

animate();
