import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _getUsers} from '../utils/_DATA.js'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_OUT = 'LOG_OUT'


export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}


export function handleSetAuthUser(id) {
  return (dispatch) => {
    dispatch(showLoading());

    return _getUsers()
      .then((users) => {
        const auth = Object.keys(users).filter(user => user === id);
        dispatch(setAuthedUser(id));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}