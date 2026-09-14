import type { Header, About, Experience, SkillCategory, Project, Contact } from '@/types/portfolio';
import type { Header, About, Project, Experience, SkillCategory, Contact } from '@/types/portfolio';

export const header: Header = {
  homepage: 'https://agungprsty.github.io/',
  title: 'a.py'
};

export const about: About = {
  name: 'Agung Prasetyo',
  role: 'Software Engineer',
  description:
    'Backend Developer with 5+ years of experience engineering production-ready systems using Python, PHP, and Go. Proven track record in designing scalable RESTful APIs, optimizing database performance, and driving integration efficiencies. Experienced in agile environments and passionate about building robust backend architectures and cloud-native solutions.',
  social: {
    facebook: 'https://fb.com/agungprasetyo06',
    twitter: 'https://twitter.com/agprsty02',
    linkedin: 'https://linkedin.com/in/ag-prasetyo',
    github: 'https://github.com/agungprsty'
  }
};

export const projects: Project[] = [
  {
    id: 'himura-store',
    name: 'Himura Store',
    description:
      'A production-grade e-commerce platform for digital game top-ups serving thousands of daily transactions. Built with a modular Laravel architecture featuring real-time order processing, automated payment verification via third-party APIs, and an admin dashboard for inventory and order management. Optimized database queries reduced page load time by 40%, and the system maintains 99.9% uptime with 24/7 automated processing pipeline.',
    stack: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Payment Gateway'],
    img: '/himurastore.png',
    link: 'https://himurastore.com',
    pin: true
  },
  {
    id: 'jsonfaker',
    name: 'JSONFaker',
    description:
      'A free REST API service designed to accelerate frontend and mobile development by providing realistic mock data on demand. Built with Lumen microframework for minimal overhead and fast response times (~50ms average). Supports dynamic endpoint generation, custom response schemas, and cross-origin requests (CORS). Serves as a developer productivity tool that eliminates backend dependency during prototyping phases.',
    stack: ['PHP', 'Lumen', 'JSON', 'REST API', 'CORS'],
    img: 'https://github.com/agungprsty/fake-api/raw/main/public/assets/img/restapi.png',
    link: 'https://github.com/agungprsty/fake-api/',
    createdAt: '2022-08-22'
  },
  {
    id: 'template-project',
    name: 'Template Project',
    description:
      'A containerized Laravel development environment using Docker Compose that streamlines team onboarding and eliminates "it works on my machine" issues. Defines isolated services for the web server (Nginx), application (PHP-FPM), database (MySQL), and cache (Redis). Features hot-reload for local development, production-ready service configuration, and a single-command setup workflow that reduced new developer onboarding time from 2 hours to 15 minutes.',
    stack: ['Docker', 'Docker Compose', 'PHP', 'Laravel', 'MySQL', 'Nginx', 'Redis'],
    img: 'https://github.com/agungprsty/laravel-with-docker/raw/master/docker/images/laravel+docker.jpeg',
    link: 'https://github.com/agungprsty/laravel-with-docker',
    createdAt: '2022-08-10'
  },
  {
    id: 'ema-scanner',
    name: 'EMA Scanner',
    description:
      'A production-grade quantitative trading bot for Binance USDⓈ-M Futures that implements an EMA7/EMA50 cross strategy with a 4H macro trend filter. Features a two-stage screening pipeline, ATR-based dynamic stop loss, partial take-profit with automated breakeven management, and concurrent symbol scanning (10-way parallelism reducing scan time from 40s to ~5s). Built with FastAPI, Firebase Firestore for crash-resistant state persistence, and real-time Telegram alerts. Includes a full-featured historical backtesting engine with interactive Plotly chart output, achieving a 64% win rate and 2.14 profit factor in backtests.',
    stack: ['Python', 'FastAPI', 'Binance API', 'Firebase', 'Pandas', 'Docker'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/ema_scanner',
    link: 'https://github.com/agungprsty/ema_scanner',
    createdAt: '2026-03-23'
  },
  {
    id: 'wasaya',
    name: 'WhatsApp Gateway',
    description:
      'A full-featured WhatsApp Gateway built with Next.js 16, PostgreSQL, and Baileys WebSocket library. Enables sending and receiving WhatsApp messages through a web dashboard or REST API. Features include multi-device connection (up to 4 devices), broadcast messaging via BullMQ queue with tier-based throttling, scheduled/recurring messages, keyword-based chatbot auto-reply rules, contact management with groups, webhook integration with HMAC-SHA256 signed delivery, and usage-based subscription tiers. Implements safety monitoring with automatic quarantine mode, human-like typing delays, and per-conversation rate limiting to prevent account bans.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/wasaya',
    link: 'https://github.com/agungprsty/wasaya',
    createdAt: '2026-05-23',
    pin: true
  },
  {
    id: 'fastapi-template',
    name: 'FastAPI Clean Architecture',
    description:
      'A production-ready Python backend template following Domain-Driven Design (DDD) and Clean Architecture principles. Built with FastAPI and Beanie ODM for MongoDB, featuring JWT authentication, dependency injection, async Redis integration, structured error handling with unified response format, JSON-structured logging with sensitive field masking, and comprehensive test coverage using pytest. Implements a clear separation of domain, infrastructure, and application layers, making it suitable for building maintainable and scalable microservices.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'JWT'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/Fastapi-Template-Project',
    link: 'https://github.com/agungprsty/Fastapi-Template-Project',
    createdAt: '2025-07-21'
  },
  {
    id: 'sso-laravel-passport',
    name: 'SSO Laravel Passport',
    description:
      'A fully-fledged OAuth2 SSO (Single Sign-On) server implementation using Laravel Passport, with 7 stars and 3 forks on GitHub. Demonstrates the complete OAuth2 authorization flow including client credential and authorization code grants. Features a Dockerized environment with separate OAuth server and client applications, token generation dashboard, and step-by-step integration guide. Serves as a reusable reference architecture for implementing centralized authentication across microservices.',
    stack: ['PHP', 'Laravel', 'Laravel Passport', 'OAuth2', 'Docker', 'MySQL'],
    img: 'https://github.com/agungprsty/sso-with-laravel-passport/raw/master/src/public/img/ssolaravel.jpg',
    link: 'https://github.com/agungprsty/sso-with-laravel-passport',
    createdAt: '2022-11-27'
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
    role: 'Backend Developer',
    period: 'Jan 2024 - Sekarang',
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
      { name: 'Python (FastAPI)', level: 'advanced' },
      { name: 'PHP (Laravel, CI)', level: 'advanced' },
      { name: 'REST API Design', level: 'advanced' },
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
      { name: 'Redis', level: 'advanced' },
      { name: 'Firebase', level: 'intermediate' }
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
      { name: 'TailwindCSS', level: 'advanced' },
      { name: 'OAuth2 & Message Queue', level: 'advanced' }
    ]
  }
];

export const contact: Contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};

export const resume = '/agung-prasetyo-cv.pdf';
