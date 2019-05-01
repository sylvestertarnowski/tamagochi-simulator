import React from 'react';

type StatsBar = {
    value: number;
    inverse: boolean;
}

const StatsBar: React.FC<StatsBar> = (props) => {
    const { value, inverse } = props;

    const outerBar = {
        border: "2px solid black",
        height: "20px",
        width: "100px",
    }

    let color: string;
    inverse ? color = "red" : color = "green";

    const innerBar = {
        background: color,
        height: "20px",
        width: value.toString() + "%",
        maxWidth: "100px",
    }

    return (
        <div>
            <div style={outerBar}>
                <div style={innerBar}>{value >= 0 ? value : 0}</div>
            </div>
        </div>
    )
}

export default StatsBar;