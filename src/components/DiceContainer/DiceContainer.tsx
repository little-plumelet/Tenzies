import { FC } from 'react';
import { Dice } from '../Dice';
import style from './style.module.css';

type DiceContainerProps = {
    dies: Number[]
}

export const DiceContainer: FC<DiceContainerProps> = ({ dies }) => {
    return (
        <div className={style.diesContainer}>
            {dies.map((dieNb) => {
                return <Dice nb={dieNb}></Dice>
            })}
        </div>
    )
}