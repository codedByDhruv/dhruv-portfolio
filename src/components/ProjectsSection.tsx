
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, Express, and MongoDB with secure authentication and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and customizable dashboards.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard that integrates with multiple social media platforms to provide unified insights and metrics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "TypeScript", "Express", "Chart.js", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "A real-time messaging application with private and group chats, file sharing, and read receipts.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-teal">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects showcasing my skills and expertise in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="project-card overflow-hidden border-none shadow-md">
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
                <Button asChild variant="default" className="bg-teal text-black hover:bg-teal-dark">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
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
