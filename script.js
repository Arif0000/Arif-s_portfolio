const chatBody = document.getElementById("chatBody");

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

function showAbout() {
  addUserMsg("Tell me about yourself");
  addBotMsg(`
    I’m an AI & Machine Learning Engineer experienced in building
    scalable ML pipelines, deploying production-grade models,
    and solving real-world problems.<br><br>
    <b>Skills:</b> Python, SQL, NLP, ML, DL<br>
    <b>Tools:</b> Scikit-learn, TensorFlow, PyTorch, FastAPI
  `);
}

function showProjects() {
  addUserMsg("Show me your projects");
  addBotMsg(`
    <b>Agentic AI System</b><br>
    Multi-agent AI for automated reasoning.<br><br>

    <b>RAG Medical Assistant</b><br>
    Personalized medical recommendation system.<br><br>

    🔗 <a href="https://github.com/Arif0000" target="_blank">View GitHub</a>
  `);
}

function showCerts() {
  addUserMsg("What certifications do you have?");
  addBotMsg(`
    🎓 Azure Data & AI Fundamentals<br>
    🎓 Azure Machine Learning<br>
    🎓 Databricks & Big Data (In Progress)<br><br>
    🔗 <a href="https://learn.microsoft.com/en-gb/users/mohdarifansari-4747/" target="_blank">
    Microsoft Learn
    </a>
  `);
}

function showContact() {
  addUserMsg("How can I contact you?");
  addBotMsg(`
    📧 Email: ariflpu786@gmail.com<br>
    💼 <a href="https://www.linkedin.com/in/mohd-arif-ansari/" target="_blank">LinkedIn</a><br>
    🧑‍💻 <a href="https://github.com/Arif0000" target="_blank">GitHub</a>
  `);
}
