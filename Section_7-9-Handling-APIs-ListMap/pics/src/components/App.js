import React from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

// This contains all components and works as a director to determine which component should be displayed.
// If we turn this into a class component, we can accept callbacks from the children components
class App extends React.Component {
    state = {
        // default is expecting an array - initialized as an array
        images: []
    };

    // This is where we make the axios call
    onSearchSubmit = async (term) => {
        // Logging the prop that was sent up from child component
        // console.log(term)
        try {
            // unsplash IS AXIOS, check api folder
            const response = await unsplash.get('search/photos', {
                // setting the query as the term passed in
                params: {
                    query: term
                },
            });
            // console.log(this)
            // console.log(response.data.results)
            this.setState({ images: response.data.results });
        } catch(err) {
            console.log(err.message)
        }
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    };
};

export default App;