import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {

    // Helper function
    const renderList = () => {
        return props.songs.map((song) => (   
            <div className="item" key={song.title}>
                <div className="right floated content">
                    {/* onClick handler for button that passes song to prop */}
                    <button onClick={() => props.selectSong(song)} className="ui button primary">
                        Select
                    </button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        ));
    };

    return (
        <div className="ui divided list">
            {renderList()}
        </div>
    );
};

// Taking our state object, and to eventually show it to props
// state is ALL the data from the store
const mapStateToProps = (state) => {
    console.log(state)
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    };
};

// connecting SongList to the Provider - it returns a function, in this case SongList
// first param calls the function, second envokes function
// Connect kinda works as the dispatch to the store
export default connect(mapStateToProps, {
    // imported actions into object - passing prop to redux state
    selectSong
})(SongList);