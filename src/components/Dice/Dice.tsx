import { FC } from 'react';
import style from './style.module.css';

type DiceProps = {
    nb: Number,
};

export const Dice: FC<DiceProps> = ({nb}) => {
    return (
        <div className={style.die}>
            {nb.toString()}
        </div>
    )
}