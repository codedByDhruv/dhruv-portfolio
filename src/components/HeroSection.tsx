import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        subHeadingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        paraRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center section-padding relative"
    >
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-sky-500">Dhruv</span> Zanzmera
          </h1>
          <h2
            ref={subHeadingRef}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Crafting clean, creative & responsive web applications
          </h2>
          <p ref={paraRef} className="text-lg max-w-xl mb-10">
            MERN Stack developer passionate about creating engaging user experiences with modern
            technologies.
          </p>
          <div ref={buttonRef}>
            <Button onClick={scrollToProjects} className="group bg-sky-500 text-black hover:bg-sky-500-dark">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10">
        <div className="absolute right-16 bottom-16 w-72 h-72 rounded-full bg-sky-500 blur-3xl"></div>
        <div className="absolute right-48 bottom-32 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
