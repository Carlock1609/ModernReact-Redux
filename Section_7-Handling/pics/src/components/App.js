import React from 'react';
import SearchBar from './SearchBar'

// This contains all components and works as a director to determine which component should be displayed.
// If we turn this into a class component, we can accept callbacks from the children components
class App extends React.Component {
    onSearchSubmit(term) {
        // Logging the prop that was sent up from child component
        console.log(term)
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;