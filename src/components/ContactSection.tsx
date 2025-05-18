
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get in <span className="text-teal">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-md">
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
                  className="w-full bg-teal text-black hover:bg-teal-dark"
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
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-secondary mr-4">
                  <Mail className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:dhruv@example.com" 
                    className="text-muted-foreground hover:text-teal transition-colors"
                  >
                    dhruv@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-secondary mr-4">
                  <Linkedin className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/dhruv-zanzmera" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-teal transition-colors"
                  >
                    linkedin.com/in/dhruv-zanzmera
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-secondary mr-4">
                  <Github className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a 
                    href="https://github.com/dhruv-zanzmera" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-teal transition-colors"
                  >
                    github.com/dhruv-zanzmera
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
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
