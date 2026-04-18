"use client";

import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Wheat className="w-8 h-8 text-white" />
        </motion.div>
        <p className="text-dark-lighter font-medium">Baking something fresh...</p>
      </motion.div>
    </div>
  );
}