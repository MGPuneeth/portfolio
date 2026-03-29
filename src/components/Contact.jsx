import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { social, emailjsConfig } from "../data/portfolioData";

const SOCIAL_LINKS = [
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    href: social.github,
    color: "#fff",
    username: "@MGPuneeth",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: social.linkedin,
    color: "#0A66C2",
    username: "@puneethmg34",
  },
  {
    icon: <SiLeetcode size={20} />,
    label: "LeetCode",
    href: social.leetcode,
    color: "#FFA116",
    username: "@Puneeth_M_G",
  },
  {
    icon: <FiInstagram size={20} />,
    label: "Instagram",
    href: social.instagram,
    color: "#E1306C",
    username: "@puneeth.mg",
  },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p className="section-tag">// get in touch</p>
          <h2 className="section-title">
            Let's Build Something{" "}
            <span className="gold-gradient">Together</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "520px",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            Whether it's a full-time role, freelance work, or just a chat about
            tech — my inbox is always open.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Subject
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Job opportunity / Collaboration / Hey!"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Message
                </label>
                <textarea
                  className="form-input"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="gold-btn"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "0.9rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  opacity: status === "sending" ? 0.7 : 1,
                  position: "relative",
                }}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend size={14} /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p
                  style={{
                    color: "#4ade80",
                    textAlign: "center",
                    marginTop: "12px",
                    fontSize: "0.85rem",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  ✓ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p
                  style={{
                    color: "#f87171",
                    textAlign: "center",
                    marginTop: "12px",
                    fontSize: "0.85rem",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  ✗ Failed to send. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <h3
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Find Me On
            </h3>

            {SOCIAL_LINKS.map((sl) => (
              <a
                key={sl.label}
                href={sl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${sl.color}18`,
                    border: `1px solid ${sl.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: sl.color,
                    flexShrink: 0,
                  }}
                >
                  {sl.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {sl.label}
                    <p
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--text-secondary)",
                        marginBottom: "8px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {sl.username}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
