
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "JavaScript/ES6+", "TypeScript", "HTML5", "CSS3/SCSS", 
    "Tailwind CSS", "Redux", "REST API", "Git/GitHub"
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "MongoDB Atlas", "Vercel"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-teal">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate MERN Stack Developer with expertise in crafting responsive and dynamic web applications. 
              My journey in web development is driven by a commitment to clean code and user-friendly interfaces.
            </p>
            <p className="text-lg">
              I enjoy turning complex problems into elegant, efficient solutions. When I'm not coding, I'm exploring 
              new technologies, contributing to open-source projects, and continuously enhancing my skills.
            </p>
            <p className="text-lg">
              I believe in creating web applications that not only look great but also deliver exceptional user 
              experiences across all devices.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-background rounded-md border text-sm font-medium hover:border-teal transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1.5 bg-background rounded-md border text-sm font-medium hover:border-teal transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
