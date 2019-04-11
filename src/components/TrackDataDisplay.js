import React from 'react';
// song name, artist, playcount



const TrackDataDisplay = ({track_data}) => {
    const title = track_data[0]
    const value = track_data[1]
    return (
        <div className="track-display">
            <div className="track-title">{title}</div>
            <div className="play-count">{value}</div>
        </div>
    )
};

export default TrackDataDisplay;