import { FC, useState } from 'react';
import { DiceContainer } from '../DiceContainer';
import style from './style.module.css';
import { getInitialValue, getInitialValues } from './utils';

export const Main: FC = () => {
    const [ diceArr, setDiceArr ] = useState(getInitialValues());

    console.log(diceArr)
    const handleClickRoll = () => {
      setDiceArr(((prevState) => { return prevState.map((dice) => {
        if (!dice.isHeld) {
          return getInitialValue()
        } else {
          return dice;
        }
      })}))
    }

    const handleClickReset = () => {
      setDiceArr(getInitialValues());
    }
    
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                <div className={style.header}>
                  <h2>Tenzies</h2>
                  <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
                </div>
                <DiceContainer diceArr={diceArr} setDiceArr={setDiceArr}/>
                <div className={style.buttonContainer}>
                  <button
                    onClick={handleClickRoll}
                    className={style.rollButton}
                  >
                    Roll
                  </button>
                  <button
                    onClick={handleClickReset}
                    className={style.rollButton}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}