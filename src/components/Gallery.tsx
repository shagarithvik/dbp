import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, ExternalLink } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Silk Thread Collection',
    category: 'Bangles',
    size: 'large',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bridal Gold Set',
    category: 'Bridal',
    size: 'medium',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Designer Bangles',
    category: 'Designer',
    size: 'small',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Festive Collection',
    category: 'Festive',
    size: 'medium',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Crafting Process',
    category: 'Behind The Scenes',
    size: 'large',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/6199604/pexels-photo-6199604.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'DIY Materials',
    category: 'Crafts',
    size: 'small',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/7744003/pexels-photo-7744003.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wedding Special',
    category: 'Bridal',
    size: 'medium',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Customer Love',
    category: 'Reviews',
    size: 'small',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/5867368/pexels-photo-5867368.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pearl Elegance',
    category: 'Jewelry',
    size: 'large',
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/5370652/pexels-photo-5370652.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Handmade Decor',
    category: 'Home Decor',
    size: 'medium',
  },
];

const categories = ['All', 'Bangles', 'Bridal', 'Designer', 'Festive', 'Behind The Scenes', 'Jewelry'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const toggleLike = (id: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIdx = filteredImages.findIndex((img) => img.id === selectedImage);
    let newIdx = direction === 'prev' ? currentIdx - 1 : currentIdx + 1;
    if (newIdx < 0) newIdx = filteredImages.length - 1;
    if (newIdx >= filteredImages.length) newIdx = 0;
    setSelectedImage(filteredImages[newIdx].id);
  };

  return (
    <section id="gallery" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-peach-200/30 to-maroon-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Visual Stories</span>
          <h2 className="section-title mt-4">Our Gallery</h2>
          <p className="section-subtitle mt-4">
            Browse through our beautiful collection of handcrafted creations and behind-the-scenes moments
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-maroon-600 text-cream-50 shadow-lg'
                  : 'bg-white text-warm-600 hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  image.size === 'large'
                    ? 'md:col-span-2 md:row-span-2'
                    : image.size === 'medium'
                    ? 'md:col-span-1 md:row-span-2'
                    : 'col-span-1 row-span-1'
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-cream-200 text-xs uppercase tracking-wide">{image.category}</p>
                    <h3 className="font-serif text-lg text-cream-50 mt-1">{image.title}</h3>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        likedImages.has(image.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/40'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-900/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filteredImages[currentIndex]?.src}
              alt={filteredImages[currentIndex]?.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-cream-200 text-sm uppercase tracking-wide">{filteredImages[currentIndex]?.category}</p>
              <h3 className="font-serif text-2xl text-cream-50 mt-1">{filteredImages[currentIndex]?.title}</h3>
              <div className="flex justify-center mt-4 gap-2">
                {filteredImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img.id);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-gold-400 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
