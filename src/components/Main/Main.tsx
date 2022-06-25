import React, { FC } from "react";
import style from './style.module.css';

export const Main: FC = () => {
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
              </div>
            </div>
          </div>
        </>
    );
}