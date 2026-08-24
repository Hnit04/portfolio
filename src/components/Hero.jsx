import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  SiSpringboot, SiDocker, SiReact, SiMongodb,
  SiSolidity,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { HiArrowDown, HiCode, HiDatabase, HiDownload } from 'react-icons/hi';
import './Hero.css';

const floatingIcons = [
  { Icon: FaJava, x: '10%', y: '20%', delay: 0 },
  { Icon: SiSpringboot, x: '85%', y: '15%', delay: 0.5 },
  { Icon: SiDocker, x: '75%', y: '70%', delay: 1 },
  { Icon: SiReact, x: '15%', y: '75%', delay: 1.5 },
  { Icon: SiMongodb, x: '90%', y: '50%', delay: 0.8 },
  { Icon: SiSolidity, x: '5%', y: '50%', delay: 1.2 },
  { Icon: HiDatabase, x: '50%', y: '85%', delay: 0.3 },
];

export default function Hero() {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true });
  const bioParagraphs = t('hero.bio_paragraphs', { returnObjects: true });
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!Array.isArray(roles) || roles.length === 0) return;
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero" id="hero">
      {/* Floating background icons */}
      <div className="hero__bg-icons">
        {floatingIcons.map(({ Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="hero__bg-icon"
            style={{ left: x, top: y }}
            animate={{ y: [0, -15, 0], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__badge">
            <span style={{ fontSize: '1.2rem', marginRight: '6px' }}>👋</span> {t('hero.greeting')}
          </div>

          <h1 className="hero__name">{t('hero.name')}</h1>

          <div className="hero__role">
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor">|</span>
          </div>

          <div className="hero__bio">
            {Array.isArray(bioParagraphs) && bioParagraphs.map((para, idx) => (
              <p key={idx} className="hero__description">{para}</p>
            ))}
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              {t('hero.cta_projects')}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t('hero.cta_contact')}
            </a>
            <a href="/CV_TranCongTinh.html" download className="btn btn-outline hero__btn-cv">
              <HiDownload /> {t('hero.cta_cv')}
            </a>
          </div>

          <div className="hero__experience-strip">
            <span className="hero__experience-label">{t('hero.experience_with')}</span>
            <div className="hero__experience-icons">
               <FaJava title="Java" />
               <SiSpringboot title="Spring Boot" />
               <SiReact title="React" />
               <SiMongodb title="MongoDB" />
               <SiDocker title="Docker" />
            </div>
          </div>

        </motion.div>

        <motion.a
          href="#about"
          className="hero__scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.a>
      </div>
    </section>
  );
}
