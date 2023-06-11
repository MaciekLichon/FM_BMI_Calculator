import styles from './BMIMeaning.module.scss';
import Container from '../Container/Container';

import manEatingImage from '../../images/image-man-eating.webp';


const BMIMeaning = () => {
  return (
    <section className={styles.section_meaning}>
      <Container>
        <div className={styles.meaning}>
          <div className={styles.meaning__imageContainer}>
            <img className={styles.meaning__image} src={manEatingImage} alt="man eating" />
          </div>
          <div className={styles.meaning__content}>
            <h2 className={styles.meaning__title}>What yout BMI result means</h2>
            <p className={styles.meaning__description}>
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BMIMeaning;