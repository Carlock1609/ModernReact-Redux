import React from 'react';

const ImageList = (props) => {
    // map is a function that loops over an original list and creates a new one.
    const images = props.images.map(({id, urls, alt_description}) => {
        // Giving the key to the object below so REACT wont keep rendering the same image over and over if theres a match
       return <img key={id} src={urls.small} alt={alt_description}/>
    });

    return (
        <div>{images}</div>
    );
};

export default ImageList;