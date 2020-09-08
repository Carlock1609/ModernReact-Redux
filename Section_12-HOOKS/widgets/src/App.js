import React, { useState } from 'react';

// import { BrowserRouter as Router, Link, Route, BrowserRouter } from 'react-router-dom';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    
    return (
        <div>
            <Header />
            {/* Parent recieves child Accordion */}
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search" >
                <Search />
            </Route>
            <Route path="/dropdown" >
                <Dropdown 
                    label="Select a color" 
                    options={options} 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    />
            </Route>
            <Route path="/translate" >
                <Translate />
            </Route>
        </div>
    );
};


// <Route to="/translate" component={Translate}>Translate</Route>
//             <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//             {showDropdown ?
//                 <Dropdown selected={selected} onSelectedChange={setSelected} options={options} /> 
//                 :
//                 null
//             }
//             <Accordion items={items} />
//             <Search />

// THIS IS A DIFFERENT APPROACH RATHER THAN USING ROUTER - react-dom-router
// WE MADE OUR OWN ROUTER COMPONENT THAT ESSIENTIALLY ACTS AS SUCH
// const showAccordion = () => {
//     if (window.location.pathname === '/') {
//         return <Accordion items={items} />;
//     }
// };

// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />;
//     }
// };

// const showDropdown = () => {
//     if (window.location.pathname === '/dropdown') {
//         return <Dropdown />;
//     }
// };

// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Translate />;
//     }
// };

// const showComponent = (route, component) => {
//     return window.location.pathname === route
//         ? component
//         : null;
// };