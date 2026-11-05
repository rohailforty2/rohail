import fs from 'fs';
import path from 'path';
import { Fragment } from 'react';
import Layout from '../components/Layout';
import { projects as allProjects } from '../data/projects';
import { assetPath } from '../lib/assetPath';

const badgeStyles = {
  Project: 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-zinc-800 dark:text-indigo-400 dark:border-zinc-700',
  Preprint: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-zinc-800 dark:text-emerald-400 dark:border-zinc-700',
  Ongoing: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-zinc-800 dark:text-amber-400 dark:border-zinc-700',
};

const getProjectLinks = (project) =>
  [
    project.paper_url && { label: 'paper', href: project.paper_url },
    project.pdf_url && { label: 'pdf', href: assetPath(project.pdf_url) },
    project.thesis_url && { label: 'thesis', href: assetPath(project.thesis_url) },
    project.github_url && { label: 'code', href: project.github_url },
    project.live_demo_url && { label: 'demo', href: project.live_demo_url },
  ].filter(Boolean);

// Runs at build time only. A thumbnail that isn't in public/ yet becomes null, so the
// card shows a placeholder box instead of requesting a missing file.
export function getStaticProps() {
  const projects = allProjects.map((project) => ({
    ...project,
    image: fs.existsSync(path.join(process.cwd(), 'public', project.image)) ? project.image : null,
  }));

  return { props: { projects } };
}

export default function Home({ projects }) {
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
                  I&apos;m passionate about using Artificial Intelligence to build a better, smarter future. 
                  My focus is on creating AI systems that are not only powerful but also safe and trustworthy.
                </p>
                <p>
                  I’m drawn to two connected questions: how we can reliably test whether AI systems are safe,
                  and what is actually happening inside them when they make decisions. My current work
                  stress-tests LLM safety evaluations, and I’m working toward mechanistic interpretability
                  as a way to understand model behaviour from the inside rather than only judging outputs.
                  Sometimes I write <a href="https://understandableai.bearblog.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</a> about
                  artificial intelligence, research, and my thoughts on technology.
                </p>
                <p>
                  With a solid foundation in machine learning, deep learning, and development, I bring
                  a blend of technical skills to design systems that are both intelligent and
                  responsible.
                </p>
                <p className="italic text-zinc-500 dark:text-zinc-400 text-sm">
                  Code, Crash, Learn, Repeat.
                </p>
              </div>

              {/* Contact Links Row */}
              <div className="mt-8 flex flex-wrap gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <a href="mailto:rohailahmad2226@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a>
                <span>/</span>
                <a href={assetPath('ROHAIL_CV.pdf')} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CV</a>
                <span>/</span>
                <a href="https://github.com/rohailforty2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                <span>/</span>
                <a href="https://www.linkedin.com/in/rohail-ahmad-8995bb209/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                <span>/</span>
                <a href="https://x.com/Rohail_6796" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center md:justify-end">
              <img
                src={assetPath('images/Alien.webp')}
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
              {projects.map((project) => {
                const links = getProjectLinks(project);

                return (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  {/* Left Column: Thumbnail */}
                  <div className="md:col-span-1">
                    {project.image ? (
                      <div className="w-full aspect-[4/3] relative rounded border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white p-1">
                        <img
                          src={assetPath(project.image)}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-full aspect-[4/3] rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                      />
                    )}
                  </div>

                  {/* Right Column: Details */}
                  <div className="md:col-span-3 text-sm">
                    <h3 className="text-base font-semibold flex flex-wrap items-center gap-2">
                      {project.github_url ? (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <span className="text-zinc-900 dark:text-zinc-100">{project.title}</span>
                      )}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${badgeStyles[project.type]}`}>
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
                    {links.length > 0 && (
                      <div className="flex space-x-2 text-xs text-blue-600 dark:text-blue-400 mt-1.5 font-medium">
                        {links.map((link, index) => (
                          <Fragment key={link.label}>
                            {index > 0 && <span>/</span>}
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.label}</a>
                          </Fragment>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-[13px] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
