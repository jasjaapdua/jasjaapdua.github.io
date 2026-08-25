const content = window.portfolioContent ?? { experiences: [], projects: [], skills: [] };

function element(tagName, { className, text } = {}) {
  const node = document.createElement(tagName);

  if (className) node.className = className;
  if (text) node.textContent = text;

  return node;
}

function createTagList(items, className, label) {
  const list = element('ul', { className });
  list.setAttribute('aria-label', label);

  items.forEach((item) => list.append(element('li', { text: item })));
  return list;
}

function renderExperiences() {
  const container = document.querySelector('#experience-list');
  if (!container) return;

  content.experiences.forEach((experience) => {
    const card = element('article', { className: 'experience-card reveal' });
    const heading = element('div', { className: 'experience-heading' });
    const companyLink = element('a', { className: 'company-logo' });
    const logo = element('img');

    companyLink.href = experience.companyUrl;
    companyLink.target = '_blank';
    companyLink.rel = 'noreferrer';
    logo.src = experience.logo;
    logo.alt = experience.logoAlt;
    companyLink.append(logo);

    const title = element('div');
    title.append(element('p', { className: 'company', text: experience.company }));
    title.append(element('h3', { text: experience.role }));
    heading.append(companyLink, title);

    const date = element('p', { className: 'experience-date' });
    date.append(experience.date, document.createElement('br'), experience.location);

    const highlights = createTagList(experience.highlights, 'impact-list', 'Key accomplishments');
    const tools = createTagList(experience.tools, 'experience-tools', 'Technologies used');
    card.append(heading, date, highlights, tools);
    container.append(card);
  });
}

function renderProjects() {
  const container = document.querySelector('#project-list');
  if (!container) return;

  content.projects.forEach((project) => {
    const item = element('li');
    const cardClass = `project-card reveal${project.featured ? ' project-featured' : ''}`;
    const card = element('article', { className: cardClass });
    const imageContainer = element('div', { className: 'project-image' });
    const image = element('img');
    const projectContent = element('div', { className: 'project-content' });

    image.src = project.image;
    image.alt = project.imageAlt;
    image.loading = 'lazy';
    imageContainer.append(image);

    projectContent.append(
      element('h3', { text: project.title }),
      element('p', { text: project.description }),
      createTagList(project.tags, 'project-tags', 'Technologies used'),
    );

    card.append(imageContainer, projectContent);
    item.append(card);
    container.append(item);
  });
}

function renderSkills() {
  const container = document.querySelector('#skills-list');
  if (!container) return;

  container.classList.add('reveal');

  content.skills.forEach((group) => {
    const section = element('section', { className: 'skill-group' });
    const window = element('div', { className: 'skill-scroll-window' });
    const list = element('ul', { className: 'skill-logo-list' });

    list.setAttribute('aria-label', group.name);
    list.tabIndex = 0;

    group.items.forEach((skill) => {
      const item = element('li');
      const logo = element('img');

      logo.src = skill.logo;
      logo.alt = `${skill.name} logo`;
      logo.loading = 'lazy';
      item.append(logo, element('span', { text: skill.name }));
      list.append(item);
    });

    section.append(element('h3', { className: 'skill-category', text: group.name }), window);
    window.append(list);
    container.append(section);
  });
}

renderExperiences();
renderProjects();
renderSkills();

const menuToggle = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');
const yearElement = document.querySelector('#year');

function closeNavigation() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  navigationLinks?.classList.remove('open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigationLinks?.classList.toggle('open', !isOpen);
});

navigationLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavigation);
});

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
