import Layout from '../components/Layout';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {
  // Show only first 4 projects as featured
  const featuredProjects = projects.slice(0, 4);

  return (
    <Layout title="Home - Portfolio">
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Hi, I am Rohail</h2>
            <h3 className="text-lg font-medium text-gray-600">
              Undergrad AI Student
            </h3>
            <p className="mt-2 text-sm italic">
              I'm passionate about using Artificial Intelligence to build a
              better, smarter future. My focus is on creating AI systems that
              are not only powerful but also safe and trustworthy. With a solid
              foundation in machine learning, deep learning, and development. I
              bring a blend of technical skills and a deep understanding of
              human behavior to help me understand how to design systems that
              are both intelligent and responsible.
            </p>
            <p className="mt-2 text-gray-600">Code, Crash, Learn, Repeat</p>

            {/* Contact Button */}
            <div className="flex items-center">
              <a
                href="mailto:rohailahmad2226@gmail.com"
                className="inline-block mt-4 bg-gray-100 text-gray-800 px-4 py-2 rounded shadow-sm hover:bg-gray-200"
              >
                ✉️ Contact Me
              </a>

              {/* Social Icons */}
              <div className="mt-4 ml-4 flex space-x-4">
                <a
                  href="https://www.kaggle.com/rohailahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kaggle.svg"
                    alt="Kaggle"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/rohailahmad-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohail-ahmad-8995bb209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://x.com/Rohail_6796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                    alt="X"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="images/Alien.png"
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl text-slate-900 font-semibold mb-8 text-center">
            Featured Projects
          </h1>

          <div className="grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-slate-900">
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
                      className="text-slate-900 underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* See All Projects Button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-slate-600 text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-slate-700 transition"
            >
              See All Projects
            </Link>
          </div>
        </section>

        {/* Experience & Skills Section */}
        <section className="max-w-5xl mx-auto px-6 mt-20 pb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Experience & Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Experience */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-slate-600">
                    Data Science Intern
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced Telecom Services – Oct 2023 - Nov 2023 | 2 mos
                  </p>
                  <p className="text-gray-700">
                    Worked with Python (NumPy, Pandas, Matplotlib, Seaborn),
                    PowerBI, and Azure.
                  </p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-600">Frontend Intern</h4>
                  <p className="text-sm text-gray-600">
                    Smartech Solution – Aug 2023 - Sep 2023 | 2 mos
                  </p>
                  <p className="text-gray-700">
                    Worked with HTML, CSS, JavaScript, React.js, and Next.js
                  </p>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <div className="w-0.5 bg-gray-300 h-full"></div>
            </div>

            {/* Skills */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    🧠 Core AI Skills
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Machine Learning, Deep Learning, Natural Language
                      Processing (NLP), Computer Vision, Neural Networks (CNNs,
                      RNNs, Transformers), Reinforcement Learning, Model
                      Evaluation & Tuning
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    🛠️ Tools & Frameworks
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Python (NumPy, Pandas, Scikit-learn), TensorFlow / Keras,
                      PyTorch, OpenCV, Hugging Face Transformers, Jupyter
                      Notebooks, Google Colab
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    📊 Data Skills
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Data Preprocessing, Feature Engineering, Exploratory Data
                      Analysis (EDA), Data Visualization (Matplotlib, Seaborn,
                      Plotly), Data Collection & Cleaning
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    🚀 Deployment & Utilities
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Model Deployment (Flask / FastAPI / Streamlit), REST APIs
                      for AI Models, ONNX / TensorRT (for optimization), MLOps
                      Basics, Git & GitHub (Version Control)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
