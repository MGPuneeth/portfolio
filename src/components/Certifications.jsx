import { motion } from "framer-motion";
import { FiExternalLink, FiMail, FiAward } from "react-icons/fi";
import { SiGooglecloud } from "react-icons/si";
import { MdLeaderboard, MdWork } from "react-icons/md";
import { certifications } from "../data/portfolioData";

const IconMap = {
  "google-cloud": <SiGooglecloud size={22} />,
  leadership: <MdLeaderboard size={22} />,
  internship: <MdWork size={22} />,
};

function getLinkProps(cert) {
  if (!cert.credentialLink) return { href: null, isEmail: false };
  if (cert.credentialLink.startsWith("http"))
    return { href: cert.credentialLink, isEmail: false };
  if (cert.credentialLink.includes("@"))
    return { href: `mailto:${cert.credentialLink}`, isEmail: true };
  return { href: null, isEmail: false };
}

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p className="section-tag">// credentials</p>
          <h2 className="section-title">
            My <span className="gold-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {certifications.map((cert, i) => {
            const { href, isEmail } = getLinkProps(cert);
            const isBestPerformer = cert.id === 4;

            const cardContent = (
              <>
                {/* Gold top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${cert.badgeColor}, #FFD700)`,
                  }}
                />

                {/* Header row: icon + link icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                  }}
                >
                  {/* Icon badge */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `${cert.badgeColor}18`,
                      border: `1px solid ${cert.badgeColor}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: cert.badgeColor,
                      flexShrink: 0,
                    }}
                  >
                    {IconMap[cert.icon] ?? <FiAward size={22} />}
                  </div>

                  {/* Link indicator */}
                  {href ? (
                    isEmail ? (
                      <FiMail
                        size={15}
                        style={{
                          color: "var(--text-secondary)",
                          marginTop: "4px",
                        }}
                      />
                    ) : (
                      <FiExternalLink
                        size={15}
                        style={{
                          color: "var(--text-secondary)",
                          marginTop: "4px",
                        }}
                      />
                    )
                  ) : (
                    <span
                      style={{
                        fontSize: "0.6rem",
                        color: "var(--text-secondary)",
                        fontFamily: "'JetBrains Mono', monospace",
                        marginTop: "4px",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "1px 5px",
                      }}
                    >
                      Physical
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                    lineHeight: 1.45,
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    marginBottom: "3px",
                    fontWeight: 500,
                  }}
                >
                  {cert.issuer}
                </p>

                {/* Platform */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem",
                    marginBottom: "10px",
                    opacity: 0.7,
                  }}
                >
                  via {cert.platform}
                </p>

                {/* Note (if present) */}
                {cert.note && (
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.74rem",
                      fontStyle: "italic",
                      marginBottom: "10px",
                      lineHeight: 1.5,
                      borderLeft: `2px solid ${cert.badgeColor}60`,
                      paddingLeft: "8px",
                    }}
                  >
                    {cert.note}
                  </p>
                )}

                {cert.credentialNo && (
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.72rem",
                      marginBottom: "10px",
                      fontFamily: "'JetBrains Mono', monospace",
                      opacity: 0.6,
                    }}
                  >
                    Cert No: {cert.credentialNo}
                  </p>
                )}

                {/* Date + View button row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      color: "#FFD700",
                      fontSize: "0.73rem",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {cert.date}
                  </span>

                  {href && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: cert.badgeColor,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        border: `1px solid ${cert.badgeColor}60`,
                        borderRadius: "6px",
                        padding: "3px 10px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {isEmail ? "Verify →" : "View →"}
                    </span>
                  )}
                </div>
              </>
            );

            const sharedStyles = {
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
              height: "100%",
              boxSizing: "border-box",
            };

            return href ? (
              <motion.a
                key={cert.id}
                href={href}
                target={isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={sharedStyles}
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={sharedStyles}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
