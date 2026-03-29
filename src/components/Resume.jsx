import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            width: '72px', height: '72px',
            borderRadius: '16px',
            background: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <FiFileText size={32} style={{ color: '#FFD700' }} />
          </div>

          <p className="section-tag">// document</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            My <span className="gold-gradient">Resume</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            marginBottom: '36px',
          }}>
            A snapshot of my skills, projects, and experience — crafted to get you up to speed quickly.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={personal.resumeUrl}
              download
              className="gold-btn"
              style={{
                padding: '14px 36px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.9rem',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              <FiDownload size={16} />
              Download Resume
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 36px',
                borderRadius: '8px',
                border: '1px solid rgba(255,215,0,0.4)',
                background: 'transparent',
                color: '#FFD700',
                fontSize: '0.9rem',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,215,0,0.06)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(255,215,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FiFileText size={16} /> View Online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
