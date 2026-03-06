/* GITHUB REPOS */

const repoContainer = document.getElementById("githubRepos");

fetch("https://api.github.com/users/Arif0000/repos")
.then(res=>res.json())
.then(data=>{

data.slice(0,6).forEach(repo=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "AI/ML Project"}</p>
<a href="${repo.html_url}" target="_blank">
View Repository
</a>
`;

repoContainer.appendChild(card);

});

});


/* AI DEMO */

const upload=document.getElementById("imageUpload");
const result=document.getElementById("predictionResult");

upload.addEventListener("change",()=>{

result.innerText="Running AI Model...";

setTimeout(()=>{

const classes=["Cat","Dog","Car","Tree","Laptop"];

const prediction=classes[Math.floor(Math.random()*classes.length)];

result.innerText="Prediction: "+prediction;

},1500);

});


/* NEURAL NETWORK BACKGROUND */

const canvas=document.getElementById("neuralCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let nodes=[];

for(let i=0;i<70;i++){

nodes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5),
vy:(Math.random()-0.5)
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(node=>{

node.x+=node.vx;
node.y+=node.vy;

ctx.beginPath();
ctx.arc(node.x,node.y,2,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

nodes.forEach(other=>{

let dx=node.x-other.x;
let dy=node.y-other.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(node.x,node.y);
ctx.lineTo(other.x,other.y);
ctx.strokeStyle="rgba(56,189,248,0.2)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();
