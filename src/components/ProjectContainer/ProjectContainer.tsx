import CardMedia from '@mui/material/CardMedia';
import type { Project } from '@/types/portfolio';

function ProjectContainer({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      aria-label="live preview"
      target="_blank"
      className="link mx-auto cursor-pointer shadow-theme transition-transform duration-200 hover:-translate-y-1.5 dark:shadow-theme-dark"
      rel="noreferrer">
      <CardMedia
        component="img"
        height="180"
        image={project.img}
        alt={project.name}
        className="rounded-t-2xl"
      />
      <h3 className="mt-2.5 text-center">{project.name}</h3>
      <p className="mt-2 px-2.5 text-fg-alt dark:text-fg-alt-dark">{project.description}</p>
      {project.stack && (
        <ul className="my-2 flex flex-wrap justify-center">
          {project.stack.map((item) => (
            <li
              key={item}
              className="mx-2 my-0.5 text-[0.8rem] font-medium text-fg-alt dark:text-fg-alt-dark">
              {item}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
}

export default ProjectContainer;
