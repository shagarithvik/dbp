import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, Heart, MessageCircle, Play } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '2.5K',
    comments: '45',
    isReel: false,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '3.2K',
    comments: '89',
    isReel: true,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '1.8K',
    comments: '32',
    isReel: false,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '2.1K',
    comments: '54',
    isReel: true,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '1.5K',
    comments: '28',
    isReel: false,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/6199604/pexels-photo-6199604.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '4.2K',
    comments: '112',
    isReel: true,
  },
];

export default function Instagram() {
  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-cream-100 to-peach-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30 floral-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">@diy_by_priyanka</span>
          <h2 className="section-title mt-4">Follow Our Creative Journey</h2>
          <p className="section-subtitle mt-4">
            Stay connected for daily inspiration, behind-the-scenes, and exclusive offers
          </p>

          {/* Instagram handle */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gradient-to-r from-maroon-600 via-rose-500 to-gold-500 rounded-full text-cream-50 font-medium shadow-lg"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @diy_by_priyanka
          </motion.a>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-maroon-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Reel indicator */}
                {post.isReel && (
                  <div className="absolute top-2 right-2">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram icon on hover */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: '15K+', label: 'Followers' },
            { value: '500+', label: 'Posts' },
            { value: '50+', label: 'Reels' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-white rounded-xl shadow-sm border border-cream-200"
            >
              <p className="font-serif text-2xl font-bold text-maroon-700">{stat.value}</p>
              <p className="text-warm-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
