import React, { useEffect } from 'react';

function MsgAnimation() {
    const [ dots, setDots ] = React.useState("");

    useEffect(() => {
        setInterval(() => setDots(prevDots => prevDots + ". "), 1000)
    }, [])

    return (
        <span>{dots}</span>
    )
}

export default MsgAnimation;