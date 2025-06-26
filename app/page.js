'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto p-4 my-10 space-y-30">

      {/* Section 1: Welcome Intro */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-24"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          Welcome to <span className="text-purple-500">ScriptIQ</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          ScriptIQ is your intelligent blogging companion. Discover AI-assisted content creation,
          real-time collaboration, and powerful publishing tools for modern storytellers.
        </p>
        <Button className="mt-6">Start Exploring</Button>
      </motion.section>

      {/* Section 2: Top Blogs */}
      <section className="mt-24">
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
    🔥 Top Blogs by ScriptIQ
  </h2>
  <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-lg">
    Hand-picked insights and articles crafted by experts to elevate your writing game.
  </p>
</motion.div>


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {[
            {
              title: "10 AI Tools Every Blogger Should Know",
              desc: "Explore the latest AI tools transforming the blogging landscape in 2025.",
              image: "/assets/blog-ai-tools.jpg",
              link: "#",
            },
            {
              title: "Mastering Real-Time Collaboration",
              desc: "Collaborate in real time with version tracking and intelligent sync.",
              image: "/assets/collaboration.jpg",
              link: "#",
            },
            {
              title: "How to Monetize Your Blog in 2025",
              desc: "Learn practical strategies to generate income from your blog.",
              image: "/assets/monetize.jpg",
              link: "#",
            },
          ].map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {blog.desc}
                  </p>
                </div>

                <a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-6 hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Community & Growth */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative px-6 py-16 bg-gray-100 dark:bg-gray-950 rounded-2xl shadow-inner"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
            Join the <span className="text-purple-500">ScriptIQ</span> Community
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Connect, share, and grow with fellow bloggers. Whether you&apos;re just starting or scaling up,
            ScriptIQ gives you the tools and network to elevate your voice in the digital world.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="w-full sm:w-auto px-6 py-2 text-base">Join Now</Button>
            <Button variant="outline" className="w-full sm:w-auto px-6 py-2 text-base">
              Learn More
            </Button>
          </div>
        </div>

        {/* Optional Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/40 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none z-[-1] rounded-2xl" />
      </motion.section>
    </main>
  );
}
