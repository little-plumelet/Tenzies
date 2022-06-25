import { FC } from 'react';
import { Die } from '../Die';
import style from './style.module.css';

type DiesContainerProps = {
    dies: Number[]
}

export const DiesContainer: FC<DiesContainerProps> = ({ dies }) => {
    return (
        <div className={style.diesContainer}>
            {dies.map((dieNb) => {
                return <Die nb={dieNb}></Die>
            })}
        </div>
    )
}