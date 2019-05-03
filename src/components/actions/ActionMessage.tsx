import React from 'react';

type ActionMessage = {
    action: string;
};

const ActionMessage: React.FC<ActionMessage> = (props) => {
    const { action } = props;
    return (
        <span>{`Monster is ${action} right now, please wait...`}</span>
    )
}


export default ActionMessage;