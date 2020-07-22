import React, { useState } from 'react';

// CLASS EXAMPLE OF ADDING HELPER METHOD
// class Accordion extends Component {
//     onTitleClick() {
//         console.log('title was clciked.')
//     }
//     render() {

//     }
// }


const Accordion = ({ items }) => {
    // first param, peace of state w e want to change
    // second param, is a function to update the piece of state - also auto rerenders - setter function
    // the = null is the initial value which is empty - kinda like a default - its initial value, it leaves when state comes in
    // You can have multiple states, you would jsut rewrite this line however many times and put in the default param
    const [activeIndex, setActiveIndex] = useState(null);

    // the param is passed from the click
    const onTitleClick = (index) => {
        // the function takes in a param and sets the piece of state to it
        setActiveIndex(index);
    } 
    // Index is optional, use this if you wanting the object along with the index of the object.
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;