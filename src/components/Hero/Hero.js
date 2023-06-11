import styles from './Hero.module.scss';

import HeroText from '../HeroText/HeroText';
import Calculator from '../Calculator/Calculator';

import Container from '../Container/Container';

const Hero = () => {
  return (
    <section className={styles.section_hero}>
      <Container>
        <div className={styles.hero}>
          <HeroText />
          <Calculator />
        </div>
      </Container>
    </section>
  );
};

export default Hero; 