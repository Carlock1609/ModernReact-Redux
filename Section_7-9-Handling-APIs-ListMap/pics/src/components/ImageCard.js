// PURPOSE OF THIS COMPONENT IS TO SHOW ONE IMAGE
import React from 'react';


class ImageCard extends React.Component {
    // we needed props to use DOM
    // This is how we get a handle on random generated tags
    constructor(props) {
        super(props);

        // SETTING STATE because of setSpans setState
        this.state = { spans: 0 };

        // creating ref to use DOM selection on an element
        // I could also make ANOTHER ref to go on the div
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        // listener thats waitign for the load event
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {
        const { alt_description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* imageRef is linked to the constructor */}
                <img ref={this.imageRef} src={urls.regular} alt={alt_description}/>
            </div>
        );
    };
};

export default ImageCard;