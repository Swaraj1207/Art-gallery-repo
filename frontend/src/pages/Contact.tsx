import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Interested in a painting or commissioning a custom piece? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-inter text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-inter text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What can I help you with?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your inquiry..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Commissions
              </h2>
              <p className="font-inter text-muted-foreground mb-4">
                I accept commission work for custom paintings. Whether you have a specific vision 
                or need guidance on style and composition, I'm here to create something unique for you.
              </p>
              <p className="font-inter text-muted-foreground">
                Commission lead time is typically 4-8 weeks depending on size and complexity.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:artist@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-inter">artist@example.com</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="font-inter">@artiststudio</span>
                </a>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Response Time
              </h2>
              <p className="font-inter text-muted-foreground">
                I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                please reach out via Instagram DM.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
