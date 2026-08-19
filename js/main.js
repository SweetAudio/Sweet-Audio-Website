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
    max: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    hq: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
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
loading="lazy"
decoding="async"

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

const track = document.getElementById("logoTrack");

if (!track) {
  // No logo carousel on this page
} else {

let position = 0;
let velocity = -0.4;

let isDragging = false;
let startX = 0;
let currentX = 0;

let pauseTimeout;

function animate(){

  if(!isDragging){
    position += velocity;
  }

  const halfWidth = track.scrollWidth / 2;

  if(position <= -halfWidth){
    position = 0;
  }

  if(position >= 0){
    position = -halfWidth;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(animate);
}

animate();

console.log("Logo carousel running");

function pauseAutoScroll(){

  velocity = 0;

  clearTimeout(pauseTimeout);

  pauseTimeout = setTimeout(() => {
    velocity = -0.4;
  }, 1000);
}

track.addEventListener("mousedown", e => {

  isDragging = true;

  startX = e.clientX - currentX;

  pauseAutoScroll();
});

window.addEventListener("mousemove", e => {

  if(!isDragging) return;

  currentX = e.clientX - startX;

  position += e.movementX;
});

window.addEventListener("mouseup", e => {

  isDragging = false;

  velocity = e.movementX * 0.15;

  pauseAutoScroll();
});

}