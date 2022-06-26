import { FC } from 'react';
import style from './style.module.css';

type DiceProps = {
    nb: number,
    id: number,
    isHeld: boolean
};

export const Dice: FC<DiceProps> = ({nb, isHeld, id}) => {
    const classes: string[] = [style.dice];
    if (isHeld) {
        classes.push(style.diceActive)
    }
    return (
        <div className={classes.join(' ')} id={id.toString()}>
            {nb.toString()}
        </div>
    )
}