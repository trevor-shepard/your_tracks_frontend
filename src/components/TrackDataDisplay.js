import React from 'react';

const TrackDataDisplay = ({track_data}) => {
    const title = track_data[0]
    const value = track_data[1]
    return (
        <div>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    )
};

export default TrackDataDisplay;