import { FC } from 'react';
import { DiceContainer } from '../DiceContainer';
import style from './style.module.css';
import { getInitialValues } from './utils';

export const Main: FC = () => {
    const dies = getInitialValues();
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                <div className={style.header}>
                  <h2>Tenzies</h2>
                  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>
                <DiceContainer dies={dies} />
              </div>
            </div>
          </div>
        </>
    );
}