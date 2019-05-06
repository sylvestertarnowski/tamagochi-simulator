import React from 'react';

type Props = {
    name: string;
    happiness: number;
    health: number;
    hunger: number;
    power: number;
}

const SpecificStatus: React.FC<Props> = (props) => {
    const { happiness, hunger, power, health } = props;

    return (
        <div>This is specific Status, and power is: {power}</div>
    )
}

export default SpecificStatus;