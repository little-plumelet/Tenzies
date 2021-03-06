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
      setDiceArr(oldDiceArr => oldDiceArr.map((dice) => {
        console.log((event.target as HTMLElement).getAttribute('id'), ", id = ", dice.id)
        return dice.id === (event.target as HTMLElement).getAttribute('id') ?
          { ...dice, isHeld: !dice.isHeld } : {...dice}
       
    }));
  }

    return (
        <div className={style.diceContainer} onClick={clickHandler}>
            {diceArr.map((dice) => {
                return <Dice 
                    nb={dice.value} 
                    key={dice.id} 
                    isHeld={dice.isHeld}
                    id={dice.id}
                ></Dice>
            })}
        </div>
    )
}