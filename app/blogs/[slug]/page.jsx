import { notFound } from 'next/navigation';
import BlogDetail from './BlogDetail';

// Same blog data (can be moved to a separate file later)
const blogs = [
  {
    slug: 'nextjs-tailwind-setup',
    title: 'Next.js + Tailwind CSS Setup',
    description: `This blog walks you through setting up Tailwind CSS with Next.js.`,
    date: 'June 26, 2025',
    time: '5 min read',
    author: 'Omkar Gaikwad',
  },
  {
    slug: 'ai-writing-tools',
    title: 'Top AI Writing Tools',
    description: `Explore the best AI-powered tools for writing content efficiently.`,
    date: 'June 24, 2025',
    time: '6 min read',
    author: 'Sana Patel',
  },
  {
    slug: 'secure-auth-react',
    title: 'Secure Auth in React',
    description: `Explore secure authentication patterns in React using JWT and 2FA.`,
    date: 'June 22, 2025',
    time: '7 min read',
    author: 'Rajesh Verma',
  },
];

// ✅ Static generation of all slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

const BlogDetailPage = ({ params }) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
