import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

          
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x00ff00,
  metalness: 0.4,
  roughness: 0.3,
  clearcoat: 0.6,
  reflectivity: 0.7
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -1.2;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const sphereMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x2196f3,
  metalness: 0.7,
  roughness: 0.2,
  clearcoat: 1.0,
  reflectivity: 1.0
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 1.2;
scene.add(sphere);

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  


const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let previousIntersected = null;
let originalColor = null;

const HOVER_COLOR = 0xffa500; 

const onPointerMove = (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects([sphere, cube]);
  if (intersects.length > 0) {
    const intersected = intersects[0].object;
    if (previousIntersected !== intersected) {
      // restore color of previous
      if (previousIntersected) {
        previousIntersected.material.color.set(originalColor);
      }
      // store new
      originalColor = intersected.material.color.clone();
      intersected.material.color.set(HOVER_COLOR);
      previousIntersected = intersected;
    }
  } else {
    // mouse left any object: revert color back
    if (previousIntersected) {
      previousIntersected.material.color.set(originalColor);
      previousIntersected = null;
      originalColor = null;
    }
  }
};

window.addEventListener('mousemove', onPointerMove);


function animate() {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});