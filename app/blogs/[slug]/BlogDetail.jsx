'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const getImageFromSlug = (slug) =>
  `https://source.unsplash.com/1200x600/?${slug}`;

const BlogDetail = ({ blog }) => {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-20 pt-28 ">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={getImageFromSlug(blog.slug)}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {blog.title}
          </h1>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{blog.date} • {blog.time}</span>
            <span className="ml-2 italic">By {blog.author}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {blog.description}
          </p>
          <Link href="/blogs">
            <Button variant="outline">← Back to Blogs</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
