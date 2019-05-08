import React from 'react';

type P = {
    name: string;
    happiness: number;
}

const Happiness: React.FunctionComponent<P> = (props) => {
    const { name, happiness } = props;

    if ( happiness >= 90 ) {
        return <div>{name} loves you very much!</div>
    } else if ( happiness >= 75 ) {
        return <div>{name} is very happy - good job!</div>
    } else if ( happiness >= 40 ) {
        return <div>Your {name} is in pretty good mood - but could be better.</div>
    } else if ( happiness >= 25 ) {
        return <div>{name} doesn't like you very much...  maybe some fun activity could help?</div>
    } else {
        return <div>{name} is very sad and doesn't like you... try to make it up to him with some play time.</div>
    }
}

export default Happiness;