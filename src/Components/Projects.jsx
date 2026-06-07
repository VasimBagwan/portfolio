// Projects.jsx
import React, { useEffect, useRef, useState } from "react";
import FallingStars from "./FallingStars";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";

const projects = [
  {
    id: "blood",
    title: "Blood Donation System",
    emoji: "🩸",
    category: "Healthcare Platform",
    status: "Completed",
    year: "2024",
    description:
      "A centralized platform connecting donors, patients, hospitals, and blood banks. Features donor registration, blood request handling, admin dashboard, and inventory management.",
    longDescription:
      "Built a full-stack healthcare platform that digitizes and streamlines the entire blood donation pipeline. The system supports multiple user roles — donors, patients, hospital admins, and blood bank managers — each with a tailored dashboard. Key features include real-time blood inventory tracking, emergency request alerts, donor eligibility checks, and appointment scheduling. The admin dashboard provides analytics on donation trends and critical stock levels.",
    image: "/blood.jpg",
    url: null,
    tech: ["Python", "HTML", "CSS", "JavaScript", "SQLite"],
    highlights: [
      "Multi-role Authentication",
      "Real-time Inventory",
      "Emergency Alerts",
      "Admin Analytics",
      "Donor Eligibility Engine",
    ],
    accent: "#f472b6",
    glowColor: "rgba(244,114,182,0.5)",
    accentDim: "rgba(244,114,182,0.12)",
    accentBorder: "rgba(244,114,182,0.35)",
    gradientBorder: "linear-gradient(135deg, rgba(244,114,182,0.7), rgba(251,113,133,0.4), rgba(244,114,182,0.7))",
  },
  {
    id: "school",
    title: "School Management System",
    emoji: "🏫",
    category: "Backend Platform",
    status: "Completed",
    year: "2024",
    description:
      "Backend services for a school management platform with student records, attendance tracking, and admin features. Optimized data management with modern ORM.",
    longDescription:
      "Engineered a robust REST API backend powering a school management system. Handles complex relational data — students, teachers, classes, subjects, attendance, and grades — using PostgreSQL with Prisma ORM for type-safe queries. JWT-based auth secures endpoints with role separation (admin, teacher, student). Includes automated attendance calculation, grade aggregation, and report generation endpoints.",
    image: "/schoolimg.jpg",
    url: null,
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT"],
    highlights: [
      "REST API Architecture",
      "JWT Role Auth",
      "Prisma ORM",
      "Attendance Tracking",
      "Grade Reports",
    ],
    accent: "#22d3ee",
    glowColor: "rgba(34,211,238,0.5)",
    accentDim: "rgba(34,211,238,0.12)",
    accentBorder: "rgba(34,211,238,0.35)",
    gradientBorder: "linear-gradient(135deg, rgba(34,211,238,0.7), rgba(99,102,241,0.4), rgba(34,211,238,0.7))",
  },
  {
    id: "ai-planner",
    title: "AI Study Planner",
    emoji: "🤖",
    category: "AI Education Platform",
    status: "Completed",
    year: "2025",
    description:
      "An AI-powered study management platform that analyzes syllabus content and automatically generates important questions, MCQs, and study insights. Helps students prepare smarter with performance tracking and personalized learning support.",
    longDescription:
      "Developed a full-stack AI-powered education platform that transforms how students study. The system accepts syllabus or topic input and leverages the Gemini AI API to intelligently generate topic-wise important questions, multiple-choice quizzes, and key study insights. Students can track performance across sessions, receive personalized weak-area recommendations, and monitor their learning progress through an interactive dashboard. Built with ASP.NET Core on the backend and a responsive Bootstrap 5 interface, with EF Core managing a SQL Server database for storing user progress, generated content, and session history.",
    image: "/ai-planner.jpg",
    url: null,
    tech: ["ASP.NET Core", "C#", "SQL Server", "EF Core", "Gemini AI", "Bootstrap 5"],
    highlights: [
      "Gemini AI Integration",
      "Auto Question Generation",
      "MCQ Quiz Engine",
      "Performance Tracking",
      "Personalized Insights",
      "Syllabus Analyzer",
    ],
    accent: "#a78bfa",
    glowColor: "rgba(167,139,250,0.5)",
    accentDim: "rgba(167,139,250,0.12)",
    accentBorder: "rgba(167,139,250,0.35)",
    gradientBorder: "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(99,102,241,0.5), rgba(167,139,250,0.7))",
  },
];

/* ─────────────────────────────────────────────────────────
   Project Card — fully transparent glassmorphism over video
───────────────────────────────────────────────────────── */
function ProjectCard({ project, index, onOpen, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(36px) scale(0.94)",
        transition: `opacity 0.7s ease ${index * 160}ms, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) ${index * 160}ms`,
        borderRadius: "24px",
        padding: "2px",
        background: hovered
          ? project.gradientBorder
          : "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        boxShadow: hovered
          ? `0 0 40px ${project.glowColor}, 0 20px 60px rgba(0,0,0,0.35)`
          : `0 0 0px transparent, 0 8px 24px rgba(0,0,0,0.25)`,
        transition: `opacity 0.7s ease ${index * 160}ms, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) ${index * 160}ms, box-shadow 0.4s ease, background 0.4s ease`,
        animation: `projGlow${index} ${4 + index * 0.8}s ease-in-out infinite`,
      }}
    >
      {/* Glass shell */}
      <div style={{
        borderRadius: "22px",
        overflow: "hidden",
        background: hovered ? "rgba(8,10,22,0.30)" : "rgba(8,10,22,0.18)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition: "background 0.4s ease",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Glowing top bar */}
        <div style={{
          height: "2px",
          background: hovered
            ? `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          transition: "background 0.4s ease",
        }} />

        {/* Image header */}
        <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.6s ease, opacity 0.4s ease, filter 0.4s ease",
              filter: hovered ? "brightness(0.75) saturate(1.1)" : "brightness(0.55) saturate(0.85)",
              opacity: hovered ? 0.60 : 0.45,
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(8,10,22,0.75) 0%, rgba(8,10,22,0.15) 55%, transparent 100%)",
          }} />
          <div style={{
            position: "absolute", top: 10, left: 12,
            padding: "3px 9px", borderRadius: 999,
            background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
            border: `1px solid ${project.accentBorder}`,
            fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: project.accent,
          }}>
            {project.category}
          </div>
          <div style={{ position: "absolute", top: 10, right: 12 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem",
              boxShadow: hovered ? `0 0 14px ${project.glowColor}` : "none",
              transition: "box-shadow 0.4s ease",
            }}>
              {project.emoji}
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 14, right: 14 }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Description */}
          <p style={{
            fontSize: "0.78rem", lineHeight: 1.65,
            color: "rgba(200,215,235,0.75)",
            marginBottom: 12, flex: 1,
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontSize: "0.6rem", fontWeight: 600, padding: "2px 8px",
                borderRadius: 999, background: project.accentDim,
                border: `1px solid ${project.accentBorder}`, color: project.accent,
                letterSpacing: "0.03em",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "6px 10px", borderRadius: 10,
            border: `1px solid ${hovered ? project.accentBorder : "rgba(255,255,255,0.08)"}`,
            background: hovered ? project.accentDim : "rgba(255,255,255,0.04)",
            transition: "all 0.3s ease",
          }}>
            <span style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: hovered ? project.accent : "rgba(255,255,255,0.45)",
              transition: "color 0.3s ease",
            }}>
              View Details
            </span>
            <span style={{
              fontSize: "1rem",
              color: hovered ? project.accent : "rgba(255,255,255,0.3)",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}>
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Project Modal — glassmorphism, video still visible behind
───────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 12);
    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  function handleClose() {
    setShow(false);
    setTimeout(onClose, 330);
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        /* Semi-transparent backdrop — video remains visible through it */
        background: show ? "rgba(4,6,14,0.60)" : "rgba(4,6,14,0)",
        backdropFilter: show ? "blur(10px)" : "blur(0px)",
        WebkitBackdropFilter: show ? "blur(10px)" : "blur(0px)",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "720px", width: "100%",
          borderRadius: "28px", padding: "3px",
          background: project.gradientBorder,
          boxShadow: `0 0 70px ${project.glowColor}, 0 40px 80px rgba(0,0,0,0.6)`,
          transform: show ? "scale(1) translateY(0)" : "scale(0.80) translateY(40px)",
          opacity: show ? 1 : 0,
          transition: "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.33s ease",
          maxHeight: "92vh", overflowY: "auto",
        }}
      >
        {/* Glass inner */}
        <div style={{
          borderRadius: "26px",
          background: "rgba(6,8,18,0.82)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          overflow: "hidden",
        }}>
          {/* Accent top strip */}
          <div style={{
            height: "3px",
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }} />

          {/* Close */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute", top: 16, right: 16, zIndex: 10,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)", fontSize: "1rem",
              cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          >
            ✕
          </button>

          {/* Hero image */}
          <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
            <img
              src={project.image} alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(6,8,18,0.98) 0%, rgba(6,8,18,0.4) 50%, transparent 100%)",
            }} />
            {/* Floating title on image */}
            <div style={{ position: "absolute", bottom: 20, left: 28 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: project.accent,
                marginBottom: 6,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: project.accent, display: "inline-block" }} />
                {project.category}
              </div>
              <h2 style={{
                fontSize: "clamp(1.3rem, 4vw, 1.7rem)",
                fontWeight: 800, color: "#fff",
                textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                lineHeight: 1.2,
              }}>
                {project.emoji} {project.title}
              </h2>
            </div>
            {/* Status + year chips */}
            <div style={{
              position: "absolute", top: 16, right: 54,
              display: "flex", gap: 8,
            }}>
              <span style={{
                padding: "4px 12px", borderRadius: 999, fontSize: "0.62rem",
                fontWeight: 700, background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)", border: `1px solid ${project.accentBorder}`,
                color: project.accent,
              }}>
                ✓ {project.status}
              </span>
              <span style={{
                padding: "4px 12px", borderRadius: 999, fontSize: "0.62rem",
                fontWeight: 700, background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.5)",
              }}>
                {project.year}
              </span>
            </div>
          </div>

          {/* Content area */}
          <div style={{ padding: "26px 28px 30px" }}>

            {/* Long description */}
            <p style={{
              fontSize: "0.87rem", lineHeight: 1.8,
              color: "rgba(200,215,235,0.85)", marginBottom: 24,
            }}>
              {project.longDescription}
            </p>

            {/* Key Features */}
            <div style={{ marginBottom: 22 }}>
              <p style={{
                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                marginBottom: 12,
              }}>
                Key Features
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.highlights.map((h) => (
                  <span key={h} style={{
                    fontSize: "0.76rem", fontWeight: 600,
                    padding: "6px 14px", borderRadius: 999,
                    background: project.accentDim,
                    border: `1px solid ${project.accentBorder}`,
                    color: project.accent,
                  }}>
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                marginBottom: 12,
              }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: "0.76rem", fontWeight: 600,
                    padding: "6px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.65)",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer actions */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={handleClose}
                style={{
                  flex: 1, minWidth: 120,
                  padding: "0.7rem 1.2rem", borderRadius: 14,
                  border: `1px solid ${project.accentBorder}`,
                  background: project.accentDim,
                  color: project.accent,
                  fontSize: "0.8rem", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.background = project.accentBorder}
                onMouseLeave={e => e.currentTarget.style.background = project.accentDim}
              >
                ← Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        style={{
          position: "relative", width: "100%", overflow: "hidden",
          background: "linear-gradient(160deg, #06080f 0%, #0c1225 50%, #080d1a 100%)",
          padding: "6rem 1.5rem 5rem",
        }}
      >
        {/* Falling stars */}
        <FallingStars position="absolute" zIndex={0} count={120} opacity={0.6} />

        {/* Ambient blobs */}
        <div style={{
          position: "absolute", top: "-8%", left: "50%",
          transform: "translateX(-50%)", width: "800px", height: "320px",
          background: "radial-gradient(ellipse, rgba(244,114,182,0.10) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 1,
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "-5%", width: "400px", height: "300px",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1080px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{
            textAlign: "center", marginBottom: "3.5rem",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.28em",
              textTransform: "uppercase", color: "#f472b6", marginBottom: "0.75rem",
            }}>
              My Work
            </p>
            <h2 style={{
              fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.2, margin: "0 0 0.85rem",
            }}>
              Featured{" "}
              <span style={{
                background: "linear-gradient(90deg, #22d3ee, #f472b6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Projects
              </span>
            </h2>
            <p style={{
              color: "rgba(200,210,230,0.7)", fontSize: "clamp(0.85rem,2vw,1rem)",
              maxWidth: "520px", margin: "0 auto",
            }}>
              Selected academic and practical applications.{" "}
              <strong style={{ color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                Click any card for details.
              </strong>
            </p>
            <div style={{
              marginTop: "1.4rem", width: "56px", height: "3px", borderRadius: 999,
              background: "linear-gradient(90deg,#22d3ee,#f472b6)",
              boxShadow: "0 0 14px rgba(244,114,182,0.5)",
              margin: "1.4rem auto 0",
            }} />
          </div>

          {/* ── Big video card ── */}
          <div style={{
            borderRadius: "28px", padding: "3px",
            background: "linear-gradient(135deg, rgba(244,114,182,0.6), rgba(34,211,238,0.5), rgba(244,114,182,0.6))",
            animation: "projBorderPulse 4s ease-in-out infinite",
          }}>
            <div style={{
              borderRadius: "26px", overflow: "hidden",
              background: "#06080f", position: "relative",
            }}>
              {/* Video background */}
              <video
                src={VIDEO_SRC}
                autoPlay loop muted playsInline preload="auto"
                style={{
                  position: "absolute", top: 0, left: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center", zIndex: 0,
                }}
              />

              {/* Overlay — light enough to let video show through */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "radial-gradient(ellipse at center, rgba(6,8,15,0.65) 0%, rgba(6,8,15,0.82) 100%)",
              }} />

              {/* Project cards */}
              <div style={{ position: "relative", zIndex: 2, padding: "44px 32px 48px" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
                  gap: "20px",
                  maxWidth: "1100px",
                  margin: "0 auto",
                }}>
                  {projects.map((p, i) => (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      index={i}
                      onOpen={setActive}
                      visible={visible}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes projBorderPulse {
            0%   { box-shadow: 0 0 50px rgba(244,114,182,0.30), 0 0 100px rgba(34,211,238,0.12); }
            50%  { box-shadow: 0 0 75px rgba(244,114,182,0.55), 0 0 130px rgba(34,211,238,0.25); }
            100% { box-shadow: 0 0 50px rgba(244,114,182,0.30), 0 0 100px rgba(34,211,238,0.12); }
          }
          @keyframes projGlow0 {
            0%, 100% { filter: brightness(1); }
            50%       { filter: brightness(1.07); }
          }
          @keyframes projGlow1 {
            0%, 100% { filter: brightness(1); }
            50%       { filter: brightness(1.09); }
          }
        `}</style>
      </section>

      {/* Modal rendered at root level so video section stays visible behind it */}
      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}