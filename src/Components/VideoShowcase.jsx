import React from "react";

const VIDEO_SECTIONS = [
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    label: "01",
    title: "Crafting Scalable Backends",
    subtitle:
      "Building robust server-side systems with Node.js, Python & Java that power modern applications.",
    accent: "#22d3ee",
  },
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4",
    label: "02",
    title: "Engineering Real-World Solutions",
    subtitle:
      "Turning complex problems into clean, maintainable code — from database design to REST APIs.",
    accent: "#a78bfa",
  },
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
    label: "03",
    title: "Always Learning, Always Building",
    subtitle:
      "Passionate about new technologies and delivering impactful digital experiences through code.",
    accent: "#f472b6",
  },
];

export default function VideoShowcase() {
  return (
    <div
      id="video-showcase"
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#030712",
      }}
    >
      {/* ── Section heading ── */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#030712",
          color: "#fff",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#22d3ee",
            marginBottom: "0.75rem",
          }}
        >
          Video Showcase
        </p>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          See My Work{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in Motion
          </span>
        </h2>
        <p
          style={{
            marginTop: "1rem",
            color: "#9ca3af",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            maxWidth: "520px",
            margin: "1rem auto 0",
          }}
        >
          A visual walkthrough of the projects and systems I&apos;ve built — scroll through each chapter.
        </p>
        <div
          style={{
            marginTop: "1.5rem",
            width: "56px",
            height: "3px",
            borderRadius: "999px",
            background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>

      {/* ── 3 × Video Background Sections ── */}
      {VIDEO_SECTIONS.map((sec, idx) => (
        <div key={idx}>
          {/* Hairline divider between sections */}
          {idx > 0 && (
            <div
              style={{
                width: "100%",
                height: "2px",
                background:
                  "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.15) 50%,transparent 100%)",
              }}
            />
          )}

          {/*
           *  The key fix: this wrapper is the "viewport" for the video.
           *  - position: relative   → video absolute children resolve to THIS box
           *  - overflow: hidden     → video cannot escape this box
           *  - isolation: isolate   → creates its own stacking context so it
           *                           never bleeds behind or in front of sibling sections
           *
           *  On desktop  : 100vw wide × 100vh tall  (full-screen cinematic strip)
           *  On mobile   : 100vw wide × 56.25vw tall (natural 16:9, no zoom/crop)
           */}
          <div
            style={{
              position: "relative",
              width: "100%",
              /* 16:9 on narrow screens — switches to 100vh on wide screens via clamp */
              height: "clamp(56.25vw, 100vh, 100vh)",
              overflow: "hidden",
              isolation: "isolate",
              backgroundColor: "#000",
            }}
          >
            {/* ── Background video (fills the box, never crops weirdly) ── */}
            <video
              src={sec.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                zIndex: 0,
              }}
            />

            {/* ── Dark gradient overlay ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.48) 60%,rgba(0,0,0,0.68) 100%)",
                zIndex: 1,
              }}
            />

            {/* ── Accent top-border ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: sec.accent,
                boxShadow: `0 0 18px ${sec.accent}`,
                zIndex: 3,
              }}
            />

            {/* ── Centred text content ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem 1.5rem",
              }}
            >
              {/* Chapter chip */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  padding: "0.3rem 1rem",
                  borderRadius: "999px",
                  border: `1px solid ${sec.accent}`,
                  color: sec.accent,
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: sec.accent,
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                Chapter {sec.label}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  maxWidth: "760px",
                  background: `linear-gradient(135deg, #ffffff 40%, ${sec.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  margin: "0 0 1.25rem",
                }}
              >
                {sec.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "clamp(0.85rem, 2vw, 1.125rem)",
                  lineHeight: 1.7,
                  maxWidth: "580px",
                  margin: "0 auto",
                }}
              >
                {sec.subtitle}
              </p>

              {/* Accent underline bar */}
              <div
                style={{
                  marginTop: "2rem",
                  width: "56px",
                  height: "3px",
                  borderRadius: "999px",
                  background: sec.accent,
                  boxShadow: `0 0 14px ${sec.accent}`,
                }}
              />
            </div>

            {/* ── Watermark number ── */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                fontSize: "clamp(5rem, 15vw, 10rem)",
                fontWeight: 900,
                lineHeight: 1,
                opacity: 0.06,
                color: sec.accent,
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 2,
              }}
            >
              {sec.label}
            </span>
          </div>
        </div>
      ))}

      {/* Bottom fade */}
      <div
        style={{
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)",
        }}
      />
    </div>
  );
}
