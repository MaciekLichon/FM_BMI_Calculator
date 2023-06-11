import styles from './HeroText.module.scss';
import logo from '../../images/logo.svg';

const HeroText = () => {
  return (
    <div className={styles.heroText}>
      <img className={styles.heroText__logo} src={logo} alt="logo"></img>
      <h1 className={styles.heroText__title}>Body Mass Index Calculator</h1>
      <p className={styles.heroText__description}>
        Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
      </p>
    </div>
  );
};

export default HeroText;