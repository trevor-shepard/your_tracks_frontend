import * as ApiUtil from '../util/api_utils';


export const RECIEVE_USER_TRACKS = "RECIEVE_USER_TRACKS";
export const CLEAR_USER_TRACKS = "CLEAR_USER_TRACKS";


// Action Creators

export const recieveUserTrackCounts = (track_data) =>({
    type: RECIEVE_USER_TRACKS,
    track_data
    })

export const clearUserTracks = () => ({
    type: CLEAR_USER_TRACKS
})


// Thunk Actions

export const requestCurrentUserTrackCounts = (days) => dispatch => {
    ApiUtil.request_user_stats(days)
    .then((resp) => {dispatch(recieveUserTrackCounts(resp.data.track_data))})
}