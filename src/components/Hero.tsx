import { motion } from 'motion/react';
import { Star, Phone, Calendar } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/1fCVnm4f/468236296-538187305705690-3696024785618429652-n.jpg"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover opacity-70 animate-hero-bg origin-center"
          referrerPolicy="no-referrer"
        />
        {/* Softened gradient overlay for better brightness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black"></div>
        {/* Gold highlight/glow effect in the center to make it pop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] mix-blend-screen"></div>
      </div>

      {/* Logo Image */}
      <div className="absolute top-24 left-0 right-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://i.ibb.co/6Rcqd4Jy/logo-png.png" 
            alt="The Cutting Edge Studio Logo" 
            className="w-32 md:w-48 lg:w-56 h-auto object-contain drop-shadow-2xl pointer-events-auto"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
            <div className="flex text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs text-white uppercase tracking-widest font-medium">Rated 4.9 from 11 reviews</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gold-400 mb-6 leading-[1.1] tracking-tight text-balance mt-12 md:mt-16">
            <span className="text-white">Elevated Hair Color</span> <br className="hidden md:block" />
            <span className="italic font-light">& Styling</span> in Wimberley
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light text-balance">
            Experience expert hair care, custom color, and beautiful styling in a luxurious women-owned salon.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#book"
            className="w-full sm:w-auto group relative px-8 py-4 bg-gold-400 text-black font-medium uppercase tracking-widest text-sm overflow-hidden rounded-sm flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar size={18} />
              Book Appointment
            </span>
            <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          
          <a
            href="tel:+15127223200"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call Us
          </a>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
