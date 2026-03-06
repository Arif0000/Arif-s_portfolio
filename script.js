/* ================================
   LOAD LAST UPDATED GITHUB REPOS
================================ */

const repoContainer = document.getElementById("githubRepos");

fetch("https://api.github.com/users/Arif0000/repos")

.then(response => response.json())

.then(data => {

    /* sort repos by last updated date */
    const latestRepos = data
        .sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0,6);

    latestRepos.forEach(repo => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${repo.name}</h3>

        <p>
        ${repo.description || "Machine Learning / AI Project"}
        </p>

        <p class="repo-meta">

        ⭐ ${repo.stargazers_count}  
        🍴 ${repo.forks_count}

        <br>

        Last updated: 
        ${new Date(repo.updated_at).toLocaleDateString()}

        </p>

        <a href="${repo.html_url}" target="_blank">
        View Project →
        </a>
        `;

        repoContainer.appendChild(card);

    });

})

.catch(error => {

    console.error("GitHub API error:", error);

    repoContainer.innerHTML =
    "<p>Unable to load projects. Please check later.</p>";

});


}

uploadInput.addEventListener("change", runModel);
