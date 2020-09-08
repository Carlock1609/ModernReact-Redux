import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDRghBqsFRAkfLmaqcqQlA6xvG2Wtcmoi0';

// CUSTOM HOOK
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);

        // renderes each time
    }, [defaultSearchTerm]);

      // This only runs on the initial rendering of the page to fill the feed
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${KEY}`
            }

        });

        setVideos(response.data.items);

        // setSelectedVideo(response.data.items[0]);
    };
    
    // returning values from custom hook
    return [videos, search];
};

export default useVideos;