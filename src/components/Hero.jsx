import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { personal, typewriterRoles } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useCustomHooks";

export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const typed = useTypewriter(typewriterRoles, 75, 1800);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Particles Background */}
      {particlesReady && (
        <Particles
          id="hero-particles"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          options={{
            background: { color: { value: "transparent" } },

            fpsLimit: 30,

            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },

            particles: {
              color: { value: ["#FFD700", "#FFA500", "#ffe566"] },

              links: { enable: false },

              move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: 0.8,
              },
              number: {
                density: { enable: true, area: 900 },
                value: 35,
              },

              opacity: {
                value: { min: 0.1, max: 0.4 }, // ✅ Subtle fade variation
              },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: false,
          }}
        />
      )}

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.05) 0%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.85rem",
            color: "#FFD700",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          ✦ Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          Hi, I'm <span className="gold-gradient">{personal.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-secondary)",
            marginBottom: "32px",
            height: "2.2rem",
          }}
        >
          <span style={{ color: "#FFD700" }}>&gt;</span>&nbsp;
          {typed}
          <span className="typed-cursor">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="gold-btn"
            onClick={scrollToProjects}
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            View My Work
          </button>

          <a
            href={personal.resumeUrl}
            download
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              border: "1px solid rgba(255,215,0,0.5)",
              background: "transparent",
              color: "#FFD700",
              fontSize: "0.9rem",
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,215,0,0.08)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255,215,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FiDownload size={16} /> Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Chevron */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          color: "rgba(255,215,0,0.6)",
          cursor: "pointer",
        }}
        onClick={scrollToProjects}
      >
        <FiArrowDown size={28} />
      </motion.div>
    </section>
  );
}
