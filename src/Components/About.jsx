import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaGraduationCap,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";

import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const SKILLS = [
  { name: "React.js", icon: <RiReactjsFill /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML / CSS / JavaScript", icon: <SiTailwindcss /> },
  { name: "Git / GitHub", icon: <FaGithub /> },
];

export default function About() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 space-y-12"
    >
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-600">
          ABOUT ME
        </h1>

        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
          I’m passionate about programming, web development, and software engineering.
          I enjoy building practical applications using Python, Java, HTML, CSS,
          JavaScript, and SQL.
        </p>
      </header>

      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">

          {/* Profile */}
          <div className="card bg-base-100 shadow-md p-6">

            <h2 className="text-xl font-semibold mb-2">
              Profile
            </h2>

            <p className="text-sm text-base-content/80 leading-relaxed">
              As a developer, I enjoy building user-friendly and practical applications
              while continuously improving my programming and problem-solving skills.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <Link
                to="/projects"
                className="btn btn-primary btn-sm"
              >
                View Projects
              </Link>

              <Link
                to="/resume"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                <button>
                  View Resume
                </button>
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div
            ref={skillsRef}
            className="card bg-base-100 shadow-md p-6"
          >

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Core Skills
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">

              {SKILLS.map((s, idx) => (
                <div
                  key={s.name}
                  className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                    skillsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{
                    transitionDelay: skillsVisible
                      ? `${idx * 100}ms`
                      : "0ms",
                  }}
                >

                  <span className="text-4xl text-primary">
                    {s.icon}
                  </span>

                  <span className="text-sm font-medium">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Facts */}
        <aside className="space-y-6">

          {/* Contact */}
          <div className="card bg-base-100 shadow-md p-6">

            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">
                Contact
              </h3>

              <span className="text-sm text-success">
                Available
              </span>
            </div>

            <div className="mt-3 space-y-3 text-sm">

              {/* Email */}
              <div className="flex items-start gap-3">

                <FaEnvelope className="text-rose-400 mt-1" />

                <div>
                  <div className="font-medium">
                    Email
                  </div>

                  <div className="text-xs text-base-content/60">
                    <a href="mailto:vbagwan415@gmail.com">
                      vbagwan415@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="card bg-base-100 shadow-md p-6">

            <h3 className="text-lg font-semibold mb-2">
              Quick Facts
            </h3>

            <ul className="text-sm text-base-content/70 space-y-2">

              <li>
                <strong>Experience:</strong> Academic & Personal Projects
              </li>

              <li>
                <strong>Location:</strong> Damani Nagar, Solapur
              </li>

              <li>
                <strong>Availability:</strong> Open to Opportunities
              </li>

            </ul>
          </div>
        </aside>
      </div>

      {/* Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Education Card */}
        <div className="card bg-base-100 shadow-md p-6">

          <h3 className="text-lg font-semibold mb-3">
            <FaGraduationCap className="inline mr-2" />
            Education
          </h3>

          <div className="space-y-3 text-sm text-base-content/80">

            <div>
              <p className="font-medium">
                MCA
              </p>

              <p className="text-xs text-base-content/60">
                Solapur University — 2027
              </p>
            </div>

            <div>
              <p className="font-medium">
                BCA
              </p>

              <p className="text-xs text-base-content/60">
                Solapur University — 2025
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="card bg-base-100 shadow-md p-6">

          <h3 className="text-lg font-semibold mb-3">
            Certifications & Tools
          </h3>

          <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">

            <li>
              Python Programming
            </li>

            <li>
              Web Development
            </li>

            <li>
              Git & GitHub
            </li>

          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="card bg-base-100 shadow-md p-6 text-center">

        <h4 className="text-lg font-semibold">
          Want to work together?
        </h4>

        <p className="text-sm text-base-content/70 mt-2">
          I’m open to learning opportunities, collaborations, and practical software development projects.
        </p>

        <div className="mt-4 flex justify-center gap-3">

          <a
            href="mailto:vbagwan415@gmail.com"
            className="btn btn-primary btn-sm"
          >
            Email Me
          </a>

          <a
            href="/resume"
            className="btn btn-outline btn-sm"
            target="_blank"
          >
            View My Resume
          </a>

        </div>
      </footer>
    </section>
  );
}