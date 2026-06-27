import type { Header, About, Project, Contact } from '@/types/portfolio';

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
    link: 'https://himurastore.com'
  },
  {
    id: 'jsonfaker',
    name: 'JSONFaker',
    description:
      'A free REST API service designed to accelerate frontend and mobile development by providing realistic mock data on demand. Built with Lumen microframework for minimal overhead and fast response times (~50ms average). Supports dynamic endpoint generation, custom response schemas, and cross-origin requests (CORS). Serves as a developer productivity tool that eliminates backend dependency during prototyping phases.',
    stack: ['PHP', 'Lumen', 'JSON', 'REST API', 'CORS'],
    img: 'https://github.com/agungprsty/fake-api/raw/main/public/assets/img/restapi.png',
    link: 'https://github.com/agungprsty/fake-api/'
  },
  {
    id: 'template-project',
    name: 'Template Project',
    description:
      'A containerized Laravel development environment using Docker Compose that streamlines team onboarding and eliminates "it works on my machine" issues. Defines isolated services for the web server (Nginx), application (PHP-FPM), database (MySQL), and cache (Redis). Features hot-reload for local development, production-ready service configuration, and a single-command setup workflow that reduced new developer onboarding time from 2 hours to 15 minutes.',
    stack: ['Docker', 'Docker Compose', 'PHP', 'Laravel', 'MySQL', 'Nginx', 'Redis'],
    img: 'https://github.com/agungprsty/laravel-with-docker/raw/master/docker/images/laravel+docker.jpeg',
    link: 'https://github.com/agungprsty/laravel-with-docker'
  },
  {
    id: 'ema-scanner',
    name: 'EMA Scanner',
    description:
      'A production-grade quantitative trading bot for Binance USDⓈ-M Futures that implements an EMA7/EMA50 cross strategy with a 4H macro trend filter. Features a two-stage screening pipeline, ATR-based dynamic stop loss, partial take-profit with automated breakeven management, and concurrent symbol scanning (10-way parallelism reducing scan time from 40s to ~5s). Built with FastAPI, Firebase Firestore for crash-resistant state persistence, and real-time Telegram alerts. Includes a full-featured historical backtesting engine with interactive Plotly chart output, achieving a 64% win rate and 2.14 profit factor in backtests.',
    stack: ['Python', 'FastAPI', 'Binance API', 'Firebase', 'Pandas', 'Docker'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/ema_scanner',
    link: 'https://github.com/agungprsty/ema_scanner'
  },
  {
    id: 'wasaya',
    name: 'TEMANWA — WhatsApp Gateway',
    description:
      'A full-featured WhatsApp Gateway built with Next.js 16, PostgreSQL, and Baileys WebSocket library. Enables sending and receiving WhatsApp messages through a web dashboard or REST API. Features include multi-device connection (up to 4 devices), broadcast messaging via BullMQ queue with tier-based throttling, scheduled/recurring messages, keyword-based chatbot auto-reply rules, contact management with groups, webhook integration with HMAC-SHA256 signed delivery, and usage-based subscription tiers. Implements safety monitoring with automatic quarantine mode, human-like typing delays, and per-conversation rate limiting to prevent account bans.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/wasaya',
    link: 'https://github.com/agungprsty/wasaya'
  },
  {
    id: 'fastapi-template',
    name: 'FastAPI Clean Architecture',
    description:
      'A production-ready Python backend template following Domain-Driven Design (DDD) and Clean Architecture principles. Built with FastAPI and Beanie ODM for MongoDB, featuring JWT authentication, dependency injection, async Redis integration, structured error handling with unified response format, JSON-structured logging with sensitive field masking, and comprehensive test coverage using pytest. Implements a clear separation of domain, infrastructure, and application layers, making it suitable for building maintainable and scalable microservices.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'JWT'],
    img: 'https://opengraph.githubassets.com/1/agungprsty/Fastapi-Template-Project',
    link: 'https://github.com/agungprsty/Fastapi-Template-Project'
  },
  {
    id: 'sso-laravel-passport',
    name: 'SSO dengan Laravel Passport',
    description:
      'A fully-fledged OAuth2 SSO (Single Sign-On) server implementation using Laravel Passport, with 7 stars and 3 forks on GitHub. Demonstrates the complete OAuth2 authorization flow including client credential and authorization code grants. Features a Dockerized environment with separate OAuth server and client applications, token generation dashboard, and step-by-step integration guide. Serves as a reusable reference architecture for implementing centralized authentication across microservices.',
    stack: ['PHP', 'Laravel', 'Laravel Passport', 'OAuth2', 'Docker', 'MySQL'],
    img: 'https://github.com/agungprsty/sso-with-laravel-passport/raw/master/src/public/img/ssolaravel.jpg',
    link: 'https://github.com/agungprsty/sso-with-laravel-passport'
  }
];

export const contact: Contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};
