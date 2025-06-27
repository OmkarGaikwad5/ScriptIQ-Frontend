'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";


const blogs = [
    {
        slug: 'nextjs-tailwind-setup',
        title: 'Next.js + Tailwind CSS Setup',
        description: 'Learn how to set up Tailwind CSS in your Next.js project easily and efficiently.',
        date: 'June 26, 2025',
        time: '5 min read',
        author: 'Omkar Gaikwad',
    },
    {
        slug: 'ai-writing-tools',
        title: 'Top AI Writing Tools',
        description: 'Discover the best AI tools to create content faster and smarter.',
        date: 'June 24, 2025',
        time: '6 min read',
        author: 'Sana Patel',
    },
    {
        slug: 'secure-auth-react',
        title: 'Secure Auth in React',
        description: 'Implement JWT, bcrypt and 2FA to protect your users and apps like a pro.',
        date: 'June 22, 2025',
        time: '7 min read',
        author: 'Rajesh Verma',
    },
];


const getImageFromSlug = (slug) =>
    `https://source.unsplash.com/800x600/?${slug}`;

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:px-8 lg:px-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl pt-10 font-bold text-blue-600 dark:text-blue-400">
                    📝 Explore Our Blogs
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
                    Insights, tutorials, and articles crafted to empower your development journey.
                </p>
            </div>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        <img
                            src={getImageFromSlug(blog.slug)}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                                {blog.description}
                            </p>
                            <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span>{blog.date} • {blog.time}</span>
                                <span className="italic text-gray-600 dark:text-gray-300">By {blog.author}</span>
                            </div>

                            <Link href={`/blogs/${blog.slug}`}>
                                <Button variant="default" className="w-30 mt-2">
                                    Read More →
                                </Button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
