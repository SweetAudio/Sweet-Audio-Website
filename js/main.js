const grid = document.getElementById("projects-grid");

projects.forEach(project => {

  grid.innerHTML += `

    <a class="project-card"
       href="${project.link}"
       target="_blank">

      <div class="project-fallback">

        <span>${project.category}</span>

        <h3>${project.title}</h3>

      </div>

    </a>

  `;

});