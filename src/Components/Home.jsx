import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fahimF from "/f1.jpg";

const TYPED_WORDS = ["Backend Developer", "Programmer", "Problem Solver"];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];

    if (!isDeleting && subIndex === currentWord.length + 1) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
      return;
    }

    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, wordIndex]);

  const currentText = TYPED_WORDS[wordIndex].slice(0, subIndex);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .floaty {
          animation: floaty 4s ease-in-out infinite;
        }

        .typed-caret {
          width: 3px;
          height: 1.2em;
          background: #22d3ee;
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          50% { opacity: 0 }
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl top-10 left-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-3xl bottom-10 right-0 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-screen-xl px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <div
          className={`md:w-1/2 space-y-6 text-center md:text-left transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vasim
            </span>

            <br />

            <span className="text-cyan-400">{currentText}</span>
            <span className="typed-caret" aria-hidden />
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            I’m passionate about programming, web development, and software engineering.
            I enjoy building practical applications using
            <span className="text-cyan-400 font-semibold"> Node.js</span>,
            <span className="text-cyan-400 font-semibold"> Python</span>,
            <span className="text-cyan-400 font-semibold"> Java</span>,
            <span className="text-cyan-400 font-semibold"> HTML</span>,
            <span className="text-cyan-400 font-semibold"> CSS</span>,
            <span className="text-cyan-400 font-semibold"> JavaScript</span>, and
            <span className="text-cyan-400 font-semibold"> SQL</span>.
            I love learning new technologies and solving real-world problems through code.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <Link
              to="/resume"
              className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 hover:-translate-y-1 transition-all shadow-lg"
            >
              View Resume
            </Link>

            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full font-semibold hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Skills Tags */}
          <div className="mt-10">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs sm:text-sm">
              {[
                "Python",
                "Java",
                "HTML",
                "CSS",
                "JavaScript",
                "SQL",
                "Flask",
                "GitHub",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-cyan-500/20 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 flex justify-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl" />

            <img
              src={fahimF}
              alt="Vasim"
              className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl floaty transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}