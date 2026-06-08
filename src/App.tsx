import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Tutorials from './components/Tutorials';
import CustomOrder from './components/CustomOrder';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream-100"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-4"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" stroke="url(#loaderGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="70 200" />
                <defs>
                  <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="50%" stopColor="#e8a0bf" />
                    <stop offset="100%" stopColor="#7a1f35" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <h2 className="font-serif text-2xl text-maroon-700">DIY By Priyanka</h2>
            <p className="text-warm-500 mt-2">Loading creative treasures...</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-cream-100"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Categories />
            <Shop />
            <Gallery />
            <Tutorials />
            <CustomOrder />
            <Process />
            <Testimonials />
            <Instagram />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
