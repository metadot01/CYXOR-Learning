import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Send, Building2, Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Enterprise
            <br />
            <span className="text-emerald">Inquiries</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Ready to upskill your team? Let's discuss how CYXOR LEARNING can help your organization.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="scale" className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald" />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald" />
                  Work Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald" />
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corporation"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald" />
                How can we help?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your training needs, team size, and any specific requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-white/50 text-sm">
              We typically respond within 24 hours on business days.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
