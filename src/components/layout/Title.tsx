import React from 'react';

type Title = {
    text: string;
    size: number;
}

const Title: React.FC<Title> = (props) => {
    const { size, text } = props;
    const style = {
        fontSize: size,
    }
    return (
        <span style={style}>
            {text}
        </span>
    )
}

export default Title;