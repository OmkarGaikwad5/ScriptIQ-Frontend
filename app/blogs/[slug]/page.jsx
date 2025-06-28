import { notFound } from 'next/navigation';
import BlogDetail from './BlogDetail';
import { toast } from 'sonner';

const getBlogBySlug = async (slug) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    toast.error("Error fetching blog:", error);
    return null;
  }
};

const BlogDetailPage = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return notFound();

  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
