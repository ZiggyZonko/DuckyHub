// Borrowed code from old project

const projectsContainer = document.getElementById("github-projects");

async function fetchGitHubProjects() {

    try {

        const response = await fetch(
            "https://api.github.com/users/ZiggyZonko/repos?sort=updated&per_page=100"
        );

        if (!response.ok) {
            throw new Error("GitHub API request failed");
        }

        const projects = await response.json();

        projectsContainer.innerHTML = "";

        projects.forEach(project => {

            const projectDiv = document.createElement("div");
            projectDiv.className = "github-project";


            // =========================
            // PROJECT HEADER
            // =========================

            const projectHeader = document.createElement("div");
            projectHeader.className = "github-project-header";

            const projectTitle = document.createElement("h4");
            projectTitle.textContent = project.name;

            projectHeader.appendChild(projectTitle);


            // =========================
            // GITHUB BUTTON
            // =========================

            const githubLink = document.createElement("a");

            githubLink.href = project.html_url;
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";

            githubLink.className = "github-button";
            githubLink.setAttribute(
                "aria-label",
                `Open ${project.name} on GitHub`
            );

            githubLink.innerHTML = `
                <i class="fa-brands fa-github"></i>
            `;

            projectHeader.appendChild(githubLink);

            projectDiv.appendChild(projectHeader);


            // =========================
            // DESCRIPTION
            // =========================

            const description = document.createElement("p");

            description.className = "github-description";

            description.textContent =
                project.description || "No description available.";

            projectDiv.appendChild(description);


            // =========================
            // PROJECT INFO
            // =========================

            const info = document.createElement("div");

            info.className = "github-info";


            // LANGUAGE

            if (project.language) {

                const language = document.createElement("span");

                language.className = "github-language";

                const languageName =
                    project.language.toLowerCase()
                        .replace("c++", "cplusplus")
                        .replace("c#", "csharp")
                        .replace("javascript", "javascript")
                        .replace("typescript", "typescript");

                language.innerHTML = `
                    <i class="devicon-${languageName}-plain colored"></i>
                    ${project.language}
                `;

                info.appendChild(language);
            }


            // STARS

            const stars = document.createElement("span");

            stars.className = "github-stat";

            stars.innerHTML = `
                <i class="fa-solid fa-star"></i>
                ${project.stargazers_count}
            `;

            info.appendChild(stars);


            // FORKS

            const forks = document.createElement("span");

            forks.className = "github-stat";

            forks.innerHTML = `
                <i class="fa-solid fa-code-branch"></i>
                ${project.forks_count}
            `;

            info.appendChild(forks);


            projectDiv.appendChild(info);


            // =========================
            // ADD TO PAGE
            // =========================

            projectsContainer.appendChild(projectDiv);

        });

    } catch (error) {

        console.error("Failed to fetch GitHub projects:", error);

        projectsContainer.innerHTML = `
            <p class="github-error">
                couldn't load my GitHub repositories :(
            </p>
        `;
    }
}

fetchGitHubProjects();