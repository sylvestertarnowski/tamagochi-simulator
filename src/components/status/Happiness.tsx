import React from 'react';

type P = {
    name: string;
    happiness: number;
}

const Happiness: React.FunctionComponent<P> = (props) => {
    const { name, happiness } = props;

    return (
        <div>{name} happiness currently: {happiness}</div>
    )
}

export default Happiness;