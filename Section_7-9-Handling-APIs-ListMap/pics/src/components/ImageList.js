import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // map is a function that loops over an original list and creates a new one.
    // Deconstruction doesnt always work
    const images = props.images.map((image) => {
        // Giving the key to the object below so REACT wont keep rendering the same image over and over if theres a match
       return (
            <ImageCard key={image.id} image={image} />
       );
    });

    return (
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageList;