import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, Sparkles, Star, Clock, Heart, Check } from 'lucide-react';

const occasions = [
  'Wedding',
  'Engagement',
  'Birthday',
  'Anniversary',
  'Festival',
  'Party',
  'Gift',
  'Other',
];

const bangleSizes = [
  '2.4 (Small)',
  '2.6 (Standard)',
  '2.8 (Medium)',
  '2.10 (Large)',
  '2.12 (Extra Large)',
  'Custom Size',
];

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: '',
    bangleSize: '',
    preferredColors: '',
    quantity: 1,
    specialInstructions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="custom-order" className="py-24 bg-gradient-to-b from-cream-100 to-peach-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Personalized Creations</span>
          <h2 className="section-title mt-4">Bring Your Dream Design to Life</h2>
          <p className="section-subtitle mt-4">
            Share your vision and we will handcraft a unique piece just for you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 text-center shadow-xl border border-cream-200"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="font-serif text-2xl text-maroon-800 mb-4">Order Request Submitted!</h3>
                <p className="text-warm-600 mb-6">
                  Thank you for your custom order request. We will contact you within 24-48 hours to discuss your design.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-cream-200">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Full Name *</label>
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

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
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

                  {/* Occasion */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Occasion *</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                    >
                      <option value="">Select occasion</option>
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>{occ}</option>
                      ))}
                    </select>
                  </div>

                  {/* Bangle Size */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Bangle Size *</label>
                    <select
                      name="bangleSize"
                      value={formData.bangleSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                    >
                      <option value="">Select size</option>
                      {bangleSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Colors */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Preferred Colors *</label>
                    <input
                      type="text"
                      name="preferredColors"
                      value={formData.preferredColors}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                      placeholder="e.g., Maroon, Gold, Pink, or specific color codes"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Quantity</label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                        className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center hover:bg-cream-200 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                        className="w-20 text-center px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                        className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center hover:bg-cream-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Reference Image</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-cream-50 border-2 border-dashed border-cream-300 hover:border-gold-400 cursor-pointer transition-colors text-warm-600"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload reference</span>
                      </label>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-maroon-800 mb-2">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all outline-none text-warm-700 resize-none"
                      placeholder="Describe your dream design, specific materials, or any other details..."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary mt-8 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Order Request
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Featured image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom order process"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-gold-300 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Custom Made</span>
                </div>
                <h3 className="font-serif text-xl text-cream-50">Every piece is uniquely crafted for you</h3>
              </div>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {[
                { icon: Star, title: 'Premium Quality', desc: 'Only the finest materials used' },
                { icon: Clock, title: 'Quick Turnaround', desc: '7-14 days delivery time' },
                { icon: Heart, title: 'Satisfaction Guaranteed', desc: 'Revisions until you are happy' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-cream-200 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-rose-400 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-maroon-800">{item.title}</h4>
                    <p className="text-warm-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
