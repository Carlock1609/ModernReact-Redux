// Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// You can also reference a function outside of the App inside the JSX
// I think the functions have to be outside of the App component. BUT you can still reference it inside it 
function getButtonText() {
    return 'Click on me!'
}

// Create a react component
const App = () => {
    // ANY JS VARIABLES CAN BE REFERENCED INSIDE JSX
    const buttonText = 'Click Me!';
    const buttonObject = {
        text: 'click me!'
    }; 

    return (
        <div>
            <label htmlFor="name" style={{ backgroundColor: 'red', color: 'blue'}} className="label">Enter name: </label>
            <input type="text" id="name" />
            {/* ACCESSING VARIABLES AND FUNCTIONS */}
            <button className="btn btn-dark">{buttonText}</button>
            {/* OR */}
            {/* You can also reference a function outside of the App inside the JSX */}
            <button className="btn btn-dark">{getButtonText()}</button>
            <button className="btn btn-dark">{buttonObject.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



