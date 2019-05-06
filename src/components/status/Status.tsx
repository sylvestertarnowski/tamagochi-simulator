import React from 'react';
import Column from '../layout/Column';
import GeneralStatus from './GeneralStatus';
import SpecificStatus from './SpecificStatus';

type Props = {
    name: string;
    happiness: number;
    health: number;
    hunger: number;
    power: number;
}

const Status: React.FC<Props> = (props) => {
    const { name, happiness, health, power, hunger } = props;
    return (
        <Column>
            <GeneralStatus 
                name={name}
                happiness={happiness}
                hunger={hunger}
                power={power}
            />
            <SpecificStatus 
                name={name}
                happiness={happiness}
                health={health}
                hunger={hunger}
                power={power}
            />
        </Column>
    )
}

export default Status;