import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';
import './About.css';

const stats = [
  { key: 'projects', value: '3+' },
  { key: 'services', value: '7' },
  { key: 'contract_lines', value: '595' },
  { key: 'commits', value: '455+' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="divider" />
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__bio glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__avatar">
              <div className="about__avatar-circle">
                <img src={profileImg} alt="Trần Công Tính" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="about__avatar-glow" />
            </div>
            <p className="about__text">{t('about.bio')}</p>
            <div className="about__links">
              <a href="mailto:trancongtinh20042004@gmail.com" className="btn btn-outline">
                <HiUser /> Email Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map(({ key, value }, i) => (
              <motion.div
                key={key}
                className="about__stat glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{t(`about.stats.${key}`)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
