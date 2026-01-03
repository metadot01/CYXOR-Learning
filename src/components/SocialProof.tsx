import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Cyxor's AI courses transformed our team's capabilities. Hands-on labs gave us confidence for production deployment.",
    author: "Head of AI",
    company: "UK Financial Services",
    rating: 5,
  },
  {
    quote: "GDPR training went from checkbox to competitive sport. Engagement up 300% and our team actually looks forward to compliance training now.",
    author: "Chief Compliance Officer",
    company: "Healthcare",
    rating: 5,
  },
];

const stats = [
  { value: "95%", label: "Completion Rate" },
  { value: "4.9", label: "Average Rating" },
  { value: "10K+", label: "Learners Trained" },
  { value: "50+", label: "Enterprise Clients" },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-4 px-4 py-1.5 bg-primary/5 rounded-full">
            What Learners Say
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border animate-fade-up group hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground font-medium mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
