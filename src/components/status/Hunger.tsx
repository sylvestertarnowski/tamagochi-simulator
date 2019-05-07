import React from 'react';

type P = {
    name: string;
    hunger: number;
}

const Hunger: React.FC<P> = (props) => {
    const { hunger, name } = props;
    if (hunger >= 80) {
        return (
            <div>{name} is starving! Feed it quickly!</div>
        )
    } else if (hunger >= 50) {
        return (
            <div>Your {name} needs to eat.</div>
        )
    } else if (hunger >= 20) {
        return (
            <div>{name} could eat something, but it can wait.</div>
        )
    } else {
        return (
            <div>{name} isn't hungry right now. Try feeding him later.</div>
        )
    }
}

export default Hunger;