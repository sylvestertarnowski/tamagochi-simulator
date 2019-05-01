import React from 'react';
import Column from '../layout/Column';

type Actions = {
    handleFeed: () => void;
}

const Actions: React.FC<Actions> = (props) => {
    return <Column>
        <h2>Actions</h2>
        <button onClick={props.handleFeed}>Feed</button>
    </Column>
}

export default Actions;