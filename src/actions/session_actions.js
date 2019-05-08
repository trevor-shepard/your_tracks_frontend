import * as SessionApiUtil from '../util/api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

// Action Creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})


// Thunk Actions
export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
    .then(res => res.json())
    .then(
        (response) => {
            debugger
            localStorage.setItem('token', response.token)
            const currentUser = {
                token: response.token,
                username: response.user.username
            }
            return dispatch(receiveCurrentUser(currentUser))
        },
        (response) => dispatch(receiveSessionErrors(response.responseJSON))
        )
);

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    return dispatch(logoutCurrentUser())
}

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
    .then(res => res.json())
    .then(
        (response) => {
            
            localStorage.setItem('token', response.token)

            dispatch(receiveCurrentUser(response))
        },
        (response) => dispatch(receiveSessionErrors(response.responseJSON))
    )
);