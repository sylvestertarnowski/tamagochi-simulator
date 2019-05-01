import React from 'react';
import Title from '../layout/Title';
import StatsBar from './StatsBar';

type StatsItem = {
    name: string;
    currentValue: number;
}

const StatsItem: React.FC<StatsItem> = (props) => {
    const { name, currentValue } = props;

    let inverse: boolean;

    name === "Hunger" ? inverse = true : inverse = false;

    return (
        <div className="stats-item">
            <Title size={20} text={name} />
            <StatsBar value={currentValue} inverse={inverse} />
        </div>
    )
}

export default StatsItem;