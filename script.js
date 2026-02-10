const chatBody = document.getElementById("chatBody");

/* Chat messages */
function addUserMsg(text) {
  const div = document.createElement("div");
  div.className = "user-msg";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotMsg(text) {
  const div = document.createElement("div");
  div.className = "bot-msg";
  div.innerHTML = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* Buttons */
function showAbout() {
  addUserMsg("Tell me about yourself");
  addBotMsg("I’m an AI & ML Engineer focused on building real-world intelligent systems.");
}

function showProjects() {
  addUserMsg("Show me your projects");
  addBotMsg("Agentic AI System<br>RAG Medical Assistant<br><a href='https://github.com/Arif0000' target='_blank'>GitHub</a>");
}

function showCerts() {
  addUserMsg("What certifications do you have?");
  addBotMsg("Azure AI Fundamentals<br>Azure Machine Learning");
}

function showContact() {
  addUserMsg("How can I contact you?");
  addBotMsg("📧 ariflpu786@gmail.com");
}

/* Toggle logic */
const chatToggle = document.getElementById("chat-toggle");
const chatClose = document.getElementById("chat-close");
const chatContainer = document.querySelector(".chat-container");

chatToggle.onclick = () => {
  chatContainer.style.display = "flex";
  chatToggle.style.display = "none";
};

chatClose.onclick = () => {
  chatContainer.style.display = "none";
  chatToggle.style.display = "block";
};
