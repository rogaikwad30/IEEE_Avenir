let container , camera , house, scene ;

function init() { 
  container = document.querySelector(".scene"); 
  scene = new THREE.Scene();
  const fov = 35, aspect = container.clientWidth / container.clientHeight, near = 0.1, far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 20);
  const ambient = new THREE.AmbientLight(0xD3FAD6, 2);
  scene.add(ambient);
  const light = new THREE.DirectionalLight(0xEDEBA0, 2);
  light.position.set(0,0,0);
  scene.add(light);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

   let controls = new THREE.OrbitControls(camera , renderer.domElement );
   controls.addEventListener('change', renderer);

  container.appendChild(renderer.domElement);
  
  let loader = new THREE.GLTFLoader();
  loader.load("../js/3dIcons/two/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    house.position.y = -18
    house.scale.set(0.6,0.69,0.39)
    animate();
  });
}
function animate( ) {
  requestAnimationFrame(animate);
  house.position.y += 0.0139;  
    if(house.position.y < 0){
        house.position.y += 0.01007;
      }
      if(house.position.y >= 11){
          house.position.set(0,-22,0) 
      } 
  
  renderer.render(scene, camera);
}
init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
