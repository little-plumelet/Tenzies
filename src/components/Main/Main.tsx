import { FC, useState } from 'react';
import { DiceContainer } from '../DiceContainer';
import style from './style.module.css';
import { getInitialValues } from './utils';

export const Main: FC = () => {
    const [ diceArr, setDiceArr ] = useState(getInitialValues());

    const handleClick = () => {
      setDiceArr(getInitialValues());
    }
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                <div className={style.header}>
                  <h2>Tenzies</h2>
                  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>
                <DiceContainer diceArr={diceArr} setDiceArr={setDiceArr}/>
                <button
                  onClick={handleClick}
                  className={style.rollButton}
                >
                  Roll
                </button>
              </div>
            </div>
          </div>
        </>
    );
}