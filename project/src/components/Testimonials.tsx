import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Beautiful craftsmanship and amazing attention to detail. The bridal bangles were exactly what I dreamed of. Priyanka was so patient with my custom requests!',
    image: 'https://images.pexels.com/photos/7749094/pexels-photo-7749094.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'Bridal Collection',
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Delhi',
    rating: 5,
    text: 'Perfect bridal bangles for my wedding. Everyone at the ceremony loved them! The quality exceeded my expectations and they arrived beautifully packaged.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'Bridal Set',
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'The quality exceeded my expectations. I have ordered multiple times and every piece is a masterpiece. The DIY tutorials helped me learn too!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'Designer Bangles',
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    location: 'Chennai',
    rating: 5,
    text: 'I ordered custom bangles for my engagement and they were absolutely stunning. The colors were perfect and the craftsmanship is impeccable.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'Custom Order',
  },
  {
    id: 5,
    name: 'Kavitha Nair',
    location: 'Bangalore',
    rating: 5,
    text: 'The festive collection is amazing! Got so many compliments during Diwali. Will definitely order again for the next festival.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'Festive Collection',
  },
  {
    id: 6,
    name: 'Riya Mehta',
    location: 'Pune',
    rating: 5,
    text: 'Learnt so much from the DIY tutorials! Now I can make my own simple bangles. Thank you Priyanka for sharing your knowledge!',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    product: 'DIY Tutorial',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      if (direction === 'prev') return prev === 0 ? testimonials.length - 1 : prev - 1;
      return (prev + 1) % testimonials.length;
    });
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-peach-50 to-cream-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold-200/30 to-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-maroon-200/20 to-peach-200/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Customer Love</span>
          <h2 className="section-title mt-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-maroon-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main testimonial carousel */}
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-maroon-600 flex items-center justify-center shadow-lg">
            <Quote className="w-8 h-8 text-cream-50" />
          </div>

          {/* Carousel container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-cream-200 pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Customer image */}
                  <div className="flex md:justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-300 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-maroon-900">
                        <span className="font-bold text-xs">{testimonials[currentIndex].rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="md:col-span-2 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating ? 'text-gold-400 fill-gold-400' : 'text-cream-300'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-warm-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h4 className="font-serif text-lg font-semibold text-maroon-800">
                        {testimonials[currentIndex].name}
                      </h4>
                      <span className="text-warm-500">{testimonials[currentIndex].location}</span>
                      <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                        {testimonials[currentIndex].product}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => navigate('prev')}
              className="w-12 h-12 rounded-full bg-white border border-cream-300 flex items-center justify-center hover:bg-cream-50 hover:border-gold-400 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-maroon-700" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-maroon-600'
                      : 'bg-cream-300 hover:bg-cream-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate('next')}
              className="w-12 h-12 rounded-full bg-white border border-cream-300 flex items-center justify-center hover:bg-cream-50 hover:border-gold-400 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-maroon-700" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '1000+', label: 'Happy Customers' },
            { value: '4.9', label: 'Average Rating' },
            { value: '500+', label: '5-Star Reviews' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4"
            >
              <p className="font-serif text-3xl font-bold text-maroon-700">{stat.value}</p>
              <p className="text-warm-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
