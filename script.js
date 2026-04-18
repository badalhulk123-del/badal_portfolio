// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
};

// GITHUB API FETCH
fetch("https://api.github.com/users/YOUR-GITHUB/repos")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("githubProjects");

    data.slice(0, 6).forEach(repo => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <a href="${repo.html_url}" target="_blank">View Repo →</a>
        `;

        container.appendChild(div);
    });
});
