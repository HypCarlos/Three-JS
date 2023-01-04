import * as THREE from "three";

// SCENE
const scene = new THREE.Scene();

// SPHERE
const geometry = new THREE.SphereGeometry(3,64,64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


// camera (fov)
const camera = new THREE.PerspectiveCamera(45, 800, 600);
camera.position.z = 20;
scene.add(camera);

// RENDERER
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800,600);
renderer.render(scene,camera);

