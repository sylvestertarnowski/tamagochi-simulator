import React from 'react';
import Column from '../layout/Column';
import Title from '../layout/Title';
import StatsItem from './StatsItem';

type Stats = {
    happiness: number;
    health: number;
    hunger: number;
    power: number;
}

const Stats: React.FC<Stats> = (props) => {
    const { happiness, health, hunger, power } = props;

    return (
        <Column>
            <Title size={40} text="Stats" />
            <StatsItem name="Happiness" currentValue={happiness}/>
        </Column>
    )
}

export default Stats;