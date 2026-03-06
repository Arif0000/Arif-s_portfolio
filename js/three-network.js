/* ============================
   3D NEURAL NETWORK (FRONTEND)
============================ */

const container = document.getElementById("three-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

container.appendChild(renderer.domElement);

camera.position.z = 70;


/* ============================
   CREATE NODES
============================ */

const nodes = [];

const nodeGeometry = new THREE.SphereGeometry(0.6, 16, 16);

const nodeMaterial = new THREE.MeshBasicMaterial({
color: 0x38bdf8
});

const NODE_COUNT = 80;

for(let i = 0; i < NODE_COUNT; i++){

const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

node.position.x = (Math.random() - 0.5) * 80;
node.position.y = (Math.random() - 0.5) * 80;
node.position.z = (Math.random() - 0.5) * 80;

scene.add(node);

nodes.push(node);

}


/* ============================
   CREATE CONNECTIONS
============================ */

const lineMaterial = new THREE.LineBasicMaterial({
color: 0x38bdf8,
transparent: true,
opacity: 0.3
});

for(let i = 0; i < nodes.length; i++){

for(let j = i + 1; j < nodes.length; j++){

const dx = nodes[i].position.x - nodes[j].position.x;
const dy = nodes[i].position.y - nodes[j].position.y;
const dz = nodes[i].position.z - nodes[j].position.z;

const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);

/* connect nearby nodes */

if(distance < 20){

const points = [];

points.push(nodes[i].position);
points.push(nodes[j].position);

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, lineMaterial);

scene.add(line);

}

}

}


/* ============================
   ANIMATION
============================ */

function animate(){

requestAnimationFrame(animate);

/* rotate neural network */

scene.rotation.y += 0.0015;
scene.rotation.x += 0.0005;

renderer.render(scene, camera);

}

animate();


/* ============================
   RESPONSIVE
============================ */

window.addEventListener("resize", () => {

camera.aspect = window.innerWidth / window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

});
