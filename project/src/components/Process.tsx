import { motion } from 'framer-motion';
import { Palette, Layers, HandHeart, SearchCheck, Package, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Palette,
    title: 'Concept & Design',
    description: 'We discuss your vision, preferences, and create a design concept together',
    color: 'maroon',
  },
  {
    id: 2,
    icon: Layers,
    title: 'Material Selection',
    description: 'Choose from premium silk threads, pearls, stones, and embellishments',
    color: 'gold',
  },
  {
    id: 3,
    icon: HandHeart,
    title: 'Handcrafting',
    description: 'Our skilled artisans meticulously craft your piece with love and precision',
    color: 'rose',
  },
  {
    id: 4,
    icon: SearchCheck,
    title: 'Quality Inspection',
    description: 'Every detail is checked to ensure perfect finish and durability',
    color: 'peach',
  },
  {
    id: 5,
    icon: Package,
    title: 'Packaging',
    description: 'Beautifully packaged in premium boxes, ready for gifting',
    color: 'warm',
  },
  {
    id: 6,
    icon: Truck,
    title: 'Delivery',
    description: 'Carefully shipped to your doorstep with tracking and insurance',
    color: 'maroon',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
    maroon: { bg: 'bg-maroon-100', text: 'text-maroon-600', gradient: 'from-maroon-500 to-maroon-700', border: 'border-maroon-300' },
    gold: { bg: 'bg-gold-100', text: 'text-gold-600', gradient: 'from-gold-400 to-gold-600', border: 'border-gold-300' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', gradient: 'from-rose-400 to-rose-600', border: 'border-rose-300' },
    peach: { bg: 'bg-peach-100', text: 'text-peach-600', gradient: 'from-peach-400 to-peach-600', border: 'border-peach-300' },
    warm: { bg: 'bg-warm-100', text: 'text-warm-600', gradient: 'from-warm-500 to-warm-700', border: 'border-warm-300' },
  };
  return colors[color] || colors.maroon;
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 silk-texture" />
      <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2 bg-gradient-to-r from-gold-200/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 -translate-y-1/2 bg-gradient-to-l from-rose-200/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">From Vision to Reality</span>
          <h2 className="section-title mt-4">Our Crafting Process</h2>
          <p className="section-subtitle mt-4">
            Every piece goes through meticulous steps to ensure perfection
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-maroon-500 via-gold-400 to-rose-500" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step number - shown on mobile between items */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-cream-50 font-bold text-lg">{step.id}</span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`lg:mt-16 bg-white rounded-2xl p-6 shadow-lg border border-cream-200 group-hover:border-${step.color}-300 group-hover:shadow-xl transition-all duration-300`}>
                    {/* Icon - on mobile/tablet */}
                    <div className={`lg:hidden w-8 h-8 rounded-full ${colorClasses.bg} flex items-center justify-center mb-4`}>
                      <span className={`${colorClasses.text} font-bold`}>{step.id}</span>
                    </div>

                    <div className={`hidden lg:flex w-14 h-14 rounded-xl ${colorClasses.bg} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-7 h-7 ${colorClasses.text}`} />
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-maroon-800 mb-2">{step.title}</h3>
                    <p className="text-warm-500 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector - mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-cream-300 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-warm-600 mb-6">Ready to start your custom creation?</p>
          <a href="#custom-order" className="btn-primary inline-flex items-center gap-2">
            Start Your Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}
