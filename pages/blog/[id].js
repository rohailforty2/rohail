import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { blogs } from '../../data/blogs';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    if (id) {
      const foundBlog = blogs.find((b) => b.id === parseInt(id));
      setBlog(foundBlog);
    }
    setLoading(false);
  }, [id, router.isReady]);

  if (loading) {
    return (
      <Layout title="Loading Blog...">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <div className="animate-pulse space-y-6">
            <div className="h-64 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
            <div className="h-8 bg-gray-200 dark:bg-zinc-800 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/4 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout title="Blog Not Found">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-zinc-300">Blog not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${blog.title} - Blog`}>
      <div className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans min-h-screen transition-colors duration-300">
        <main className="max-w-3xl mx-auto px-4 py-12">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <h1 className="text-4xl font-bold text-slate-700 dark:text-zinc-100 mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mb-6">
            Posted on{' '}
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="prose prose-indigo dark:prose-invert max-w-none">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-800 dark:text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
