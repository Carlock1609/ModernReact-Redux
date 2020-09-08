import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import youtube from '../apis/youtube';

import useVideos from '../hooks/useVideos';

// const KEY = 'AIzaSyDRghBqsFRAkfLmaqcqQlA6xvG2Wtcmoi0';

// FUNCTION EXAMPLE USED BELOW
const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
        // anytime recieves new list of videos, rerender
    }, [videos]);

    // useEffect(() => {
    //     onTermSubmit('buildings');

    //     // renderes one time - component did mopunt
    // }, []);

    // This only runs on the initial rendering of the page to fill the feed
    // const onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term,
    //             part: 'snippet',
    //             type: 'video',
    //             maxResults: 5,
    //             key: `${KEY}`
    //         }
    //     });

    //     setVideos(response.data.items);
    //     setSelectedVideo(response.data.items[0]);
    // };

    // MOVED THIS INLINE BECAUSE IT IS ONE LINER
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // };

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={video => setSelectedVideo(video)} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;


// THIS IS CLASS EXAMPLE
// class App extends React.Component {
//     state = {
//         videos: [],
//         selectedVideo: null
//     }

//     componentDidMount() {
//         this.onTermSubmit('videos');
//     };

//     onTermSubmit = async (term) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 // q is required by youtube for search, term is the param we passed
//                 q: term,
//                 part: 'snippet',
//                 type: 'video',
//                 maxResults: 5,
//                 key: `${KEY}`
//             }
//         });

//         // multiline setState
//         this.setState({ 
//             videos: response.data.items,
//             selectedVideo: response.data.items[0]
//         });
//     };

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//     };



//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };
// };
