"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Instagram } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-cream-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-dark-lighter max-w-2xl mx-auto">
              We&apos;d love to hear from you! Reach out for orders, custom
              requests, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-dark mb-2">
                Let&apos;s Connect
              </h2>
              <p className="text-dark-lighter mb-8 text-sm">
                The fastest way to order is via WhatsApp or Instagram DM.
                We typically respond within 30 minutes during business hours.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-warm">
                  <div className="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">Location</h3>
                    <p className="text-dark-lighter text-sm">
                      Kairwaan Gaon, Rajpur<br />
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-warm">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">WhatsApp</h3>
                    <a
                      href="https://wa.me/919811330345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm font-medium hover:underline"
                    >
                      Tap to chat on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-warm">
                  <div className="w-11 h-11 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">Instagram</h3>
                    <a
                      href="https://www.instagram.com/bakingbeyondboundaries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 text-sm font-medium hover:underline"
                    >
                      @bakingbeyondboundaries →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-warm">
                  <div className="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">Hours</h3>
                    <p className="text-dark-lighter text-sm">
                      Monday – Sunday: 10:00 AM – 10:00 PM
                    </p>
                    <p className="text-primary-500 text-xs font-medium mt-1">
                      Open all 7 days!
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-warm h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.3!2d78.024!3d30.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d6f6c58e6985%3A0x7e15f0f3c72c52a3!2sRajpur%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baking Beyond Boundaries location — Rajpur, Dehradun"
                />
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-warm-lg border border-primary-100/50"
              >
                <h3 className="text-xl font-serif font-bold text-dark mb-6">
                  Send us a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Place an Order</option>
                      <option value="custom">Custom Cake Inquiry</option>
                      <option value="bulk">Bulk / Corporate Order</option>
                      <option value="question">General Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your order or question..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      submitted
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-warm-lg hover:scale-[1.02]"
                    }`}
                  >
                    {submitted ? (
                      <>✅ Message Sent!</>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
              Questions?
            </span>
            <h2 className="text-3xl font-serif font-bold text-dark mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Are all your products eggless?",
                a: "Yes! Every single item we make is 100% eggless. We never use eggs in any of our recipes.",
              },
              {
                q: "What millets do you use?",
                a: "We primarily use Ragi (Finger Millet), Jowar (Sorghum), and Bajra (Pearl Millet). Each flour has unique nutritional benefits.",
              },
              {
                q: "Do you deliver in Dehradun?",
                a: "Yes! We deliver across Dehradun. For bulk orders, we offer free delivery. DM us on Instagram or WhatsApp for delivery details.",
              },
              {
                q: "Can I order custom cakes?",
                a: "Absolutely! We love custom orders. Use our Custom Order page or DM us on Instagram with your requirements.",
              },
              {
                q: "How far in advance should I order?",
                a: "For regular items, 24 hours notice is ideal. For custom cakes and festive hampers, we recommend 3-5 days in advance.",
              },
              {
                q: "Are sugar-free options available?",
                a: "Yes! We offer sugar-free variants sweetened with jaggery, dates, or stevia. Just ask when ordering.",
              },
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-warm group"
              >
                <summary className="p-5 font-semibold text-dark text-sm cursor-pointer flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-primary-500 text-lg group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-dark-lighter text-sm leading-relaxed -mt-1">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}