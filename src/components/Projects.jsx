import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import { SiBlockchaindotcom } from 'react-icons/si';
import { TbServer, TbMessageCircle } from 'react-icons/tb';
import './Projects.css';

const projectIcons = [SiBlockchaindotcom, TbServer, TbMessageCircle];

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="divider" />
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="projects__grid">
          {Array.isArray(items) && items.map((project, i) => {
            const Icon = projectIcons[i];
            return (
              <motion.div
                key={i}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="project-card__header">
                  <div className="project-card__icon">
                    <Icon />
                  </div>
                  <div className="project-card__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title={t('projects.view_code')}>
                        <HiCode />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" title={t('projects.live_demo')}>
                        <HiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                
                <div className="project-card__meta">
                   {project.role && (
                     <span className="project-card__meta-item">
                        <HiOutlineUser /> Role: {project.role}
                     </span>
                   )}
                   {project.duration && (
                     <span className="project-card__meta-item">
                        <HiOutlineClock /> Duration: {project.duration}
                     </span>
                   )}
                </div>

                <ul className="project-card__desc">
                  {Array.isArray(project.description) ? project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  )) : (
                    <li>{project.description}</li>
                  )}
                </ul>

                <div className="project-card__highlights">
                  {Array.isArray(project.highlights) && project.highlights.map((h, j) => (
                    <span key={j} className="project-card__highlight">✦ {h}</span>
                  ))}
                </div>

                <div className="project-card__tags">
                  {Array.isArray(project.tags) && project.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
