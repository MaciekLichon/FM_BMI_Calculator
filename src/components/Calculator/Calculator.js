import styles from './Calculator.module.scss';
import CalculatorSummary from '../CalculatorSummary/CalculatorSummary';

import { useState } from 'react';

const Calculator = () => {

  const [units, setUnits] = useState('Metric');
  const [isFirst, setIsFirst] = useState(true);
  const [imperialValues, setImperialValues] = useState({ft: 0, in: 0, st: 0, lbs: 0});
  const [metricValues, setMetricValues] = useState({cm: 0, kg: 0});


  const handleMetricChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setMetricValues({...metricValues, [name]: value});
    setIsFirst(false);
  };

  const handleImperialChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setImperialValues({...imperialValues, [name]: value});
    setIsFirst(false);
  };

  const handleUnitChange = (e) => {
    setUnits(e.target.value);
    setIsFirst(false);
  }


  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculator__title}>Enter your details below</h2>

      <div className={styles.calculator__checkboxes}>
        <div className={styles.calculator__input}>
          <p className={styles.calculator__inputName}>Metric</p>
          <input type="radio" name="units" value="Metric" className={styles.calculator__inputField} onChange={handleUnitChange} checked={units === "Metric"} />
        </div>
        <div className={styles.calculator__input}>
          <p className={styles.calculator__inputName}>Imperial</p>
          <input type="radio" name="units" value="Imperial" className={styles.calculator__inputField} onChange={handleUnitChange} checked={units === "Imperial"} />
        </div>
      </div>

      <div className={styles.calculator__textInputs}>
        <div className={styles.calculator__input}>
          <p className={styles.calculator__inputName}>Height</p>
          <div className={styles.calculator__inputBoxes}>
            { units === 'Metric' && 
              <div className={styles.calculator__inputBox}>
                <input type="text" name="cm" className={styles.calculator__inputField} onChange={e => handleMetricChange(e)} />
                <span className={styles.calculator__inputUnit}>cm</span>
              </div>
            }
            { units === 'Imperial' && 
              <>
                <div className={styles.calculator__inputBox}>
                  <input type="text" name="ft" className={styles.calculator__inputField} onChange={e => handleImperialChange(e)} />
                  <span className={styles.calculator__inputUnit}>ft</span>
                </div>
                <div className={styles.calculator__inputBox}>
                  <input type="text" name="in" className={styles.calculator__inputField} onChange={e => handleImperialChange(e)} />
                  <span className={styles.calculator__inputUnit}>in</span>
                </div>
              </>
            }
          </div>
        </div>
        <div className={styles.calculator__input}>
          <p className={styles.calculator__inputName}>Weight</p>
          <div className={styles.calculator__inputBoxes}>
            { units === 'Metric' && 
              <div className={styles.calculator__inputBox}>
                <input type="text" name="kg" className={styles.calculator__inputField} onChange={e => handleMetricChange(e)} />
                <span className={styles.calculator__inputUnit}>kg</span>
              </div>
            }
            { units === 'Imperial' && 
              <>
                <div className={styles.calculator__inputBox}>
                  <input type="text" name="st" className={styles.calculator__inputField} onChange={e => handleImperialChange(e)} />
                  <span className={styles.calculator__inputUnit}>st</span>
                </div>
                <div className={styles.calculator__inputBox}>
                  <input type="text" name="lbs" className={styles.calculator__inputField} onChange={e => handleImperialChange(e)} />
                  <span className={styles.calculator__inputUnit}>lbs</span>
                </div>
              </>
            }
          </div>
        </div>
      </div>

      <CalculatorSummary units={units} imperialValues={imperialValues} metricValues={metricValues} isFirst={isFirst} />
    </div>
  );
};

export default Calculator;