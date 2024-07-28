const header = {
  homepage: 'https://agungprsty.github.io/',
  title: 'a.py'
};

const about = {
  name: 'Agung Prasetyo',
  role: 'Full Stack Engineer',
  description: 'I love reading books and trying to build whatever comes to mind.',
  social: {
    facebook: 'https://fb.com/agungprasetyo06',
    twitter: 'https://twitter.com/agprsty02',
    linkedin: 'https://linkedin.com/in/ag-prasetyo',
    github: 'https://github.com/agungprsty'
  }
};

const projects = [
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

const contact = {
  email: 'agungprsty423@gmail.com',
  telegram: 'a9ungprasetyo'
};

export { header, about, projects, contact };
