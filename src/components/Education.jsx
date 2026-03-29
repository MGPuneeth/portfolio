import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-tag">// academic journey</p>
          <h2 className="section-title">
            My <span className="gold-gradient">Education</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '720px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '18px',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #FFD700 0%, rgba(255,215,0,0.1) 100%)',
          }} />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ display: 'flex', gap: '32px', marginBottom: '40px', paddingLeft: '56px', position: 'relative' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '10px',
                top: '8px',
                width: '18px', height: '18px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                boxShadow: '0 0 14px rgba(255,215,0,0.5)',
                flexShrink: 0,
                zIndex: 1,
              }} />

              {/* Card */}
              <div className="card" style={{ padding: '24px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1rem', fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {edu.degree}
                  </h3>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#FFD700',
                    background: 'rgba(255,215,0,0.08)',
                    border: '1px solid rgba(255,215,0,0.2)',
                    padding: '2px 10px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}>
                    {edu.duration}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>
                  {edu.institution}
                  {edu.board && ` · ${edu.board}`}
                </p>

                {edu.cgpa && (
                  <p style={{ color: '#FFD700', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>
                    CGPA: {edu.cgpa}
                  </p>
                )}
                {edu.percentage && (
                  <p style={{ color: '#FFD700', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>
                    Score: {edu.percentage}
                  </p>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {edu.highlights.map(h => (
                      <span key={h} style={{
                        padding: '3px 10px',
                        borderRadius: '4px',
                        background: 'var(--bg-card-2)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
