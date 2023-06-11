import styles from './Limitations.module.scss';
import Container from '../Container/Container';

import iconGender from '../../images/icon-gender.svg';
import iconAge from '../../images/icon-age.svg';
import iconMuscle from '../../images/icon-muscle.svg';
import iconPregnancy from '../../images/icon-pregnancy.svg';
import iconRace from '../../images/icon-race.svg';

const limitations = [
  {
    icon: iconGender,
    title: 'Gender',
    caption: 'The development and body fat composition of girls and boys vary with age. Consequently, a child’s age and gender are considered when evaluating their BMI.'
  },
  {
    icon: iconAge,
    title: 'Age',
    caption: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
  },
  {
    icon: iconMuscle,
    title: 'Muscle',
    caption: 'BMI may misclassify muscular individuals as overweight or obese, as it doesn’t differentiate muscle from fat.'
  },
  {
    icon: iconPregnancy,
    title: 'Pregnancy',
    caption: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.'
  },
  {
    icon: iconRace,
    title: 'Race',
    caption: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
  },
];

const Limitations = () => {
  return (
    <section className={styles.section_limitations}>
      <Container>
        <div className={styles.limitations}>
          <h2 className={styles.limitations__title}>Limitations of BMI</h2>
          <p className={styles.limitations__caption}>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          <div className={styles.limitations__list}>
            {limitations.map(item => (
              <div className={styles.limitations__item}>
                <div className={styles.limitations__itemHeader}>
                  <img className={styles.limitations__itemIcon} src={item.icon} alt={`${item.title} icon`} />
                  <h4 className={styles.limitations__itemTitle}>{item.title}</h4>
                </div>
                <p className={styles.limitations__itemCaption}>{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Limitations;