import Layout from '../components/Layout';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Layout title="Projects - Portfolio">
      <div className="bg-white text-gray-900 font-sans">
        <main className="max-w-5xl mx-auto px-4 py-20">
          <h1 className="text-3xl text-slate-900 font-semibold mb-8 text-center">
            All Projects
          </h1>

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-slate-600">
                  {project.title}
                </h2>
                <p className="text-base text-gray-800 mt-2">
                  {project.description}
                </p>
                <div className="mt-4 space-x-4 text-base">
                  {project.live_demo_url && (
                    <a
                      href={project.live_demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
