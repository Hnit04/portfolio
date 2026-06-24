import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xpwdgvey', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('sent');
        form.reset();
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="divider" />
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="contact__desc">{t('contact.description')}</p>

            <div className="contact__details">
              <div className="contact__detail">
                <HiMail className="contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">{t('contact.info.email')}</span>
                  <a href="mailto:trancongtinh20042004@gmail.com">trancongtinh20042004@gmail.com</a>
                </div>
              </div>
              <div className="contact__detail">
                <HiLocationMarker className="contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">{t('contact.info.location')}</span>
                  <span>{t('contact.info.location_value')}</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/Hnit04" target="_blank" rel="noopener noreferrer" className="contact__social">
                <SiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/tinh-tran-484444408" target="_blank" rel="noopener noreferrer" className="contact__social">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input type="text" name="name" placeholder={t('contact.form.name')} required className="contact__input" />
            <input type="email" name="email" placeholder={t('contact.form.email')} required className="contact__input" />
            <textarea name="message" placeholder={t('contact.form.message')} required rows={5} className="contact__input contact__textarea" />
            <button type="submit" className="btn btn-primary contact__submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? '...' : formStatus === 'sent' ? '✓ Sent!' : t('contact.form.send')}
            </button>
            {formStatus === 'error' && <p className="contact__error">Something went wrong. Try emailing directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
