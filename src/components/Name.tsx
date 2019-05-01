import React from 'react';

type Props = {
    name: string;
};

const Name: React.FC<Props> = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

export default Name;