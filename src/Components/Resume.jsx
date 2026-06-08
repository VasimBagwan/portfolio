import React, { useState } from "react";
import { FaDownload, FaArrowLeft, FaExternalLinkAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CORRECT_PASSWORD = "8485";

export default function Resume() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleUnlock = () => {
  if (input === CORRECT_PASSWORD) {
    setError("");

    // Direct PDF open
    window.open("/vasim_resume.pdf", "_blank");
  } else {
    setError("Wrong password! Please try again.");
    setInput("");
  }
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUnlock();
  };

  if (!unlocked) {
    return (
      <section className="min-h-screen bg-base-100 text-base-content flex items-center justify-center px-4">
        <div className="bg-base-200 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">

          <div className="flex justify-center mb-6">
            <div className="bg-cyan-500/10 p-5 rounded-full">
              <FaLock className="text-cyan-400 text-4xl" />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Resume Protected
          </h2>
          <p className="text-base-content/60 mb-8 text-sm">
            Enter password to view resume.
          </p>

          <div className="relative mb-4">
            <input
              type={showPass ? "text" : "password"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter password"
              className="input input-bordered w-full pr-12 text-center tracking-widest text-lg"
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}

          <button
            onClick={handleUnlock}
            className="btn btn-primary w-full gap-2"
          >
            <FaLock />
            Unlock Resume
          </button>

          <Link to="/" className="btn btn-outline w-full gap-2 mt-3">
            <FaArrowLeft />
            Back To Home
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-base-100 text-base-content py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            MY RESUME
          </h1>
          <p className="mt-4 text-base-content/70">
            View and download my professional resume.
          </p>
        </div>

        <div className="bg-base-200 rounded-2xl shadow-2xl p-6 md:p-10">
          <div className="w-full h-[700px] rounded-xl overflow-hidden border border-base-300">
            <iframe
              src="/vasim_resume.pdf#toolbar=1"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="/vasim_resume.pdf"
              download="Vasim_Bagwan_Resume.pdf"
              className="btn btn-primary gap-2"
            >
              <FaDownload />
              Download Resume
            </a>
            <a
              href="/vasim_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary gap-2"
            >
              <FaExternalLinkAlt />
              Open in New Tab
            </a>
            <Link to="/" className="btn btn-outline gap-2">
              <FaArrowLeft />
              Back To Home
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}