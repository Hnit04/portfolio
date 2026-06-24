import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  SiSpringboot, SiSpringsecurity, SiDocker,
  SiMongodb, SiPostgresql, SiMariadb, SiMysql,
  SiApachehadoop, SiApachespark, SiApachehive,
  SiReact, SiExpo, SiSolidity, SiEthereum,
  SiLinux, SiRabbitmq,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbApi, TbBrandSocketIo, TbRobot } from 'react-icons/tb';
import './TechStack.css';

const categories = [
  {
    key: 'backend',
    techs: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Spring Security', icon: SiSpringsecurity },
      { name: 'Microservices', icon: TbApi },
      { name: 'RabbitMQ', icon: SiRabbitmq },
    ],
  },
  {
    key: 'database',
    techs: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MariaDB', icon: SiMariadb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Hadoop', icon: SiApachehadoop },
      { name: 'Spark', icon: SiApachespark },
    ],
  },
  {
    key: 'realtime',
    techs: [
      { name: 'WebSocket', icon: TbBrandSocketIo },
      { name: 'LangChain4j', icon: TbRobot },
      { name: 'Solidity', icon: SiSolidity },
      { name: 'Ethereum', icon: SiEthereum },
    ],
  },
  {
    key: 'infra',
    techs: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    key: 'frontend',
    techs: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Expo', icon: SiExpo },
    ],
  },
];

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="section tech-section" id="tech">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="divider" />
          <h2 className="section-title">{t('tech.title')}</h2>
          <p className="section-subtitle">{t('tech.subtitle')}</p>
        </motion.div>

        <div className="tech__categories">
          {categories.map(({ key, techs }, catIdx) => (
            <motion.div
              key={key}
              className="tech__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="tech__category-title">{t(`tech.categories.${key}`)}</h3>
              <div className="tech__items">
                {techs.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name + i}
                    className="tech__item glass-card"
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="tech__icon" />
                    <span className="tech__name">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
