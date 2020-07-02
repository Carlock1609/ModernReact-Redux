import React from 'react';

// Reusable component
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
};

// This is a default prop incase on App.js we do not specifiy
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;