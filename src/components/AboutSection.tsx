import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRefs = useRef([]);
  const cardRefs = useRef([]);

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
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        paraRefs.current,
        { y: 30, opacity: 0 },
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

      gsap.fromTo(
        cardRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB",
    "JavaScript/ES6+", "TypeScript", "HTML5", "CSS3/SCSS",
    "Tailwind CSS", "Redux", "REST API", "Git/GitHub"
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "MongoDB Atlas", "Vercel"
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-sky-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              "I'm a passionate MERN Stack Developer with expertise in crafting responsive and dynamic web applications. My journey in web development is driven by a commitment to clean code and user-friendly interfaces.",
              "I enjoy turning complex problems into elegant, efficient solutions. When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously enhancing my skills.",
              "I believe in creating web applications that not only look great but also deliver exceptional user experiences across all devices."
            ].map((text, idx) => (
              <p
                key={idx}
                ref={(el) => (paraRefs.current[idx] = el)}
                className="text-lg"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            <Card
              ref={(el) => (cardRefs.current[0] = el)}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
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

            <Card
              ref={(el) => (cardRefs.current[1] = el)}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
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
