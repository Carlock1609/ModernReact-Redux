import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('building');
    // This state is listening for the another piece of state
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // debounced effect
    // This is listening for 'term' state, that is setting debouncedTerm to whatever term is
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 2000)

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);
    
    // This is looking for any changes to debouncedTerm and then runs the search
    useEffect(() => {
         // helper function
         const search = async () => {
            const { data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            
            setResults(data.query.search);
            // the state is erroring out because the srsearch is empty upon first render
            // this checks to see if it exists before running
        };

        search();
    }, [debouncedTerm]);

    // THIS IS A LESS CORRECT WAY OF WRITING THIS USEEFFECT, LOOK AT EXAMPLE ABOVE USING DEBOUNCED TERM
    // YOU CANNOT USE ASYNC/AWAIT DIRECTLY to useEffect
    // useEffect(() => {

        // IF YOU HAD A DEFAULT SEARCH, this will load those results initially
        // BUG results.length NEEDS to be added to the array below because it is a piece of state were listening to
        // if(term && !results.length) {
        //     search();
        // } else {
        //     // Sets timeout and waits for term to be changed, then runs
        //     const timeoutId = setTimeout(() => {
        //         if(term) {
        //             console.log('CLEANUP')
        //             search();
        //         };
        //     }, 2000);
    
        //     // Cleanup function - if rerendered by useEffect, this returns and resets the timeOut
        //     return () => {
        //         clearTimeout(timeoutId);
        //     };
        // }
        
        
        // This second arguement controlls when useEffect executes
        // Their are three different options.
        // 1. an array with a param
        // 2. an empty array
        // 3. no array or arguement
        // second argument could listen to more than one state

        // BUG both elements are listeners, so it rerenders twice
    // }, [term, results.length]);

    const renderResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go!</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* This could cause a security attack. Cross site rendering attack */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    );
};

export default Search;