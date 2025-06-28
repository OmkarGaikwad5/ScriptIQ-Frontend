'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Trash2 } from 'lucide-react';

export default function YourBlogs({ token }) {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch your blogs:', error);
    }
  };

  const handleDelete = async (slug) => {
    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${slug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to delete blog');
      }

      setBlogs(blogs.filter((blog) => blog.slug !== slug));
    } catch (error) {
      console.error('Failed to delete blog', error);
    }
  };

  useEffect(() => {
    if (token) fetchBlogs();
  }, [token]);

  if (blogs.length === 0) return null;

  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
          ✍️ Your Blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-lg">
          Here are the blogs you've published using ScriptIQ.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
          >
            <div className="relative h-48 w-full">
              {blog.image?.startsWith('data:image') ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={blog.image || '/default-image.jpg'}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {blog.description}
                </p>
              </div>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  By <span className="italic">{blog.author || 'Unknown'}</span>

                </p>
                <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete blog"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
