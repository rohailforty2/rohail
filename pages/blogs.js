import Layout from '../components/Layout';
import Link from 'next/link';
import { blogs } from '../data/blogs';

export default function Blogs() {
  return (
    <Layout title="Blogs - Portfolio">
      <div className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans min-h-screen pb-12 transition-colors duration-300">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-slate-700 dark:text-zinc-100 mb-2">
            Explore My Blogs
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 text-lg">
            Insights, ideas, and stories from my journey in tech and beyond.
          </p>
        </section>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm p-5 transition-all duration-300">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover mb-3 rounded"
                  />
                )}
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-zinc-100 mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-700 dark:text-zinc-300 mb-3">
                  {blog.content.substring(0, 150)}...
                </p>
                <p className="text-sm text-gray-500 dark:text-zinc-500">
                  Posted on{' '}
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm underline transition-colors"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
