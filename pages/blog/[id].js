import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { blogs } from '../../data/blogs';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const foundBlog = blogs.find((b) => b.id === parseInt(id));
      setBlog(foundBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <Layout title="Blog Not Found">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Blog not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${blog.title} - Blog`}>
      <div className="bg-white text-gray-900 font-sans">
        <main className="max-w-3xl mx-auto px-4 py-12">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <h1 className="text-4xl font-bold text-slate-700 mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Posted on{' '}
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="prose prose-indigo max-w-none">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
