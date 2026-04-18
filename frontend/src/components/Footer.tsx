import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Wheat, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-dark to-dark-dark text-white overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <Wheat className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold leading-tight">
                  Baking Beyond
                </h3>
                <span className="text-[10px] font-sans tracking-[0.2em] text-primary-300 uppercase">
                  Boundaries
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Eggless, millet-based dry teacakes handcrafted with love by
              Vasudha Jain. FSSAI registered &amp; certified.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bakingbeyondboundaries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919811330345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:bakingbeyondboundaries@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/custom-order", label: "Custom Orders" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Our Specialties
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                Millet Dry Teacakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                Ragi Brownies &amp; Cookies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                Sugar-Free Bakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                Custom Celebration Cakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                Healthy Granola Bars
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <span>
                  Kairwaan Gaon, Rajpur
                  <br />
                  Dehradun, Uttarakhand
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Instagram className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/bakingbeyondboundaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @bakingbeyondboundaries
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <span>DM on Instagram / WhatsApp</span>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Open Daily
              </p>
              <p className="text-sm text-gray-300">
                Mon–Sun: 10:00 AM – 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Baking Beyond Boundaries. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Vasudha Jain
            <span className="ml-2 badge-fssai text-[10px]">
              FSSAI Registered
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}