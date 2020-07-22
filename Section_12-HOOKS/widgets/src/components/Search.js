import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results)
    
    // YOU CANNOT USE ASYNC/AWAIT DIRECTLY to useEffect
    useEffect(() => {
        // helper function
        const search = async () => {
            const { data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            // the state is erroring out because the srsearch is empty upon first render
            // this checks to see if it exists before running
            if(term) {
                setResults(data.query.search);
            };
        };

        search();
        // This second arguement controlls when useEffect executes
        // Their are three different options.
        // 1. an array with a param
        // 2. an empty array
        // 3. no array or arguement
        // second argument could listen to more than one state
    }, [term]);

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