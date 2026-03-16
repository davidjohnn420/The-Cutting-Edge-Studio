import { Instagram, Facebook, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-serif font-bold tracking-wider text-gold-400 block">
              THE CUTTING EDGE <span className="text-gold-400 font-light italic">Studio</span>
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Elevated hair color and styling in Wimberley, Texas. Experience luxury care in a welcoming, women-owned space.
            </p>
            <div className="inline-block px-3 py-1 border border-gold-400/30 rounded-full text-xs text-gold-400 uppercase tracking-widest">
              Women-Owned Business
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-medium">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Gallery', 'Book Appointment'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().split(' ')[0]}`} 
                    className="text-white/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-medium">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="tel:+15127223200" className="hover:text-gold-400 transition-colors">+1 512-722-3200</a>
              </li>
              <li>
                203 Stillwater Rd Suite 3 Box 12<br />
                Wimberley, TX 78676
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=203+Stillwater+Rd+Suite+3+Box+12,+Wimberley,+TX+78676" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:text-white transition-colors mt-2"
                >
                  <MapPin size={14} /> Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-medium">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all">
                <Facebook size={18} />
              </a>
            </div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-4 font-medium">Hours</h4>
            <p className="text-sm text-white/60">
              Mon - Sat: 8AM - 6PM<br />
              Sunday: Closed
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} The Cutting Edge Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
