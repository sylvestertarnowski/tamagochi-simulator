import React from 'react';
import Column from '../layout/Column';
import Title from '../layout/Title';
import Button from './Button';
import ActionMessage from './ActionMessage';

type Actions = {
    performingAction: boolean;
    actionMethods: {
        handleFeed: () => void;
        handlePlay: () => void;
        handleSleep: () => void;
        handleTrain: () => void;
    };
    action: string;
}

const Actions: React.FC<Actions> = (props) => {
    const { performingAction, action } = props;
    const { handleFeed, handlePlay, handleSleep, handleTrain } = props.actionMethods;
    return (
        <Column>
            <Title size={40} text="Actions" />
            {
                performingAction ?
                    <ActionMessage action={action} />
                    :
                    <Column>
                        <Button handleAction={handleFeed} name="Feed" />
                        <Button handleAction={handlePlay} name="Play" />
                        <Button handleAction={handleSleep} name="Sleep" />
                        <Button handleAction={handleTrain} name="Train" />
                    </Column>
            }
        </Column>
    )
}

export default Actions;