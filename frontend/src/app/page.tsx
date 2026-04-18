"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  Wheat,
  Egg,
  ShieldCheck,
  Candy,
  Instagram,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Quote,
  Phone,
} from "lucide-react";

/* ─── Real Business Data ─── */
const features = [
  {
    icon: Wheat,
    title: "Millet-Based",
    description:
      "Wholesome ragi, jowar & bajra flour for naturally nutritious treats",
    badge: "🌾",
  },
  {
    icon: Egg,
    title: "100% Eggless",
    description:
      "Pure vegetarian recipes — no eggs, no compromise on taste",
    badge: "🥚",
  },
  {
    icon: Candy,
    title: "Sugar-Free Options",
    description:
      "Sweetened with jaggery, dates & natural alternatives",
    badge: "🍯",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Certified",
    description:
      "Registered & food-safety compliant — quality you can trust",
    badge: "✅",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Ragi Dry Teacake",
    category: "Teacakes",
    price: "₹220",
    image: "/images/dry-teacakes.png",
    badges: ["Eggless", "Millet"],
  },
  {
    id: 2,
    name: "Ragi Chocolate Brownies",
    category: "Brownies",
    price: "₹280",
    image: "/images/ragi-brownies.png",
    badges: ["Eggless", "Ragi"],
  },
  {
    id: 3,
    name: "Millet Almond Cookies",
    category: "Cookies",
    price: "₹180",
    image: "/images/millet-cookies.png",
    badges: ["Sugar-Free", "Millet"],
  },
  {
    id: 4,
    name: "Eggless Banana Bread",
    category: "Bread",
    price: "₹250",
    image: "/images/banana-bread.png",
    badges: ["Eggless", "Healthy"],
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Rajpur, Dehradun",
    text: "The ragi teacakes are absolutely divine! So happy to find a bakery that focuses on healthy, millet-based treats. My kids love them!",
    rating: 5,
  },
  {
    name: "Ankit Rawat",
    location: "Dehradun",
    text: "Best eggless brownies I've ever had. The millet flour gives them such a unique, nutty flavor. Vasudha's passion shows in every bite!",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    location: "Mussoorie",
    text: "Ordered a custom cake for my mother's birthday. Sugar-free, eggless, and absolutely delicious. Can't recommend enough!",
    rating: 5,
  },
];

const heroSlides = [
  {
    image: "/images/hero-teacakes.png",
    title: "Baking Beyond Boundaries",
    subtitle:
      "Eggless, millet-based teacakes handcrafted with love in Dehradun",
  },
  {
    image: "/images/ragi-brownies.png",
    title: "Healthy Never Tasted This Good",
    subtitle:
      "Sugar-free, millet-rich bakes that nourish your body and soul",
  },
  {
    image: "/images/millet-cookies.png",
    title: "From Our Kitchen to Yours",
    subtitle:
      "FSSAI certified artisan bakes by a Masters in Food & Nutrition",
  },
];

/* ─── Page Component ─── */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroSlides[currentSlide].image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-sm mb-6 border border-white/20"
              >
                <ShieldCheck className="w-4 h-4" />
                FSSAI Registered • Masters in Food &amp; Nutrition
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-5 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/919811330345?text=Hi!%20I'd%20like%20to%20order%20from%20Baking%20Beyond%20Boundaries"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-warm-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Order via WhatsApp
            </a>
            <Link
              href="/menu"
              className="bg-white/15 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/25 border border-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 bg-cream-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white/80 backdrop-blur p-7 rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 border border-primary-100/50"
              >
                <div className="text-3xl mb-3">{feature.badge}</div>
                <h3 className="text-lg font-serif font-bold text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-lighter text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
              Healthy &amp; Delicious
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2 mb-4">
              Our Signature Creations
            </h2>
            <p className="text-dark-lighter max-w-2xl mx-auto">
              Every item is 100% eggless, made with millet flours, and crafted
              with premium natural ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-warm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-semibold text-dark shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-dark">
                      {product.name}
                    </h3>
                    <p className="text-dark-lighter text-sm">
                      {product.category}
                    </p>
                  </div>
                  <span className="text-primary-600 font-bold text-lg">
                    {product.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 group"
            >
              View Full Menu{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-xl">
                <img
                  src="/images/founder.png"
                  alt="Vasudha Jain — Founder of Baking Beyond Boundaries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-warm-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Wheat className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-xl">86+</p>
                    <p className="text-dark-lighter text-xs">
                      Creations Shared
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2 mb-6">
                Meet Vasudha Jain
              </h2>
              <p className="text-dark-lighter leading-relaxed mb-4">
                With a <strong>Masters in Food &amp; Nutrition</strong>, Vasudha
                brings scientific expertise to every recipe. Her mission is to
                prove that healthy baking can be incredibly delicious.
              </p>
              <p className="text-dark-lighter leading-relaxed mb-6">
                Every teacake, cookie, and brownie at Baking Beyond Boundaries is{" "}
                <strong>100% eggless</strong>, made with nutrient-rich{" "}
                <strong>millet flours</strong>, and available in{" "}
                <strong>sugar-free</strong> variants. FSSAI registered for your
                peace of mind.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="badge-fssai">✅ FSSAI Registered</span>
                <span className="badge-eggless">🥚 100% Eggless</span>
                <span className="badge-millet">🌾 Millet-Based</span>
                <span className="badge-sugarfree">🍯 Sugar-Free Options</span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-medium hover:bg-dark-light transition-all duration-300 group"
              >
                Read Our Full Story{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
              Love from Dehradun
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-warm text-center"
              >
                <Quote className="w-10 h-10 text-primary-200 mx-auto mb-6" />
                <p className="text-dark text-lg md:text-xl leading-relaxed mb-6 font-light italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent-500 text-accent-500"
                      />
                    )
                  )}
                </div>
                <p className="font-semibold text-dark">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-dark-lighter text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center hover:bg-primary-50 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentTestimonial
                      ? "bg-primary-500 w-6"
                      : "bg-primary-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center hover:bg-primary-50 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-5 h-5 text-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM FEED ─── */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
              <Instagram className="w-4 h-4" />
              Follow us on Instagram
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">
              @bakingbeyondboundaries
            </h2>
            <p className="text-dark-lighter mb-8 max-w-xl mx-auto">
              86 posts of millet magic, healthy baking inspiration, and
              behind-the-scenes from our Dehradun kitchen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              "/images/hero-teacakes.png",
              "/images/ragi-brownies.png",
              "/images/millet-cookies.png",
              "/images/choco-muffins.png",
              "/images/banana-bread.png",
              "/images/healthy-granola.png",
              "/images/dry-teacakes.png",
              "/images/founder.png",
            ].map((img, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/bakingbeyondboundaries"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>

          <a
            href="https://www.instagram.com/bakingbeyondboundaries"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-light transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Follow @bakingbeyondboundaries
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-gradient-to-br from-dark via-dark to-dark-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grain" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Order our eggless, millet-based creations today. Delivered fresh
              from our kitchen in Rajpur, Dehradun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919811330345?text=Hi!%20I'd%20like%20to%20order%20from%20Baking%20Beyond%20Boundaries"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-warm-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <Link
                href="/custom-order"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Custom Cake Order
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}