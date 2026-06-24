import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = ['about', 'tech', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-bracket">{'<'}</span>
          TCT
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`navbar__link ${activeSection === link ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${link}`)}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button className="navbar__lang" onClick={toggleLang}>
            {i18n.language === 'en' ? '🇻🇳 VI' : '🇺🇸 EN'}
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
