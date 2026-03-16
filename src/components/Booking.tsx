import { FadeIn } from './FadeIn';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Booking() {
  return (
    <section id="book" className="py-24 md:py-32 bg-black text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <FadeIn direction="right">
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium mb-4 block">Reserve Your Time</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Book an Appointment</h2>
            <p className="text-white/70 font-light mb-12 max-w-md text-lg">
              Ready for a transformation? Request an appointment below or contact us directly to schedule your luxury salon experience.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-gold-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Call Us</h4>
                  <a href="tel:+15127223200" className="text-xl font-serif hover:text-gold-400 transition-colors">+1 512-722-3200</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-gold-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Visit Us</h4>
                  <p className="text-lg font-serif text-white/90">
                    203 Stillwater Rd Suite 3 Box 12<br />
                    Wimberley, TX 78676
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-gold-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Hours</h4>
                  <p className="text-lg font-serif text-white/90">
                    Mon - Sat: 8:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="tel:+15127223200"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-black font-medium uppercase tracking-widest text-sm rounded-sm hover:bg-gold-300 transition-colors"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </FadeIn>

          {/* Booking Form */}
          <FadeIn direction="left">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm backdrop-blur-sm">
              <h3 className="text-2xl font-serif mb-8">Request a Service</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors" placeholder="(512) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Service Needed</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-black text-white">Select a service...</option>
                      <option value="cut" className="bg-black text-white">Haircut & Style</option>
                      <option value="color" className="bg-black text-white">Color & Highlights</option>
                      <option value="custom" className="bg-black text-white">Custom Color / Correction</option>
                      <option value="blowout" className="bg-black text-white">Blowout</option>
                      <option value="consultation" className="bg-black text-white">Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Preferred Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Preferred Time</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-black text-white">Select time...</option>
                      <option value="morning" className="bg-black text-white">Morning (9AM - 12PM)</option>
                      <option value="afternoon" className="bg-black text-white">Afternoon (12PM - 4PM)</option>
                      <option value="evening" className="bg-black text-white">Evening (4PM - 6PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Additional Details</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors resize-none" placeholder="Tell us about your hair goals..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gold-400 text-black font-medium uppercase tracking-widest text-sm hover:bg-gold-300 transition-colors rounded-sm mt-4">
                  Request Appointment
                </button>
                <p className="text-xs text-white/40 text-center mt-4">
                  *This is a request. We will contact you to confirm your appointment.
                </p>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
