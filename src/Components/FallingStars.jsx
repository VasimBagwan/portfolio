import { useEffect, useRef } from "react";

const DEFAULT_STAR_COUNT = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

/**
 * FallingStars – animated canvas of falling/twinkling stars.
 *
 * Props:
 *   position  – CSS position value. Default "fixed" (viewport-wide).
 *               Pass "absolute" to confine inside a positioned parent.
 *   zIndex    – CSS z-index. Default 0.
 *   count     – number of stars. Default 120.
 *   opacity   – global max opacity multiplier (0-1). Default 1.
 */
export default function FallingStars({
  position = "fixed",
  zIndex = 0,
  count = DEFAULT_STAR_COUNT,
  opacity = 1,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLOURS = [
      "rgba(255,255,255,",
      "rgba(34,211,238,",   // cyan-400
      "rgba(167,139,250,",  // violet-400
      "rgba(196,181,253,",  // violet-300
    ];

    function createStar(fromTop = false) {
      const colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
      return {
        x: randomBetween(0, canvas.width),
        y: fromTop
          ? randomBetween(-20, 0)
          : randomBetween(0, canvas.height),
        radius:       randomBetween(0.4, 2.2),
        speed:        randomBetween(0.4, 1.6),
        drift:        randomBetween(-0.25, 0.25),
        op:           randomBetween(0.5, 1) * opacity,
        opDir:        Math.random() > 0.5 ? 1 : -1,
        opSpeed:      randomBetween(0.003, 0.012),
        colour,
        tail:         Math.random() < 0.08 ? randomBetween(20, 60) : 0,
        tailAngle:    Math.PI / 4 + randomBetween(-0.2, 0.2),
      };
    }

    const stars = Array.from({ length: count }, () => createStar(false));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxOp = opacity;

      stars.forEach((s, i) => {
        // Twinkle
        s.op += s.opSpeed * s.opDir;
        if (s.op >= maxOp)  { s.op = maxOp; s.opDir = -1; }
        if (s.op <= 0.15 * maxOp) { s.op = 0.15 * maxOp; s.opDir = 1; }

        // Fall
        s.y += s.speed;
        s.x += s.drift;

        if (s.y > canvas.height + 20) {
          stars[i] = createStar(true);
          return;
        }

        // Shooting-star tail
        if (s.tail > 0) {
          const grad = ctx.createLinearGradient(
            s.x, s.y,
            s.x - Math.cos(s.tailAngle) * s.tail,
            s.y - Math.sin(s.tailAngle) * s.tail
          );
          grad.addColorStop(0, `${s.colour}${s.op})`);
          grad.addColorStop(1, `${s.colour}0)`);
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(
            s.x - Math.cos(s.tailAngle) * s.tail,
            s.y - Math.sin(s.tailAngle) * s.tail
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth   = s.radius * 0.8;
          ctx.stroke();
        }

        // Glow dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle   = `${s.colour}${s.op})`;
        ctx.shadowBlur  = s.radius * 6;
        ctx.shadowColor = `${s.colour}0.8)`;
        ctx.fill();
        ctx.shadowBlur  = 0;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position,
        top:            0,
        left:           0,
        width:          "100%",
        height:         "100%",
        pointerEvents:  "none",
        zIndex,
      }}
    />
  );
}
