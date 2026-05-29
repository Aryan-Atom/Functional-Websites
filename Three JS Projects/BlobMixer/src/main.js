import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";
import textVertexShader from "../shaders/textVertexShader.glsl";
import textFragmentShader from "../shaders/textFragmentShader.glsl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { Text } from "troika-three-text";

// gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 4, // higher = smoother/slower
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  autoRaf: false,
  lerp: 0.05,
});

// lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const loadingManager = new Three.LoadingManager();
const textureLoader = new Three.TextureLoader(loadingManager);

const blobs = [
  {
    name: "Color Fusion",
    background: "#9D73F7",
    config: {
      uPositionFrequency: 1,
      uPositionStrength: 0.3,
      uSmallWavePositionFrequency: 0.5,
      uSmallWavePositionStrength: 0.7,
      roughness: 1,
      metalness: 0,
      envMapIntensity: 0.5,
      clearcoat: 0,
      clearcoatRoughness: 0,
      transmission: 0,
      flatShading: false,
      wireframe: false,
      map: "gradient_1",
    },
  },
  {
    name: "Purple Mirror",
    background: "#5300B1",
    config: {
      uPositionFrequency: 0.584,
      uPositionStrength: 0.276,
      uSmallWavePositionFrequency: 0.899,
      uSmallWavePositionStrength: 1.266,
      roughness: 0,
      metalness: 1,
      envMapIntensity: 2,
      clearcoat: 0,
      clearcoatRoughness: 0,
      transmission: 0,
      flatShading: false,
      wireframe: false,
      map: "gradient_2",
    },
  },
  {
    name: "Alien Goo",
    background: "#45ACD8",
    config: {
      uPositionFrequency: 1.022,
      uPositionStrength: 0.99,
      uSmallWavePositionFrequency: 0.378,
      uSmallWavePositionStrength: 0.341,
      roughness: 0.292,
      metalness: 0.73,
      envMapIntensity: 0.86,
      clearcoat: 1,
      clearcoatRoughness: 0,
      transmission: 0,
      flatShading: false,
      wireframe: false,
      map: "gradient_3",
    },
  },
];

const scene = new Three.Scene();
scene.background = new Three.Color("#333");
const camera = new Three.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

// -------------------------------------------------Text Mesh---------------------------------------------

const textMaterial = new Three.ShaderMaterial({
  vertexShader: textVertexShader,
  fragmentShader: textFragmentShader,
  side: Three.DoubleSide,
  uniforms: {
    progress: { value: 0 },
    direction: { value: 1 },
  },
});

const texts = blobs.map((blob, index) => {
  const myText = new Text();
  myText.text = blob.name;
  myText.font = `./aften_screen.woff`;
  myText.material = textMaterial;
  myText.anchorX = "center";
  myText.anchorY = "middle";
  myText.position.set(0, 0, 2);
  if (index !== 0) myText.scale.set(0, 0, 0);
  myText.letterSpacing = -0.1;
  myText.fontSize = window.innerWidth / 4000;
  myText.glyphGeometryDetail = 20;
  myText.sync();
  scene.add(myText);
  return myText;
});

let isAnimating = false;
let currentIndex = 0;

window.addEventListener("wheel", (e) => {
  if (isAnimating) return;
  isAnimating = true;
  let direction = Math.sign(e.deltaY);
  let next = (currentIndex + direction + blobs.length) % blobs.length;

  texts[next].scale.set(1, 1, 1);
  texts[next].position.x = direction * 3.5;

  // textMaterial.uniforms.direction.value = direction;

  gsap.to(textMaterial.uniforms.progress, {
    value: 0.5,
    duration: 1,
    ease: "linear",
    onComplete: () => {
      currentIndex = next;
      isAnimating = false;
      textMaterial.uniforms.progress.value = 0;
    },
  });
  gsap.to(texts[currentIndex].position, {
    x: -direction * 3,
    duration: 1,
    ease: "power2.inOut",
  });
  gsap.to(texts[next].position, {
    x: 0,
    duration: 1,
    ease: "power2.inOut",
  });
  gsap.to(sphere.rotation, {
    y: sphere.rotation.y + Math.PI * 4 * -direction,
    duration: 1,
    ease: "power2.inOut",
  });
  const bg = new Three.Color(blobs[next].background);
  gsap.to(scene.background, {
    r: new Three.Color(blobs[next].background).r,
    g: new Three.Color(blobs[next].background).g,
    b: new Three.Color(blobs[next].background).b,
  });
  updateBlob(blobs[next].config);
});

function updateBlob(config) {
  if (config.uPositionFrequency !== undefined)
    gsap.to(material.uniforms.uPositionFrequency, {
      value: config.uPositionFrequency,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.uPositionStrength !== undefined)
    gsap.to(material.uniforms.uPositionStrength, {
      value: config.uPositionStrength,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.uSmallWavePositionFrequency !== undefined)
    gsap.to(material.uniforms.uSmallWavePositionFrequency, {
      value: config.uSmallWavePositionFrequency,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.uSmallWavePositionStrength !== undefined)
    gsap.to(material.uniforms.uSmallWavePositionStrength, {
      value: config.uSmallWavePositionStrength,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.uSmallWaveTimeFrequency !== undefined)
    gsap.to(material.uniforms.uSmallWaveTimeFrequency, {
      value: config.uSmallWaveTimeFrequency,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.map !== undefined) {
    setTimeout(() => {
      material.map = textureLoader.load(`./gradients/${config.map}.png`);
    }, 400);
  }
  if (config.roughness !== undefined)
    gsap.to(material, {
      roughness: config.roughness,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.metalness !== undefined)
    gsap.to(material, {
      metalness: config.metalness,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.envMapIntensity !== undefined)
    gsap.to(material, {
      envMapIntensity: config.envMapIntensity,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.clearcoat !== undefined)
    gsap.to(material, {
      clearcoat: config.clearcoat,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.clearcoatRoughness !== undefined)
    gsap.to(material, {
      clearcoatRoughness: config.clearcoatRoughness,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.transmission !== undefined)
    gsap.to(material, {
      transmission: config.transmission,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.flatShading !== undefined)
    gsap.to(material, {
      flatShading: config.flatShading,
      duration: 1,
      ease: "power2.inOut",
    });
  if (config.wireframe !== undefined)
    gsap.to(material, {
      wireframe: config.wireframe,
      duration: 1,
      ease: "power2.inOut",
    });
}

// -------------------------------------------------Blob Mesh---------------------------------------------

const uniforms = {
  uTime: { value: 0 },
  uPositionFrequency: { value: blobs[currentIndex].config.uPositionFrequency },
  uPositionStrength: { value: blobs[currentIndex].config.uPositionStrength },
  uTimeFrequency: { value: 0.3 },
  uSmallWavePositionFrequency: {
    value: blobs[currentIndex].config.uSmallWavePositionFrequency,
  },
  uSmallWavePositionStrength: {
    value: blobs[currentIndex].config.uSmallWavePositionStrength,
  },
  uSmallWaveTimeFrequency: { value: 0.3 },
};

const geometry = new Three.IcosahedronGeometry(0.7, 70);
const material = new CustomShaderMaterial({
  baseMaterial: Three.MeshPhysicalMaterial,
  vertexShader,
  map: textureLoader.load(`./gradients/${blobs[currentIndex].config.map}.png`),
  metalness: blobs[currentIndex].config.metalness,
  roughness: blobs[currentIndex].config.roughness,
  envMapIntensity: blobs[currentIndex].config.envMapIntensity,
  clearcoat: blobs[currentIndex].config.clearcoat,
  clearcoatRoughness: blobs[currentIndex].config.clearcoatRoughness,
  transmission: blobs[currentIndex].config.transmission,
  flatShading: blobs[currentIndex].config.flatShading,
  wireframe: blobs[currentIndex].config.wireframe,
  uniforms,
});

// ------------------------------------------------ Tangent Creation -------------------------------------------------

const mergeGeometry = mergeVertices(geometry);

mergeGeometry.computeTangents();

const sphere = new Three.Mesh(mergeGeometry, material);
scene.add(sphere);

camera.position.z = 7;

const canvas = document.querySelector("canvas");

const renderer = new Three.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ------------------------------------------------------ HDRI ------------------------------------------

renderer.outputEncoding = Three.sRGBEncoding;
const pmremGenerator = new Three.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

textureLoader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/studio_kominka_02.jpg",
  (texture) => {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    texture.dispose();
    pmremGenerator.dispose();
  },
);

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix(); // if not added will flatten and stretch the model
});

const timer = new Three.Timer();

loadingManager.onLoad = () => {
  const animate = () => {
    window.requestAnimationFrame(animate);
    timer.update();
    uniforms.uTime.value = timer.getElapsed();
    renderer.render(scene, camera);
  };
  const bg = new Three.Color(blobs[currentIndex].background);
  gsap.to(scene.background, {
    r: bg.r,
    g: bg.g,
    b: bg.b,
    duration: 1,
    ease: "linear",
  });
  animate();
};
