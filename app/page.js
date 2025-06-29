'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BlogForm from '@/components/BlogForm';
import YourBlogs from '@/components/YourBlog';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [topBlogs, setTopBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);

  const fetchTopBlogs = async () => {
    try {
      const res = await fetch('https://dev.to/api/articles?per_page=3');
      const data = await res.json();
      setTopBlogs(data);
    } catch (err) {
      console.error('Error fetching top blogs:', err);
    }
  };

  useEffect(() => {
    fetchTopBlogs();
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      router.replace('/landing');
    } else {
      setToken(storedToken);
    }
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) return null; // Prevent render until token is checked

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
        {!showForm ? (
          <Button className="mt-6 cursor-pointer" onClick={() => setShowForm(true)}>
            Create Your Own Blog
          </Button>
        ) : null}
      </motion.section>

      {/* Blog Creation Form */}
      {showForm && token ? (
        <BlogForm
          token={token}
          onBlogCreated={() => {
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      ) : (
        token && <YourBlogs token={token} />
      )}

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
          {topBlogs.map((blog, index) => (
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
                  src={blog.cover_image || '/default-image.jpg'}
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
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {blog.description || blog.summary}
                  </p>
                </div>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-6 hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blogs">
            <Button variant="outline" className="text-base px-6 py-2 cursor-pointer">
              Explore More Blogs →
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 3: Community */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 px-6 py-20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-blue-400/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-300/30 to-purple-500/30 rounded-full blur-2xl opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Join the <span className=" decoration-purple-500">ScriptIQ</span> Community
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect, collaborate, and grow with creators across the world. Whether you&apos;re writing your first blog
            or scaling your audience—ScriptIQ helps you make your voice heard in style.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base shadow-lg hover:scale-[1.03] transition-transform">
              🚀 Join Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              📖 Learn More
            </Button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
