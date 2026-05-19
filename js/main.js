const grid = document.getElementById("projects-grid");

function getYoutubeThumbnail(url){

  let id = null;

  if(url.includes("youtu.be/")){

    id = url.split("youtu.be/")[1].split("?")[0];
  }

  if(url.includes("youtube.com/watch?v=")){

    id = url.split("v=")[1].split("&")[0];
  }

  if(!id){

    return "images/bts/default.jpg";
  }

  return {
    max: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    hq: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  };
}

projects.forEach(project => {

  const image = getYoutubeThumbnail(project.link);

  grid.innerHTML += `

    <a class="project-card"
       href="${project.link}"
       target="_blank">

      src="${typeof image === 'string' ? image : image.max}"
  onerror="this.onerror=null; this.src='${image.hq}'"
>

      <div class="project-overlay">

        <p>${project.category}</p>

        <span>${project.role}</span>

        <h3>${project.title}</h3>

      </div>

    </a>

  `;

});