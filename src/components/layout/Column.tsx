import React from 'react';

const Column: React.FC = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Column;