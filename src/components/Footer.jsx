import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { personal, social } from "../data/portfolioData";

const FOOTER_SOCIALS = [
  { icon: <FiGithub size={18} />, href: social.github },
  { icon: <FiLinkedin size={18} />, href: social.linkedin },
  { icon: <SiLeetcode size={18} />, href: social.leetcode },
  { icon: <FiInstagram size={18} />, href: social.instagram },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer
        style={{
          borderTop: "1px solid var(--border-color)",
          padding: "40px 24px",
          textAlign: "center",
          backgroundColor: "var(--bg-card)",
        }}
      >
        {/* Social row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {FOOTER_SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--bg-card-2)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFD700";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(255,215,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
          }}
        >
          <span className="gold-gradient" style={{ fontWeight: 600 }}>
            {personal.name}
          </span>{" "}
          © 2026 — Designed & Built with ❤️
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "rgba(128,128,128,0.5)",
            marginTop: "6px",
          }}
        ></p>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
