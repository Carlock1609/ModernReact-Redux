import React from 'react';
import ReactDOM from 'react-dom';

// Example of Function based component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         async (position) => {
//             try {
//                 await console.log(position)
//             } catch(err) {
//                 console.log(err)
//             }
//         }
//     );

//     return <div>Latitude: </div>;
// };

// Example of Class based component
// Class example to render new JSX on page
class App extends React.Component {
    // One way of initializing state - constructor method
    constructor(props) {
        // MUST CALL THIS FUNCTION - super - Super is a reference to the parents constructor
        super(props);
        // state object
        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.sate
        this.state = { lat: null, errorMessage: '' };

        // This is going to start when initialized
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState to update the state
                this.setState({ lat: position.coords.latitude });
            },
                //  We did not!!
                // DONT DO THIS. We can only do this on the initial state on line 27
                // THIS IS DIRECT ASSIGNMENT
                // this.state.lat = position.coords.latitude
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    };

    // React says we HAVE to define render!!!
    // This is conditional rendering
    render() {
        // 'this' is going into the constructor's state property
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        
        return <div>Loading!</div>;
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);