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
    I’m a Data Scientist experienced in building scalable ML pipelines,
    deploying production-grade models, and solving real-world problems in
    retail, finance, and healthcare.<br><br>
    Skills: Python, PySpark, SQL, Scikit-learn, NLP<br>
    Tools: MLflow, Airflow, FastAPI
  `);
}

function showProjects() {
  addUserMsg("Show me your projects");
  addBotMsg(`
     <b>News Summarization (NLP)</b><br>
    Fine-tuned long-document transformer models.<br><br>
     <b>Recommendation System</b><br>
    End-to-end personalized recommender with ML pipelines.<br><br>
    🔗 GitHub: <a href="https://github.com/Arif0000" target="_blank">View Projects</a>
  `);
}

function showCerts() {
  addUserMsg("What certifications do you have?");
  addBotMsg(`
    🎓 Azure Cloud (Data & ML)<br>
    🎓 Azure Machine Learning<br>
    🎓 Databricks & Big Data (in progress)
  `);
}

function showContact() {
  addUserMsg("How can I contact you?");
  addBotMsg(`
    📧 Email: ariflpu786@gmail.com<br>
    💼 <a href="https://www.linkedin.com/in/mohd-arif-ansari/" target="_blank">LinkedIn</a><br>
    🧑‍💻 <a href="https://github.com/Arif0000" target="_blank">GitHub</a>
    🧑‍💻  <a href="https://learn.microsoft.com/en-gb/users/mohdarifansari-4747/" target="_blank">GitHub</a>
  `);
}
