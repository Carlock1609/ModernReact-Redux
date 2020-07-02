import React from 'react';

// WE KNOW this should be a class based component because we are using state and needing the form to change
// TO ACCESS PROPS IN CLASS COMPONENT USE this.props
class SearchBar extends React.Component {
    // CONTROLLED ELEMENT
    state = { term: '' };

    // EVENT HANDLER
    // THIS MAKES IT SO THE FORM CAN SUBMIT ITSELF AND REFRESH
    onFormSubmit = (event) => {
        event.preventDefault();

        // sending this prop to the parent component
        this.props.onSubmit(this.state.term);
        // REALLY COMMON ERROR
        // console.log(this.state.term);
    };

    // UNCONTROLLED ELEMENT
    // onChange points to this method/function
    // Naming convention should be like so. On the Input's Changes
    // onInputChange(event) {
        // this logs every keystroke because each keystroke is a change.
        // console.log(event.target.value)
    // };

    // Example below for a different event listener
    // onInputClick() {
    //     console.log('Input was clicked');
    // };
    // This goes on input
    // onClick={this.onInputClick}

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    {/* OR INLINE */}
                {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
                    <div className="field">
                        <label>Image Search</label>
                        {/* CONTROLLED */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})} />
                        {/* UNCONTROLLED BELOW */}
                        {/* onChange listens for any changes to onInputChange - perenthesis will run when rendered, we don't want that, we just want to point to it */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* OR alternate */}
                        {/* This makes it so we don't need the function above. ONLY works for single line operations */}
                        {/* <input type="text" onChange={(event) => console.log(event.target.value)} /> */}
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;

// NOTES
// onChange() is a callback