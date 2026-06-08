import { motion } from 'framer-motion';
import { Play, Clock, Award, BookOpen, ArrowRight, ChevronRight } from 'lucide-react';

const tutorialCategories = [
  { name: 'Bangle Making', count: 24, icon: '💫' },
  { name: 'Silk Thread Wrapping', count: 18, icon: '🧵' },
  { name: 'Stone Decoration', count: 15, icon: '💎' },
  { name: 'Pearl Work', count: 12, icon: '🔮' },
  { name: 'Handmade Jewelry', count: 20, icon: '💍' },
  { name: 'Festive Crafts', count: 14, icon: '🎁' },
  { name: 'Gift Making', count: 16, icon: '🎀' },
  { name: 'DIY Home Decor', count: 22, icon: '🏠' },
];

const tutorials = [
  {
    id: 1,
    title: 'Beginner Silk Thread Bangle Tutorial',
    description: 'Learn the basics of silk thread wrapping',
    thumbnail: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '15:30',
    difficulty: 'Beginner',
    views: '25K',
    category: 'Bangle Making',
  },
  {
    id: 2,
    title: 'Designer Bridal Bangles Step by Step',
    description: 'Create stunning bridal bangles with stones',
    thumbnail: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '28:45',
    difficulty: 'Advanced',
    views: '18K',
    category: 'Bridal',
  },
  {
    id: 3,
    title: 'Pearl & Stone Embellishment Techniques',
    description: 'Master the art of adding pearls and stones',
    thumbnail: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '22:15',
    difficulty: 'Intermediate',
    views: '32K',
    category: 'Stone Decoration',
  },
  {
    id: 4,
    title: 'Festive Peacock Design Bangles',
    description: 'Beautiful peacock-inspired designs for festivals',
    thumbnail: 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '35:00',
    difficulty: 'Intermediate',
    views: '45K',
    category: 'Festive Crafts',
  },
  {
    id: 5,
    title: 'DIY Gift Ideas with Handmade Crafts',
    description: 'Create personalized gifts for loved ones',
    thumbnail: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '20:30',
    difficulty: 'Beginner',
    views: '38K',
    category: 'Gift Making',
  },
  {
    id: 6,
    title: 'Advanced Mandala Art Bangles',
    description: 'Intricate mandala patterns on bangles',
    thumbnail: 'https://images.pexels.com/photos/6199604/pexels-photo-6199604.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '42:20',
    difficulty: 'Advanced',
    views: '15K',
    category: 'Designer',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'Intermediate': return 'bg-gold-100 text-gold-700 border-gold-200';
    case 'Advanced': return 'bg-rose-100 text-rose-700 border-rose-200';
    default: return 'bg-cream-100 text-warm-600 border-cream-200';
  }
};

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-24 bg-gradient-to-b from-cream-100 via-peach-50 to-cream-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 silk-texture" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Learn & Create</span>
          <h2 className="section-title mt-4">DIY Tutorials</h2>
          <p className="section-subtitle mt-4">
            Learn the art of handcrafted jewelry making with our step-by-step tutorials
          </p>
        </motion.div>

        {/* Tutorial categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-serif text-xl text-maroon-800 mb-6">Browse by Category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tutorialCategories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-200/20 transition-all duration-300"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div className="text-left">
                  <p className="font-medium text-maroon-800 group-hover:text-gold-700 transition-colors">{cat.name}</p>
                  <p className="text-sm text-warm-500">{cat.count} tutorials</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gold-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured tutorials */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-maroon-800 mb-6">Featured Tutorials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-maroon-900/5 border border-cream-200"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-maroon-900/30 group-hover:bg-maroon-900/40 transition-colors" />

                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                      <Play className="w-7 h-7 text-maroon-700 fill-maroon-700 ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/70 rounded-md text-white text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {tutorial.duration}
                  </div>

                  /* Difficulty badge */
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs text-gold-600 font-medium uppercase tracking-wide mb-1">{tutorial.category}</p>
                  <h4 className="font-serif text-lg font-semibold text-maroon-800 group-hover:text-maroon-600 transition-colors line-clamp-2">
                    {tutorial.title}
                  </h4>
                  <p className="text-warm-500 text-sm mt-2 line-clamp-2">{tutorial.description}</p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-200">
                    <div className="flex items-center gap-4 text-sm text-warm-500">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {tutorial.views}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 text-gold-600 font-medium text-sm group-hover:text-gold-700">
                      Watch Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-700 via-maroon-600 to-rose-700" />
          <div className="absolute inset-0 opacity-20 floral-pattern" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2">
                Start Your Creative Journey
              </h3>
              <p className="text-cream-200 max-w-lg">
                Get access to all tutorials, exclusive content, and learn from the comfort of your home
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-secondary flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                View All Tutorials
              </button>
              <button className="px-6 py-3 bg-white/10 text-cream-50 rounded-full font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                <Award className="w-5 h-5" />
                Get Certified
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
