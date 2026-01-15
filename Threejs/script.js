// ------------- Scene -------------

const scene = new THREE.Scene();

// --------------- Camera --------------

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// -------------------- Geometry / Object -----------------

const geometry = new THREE.CylinderGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera Position (Else both camera and object origin will be at (0,0,0) and nothing will render)

camera.position.z = 5;

// ----------------- Setting up the renderer --------------------

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// Animating Object and rendering it using request animation

// function animate() {
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.1;
//   cube.rotation.y += 0.1;
//   cube.rotation.z += 0.1;
// }
// renderer.setAnimationLoop(animate);

const animate = () => {
  window.requestAnimationFrame(animate);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  cube.rotation.z += 0.1;
  renderer.render(scene, camera);
};

animate();
