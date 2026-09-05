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
      role: 'Software Engineer (12-month co-op)',
      date: 'Sep 2024 — Aug 2025',
      location: 'Hyderabad, India',
      highlights: [
        "Built and maintained Python/Django REST APIs and PostgreSQL-backed workflows for a production contract-to-cash platform.",
        "Created Cypress regression tests, including Entra ID authentication flows, and ran them automatically through GitHub Actions.",
        "Shipped production releases and investigated application and data issues with teams across the business."
      ],
      tools: ['Python', 'Django REST', 'Cypress', 'Postman', 'PostgreSQL'],
    },
  ],
  projects: [
    {
      title: 'SMART-ROUNDS (Capstone Project)',
      url: 'https://github.com/Smart-Rounds/SMART-ROUNDS-BACKEND',
      description: 'Designed the backend for an AI medical-learning platform: authenticated Django REST APIs accept recordings, Celery and Redis coordinate asynchronous transcription and summarization, and generated media is stored in PostgreSQL and AWS S3.',
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
      description: "Built a full-stack productivity app with a React/TypeScript interface and FastAPI backend. Implemented task and reward workflows, PostgreSQL persistence with SQLAlchemy migrations, automated tests, and CI.",
      image: 'assets/img/projects/eggchi.png',
      imageAlt: 'Eggchi productivity tracker interface',
      tags: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Vitest", "Pytest", "GitHub Actions"],
    },
    {
      title: 'C++ Geospatial Routing Engine',
      url: '',
      description: "Built an interactive street-map application in C++ that parses OpenStreetMap data, models road networks as graphs, and computes routes with Dijkstra's and A* search. Added a GTK/EZGL interface plus unit and integration tests.",
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
      name: 'Frameworks & Infrastructure',
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
