import { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 section-reveal">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 blur-xl opacity-30"></span>
                <span className="relative text-gradient">Featured Projects</span>
              </span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-dark-300 text-lg max-w-2xl mx-auto">
            Real-world applications that solve business problems and improve workflows
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="section-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} onShowDetails={handleShowDetails} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center section-reveal">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-dark-800/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-primary-500/20">
              <p className="text-dark-200 text-lg mb-4">
                Interested in working together?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
              >
                Let's Talk
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
