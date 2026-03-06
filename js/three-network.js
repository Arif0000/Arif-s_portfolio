
const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document
.getElementById("three-container")
.appendChild(renderer.domElement);

camera.position.z=50;

const nodes=[];

const geometry=new THREE.SphereGeometry(0.4,16,16);

const material=new THREE.MeshBasicMaterial({color:0x38bdf8});

for(let i=0;i<80;i++){

const node=new THREE.Mesh(geometry,material);

node.position.x=(Math.random()-0.5)*80;
node.position.y=(Math.random()-0.5)*80;
node.position.z=(Math.random()-0.5)*80;

scene.add(node);

nodes.push(node);

}

function animate(){

requestAnimationFrame(animate);

nodes.forEach(node=>{
node.rotation.x+=0.01;
node.rotation.y+=0.01;
});

renderer.render(scene,camera);

}

animate();
