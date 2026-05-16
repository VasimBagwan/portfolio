import React from "react";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section className="min-h-screen bg-base-100 text-base-content py-20 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            MY RESUME
          </h1>

          <p className="mt-4 text-base-content/70">
            View and download my professional resume.
          </p>
        </div>

        {/* Resume Viewer */}
        <div className="bg-base-200 rounded-2xl shadow-2xl p-6 md:p-10">

          <div className="w-full h-[700px] rounded-xl overflow-hidden border border-base-300">

            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full"
            />

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <a
              href="/resume.pdf"
              download
              className="btn btn-primary gap-2"
            >
              <FaDownload />
              Download Resume
            </a>

            <Link
              to="/"
              className="btn btn-outline gap-2"
            >
              <FaArrowLeft />
              Back To Home
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}