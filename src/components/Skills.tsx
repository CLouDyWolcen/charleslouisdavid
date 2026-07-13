import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills = ({ skillCategories }: SkillsProps) => {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 section-reveal">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 blur-xl opacity-30"></span>
                <span className="relative text-gradient">Skills & Technologies</span>
              </span>
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-dark-300 text-base max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="section-reveal"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category header with unique design */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 blur-md opacity-50"></div>
                  <div className="relative bg-dark-800 px-4 py-1.5 rounded-lg border border-primary-500/30">
                    <h3 className="font-display font-semibold text-base bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-transparent"></div>
              </div>

              {/* Skills with unique badge design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-badge group cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 group-hover:scale-125 transition-transform"></div>
                      <span className="text-xs font-medium">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info box */}
        <div className="mt-12 section-reveal">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-dark-800/50 backdrop-blur-sm p-6 rounded-2xl border border-primary-500/20">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center border border-primary-500/30">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-display font-semibold text-dark-100 mb-1">
                    Always Learning, Always Growing
                  </h4>
                  <p className="text-dark-300 text-sm">
                    I'm constantly expanding my skill set and staying up-to-date with the latest web development technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
