
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading font-semibold text-lg">
              <span className="text-teal">D</span>hruv <span className="text-teal">Z</span>anzmera
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/dhruv-zanzmera"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/dhruv-zanzmera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:dhruv@example.com"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
