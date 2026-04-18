"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Instagram, Phone, Wheat } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/custom-order", label: "Custom Order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-warm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-serif font-bold text-dark leading-tight">
                Baking Beyond
              </span>
              <span className="block text-[10px] font-sans font-medium tracking-[0.2em] text-primary-500 uppercase -mt-0.5">
                Boundaries
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  pathname === link.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-dark-light hover:text-primary-600 hover:bg-primary-50/50"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="badge-fssai text-[10px]">
              ✅ FSSAI Certified
            </span>
            <a
              href="https://www.instagram.com/bakingbeyondboundaries"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 hover:bg-primary-50 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-dark-light" />
            </a>
            <a
              href="https://wa.me/919811330345?text=Hi!%20I'd%20like%20to%20order%20from%20Baking%20Beyond%20Boundaries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-warm-lg transition-all duration-300 hover:scale-105 text-sm"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary-100 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      pathname === link.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-dark hover:bg-primary-50/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-primary-100 mt-2 space-y-3">
                <div className="flex items-center gap-2 px-4">
                  <span className="badge-fssai">✅ FSSAI Certified</span>
                  <span className="badge-eggless">🥚 100% Eggless</span>
                </div>
                <a
                  href="https://www.instagram.com/bakingbeyondboundaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-dark hover:bg-primary-50/50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Instagram className="w-5 h-5" />
                  @bakingbeyondboundaries
                </a>
                <a
                  href="https://wa.me/919811330345?text=Hi!%20I'd%20like%20to%20order%20from%20Baking%20Beyond%20Boundaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3.5 rounded-xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  📱 Order via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}