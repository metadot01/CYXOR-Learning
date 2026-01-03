import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cyxor's AI courses transformed our team's capabilities. Hands-on labs gave us confidence for production deployment.",
    author: "Head of AI",
    company: "UK Financial Services",
  },
  {
    quote: "GDPR training went from checkbox to competitive sport. Engagement up 300%.",
    author: "Chief Compliance Officer",
    company: "Healthcare",
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-10 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            What Learners Say
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-2xl bg-secondary/50 border border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground font-medium mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-bold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
