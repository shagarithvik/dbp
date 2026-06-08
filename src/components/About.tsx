import { motion } from 'framer-motion';
import { Heart, Palette, Award, Gift, BookOpen, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'Handmade With Love',
    description: 'Every piece crafted with passion and dedication',
    bgColor: 'bg-rose-100',
    textColor: 'text-rose-600',
  },
  {
    icon: Palette,
    title: 'Unique Custom Designs',
    description: 'Personalized creations tailored to your vision',
    bgColor: 'bg-gold-100',
    textColor: 'text-gold-600',
  },
  {
    icon: Award,
    title: 'Premium Craftsmanship',
    description: 'Quality materials and meticulous attention to detail',
    bgColor: 'bg-maroon-100',
    textColor: 'text-maroon-600',
  },
  {
    icon: Sparkles,
    title: 'Festive Collections',
    description: 'Special designs for every celebration',
    bgColor: 'bg-peach-100',
    textColor: 'text-peach-600',
  },
  {
    icon: BookOpen,
    title: 'DIY Learning',
    description: 'Learn the art of crafting through tutorials',
    bgColor: 'bg-warm-100',
    textColor: 'text-warm-600',
  },
  {
    icon: Gift,
    title: 'Personalized Gifts',
    description: 'Thoughtful handmade gifts for loved ones',
    bgColor: 'bg-gold-100',
    textColor: 'text-gold-600',
  },
];

const timeline = [
  { year: '2018', title: 'The Beginning', description: 'Started as a passionate hobby' },
  { year: '2019', title: 'First Exhibition', description: 'Showcased at local craft fair' },
  { year: '2020', title: 'Going Online', description: 'Launched digital presence' },
  { year: '2022', title: 'Bridal Collections', description: 'Expanded to wedding designs' },
  { year: '2024', title: 'DIY Tutorials', description: 'Started teaching craft techniques' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-cream-100 to-peach-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 floral-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="section-title mt-4">About DIY By Priyanka</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-maroon-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-200 to-peach-200 rounded-3xl -rotate-3 opacity-60" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Priyanka crafting handmade bangles"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-cream-100 font-serif text-xl italic">
                    "Every thread tells a story of tradition, creativity, and love"
                  </p>
                  <p className="text-gold-300 mt-2 font-medium">- Priyanka</p>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="10,5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#e8a0bf" strokeWidth="2" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl text-maroon-800 mb-6">
              Where Passion Meets Craftsmanship
            </h3>
            <div className="space-y-4 text-warm-600 leading-relaxed">
              <p>
                DIY By Priyanka was born from a deep love for traditional Indian handicrafts and the
                desire to create something truly unique. What started as a hobby in 2018 has blossomed
                into a premium artisan brand that celebrates the beauty of handmade creations.
              </p>
              <p>
                Each piece is meticulously handcrafted using the finest silk threads, embellished with
                pearls, beads, and stones. Our designs blend traditional Indian aesthetics with modern
                elegance, creating timeless pieces that tell a story.
              </p>
              <p>
                From bridal collections that add sparkle to your special day, to everyday designer
                bangles and DIY tutorials that inspire your creativity - we are here to transform
                simple threads into works of art.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-cream-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-rose-400 flex items-center justify-center text-cream-50 font-serif font-bold text-xl">
                  P
                </div>
                <div>
                  <p className="font-serif text-lg text-maroon-800">Priyanka</p>
                  <p className="text-warm-500 text-sm">Founder & Artisan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-cream-300 shadow-lg shadow-maroon-900/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.textColor}`} />
              </div>
              <h4 className="font-serif text-lg font-semibold text-maroon-800 mb-2">{item.title}</h4>
              <p className="text-warm-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h3 className="font-serif text-2xl text-maroon-800 text-center mb-12">Our Journey</h3>

          {/* Timeline line */}
          <div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-rose-400 to-maroon-600 hidden lg:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-cream-200">
                  <span className="text-gold-600 font-bold text-lg">{item.year}</span>
                  <h4 className="font-serif text-lg text-maroon-800 mt-1">{item.title}</h4>
                  <p className="text-warm-500 text-sm mt-1">{item.description}</p>
                </div>

                {/* Timeline dot (visible on lg) */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 bg-gold-400 w-4 h-4 rounded-full border-4 border-cream-100 shadow"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
