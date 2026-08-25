/*
 * Edit this file to update your portfolio content.
 * Keep image paths relative to index.html.
 */
window.portfolioContent = {
  experiences: [
    {
      company: 'BayRock Labs',
      companyUrl: 'https://www.bayrocklabs.com',
      logo: 'assets/img/bayrocklabs_logo.jpeg',
      logoAlt: 'BayRock Labs logo',
      role: 'Software Engineering Co-op',
      date: 'Sep 2024 — Aug 2025',
      location: 'Hyderabad, India',
      highlights: [
        "Built and maintained backend services for a contract-to-cash platform supporting 150+ client accounts.",
        "Automated regression testing with 50+ Cypress tests, Entra ID authentication and GitHub Actions.",
        "Supported production releases across 5+ departments and helped resolve 200+ application and data issues."
      ],
      tools: ['Python', 'Django REST', 'Cypress', 'Postman', 'PostgreSQL'],
    },
  ],
  projects: [
    {
      title: 'SMART-ROUNDS (Capstone Project)',
      url: 'https://github.com/Smart-Rounds/SMART-ROUNDS-BACKEND',
      description: 'An AI-powered platform that transforms medical audio recordings into concise summaries and podcast-style learning content.',
      image: 'assets/img/projects/smart-rounds.jpg',
      imageAlt: 'Abstract artificial intelligence visualization',
      tags: [
        "Python",
        "Django REST Framework",
        "PostgreSQL",
        "Celery",
        "Redis",
        "Docker",
        "JWT",
        "AWS S3",
        "Whisper",
        "Ollama/DeepSeek",
        "Google WaveNet TTS",
      ],
      featured: true,
    },
    {
      title: 'Eggchi Productivity Tracker',
      url: 'https://github.com/jasjaapdua/eggchi',
      description: "A gamified productivity tracker that combines task management, reminders and progress tracking with a lightweight reward system in the form of a responsive pet!",
      image: 'assets/img/projects/eggchi.png',
      imageAlt: 'Django development project',
      tags: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Vitest", "Pytest", "GitHub Actions"],
    },
    {
      title: 'Geospatial mapping',
      url: '',
      description: "GIS Navigation Application is an interactive C++ mapping application built with OpenStreetMap data and a GTK/EZGL interface.",
      image: 'assets/img/project-gis-map.png',
      imageAlt: 'Geographic information system map project',
      tags: [
  "C++",
  "OpenStreetMap",
  "GTK / EZGL",
  "Dijkstra's Algorithm",
  "A* Search",
  "GDB",
  "Unit Testing",
  "Integration Testing"
],
    },
  ],
  skills: [
    {
      name: 'Languages',
      items: [
        { name: 'Python', logo: 'assets/img/skills/python.png' },
        { name: 'JavaScript', logo: 'assets/img/skills/javascript.png' },
        { name: 'TypeScript', logo: 'assets/img/skills/typescript.png' },
        { name: 'C', logo: 'assets/img/skills/c.png' },
        { name: 'C++', logo: 'assets/img/skills/cpp.png' },
        { name: 'SQL', logo: 'assets/img/skills/sql.png' },
      ],
    },
    {
      name: 'Tools',
      items: [
        { name: 'Django', logo: 'assets/img/skills/django.png' },
        { name: 'FastAPI', logo: 'assets/img/skills/fastapi.png' },
        { name: 'Flask', logo: 'assets/img/skills/flask.png' },
        { name: 'Cypress', logo: 'assets/img/skills/cypress.png' },
        { name: 'PostgreSQL', logo: 'assets/img/skills/postgres.png' },
        { name: 'Docker', logo: 'assets/img/skills/docker.png' },
        { name: 'Git', logo: 'assets/img/skills/git.png' },
        { name: 'AWS', logo: 'assets/img/skills/aws.png' },
        { name: 'GitHub Actions', logo: 'assets/img/skills/github_actions.png' },
      ],
    },
  ],
};
