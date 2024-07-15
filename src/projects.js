'use strict';

//projects filtering logic

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;

  if (filter == null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  //reset the active menu
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  //project filtering
  projects.forEach((project) => {
    if (filter == 'all' || project.dataset.type === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}
