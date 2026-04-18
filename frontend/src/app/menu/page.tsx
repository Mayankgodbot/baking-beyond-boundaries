"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Instagram, Phone } from "lucide-react";

const categories = ["All", "Dry Teacakes", "Brownies & Bars", "Cookies", "Breads & Loaves", "Festive Specials"];

const products = [
  { id: 1, name: "Ragi Dry Teacake", category: "Dry Teacakes", price: 220, image: "/images/dry-teacakes.png", description: "Classic ragi millet teacake — moist, nutty, and eggless", badges: ["Eggless", "Millet"] },
  { id: 2, name: "Multi-Millet Teacake", category: "Dry Teacakes", price: 240, image: "/images/hero-teacakes.png", description: "Blend of jowar, bajra & ragi with dates sweetener", badges: ["Sugar-Free", "Millet"] },
  { id: 3, name: "Ragi Chocolate Brownies", category: "Brownies & Bars", price: 280, image: "/images/ragi-brownies.png", description: "Rich, fudgy brownies made with ragi flour — guilt-free indulgence", badges: ["Eggless", "Ragi"] },
  { id: 4, name: "Healthy Granola Bars", category: "Brownies & Bars", price: 200, image: "/images/healthy-granola.png", description: "Oats, millet, nuts & dried fruits with honey drizzle", badges: ["No Maida", "Natural"] },
  { id: 5, name: "Millet Almond Cookies", category: "Cookies", price: 180, image: "/images/millet-cookies.png", description: "Crunchy almond cookies with millet flour base", badges: ["Sugar-Free", "Millet"] },
  { id: 6, name: "Ragi Choco-Chip Cookies", category: "Cookies", price: 190, image: "/images/choco-muffins.png", description: "Ragi flour cookies with dark chocolate chips", badges: ["Eggless", "Ragi"] },
  { id: 7, name: "Eggless Banana Bread", category: "Breads & Loaves", price: 250, image: "/images/banana-bread.png", description: "Moist banana bread with walnuts — zero eggs, full flavor", badges: ["Eggless", "Healthy"] },
  { id: 8, name: "Jowar Date Loaf", category: "Breads & Loaves", price: 260, image: "/images/dry-teacakes.png", description: "Jowar flour loaf sweetened with Medjool dates", badges: ["Sugar-Free", "Millet"] },
  { id: 9, name: "Festive Gift Box", category: "Festive Specials", price: 650, image: "/images/healthy-granola.png", description: "Curated assortment of our bestsellers in premium packaging", badges: ["Gift Pack", "Assorted"] },
  { id: 10, name: "Diwali Special Hamper", category: "Festive Specials", price: 850, image: "/images/hero-teacakes.png", description: "Festive hamper with teacakes, cookies & granola bars", badges: ["Limited", "Premium"] },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Healthy &amp; Delicious
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2 mb-4">
              Our Menu
            </h1>
            <p className="text-dark-lighter max-w-2xl mx-auto">
              Every item is 100% eggless, made with millet flours, and available
              in sugar-free variants. Prices in ₹ (INR).
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="badge-eggless text-xs">🥚 100% Eggless</span>
              <span className="badge-millet text-xs">🌾 Millet-Based</span>
              <span className="badge-fssai text-xs">✅ FSSAI Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start mb-10">
            <div className="flex flex-wrap gap-2 lg:flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary-500 text-white shadow-warm"
                      : "bg-white text-dark-light hover:bg-primary-50 border border-primary-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative lg:w-72 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-lighter" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-primary-100 rounded-full text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-semibold text-dark shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary-500 font-medium uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-base font-semibold text-dark mb-1">
                    {product.name}
                  </h3>
                  <p className="text-dark-lighter text-xs mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold text-xl">
                      ₹{product.price}
                    </span>
                    <a
                      href={`https://wa.me/919811330345?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(product.name)}%20(₹${product.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-xs font-semibold hover:shadow-warm transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Order
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark-lighter text-lg">No products found matching your search.</p>
            </div>
          )}

          {/* DM Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white rounded-2xl p-8 shadow-warm max-w-2xl mx-auto"
          >
            <Instagram className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-dark text-lg mb-2">
              Custom orders? DM us!
            </h3>
            <p className="text-dark-lighter text-sm mb-4">
              Want a specific flavor, size, or custom packaging? Reach out on
              Instagram or WhatsApp for personalized orders.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.instagram.com/bakingbeyondboundaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <Instagram className="w-4 h-4" />
                DM on Instagram
              </a>
              <a
                href="https://wa.me/919811330345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}