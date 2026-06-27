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
  }
];

export const contact: Contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};
