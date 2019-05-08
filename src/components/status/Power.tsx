import React from 'react';

type P = {
    name: string;
    power: number;
}

const Power: React.FC<P> = (props) => {
    const { name, power } = props;
    return (
        <div>
            {
                power > 80 ?
                <span>Your {name} is powerful.</span> :
                <span>{name} still needs some training to reach his full potential.</span>
            }
        </div>
    )
}

export default Power;