import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import type { Project } from '@/types/portfolio';

function ProjectContainer({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="mx-auto cursor-pointer rounded-2xl bg-bg-alt shadow-theme transition-transform duration-200 hover:-translate-y-1.5 dark:bg-bg-alt-dark dark:shadow-theme-dark">
      <div className="aspect-[16/10] overflow-hidden">
        <CardMedia
          component="img"
          image={project.img}
          alt={project.name}
          className="h-full w-full rounded-t-2xl object-cover"
        />
      </div>
      <h3 className="mt-2.5 text-center">{project.name}</h3>
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
    </Link>
  );
}

export default ProjectContainer;
