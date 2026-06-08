import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Youtube } from 'lucide-react';
import { CONFIG } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subjectMap: Record<string, string> = {
      order: 'Order Inquiry',
      custom: 'Custom Order',
      workshop: 'Workshop Information',
      collaboration: 'Collaboration',
      other: 'Other',
    };
    
    const subjectText = subjectMap[formData.subject] || formData.subject;
    const text = `Hi Priyanka! I have an inquiry from the website contact form:
- *Name:* ${formData.name}
- *Email:* ${formData.email}
- *Subject:* ${subjectText}
- *Message:* ${formData.message}`;

    const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    
    // Simulate short loader for premium UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.open(url, '_blank', 'noopener,noreferrer');
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-cream-100 relative overflow-hidden">
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
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Get in Touch</span>
          <h2 className="section-title mt-4">Contact Us</h2>
          <p className="section-subtitle mt-4">
            Have questions? We would love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: 'Phone / WhatsApp',
                content: '+91 98765 43210',
                subContent: 'Available on WhatsApp',
                href: `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`,
                bgColor: 'bg-emerald-100',
                textColor: 'text-emerald-600',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@diybypriyanka.com',
                subContent: 'We reply within 24 hours',
                href: 'mailto:hello@diybypriyanka.com',
                bgColor: 'bg-maroon-100',
                textColor: 'text-maroon-600',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Mumbai, Maharashtra',
                subContent: 'India (Shipping Pan India)',
                bgColor: 'bg-gold-100',
                textColor: 'text-gold-600',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Mon - Sat: 10 AM - 7 PM',
                subContent: 'Sunday: Closed',
                bgColor: 'bg-rose-100',
                textColor: 'text-rose-600',
              },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-cream-200 hover:border-gold-300 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <div>
                  <h4 className="font-medium text-maroon-800">{item.title}</h4>
                  <p className="text-warm-700 font-medium">{item.content}</p>
                  <p className="text-warm-500 text-sm">{item.subContent}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-600 via-rose-500 to-gold-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200">
              <h3 className="font-serif text-2xl text-maroon-800 mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-maroon-800 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-maroon-800 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-maroon-100 to-cream-200 flex items-center justify-center border border-cream-300"
        >
          <div className="text-center">
            <MapPin className="w-12 h-12 text-maroon-400 mx-auto mb-2" />
            <p className="font-serif text-lg text-maroon-700">Mumbai, Maharashtra</p>
            <p className="text-warm-500 text-sm">Click to view on Google Maps</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
