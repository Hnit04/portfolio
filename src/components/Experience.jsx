import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import './Experience.css';

export default function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true });

  return (
    <section className="section edu-section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="divider" />
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="edu__timeline">
          {Array.isArray(items) && items.map((item, i) => (
            <motion.div
              key={i}
              className="edu__item glass-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`edu__dot ${item.type === 'work' ? 'edu__dot--work' : ''}`}>
                {item.type === 'work' ? <HiBriefcase /> : <HiAcademicCap />}
              </div>
              <div className="edu__content">
                <span className="edu__period">{item.period}</span>
                <h3 className="edu__school">{item.title}</h3>
                <p className="edu__degree">{item.organization}</p>
                <p className="edu__desc">{item.description}</p>
                
                {item.highlights && item.highlights.length > 0 && (
                  <div className="edu__highlights">
                    {item.highlights.map((h, j) => (
                      <span key={j} className="edu__highlight">• {h}</span>
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
