import Head from 'next/head';
import Navigation from './Navigation';

const Layout = ({
  children,
  title = 'Portfolio',
  description = 'Rohail Ahmad - AI Student Portfolio',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          .font-orbitron {
            font-family: 'Orbitron', sans-serif;
          }
        `}</style>
      </Head>

      <Navigation />

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600 space-y-2">
          <div className="space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
            <a href="/blogs" className="hover:underline">
              Blogs
            </a>
            <a
              href="mailto:rohailahmad2226@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </div>
          <p>Made with 🧠 by Rohail</p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Rohail Ahmad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
