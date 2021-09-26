let container , camera , house, scene , house1;

function init() { 
  container = document.querySelector(".scene"); 
  scene = new THREE.Scene();
  const fov = 35, aspect = container.clientWidth / container.clientHeight, near = 0.1, far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, -500, 520);
  const ambient = new THREE.AmbientLight(0x000000, 2);
  scene.add(ambient);
  const light = new THREE.DirectionalLight(0xfff, 2);
  light.position.set(0,0,0);
  scene.add(light);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  let directionalLight = new THREE.DirectionalLight(0x8E3B46,100);
  directionalLight.position.set(-100, -100, 1111);
  directionalLight.castShadow = true;
  scene.add(directionalLight); 


  let controls = new THREE.OrbitControls(camera , renderer.domElement );
  controls.addEventListener('change', renderer);
  container.appendChild(renderer.domElement);
  
  let loader = new THREE.GLTFLoader();
  loader.load("../js/3dIcons/five/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0]; 
    house.position.set(150,0,0)
    animate();
  });

  let loader1 = new THREE.GLTFLoader();
  loader1.load("../js/3dIcons/one/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house1 = gltf.scene.children[0]; 
    house1.scale.set(0.5,0.5,0.5)
    house1.position.set(-850,-100,0)
    animate();
  });
}
function animate( ) {
  requestAnimationFrame(animate);
  house.rotation.z += 0.0023 ;
  house.rotation.x += 0.0023 ;
  house.rotation.y += 0.0023 ;
   
  house1.rotation.z += 0.02 ;
  if(house1.position.x !== house.position.x -100){
     house1.position.x += 1;
  }
  else{ 
    if( house.rotation.x > 0){
      house.rotation.x -= 0.05  ;
    }
    else{
      house.rotation.x = 0 ;
    }
    if( house.rotation.y > 0){
      house.rotation.y -= 0.05 ;
    }
    else{
      house.rotation.y = 0 ;
    }
    if( house.rotation.z > 0){
      house.rotation.z -= 0.05  ;
    } 
    else{
      house.rotation.z = 0 ;
    }

    if( house1.rotation.x > 0){
      house1.rotation.x -= 0.025  ;
    }
    else{
      house1.rotation.x = 0.0025 ;
    }
    if( house1.rotation.y > 0){
      house1.rotation.y -= 0.025 ;
    }
    else{
      house1.rotation.y = 0.0025 ;
    }
    if( house1.rotation.z > 0){
      house1.rotation.z -= 0.025 ;
    } 
    else{
      house1.rotation.z = 0.0025;
    }
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
