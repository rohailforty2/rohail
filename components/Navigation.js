import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-slate-600 font-orbitron"
        >
          portfolio
        </Link>
        <div className="space-x-6 text-base">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-indigo-600"
          >
            Projects
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-indigo-600">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
