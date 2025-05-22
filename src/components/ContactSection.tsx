import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for GSAP
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const formCardRef = useRef(null);
  const contactListRefs = useRef<HTMLDivElement[]>([]);
  const finalNoteRef = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Validation error",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-contact-backend-mgnw.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          delay: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        formCardRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: 0.3,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contactListRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.4,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        finalNoteRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.6,
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
    <section ref={sectionRef} id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2">
          Get in <span className="text-sky-500">Touch</span>
        </h2>
        <p ref={paragraphRef} className="text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card ref={formCardRef} className="border-none shadow-md">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-500 text-black hover:bg-sky-500-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-sky-500" />,
                  label: "Email",
                  text: "dhruvstackdev@gmail.com",
                  link: "mailto:dhruvstackdev@gmail.com",
                },
                {
                  icon: <Linkedin className="w-6 h-6 text-sky-500" />,
                  label: "LinkedIn",
                  text: "linkedin.com/in/dhruv-zanzmera-3a04062b0",
                  link: "https://www.linkedin.com/in/dhruv-zanzmera-3a04062b0/",
                },
                {
                  icon: <Github className="w-6 h-6 text-sky-500" />,
                  label: "GitHub",
                  text: "github.com/codedByDhruv",
                  link: "https://github.com/codedByDhruv",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  ref={(el) => (contactListRefs.current[index] = el!)}
                  className="flex items-center"
                >
                  <div className="rounded-full p-3 bg-secondary mr-4">{item.icon}</div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-sky-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div ref={finalNoteRef} className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs coding or design skills, I'm here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
