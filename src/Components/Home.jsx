import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vasimB from "/f1.jpg";
import FallingStars from "./FallingStars";

const TYPED_WORDS = ["Backend Developer", "Programmer", "Problem Solver"];

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

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
      const p = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(p);
    }
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((p) => (p + 1) % TYPED_WORDS.length);
      return;
    }
    const speed = isDeleting ? 55 : 110;
    const t = setTimeout(
      () => setSubIndex((p) => p + (isDeleting ? -1 : 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [subIndex, isDeleting, wordIndex]);

  const currentText = TYPED_WORDS[wordIndex].slice(0, subIndex);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        isolation: "isolate",
      }}
    >
      {/* ── Video background ── */}
      <video
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* ── Dark overlay so text is readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.78) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Falling stars on the video ── */}
      <FallingStars position="absolute" zIndex={2} count={150} opacity={0.85} />

      {/* ── Styled content ── */}
      <style>{`
        .typed-caret {
          display: inline-block; width: 3px; height: 1.1em;
          background: #22d3ee; margin-left: 3px;
          vertical-align: text-bottom;
          animation: caretBlink 1s steps(2,start) infinite;
        }
        @keyframes caretBlink { 50% { opacity: 0; } }
        @keyframes floaty {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        .floaty { animation: floaty 4s ease-in-out infinite; }
      `}</style>

      {/* ── Page content (above stars + overlay) ── */}
      <div
        style={{ position: "relative", zIndex: 3, width: "100%" }}
        className="px-5 py-24"
      >
        <div
          className={`w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Text */}
          <div className="flex-1 space-y-7 text-center md:text-left text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vasim
              </span>
              <br />
              <span className="text-cyan-300">{currentText}</span>
              <span className="typed-caret" aria-hidden />
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              A passionate Software Developer specializing in scalable web
              applications and robust backend systems. I build with{" "}
              <span className="text-cyan-400 font-medium">Node.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Python</span>,{" "}
              <span className="text-cyan-400 font-medium">Java</span>,{" "}
              <span className="text-cyan-400 font-medium">JavaScript</span> &{" "}
              <span className="text-cyan-400 font-medium">SQL</span>.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/resume"
                className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold shadow-lg hover:bg-cyan-600 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                View Resume
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full font-semibold hover:bg-cyan-400/10 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              {["Python","Java","HTML","CSS","JavaScript","SQL","Flask","GitHub","Node.js"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200 text-xs hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/25 rounded-full blur-3xl scale-110" />
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden floaty">
                <img src={vasimB} alt="Vasim" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute inset-[-10px] rounded-full border border-cyan-400/25 animate-spin"
                style={{ animationDuration: "12s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" style={{ zIndex: 2 }}>
        <span className="text-xs tracking-widest uppercase text-gray-300">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
      </div>
    </section>
  );
}