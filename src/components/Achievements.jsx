import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section
      id="extra-curriculars"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p className="section-tag">// milestones</p>
          <h2 className="section-title">
            My <span className="gold-gradient">Extra-Curriculars</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
              style={{ padding: "28px" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "16px",
                  filter: "drop-shadow(0 0 10px rgba(255,215,0,0.4))",
                }}
              >
                {ach.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#FFD700",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                {ach.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.83rem",
                  lineHeight: 1.65,
                }}
              >
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
