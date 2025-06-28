'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Ensure this import is present
import { Button } from "@/components/ui/button";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';



const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [customBlogs, setCustomBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);

  const fetchCustomBlogs = async () => {
    try {
        const token = localStorage.getItem("token");
        let userId = "";

        if (token) {
            const decoded = jwt_decode(token);
            userId = decoded.id;
        }

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/blogs${userId ? `?excludeUser=${userId}` : ""}`
        );

        const data = await res.json();
        setCustomBlogs(data);
    } catch (err) {
        console.error("Error fetching custom blogs:", err);
    }
};


    const fetchBlogs = async (currentPage = 1) => {
        try {
            const res = await fetch(`https://dev.to/api/articles?per_page=9&page=${currentPage}`);
            const data = await res.json();

            if (data.length === 0) {
                setHasMore(false);
                return;
            }

            setBlogs((prev) => [...prev, ...data]);
        } catch (err) {
            toast.error("Error fetching blogs:", err);
            setHasMore(false);
        } finally {
            if (currentPage === 1) {
                setLoadingInitial(false);
            } else {
                setLoadingMore(false);
            }
        }
    };

    useEffect(() => {
        fetchCustomBlogs();
        fetchBlogs();
    }, []);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        setLoadingMore(true);
        fetchBlogs(nextPage);
    };

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

            {loadingInitial ? (
                <p className="text-center text-gray-500 ">Loading blogs...</p>
            ) : (
                <>
                    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* ✅ Custom blogs from your backend */}
                        {customBlogs.map((blog, index) => (
  <div
    key={`custom-${index}`}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
  >
    {blog.image && (
      blog.image.startsWith('data:image') ? (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      )
    )}

    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {blog.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
        {blog.description}
      </p>
      <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span>
          {new Date(blog.createdAt).toLocaleDateString()} • Custom Blog
        </span>
        <span className="italic text-gray-600 dark:text-gray-300">
          By {blog.author || 'Unknown'}
        </span>
      </div>
    </div>
  </div>
))}


                        {/* ✅ External blogs from dev.to */}
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                <img
                                    src={
                                        blog.cover_image
                                            ? blog.cover_image
                                            : '/default-image.jpg'
                                    }
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                                        {blog.description || blog.summary}
                                    </p>
                                    <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <span>
                                            {new Date(blog.published_at).toLocaleDateString()} •{' '}
                                            {blog.reading_time_minutes} min read
                                        </span>
                                        <span className="italic text-gray-600 dark:text-gray-300">
                                            By {blog.user.name}
                                        </span>
                                    </div>
                                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="default" className="w-30 mt-2 cursor-pointer">
                                            Read More →
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {hasMore && (
                        <div className="mt-12 text-center">
                            <Button
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="text-lg px-6 py-3 cursor-pointer"
                            >
                                {loadingMore ? 'Loading...' : 'Load More'}
                            </Button>
                        </div>
                    )}

                    {!hasMore && (
                        <p className="text-center mt-10 text-gray-500">
                            🚀 You’ve reached the end of available blogs.
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default BlogPage;
