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
    name: 'Himura Store',
    description:
      'Himura Store is a trusted Online Game Top Up provider with the best prices, fast processing and 24 hour service.',
    stack: ['PHP', 'Laravel', 'MySQL'],
    img: '/himurastore.png',
    link: 'https://himurastore.com'
  },
  {
    name: 'JSONFaker',
    description:
      'JSONFaker is a service that provides free REST API, with this you can easily do testing and prototyping.',
    stack: ['PHP', 'Lumen', 'json'],
    img: 'https://github.com/agungprsty/fake-api/raw/main/public/assets/img/restapi.png',
    link: 'https://github.com/agungprsty/fake-api/'
  },
  {
    name: 'Template Project ',
    description: 'Build a simple laravel application development environment with docker-compose.',
    stack: ['Docker', 'PHP', 'Laravel', 'MySQL'],
    img: 'https://github.com/agungprsty/laravel-with-docker/raw/master/docker/images/laravel+docker.jpeg',
    link: 'https://github.com/agungprsty/laravel-with-docker'
  }
];

export const contact: Contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};
