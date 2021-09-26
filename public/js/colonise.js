 
let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 20);

  const ambient = new THREE.AmbientLight(0xD3FAD6, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xEDEBA0, 2);
  light.position.set(0,0,0);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  let controls = new THREE.OrbitControls(camera , renderer.domElement );
  controls.addEventListener('change', renderer);
  container.appendChild(renderer.domElement);
 
  let directionalLight = new THREE.DirectionalLight(0x8E3B46,100);
  directionalLight.position.set(00, 00, 1);
  directionalLight.castShadow = true;
  scene.add(directionalLight); 

  let loader = new THREE.GLTFLoader();
  loader.load("../js/3dIcons/seven/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    house.scale.set(1,0.95,1)
    house.position.set(0,0,0)
    animate();
  });
}
function animate() {
  requestAnimationFrame(animate);
  house.rotation.z += 0.001;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
