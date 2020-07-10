import React from 'react';
import Accordion from './Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite javascript library among engineers'
    },
    {
        title: 'How to use React?',
        content: 'Use react by creating components'
    }
];

export default () => {


    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
