// WorkExperience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTasks } from "react-icons/fa";

const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    companyName: "AIZTS INFOTECH PVT LTD",
    startDate: "Dec 2024",
    endDate: "Present",
    location: "Solapur, Maharashtra",
    tech: ["React.js", "JavaScript", "PostgreSQL", "Prisma ORM", "Node.js", "Express.js"],
    description: [
      "Design and implement scalable backend architectures for SaaS-based platforms.",
      "Build reliable APIs, optimize database performance, and ensure seamless communication between services.",
      "Improve system reliability through testing, code optimization, and CI/CD practices.",
      "Collaborate with cross-functional teams to deliver secure, high-performance solutions.",
    ],
    accent: "from-cyan-400 to-indigo-500",
  },

];

const WorkExperienceCard = ({ job, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-2xl border border-base-200"
  >
    {/* Accent Border */}
    <div className={`h-2 bg-gradient-to-r ${job.accent} rounded-t-2xl`} />

    <div className="card-body p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <FaBuilding className="text-2xl" />
          </div>
          <div>
            <h2 className="card-title text-xl font-bold">{job.companyName}</h2>
            <p className="text-sm text-base-content/70 font-medium">{job.role}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="badge badge-primary text-xs py-3 px-4">
            {job.endDate === "Present" ? "Present" : `${job.startDate} - ${job.endDate}`}
          </p>
          <p className="text-xs mt-1 text-base-content/70">{job.location}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.tech.map((tech, idx) => (
          <div key={idx} className="badge badge-outline text-xs py-2 px-3 hover:badge-primary transition">
            {tech}
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="divider my-4"></div>
      <div>
        <div className="flex items-center gap-2 mb-2 font-semibold text-base-content">
          <FaTasks /> <span>Key Responsibilities</span>
        </div>
        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2 text-base-content/80">
          {job.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between mt-6">
        <div className="text-xs text-base-content/70">
          <FaCalendarAlt className="inline mr-1 text-primary/70" />
          {job.startDate} — {job.endDate}
        </div>
        <div className="flex gap-3">
      
          
        </div>
      </div>
    </div>
  </motion.div>
);

export default function WorkExperience() {
  return (
    <section id="exp" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text">
          Work Experience
        </h1>
        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
          A showcase of my professional journey, where I crafted scalable, performant, and production-ready software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {workExperience.map((job, idx) => (
          <WorkExperienceCard key={job.id} job={job} i={idx} />
        ))}
      </div>
    </section>
  );
}
