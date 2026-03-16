import { FadeIn } from './FadeIn';
import { Scissors, Sparkles, Droplets, Wind, Heart, Crown } from 'lucide-react';

const services = [
  {
    title: 'Precision Haircuts',
    description: 'Tailored cuts designed to enhance your natural features and fit your lifestyle perfectly.',
    icon: Scissors,
    price: 'From $65'
  },
  {
    title: 'Color & Highlights',
    description: 'Dimensional color, balayage, and traditional highlights for a luminous, natural look.',
    icon: Sparkles,
    price: 'From $150'
  },
  {
    title: 'Custom Color',
    description: 'Transformative color correction and vivid custom shades crafted just for you.',
    icon: Droplets,
    price: 'Consultation'
  },
  {
    title: 'Blowouts & Styling',
    description: 'Signature blowouts and styling for a flawless, polished finish that lasts.',
    icon: Wind,
    price: 'From $55'
  },
  {
    title: 'Special Occasion Hair',
    description: 'Elegant updos and styling for weddings, galas, and your most important events.',
    icon: Crown,
    price: 'From $95'
  },
  {
    title: 'Hair Consultation',
    description: 'A personalized session to discuss your hair goals and create a custom care plan.',
    icon: Heart,
    price: 'Complimentary'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream-50 text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Signature Services</h2>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group bg-white p-10 rounded-sm border border-black/5 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col">
                <div className="w-14 h-14 bg-cream-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-gold-400 transition-colors duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-black/60 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-auto">
                  <span className="text-sm font-medium tracking-wider uppercase text-black/40">{service.price}</span>
                  <a href="#book" className="text-gold-500 text-sm uppercase tracking-widest font-medium hover:text-black transition-colors flex items-center gap-2">
                    Book <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
