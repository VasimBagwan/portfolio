import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", icon: "/html.png", type: "Frontend" },

  { name: "CSS", icon: "/css.jpg", type: "Frontend" },

  { name: "JavaScript", icon: "/javascript.jpg", type: "Frontend" },

  { name: "React.js", icon: "/reactjs.png", type: "Frontend" },

  { name: "GitHub", icon: "/github.png", type: "Tool" },

  { name: "Python", icon: "/python.png", type: "Programming" },

  { name: "Java", icon: "/java.png", type: "Programming" },
];

const colorMap = {
  Frontend: "bg-gradient-to-r from-pink-400 to-rose-500",

  Programming: "bg-gradient-to-r from-green-400 to-emerald-500",

  Tool: "bg-gradient-to-r from-blue-400 to-sky-500",
};

export default function SkillSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full bg-neutral-950 text-gray-100 py-24 px-6 md:px-12"
    >
      <div
        className={`transition-all duration-1000 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build responsive, practical, and
          user-friendly applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {skills.map((skill, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`group relative border border-gray-800 rounded-2xl p-6 bg-neutral-900 hover:bg-neutral-800 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20`}
            >

              {/* Icon */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-neutral-800 rounded-xl border border-gray-700 shadow-inner">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-10 w-10 object-contain"
                  onError={(e) =>
                    (e.currentTarget.style.display = "none")
                  }
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-center mt-4 group-hover:text-cyan-400 transition-all">
                {skill.name}
              </h3>

              {/* Type Label */}
              <div
                className={`mt-2 text-xs font-medium text-center text-white px-3 py-1 rounded-full ${colorMap[skill.type]} w-fit mx-auto`}
              >
                {skill.type}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center mt-3 leading-relaxed">
                {getSkillDescription(skill.name)}
              </p>

              {/* Gradient underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSkillDescription(name) {
  const desc = {

    HTML: "Crafting clean, semantic web structures.",

    CSS: "Building responsive and modern layouts.",

    JavaScript: "Bringing interactivity and logic to the browser.",

    "React.js":
      "Component-driven front-end architecture.",

    Python:
      "Building practical applications and solving real-world problems.",

    Java:
      "Object-oriented programming for scalable software development.",

    GitHub:
      "Version control and team collaboration.",
  };

  return desc[name] || "Experienced in using this technology.";
}