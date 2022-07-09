import { FC } from 'react';
import style from './style.module.css';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from '../../diceSvgComponents';

type DiceProps = {
    nb: number,
    id: string,
    isHeld: boolean
};

export const Dice: FC<DiceProps> = ({nb, isHeld, id}) => {
    const classes: string[] = [style.dice];
    console.log(id, isHeld)
    if (isHeld) {
        classes.push(style.diceActive)
    }
    return (
        <div className={classes.join(' ')}>
            {nb === 1 && <Dice1 id={id} />}
            {nb === 2 && <Dice2 id={id} />}
            {nb === 3 && <Dice3 id={id} />}
            {nb === 4 && <Dice4 id={id} />}
            {nb === 5 && <Dice5 id={id} />}
            {nb === 6 && <Dice6 id={id} />}
        </div>
    )
}