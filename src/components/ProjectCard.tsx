import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onShowDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onShowDetails }: ProjectCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/600x400/1e293b/0ea5e9?text=Project+Image';
  };

  return (
    <div className="project-card group cursor-pointer" onClick={() => onShowDetails(project)}>
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* View details badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-dark-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/50 flex items-center gap-2">
            <span className="text-primary-400 text-sm font-semibold">View Details</span>
            <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-2xl font-display font-bold text-dark-100 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>

        <p className="text-dark-300 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-900/50 text-primary-400 text-xs font-mono rounded-md border border-primary-500/20 group-hover:border-primary-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 bg-dark-900/50 text-accent-400 text-xs font-mono rounded-md border border-accent-500/20">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Links indicator */}
        {(project.liveDemo || project.repository) && (
          <div className="flex items-center gap-3 pt-2">
            {project.liveDemo && (
              <div className="flex items-center gap-1 text-primary-400 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="font-mono text-xs">Live Demo</span>
              </div>
            )}
            {project.repository && (
              <div className="flex items-center gap-1 text-accent-400 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="font-mono text-xs">Source Code</span>
              </div>
            )}
          </div>
        )}

        {/* Click indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
