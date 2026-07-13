import { Education } from '../types';

interface AboutProps {
  bio: string;
  education: Education;
  location: string;
}

const About = ({ bio, education, location }: AboutProps) => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 section-reveal">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 blur-xl opacity-30"></span>
                <span className="relative text-gradient">About Me</span>
              </span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <div className="space-y-6 section-reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20">
                <p className="text-dark-200 leading-relaxed text-lg">
                  {bio}
                </p>
              </div>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-primary-500/20">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-dark-300">{location}</span>
              </div>
            </div>
          </div>

          {/* Education and highlights */}
          <div className="space-y-6 section-reveal">
            {/* Education card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-accent-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-lg flex items-center justify-center border border-accent-500/30">
                    <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-dark-100 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-dark-300 mb-1">{education.institution}</p>
                    <p className="text-primary-400 font-mono text-sm">
                      Graduated: {education.graduationDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-primary-500/20 text-center group hover:border-primary-500/40 transition-colors">
                <div className="text-3xl font-display font-bold text-gradient mb-2">2+</div>
                <div className="text-dark-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-accent-500/20 text-center group hover:border-accent-500/40 transition-colors">
                <div className="text-3xl font-display font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-dark-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="relative bg-gradient-to-r from-primary-500/10 to-accent-500/10 p-6 rounded-xl border border-primary-500/20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <div className="text-primary-400 font-semibold mb-1">Quick Fact</div>
                  <p className="text-dark-300 text-sm">
                    I love transforming complex business problems into elegant, efficient software solutions that make a real impact!
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

export default About;
