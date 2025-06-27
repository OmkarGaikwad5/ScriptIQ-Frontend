// ✅ Animated and responsive About Page using TailwindCSS + Framer Motion
// File: app/about/page.jsx
"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-blue-50 dark:from-zinc-900 dark:to-black text-center"
    >
      <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-white">About ScriptIQ</h1>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        ScriptIQ is a modern blogging platform tailored for tech enthusiasts and professionals. Dive into a wide range of topics including AI, machine learning, software engineering, and full-stack development — all curated by passionate developers.
      </p>
    </motion.div>
  );
}

