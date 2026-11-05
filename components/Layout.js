import Head from 'next/head';
import Navigation from './Navigation';
import { assetPath } from '../lib/assetPath';
import { useEffect, useState } from 'react';

const Layout = ({
  children,
  title = 'Portfolio',
  description = 'Rohail Ahmad - AI Student Portfolio',
}) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Sync state with HTML class list on mount (which was set by inline script)
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <link rel="icon" href={assetPath('favicon.ico')} />
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (_) {}
          `
        }} />
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

      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main className="min-h-screen transition-colors duration-300 bg-white text-gray-800 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 dark:bg-zinc-950 dark:border-zinc-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-zinc-500">
          <p>Made with 🧠 by Rohail Ahmad</p>
          <p className="text-xs mt-1">
            &copy; {new Date().getFullYear()} Rohail Ahmad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
