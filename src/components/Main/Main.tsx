import React, { FC } from 'react';
import { DiesContainer } from '../DiesContainer';
import style from './style.module.css';

const dies = [1, 5, 1, 3, 4, 6, 2, 1, 4, 3];

export const Main: FC = () => {
    
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                <div className={style.header}>
                  <h2>Tenzies</h2>
                  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>
                <DiesContainer dies={dies} />
              </div>
            </div>
          </div>
        </>
    );
}