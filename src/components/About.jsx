import { motion } from "framer-motion";
import { personal } from "../data/portfolioData";

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{ position: "relative", width: "240px", height: "240px" }}
            >
              {/* Gold glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
                  animation: "spin 6s linear infinite",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "3px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-primary)",
                  zIndex: 1,
                }}
              />
              {personal.avatar ? (
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  style={{
                    position: "absolute",
                    inset: "8px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    zIndex: 2,
                    width: "calc(100% - 16px)",
                    height: "calc(100% - 16px)",
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: "8px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {personal.initials}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-tag">// who am i</p>
            <h2 className="section-title">
              About <span className="gold-gradient">Me</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: "24px",
              }}
            >
              {personal.bio ||
                `Hi, I'm ${personal.name}, a passionate Computer Science student at ${personal.university}, graduating in 2027. I love building scalable, user-friendly applications and solving complex problems through clean, efficient code. I'm actively seeking full-time Software Engineering roles where I can contribute, grow, and make an impact. When I'm not coding, you'll find me exploring new technologies, grinding DSA or understanding current affairs.`}
            </p>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { label: "Degree", value: "B.E in CSE" },
                { label: "Graduating", value: "2027" },
                { label: "Focus", value: "Full Stack + Cloud + DSA" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg-card-2)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    minWidth: "100px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--text-secondary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#FFD700",
                      marginTop: "4px",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
