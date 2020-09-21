import { combineReducers } from 'redux';
// Reducers

// STATIC EXAMPLE HARD-CODED
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:35'},
        { title: 'All start', duration: '3:15'},
        { title: 'I Want It That Way', duration: '1:15'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    // checks if it is song selected and returns payload
    if( action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    // returns currently selected song
    return selectedSong;
};

// combining the reducers to an object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

