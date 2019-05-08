import React from 'react';
import Happiness from './Happiness';
import Hunger from './Hunger';
import Power from './Power';
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
            <Power
                name={name}
                power={power}
            />
            <Hunger
                name={name}
                hunger={hunger}
            />
            <Happiness
                name={name}
                happiness={happiness}
            />
        </Column>
    )
}

export default SpecificStatus;