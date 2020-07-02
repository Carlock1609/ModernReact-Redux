import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    // constructor only has one job to contain/initialize the state
    // constructor(props) {
    //     // MUST CALL THIS FUNCTION - super - Super is a reference to the parents constructor
    //     super(props);
    //     // state object
    //     // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.sate
    //     this.state = { lat: null, errorMessage: '' };  
    // };
    // This is the equivilant of above - constructor - this is less code and easier to understand
    // THIS babel will also automatically compile the constructor for us with the state, this is a shortcut. Above isnt needed
    state = { lat: null, errorMessage: '' };
    
    // LIFE CYCLE METHODS
    componentDidMount() {
        // This is going to start when initialized
        window.navigator.geolocation.getCurrentPosition(
            // we called setState to update the state - this rerenders the component
            position => this.setState({ lat: position.coords.latitude }),
                //  We did not!!
                // DONT DO THIS. We can only do this on the initial state on line 27
                // THIS IS DIRECT ASSIGNMENT
                // this.state.lat = position.coords.latitude
            err => this.setState({ errorMessage: err.message })
            
        );
    };
    // componentDidMount() {
    //     console.log('My component was rendered to the screen');
    // };

    // componentDidUpdate() {
    //     console.log('My component was jsut updated - rerendered');
    // };

    // HELPER method
    renderContent() {
        // 'this' is going into the constructor's state property
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        // reusable component
        return <Spinner message='Please accept location request...' />
    }

    // React says we HAVE to define render!!!
    // This is conditional rendering
    //  You should try to only have one return in the render. THATS why we use the helper method
    render() {
        // 'this' is going into the constructor's state property
        return (
            <div className="border red">
                {this.renderContent()};
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);