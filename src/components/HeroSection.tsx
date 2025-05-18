
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="text-teal">Dhruv</span> Zanzmera
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Crafting clean, creative & responsive web applications
          </h2>
          <p className="text-lg max-w-xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            MERN Stack developer passionate about creating engaging user experiences with modern technologies.
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button onClick={scrollToProjects} className="group bg-teal text-black hover:bg-teal-dark">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10">
        <div className="absolute right-16 bottom-16 w-72 h-72 rounded-full bg-teal blur-3xl"></div>
        <div className="absolute right-48 bottom-32 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
