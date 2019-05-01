import * as React from 'react';

type Button = {
    handleAction: () => void;
    name: string;
}

const Button: React.FC<Button> = (props) => {
    const { handleAction, name } = props;

    return (
        <button onClick={handleAction}>
            {name}
        </button>
    )
}

export default Button;