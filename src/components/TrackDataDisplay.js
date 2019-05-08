import React from 'react';
// song name, artist, playcount



const TrackDataDisplay = ({ track_data }) => {
    
    return (
        <div>
            <div>{ track_data.track.name } by { track_data.track.artist[0].name }</div>
            <div>{ track_data.count }</div>
        </div>
    )
};

export default TrackDataDisplay;