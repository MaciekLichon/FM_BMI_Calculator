import styles from './CalculatorSummary.module.scss';

import { useEffect, useState } from 'react';

const CalculatorSummary = ({ units, imperialValues, metricValues, isFirst }) => {

  const [BMI, setBMI] = useState('');
  const [BMIMessage, setBMIMessage] = useState('');
  const [idealWeight, setIdealWeight] = useState({min: '', max: ''});

  useEffect(() => {
    getBMI();
  }, [imperialValues, metricValues])

  useEffect(() => {
    setBMI('0.0');
    setBMIMessage('');
    setIdealWeight({min: '', max: ''});
  }, [units])

  const getBMI = () => {
    let weight = 0;
    let height = 0;
    let value = 0;
    let idealWeightMin = '';
    let idealWeightMax = '';
    if (units === 'Metric') {
      weight = metricValues.kg;
      height = metricValues.cm / 100;
      value = weight / Math.pow(height, 2);

      idealWeightMin = `${(18.5 * Math.pow(height, 2)).toFixed(1)}kg`;
      idealWeightMax = `${(24.9 * Math.pow(height, 2)).toFixed(1)}kg`;
    } else if (units === 'Imperial') {
      weight = imperialValues.st * 14 + imperialValues.lbs;
      height = imperialValues.ft * 12 + imperialValues.in;
      value = weight / Math.pow(height, 2) * 703;

      let idealWeightMinLb = 18.5 * Math.pow(height, 2) / 703;
      let idealWeightMaxLb = 24.9 * Math.pow(height, 2) / 703;
      const idealWeightMinSt = Math.floor(idealWeightMinLb / 14);
      const idealWeightMaxSt = Math.floor(idealWeightMaxLb / 14);
      idealWeightMinLb = Math.floor((18.5 * Math.pow(height, 2) / 703) % 14);
      idealWeightMaxLb = Math.floor((24.9 * Math.pow(height, 2) / 703) % 14);

      idealWeightMin = `${idealWeightMinSt}st ${idealWeightMinLb}lbs`;
      idealWeightMax = `${idealWeightMaxSt}st ${idealWeightMaxLb}lbs`;
    }
    setIdealWeight({min: idealWeightMin, max: idealWeightMax});

    if (!isNaN(value) && value !== Infinity && typeof(value) === 'number') {
      setBMI(value.toFixed(1));

      if (value > 30) {
        setBMIMessage('obese');
      } else if (value > 25) {
        setBMIMessage('overweight');
      } else if (value > 18.5) {
        setBMIMessage('a healthy weight');
      } else {
        setBMIMessage('underweight');
      }

    } else {
      setBMI('0.0');
    }
  };


  return (
    <div className={styles.calculatorSummary}>
      { (!units || isFirst) && 
        <div className={styles.calculatorSummary__welcome}>
          <h3 className={styles.calculatorSummary__title}>Welcome!</h3>
          <p className={styles.calculatorSummary__text}>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      }
      { (units && !isFirst) &&
        <>
          <div>
            <p className={styles.calculatorSummary__messageOne}>Your BMI is...</p>
            <h2 className={styles.calculatorSummary__BMIValue}>{BMI}</h2>
          </div>
          {BMI !== '0.0' && <p className={styles.calculatorSummary__details}>
            Your BMI suggests you're {BMIMessage}.
            Your ideal weight is between 
            <span> {idealWeight.min} - {idealWeight.max}</span>
          </p>}
        </>
      }
    </div>
  );
};

export default CalculatorSummary;