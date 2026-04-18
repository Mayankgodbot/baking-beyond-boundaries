"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="text-6xl mb-4">🍰</div>
        <h1 className="text-3xl font-serif font-bold text-dark mb-3">
          Something went wrong!
        </h1>
        <p className="text-dark-lighter mb-8">
          Looks like our oven had a little hiccup. Don&apos;t worry, let&apos;s try again!
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-full font-medium hover:bg-primary-50 border border-primary-100 transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}