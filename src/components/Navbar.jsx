import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import { useScrollSpy } from "../hooks/useCustomHooks";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "extra-curriculars", label: "Extra-Curriculars" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,215,0,0.1)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "1.5rem",
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            &lt;{personal.initials} /&gt;
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={activeId === id ? "nav-active" : ""}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  color: activeId === id ? "#FFD700" : "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                onMouseLeave={(e) => {
                  if (activeId !== id)
                    e.target.style.color = "var(--text-secondary)";
                }}
              >
                {label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: "rgba(255,215,0,0.1)",
                border: "1px solid rgba(255,215,0,0.3)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                color: "#FFD700",
                display: "flex",
                alignItems: "center",
                marginLeft: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,215,0,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,215,0,0.1)")
              }
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </motion.div>

          {/* Mobile Controls */}
          <div
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
            className="mobile-controls"
          >
            <button
              onClick={toggleTheme}
              style={{
                background: "rgba(255,215,0,0.1)",
                border: "1px solid rgba(255,215,0,0.3)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                color: "#FFD700",
                display: "flex",
                alignItems: "center",
              }}
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                background: "rgba(255,215,0,0.1)",
                border: "1px solid rgba(255,215,0,0.3)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                color: "#FFD700",
                display: "flex",
                alignItems: "center",
              }}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              backgroundColor: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(255,215,0,0.15)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  padding: "12px 16px",
                  textAlign: "left",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.9rem",
                  color: activeId === id ? "#FFD700" : "var(--text-secondary)",
                  backgroundColor:
                    activeId === id ? "rgba(255,215,0,0.08)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
