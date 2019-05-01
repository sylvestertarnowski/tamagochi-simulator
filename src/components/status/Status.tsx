import React from 'react';
import Column from '../layout/Column';

type Props = {
    name: string;
    happiness: number;
    power: number;
}

const Status: React.FC<Props> = (props) => {
    const { name, happiness, power } = props;
    return <Column>{`The Monster name is ${name}, and its happiness level is ${happiness}. Current Power Level: ${power}`}</Column>
}

export default Status;