import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    const displaySong =  props.song !== null ? props.song.title : ''

    return (
        <div>
            {displaySong}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);