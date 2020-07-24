import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    // you can make multiple ref's you just need to execute
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = ((event) => {
            // useRef example - assign useRef to element is like domselection. Contain is with every Dom
            if(ref.current.contains(event.target)) {
                // short circuit if incorrect
                return;
            }

            setOpen(false)
        });

        document.body.addEventListener('click', onBodyClick);

        // cleanup function
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null
        };

        return (
            // Were adding a eventHandler and it passes itself back to parent
            <div onClick={() => onSelectedChange(option)} key={option.value} className="item">
                {option.label}
            </div>
        );
    });
    // console.log(ref)
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label htmlFor="" className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? `visible transition` : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;