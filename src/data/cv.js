export const profile = {
  name: 'Raul Angel Valdes Corona',
  role: 'Software Engineer',
  tagline:
    'Construyo apps móviles y web que llegan a cientos de miles de personas — React Native, Next.js y arquitecturas de microservicios.',
  location: 'Ensenada, Baja California, México',
  email: 'raulvaldes.work@gmail.com',
  phone: '+52 (646) 108 0390',
  github: 'https://github.com/raulvaldes-cetys',
  linkedin: 'https://www.linkedin.com/in/raul-valdes-corona/',
  resume: '/cv-raul-valdes-corona.pdf',
}

export const stats = [
  { value: '150k+', label: 'usuarios mensuales por app' },
  { value: '20%', label: 'reducción de crashes' },
  { value: '3x', label: '1er lugar en Engineering Fair' },
  { value: '9.1', label: 'GPA sobre 10' },
]

export const education = [
  {
    school: 'CETYS Universidad',
    degree: 'Bachelor of Science in Software Engineering',
    period: 'Graduación esperada: Julio 2027',
    gpa: 'GPA 9.1 / 10',
    courses: [
      'Object Oriented Programming',
      'Algorithm Analysis',
      'Software Modeling',
      'UI/UX Design',
      'Database Design',
      'Operating Systems Fundamentals',
      'Web Development',
    ],
  },
]

export const experience = [
  {
    company: 'LKMX',
    role: 'Software Engineer',
    period: 'Julio 2025 — Presente',
    current: true,
    bullets: [
      'Desarrollé features y pantallas para dos de las apps móviles de telecomunicaciones más grandes de México (150,000+ usuarios mensuales cada una) con React Native, Expo y TypeScript, dentro de un equipo ágil con pruebas unitarias.',
      'Reduje los crashes de la aplicación en 20% optimizando la arquitectura del código existente e implementando patrones eficientes de manejo de estado, mejorando directamente la experiencia y estabilidad.',
      'Construí módulos de micro frontend con Next.js e integré agentes de IA usando Google ADK para una plataforma de marketing: métricas, generación de audiencias, extracción de analítica y creación de assets con IA, dentro de una arquitectura de microservicios con React y TypeScript.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Next.js', 'Google ADK'],
  },
  {
    company: 'Concretos Industrializados Valdés S.A. de C.V.',
    role: 'Freelance Software Developer',
    period: 'Febrero 2025 — Junio 2025',
    current: false,
    bullets: [
      'Entregué una solución web completa de generación de leads, incrementando los leads calificados en 20% al trabajar directamente con stakeholders para identificar y optimizar los requerimientos del negocio.',
      'Ejecuté el proceso completo de diseño UI/UX desde investigación de usuario hasta la implementación final, creando wireframes y un diseño responsivo mobile-first que agilizó el flujo de captura de leads y mejoró el engagement.',
    ],
    stack: ['UI/UX', 'Web', 'Mobile-first'],
  },
]

export const projects = [
  {
    name: 'Smart Bussing',
    period: 'Abril 2025',
    summary:
      'Prototipo de app móvil cross-platform que permite a los usuarios aprovechar mejor el transporte público.',
    bullets: [
      '1er lugar entre 12 equipos en el CETYS 2025 Engineering Fair.',
      'Permitió visualizar rutas locales de transporte público obtenidas de documentación provista por la ciudad.',
      'Integró comentarios de usuarios y feedback de rutas para aumentar el engagement de la comunidad.',
    ],
    stack: ['React Native', 'Tailwind', 'Spring Boot', 'PostgreSQL'],
    award: '1er lugar',
  },
  {
    name: 'FeastFlick',
    period: 'Septiembre 2024',
    summary:
      'Aplicación web que ofrece una alternativa local a los servicios de pedidos de comida en línea, enfocada en vendedores de la comunidad.',
    bullets: [
      'Construí una API RESTful con Spring Boot para gestionar autenticación de usuarios, listados de restaurantes, órdenes y pagos.',
      'Diseñé e implementé la interfaz frontend con React y Tailwind CSS, priorizando diseño responsivo y accesibilidad.',
    ],
    stack: ['Spring Boot', 'React', 'Tailwind CSS'],
    award: null,
  },
  {
    name: 'Auction MVC Web App',
    period: 'Marzo 2024',
    summary: 'Aplicación web que permite a los usuarios explorar y publicar listados de subastas.',
    bullets: [
      'Implementé una API RESTful con ASP.NET y C# que permite crear y explorar listados, publicar comentarios y colocar pujas.',
      'Persistencia de datos con SQL Server Express.',
    ],
    stack: ['ASP.NET', 'C#', 'SQL Server Express'],
    award: null,
  },
]

export const skills = [
  {
    group: 'Lenguajes',
    items: [
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'C#', level: 'Proficient' },
      { name: 'Swift', level: 'Beginner' },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Next.js' },
      { name: 'Expo' },
      { name: 'Vue' },
      { name: 'Tailwind' },
      { name: 'Spring Boot' },
      { name: 'Nest' },
      { name: 'Express' },
    ],
  },
  {
    group: 'Bases de datos',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'SQL Server Express' },
      { name: 'DataGrip' },
      { name: 'Supabase' },
    ],
  },
  {
    group: 'Infraestructura',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Docker' },
      { name: 'Makefile' },
    ],
  },
  {
    group: 'Agentes',
    items: [{ name: 'Claude Code' }, { name: 'Codex' }],
  },
]

export const awards = [
  {
    title: '1er lugar — CETYS 2026 Engineering Fair',
    project: 'Beta',
    detail: 'Desarrollé features y trabajé en el rediseño de nuestra app de transporte público.',
    year: '2026',
  },
  {
    title: '1er lugar — CETYS 2025 Engineering Fair',
    project: 'Alpha',
    detail: 'Diseñé una app móvil para el uso del transporte público.',
    year: '2025',
  },
  {
    title: '1er lugar — CETYS 2024 Engineering Fair',
    project: 'Pre-Alpha',
    detail: 'Diseñé una app móvil para el desarrollo sustentable.',
    year: '2024',
  },
]

export const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' },
]
