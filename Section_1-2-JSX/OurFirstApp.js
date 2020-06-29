import './styles.css';
import React, { useState } from 'react';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

// The app produces JSX and the JSX lets REACT know what content to display
export default function App() {
    const [language, setLanguage] = useState('ru');
    const [ text, setText] = useState('');

    // JSX can use regular HTML elements or Other React components
    // JSX goes line by line at a time checking if it is a DOM element and displays it. If it runs into a component then it jumps into that component and display its JSX
    return (
        // Is this a DOM Element? YES. Show it on screen and move on.
        <div>
            {/* This is not a DOM element. Then call the component and get the JSX back */}
            <Field label="Enter English" onChange={setText} value={text} />
            <Languages language={language} onLanguageChange={setLanguage} />
            <hr/>
            <Translate text={text} language={language} />
        </div>
    );
};