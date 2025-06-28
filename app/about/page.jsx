"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function AboutPage() {
  const aboutSections = [
    {
      title: "🚀 What is ScriptIQ?",
      description:
        "ScriptIQ is a cutting-edge blogging platform built for modern developers. Share insights, tutorials, and stories in an elegant, fast, and secure environment.",
    },
    {
      title: "🎯 Our Mission",
      description:
        "Empowering tech minds to express, educate, and evolve through high-quality content. We aim to become the go-to destination for developers, engineers, and creators.",
    },
    {
      title: "💡 Key Features",
      description:
        "✓ Beautiful editor\n✓ Real-time markdown preview\n✓ Cloud image uploads\n✓ Responsive UI\n✓ Secure Auth\n✓ Fast performance\n✓ Downloadable content",
    },
    {
      title: "🌐 Who is it for?",
      description:
        "Whether you're a beginner sharing your first post or a seasoned engineer writing in-depth technical articles, ScriptIQ provides the tools and audience you need.",
    },
    {
      title: "🤝 Join the Community",
      description:
        "Connect with other developers, comment on blogs, and build your network. ScriptIQ isn’t just a platform — it's a growing developer ecosystem.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 sm:px-6 lg:px-20 py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:to-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-10"
      >
        About <span className="text-purple-500">ScriptIQ</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-lg rounded-2xl border border-blue-100 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-white">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                  {section.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
