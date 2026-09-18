import type { Header, About, Project, Experience, SkillCategory, Contact } from '@/types/portfolio';

export const header: Header = {
  homepage: 'https://agungprsty.github.io/',
  title: 'a.py'
};

export const about: About = {
  name: 'Agung Prasetyo',
  role: 'Software Engineer',
  description:
    'I am a passionate and results-driven Backend Engineer with over 5 years of hands-on experience engineering scalable, production-ready systems. My core expertise lies in designing robust backend architectures and microservices using Python, PHP, and Go. Throughout my career, I have successfully developed high-performance RESTful APIs, optimized complex database queries, and implemented efficient message queuing and caching strategies that significantly improved system responsiveness and reliability. \n I have a strong foundation in Domain-Driven Design (DDD) and Clean Architecture principles, ensuring that the software I build is not only performant but also highly maintainable and adaptable to changing business needs. I thrive in agile, collaborative environments and am deeply committed to continuous learning, exploring modern cloud-native solutions, and driving impactful engineering practices.',
  social: {
    x: 'https://twitter.com/agprsty02',
    linkedin: 'https://linkedin.com/in/ag-prasetyo',
    github: 'https://github.com/agungprsty',
    medium: 'https://medium.com/@agungprsty'
  }
};

export const projects: Project[] = [
  {
    id: 'himura-store',
    name: 'Himura Store',
    description:
      'A production-grade e-commerce platform for digital game top-ups serving thousands of daily transactions. Built with a modular Laravel architecture featuring real-time order processing, automated payment verification via third-party APIs, and an admin dashboard for inventory and order management. Optimized database queries reduced page load time by 40%, and the system maintains 99.9% uptime with 24/7 automated processing pipeline.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'],
    img: '/projects/himurastore.webp',
    link: 'https://himurastore.com',
    createdAt: '2023-01-22',
    period: 'Jan 2023 - May 2023',
    type: 'Freelance'
  },
  {
    id: 'jsonfaker',
    name: 'JSONFaker',
    description:
      'A free REST API service designed to accelerate frontend and mobile development by providing realistic mock data on demand. Built with Lumen microframework for minimal overhead and fast response times (~50ms average). Supports dynamic endpoint generation, custom response schemas, and cross-origin requests (CORS). Serves as a developer productivity tool that eliminates backend dependency during prototyping phases.',
    stack: ['PHP', 'Lumen', 'REST API'],
    img: '/projects/restapi.webp',
    link: 'https://github.com/agungprsty/fake-api/',
    createdAt: '2022-08-22',
    period: 'Aug 2022',
    type: 'Personal Project'
  },
  {
    id: 'template-project',
    name: 'Laravel Template Project',
    description:
      'A containerized Laravel development environment using Docker Compose that streamlines team onboarding and eliminates "it works on my machine" issues. Defines isolated services for the web server (Nginx), application (PHP-FPM), database (MySQL), and cache (Redis). Features hot-reload for local development, production-ready service configuration, and a single-command setup workflow that reduced new developer onboarding time from 2 hours to 15 minutes.',
    stack: ['Docker', 'PHP', 'Laravel', 'MySQL', 'Redis'],
    img: '/projects/laravel-docker.webp',
    link: 'https://github.com/agungprsty/laravel-with-docker',
    createdAt: '2022-08-10',
    period: 'Aug 2022',
    type: 'Personal Project'
  },
  {
    id: 'wasaya',
    name: 'WhatsApp Gateway',
    description:
      'A full-featured WhatsApp Gateway built with Next.js 16, PostgreSQL, and Baileys WebSocket library. Enables sending and receiving WhatsApp messages through a web dashboard or REST API. Features include multi-device connection (up to 4 devices), broadcast messaging via BullMQ queue with tier-based throttling, scheduled/recurring messages, keyword-based chatbot auto-reply rules, contact management with groups, webhook integration with HMAC-SHA256 signed delivery, and usage-based subscription tiers. Implements safety monitoring with automatic quarantine mode, human-like typing delays, and per-conversation rate limiting to prevent account bans.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis'],
    img: '/projects/wasaya.webp',
    link: 'https://github.com/agungprsty/wasaya',
    createdAt: '2026-01-23',
    period: 'Jan 2026 - Present',
    type: 'Personal Project'
  },
  {
    id: 'fastapi-template',
    name: 'FastAPI Clean Architecture',
    description:
      'A production-ready Python backend template following Domain-Driven Design (DDD) and Clean Architecture principles. Built with FastAPI and Beanie ODM for MongoDB, featuring JWT authentication, dependency injection, async Redis integration, structured error handling with unified response format, JSON-structured logging with sensitive field masking, and comprehensive test coverage using pytest. Implements a clear separation of domain, infrastructure, and application layers, making it suitable for building maintainable and scalable microservices.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker'],
    img: '/projects/fastapi-template.webp',
    link: 'https://github.com/agungprsty/Fastapi-Template-Project',
    createdAt: '2025-07-21',
    period: 'Jul 2025',
    type: 'Personal Project'
  },
  {
    id: 'sso-laravel-passport',
    name: 'SSO Laravel Passport',
    description:
      'A fully-fledged OAuth2 SSO (Single Sign-On) server implementation using Laravel Passport, with 7 stars and 3 forks on GitHub. Demonstrates the complete OAuth2 authorization flow including client credential and authorization code grants. Features a Dockerized environment with separate OAuth server and client applications, token generation dashboard, and step-by-step integration guide. Serves as a reusable reference architecture for implementing centralized authentication across microservices.',
    stack: ['PHP', 'Laravel Passport', 'MySQL'],
    img: '/projects/ssolaravel.webp',
    link: 'https://github.com/agungprsty/sso-with-laravel-passport',
    createdAt: '2022-11-27',
    period: 'Nov 2022',
    type: 'Personal Project'
  },
  {
    id: 'torcons-ai',
    name: 'Torcons AI — Chat Platform & MLOps Dashboard',
    description:
      'An enterprise AI chat platform at https://chat.torcons.ai/ delivering a production-grade LLM experience. Engineered the frontend in Svelte with best-practice component architecture, state management, and responsive design, implementing tool-calling (function calling) orchestration, streaming responses, and robust multi-session chat history management with tier-based upgrade integration. Built an internal MLOps dashboard in FastAPI and Python to orchestrate pre-training, fine-tuning, and post-training pipelines — including model quantization via TurboQuant and alignment ablation using Abriteration, Heretic, and uncensored techniques to optimize inference cost, latency, and model behavior for production deployment.',
    stack: ['Svelte', 'Node.js', 'FastAPI', 'Python', 'TurboQuant', 'Redis'],
    img: '/projects/torcons-ai.webp',
    link: 'https://chat.torcons.ai',
    createdAt: '2026-05-01',
    period: 'May 2026 - Present',
    type: 'Professional'
  },
  {
    id: 'ai-care',
    name: 'AI Care — Healthcare Ecosystem',
    description:
      'A large-scale healthcare ecosystem engineered from scratch over 3.5 years and scaled into two production-grade applications — AI Care for patients and AI Care Partners for doctors — serving as the flagship digital health platform of PT Digital Sekuriti Indonesia. Architected as microservices with Python Flask as the primary backend, MongoDB for primary storage, Redis for caching and session management, and RabbitMQ + Celery for distributed asynchronous job processing (background tasks, scheduled jobs, and heavy workloads decoupled from API latency). Integrated Firebase for reCAPTCHA verification and FCM for cross-platform push notifications (consultation updates, reminders, and user engagement), and implemented real-time doctor-patient communication via Express.js WebSocket services alongside a Laravel-based admin dashboard for operational management.\n\nBuilt automated medical document generation using PDFKit for consultation resumes, prescriptions, and reference letters, ensuring consistent and print-ready clinical outputs. Integrated Midtrans for secure payment processing, Qontak WhatsApp Gateway for transactional and notification messaging, and AWS S3 for scalable object storage of medical files and assets. The platform was engineered for high availability, data integrity, and regulatory compliance, supporting thousands of daily users across the end-to-end healthcare workflow with robust, maintainable, and extensible service boundaries.',
    stack: ['Python', 'Flask', 'MongoDB', 'Redis', 'Celery', 'RabbitMQ', 'Firebase', 'AWS S3'],
    img: '/projects/ai-care.webp',
    link: 'https://ai-care.id',
    createdAt: '2022-07-01',
    period: 'Jul 2022 - Dec 2025',
    type: 'Professional',
    pin: true
  },
  {
    id: 'nu-tech-ctf',
    name: 'NU Tech Capture The Flag (CTF)',
    description:
      'A Capture The Flag competition platform for NU Tech built with Python Flask and vanilla JavaScript/HTML. Developed the frontend for challenge presentation, dynamic scoring, flag submission, and real-time leaderboard updates. Focused on responsive UI, secure session handling, and performant load times to support concurrent participants during the live competitive event, ensuring a smooth and engaging experience for all competitors.',
    stack: ['Python', 'Flask', 'JavaScript', 'HTML'],
    img: '/projects/nu-tech-ctf.webp',
    link: '',
    createdAt: '2022-12-01',
    period: 'Dec 2022',
    type: 'Professional'
  },
  {
    id: 'klinia',
    name: 'Klinia — Clinic Management System',
    description:
      'A clinic management system (klinia.id) digitizing end-to-end operational workflows — patient records, appointments, queue management, medical inventory, and billing. Contributed as full-stack developer handling both backend business logic in PHP CodeIgniter 3 and frontend interfaces, bridging clinical requirements into efficient, user-friendly workflows. Streamlined manual processes into a centralized system, improving data accuracy, staff productivity, and operational visibility for clinic personnel.',
    stack: ['PHP', 'CodeIgniter 3', 'MySQL', 'JavaScript'],
    img: '/projects/klinia.webp',
    link: 'https://klinia.id',
    createdAt: '2022-01-01',
    period: 'Jan 2022 - Oct 2022',
    type: 'Professional'
  },
  {
    id: 'lms-get-kalm',
    name: 'LMS Get-Kalm',
    description:
      'A Learning Management System for get-kalm.com (KALM) delivering course creation, enrollment, progress tracking, and content delivery for mental health education. Developed core LMS features in PHP Laravel with OAuth2-based Single Sign-On for secure cross-service authentication, enabling modular course management and seamless user experience for learners and instructors. Supported scalable content delivery and integrated with the broader KALM counseling ecosystem serving 50,000+ users.',
    stack: ['PHP', 'Laravel', 'MySQL', 'OAuth2'],
    img: '/projects/lms-get-kalm.webp',
    link: 'https://get-kalm.com',
    createdAt: '2021-08-01',
    period: 'Aug 2021 - Dec 2021',
    type: 'Professional'
  },
  {
    id: 'rumahberkat-dashboard',
    name: 'Rumah Berkat — Master Dashboard',
    description:
      'A centralized master admin dashboard for rumahberkat.com consolidating multi-service operations and analytics. Developed frontend interfaces in PHP Laravel to provide unified monitoring, user and content management, and reporting tools — improving operational visibility and administrative efficiency across integrated services. Implemented role-based access, data visualization, and streamlined workflows for centralized governance and decision-making.',
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    img: '/projects/rumahberkat-dashboard.webp',
    link: 'https://rumahberkat.com',
    createdAt: '2021-06-01',
    period: 'Jun 2021 - Aug 2021',
    type: 'Professional'
  }
].sort((a, b) => {
  const pinDiff = Number(b.pin ?? false) - Number(a.pin ?? false);
  if (pinDiff !== 0) return pinDiff;
  return (b.createdAt ?? '').localeCompare(a.createdAt ?? '');
});

export const experience: Experience[] = [
  {
    id: 'dsi-backend',
    company: 'PT Digital Sekuriti Indonesia',
    location: 'Yogyakarta',
    role: 'Backend Engineer',
    period: 'Jan 2024 - Sekarang',
    description: 'Served as the PIC (Person In Charge) for backend engineering initiatives, spearheading the transition from a monolithic legacy codebase to a scalable, clean microservices architecture using Python (Flask), Node.js, PHP (Laravel). Architected and maintained high-performance RESTful APIs serving thousands of daily users, while aggressively optimizing PostgreSQL/MySQL queries and implementing Redis caching to reduce average response times by 35%. Established Docker-containerized deployment workflows to ensure high availability and environment consistency across production servers.',
    points: [
      'Developed and maintained RESTful APIs serving thousands of daily users with high availability and stable performance',
      'Integrated 10+ third-party APIs, reducing manual processing time by up to 40%',
      'Designed and optimized backend services, improving data exchange efficiency by 30%',
      'Optimized complex PostgreSQL/MySQL queries and implemented Redis caching, reducing average API response time by 35%',
      'Architected and deployed scalable microservices using Python (FastAPI) and Node.js, containerized via Docker to ensure environment consistency',
      'Streamlined frontend–backend integration, decreasing API error rates by 25%',
      'Implemented automated unit testing, achieving 80%+ code coverage',
      'Identified and resolved critical performance bottlenecks and security vulnerabilities in production environments, reducing system downtime and ensuring data integrity',
      'Spearheaded the refactoring of a monolithic legacy codebase into clean, modular structures, improving maintainability and reducing technical debt for future feature deployments'
    ]
  },
  {
    id: 'dsi-junior-dev',
    company: 'PT Digital Sekuriti Indonesia',
    location: 'Yogyakarta',
    role: 'Junior Web Developer',
    period: 'Jun 2021 - Dec 2023',
    description: 'Developed and maintained over 5 highly responsive web applications from the ground up, translating complex UI/UX designs from Figma into functional, cross-device compatible interfaces using modern JavaScript, jQuery, AJAX, and JSON. Actively collaborated with a cross-functional team of engineers and designers using agile Git-based workflows to accelerate feature delivery. Focused heavily on front-end performance, successfully improving website loading speeds by up to 30% through advanced asset minification, and the strategic implementation of efficient browser caching techniques.',
    points: [
      'Developed 5+ responsive web applications that improved mobile user engagement by 20% and ensured cross-device accessibility',
      'Improved website loading speed by up to 30% through advanced asset optimization, minification, and implementing efficient browser caching strategies',
      'Enhanced user interaction and front-end responsiveness by developing dynamic interactive components utilizing JavaScript and jQuery',
      'Converted UI/UX designs from Figma into functional web applications using AJAX and JSON',
      'Collaborated with a cross-functional team of 6+ engineers and designers using Git-based workflows, reducing code conflict resolutions by 15%'
    ]
  },
  {
    id: 'forta-warehouse-lead',
    company: 'PT Forta Digital Teknologi',
    location: 'Jakarta',
    role: 'Warehouse Lead',
    period: 'Sep 2020 - May 2021',
    description: 'Directed daily logistics and warehouse operations, actively managing and mentoring a team of over 10 staff members to improve overall productivity by 15%. Implemented rigorous systematic audit processes and standardized documentation workflows that successfully increased inventory accuracy by 20%. Conducted regular safety training sessions and enforced compliance with workplace safety standards, effectively cultivating a safer working environment and drastically reducing the occurrence of workplace incidents.',
    points: [
      'Led daily operations for a team of 10+ staff members, strengthening communication and improving overall team productivity by 15%',
      'Improved inventory accuracy by 20% through systematic audits and documentation',
      'Trained employees on safety standards, reducing workplace incidents'
    ]
  },
  {
    id: 'forta-office-boy',
    company: 'PT Forta Digital Teknologi',
    location: 'Jakarta',
    role: 'Office Boy',
    period: 'Oct 2019 - Aug 2020',
    description: 'Ensured the seamless daily operation of office facilities by maintaining an exceptionally clean, organized, and welcoming work environment for more than 30 full-time employees. Provided critical on-the-ground support for various company-wide events, meetings, and team-building activities. Demonstrated a strong work ethic and proactive attitude, contributing directly to higher employee engagement and ensuring that all logistical needs within the office space were met promptly and efficiently.',
    points: [
      'Maintained the cleanliness and tidiness of office facilities, supporting daily operations of 30+ employees',
      'Supported company events and activities, contributing to employee engagement'
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 'advanced' },
      { name: 'PHP', level: 'advanced' },
      { name: 'Typescript', level: 'advanced' },
      { name: 'Go', level: 'intermediate' },
      { name: 'Rust', level: 'beginner' }
    ]
  },
  {
    category: 'Database & Cache',
    items: [
      { name: 'MySQL', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Redis', level: 'advanced' }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', level: 'advanced' },
      { name: 'Git & GitHub', level: 'advanced' },
      { name: 'Nginx', level: 'intermediate' },
      { name: 'Linux', level: 'intermediate' }
    ]
  },
  {
    category: 'Frontend & Others',
    items: [
      { name: 'React/Next.js', level: 'advanced' },
      { name: 'Vue/Nuxt.js', level: 'advanced' },
      { name: 'REST API Design', level: 'advanced' }
    ]
  }
];

export const contact: Contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};

export const resume = '/agung-prasetyo-resume.pdf';
