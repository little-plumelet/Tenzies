import React, { FC } from "react";
import style from './style.module.css';

export const Main: FC = () => {
    return (
        <>
          <div className={style.wrapper}>
            <div className={style.mainBox}>
              <div className={style.innerBox}>hello</div>
            </div>
          </div>
        </>
    );
}