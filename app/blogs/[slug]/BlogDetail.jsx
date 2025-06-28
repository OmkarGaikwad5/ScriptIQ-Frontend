'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from "sonner";

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
        {/* Updated image block */}
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {blog.title}
          </h1>

          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{new Date(blog.createdAt).toDateString()}</span>
            <span className="ml-2 italic">By {blog.author || 'Unknown Author'}</span>


          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {blog.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-6">
            <Link href="/">
              <Button className="cursor-pointer" variant="outline">
                ← Back to Blogs
              </Button>
            </Link>

          <Button
  variant="default"
  className="cursor-pointer mt-4 sm:mt-0"
  onClick={() => {
    try {
      const content = `
Title: ${blog.title}
Author: ${blog.author || 'Unknown'}
Date: ${new Date(blog.createdAt).toDateString()}

Description:
${blog.description}
`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${blog.title.replace(/\s+/g, '_')}.txt`;
      a.click();

      URL.revokeObjectURL(url);

      toast.success("Blog downloaded ✅"); // ✅ Success toast
    } catch (err) {
      toast.error("Download failed ❌"); // ✅ Fallback error toast
    }
  }}
>
  ⬇️ Download Blog
</Button>
          </div>



        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
