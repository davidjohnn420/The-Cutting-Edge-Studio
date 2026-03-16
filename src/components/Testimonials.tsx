import { FadeIn } from './FadeIn';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Kathy is an amazing artist! She is so good at what she dose. I 100% recommend!!💗",
    author: "Auna C.",
    role: "Client"
  },
  {
    text: "Kathy is the best! You are so great at what you do! You made this momma feel beautiful and I'm so grateful! 💗 Go to the Cutting Edge Studio!",
    author: "Casey Simpson",
    role: "Client"
  },
  {
    text: "Kathy is the absolute best hair stylist I’ve ever had. She’s genuine and patient. I’d give her a 10 star rating!",
    author: "Ashley Calaway",
    role: "Client"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream-100 text-black relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-black/[0.02] whitespace-nowrap pointer-events-none select-none">
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Love</h2>
            <div className="flex justify-center gap-1 text-gold-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="bg-white p-10 rounded-sm shadow-sm relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-gold-400/20" size={48} />
                <p className="text-lg font-serif italic leading-relaxed mb-8 relative z-10 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <p className="font-medium uppercase tracking-widest text-sm">{testimonial.author}</p>
                  <p className="text-xs text-black/50 uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
