let container , camera , house, scene ;

function init() { 
  container = document.querySelector(".scene"); 
  scene = new THREE.Scene();
  const fov = 35, aspect = container.clientWidth / container.clientHeight, near = 0.1, far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 100, 200);
  const ambient = new THREE.AmbientLight(0xA49966, 22);
  scene.add(ambient);
  const light = new THREE.DirectionalLight(0xEAFFDA, 22);
  light.position.set(10,400,400);
  scene.add(light);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 2500);
  directionalLight.position.set(-100, -100, 1111);
  directionalLight.castShadow = true;
  scene.add(directionalLight); 

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

   let controls = new THREE.OrbitControls(camera , renderer.domElement );
   controls.addEventListener('change', renderer);

  container.appendChild(renderer.domElement);
  
  let loader = new THREE.GLTFLoader();
  loader.load("../js/3dIcons/one/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0]; 
    house.scale.set(0.142, 0.142, 0.142)
    animate();
  });
}
function animate( ) {
  requestAnimationFrame(animate); 
  renderer.render(scene, camera);
  house.rotation.y += 0.014
  house.rotation.x += 0.024
  house.rotation.z += 0.0124
}
init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
