const grid = document.getElementById("projects-grid");

function getYoutubeThumbnail(url){

  try{

    if(url.includes("youtu.be/")){

      const id = url.split("youtu.be/")[1].split("?")[0];

      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    if(url.includes("youtube.com/watch?v=")){

      const id = url.split("v=")[1].split("&")[0];

      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

  }

  catch{

    return "images/bts/default.jpg";
  }

  return "images/bts/default.jpg";
}

if(url.includes("youtube.com/watch?v=")){

  const id = url.split("v=")[1].split("&")[0];

  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

  return "images/bts/hero.jpg";
}

projects.forEach(project => {

  const image = getYoutubeThumbnail(project.link);

  grid.innerHTML += `

    <a class="project-card"
       href="${project.link}"
       target="_blank">

      <img src="${image}">

      <div class="project-overlay">

        <p>${project.category}</p>

        <span>${project.role}</span>

        <h3>${project.title}</h3>

      </div>

    </a>

  `;

});