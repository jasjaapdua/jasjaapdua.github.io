// Array of project objects
const projects = [
  {
    title: "Geographic Information System",
    img: "/assets/img/project-gis-map.png",
    desc: "A comprehensive GIS leveraging the OpenStreetMap (OSM) database",
    skills: "C++, Data Structures & Algorithms, Agile, Git, Software Design",
    details: [
      "Detailed visualisation of buildings, water bodies, terrain, roads, landmarks, and points of interest.",
      "Implemented navigation using Dijkstra and A* algorithms for optimal pathfinding.",
      "Optimised a Travelling Salesman Problem variation with 2-opt perturbations."
    ]
  },
  {
    title: "Celeste PICO-8 for Terasic DE1-SoC",
    img: "/assets/img/project-celeste.jpg",
    desc: "Recreated the Celeste Pico-8 game for the Terasic DE1-SoC board using C.",
    skills: "C, ImageMagick, FPGA, ARM Assembly",
    details: [
      "Buffered backgrounds and sprites onto a VGA display.",
      "Automated conversion of ImageMagick output into C-arrays.",
      "Implemented collision detection and respawn mechanics."
    ]
  },
]

let currentIndex = 0;
const projectsPerPage = 1;

function renderProjects() {
  const container = document.getElementById("recent-projects-container");

  for (let i = 0; i < projectsPerPage && currentIndex < projects.length; i++) {
    const p = projects[currentIndex];
    
    // Turn details array into <li> items
    const detailsList = p.details && Array.isArray(p.details)
      ? p.details.map(d => `<li>${d}</li>`).join("")
      : "";

    const cardHTML = `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img src="${p.img}" alt="${p.title}" class="activator" style="height: 100%; width: 100%;">
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${p.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${p.desc}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Skills:</b> ${p.skills}</li>
              ${detailsList}
            </ul>
          </div>
        </div>
      </div>`;
    
    container.insertAdjacentHTML("beforeend", cardHTML);
    currentIndex++;
  }

  if (currentIndex >= projects.length) {
    document.getElementById("load-more-btn").style.display = "none";
  }
}


// Initial render (only first project)
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  document.getElementById("load-more-btn").addEventListener("click", renderProjects);
});
