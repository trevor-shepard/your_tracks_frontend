import React from 'react';

import TrackDataDisplay from './TrackDataDisplay'


const TrackDataIndex = ({track_data}) => {
    const track_index = Object.entries(track_data).map(track_data => {
        return <TrackDataDisplay track_data={track_data[1]}/>
    })
    return (
        <div>
            {track_index}
        </div>
    )
}

export default TrackDataIndex;