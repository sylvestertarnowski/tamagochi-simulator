import React from 'react';

type StateObject = {
    dots: string[];
}

const MsgAnimation: React.FC = () => {
    const state: StateObject = {
        dots: []
    }
    const animation = () => {
        while(true) {
            setTimeout(() => {
                state.dots.push(".");
            }, 500);
        }
    }

    animation();

    return (
        
        <span>{state.dots.join(" ")}</span>
    )
}

export default MsgAnimation;