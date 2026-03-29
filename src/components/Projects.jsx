import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const ALL_TECH = ['All', 'React.js', 'Node.js', 'Java', 'MongoDB', 'Next.js'];

// Gradient colors for project thumbnails when no image is provided
const GRAD_COLORS = [
  'linear-gradient(135deg, #1a1a2e, #16213e)',
  'linear-gradient(135deg, #0f3460, #533483)',
  'linear-gradient(135deg, #1a2a1a, #2d5016)',
  'linear-gradient(135deg, #2a1a0a, #5a3000)',
  'linear-gradient(135deg, #1a0a2a, #3d0070)',
  'linear-gradient(135deg, #0a2a2a, #005046)',
];

function ProjectCard({ project, index, featured = false }) {
  const grad = GRAD_COLORS[index % GRAD_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: featured ? 'row' : 'column',
        gap: 0,
        gridColumn: featured ? 'span 2' : 'span 1',
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          background: project.thumbnail ? `url(${project.thumbnail}) center/cover` : grad,
          minHeight: featured ? '100%' : '180px',
          flex: featured ? '0 0 40%' : undefined,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!project.thumbnail && (
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: featured ? '1.2rem' : '0.9rem',
            color: 'rgba(255,215,0,0.5)',
            padding: '20px',
            textAlign: 'center',
          }}>
            {project.title.split('—')[0].trim()}
          </div>
        )}
        {featured && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            color: '#000',
            fontSize: '0.65rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '4px',
            letterSpacing: '0.1em',
          }}>
            ★ FEATURED
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: featured ? '1.2rem' : '1rem',
          fontWeight: 700,
          marginBottom: '12px',
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>
        <p style={{
          color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7,
          marginBottom: '16px', flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px',
              borderRadius: '4px',
              background: 'rgba(255,215,0,0.08)',
              border: '1px solid rgba(255,215,0,0.2)',
              fontSize: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#FFD700',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: 'var(--text-secondary)', fontSize: '0.8rem',
              textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FiGithub size={14} /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: 'var(--text-secondary)', fontSize: '0.8rem',
                textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = projects.find(p => p.featured);
  const grid = projects.filter(p => !p.featured);

  const filtered = activeFilter === 'All'
    ? grid
    : grid.filter(p => p.tech.some(t => t === activeFilter));

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="section-tag">// what i've built</p>
          <h2 className="section-title">Featured <span className="gold-gradient">Projects</span></h2>
        </motion.div>

        {/* Featured */}
        {featured && (
          <div style={{ marginBottom: '48px' }}>
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {ALL_TECH.map(f => (
            <button
              key={f}
              className={`filter-pill${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
