


// ✅ Animated and responsive Contact Page using TailwindCSS + Framer Motion
// File: app/contact/page.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-purple-50 dark:from-zinc-900 dark:to-black text-center"
    >
      <h1 className="text-4xl font-bold mb-4 text-purple-600 dark:text-white">Contact Us</h1>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Got questions or suggestions? We'd love to hear from you! Reach out via email at <span className="text-blue-600 dark:text-blue-400">contact@scriptiq.dev</span> or use our contact form coming soon.
      </p>
    </motion.div>
  );
}
