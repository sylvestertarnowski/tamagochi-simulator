import React from 'react';

type Props = {
    name: string;
    happiness: number;
    power: number;
    hunger: number;
}

const GeneralStatus: React.FC<Props> = (props) => {
    const { name, happiness, power } = props;
    return (
        <span>{`The Monster name is ${name}, and its happiness level is ${happiness}. Current Power Level: ${power}`}</span>
    )
}

export default GeneralStatus;


