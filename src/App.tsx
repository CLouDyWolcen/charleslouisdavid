import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Add scroll reveal animation to sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach((section) => observer.observe(section));

    // Active section detection for navigation
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-120px 0px -40% 0px',
      }
    );

    const mainSections = document.querySelectorAll('section[id]');
    mainSections.forEach((section) => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-dark-50">
      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero
          name={profile.name}
          title={profile.title}
          tagline={profile.tagline}
          profileImage={profile.profileImage}
        />
        
        <About
          bio={profile.bio}
          education={profile.education}
          location={profile.location}
        />
        
        <Skills skillCategories={skillCategories} />
        
        <Projects projects={projects} />
        
        <Contact
          email={profile.email}
          socialLinks={profile.socialLinks}
        />
      </main>
      
      <Footer
        name={profile.name}
        year={new Date().getFullYear()}
        socialLinks={profile.socialLinks}
      />
    </div>
  );
}

export default App;
