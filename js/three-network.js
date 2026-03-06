const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document
.getElementById("three-container")
.appendChild(renderer.domElement);

camera.position.z = 60;

const nodeMaterial = new THREE.MeshBasicMaterial({
color:0x38bdf8
});

const nodeGeometry = new THREE.SphereGeometry(0.5,16,16);

fetch("http://127.0.0.1:8000/neural-network")

.then(res=>res.json())

.then(data=>{

const nodes = [];

data.nodes.forEach(n=>{

const node = new THREE.Mesh(nodeGeometry,nodeMaterial);

node.position.set(n.x,n.y,n.z);

scene.add(node);

nodes.push(node);

});


data.edges.forEach(edge=>{

const source = nodes[edge.source];
const target = nodes[edge.target];

const points = [];

points.push(source.position);
points.push(target.position);

const geometry =
new THREE.BufferGeometry().setFromPoints(points);

const material =
new THREE.LineBasicMaterial({color:0x38bdf8});

const line = new THREE.Line(geometry,material);

scene.add(line);

});

});


function animate(){

requestAnimationFrame(animate);

scene.rotation.y += 0.002;

renderer.render(scene,camera);

}

animate();
