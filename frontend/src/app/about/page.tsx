"use client";

import { motion } from "framer-motion";
import { Award, Heart, Leaf, ShieldCheck, GraduationCap, Wheat, Instagram } from "lucide-react";
import Link from "next/link";

const milestones = [
  { year: "Education", text: "Vasudha completed her Masters in Food & Nutrition, laying the scientific foundation for her baking journey." },
  { year: "The Spark", text: "Experimented with millet flours and eggless recipes, discovering that healthy baking can be truly delicious." },
  { year: "FSSAI", text: "Obtained FSSAI registration, ensuring every product meets India's food safety standards." },
  { year: "Today", text: "86+ unique creations shared, a growing community of health-conscious food lovers in Dehradun and beyond." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-teacakes.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4"
          >
            <span className="inline-block bg-white/15 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-sm mb-4 border border-white/20">
              🌾 Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-3">
              The Heart Behind Every Bake
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto">
              Where nutrition science meets the art of eggless baking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-xl">
                <img
                  src="/images/founder.png"
                  alt="Vasudha Jain — Founder of Baking Beyond Boundaries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-warm-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary-500" />
                  <div>
                    <p className="font-bold text-dark text-sm">Masters Degree</p>
                    <p className="text-dark-lighter text-xs">Food &amp; Nutrition</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">
                The Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2 mb-6">
                Vasudha Jain
              </h2>
              <p className="text-dark-lighter leading-relaxed mb-4">
                Baking Beyond Boundaries was born from a simple belief: that wholesome, healthy food should never mean compromising on taste. With a <strong>Masters in Food &amp; Nutrition</strong>, Vasudha brings deep scientific understanding to every recipe she creates.
              </p>
              <p className="text-dark-lighter leading-relaxed mb-4">
                Operating from the serene foothills of <strong>Rajpur, Dehradun</strong>, every teacake, cookie, and brownie is crafted in small batches using nutrient-rich <strong>millet flours</strong> — ragi, jowar, and bajra — combined with natural sweeteners and the finest ingredients.
              </p>
              <p className="text-dark-lighter leading-relaxed mb-6">
                What began as a passion project shared on Instagram has grown into a beloved brand trusted by health-conscious families across Dehradun and beyond. Every item is <strong>100% eggless</strong>, with sugar-free options available for those watching their sugar intake.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="badge-fssai">✅ FSSAI Registered</span>
                <span className="badge-eggless">🥚 100% Eggless</span>
                <span className="badge-millet">🌾 Millet-Based</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Nutrition First",
                desc: "Every recipe is formulated with nutrition in mind. We use millet flours, natural sweeteners, and wholesome ingredients that nourish your body.",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Small-batch artisan baking means every item gets personal attention. We treat each order as if it were made for our own family.",
              },
              {
                icon: ShieldCheck,
                title: "Trust & Safety",
                desc: "FSSAI registered and food-safety compliant. We maintain the highest hygiene standards in our kitchen at all times.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 text-center group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-200 transition-colors">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-dark mb-3">{value.title}</h3>
                <p className="text-dark-lighter text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">The Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2">How It All Started</h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-warm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 bg-primary-200 flex-1 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif font-bold text-dark text-lg mb-1">{m.year}</h3>
                  <p className="text-dark-lighter text-sm leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Follow Our Journey
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join 174+ followers on Instagram for daily baking inspiration, new product drops, and behind-the-scenes from our Dehradun kitchen.
          </p>
          <a
            href="https://www.instagram.com/bakingbeyondboundaries"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Follow @bakingbeyondboundaries
          </a>
        </div>
      </section>
    </div>
  );
}