import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { personal, typewriterRoles } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useCustomHooks";

export default function Hero() {
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
      {/* Static subtle gold glow — no particles, no animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,215,0,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
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
              transition: "background 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,215,0,0.08)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255,215,0,0.15)";
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
    </section>
  );
}
