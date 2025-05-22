import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import FitFocus from "../assets/images/FitFocus.png";
import PixelCraft from "../assets/images/PixelCraft.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "FitFocus",
      description:
        "A personal fitness trainer website featuring workout programs, trainer profiles, and a responsive design. Built using React, Vite, Tailwind CSS, and Node.js.",
      image: FitFocus,
      tags: ["React", "Vite", "Tailwind CSS", "Node.js"],
      liveUrl: "https://fit-focus-two.vercel.app/",
    },
    {
      id: 2,
      title: "Pixel Craft",
      description:
        "A modern digital agency website showcasing services, portfolio, and contact forms. Created using React, Vite, Tailwind CSS, and Node.js.",
      image: PixelCraft,
      tags: ["React", "Vite", "Tailwind CSS", "Node.js"],
      liveUrl: "https://pixel-craft-three.vercel.app/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="container-custom">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-sky-500">Projects</span>
        </h2>
        <p ref={paragraphRef} className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects showcasing my skills and expertise in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el!)}
              className="project-card overflow-hidden border-none shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  asChild
                  variant="default"
                  className="bg-sky-500 text-black hover:bg-sky-500-dark"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
