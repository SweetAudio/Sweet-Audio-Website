const grid = document.getElementById("projects-grid");

projects.forEach(project => {

  grid.innerHTML += `

    <a class="project-card"
       href="${project.link}"
       target="_blank">

      <img src="${project.image}">

      <div class="project-overlay">

        <h3>${project.title}</h3>

        <p>${project.category}</p>

      </div>

    </a>

  `;

});