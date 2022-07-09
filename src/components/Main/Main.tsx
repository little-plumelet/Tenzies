import { FC, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { DiceContainer } from '../DiceContainer';
import style from './style.module.css';
import { getInitialValue, getInitialValues } from './utils';

export const Main: FC = () => {
    const [ diceArr, setDiceArr ] = useState(getInitialValues());
    const [ isWin, setIsWin ] = useState(false);
    const [ isFail, setIsFail ] = useState(false);

    useEffect(() => {
      const allIsHeld = diceArr.every((dice) => dice.isHeld);
      const allTheSame = diceArr.every((dice) => dice.value === diceArr[0].value);

      if (allIsHeld && allTheSame) {
        setIsWin(true);
      }

      if (allIsHeld && !allTheSame) {
        setIsFail(true);
      }
    }, [diceArr])
    
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
      setIsFail(false);
      setIsWin(false);
    }
    
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                {isWin && <Confetti />}
                <div className={style.header}>
                  <h2>Tenzies</h2>
                  <div className={style.subTitle}>
                    {isWin && <h1 className={style.winner}>You are WINNER!!!</h1>}
                    {isFail && <h1>Sorry, try once more.</h1>}
                    {!isWin && !isFail && <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>}
                  </div>
                </div>
                <DiceContainer diceArr={diceArr} setDiceArr={setDiceArr}/>
                {!isWin && !isFail && <div className={style.buttonContainer}>
                  <button
                    onClick={handleClickRoll}
                    className={style.rollButton}
                  >
                    Roll
                  </button>
                  <button
                    onClick={handleClickReset}
                    className={style.resetButton}
                  >
                    Reset
                  </button>
                </div>}
                {(isWin || isFail) &&<button
                    onClick={handleClickReset}
                    className={style.rollButton}
                  >
                    New game
                  </button>}
              </div>
            </div>
          </div>
        </>
    );
}