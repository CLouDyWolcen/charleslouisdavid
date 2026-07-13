interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  profileImage?: string;
}

const Hero = ({ name, title, tagline }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting badge */}
            <div className="inline-block animate-slide-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-dark-800/80 backdrop-blur-sm px-6 py-2 rounded-full border border-primary-500/30">
                  <span className="text-primary-400 font-mono text-sm">
                    👋 Hello, I'm
                  </span>
                </div>
              </div>
            </div>

            {/* Name with unique styling */}
            <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                    {name.split(' ')[0]} {name.split(' ')[1]}
                  </span>
                </span>
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mt-2">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-accent-400 via-primary-400 to-accent-500 bg-clip-text text-transparent">
                    {name.split(' ').slice(2).join(' ')}
                  </span>
                </span>
              </span>
            </h1>

            {/* Title */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"></div>
                <h2 className="relative text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200">
                  {title}
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-dark-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 pt-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={scrollToContact}
                className="btn-primary group text-sm sm:text-base px-6 py-3"
              >
                <span className="flex items-center gap-2">
                  Let's Connect
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <a
                href="#projects"
                className="relative px-6 py-3 text-sm sm:text-base text-white font-semibold rounded-lg border-2 border-primary-500/50 hover:border-primary-400 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-accent-600/0 group-hover:from-primary-600/20 group-hover:to-accent-600/20 transition-all duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Scroll indicator - visible on desktop */}
            <div className="hidden lg:flex pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <span className="text-dark-400 text-sm font-mono">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex items-start justify-center p-1">
                  <div className="w-1.5 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full animate-float"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative animate-fade-in flex justify-center items-start lg:-mt-16" style={{ animationDelay: '0.3s' }}>
            <div className="relative group w-64 sm:w-72 lg:w-80">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image container with unique border design */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-75 blur-sm"></div>
                <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-3 border border-primary-500/30">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/images/projects/me.webp" 
                      alt="Charles Louis C. David" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: '40% 30%' }}
                    />
                    {/* Gradient overlay to blend white background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/30"></div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - visible on mobile/tablet, centered */}
        <div className="lg:hidden pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-dark-400 text-sm font-mono">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
