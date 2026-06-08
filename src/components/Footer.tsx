import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Heart, ArrowUp, Send, MapPin, Phone, Mail } from 'lucide-react';

const navLinks = [
  {
    title: 'Shop',
    links: [
      { name: 'Silk Thread Bangles', href: '#shop' },
      { name: 'Bridal Collection', href: '#shop' },
      { name: 'Designer Bangles', href: '#shop' },
      { name: 'Festive Collection', href: '#shop' },
      { name: 'DIY Craft Kits', href: '#shop' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'All Tutorials', href: '#tutorials' },
      { name: 'Bangle Making', href: '#tutorials' },
      { name: 'Silk Thread Art', href: '#tutorials' },
      { name: 'Beginner Guide', href: '#tutorials' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Custom Orders', href: '#custom-order' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns & Exchange', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-rose-500' },
  { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' },
  { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubscribing(false);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maroon-900 text-cream-100 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-gold-400 via-rose-400 to-gold-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-12 pb-12 border-b border-maroon-700">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 via-rose-400 to-gold-500 flex items-center justify-center">
                <span className="text-maroon-900 font-serif font-bold text-lg">DP</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">DIY By Priyanka</h3>
                <p className="text-cream-300 text-sm">Handcrafted with Love</p>
              </div>
            </div>

            <p className="text-cream-300 leading-relaxed mb-6">
              Transforming threads into timeless art. We create beautiful handcrafted bangles, jewelry, and DIY crafts with passion and precision.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-serif text-lg mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-cream-400 text-sm mb-4">Get updates on new collections and tutorials</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-maroon-800 border border-maroon-600 focus:border-gold-400 outline-none text-cream-100 placeholder:text-cream-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="px-4 py-2 rounded-full bg-gold-500 text-maroon-900 font-medium hover:bg-gold-400 transition-colors disabled:opacity-70"
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-maroon-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-cream-300">
                <MapPin className="w-4 h-4 text-gold-400" />
                Mumbai, Maharashtra, India
              </div>
              <div className="flex items-center gap-2 text-cream-300">
                <Phone className="w-4 h-4 text-gold-400" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-cream-300">
                <Mail className="w-4 h-4 text-gold-400" />
                hello@diybypriyanka.com
              </div>
            </div>
          </div>

          {/* Nav links */}
          {navLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-lg font-semibold mb-4 text-gold-300">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.icon.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center text-cream-300 ${social.color} transition-colors`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-cream-400 text-sm">
            <p>© 2024 DIY By Priyanka. All rights reserved.</p>
            <p className="flex items-center justify-center gap-1 mt-1">
              Made with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> in India
            </p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center text-gold-400 hover:bg-maroon-700 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
