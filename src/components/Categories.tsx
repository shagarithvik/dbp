import { motion } from 'framer-motion';
import { ArrowRight, Crown, Sparkles, Gift, Star, ShoppingBag, Home, Palette } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Silk Thread Bangles',
    description: 'Beautiful handcrafted bangles wrapped with colorful silk threads',
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Star,
    count: 120,
    gradient: 'from-rose-500 to-rose-700',
  },
  {
    id: 2,
    name: 'Designer Bangles',
    description: 'Premium customized bangles with stones, pearls, and embellishments',
    image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Sparkles,
    count: 85,
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    id: 3,
    name: 'Bridal Collections',
    description: 'Luxury wedding and engagement bangle sets for your special day',
    image: 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Crown,
    count: 45,
    gradient: 'from-maroon-500 to-maroon-700',
    featured: true,
  },
  {
    id: 4,
    name: 'Festive Collections',
    description: 'Special collections for Diwali, Sankranti, Navratri, and celebrations',
    image: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Gift,
    count: 60,
    gradient: 'from-peach-400 to-peach-600',
  },
  {
    id: 5,
    name: 'DIY Craft Kits',
    description: 'Craft materials and starter kits for learning handmade crafts',
    image: 'https://images.pexels.com/photos/6199604/pexels-photo-6199604.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: ShoppingBag,
    count: 35,
    gradient: 'from-warm-400 to-warm-600',
  },
  {
    id: 6,
    name: 'Handmade Decor',
    description: 'Decorative handcrafted items for home and gifting',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Home,
    count: 40,
    gradient: 'from-rose-400 to-rose-600',
  },
  {
    id: 7,
    name: 'Personalized Gifts',
    description: 'Customized handmade creations designed for special occasions',
    image: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Palette,
    count: 55,
    gradient: 'from-gold-500 to-maroon-600',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-maroon-600 to-rose-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="section-title mt-4">Featured Categories</h2>
          <p className="section-subtitle mt-4">
            Explore our exquisite collections of handcrafted bangles, jewelry, and creative DIY crafts
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#shop"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-maroon-900/5 card-hover ${
                category.featured ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent" />

                {/* Featured badge */}
                {category.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-gold-500 text-maroon-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Crown className="w-4 h-4" />
                    Bridal Special
                  </div>
                )}

                {/* Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-maroon-800 group-hover:text-maroon-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-xs bg-cream-200 text-warm-600 px-2 py-1 rounded-full">
                    {category.count} items
                  </span>
                </div>
                <p className="text-warm-500 text-sm line-clamp-2">{category.description}</p>

                {/* Explore button */}
                <div className="mt-4 flex items-center gap-2 text-gold-600 font-medium text-sm group-hover:text-gold-700 transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold-400/0 group-hover:border-gold-400/50 transition-colors pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#shop" className="btn-outline inline-flex items-center gap-2">
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
