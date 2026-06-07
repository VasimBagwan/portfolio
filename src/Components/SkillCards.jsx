import React, { useEffect, useRef, useState } from "react";
import FallingStars from "./FallingStars";

/* ─────────────────────────────────────────────────────────
   Skill data — extended with proficiency + modal details
───────────────────────────────────────────────────────── */
const skills = [
  {
    name: "HTML",
    icon: "/html.png",
    type: "Frontend",
    proficiency: 92,
    glowColor: "rgba(228,77,38,0.55)",
    borderColor: "rgba(228,77,38,0.4)",
    tagColor: { bg: "rgba(228,77,38,0.15)", border: "rgba(228,77,38,0.4)", text: "#f97316" },
    highlights: ["Semantic HTML5", "Accessibility (ARIA)", "SEO best practices", "Forms & Validation"],
    description:
      "Solid command of HTML5 semantics, accessibility standards, and document structure. I write clean, standards-compliant markup that search engines and screen readers love.",
    experience: "2+ years",
    projects: ["Blood Donation System", "Portfolio Website"],
  },
  {
    name: "CSS",
    icon: "/css.jpg",
    type: "Frontend",
    proficiency: 88,
    glowColor: "rgba(38,77,228,0.55)",
    borderColor: "rgba(38,77,228,0.4)",
    tagColor: { bg: "rgba(38,77,228,0.15)", border: "rgba(38,77,228,0.4)", text: "#60a5fa" },
    highlights: ["Flexbox & Grid", "Animations & Keyframes", "Responsive Design", "CSS Variables"],
    description:
      "Expert in crafting responsive, pixel-perfect layouts using modern CSS. Comfortable with complex animations, custom properties, and mobile-first design principles.",
    experience: "2+ years",
    projects: ["Portfolio Website", "School Management UI"],
  },
  {
    name: "JavaScript",
    icon: "/javascript.jpg",
    type: "Frontend",
    proficiency: 85,
    glowColor: "rgba(234,179,8,0.55)",
    borderColor: "rgba(234,179,8,0.4)",
    tagColor: { bg: "rgba(234,179,8,0.15)", border: "rgba(234,179,8,0.4)", text: "#facc15" },
    highlights: ["ES6+ Syntax", "DOM Manipulation", "Async / Promises", "Event Handling"],
    description:
      "Proficient in modern JavaScript including ES6+ features, asynchronous programming, and browser APIs. I bring logic, interactivity, and dynamic data handling to every project.",
    experience: "2+ years",
    projects: ["Blood Donation System", "Interactive Portfolio"],
  },
  {
    name: "React.js",
    icon: "/reactjs.png",
    type: "Frontend",
    proficiency: 80,
    glowColor: "rgba(34,211,238,0.55)",
    borderColor: "rgba(34,211,238,0.4)",
    tagColor: { bg: "rgba(34,211,238,0.15)", border: "rgba(34,211,238,0.4)", text: "#22d3ee" },
    highlights: ["Hooks & Context", "Component Architecture", "State Management", "React Router"],
    description:
      "Building scalable, component-driven UIs with React. Familiar with hooks, context API, and designing reusable component libraries for production-grade applications.",
    experience: "1+ year",
    projects: ["Portfolio Website"],
  },
  {
    name: "GitHub",
    icon: "/github.png",
    type: "Tool",
    proficiency: 78,
    glowColor: "rgba(139,148,158,0.55)",
    borderColor: "rgba(139,148,158,0.4)",
    tagColor: { bg: "rgba(139,148,158,0.15)", border: "rgba(139,148,158,0.4)", text: "#94a3b8" },
    highlights: ["Git Workflow", "Branching Strategy", "Pull Requests", "CI/CD Integration"],
    description:
      "Comfortable with Git version control for solo and team projects. I follow branching strategies, write meaningful commit messages, and use GitHub for code reviews.",
    experience: "2+ years",
    projects: ["All Projects"],
  },
  {
    name: "Python",
    icon: "/python.png",
    type: "Programming",
    proficiency: 82,
    glowColor: "rgba(52,211,153,0.55)",
    borderColor: "rgba(52,211,153,0.4)",
    tagColor: { bg: "rgba(52,211,153,0.15)", border: "rgba(52,211,153,0.4)", text: "#34d399" },
    highlights: ["OOP Principles", "SQLite / Databases", "Flask Basics", "Scripting & Automation"],
    description:
      "Python is my primary backend language. I use it for database-driven applications, scripting, and solving real-world problems with clean, readable code.",
    experience: "2+ years",
    projects: ["Blood Donation System"],
  },
  {
    name: "Java",
    icon: "/java.png",
    type: "Programming",
    proficiency: 72,
    glowColor: "rgba(251,113,133,0.55)",
    borderColor: "rgba(251,113,133,0.4)",
    tagColor: { bg: "rgba(251,113,133,0.15)", border: "rgba(251,113,133,0.4)", text: "#fb7185" },
    highlights: ["OOP & Design Patterns", "Collections Framework", "Exception Handling", "File I/O"],
    description:
      "Solid grounding in Java OOP principles learned through academic coursework. I understand class hierarchies, design patterns, and building scalable software architectures.",
    experience: "1+ year",
    projects: ["Academic Projects"],
  },
];

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

/* ─────────────────────────────────────────────────────────
   Skill Card
───────────────────────────────────────────────────────── */
function SkillCard({ skill, index, visible, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(skill)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.95)",
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms`,
        cursor: "pointer",
        borderRadius: "20px",
        padding: "3px",
        background: hovered
          ? `linear-gradient(135deg, ${skill.borderColor}, rgba(99,102,241,0.5))`
          : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        boxShadow: hovered
          ? `0 0 28px ${skill.glowColor}, 0 8px 32px rgba(0,0,0,0.4)`
          : `0 0 0px transparent, 0 4px 16px rgba(0,0,0,0.3)`,
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms, box-shadow 0.4s ease, background 0.4s ease`,
        animation: `cardPulse${index % 3} ${3.5 + (index % 3) * 0.7}s ease-in-out infinite`,
      }}
    >
      {/* Glass inner */}
      <div
        style={{
          borderRadius: "18px",
          background: hovered
            ? "rgba(255,255,255,0.10)"
            : "rgba(255,255,255,0.05)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "24px 18px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.4s ease",
          height: "100%",
        }}
      >
        {/* Corner shimmer */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "80px", height: "80px",
          background: `radial-gradient(circle at top right, ${skill.glowColor}, transparent 70%)`,
          opacity: hovered ? 0.6 : 0.2,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }} />

        {/* Icon */}
        <div style={{
          width: 60, height: 60, borderRadius: 16,
          background: "rgba(0,0,0,0.4)",
          border: `1px solid ${hovered ? skill.borderColor : "rgba(255,255,255,0.1)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 14,
          boxShadow: hovered ? `0 0 18px ${skill.glowColor}` : "none",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        }}>
          <img
            src={skill.icon}
            alt={skill.name}
            style={{ height: 36, width: 36, objectFit: "contain" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: "1rem", fontWeight: 700,
          color: hovered ? "#fff" : "rgba(255,255,255,0.9)",
          marginBottom: 6, textAlign: "center",
          transition: "color 0.3s",
        }}>
          {skill.name}
        </h3>

        {/* Badge */}
        <span style={{
          fontSize: "0.62rem", fontWeight: 700,
          padding: "3px 10px", borderRadius: 999,
          background: skill.tagColor.bg,
          border: `1px solid ${skill.tagColor.border}`,
          color: skill.tagColor.text,
          letterSpacing: "0.05em",
          marginBottom: 12,
        }}>
          {skill.type}
        </span>

        {/* Click hint */}
        <p style={{
          fontSize: "0.62rem",
          color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
          marginTop: 8, transition: "color 0.3s",
          letterSpacing: "0.04em",
        }}>
          Click to explore →
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Skill Modal
───────────────────────────────────────────────────────── */
function SkillModal({ skill, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mount → animate in
    const t = setTimeout(() => setShow(true), 10);
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
    setTimeout(onClose, 320);
  }

  if (!skill) return null;

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        background: show ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0)",
        backdropFilter: show ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: show ? "blur(8px)" : "blur(0px)",
        transition: "background 0.32s ease, backdrop-filter 0.32s ease",
      }}
    >
      {/* Modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "560px",
          width: "100%",
          borderRadius: "28px",
          padding: "3px",
          background: `linear-gradient(135deg, ${skill.borderColor}, rgba(99,102,241,0.6), ${skill.borderColor})`,
          boxShadow: `0 0 60px ${skill.glowColor}, 0 40px 80px rgba(0,0,0,0.7)`,
          transform: show ? "scale(1) translateY(0)" : "scale(0.82) translateY(30px)",
          opacity: show ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.32s ease",
        }}
      >
        {/* Glass inner */}
        <div style={{
          borderRadius: "26px",
          background: "rgba(8,10,20,0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          overflow: "hidden",
        }}>
          {/* Top glow strip */}
          <div style={{
            height: "3px",
            background: `linear-gradient(90deg, transparent, ${skill.tagColor.text}, transparent)`,
          }} />

          <div style={{ padding: "32px 32px 28px" }}>
            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute", top: 18, right: 18,
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, color 0.2s",
                zIndex: 10,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              ✕
            </button>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{
                width: 72, height: 72, borderRadius: 20, flexShrink: 0,
                background: "rgba(0,0,0,0.5)",
                border: `2px solid ${skill.borderColor}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 24px ${skill.glowColor}`,
              }}>
                <img
                  src={skill.icon} alt={skill.name}
                  style={{ height: 44, width: 44, objectFit: "contain" }}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: "1.6rem", fontWeight: 800, color: "#fff",
                  marginBottom: 4, lineHeight: 1.2,
                }}>
                  {skill.name}
                </h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: "0.68rem", fontWeight: 700, padding: "3px 12px",
                    borderRadius: 999, background: skill.tagColor.bg,
                    border: `1px solid ${skill.tagColor.border}`, color: skill.tagColor.text,
                  }}>
                    {skill.type}
                  </span>
                  <span style={{
                    fontSize: "0.68rem", fontWeight: 600, padding: "3px 12px",
                    borderRadius: 999, background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)",
                  }}>
                    {skill.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: "0.88rem", lineHeight: 1.75,
              color: "rgba(200,210,230,0.85)",
              marginBottom: 22,
            }}>
              {skill.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 22 }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                marginBottom: 12,
              }}>
                Key Areas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.highlights.map((h) => (
                  <span key={h} style={{
                    fontSize: "0.75rem", fontWeight: 600,
                    padding: "5px 14px", borderRadius: 999,
                    background: skill.tagColor.bg,
                    border: `1px solid ${skill.tagColor.border}`,
                    color: skill.tagColor.text,
                  }}>
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects used in */}
            <div>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                marginBottom: 10,
              }}>
                Used In
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.projects.map((proj) => (
                  <span key={proj} style={{
                    fontSize: "0.75rem", fontWeight: 600,
                    padding: "5px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.65)",
                  }}>
                    {proj}
                  </span>
                ))}
              </div>
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
export default function SkillSection() {
  const [visible, setVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="skills"
        ref={ref}
        style={{
          background: "linear-gradient(160deg, #06080f 0%, #0c1225 50%, #080d1a 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "6rem 1.5rem 5rem",
        }}
      >
        {/* Falling stars */}
        <FallingStars position="absolute" zIndex={0} count={140} opacity={0.7} />

        {/* Ambient glow blobs */}
        <div style={{
          position: "absolute", top: "-10%", left: "50%",
          transform: "translateX(-50%)", width: "700px", height: "300px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 1,
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "-5%",
          width: "400px", height: "300px",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.09) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* ── Content ── */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1080px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{
            textAlign: "center", marginBottom: "3.5rem",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.28em",
              textTransform: "uppercase", color: "#22d3ee", marginBottom: "0.75rem",
            }}>
              What I Know
            </p>
            <h2 style={{
              fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800,
              background: "linear-gradient(90deg, #22d3ee, #6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", margin: "0 0 0.75rem",
            }}>
              Technical Skills
            </h2>
            <p style={{
              color: "rgba(180,190,210,0.7)",
              fontSize: "clamp(0.85rem,2vw,1rem)", maxWidth: "500px", margin: "0 auto",
            }}>
              Technologies and tools I use to build responsive, practical, and
              user-friendly applications. <strong style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Click any card to learn more.</strong>
            </p>
            <div style={{
              marginTop: "1.4rem", width: "56px", height: "3px", borderRadius: 999,
              background: "linear-gradient(90deg, #22d3ee, #6366f1)",
              boxShadow: "0 0 14px rgba(99,102,241,0.6)",
              margin: "1.4rem auto 0",
            }} />
          </div>

          {/* ── Big Video Card ── */}
          <div style={{
            borderRadius: "28px", padding: "3px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.7), rgba(34,211,238,0.5), rgba(99,102,241,0.7))",
            animation: "borderPulse 4s ease-in-out infinite",
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

              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(135deg, rgba(6,8,15,0.80) 0%, rgba(12,18,37,0.70) 50%, rgba(6,8,15,0.80) 100%)",
              }} />

              {/* Cards grid on top */}
              <div style={{ position: "relative", zIndex: 2, padding: "40px 28px 44px" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 185px), 1fr))",
                  gap: "18px",
                }}>
                  {skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={i}
                      visible={visible}
                      onClick={setActiveSkill}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS keyframes */}
        <style>{`
          @keyframes borderPulse {
            0%   { box-shadow: 0 0 50px rgba(99,102,241,0.40), 0 0 100px rgba(34,211,238,0.15); }
            50%  { box-shadow: 0 0 70px rgba(99,102,241,0.65), 0 0 130px rgba(34,211,238,0.28); }
            100% { box-shadow: 0 0 50px rgba(99,102,241,0.40), 0 0 100px rgba(34,211,238,0.15); }
          }
          @keyframes cardPulse0 {
            0%, 100% { filter: brightness(1); }
            50%       { filter: brightness(1.08); }
          }
          @keyframes cardPulse1 {
            0%, 100% { filter: brightness(1); }
            50%       { filter: brightness(1.1); }
          }
          @keyframes cardPulse2 {
            0%, 100% { filter: brightness(1); }
            50%       { filter: brightness(1.06); }
          }
        `}</style>
      </section>

      {/* Modal — rendered outside section so it covers full viewport */}
      {activeSkill && (
        <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}
    </>
  );
}