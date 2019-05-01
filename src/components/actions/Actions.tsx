import React from 'react';
import Column from '../layout/Column';
import Title from '../layout/Title';
import Button from './Button';

type Actions = {
    performingAction: boolean;
    actionMethods: {
        handleFeed: () => void;
        handlePlay: () => void;
    };
    action: string;
}

const Actions: React.FC<Actions> = (props) => {
    const { performingAction, action } = props;
    const { handleFeed, handlePlay } = props.actionMethods;
    return (
        <Column>
            <Title size={40} text="Actions" />
            {
                performingAction ?
                    <span>{`Monster is ${action} right now, please wait...`}</span>
                    :
                    <Column>
                        <Button handleAction={handleFeed} name="Feed" />
                        <Button handleAction={handlePlay} name="Play" />
                    </Column>
            }
        </Column>
    )
}

export default Actions;