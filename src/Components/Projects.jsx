// Projects.jsx
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

/* Projects data */
const projects = [
  {
    id: "blood",
    title: "BLOOD DONATION",
    description:
      "Developed a Blood Donation Management System to connect donors, patients, hospitals, and blood banks on a centralized platform. Built donor registration, blood request handling, admin dashboard, and blood inventory management using Python, HTML, CSS, JavaScript, and SQLite.",
    image: "/blood.jpg",
    url: null,
    tech: ["Python", "HTML", "CSS", "JavaScript", "SQLite"],
  },

  {
    id: "school",
    title: "SCHOOL",
    description:
      "Engineered backend services for a school management platform with student records, attendance tracking, and admin features. Designed user-friendly modules and optimized data management.",
    image: "/schoolimg.jpg",
    url: null,
    tech: ["Node Js", "Express Js", "Postgres", "Prisma/ORM", "JWT"],
  },
];

/* Project Card */
function ProjectCard({ project, index = 0, onOpen = () => {} }) {
  if (!project) return null;

  return (
    <article
      className={`relative rounded-xl overflow-hidden border border-base-200
        transform transition duration-400 hover:-translate-y-2 hover:shadow-2xl
        flex flex-col bg-base-100 text-base-content`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 md:h-44 lg:h-52">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-base-content/70 flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="badge badge-outline badge-sm text-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            onClick={() => onOpen(project)}
            className="btn btn-ghost btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

/* Modal */
function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-w-3xl w-full bg-base-100 rounded-xl shadow-2xl overflow-hidden ring-1 ring-base-200">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="h-64 md:h-auto md:min-h-[300px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 text-base-content">
            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-base-content/70 mb-4">
              {project.description}
            </p>

            {/* Tech */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge badge-outline">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close */}
            <button onClick={onClose} className="btn btn-primary mt-4">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Main */
export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setMounted(true);
    }, 60);

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="projects"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Heading */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-600">
          MY PROJECTS
        </h1>

        <p className="mt-2 text-base text-base-content/70 max-w-2xl mx-auto">
          Selected academic and practical applications including management
          systems and web development projects.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`opacity-0 translate-y-6 ${
              mounted ? "opacity-100 translate-y-0" : ""
            } transition-all duration-500 ease-out`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <ProjectCard
              project={p}
              index={i}
              onOpen={(proj) => setActive(proj)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <ProjectModal
          project={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}