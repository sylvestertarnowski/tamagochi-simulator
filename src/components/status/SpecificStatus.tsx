import React from 'react';
import Hunger from './Hunger';
import Column from '../layout/Column';

type Props = {
    name: string;
    happiness: number;
    health: number;
    hunger: number;
    power: number;
}

const SpecificStatus: React.FC<Props> = (props) => {
    const { happiness, hunger, power, health, name } = props;

    return (
        <Column>
        {
            power > 80 ?
            <div>Your {name} is powerful.</div> :
            <div>{name} still needs some training.</div>
        }
        <Hunger
            name={name}
            hunger={hunger}
        />
        </Column>
    )
}

export default SpecificStatus;