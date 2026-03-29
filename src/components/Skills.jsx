import { motion } from "framer-motion";
import { skillsRow1, skillsRow2 } from "../data/portfolioData";

// Map simple icon keys to Devicon classes
const DEVICON_MAP = {
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-plain",
  nodejs: "devicon-nodejs-plain colored",
  express: "devicon-express-original",
  javascript: "devicon-javascript-plain colored",
  tailwind: "devicon-tailwindcss-plain colored",
  api: "devicon-nodejs-plain",
  git: "devicon-git-plain colored",
  java: "devicon-java-plain colored",
  sql: "devicon-mysql-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  dsa: "devicon-java-plain colored",
  oop: "devicon-java-plain colored",
  aws: "devicon-amazonwebservices-plain colored",
  docker: "devicon-docker-plain colored",
  google: "devicon-google-plain colored",
};

function SkillPill({ name, icon }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 20px",
        margin: "0 10px",
        borderRadius: "999px",
        background: "var(--bg-card)",
        border: "1px solid rgba(255,215,0,0.25)",
        whiteSpace: "nowrap",
        transition: "all 0.3s ease",
        cursor: "default",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,215,0,0.6)";
        e.currentTarget.style.boxShadow = "0 0 16px rgba(255,215,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,215,0,0.25)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <i
        className={DEVICON_MAP[icon] || "devicon-devicon-plain"}
        style={{ fontSize: "1.4rem" }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.82rem",
          color: "var(--text-primary)",
        }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, direction = "left" }) {
  const doubled = [...skills, ...skills];
  return (
    <div
      className="marquee-wrapper"
      style={{ overflow: "hidden", width: "100%", padding: "8px 0" }}
    >
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillPill
            key={`${skill.name}-${i}`}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p className="section-tag">// what i work with</p>
          <h2 className="section-title">
            Tech <span className="gold-gradient">Skills</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Technologies and tools I've worked with — from frontend to backend,
            algorithms to cloud.
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee (outside container for edge-to-edge) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ marginBottom: "8px" }}
      >
        <MarqueeRow skills={skillsRow1} direction="left" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        style={{ marginBottom: "64px" }}
      >
        <MarqueeRow skills={skillsRow2} direction="right" />
      </motion.div>
    </section>
  );
}
