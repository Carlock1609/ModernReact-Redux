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
        this.state = { lat: null };

        // This is going to start when initialized
        window.navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    // we called setState to update the state
                    await this.setState({ lat: position.coords.latitude });

                    //  We did not!!
                    // DONT DO THIS. We can only do this on the initial state on line 27
                    // THIS IS DIRECT ASSIGNMENT
                    // this.state.lat = position.coords.latitude
                } catch(err) {
                    console.log(err)
                }
            }
        );
    };

    // React says we HAVE to define render!!!
    render() {
        // 'this' is going into the constructor's state property
        return <div>Latitude: {this.state.lat}</div>
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);