/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans selection:bg-gold-400 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

