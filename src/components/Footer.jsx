import { useTranslation } from 'react-i18next';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail, HiHeart } from 'react-icons/hi';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">{'<'}</span>
              TCT
              <span className="footer__logo-bracket">{'/>'}</span>
            </span>
            <p className="footer__tagline">Java Backend Developer</p>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/Hnit04" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/tinh-tran-484444408" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:trancongtinh20042004@gmail.com" aria-label="Email"><HiMail /></a>
          </div>

          <div className="footer__meta">
            <p>{t('footer.built_with')} · {t('footer.deployed_on')}</p>
            <p className="footer__copyright">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
