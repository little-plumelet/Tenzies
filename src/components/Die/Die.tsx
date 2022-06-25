import { FC } from 'react';
import style from './style.module.css';

type DieProps = {
    nb: Number,
};

export const Die: FC<DieProps> = ({nb}) => {
    return (
        <div className={style.die}>
            {nb.toString()}
        </div>
    )
}