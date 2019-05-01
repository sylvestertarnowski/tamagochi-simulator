import React from 'react';
import Column from '../layout/Column';
import Title from '../layout/Title';
import Button from './Button';

type Actions = {
    performingAction: boolean;
    handleFeed: () => void;
    action: string;
}

const Actions: React.FC<Actions> = (props) => {
    const { performingAction, handleFeed, action } = props;
    return (
        <Column>
            <Title size={40} text="Actions" />
            {
                performingAction ?
                <span>{`Monster is ${action} right now, please wait...`}</span> :
                <Button
                    handleAction={handleFeed}
                    name="Feed"
                />
            }
        </Column>
    )
}

export default Actions;