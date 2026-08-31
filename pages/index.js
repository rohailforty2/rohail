import Layout from '../components/Layout';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <Layout title="Rohail Ahmad - Portfolio">
      <div className="bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-300 min-h-screen">
        <main className="max-w-4xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                Hi, I am Rohail
              </h1>
              <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-6">
                Graduate AI Student
              </p>
              
              <div className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  I'm passionate about using Artificial Intelligence to build a better, smarter future. 
                  My focus is on creating AI systems that are not only powerful but also safe and trustworthy.
                </p>
                <p>
                  With a solid foundation in machine learning, deep learning, and development, I bring 
                  a blend of technical skills to design systems that are both intelligent and 
                  responsible. Sometime I write <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</Link> about 
                  artificial intelligence, computer vision, and my thoughts on technology.
                </p>
                <p className="italic text-zinc-500 dark:text-zinc-400 text-sm">
                  Code, Crash, Learn, Repeat.
                </p>
              </div>

              {/* Contact Links Row */}
              <div className="mt-8 flex flex-wrap gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <a href="mailto:rohailahmad2226@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a>
                <span>/</span>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CV</a>
                <span>/</span>
                <a href="https://github.com/rohailahmad-code" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                <span>/</span>
                <a href="https://www.kaggle.com/rohailahmad" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kaggle</a>
                <span>/</span>
                <a href="https://www.linkedin.com/in/rohail-ahmad-8995bb209/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                <span>/</span>
                <a href="https://x.com/Rohail_6796" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center md:justify-end">
              <img
                src="images/Alien.png"
                alt="Rohail Ahmad"
                className="w-44 h-44 object-cover rounded-full shadow border border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </section>

          {/* Publications and Projects Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-10 border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Publications and Projects
            </h2>

            <div className="space-y-12">
              {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  {/* Left Column: Thumbnail */}
                  <div className="md:col-span-1">
                    <div className="w-full aspect-[4/3] relative rounded border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white p-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="md:col-span-3 text-sm">
                    <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline flex flex-wrap items-center gap-2">
                      <a href={project.github_url || "#"} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-zinc-800 dark:text-indigo-400 border border-indigo-100 dark:border-zinc-700">
                        {project.type}
                      </span>
                    </h3>
                    
                    <p className="text-zinc-700 dark:text-zinc-300 mt-1">
                      <strong>{project.authors}</strong>
                    </p>
                    
                    <p className="text-zinc-500 dark:text-zinc-400 italic text-xs">
                      {project.venue}
                    </p>

                    {/* Links */}
                    <div className="flex space-x-2 text-xs text-blue-600 dark:text-blue-400 mt-1.5 font-medium">
                      {project.pdf_url && (
                        <a href={project.pdf_url} target="_blank" rel="noopener noreferrer" className="hover:underline">pdf</a>
                      )}
                      {project.pdf_url && <span>/</span>}
                      
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:underline">code</a>
                      )}
                      
                      {project.live_demo_url && (
                        <>
                          <span>/</span>
                          <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="hover:underline">demo</a>
                        </>
                      )}
                      
                      {project.bib_url && (
                        <>
                          <span>/</span>
                          <a href={project.bib_url} className="hover:underline">bib</a>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-[13px] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
