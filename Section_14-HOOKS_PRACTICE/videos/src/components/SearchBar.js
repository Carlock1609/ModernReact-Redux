import React, { useState } from 'react';

// Refactored function component from below class component
const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );
};


export default SearchBar;




// THIS IS THE CLASS VERSION OF ABOVE
// class SearchBar extends React.Component {
//     state = {
//         term: ''
//     };

//     onInputChange = (event) => {
//         this.setState({ term : event.target.value })
//     };
//     onFormSubmit = (event) => {
//         event.preventDefault();
        
//         // TODO: Make sure we call callback form parent component
//         this.props.onFormSubmit(this.state.term)
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label htmlFor="">Video Search</label>
//                         <input type="text" value={this.state.term} onChange={this.onInputChange} />
//                     </div>
//                 </form>
//             </div>
//         );
//     };
// };