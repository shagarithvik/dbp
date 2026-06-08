import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowRight } from 'lucide-react';

const floatingElements = [
  { type: 'pearl', delay: 0, duration: 6, x: '10%', y: '20%' },
  { type: 'pearl', delay: 1, duration: 7, x: '85%', y: '15%' },
  { type: 'pearl', delay: 2, duration: 5, x: '75%', y: '70%' },
  { type: 'pearl', delay: 0.5, duration: 8, x: '20%', y: '75%' },
  { type: 'bead', delay: 1.5, duration: 6, x: '90%', y: '40%' },
  { type: 'bead', delay: 0.3, duration: 7, x: '5%', y: '50%' },
  { type: 'flower', delay: 2, duration: 8, x: '30%', y: '10%' },
  { type: 'flower', delay: 1, duration: 9, x: '70%', y: '85%' },
  { type: 'thread', delay: 0.7, duration: 10, x: '50%', y: '5%' },
  { type: 'sparkle', delay: 1.2, duration: 3, x: '15%', y: '35%' },
  { type: 'sparkle', delay: 0.8, duration: 4, x: '80%', y: '55%' },
  { type: 'sparkle', delay: 1.8, duration: 3.5, x: '40%', y: '90%' },
];

const PearlSVG = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <defs>
      <radialGradient id="pearlGrad" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="50%" stopColor="#ffe4e1" />
        <stop offset="100%" stopColor="#e8a0bf" />
      </radialGradient>
    </defs>
    <circle cx="20" cy="20" r="18" fill="url(#pearlGrad)" />
    <ellipse cx="14" cy="12" rx="6" ry="4" fill="rgba(255,255,255,0.6)" />
  </svg>
);

const BeadSVG = () => (
  <svg viewBox="0 0 30 30" className="w-full h-full">
    <defs>
      <linearGradient id="beadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f5e5b0" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
    </defs>
    <circle cx="15" cy="15" r="12" fill="url(#beadGrad)" />
    <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.5)" />
  </svg>
);

const FlowerSVG = () => (
  <svg viewBox="0 0 50 50" className="w-full h-full opacity-60">
    <g fill="#e8a0bf">
      <ellipse cx="25" cy="15" rx="6" ry="10" transform="rotate(0 25 25)" />
      <ellipse cx="25" cy="15" rx="6" ry="10" transform="rotate(72 25 25)" />
      <ellipse cx="25" cy="15" rx="6" ry="10" transform="rotate(144 25 25)" />
      <ellipse cx="25" cy="15" rx="6" ry="10" transform="rotate(216 25 25)" />
      <ellipse cx="25" cy="15" rx="6" ry="10" transform="rotate(288 25 25)" />
    </g>
    <circle cx="25" cy="25" r="6" fill="#d4af37" />
  </svg>
);

const ThreadSVG = () => (
  <svg viewBox="0 0 100 20" className="w-full h-full opacity-40">
    <path
      d="M0 10 Q25 0 50 10 T100 10"
      stroke="#7a1f35"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-peach-100">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-30 silk-texture" />

      {/* Floating decorative elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            x: [0, el.type === 'thread' ? 50 : 10, 0],
            rotate: [0, el.type === 'sparkle' ? 180 : 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute pointer-events-none"
          style={{
            left: el.x,
            top: el.y,
            width: el.type === 'thread' ? 100 : el.type === 'sparkle' ? 20 : 40,
            height: el.type === 'thread' ? 20 : el.type === 'sparkle' ? 20 : 40,
          }}
        >
          {el.type === 'pearl' && <PearlSVG />}
          {el.type === 'bead' && <BeadSVG />}
          {el.type === 'flower' && <FlowerSVG />}
          {el.type === 'thread' && <ThreadSVG />}
          {el.type === 'sparkle' && (
            <Sparkles className="w-full h-full text-gold-400" />
          )}
        </motion.div>
      ))}

      {/* Mandala background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute right-0 top-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <g fill="none" stroke="#7a1f35" strokeWidth="0.5">
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 200 200)`}>
                <path d="M200 200 Q200 100 200 50" />
                <circle cx="200" cy="80" r="15" />
                <path d="M185 80 Q200 60 215 80" />
              </g>
            ))}
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx="200" cy="200" r={30 + i * 20} strokeDasharray={i % 2 ? "5,5" : "none"} />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gold-700">Handcrafted with Love</span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-maroon-800 leading-tight mb-6">
              Transforming
              <span className="block text-gradient">Threads into</span>
              <span className="block">Timeless Art</span>
            </h1>

            <p className="text-lg sm:text-xl text-warm-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Handcrafted Silk Thread Bangles, Designer Jewelry & Creative DIY Crafts Made with Passion and Precision
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#tutorials"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline inline-flex items-center justify-center gap-2 text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Tutorials
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream-300"
            >
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-maroon-700">500+</p>
                <p className="text-sm text-warm-500">Unique Designs</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-maroon-700">1000+</p>
                <p className="text-sm text-warm-500">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-maroon-700">100%</p>
                <p className="text-sm text-warm-500">Handmade</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main image container with decorative frame */}
            <div className="relative">
              {/* Background decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-gold-300/50" />
              </motion.div>

              {/* Image */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-peach-200 to-cream-200 rounded-full blur-3xl opacity-60" />
                <div className="relative rounded-full overflow-hidden border-4 border-gold-400/30 shadow-2xl shadow-maroon-900/20">
                  <img
                    src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Beautiful handcrafted silk thread bangles"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating product cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-4 top-1/4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Bridal bangles"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-maroon-800">Bridal Collection</p>
                    <p className="text-gold-600 font-semibold">From Rs. 2,999</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Designer bangles"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-maroon-800">Designer Bangles</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gold-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-maroon-600 via-gold-400 to-rose-500" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-maroon-400 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-maroon-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
