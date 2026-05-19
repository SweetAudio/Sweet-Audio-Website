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

    return "images/bts/default.webp";
  }

  return {
    max: `https://img.youtube.com/vi/${id}/maxresdefault.webp`,
    hq: `https://img.youtube.com/vi/${id}/hqdefault.webp`
  };
}

projects.forEach((project,index) => {

  const image = project.image || getYoutubeThumbnail(project.link);

  grid.innerHTML += `

    <a class="project-card"
   style="animation-delay:${index * 0.08}s"
       href="${project.link}"
       target="_blank">

      <img
src="${typeof image === 'string' ? image : image.max}"
onerror="this.onerror=null; this.src='${typeof image === 'string' ? image : image.hq}'"
>

      <div class="project-overlay">

        <p>${project.category}</p>

        <span>${project.role}</span>

        <h3>${project.title}</h3>

      </div>

    </a>

  `;

});