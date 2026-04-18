"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Upload, Calendar, Wheat, Palette, Image, Phone, Instagram, ShieldCheck } from "lucide-react";

const steps = [
  { id: 1, title: "Size & Type", icon: Wheat },
  { id: 2, title: "Flavors", icon: Palette },
  { id: 3, title: "Design", icon: Image },
  { id: 4, title: "Reference", icon: Upload },
  { id: 5, title: "Details", icon: Calendar },
];

const cakeSizes = [
  { tiers: "500g Teacake", serves: "4-6 people", price: 220 },
  { tiers: "750g Teacake", serves: "6-8 people", price: 320 },
  { tiers: "1 kg Loaf Cake", serves: "8-10 people", price: 450 },
  { tiers: '6" Round Cake', serves: "8-10 people", price: 550 },
  { tiers: '8" Round Cake (2 tier)', serves: "15-20 people", price: 850 },
  { tiers: '10" Round Cake (2 tier)', serves: "25-30 people", price: 1200 },
];

const milletFlours = [
  { name: "Ragi (Finger Millet)", description: "Rich in calcium & iron, earthy-chocolate flavor" },
  { name: "Jowar (Sorghum)", description: "Light & fluffy texture, mild sweet taste" },
  { name: "Bajra (Pearl Millet)", description: "Nutty flavor, high in fiber & protein" },
  { name: "Multi-Millet Blend", description: "Our signature mix of ragi, jowar & bajra" },
  { name: "Oats & Millet", description: "Heart-healthy oats combined with millet" },
  { name: "Regular (No Millet)", description: "Classic wheat flour base — still 100% eggless" },
];

const sweeteners = [
  { name: "Regular Sugar", price: 0, tag: "" },
  { name: "Jaggery", price: 30, tag: "Popular" },
  { name: "Dates Paste", price: 50, tag: "Natural" },
  { name: "Stevia", price: 40, tag: "Zero Cal" },
  { name: "Honey", price: 40, tag: "" },
  { name: "Sugar-Free (No sweetener)", price: 0, tag: "Diabetic-Friendly" },
];

export default function CustomOrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    size: "",
    flour: "",
    sweetener: "",
    designTheme: "",
    colors: "",
    designNotes: "",
    referenceImage: null as string | null,
    firstName: "",
    lastName: "",
    phone: "",
    eventDate: "",
    eventType: "",
    deliveryMethod: "",
    notes: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const selectedSize = cakeSizes.find((s) => s.tiers === formData.size);
  const selectedSweetener = sweeteners.find((s) => s.name === formData.sweetener);
  const totalPrice = (selectedSize?.price || 0) + (selectedSweetener?.price || 0);

  const buildWhatsAppMessage = () => {
    const msg = `Hi! I'd like to place a custom order:
🍰 Size: ${formData.size}
🌾 Flour: ${formData.flour}
🍯 Sweetener: ${formData.sweetener}
🎨 Theme: ${formData.designTheme}
🎨 Colors: ${formData.colors}
📅 Date: ${formData.eventDate}
🎉 Event: ${formData.eventType}
🚚 Delivery: ${formData.deliveryMethod}
👤 Name: ${formData.firstName} ${formData.lastName}
📱 Phone: ${formData.phone}
💰 Estimated: ₹${totalPrice}
📝 Notes: ${formData.notes || 'None'}`;
    return encodeURIComponent(msg);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-dark mb-2">
                Select Your Cake Size
              </h2>
              <p className="text-dark-lighter text-sm mb-6">All prices in ₹ (INR). 100% eggless.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cakeSizes.map((size) => (
                <button
                  key={size.tiers}
                  onClick={() => updateFormData("size", size.tiers)}
                  className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                    formData.size === size.tiers
                      ? "border-primary-500 bg-primary-50 shadow-warm"
                      : "border-primary-100 hover:border-primary-300 bg-white"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-dark">{size.tiers}</h3>
                      <p className="text-dark-lighter text-sm mt-1">
                        Serves {size.serves}
                      </p>
                    </div>
                    <span className="text-primary-600 font-bold text-lg">
                      ₹{size.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-dark mb-2">
                Choose Your Millet Flour
              </h2>
              <p className="text-dark-lighter text-sm mb-4">
                Select the millet base for your cake
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {milletFlours.map((flour) => (
                  <button
                    key={flour.name}
                    onClick={() => updateFormData("flour", flour.name)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      formData.flour === flour.name
                        ? "border-primary-500 bg-primary-50 shadow-warm"
                        : "border-primary-100 hover:border-primary-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          formData.flour === flour.name
                            ? "border-primary-500 bg-primary-500"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.flour === flour.name && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark text-sm">
                          {flour.name}
                        </h3>
                        <p className="text-dark-lighter text-xs">
                          {flour.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-dark mb-2">
                Sweetener Preference
              </h2>
              <p className="text-dark-lighter text-sm mb-4">
                Choose how you&apos;d like your cake sweetened
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sweeteners.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => updateFormData("sweetener", s.name)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      formData.sweetener === s.name
                        ? "border-primary-500 bg-primary-50 shadow-warm"
                        : "border-primary-100 hover:border-primary-300 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-dark text-sm">
                          {s.name}
                        </h3>
                        {s.tag && (
                          <span className="text-[10px] font-semibold text-primary-500 uppercase tracking-wider">
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-primary-600 font-medium text-sm">
                        {s.price === 0 ? "Included" : `+₹${s.price}`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-dark mb-2">
              Describe Your Design
            </h2>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Theme / Occasion
              </label>
              <select
                value={formData.designTheme}
                onChange={(e) => updateFormData("designTheme", e.target.value)}
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
              >
                <option value="">Select a theme</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="wedding">Wedding</option>
                <option value="baby-shower">Baby Shower</option>
                <option value="festive">Festive / Diwali / Holi</option>
                <option value="corporate">Corporate Event</option>
                <option value="gifting">Gifting / Hamper</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Preferred Colors
              </label>
              <input
                type="text"
                value={formData.colors}
                onChange={(e) => updateFormData("colors", e.target.value)}
                placeholder="e.g., Earthy brown & gold, pastel pink & white"
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Design Description
              </label>
              <textarea
                value={formData.designNotes}
                onChange={(e) => updateFormData("designNotes", e.target.value)}
                rows={5}
                placeholder="Describe your vision — any specific elements, text on cake, decorative details..."
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-none"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-dark mb-2">
              Upload Reference Images
            </h2>
            <p className="text-dark-lighter text-sm">
              Share images via Instagram DM or WhatsApp for best results (optional)
            </p>

            <div className="border-2 border-dashed border-primary-200 rounded-2xl p-12 text-center hover:border-primary-400 transition-colors duration-300 cursor-pointer bg-white">
              <Upload className="w-12 h-12 text-primary-300 mx-auto mb-4" />
              <p className="text-dark-lighter mb-2 text-sm">
                Drag and drop images here, or click to browse
              </p>
              <p className="text-dark-lighter/60 text-xs">PNG, JPG up to 10MB</p>
            </div>

            <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
              <h3 className="font-semibold text-dark text-sm mb-2">
                💡 Pro Tip
              </h3>
              <p className="text-dark-lighter text-sm">
                For the best results, send your reference images directly via{" "}
                <a
                  href="https://www.instagram.com/bakingbeyondboundaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 font-medium hover:underline"
                >
                  Instagram DM
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/919811330345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  WhatsApp
                </a>
                . We&apos;ll confirm the design before baking!
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-dark mb-2">
              Event Details &amp; Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                  Event Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateFormData("eventDate", e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                  Event Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => updateFormData("eventType", e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  required
                >
                  <option value="">Select type</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="corporate">Corporate</option>
                  <option value="festival">Festival / Diwali</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Delivery / Pickup
              </label>
              <select
                value={formData.deliveryMethod}
                onChange={(e) =>
                  updateFormData("deliveryMethod", e.target.value)
                }
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                required
              >
                <option value="">Select option</option>
                <option value="pickup">Self Pickup — Rajpur, Dehradun</option>
                <option value="delivery-dehradun">Delivery within Dehradun</option>
                <option value="delivery-outside">Delivery outside Dehradun</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5 uppercase tracking-wider">
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => updateFormData("notes", e.target.value)}
                rows={3}
                placeholder="Allergies, special dietary needs, inscription text..."
                className="w-full px-4 py-3 bg-cream border border-primary-100 rounded-xl text-sm focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-none"
              />
            </div>

            {/* Price Summary */}
            {formData.size && (
              <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                <h3 className="font-serif font-bold text-dark mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dark-lighter">{formData.size}</span>
                    <span className="text-dark font-medium">₹{selectedSize?.price || 0}</span>
                  </div>
                  {formData.sweetener && selectedSweetener && selectedSweetener.price > 0 && (
                    <div className="flex justify-between">
                      <span className="text-dark-lighter">{formData.sweetener}</span>
                      <span className="text-dark font-medium">+₹{selectedSweetener.price}</span>
                    </div>
                  )}
                  <div className="border-t border-primary-200 pt-2 flex justify-between font-bold">
                    <span className="text-dark">Estimated Total</span>
                    <span className="text-primary-600 text-lg">₹{totalPrice}</span>
                  </div>
                  <p className="text-dark-lighter text-xs">
                    *Final price may vary based on design complexity
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
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
              Create Your Dream Cake
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2 mb-4">
              Custom Order
            </h1>
            <p className="text-dark-lighter max-w-2xl mx-auto">
              Design your perfect eggless, millet-based cake step by step.
              We&apos;ll confirm every detail before baking!
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="badge-eggless text-xs">🥚 100% Eggless</span>
              <span className="badge-millet text-xs">🌾 Millet Flour Options</span>
              <span className="badge-sugarfree text-xs">🍯 Sugar-Free Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Builder */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="flex justify-between items-center mb-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-primary-500 text-white shadow-warm"
                        : "bg-white text-dark-lighter border border-primary-100"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </button>
                  <span className="text-[11px] mt-2 text-center hidden sm:block text-dark-lighter font-medium">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-full mx-1 rounded-full transition-all duration-500 ${
                      currentStep > step.id
                        ? "bg-primary-500"
                        : "bg-primary-100"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content Card */}
          <div className="bg-white rounded-2xl shadow-warm-lg p-6 md:p-8 border border-primary-100/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-primary-100">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  currentStep === 1
                    ? "text-dark-lighter/40 cursor-not-allowed"
                    : "text-dark hover:bg-cream"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-2.5 rounded-full font-medium text-sm hover:shadow-warm transition-all duration-300 hover:scale-105"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={`https://wa.me/919811330345?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-7 py-2.5 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Submit via WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-dark-lighter text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              FSSAI Registered
            </div>
            <div className="flex items-center gap-1.5">
              <Wheat className="w-4 h-4 text-primary-500" />
              Millet-Based Recipes
            </div>
            <div className="flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-pink-500" />
              86+ Creations Shared
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}