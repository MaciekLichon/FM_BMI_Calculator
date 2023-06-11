import styles from './Recommendations.module.scss';
import Container from '../Container/Container';

import iconEating from '../../images/icon-eating.svg';
import iconExercise from '../../images/icon-exercise.svg';
import iconSleep from '../../images/icon-sleep.svg';


const items = [
  {
    icon: iconEating,
    title: 'Healthy eating',
    caption: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
  },
  {
    icon: iconExercise,
    title: 'Regular exercise',
    caption: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
  },
  {
    icon: iconSleep,
    title: 'Adequate sleep',
    caption: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
  }
];

const Recommendations = () => {

  return (
    <section className={styles.section_recommendations}>
      <Container>
        <div className={styles.recommendations}>
          <div className={styles.recommendations__list}>
            {items.map(item => (
              <div className={styles.recommendations__item}>
                <img className={styles.recommendations__itemIcon} src={item.icon} alt={`${item.title} icon`} />
                <div className={styles.recommendations__itemText}>
                  <h3 className={styles.recommendations__itemTitle}>{item.title}</h3>
                  <p className={styles.recommendations__itemCaption}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Recommendations;