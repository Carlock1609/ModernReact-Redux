import React from 'react';
import SearchBar from './SearchBar'

// This contains all components and works as a director to determine which component should be displayed.
const App = () => {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar />
        </div>
    );
};

export default App;