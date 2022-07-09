import { FC } from 'react';
import { Dice } from '../Dice';
import style from './style.module.css';

type DiceContainerProps = {
    diceArr: {
      value: number;
      isHeld: boolean;
      id: string
    }[],
    setDiceArr: React.Dispatch<React.SetStateAction<{ value: number; isHeld: boolean; id: string; }[]>>
}

export const DiceContainer: FC<DiceContainerProps> = ({ diceArr,  setDiceArr }) => {
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      setDiceArr(diceArr.map((dice) => {
          if (dice.id === (event.target as HTMLElement).getAttribute('id')) {
            return (diceArr.find((el) => (el.value === dice.value && el.isHeld))  || diceArr.every((el) => !el.isHeld)) ?
              { ...dice, isHeld: !dice.isHeld } : {...dice}
          } else
            return {...dice}
    }));
  }

    return (
        <div className={style.diesContainer} onClick={clickHandler}>
            {diceArr.map((dice, index) => {
                return <Dice 
                    nb={dice.value} 
                    key={index} 
                    isHeld={dice.isHeld}
                    id={dice.id}
                ></Dice>
            })}
        </div>
    )
}