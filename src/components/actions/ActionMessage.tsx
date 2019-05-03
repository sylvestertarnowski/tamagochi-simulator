import React from 'react';
import MsgAnimation from './MsgAnimation';

type ActionMessage = {
    action: string;
};

const ActionMessage: React.FC<ActionMessage> = (props) => {
    const { action } = props;
    return (
        <span>{`Monster is ${action} right now, please wait`}<MsgAnimation /></span>
    )
}


export default ActionMessage;