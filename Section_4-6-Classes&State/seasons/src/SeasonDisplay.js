import React from 'react';
import './SeasonDisplay.css';

// Tenary refactor
const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, its cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

// Functional component
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    // refactored to
    const {text, iconName } = seasonConfig[season]; // { text, iconName }

    return (
        // make sure the root element classname is the same name as the component
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive icon`} />
        </div>
    );
};

// THIS IS THE difference between the functions and which one is the component you are exporting
export default SeasonDisplay;