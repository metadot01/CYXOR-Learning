import { Quote, Star } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "CYXOR LEARNING's AI courses transformed our team's capabilities. Hands-on labs gave us confidence for production deployment.",
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
  { value: "95%", label: "Completion Rate", color: "text-emerald" },
  { value: "4.9", label: "Average Rating", color: "text-gold" },
  { value: "10K+", label: "Learners Trained", color: "text-cyan" },
  { value: "50+", label: "Enterprise Clients", color: "text-ocean" },
];

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              delay={index * 100}
              animation="scale"
              className="text-center"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <AnimatedSection className="text-center mb-8">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            What Learners Say
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              delay={index * 150}
              animation={index === 0 ? "slide-left" : "slide-right"}
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border group hover:shadow-card-hover hover:border-cyan/20 transition-all h-full">
                {/* Quote icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-7 h-7 rounded-full bg-ocean flex items-center justify-center shadow-lg">
                    <Quote className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-foreground font-medium mb-5 leading-relaxed text-base">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
                    <span className="text-cyan font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
