import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Star, Search, Filter, X, Plus, Minus, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Maroon Silk Thread Bangles Set',
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Silk Thread',
    badge: 'Bestseller',
    colors: ['#7a1f35', '#d4af37', '#e8a0bf'],
  },
  {
    id: 2,
    name: 'Bridal Gold Pearl Bangles Collection',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Bridal',
    badge: 'Premium',
    colors: ['#d4af37', '#fff8f0', '#7a1f35'],
  },
  {
    id: 3,
    name: 'Designer Peacock Pattern Bangles',
    price: 1899,
    originalPrice: 2199,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Designer',
    badge: 'New',
    colors: ['#1a5276', '#7a1f35', '#d4af37'],
  },
  {
    id: 4,
    name: 'Festive Pink Rose Bangles Set',
    price: 999,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Festive',
    badge: null,
    colors: ['#e8a0bf', '#7a1f35', '#fff8f0'],
  },
  {
    id: 5,
    name: 'Traditional Red & Gold Bridal Set',
    price: 3999,
    originalPrice: 4599,
    rating: 5.0,
    reviews: 45,
    image: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Bridal',
    badge: 'Exclusive',
    colors: ['#c0392b', '#d4af37', '#fff8f0'],
  },
  {
    id: 6,
    name: 'Mandala Art Designer Bangles',
    price: 1599,
    originalPrice: 1899,
    rating: 4.5,
    reviews: 78,
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Designer',
    badge: null,
    colors: ['#8b5e3c', '#d4af37', '#e8a0bf'],
  },
  {
    id: 7,
    name: 'Pastel Silk Thread Bangles',
    price: 899,
    originalPrice: 1099,
    rating: 4.4,
    reviews: 203,
    image: 'https://images.pexels.com/photos/6199604/pexels-photo-6199604.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Silk Thread',
    badge: 'Sale',
    colors: ['#f8d7c4', '#e8a0bf', '#ffe6cc'],
  },
  {
    id: 8,
    name: 'Wedding Ceremony Premium Set',
    price: 5999,
    originalPrice: 6999,
    rating: 4.9,
    reviews: 34,
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Bridal',
    badge: 'Premium',
    colors: ['#7a1f35', '#d4af37', '#e8a0bf'],
  },
];

const filters = ['All', 'Silk Thread', 'Bridal', 'Designer', 'Festive', 'DIY Kits'];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesFilter = activeFilter === 'All' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openQuickView = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-peach-50 to-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Shop Now</span>
          <h2 className="section-title mt-4">Our Collections</h2>
          <p className="section-subtitle mt-4">
            Discover beautifully handcrafted bangles and jewelry made with love
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10"
        >
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-maroon-600 text-cream-50 shadow-lg'
                    : 'bg-white text-warm-600 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-cream-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition-all outline-none text-warm-700"
            />
          </div>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-maroon-900/5 card-hover"
              >
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                      product.badge === 'Sale' ? 'bg-rose-500 text-white' :
                      product.badge === 'New' ? 'bg-emerald-500 text-white' :
                      product.badge === 'Premium' ? 'bg-gold-500 text-maroon-900' :
                      product.badge === 'Exclusive' ? 'bg-maroon-600 text-cream-50' :
                      'bg-gold-400 text-maroon-900'
                    }`}>
                      {product.badge}
                    </div>
                  )}

                  {/* Quick actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-rose-50 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-rose-500" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openQuickView(product)}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-gold-50 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-gold-600" />
                    </motion.button>
                  </div>

                  {/* Add to cart overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full btn-secondary flex items-center justify-center gap-2 text-sm py-3">
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-4">
                  <p className="text-xs text-gold-600 font-medium uppercase tracking-wide">{product.category}</p>
                  <h3 className="font-serif text-base font-semibold text-maroon-800 mt-1 line-clamp-2 group-hover:text-maroon-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-cream-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-warm-500">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="font-bold text-maroon-700">Rs. {product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-warm-400 line-through">Rs. {product.originalPrice}</span>
                    )}
                  </div>

                  {/* Colors */}
                  <div className="flex gap-1 mt-3">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline inline-flex items-center gap-2">
            Load More Products
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-maroon-900/50 backdrop-blur-sm"
            onClick={() => setIsQuickViewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream-100 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-maroon-700" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative aspect-square">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-maroon-900">
                      {selectedProduct.badge}
                    </div>
                  )}
                </div>

                {/* Info side */}
                <div className="p-8">
                  <p className="text-gold-600 font-medium uppercase tracking-wide">{selectedProduct.category}</p>
                  <h2 className="font-serif text-2xl font-bold text-maroon-800 mt-2">{selectedProduct.name}</h2>

                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating) ? 'text-gold-400 fill-gold-400' : 'text-cream-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-warm-500">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <span className="font-serif text-3xl font-bold text-maroon-700">Rs. {selectedProduct.price}</span>
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <>
                        <span className="text-lg text-warm-400 line-through">Rs. {selectedProduct.originalPrice}</span>
                        <span className="px-2 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                          {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-warm-600 mt-4 leading-relaxed">
                    Beautiful handcrafted bangles made with premium silk threads, decorated with pearls and stones.
                    Perfect for festive occasions and weddings.
                  </p>

                  {/* Colors */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-maroon-800 mb-2">Available Colors</p>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color, i) => (
                        <button
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-maroon-800 mb-2">Quantity</p>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-semibold text-maroon-800 w-8 text-center">1</span>
                      <button className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-8">
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center hover:bg-rose-100 transition-colors">
                      <Heart className="w-5 h-5 text-rose-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
