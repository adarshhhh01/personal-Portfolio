import React from "react";

const projects = [
  {
    title: "Real-Time Device Tracker",
    tag: "Full Stack",
  },
  {
    title: "EmpowerHer – AI Finance Mentor",
    tag: "AI / Web App",
  },
  {
    title: "Uber Clone UI",
    tag: "Frontend",
  },
  {
    title: "Portfolio Website",
    tag: "Personal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-gray-300 text-gray-700 flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          
          <h1 className="text-3xl md:text-4xl font-extrabold">
            My <span className="text-gray-900">Recent Works</span>
          </h1>

          {/* Filter pills (static for now) */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <button className="px-4 py-1 rounded-full bg-gray-400 text-gray-200 hover:bg-gray-300/40 hover:text-black  transition">
              All
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-400 text-gray-200 hover:bg-gray-300/40 hover:text-black transition">
              Frontend
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-400 text-gray-200 hover:bg-gray-300/40 hover:text-black transition">
              Full Stack
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-400 text-gray-200 hover:bg-gray-300/40 hover:text-black transition">
              UI/UX
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-linear-to-br from-[#15162b] to-[#050111] border border-gray-500/20 shadow-lg hover:-translate-y-2 hover:shadow-gray-900/50 transition-transform duration-300"
            >
              {/* Image placeholder – yaha baad me real screenshot dal sakta hai */}
              <div className="h-48 md:h-56 bg-black/60 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Project Screenshot Here
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">
                    {project.tag}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">
                    {project.title}
                  </h3>
                </div>

                <button className="text-xs px-3 py-1 rounded-full border border-gray-400 text-gray-300 group-hover:bg-gray-500 group-hover:text-white transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
